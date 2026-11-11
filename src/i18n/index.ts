import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    tagline: 'Essays, notes, and dispatches in two languages.',
    nav: {
      home: 'Home',
      search: 'Search',
      about: 'About',
      bookmarks: 'Bookmarks',
    },
    home: {
      latest: 'Latest articles',
      featured: 'Featured',
      readMore: 'Read article',
      empty: 'No published articles yet.',
      all: 'All',
      filters: 'Filter by category',
    },
    article: {
      views: '{n} views',
      shares: '{n} shares',
      share: 'Share',
      related: 'Keep reading',
      copied: 'Link copied',
      bookmark: 'Bookmark',
      bookmarked: 'Saved',
      by: 'By',
    },
    comments: {
      title: 'Comments',
      empty: 'Be the first to comment.',
      name: 'Name',
      body: 'Comment',
      submit: 'Post comment',
      posted: 'Comment posted.',
    },
    reactions: {
      like: 'Like',
      love: 'Love',
      insightful: 'Insightful',
    },
    bookmarks: {
      title: 'Bookmarks',
      empty: 'No saved articles yet.',
      hint: 'Save articles from any story page to read them later on this device.',
    },
    author: {
      articles: 'Articles',
      empty: 'No published articles yet.',
    },
    search: {
      title: 'Search',
      placeholder: 'Search articles…',
      results: '{n} results',
      empty: 'No articles matched your query.',
      hint: 'Search titles and content in English and Russian.',
      category: 'Category',
      allCategories: 'All categories',
    },
    theme: {
      light: 'Light mode',
      dark: 'Dark mode',
    },
    widgets: {
      weather: 'Weather',
      rates: 'Exchange rates',
      loading: 'Loading…',
      error: 'Unavailable',
      yourLocation: 'Your location',
    },
    footer: {
      rights: 'All rights reserved.',
    },

    about: {
      title: 'About GP Media',
      body: `
    <p><strong>GP Media is an independent blog dedicated to technology, innovation, knowledge, and ideas.</strong></p>

    <p>The digital world is constantly evolving. New technologies emerge, industries transform, and the way we work, communicate, and live continues to change. GP Media is a place to explore these developments, share knowledge, and make complex topics easier to understand.</p>

    <h2>What We Cover</h2>
    <p>Our content explores a variety of topics, including:</p>

    <ul>
      <li><strong>Technology</strong> — the latest developments, digital trends, and innovations.</li>
      <li><strong>Software Development</strong> — programming, web technologies, engineering practices, and application architecture.</li>
      <li><strong>Artificial Intelligence</strong> — AI advancements, practical applications, and the future of intelligent systems.</li>
      <li><strong>Science &amp; Innovation</strong> — discoveries, emerging technologies, and ideas shaping tomorrow.</li>
      <li><strong>Business &amp; Digital World</strong> — digital transformation, startups, and the intersection of technology and business.</li>
      <li><strong>Opinions &amp; Insights</strong> — perspectives, analysis, and thought-provoking discussions.</li>
    </ul>

    <h2>Our Philosophy</h2>
    <p>We believe knowledge becomes more valuable when it is shared.</p>

    <p>Our goal is to create useful, engaging, and accessible content that encourages curiosity, critical thinking, and continuous learning.</p>

    <p>GP Media isn't just about keeping up with what's new. It's about understanding why it matters and what it could mean for the future.</p>

    <h2>Our Motto</h2>
    <p><strong>Explore Ideas. Understand Technology. Stay Curious.</strong></p>

    <p>Welcome to GP Media!</p>
  `,
    },
  },
  ru: {
    tagline: 'Эссе, заметки и репортажи на двух языках.',
    nav: {
      home: 'Главная',
      search: 'Поиск',
      about: 'О блоге',
      bookmarks: 'Закладки',
    },
    home: {
      latest: 'Последние статьи',
      featured: 'Избранное',
      readMore: 'Читать',
      empty: 'Пока нет опубликованных статей.',
      all: 'Все',
      filters: 'Фильтр по категории',
    },
    article: {
      views: '{n} просмотров',
      shares: '{n} репостов',
      share: 'Поделиться',
      related: 'Читайте также',
      copied: 'Ссылка скопирована',
      bookmark: 'В закладки',
      bookmarked: 'Сохранено',
      by: 'Автор',
    },
    comments: {
      title: 'Комментарии',
      empty: 'Оставьте первый комментарий.',
      name: 'Имя',
      body: 'Комментарий',
      submit: 'Отправить',
      posted: 'Комментарий опубликован.',
    },
    reactions: {
      like: 'Нравится',
      love: 'Любовь',
      insightful: 'Полезно',
    },
    bookmarks: {
      title: 'Закладки',
      empty: 'Пока нет сохранённых статей.',
      hint: 'Сохраняйте статьи со страницы материала, чтобы читать их позже на этом устройстве.',
    },
    author: {
      articles: 'Статьи',
      empty: 'Пока нет опубликованных статей.',
    },
    search: {
      title: 'Поиск',
      placeholder: 'Поиск статей…',
      results: '{n} результатов',
      empty: 'Ничего не найдено.',
      hint: 'Поиск по заголовкам и тексту на английском и русском.',
      category: 'Категория',
      allCategories: 'Все категории',
    },
    theme: {
      light: 'Светлая тема',
      dark: 'Тёмная тема',
    },
    widgets: {
      weather: 'Погода',
      rates: 'Курсы валют',
      loading: 'Загрузка…',
      error: 'Недоступно',
      yourLocation: 'Ваше местоположение',
    },
    footer: {
      rights: 'Все права защищены.',
    },
    about: {
      title: 'О GP Media',
      body: '<p><strong>GP Media — независимый блог о технологиях, инновациях, знаниях и идеях.</strong></p>\n' +
          '\n' +
          '<p>Цифровой мир постоянно меняется. Появляются новые технологии, трансформируются целые отрасли, меняются способы нашей работы, общения и повседневной жизни. GP Media — это пространство, где мы исследуем эти изменения, делимся знаниями и помогаем лучше понимать сложные и интересные темы.</p>\n' +
          '\n' +
          '<h2>О чём мы пишем</h2>\n' +
          '\n' +
          '<p>Наш блог охватывает различные направления:</p>\n' +
          '\n' +
          '<ul>\n' +
          '  <li><strong>Технологии</strong> — последние разработки, цифровые тенденции и технологические инновации.</li>\n' +
          '  <li><strong>Разработка программного обеспечения</strong> — программирование, веб-технологии, инженерные практики и архитектура приложений.</li>\n' +
          '  <li><strong>Искусственный интеллект</strong> — развитие AI, практическое применение и будущее интеллектуальных технологий.</li>\n' +
          '  <li><strong>Наука и инновации</strong> — научные открытия, перспективные технологии и идеи, формирующие будущее.</li>\n' +
          '  <li><strong>Бизнес и цифровой мир</strong> — цифровая трансформация, стартапы и взаимодействие технологий с бизнесом.</li>\n' +
          '  <li><strong>Мнения и аналитика</strong> — личные взгляды, обзоры, анализ и темы, заставляющие задуматься.</li>\n' +
          '</ul>\n' +
          '\n' +
          '<h2>Наша философия</h2>\n' +
          '\n' +
          '<p>Мы верим, что знания приобретают большую ценность, когда ими делятся.</p>\n' +
          '\n' +
          '<p>Наша цель — создавать полезный, интересный и доступный контент, который вдохновляет на любознательность, критическое мышление и постоянное развитие.</p>\n' +
          '\n' +
          '<p>GP Media — это не просто возможность следить за новинками. Это стремление понять, почему они важны и как могут повлиять на наше будущее.</p>\n' +
          '\n' +
          '<h2>Наш девиз</h2>\n' +
          '\n' +
          '<p><strong>Исследуй идеи. Понимай технологии. Оставайся любознательным.</strong></p>\n' +
          '\n' +
          '<p>Добро пожаловать в GP Media!</p>',
    },
  },
};

const saved = typeof localStorage !== 'undefined' ? localStorage.getItem('locale') : null;
const defaultLocale = saved || import.meta.env.VITE_DEFAULT_LOCALE || 'en';

export const i18n = createI18n({
  legacy: false,
  locale: defaultLocale,
  fallbackLocale: 'en',
  messages,
});

export type AppLocale = 'en' | 'ru';
