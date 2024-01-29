import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            Home
          </Link>
          <div className="d-flex">
            <Link to="/favourite">
              <button className="btn btn-outline-success" type="button">
                Favourite
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
