import { GatsbyNode } from "gatsby";
import {resolve} from 'path'
import {
    Wordpress__Post
} from '../types/graphql-types'
import {
    getPostRelativePath,
} from '../src/helpers/url'

export const createPages: GatsbyNode['createPages'] = async ({page, actions, graphql}) => {
    const {data: {
        allWordpressPost: {
            edges: posts
        }
    }} = await graphql<{allWordpressPost: {
        edges: {
            node: Wordpress__Post
        }[]
    }}>(`
    query WP_POSTS {
        allWordpressPost {
            edges {
                node {
                    title
                    slug
                }
            }
        }
    }`)

    posts.forEach(({node: post}) => {
        const path = getPostRelativePath(post.slug)
        console.log(`Post created: ${path} - ${post.title}`)
        actions.createPage({
            path,
            component: resolve("./src/pages/posts.tsx"),
            context: page
        })
    })
    console.log(posts.length)
}


export const nodes: GatsbyNode = {
    createPages
}
