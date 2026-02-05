import "./Navbar.scss";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar">
      <div className="container">
        <a className="navbar-brand" href="#">
          odoo
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
          aria-controls="nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="nav">
          <div className="d-flex w-100 align-items-center">
            <ul className="navbar-nav flex-grow-1 justify-content-center">
              <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Products</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Pages</a></li>
              <li className="nav-item"><a className="nav-link" href="#">App</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Docs</a></li>
            </ul>
            <div className="d-flex align-items-center gap-3 ms-lg-3">
              <a className="nav-link p-0" href="#">Sign in</a>
              <button type="button" className="btn btn-light btn-sm">
                Buy now
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
