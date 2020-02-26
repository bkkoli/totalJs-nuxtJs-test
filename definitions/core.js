const { Nuxt, Builder } = require('nuxt')
const options = require('../nuxt.config')
const nuxt = new Nuxt(options),
  builder = new Builder(nuxt)
builder.build()
MIDDLEWARE('nuxt', function($) {
  let { req, res } = $

  const constants = {
    regexp: {
      isPublicPathname: /^\/public\//,
    },
  }

  // public 접근의 경우
  if (constants.regexp.isPublicPathname.test(req.uri.pathname)) return $.next()

  // IE 미지원 페이지
  /* if (
    process.env.ALIOT_ALLOW_IE == 0 &&
    useragent.is(req.headers['user-agent']).ie
  )
    return res.redirect('/public/system/do-not-use-ie.html') */

  nuxt.render(req, res, $.next)
})
