import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
};
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
    
    {/* replace below with your own Service ID, Template ID and Public Key from your EmailJS account */ }
    
    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_PUBLIC_KEY")
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
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
              {/* <form name="sentMessage" validate onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg">
                  Send Message
                </button>
              </form> */}

              <form
  action="https://formsubmit.io/send/info@upgradeyourchild.in"
  method="POST"
>
  <div className="row">
    {/* Name */}
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

    {/* Email */}
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

    {/* Phone */}
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

    {/* City */}
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

  {/* Interested In - Checkboxes
  <div className="form-group">
    <label><input type="checkbox" name="interest" value="DMIT Test" /> DMIT Test</label><br />
    <label><input type="checkbox" name="interest" value="Midbrain Activation" /> Midbrain Activation</label><br />
    <label><input type="checkbox" name="interest" value="Brain Engineering" /> Brain Engineering</label><br />
    <label><input type="checkbox" name="interest" value="Parent Counseling" /> Parent Counseling</label>
  </div> */}






{/* Interested In - Checkboxes */}
<div className="form-group mt-3">
  <label className="fw-bold d-block mb-2">Interested In:</label>

  <div className="form-check">
    <input
      type="checkbox"
      className="form-check-input"
      name="interest"
      value="DMIT Test"
      id="dmit"
    />
    <label className="form-check-label" htmlFor="dmit">
      DMIT Test
    </label>
  </div>

  <div className="form-check">
    <input
      type="checkbox"
      className="form-check-input"
      name="interest"
      value="Midbrain Activation"
      id="midbrain"
    />
    <label className="form-check-label" htmlFor="midbrain">
      Midbrain Activation
    </label>
  </div>

  <div className="form-check">
    <input
      type="checkbox"
      className="form-check-input"
      name="interest"
      value="Brain Engineering"
      id="be"
    />
    <label className="form-check-label" htmlFor="be">
      Brain Engineering
    </label>
  </div>

  <div className="form-check">
    <input
      type="checkbox"
      className="form-check-input"
      name="interest"
      value="Parent Counseling"
      id="counseling"
    />
    <label className="form-check-label" htmlFor="counseling">
      Parent Counseling
    </label>
  </div>
</div>



















  {/* Optional Message */}
  <div className="form-group">
    <textarea
      name="message"
      className="form-control"
      rows="4"
      placeholder="Your Query (Optional)"
    ></textarea>
  </div>

  {/* Optional Redirect After Submit */}
  <input
    type="hidden"
    name="_redirect"
    value="https://upgradeyourchild.in/thank-you"
  />

  <button type="submit" className="btn btn-custom btn-lg">
    Send Message
  </button>
</form>

            </div>
          </div>
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
          <div className="col-md-12">
            <div className="row ">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : "/"} target="_blank">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li >
                    <a href={props.data ? props.data.instagram : "/" } target="_blank">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : "/"} target="_blank">
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                  <li className="whatsapp-icon">
                    <a href={props.data ? props.data.whatsapp : "/"} target="_blank">
                      <i className="fa fa-whatsapp"></i>
                    </a>
                  </li>
                  <li className="whatsapp-icon">
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
