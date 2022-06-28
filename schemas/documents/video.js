import moment from "moment";
import { MdSlowMotionVideo } from "react-icons/md";

export default {
  name: "video",
  title: "Video",
  icon: MdSlowMotionVideo,
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
      },
    },

    // {
    //   name: "tags",
    //   title: "Tags",
    //   type: "array",
    //   of: [{ type: "reference", to: { type: "tags" } }],
    // },

    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "videoLink",
      title: "Video Link",
      type: "youtube",
    },
    {
      name: "blogLink",
      title: "Blog link",
      description:
        "https://normalizednerd.com/blogs/your-blog-slug, Copy the slug form your blog section.",
      type: "string",
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    },
    {
      name: "body",
      title: "Details",
      type: "simplePortableText",
    },
  ],

  preview: {
    select: {
      title: "title",
      media: "mainImage",
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
