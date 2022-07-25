import React, { useState } from "react"

const ThemeContext = React.createContext({
  theme: "dark",
  invertedTheme: false,
}) // line A - creating the context

const ThemeStore = ({ children }) => {
  const [theme, setTheme] = useState("dark") // line B - setting the initial theme

  console.log("ThemeStore: const [theme] = ", theme)

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

export { ThemeStore, ThemeContext }
