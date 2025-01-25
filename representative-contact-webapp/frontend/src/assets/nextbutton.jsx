import React from "react";
import { ArrowRight } from "./ArrowRight";
import "./style.css";

export const Frame = () => {
  return (
    <div className="frame">
      <div className="button">
        <button className="text-wrapper">Continue</button>

        <ArrowRight className="arrow-right" color="#F5F5F5" />
      </div>
    </div>
  );
};
