/**
 * StickyScroll: a JavaScript module to stick a header when scrolled past
 * Author: Tamara Temple <tamouse@gmail.com>
 * Github: https://github.com/tamouse/sticky-scroll
 * Copyright: 2017 Tamara Temple Web Development
 * License: MIT <https://opensource.org/licenses/MIT>
 */

const StickyScroll = (function () {
  var self = {
    init: function(target) {
      self.targetEl = document.querySelector(target);
      self.stickyEl = self.cloneTarget(self.targetEl);
      self.fromTop = self.offsetInDocument(self.targetEl);
      document.addEventListener('scroll', self.updateScroll);
      self.updateScroll();
    },
    cloneTarget: function(tgt) {
      var cln = tgt.cloneNode(true);
      cln.id = '';
      cln.style.top = 0;
      cln.style.width = tgt.offsetWidth + "px";
      cln.style.position = 'fixed';

      // hide the clone at the start
      cln.style.display = 'none';
      // attach to document right after tgt. See: https://jsfiddle.net/tamouse/m74nx2e5/
      tgt.parentNode.insertBefore(cln, tgt.nextSibling);
      return cln;
    },
    updateScroll: function () {
      if (document.body.scrollTop > self.fromTop ) {
        self.stickyEl.style.display = self.targetEl.style.display;
      } else {
        self.stickyEl.style.display = 'none';
      }
    },
    offsetInDocument: function(el) {
      // See https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
      var rect = el.getBoundingClientRect();
      return rect.top + window.scrollY;
    }
  };

  return self;
})();
