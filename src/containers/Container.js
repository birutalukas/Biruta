import React, { Fragment, useContext } from "react"
import styled from "styled-components"
import Navbar from "../components/Navbar"
import { ThemeContext } from "../context/ThemeStore"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const StyledLogo = styled(AniLink)`
  position: absolute;
  left: 0;
  z-index: 999;
  text-decoration: none;

  h1 {
    color: ${props => props.theme.heading};
    transition: 2s ease-in;
  }
  @media (max-width: 992px) {
    display: none;
  }
`

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  padding: 2rem 0;
  position: relative;
`

const StyledContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  height: 100vh;
  min-height: 100vh;
  width: 80%;
  max-width: 1440px;
  z-index: 10;
  display: flex;
  align-items: center;

  footer {
    position: absolute;
    right: 1rem;
    bottom: 1rem;
  }
  @media (max-width: 992px) {
    height: fit-content;
    width: 90%;
  }
`

const StyledThemeSwitcher = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  border: 2px solid ${props => props.theme.title};
  border-radius: 50%;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 2rem;
  z-index: 50;

  @media (max-width: 992px) {
    border: none;
  }
`

const Container = ({ children }) => {
  const { switchTheme, invertedTheme, setInvertedTheme } = useContext(
    ThemeContext
  )

  const invertThemeHandler = () => {
    setInvertedTheme(!invertedTheme)
  }

  return (
    <Fragment>
      <StyledHeader>
        <StyledLogo
          paintDrip
          to="/"
          hex="#000000"
          duration={1.2}
          onClick={() => switchTheme("dark")}
        >
          <h1>Biruta</h1>
        </StyledLogo>
        <Navbar />
        <StyledThemeSwitcher onClick={() => invertThemeHandler()}>
          {invertedTheme ? "🌑" : "🌞"}
        </StyledThemeSwitcher>
      </StyledHeader>
      <StyledContainer>{children}</StyledContainer>
    </Fragment>
  )
}

export default Container
