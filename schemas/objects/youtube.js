import React from "react";
import getYouTubeId from "get-youtube-id";
import { FaYoutube } from "react-icons/fa";

const Preview = ({ value }) => {
  const { url } = value;
  const id = getYouTubeId(url);
  if (!id) {
    return <div>No video found</div>;
  }

  return (
    <iframe
      width="100%"
      height="250px"
      src={`https://www.youtube.com/embed/${id}`}
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
  );
};

export default {
  name: "youtube",
  type: "object",
  icon: FaYoutube,
  title: "YouTube Embed",
  fields: [
    {
      name: "url",
      type: "url",
      title: "YouTube video URL",
    },
  ],

  preview: {
    select: {
      url: "url",
    },
    component: Preview,
  },
};
