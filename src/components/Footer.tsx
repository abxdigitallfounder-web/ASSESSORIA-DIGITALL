export function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-top">
          <div>
            <div className="footer-logo">
              <img src="/logo.jpg" alt="Logo" style={{height:'38px',width:'auto',objectFit:'contain'}} />
            </div>
            <p className="footer-desc">Agência especializada em marketing digital para especialistas de saúde de alto ticket em Goiânia e Centro-Oeste.</p>
          </div>
          <div className="footer-col">
            <h4>Especialidades</h4>
            <ul>
              <li><a href="#">Cirurgia Plástica</a></li>
              <li><a href="#">Dermatologia Estética</a></li>
              <li><a href="#">Implantodontia</a></li>
              <li><a href="#">Odontologia Estética</a></li>
              <li><a href="#">Ortopedia</a></li>
              <li><a href="#">Medicina Estética</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Serviços</h4>
            <ul>
              <li><a href="#">Sites que Convertem</a></li>
              <li><a href="#">Google Ads Saúde</a></li>
              <li><a href="#">SEO Local Goiânia</a></li>
              <li><a href="#">Automações WhatsApp</a></li>
              <li><a href="#">CRM para Clínicas</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Empresa</h4>
            <ul>
              <li><a href="#">Sobre nós</a></li>
              <li><a href="#">Cases de resultado</a></li>
              <li><a href="#contato">Diagnóstico gratuito</a></li>
              <li><a href="#">Política de privacidade</a></li>
              <li><a href="#">Termos de uso</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bot">
          <div className="footer-copy"> Assessoria Digitall 2026  CNPJ 60.989.151/0001-46 Goiânia  GO</div>
          <div className="footer-links">
            <a href="#">Privacidade</a>
            <a href="#">Termos</a>
            <a href="#">LGPD</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
