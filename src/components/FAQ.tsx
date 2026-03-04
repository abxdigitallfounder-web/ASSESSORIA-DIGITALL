import { useState } from "react";

interface FaqItem {
  q: string;
  a: string;
}

const items: FaqItem[] = [
  {
    q: "Vocês trabalham dentro das normas CFM e CFO?",
    a: "Sim  100%. Conhecemos a Resolução CFM 2.336/2023 e as normas do CFO sobre publicidade odontológica. Nenhuma campanha, copy ou imagem é veiculada sem verificação de conformidade. Jamais usamos comparações, antes/após fora de contexto clínico ou promoções proibidas.",
  },
  {
    q: "Como atrair pacientes de alto ticket e não apenas curiosos?",
    a: "Através de segmentação por intenção de compra no Google, copy que filtra por perfil (não usa gatilhos de preço baixo) e automações que qualificam antes do primeiro contato. Paciente de alto ticket chega pesquisando o especialista, não o menor preço  e é exatamente esse perfil que buscamos.",
  },
  {
    q: "Quanto tempo até ver resultado na agenda?",
    a: "Google Ads: primeiros leads em 7 a 14 dias. Resultado consistente e previsível: 60 a 90 dias. SEO: posicionamento orgânico sólido em 90 a 120 dias. Quem prometer resultados da noite para o dia está mentindo  e os especialistas de saúde sabem disso melhor do que ninguém.",
  },
  {
    q: "Qual investimento mínimo em mídia?",
    a: "Recomendamos entre R$2.000 e R$5.000/mês em verba de mídia (Google Ads) para especialistas em Goiânia  dependendo da especialidade e procedimentos. No diagnóstico gratuito, analisamos sua situação e indicamos o investimento ideal para o seu objetivo de retorno.",
  },
  {
    q: "Preciso ter experiência em marketing para trabalhar com vocês?",
    a: "Não. Você cuida da medicina  nós cuidamos do digital. Nossa função é transformar estratégia em resultado mensurável e apresentar de forma simples: quantos leads chegaram, quantas consultas foram geradas, qual o custo por paciente novo. Sem jargão técnico desnecessário.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="faq-sec">
      <div className="mw">
        <div className="sec-head">
          <p className="tag">Dúvidas frequentes</p>
          <h2 className="sec-h serif">Respostas diretas,<br/><em>sem enrolação</em></h2>
        </div>
        <div className="faq-wrap">
          {items.map((item, i) => (
            <div
              key={i}
              className={`faq-item${openIndex === i ? " open" : ""}`}
            >
              <div
                className="faq-q-row"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="faq-qtxt serif">{item.q}</span>
                <span className="faq-arr">+</span>
              </div>
              <div className="faq-ans">{item.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
