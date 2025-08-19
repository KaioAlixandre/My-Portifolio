"use client"

import { useEffect } from "react"

export default function Hero() {
  useEffect(() => {
    // Simulando o efeito de digitação
    const textElement = document.querySelector(".multiple-text")
    if (textElement) {
      const texts = ["Desenvolvedor", "Designer", "Freelancer"]
      let textIndex = 0
      let charIndex = 0
      let isDeleting = false

      function typeEffect() {
        const currentText = texts[textIndex]

        if (isDeleting) {
          textElement.textContent = currentText.substring(0, charIndex - 1)
          charIndex--
        } else {
          textElement.textContent = currentText.substring(0, charIndex + 1)
          charIndex++
        }

        if (!isDeleting && charIndex === currentText.length) {
          setTimeout(() => (isDeleting = true), 1000)
        } else if (isDeleting && charIndex === 0) {
          isDeleting = false
          textIndex = (textIndex + 1) % texts.length
        }

        setTimeout(typeEffect, isDeleting ? 50 : 100)
      }

      typeEffect()
    }
  }, [])

  return (
    <main id="inicio" className="cabecalho">
      <div className="home-img">
        <img src="/placeholder.svg?height=420&width=420" alt="foto de perfil" />
      </div>

      <div className="conteudo-apresentacao">
        <h3>Olá, meu nome é</h3>
        <h1>Kaio</h1>
        <h3>
          Eu sou <span className="multiple-text"></span>
        </h3>
        <p>Sou um desenvolvedor apaixonado por criar soluções digitais inovadoras e experiências únicas.</p>

        <div className="social-media">
          <a href="https://wa.me/5511999999999?text=Olá%20Gostaria%20de%20mais%20informações">
            <i className="bx bxl-whatsapp"></i>
          </a>
          <a href="https://github.com/kaio" target="_blank" rel="noreferrer">
            <i className="bx bxl-github"></i>
          </a>
          <a href="https://www.instagram.com/kaio/" target="_blank" rel="noreferrer">
            <i className="bx bxl-instagram"></i>
          </a>
          <a href="https://x.com/kaio" target="_blank" rel="noreferrer">
            <i className="bx bxl-twitter"></i>
          </a>
          <a href="https://www.linkedin.com/in/kaio/" target="_blank" rel="noreferrer">
            <i className="bx bxl-linkedin"></i>
          </a>
          <a href="mailto:kaio@email.com" target="_blank" rel="noreferrer">
            <i className="bx bx-envelope"></i>
          </a>
        </div>
        <a href="#projetos" className="btn">
          Veja meus projetos
        </a>
      </div>
    </main>
  )
}
