;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-shouji" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M801.593385 130.075651l0 766.727262c0 61.419923-62.44016 60.455967-62.44016 60.455967l-455.170122 0c-67.484041 0-61.442435-63.000932-61.442435-63.000932l0.343831-764.181273c0-64.285183 64.446865-63.333507 64.446865-63.333507l448.807198 0C803.599067 66.742144 801.593385 130.075651 801.593385 130.075651zM511.567653 895.851237c17.794289 0 32.229061-13.747109 32.229061-30.704333 0-16.956201-14.434772-30.71559-32.229061-30.71559-17.794289 0-32.229061 13.758366-32.229061 30.71559C479.338592 882.105151 493.773363 895.851237 511.567653 895.851237zM398.772591 97.457733c-8.885377 0-16.108902 6.879694-16.108902 15.351655 0 8.48424 7.223526 15.351655 16.108902 15.351655 8.908913 0 16.120159-6.867415 16.120159-15.351655C414.89275 104.336404 407.681504 97.457733 398.772591 97.457733zM576.014518 97.457733l-128.892708 0 0 30.70331 128.892708 0L576.014518 97.457733zM738.488076 158.865376l-453.839822 0 0 614.159318 453.839822 0L738.488076 158.865376z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-erweima" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M298.666667 85.333333l0 213.333333L85.333333 298.666667 85.333333 85.333333 298.666667 85.333333M384 0 0 0l0 384 384 0L384 0 384 0z"  ></path>' +
    '' +
    '<path d="M128 128l128 0 0 128-128 0 0-128Z"  ></path>' +
    '' +
    '<path d="M469.333333 0l85.333333 0 0 85.333333-85.333333 0 0-85.333333Z"  ></path>' +
    '' +
    '<path d="M469.333333 170.666667l85.333333 0 0 85.333333-85.333333 0 0-85.333333Z"  ></path>' +
    '' +
    '<path d="M469.333333 256l85.333333 0 0 85.333333-85.333333 0 0-85.333333Z"  ></path>' +
    '' +
    '<path d="M0 426.666667l85.333333 0 0 85.333333-85.333333 0 0-85.333333Z"  ></path>' +
    '' +
    '<path d="M85.333333 512l85.333333 0 0 85.333333-85.333333 0 0-85.333333Z"  ></path>' +
    '' +
    '<path d="M170.666667 426.666667l85.333333 0 0 85.333333-85.333333 0 0-85.333333Z"  ></path>' +
    '' +
    '<path d="M341.333333 426.666667l85.333333 0 0 85.333333-85.333333 0 0-85.333333Z"  ></path>' +
    '' +
    '<path d="M426.666667 426.666667l85.333333 0 0 85.333333-85.333333 0 0-85.333333Z"  ></path>' +
    '' +
    '<path d="M554.666667 426.666667l85.333333 0 0 85.333333-85.333333 0 0-85.333333Z"  ></path>' +
    '' +
    '<path d="M170.666667 512l85.333333 0 0 85.333333-85.333333 0 0-85.333333Z"  ></path>' +
    '' +
    '<path d="M853.333333 512l85.333333 0 0 85.333333-85.333333 0 0-85.333333Z"  ></path>' +
    '' +
    '<path d="M256 426.666667l85.333333 0 0 85.333333-85.333333 0 0-85.333333Z"  ></path>' +
    '' +
    '<path d="M298.666667 426.666667l85.333333 0 0 85.333333-85.333333 0 0-85.333333Z"  ></path>' +
    '' +
    '<path d="M341.333333 512l85.333333 0 0 85.333333-85.333333 0 0-85.333333Z"  ></path>' +
    '' +
    '<path d="M426.666667 512l85.333333 0 0 85.333333-85.333333 0 0-85.333333Z"  ></path>' +
    '' +
    '<path d="M469.333333 853.333333l85.333333 0 0 85.333333-85.333333 0 0-85.333333Z"  ></path>' +
    '' +
    '<path d="M469.333333 768l85.333333 0 0 85.333333-85.333333 0 0-85.333333Z"  ></path>' +
    '' +
    '<path d="M938.666667 512l85.333333 0 0 85.333333-85.333333 0 0-85.333333Z"  ></path>' +
    '' +
    '<path d="M853.333333 426.666667l85.333333 0 0 85.333333-85.333333 0 0-85.333333Z"  ></path>' +
    '' +
    '<path d="M768 512l85.333333 0 0 85.333333-85.333333 0 0-85.333333Z"  ></path>' +
    '' +
    '<path d="M597.333333 512l85.333333 0 0 85.333333-85.333333 0 0-85.333333Z"  ></path>' +
    '' +
    '<path d="M554.666667 512l85.333333 0 0 85.333333-85.333333 0 0-85.333333Z"  ></path>' +
    '' +
    '<path d="M640 853.333333l85.333333 0 0 85.333333-85.333333 0 0-85.333333Z"  ></path>' +
    '' +
    '<path d="M554.666667 768l85.333333 0 0 85.333333-85.333333 0 0-85.333333Z"  ></path>' +
    '' +
    '<path d="M640 682.666667l85.333333 0 0 85.333333-85.333333 0 0-85.333333Z"  ></path>' +
    '' +
    '<path d="M554.666667 682.666667l85.333333 0 0 85.333333-85.333333 0 0-85.333333Z"  ></path>' +
    '' +
    '<path d="M554.666667 512l85.333333 0 0 85.333333-85.333333 0 0-85.333333Z"  ></path>' +
    '' +
    '<path d="M810.666667 938.666667l85.333333 0 0 85.333333-85.333333 0 0-85.333333Z"  ></path>' +
    '' +
    '<path d="M640 938.666667l85.333333 0 0 85.333333-85.333333 0 0-85.333333Z"  ></path>' +
    '' +
    '<path d="M853.333333 682.666667l85.333333 0 0 85.333333-85.333333 0 0-85.333333Z"  ></path>' +
    '' +
    '<path d="M725.333333 853.333333l85.333333 0 0 85.333333-85.333333 0 0-85.333333Z"  ></path>' +
    '' +
    '<path d="M810.666667 768l85.333333 0 0 85.333333-85.333333 0 0-85.333333Z"  ></path>' +
    '' +
    '<path d="M725.333333 768l85.333333 0 0 85.333333-85.333333 0 0-85.333333Z"  ></path>' +
    '' +
    '<path d="M810.666667 682.666667l85.333333 0 0 85.333333-85.333333 0 0-85.333333Z"  ></path>' +
    '' +
    '<path d="M938.666667 938.666667l85.333333 0 0 85.333333-85.333333 0 0-85.333333Z"  ></path>' +
    '' +
    '<path d="M853.333333 853.333333l85.333333 0 0 85.333333-85.333333 0 0-85.333333Z"  ></path>' +
    '' +
    '<path d="M938.666667 768l85.333333 0 0 85.333333-85.333333 0 0-85.333333Z"  ></path>' +
    '' +
    '<path d="M853.333333 768l85.333333 0 0 85.333333-85.333333 0 0-85.333333Z"  ></path>' +
    '' +
    '<path d="M938.666667 682.666667l85.333333 0 0 85.333333-85.333333 0 0-85.333333Z"  ></path>' +
    '' +
    '<path d="M469.333333 512l85.333333 0 0 85.333333-85.333333 0 0-85.333333Z"  ></path>' +
    '' +
    '<path d="M682.666667 426.666667l85.333333 0 0 85.333333-85.333333 0 0-85.333333Z"  ></path>' +
    '' +
    '<path d="M597.333333 426.666667l85.333333 0 0 85.333333-85.333333 0 0-85.333333Z"  ></path>' +
    '' +
    '<path d="M554.666667 426.666667l85.333333 0 0 85.333333-85.333333 0 0-85.333333Z"  ></path>' +
    '' +
    '<path d="M298.666667 725.333333l0 213.333333L85.333333 938.666667l0-213.333333L298.666667 725.333333M384 640 0 640l0 384 384 0L384 640 384 640z"  ></path>' +
    '' +
    '<path d="M128 768l128 0 0 128-128 0 0-128Z"  ></path>' +
    '' +
    '<path d="M938.666667 85.333333l0 213.333333-213.333333 0L725.333333 85.333333 938.666667 85.333333M1024 0l-384 0 0 384 384 0L1024 0 1024 0z"  ></path>' +
    '' +
    '<path d="M768 128l128 0 0 128-128 0 0-128Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-suo" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M857.6 396.8l-76.8 0L780.8 256c0-147.2-121.6-249.6-268.8-249.6-147.2 0-268.8 102.4-268.8 249.6l0 134.4L166.4 390.4c-38.4 0-64 32-64 64l0 486.4c0 38.4 32 64 64 64l691.2 0c38.4 0 64-32 64-64L921.6 460.8C921.6 422.4 896 396.8 857.6 396.8L857.6 396.8zM550.4 716.8l0 108.8c0 6.4-6.4 6.4-6.4 6.4L486.4 832c-6.4 0-6.4-6.4-6.4-6.4l0-108.8C448 704 428.8 678.4 428.8 646.4c0-44.8 38.4-83.2 83.2-83.2 44.8 0 83.2 38.4 83.2 83.2C595.2 678.4 576 704 550.4 716.8L550.4 716.8zM678.4 396.8 345.6 396.8 345.6 249.6c0-76.8 76.8-140.8 166.4-140.8 89.6 0 166.4 64 166.4 140.8L678.4 396.8 678.4 396.8zM678.4 396.8"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-ren" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M969.2 940.6c0 39.4-33.8 71.4-75.6 71.4H138.4c-41.8 0-75.6-32-75.6-71.4 0-142.8 146-276.2 295.2-328.8-86.2-50.4-144.2-139.8-144.2-242.6v-71.4C213.8 140 349.2 12 516 12c166.8 0 302.2 128 302.2 285.8v71.4c0 102.8-58 192.2-144.2 242.6 149.2 52.6 295.2 186 295.2 328.8z" fill="#333333" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)