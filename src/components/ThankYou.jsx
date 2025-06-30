import React, { useEffect } from "react";
import { Contact } from "./contact";
import { Navigation } from "./navigation";
import JsonData from "../data/data.json";

export const ThankYou = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // ✅ Fix scroll position
  }, []);

  return (
    <>
      <Navigation />
      <div className="container text-center" style={{ paddingTop: "100px", paddingBottom: "40px" }}>
        <h2>🎉 Thank You!</h2>
        <p>We’ve received your details. Our team will get back to you shortly.</p>
        <a href="/" className="btn btn-custom mt-4">Go to Homepage</a>
      </div>
      <Contact data={JsonData.Contact} />
    </>
  );
};
