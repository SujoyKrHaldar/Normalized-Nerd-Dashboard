import React from "react";
import { FaYoutube } from "react-icons/fa";

// Need to review

const Preview = ({ value }) => {
  console.log(value);
  return <img src={value.url} alt={value.caption} />;
};

export default {
  name: "externalImgUrl",
  type: "object",
  //   icon: FaYoutube,
  title: "External Image",
  fields: [
    {
      name: "url",
      type: "url",
      title: "Image link",
      options: { hotspot: true },
    },
    {
      type: "string",
      name: "caption",
      title: "Caption",
      options: {
        isHighlighted: true,
      },
    },
  ],

  preview: {
    select: {
      url: "url",
    },
    component: Preview,
  },
};
