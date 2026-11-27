(() => {
  'use strict';

  const PLATFORM_COLORS = {
    upwork: '#15803D',
    freelancer: '#0369A1',
    mostaql: '#1D4ED8',
    nafezly: '#334155',
    khamsat: '#B45309',
  };

  // Natural Editorial Pigment Colors (0% AI purple/cyan)
  const CAT_PALETTE = {
    ai: { color: 'var(--p-teal)', bg: 'var(--p-teal-bg)', bd: 'var(--p-teal-bd)' },
    backend: { color: 'var(--p-cobalt)', bg: 'var(--p-cobalt-bg)', bd: 'var(--p-cobalt-bd)' },
    data: { color: 'var(--p-emerald)', bg: 'var(--p-emerald-bg)', bd: 'var(--p-emerald-bd)' },
    ecommerce: { color: 'var(--p-terracotta)', bg: 'var(--p-terracotta-bg)', bd: 'var(--p-terracotta-bd)' },
    web: { color: 'var(--p-amber)', bg: 'var(--p-amber-bg)', bd: 'var(--p-amber-bd)' },
    design: { color: 'var(--p-crimson)', bg: 'var(--p-crimson-bg)', bd: 'var(--p-crimson-bd)' },
    content: { color: 'var(--p-sienna)', bg: 'var(--p-sienna-bg)', bd: 'var(--p-sienna-bd)' },
  };

  const SERVICE_CAT = {
    'landing-page-design': 'web',
    'backend-api-development': 'backend',
    'ai-apps-automation': 'ai',
    'machine-learning-data-science': 'ai',
    'data-cleaning-excel-dashboards': 'data',
    'websites-ecommerce': 'ecommerce',
    'brand-identity-design': 'design',
    'ad-copy-video-scripts': 'content',
  };

  const FEATURED_SLUGS = [
    'medmonitor-24-7',
    'invoicepilot',
    'sand-dune-encroachment-tracker',
    'secure-aws-infrastructure',
    'hr-analytics-dashboard',
    'rose-and-sugar-identity',
  ];

  const SVG = {
    sun: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>',
    moon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>',
    ext: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg>',
    check: '<svg class="check-ic" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
    prev: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>',
    next: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>',
    play: '<svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><polygon points="6 4 20 12 6 20 6 4"/></svg>',
  };

  const EXTRA_AR = {
    'GitHub Repository': 'الكود على GitHub',
    'Kaggle Notebook': 'دفتر Kaggle',
    'Kaggle Certificate': 'شهادة Kaggle الرسمية',
    'YouTube Demo': 'فيديو العرض',
    'Devpost': 'صفحة Devpost',
  };

  const I18N = {
    ar: {
      pageTitle: 'يوسف يعقوب — الخدمات ومعرض الأعمال',
      brand: 'يوسف يعقوب',
      navFeatured: 'المختارات',
      navServices: 'خدماتي',
      navPortfolio: 'معرض الأعمال',
      navPlatforms: 'المنصات',
      navOpenSource: 'المشاريع البرمجية',
      navExperience: 'الخبرات',
      navContact: 'تواصل',
      navHire: 'اطلب خدمة',
      cmdBtn: 'بحث سريع',
      pigmentTitle: 'اللون الرئيسي',
      cmdPlaceholder: 'ابحث وانتقل سريعًا لأي مشروع أو خدمة أو منصة...',
      cmdProject: 'مشروع',
      cmdService: 'خدمة',
      cmdPlatform: 'منصة',
      cmdAction: 'إجراء',
      cmdSwitchLang: 'تغيير اللغة إلى English',
      cmdSwitchTheme: 'تبديل الوضع الليلي / النهاري',
      heroBadge: 'متاح لمشاريع العمل الحر والتعاقد · القاهرة، مصر',
      heroName: 'يوسف يعقوب',
      heroRolePrefix: 'مطوّر ذكاء اصطناعي وباك إند —',
      heroSubtitle: 'أبني نماذج تعلّم الآلة بلغة Python، وأنظمة Backend وواجهات REST API بتقنيات C# / .NET و Azure، وتطبيقات ويب عملية — أحوّل بياناتك أو فكرتك إلى منتج قابل للاختبار والتشغيل بتوثيق واضح.',
      heroCtaPortfolio: (n) => `تصفّح معرض الأعمال (${n})`,
      heroCtaServices: (n) => `الخدمات والأسعار (${n})`,
      heroCtaRepo: 'مستودع GitHub',
      heroPlatformsLabel: 'منصات العمل الحر المعتمدة',
      stackLabel: 'التقنيات الأساسية',
      linksLabel: 'الروابط المهنية',
      statProjects: 'عمل في المعرض',
      statServices: 'خدمات متخصصة',
      statPlatforms: 'منصات عمل حر',
      statDemos: 'نسخ تجريبية مباشرة',
      featuredEyebrow: 'مختارات هندسية وتصميمية',
      featuredTitle: 'أبرز المشاريع ودراسات الحالة',
      openCaseStudy: 'عرض دراسة الحالة والصور',
      servicesEyebrow: 'نطاق العمل',
      servicesTitle: 'خدماتي',
      servicesDesc: 'اضغط على أي خدمة لعرض تفاصيل التنفيذ، المخرجات، التطويرات الاختيارية، والأعمال المرتبطة بها.',
      servicesPricing: 'خمسات: من $10 · فريلانسر: $10/ساعة · Upwork: $20/ساعة · مستقل ونفذلي: حسب المشروع',
      portfolioEyebrow: 'أعمال موثّقة بالصور والروابط',
      portfolioTitle: 'معرض الأعمال الكامل',
      portfolioDesc: 'ابحث بالعربي أو الإنجليزي، وفلتر حسب المجال أو المنصة أو الأعمال المتاح لها نسخة تجريبية مباشرة.',
      searchPlaceholder: 'ابحث في المشاريع، المهارات، التقنيات (مثل Python, React, AWS, شعار)...',
      platformOptions: ['كل المنصات', 'Upwork · أب وورك', 'Freelancer.com · فريلانسر', 'مستقل · Mostaql', 'نفذلي · Nafezly'],
      demoOnly: 'ديمو مباشر فقط',
      allCategories: 'الكل',
      resetFilters: 'إعادة ضبط الفلاتر',
      showing: (shown, total) => `عرض ${shown} من أصل ${total} عمل`,
      emptyTitle: 'لا توجد أعمال مطابقة للبحث',
      emptyDesc: 'جرّب كلمات بحث أخرى أو أعد ضبط الفلاتر لعرض كل الأعمال.',
      platformsEyebrow: 'التعاقد والتواصل',
      platformsTitle: 'حساباتي على منصات العمل الحر',
      platformsDesc: 'اختر المنصة الأنسب لك للطلب المباشر أو لتصفية الأعمال المنشورة عليها.',
      visitProfile: 'زيارة الحساب',
      filterByPlatform: 'عرض الأعمال هنا',
      viewKhamsatService: 'عرض الخدمة',
      ossEyebrow: 'GitHub · الهاكاثونات والمسابقات',
      ossTitle: 'مشاريع مفتوحة المصدر ومسابقات',
      ossAll: 'كل المستودعات على GitHub',
      expEyebrow: 'الخلفية المهنية والأكاديمية',
      expTitle: 'الخبرات والشهادات',
      expHeading: 'الخبرة العملية',
      credHeading: 'التعليم والشهادات',
      verifyLink: 'التحقق',
      ctaEyebrow: 'ابدأ مشروعك',
      ctaTitle: 'جاهز نشتغل على مشروعك الجاي؟',
      ctaDesc: 'ابعتلي تفاصيل فكرتك أو بياناتك أو متطلبات الـ API على المنصة اللي تفضلها، ونتفق على أول مرحلة قابلة للتسليم وطريقة تقييمها.',
      footerCopy: '© 2026 يوسف يعقوب — مبني مباشرة من بيانات مستودع Freelancer-Platforms',
      footerRepo: 'المستودع على GitHub',
      footerTop: 'العودة للأعلى',
      loading: 'جاري التحميل...',
      serviceDetails: 'عرض التفاصيل',
      listedKhamsat: 'خمسات · من $10',
      customQuote: 'حسب المشروع / بالساعة',
      liveDemoBadge: 'ديمو مباشر',
      photosCount: (n) => n === 1 ? 'صورة' : `${n} صور`,
      openDemo: 'فتح الديمو المباشر',
      openImage: 'فتح الصورة كاملة',
      skillsTitle: 'المهارات والأدوات',
      whatYouGet: 'ماذا ستحصل عليه',
      workflowSteps: 'مراحل العمل',
      upgradesTitle: 'تطويرات اختيارية',
      upgradeCol: 'التطوير',
      priceCol: 'السعر',
      timeCol: 'المدة',
      extraDays: (d) => `+${d} يوم`,
      oneDay: 'خلال يوم واحد',
      relatedWork: 'أعمال مرتبطة بالخدمة',
      orderOn: 'اطلب عبر',
      viewOn: (p) => `عرض على ${p}`,
      viewRepoFolder: 'ملفات العمل على GitHub',
      otherLangLabel: 'English Overview',
      loadError: 'تعذّر تحميل بيانات المعرض. تأكد من فتح الموقع عبر خادم ويب أو GitHub Pages.',
    },
    en: {
      pageTitle: 'Youssef Yacoup — Services & Portfolio',
      brand: 'Youssef Yacoup',
      navFeatured: 'Featured',
      navServices: 'Services',
      navPortfolio: 'Portfolio',
      navPlatforms: 'Platforms',
      navOpenSource: 'Open Source',
      navExperience: 'Experience',
      navContact: 'Contact',
      navHire: 'Hire Me',
      cmdBtn: 'Quick Search',
      pigmentTitle: 'Accent Color',
      cmdPlaceholder: 'Type to jump to any project, service, platform, or action...',
      cmdProject: 'Project',
      cmdService: 'Service',
      cmdPlatform: 'Platform',
      cmdAction: 'Action',
      cmdSwitchLang: 'Switch language to العربية',
      cmdSwitchTheme: 'Toggle Light / Dark theme',
      heroBadge: 'Available for freelance & contract · Cairo, Egypt',
      heroName: 'Youssef Yacoup',
      heroRolePrefix: 'AI & Backend Developer —',
      heroSubtitle: 'I build Python machine-learning prototypes, .NET & Azure REST backends, and practical web applications — turning datasets or workflows into documented, testable software.',
      heroCtaPortfolio: (n) => `Browse Portfolio (${n})`,
      heroCtaServices: (n) => `Services & Pricing (${n})`,
      heroCtaRepo: 'GitHub Repository',
      heroPlatformsLabel: 'Verified Freelance Platforms',
      stackLabel: 'Core Stack',
      linksLabel: 'Professional Links',
      statProjects: 'Portfolio Projects',
      statServices: 'Services',
      statPlatforms: 'Freelance Platforms',
      statDemos: 'Interactive Demos',
      featuredEyebrow: 'Selected Engineering & Design',
      featuredTitle: 'Featured Projects & Case Studies',
      openCaseStudy: 'View Case Study & Gallery',
      servicesEyebrow: 'Capabilities',
      servicesTitle: 'Services',
      servicesDesc: 'Select any service to inspect deliverables, workflow steps, optional add-ons, and related portfolio projects.',
      servicesPricing: 'Khamsat: from $10 · Freelancer: $10/hr · Upwork: $20/hr · Mostaql & Nafezly: custom quote',
      portfolioEyebrow: 'Selected & Published Work',
      portfolioTitle: 'Full Portfolio Gallery',
      portfolioDesc: 'Search in English or Arabic, and filter by category, freelance platform, or projects with a live interactive demo.',
      searchPlaceholder: 'Search projects, skills, technologies (e.g. Python, React, AWS, Logo)...',
      platformOptions: ['All Platforms', 'Upwork', 'Freelancer.com', 'Mostaql', 'Nafezly'],
      demoOnly: 'Live Demo Only',
      allCategories: 'All',
      resetFilters: 'Reset filters',
      showing: (shown, total) => `Showing ${shown} of ${total} projects`,
      emptyTitle: 'No matching projects found',
      emptyDesc: 'Try a different keyword or reset the filters to view all projects.',
      platformsEyebrow: 'Hire & Connect',
      platformsTitle: 'Freelance Platforms',
      platformsDesc: 'Choose your preferred platform to message me directly or filter projects listed there.',
      visitProfile: 'Visit Profile',
      filterByPlatform: 'Filter Projects',
      viewKhamsatService: 'View Service',
      ossEyebrow: 'GitHub · Hackathons & Competitions',
      ossTitle: 'Open Source & Competitions',
      ossAll: 'All GitHub Repositories',
      expEyebrow: 'Background & Qualifications',
      expTitle: 'Experience & Credentials',
      expHeading: 'Work Experience',
      credHeading: 'Education & Certifications',
      verifyLink: 'Verify',
      ctaEyebrow: 'Start a Project',
      ctaTitle: 'Have a dataset, API, or product brief in mind?',
      ctaDesc: 'Message me on whichever platform works best for you — we will align on the first milestone, scope, and evaluation criteria.',
      footerCopy: '© 2026 Youssef Yacoup — powered directly by Freelancer-Platforms repository data',
      footerRepo: 'GitHub Repository',
      footerTop: 'Back to top',
      loading: 'Loading...',
      serviceDetails: 'View details',
      listedKhamsat: 'Khamsat · from $10',
      customQuote: 'Hourly / Custom quote',
      liveDemoBadge: 'Live Demo',
      photosCount: (n) => n === 1 ? '1 image' : `${n} images`,
      openDemo: 'Open Live Demo',
      openImage: 'Open full image',
      skillsTitle: 'Skills & Tools',
      whatYouGet: 'Deliverables',
      workflowSteps: 'Workflow',
      upgradesTitle: 'Optional Add-ons',
      upgradeCol: 'Add-on',
      priceCol: 'Price',
      timeCol: 'Delivery',
      extraDays: (d) => `+${d} day`,
      oneDay: '1-day delivery',
      relatedWork: 'Related Portfolio Work',
      orderOn: 'Order on',
      viewOn: (p) => `View on ${p}`,
      viewRepoFolder: 'Project folder on GitHub',
      otherLangLabel: 'الملخص بالعربية',
      loadError: 'Could not load portfolio data. Make sure the site is served over HTTP or GitHub Pages.',
    },
  };

  const state = {
    lang: new URLSearchParams(location.search).get('lang') || localStorage.getItem('yy_lang') || 'ar',
    theme: localStorage.getItem('yy_theme_v2') || 'light',
    category: 'all',
    platform: 'all',
    demoOnly: false,
    search: '',
    view: 'grid-3',
    spotIdx: 0,
    spotPaused: false,
    cmdIdx: 0,
    cmdList: [],
    data: null,
    modalImages: [],
    modalImgIdx: 0,
  };
  if (state.lang !== 'ar' && state.lang !== 'en') state.lang = 'ar';
  if (state.theme !== 'light' && state.theme !== 'dark') state.theme = 'light';

  const $ = (id) => document.getElementById(id);
  const cleanBidi = (s) => String(s ?? '').replace(/(\s|^)و([A-Za-z])/g, '$1و $2');
  const esc = (s) => cleanBidi(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const t = (key, ...args) => {
    const v = I18N[state.lang][key];
    return typeof v === 'function' ? v(...args) : v;
  };
  const palStyle = (cat) => {
    const p = CAT_PALETTE[cat] || CAT_PALETTE.ecommerce;
    return `--cat-color:${p.color};--cat-bg:${p.bg};--cat-bd:${p.bd}`;
  };

  function applyTheme() {
    document.documentElement.dataset.theme = state.theme;
    $('themeToggle').innerHTML = state.theme === 'dark' ? SVG.sun : SVG.moon;
  }

  function applyLang() {
    const isAr = state.lang === 'ar';
    document.documentElement.lang = state.lang;
    document.documentElement.dir = isAr ? 'rtl' : 'ltr';
    document.title = t('pageTitle');

    $('langAr').classList.toggle('active', isAr);
    $('langEn').classList.toggle('active', !isAr);
    $('searchInput').placeholder = t('searchPlaceholder');
    if ($('cmdInput')) $('cmdInput').placeholder = t('cmdPlaceholder');

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const k = el.dataset.i18n;
      if (k === 'heroCtaPortfolio' && state.data) {
        el.textContent = t(k, state.data.web.items.length);
      } else if (k === 'heroCtaServices' && state.data) {
        el.textContent = t(k, state.data.web.services.length);
      } else if (I18N[state.lang][k] && typeof I18N[state.lang][k] === 'string') {
        el.textContent = I18N[state.lang][k];
      }
    });

    const pf = $('platformFilter');
    const opts = t('platformOptions');
    for (let i = 0; i < pf.options.length && i < opts.length; i++) {
      pf.options[i].textContent = opts[i];
    }

    if (state.data) renderAll();
    (window.__yyLangListeners || []).forEach((cb) => cb(state.lang));
  }

  function renderHeroPlatforms() {
    const web = state.data.web;
    const isAr = state.lang === 'ar';
    $('heroPlatforms').innerHTML = web.profiles.map((p) => {
      const label = isAr ? p.name_ar.split(' ·')[0] : p.name_en;
      return `<a class="platform-pill magnetic" data-plat="${esc(p.key)}" href="${esc(p.url)}" target="_blank" rel="noopener" style="--plat-color:${p.color}">
        <span class="plat-dot"></span><span>${esc(label)}</span>${SVG.ext}
      </a>`;
    }).join('');

    const botBtnLabel = isAr ? 'اسأل مساعد الأعمال الآن' : 'Ask Portfolio Assistant';
    $('ctaPlatforms').innerHTML = `<button type="button" class="btn btn-primary btn-sm magnetic" data-open-bot="1">💬 ${esc(botBtnLabel)}</button>` + web.profiles.map((p) => {
      const label = isAr ? p.name_ar.split(' ·')[0] : p.name_en;
      return `<a class="btn btn-secondary btn-sm magnetic" href="${esc(p.url)}" target="_blank" rel="noopener">
        <span class="plat-dot" style="background:${p.color}"></span><span>${esc(label)}</span>${SVG.ext}
      </a>`;
    }).join('');

    animateStat('statProjects', web.items.length);
    animateStat('statServices', web.services.length);
    animateStat('statPlatforms', web.profiles.length);
    animateStat('statDemos', web.items.filter((i) => i.demo).length);

    const ctaP = document.querySelector('[data-i18n="heroCtaPortfolio"]');
    const ctaS = document.querySelector('[data-i18n="heroCtaServices"]');
    if (ctaP) ctaP.textContent = t('heroCtaPortfolio', web.items.length);
    if (ctaS) ctaS.textContent = t('heroCtaServices', web.services.length);
  }

  /* ---- Interactive Featured Spotlight Deck ---- */
  function featuredList() {
    return FEATURED_SLUGS
      .map((sl) => state.data.web.items.find((x) => x.slug === sl))
      .filter(Boolean);
  }

  function renderSpotlight() {
    const list = featuredList();
    if (!list.length) return;
    const isAr = state.lang === 'ar';
    const catMap = Object.fromEntries(state.data.web.categories.map((c) => [c.key, c]));
    state.spotIdx = ((state.spotIdx % list.length) + list.length) % list.length;
    const it = list[state.spotIdx];
    const cat = catMap[it.category];
    const pal = CAT_PALETTE[it.category] || CAT_PALETTE.ecommerce;

    $('spotlightTabs').innerHTML = list.map((proj, i) => {
      const pPal = CAT_PALETTE[proj.category] || CAT_PALETTE.ecommerce;
      const shortTitle = (isAr ? proj.ar : proj.en).split(/[\u2013\u2014—-]/)[0].trim().slice(0, 22);
      return `<button type="button" class="spot-tab ${i === state.spotIdx ? 'active' : ''}" style="--spot-color:${pPal.color}" data-spot-idx="${i}">
        <span class="spot-num">0${i + 1}</span>
        <span>${esc(shortTitle)}</span>
      </button>`;
    }).join('');

    const title = isAr ? it.ar : it.en;
    const sub = isAr ? it.en : it.ar;
    const desc = isAr ? (it.desc_ar || it.desc_en) : (it.desc_en || it.desc_ar);
    const plats = it.platforms.map((p) => `<span class="plat-label"><span class="plat-dot" style="background:${PLATFORM_COLORS[p.key] || '#555'}"></span>${esc(p.name.split(' ·')[0])}</span>`).join('');
    const skills = it.skills.slice(0, 6).map((s) => `<span class="tag">${esc(s)}</span>`).join('');
    const extraBtns = it.extra.slice(0, 2).map((e) => {
      const lbl = isAr ? (EXTRA_AR[e.label] || e.label) : e.label;
      return `<a class="btn btn-secondary btn-sm" href="${esc(e.url)}" target="_blank" rel="noopener">${esc(lbl)} ${SVG.ext}</a>`;
    }).join('');

    const deck = $('spotlightDeck');
    deck.style.setProperty('--spot-color', pal.color);
    deck.innerHTML = `
      <div class="spot-progress-bar"><div class="spot-progress-fill" id="spotProgressFill"></div></div>
      <div class="spot-grid">
        <div class="spot-media" data-project="${esc(it.slug)}">
          <img src="${esc(it.images[0] || it.cover)}" alt="${esc(title)}">
          <div class="card-hover-cta"><span>${esc(t('openCaseStudy'))}</span><span>${isAr ? '←' : '→'}</span></div>
        </div>
        <div class="spot-body" style="${palStyle(it.category)}">
          <div>
            <div class="card-meta-line">
              <span class="cat-badge">${esc(isAr ? cat.ar : cat.en)}</span>
              <div class="card-meta-left">${plats}</div>
            </div>
            <h3 class="spot-title">${esc(title)}</h3>
            <p class="spot-sub">${esc(sub)}</p>
            <p class="spot-desc">${esc(desc)}</p>
            <div class="tags-row" style="margin-top:0.85rem">${skills}</div>
          </div>
          <div class="spot-footer">
            <div style="display:flex;flex-wrap:wrap;gap:0.5rem">
              <button type="button" class="btn btn-primary btn-sm" data-project="${esc(it.slug)}">${esc(t('openCaseStudy'))}</button>
              ${it.demo ? `<a class="btn btn-secondary btn-sm" href="${esc(it.demo)}" target="_blank" rel="noopener">${SVG.play} ${esc(t('openDemo'))}</a>` : ''}
              ${extraBtns}
            </div>
            <div class="spot-arrows">
              <button type="button" class="icon-btn" id="spotPrev" aria-label="Previous">${isAr ? SVG.next : SVG.prev}</button>
              <button type="button" class="icon-btn" id="spotNext" aria-label="Next">${isAr ? SVG.prev : SVG.next}</button>
            </div>
          </div>
        </div>
      </div>
    `;
    spotStart = performance.now();
  }

  let spotStart = performance.now();
  const SPOT_DURATION = 5800;
  function tickSpotlight(now) {
    if (state.data && !state.spotPaused && $('modalBackdrop').hidden && $('cmdBackdrop').hidden) {
      const elapsed = now - spotStart;
      const pct = Math.min(100, (elapsed / SPOT_DURATION) * 100);
      const fill = $('spotProgressFill');
      if (fill) fill.style.width = `${pct.toFixed(1)}%`;
      if (elapsed >= SPOT_DURATION) {
        state.spotIdx++;
        renderSpotlight();
      }
    } else {
      spotStart = now;
    }
    requestAnimationFrame(tickSpotlight);
  }

  function renderServices() {
    const isAr = state.lang === 'ar';
    $('servicesGrid').innerHTML = state.data.web.services.map((s, idx) => {
      const title = isAr ? s.ar : s.en;
      const intro = isAr ? s.intro_ar : s.intro_en;
      const badgeText = s.listed ? t('listedKhamsat') : t('customQuote');
      const tools = s.tools.slice(0, 3).map((x) => `<span class="tag">${esc(x)}</span>`).join('');
      const more = s.tools.length > 3 ? `<span class="tag">+${s.tools.length - 3}</span>` : '';
      const sCat = SERVICE_CAT[s.slug] || 'web';
      return `<article class="service-card reveal-item" style="--stagger:${idx * 50}ms;${palStyle(sCat)}" data-service="${esc(s.slug)}" tabindex="0" role="button">
        <div class="card-media">
          <img src="${esc(s.cover)}" alt="${esc(title)}" loading="lazy">
          <div class="card-hover-cta"><span>${esc(t('serviceDetails'))}</span><span>${isAr ? '←' : '→'}</span></div>
        </div>
        <div class="card-body">
          <div class="card-meta-line">
            <span class="cat-badge">${esc(badgeText)}</span>
          </div>
          <h3 class="card-title">${esc(title)}</h3>
          <p class="card-excerpt">${esc(intro)}</p>
          <div class="tags-row">${tools}${more}</div>
          <span class="card-footer-link">${esc(t('serviceDetails'))} ${isAr ? '←' : '→'}</span>
        </div>
      </article>`;
    }).join('');
  }

  function filteredItems() {
    const q = state.search.trim().toLowerCase();
    return state.data.web.items.filter((it) => {
      if (state.category !== 'all' && it.category !== state.category) return false;
      if (state.platform !== 'all' && !it.platforms.some((p) => p.key === state.platform)) return false;
      if (state.demoOnly && !it.demo) return false;
      if (q) {
        const hay = [it.en, it.ar, it.desc_en, it.desc_ar, ...it.skills, ...it.platforms.map((p) => p.name)].join(' ').toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }

  function renderCategoryChips() {
    const web = state.data.web;
    const isAr = state.lang === 'ar';
    const baseItems = web.items.filter((it) => {
      if (state.platform !== 'all' && !it.platforms.some((p) => p.key === state.platform)) return false;
      if (state.demoOnly && !it.demo) return false;
      return true;
    });
    const chips = [
      { key: 'all', label: t('allCategories'), count: baseItems.length, style: '--cat-color:var(--p-terracotta)' },
      ...web.categories.map((c) => ({
        key: c.key,
        label: isAr ? c.ar : c.en,
        count: baseItems.filter((i) => i.category === c.key).length,
        style: palStyle(c.key),
      })),
    ];
    $('categoryChips').innerHTML = chips.map((c) => `
      <button type="button" class="cat-chip ${state.category === c.key ? 'active' : ''}" style="${c.style}" data-cat="${esc(c.key)}" role="tab" aria-selected="${state.category === c.key}">
        <span class="cat-dot"></span>
        <span>${esc(c.label)}</span>
        <span class="cat-count">${c.count}</span>
      </button>
    `).join('');
  }

  function renderPortfolio() {
    const web = state.data.web;
    const isAr = state.lang === 'ar';
    const catMap = Object.fromEntries(web.categories.map((c) => [c.key, c]));
    const list = filteredItems();

    const gridEl = $('portfolioGrid');
    gridEl.classList.toggle('grid-2', state.view === 'grid-2');
    gridEl.classList.toggle('list-view', state.view === 'list-view');

    $('resultsCount').textContent = t('showing', list.length, web.items.length);
    const hasFilter = state.category !== 'all' || state.platform !== 'all' || state.demoOnly || state.search.trim() !== '';
    $('resetFiltersBtn').hidden = !hasFilter;
    $('searchClear').hidden = state.search.trim() === '';

    if (!list.length) {
      gridEl.innerHTML = '';
      $('emptyState').hidden = false;
      return;
    }
    $('emptyState').hidden = true;

    gridEl.innerHTML = list.map((it, idx) => {
      const cat = catMap[it.category];
      const title = isAr ? it.ar : it.en;
      const excerpt = (isAr ? (it.desc_ar || it.desc_en) : (it.desc_en || it.desc_ar)).replace(/\s+/g, ' ');
      const plats = it.platforms.map((p) => {
        const short = p.name.split(' ·')[0];
        return `<span class="plat-label"><span class="plat-dot" style="background:${PLATFORM_COLORS[p.key] || '#555'}"></span>${esc(short)}</span>`;
      }).join('');
      const skills = it.skills.slice(0, 3).map((s) => `<span class="tag">${esc(s)}</span>`).join('');
      const more = it.skills.length > 3 ? `<span class="tag">+${it.skills.length - 3}</span>` : '';
      return `<article class="project-card reveal-item" style="--stagger:${(idx % 9) * 40}ms;${palStyle(it.category)}" data-project="${esc(it.slug)}" tabindex="0" role="button">
        <div class="card-media">
          <img src="${esc(it.cover)}" alt="${esc(title)}" loading="lazy">
          <div class="card-hover-cta"><span>${esc(t('serviceDetails'))}</span><span>${isAr ? '←' : '→'}</span></div>
        </div>
        <div class="card-body">
          <div class="card-meta-line">
            <div class="card-meta-left">
              <span class="cat-badge">${esc(isAr ? cat.ar : cat.en)}</span>
              ${it.demo ? `<span class="badge-subtle badge-live">${SVG.play} ${esc(t('liveDemoBadge'))}</span>` : ''}
            </div>
            <span class="photo-count">${esc(t('photosCount', it.images.length))}</span>
          </div>
          <h3 class="card-title">${esc(title)}</h3>
          <p class="card-excerpt">${esc(excerpt)}</p>
          <div class="card-meta-line" style="padding-top:0.2rem">${plats}</div>
          <div class="tags-row">${skills}${more}</div>
        </div>
      </article>`;
    }).join('');
    observeReveals();
  }

  function renderPlatforms() {
    const isAr = state.lang === 'ar';
    $('platformsGrid').innerHTML = state.data.web.profiles.map((p, idx) => `
      <div class="platform-card reveal-item" data-plat="${esc(p.key)}" style="--stagger:${idx * 55}ms;border-top:4px solid ${p.color}">
        <div class="platform-card-head">
          <span class="plat-dot" style="background:${p.color};width:9px;height:9px"></span>
          <h3>${esc(isAr ? p.name_ar.split(' ·')[0] : p.name_en)}</h3>
        </div>
        <p class="platform-meta">${esc(isAr ? p.meta_ar : p.meta_en)}</p>
        <p class="platform-count">${esc(isAr ? p.count_ar : p.count_en)}</p>
        <div class="platform-actions">
          <a class="btn btn-sm" style="background:var(--plat-c,${p.color});border-color:var(--plat-c,${p.color});color:#fff" href="${esc(p.url)}" target="_blank" rel="noopener">${esc(t('visitProfile'))} ${SVG.ext}</a>
          ${p.filterable
            ? `<button type="button" class="btn btn-secondary btn-sm" data-filter-platform="${esc(p.key)}">${esc(t('filterByPlatform'))}</button>`
            : `<button type="button" class="btn btn-secondary btn-sm" data-service="landing-page-design">${esc(t('viewKhamsatService'))}</button>`}
        </div>
      </div>
    `).join('');
  }

  function renderOpenSource() {
    const isAr = state.lang === 'ar';
    const colors = ['cobalt', 'terracotta', 'emerald', 'teal', 'amber', 'crimson'];
    $('ossGrid').innerHTML = state.data.web.open_source.map((r, idx) => {
      const c = colors[idx % colors.length];
      return `<a class="oss-card reveal-item" style="--stagger:${(idx % 6) * 45}ms;border-top:3px solid var(--p-${c})" href="${esc(r.url)}" target="_blank" rel="noopener">
        <div class="oss-top">
          <h3>${esc(r.name)}</h3>
          ${SVG.ext}
        </div>
        <p>${esc(isAr ? (r.summary_ar || r.summary_en) : (r.summary_en || r.summary))}</p>
        <div class="oss-repo" style="color:var(--p-${c})">Youssef123ya/${esc(r.repo)}</div>
      </a>`;
    }).join('');
  }

  function renderExperience() {
    const isAr = state.lang === 'ar';
    $('expTimeline').innerHTML = state.data.web.experience.map((e) => `
      <div class="timeline-item">
        <div class="timeline-role">${esc(isAr ? e.role_ar : e.role_en)}</div>
        <div class="timeline-meta">${esc(e.org)} · ${esc(isAr ? (e.period_ar || e.period_en) : (e.period_en || e.period))}</div>
      </div>
    `).join('');

    $('credList').innerHTML = state.data.web.credentials.map((c) => `
      <div class="cred-item">
        <div>
          <div class="cred-title">${esc(isAr ? c.title_ar : c.title_en)}</div>
          <div class="cred-org">${esc(isAr ? (c.org_ar || c.org) : (c.org_en || c.org))} · ${esc(c.year)}</div>
        </div>
        ${c.url ? `<a class="cred-link" href="${esc(c.url)}" target="_blank" rel="noopener">${esc(t('verifyLink'))} ${SVG.ext}</a>` : ''}
      </div>
    `).join('');
  }

  function renderAll() {
    renderHeroPlatforms();
    renderSpotlight();
    renderServices();
    renderCategoryChips();
    renderPortfolio();
    renderPlatforms();
    renderOpenSource();
    renderExperience();
    observeReveals();
    restartTypewriter();
  }

  /* ---- Modal Logic ---- */
  function setModalImage(idx) {
    if (!state.modalImages.length) return;
    state.modalImgIdx = (idx + state.modalImages.length) % state.modalImages.length;
    const src = state.modalImages[state.modalImgIdx];
    const mainImg = $('modalMainImg');
    const openLink = $('modalFullLink');
    if (mainImg) {
      mainImg.classList.add('switching');
      setTimeout(() => {
        mainImg.src = src;
        mainImg.classList.remove('switching');
      }, 110);
    }
    if (openLink) openLink.href = src;
    document.querySelectorAll('.modal-thumb').forEach((btn, i) => {
      btn.classList.toggle('active', i === state.modalImgIdx);
    });
  }

  function openProjectModal(slug) {
    const it = state.data.web.items.find((x) => x.slug === slug);
    if (!it) return;
    const isAr = state.lang === 'ar';
    const cat = state.data.web.categories.find((c) => c.key === it.category);
    state.modalImages = it.images.length ? it.images : [it.cover];
    state.modalImgIdx = 0;

    const title = isAr ? it.ar : it.en;
    const subtitle = isAr ? it.en : it.ar;
    const primaryDesc = isAr ? (it.desc_ar || it.desc_en) : (it.desc_en || it.desc_ar);
    const secondaryDesc = isAr ? it.desc_en : it.desc_ar;

    const thumbs = state.modalImages.length > 1
      ? `<div class="modal-thumbs">${state.modalImages.map((img, i) => `
          <button type="button" class="modal-thumb ${i === 0 ? 'active' : ''}" data-thumb="${i}">
            <img src="${esc(img)}" alt="">
          </button>`).join('')}</div>`
      : '';

    const platBtns = it.platforms.map((p) => {
      const short = p.name.split(' ·')[0];
      return `<a class="btn btn-secondary btn-sm" href="${esc(p.url)}" target="_blank" rel="noopener">
        <span class="plat-dot" style="background:${PLATFORM_COLORS[p.key] || '#555'}"></span>
        <span>${esc(t('viewOn', short))}</span> ${SVG.ext}
      </a>`;
    }).join('');

    const extraBtns = it.extra.map((e) => {
      const lbl = isAr ? (EXTRA_AR[e.label] || e.label) : e.label;
      return `<a class="btn btn-secondary btn-sm" href="${esc(e.url)}" target="_blank" rel="noopener">${esc(lbl)} ${SVG.ext}</a>`;
    }).join('');

    $('modalBody').innerHTML = `
      <div class="modal-hero">
        <img id="modalMainImg" src="${esc(state.modalImages[0])}" alt="${esc(title)}">
        ${state.modalImages.length > 1 ? `
          <button type="button" class="carousel-btn carousel-prev" id="modalPrev" aria-label="Previous">${isAr ? SVG.next : SVG.prev}</button>
          <button type="button" class="carousel-btn carousel-next" id="modalNext" aria-label="Next">${isAr ? SVG.prev : SVG.next}</button>` : ''}
      </div>
      ${thumbs}
      <div class="modal-content" style="${palStyle(it.category)}">
        <div class="modal-meta-row">
          <span class="cat-badge">${esc(isAr ? cat.ar : cat.en)}</span>
          ${it.platforms.map((p) => `<span class="badge-subtle"><span class="plat-dot" style="background:${PLATFORM_COLORS[p.key] || '#555'}"></span>${esc(p.name.split(' ·')[0])}</span>`).join('')}
          <a id="modalFullLink" href="${esc(state.modalImages[0])}" target="_blank" rel="noopener" class="cred-link" style="margin-inline-start:auto">${esc(t('openImage'))} ${SVG.ext}</a>
        </div>
        <h2 class="modal-title" id="modalTitle">${esc(title)}</h2>
        <p class="modal-subtitle">${esc(subtitle)}</p>
        <p class="modal-desc">${esc(primaryDesc)}</p>
        ${secondaryDesc && secondaryDesc !== primaryDesc ? `
          <div class="modal-secondary-box" dir="${isAr ? 'ltr' : 'rtl'}">
            <strong>${esc(t('otherLangLabel'))}:</strong> ${esc(secondaryDesc)}
          </div>` : ''}
        ${it.skills.length ? `
          <h4 class="modal-section-title">${esc(t('skillsTitle'))}</h4>
          <div class="tags-row">${it.skills.map((s) => `<span class="tag">${esc(s)}</span>`).join('')}</div>` : ''}
        <div class="modal-actions">
          ${it.demo ? `<a class="btn btn-primary btn-sm" href="${esc(it.demo)}" target="_blank" rel="noopener">${SVG.play} ${esc(t('openDemo'))}</a>` : ''}
          ${platBtns}
          ${extraBtns}
          <a class="btn btn-text btn-sm" href="https://github.com/Youssef123ya/Freelancer-Platforms/tree/main/${esc(it.path)}" target="_blank" rel="noopener">${esc(t('viewRepoFolder'))} ${SVG.ext}</a>
        </div>
      </div>
    `;
    showModal();
  }

  function openServiceModal(slug) {
    const s = state.data.web.services.find((x) => x.slug === slug);
    if (!s) return;
    const isAr = state.lang === 'ar';
    state.modalImages = s.images.length ? s.images : [s.cover];
    state.modalImgIdx = 0;

    const title = isAr ? s.ar : s.en;
    const subtitle = isAr ? s.en : s.ar;
    const intro = isAr ? s.intro_ar : s.intro_en;
    const delivery = isAr ? s.delivery_ar : s.delivery_en;

    const thumbs = state.modalImages.length > 1
      ? `<div class="modal-thumbs">${state.modalImages.map((img, i) => `
          <button type="button" class="modal-thumb ${i === 0 ? 'active' : ''}" data-thumb="${i}">
            <img src="${esc(img)}" alt="">
          </button>`).join('')}</div>`
      : '';

    const relatedCards = s.related.map((rSlug) => {
      const proj = state.data.web.items.find((x) => x.slug === rSlug);
      if (!proj) return '';
      return `<button type="button" class="related-mini-card" data-project="${esc(proj.slug)}">
        <img src="${esc(proj.cover)}" alt="${esc(isAr ? proj.ar : proj.en)}">
        <span>${esc(isAr ? proj.ar : proj.en)}</span>
      </button>`;
    }).join('');

    $('modalBody').innerHTML = `
      <div class="modal-hero">
        <img id="modalMainImg" src="${esc(state.modalImages[0])}" alt="${esc(title)}">
        ${state.modalImages.length > 1 ? `
          <button type="button" class="carousel-btn carousel-prev" id="modalPrev" aria-label="Previous">${isAr ? SVG.next : SVG.prev}</button>
          <button type="button" class="carousel-btn carousel-next" id="modalNext" aria-label="Next">${isAr ? SVG.prev : SVG.next}</button>` : ''}
      </div>
      ${thumbs}
      <div class="modal-content" style="${palStyle(SERVICE_CAT[s.slug] || 'web')}">
        <div class="modal-meta-row">
          <span class="cat-badge">${esc(s.listed ? t('listedKhamsat') : t('customQuote'))}</span>
          ${delivery ? `<span class="badge-subtle">${esc(delivery)}</span>` : ''}
        </div>
        <h2 class="modal-title" id="modalTitle">${esc(title)}</h2>
        <p class="modal-subtitle">${esc(subtitle)}</p>
        <p class="modal-desc">${esc(intro)}</p>

        <h4 class="modal-section-title">${esc(t('whatYouGet'))}</h4>
        <ul class="check-list">
          ${s.includes.map((inc) => `<li>${SVG.check}<span>${esc(isAr ? inc.ar : inc.en)}</span></li>`).join('')}
        </ul>

        ${s.steps.length ? `
          <h4 class="modal-section-title">${esc(t('workflowSteps'))}</h4>
          <ul class="check-list">
            ${s.steps.map((st, idx) => `<li><strong>${idx + 1}.</strong><span>${esc(isAr ? st.ar : st.en)}</span></li>`).join('')}
          </ul>` : ''}

        ${s.upgrades.length ? `
          <h4 class="modal-section-title">${esc(t('upgradesTitle'))}</h4>
          <table class="upgrades-table">
            <thead><tr><th>${esc(t('upgradeCol'))}</th><th>${esc(t('priceCol'))}</th><th>${esc(t('timeCol'))}</th></tr></thead>
            <tbody>
              ${s.upgrades.map((u) => `<tr>
                <td>${esc(isAr ? u.title : (u.title_en || u.title))}</td>
                <td><strong>$${u.price_usd}</strong></td>
                <td>${u.extra_days ? esc(t('extraDays', u.extra_days)) : esc(t('oneDay'))}</td>
              </tr>`).join('')}
            </tbody>
          </table>` : ''}

        <h4 class="modal-section-title">${esc(t('skillsTitle'))}</h4>
        <div class="tags-row">${s.tools.map((x) => `<span class="tag">${esc(x)}</span>`).join('')}</div>

        ${relatedCards ? `
          <h4 class="modal-section-title">${esc(t('relatedWork'))}</h4>
          <div class="related-mini-grid">${relatedCards}</div>` : ''}

        <div class="modal-actions">
          ${s.order.map((o, idx) => `<a class="btn ${idx === 0 ? 'btn-primary' : 'btn-secondary'} btn-sm" href="${esc(o.url)}" target="_blank" rel="noopener">${esc(t('orderOn'))} ${esc(o.label.split(' ·')[0])} ${SVG.ext}</a>`).join('')}
        </div>
      </div>
    `;
    showModal();
  }

  function showModal() {
    $('modalBackdrop').hidden = false;
    document.body.style.overflow = 'hidden';
    $('modalClose').focus();
  }

  function closeModal() {
    $('modalBackdrop').hidden = true;
    document.body.style.overflow = '';
  }

  /* ---- Quick Command Palette (Ctrl+K) ---- */
  function openCmd() {
    if (!state.data) return;
    $('cmdBackdrop').hidden = false;
    $('cmdInput').value = '';
    state.cmdIdx = 0;
    renderCmdResults('');
    $('cmdInput').focus();
  }

  function closeCmd() {
    $('cmdBackdrop').hidden = true;
  }

  function renderCmdResults(query) {
    const q = query.trim().toLowerCase();
    const isAr = state.lang === 'ar';
    const web = state.data.web;
    const entries = [];

    web.services.forEach((s) => {
      entries.push({
        type: t('cmdService'),
        color: 'var(--p-cobalt)',
        bg: 'var(--p-cobalt-bg)',
        title: isAr ? s.ar : s.en,
        sub: isAr ? s.en : s.ar,
        thumb: s.cover,
        hay: [s.en, s.ar, ...s.tools].join(' ').toLowerCase(),
        run: () => { closeCmd(); openServiceModal(s.slug); },
      });
    });

    web.items.forEach((it) => {
      const pal = CAT_PALETTE[it.category] || CAT_PALETTE.ecommerce;
      entries.push({
        type: t('cmdProject'),
        color: pal.color,
        bg: pal.bg,
        title: isAr ? it.ar : it.en,
        sub: it.skills.slice(0, 4).join(' · ') || (isAr ? it.en : it.ar),
        thumb: it.cover,
        hay: [it.en, it.ar, ...it.skills].join(' ').toLowerCase(),
        run: () => { closeCmd(); openProjectModal(it.slug); },
      });
    });

    web.profiles.forEach((p) => {
      entries.push({
        type: t('cmdPlatform'),
        color: p.color,
        bg: 'var(--surface-2)',
        title: isAr ? p.name_ar : p.name_en,
        sub: isAr ? p.meta_ar : p.meta_en,
        thumb: null,
        hay: [p.name_en, p.name_ar, p.meta_en].join(' ').toLowerCase(),
        run: () => { closeCmd(); window.open(p.url, '_blank', 'noopener'); },
      });
    });

    entries.push({
      type: t('cmdAction'),
      color: 'var(--p-terracotta)',
      bg: 'var(--p-terracotta-bg)',
      title: t('cmdSwitchLang'),
      sub: 'AR ↔ EN',
      thumb: null,
      hay: 'language english arabic لغة عربي انجليزي',
      run: () => {
        closeCmd();
        state.lang = state.lang === 'ar' ? 'en' : 'ar';
        localStorage.setItem('yy_lang', state.lang);
        applyLang();
      },
    });
    entries.push({
      type: t('cmdAction'),
      color: 'var(--p-emerald)',
      bg: 'var(--p-emerald-bg)',
      title: t('cmdSwitchTheme'),
      sub: 'Light ↔ Dark',
      thumb: null,
      hay: 'theme dark light ثيم ليلي نهاري',
      run: () => {
        closeCmd();
        state.theme = state.theme === 'dark' ? 'light' : 'dark';
        localStorage.setItem('yy_theme_v2', state.theme);
        applyTheme();
      },
    });

    state.cmdList = (q ? entries.filter((e) => e.hay.includes(q)) : entries).slice(0, 14);
    state.cmdIdx = 0;

    $('cmdResults').innerHTML = state.cmdList.map((item, idx) => `
      <button type="button" class="cmd-item ${idx === state.cmdIdx ? 'active' : ''}" data-cmd-idx="${idx}">
        <div class="cmd-item-left">
          ${item.thumb ? `<img class="cmd-thumb" src="${esc(item.thumb)}" alt="">` : ''}
          <div style="min-width:0">
            <div class="cmd-title">${esc(item.title)}</div>
            <div class="cmd-sub">${esc(item.sub)}</div>
          </div>
        </div>
        <span class="cmd-type" style="color:${item.color};background:${item.bg}">${esc(item.type)}</span>
      </button>
    `).join('');
  }

  function resetFilters() {
    state.category = 'all';
    state.platform = 'all';
    state.demoOnly = false;
    state.search = '';
    $('searchInput').value = '';
    $('platformFilter').value = 'all';
    $('demoOnlyBtn').setAttribute('aria-pressed', 'false');
    renderCategoryChips();
    renderPortfolio();
  }

  /* ---- Events ---- */
  document.querySelectorAll('[data-set-lang]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const next = btn.dataset.setLang;
      if (next === state.lang) return;
      state.lang = next;
      localStorage.setItem('yy_lang', state.lang);
      applyLang();
    });
  });

  $('themeToggle').addEventListener('click', () => {
    state.theme = state.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('yy_theme_v2', state.theme);
    applyTheme();
  });

  $('menuToggle').addEventListener('click', (e) => {
    e.stopPropagation();
    const open = $('navLinks').classList.toggle('open');
    $('menuToggle').setAttribute('aria-expanded', String(open));
  });
  $('navLinks').addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      $('navLinks').classList.remove('open');
      $('menuToggle').setAttribute('aria-expanded', 'false');
    }
  });
  document.addEventListener('click', (e) => {
    if ($('navLinks').classList.contains('open') && !e.target.closest('#navbar')) {
      $('navLinks').classList.remove('open');
      $('menuToggle').setAttribute('aria-expanded', 'false');
    }
  });

  // View Mode Switcher (3x / 2x / List)
  document.querySelectorAll('[data-view]').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.view = btn.dataset.view;
      document.querySelectorAll('[data-view]').forEach((b) => b.classList.toggle('active', b === btn));
      renderPortfolio();
    });
  });

  // Spotlight hover pause
  $('spotlightDeck').addEventListener('pointerenter', () => { state.spotPaused = true; });
  $('spotlightDeck').addEventListener('pointerleave', () => { state.spotPaused = false; spotStart = performance.now(); });

  $('searchInput').addEventListener('input', (e) => {
    state.search = e.target.value;
    renderPortfolio();
  });
  $('searchClear').addEventListener('click', () => {
    state.search = '';
    $('searchInput').value = '';
    renderPortfolio();
    $('searchInput').focus();
  });
  $('platformFilter').addEventListener('change', (e) => {
    state.platform = e.target.value;
    renderCategoryChips();
    renderPortfolio();
  });
  $('demoOnlyBtn').addEventListener('click', () => {
    state.demoOnly = !state.demoOnly;
    $('demoOnlyBtn').setAttribute('aria-pressed', String(state.demoOnly));
    renderCategoryChips();
    renderPortfolio();
  });
  $('resetFiltersBtn').addEventListener('click', resetFilters);
  $('emptyResetBtn').addEventListener('click', resetFilters);

  $('categoryChips').addEventListener('click', (e) => {
    const btn = e.target.closest('[data-cat]');
    if (!btn) return;
    state.category = btn.dataset.cat;
    renderCategoryChips();
    renderPortfolio();
  });

  // Command Palette events
  $('cmdTrigger').addEventListener('click', openCmd);
  $('cmdEsc').addEventListener('click', closeCmd);
  $('cmdBackdrop').addEventListener('click', (e) => {
    if (e.target === $('cmdBackdrop')) closeCmd();
  });
  $('cmdInput').addEventListener('input', (e) => renderCmdResults(e.target.value));

  document.addEventListener('click', (e) => {
    const cmdBtn = e.target.closest('[data-cmd-idx]');
    if (cmdBtn) {
      const item = state.cmdList[Number(cmdBtn.dataset.cmdIdx)];
      if (item) item.run();
      return;
    }

    const spotTab = e.target.closest('[data-spot-idx]');
    if (spotTab) {
      state.spotIdx = Number(spotTab.dataset.spotIdx);
      renderSpotlight();
      return;
    }
    if (e.target.closest('#spotPrev')) { state.spotIdx--; renderSpotlight(); return; }
    if (e.target.closest('#spotNext')) { state.spotIdx++; renderSpotlight(); return; }

    const projCard = e.target.closest('[data-project]');
    if (projCard) { openProjectModal(projCard.dataset.project); return; }

    const svcCard = e.target.closest('[data-service]');
    if (svcCard) { openServiceModal(svcCard.dataset.service); return; }

    const filterPlat = e.target.closest('[data-filter-platform]');
    if (filterPlat) {
      state.platform = filterPlat.dataset.filterPlatform;
      state.category = 'all';
      $('platformFilter').value = state.platform;
      renderCategoryChips();
      renderPortfolio();
      $('portfolio').scrollIntoView({ behavior: 'smooth' });
      return;
    }

    const thumb = e.target.closest('[data-thumb]');
    if (thumb) { setModalImage(Number(thumb.dataset.thumb)); return; }
    if (e.target.closest('#modalPrev')) { setModalImage(state.modalImgIdx - 1); return; }
    if (e.target.closest('#modalNext')) { setModalImage(state.modalImgIdx + 1); return; }
  });

  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if ($('cmdBackdrop').hidden) openCmd();
      else closeCmd();
      return;
    }
    if (!$('cmdBackdrop').hidden) {
      if (e.key === 'Escape') { closeCmd(); return; }
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        state.cmdIdx = (state.cmdIdx + 1) % Math.max(1, state.cmdList.length);
        document.querySelectorAll('.cmd-item').forEach((el, i) => el.classList.toggle('active', i === state.cmdIdx));
        return;
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        state.cmdIdx = (state.cmdIdx - 1 + Math.max(1, state.cmdList.length)) % Math.max(1, state.cmdList.length);
        document.querySelectorAll('.cmd-item').forEach((el, i) => el.classList.toggle('active', i === state.cmdIdx));
        return;
      }
      if (e.key === 'Enter' && state.cmdList[state.cmdIdx]) {
        e.preventDefault();
        state.cmdList[state.cmdIdx].run();
        return;
      }
      return;
    }
    if (!$('modalBackdrop').hidden) {
      if (e.key === 'Escape') closeModal();
      else if (e.key === 'ArrowLeft') setModalImage(state.modalImgIdx + (state.lang === 'ar' ? 1 : -1));
      else if (e.key === 'ArrowRight') setModalImage(state.modalImgIdx + (state.lang === 'ar' ? -1 : 1));
      return;
    }
    if (e.key === 'Enter' && document.activeElement) {
      if (document.activeElement.dataset.project) openProjectModal(document.activeElement.dataset.project);
      else if (document.activeElement.dataset.service) openServiceModal(document.activeElement.dataset.service);
    }
  });

  $('modalClose').addEventListener('click', closeModal);
  $('modalBackdrop').addEventListener('click', (e) => {
    if (e.target === $('modalBackdrop')) closeModal();
  });

  /* ---- Dynamic Motion & Kinetic Interactions ---- */
  function animateStat(id, target) {
    const el = $(id);
    if (!el) return;
    const dur = 950;
    const start = performance.now();
    function tick(now) {
      const p = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(eased * target);
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  let revealObserver = null;
  function observeReveals() {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal-item').forEach((el) => el.classList.add('is-visible'));
      return;
    }
    if (!revealObserver) {
      revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add('is-visible');
            revealObserver.unobserve(en.target);
          }
        });
      }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
    }
    document.querySelectorAll('.reveal-item:not(.is-visible)').forEach((el) => revealObserver.observe(el));
  }

  const ROLES = {
    ar: [
      'نماذج تعلّم الآلة بلغة Python',
      'واجهات REST API بـ C# و ASP.NET Core',
      'الحوسبة السحابية على Microsoft Azure',
      'تطبيقات ويب تفاعلية بـ React و TypeScript',
      'أتمتة سير العمل بالذكاء الاصطناعي',
    ],
    en: [
      'Python Machine Learning Prototypes',
      'C# & ASP.NET Core REST APIs',
      'Microsoft Azure Cloud Architecture',
      'Interactive React & TypeScript Apps',
      'AI-Assisted Workflow Automation',
    ],
  };
  let twTimer = null;
  let twIdx = 0;
  let twChar = 0;
  let twDeleting = false;

  function restartTypewriter() {
    if (twTimer) clearTimeout(twTimer);
    twIdx = 0;
    twChar = 0;
    twDeleting = false;
    stepTypewriter();
  }

  function stepTypewriter() {
    const el = $('typewriterText');
    if (!el) return;
    const list = ROLES[state.lang] || ROLES.ar;
    const word = list[twIdx % list.length];
    if (!twDeleting) {
      twChar++;
      el.textContent = word.slice(0, twChar);
      if (twChar >= word.length) {
        twDeleting = true;
        twTimer = setTimeout(stepTypewriter, 2100);
        return;
      }
      twTimer = setTimeout(stepTypewriter, 42);
    } else {
      twChar--;
      el.textContent = word.slice(0, twChar);
      if (twChar <= 0) {
        twDeleting = false;
        twIdx = (twIdx + 1) % list.length;
        twTimer = setTimeout(stepTypewriter, 260);
        return;
      }
      twTimer = setTimeout(stepTypewriter, 22);
    }
  }

  // 3D Tilt & Cursor Spotlight on Cards + Magnetic Buttons
  let activeCard = null;
  let activeMag = null;
  document.addEventListener('pointermove', (e) => {
    const mag = e.target.closest('.magnetic');
    if (activeMag && activeMag !== mag) {
      activeMag.style.transform = '';
      activeMag = null;
    }
    if (mag) {
      activeMag = mag;
      const r = mag.getBoundingClientRect();
      const dx = (e.clientX - (r.left + r.width / 2)) * 0.22;
      const dy = (e.clientY - (r.top + r.height / 2)) * 0.22;
      mag.style.transform = `translate(${dx.toFixed(1)}px, ${dy.toFixed(1)}px)`;
    }

    const card = e.target.closest('.service-card, .project-card, .platform-card, .oss-card');
    if (activeCard && activeCard !== card) {
      activeCard.style.setProperty('--rx', '0deg');
      activeCard.style.setProperty('--ry', '0deg');
      activeCard.style.setProperty('--ty', '0px');
      activeCard = null;
    }
    if (!card) return;
    activeCard = card;
    const r = card.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    const px = (x / r.width) - 0.5;
    const py = (y / r.height) - 0.5;
    card.style.setProperty('--mx', `${x.toFixed(0)}px`);
    card.style.setProperty('--my', `${y.toFixed(0)}px`);
    card.style.setProperty('--rx', `${(-py * 4.5).toFixed(2)}deg`);
    card.style.setProperty('--ry', `${(px * 4.5).toFixed(2)}deg`);
    card.style.setProperty('--ty', '-3px');
  }, { passive: true });

  // Scroll Progress Bar, Back-to-Top & Scroll-Spy Navbar
  const btt = $('backToTop');
  if (btt) {
    btt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  const sections = ['featured', 'services', 'portfolio', 'platforms', 'opensource', 'experience', 'contact'];
  function onScroll() {
    const doc = document.documentElement;
    const max = doc.scrollHeight - doc.clientHeight;
    const ratio = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
    const navEl = $('navbar');
    if (navEl) navEl.classList.toggle('scrolled', window.scrollY > 18);
    const bar = $('scrollProgress');
    if (bar) bar.style.transform = `scaleX(${ratio.toFixed(4)})`;

    if (btt) {
      if (window.scrollY > 380) {
        btt.hidden = false;
        requestAnimationFrame(() => btt.classList.add('visible'));
      } else {
        btt.classList.remove('visible');
      }
    }

    let current = '';
    const offset = window.scrollY + 180;
    for (const id of sections) {
      const sec = $(id);
      if (sec && sec.offsetTop <= offset) current = id;
    }
    document.querySelectorAll('.nav-links a').forEach((a) => {
      a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  requestAnimationFrame(tickSpotlight);


  /* ---- Live Editorial Pigment Switcher ---- */
  const PIGMENT_MAP = {
    terracotta: { light: ['#C2410C', '#9A3412', '#FFF3EC', 'rgba(194,65,12,0.32)'], dark: ['#FB923C', '#EA580C', 'rgba(234,88,12,0.18)', 'rgba(251,146,60,0.38)'] },
    cobalt:     { light: ['#1D4ED8', '#1E40AF', '#EFF5FF', 'rgba(29,78,216,0.32)'], dark: ['#60A5FA', '#3B82F6', 'rgba(29,78,216,0.20)', 'rgba(96,165,250,0.38)'] },
    emerald:    { light: ['#047857', '#065F46', '#ECFDF5', 'rgba(4,120,87,0.32)'],  dark: ['#34D399', '#10B981', 'rgba(4,120,87,0.20)',  'rgba(52,211,153,0.38)'] },
    amber:      { light: ['#B45309', '#92400E', '#FFFBEB', 'rgba(180,83,9,0.32)'],  dark: ['#FBBF24', '#D97706', 'rgba(180,83,9,0.20)',  'rgba(251,191,36,0.38)'] },
    teal:       { light: ['#0F766E', '#115E59', '#F0FDFA', 'rgba(15,118,110,0.32)'],dark: ['#2DD4BF', '#14B8A6', 'rgba(15,118,110,0.20)','rgba(45,212,191,0.38)'] }
  };

  let currentPigment = localStorage.getItem('yy_pigment') || 'terracotta';
  function applyPigment(name) {
    if (!PIGMENT_MAP[name]) name = 'terracotta';
    currentPigment = name;
    localStorage.setItem('yy_pigment', name);
    const mode = state.theme === 'dark' ? 'dark' : 'light';
    const [p, pd, pbg, pbd] = PIGMENT_MAP[name][mode];
    const root = document.documentElement;
    root.style.setProperty('--p-primary', p);
    root.style.setProperty('--p-primary-dark', pd);
    root.style.setProperty('--p-primary-bg', pbg);
    root.style.setProperty('--p-primary-bd', pbd);
    document.querySelectorAll('.swatch-btn').forEach((b) => {
      b.classList.toggle('active', b.dataset.pigment === name);
    });
  }

  document.querySelectorAll('.swatch-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      applyPigment(btn.dataset.pigment);
      if ($('accentPopover')) { $('accentPopover').hidden = true; $('accentTrigger')?.setAttribute('aria-expanded', 'false'); }
    });
  });

  // V10 Pigment Popover Dropdown
  const accTrigger = $('accentTrigger');
  const accPopover = $('accentPopover');
  if (accTrigger && accPopover) {
    accTrigger.addEventListener('click', (e) => {
      e.stopPropagation();
      const willOpen = accPopover.hidden;
      accPopover.hidden = !willOpen;
      accTrigger.setAttribute('aria-expanded', String(willOpen));
    });
    document.addEventListener('click', (e) => {
      if (!accPopover.hidden && !e.target.closest('#accentDropdown')) {
        accPopover.hidden = true;
        accTrigger.setAttribute('aria-expanded', 'false');
      }
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !accPopover.hidden) {
        accPopover.hidden = true;
        accTrigger.setAttribute('aria-expanded', 'false');
      }
    });
  }


  const origApplyTheme = applyTheme;
  // Re-apply pigment when theme toggles
  $('themeToggle').addEventListener('click', () => setTimeout(() => applyPigment(currentPigment), 10));

  /* ---- Interactive Architectural Blueprint Canvas in Hero ---- */
  function initHeroCanvas() {
    const canvas = $('heroCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const COLORS = ['#C2410C', '#1D4ED8', '#047857', '#D97706', '#0F766E', '#BE123C'];
    let w = 0, h = 0;
    const nodes = [];
    const mouse = { x: -9999, y: -9999 };

    function resize() {
      const rect = canvas.parentElement.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener('resize', resize, { passive: true });

    const count = 34;
    for (let i = 0; i < count; i++) {
      nodes.push({
        x: Math.random() * (w || 1200),
        y: Math.random() * (h || 520),
        vx: (Math.random() - 0.5) * 0.55,
        vy: (Math.random() - 0.5) * 0.55,
        r: 2.2 + Math.random() * 2.2,
        color: COLORS[i % COLORS.length]
      });
    }

    const heroEl = canvas.parentElement;
    heroEl.addEventListener('pointermove', (e) => {
      const r = heroEl.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    }, { passive: true });
    heroEl.addEventListener('pointerleave', () => {
      mouse.x = -9999;
      mouse.y = -9999;
    });

    function draw() {
      ctx.clearRect(0, 0, w, h);
      const isDark = state.theme === 'dark';
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;

        // Connect nearby nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const m = nodes[j];
          const dx = n.x - m.x;
          const dy = n.y - m.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 135) {
            const alpha = (1 - dist / 135) * (isDark ? 0.22 : 0.16);
            ctx.strokeStyle = isDark ? `rgba(251, 146, 60, ${alpha.toFixed(3)})` : `rgba(29, 78, 216, ${alpha.toFixed(3)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(m.x, m.y);
            ctx.stroke();
          }
        }

        // Connect to mouse cursor
        const mdx = n.x - mouse.x;
        const mdy = n.y - mouse.y;
        const mdist = Math.hypot(mdx, mdy);
        if (mdist < 180) {
          const mAlpha = (1 - mdist / 180) * 0.45;
          ctx.strokeStyle = n.color;
          ctx.globalAlpha = mAlpha;
          ctx.lineWidth = 1.4;
          ctx.beginPath();
          ctx.moveTo(n.x, n.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
          ctx.globalAlpha = 1;
        }

        // Draw colored node
        ctx.fillStyle = n.color;
        ctx.globalAlpha = isDark ? 0.85 : 0.72;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      }
      requestAnimationFrame(draw);
    }
    requestAnimationFrame(draw);
  }


  /* ---- Public Portfolio Bridge for Assistant Bot ---- */
  window.__yyLangListeners = window.__yyLangListeners || [];
  window.YYPortfolio = {
    getData: () => state.data,
    getLang: () => state.lang,
    getPalette: () => CAT_PALETTE,
    openProject: (slug) => openProjectModal(slug),
    openService: (slug) => openServiceModal(slug),
    filterPortfolio: ({ category = 'all', platform = 'all', demoOnly = false, search = '' } = {}) => {
      state.category = category;
      state.platform = platform;
      state.demoOnly = Boolean(demoOnly);
      state.search = search;
      if ($('searchInput')) $('searchInput').value = search;
      if ($('platformFilter')) $('platformFilter').value = platform;
      if ($('demoOnlyBtn')) $('demoOnlyBtn').setAttribute('aria-pressed', String(state.demoOnly));
      renderCategoryChips();
      renderPortfolio();
      $('portfolio')?.scrollIntoView({ behavior: 'smooth' });
    },
    onLangChange: (cb) => window.__yyLangListeners.push(cb),
  };

  /* ---- Init ---- */
  applyTheme();
  applyPigment(currentPigment);
  applyLang();
  initHeroCanvas();

  fetch('data/portfolio.json?v=20261127-11')
    .then((r) => {
      if (!r.ok) throw new Error('HTTP ' + r.status);
      return r.json();
    })
    .then((data) => {
      state.data = data;
      renderAll();
    })
    .catch((err) => {
      console.error(err);
      $('servicesGrid').innerHTML = `<div class="loading-box">${esc(t('loadError'))}</div>`;
      $('portfolioGrid').innerHTML = `<div class="loading-box">${esc(t('loadError'))}</div>`;
    });
})();
