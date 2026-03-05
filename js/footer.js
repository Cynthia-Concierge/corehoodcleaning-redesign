(function() {
    var container = document.getElementById('footer-container');
    if (!container) return;
    fetch('/includes/footer.html')
        .then(function(r) { return r.text(); })
        .then(function(html) {
            container.innerHTML = html;
        })
        .catch(function() {
            container.innerHTML = '<footer class="footer"><div class="container"><p>Core Hood Cleaning &copy; 2026</p></div></footer>';
        });
})();
