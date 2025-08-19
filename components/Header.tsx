"use client"

import { useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="header">
      <div className="logo">Kaio</div>
      <nav className="navbar">
        <button className="menu-toggle" onClick={toggleMenu}>
          &#9776;
        </button>
        <ul className={`menu ${isMenuOpen ? "show" : ""}`}>
          <li>
            <a href="#inicio" className="menu-link" onClick={() => scrollToSection("inicio")}>
              Início
            </a>
          </li>
          <li>
            <a href="#sobre" className="menu-link" onClick={() => scrollToSection("sobre")}>
              Sobre
            </a>
          </li>
          <li>
            <a href="#skills" className="menu-link" onClick={() => scrollToSection("skills")}>
              Skills
            </a>
          </li>
          <li>
            <a href="#projetos" className="menu-link" onClick={() => scrollToSection("projetos")}>
              Projetos
            </a>
          </li>
          <li>
            <a href="#servicos" className="menu-link" onClick={() => scrollToSection("servicos")}>
              Serviços
            </a>
          </li>
          <li>
            <a href="#contatos" className="menu-link" onClick={() => scrollToSection("contatos")}>
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
