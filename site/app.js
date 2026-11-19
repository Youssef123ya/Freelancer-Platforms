(() => {
  'use strict';

  const PLATFORM_COLORS = {
    upwork: '#14A800',
    freelancer: '#29B2FE',
    mostaql: '#2386C8',
    nafezly: '#4F46E5',
    khamsat: '#F7931E',
  };

  const I18N = {
    ar: {
      brand: 'يوسف يعقوب',
      navServices: 'خدماتي',
      navPortfolio: 'معرض الأعمال',
      navPlatforms: 'المنصات',
      navOpenSource: 'مفتوح المصدر',
      navExperience: 'الخبرات',
      navContact: 'تواصل',
      navHire: 'اطلب خدمة',
      heroBadge: 'متاح لمشاريع العمل الحر والتعاقد · القاهرة، مصر',
      heroTitlePrefix: 'يوسف يعقوب —',
      heroTitleRole: 'مطوّر ذكاء اصطناعي وباك إند',
      heroSubtitle: 'أطوّر نماذج تعلّم الآلة بـ Python وأنظمة Backend بـ .NET وAzure وتطبيقات ويب بالذكاء الاصطناعي — أحوّل بياناتك أو فكرتك إلى تطبيق عملي جاهز للاستخدام والتطوير.',
      heroCtaPortfolio: (n) => `تصفّح معرض الأعمال (${n})`,
      heroCtaServices: (n) => `استعرض الخدمات (${n})`,
      heroCtaRepo: 'مستودع GitHub ↗',
      statProjects: 'عمل في المعرض',
      statServices: 'خدمات متخصصة',
      statPlatforms: 'منصات عمل حر',
      statDemos: 'نسخ تجريبية مباشرة',
      servicesEyebrow: 'ماذا أقدّم لك',
      servicesTitle: 'خدماتي',
      servicesDesc: 'اضغط على أي خدمة لعرض التفاصيل الكاملة، مراحل العمل، الأسعار، والأعمال المرتبطة بها.',
      servicesPricing: 'خمسات: تبدأ من $10 · فريلانسر: $10/ساعة · Upwork: $20/ساعة · مستقل ونفذلي: حسب المشروع',
      portfolioEyebrow: 'أعمال حقيقية بالصور والروابط',
      portfolioTitle: 'معرض الأعمال',
      portfolioDesc: 'ابحث بالعربي أو الإنجليزي، وفلتر حسب التصنيف أو المنصة أو المشاريع التي تحتوي على ديمو تفاعلي مباشر.',
      searchPlaceholder: 'ابحث في المشاريع، المهارات، التقنيات (مثل Python, React, AWS, شعار)...',
      allPlatforms: 'كل المنصات',
      demoOnly: 'ديمو مباشر فقط',
      allCategories: 'الكل',
      resetFilters: 'إعادة ضبط الفلاتر',
      showing: (shown, total) => `عرض ${shown} من أصل ${total} عمل`,
      emptyTitle: 'لا توجد أعمال مطابقة للبحث',
      emptyDesc: 'جرّب كلمات بحث أخرى أو أعد ضبط الفلاتر لعرض كل الأعمال.',
      platformsEyebrow: 'تواجدي على منصات العمل الحر',
      platformsTitle: 'حساباتي على المنصات',
      platformsDesc: 'اختر المنصة الأنسب لك للطلب المباشر أو لتصفية الأعمال المنشورة عليها.',
      visitProfile: 'زيارة الحساب ↗',
      filterByPlatform: 'عرض الأعمال هنا',
      viewKhamsatService: 'عرض الخدمة',
      ossEyebrow: 'GitHub · الهاكاثونات والمسابقات',
      ossTitle: 'مشاريع مفتوحة المصدر ومسابقات',
      ossAll: 'كل المستودعات على GitHub ↗',
      expEyebrow: 'الخلفية المهنية والأكاديمية',
      expTitle: 'الخبرات والشهادات',
      expHeading: '💼 الخبرة العملية',
      credHeading: '🎓 التعليم والشهادات',
      verifyLink: 'التحقق ↗',
      ctaEyebrow: 'ابدأ مشروعك',
      ctaTitle: 'جاهز نشتغل على مشروعك الجاي؟',
      ctaDesc: 'ابعتلي تفاصيل فكرتك أو بياناتك أو متطلبات الـ API على أي منصة تفضلها، ونتفق على أول مرحلة قابلة للتسليم وطريقة تقييمها.',
      footerCopy: '© 2026 يوسف يعقوب — مبني مباشرة من بيانات مستودع Freelancer-Platforms',
      footerRepo: 'عرض الريبو على GitHub',
      footerTop: 'العودة للأعلى ↑',
      loading: 'جاري التحميل...',
      serviceDetails: 'عرض التفاصيل ←',
      listedKhamsat: 'معروضة على خمسات · من $10',
      customQuote: 'Upwork · فريلانسر · مستقل · نفذلي',
      liveDemoBadge: 'ديمو مباشر',
      openDemo: '▶ فتح الديمو المباشر',
      openImage: 'فتح الصورة كاملة ↗',
      skillsTitle: 'المهارات والأدوات',
      whatYouGet: 'ماذا ستحصل عليه',
      workflowSteps: 'مراحل العمل',
      upgradesTitle: 'تطويرات اختيارية',
      upgradeCol: 'التطوير',
      priceCol: 'السعر',
      timeCol: 'المدة',
      relatedWork: 'أعمال مرتبطة بالخدمة',
      orderOn: 'اطلب الخدمة عبر',
      viewOn: (p) => `عرض على ${p}`,
      viewRepoFolder: 'ملفات العمل على GitHub ↗',
      otherLangLabel: 'English summary',
      loadError: 'تعذّر تحميل بيانات المعرض. تأكد من فتح الموقع عبر خادم ويب أو GitHub Pages.',
    },
    en: {
      brand: 'Youssef Yacoup',
      navServices: 'Services',
      navPortfolio: 'Portfolio',
      navPlatforms: 'Platforms',
      navOpenSource: 'Open Source',
      navExperience: 'Experience',
      navContact: 'Contact',
      navHire: 'Hire Me',
      heroBadge: 'Available for freelance & contract · Cairo, Egypt',
      heroTitlePrefix: 'Youssef Yacoup —',
      heroTitleRole: 'AI & Backend Developer',
      heroSubtitle: 'I build Python machine-learning prototypes, .NET & Azure backends, and AI-powered web apps — turning data or an idea into a usable, documented product.',
      heroCtaPortfolio: (n) => `Explore Portfolio (${n})`,
      heroCtaServices: (n) => `Browse Services (${n})`,
      heroCtaRepo: 'GitHub Repo ↗',
      statProjects: 'Portfolio Projects',
      statServices: 'Specialized Services',
      statPlatforms: 'Freelance Platforms',
      statDemos: 'Live Interactive Demos',
      servicesEyebrow: 'What I can build for you',
      servicesTitle: 'Services',
      servicesDesc: 'Click any service to view deliverables, workflow steps, pricing, and related portfolio projects.',
      servicesPricing: 'Khamsat: from $10 · Freelancer: $10/hr · Upwork: $20/hr · Mostaql & Nafezly: custom quote',
      portfolioEyebrow: 'Real work with screenshots & links',
      portfolioTitle: 'Portfolio',
      portfolioDesc: 'Search in English or Arabic, and filter by category, platform, or projects with a live interactive demo.',
      searchPlaceholder: 'Search projects, skills, tech (e.g. Python, React, AWS, Logo)...',
      allPlatforms: 'All Platforms',
      demoOnly: 'Live Demo Only',
      allCategories: 'All',
      resetFilters: 'Reset filters',
      showing: (shown, total) => `Showing ${shown} of ${total} projects`,
      emptyTitle: 'No matching projects found',
      emptyDesc: 'Try another keyword or reset the filters to view all projects.',
      platformsEyebrow: 'Where you can hire me',
      platformsTitle: 'Freelance Platforms',
      platformsDesc: 'Pick your preferred platform to message me directly or filter projects listed there.',
      visitProfile: 'Visit Profile ↗',
      filterByPlatform: 'Filter Projects',
      viewKhamsatService: 'View Service',
      ossEyebrow: 'GitHub · Hackathons & Competitions',
      ossTitle: 'Open Source & Competitions',
      ossAll: 'All GitHub Repositories ↗',
      expEyebrow: 'Background & Qualifications',
      expTitle: 'Experience & Credentials',
      expHeading: '💼 Experience',
      credHeading: '🎓 Education & Certifications',
      verifyLink: 'Verify ↗',
      ctaEyebrow: 'Start a project',
      ctaTitle: 'Ready to build your next project?',
      ctaDesc: 'Share your dataset, API requirements, or project brief on whichever platform you prefer — we will agree on the first deliverable and how to evaluate it.',
      footerCopy: '© 2026 Youssef Yacoup — powered directly by Freelancer-Platforms repository data',
      footerRepo: 'View Repo on GitHub',
      footerTop: 'Back to top ↑',
      loading: 'Loading...',
      serviceDetails: 'View details →',
      listedKhamsat: 'Listed on Khamsat · from $10',
      customQuote: 'Upwork · Freelancer · Mostaql · Nafezly',
      liveDemoBadge: 'Live Demo',
      openDemo: '▶ Open Live Demo',
      openImage: 'Open full image ↗',
      skillsTitle: 'Skills & Tools',
      whatYouGet: 'What you get',
      workflowSteps: 'How we work',
      upgradesTitle: 'Optional upgrades',
      upgradeCol: 'Upgrade',
      priceCol: 'Price',
      timeCol: 'Delivery',
      relatedWork: 'Related portfolio work',
      orderOn: 'Order / Contact on',
      viewOn: (p) => `View on ${p}`,
      viewRepoFolder: 'Project folder on GitHub ↗',
      otherLangLabel: 'الملخص بالعربية',
      loadError: 'Could not load portfolio data. Make sure the site is served over HTTP or GitHub Pages.',
    },
  };

  const state = {
    lang: new URLSearchParams(location.search).get('lang') || localStorage.getItem('yy_lang') || 'ar',
    theme: localStorage.getItem('yy_theme') || 'dark',
    category: 'all',
    platform: 'all',
    demoOnly: false,
    search: '',
    data: null,
    modalImages: [],
    modalImgIdx: 0,
  };
  if (state.lang !== 'ar' && state.lang !== 'en') state.lang = 'ar';

  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const t = (key, ...args) => {
    const v = I18N[state.lang][key];
    return typeof v === 'function' ? v(...args) : v;
  };

  function applyTheme() {
    document.documentElement.dataset.theme = state.theme;
    $('themeToggle').textContent = state.theme === 'dark' ? '☀️' : '🌙';
  }

  function applyLang() {
    const isAr = state.lang === 'ar';
    document.documentElement.lang = state.lang;
    document.documentElement.dir = isAr ? 'rtl' : 'ltr';
    $('langToggle').textContent = isAr ? 'EN' : 'عربي';
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
    pf.options[0].textContent = t('allPlatforms');
    if (state.data) renderAll();
  }

  function renderHeroPlatforms() {
    const web = state.data.web;
    const pills = web.profiles.map((p) => {
      const label = state.lang === 'ar' ? p.name_ar : p.name_en;
      return `<a class="platform-pill" href="${esc(p.url)}" target="_blank" rel="noopener" style="--plat-color:${p.color}">
        <span class="plat-dot"></span><span>${esc(label)}</span>
      </a>`;
    }).join('');
    $('heroPlatforms').innerHTML = pills;
    $('ctaPlatforms').innerHTML = web.profiles.map((p) => {
      const label = state.lang === 'ar' ? p.name_ar : p.name_en;
      return `<a class="btn btn-secondary btn-lg" href="${esc(p.url)}" target="_blank" rel="noopener" style="border-color:${p.color}">
        <span class="plat-dot" style="background:${p.color}"></span><span>${esc(label)} ↗</span>
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
      const badgeCls = s.listed ? 'pill-green' : 'pill-dark';
      const tools = s.tools.slice(0, 3).map((x) => `<span class="tag">${esc(x)}</span>`).join('');
      const more = s.tools.length > 3 ? `<span class="tag">+${s.tools.length - 3}</span>` : '';
      return `<article class="service-card" data-service="${esc(s.slug)}" tabindex="0" role="button">
        <div class="card-media">
          <img src="${esc(s.cover)}" alt="${esc(title)}" loading="lazy">
          <div class="media-badges-start"><span class="pill ${badgeCls}">${esc(badgeText)}</span></div>
        </div>
        <div class="card-body">
          <h3 class="card-title">${esc(title)}</h3>
          <p class="card-excerpt">${esc(intro)}</p>
          <div class="tags-row">${tools}${more}</div>
          <span class="card-footer-link">${esc(t('serviceDetails'))}</span>
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
      { key: 'all', label: t('allCategories'), icon: '✨', count: baseItems.length },
      ...web.categories.map((c) => ({
        key: c.key,
        label: isAr ? c.ar : c.en,
        icon: c.icon,
        count: baseItems.filter((i) => i.category === c.key).length,
      })),
    ];
    $('categoryChips').innerHTML = chips.map((c) => `
      <button type="button" class="cat-chip ${state.category === c.key ? 'active' : ''}" data-cat="${esc(c.key)}" role="tab" aria-selected="${state.category === c.key}">
        <span>${c.icon}</span>
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
      const platPills = it.platforms.map((p) => {
        const short = p.name.split(' ·')[0];
        return `<span class="plat-mini" style="background:${PLATFORM_COLORS[p.key] || '#4f46e5'}">${esc(short)}</span>`;
      }).join('');
      const skills = it.skills.slice(0, 3).map((s) => `<span class="tag">${esc(s)}</span>`).join('');
      const more = it.skills.length > 3 ? `<span class="tag">+${it.skills.length - 3}</span>` : '';
      return `<article class="project-card" data-project="${esc(it.slug)}" tabindex="0" role="button">
        <div class="card-media">
          <img src="${esc(it.cover)}" alt="${esc(title)}" loading="lazy">
          <div class="media-badges-start">
            <span class="pill pill-dark">${cat.icon} ${esc(isAr ? cat.ar : cat.en)}</span>
          </div>
          <div class="media-badges-end">
            ${it.demo ? `<span class="pill pill-demo">▶ ${esc(t('liveDemoBadge'))}</span>` : ''}
            <span class="pill pill-dark">🖼️ ${it.images.length}</span>
          </div>
        </div>
        <div class="card-body">
          <div class="project-platforms">${platPills}</div>
          <h3 class="card-title">${esc(title)}</h3>
          <p class="card-excerpt">${esc(excerpt)}</p>
          <div class="tags-row">${skills}${more}</div>
        </div>
      </article>`;
    }).join('');
  }

  function renderPlatforms() {
    const isAr = state.lang === 'ar';
    $('platformsGrid').innerHTML = state.data.web.profiles.map((p) => `
      <div class="platform-card" style="--plat-color:${p.color}">
        <h3>${esc(isAr ? p.name_ar : p.name_en)}</h3>
        <p class="platform-meta">${esc(isAr ? p.meta_ar : p.meta_en)}</p>
        <p class="platform-count">${esc(isAr ? p.count_ar : p.count_en)}</p>
        <div class="platform-actions">
          <a class="btn btn-primary btn-sm" href="${esc(p.url)}" target="_blank" rel="noopener" style="background:${p.color};box-shadow:none">${esc(t('visitProfile'))}</a>
          ${p.filterable
            ? `<button type="button" class="btn btn-secondary btn-sm" data-filter-platform="${esc(p.key)}">${esc(t('filterByPlatform'))}</button>`
            : `<button type="button" class="btn btn-secondary btn-sm" data-service="landing-page-design">${esc(t('viewKhamsatService'))}</button>`}
        </div>
      </div>
    `).join('');
  }

  function renderOpenSource() {
    $('ossGrid').innerHTML = state.data.web.open_source.map((r) => `
      <a class="oss-card" href="${esc(r.url)}" target="_blank" rel="noopener">
        <div class="oss-top">
          <h3>${esc(r.name)}</h3>
          <span>↗</span>
        </div>
        <p>${esc(r.summary)}</p>
        <div class="oss-repo">Youssef123ya/${esc(r.repo)}</div>
      </a>
    `).join('');
  }

  function renderExperience() {
    const isAr = state.lang === 'ar';
    $('expTimeline').innerHTML = state.data.web.experience.map((e) => `
      <div class="timeline-item">
        <div class="timeline-role">${esc(isAr ? e.role_ar : e.role_en)}</div>
        <div class="timeline-meta">${esc(e.org)} · ${esc(e.period)}</div>
      </div>
    `).join('');

    $('credList').innerHTML = state.data.web.credentials.map((c) => `
      <div class="cred-item">
        <div>
          <div class="cred-title">${esc(isAr ? c.title_ar : c.title_en)}</div>
          <div class="cred-org">${esc(c.org)} · ${esc(c.year)}</div>
        </div>
        ${c.url ? `<a class="cred-link" href="${esc(c.url)}" target="_blank" rel="noopener">${esc(t('verifyLink'))}</a>` : ''}
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
      return `<a class="btn btn-primary btn-sm" href="${esc(p.url)}" target="_blank" rel="noopener" style="background:${PLATFORM_COLORS[p.key] || '#4f46e5'};box-shadow:none">${esc(t('viewOn', short))} ↗</a>`;
    }).join('');

    const extraBtns = it.extra.map((e) => `<a class="btn btn-secondary btn-sm" href="${esc(e.url)}" target="_blank" rel="noopener">${esc(e.label)} ↗</a>`).join('');

    $('modalBody').innerHTML = `
      <div class="modal-hero">
        <img id="modalMainImg" src="${esc(state.modalImages[0])}" alt="${esc(title)}">
        ${state.modalImages.length > 1 ? `
          <button type="button" class="carousel-btn carousel-prev" id="modalPrev" aria-label="Previous">‹</button>
          <button type="button" class="carousel-btn carousel-next" id="modalNext" aria-label="Next">›</button>` : ''}
      </div>
      ${thumbs}
      <div class="modal-content">
        <div class="modal-meta-row">
          <span class="pill pill-dark">${cat.icon} ${esc(isAr ? cat.ar : cat.en)}</span>
          ${it.platforms.map((p) => `<span class="plat-mini" style="background:${PLATFORM_COLORS[p.key] || '#4f46e5'}">${esc(p.name.split(' ·')[0])}</span>`).join('')}
          <a id="modalFullLink" href="${esc(state.modalImages[0])}" target="_blank" rel="noopener" class="cred-link" style="margin-inline-start:auto">${esc(t('openImage'))}</a>
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
          ${it.demo ? `<a class="btn btn-primary btn-sm" href="${esc(it.demo)}" target="_blank" rel="noopener">${esc(t('openDemo'))}</a>` : ''}
          ${platBtns}
          ${extraBtns}
          <a class="btn btn-ghost btn-sm" href="https://github.com/Youssef123ya/Freelancer-Platforms/tree/main/${esc(it.path)}" target="_blank" rel="noopener">${esc(t('viewRepoFolder'))}</a>
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
          <button type="button" class="carousel-btn carousel-prev" id="modalPrev" aria-label="Previous">‹</button>
          <button type="button" class="carousel-btn carousel-next" id="modalNext" aria-label="Next">›</button>` : ''}
      </div>
      ${thumbs}
      <div class="modal-content">
        <div class="modal-meta-row">
          <span class="pill ${s.listed ? 'pill-green' : 'pill-dark'}">${esc(s.listed ? t('listedKhamsat') : t('customQuote'))}</span>
          ${s.delivery ? `<span class="pill pill-dark">⏱ ${esc(s.delivery)}</span>` : ''}
        </div>
        <h2 class="modal-title" id="modalTitle">${esc(title)}</h2>
        <p class="modal-subtitle">${esc(subtitle)}</p>
        <p class="modal-desc">${esc(intro)}</p>

        <h4 class="modal-section-title">${esc(t('whatYouGet'))}</h4>
        <ul class="check-list">
          ${s.includes.map((inc) => `<li><span>✔️</span><span>${esc(isAr ? inc.ar : inc.en)}</span></li>`).join('')}
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
                <td>${esc(u.title)}</td>
                <td><strong>$${u.price_usd}</strong></td>
                <td>${u.extra_days ? `+${u.extra_days}d` : '1d'}</td>
              </tr>`).join('')}
            </tbody>
          </table>` : ''}

        <h4 class="modal-section-title">${esc(t('skillsTitle'))}</h4>
        <div class="tags-row">${s.tools.map((x) => `<span class="tag">${esc(x)}</span>`).join('')}</div>

        ${relatedCards ? `
          <h4 class="modal-section-title">${esc(t('relatedWork'))}</h4>
          <div class="related-mini-grid">${relatedCards}</div>` : ''}

        <div class="modal-actions">
          ${s.order.map((o) => `<a class="btn btn-primary btn-sm" href="${esc(o.url)}" target="_blank" rel="noopener">${esc(t('orderOn'))}: ${esc(o.label)} ↗</a>`).join('')}
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
  $('langToggle').addEventListener('click', () => {
    state.lang = state.lang === 'ar' ? 'en' : 'ar';
    localStorage.setItem('yy_lang', state.lang);
    applyLang();
  });

  $('themeToggle').addEventListener('click', () => {
    state.theme = state.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('yy_theme', state.theme);
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
