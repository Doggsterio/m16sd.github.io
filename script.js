/* ============================================
   M16SD — Main Script
   ============================================ */

// --- Translations ---
const translations = {
  ru: {
    // Navigation
    'nav.about': 'О компании',
    'nav.products': 'Продукция',
    'nav.gallery': 'Галерея',
    'nav.advantages': 'Преимущества',
    'nav.contacts': 'Контакты',

    // Hero
    'hero.title': 'Оружейная сталь.<br>Искусство клинка.',
    'hero.subtitle': 'Производство клинков и холодного оружия из высококачественной стали. Ручная ковка, вековые традиции, современные технологии.',
    'hero.cta1': 'Каталог',
    'hero.cta2': 'Связаться',
    'hero.scroll': 'Прокрутите вниз',

    // About
    'about.label': 'О компании',
    'about.title': 'Традиции и мастерство',
    'about.text1': 'M16SD — предприятие, специализирующееся на производстве оружейной стали и изготовлении клинкового оружия. Мы объединяем вековые традиции кузнечного мастерства с современными металлургическими технологиями.',
    'about.text2': 'Каждое изделие создаётся вручную нашими мастерами, прошедшими многолетнее обучение. Мы используем только высококачественные марки стали и проверенные временем методы закалки.',
    'about.text3': 'Наша продукция — это не только функциональное оружие, но и произведение искусства, достойное коллекции.',
    'about.stat1': 'Лет опыта',
    'about.stat2': 'Изделий',
    'about.stat3': 'Мастеров',
    'about.stat4': 'Марок стали',

    // Products
    'products.label': 'Продукция',
    'products.title': 'Наши изделия',
    'products.dagger.name': 'Кинжалы',
    'products.dagger.desc': 'Классические и боевые кинжалы из дамасской и углеродистой стали с авторской отделкой.',
    'products.sword.name': 'Мечи',
    'products.sword.desc': 'Длинные и короткие мечи, выкованные по историческим образцам и авторским проектам.',
    'products.knife.name': 'Ножи',
    'products.knife.desc': 'Охотничьи, тактические и коллекционные ножи ручной работы с уникальным дизайном.',
    'products.steel.name': 'Заготовки стали',
    'products.steel.desc': 'Полосы и заготовки из дамасской стали для кузнецов и мастеров клинкового дела.',

    // Gallery
    'gallery.label': 'Галерея',
    'gallery.title': 'Наши работы',

    // Advantages
    'advantages.label': 'Преимущества',
    'advantages.title': 'Почему мы',
    'advantages.quality.title': 'Качество стали',
    'advantages.quality.desc': 'Используем только сертифицированные марки стали: дамасскую, углеродистую, нержавеющую.',
    'advantages.handmade.title': 'Ручная работа',
    'advantages.handmade.desc': 'Каждое изделие создаётся мастером вручную — от ковки до финальной полировки.',
    'advantages.custom.title': 'Индивидуальный заказ',
    'advantages.custom.desc': 'Изготовим изделие по вашему эскизу или разработаем уникальный дизайн вместе.',
    'advantages.delivery.title': 'Доставка',
    'advantages.delivery.desc': 'Надёжная упаковка и доставка по всей России и в страны СНГ курьерскими службами.',

    // Contacts
    'contacts.label': 'Контакты',
    'contacts.title': 'Свяжитесь с нами',
    'contacts.address.label': 'Адрес',
    'contacts.address.value': 'г. Москва, ул. Кузнецкий мост, д. 16, стр. 2',
    'contacts.phone.label': 'Телефон',
    'contacts.hours.label': 'Часы работы',
    'contacts.hours.value': 'Пн — Пт: 9:00 — 18:00',

    // Footer
    'footer.desc': 'Производство клинкового оружия и оружейной стали. Ручная ковка, дамасская сталь, индивидуальные заказы.',
    'footer.nav': 'Навигация',
    'footer.rights': 'Все права защищены.'
  },

  en: {
    // Navigation
    'nav.about': 'About',
    'nav.products': 'Products',
    'nav.gallery': 'Gallery',
    'nav.advantages': 'Advantages',
    'nav.contacts': 'Contacts',

    // Hero
    'hero.title': 'Weapon Steel.<br>The Art of the Blade.',
    'hero.subtitle': 'Manufacturing blades and edged weapons from premium steel. Hand forging, centuries-old traditions, modern technology.',
    'hero.cta1': 'Catalog',
    'hero.cta2': 'Contact Us',
    'hero.scroll': 'Scroll down',

    // About
    'about.label': 'About Us',
    'about.title': 'Tradition & Craftsmanship',
    'about.text1': 'M16SD is a company specializing in the production of weapon-grade steel and the crafting of bladed weapons. We combine centuries-old blacksmithing traditions with modern metallurgical technologies.',
    'about.text2': 'Each piece is handcrafted by our master smiths who have undergone years of training. We use only premium steel grades and time-proven tempering methods.',
    'about.text3': 'Our products are not only functional weapons but works of art worthy of any collection.',
    'about.stat1': 'Years of Experience',
    'about.stat2': 'Products Made',
    'about.stat3': 'Master Smiths',
    'about.stat4': 'Steel Grades',

    // Products
    'products.label': 'Products',
    'products.title': 'Our Collection',
    'products.dagger.name': 'Daggers',
    'products.dagger.desc': 'Classic and combat daggers made from Damascus and carbon steel with custom finishing.',
    'products.sword.name': 'Swords',
    'products.sword.desc': 'Long and short swords forged after historical models and original designs.',
    'products.knife.name': 'Knives',
    'products.knife.desc': 'Hunting, tactical, and collectible handmade knives with unique designs.',
    'products.steel.name': 'Steel Billets',
    'products.steel.desc': 'Damascus steel bars and billets for blacksmiths and blade craftsmen.',

    // Gallery
    'gallery.label': 'Gallery',
    'gallery.title': 'Our Work',

    // Advantages
    'advantages.label': 'Advantages',
    'advantages.title': 'Why Choose Us',
    'advantages.quality.title': 'Steel Quality',
    'advantages.quality.desc': 'We use only certified steel grades: Damascus, carbon, and stainless steel.',
    'advantages.handmade.title': 'Handcrafted',
    'advantages.handmade.desc': 'Every piece is handmade by a master — from forging to the final polish.',
    'advantages.custom.title': 'Custom Orders',
    'advantages.custom.desc': 'We craft pieces from your sketches or develop a unique design together.',
    'advantages.delivery.title': 'Delivery',
    'advantages.delivery.desc': 'Secure packaging and delivery across Russia and CIS countries via courier services.',

    // Contacts
    'contacts.label': 'Contacts',
    'contacts.title': 'Get in Touch',
    'contacts.address.label': 'Address',
    'contacts.address.value': 'Moscow, Kuznetsky Most st., 16, bld. 2',
    'contacts.phone.label': 'Phone',
    'contacts.hours.label': 'Working Hours',
    'contacts.hours.value': 'Mon — Fri: 9:00 AM — 6:00 PM',

    // Footer
    'footer.desc': 'Manufacturing bladed weapons and weapon-grade steel. Hand forging, Damascus steel, custom orders.',
    'footer.nav': 'Navigation',
    'footer.rights': 'All rights reserved.'
  }
};

