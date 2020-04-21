const config = require('../../gatsby-config')

const createRelativePath = (...args: string[]): string => {
    return args.filter(item => !!item)
        .join('/')
        .replace(/\/\//, '/')
}

export const getURLSlug = (url: string): string => {
    const items = url.split('/')
    return items[items.length - 1]
}

export const getPostURLPrefix = (): string => {
    return config.siteMetadata.postURLPrefix || ''
}

export const getPostRelativePath = (slug?: string): string => {
    return createRelativePath(getPostURLPrefix(), slug)
}

export const getPageURLPrefix = (): string => {
    return config.siteMetadata.pageURLPrefix || ''
}

export const getPageRelativePath = (slug?: string): string => {
    return createRelativePath(getPageURLPrefix(), slug)
}