import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeProvider } from './contexts/context'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ThemeProvider value={"{themeMode, darkTheme, lightTheme}"}>

    </ThemeProvider>
  
    </>
  )
}

export default App
