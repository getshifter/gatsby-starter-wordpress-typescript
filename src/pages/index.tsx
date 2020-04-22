import * as React from 'react'
import { graphql } from 'gatsby'
import Link from 'gatsby-link'
import {
  Helmet
} from 'react-helmet'
import {
  Row,
  Col,
  Button,
} from 'reactstrap'
import {
  IndexQuery
} from '../../types/graphql-types'
import { getPostRelativePath } from '../helpers/url'
import Main from '../components/Main'
import Jumbotron from '../components/Jumbotron'
import Footer from '../layouts/Footer'
import Layout from '../layouts/index'

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface IndexPageProps {
  data: IndexQuery
}

const ListPostItem = (props: IndexQuery['allWordpressPost']['edges'][number]['node']) => {
  const {title, excerpt} = props;
  const path = getPostRelativePath(props.slug)
  return (
    <Col sm={6} className="clearfix p-5">
      <h2><Link to={path}>{title}</Link></h2>
      <p>
        <small>
          On: {props.date} <br />
          Last modified: {props.modified}
        </small>
        </p>
      <div dangerouslySetInnerHTML={{__html: excerpt}} />
      <Button
        tag={Link}
        to={path}
        className="float-right"
        color="primary">Read more</Button>
    </Col>
  )
}

export default ({data}: IndexPageProps) => {
  const {edges } = data.allWordpressPost
    return (
      <Layout>
        <Helmet
          title={data.wordpressSiteMetadata.name}
        />
        <Jumbotron
          title={data.wordpressSiteMetadata.name}
          lead={data.wordpressSiteMetadata.description}
        />
        <Main>
          <Row>
          {edges.map(({node}) => <ListPostItem {...node} key={node.title} />)}
          </Row>
        </Main>
        <Footer />
      </Layout>
    )
  }


export const pageQuery = graphql`
  query Index {
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
          date(formatString: "MMMM Do YYYY")
          modified(formatString: "MMMM Do YYYY")
        }
      }
    }
  }
`
