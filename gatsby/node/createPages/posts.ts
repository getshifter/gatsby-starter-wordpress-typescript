import { GatsbyNode } from "gatsby";
import {resolve} from 'path'
// https://github.com/GatsbyCentral/gatsby-awesome-pagination/pull/37
// @ts-ignore
import { paginate } from 'gatsby-awesome-pagination'
import {
    Wordpress__Post
} from '../../../types/graphql-types'
import {
    getPostRelativePath,
} from '../../../src/helpers/url'

export const createWPPosts: GatsbyNode['createPages'] = async ({page, actions, graphql}) => {
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
                    id
                }
            }
        }
    }`)

    paginate({
        createPage: actions.createPage,
        items: posts,
        itemsPerPage: 20,
        pathPrefix: ({pageNumber}: {pageNumber: number}) => (pageNumber === 0 ? '/': '/pages'),
        component: resolve('./src/templates/index.tsx')
    })

    posts.forEach(({node: post}) => {
        const path = getPostRelativePath(post.slug)
        console.log(`Post created: ${path} - ${post.title}`)
        actions.createPage({
            path,
            component: resolve("./src/pages/posts.tsx"),
            context: Object.assign({}, page, {
                slug: post.slug,
                id: post.id
            })
        })
    })
    console.log(posts.length)
}
