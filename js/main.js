// ── Translations ──────────────────────────────────────────────────────────────
const translations = {
  en: {
    // Navigation
    'nav-logo':        'Home<span>.</span>',
    'nav-about':       'About',
    'nav-skills':      'Skills',
    'nav-experience':  'Experience',
    'nav-research':    'My Portfolio',
    'nav-education':   'Education',
    'nav-contact':     'Contact',

    // Hero
    'hero-badge':         'Available for opportunities',
    'hero-title':         'Statistics Graduate & Data Scientist and Analyst',
    //'hero-description':   'Bachelor\'s degree in Statistics from IME-USP. Former undergraduate researcher in Urban Acoustics at FAU USP and Data Team Lead at IME Jr. Passionate about applying statistics to real-world problems and collaborating with innovative teams.',
    'hero-desc-li1':      'Bachelor\'s degree in Statistics from IME-USP.',
    'hero-desc-li2':      'Former undergraduate researcher in Urban Acoustics at FAU-USP.',
    'hero-desc-li3':      'Former Data & Computing Team Member, HR Director, and Data Team Lead at IME Jr.',
    'hero-desc-li4':      'Passionate about applying statistics to real-world problems and collaborating with innovative teams.',
    'hero-desc-li5':      'Former Data Analytics intern at Maxxi, a consulting company.',
    'hero-cta-primary':   'Get in touch',
    'hero-cta-secondary': 'View my work',

    // About
    'about-label':    'Who I am',
    'about-title':    'About Me',
    'about-p1':       'As a statistics graduate from IME USP, I possess a great interest in applying statistics to address real-world problems. Drawing from my previous background as both a team member and team lead at IME Jr (a junior consulting company run by students), coupled with my academic journey at IME-USP, my involvement as an undergraduate researcher, and the experience I\'ve acquired as an intern at Maxxi (a tech consulting company), I\'m now looking to apply all that acquired knowledge to further develop my data analysis skills and collaborate with innovative and diverse teams.',
    'about-p2':       'I\'m fluent in English (C2 Cambridge certification) and have professional working proficiency in Spanish. I enjoy blending mathematical thinking with practical problem-solving to deliver meaningful insights from data.',
    'stat-years':     'Years of Experience',
    'stat-companies': 'Companies or Institutions',
    'stat-certs':     'Certifications',
    'stat-pub':       'International Publication',

    // Skills
    'skills-label':    'What I work with',
    'skills-title':    'Skills & Technologies',
    'skills-subtitle': 'A curated selection of tools, technologies, and competencies I use regularly.',
    'skills-cat-prog':  'Programming Languages',
    'skills-cat-data':  'Data Science & Analytics',
    'skills-cat-tools': 'Tools & Soft Skills',
    'skills-cat-lang':  'Languages',
    'skill-basic-html':      'Basic HTML',
    'skill-basic-css':       'Basic CSS',
    'skill-basic-js':        'Basic JavaScript',
    'skill-data-science':   'Data Science',
    'skill-data-analytics': 'Data Analytics',
    'skill-ml':             'Machine Learning',
    'skill-pred-model':     'Predictive Modeling',
    'skill-stat-analysis':  'Statistical Data Analysis',
    'skill-stat-prog':      'Statistical Programming',
    'skill-data-clean':     'Data Cleaning & Manipulation',
    'skill-statistics':     'Statistics',
    'skill-databases':      'Databases',
    'skill-math-thinking':  'Mathematical Thinking',
    'skill-problem-solving':'Problem-Solving',
    'skill-communication':  'Communication',
    'skill-teamwork':       'Teamwork',
    'skill-leadership':     'Leadership',
    'skill-team-mgmt':      'Team Management',
    'skill-presentations':  'Presentations',
    'skill-portuguese':     'Portuguese (Native)',
    'skill-english':        'English (C2 – Cambridge Certificate)',
    'skill-spanish':        'Spanish (Working Proficiency)',

    // Experience
    'exp-label':    'Where I\'ve worked',
    'exp-title':    'Experience',
    'exp-subtitle': 'A timeline of my professional journey and the impact I\'ve made.',
    'exp-category-professional': 'Professional Experience',
    'exp-category-extra':        'Extra Experience',
    'exp-maxxi-role':    'Internship in Data Analytics',
    'exp-maxxi-period':  'May 2024 – May 2025',
    'exp-maxxi-company': 'Maxxi · São Paulo, Brazil',
    'exp-maxxi-li1': 'Worked as a Data Analytics intern at Maxxi, a tech consulting company.',
    'exp-maxxi-li2': 'Applied data analysis techniques, such as Dashboard creation, through the use of both BI tools and natively on Excel, as well as automation processes (connecting SharePoint, Excel, and Python) to support business decision-making.',
    'exp-maxxi-li3': 'Gained hands-on experience with real-world data (from clients from different niches, as well as in-house data) and with Analytics tools such as Metabase, Excel, and Power BI.',
    'exp-fau-role':    'Undergraduate Researcher – PIBIC Research Grant',
    'exp-fau-period':  'May 2022 – December 2024',
    'exp-fau-company': 'FAU USP · São Paulo, Brazil',
    'exp-fau-li1': 'Conducted research in Urban Acoustics as part of a PIBIC (CNPq) undergraduate research grant.',
    'exp-fau-li2': 'Co-authored a scientific paper published in the <em>Applied Acoustics</em> Journal (Volume 218, March 2024) on translating soundscape attributes using Twitter/X data for the Portuguese language.',
    'exp-fau-li3': 'Applied statistical and computational methods (through the use of Python and R) to acoustic data collected in urban environments.',
    'exp-imejr-role':    'Data Team Lead · HR Director · Data & Computing Member',
    'exp-imejr-period':  'May 2022 – January 2024',
    'exp-imejr-company': 'IME Jr · São Paulo, Brazil',
    'exp-imejr-role1':   'Data Team Lead',
    'exp-imejr-period1': 'Jul 2023 – Jan 2024',
    'exp-imejr-li1':     'Led the data consulting team, managed client projects, and mentored junior members.',
    'exp-imejr-role2':   'Human Resources Director',
    'exp-imejr-period2': 'Jan 2023 – Jul 2023',
    'exp-imejr-li2':     'Oversaw recruitment, onboarding, and people-management processes for the junior company.',
    'exp-imejr-role3':   'Data & Computing Team Member',
    'exp-imejr-period3': 'May 2022 – Jan 2023',
    'exp-imejr-li3':     'Delivered data analysis and statistical consulting projects for external clients.',
    'exp-vol-role':    'Marketing & Audiovisual Volunteer',
    'exp-vol-period':  'March 2024 – November 2024',
    'exp-vol-company': 'XVII aMostra Estatística IME-USP · São Paulo, Brazil',
    'exp-vol-li1':     'Volunteered in the marketing and audiovisual team for the XVII aMostra Estatística, a major statistics event at IME-USP.',
    'exp-vol-li2':     'Actively promoted the event to both increase awareness of the importance of Statistics and to advocate for the profession to a wider audience.',

    // My Portfolio
    'research-label':    'Publications & Certifications',
    'research-title':    'My Portfolio',
    'research-subtitle': 'Academic publications and professional certifications I\'ve earned.',
    'research-journal-link': 'Journal ↗',
    'research-paper-link':  'Paper ↗',
    'pub-title':         'Scientific Publication',
    'pub-description':   '"A methodological approach for translating soundscape attributes using Twitter data: A Portuguese language case study" — <em>Applied Acoustics</em> Journal, Volume 218, March 2024.',
    'lang-cert-link':         'Certificate ↗',
    'lang-cert-title':        'Language Certification',
    'lang-cert-description':  'Certificate in Advanced English (CAE) – Level C2, issued by Cambridge Assessment English. Awarded Grade A (highest distinction) with an overall score of 200/210 in June 2019.',
    'tech-cert-title':        'Technical Certifications',
    'tech-cert-description':  'A selection of technical certifications I\'ve completed in data science, machine learning, and analytics.',
    'tech-cert-r':            'R for Data Science: Analysis &amp; Visualization <small>(LinkedIn Learning)</small>',
    'tech-cert-ml':           'Applied Machine Learning <small>(Hype – Data Science)</small>',
    'tech-cert-bi':           'Business Intelligence <small>(Hype – Data Science)</small>',
    'tech-cert-rmd':          'RMarkdown Minicourse <small>(IME Jr)</small>',
    'pub-tag-acoustics':      'Urban Acoustics',
    'pub-tag-statistics':     'Statistics',
    'lang-cert-tag-level':    'C2 Level',
    'lang-cert-tag-grade':    'Grade A',

    // Education
    'edu-label':        'Academic background',
    'edu-title':        'Education',
    'edu-imesp-degree':    'Bachelor\'s degree in Statistics',
    'edu-imesp-date':   'Jan 2020 – Dec 2025',
    'edu-imesp-name':   'Institute of Mathematics, Statistics and Computer Sciences - University of São Paulo (IME - USP)',
    'edu-imesp-location':  '· São Paulo, Brazil',
    'edu-imesp-detail': 'Specialization in Theoretical Statistics, Statistical Computing (Python, R, and SQL), and Data Analysis / Modeling. I also engaged in other academic activities alongside my undergraduate studies, such as participating in a Junior Enterprise (IME Jr), conducting Undergraduate Research through a PIBIC scholarship (FAU-USP), and Volunteering (aMostra Estatística).',
    'edu-school-degree':   'High School Diploma',
    'edu-school-date':     'Jan 2009 – Dec 2019',
    'edu-school-name':     'Rainha da Paz School',
    'edu-school-location': '· São Paulo, Brazil',
    'edu-school-detail':'Beyond the standard curriculum, I attended three years of Spanish, as well as several other extracurricular activities, such as Biotechnology and Chemistry Laboratories, “Power of Curves” and “Galileo Galilei” (both involving physics and mathematics), Financial Education, and 3D Printing Modeling. I also participated in (and received awards in) several Brazilian Academic Olympiads, such as OBMEP, OBA, and ONHB.',

    // Contact
    'contact-label': 'Let\'s talk',
    'contact-title': 'Get In Touch',
    'contact-text':  'Whether you have an opportunity, a question, or just want to say hi, my inbox is always open. I\'ll do my best to get back to you promptly!',
    'form-name-label':        'Name',
    'form-name-placeholder':  'Jane Doe',
    'form-email-label':       'Email',
    'form-email-placeholder': 'jane@example.com',
    'form-message-label':     'Message',
    'form-message-placeholder':'Hi, I\'d like to …',
    'form-submit':   'Send Message',
    'form-sending':  'Sending…',
    'form-sent':     'Message sent ✓',
    'form-error':    'Error – please try again',

    // Footer
    'footer-rights': 'All rights reserved.',
  },

  pt: {
    // Navegação
    'nav-logo':        'Início<span>.</span>',
    'nav-about':       'Sobre',
    'nav-skills':      'Habilidades',
    'nav-experience':  'Experiência',
    'nav-research':    'Meu Portfólio',
    'nav-education':   'Educação',
    'nav-contact':     'Contato',

    // Hero
    'hero-badge':         'Disponível para oportunidades',
    'hero-title':         'Bacharel em Estatística & Cientista e Analista de Dados',
    //'hero-description':   'Bacharel em Estatística pelo IME-USP. Ex-pesquisador de iniciação científica em Acústica Urbana na FAU USP e Líder da Equipe de Dados na IME Jr. Apaixonado por aplicar estatística a problemas do mundo real e colaborar com equipes inovadoras.',
    'hero-desc-li1':      'Bacharel em Estatística pelo IME-USP.',
    'hero-desc-li2':      'Ex-pesquisador de Iniciação Científica em Acústica Urbana na FAU-USP.',
    'hero-desc-li3':      'Ex-membro dos Times de Dados & Computação, Diretor de RH, e Líder do Time de Dados na IME Jr.',
    'hero-desc-li4':      'Tenho profundo interesse em aplicar estatística a problemas do mundo real e colaborar com equipes inovadoras.',
    'hero-desc-li5':      'Ex-estagiário de Analytics na Maxxi, uma empresa de consultoria.',
    'hero-cta-primary':   'Contato',
    'hero-cta-secondary': 'Veja meu trabalho',

    // Sobre
    'about-label':    'Quem sou eu',
    'about-title':    'Sobre Mim',
    'about-p1':       'Como bacharel em estatística pelo IME USP, possuo um grande interesse em aplicar a estatística para resolver problemas do mundo real. Com base na minha experiência anterior tanto como membro quanto como líder de equipe de dados da IME Jr (empresa júnior de consultoria gerida por estudantes), juntamente com minha trajetória acadêmica no IME-USP, minha participação como pesquisador de iniciação científica e com a experiência adquirida como estagiário na Maxxi (empresa de consultoria no ramo de tecnologia), estou buscando formas de aplicar todo esse conhecimento previamente adquirido para aprimorar minhas habilidades de análise de dados e colaborar com equipes inovadoras e diversas.',
    'about-p2':       'Sou fluente em inglês (Certificado C2 de Cambridge) e tenho proficiência profissional em espanhol. Gosto de combinar o pensamento matemático com a resolução prática de problemas para extrair insights significativos dos dados.',
    'stat-years':     'Anos de Experiência',
    'stat-companies': 'Empresas ou Instituições',
    'stat-certs':     'Certificações',
    'stat-pub':       'Publicação Internacional',

    // Habilidades
    'skills-label':    'Com o que trabalho',
    'skills-title':    'Habilidades & Tecnologias',
    'skills-subtitle': 'Uma seleção de ferramentas, tecnologias e competências que utilizo regularmente.',
    'skills-cat-prog':  'Linguagens de Programação',
    'skills-cat-data':  'Ciência & Análise de Dados',
    'skills-cat-tools': 'Ferramentas & Habilidades Interpessoais',
    'skills-cat-lang':  'Idiomas',
    'skill-basic-html':      'HTML Básico',
    'skill-basic-css':       'CSS Básico',
    'skill-basic-js':        'JavaScript Básico',
    'skill-data-science':   'Data Science',
    'skill-data-analytics': 'Data Analytics',
    'skill-ml':             'Machine Learning',
    'skill-pred-model':     'Modelagem Preditiva',
    'skill-stat-analysis':  'Análise de Dados Estatística',
    'skill-stat-prog':      'Programação Estatística',
    'skill-data-clean':     'Limpeza e Manipulação de Dados',
    'skill-statistics':     'Estatística',
    'skill-databases':      'Bancos de Dados',
    'skill-math-thinking':  'Pensamento Matemático',
    'skill-problem-solving':'Resolução de Problemas',
    'skill-communication':  'Comunicação',
    'skill-teamwork':       'Trabalho em Equipe',
    'skill-leadership':     'Liderança',
    'skill-team-mgmt':      'Gestão de Equipes',
    'skill-presentations':  'Apresentações',
    'skill-portuguese':     'Português (Nativo)',
    'skill-english':        'Inglês (C2 – Certificado Cambridge)',
    'skill-spanish':        'Espanhol (Proficiência Profissional)',

    // Experiência
    'exp-label':    'Onde trabalhei',
    'exp-title':    'Experiência',
    'exp-subtitle': 'Uma linha do tempo da minha jornada profissional e o impacto que gerei.',
    'exp-category-professional': 'Experiência Profissional',
    'exp-category-extra':        'Experiência Extra',
    'exp-maxxi-role':    'Estágio em Data Analytics',
    'exp-maxxi-period':  'Maio 2024 – Maio 2025',
    'exp-maxxi-company': 'Maxxi · São Paulo, Brasil',
    'exp-maxxi-li1': 'Atuei como estagiário de Data Analytics na Maxxi, empresa de consultoria em tecnologia.',
    'exp-maxxi-li2': 'Apliquei técnicas de análise de dados, como criação de Dashboards, através do uso de ferramentas de BI e nativamente no Excel, além de processos de automação (conectando SharePoint, Excel e Python) para apoiar a tomada de decisões de negócio.',
    'exp-maxxi-li3': 'Adquiri experiência prática com dados reais (de clientes de diferentes nichos e dados internos) e com ferramentas de Analytics como Metabase, Excel e Power BI.',
    'exp-fau-role':    'Iniciação Científica – Bolsista PIBIC',
    'exp-fau-period':  'Maio 2022 – Dezembro 2024',
    'exp-fau-company': 'FAU USP · São Paulo, Brasil',
    'exp-fau-li1': 'Conduzi uma pesquisa em Acústica Urbana com apoio de uma bolsa de iniciação científica PIBIC (CNPq).',
    'exp-fau-li2': 'Co-autoria de um artigo científico publicado no <em>Applied Acoustics</em> Journal (Volume 218, Março de 2024) sobre tradução de atributos de paisagem sonora com dados do Twitter/X para o português.',
    'exp-fau-li3': 'Apliquei métodos estatísticos e computacionais (através do uso de Python e R) a dados acústicos coletados em ambientes urbanos.',
    'exp-imejr-role':    'Líder da Equipe de Dados · Diretor de RH · Membro das Equipes de Dados & Computação',
    'exp-imejr-period':  'Maio 2022 – Janeiro 2024',
    'exp-imejr-company': 'IME Jr · São Paulo, Brasil',
    'exp-imejr-role1':   'Líder da Equipe de Dados',
    'exp-imejr-period1': 'Jul 2023 – Jan 2024',
    'exp-imejr-li1':     'Liderou a equipe de consultoria de dados, gerenciou projetos com clientes e orientou membros juniores.',
    'exp-imejr-role2':   'Diretor de Recursos Humanos',
    'exp-imejr-period2': 'Jan 2023 – Jul 2023',
    'exp-imejr-li2':     'Supervisionou recrutamento, integração e gestão de pessoas na empresa júnior.',
    'exp-imejr-role3':   'Membro das Equipes de Dados & Computação',
    'exp-imejr-period3': 'Mai 2022 – Jan 2023',
    'exp-imejr-li3':     'Realizou projetos de análise de dados e consultoria estatística para clientes externos.',
    'exp-vol-role':    'Voluntário de Marketing e Audiovisual',
    'exp-vol-period':  'Março 2024 – Novembro 2024',
    'exp-vol-company': 'XVII aMostra Estatística IME-USP · São Paulo, Brasil',
    'exp-vol-li1':     'Atuei na equipe de marketing e audiovisual da XVII aMostra Estatística, um importante evento de estatística no IME-USP.',
    'exp-vol-li2':     'Promovi ativamente o evento tanto para aumentar a conscientização sobre a importância da Estatística quanto para divulgar a profissão a um público mais amplo.',

    // Meu Portfólio
    'research-label':    'Publicações & Certificações',
    'research-title':    'Meu Portfólio',
    'research-subtitle': 'Minhas publicações acadêmicas e certificações profissionais.',
    'research-journal-link': 'Periódico ↗',
    'research-paper-link':  'Artigo ↗',
    'pub-title':         'Publicação Científica',
    'pub-description':   '"Uma abordagem metodológica para tradução de atributos de paisagem sonora usando dados do Twitter: Um estudo de caso em língua portuguesa" — <em>Applied Acoustics</em> Journal, Volume 218, Março de 2024.',
    'lang-cert-link':         'Certificado ↗',
    'lang-cert-title':        'Certificado de Idioma',
    'lang-cert-description':  'Certificado em Inglês Avançado (CAE) – Nível C2, emitido pela Cambridge Assessment English. Nota A (distinção máxima) com pontuação geral de 200/210 em Junho de 2019.',
    'tech-cert-title':        'Certificações Técnicas',
    'tech-cert-description':  'Uma seleção de certificações técnicas que completei em ciência de dados, machine learning e analytics.',
    'tech-cert-r':            'R para Data Science: Análise &amp; Visualização <small>(LinkedIn Learning)</small>',
    'tech-cert-ml':           'Machine Learning Aplicado <small>(Hype – Data Science)</small>',
    'tech-cert-bi':           'Business Intelligence <small>(Hype – Data Science)</small>',
    'tech-cert-rmd':          'Minicurso de RMarkdown <small>(IME Jr)</small>',
    'pub-tag-acoustics':      'Acústica Urbana',
    'pub-tag-statistics':     'Estatística',
    'lang-cert-tag-level':    'Nível C2',
    'lang-cert-tag-grade':    'Nota A',

    // Educação
    'edu-label':        'Histórico acadêmico',
    'edu-title':        'Educação',
    'edu-imesp-degree':    'Bacharel em Estatística',
    'edu-imesp-date':   'Jan 2020 – Dez 2025',
    'edu-imesp-name':   'Instituto de Matemática, Estatística e Ciências da Computação – Universidade de São Paulo (IME-USP)',
    'edu-imesp-location':  '· São Paulo, Brasil',
    'edu-imesp-detail': 'Especialização em Estatística Teórica, Computação Estatística (Python, R e SQL) e Análise / Modelagem de Dados. Realizei também outras atividades acadêmicas em paralelo a graduação, como a participação na Empresa Júnior (IME Jr), Iniciação Científica com bolsa PIBIC (FAU-USP) e Voluntariado (aMostra Estatística).',
    'edu-school-degree':   'Diploma de Ensino Médio',
    'edu-school-date':     'Jan 2009 – Dez 2019',
    'edu-school-name':     'Colégio Rainha da Paz',
    'edu-school-location': '· São Paulo, Brasil',
    'edu-school-detail':'Além da grade comum, realizei 3 anos de Espanhol, assim como diversas outras atividades extra-curriculares, como Laboratórios de Biotecnologia e de Química, "Poder das Curvas" e "Gallileu Galillei" (ambos envolvendo física e matemática), Educação Financeira e Modelagem para Impressão 3D, além da participação (e premiação) em diversas Olimpíadas Brasileiras, como a OBMEP, OBA e a ONHB.',

    // Contato
    'contact-label': 'Vamos conversar',
    'contact-title': 'Entre em Contato',
    'contact-text':  'Seja uma oportunidade, uma dúvida ou apenas um olá, minha caixa de entrada está sempre aberta. Farei o possível para responder o mais rápido possível!',
    'form-name-label':        'Nome',
    'form-name-placeholder':  'João Silva',
    'form-email-label':       'E-mail',
    'form-email-placeholder': 'joao@exemplo.com',
    'form-message-label':     'Mensagem',
    'form-message-placeholder':'Olá, gostaria de…',
    'form-submit':   'Enviar Mensagem',
    'form-sending':  'Enviando…',
    'form-sent':     'Mensagem enviada ✓',
    'form-error':    'Erro – tente novamente',

    // Rodapé
    'footer-rights': 'Todos os direitos reservados.',
  }
};

