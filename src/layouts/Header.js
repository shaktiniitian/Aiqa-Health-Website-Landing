import { BrowserRouter as Link } from "react-router-dom";

function Header(){
  return (
      <div>
        <div className="preloader">
        <div className="loader">
          <div className="spinner">
            <div className="spinner-container">
              <div className="spinner-rotator">
                <div className="spinner-left">
                  <div className="spinner-circle"></div>
                </div>
                <div className="spinner-right">
                  <div className="spinner-circle"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div><header className="header">
          <div className="navbar-area">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-12">
                  <nav className="navbar navbar-expand-lg">
                    <a className="navbar-brand" href="/">
                      <img src="assets/img/logo.png" alt="Logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="toggler-icon"></span>
                      <span className="toggler-icon"></span>
                      <span className="toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                      <ul id="nav" className="navbar-nav ms-auto">
                        <li className="nav-item">
                          <a className="page-scroll" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                          <a className="page-scroll" href="/plan">Plans</a>
                        </li>
                        {/* <li className="nav-item">
                          <a className="page-scroll" href="/news">News</a>
                        </li>
                        <li className="nav-item">
                          <a className="page-scroll" href="/#testimonials">Testimonials</a>
                        </li> */}
                        <li className="nav-item">
                          <a className="page-scroll" href="/#download">Download</a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </header> 
        </div>

      //   <header id="header">
      //   <div className="container">
      //     <div className="row d-flex align-items-center justify-content-between">
      //     <div className="logo">
      //       <Link to="/">
      //         <img src="assets/img/logo.png" alt="logo" className="img-fluid"/>
      //       </Link>
      //     </div>
      //     </div>
      //   </div>
      // </header>
    )

}

export default Header;