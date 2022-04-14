import moment from "moment";
import { GoProject } from "react-icons/go";
import preview from "part:sanity-plugin-icon-picker/preview";

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
      name: "isFeatured",
      title: "Is Featured?",
      type: "boolean",
      initialValue: false,
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
          fields: [
            {
              title: "Choose icon for the project.",
              name: "icon",
              type: "iconPicker",
              options: {
                outputFormat: "react",
              },
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
