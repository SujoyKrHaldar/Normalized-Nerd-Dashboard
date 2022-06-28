import { FaImage, FaCode } from "react-icons/fa";

export default {
  title: "Block Content",
  name: "blockContent",
  type: "array",
  of: [
    {
      title: "Block",
      type: "block",
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H1", value: "h1" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
        { title: "Quote", value: "blockquote" },
      ],
      lists: [
        { title: "Bullet", value: "bullet" },
        { title: "Numbered", value: "number" },
      ],
      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
          { title: "Code", value: "code" },
        ],
        annotations: [
          {
            title: "URL",
            name: "link",
            type: "object",
            fields: [
              {
                title: "URL",
                name: "href",
                type: "url",
              },
            ],
          },
        ],
      },
    },
    { title: "Youtube link", type: "youtube" },

    {
      type: "code",
      icon: FaCode,
      title: "Code",
      options: {
        withFilename: true,
        theme: "solarized_dark",
      },
    },
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
    { type: "externalImgUrl", icon: FaImage, title: "External Image" },
  ],
};
