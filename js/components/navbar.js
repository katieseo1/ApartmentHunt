import React from 'react';
import * as actions from '../actions/index';
import {Link} from 'react-router';

export default class Navbar extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <header>
          <a href="#" className="logo">ApartmentHunt</a>
          <div className="dropdown">
            <button className="dropbtn"></button>
            <div className="dropdown-content">
              <Link to={'/'} className='nav-list' >
              Search List
              </Link>
              <Link to={'/saved'} className='nav-list' >
              Saved List
              </Link>
              <Link to={'/removed'} className='nav-list' >
              Removed List
              </Link>
            </div>
          </div>
          <nav>
            <ul className='non-mobile'>
              <Link to={'/'} className='nav-list' >
              Search List
              </Link>
              <Link to={'/saved'} className='nav-list' >
              Saved List
              </Link>
              <Link to={'/removed'} className='nav-list' >
              Removed List
              </Link>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}
