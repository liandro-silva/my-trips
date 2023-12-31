// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')
const isProd = process.env.NODE_ENV === 'production'

// TODO: temporarily disabled
// module.exports = withPWA({
//   pwa: {
//     dest: 'public',
//     disable: !isProd
//   },
//   images: {
//     domains: ['media.graphcms.com', 'media.graphassets.com']
//   }
// })

module.exports = {
  images: {
    domains: ['media.graphcms.com', 'media.graphassets.com']
  }
}

