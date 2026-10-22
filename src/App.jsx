import { useEffect, useState } from 'react';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      return undefined;
    }

    document.documentElement.classList.add('motion-ready');
    const revealItems = document.querySelectorAll(
      '.watch-art, .watch-copy, .features-section .eyebrow, .features-section .section-title, .feature-item, .app-section .eyebrow, .app-section .section-title, .section-intro, .app-preview, .cta-section > *',
    );
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14, rootMargin: '0px 0px -4% 0px' });

    revealItems.forEach((item, index) => {
      item.classList.add('reveal-on-scroll');
      item.style.setProperty('--reveal-order', index % 5);
      revealObserver.observe(item);
    });

    return () => {
      revealObserver.disconnect();
      document.documentElement.classList.remove('motion-ready');
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#inicio" aria-label="Nexa Protect, início">NEXA <span>PROTECT</span></a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="site-nav"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
        >
          <span></span><span></span>
        </button>
        <nav className={`site-nav${menuOpen ? ' is-open' : ''}`} id="site-nav" aria-label="Navegação principal" onClick={closeMenu}>
          <a href="#watch">Watch</a>
          <a href="#recursos">Recursos</a>
          <a href="#app">App</a>
          <a href="#comecar">Começar</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-content">
            <svg className="hero-mark" viewBox="0 0 84 96" fill="none" aria-hidden="true">
              <path d="M42 4 78 18v30c0 22-16 38-36 44C22 86 6 70 6 48V18L42 4Z" />
              <path d="m26 38 16 28 16-28" />
            </svg>
            <h1>NEXA</h1>
            <p className="hero-submark">PROTECT</p>
            <span className="hero-rule"></span>
            <p className="hero-copy">Mais do que segurança.<br />É liberdade.</p>
            <a className="button button-primary" href="#comecar">Conheça a Nexa <span aria-hidden="true">&#8594;</span></a>
          </div>
          <a className="scroll-cue" href="#watch" aria-label="Conheça a Nexa Protect Watch"><span></span></a>
        </section>

        <section className="watch-section section-wrap" id="watch">
          <div className="watch-art" role="img" aria-label="Pulseira Nexa Protect, discreta e sem tela">
            <div className="band band-top"></div>
            <div className="watch-face"><span></span></div>
            <div className="band band-bottom"></div>
          </div>
          <div className="watch-copy">
            <p className="eyebrow">NEXA PROTECT WATCH</p>
            <h2>Discreta. Leve.<br />Sem tela.</h2>
            <p>Uma pulseira que acompanha você o dia todo e aciona seus contatos de confiança com um toque, sem precisar pegar o celular.</p>
            <a className="text-link" href="#recursos">Descubra como funciona <span aria-hidden="true">&#8594;</span></a>
          </div>
        </section>

        <section className="features-section section-wrap" id="recursos">
          <div className="section-inner">
            <p className="eyebrow">PROTEÇÃO QUE ACOMPANHA VOCÊ</p>
            <h2 className="section-title">Sempre com você</h2>
            <div className="feature-grid">
              <article className="feature-item">
                <svg viewBox="0 0 32 32" fill="none" aria-hidden="true"><path d="M16 29C8 22 5 16 5 12a7 7 0 0 1 11-5.5A7 7 0 0 1 27 12c0 4-3 10-11 17Z" /></svg>
                <h3>Monitora sua localização</h3><p>Em tempo real.</p>
              </article>
              <article className="feature-item">
                <svg viewBox="0 0 32 32" fill="none" aria-hidden="true"><path d="m16 3 11 4v9c0 6-5 11-11 13C10 27 5 22 5 16V7l11-4Z" /><path d="m11 16 4 4 6-8" /></svg>
                <h3>Botão de emergência</h3><p>Alerta seus contatos de confiança.</p>
              </article>
              <article className="feature-item">
                <svg viewBox="0 0 32 32" fill="none" aria-hidden="true"><circle cx="16" cy="10" r="4" /><circle cx="6" cy="13" r="3" /><circle cx="26" cy="13" r="3" /><path d="M8 26c0-5 3-8 8-8s8 3 8 8" /></svg>
                <h3>Compartilhamento de trajeto</h3><p>Seus amigos sabem onde você está.</p>
              </article>
              <article className="feature-item">
                <svg viewBox="0 0 32 32" fill="none" aria-hidden="true"><path d="M16 29C10 22 7 17 7 13a9 9 0 0 1 18 0c0 4-3 9-9 16Z" /><circle cx="16" cy="13" r="3" /></svg>
                <h3>Check-in automático</h3><p>Se você não confirmar a chegada, o app age.</p>
              </article>
              <article className="feature-item">
                <svg viewBox="0 0 32 32" fill="none" aria-hidden="true"><path d="M13 19a5 5 0 0 0 7 0l5-5a5 5 0 0 0-7-7l-2 2" /><path d="M19 13a5 5 0 0 0-7 0l-5 5a5 5 0 0 0 7 7l2-2" /></svg>
                <h3>Integração com o Nexa</h3><p>Mais proteção, juntos.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="app-section section-wrap" id="app">
          <div className="section-inner">
            <p className="eyebrow">SUA SEGURANÇA, NA PALMA DA MÃO</p>
            <h2 className="section-title">O app</h2>
            <p className="section-intro">Sua segurança, em todos os momentos.</p>
            <div className="app-grid">
              <article className="app-preview">
                <div className="phone-screen">
                  <div className="app-greeting">Olá, Arthur</div><p className="app-muted">Tudo certo por aqui.</p>
                  <div className="status-panel">
                    <div className="status-heading"><span className="status-orb"></span><div><strong>Você está seguro</strong><small>Sem anomalias no momento.</small></div></div>
                    <div className="status-data"><span>Localização<strong className="positive">Ativa</strong></span><span>Bateria<strong>92%</strong></span><span>Conexão<strong className="positive">Online</strong></span></div>
                  </div>
                  <p className="app-label">Atalhos</p><div className="app-action">Iniciar trajeto <span>&#8594;</span></div><div className="app-action">Botão de emergência <span>&#8594;</span></div>
                </div>
                <h3>Tela principal</h3>
              </article>
              <article className="app-preview">
                <div className="phone-screen">
                  <div className="app-bar"><span>Localização</span><span className="app-dots">&#8226;&#8226;&#8226;</span></div>
                  <div className="map-preview"><span className="map-route"></span><span className="map-pin"></span></div>
                  <div className="address-panel"><span>Você está em:</span><strong>Av. Tuiuti, Maringá - PR</strong></div>
                  <div className="map-legend"><span className="legend-dot"></span> Localização compartilhada</div>
                </div>
                <h3>Mapa em tempo real</h3>
              </article>
              <article className="app-preview">
                <div className="phone-screen emergency-screen">
                  <div className="app-bar"><span>Emergência</span><span className="app-dots">&#8226;&#8226;&#8226;</span></div>
                  <div className="emergency-pulse"><svg viewBox="0 0 44 44" fill="none" aria-hidden="true"><path d="M22 6 40 38H4L22 6Z" /><path d="M22 18v9m0 5v1" /></svg></div>
                  <p>Sua localização será enviada para seus contatos de confiança.</p>
                  <div className="emergency-action">Enviar alerta agora</div>
                </div>
                <h3>Botão de emergência</h3>
              </article>
              <article className="app-preview">
                <div className="phone-screen">
                  <div className="app-bar"><span>Em trajeto</span><span className="app-dots">&#8226;&#8226;&#8226;</span></div>
                  <div className="destination-panel"><span>PARA</span><strong>Casa</strong><small>Chegada estimada: 22 min</small></div>
                  <div className="journey-list"><div><strong>Iniciou o trajeto</strong><span>16:42</span></div><div><strong>Em andamento</strong><span>16:58</span></div><div><strong>Chegada prevista</strong><span>17:09</span></div></div>
                </div>
                <h3>Modo “indo para casa”</h3>
              </article>
            </div>
          </div>
        </section>

        <section className="cta-section" id="comecar">
          <p className="eyebrow">NEXA PROTECT</p>
          <h2>Sua segurança,<br />em todos os momentos.</h2>
          <a className="button button-primary" href="mailto:contato@nexaprotect.com?subject=Quero%20conhecer%20a%20Nexa%20Protect">Quero conhecer <span aria-hidden="true">&#8594;</span></a>
          <p className="cta-note">Mais tranquilidade para seguir o seu caminho.</p>
        </section>
      </main>

      <footer className="site-footer"><a className="wordmark" href="#inicio">NEXA <span>PROTECT</span></a><span>SEMPRE COM VOCÊ</span><a className="back-top" href="#inicio">Voltar ao início &#8593;</a></footer>
    </>
  );
}

export default App;