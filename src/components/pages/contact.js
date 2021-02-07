import React from "react";
import "../../App.css";
import Footer from "../Footer";
import "../contact.css";

import HeroSection from "../HeroSection";
import App from "../contactpage";

function contact() {
  return (
    <>
      <HeroSection contact={true} />
      <Footer />
    </>
  );
}

export default contact;
