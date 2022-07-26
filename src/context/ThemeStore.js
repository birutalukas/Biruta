import React, { useState } from "react"

const ThemeContext = React.createContext({
  invertedTheme: false,
  theme: "dark",
}) // line A - creating the context
console.log(ThemeContext)
const ThemeStore = ({ children }) => {
  const [theme, setTheme] = useState("dark") // line B - setting the initial theme

  const [invertedTheme, setInvertedTheme] = useState(false)

  console.log("ThemeStore.js - invertedTheme: ", invertedTheme)
  const switchTheme = theme => setTheme(theme) // line C - changing the theme

  return (
    <ThemeContext.Provider
      value={{ theme, switchTheme, invertedTheme, setInvertedTheme }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeStore, ThemeContext }
