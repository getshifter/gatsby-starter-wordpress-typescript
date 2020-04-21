import { GatsbyNode } from "gatsby";
import {resolve} from 'path'
import {
    Wordpress__Page
} from '../../types/graphql-types'
import {
    getPageRelativePath,
} from '../../src/helpers/url'

export const createWPPages: GatsbyNode['createPages'] = async ({page, actions, graphql}) => {
    const {data: {
        allWordpressPage: {
            edges: pages
        }
    }} = await graphql<{allWordpressPage: {
        edges: {
            node: Wordpress__Page
        }[]
    }}>(`
    query WP_POSTS {
        allWordpressPage {
            edges {
                node {
                    title
                    slug
                }
            }
        }
    }`)

    pages.forEach(({node: page}) => {
        const path = getPageRelativePath(page.slug)
        console.log(`Page created: ${path} - ${page.title}`)
        actions.createPage({
            path,
            component: resolve("./src/pages/pages.tsx"),
            context: page
        })
    })
    console.log(pages.length)
}
