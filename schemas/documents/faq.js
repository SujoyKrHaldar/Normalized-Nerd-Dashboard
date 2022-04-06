import moment from "moment";
import { FaQuestionCircle } from "react-icons/fa";

export default {
  name: "faq",
  title: "FAQ",
  icon: FaQuestionCircle,
  type: "document",
  fields: [
    {
      name: "question",
      title: "Question",
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
      name: "body",
      title: "Answer",
      type: "simplePortableText",
      validation: (Rule) => Rule.required(),
    },
  ],

  preview: {
    select: {
      title: "question",
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
