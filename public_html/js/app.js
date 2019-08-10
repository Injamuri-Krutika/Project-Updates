'use strict';

(function () {
    function init() {
        var router = new Router([
            new Route('home', 'home.html', true),
            new Route('papers', 'papers.html'),
            new Route('register', 'register.html'),
            new Route('code-references', 'codereferences.html'),
        ]);
    }
    init();
}());