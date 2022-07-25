import React, { useState } from "react"
const ThemeStore = ({ children }) => {
  const [theme, setTheme] = useState("dark") // line B - setting the initial theme

  const [invertedTheme, setInvertedTheme] = useState(false)

  const switchTheme = theme => setTheme(theme) // line C - changing the theme

  return (
    <ThemeContext.Provider
      value={{ theme, switchTheme, invertedTheme, setInvertedTheme }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
const ThemeContext = React.createContext(ThemeStore) // line A - creating the context

export { ThemeStore, ThemeContext }
