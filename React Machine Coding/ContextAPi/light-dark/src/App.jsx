import React from 'react'
import {ThemeProvider} from "./ContextAPI/context"
import Home from "./home"

const App = () => {
  return (
    <ThemeProvider>
      <Home/>
    </ThemeProvider>
  
  )
}

export default App