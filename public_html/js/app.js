'use strict';

(function () {
    function init() {
        var router = new Router([
            new Route('home', 'home.html', true),
            new Route('papers', 'papers.html'),
            new Route('code-references', 'code-references.html'),
            new Route('tips-tricks', 'tips-tricks.html')
        ]);
    }
    init();
}());