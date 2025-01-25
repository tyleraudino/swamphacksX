import React from "react";
import { FormContact } from "../../components/FormContact";
import "./style.css";

export const Frame = () => {
  return (
    <div className="frame">
      <FormContact
        buttonGroupClassName="design-component-instance-node"
        className="form-contact-instance"
        divClassName="design-component-instance-node"
        drag="https://c.animaapp.com/U8ZJzKLT/img/drag-4.svg"
        inputFieldClassName="design-component-instance-node"
        inputFieldClassNameOverride="design-component-instance-node"
        text="First Name"
        text1="Include specific topics you want to address in your email."
        text2="Last Name"
        text3="Extra Information for Email Generation"
        text4="Generate"
        textareaFieldClassName="design-component-instance-node"
      />
      <div className="textarea-field">
        <div className="label-2">Response</div>

        <div className="textarea-2">
          <div className="value-2">Dear</div>

          <img
            className="img"
            alt="Drag"
            src="https://c.animaapp.com/U8ZJzKLT/img/drag-4.svg"
          />
        </div>
      </div>
    </div>
  );
};
