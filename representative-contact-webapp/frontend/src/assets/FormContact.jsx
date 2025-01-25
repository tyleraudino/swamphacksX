/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const FormContact = ({
  className,
  inputFieldClassName,
  text = "Name",
  text1 = "Value",
  inputFieldClassNameOverride,
  text2 = "Surname",
  divClassName,
  textareaFieldClassName,
  text3 = "Message",
  drag = "https://c.animaapp.com/U8ZJzKLT/img/drag-2.svg",
  buttonGroupClassName,
  text4 = "Submit",
}) => {
  return (
    <div className={`form-contact ${className}`}>
      <div className={`div ${inputFieldClassName}`}>
        <div className="label">{text}</div>

        <div className="input">
          <div className="value">{text1}</div>
        </div>
      </div>

      <div className={`div ${inputFieldClassNameOverride}`}>
        <div className="label">{text2}</div>

        <div className="input">
          <div className="value">{text1}</div>
        </div>
      </div>

      <div className={`div ${divClassName}`}>
        <div className="label">Email</div>

        <div className="input">
          <div className="value">{text1}</div>
        </div>
      </div>

      <div className={`div ${textareaFieldClassName}`}>
        <div className="label">{text3}</div>

        <div className="textarea">
          <div className="text-wrapper">{text1}</div>

          <img className="drag" alt="Drag" src={drag} />
        </div>
      </div>

      <button className={`button-group ${buttonGroupClassName}`}>
        <button className="button">
          <button className="button-2">{text4}</button>
        </button>
      </button>
    </div>
  );
};
