import moment from "moment";
import { GoProject } from "react-icons/go";

export default {
  name: "project",
  title: "Project",
  icon: GoProject,
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },

    {
      title: "Links",
      name: "links",
      type: "array",
      icon: "icon",
      of: [
        {
          title: "Link",
          name: "link",
          type: "object",
          icon: GoProject,
          fields: [
            {
              title: "Url provider",
              name: "UrlProvider",
              type: "string",
            },
            {
              title: "Project url",
              name: "url",
              type: "url",
            },
          ],
        },
      ],
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
      subtitle: "_createdAt",
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
