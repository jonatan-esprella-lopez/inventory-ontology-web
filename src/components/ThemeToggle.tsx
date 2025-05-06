import { useState } from "react"
import { Moon, Sun } from "lucide-react"

import "./ThemeToggle.css"

export default function ThemeToggle() {
  const [ theme, setTheme ] = useState(true)

  return (
    <button
      className="theme-toggle"
      onClick={() => {setTheme(!theme)}}
      aria-label={theme === false ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      title={theme === false ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
    >
      {theme === false ? <Sun className="theme-toggle__icon" /> : <Moon className="theme-toggle__icon" />}
      <span className="sr-only">{theme === false ? "Modo claro" : "Modo oscuro"}</span>
    </button>
  )
}