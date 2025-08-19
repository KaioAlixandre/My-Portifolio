export default function Contact() {
  return (
    <section id="contatos" className="contatos">
      <h2 className="contatos-titulo">Contato</h2>
      <div className="contatos-conteudo">
        <p className="contatos-texto">Vamos trabalhar juntos? Entre em contato comigo:</p>
        <div className="contatos-sociais">
          <a href="https://www.linkedin.com/in/kaio/" target="_blank" className="contato-link" rel="noreferrer">
            <i className="bx bxl-linkedin"></i> LinkedIn
          </a>
          <a href="https://github.com/kaio" target="_blank" className="contato-link" rel="noreferrer">
            <i className="bx bxl-github"></i> GitHub
          </a>
          <a
            href="https://wa.me/5511999999999?text=Olá%20Gostaria%20de%20mais%20informações"
            target="_blank"
            className="contato-link"
            rel="noreferrer"
          >
            <i className="bx bxl-whatsapp"></i> WhatsApp
          </a>
          <a href="https://www.instagram.com/kaio/" target="_blank" className="contato-link" rel="noreferrer">
            <i className="bx bxl-instagram"></i> Instagram
          </a>
          <a href="mailto:kaio@email.com" target="_blank" className="contato-link" rel="noreferrer">
            <i className="bx bx-envelope"></i> E-mail
          </a>
        </div>
      </div>
    </section>
  )
}
