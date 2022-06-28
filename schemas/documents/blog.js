import moment from "moment";
import { FaBlog } from "react-icons/fa";

export default {
  name: "blog",
  title: "Blog",
  icon: FaBlog,
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },

    {
      name: "description",
      title: "Description",
      type: "text",
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
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    // {
    //   name: "tags",
    //   title: "Tags",
    //   type: "array",
    //   of: [{ type: "reference", to: { type: "tags" } }],
    // },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    },
    {
      name: "githubLink",
      title: "Github link",
      type: "url",
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "publishedAt",
      media: "mainImage",
    },
    prepare(selection) {
      const { subtitle } = selection;
      const date = moment(subtitle).format("MMMM Do YYYY, h:mm a");
      return Object.assign({}, selection, {
        subtitle: date && `On ${date}`,
      });
    },
  },
};
