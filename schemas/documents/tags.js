import { AiOutlineTags } from "react-icons/ai";

export default {
  name: "tags",
  title: "Tags",
  icon: AiOutlineTags,
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },

    {
      name: "post",
      title: "Post",
      type: "reference",
      to: [{ type: "blog" }, { type: "video" }],
    },
  ],
};
