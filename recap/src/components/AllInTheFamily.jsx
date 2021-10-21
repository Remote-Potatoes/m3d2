import React from "react";

const AllInTheFamily = (props) => {
  console.log("props:", props);
  return (
    <div>
      Look Here:
      <button>WHAT IS IN THE BUTTON</button>
      <div style={{ color: "green" }}>{props.children}</div>
    </div>
  );
};

export default AllInTheFamily;
