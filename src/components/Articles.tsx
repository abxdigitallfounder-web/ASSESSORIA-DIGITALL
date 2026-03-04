export function Articles() {
  return (
    <section className="cred" id="sobre">
      <div className="mw">
        <div className="cred-grid">
          <div className="cred-img">
            <img src="/escritorio.png" alt="Escritório da agência em Goiânia" />
            <div className="cred-img-label">
              <div className="cil-dot"></div>
              <div className="cil-text">
                <strong>Estrutura dedicada em Goiânia</strong>
                Equipe especializada 100% em saúde de alto ticket
              </div>
            </div>
          </div>
          <div>
            <p className="tag">Por que somos diferentes</p>
            <h2 className="sec-h serif" style={{marginTop:'12px',marginBottom:'36px'}}>Uma agência que entende<br/><em>seu mercado específico</em></h2>
            <div className="cred-items">
              <div className="ci">
                <div className="ci-ico">🏥</div>
                <div>
                  <div className="ci-tit serif">100% focados em saúde de alto ticket</div>
                  <div className="ci-txt">Não trabalhamos com padaria, pet shop ou loja de roupas. Cada estratégia, cada copy, cada campanha foi pensada para o contexto de especialistas médicos e odontológicos.</div>
                </div>
              </div>
              <div className="ci">
                <div className="ci-ico">⚖️</div>
                <div>
                  <div className="ci-tit serif">Conformidade CFM e CFO garantida</div>
                  <div className="ci-txt">Sabemos exatamente o que pode e o que não pode no marketing para profissionais de saúde. Nenhum cliente nosso recebeu notificação de Conselho por causa de marketing.</div>
                </div>
              </div>
              <div className="ci">
                <div className="ci-ico">📍</div>
                <div>
                  <div className="ci-tit serif">Especialistas no mercado de Goiânia</div>
                  <div className="ci-txt">Conhecemos seus concorrentes, seu público e como o paciente goianiense pesquisa procedimentos. Estratégia feita pra cá, não copiada de São Paulo ou dos EUA.</div>
                </div>
              </div>
              <div className="ci">
                <div className="ci-ico">🔓</div>
                <div>
                  <div className="ci-tit serif">Sem contrato de fidelidade forçado</div>
                  <div className="ci-txt">Continuamos juntos porque entregamos resultado. 3 meses de contrato inicial (tempo mínimo para resultado real), depois mês a mês. Confiamos no nosso trabalho.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
