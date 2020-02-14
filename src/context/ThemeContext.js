import React, { useState, createContext, useLayoutEffect } from "react"

const ThemeContext = createContext({
  dark: false,
  toggle: () => {},
})

export function ThemeProvider(props) {
  const date = new Date()
  const [dark, setDark] = useState(false)

  const toggle = () => {
    setDark(!dark)
  }

  const applyTheme = theme => {
    const root = document.getElementsByTagName("html")[0]
    root.style.cssText = theme.join(";")
  }

  const darkTheme = [
    "--darkest: #181824;",
    "--dark: #212333;",
    "--darkish: #292d3e;",
    "--grey: #676e95;",
    "--lightBlue: #959dcb;",
    "--blue: #82aaff;",
    "--red: #f07178;",
    "--green: #c3e88d;",
    "--purple: #c792ea;",
    "--white: #ffffff;",
    "--toggle: #959dcb;",
    "--bezier: cubic-bezier(0.1, 0.11, 0.29, 1);",
  ]

  const lightTheme = [
    "--darkest: #ffffff;",
    "--dark: #f3f6fa;",
    "--darkish: #fefefe;",
    "--grey: #676e95;",
    "--lightBlue: #292d3e;",
    "--blue: #39ADB5;",
    "--red: #E53935;",
    "--green: #91B859;",
    "--purple: #7C4DFF;",
    "--white: #181824;",
    "--toggle: #ffcb6b;",
    "--bezier: cubic-bezier(0.1, 0.11, 0.29, 1);",
  ]

  //Aplly theme
  useLayoutEffect(() => {
    if (date.getHours() < 17 && date.getHours() > 6) {
      setDark(false)
    } else {
      setDark(true)
    }
  }, [dark, date])

  return (
    <ThemeContext.Provider
      value={{
        dark,
        toggle,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext
