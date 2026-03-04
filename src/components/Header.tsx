export function Header() {
  return (
    <nav>
      <div className="nav-logo">
        <img src="/logo.jpg" alt="Logo" style={{height:'42px',width:'auto',objectFit:'contain'}} />
      </div>
      <ul>
        <li><a href="#dores">O Problema</a></li>
        <li><a href="#servicos">Serviços</a></li>
        <li><a href="#resultados">Resultados</a></li>
        <li><a href="#sobre">Sobre</a></li>
      </ul>
      <a
        href="https://wa.me/5562999999999?text=Quero%20um%20diagn%C3%B3stico%20gratuito"
        target="_blank"
        rel="noopener noreferrer"
        className="nav-cta"
      >
        Falar no WhatsApp
      </a>
    </nav>
  )
}
