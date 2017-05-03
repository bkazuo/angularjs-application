app.config(function($routeProvider, $locationProvider) {

    $locationProvider.hashPrefix('');

    $routeProvider
    .when("/", {
        templateUrl : "app/components/home/home.html",
        controller : "homeController"

    })
    .when("/basic-examples", {
        templateUrl : "app/components/basicExamples/basicExamples.html",
        controller : "basicExamplesController"
    })
});