import React from "react"
import Wrapper from "../containers/Wrapper"
import Container from "../containers/Container"
import Content from "../containers/Content"
const NotFound = () => {
  return (
    <Wrapper>
      <Container>
        <Content>
          <h1 style={{ color: "#FFFFFF" }}>Ooops..!</h1>
          <p style={{ color: "#FEFEFE" }}>There is no page found!</p>
        </Content>
      </Container>
    </Wrapper>
  )
}

export default NotFound
