import React from 'react';
import MenuItem from '../menu-item/menu-item';
import './directory.scss';
import {sections} from '../../consts/consts'

class Directory extends React.Component {
  constructor() {
    super()
    this.state = {
      sections: sections,
    }
  }

  render() {
    return(
      <div className='directory-menu'>
        {
          this.state.sections.map(({id, ...otherProps}) => (
            <MenuItem key={id} {...otherProps} />
          ))
        }
      </div>
    )
  }
}

export default Directory;