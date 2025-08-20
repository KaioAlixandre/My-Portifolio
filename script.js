// Menu toggle para mobile
const menuToggle = document.getElementById("menu-toggle")
const menu = document.getElementById("menu")

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("show")
})

// Fechar menu ao clicar em um link
const menuLinks = document.querySelectorAll(".menu-link")
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("show")
  })
})

// Efeito de digitação
document.addEventListener("DOMContentLoaded", () => {
  const typed = new Typed(".multiple-text", {
    strings: ["Desenvolvedor", "Designer", "Freelancer", "Criativo"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
  })
})

// Filtros de skills
const filtros = document.querySelectorAll(".filtro-btn")
const skillCards = document.querySelectorAll(".skill-card")

filtros.forEach((filtro) => {
  filtro.addEventListener("click", () => {
    // Remove active de todos os filtros
    filtros.forEach((f) => f.classList.remove("active"))
    // Adiciona active ao filtro clicado
    filtro.classList.add("active")

    const categoria = filtro.getAttribute("data-categoria")

    skillCards.forEach((card) => {
      const categorias = card.getAttribute("data-categorias")

      if (categoria === "todos" || categorias.includes(categoria)) {
        card.style.display = "flex"
        card.style.animation = "fadeIn 0.5s ease-in-out"
      } else {
        card.style.display = "none"
      }
    })
  })
})

// Modal dos projetos
const modal = document.getElementById("projeto-modal")
const fecharModal = document.querySelector(".fechar-modal")
const detalheBtns = document.querySelectorAll(".btn-projeto.detalhes")

// Dados dos projetos
const projetos = {
  "mk-store": {
    titulo: "E-commerce Moderno",
    imagem: "img/MK.jpeg",
    tecnologias: ["bx bxl-react", "bx bxl-nodejs", "devicon-postgresql-plain colored", "bx bxl-tailwind-css"],
    descricaoLonga:
      "MK Store é um projeto de e-commerce funcional e acessível, desenvolvido com o objetivo de oferecer uma plataforma prática para a venda de produtos agrícolas. Ele simula a experiência completa de uma loja virtual, contemplando todas as etapas essenciais para um fluxo de compra simplificado e eficiente.",
    repoLink: "https://github.com/KaioAlixandre/Monitoramento-de-entregas-MKRa-oes",
  },
  "task-manager": {
    titulo: "Simulador de Banco",
    imagem: "https://via.placeholder.com/800x400/7c3aed/ffffff?text=Task+Manager+Pro",
    tecnologias: ["bx bxl-java", "bx bxl-typescript", "bx bxl-nodejs", "devicon-mongodb-plain colored"],
    descricaoLonga:
      "Um sistema completo de simulação bancária, desenvolvido com foco em reforçar os conceitos fundamentais da programação orientada a objetos (POO) e da arquitetura de sistemas. A aplicação simula o ambiente de um banco real, permitindo o gerenciamento de contas, operações financeiras e controle de transações de forma segura e estruturada.",
    repoLink: "https://github.com/KaioAlixandre/Sistema-Bancario",
  },
  "weather-app": {
    titulo: "App de Clima",
    imagem: "https://via.placeholder.com/800x400/0f172a/ffffff?text=Weather+App",
    tecnologias: ["bx bxl-react", "bx bxl-javascript", "bx bx-data", "bx bxl-css3"],
    descricaoLonga:
      "Aplicativo de previsão do tempo que utiliza APIs externas para fornecer informações meteorológicas precisas. Inclui funcionalidades como geolocalização automática, busca por cidade, previsão de 7 dias, gráficos interativos de temperatura e precipitação, e alertas meteorológicos. O design é totalmente responsivo e otimizado para diferentes dispositivos.",
    repoLink: "https://github.com/kaio/weather-app",
  },
}

// Abrir modal
detalheBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const projetoId = btn.getAttribute("data-projeto-id")
    const projeto = projetos[projetoId]

    if (projeto) {
      document.getElementById("modal-titulo").textContent = projeto.titulo
      document.getElementById("modal-imagem").src = projeto.imagem
      document.getElementById("modal-descricao-longa").textContent = projeto.descricaoLonga
      document.getElementById("modal-repo-link").href = projeto.repoLink

      // Limpar e adicionar tecnologias
      const modalTecnologias = document.getElementById("modal-tecnologias")
      modalTecnologias.innerHTML = ""
      projeto.tecnologias.forEach((tech) => {
        const icon = document.createElement("i")
        icon.className = `${tech} projeto-tech-icon`
        modalTecnologias.appendChild(icon)
      })

      modal.classList.add("active")
    }
  })
})

// Fechar modal
fecharModal.addEventListener("click", () => {
  modal.classList.remove("active")
})

// Fechar modal clicando fora
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active")
  }
})

// Scroll suave para seções
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Animação das barras de progresso quando entram na viewport
const observerOptions = {
  threshold: 0.5,
  rootMargin: "0px 0px -100px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const progressBars = entry.target.querySelectorAll(".progress-bar")
      progressBars.forEach((bar) => {
        const width = bar.style.width
        bar.style.width = "0%"
        setTimeout(() => {
          bar.style.width = width
        }, 200)
      })
    }
  })
}, observerOptions)

// Observar a seção de skills
const skillsSection = document.querySelector("#skills")
if (skillsSection) {
  observer.observe(skillsSection)
}

// Adicionar classe active ao link do menu baseado na seção atual
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section[id], main[id]")
  const scrollPos = window.scrollY + 100

  sections.forEach((section) => {
    const top = section.offsetTop
    const bottom = top + section.offsetHeight
    const id = section.getAttribute("id")
    const navLink = document.querySelector(`.menu-link[href="#${id}"]`)

    if (scrollPos >= top && scrollPos <= bottom) {
      document.querySelectorAll(".menu-link").forEach((link) => {
        link.classList.remove("active")
      })
      if (navLink) {
        navLink.classList.add("active")
      }
    }
  })
})
