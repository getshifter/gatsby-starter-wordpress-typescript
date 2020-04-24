import * as React from 'react'
import Link from 'gatsby-link'
import {
  PageContextProps
} from '../../types/gatsby-awesome-pagination'
import { Row, Col } from 'reactstrap'


export default (props: {
  pageContext: PageContextProps
}) => {
  const {
    pageContext: {
      previousPagePath,
      nextPagePath,
    }
  } = props
  return (
    <Row>
      <Col sm={2}>
        {previousPagePath && <Link to={previousPagePath}>≪Prev</Link>}
      </Col>
      <Col sm={{size: 2, offset: 8}} className="text-right">
      {nextPagePath && <Link to={nextPagePath}>Next≫</Link>}
      </Col>
    </Row>
  )
}