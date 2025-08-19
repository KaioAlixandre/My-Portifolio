export default function About() {
  return (
    <section className="sobre" id="sobre">
      <h2 className="sobre-titulo-personalizado-fora-quadro">Sobre</h2>
      <div className="sobre-quadro">
        <h2 className="sobre-titulo-personalizado">
          Muito prazer, <span className="sobre-titulo-destaque">eu sou Kaio!</span>
        </h2>
        <p className="sobre-texto">
          Sou um{" "}
          <span style={{ color: "var(--secundaria)", fontWeight: 600 }}>
            desenvolvedor apaixonado por criar experiências digitais
          </span>{" "}
          que unem tecnologia, design e propósito. Minha missão é transformar ideias em soluções que encantam e resolvem
          problemas de verdade.
        </p>

        <div className="sobre-tags">
          <span className="tag">Front-end & Back-end</span>
          <span className="tag">UI/UX</span>
          <span className="tag">APIs</span>
          <span className="tag">Mobile</span>
          <span className="tag">Cloud</span>
        </div>

        <p className="sobre-texto">
          <br />
          Com experiência em{" "}
          <span style={{ color: "var(--secundaria)", fontWeight: 600 }}>JavaScript, TypeScript, React, Node.js</span> e
          tecnologias modernas, estou sempre em busca de aprender novas ferramentas e aprimorar minhas habilidades para
          entregar soluções de qualidade.
        </p>
      </div>
    </section>
  )
}
