"use strict"
;(self.webpackChunkgatsby_babel = self.webpackChunkgatsby_babel || []).push([
  [883],
  {
    429: function (e, t, a) {
      a.r(t)
      a(7294)
      t.default = function () {
        var e = useGet(function e(t, a) {
          return _regeneratorRuntime.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (e.next = 2),
                    axios.get(
                      "https://official-joke-api.appspot.com/random_joke"
                    )
                  )
                case 2:
                  return e.sent.data, e.abrupt("return", a.json(listOfUsers))
                case 4:
                case "end":
                  return e.stop()
              }
          }, e)
        }, [])
        e.data, e.loading
      }
    },
  },
])
//# sourceMappingURL=component---src-pages-404-js-4114de1b54f6c1061350.js.map
