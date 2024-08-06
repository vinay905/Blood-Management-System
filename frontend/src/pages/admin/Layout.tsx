import HeaderAdmin from './HeaderAdmin';
import Sidebar from '../Sidebar'
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="flex h-screen border-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex flex-col flex-1">
        {/* Header */}
        <HeaderAdmin />

        {/* Content Area */}
        <div className="flex flex-col flex-1 overflow-y-auto bg-white shadow-inner">
          <div className="pl-1 pt-1 flex-1">
            {/* Outlet for nested routes */}
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
