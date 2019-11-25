const isProd = process.env.NODE_ENV === 'production'
module.exports = {
  assetPrefix: isProd
    ? 'https://cdn.jsdelivr.net/gh/innei/year-summary@gh-pages/2020'
    : '',
}
