import React, { useContext } from "react"
import { ThemeProvider, createGlobalStyle } from "styled-components"
import { ThemeContext } from "./ThemeStore"

const Themes = theme => {
  console.log("const Themes render")

  const { invertedTheme } = useContext(ThemeContext) // get the current theme ('light' or 'dark')

  console.log("Themes.js - invertedTheme ", invertedTheme)
  let selectedTheme = {}

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

const Theme = ({ children }) => {
  const { theme } = useContext(ThemeContext) // get the current theme ('light' or 'dark')

  console.log("Theme - const theme", theme)
  return <ThemeProvider theme={Themes(theme)}>{children}</ThemeProvider>
}

// Theme rendered in gatsby-browser.js as children of wrapRootElement and ThemeStore
export default Theme
