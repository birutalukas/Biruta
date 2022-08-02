import React, { Fragment } from "react"
import { Helmet } from "react-helmet"
import Wrapper from "../containers/Wrapper"
import Container from "../containers/Container"
import { ContentHalf, FlexContent } from "../containers/Content"
import ContentLeft from "../components/about/ContentLeft"
import ContentRight from "../components/about/ContentRight"

const HomePage = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Hello | Lukas Biruta - Web Developer</title>
        <meta
          name="description"
          content="Hello | Lukas Biruta - Web Developer"
        />
      </Helmet>

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
    </Fragment>
  )
}

export default HomePage
