(() => {
  'use strict';

  const PLATFORM_COLORS = {
    upwork: '#15803D',
    freelancer: '#0369A1',
    mostaql: '#1D4ED8',
    nafezly: '#334155',
    khamsat: '#B45309',
  };

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
      navServices: 'خدماتي',
      navPortfolio: 'معرض الأعمال',
      navPlatforms: 'المنصات',
      navOpenSource: 'المشاريع البرمجية',
      navExperience: 'الخبرات',
      navContact: 'تواصل',
      navHire: 'اطلب خدمة',
      heroBadge: 'متاح لمشاريع العمل الحر والتعاقد · القاهرة، مصر',
      heroName: 'يوسف يعقوب',
      heroRole: 'مطوّر ذكاء اصطناعي وباك إند — Python · .NET · Azure · React',
      heroSubtitle: 'أبني نماذج تعلّم الآلة بلغة Python، وأنظمة Backend وواجهات REST API بتقنيات C# / .NET و Azure، وتطبيقات ويب عملية — أحوّل بياناتك أو فكرتك إلى منتج قابل للاختبار والتشغيل بتوثيق واضح.',
      heroCtaPortfolio: (n) => `تصفّح معرض الأعمال (${n})`,
      heroCtaServices: (n) => `الخدمات والأسعار (${n})`,
      heroCtaRepo: 'مستودع GitHub',
      heroPlatformsLabel: 'منصات العمل الحر',
      stackLabel: 'التقنيات الأساسية',
      linksLabel: 'الروابط المهنية',
      statProjects: 'عمل في المعرض',
      statServices: 'خدمات متخصصة',
      statPlatforms: 'منصات عمل حر',
      statDemos: 'نسخ تجريبية مباشرة',
      servicesEyebrow: 'نطاق العمل',
      servicesTitle: 'خدماتي',
      servicesDesc: 'اضغط على أي خدمة لعرض تفاصيل التنفيذ، المخرجات، التطويرات الاختيارية، والأعمال المرتبطة بها.',
      servicesPricing: 'خمسات: من $10 · فريلانسر: $10/ساعة · Upwork: $20/ساعة · مستقل ونفذلي: حسب المشروع',
      portfolioEyebrow: 'أعمال موثّقة بالصور والروابط',
      portfolioTitle: 'معرض الأعمال',
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
      navServices: 'Services',
      navPortfolio: 'Portfolio',
      navPlatforms: 'Platforms',
      navOpenSource: 'Open Source',
      navExperience: 'Experience',
      navContact: 'Contact',
      navHire: 'Hire Me',
      heroBadge: 'Available for freelance & contract · Cairo, Egypt',
      heroName: 'Youssef Yacoup',
      heroRole: 'AI & Backend Developer — Python · .NET · Azure · React',
      heroSubtitle: 'I build Python machine-learning prototypes, .NET & Azure REST backends, and practical web applications — turning datasets or workflows into documented, testable software.',
      heroCtaPortfolio: (n) => `Browse Portfolio (${n})`,
      heroCtaServices: (n) => `Services & Pricing (${n})`,
      heroCtaRepo: 'GitHub Repository',
      heroPlatformsLabel: 'Freelance Platforms',
      stackLabel: 'Core Stack',
      linksLabel: 'Professional Links',
      statProjects: 'Portfolio Projects',
      statServices: 'Services',
      statPlatforms: 'Freelance Platforms',
      statDemos: 'Interactive Demos',
      servicesEyebrow: 'Capabilities',
      servicesTitle: 'Services',
      servicesDesc: 'Select any service to inspect deliverables, workflow steps, optional add-ons, and related portfolio projects.',
      servicesPricing: 'Khamsat: from $10 · Freelancer: $10/hr · Upwork: $20/hr · Mostaql & Nafezly: custom quote',
      portfolioEyebrow: 'Selected & Published Work',
      portfolioTitle: 'Portfolio',
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
  }

  function renderHeroPlatforms() {
    const web = state.data.web;
    const isAr = state.lang === 'ar';
    $('heroPlatforms').innerHTML = web.profiles.map((p) => {
      const label = isAr ? p.name_ar.split(' ·')[0] : p.name_en;
      return `<a class="platform-pill" href="${esc(p.url)}" target="_blank" rel="noopener" style="--plat-color:${p.color}">
        <span class="plat-dot"></span><span>${esc(label)}</span>${SVG.ext}
      </a>`;
    }).join('');

    $('ctaPlatforms').innerHTML = web.profiles.map((p) => {
      const label = isAr ? p.name_ar.split(' ·')[0] : p.name_en;
      return `<a class="btn btn-secondary btn-sm" href="${esc(p.url)}" target="_blank" rel="noopener">
        <span class="plat-dot" style="background:${p.color}"></span><span>${esc(label)}</span>${SVG.ext}
      </a>`;
    }).join('');

    $('statProjects').textContent = web.items.length;
    $('statServices').textContent = web.services.length;
    $('statPlatforms').textContent = web.profiles.length;
    $('statDemos').textContent = web.items.filter((i) => i.demo).length;

    const ctaP = document.querySelector('[data-i18n="heroCtaPortfolio"]');
    const ctaS = document.querySelector('[data-i18n="heroCtaServices"]');
    if (ctaP) ctaP.textContent = t('heroCtaPortfolio', web.items.length);
    if (ctaS) ctaS.textContent = t('heroCtaServices', web.services.length);
  }

  function renderServices() {
    const isAr = state.lang === 'ar';
    $('servicesGrid').innerHTML = state.data.web.services.map((s) => {
      const title = isAr ? s.ar : s.en;
      const intro = isAr ? s.intro_ar : s.intro_en;
      const badgeText = s.listed ? t('listedKhamsat') : t('customQuote');
      const tools = s.tools.slice(0, 3).map((x) => `<span class="tag">${esc(x)}</span>`).join('');
      const more = s.tools.length > 3 ? `<span class="tag">+${s.tools.length - 3}</span>` : '';
      return `<article class="service-card" data-service="${esc(s.slug)}" tabindex="0" role="button">
        <div class="card-media">
          <img src="${esc(s.cover)}" alt="${esc(title)}" loading="lazy">
        </div>
        <div class="card-body">
          <div class="card-meta-line">
            <span class="badge-subtle ${s.listed ? 'badge-live' : ''}">${esc(badgeText)}</span>
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
      { key: 'all', label: t('allCategories'), count: baseItems.length },
      ...web.categories.map((c) => ({
        key: c.key,
        label: isAr ? c.ar : c.en,
        count: baseItems.filter((i) => i.category === c.key).length,
      })),
    ];
    $('categoryChips').innerHTML = chips.map((c) => `
      <button type="button" class="cat-chip ${state.category === c.key ? 'active' : ''}" data-cat="${esc(c.key)}" role="tab" aria-selected="${state.category === c.key}">
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

    $('resultsCount').textContent = t('showing', list.length, web.items.length);
    const hasFilter = state.category !== 'all' || state.platform !== 'all' || state.demoOnly || state.search.trim() !== '';
    $('resetFiltersBtn').hidden = !hasFilter;
    $('searchClear').hidden = state.search.trim() === '';

    if (!list.length) {
      $('portfolioGrid').innerHTML = '';
      $('emptyState').hidden = false;
      return;
    }
    $('emptyState').hidden = true;

    $('portfolioGrid').innerHTML = list.map((it) => {
      const cat = catMap[it.category];
      const title = isAr ? it.ar : it.en;
      const excerpt = (isAr ? (it.desc_ar || it.desc_en) : (it.desc_en || it.desc_ar)).replace(/\s+/g, ' ');
      const plats = it.platforms.map((p) => {
        const short = p.name.split(' ·')[0];
        return `<span class="plat-label"><span class="plat-dot" style="background:${PLATFORM_COLORS[p.key] || '#555'}"></span>${esc(short)}</span>`;
      }).join('');
      const skills = it.skills.slice(0, 3).map((s) => `<span class="tag">${esc(s)}</span>`).join('');
      const more = it.skills.length > 3 ? `<span class="tag">+${it.skills.length - 3}</span>` : '';
      return `<article class="project-card" data-project="${esc(it.slug)}" tabindex="0" role="button">
        <div class="card-media">
          <img src="${esc(it.cover)}" alt="${esc(title)}" loading="lazy">
        </div>
        <div class="card-body">
          <div class="card-meta-line">
            <div class="card-meta-left">
              <span>${esc(isAr ? cat.ar : cat.en)}</span>
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
  }

  function renderPlatforms() {
    const isAr = state.lang === 'ar';
    $('platformsGrid').innerHTML = state.data.web.profiles.map((p) => `
      <div class="platform-card">
        <div class="platform-card-head">
          <span class="plat-dot" style="background:${p.color};width:9px;height:9px"></span>
          <h3>${esc(isAr ? p.name_ar.split(' ·')[0] : p.name_en)}</h3>
        </div>
        <p class="platform-meta">${esc(isAr ? p.meta_ar : p.meta_en)}</p>
        <p class="platform-count">${esc(isAr ? p.count_ar : p.count_en)}</p>
        <div class="platform-actions">
          <a class="btn btn-primary btn-sm" href="${esc(p.url)}" target="_blank" rel="noopener">${esc(t('visitProfile'))} ${SVG.ext}</a>
          ${p.filterable
            ? `<button type="button" class="btn btn-secondary btn-sm" data-filter-platform="${esc(p.key)}">${esc(t('filterByPlatform'))}</button>`
            : `<button type="button" class="btn btn-secondary btn-sm" data-service="landing-page-design">${esc(t('viewKhamsatService'))}</button>`}
        </div>
      </div>
    `).join('');
  }

  function renderOpenSource() {
    const isAr = state.lang === 'ar';
    $('ossGrid').innerHTML = state.data.web.open_source.map((r) => `
      <a class="oss-card" href="${esc(r.url)}" target="_blank" rel="noopener">
        <div class="oss-top">
          <h3>${esc(r.name)}</h3>
          ${SVG.ext}
        </div>
        <p>${esc(isAr ? (r.summary_ar || r.summary_en) : (r.summary_en || r.summary))}</p>
        <div class="oss-repo">Youssef123ya/${esc(r.repo)}</div>
      </a>
    `).join('');
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
    renderServices();
    renderCategoryChips();
    renderPortfolio();
    renderPlatforms();
    renderOpenSource();
    renderExperience();
  }

  /* ---- Modal Logic ---- */
  function setModalImage(idx) {
    if (!state.modalImages.length) return;
    state.modalImgIdx = (idx + state.modalImages.length) % state.modalImages.length;
    const src = state.modalImages[state.modalImgIdx];
    const mainImg = $('modalMainImg');
    const openLink = $('modalFullLink');
    if (mainImg) mainImg.src = src;
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
      <div class="modal-content">
        <div class="modal-meta-row">
          <span class="badge-subtle">${esc(isAr ? cat.ar : cat.en)}</span>
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
      <div class="modal-content">
        <div class="modal-meta-row">
          <span class="badge-subtle ${s.listed ? 'badge-live' : ''}">${esc(s.listed ? t('listedKhamsat') : t('customQuote'))}</span>
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

  $('menuToggle').addEventListener('click', () => {
    const open = $('navLinks').classList.toggle('open');
    $('menuToggle').setAttribute('aria-expanded', String(open));
  });
  $('navLinks').addEventListener('click', (e) => {
    if (e.target.tagName === 'A') $('navLinks').classList.remove('open');
  });

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

  document.addEventListener('click', (e) => {
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

  /* ---- Init ---- */
  applyTheme();
  applyLang();

  fetch('data/portfolio.json')
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
