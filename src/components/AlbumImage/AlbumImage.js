import React from "react";
import "./AlbumImage.css";

const AlbumImage = ({ url }) => {
  return (
    <div className="albumImage flex">
      <img src={url} className="albumImage-art" />
      <div className="albumImage-shadow">
        <img src={url} className="albumImage-shadow" />
      </div>
    </div>
  );
};

export default AlbumImage;
