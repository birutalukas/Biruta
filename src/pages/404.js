import React from "react"
import { graphql } from "gatsby"

import Container from "../containers/Container"
import Seo from "../components/seo"

const NotFoundPage = () => {
  return (
    <Container>
      <Seo title="404: Not Found" />
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Container>
  )
}

export default NotFoundPage
