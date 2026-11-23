import Header from '../components/Header'
import Footer from '../components/Footer'
import CookieBanner from '../components/CookieBanner'
import { CONTACT } from '../config'
import { openCookiePrefs } from '../consent'

export default function Privacy() {
  return (
    <>
      <a className="skip" href="#conteudo">
        Ir para o conteúdo
      </a>
      <Header />
      <main id="conteudo" className="legal">
        <div className="container legal__wrap">
          <p className="eyebrow">Privacidade e proteção de dados</p>
          <h1 className="legal__title">Política de Privacidade</h1>
          <p className="legal__meta">Última atualização: 23 de novembro de 2026</p>

          <p>
            O Instituto Autismo Campo Grande respeita a sua privacidade e trata dados pessoais conforme a Lei
            Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD). Esta política explica, de forma simples,
            quais informações podem ser tratadas ao usar este site, para quê e quais são os seus direitos.
          </p>

          <h2>1. Quem é o responsável</h2>
          <p>
            O controlador dos dados é o <strong>Instituto Autismo Campo Grande</strong>, movimento social
            comunitário da Zona Oeste do Rio de Janeiro. Para qualquer assunto sobre privacidade, inclusive
            falar com o encarregado pelo tratamento de dados, escreva para{' '}
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.
          </p>

          <h2>2. Quais dados tratamos</h2>
          <ul>
            <li>
              <strong>Dados de navegação:</strong> ao acessar o site, o provedor de hospedagem pode registrar
              automaticamente informações técnicas como endereço IP, data e hora, páginas acessadas,
              navegador e dispositivo. Esses registros servem para o funcionamento e a segurança do serviço.
            </li>
            <li>
              <strong>Preferências de privacidade:</strong> guardamos no seu navegador a escolha feita no
              aviso de cookies, para não perguntar novamente a cada visita.
            </li>
            <li>
              <strong>Dados que você nos envia:</strong> este site não possui formulários. Se você entrar em
              contato por WhatsApp, e-mail ou Instagram, receberemos as informações que você mesmo
              compartilhar (por exemplo, nome, telefone e o conteúdo da mensagem).
            </li>
            <li>
              <strong>Grupo de apoio no WhatsApp:</strong> ao entrar no grupo por meio do botão &ldquo;Apoie o
              Instituto&rdquo;, seu número de telefone e nome de perfil ficam visíveis para os demais
              participantes, conforme as regras do próprio WhatsApp. Você pode sair do grupo quando quiser.
            </li>
          </ul>

          <h2>3. Para que usamos e em que base legal</h2>
          <ul>
            <li>Manter o site funcionando e seguro — legítimo interesse (art. 7º, IX, da LGPD).</li>
            <li>Responder mensagens, dúvidas e pedidos de apoio — atendimento a pedido do titular e legítimo interesse.</li>
            <li>Lembrar suas preferências e, se vierem a existir, ativar estatísticas opcionais — consentimento (art. 7º, I).</li>
          </ul>
          <p>Não vendemos dados pessoais e não os usamos para publicidade.</p>

          <h2>4. Cookies e armazenamento local</h2>
          <p>
            Atualmente o site usa apenas armazenamento essencial no seu navegador (o registro da sua escolha
            de privacidade). Não utilizamos cookies de publicidade nem ferramentas de estatística de
            terceiros. Caso isso mude, o uso dependerá do seu consentimento e esta política será atualizada.
            Você pode rever a sua escolha a qualquer momento:{' '}
            <button type="button" className="legal__link" onClick={openCookiePrefs}>
              abrir preferências de cookies
            </button>
            .
          </p>
          <p>
            As fontes de letra do site são entregues pelo próprio domínio, sem requisições a serviços de
            fontes de terceiros.
          </p>

          <h2>5. Compartilhamento</h2>
          <p>Os dados podem ser tratados por prestadores que viabilizam o serviço, sempre no limite necessário:</p>
          <ul>
            <li>provedor de hospedagem do site;</li>
            <li>WhatsApp e Instagram (Meta) e Gmail (Google), quando você escolhe falar conosco por esses canais — cada um com sua própria política de privacidade.</li>
          </ul>
          <p>
            Alguns desses serviços podem armazenar dados em servidores fora do Brasil. Nesses casos, a
            transferência internacional ocorre conforme o art. 33 da LGPD.
          </p>

          <h2>6. Imagens de pessoas, crianças e dados sensíveis</h2>
          <p>
            Nossas ações são comunitárias e o site exibe fotografias de eventos. Imagens de crianças e
            adolescentes são tratadas no seu melhor interesse (art. 14 da LGPD) e só devem ser publicadas com
            autorização de ao menos um dos pais ou responsável legal. Informações relacionadas à saúde, como o
            diagnóstico de autismo, são dados pessoais sensíveis (art. 11) — não divulgamos informações de
            saúde que identifiquem alguém.
          </p>
          <p>
            Se você, ou o seu filho ou tutelado, aparece em alguma imagem e deseja que ela seja removida ou
            substituída, basta pedir pelo e-mail abaixo. Atenderemos o quanto antes.
          </p>

          <h2>7. Seus direitos</h2>
          <p>Nos termos do art. 18 da LGPD, você pode solicitar, a qualquer momento:</p>
          <ul>
            <li>confirmação de que tratamos dados seus e acesso a eles;</li>
            <li>correção de dados incompletos, inexatos ou desatualizados;</li>
            <li>anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desacordo com a lei;</li>
            <li>portabilidade, quando aplicável;</li>
            <li>eliminação dos dados tratados com base no consentimento;</li>
            <li>informação sobre com quem compartilhamos seus dados;</li>
            <li>revogação do consentimento e informação sobre a possibilidade de não consentir.</li>
          </ul>
          <p>
            Para exercer qualquer um desses direitos, escreva para{' '}
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> ou chame no WhatsApp{' '}
            <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer">
              {CONTACT.whatsappDisplay}
            </a>
            . Se entender que o tratamento não respeitou a lei, você também pode registrar reclamação na
            Autoridade Nacional de Proteção de Dados (ANPD) em{' '}
            <a href="https://www.gov.br/anpd" target="_blank" rel="noopener noreferrer">
              gov.br/anpd
            </a>
            .
          </p>

          <h2>8. Por quanto tempo guardamos</h2>
          <p>
            Mantemos os dados apenas pelo tempo necessário para cumprir as finalidades acima ou obrigações
            legais. As mensagens recebidas pelos canais de contato são guardadas enquanto o atendimento
            estiver em andamento e, depois, eliminadas ou anonimizadas quando não forem mais necessárias.
          </p>

          <h2>9. Segurança</h2>
          <p>
            Adotamos medidas técnicas e administrativas razoáveis para proteger os dados, como conexão segura
            (HTTPS) e acesso restrito às informações. Nenhum sistema é totalmente imune a riscos; em caso de
            incidente relevante, comunicaremos os titulares e a ANPD conforme a lei.
          </p>

          <h2>10. Crianças e adolescentes</h2>
          <p>
            O site é voltado a adultos, familiares, profissionais e apoiadores. Não coletamos intencionalmente
            dados de crianças e adolescentes diretamente por este site.
          </p>

          <h2>11. Mudanças nesta política</h2>
          <p>
            Podemos atualizar este texto para refletir mudanças no site ou na lei. A data da última
            atualização fica sempre no topo desta página.
          </p>

          <p className="legal__back">
            <a className="btn btn--primary" href="/">
              Voltar ao início
            </a>
          </p>
        </div>
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
