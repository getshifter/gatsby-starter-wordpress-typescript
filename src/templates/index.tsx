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
import {
  PageContextProps
} from '../../types/gatsby-awesome-pagination'
import { getPostRelativePath } from '../helpers/url'
import Main from '../components/Main'
import Jumbotron from '../components/Jumbotron'
import Footer from '../layouts/Footer'
import Layout from '../layouts/index'
import Pagination from '../components/Pagination'

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface IndexPageProps {
  data: IndexQuery
  pageContext: PageContextProps
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

export default (props: IndexPageProps) => {
  const { data } = props;
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
          <Pagination {...props} />
        </Main>
        <Footer />
      </Layout>
    )
  }


export const pageQuery = graphql`
  query Index($skip: Int!, $limit: Int!) {
    wordpressSiteMetadata {
      id
      home
      description
      name
      url
    }
    allWordpressPost(
      skip: $skip
      limit: $limit
    ) {
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
