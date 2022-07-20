import React from "react"
import Container from "../containers/Container"
import Wrapper from "../containers/Wrapper"
import PortfolioProjects from "../components/portfolio/PortfolioProjectsSlider"

const Portfolio = () => {
  return (
    <Wrapper>
      <Container>
        <PortfolioProjects />
      </Container>
    </Wrapper>
  )
}
export default Portfolio
