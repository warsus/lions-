document.addEventListener('DOMContentLoaded', function () {
  var pattern = /\b\d{4}\b/g;
  var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  var textNodes = [];
  var node;

  while ((node = walker.nextNode())) {
    var parent = node.parentElement;
    if (!parent || /^(SCRIPT|STYLE|TEXTAREA)$/.test(parent.tagName)) continue;
    if (parent.closest('pre, .verbatim, .Verbatim, .lstlisting')) continue;
    pattern.lastIndex = 0;
    if (pattern.test(node.nodeValue)) textNodes.push(node);
  }

  textNodes.forEach(function (textNode) {
    var text = textNode.nodeValue;
    var fragment = document.createDocumentFragment();
    var insideLink = Boolean(textNode.parentElement.closest('a'));
    var last = 0;
    var match;

    pattern.lastIndex = 0;
    while ((match = pattern.exec(text))) {
      fragment.appendChild(document.createTextNode(text.slice(last, match.index)));

      var reference = document.createElement(insideLink ? 'span' : 'a');
      var target = '../all.html#line' + match[0];
      reference.className = 'line-reference';
      reference.textContent = match[0];
      reference.title = 'Open source line ' + match[0];
      reference.setAttribute('aria-label', 'Open source line ' + match[0]);

      if (insideLink) {
        reference.setAttribute('role', 'link');
        reference.setAttribute('tabindex', '0');
        reference.setAttribute('data-source-href', target);
      } else {
        reference.href = target;
        reference.target = 'source';
      }

      fragment.appendChild(reference);
      last = pattern.lastIndex;
    }

    fragment.appendChild(document.createTextNode(text.slice(last)));
    textNode.parentNode.replaceChild(fragment, textNode);
  });

  function openEmbeddedReference(event) {
    var reference = event.target.closest('[data-source-href]');
    if (!reference) return;
    if (event.type === 'keydown' && event.key !== 'Enter' && event.key !== ' ') return;
    event.preventDefault();
    event.stopPropagation();
    window.open(reference.getAttribute('data-source-href'), 'source');
  }

  document.addEventListener('click', openEmbeddedReference);
  document.addEventListener('keydown', openEmbeddedReference);
});
