export function Hero() {
  return (
    <section className="hero">
      <div className="hero-l">
        <div className="hero-eyebrow">
          <span className="tag">Especialistas em Saúde de Alto Ticket  Goiânia</span>
        </div>
        <h1 className="hero-h1 serif">
          Sua agenda preenchida<br/>com pacientes que<br/><em>já decidem na consulta.</em>
        </h1>
        <p className="hero-sub">
          Chega de esperar indicação. <strong>Cirurgiões Plásticos, Dermatologistas, Implantodontistas e Ortopedistas</strong> em Goiânia usam nossa estrutura digital para lotar a agenda com pacientes de alto valor  de forma previsível.
        </p>
        <div className="hero-ctas">
          <a
            href="https://wa.me/5562999999999?text=Quero%20um%20diagn%C3%B3stico%20gratuito"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-p"
          >
            Quero meu diagnóstico grátis →
          </a>
          <a href="#resultados" className="btn-s">Ver resultados reais</a>
        </div>
        <div className="hero-nums">
          <div>
            <div className="hn-val serif">3×</div>
            <div className="hn-label">mais consultas<br/>de alto ticket</div>
          </div>
          <div>
            <div className="hn-val serif">90d</div>
            <div className="hn-label">para resultados<br/>mensuráveis</div>
          </div>
          <div>
            <div className="hn-val serif">−68%</div>
            <div className="hn-label">custo por lead<br/>qualificado</div>
          </div>
        </div>
      </div>
      <div className="hero-r">
        <img src="/escritorio.png" alt="Estrutura da agência" />
        <div className="hero-badge">
          <div className="badge-dot"></div>
          <div className="badge-text">
            <strong>Estrutura física em Goiânia</strong>
            Equipe dedicada exclusivamente ao mercado de saúde de alto ticket
          </div>
        </div>
      </div>
    </section>
  )
}
