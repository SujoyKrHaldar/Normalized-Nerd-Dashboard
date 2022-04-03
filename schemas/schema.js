import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import faq from "./documents/faq";
import blog from "./documents/blog";
import video from "./documents/video";
import author from "./documents/author";
import category from "./documents/category";

import youtube from "./objects/youtube";
import blockContent from "./objects/blockContent";
import simplePortableText from "./objects/simplePortableText";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    blog,
    video,
    author,
    category,
    faq,
    youtube,
    simplePortableText,
    blockContent,
  ]),
});