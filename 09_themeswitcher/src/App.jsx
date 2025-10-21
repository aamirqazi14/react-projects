        
import './App.css'
import { useEffect, useState } from 'react'
import { ThemeProvider } from './context/theme'
import Card from './components/Card'
import ThemeBtn from './components/ThemeBtn'

function App() {

  const [themeMode, setthemeMode] = useState("light")

  const lightMode = () => {
    setthemeMode("light")
  }

  const darkMode = () => {
    setthemeMode("dark")
  }

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])

   useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])

  useEffect(() => {
  if(themeMode === "dark") document.body.classList.add("dark-mode")
  else document.body.classList.remove("dark-mode")
}, [themeMode])

  return (
    <ThemeProvider value = {{themeMode , lightMode , darkMode}}> 
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <ThemeBtn />
            </div>

            <div className="w-full max-w-sm mx-auto">
                  <Card />
          </div>

        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
