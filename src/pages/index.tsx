import * as React from 'react'
import { graphql } from 'gatsby'
import Link from 'gatsby-link'
import {
  IndexQuery
} from '../../types/graphql-types'
import { getPostRelativePath } from '../helpers/url'
import Main from '../components/Main'
import Jumbotron from '../components/Jumbotron'

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface IndexPageProps {
  data: IndexQuery
}

const ListPostItem = (props: IndexQuery['allWordpressPost']['edges'][number]['node']) => {
  const {title, excerpt} = props;
  const path = getPostRelativePath(props.slug)
  return (
    <section>
      <h2>{title}</h2>
      <Link to={path}>Go</Link>
      <div dangerouslySetInnerHTML={{__html: excerpt}} />
    </section>
  )
}

const ListPosts = ({edges}: IndexQuery['allWordpressPost']) => {
  return <React.Fragment>{edges.map(({node}) => <ListPostItem {...node} key={node.title} />)}</React.Fragment>
}

export default ({data}: IndexPageProps) => {
  const {edges } = data.allWordpressPost
    return (
      <div>
        <Jumbotron
          title={data.wordpressSiteMetadata.name}
          lead={data.wordpressSiteMetadata.description}
        />
        <Main>
          <h1>Hi people</h1>
          <p> 
            Welcome to your new{' '}
            <strong>{data.site.siteMetadata.title}</strong> site.
          </p>
          <ListPosts edges={edges} />
          <p>Now go build something great.</p>
          <Link to="/page-2/">Go to page 2</Link>
        </Main>
      </div>
    )
  }


export const pageQuery = graphql`
  query Index {
    site {
      siteMetadata {
        title
      }
    }
    wordpressSiteMetadata {
      id
      home
      description
      name
      url
    }
    allWordpressPost {
      edges {
        node {
          title
          excerpt
          slug
        }
      }
    }
  }
`
