"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "../context/ThemeContext"
import "./ThemeToggle.css"

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      title={theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
    >
      {theme === "dark" ? <Sun className="theme-toggle__icon" /> : <Moon className="theme-toggle__icon" />}
      <span className="sr-only">{theme === "dark" ? "Modo claro" : "Modo oscuro"}</span>
    </button>
  )
}
