(() => {
  'use strict';

  /* ==========================================================================
     Youssef Yacoup — Live Portfolio-Grounded Client Assistant Bot
     100% powered by data/portfolio.json · Bilingual AR (MSA/Egyptian) & EN
     ========================================================================== */

  const UI = {
    ar: {
      launcherLabel: 'مساعد الأعمال',
      headerTitle: 'مساعد معرض أعمال يوسف',
      headerSub: 'يرد عليك فوراً من واقع 39 مشروعاً و8 خدمات',
      online: 'متصل الآن',
      placeholder: 'اسأل عن مشروع، سعر، تقنية، أو اطلب عرض سعر...',
      send: 'إرسال',
      reset: 'محادثة جديدة',
      close: 'إغلاق',
      viewDetails: 'التفاصيل',
      liveDemo: 'ديمو مباشر',
      copyBrief: 'نسخ رسالة الطلب',
      copied: 'تم النسخ ✓',
      filterBtn: (label, n) => `عرض ${label} في المعرض (${n})`,
      welcome:
        'أهلاً بك! 👋 أنا المساعد التفاعلي لمعرض أعمال **يوسف يعقوب** (مطوّر ذكاء اصطناعي وباك إند — Python / .NET / Azure / React).\n\nأقدر أساعدك تتصفح **39 مشروعاً موثّقاً**، تعرف **الخدمات والأسعار**، تشوف **النسخ التجريبية المباشرة**، أو أجهّز لك **رسالة طلب مشروع** جاهزة للإرسال على المنصة المناسبة. تحب تبدأ بإيه؟',
      quickPrompts: [
        { label: 'مشاريع AI وباك إند', query: 'وريني مشاريع الذكاء الاصطناعي والباك إند' },
        { label: 'الأسعار والخدمات', query: 'إيه خدماتك وأسعارك؟' },
        { label: 'مشاريع بديمو مباشر', query: 'وريني المشاريع اللي فيها ديمو مباشر' },
        { label: 'اطلب مشروع / عرض سعر', action: 'start_brief' },
        { label: 'الخبرات والشهادات', query: 'إيه خبرات يوسف وشهاداته؟' },
      ],
      briefStep1:
        'ممتاز! 🚀 خلّينا نجهّز لك طلب مشروع احترافي ونرشّح لك أنسب الأعمال المشابهة من المعرض.\n\n**اختار نوع مشروعك** من الخيارات دي (أو اكتبه مباشرة):',
      briefStep2: (catLabel) =>
        `اختيار رائع (**${catLabel}**)!\nدي أقرب خدمة وأعمال مشابهة من المعرض عشان تطمّن لجودة التنفيذ.\n\nدلوقتي اكتبلي **وصف مختصر لفكرة مشروعك** (المميزات المطلوبة أو الموعد المستهدف) وهجهّز لك رسالة طلب منسّقة جاهزة للنسخ والإرسال مباشرة ليوسف على أي منصة تختارها 👇`,
      briefDoneIntro:
        'تم تجهيز **ملخّص طلب المشروع** بنجاح! 📋 تقدر تنسخه بضغطة واحدة وتبعته مباشرة ليوسف على المنصة اللي تفضّلها:',
      briefCancel: 'إلغاء تجهيز الطلب',
      briefTypes: [
        { key: 'ai', label: 'ذكاء اصطناعي وأتمتة (AI / ML)' },
        { key: 'backend', label: 'باك إند و REST APIs / سحابة' },
        { key: 'web', label: 'صفحة هبوط أو موقع / متجر' },
        { key: 'data', label: 'تحليل بيانات وداشبورد Excel' },
        { key: 'design', label: 'شعار وهوية بصرية / محتوى' },
      ],
      followUps: {
        default: [
          { label: 'اطلب مشروع / عرض سعر', action: 'start_brief' },
          { label: 'الأسعار والمنصات', query: 'إيه أسعارك ومنصاتك؟' },
          { label: 'مشاريع بديمو مباشر', query: 'وريني المشاريع اللي فيها ديمو مباشر' },
        ],
        pricing: [
          { label: 'تجهيز طلب مشروع الآن', action: 'start_brief' },
          { label: 'تفاصيل صفحة الهبوط ($10)', query: 'تفاصيل خدمة صفحة الهبوط' },
          { label: 'تطوير Backend API', query: 'خدمة تطوير الباك اند و REST API' },
        ],
        demos: [
          { label: 'اطلب مشروع مشابه', action: 'start_brief' },
          { label: 'مشاريع الذكاء الاصطناعي', query: 'مشاريع الذكاء الاصطناعي' },
          { label: 'الأسعار والتواصل', query: 'إزاي أتواصل وأطلب خدمة؟' },
        ],
      },
    },
    en: {
      launcherLabel: 'Ask Portfolio',
      headerTitle: "Youssef's Portfolio Assistant",
      headerSub: 'Grounded in 39 live projects & 8 services',
      online: 'Online',
      placeholder: 'Ask about projects, pricing, stack, or request a quote...',
      send: 'Send',
      reset: 'New chat',
      close: 'Close',
      viewDetails: 'Details',
      liveDemo: 'Live Demo',
      copyBrief: 'Copy Project Brief',
      copied: 'Copied ✓',
      filterBtn: (label, n) => `Browse ${label} in Portfolio (${n})`,
      welcome:
        "Welcome! 👋 I'm the interactive assistant for **Youssef Yacoup's** portfolio (AI & Backend Developer — Python / .NET / Azure / React).\n\nI can help you explore **39 documented projects**, check **services & rates**, preview **live interactive demos**, or build a **ready-to-send project brief** for your preferred freelance platform. How can I help?",
      quickPrompts: [
        { label: 'AI & Backend work', query: 'Show me AI and backend projects' },
        { label: 'Services & pricing', query: 'What are your services and pricing?' },
        { label: 'Live demos', query: 'Show me projects with live demos' },
        { label: 'Request a quote', action: 'start_brief' },
        { label: 'Experience & credentials', query: 'Tell me about Youssef experience and credentials' },
      ],
      briefStep1:
        "Awesome! 🚀 Let's put together a clear project brief and show you matching proof-of-work from the portfolio.\n\n**Pick your project category** below (or type it directly):",
      briefStep2: (catLabel) =>
        `Great choice (**${catLabel}**)!\nHere's the closest matching service and real portfolio samples.\n\nNow write **1–2 sentences describing your idea, key features, or target timeline**, and I'll generate a ready-to-copy inquiry brief you can send directly to Youssef 👇`,
      briefDoneIntro:
        'Your **Project Inquiry Brief** is ready! 📋 Copy it in one click and send it to Youssef on your preferred platform:',
      briefCancel: 'Cancel brief builder',
      briefTypes: [
        { key: 'ai', label: 'AI Apps & ML Automation' },
        { key: 'backend', label: 'Backend, REST APIs & Cloud' },
        { key: 'web', label: 'Landing Page, Website or Store' },
        { key: 'data', label: 'Data Analysis & Excel Dashboards' },
        { key: 'design', label: 'Logo, Branding or Ad Scripts' },
      ],
      followUps: {
        default: [
          { label: 'Request a quote', action: 'start_brief' },
          { label: 'Rates & platforms', query: 'What are your rates and platforms?' },
          { label: 'Live demos', query: 'Show me projects with live demos' },
        ],
        pricing: [
          { label: 'Build a project brief', action: 'start_brief' },
          { label: 'Landing page ($10)', query: 'Tell me about the landing page service' },
          { label: 'Backend API service', query: 'Tell me about backend REST API development' },
        ],
        demos: [
          { label: 'Request similar project', action: 'start_brief' },
          { label: 'AI & ML projects', query: 'Show me AI and machine learning projects' },
          { label: 'How to hire Youssef', query: 'How can I hire Youssef?' },
        ],
      },
    },
  };

  /* ---- Text Normalization & Language Detection ---- */
  function normalizeText(str) {
    return String(str || '')
      .toLowerCase()
      .replace(/[\u064B-\u065F\u0670\u0640]/g, '') // strip Arabic diacritics & tatweel
      .replace(/[أإآ]/g, 'ا')
      .replace(/ة/g, 'ه')
      .replace(/ى/g, 'ي')
      .replace(/ؤ/g, 'و')
      .replace(/ئ/g, 'ي')
      .replace(/[^\p{L}\p{N}#+.]+/gu, ' ')
      .trim();
  }

  function detectLang(text, fallback) {
    const arChars = (text.match(/[\u0600-\u06FF]/g) || []).length;
    const enChars = (text.match(/[A-Za-z]/g) || []).length;
    if (arChars > 0 && arChars >= enChars * 0.4) return 'ar';
    if (enChars > 0 && arChars === 0) return 'en';
    return fallback || 'ar';
  }

  function esc(s) {
    return String(s ?? '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function formatMd(text) {
    return esc(text)
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n/g, '<br>');
  }

  /* ---- Domain Synonym Map for Semantic Matching ---- */
  const DOMAIN_TERMS = {
    ai: [
      'ai', 'ml', 'machine learning', 'deep learning', 'llm', 'agent', 'agents', 'rag', 'nlp',
      'python', 'scikit', 'pandas', 'automation', 'chatbot', 'bot', 'vision', 'kaggle', 'openai', 'gemini',
      'ذكاء', 'اصطناعي', 'تعلم', 'اله', 'بايثون', 'موديل', 'نموذج', 'اتمته', 'بوت', 'وكيل', 'تحليل صور', 'كاجل'
    ],
    backend: [
      'backend', 'back end', 'api', 'rest', 'restful', 'dotnet', '.net', 'c#', 'csharp', 'asp.net',
      'aspnet', 'sql', 'database', 'azure', 'aws', 'cloud', 'docker', 'terraform', 'devops', 'server',
      'microservices', 'auth', 'jwt', 'security', 'infrastructure',
      'باك', 'اند', 'سيرفر', 'واجهات', 'دوت', 'نت', 'سي شارب', 'قواعد', 'بيانات', 'سحابه', 'ايجور', 'امازون', 'دوكر', 'استضافه'
    ],
    data: [
      'data', 'excel', 'dashboard', 'dashboards', 'power query', 'power bi', 'bi', 'analytics',
      'cleaning', 'etl', 'report', 'reporting', 'spreadsheet', 'csv', 'kpi', 'hr analytics',
      'بيانات', 'اكسل', 'داشبورد', 'لوحه', 'تحكم', 'تحليل', 'تنظيف', 'تقارير', 'جداول', 'باور'
    ],
    ecommerce: [
      'ecommerce', 'e-commerce', 'store', 'shop', 'shopping', 'cart', 'checkout', 'woocommerce', 'shopify', 'storefront',
      'متجر', 'تجاره', 'الكترونيه', 'بيع', 'منتجات', 'سله', 'مشتريات'
    ],
    web: [
      'web', 'website', 'landing', 'landing page', 'frontend', 'front end', 'react', 'typescript',
      'javascript', 'html', 'css', 'figma', 'responsive', 'ui', 'ux', 'portfolio', 'prototype',
      'موقع', 'مواقع', 'ويب', 'صفحه', 'هبوط', 'لاندنج', 'رياكت', 'فرونت', 'متجاوب', 'تفاعلي', 'صفحة'
    ],
    design: [
      'design', 'logo', 'brand', 'branding', 'identity', 'visual', 'illustrator', 'photoshop',
      'social media', 'post', 'posts', 'graphic', 'packaging', 'coffee', 'rose', 'sugar',
      'تصميم', 'لوجو', 'شعار', 'هويه', 'بصريه', 'براند', 'سوشيال', 'ميديا', 'بوست', 'بوستات', 'جرافيك'
    ],
    content: [
      'video', 'script', 'scripts', 'storyboard', 'copywriting', 'copy', 'ad', 'ads', 'content', 'commercial', 'reel', 'reels',
      'فيديو', 'سكريبت', 'سيناريو', 'ستوري', 'بورد', 'اعلان', 'اعلانات', 'كتابه', 'محتوي', 'ريلز'
    ],
  };

  const STOP_WORDS = new Set([
    // Arabic stop words (normalized)
    'في', 'من', 'علي', 'الي', 'عن', 'مع', 'معاك', 'معك', 'هو', 'هي', 'انا', 'انت', 'انتي',
    'ده', 'دي', 'دول', 'هذا', 'هذه', 'اللي', 'التي', 'الذي', 'ايه', 'اي', 'ايش', 'ازاي',
    'كيف', 'هل', 'ممكن', 'عايز', 'عاوزه', 'محتاج', 'محتاجه', 'عشان', 'علشان', 'لاني', 'وريني',
    'قولي', 'اعرف', 'تفاصيل', 'معلومات', 'عندك', 'لديك', 'تعمل', 'اعمل', 'عمل', 'شغل', 'مشروع',
    'مشاريع', 'مشاريعك', 'اعمال', 'اعمالك', 'خدمه', 'خدمات', 'خدماتك', 'يوسف', 'يعقوب', 'رقم',
    'بكام', 'كام', 'سعر', 'اسعار', 'اسعارك', 'تكلفه', 'اتواصل', 'تواصل', 'اطلب', 'طلب', 'فيه', 'فيها',
    // English stop words
    'the', 'and', 'for', 'with', 'you', 'your', 'about', 'tell', 'show', 'me', 'can', 'do',
    'does', 'are', 'is', 'what', 'how', 'much', 'any', 'have', 'has', 'build', 'make', 'create',
    'need', 'want', 'looking', 'work', 'project', 'projects', 'service', 'services', 'portfolio',
    'youssef', 'yacoup', 'please', 'some', 'more', 'info', 'details', 'from', 'that', 'this',
  ]);

  const GENERIC_DOMAIN_WORDS = new Set([
    'ai', 'ml', 'python', 'api', 'rest', 'backend', 'frontend', 'web', 'website', 'landing', 'page',
    'store', 'ecommerce', 'excel', 'data', 'dashboard', 'dashboards', 'analytics', 'power', 'query',
    'cloud', 'azure', 'aws', 'docker', 'design', 'logo', 'brand', 'branding', 'video', 'script',
    'ذكاء', 'اصطناعي', 'تعلم', 'اله', 'بايثون', 'باك', 'اند', 'سحابه', 'موقع', 'مواقع', 'صفحه',
    'هبوط', 'لاندنج', 'بيج', 'متجر', 'بيانات', 'اكسل', 'داشبورد', 'تحليل', 'تصميم', 'لوجو', 'شعار', 'هويه', 'فيديو', 'اعلان'
  ]);

  function hasAny(norm, words) {
    const padded = ` ${norm} `;
    for (const w of words) {
      const nw = normalizeText(w);
      if (!nw) continue;
      // Short English words require space boundaries so "ai" doesn't match "email"
      if (/^[a-z0-9.+#]+$/.test(nw) && nw.length <= 3) {
        if (padded.includes(` ${nw} `)) return true;
      } else {
        if (norm.includes(nw)) return true;
      }
    }
    return false;
  }

  const INTENTS = {
    greeting: ['hi', 'hello', 'hey', 'good morning', 'good evening', 'salam', 'السلام عليكم', 'سلام عليكم', 'اهلا', 'اهلين', 'مرحبا', 'ازيك', 'عامل ايه', 'صباح الخير', 'مساء الخير', 'هاي', 'هالو'],
    pricing: ['price', 'prices', 'pricing', 'cost', 'costs', 'rate', 'rates', 'hourly', 'budget', 'fee', 'fees', 'quote', 'how much', 'usd', 'dollar', 'سعر', 'اسعار', 'بكام', 'تكلفه', 'تكلفته', 'فلوس', 'ساعه', 'باقه', 'باقات', 'عرض سعر', 'ميزانيه', 'دولار'],
    hire: ['hire', 'order', 'book', 'contact', 'reach', 'work together', 'start project', 'available', 'availability', 'whatsapp', 'phone', 'اطلب', 'طلب خدمه', 'توظيف', 'تعاقد', 'اتواصل', 'تواصل', 'تليفون', 'واتس', 'واتساب', 'عايز اعمل', 'محتاج اعمل', 'ابدأ مشروع', 'ابدا مشروع', 'متاح', 'تفرغ'],
    demo: ['demo', 'demos', 'live', 'preview', 'deployed', 'working link', 'ديمو', 'تجريبي', 'تجربه مباشره', 'مباشر', 'مباشره', 'لايف', 'رابط شغال', 'معاينه'],
    experience: ['experience', 'bio', 'about you', 'about youssef', 'about him', 'who is', 'background', 'resume', 'cv', 'education', 'university', 'degree', 'certificate', 'certificates', 'credentials', 'awards', 'medal', 'kaggle', 'alx', 'ibm', 'iti', 'خبره', 'خبرات', 'نبذه', 'مين يوسف', 'من هو', 'سيره', 'شهاده', 'شهادات', 'تعليم', 'جامعه', 'بكالوريوس', 'كاجل', 'جوائز'],
    platforms: ['platform', 'platforms', 'upwork', 'freelancer', 'mostaql', 'nafezly', 'khamsat', 'profile', 'profiles', 'reviews', 'verified', 'منصه', 'منصات', 'اب وورك', 'ابورك', 'فريلانسر', 'مستقل', 'نفذلي', 'خمسات', 'حسابات', 'بروفايل', 'تقييم'],
    oss: ['github', 'open source', 'opensource', 'repo', 'repos', 'repository', 'repositories', 'source code', 'جيت هاب', 'جيتهب', 'مفتوح المصدر', 'مستودع', 'مستودعات', 'ريبو'],
    delivery: ['delivery', 'turnaround', 'timeline', 'deadline', 'how long', 'express', 'urgent', 'مده التنفيذ', 'كام يوم', 'تسليم', 'مستعجل', 'تسليم سريع'],
    allServices: ['services', 'what do you do', 'what can you', 'offerings', 'tech stack', 'خدمات', 'خدماتك', 'بتعمل ايه', 'بتقدم ايه', 'تخصصاتك'],
    allProjects: ['portfolio', 'projects', 'works', 'samples', 'examples', 'case studies', 'معرض', 'اعمالك', 'مشاريعك', 'شغلك', 'نماذج'],
  };

  /* ---- State ---- */
  const botState = {
    open: false,
    initialized: false,
    briefMode: null,
    briefCat: null,
    briefCatLabel: null,
    history: [],
  };

  /* ---- Retrieval Engine over Live data/portfolio.json ---- */
  function getWebData() {
    const d = window.YYPortfolio?.getData?.();
    return d && d.web ? d.web : null;
  }

  function detectDomains(normQuery) {
    const scores = {};
    const padded = ` ${normQuery} `;
    for (const [cat, terms] of Object.entries(DOMAIN_TERMS)) {
      let sc = 0;
      for (const term of terms) {
        const nt = normalizeText(term);
        if (!nt) continue;
        const isShortEn = /^[a-z0-9.+#]+$/.test(nt) && nt.length <= 3;
        const matched = isShortEn ? padded.includes(` ${nt} `) : normQuery.includes(nt);
        if (matched) {
          sc += normQuery === nt ? 6 : (nt.length >= 4 ? 3.5 : 2.5);
        }
      }
      if (sc > 0) scores[cat] = sc;
    }
    return Object.entries(scores)
      .sort((a, b) => b[1] - a[1])
      .map(([k, v]) => ({ key: k, score: v }));
  }

  function searchItems(normQuery, web, domains) {
    const tokens = normQuery
      .split(' ')
      .filter((w) => w.length >= 2 && !STOP_WORDS.has(w));
    const topDomain = domains[0]?.key || null;
    const domainKeys = new Set(domains.slice(0, 2).map((d) => d.key));

    const scored = web.items.map((it) => {
      const titleHay = normalizeText(`${it.en} ${it.ar} ${it.slug.replace(/-/g, ' ')}`);
      const skillHay = normalizeText((it.skills || []).join(' '));
      const descHay = normalizeText(`${it.desc_en || ''} ${it.desc_ar || ''}`);
      let score = 0;
      let specificHit = 0;

      if (topDomain && it.category === topDomain) score += 7;
      else if (domainKeys.has(it.category)) score += 3.5;

      for (const tok of tokens) {
        const isSpecific = !GENERIC_DOMAIN_WORDS.has(tok) && tok.length >= 3;
        const tokMatch = (hay) => (/^[a-z0-9.+#]+$/.test(tok) && tok.length <= 3)
          ? (` ${hay} `).includes(` ${tok} `)
          : hay.includes(tok);

        if (tokMatch(titleHay)) {
          score += isSpecific ? 10 : 3.5;
          if (isSpecific) specificHit += 1;
        }
        if (tokMatch(skillHay)) {
          score += 4;
        }
        if (tokMatch(descHay)) {
          score += isSpecific ? 2.5 : 1;
        }
      }
      if (it.demo && score > 0) score += 0.8;
      return { item: it, score, specificHit };
    });

    return scored
      .filter((x) => x.score >= 4.5)
      .sort((a, b) => b.score - a.score);
  }

  function searchServices(normQuery, web, domains) {
    const tokens = normQuery
      .split(' ')
      .filter((w) => w.length >= 2 && !STOP_WORDS.has(w));
    const catToServices = {
      ai: ['ai-apps-automation', 'machine-learning-data-science'],
      backend: ['backend-api-development'],
      data: ['data-cleaning-excel-dashboards', 'machine-learning-data-science'],
      ecommerce: ['websites-ecommerce', 'landing-page-design'],
      web: ['landing-page-design', 'websites-ecommerce'],
      design: ['brand-identity-design'],
      content: ['ad-copy-video-scripts'],
    };
    const boostSlugs = new Set();
    domains.slice(0, 2).forEach((d) => (catToServices[d.key] || []).forEach((s) => boostSlugs.add(s)));

    return web.services
      .map((s) => {
        const titleHay = normalizeText(`${s.en} ${s.ar} ${s.slug.replace(/-/g, ' ')}`);
        const toolsHay = normalizeText((s.tools || []).join(' '));
        const introHay = normalizeText(`${s.intro_en || ''} ${s.intro_ar || ''}`);
        let score = boostSlugs.has(s.slug) ? 6 : 0;
        for (const tok of tokens) {
          if (titleHay.includes(tok)) score += 5.5;
          if (toolsHay.includes(tok)) score += 4;
          if (introHay.includes(tok)) score += 1.5;
        }
        return { service: s, score };
      })
      .filter((x) => x.score >= 4.5)
      .sort((a, b) => b.score - a.score);
  }

  function generateReply(rawQuery) {
    const web = getWebData();
    const uiLang = window.YYPortfolio?.getLang?.() || 'ar';
    const lang = detectLang(rawQuery, uiLang);
    const isAr = lang === 'ar';
    const norm = normalizeText(rawQuery);

    if (!web) {
      return {
        lang,
        text: isAr
          ? 'جاري تحميل بيانات المعرض... جرّب إرسال رسالتك مرة تانية بعد لحظة.'
          : 'Portfolio data is still loading... Please try again in a moment.',
      };
    }

    // Handle active Brief Builder step 2
    if (botState.briefMode === 'describe' && rawQuery.trim().length >= 3) {
      const catKey = botState.briefCat || 'web';
      const catLabel = botState.briefCatLabel || catKey;
      botState.briefMode = null;

      const matchedServices = searchServices(catKey, web, [{ key: catKey, score: 10 }]);
      const svc = matchedServices[0]?.service;
      const svcName = svc ? (isAr ? svc.ar : svc.en) : catLabel;

      const briefText = isAr
        ? `مرحباً يوسف،\nأرغب في تنفيذ مشروع في مجال: ${catLabel}\nالخدمة المقترحة: ${svcName}\n\nتفاصيل المشروع:\n${rawQuery.trim()}\n\nيرجى موافاتي بخطة التنفيذ المبدئية والتكلفة والمدة المقترحة. شكراً لك!`
        : `Hi Youssef,\nI would like to start a project in: ${catLabel}\nSuggested service: ${svcName}\n\nProject details:\n${rawQuery.trim()}\n\nCould you please share an initial scope, timeline, and quote? Thanks!`;

      return {
        lang,
        text: UI[lang].briefDoneIntro,
        briefCard: briefText,
        platforms: web.profiles,
        chips: UI[lang].followUps.default,
      };
    }

    const domains = detectDomains(norm);
    const itemHits = searchItems(norm, web, domains);
    const serviceHits = searchServices(norm, web, domains);

    const isGreeting = hasAny(norm, INTENTS.greeting) && norm.split(' ').length <= 5;
    const isPricing = hasAny(norm, INTENTS.pricing);
    const isHire = hasAny(norm, INTENTS.hire);
    const isDemo = hasAny(norm, INTENTS.demo);
    const isExp = hasAny(norm, INTENTS.experience);
    const isPlatforms = hasAny(norm, INTENTS.platforms);
    const isOss = hasAny(norm, INTENTS.oss);
    const isDelivery = hasAny(norm, INTENTS.delivery);
    const isAllServices = hasAny(norm, INTENTS.allServices);
    const isAllProjects = hasAny(norm, INTENTS.allProjects);

    // 1. Pure Greeting
    if (isGreeting && !domains.length && !isPricing && !isHire && !isDemo && !isExp) {
      return {
        lang,
        text: isAr
          ? 'أهلاً بك يا فندم! 👋 يسعدني أساعدك في استكشاف معرض أعمال **يوسف يعقوب** (39 مشروعاً، 8 خدمات، 5 منصات موثّقة).\n\nتقدر تسألني عن أي مجال (ذكاء اصطناعي، .NET/API، سحابة، مواقع، بيانات، تصميم) أو الأسعار أو تطلب تجهيز عرض سعر لمشروعك.'
          : "Hello! 👋 Happy to help you explore **Youssef Yacoup's** portfolio (39 projects, 8 services, 5 verified platforms).\n\nAsk me about any domain (AI/ML, .NET APIs, Cloud, Web, Data, Design), rates, live demos, or start a quick project brief.",
        chips: UI[lang].quickPrompts,
      };
    }

    // 2. Pricing & Delivery Inquiry (before generic project hits)
    if (isPricing || isDelivery) {
      const landing = web.services.find((s) => s.slug === 'landing-page-design');
      const matchedSvc = serviceHits[0]?.service;
      if (matchedSvc && matchedSvc.slug === 'landing-page-design' && landing) {
        const upgList = (landing.upgrades || [])
          .map((u) => `• ${isAr ? u.title : u.title_en} (**+$${u.price_usd}**)`)
          .join('\n');
        const text = isAr
          ? `**خدمة صفحة الهبوط (Landing Page)** متاحة مباشرة على **خمسات**:\n• السعر الأساسي: **$10** (التسليم خلال **${landing.delivery_ar || '3 أيام'}**)\n\n**التطويرات الاختيارية:**\n${upgList}\n\nاضغط على بطاقة الخدمة تحت لعرض كل التفاصيل ورابط الطلب المباشر:`
          : `The **Responsive Landing Page** service is live on **Khamsat**:\n• Base price: **$10** (**${landing.delivery_en || '3 days'}** delivery)\n\n**Optional Upgrades:**\n${upgList}\n\nTap the service card below for full deliverables and the direct order link:`;
        return {
          lang,
          text,
          services: [landing],
          projects: itemHits.slice(0, 2).map((x) => x.item),
          chips: UI[lang].followUps.pricing,
        };
      }

      const text = isAr
        ? `إليك هيكل **الأسعار والمدد** المعتمدة لدى يوسف يعقوب على المنصات الخمس:\n\n• **خمسات (Khamsat)**: تبدأ من **$10** (صفحة هبوط احترافية، تسليم خلال 3 أيام أو تسليم سريع خلال يوم واحد).\n• **فريلانسر (Freelancer.com)**: **$10 / ساعة** أو مشاريع بسعر ثابت.\n• **أب وورك (Upwork)**: **$20 / ساعة** (تفرغ 30+ ساعة أسبوعياً).\n• **مستقل ونفذلي (Mostaql & Nafezly)**: عرض سعر مخصّص ومقسّم لمراحل حسب نطاق المشروع.${matchedSvc ? `\n\nوبخصوص **${matchedSvc.ar}**، تقدر تفتح بطاقة الخدمة تحت أو نجهّز لك عرض سعر سريع في دقيقتين.` : ''}`
        : `Here is **Youssef Yacoup's** official pricing structure across all 5 verified platforms:\n\n• **Khamsat**: Starts at **$10** (Responsive Landing Page, 3-day turnaround or 1-day express).\n• **Freelancer.com**: **$10/hr** or fixed-price milestones.\n• **Upwork**: **$20/hr** (30+ hrs/week availability).\n• **Mostaql & Nafezly**: Custom milestone quotes based on scope.${matchedSvc ? `\n\nFor **${matchedSvc.en}**, tap the service card below or start a quick project brief for an exact quote.` : ''}`;

      return {
        lang,
        text,
        services: matchedSvc ? [matchedSvc] : web.services.slice(0, 2),
        platforms: web.profiles,
        chips: UI[lang].followUps.pricing,
      };
    }

    // 3. Live Demos Inquiry
    if (isDemo) {
      const demos = web.items.filter((i) => i.demo);
      const picked = itemHits.filter((x) => x.item.demo).map((x) => x.item);
      const list = (picked.length ? picked : demos).slice(0, 4);
      return {
        lang,
        text: isAr
          ? `متاح في المعرض **${demos.length} مشروعاً بنسخة تجريبية مباشرة (Live Demo)** تقدر تفتحهم وتجربهم بنفسك دلوقتي!\n\nدي أبرز النماذج المباشرة:`
          : `There are **${demos.length} projects with Live Interactive Demos** you can launch and test right now!\n\nHere are the top live previews:`,
        projects: list,
        filterAction: {
          label: isAr ? `عرض كل الـ ${demos.length} ديمو مباشر في المعرض` : `Filter all ${demos.length} live demos`,
          opts: { demoOnly: true },
        },
        chips: UI[lang].followUps.demos,
      };
    }

    // 4. Experience, Education, Credentials & Kaggle
    if (isExp) {
      const expLines = web.experience
        .map((e) => `• **${isAr ? e.role_ar : e.role_en}** — ${e.org} (${isAr ? (e.period_ar || e.period_en) : (e.period_en || e.period_ar)})`)
        .join('\n');
      const credLines = web.credentials
        .slice(0, 5)
        .map((c) => `• ${isAr ? c.title_ar : c.title_en} (${c.year})`)
        .join('\n');
      return {
        lang,
        text: isAr
          ? `**الخبرات العملية ليوسف يعقوب:**\n${expLines}\n\n**التعليم وأبرز الشهادات:**\n${credLines}`
          : `**Youssef Yacoup's Experience:**\n${expLines}\n\n**Education & Key Credentials:**\n${credLines}`,
        chips: [
          { label: isAr ? 'أعمال الذكاء الاصطناعي' : 'AI & ML projects', query: isAr ? 'مشاريع الذكاء الاصطناعي' : 'AI projects' },
          { label: isAr ? 'منصات العمل الحر' : 'Freelance platforms', query: isAr ? 'منصات العمل الحر' : 'platforms' },
          { label: isAr ? 'اطلب مشروع' : 'Request a quote', action: 'start_brief' },
        ],
      };
    }

    // 5. Open Source / GitHub Repos
    if (isOss) {
      const repos = web.open_source.slice(0, 5);
      const lines = repos
        .map((r) => `• **${r.name}** — ${isAr ? (r.summary_ar || r.summary_en) : (r.summary_en || r.summary)}`)
        .join('\n');
      return {
        lang,
        text: isAr
          ? `لدى يوسف **${web.open_source.length} مشاريع مفتوحة المصدر** منشورة على GitHub، من أبرزها:\n\n${lines}`
          : `Youssef has **${web.open_source.length} open-source repositories** on GitHub, including:\n\n${lines}`,
        links: [
          { label: 'GitHub — Youssef123ya', url: 'https://github.com/Youssef123ya', color: '#1D4ED8' },
          { label: isAr ? 'مستودع المعرض' : 'Portfolio Repo', url: 'https://github.com/Youssef123ya/Freelancer-Platforms', color: '#047857' },
        ],
        chips: UI[lang].followUps.default,
      };
    }

    // 6. Hire / Contact / Platforms (when NOT asking about a specific project/domain, OR when asking for WhatsApp/contact directly)
    const wantsWhatsapp = hasAny(norm, ['واتس', 'واتساب', 'whatsapp', 'تليفون', 'phone']);
    if (wantsWhatsapp || ((isHire || isPlatforms) && !domains.length && !(itemHits[0]?.specificHit > 0))) {
      const intro = wantsWhatsapp
        ? (isAr
            ? 'التواصل والطلبات بتتم بشكل رسمي وآمن لضمان حقوق الطرفين عبر **منصات العمل الحر الموثّقة الـ 5** ليوسف يعقوب:'
            : "All project inquiries and contracts are handled securely through **Youssef's 5 verified freelance platforms**:")
        : (isAr
            ? 'تقدر تتعاقد مع يوسف أو تطلب عرض سعر مباشرة عبر أي من **منصات العمل الحر الـ 5 الموثّقة** دي، أو تضغط **"تجهيز طلب مشروع"** أساعدك أكتب رسالة المشروع في ثواني:'
            : 'You can hire Youssef or request a quote directly on any of these **5 verified freelance platforms**, or click **Request a quote** and I will help draft your project brief:');
      return {
        lang,
        text: intro,
        platforms: web.profiles,
        services: serviceHits.slice(0, 2).map((x) => x.service),
        chips: [
          { label: isAr ? 'جهّزلي رسالة طلب مشروع الآن 🚀' : 'Draft my project brief 🚀', action: 'start_brief' },
          { label: isAr ? 'الأسعار والباقات' : 'Rates & pricing', query: isAr ? 'الأسعار' : 'pricing' },
        ],
      };
    }

    // 7. Specific Named Project Deep Lookup (requires a distinctive non-generic title match like MedMonitor, InvoicePilot, Sand Dune, Rose & Sugar, etc.)
    if (itemHits.length && itemHits[0].specificHit >= 1 && itemHits[0].score >= 10) {
      const top = itemHits[0].item;
      const title = isAr ? top.ar : top.en;
      const desc = (isAr ? (top.desc_ar || top.desc_en) : (top.desc_en || top.desc_ar)) || '';
      const shortDesc = desc.length > 260 ? desc.slice(0, 260).trim() + '...' : desc;
      const skillsStr = (top.skills || []).slice(0, 6).join(' · ');
      const text = isAr
        ? `لقيتلك تفاصيل مشروع **${title}** من المعرض:\n\n${shortDesc}\n\n**التقنيات المستخدمة:** ${skillsStr}${top.demo ? '\n\n✅ متاح للمشروع **نسخة تجريبية مباشرة (Live Demo)** تقدر تجربها دلوقتي!' : ''}`
        : `Here are the details for **${title}** from the portfolio:\n\n${shortDesc}\n\n**Stack:** ${skillsStr}${top.demo ? '\n\n✅ Includes a **Live Interactive Demo** you can try right now!' : ''}`;
      return {
        lang,
        text,
        projects: itemHits.slice(0, 3).map((x) => x.item),
        services: serviceHits.slice(0, 1).map((x) => x.service),
        chips: UI[lang].followUps.default,
      };
    }

    // 8. Domain / Skill-Specific Search (AI, Backend, Cloud, Data, Web, E-Commerce, Branding, Video)
    if (domains.length || itemHits.length || serviceHits.length) {
      const topDomain = domains[0]?.key;
      const catObj = topDomain ? web.categories.find((c) => c.key === topDomain) : null;
      const domainItems = topDomain ? web.items.filter((i) => i.category === topDomain) : [];
      // Prefer items strictly inside topDomain when a domain matched clearly
      const prioritized = topDomain
        ? [
            ...itemHits.filter((x) => x.item.category === topDomain).map((x) => x.item),
            ...domainItems,
          ].filter((it, idx, arr) => arr.findIndex((a) => a.slug === it.slug) === idx)
        : itemHits.map((x) => x.item);

      const shownProjects = prioritized.slice(0, 3);
      const shownServices = serviceHits.slice(0, 2).map((x) => x.service);
      const catTitle = catObj ? (isAr ? catObj.ar : catObj.en) : (isAr ? 'هذا المجال' : 'this area');
      const count = domainItems.length || itemHits.length;

      const text = isAr
        ? `نعم بالتأكيد! 👍 لدى يوسف خبرة عملية ومشاريع موثّقة في **${catTitle}**${count ? ` (**${count}** عمل في المعرض)` : ''}.\n\nإليك أبرز الخدمات والأعمال المطابقة لطلبك (اضغط على أي بطاقة لفتح التفاصيل والصور):`
        : `Yes! 👍 Youssef has hands-on experience and verified deliverables in **${catTitle}**${count ? ` (**${count}** projects in the portfolio)` : ''}.\n\nHere are the closest matching services and portfolio projects (click any card to inspect screenshots & links):`;

      return {
        lang,
        text,
        services: shownServices,
        projects: shownProjects,
        filterAction: catObj
          ? {
              label: UI[lang].filterBtn(isAr ? catObj.ar : catObj.en, domainItems.length),
              opts: { category: catObj.key },
            }
          : null,
        chips: [
          { label: isAr ? 'اطلب مشروع في هذا المجال' : 'Request a quote for this', action: 'start_brief', cat: topDomain },
          { label: isAr ? 'الأسعار ومدة التنفيذ' : 'Pricing & turnaround', query: isAr ? 'الأسعار' : 'pricing' },
          { label: isAr ? 'مشاريع بديمو مباشر' : 'Live demos', query: isAr ? 'ديمو مباشر' : 'live demos' },
        ],
      };
    }

    // 9. All Services Overview
    if (isAllServices) {
      return {
        lang,
        text: isAr
          ? `يقدّم يوسف **${web.services.length} خدمات رئيسية** تغطي الذكاء الاصطناعي، تطوير الباك إند والـ APIs، المواقع والمتاجر، تحليل البيانات، الهوية البصرية، وكتابة الإعلانات.\n\nتصفح أبرز الخدمات هنا أو اضغط على أي خدمة لعرض المخرجات والأعمال المرتبطة:`
          : `Youssef offers **${web.services.length} specialized services** covering AI & Automation, Backend & REST APIs, Websites & E-Commerce, Data & Excel Dashboards, Branding, and Copywriting.\n\nExplore top services below:`,
        services: web.services.slice(0, 4),
        chips: UI[lang].followUps.pricing,
      };
    }

    // 10. All Projects Overview
    if (isAllProjects) {
      const featured = ['medmonitor-24-7', 'invoicepilot', 'sand-dune-encroachment-tracker', 'secure-aws-infrastructure']
        .map((sl) => web.items.find((i) => i.slug === sl))
        .filter(Boolean);
      return {
        lang,
        text: isAr
          ? `يضم المعرض **${web.items.length} عملاً موثّقاً** عبر ${web.categories.length} مجالات (منها **${web.items.filter((i) => i.demo).length} عملاً بديمو مباشر**).\n\nدي أبرز 4 مشاريع مختارة كبداية:`
          : `The portfolio includes **${web.items.length} documented projects** across ${web.categories.length} domains (including **${web.items.filter((i) => i.demo).length} live demos**).\n\nHere are 4 standout case studies:`,
        projects: featured,
        chips: UI[lang].followUps.default,
      };
    }

    // 11. Smart Helpful Fallback
    return {
      lang,
      text: isAr
        ? 'وصلتني رسالتك! 🤝 عشان أرد عليك بأدق التفاصيل من معرض أعمال يوسف، جرب تحددلي أكتر: هل بتسأل عن **مشروع برمجي (AI / .NET / مواقع)**، ولا **تحليل بيانات / تصميم**، ولا **الأسعار وطلب خدمة**؟\n\nتقدر كمان تختار من الاختصارات الجاهزة تحت 👇'
        : "Thanks for reaching out! 🤝 To pull the exact details from Youssef's portfolio, let me know if you're looking for **AI / Backend / Web development**, **Data / Branding**, **Pricing**, or **Requesting a quote** — or pick a quick topic below 👇",
      chips: UI[lang].quickPrompts,
    };
  }

  /* ---- DOM Construction ---- */
  function mountBot() {
    if (document.getElementById('yyBotRoot')) return;

    const root = document.createElement('div');
    root.id = 'yyBotRoot';
    root.className = 'yy-bot-root';
    root.innerHTML = `
      <button type="button" class="yy-bot-launcher" id="yyBotLauncher" aria-label="Open Portfolio Assistant" aria-expanded="false">
        <span class="yy-bot-av-wrap">
          <img src="assets/avatar.jpg" alt="Youssef Yacoup">
          <span class="yy-bot-online" aria-hidden="true"></span>
        </span>
        <span class="yy-bot-launcher-label" id="yyBotLauncherLabel">مساعد الأعمال</span>
        <span class="yy-bot-pulse" aria-hidden="true"></span>
      </button>

      <section class="yy-bot-panel" id="yyBotPanel" role="dialog" aria-label="Portfolio Assistant" hidden>
        <header class="yy-bot-head">
          <div class="yy-bot-head-info">
            <span class="yy-bot-av-wrap sm">
              <img src="assets/avatar.jpg" alt="Youssef Yacoup">
              <span class="yy-bot-online" aria-hidden="true"></span>
            </span>
            <div>
              <div class="yy-bot-title" id="yyBotTitle">مساعد معرض أعمال يوسف</div>
              <div class="yy-bot-sub" id="yyBotSub">يرد عليك فوراً من واقع 39 مشروعاً و8 خدمات</div>
            </div>
          </div>
          <div class="yy-bot-head-actions">
            <button type="button" class="yy-bot-icon-btn" id="yyBotReset" title="New conversation" aria-label="New conversation">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
            </button>
            <button type="button" class="yy-bot-icon-btn" id="yyBotClose" title="Close" aria-label="Close">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
          </div>
        </header>

        <div class="yy-bot-messages" id="yyBotMessages" aria-live="polite"></div>

        <form class="yy-bot-form" id="yyBotForm" autocomplete="off">
          <input type="text" id="yyBotInput" class="yy-bot-input" placeholder="اسأل عن مشروع، سعر، تقنية، أو اطلب عرض سعر..." maxlength="400">
          <button type="submit" class="yy-bot-send" id="yyBotSend" aria-label="Send">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
          </button>
        </form>
      </section>
    `;
    document.body.appendChild(root);

    syncChromeLang();
    bindEvents();
  }

  function syncChromeLang() {
    const lang = window.YYPortfolio?.getLang?.() || 'ar';
    const t = UI[lang] || UI.ar;
    const lbl = document.getElementById('yyBotLauncherLabel');
    const title = document.getElementById('yyBotTitle');
    const sub = document.getElementById('yyBotSub');
    const inp = document.getElementById('yyBotInput');
    const rst = document.getElementById('yyBotReset');
    const cls = document.getElementById('yyBotClose');
    if (lbl) lbl.textContent = t.launcherLabel;
    if (title) title.textContent = t.headerTitle;
    if (sub) sub.textContent = t.headerSub;
    if (inp) inp.placeholder = t.placeholder;
    if (rst) rst.title = t.reset;
    if (cls) cls.title = t.close;
  }

  function scrollMessagesToBottom() {
    const box = document.getElementById('yyBotMessages');
    if (box) box.scrollTop = box.scrollHeight;
  }

  function appendUserMsg(text) {
    const box = document.getElementById('yyBotMessages');
    const row = document.createElement('div');
    row.className = 'yy-msg yy-msg-user';
    row.innerHTML = `<div class="yy-bubble">${esc(text)}</div>`;
    box.appendChild(row);
    scrollMessagesToBottom();
  }

  function showTyping() {
    const box = document.getElementById('yyBotMessages');
    const row = document.createElement('div');
    row.className = 'yy-msg yy-msg-bot yy-typing-row';
    row.id = 'yyTypingRow';
    row.innerHTML = `<div class="yy-bubble yy-typing"><span></span><span></span><span></span></div>`;
    box.appendChild(row);
    scrollMessagesToBottom();
  }

  function hideTyping() {
    const el = document.getElementById('yyTypingRow');
    if (el) el.remove();
  }

  function appendBotMsg(payload) {
    const box = document.getElementById('yyBotMessages');
    const lang = payload.lang || window.YYPortfolio?.getLang?.() || 'ar';
    const isAr = lang === 'ar';
    const t = UI[lang] || UI.ar;
    const web = getWebData();
    const catMap = web ? Object.fromEntries(web.categories.map((c) => [c.key, c])) : {};
    const palMap = window.YYPortfolio?.getPalette?.() || {};

    const row = document.createElement('div');
    row.className = 'yy-msg yy-msg-bot';
    row.setAttribute('dir', isAr ? 'rtl' : 'ltr');

    let extrasHtml = '';

    // Service Cards
    if (payload.services && payload.services.length) {
      extrasHtml += `<div class="yy-bot-cards">`;
      for (const s of payload.services) {
        const sTitle = isAr ? s.ar : s.en;
        const badge = s.price ? s.price : (isAr ? 'حسب المشروع' : 'Custom Quote');
        const tools = (s.tools || []).slice(0, 3).join(' · ');
        extrasHtml += `
          <button type="button" class="yy-mini-card yy-mini-svc" data-bot-service="${esc(s.slug)}">
            <img src="${esc(s.cover)}" alt="" loading="lazy">
            <div class="yy-mini-body">
              <div class="yy-mini-top">
                <span class="yy-mini-pill">${esc(badge)}</span>
              </div>
              <div class="yy-mini-title">${esc(sTitle)}</div>
              <div class="yy-mini-meta">${esc(tools)}</div>
            </div>
          </button>`;
      }
      extrasHtml += `</div>`;
    }

    // Project Cards
    if (payload.projects && payload.projects.length) {
      extrasHtml += `<div class="yy-bot-cards">`;
      for (const p of payload.projects) {
        const pTitle = isAr ? p.ar : p.en;
        const cat = catMap[p.category];
        const catLbl = cat ? (isAr ? cat.ar : cat.en) : p.category;
        const pal = palMap[p.category] || { color: 'var(--p-primary)' };
        extrasHtml += `
          <div class="yy-mini-card yy-mini-proj" style="--mc:${pal.color}">
            <button type="button" class="yy-mini-main" data-bot-project="${esc(p.slug)}">
              <img src="${esc(p.cover)}" alt="" loading="lazy">
              <div class="yy-mini-body">
                <div class="yy-mini-top">
                  <span class="yy-mini-cat">${esc(catLbl)}</span>
                  ${p.demo ? `<span class="yy-mini-demo">Live</span>` : ''}
                </div>
                <div class="yy-mini-title">${esc(pTitle)}</div>
                <div class="yy-mini-meta">${esc((p.skills || []).slice(0, 3).join(' · '))}</div>
              </div>
            </button>
            ${p.demo ? `<a class="yy-mini-demo-link" href="${esc(p.demo)}" target="_blank" rel="noopener" title="${esc(t.liveDemo)}">↗</a>` : ''}
          </div>`;
      }
      extrasHtml += `</div>`;
    }

    // Filter Jump Action
    if (payload.filterAction) {
      const fa = payload.filterAction;
      extrasHtml += `<button type="button" class="yy-bot-action-btn" data-bot-filter='${esc(JSON.stringify(fa.opts))}'>${esc(fa.label)} ${isAr ? '←' : '→'}</button>`;
    }

    // Generated Copyable Project Brief Card
    if (payload.briefCard) {
      extrasHtml += `
        <div class="yy-brief-box">
          <pre class="yy-brief-pre">${esc(payload.briefCard)}</pre>
          <button type="button" class="yy-brief-copy" data-copy-brief="${esc(payload.briefCard)}">${esc(t.copyBrief)}</button>
        </div>`;
    }

    // Verified Platform Links
    if (payload.platforms && payload.platforms.length) {
      extrasHtml += `<div class="yy-bot-plats">`;
      for (const pf of payload.platforms) {
        const lbl = isAr ? pf.name_ar.split(' ·')[0] : pf.name_en;
        extrasHtml += `<a class="yy-bot-plat" href="${esc(pf.url)}" target="_blank" rel="noopener" style="--pc:${pf.color}"><span class="yy-pdot"></span>${esc(lbl)} ↗</a>`;
      }
      extrasHtml += `</div>`;
    }

    // Direct External Links (e.g. GitHub)
    if (payload.links && payload.links.length) {
      extrasHtml += `<div class="yy-bot-plats">`;
      for (const lk of payload.links) {
        extrasHtml += `<a class="yy-bot-plat" href="${esc(lk.url)}" target="_blank" rel="noopener" style="--pc:${lk.color || 'var(--p-primary)'}"><span class="yy-pdot"></span>${esc(lk.label)} ↗</a>`;
      }
      extrasHtml += `</div>`;
    }

    // Quick Reply Chips
    if (payload.chips && payload.chips.length) {
      extrasHtml += `<div class="yy-bot-chips">`;
      for (const ch of payload.chips) {
        if (ch.action) {
          extrasHtml += `<button type="button" class="yy-chip yy-chip-accent" data-bot-action="${esc(ch.action)}" ${ch.cat ? `data-bot-cat="${esc(ch.cat)}"` : ''}>${esc(ch.label)}</button>`;
        } else {
          extrasHtml += `<button type="button" class="yy-chip" data-bot-query="${esc(ch.query)}">${esc(ch.label)}</button>`;
        }
      }
      extrasHtml += `</div>`;
    }

    row.innerHTML = `<div class="yy-bubble">${formatMd(payload.text)}${extrasHtml}</div>`;
    box.appendChild(row);
    scrollMessagesToBottom();
  }

  function startBriefFlow(preselectedCat) {
    const lang = window.YYPortfolio?.getLang?.() || 'ar';
    const t = UI[lang] || UI.ar;
    if (preselectedCat) {
      const found = t.briefTypes.find((b) => b.key === preselectedCat);
      pickBriefCategory(preselectedCat, found ? found.label : preselectedCat, lang);
      return;
    }
    botState.briefMode = 'pick_type';
    appendBotMsg({
      lang,
      text: t.briefStep1,
      chips: [
        ...t.briefTypes.map((bt) => ({ label: bt.label, action: 'pick_brief_cat', cat: bt.key })),
        { label: t.briefCancel, action: 'cancel_brief' },
      ],
    });
  }

  function pickBriefCategory(catKey, catLabel, lang) {
    const l = lang || window.YYPortfolio?.getLang?.() || 'ar';
    const t = UI[l] || UI.ar;
    const web = getWebData();
    botState.briefMode = 'describe';
    botState.briefCat = catKey;
    botState.briefCatLabel = catLabel;

    let services = [];
    let projects = [];
    if (web) {
      services = searchServices(catKey, web, [{ key: catKey, score: 10 }]).slice(0, 1).map((x) => x.service);
      projects = web.items.filter((i) => i.category === catKey).slice(0, 2);
    }
    appendBotMsg({
      lang: l,
      text: t.briefStep2(catLabel),
      services,
      projects,
      chips: [{ label: t.briefCancel, action: 'cancel_brief' }],
    });
    document.getElementById('yyBotInput')?.focus();
  }

  function handleUserInput(text) {
    const trimmed = String(text || '').trim();
    if (!trimmed) return;
    appendUserMsg(trimmed);
    showTyping();
    setTimeout(() => {
      hideTyping();
      const reply = generateReply(trimmed);
      appendBotMsg(reply);
    }, 320);
  }

  function resetChat() {
    botState.briefMode = null;
    botState.briefCat = null;
    const box = document.getElementById('yyBotMessages');
    if (box) box.innerHTML = '';
    const lang = window.YYPortfolio?.getLang?.() || 'ar';
    const t = UI[lang] || UI.ar;
    appendBotMsg({
      lang,
      text: t.welcome,
      chips: t.quickPrompts,
    });
  }

  function setOpen(open) {
    botState.open = open;
    const panel = document.getElementById('yyBotPanel');
    const launcher = document.getElementById('yyBotLauncher');
    if (!panel || !launcher) return;
    panel.hidden = !open;
    launcher.setAttribute('aria-expanded', String(open));
    launcher.classList.toggle('is-open', open);
    if (open) {
      launcher.classList.add('seen');
      if (!botState.initialized) {
        botState.initialized = true;
        resetChat();
      }
      setTimeout(() => document.getElementById('yyBotInput')?.focus(), 80);
    }
  }

  function bindEvents() {
    document.getElementById('yyBotLauncher').addEventListener('click', () => setOpen(!botState.open));
    document.getElementById('yyBotClose').addEventListener('click', () => setOpen(false));
    document.getElementById('yyBotReset').addEventListener('click', () => resetChat());

    document.getElementById('yyBotForm').addEventListener('submit', (e) => {
      e.preventDefault();
      const inp = document.getElementById('yyBotInput');
      const val = inp.value;
      inp.value = '';
      handleUserInput(val);
    });

    // Delegate clicks inside chat messages
    document.getElementById('yyBotMessages').addEventListener('click', (e) => {
      const projBtn = e.target.closest('[data-bot-project]');
      if (projBtn) {
        window.YYPortfolio?.openProject?.(projBtn.dataset.botProject);
        return;
      }
      const svcBtn = e.target.closest('[data-bot-service]');
      if (svcBtn) {
        window.YYPortfolio?.openService?.(svcBtn.dataset.botService);
        return;
      }
      const filterBtn = e.target.closest('[data-bot-filter]');
      if (filterBtn) {
        try {
          const opts = JSON.parse(filterBtn.dataset.botFilter);
          window.YYPortfolio?.filterPortfolio?.(opts);
          if (window.innerWidth < 720) setOpen(false);
        } catch (_) {}
        return;
      }
      const copyBtn = e.target.closest('[data-copy-brief]');
      if (copyBtn) {
        const text = copyBtn.dataset.copyBrief;
        const lang = window.YYPortfolio?.getLang?.() || 'ar';
        navigator.clipboard?.writeText(text).then(() => {
          copyBtn.textContent = UI[lang].copied;
          copyBtn.classList.add('copied');
          setTimeout(() => {
            copyBtn.textContent = UI[lang].copyBrief;
            copyBtn.classList.remove('copied');
          }, 2200);
        });
        return;
      }
      const actionBtn = e.target.closest('[data-bot-action]');
      if (actionBtn) {
        const act = actionBtn.dataset.botAction;
        if (act === 'start_brief') {
          appendUserMsg(actionBtn.textContent.trim());
          startBriefFlow(actionBtn.dataset.botCat || null);
        } else if (act === 'pick_brief_cat') {
          appendUserMsg(actionBtn.textContent.trim());
          pickBriefCategory(actionBtn.dataset.botCat, actionBtn.textContent.trim());
        } else if (act === 'cancel_brief') {
          botState.briefMode = null;
          const lang = window.YYPortfolio?.getLang?.() || 'ar';
          appendBotMsg({
            lang,
            text: lang === 'ar' ? 'تم إلغاء تجهيز الطلب. تقدر تسألني أي سؤال تاني عن المعرض في أي وقت!' : 'Brief builder cancelled. Ask me anything else about the portfolio anytime!',
            chips: UI[lang].quickPrompts,
          });
        }
        return;
      }
      const queryBtn = e.target.closest('[data-bot-query]');
      if (queryBtn) {
        handleUserInput(queryBtn.dataset.botQuery);
      }
    });

    // External trigger buttons on the page (e.g. Contact CTA)
    document.addEventListener('click', (e) => {
      if (e.target.closest('[data-open-bot]')) {
        e.preventDefault();
        setOpen(true);
      }
    });

    // Escape closes bot panel if no modal is open
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && botState.open) {
        const modal = document.getElementById('modalBackdrop');
        const cmd = document.getElementById('cmdBackdrop');
        if ((!modal || modal.hidden) && (!cmd || cmd.hidden)) {
          setOpen(false);
        }
      }
    });

    window.YYPortfolio?.onLangChange?.(() => {
      syncChromeLang();
      if (botState.initialized && document.getElementById('yyBotMessages')?.children.length <= 1) {
        resetChat();
      }
    });
  }

  // Expose public opener
  window.YYPortfolioBot = { open: () => setOpen(true), close: () => setOpen(false), reset: () => resetChat() };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mountBot);
  } else {
    mountBot();
  }
})();
