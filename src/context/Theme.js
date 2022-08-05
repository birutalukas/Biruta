import React, { useContext } from "react"
import { ThemeProvider } from "styled-components"
import { ThemeContext } from "./ThemeStore"

const Themes = theme => {
  const { invertedTheme } = useContext(ThemeContext) // get the current theme ('light' or 'dark')

  let selectedTheme = {}

  switch (theme) {
    case "dark":
      selectedTheme = {
        background: invertedTheme ? "#FFFFFF" : "#000000",
        title: invertedTheme ? "#000000" : "#e85333",
        heading: invertedTheme ? "#000000" : "#e85333",
        subheading: "#e3a334",
        text: invertedTheme ? "#000000" : "#e3a334",
        buttonColor: invertedTheme ? "#121738" : "#e85333",
      }
      break
    case "neutral":
      selectedTheme = {
        background: "#B7661B",
        title: "#121738",
        heading: "#121738",
        subheading: "#e3a334",
        text: "#7DEOE6",
        buttonColor: "#121738",
      }
      break
    case "light":
      selectedTheme = {
        background: invertedTheme ? "#000000" : "#FFFFFF",
        title: invertedTheme ? "#e85333" : "#000000",
        heading: invertedTheme ? "#e85333" : "#000000",
        subheading: "#e3a334",
        text: invertedTheme ? "#FFFFFF" : "#000000",
        // subtext: invertedTheme ? "#000000" : "#FEFEFE",
        buttonColor: invertedTheme ? "#e85333" : "#000000",
      }
      break
    default:
      break
  }

  return selectedTheme
}

const Theme = ({ children }) => {
  const { theme } = useContext(ThemeContext) // get the current theme ('light' or 'dark')

  return <ThemeProvider theme={Themes(theme)}>{children}</ThemeProvider>
}

// Theme rendered in gatsby-browser.js as children of wrapRootElement and ThemeStore
export default Theme
