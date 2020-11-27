import theme from '@nuxt/content-theme-docs'

export default theme({
  docs: {
    primaryColor: '#00CD81'
  },
  loading: { color: '#00CD81' },
  i18n: {
    locales: () => [{
      code: 'ja',
      iso: 'ja_JP',
      name: 'Japanese'
    }],
    defaultLocale: 'ja'
  }
})
