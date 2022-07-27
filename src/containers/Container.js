import React, { Fragment, useContext } from "react"
import styled from "styled-components"
import Navbar from "../components/Navbar"
import { ThemeContext } from "../context/ThemeStore"
import ElectricRightBubbleSrc from "../../content/assets/images/electric-right.svg"

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
const ElectricRightBubble = styled.img`
  position: absolute;
  bottom: 4rem;
  right: -15%;
  z-index: 1;
  @media (max-width: 992px) {
    right: -5%;
    opacity: 0.5;
  }
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
        <StyledThemeSwitcher onClick={() => invertThemeHandler()}>
          {invertedTheme ? "🌑" : "🌞"}
        </StyledThemeSwitcher>
      </StyledHeader>
      <StyledContainer>
        {children} <ElectricRightBubble src={ElectricRightBubbleSrc} alt="" />
      </StyledContainer>
    </Fragment>
  )
}

export default Container
