import React from "react";

function GeneralizedComponent(props) {
  // const styleObject = ;
  return (
    <section
      style={{
        backgroundColor: props.color,
        height: "20vh",
        width: "100vw",
      }}
    ></section>
  );
}

// CommonJs -> module.exports = GeneralizedComponent
export default GeneralizedComponent;
