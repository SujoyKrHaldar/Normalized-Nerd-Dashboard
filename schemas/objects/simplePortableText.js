import { FaImage, FaCode } from "react-icons/fa";

export default {
  title: "Simple Portable Text",
  name: "simplePortableText",
  type: "array",
  of: [
    {
      title: "Block",
      type: "block",
      styles: [
        { title: "Normal", value: "normal" },
        { title: "Quote", value: "blockquote" },
      ],
      lists: [],
      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
          { title: "Code", value: "code" },
        ],
      },
    },
    { title: "Youtube link", type: "youtube" },
    {
      type: "code",
      icon: FaCode,
      title: "Code",
      options: {
        theme: "github",
        withFilename: true,
      },
    },
    { type: "externalImgUrl", icon: FaImage, title: "External Image" },
    {
      type: "image",
      icon: FaImage,
      fields: [
        {
          type: "string",
          name: "caption",
          title: "Caption",
          options: {
            isHighlighted: true,
          },
        },
      ],
      options: { hotspot: true },
    },
  ],
};
