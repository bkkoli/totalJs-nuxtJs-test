const fs = require('fs')
const path = require('path')

const readChunk = require('read-chunk')
const fileType = require('file-type')
const mimeTypes = require('mime-types')

exports.install = function() {
  const constants = {
    regex: {
      cdn: /^\/public\/.*\/?$/,
    },
  }

  const fn = {
    cdn: {
      isCdnPathname(pathname) {
        return constants.regex.cdn.test(pathname)
      },
      serveFile({ req, res }) {
        try {
          res.setHeader('Access-Control-Allow-Origin', CONF['access-origin'])
          res.setHeader(
            'Access-Control-Allow-Headers',
            'Content-Type, api_key, Authorization'
          )

          let pathname = req.uri.pathname
            .replace(/^\/public/, '')
            .replace(/\.\.\//g, '')
            .replace(/[\0\s]/g, '')

          let filepath = F.path.public(pathname)
          let extname = path.extname(filepath)

          // 바이너리로부터 파일 유형 확인
          let ft = fileType.fromFile(filepath)

          // 확인되지 않은 유형에 대해서 확장자로 검색
          if (!ft) {
            let mime = mimeTypes.lookup(extname)

            if (!mime) {
              // 확장자로도 검색이 되지 않는 경우 octet-stream으로 파일 전송
              res.setHeader('Content-Type', 'application/octet-stream')
              res.setHeader(
                'Content-Disposition',
                `attachment; filename="${U.controller.res.encodeFileName(
                  { controller: { req } },
                  path.basename(filepath)
                )}"`
              )
            } else {
              res.setHeader('Content-Type', mime)
            }
          } else {
            if (/\.svg$/i.test(extname))
              res.setHeader('Content-Type', 'image/svg+xml')
            else if (/\.json$/i.test(extname))
              res.setHeader('Content-Type', 'application/json')
            else res.setHeader('Content-Type', ft.mime)
          }

          let buffer = fs.readFileSync(filepath)
          res.setHeader('Content-Length', buffer.byteLength)

          res.send(buffer)
        } catch (err) {
          if (err.code === 'ENOENT') res.status(400).end()
          else res.status(500).send(err.message)
        }
      },
    },
  }

  FILE(
    function({ uri: { pathname } }) {
      return fn.cdn.isCdnPathname(pathname)
    },
    function(req, res) {
      fn.cdn.serveFile({ req, res })
    }
  )

  ROUTE(
    function(pathname) {
      return fn.cdn.isCdnPathname(pathname)
    },
    function() {
      fn.cdn.serveFile(this)
    }
  )

  CORS()
}
