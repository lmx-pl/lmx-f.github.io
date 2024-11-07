(function () {
  var SCRIPT_ID = '__lumex_url_replacer_v4';
  if (window[SCRIPT_ID]) {
    return;
  }
  window[SCRIPT_ID] = true;

  var actual = 'https://p.lumex.pw';
  var re = /^(https?:\/\/)?([\w-]+\.)?lumex\.(ink|me|bar)(\/.*)?$/i;
  var actualRe = new RegExp(
    '^' + actual.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '(/.*)?$',
    'i'
  );

  function replaceFrameSrc(frame) {
    var src = frame.src || (frame.dataset && frame.dataset.src);
    if (src && !actualRe.test(src)) {
      var match = src.match(re);
      if (match) {
        var protocol = match[1] || 'https://';
        var path = match[4] || '';
        var newDomain = actual.replace(/^https?:\/\//, '');
        var newSrc = protocol + newDomain + path;

        if (frame.src) {
          frame.src = newSrc;
        }
        if (frame.dataset && frame.dataset.src) {
          frame.dataset.src = newSrc;
        }
      }
    }
  }

  function replace() {
    var frames = document.body
      ? document.body.getElementsByTagName('iframe')
      : [];
    for (var i = 0; i < frames.length; i++) {
      replaceFrameSrc(frames[i]);
    }
  }

  function init() {
    replace();
    var observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        mutation.addedNodes.forEach(function (node) {
          if (node.tagName === 'IFRAME') {
            replaceFrameSrc(node);
          }
        });
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
