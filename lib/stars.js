module.exports = stars

var npm = require("./npm.js")
  , registry = npm.registry
  , log = require("npmlog")

function stars (args, cb) {

  var showstars = function showstars(er, data) {

    if (er) {
      return cb(er);
    }

    if (data.rows.length === 0) {
      log.warn('stars', 'user has not starred any packages.')
    }
    else {
      data.rows.forEach(function(a) {
        console.log(a.value)
      })
    }
    cb()
  }

  registry.stars(
    encodeURIComponent(
      args.length === 1
      ? args[0]
      : npm.config.get("username")
    ),
    showstars
  )
}
