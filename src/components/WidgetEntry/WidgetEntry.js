import React from "react";
import "./WidgetEntry.css";

const WidgetEntry = ({ title, subtitle, image }) => {
  return (
    <div className="entry-body flex">
      <img src={image} className="entry-image" />
      <div className="entry-right-body flex">
        <p className="entry-title">{title}</p>
        <p className="entry-subtitle">{subtitle}</p>
      </div>
    </div>
  );
};

export default WidgetEntry;
