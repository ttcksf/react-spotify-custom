import React from "react";
import "./Controls.css";
import { IconContext } from "react-icons";
import {
  IoPlaySkipBack,
  IoPlaySkipForward,
  IoPlay,
  IoRepeat,
  IoShuffleOutline,
} from "react-icons/io5";
import { FaPause } from "react-icons/fa";

const Controls = ({ isPlaying, setIsPlaying, handleNext, handlePrev }) => {
  console.log(isPlaying);
  const handleShuffle = () => {};
  const handlePlayPause = () => {
    if (isPlaying) {
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
    }
  };

  const handleRepeat = () => {};
  return (
    <IconContext.Provider value={{ size: "35px", color: "#c4d0e3" }}>
      <div className="controls-wrapper flex">
        <div className="action-btn flex" onClick={handleShuffle}>
          <IoShuffleOutline />
        </div>
        <div className="action-btn flex" onClick={handlePrev}>
          <IoPlaySkipBack />
        </div>
        <div
          className={
            isPlaying ? "play-pause-btn active flex" : "play-pause-btn flex"
          }
          onClick={handlePlayPause}
        >
          {isPlaying ? <FaPause /> : <IoPlay />}
        </div>
        <div className="action-btn flex" onClick={handleNext}>
          <IoPlaySkipForward />
        </div>
        <div className="action-btn flex" onClick={handleRepeat}>
          <IoRepeat />
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default Controls;
