import "./FrontPageHeader.css";
import { Link } from "react-router-dom";

var FrontPageHeader = () => {
  return (
    <div className="container-fluid front-page-header">
      <div className=" row ">
        <div className="branding col-md-4 col-sm-12">
          <img src="./assets/images/logo.png" alt="" className="image-fluid" />
        </div>

        <nav className="navbar navbar-expand-sm bg-light col-md-8 col-sm-12">
          <button
            className="navbar-toggler button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className=" nav collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 menu">
              <Link
                to="/home"
                className="nav-link active"
                aria-current="page"
                href="#"
              >
                <li className="nav-item">Home</li>
              </Link>
              <Link to="/about" className="nav-link" href="#">
                <li className="nav-item">About Us</li>
              </Link>

              <Link to="/contact" className="nav-link">
                <li className="nav-item">Contact Us</li>
              </Link>
              <Link to="/TandC" className="nav-link">
                <li className="nav-item">T&C</li>
              </Link>
              <Link to="/login" className="nav-link">
                <li className="nav-item">Sign In</li>
              </Link>
            </ul>
          </div>
        </nav>

        {/* <div className='nav col-md-8 col-sm-12'>
                    <ul className='menu'>
                        <Link to='/home'><li>Home</li></Link>
                        <Link to='/about'><li>About</li></Link>
                        <Link to='/contact'><li>Contact</li></Link>
                        <Link to='/TandC'><li>T&C</li></Link>
                        <Link to='/login'><li>Sign In</li></Link>
                    </ul>
                </div> */}
      </div>
    </div>
  );
};

export default FrontPageHeader;
