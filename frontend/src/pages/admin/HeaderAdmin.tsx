import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const HeaderAdmin = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // DELETE THE TOKEN FROM THE SESSION OR LOCAL STORAGE
    sessionStorage.removeItem('token'); // Example for sessionStorage
    // localStorage.removeItem('authToken'); // Example for localStorage

    navigate('/admin-login');
  };

  return (
    <div className="main-header nav-container sticky top-0">
      <div className="px-1 py-2 w-full">
        <div className="navbar flex justify-between items-center">
          {/* Optional: Add a brand or title on the left side if needed */}
          <div className="flex-1"></div> 

          <div className="flex items-center space-x-4">
            <FaUserCircle size={24} className="text-red-500" />
            <button
              onClick={handleLogout}
              className="text-white bg-red-500 px-3 py-1 rounded hover:bg-red-600 transition"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderAdmin;
