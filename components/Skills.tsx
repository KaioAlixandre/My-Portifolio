"use client"

import { useState } from "react"

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState("todos")

  const skills = [
    {
      name: "React.js",
      icon: "bx bxl-react",
      percentage: 90,
      categories: ["frontend"],
    },
    {
      name: "Node.js",
      icon: "bx bxl-nodejs",
      percentage: 85,
      categories: ["backend"],
    },
    {
      name: "JavaScript",
      icon: "bx bxl-javascript",
      percentage: 95,
      categories: ["frontend", "backend"],
    },
    {
      name: "TypeScript",
      icon: "bx bxl-typescript",
      percentage: 80,
      categories: ["frontend", "backend"],
    },
    {
      name: "Python",
      icon: "bx bxl-python",
      percentage: 75,
      categories: ["backend"],
    },
    {
      name: "PostgreSQL",
      icon: "devicon-postgresql-plain colored",
      percentage: 80,
      categories: ["banco-de-dados"],
    },
    {
      name: "MongoDB",
      icon: "devicon-mongodb-plain colored",
      percentage: 75,
      categories: ["banco-de-dados"],
    },
    {
      name: "Figma",
      icon: "bx bxl-figma",
      percentage: 70,
      categories: ["ui-ux-design"],
    },
  ]

  const filteredSkills =
    activeFilter === "todos" ? skills : skills.filter((skill) => skill.categories.includes(activeFilter))

  return (
    <section id="skills" className="skills">
      <h2 className="skills-titulo">Skills</h2>

      <div className="skills-filtros">
        <button
          className={`filtro-btn ${activeFilter === "todos" ? "active" : ""}`}
          onClick={() => setActiveFilter("todos")}
        >
          Todos
        </button>
        <button
          className={`filtro-btn ${activeFilter === "backend" ? "active" : ""}`}
          onClick={() => setActiveFilter("backend")}
        >
          Backend
        </button>
        <button
          className={`filtro-btn ${activeFilter === "frontend" ? "active" : ""}`}
          onClick={() => setActiveFilter("frontend")}
        >
          Frontend
        </button>
        <button
          className={`filtro-btn ${activeFilter === "banco-de-dados" ? "active" : ""}`}
          onClick={() => setActiveFilter("banco-de-dados")}
        >
          Banco de Dados
        </button>
        <button
          className={`filtro-btn ${activeFilter === "ui-ux-design" ? "active" : ""}`}
          onClick={() => setActiveFilter("ui-ux-design")}
        >
          UI/UX Design
        </button>
      </div>

      <div className="skills-grade">
        {filteredSkills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-header">
              <i className={`${skill.icon} skill-icon`}></i>
              <h3 className="skill-name">{skill.name}</h3>
            </div>
            <div className="skill-details">
              <span className="skill-percentage">{skill.percentage}%</span>
              <div className="progress-bar-container">
                <div className="progress-bar" style={{ width: `${skill.percentage}%` }}></div>
              </div>
              <p className="skill-description">Proficiência</p>
            </div>
          </div>
        ))}
      </div>

      <h3 className="skills-subtitulo">Habilidades adicionais</h3>
      <div className="habilidades-adicionais">
        <span className="extra-tag">Git</span>
        <span className="extra-tag">Docker</span>
        <span className="extra-tag">AWS</span>
        <span className="extra-tag">Next.js</span>
        <span className="extra-tag">CI/CD</span>
        <span className="extra-tag">Agile</span>
        <span className="extra-tag">REST API</span>
        <span className="extra-tag">GraphQL</span>
      </div>
    </section>
  )
}
