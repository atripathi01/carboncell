import Sidebar from '../siderbar';
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
  return (
    <div className='layoutContainer'>
      <Sidebar />
      <div className='outsideDrawerContainer'>
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
