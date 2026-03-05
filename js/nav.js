(function() {
    var container = document.getElementById('nav-container');
    if (!container) return;
    fetch('/includes/nav.html')
        .then(function(r) { return r.text(); })
        .then(function(html) {
            container.innerHTML = html;
        })
        .catch(function() {
            container.innerHTML = '<nav class="navbar"><div class="container"><a href="/" class="logo">Core Services</a></div></nav>';
        });
})();
