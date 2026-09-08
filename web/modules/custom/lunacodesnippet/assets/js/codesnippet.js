/**
 * @file
 * Enables syntax highlighting via highlight.js.
 */

(function (hljs) {
  'use strict';

  // highlight.js v11 replaced initHighlightingOnLoad() with highlightAll().
  // The library JS is loaded in the footer, so the DOM is already parsed;
  // guard against the case where it is not, just to be safe.
  function highlight() {
    hljs.highlightAll();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', highlight);
  }
  else {
    highlight();
  }
})(hljs);
