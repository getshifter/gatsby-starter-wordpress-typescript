import { GatsbyNode } from "gatsby";
import {resolve} from 'path'
import {
    Wordpress__Page
} from '../../../types/graphql-types'
import {
    getPageRelativePath,
} from '../../../src/helpers/url'

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
                    id
                }
            }
        }
    }`)

    pages.forEach(({node: wpPage}) => {
        const path = getPageRelativePath(wpPage.slug)
        console.log(`Page created: ${path} - ${wpPage.title}`)
        actions.createPage({
            path,
            component: resolve("./src/pages/pages.tsx"),
            context: Object.assign({}, page, {
                slug: wpPage.slug,
                id: wpPage.id
            })
        })
    })
    console.log(pages.length)
}
