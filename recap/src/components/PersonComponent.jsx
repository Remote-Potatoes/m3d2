import React from "react";

function PersonComponent(props) {
  const coolStatus =
    props.isCool == undefined ? "unknown" : props.isCool.toString();
  return (
    <article>
      <h5>Name: {props.user.name}</h5>
      <p>From: {props.user.from}</p>
      <h6>
        Is this person cool? People think the previous statement is {coolStatus}
      </h6>
    </article>
  );
}

export default PersonComponent;
