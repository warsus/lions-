function flashLine() {
  var hash = window.location.hash;
  if (hash && hash.startsWith('#line')) {
    var name = hash.substring(1);
    var links = document.getElementsByName(name);
    if (links.length > 0) {
      var a = links[0];

      var prev = document.querySelectorAll('.flash-line');
      for (var i = 0; i < prev.length; i++) {
        prev[i].classList.remove('flash-line');
      }

      if (a.parentNode.classList && a.parentNode.classList.contains('flash-wrapper')) {
        var span = a.parentNode;
        span.classList.remove('flash-line');
        void span.offsetWidth; // trigger reflow
        span.classList.add('flash-line');
      } else {
        var span = document.createElement('span');
        span.className = 'flash-wrapper flash-line';
        a.parentNode.insertBefore(span, a);
        var curr = a;
        while (curr) {
          var next = curr.nextSibling;
          if (curr.nodeName === 'A' && curr !== a) {
            break;
          }
          span.appendChild(curr);
          curr = next;
        }
      }
    }
  }
}
window.addEventListener('hashchange', flashLine);

function setupCommentary() {
  try {
    var commentary = parent.frames['commentary'];
    if (commentary && commentary.document) {
      if (parent.commentaryClickListener) {
        commentary.document.removeEventListener('click', parent.commentaryClickListener);
      }
      parent.commentaryClickListener = function(e) {
        var a = e.target;
        while (a && a.tagName !== 'A') {
          a = a.parentNode;
        }
        if (a && a.target === 'source' && a.href) {
          var aBase = a.href.split('#')[0];
          var wBase = window.location.href.split('#')[0];
          if (aBase === wBase) {
            var hashIndex = a.href.indexOf('#');
            if (hashIndex !== -1) {
              var hash = a.href.substring(hashIndex);
              var name = hash.substring(1);
              var links = document.getElementsByName(name);
              if (links.length > 0) {
                var rect = links[0].getBoundingClientRect();
                e.preventDefault();
                history.pushState(null, null, hash);
                if (rect.top < 0 || rect.bottom > window.innerHeight) {
                  links[0].scrollIntoView({block: 'center'});
                }
                setTimeout(flashLine, 10);
              }
            }
          }
        }
      };
      commentary.document.addEventListener('click', parent.commentaryClickListener);
    }
  } catch (err) {}
}

window.addEventListener('load', function() {
  flashLine();
  setupCommentary();
  try {
    var frames = parent.document.getElementsByTagName('frame');
    for (var i = 0; i < frames.length; i++) {
      if (frames[i].name === 'commentary') {
        frames[i].addEventListener('load', setupCommentary);
        break;
      }
    }
  } catch (err) {}
});