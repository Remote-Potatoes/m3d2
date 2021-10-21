import React from "react";

const UPPER_CASE_OFFSET = 64;

function PlayingWithProps(props) {
  const { name } = props;

  const [firstChar] = name;
  const firstCharUpperCased = firstChar.toUpperCase();

  const latterPartOfName = name.slice(1);
  const binaryFirstLetter =
    firstCharUpperCased.charCodeAt(0) - UPPER_CASE_OFFSET;
  //   Anna => 1nna
  // Daniel => 4aniel
  // 70ilipe
  return <div>{binaryFirstLetter + latterPartOfName}</div>;
}

export default PlayingWithProps;
