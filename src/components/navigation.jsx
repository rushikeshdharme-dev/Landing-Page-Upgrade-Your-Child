import React from "react";

export const Navigation = () => {
  const handleNavItemClick = () => {
    const collapseEl = document.getElementById("bs-example-navbar-collapse-1");
    if (collapseEl && collapseEl.classList.contains("in")) {
      collapseEl.classList.remove("in");
      collapseEl.classList.add("collapse");
    }
  };

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            Upgrade Your Child™
            <p className="mt-4 text-xl text-blue-600 font-medium">
              Because Every Child Deserves to Shine
            </p>
          </a>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#features" className="page-scroll" onClick={handleNavItemClick}>
                Features
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll" onClick={handleNavItemClick}>
                About
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll" onClick={handleNavItemClick}>
                Services
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll" onClick={handleNavItemClick}>
                Gallery
              </a>
            </li>
            <li>
              <a href="#testimonials" className="page-scroll" onClick={handleNavItemClick}>
                Testimonials
              </a>
            </li>
            <li>
              <a href="#team" className="page-scroll" onClick={handleNavItemClick}>
                Team
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll" onClick={handleNavItemClick}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