// ── Language switching ────────────────────────────────────────────────────────
const storedLang = localStorage.getItem('lang');
let currentLang = (storedLang && translations[storedLang]) ? storedLang : 'en';

function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key] !== undefined) {
      el.textContent = translations[lang][key];
    }
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (translations[lang][key] !== undefined) {
      el.innerHTML = translations[lang][key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang][key] !== undefined) {
      el.placeholder = translations[lang][key];
    }
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  localStorage.setItem('lang', lang);
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => setLanguage(btn.getAttribute('data-lang')));
});

setLanguage(currentLang);

// ── Navigation: scrolled state ───────────────────────────────────────────────
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 10);
}, { passive: true });

// ── Navigation: active link highlight on scroll ───────────────────────────────
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav__links a[href^="#"]');

const observerOptions = { rootMargin: '-40% 0px -55% 0px' };
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
      });
    }
  });
}, observerOptions);

sections.forEach(s => sectionObserver.observe(s));

// ── Mobile hamburger menu ─────────────────────────────────────────────────────
const hamburger = document.querySelector('.nav__hamburger');
const navLinksContainer = document.querySelector('.nav__links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinksContainer.classList.toggle('open');
});

// Close mobile menu when a link is clicked
navLinksContainer.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinksContainer.classList.remove('open');
  });
});

