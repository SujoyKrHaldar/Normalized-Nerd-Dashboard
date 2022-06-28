import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import faq from "./documents/faq";
import blog from "./documents/blog";
import video from "./documents/video";
import tags from "./documents/tags";

import youtube from "./objects/youtube";
import blockContent from "./objects/blockContent";
import simplePortableText from "./objects/simplePortableText";
import externalImage from "./objects/externalImage";
import project from "./documents/project";
import PaperPublish from "./documents/PaperPublish";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    blog,
    video,
    project,
    faq,
    PaperPublish,
    tags,
    youtube,
    externalImage,
    simplePortableText,
    blockContent,
  ]),
});
