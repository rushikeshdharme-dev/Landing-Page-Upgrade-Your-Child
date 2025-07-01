import React from "react";



export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text text-center">
                <div
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.5)", // semi-transparent dark background
                    display: "inline-block",
                    padding: "20px",
                    borderRadius: "10px",
                  }}
                >
                  <h1
                    style={{
                      color: "#ffffff", // white text
                      textShadow: "1px 1px 4px rgba(0, 0, 0, 0.8)",
                      fontWeight: "bold",
                    }}
                  >
                    {props.data ? props.data.title : "Loading"}
                    <span></span>
                  </h1>
                  <p
                    style={{
                      color: "#f1f1f1",
                      marginTop: "10px",
                    }}
                  >
                    {props.data ? props.data.paragraph : "Loading"}
                  </p>
                  <a
                    href="https://wa.me/919253562003"
                    className="btn btn-custom btn-lg page-scroll mt-3"
                  >
                    Book Free Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
