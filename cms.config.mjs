import { authors, blog, landing, pages } from "./src/cms/collections";

const config = {
  backend: {
    name: "git-gateway",
    branch: "latest",
  },
  media_folder: "public/images",
  public_folder: "/images",
  collections: [blog, authors, pages, landing],
  previewStyles: ["/src/styles/global.css"],
};

export default config;
