import React from "react";
import AlbumImage from "../AlbumImage/AlbumImage";
import AlbumInfo from "../AlbumInfo/AlbumInfo";
import "./SongCard.css";

const SongCard = ({ album }) => {
  return (
    <div className="songCard-body flex">
      <AlbumImage url={album?.images[0]?.url} />
      <AlbumInfo album={album} />
    </div>
  );
};

export default SongCard;
