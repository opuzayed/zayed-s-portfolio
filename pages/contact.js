import React from "react";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import ContactUs from "../components/ContactUs";

function contact() {
  return (
    <>
      <Navbar />
      <ContactUs />
      <div>
        <Footer />
      </div>
    </>
  );
}

export default contact;
