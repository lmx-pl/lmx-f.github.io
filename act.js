(function () {
  var SCRIPT_ID = '__lumex_url_replacer_v4';

  if (window[SCRIPT_ID]) {
    return;
  }

  window[SCRIPT_ID] = true;

  var actual = 'https://p.lumex.bar',
    re = /^(https?:\/\/)?([\w-]+\.)?lumex\.(ink|me|bar)(\/.*)?$/i,
    actualRe = new RegExp(
      '^' + actual.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '(/.*)?$',
      'i'
    ),
    delay = 10000,
    max = 1000 * 60 * 60 * 24,
    dry = [];

  function replace() {
    if (delay < max) delay++;
    setTimeout(replace, delay);
    var old,
      src,
      ds,
      i = findFrame(function (f) {
        src = f.src || (f.dataset && f.dataset.src);
        if (src) {
          if (actualRe.test(src)) {
            return false;
          }

          old = src.match(re);
          if (old) {
            var protocol = old[1] || 'https://';
            var newDomain = actual.replace(/^https?:\/\//, '');
            var path = old[4] || '';

            var newSrc = protocol + newDomain + path;

            if (f.src) {
              f.src = newSrc;
            }
            if (f.dataset && f.dataset.src) {
              f.dataset.src = newSrc;
            }
            return true;
          }
        }
        return false;
      });

    if (!i) {
      return;
    }
  }

  function findFrame(fn) {
    if (document.body) {
      var frames = document.body.getElementsByTagName('iframe');
      for (var i = 0; i < frames.length; i++) {
        if (fn(frames[i])) {
          return frames[i];
        }
      }
    }
    return null;
  }

  replace();
  setInterval(replace, 5000);
})();
