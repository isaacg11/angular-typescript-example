var MovieApp;
(function (MovieApp) {
    var Controllers;
    (function (Controllers) {
        var MovieController = (function () {
            function MovieController() {
                this.movies = [
                    { title: 'one', director: 'a' },
                    { title: 'two', director: 'b' },
                    { title: 'three', director: 'c' }
                ];
            }
            MovieController.prototype.pickColor = function (color) {
                console.log(color);
            };
            return MovieController;
        }());
        Controllers.MovieController = MovieController;
        angular.module("MyApp").controller("MovieController", MovieController);
    })(Controllers = MovieApp.Controllers || (MovieApp.Controllers = {}));
})(MovieApp || (MovieApp = {}));
//# sourceMappingURL=controller.js.map