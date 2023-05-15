javascript:(function() {
  var cssUrl = prompt('Enter the URL of a CSS file:');
  if (cssUrl) {
    var head = document.getElementsByTagName('head')[0];
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = cssUrl;
    head.appendChild(link);
  }
})();
