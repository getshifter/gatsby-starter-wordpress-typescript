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