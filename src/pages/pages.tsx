import * as React from 'react';
import { Link, graphql } from 'gatsby'
import {RouteComponentProps} from "@reach/router"
import {
  SinglePageQuery
} from '../../types/graphql-types'
import Layout from '../layouts/index'
import Jumbotron from '../components/Jumbotron'
import Main from '../components/Main'

type Props = RouteComponentProps & {
  data: SinglePageQuery
}
const Component: React.FC<Props> = (props) => {
  return (
    <Layout>
      <Jumbotron title={props.data.wordpressPage.title} />
      <Main>
        <h1 dangerouslySetInnerHTML={{__html: props.data.wordpressPage.title}} />
        <section dangerouslySetInnerHTML={{__html: props.data.wordpressPage.content}} />
        <Link to='/'>Home</Link>
      </Main>
    </Layout>
  )
}
export default Component

export const pageQuery = graphql`
  query SinglePage($slug: String) {
    wordpressPage(slug: { eq: $slug }) {
      id
      slug
      title
      content
    }
  }
`