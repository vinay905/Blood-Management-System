import { Link } from "react-router-dom";
const Header=()=>{
    return(
        <div>
            <div className="main-header nav-container sticky top-0">
        <div className="px-1 py-5 bg-white w-full">
          <div className="navbar flex items-center justify-between">
            <a className="navbar-brand" href="/">
            <img className="h-8" src="https://templates.bwlthemes.com/blood_donation_preview/images/logo.png" alt="Blood Bank Management System" />
            </a>
            <button
              className="navbar-toggler md:hidden"
              type="button"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => {
                const navbarCollapse = document.getElementById('navbarCollapse');
                navbarCollapse?.classList.toggle('hidden');
              }}
            >
              <span className="navbar-toggler-icon">☰</span>
            </button>
            <div className="navbar-collapse hidden md:flex md:items-center md:justify-end" id="navbarCollapse">
              <ul className="navbar-nav flex flex-col md:flex-row md:space-x-4">
                <li className="nav-item">
                  <Link className="nav-link scrollto" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link scrollto" to="/blood-banks">Blood Banks</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link scrollto" to="/donor-registration">Donor Registration</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link scrollto" to="/request-blood">Request Blood</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
}

export default Header;