import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import {
  Jumbotron,
  Col,
  Row,
  Container,
  ListGroup,
  ListGroupItem
} from 'reactstrap'
import Link from 'gatsby-link'
import { Wordpress__Page } from '../../types/graphql-types'

function arrayChunk<T>([...array]: Array<T>, size: number = 1): Array<Array<T>> {
    return array.reduce((acc, value, index) => index % size ? acc : [...acc, array.slice(index, index + size)], []);
  }

  
type StaticQueryResult = {
    allWordpressPage: {
        edges: Array<{
            node: Pick<Wordpress__Page, 'title' | 'slug'>
        }>
    }
}
export default () => {
    const data = useStaticQuery<StaticQueryResult>(graphql`query {
      allWordpressPage {
          edges {
              node {
                  title
                  slug
              }
          }
      }
  }`)
  const chunkSize = Math.ceil(data.allWordpressPage.edges.length / 3)
  const colmuns = arrayChunk(data.allWordpressPage.edges, chunkSize)
  
    return (
        <Jumbotron fluid className="mb-0">
          <Container>
          <Row>
              {colmuns.map((col, i) => {
                  return (
                      <Col sm={4} key={i}>
                          <ListGroup>
                              {col.map(({node}) => (
                                  <ListGroupItem
                                   key={node.slug}
                                   tag={Link}
                                   to={`/${node.slug}`}
                                   >{node.title}</ListGroupItem>
                              ))}
                          </ListGroup>
                      </Col>
                  )
              })}
          </Row>
          </Container>
        </Jumbotron>
    )
}