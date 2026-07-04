const projectData = {
  artemis: {
    icon: 'fa-satellite',
    area: { pt: 'Aeroespacial', en: 'Aerospace', it: 'Aerospazio' },
    title: { pt: 'Projeto Artemis', en: 'Project Artemis', it: 'Progetto Artemis' },
    status: { pt: 'Operacional', en: 'Operational', it: 'Operativo' },
    short: {
      pt: 'Monitoramento orbital, sensoriamento remoto e inteligência geoespacial para operações críticas.',
      en: 'Orbital monitoring, remote sensing and geospatial intelligence for critical operations.',
      it: 'Monitoraggio orbitale, telerilevamento e intelligence geospaziale per operazioni critiche.'
    },
    description: {
      pt: 'Artemis é a camada orbital da LuthorCorp: visão estratégica, leitura territorial e monitoramento contínuo para decisões que exigem escala global.',
      en: 'Artemis is LuthorCorp’s orbital layer: strategic visibility, territorial reading and continuous monitoring for decisions that require global scale.',
      it: 'Artemis è il livello orbitale di LuthorCorp: visione strategica, lettura territoriale e monitoraggio continuo per decisioni che richiedono scala globale.'
    },
    metrics: [['LEO', {pt:'satélites e sensores', en:'satellites and sensors', it:'satelliti e sensori'}], ['24/7', {pt:'monitoramento contínuo', en:'continuous monitoring', it:'monitoraggio continuo'}], ['Global', {pt:'cobertura estratégica', en:'strategic coverage', it:'copertura strategica'}]],
    details: [
      { title: {pt:'Vigilância orbital', en:'Orbital watch', it:'Sorveglianza orbitale'}, text: {pt:'Captação de sinais e imagens para acompanhar ativos, rotas e regiões sensíveis.', en:'Signal and imagery capture to track assets, routes and sensitive regions.', it:'Acquisizione di segnali e immagini per seguire asset, rotte e regioni sensibili.'}},
      { title: {pt:'Mapas táticos', en:'Tactical maps', it:'Mappe tattiche'}, text: {pt:'Painéis geoespaciais para operações executivas, logísticas e institucionais.', en:'Geospatial dashboards for executive, logistics and institutional operations.', it:'Dashboard geospaziali per operazioni esecutive, logistiche e istituzionali.'}},
      { title: {pt:'Resposta rápida', en:'Rapid response', it:'Risposta rapida'}, text: {pt:'Alertas para eventos climáticos, risco físico e alterações em zonas críticas.', en:'Alerts for climate events, physical risk and changes in critical zones.', it:'Avvisi per eventi climatici, rischio fisico e variazioni in zone critiche.'}}
    ]
  },
  athena: {
    icon: 'fa-brain',
    area: { pt: 'Inteligência', en: 'Intelligence', it: 'Intelligence' },
    title: { pt: 'Projeto Athena', en: 'Project Athena', it: 'Progetto Athena' },
    status: { pt: 'Prioritário', en: 'Priority', it: 'Prioritario' },
    short: {
      pt: 'Sistema proprietário de IA para análise estratégica, ciberdefesa e previsão de risco corporativo.',
      en: 'Proprietary AI system for strategic analysis, cyberdefense and corporate risk prediction.',
      it: 'Sistema proprietario di IA per analisi strategica, cyberdifesa e previsione del rischio aziendale.'
    },
    description: {
      pt: 'Athena é o núcleo de inteligência artificial da LuthorCorp: uma estrutura de análise executiva para antecipar riscos, oportunidades e movimentos estratégicos.',
      en: 'Athena is LuthorCorp’s artificial intelligence core: an executive analysis structure designed to anticipate risks, opportunities and strategic moves.',
      it: 'Athena è il nucleo di intelligenza artificiale di LuthorCorp: una struttura di analisi esecutiva per anticipare rischi, opportunità e mosse strategiche.'
    },
    metrics: [['IA', {pt:'modelos proprietários', en:'proprietary models', it:'modelli proprietari'}], ['Risk', {pt:'previsão e resposta', en:'prediction and response', it:'previsione e risposta'}], ['Secure', {pt:'dados protegidos', en:'protected data', it:'dati protetti'}]],
    details: [
      { title: {pt:'Análise executiva', en:'Executive analysis', it:'Analisi esecutiva'}, text: {pt:'Leitura de cenários, prioridades e riscos para apoiar decisões de alto impacto.', en:'Scenario, priority and risk reading to support high-impact decisions.', it:'Lettura di scenari, priorità e rischi per supportare decisioni ad alto impatto.'}},
      { title: {pt:'Ciberdefesa', en:'Cyberdefense', it:'Cyberdifesa'}, text: {pt:'Detecção de anomalias, defesa de dados e resposta coordenada a ameaças.', en:'Anomaly detection, data defense and coordinated threat response.', it:'Rilevamento anomalie, difesa dei dati e risposta coordinata alle minacce.'}},
      { title: {pt:'Previsão de risco', en:'Risk forecasting', it:'Previsione del rischio'}, text: {pt:'Modelos de antecipação para reputação, operação, mercado e segurança.', en:'Forecasting models for reputation, operations, market and security.', it:'Modelli previsionali per reputazione, operazioni, mercato e sicurezza.'}}
    ]
  },
  hera: {
    icon: 'fa-building-shield',
    area: { pt: 'Infraestrutura', en: 'Infrastructure', it: 'Infrastrutture' },
    title: { pt: 'Projeto Hera', en: 'Project Hera', it: 'Progetto Hera' },
    status: { pt: 'Em expansão', en: 'Expanding', it: 'In espansione' },
    short: {
      pt: 'Arquitetura de proteção e automação para sedes, laboratórios, arenas e instalações estratégicas.',
      en: 'Protection and automation architecture for headquarters, laboratories, arenas and strategic facilities.',
      it: 'Architettura di protezione e automazione per sedi, laboratori, arene e strutture strategiche.'
    },
    description: {
      pt: 'Hera governa espaços físicos críticos com automação, segurança e resiliência operacional. É o projeto que transforma infraestrutura em vantagem estratégica.',
      en: 'Hera governs critical physical spaces with automation, security and operational resilience. It turns infrastructure into strategic advantage.',
      it: 'Hera governa spazi fisici critici con automazione, sicurezza e resilienza operativa. Trasforma le infrastrutture in vantaggio strategico.'
    },
    metrics: [['99.9%', {pt:'continuidade', en:'continuity', it:'continuità'}], ['Smart', {pt:'automação predial', en:'building automation', it:'automazione edifici'}], ['Shield', {pt:'camadas de defesa', en:'defense layers', it:'livelli di difesa'}]],
    details: [
      { title: {pt:'Instalações críticas', en:'Critical facilities', it:'Strutture critiche'}, text: {pt:'Proteção de sedes, centros de pesquisa, arenas e ambientes de alta circulação.', en:'Protection for headquarters, research centers, arenas and high-traffic environments.', it:'Protezione di sedi, centri di ricerca, arene e ambienti ad alta circolazione.'}},
      { title: {pt:'Automação premium', en:'Premium automation', it:'Automazione premium'}, text: {pt:'Integração de energia, acesso, sensores, segurança e experiência de usuário.', en:'Integration of energy, access, sensors, security and user experience.', it:'Integrazione di energia, accessi, sensori, sicurezza ed esperienza utente.'}},
      { title: {pt:'Continuidade', en:'Continuity', it:'Continuità'}, text: {pt:'Protocolos de redundância para manter operação mesmo em cenários adversos.', en:'Redundancy protocols to keep operations running even in adverse scenarios.', it:'Protocolli di ridondanza per mantenere l’operatività anche in scenari avversi.'}}
    ]
  },
  demeter: {
    icon: 'fa-dna',
    area: { pt: 'Bioengenharia', en: 'Bioengineering', it: 'Bioingegneria' },
    title: { pt: 'Projeto Demeter', en: 'Project Demeter', it: 'Progetto Demeter' },
    status: { pt: 'Laboratório', en: 'Laboratory', it: 'Laboratorio' },
    short: {
      pt: 'Pesquisa em biomateriais, recuperação avançada e soluções de saúde de alta performance.',
      en: 'Research in biomaterials, advanced recovery and high-performance health solutions.',
      it: 'Ricerca su biomateriali, recupero avanzato e soluzioni sanitarie ad alte prestazioni.'
    },
    description: {
      pt: 'Demeter une laboratório, biomateriais e dados clínicos para desenvolver soluções de recuperação, proteção e performance biológica.',
      en: 'Demeter combines laboratory work, biomaterials and clinical data to develop recovery, protection and biological performance solutions.',
      it: 'Demeter unisce laboratorio, biomateriali e dati clinici per sviluppare soluzioni di recupero, protezione e performance biologica.'
    },
    metrics: [['Bio', {pt:'materiais avançados', en:'advanced materials', it:'materiali avanzati'}], ['R&D', {pt:'pesquisa controlada', en:'controlled research', it:'ricerca controllata'}], ['Helix', {pt:'dados clínicos', en:'clinical data', it:'dati clinici'}]],
    details: [
      { title: {pt:'Biomateriais', en:'Biomaterials', it:'Biomateriali'}, text: {pt:'Compostos e superfícies inspirados em sistemas biológicos de alta resistência.', en:'Compounds and surfaces inspired by high-resistance biological systems.', it:'Composti e superfici ispirati a sistemi biologici ad alta resistenza.'}},
      { title: {pt:'Recuperação avançada', en:'Advanced recovery', it:'Recupero avanzato'}, text: {pt:'Protocolos de reabilitação, monitoramento e resposta em ambientes exigentes.', en:'Rehabilitation, monitoring and response protocols for demanding environments.', it:'Protocolli di riabilitazione, monitoraggio e risposta in ambienti esigenti.'}},
      { title: {pt:'Saúde estratégica', en:'Strategic health', it:'Salute strategica'}, text: {pt:'Plataformas para análise segura de dados e apoio a decisões clínicas.', en:'Platforms for secure data analysis and clinical decision support.', it:'Piattaforme per analisi sicura dei dati e supporto alle decisioni cliniche.'}}
    ]
  },
  nike: {
    icon: 'fa-robot',
    area: { pt: 'Robótica', en: 'Robotics', it: 'Robotica' },
    title: { pt: 'Projeto Nike', en: 'Project Nike', it: 'Progetto Nike' },
    status: { pt: 'Protótipo', en: 'Prototype', it: 'Prototipo' },
    short: {
      pt: 'Robótica de apoio, exotrajes e equipamentos para operações de resposta rápida e alto risco.',
      en: 'Support robotics, exosuits and equipment for rapid-response, high-risk operations.',
      it: 'Robotica di supporto, esoscheletri e attrezzature per operazioni ad alto rischio e risposta rapida.'
    },
    description: {
      pt: 'Nike amplia capacidade física e operacional em cenários extremos, combinando robótica, telemetria e proteção em campo.',
      en: 'Nike expands physical and operational capability in extreme scenarios, combining robotics, telemetry and field protection.',
      it: 'Nike amplia capacità fisica e operativa in scenari estremi, combinando robotica, telemetria e protezione sul campo.'
    },
    metrics: [['Exo', {pt:'suporte físico', en:'physical support', it:'supporto fisico'}], ['Rapid', {pt:'resposta tática', en:'tactical response', it:'risposta tattica'}], ['Field', {pt:'operação em campo', en:'field operation', it:'operazione sul campo'}]],
    details: [
      { title: {pt:'Exotrajes', en:'Exosuits', it:'Esoscheletri'}, text: {pt:'Amplificação de força, estabilidade e proteção para operadores especializados.', en:'Strength amplification, stability and protection for specialized operators.', it:'Amplificazione della forza, stabilità e protezione per operatori specializzati.'}},
      { title: {pt:'Robótica de apoio', en:'Support robotics', it:'Robotica di supporto'}, text: {pt:'Drones e unidades auxiliares para reconhecimento, carga e suporte técnico.', en:'Drones and auxiliary units for reconnaissance, payload and technical support.', it:'Droni e unità ausiliarie per ricognizione, carico e supporto tecnico.'}},
      { title: {pt:'Ambientes hostis', en:'Hostile environments', it:'Ambienti ostili'}, text: {pt:'Aplicações em resgate, manutenção crítica, segurança e zonas de risco.', en:'Applications in rescue, critical maintenance, security and risk zones.', it:'Applicazioni in soccorso, manutenzione critica, sicurezza e zone di rischio.'}}
    ]
  },
  hecate: {
    icon: 'fa-atom',
    area: { pt: 'Pesquisa avançada', en: 'Advanced research', it: 'Ricerca avanzata' },
    title: { pt: 'Projeto Hecate', en: 'Project Hecate', it: 'Progetto Hecate' },
    status: { pt: 'Classificado', en: 'Classified', it: 'Classificato' },
    short: {
      pt: 'Materiais experimentais, comunicação segura e tecnologias reservadas de próxima geração.',
      en: 'Experimental materials, secure communications and restricted next-generation technologies.',
      it: 'Materiali sperimentali, comunicazioni sicure e tecnologie riservate di prossima generazione.'
    },
    description: {
      pt: 'Hecate concentra as frentes mais reservadas do portfólio: materiais experimentais, sinais seguros e pesquisa de longo horizonte.',
      en: 'Hecate concentrates the portfolio’s most restricted fronts: experimental materials, secure signals and long-horizon research.',
      it: 'Hecate concentra i fronti più riservati del portafoglio: materiali sperimentali, segnali sicuri e ricerca di lungo orizzonte.'
    },
    metrics: [['Ω', {pt:'acesso restrito', en:'restricted access', it:'accesso ristretto'}], ['Quantum', {pt:'materiais e sinais', en:'materials and signals', it:'materiali e segnali'}], ['Black Lab', {pt:'pesquisa sigilosa', en:'classified research', it:'ricerca riservata'}]],
    details: [
      { title: {pt:'Materiais experimentais', en:'Experimental materials', it:'Materiali sperimentali'}, text: {pt:'Pesquisa de compostos, superfícies e estruturas para aplicações futuras.', en:'Research into compounds, surfaces and structures for future applications.', it:'Ricerca su composti, superfici e strutture per applicazioni future.'}},
      { title: {pt:'Comunicação segura', en:'Secure communications', it:'Comunicazioni sicure'}, text: {pt:'Camadas de transmissão e criptografia para ambientes altamente sensíveis.', en:'Transmission and encryption layers for highly sensitive environments.', it:'Livelli di trasmissione e crittografia per ambienti altamente sensibili.'}},
      { title: {pt:'Pesquisa reservada', en:'Restricted research', it:'Ricerca riservata'}, text: {pt:'Programas conduzidos por células isoladas com auditoria de acesso.', en:'Programs run by isolated cells with access auditing.', it:'Programmi condotti da cellule isolate con audit degli accessi.'}}
    ]
  }
};

