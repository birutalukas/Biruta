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
        <meta
          name="google-site-verification"
          content="76xZOyak5ZAvEVdpK0ZKLhMHBZ25U5yG78Slzl9cOJ4"
        />
        <meta
          property="og:image:secure"
          content="https://media-exp1.licdn.com/dms/image/C4D03AQG5gCXBI3A9sw/profile-displayphoto-shrink_800_800/0/1604401690723?e=1665619200&v=beta&t=h6LQ5dlM8JubiR7Ehpi6fPMpV_vrqRao-zEU-Cep1Eg"
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
