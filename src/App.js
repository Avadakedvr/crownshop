import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import CheckoutPage from './pages/checkout/checkout'
import Header from './components/header/header';
import SignInSignOut from './pages/signin-signout/signin-signout';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions'
import { selectCurrentUser } from './redux/user/user.selector'

import './App.css';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    document.title= "Crown Shop";
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser ({
            id: snapShot.id,
            ...snapShot.data()
          })
        })
      } else {
        setCurrentUser(userAuth)
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path='/signin' 
            render={() => this.props.currentUser 
            ? (<Redirect to='/' />) : (<SignInSignOut />)} 
          />
        </Switch>
      </div>
    )
  }
}

//old
/*const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})*/

const mapStateToProps =  createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
