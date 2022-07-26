import React, { useContext } from "react"
import { ThemeProvider, createGlobalStyle } from "styled-components"
import { ThemeContext } from "./ThemeStore"

const Themes = theme => {
  const { invertedTheme } = useContext(ThemeContext) // get the current theme ('light' or 'dark')

  console.log("Themes.js - invertedTheme ", invertedTheme)
  let selectedTheme = {
    background: invertedTheme ? "#FFFFFF" : "#000000",
    title: invertedTheme ? "#000000" : "#FFFFFF",
    heading: "#e85333",
    subheading: "#e3a334",
    text: "#7ed491",
    buttonColor: "#7ed491",
  }

  switch (theme) {
    case "dark":
      selectedTheme = {
        background: invertedTheme ? "#FFFFFF" : "#000000",
        title: invertedTheme ? "#000000" : "#FFFFFF",
        heading: "#e85333",
        subheading: "#e3a334",
        text: "#7ed491",
        buttonColor: "#7ed491",
      }
      break
    case "neutral":
      selectedTheme = {
        background: "#B7661B",
        title: "#23cdb4",
        heading: "#000000",
        subheading: "#e3a334",
        text: "#FFFFFF",
        buttonColor: "#7ed491",
      }
      break
    case "light":
      selectedTheme = {
        background: invertedTheme ? "#000000" : "#FFFFFF",
        title: invertedTheme ? "#FFFFFF" : "#000000",
        heading: invertedTheme ? "#e85333" : "#000000",
        subheading: "#e3a334",
        text: invertedTheme ? "#FFFFFF" : "#000000",
        subtext: invertedTheme ? "#000000" : "#FEFEFE",
        buttonColor: "#7ed491",
      }
      break
    default:
      break
  }

  return selectedTheme
}
const GlobalStyle = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      transition: all 2s;
    }
  `

const Theme = ({ children }) => {
  const { theme } = useContext(ThemeContext) // get the current theme ('light' or 'dark')

  return (
    <ThemeProvider theme={Themes(theme)}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}

export default Theme
