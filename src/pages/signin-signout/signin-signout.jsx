import React from 'react';
import SignIn from '../../components/sign-in/sign-in'
import SignUp from '../../components/sign-up/sign-up';
import './signin-signout.scss';

const SignInSignOut = () => (
    <div className='sign-in-sign-out'>
        <SignIn />
        <SignUp />
    </div>
)

export default SignInSignOut;