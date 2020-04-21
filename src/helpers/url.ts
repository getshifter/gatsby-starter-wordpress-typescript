const config = require('../../gatsby-config')

export const getPostURLPrefix = (): string => {
    return config.siteMetadata.postURLPrefix || ''
}

export const getPostRelativePath = (slug?: string): string => {
    return [getPostURLPrefix(), slug]
        .filter(item => !!item)
        .join('/')
        .replace(/\/\//, '/')
}

export const getPageURLPrefix = (): string => {
    return config.siteMetadata.pageURLPrefix || ''
}

export const getPageRelativePath = (slug?: string): string => {
    return [getPageURLPrefix(), slug]
        .filter(item => !!item)
        .join('/')
        .replace(/\/\//, '/')
}