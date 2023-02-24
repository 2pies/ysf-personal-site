const translations = {
  siteName: 'Siu Fong Yeung',
  siteDescription: "Siu Fong Yeung's personal website",

  menu_home: 'Home',
  menu_work: 'Works',
  menu_performance: 'Performance',
  menu_exhibition: 'Exhibitions',
  menu_workshop: 'Workshops',
  menu_press: 'Press',
  menu_about: 'About',
  menu_contact: 'Contact',

  copyRight: 'Copyright © Siu Fong Yeung 2022. All Rights Reserved',
}

export async function getSiteData() {
  return translations
}

export async function getMenuList() {
  return [
    { label: translations.menu_home, path: '/' },
    { label: translations.menu_work, path: '/works' },
    { label: translations.menu_performance, path: '/performance' },
    // { label: translations.menu_exhibition, path: "/exhibitions" },
    // { label: translations.menu_workshop, path: "/workshops" },
    // { label: translations.menu_press, path: "/press" },
    { label: translations.menu_about, path: '/about' },
    { label: translations.menu_contact, path: '/contact' },
  ]
}
