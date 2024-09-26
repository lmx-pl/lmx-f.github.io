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
      );

  function replace() {
    var frames = document.body ? document.body.getElementsByTagName('iframe') : [];
    for (var i = 0; i < frames.length; i++) {
      var f = frames[i];
      var src = f.src || (f.dataset && f.dataset.src);
      if (src && !actualRe.test(src)) {
        var old = src.match(re);
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
        }
      }
    }
  }

  function init() {
    replace();
    var observer = new MutationObserver(replace);
    observer.observe(document.body, { childList: true, subtree: true });
    setInterval(replace, 10000);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
