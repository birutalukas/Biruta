import React from "react"
import Wrapper from "../containers/Wrapper"
import Container from "../containers/Container"
import { ContentHalf, FlexContent } from "../containers/Content"
import ContentLeft from "../components/about/ContentLeft"
import ContentRight from "../components/about/ContentRight"

const HomePage = () => {
  return (
    <Wrapper>
      <Container>
        <FlexContent>
          <ContentHalf>
            <ContentLeft />
          </ContentHalf>
          <ContentHalf>
            <ContentRight />
          </ContentHalf>
        </FlexContent>
      </Container>
    </Wrapper>
  )
}

export default HomePage
