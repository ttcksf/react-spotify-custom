import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import SidebarButton from "./SidebarButton";
import { MdFavorite } from "react-icons/md";
import { FaGripfire, FaPlay } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
import { apiClient } from "../../spotify";

const Sidebar = () => {
  const [image, setImage] = useState("https://source.unsplash.com/random");
  useEffect(() => {
    apiClient.get("me").then((res) => {
      if (res.data.images.length !== 0) {
        setImage(res.data.images[0].url);
      }
    });
  }, []);
  return (
    <div className="sidebar-container">
      <img src={image} className="profile-img" />
      <div>
        <SidebarButton title="Feed" to="/feed" icon={<MdSpaceDashboard />} />
        <SidebarButton title="Trending" to="/trending" icon={<FaGripfire />} />
        <SidebarButton title="Player" to="/player" icon={<FaPlay />} />
        <SidebarButton
          title="Favorites"
          to="/favorites"
          icon={<MdFavorite />}
        />
        <SidebarButton title="Library" to="/" icon={<IoLibrary />} />
      </div>
      <SidebarButton title="Sign Out" to="/" icon={<FaSignOutAlt />} />
    </div>
  );
};

export default Sidebar;
