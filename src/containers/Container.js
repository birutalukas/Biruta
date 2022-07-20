import React, { Fragment, useContext } from "react"
import styled from "styled-components"
import Navbar from "../components/Navbar"
import { ThemeContext } from "../context/ThemeStore"

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
  width: 80%;
  max-width: 1440px;

  display: flex;
  align-items: center;

  footer {
    position: absolute;
    right: 1rem;
    bottom: 1rem;
  }
`

const StyledThemeSwithcer = styled.button`
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
`

const Container = ({ children }) => {
  const { invertedTheme, setInvertedTheme } = useContext(ThemeContext)

  const invertThemeHandler = () => {
    setInvertedTheme(!invertedTheme)
  }

  return (
    <Fragment>
      <StyledHeader>
        <Navbar />
        <StyledThemeSwithcer onClick={() => invertThemeHandler()}>
          {invertedTheme ? "🌑" : "🌞"}
        </StyledThemeSwithcer>
      </StyledHeader>
      <StyledContainer>
        {children}

        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
          {` `}
          And <a href="https://wordpress.org/">WordPress</a>
        </footer>
      </StyledContainer>
    </Fragment>
  )
}

export default Container
