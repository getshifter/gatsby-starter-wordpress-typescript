import * as React from 'react'
import Link from 'gatsby-link'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { useStaticQuery, graphql } from 'gatsby'
import { Wordpress__Site_Metadata } from '../../types/graphql-types'

const Header = () => {
  const {wordpressSiteMetadata: {
    name,
    description
  }} = useStaticQuery<{
    wordpressSiteMetadata : Wordpress__Site_Metadata
  }>(graphql`
  query {
    wordpressSiteMetadata {
      id
      home
      description
      name
      url
    }
  }`)
  return (
  <div
    style={{
      background: 'deepskyblue',
      marginBottom: '1.45rem',
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
        </Link><br/>
        <small>{description}</small>
      </h1>
    </div>
  </div>
)
}

interface DefaultLayoutProps extends React.HTMLProps<HTMLDivElement> {
  children: any
}

export default (props: DefaultLayoutProps) => {
  return (
    <div>
      <Header />
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '0px 1.0875rem 1.45rem',
          paddingTop: 0,
        }}
      >
        {props.children}
      </div>
    </div>
  )
}