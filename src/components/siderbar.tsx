import  { useState } from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';
import { Close, ContactPage, Dashboard, Home, Menu } from '@mui/icons-material';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar-container ${!isOpen ? 'open' : ''}`}>
      <div className='sidebar gradientText'>Carbon Cell</div>
      <button className='toggle-button' onClick={toggleDrawer}>
       { !isOpen ? <Menu />: <Close />}
      </button>
      <div className='sidebar'>
        {/* Navigation items */}
        <ul className='navlist'>
          <li className='items'>
            <NavLink
              className={'itemLink'}
              to='/'
              onClick={toggleDrawer}
              // @ts-ignore
              activeStyle={{ color: 'rgba(0,255,12,1)' }}
            >
              <span>
                <Home sx={{ mx: 1 }} />
              </span>
              Home
            </NavLink>
          </li>
          <li className='items'>
            <NavLink
              className={'itemLink'}
              to='/dashboard'
              onClick={toggleDrawer}
              //   @ts-ignore
              activeStyle={{ color: 'rgba(0,255,12,1)' }}
            >
              <span>
                {' '}
                <Dashboard sx={{ mx: 1 }} />{' '}
              </span>{' '}
              Dashboard
            </NavLink>
          </li>
          <li className='items'>
            <NavLink
              className={'itemLink'}
              to='/contact'
              onClick={toggleDrawer}
              //   @ts-ignore
              activeStyle={{ color: 'rgba(0,255,12,1)' }}
            >
              <span>
                <ContactPage sx={{ mx: 1 }} />
              </span>{' '}
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