// --- Current Language ---
let currentLang = localStorage.getItem('m16sd-lang') || 'ru';

// --- DOM Ready ---
document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initMobileMenu();
  initScrollAnimations();
  initHeaderScroll();
  initScrollToTop();
  initLightbox();
  initImageLoading();
  initSmoothNavigation();
});

// ============================================
// Language Switcher (i18n)
// ============================================
function initLanguage() {
  const btnRu = document.getElementById('lang-ru');
  const btnEn = document.getElementById('lang-en');

  applyLanguage(currentLang);

  btnRu.addEventListener('click', () => switchLanguage('ru'));
  btnEn.addEventListener('click', () => switchLanguage('en'));
}

function switchLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('m16sd-lang', lang);
  applyLanguage(lang);
}

function applyLanguage(lang) {
  const btnRu = document.getElementById('lang-ru');
  const btnEn = document.getElementById('lang-en');

  // Update button styles
  btnRu.classList.toggle('active', lang === 'ru');
  btnEn.classList.toggle('active', lang === 'en');

  // Tailwind dynamic classes
  if (lang === 'ru') {
    btnRu.classList.add('bg-gold-500', 'text-dark-900', 'font-semibold');
    btnRu.classList.remove('text-gray-400');
    btnEn.classList.remove('bg-gold-500', 'text-dark-900', 'font-semibold');
    btnEn.classList.add('text-gray-400');
  } else {
    btnEn.classList.add('bg-gold-500', 'text-dark-900', 'font-semibold');
    btnEn.classList.remove('text-gray-400');
    btnRu.classList.remove('bg-gold-500', 'text-dark-900', 'font-semibold');
    btnRu.classList.add('text-gray-400');
  }

  // Update HTML lang attribute
  document.documentElement.lang = lang;

  // Replace all text content
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      // Use innerHTML for keys that contain <br> tags
      if (translations[lang][key].includes('<br>')) {
        el.innerHTML = translations[lang][key];
      } else {
        el.textContent = translations[lang][key];
      }
    }
  });

  // Update page title
  document.title = lang === 'ru' ? 'M16SD — Оружейная сталь' : 'M16SD — Weapon Steel';
}

