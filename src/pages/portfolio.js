import React, { Fragment } from "react"
import { Helmet } from "react-helmet"
import Wrapper from "../containers/Wrapper"
import Container from "../containers/Container"
import PortfolioProjects from "../components/portfolio/PortfolioProjectsSlider"

const Portfolio = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Portfolio | Lukas Biruta - Web Developer</title>
        <meta
          name="description"
          content="Portfolio | Lukas Biruta - Web Developer"
        />
      </Helmet>

      <Wrapper>
        <Container>
          <PortfolioProjects />
        </Container>
      </Wrapper>
    </Fragment>
  )
}
export default Portfolio
