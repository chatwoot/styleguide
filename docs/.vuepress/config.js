module.exports = {
  base: '/',
  title: 'Styleguide',
  description: 'Best practices, patterns followed in Chatwoot',
  themeConfig: {
    nav: [
      { text: 'Github', link: 'https://github.com/chatwoot/chatwoot' }
    ],
    sidebar: [
      '/',
      {
        title: 'Design',
        collapsable: false,
        sidebarDepth: 1,
        children: [

          'design-guidelines/colors/'

        ]
      },
    ],
  },
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Styleguide',
      description: 'Best practices, patterns followed in Chatwoot',
    },
  }
}
