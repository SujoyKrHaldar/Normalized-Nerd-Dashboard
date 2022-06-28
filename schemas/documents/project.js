import moment from "moment";
import { FaCodeBranch } from "react-icons/fa";

export default {
  name: "project",
  title: "Project",
  icon: FaCodeBranch,
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
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
        source: "name",
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

    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    },

    {
      title: "Github link",
      name: "github",
      type: "url",
    },

    {
      name: "body",
      title: "Description",
      type: "simplePortableText",
      validation: (Rule) => Rule.required(),
    },
  ],

  preview: {
    select: {
      title: "name",
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
