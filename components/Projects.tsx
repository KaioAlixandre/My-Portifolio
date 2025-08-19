"use client"

import { useState } from "react"

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<any>(null)

  const projects = [
    {
      id: "ecommerce-app",
      title: "E-commerce Moderno",
      description:
        "Aplicação completa de e-commerce com React, Node.js e PostgreSQL. Inclui carrinho de compras, sistema de pagamento e painel administrativo.",
      image: "/placeholder.svg?height=220&width=400",
      technologies: ["bx bxl-react", "bx bxl-nodejs", "devicon-postgresql-plain colored", "bx bxl-tailwind-css"],
      longDescription:
        "Este projeto é uma aplicação completa de e-commerce desenvolvida com as mais modernas tecnologias web. O frontend foi construído com React e Tailwind CSS, proporcionando uma interface responsiva e intuitiva. O backend utiliza Node.js com Express, implementando uma API RESTful robusta. A persistência de dados é feita com PostgreSQL, garantindo integridade e performance. O sistema inclui funcionalidades como autenticação de usuários, carrinho de compras, processamento de pagamentos, gerenciamento de produtos e painel administrativo completo.",
      repoLink: "https://github.com/kaio/ecommerce-app",
    },
    {
      id: "task-manager",
      title: "Gerenciador de Tarefas",
      description:
        "Sistema de gerenciamento de tarefas com interface intuitiva, drag & drop e colaboração em tempo real.",
      image: "/placeholder.svg?height=220&width=400",
      technologies: ["bx bxl-react", "bx bxl-typescript", "bx bxl-nodejs", "devicon-mongodb-plain colored"],
      longDescription:
        "Um sistema completo de gerenciamento de tarefas e projetos, desenvolvido para aumentar a produtividade de equipes. A aplicação oferece funcionalidades como criação de projetos, atribuição de tarefas, sistema de drag & drop para organização, notificações em tempo real e relatórios de progresso. Utiliza React com TypeScript no frontend para maior robustez, Node.js no backend e MongoDB para flexibilidade na estrutura de dados.",
      repoLink: "https://github.com/kaio/task-manager",
    },
    {
      id: "weather-app",
      title: "App de Clima",
      description: "Aplicativo de previsão do tempo com geolocalização, gráficos interativos e design responsivo.",
      image: "/placeholder.svg?height=220&width=400",
      technologies: ["bx bxl-react", "bx bxl-javascript", "bx bx-data", "bx bxl-css3"],
      longDescription:
        "Aplicativo de previsão do tempo que utiliza APIs externas para fornecer informações meteorológicas precisas. Inclui funcionalidades como geolocalização automática, busca por cidade, previsão de 7 dias, gráficos interativos de temperatura e precipitação, e alertas meteorológicos. O design é totalmente responsivo e otimizado para diferentes dispositivos.",
      repoLink: "https://github.com/kaio/weather-app",
    },
  ]

  const openModal = (project: any) => {
    setSelectedProject(project)
  }

  const closeModal = () => {
    setSelectedProject(null)
  }

  return (
    <>
      <section id="projetos" className="projetos">
        <h2 className="projetos-titulo">Projetos</h2>
        <div className="projetos-conteudo">
          {projects.map((project) => (
            <div key={project.id} className="projeto-card">
              <img
                src={project.image || "/placeholder.svg"}
                alt={`Imagem do Projeto: ${project.title}`}
                className="projeto-imagem"
              />
              <div className="projeto-info">
                <h3 className="projeto-card-titulo">{project.title}</h3>
                <p className="projeto-card-descricao">{project.description}</p>

                <div className="projeto-tecnologias">
                  {project.technologies.map((tech, index) => (
                    <i key={index} className={`${tech} projeto-tech-icon`}></i>
                  ))}
                </div>

                <div className="projeto-botoes">
                  <button className="btn-projeto detalhes" onClick={() => openModal(project)}>
                    Mais Detalhes
                  </button>
                  <a href={project.repoLink} target="_blank" className="btn-projeto ver-projeto" rel="noreferrer">
                    Ver Projeto
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedProject && (
        <div className="modal active">
          <div className="modal-content">
            <span className="fechar-modal" onClick={closeModal}>
              &times;
            </span>
            <img src={selectedProject.image || "/placeholder.svg"} alt="Imagem do Projeto" className="modal-imagem" />
            <h3 className="modal-titulo">{selectedProject.title}</h3>
            <div className="modal-tecnologias">
              {selectedProject.technologies.map((tech: string, index: number) => (
                <i key={index} className={`${tech} projeto-tech-icon`}></i>
              ))}
            </div>
            <p className="modal-descricao-longa">{selectedProject.longDescription}</p>
            <div className="modal-links">
              <a href={selectedProject.repoLink} target="_blank" className="btn-modal" rel="noreferrer">
                Ver no GitHub
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
