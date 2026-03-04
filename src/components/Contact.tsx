export function Contact() {
  return (
    <section className="cta-fin" id="contato">
      <div className="mw" style={{position:"relative",zIndex:1,textAlign:"center"}}>
        <p className="tag" style={{justifyContent:"center",display:"flex",marginBottom:"12px"}}>Próximo passo</p>
        <h2 className="sec-h serif" style={{fontSize:"clamp(38px,5vw,66px)"}}>
          Seu paciente ideal está<br/>pesquisando <em>agora no Google.</em><br/>Ele vai encontrar você?
        </h2>
        <p className="sec-desc center" style={{margin:"20px auto 0"}}>Faça um diagnóstico digital gratuito. Identificamos em 30 minutos onde sua agenda está perdendo pacientes de alto valor todo mês.</p>

        <a
          href="https://wa.me/5562999999999?text=Quero%20um%20diagn%C3%B3stico%20gratuito%20para%20minha%20cl%C3%ADnica"
          target="_blank"
          rel="noopener noreferrer"
          className="wpp-btn"
          style={{margin:"40px auto 8px",display:"inline-flex"}}
        >
          <span className="wpp-icon">💬</span>
          Agendar diagnóstico gratuito pelo WhatsApp
        </a>

        <p className="form-note" style={{marginTop:"12px"}}>Ou preencha e entramos em contato em até 2 horas</p>

        <form className="cta-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-row">
            <input className="fi" type="text" placeholder="Nome completo" required />
            <input className="fi" type="tel" placeholder="WhatsApp" required />
          </div>
          <select className="fi">
            <option value="">Sua especialidade...</option>
            <option>Cirurgia Plástica</option>
            <option>Dermatologia Estética</option>
            <option>Implantodontia</option>
            <option>Odontologia Estética / Lentes</option>
            <option>Ortopedia</option>
            <option>Medicina Estética</option>
            <option>Outra especialidade</option>
          </select>
          <select className="fi">
            <option value="">Maior desafio hoje...</option>
            <option>Dependência de indicação</option>
            <option>Leads desqualificados / sem poder aquisitivo</option>
            <option>Site que não gera pacientes</option>
            <option>Não apareço no Google</option>
            <option>Perco leads fora do horário</option>
            <option>Quero escalar mas não sei como</option>
          </select>
          <button type="submit" className="fi-submit">Quero meu diagnóstico gratuito </button>
          <p className="form-note">Sem compromisso  100% gratuito  Resposta em até 2 horas  Conformidade CFM/CFO garantida</p>
        </form>
      </div>
    </section>
  )
}
