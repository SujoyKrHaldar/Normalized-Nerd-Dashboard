import moment from "moment";
import { IoMdPaper } from "react-icons/io";

export default {
  name: "papers",
  title: "Papers",
  icon: IoMdPaper,
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },

    {
      name: "link",
      title: "Link",
      type: "url",
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    },
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "publishedAt",
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
