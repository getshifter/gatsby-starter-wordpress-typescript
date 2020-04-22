import * as React from 'react'
import Link from 'gatsby-link'
import { useStaticQuery, graphql } from 'gatsby'
import { Wordpress__Site_Metadata } from '../../types/graphql-types'
export default () => {
  const {wordpressSiteMetadata: {
    name,
  }} = useStaticQuery<{
    wordpressSiteMetadata : Wordpress__Site_Metadata
  }>(graphql`
  query {
    wordpressSiteMetadata {
      name
      url
    }
  }`)
  return (
  <div
    style={{
      background: 'deepskyblue',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0, color: "#f5f5f5" }}>
        <Link
          to="/"
          style={{
            color: '#f5f5f5',
            textDecoration: 'none',
          }}
        >
          {name}
        </Link>
      </h1>
    </div>
  </div>
)
}