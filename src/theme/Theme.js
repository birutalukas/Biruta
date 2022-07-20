import React, { useContext } from "react"
import { ThemeProvider, createGlobalStyle } from "styled-components"
import { ThemeContext } from "../context/ThemeStore"

const Themes = theme => {
  const { invertedTheme } = useContext(ThemeContext) // get the current theme ('light' or 'dark')

  let selectedTheme = {}

  switch (theme) {
    case "dark":
      selectedTheme = {
        background: invertedTheme ? "#FFFFFF" : "#000000",
        title: invertedTheme ? "#000000" : "#FFFFFF",
        heading: "#e85333",
        subheading: "#e3a334",
        text: "#7ed491",
      }
      break
    case "neutral":
      selectedTheme = {
        background: "#B7661B",
        title: "#23cdb4",
        text: "#FFFFFF",
      }
      break
    case "light":
      selectedTheme = {
        background: invertedTheme ? "#000000" : "#FFFFFF",
        title: invertedTheme ? "#FFFFFF" : "#000000",
      }
      break
    default:
      break
  }

  return selectedTheme
  // return {
  //   neutral: {
  //     background: "#B7661B",
  //     title: "#6495ed",
  //     text: "#FFFFFF",
  //   },
  //   light: {
  //     background: invertedTheme ? "#000000" : "#FFFFFF",
  //     title: "#000000",
  //     text: "#000000",
  //   },
  // }
}
const GlobalStyle = createGlobalStyle`
    * {
      margin: 0;
      padding: 0
      transition: all 0.5s;
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
