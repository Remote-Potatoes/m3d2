import React from "react";
import PersonComponent from "./PersonComponent";

function Footer() {
  return (
    <footer>
      Copyright 2021
      <PersonComponent user={{ name: "Anna", from: "Esspain" }} />
    </footer>
  );
}

export default Footer;
