import * as React from 'react';
import { Link, graphql } from 'gatsby'
import {RouteComponentProps} from "@reach/router"
import {
  SinglePostQuery
} from '../../types/graphql-types'
import Layout from '../layouts/index'
import Jumbotron from '../components/Jumbotron'
import Main from '../components/Main'

type Props = RouteComponentProps & {
  data: SinglePostQuery
}
const Component: React.FC<Props> = (props) => {
  return (
    <Layout>
    <Jumbotron title={props.data.wordpressPost.title} />
    <Main>
      <h1 dangerouslySetInnerHTML={{__html: props.data.wordpressPost.title}} />
      <section dangerouslySetInnerHTML={{__html: props.data.wordpressPost.content}} />
      <Link to='/'>Home</Link>
    </Main>
    </Layout>
  )
}
export default Component

export const pageQuery = graphql`
  query SinglePost($slug: String) {
    wordpressPost(slug: { eq: $slug }) {
      id
      slug
      title
      content
    }
  }
`