// ── Scroll reveal animation ───────────────────────────────────────────────────
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ── Contact form: submit via Formspree ────────────────────────────────────────
const FORMSPREE_FORM_ID = 'mkovpqry';
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/' + FORMSPREE_FORM_ID;
const CONTACT_EMAIL = 'vitor.comissoli@gmail.com';

const form = document.querySelector('.contact__form form');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const t = translations[currentLang];
    const original = btn.textContent;

    btn.textContent = t['form-sending'] || 'Sending…';
    btn.disabled = true;

    const formData = new FormData(form);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        btn.textContent = t['form-sent'] || 'Message sent ✓';
        form.reset();
        setTimeout(() => {
          btn.textContent = original;
          btn.disabled = false;
        }, 3000);
      } else {
        fallbackToMailto(formData);
      }
    } catch (err) {
      console.error('Form submission failed:', err);
      fallbackToMailto(formData);
    }

    function fallbackToMailto(data) {
      const name    = data.get('name')    || '';
      const email   = data.get('email')   || '';
      const message = data.get('message') || '';
      const subject = encodeURIComponent(`Message from ${name}`);
      const body    = encodeURIComponent(`${message}\n\nFrom: ${email}`);
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
      btn.textContent = original;
      btn.disabled = false;
    }
  });
}
