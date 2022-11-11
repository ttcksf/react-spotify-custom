import React, { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import { AiFillPlayCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { apiClient, loginEndpoint } from "../../spotify";
import "./Library.css";

const Library = () => {
  const [playlists, setPlayLists] = useState(null);
  useEffect(() => {
    apiClient.get("me/playlists").then((response) => {
      setPlayLists(response.data.items);
    });
  }, []);

  const navigate = useNavigate();

  const playPlayList = (id) => {
    navigate("/player", { state: { id: id } });
  };
  return (
    <div className="screen-container">
      <div className="library-body">
        {playlists?.map((playlist) => (
          <div
            className="playlist-card"
            key={playlist.id}
            onClick={() => playPlayList(playlist.id)}
          >
            <img src={playlist.images[0]?.url} className="playlist-image" />

            <p className="playlist-title">{playlist.name}</p>
            <p className="playlist-subtitle">{playlist.tracks.total} Songs</p>
            <div className="playlist-fade">
              <IconContext.Provider value={{ size: "50px", color: "#e99d72" }}>
                <AiFillPlayCircle />
              </IconContext.Provider>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Library;
