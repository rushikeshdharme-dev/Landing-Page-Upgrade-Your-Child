import React from "react";

export const Navigation = () => {
  const handleNavItemClick = (e, targetId) => {
    e.preventDefault();

    // Smooth scroll to section
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    // Auto-close in mobile view
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
            <li><a href="#features" onClick={(e) => handleNavItemClick(e, "#features")}>Features</a></li>
            <li><a href="#about" onClick={(e) => handleNavItemClick(e, "#about")}>About</a></li>
            <li><a href="#services" onClick={(e) => handleNavItemClick(e, "#services")}>Services</a></li>
            <li><a href="#portfolio" onClick={(e) => handleNavItemClick(e, "#portfolio")}>Gallery</a></li>
            <li><a href="#testimonials" onClick={(e) => handleNavItemClick(e, "#testimonials")}>Testimonials</a></li>
            <li><a href="#team" onClick={(e) => handleNavItemClick(e, "#team")}>Team</a></li>
            <li><a href="#contact" onClick={(e) => handleNavItemClick(e, "#contact")}>Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
