export function Testimonial() {
  return (
    <section className="deps">
      <div className="mw">
        <div className="sec-head">
          <p className="tag">Prova social</p>
          <h2 className="sec-h serif">O que especialistas dizem<br/>sobre os <em>resultados</em></h2>
          <p className="sec-desc" style={{fontSize:'12px',color:'var(--mt)',marginTop:'8px'}}>* Depoimentos reais, com dados preservados conforme normas CFM/CFO de publicidade médica.</p>
        </div>
        <div className="deps-grid">
          <div className="dep">
            <div className="dep-stars"></div>
            <div className="dep-q">Passei anos dependendo de indicação de colegas. Em 90 dias a agenda estava cheia com pacientes que chegam já decididos pelo procedimento. É uma mudança de realidade.</div>
            <div className="dep-line"></div>
            <div className="dep-auth">
              <div className="dep-av serif">R</div>
              <div>
                <div className="dep-name">Dr. Rafael M.</div>
                <div className="dep-role">Cirurgião Plástico  Goiânia/GO</div>
                <div className="dep-cfm">CRM-GO </div>
              </div>
            </div>
          </div>
          <div className="dep">
            <div className="dep-stars"></div>
            <div className="dep-q">Já tinha queimado dinheiro com outra agência. O diferencial aqui é que eles entendem que meu paciente pesquisa muito antes de decidir  e constroem a autoridade digital que preciso.</div>
            <div className="dep-line"></div>
            <div className="dep-auth">
              <div className="dep-av serif">P</div>
              <div>
                <div className="dep-name">Dra. Patrícia A.</div>
                <div className="dep-role">Dermatologista Estética  Goiânia/GO</div>
                <div className="dep-cfm">CRM-GO </div>
              </div>
            </div>
          </div>
          <div className="dep">
            <div className="dep-stars"></div>
            <div className="dep-q">A automação de WhatsApp foi o que mais surpreendeu. Leads que antes eu perdia fora do horário, hoje chegam qualificados no dia seguinte prontos para agendar o all-on-4.</div>
            <div className="dep-line"></div>
            <div className="dep-auth">
              <div className="dep-av serif">M</div>
              <div>
                <div className="dep-name">Dr. Marcos T.</div>
                <div className="dep-role">Implantodontista  Goiânia/GO</div>
                <div className="dep-cfm">CRO-GO </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
