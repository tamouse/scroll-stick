/**
 * StickyScroll: a JavaScript module to stick a header when scrolled past
 * Author: Tamara Temple <tamouse@gmail.com>
 * Github: https://github.com/tamouse/sticky-scroll
 *
 * See: https://jsfiddle.net/tamouse/m74nx2e5/
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
      if (tgt.id) {
        cln.id = tgt.id + '-sticky-clone';
      } else {
        cln.id = 'sticky-clone';
      }
      // hide the clone
      //cln.style.visibility = 'hidden';
      cln.style.display = 'none';
      cln.style.top = 0;
      cln.style.width = tgt.offsetWidth + "px";
      // attach to document right after tgt
      tgt.parentNode.insertBefore(cln, tgt.nextSibling);
      return cln;
    },
    updateScroll: function () {
      if (document.body.scrollTop > self.fromTop ) {
        self.stickyEl.style.position = 'fixed';
        //self.stickyEl.style.visibility = 'visible';
        self.stickyEl.style.display = self.targetEl.style.display;
      } else {
        self.stickyEl.style.position = 'static';
        //self.stickyEl.style.visibility = 'hidden';
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
