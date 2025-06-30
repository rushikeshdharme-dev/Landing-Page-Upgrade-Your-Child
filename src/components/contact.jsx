import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Router hook

const initialState = {
  name: "",
  email: "",
  message: "",
};

export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);
  const navigate = useNavigate(); // ✅ for redirection

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => setState({ ...initialState });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    // ✅ Google Sheet Submission
    fetch(
      "https://script.google.com/macros/s/AKfycbwhBhwtz08b5XDCxiDi8WeS_txOry3fxDHCoqHppWPPIcuxU8UoRT9W2KTfcia86K0A/exec",
      {
        method: "POST",
        body: data,
      }
    )
      .then(() => {
        alert("Form submitted successfully!");
        form.reset(); // optional
        navigate("/thank-you"); // ✅ local redirect
      })
      .catch((err) => {
        console.error("Error!", err.message);
        alert("There was an error submitting the form.");
      });

  };

  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Get In Touch</h2>
                <p>
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                </p>
              </div>

              <form onSubmit={handleFormSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Full Name"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="tel"
                        name="phone"
                        className="form-control"
                        placeholder="Phone / WhatsApp"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="city"
                        className="form-control"
                        placeholder="City / Location"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group mt-4">
                  <label className="interest-heading">Interested In:</label>
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    {[
                      { id: "dmit", label: "DMIT Test" },
                      { id: "midbrain", label: "Midbrain Activation" },
                      { id: "be", label: "Brain Engineering" },
                      { id: "pc", label: "Parent Counseling" },
                    ].map((item) => (
                      <div className="checkbox-wrapper-37" key={item.id}>
                        <input
                          type="checkbox"
                          id={item.id}
                          name="interest[]"
                          value={item.label}
                        />
                        <label htmlFor={item.id} className="terms-label">
                          <svg
                            className="checkbox-svg"
                            viewBox="0 0 200 200"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <mask id={`path-${item.id}`} fill="white">
                              <rect width="200" height="200" />
                            </mask>
                            <rect
                              width="200"
                              height="200"
                              className="checkbox-box"
                              strokeWidth="40"
                              mask={`url(#path-${item.id})`}
                            />
                            <path
                              className="checkbox-tick"
                              d="M52 111.018L76.9867 136L149 64"
                              strokeWidth="15"
                            />
                          </svg>
                          <span className="label-text">{item.label}</span>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="form-group mt-3">
                  <textarea
                    name="message"
                    className="form-control"
                    rows="4"
                    placeholder="Your Query (Optional)"
                  ></textarea>
                </div>

                <input
                  type="hidden"
                  name="redirect"
                  value="https://upgradeyourchild.in/thank-you"
                />

                <button type="submit" className="btn btn-custom btn-lg">
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Address
                </span>
                {props.data ? props.data.address : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : "/"} target="_blank">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.instagram : "/"} target="_blank">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : "/"} target="_blank">
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.whatsapp : "/"} target="_blank">
                      <i className="fa fa-whatsapp"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.linkedin : "/"} target="_blank">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

       
      </div>
       {/* Footer */}
        <div id="footer">
          <div className="container text-center">
            <p>
              &copy; {new Date().getFullYear()} Upgrade Your Child™. All rights reserved. <br />
              Designed & Developed by <a href="https://your-portfolio-link.com" target="_blank">TechnoRishi</a>
            </p>
          </div>
        </div>
    </div>
  );
};
