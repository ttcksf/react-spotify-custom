import React, { useEffect, useState } from "react";
import { apiClient } from "../../spotify";
import WidgetsCard from "../WidgetsCard/WidgetsCard";
import "./Widgets.css";

const Widgets = ({ artistId }) => {
  const [similar, setSimilar] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [newRelease, setNewRelease] = useState([]);

  useEffect(() => {
    if (artistId) {
      apiClient
        .get(`/artists/${artistId}/related-artists`)
        .then((res) => {
          const a = res.data?.artists.slice(0, 3);
          setSimilar(a);
        })
        .catch((err) => console.log(err));

      apiClient
        .get(`/browse/featured-playlists`)
        .then((res) => {
          const a = res.data?.playlists.items.slice(0, 3);
          setFeatured(a);
        })
        .catch((err) => console.log(err));

      apiClient
        .get(`/browse/new-releases`)
        .then((res) => {
          const a = res.data?.albums.items.slice(0, 3);
          setNewRelease(a);
        })
        .catch((err) => console.log(err));
    }
  }, [artistId]);

  return (
    <div className="widgets-body flex">
      <WidgetsCard title="Similar Artists" similar={similar} />
      <WidgetsCard title="Made For You" featured={featured} />
      <WidgetsCard title="New Releases" newRelease={newRelease} />
    </div>
  );
};

export default Widgets;
