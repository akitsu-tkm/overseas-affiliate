document.addEventListener('DOMContentLoaded', function () {
  // Wrap wide tables so they scroll horizontally on narrow screens
  // instead of breaking the page layout.
  document.querySelectorAll('.review-body table').forEach(function (table) {
    var wrapper = document.createElement('div');
    wrapper.className = 'table-scroll';
    table.parentNode.insertBefore(wrapper, table);
    wrapper.appendChild(table);
  });

  // Build a table of contents from the article's h2 headings.
  var body = document.querySelector('.review-body');
  if (body) {
    var headings = Array.prototype.filter.call(body.querySelectorAll('h2'), function (h) {
      return !!h.id;
    });
    if (headings.length >= 3) {
      var toc = document.createElement('nav');
      toc.className = 'toc';
      toc.setAttribute('aria-label', 'Table of contents');

      var title = document.createElement('p');
      title.className = 'toc-title';
      title.textContent = 'On this page';
      toc.appendChild(title);

      var list = document.createElement('ul');
      headings.forEach(function (h) {
        var li = document.createElement('li');
        var a = document.createElement('a');
        a.href = '#' + h.id;
        a.textContent = h.textContent;
        li.appendChild(a);
        list.appendChild(li);
      });
      toc.appendChild(list);

      body.parentNode.insertBefore(toc, body);
    }
  }
});