const getLang = () => {
  const url = new URL(window.location.href);
  return url.searchParams.get('lang') || localStorage.getItem('luthor-lang') || 'pt';
};

const setLang = (lang) => {
  localStorage.setItem('luthor-lang', lang);
  const url = new URL(window.location.href);
  url.searchParams.set('lang', lang);
  history.replaceState({}, '', url);
  applyLanguage(lang);
  syncLinks(lang);
  renderProjectPage(lang);
};

const applyLanguage = (lang) => {
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang;
  document.querySelectorAll('.lang-switch button').forEach((button) => {
    const active = button.dataset.lang === lang;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  document.querySelectorAll('[data-lang-pt]').forEach((el) => {
    const text = el.getAttribute(`data-lang-${lang}`);
    if (text !== null) el.innerHTML = text;
  });
};

const syncLinks = (lang) => {
  document.querySelectorAll('a[href]').forEach((link) => {
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('http')) return;
    const [path, hash = ''] = href.split('#');
    const clean = path.split('?')[0];
    link.setAttribute('href', `${clean}?lang=${lang}${hash ? `#${hash}` : ''}`);
  });
};

const revealOnScroll = () => {
  const elementsToReveal = document.querySelectorAll('.reveal-on-scroll');
  if (!('IntersectionObserver' in window)) {
    elementsToReveal.forEach((element) => element.classList.add('visible'));
    return;
  }
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        currentObserver.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -100px 0px', threshold: 0.1 });
  elementsToReveal.forEach((element) => observer.observe(element));
};

const setupMenu = () => {
  const button = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');
  if (!button || !nav) return;
  button.addEventListener('click', () => {
    const isOpen = document.body.classList.toggle('menu-open');
    button.setAttribute('aria-expanded', String(isOpen));
    button.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
  });
  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      document.body.classList.remove('menu-open');
      button.setAttribute('aria-expanded', 'false');
      button.setAttribute('aria-label', 'Abrir menu');
    });
  });
};

