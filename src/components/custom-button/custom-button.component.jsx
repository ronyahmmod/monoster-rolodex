import React from "react";
import "./custom-button.styles.scss";

const CustomButton = (props) => {
  return (
    <button className="custom-button custom-button--white" {...props}>
      {props.value}
    </button>
  );
};

export default CustomButton;
