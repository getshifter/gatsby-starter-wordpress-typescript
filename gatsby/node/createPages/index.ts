import { GatsbyNode } from "gatsby";
import { createWPPosts } from "./posts";
import { createWPPages } from "./pages";

export const createPages: GatsbyNode['createPages'] = async (args) => {
    createWPPosts(args)
    createWPPages(args)
}
