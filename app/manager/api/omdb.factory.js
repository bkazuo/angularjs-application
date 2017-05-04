app.factory('omdbFactory', function($http) {

    var urlBase = 'http://www.omdbapi.com/';
    var dataFactory = {};
    var search = '';

    dataFactory.getMovie = function (search) {
        return $http.get(urlBase + "?t=" + search + "&tomatoes=true&plot=full");
    };

    dataFactory.getRelatedMovies = function (search) {
        return $http.get(urlBase + "?s=" + search);
    }

    return dataFactory;
});
