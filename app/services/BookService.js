angular.module('bookApp')
    .factory('BookService', ['$http', function($http) {
        var baseUrl = "http://localhost:8080";

        return {
            search: function(name, author, yearFrom) {
                return $http.get(baseUrl + "/book/list/" + name + "/" + author + "/" + yearFrom)
                    .then(function(response) {
                        return response.data;
                    })
            },
            sendData: function(book) {
                return $http.post(baseUrl + "/book/put", book).then(function(response) {
                    return response.data;
                })
            },
            getAuthorsBookData: function() {
                return $http.get(baseUrl + "/book/author").then(function(response) {
                    return response.data;
                })
            },
            details: function(id) {
                return $http.get(baseUrl + "/book/details/" + id).then(function(response) {
                    return response.data;
                })
            },
            remove: function(id) {
                return $http.get(baseUrl + "/book/delete/" + id).then(function(response) {
                    return response.data;
                })
            }
        }
    }]);
