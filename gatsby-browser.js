// custom typefaces
import "typeface-montserrat"
import "typeface-merriweather"

// normalize CSS across browsers
import "./src/css/normalize.css"

// custom CSS styles
import "./src/css/style.css"

import React from "react"
import { ThemeStore } from "./src/context/ThemeStore"
import Theme from "./src/theme/Theme"

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeStore>
      <Theme>{element}</Theme>
    </ThemeStore>
  )
}
