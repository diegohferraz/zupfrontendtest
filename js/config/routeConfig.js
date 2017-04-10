angular.module("inspireIt").config(function ($routeProvider) {
	$routeProvider.when("/home", {
		templateUrl: "view/home.html",
		controller: "inspireItCtrl"
	});
	$routeProvider.when("/details", {
		templateUrl: "view/details.html",
		controller: "inspireItCtrl"
	});
	$routeProvider.otherwise({redirectTo: "/home"});
});