// ============================================
// Mobile Menu
// ============================================
function initMobileMenu() {
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  const links = menu.querySelectorAll('.mobile-nav-link');

  btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    menu.classList.toggle('hidden');
  });

  // Close menu on link click
  links.forEach(link => {
    link.addEventListener('click', () => {
      btn.classList.remove('active');
      menu.classList.add('hidden');
    });
  });

  // Close menu on outside click
  document.addEventListener('click', (e) => {
    if (!btn.contains(e.target) && !menu.contains(e.target)) {
      btn.classList.remove('active');
      menu.classList.add('hidden');
    }
  });
}

// ============================================
// Scroll Animations (Intersection Observer)
// ============================================
function initScrollAnimations() {
  const elements = document.querySelectorAll('.animate-on-scroll');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  elements.forEach(el => observer.observe(el));
}

// ============================================
// Header Scroll Effect
// ============================================
function initHeaderScroll() {
  const header = document.getElementById('header');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  // Header background on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Active nav link highlight
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active', 'text-gold-500');
      link.classList.add('text-gray-400');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active', 'text-gold-500');
        link.classList.remove('text-gray-400');
      }
    });
  });
}

// ============================================
// Scroll to Top
// ============================================
function initScrollToTop() {
  const btn = document.getElementById('scroll-top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 600) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ============================================
// Lightbox Gallery
// ============================================
function initLightbox() {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = document.getElementById('lightbox-close');
  const prevBtn = document.getElementById('lightbox-prev');
  const nextBtn = document.getElementById('lightbox-next');
  const galleryItems = document.querySelectorAll('.gallery-item');

  let currentIndex = 0;
  const sources = [];

  galleryItems.forEach((item, index) => {
    const src = item.getAttribute('data-src');
    sources.push(src);

    item.addEventListener('click', () => {
      currentIndex = index;
      openLightbox(src);
    });
  });

  function openLightbox(src) {
    lightboxImg.src = src;
    lightbox.classList.remove('hidden');
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.add('hidden');
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + sources.length) % sources.length;
    lightboxImg.src = sources[currentIndex];
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % sources.length;
    lightboxImg.src = sources[currentIndex];
  }

  closeBtn.addEventListener('click', closeLightbox);
  prevBtn.addEventListener('click', showPrev);
  nextBtn.addEventListener('click', showNext);

  // Close on background click
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;

    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showPrev();
    if (e.key === 'ArrowRight') showNext();
  });
}

// ============================================
// Image Loading
// ============================================
function initImageLoading() {
  const images = document.querySelectorAll('img[src]');

  images.forEach(img => {
    if (img.complete) {
      img.classList.add('loaded');
    } else {
      img.addEventListener('load', () => {
        img.classList.add('loaded');
      });
      img.addEventListener('error', () => {
        // Hide broken images gracefully
        img.style.display = 'none';
      });
    }
  });
}

// ============================================
// Smooth Navigation
// ============================================
function initSmoothNavigation() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href === '#') return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const headerHeight = document.getElementById('header').offsetHeight;
        const targetPosition = target.offsetTop - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}