const highlightNavigation = () => {
  const sections = document.querySelectorAll('main section[id]');
  const links = document.querySelectorAll('nav a[href^="#"]');
  if (!sections.length || !links.length || !('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const id = entry.target.getAttribute('id');
      links.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${id}`));
    });
  }, { rootMargin: '-45% 0px -45% 0px', threshold: 0.01 });
  sections.forEach((section) => observer.observe(section));
};

const renderProjectPage = (lang = getLang()) => {
  const key = document.body.dataset.projectPage;
  if (!key) return;
  const project = projectData[key];
  if (!project) return;
  document.title = `${project.title[lang]} | Luthor Corporation`;
  const icon = document.querySelector('#project-icon');
  const area = document.querySelector('#project-area');
  const title = document.querySelector('#project-title');
  const description = document.querySelector('#project-description');
  const status = document.querySelector('#project-status');
  const metrics = document.querySelector('#project-metrics');
  const details = document.querySelector('#project-details');
  if (icon) icon.className = `fa-solid ${project.icon}`;
  if (area) area.textContent = project.area[lang];
  if (title) title.textContent = project.title[lang];
  if (description) description.textContent = project.description[lang];
  if (status) status.textContent = project.status[lang];
  if (metrics) {
    metrics.innerHTML = project.metrics.map(([value, label]) => `
      <article class="metric-box reveal-on-scroll">
        <strong>${value}</strong>
        <span>${label[lang]}</span>
      </article>
    `).join('');
  }
  if (details) {
    details.innerHTML = project.details.map((item) => `
      <article class="detail-card reveal-on-scroll">
        <h3>${item.title[lang]}</h3>
        <p>${item.text[lang]}</p>
      </article>
    `).join('');
  }
  revealOnScroll();
};

const setupCanvas = () => {
  const canvas = document.querySelector('#cinematic-canvas');
  if (!canvas || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const ctx = canvas.getContext('2d');
  let width = 0;
  let height = 0;
  let animationFrame = 0;
  const pointer = { x: 0.5, y: 0.5 };
  const stars = [];
  const nodes = [];
  const orbs = [];

  const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

  const resize = () => {
    width = window.innerWidth;
    height = window.innerHeight;
    const ratio = window.devicePixelRatio || 1;
    canvas.width = width * ratio;
    canvas.height = height * ratio;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  };

  const buildScene = () => {
    stars.length = 0;
    nodes.length = 0;
    orbs.length = 0;

    const starTotal = Math.round(clamp((width * height) / 18000, 70, 145));
    const nodeTotal = Math.round(clamp((width * height) / 52000, 26, 54));

    for (let i = 0; i < starTotal; i += 1) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.6 + 0.3,
        alpha: Math.random() * 0.65 + 0.18,
        twinkle: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.02 + 0.003,
        driftX: (Math.random() - 0.5) * 0.04,
        driftY: (Math.random() - 0.5) * 0.04
      });
    }

    for (let i = 0; i < nodeTotal; i += 1) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.16,
        vy: (Math.random() - 0.5) * 0.16,
        r: Math.random() * 1.8 + 0.8
      });
    }

    const palette = [
      ['rgba(138,0,230,0.28)', 'rgba(138,0,230,0)'],
      ['rgba(94,61,255,0.22)', 'rgba(94,61,255,0)'],
      ['rgba(255,255,255,0.12)', 'rgba(255,255,255,0)']
    ];

    for (let i = 0; i < 4; i += 1) {
      orbs.push({
        baseX: Math.random() * width,
        baseY: Math.random() * height,
        radius: Math.max(width, height) * (0.16 + Math.random() * 0.12),
        speed: 0.0005 + Math.random() * 0.0007,
        offset: Math.random() * Math.PI * 2,
        rangeX: 40 + Math.random() * 110,
        rangeY: 30 + Math.random() * 90,
        colors: palette[i % palette.length]
      });
    }
  };

  const onPointerMove = (event) => {
    pointer.x = event.clientX / width;
    pointer.y = event.clientY / height;
  };

  const drawBackdrop = (time) => {
    const gradient = ctx.createRadialGradient(
      width * (0.22 + pointer.x * 0.12),
      height * (0.18 + pointer.y * 0.12),
      0,
      width * 0.5,
      height * 0.5,
      Math.max(width, height) * 0.85
    );
    gradient.addColorStop(0, 'rgba(34, 12, 68, 0.22)');
    gradient.addColorStop(0.55, 'rgba(10, 7, 18, 0.08)');
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    orbs.forEach((orb, index) => {
      const x = orb.baseX + Math.sin(time * orb.speed + orb.offset) * orb.rangeX + (pointer.x - 0.5) * (12 + index * 3);
      const y = orb.baseY + Math.cos(time * orb.speed * 1.2 + orb.offset) * orb.rangeY + (pointer.y - 0.5) * (10 + index * 2);
      const g = ctx.createRadialGradient(x, y, 0, x, y, orb.radius);
      g.addColorStop(0, orb.colors[0]);
      g.addColorStop(1, orb.colors[1]);
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(x, y, orb.radius, 0, Math.PI * 2);
      ctx.fill();
    });
  };

  const drawStars = (time) => {
    stars.forEach((star) => {
      star.x += star.driftX;
      star.y += star.driftY;
      if (star.x < -4) star.x = width + 4;
      if (star.x > width + 4) star.x = -4;
      if (star.y < -4) star.y = height + 4;
      if (star.y > height + 4) star.y = -4;
      const glow = star.alpha + Math.sin(time * star.speed + star.twinkle) * 0.2;
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(232, 218, 255, ${Math.max(0.08, glow)})`;
      ctx.fill();
    });
  };

  const drawNodeField = () => {
    nodes.forEach((node, index) => {
      node.x += node.vx;
      node.y += node.vy;
      if (node.x < -20) node.x = width + 20;
      if (node.x > width + 20) node.x = -20;
      if (node.y < -20) node.y = height + 20;
      if (node.y > height + 20) node.y = -20;

      ctx.beginPath();
      ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(230, 210, 255, 0.58)';
      ctx.fill();

      for (let i = index + 1; i < nodes.length; i += 1) {
        const other = nodes[i];
        const dx = node.x - other.x;
        const dy = node.y - other.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 140) {
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(other.x, other.y);
          ctx.strokeStyle = `rgba(138, 0, 230, ${0.13 * (1 - distance / 140)})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    });
  };

  const drawScan = (time) => {
    const y = (time * 0.05) % (height + 180) - 90;
    const band = ctx.createLinearGradient(0, y - 55, 0, y + 55);
    band.addColorStop(0, 'rgba(255,255,255,0)');
    band.addColorStop(0.5, 'rgba(176,91,255,0.05)');
    band.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = band;
    ctx.fillRect(0, y - 55, width, 110);
  };

  const draw = (time = 0) => {
    ctx.clearRect(0, 0, width, height);
    drawBackdrop(time);
    drawStars(time);
    drawNodeField();
    drawScan(time);
    animationFrame = requestAnimationFrame(draw);
  };

  resize();
  buildScene();
  window.addEventListener('resize', () => {
    resize();
    buildScene();
  });
  window.addEventListener('pointermove', onPointerMove, { passive: true });
  animationFrame = requestAnimationFrame(draw);

  window.addEventListener('beforeunload', () => cancelAnimationFrame(animationFrame), { once: true });
};

document.addEventListener('DOMContentLoaded', () => {
  const lang = getLang();
  applyLanguage(lang);
  syncLinks(lang);
  document.querySelectorAll('.lang-switch button').forEach((button) => {
    button.addEventListener('click', () => setLang(button.dataset.lang));
  });
  setupCanvas();
  revealOnScroll();
  setupMenu();
  highlightNavigation();
  renderProjectPage(lang);
});
