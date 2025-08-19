export default function Services() {
  const services = [
    {
      icon: "bx bx-code-alt",
      title: "Desenvolvimento Web",
      description: "Criação de sites e aplicações web modernas, responsivas e otimizadas para performance e SEO.",
    },
    {
      icon: "bx bx-mobile-alt",
      title: "Desenvolvimento Mobile",
      description: "Desenvolvimento de aplicativos móveis nativos e híbridos para iOS e Android.",
    },
    {
      icon: "bx bx-palette",
      title: "UI/UX Design",
      description: "Design de interfaces intuitivas e experiências de usuário que convertem e encantam.",
    },
  ]

  return (
    <section id="servicos" className="servicos-section">
      <h2 className="servicos-titulo-principal">Serviços</h2>
      <div className="servicos-conteudo">
        {services.map((service, index) => (
          <div key={index} className="servico">
            <i className={`${service.icon} servicos-icon`}></i>
            <h3 className="servicos-titulo">{service.title}</h3>
            <p className="servicos-descricao">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
