RemindMe.config(['$routeProvider',
    
    function($routeProvider) {

        $routeProvider.
            when('/login', {
                templateUrl: 'app/components/Login/loginView.html',
                controller: 'LoginController'
            }).
            // when('/remserialLauncher', {
            //     templateUrl: 'app/components/RemserialLauncher/remserialLauncherView.html',
            //     controller: 'RemserialLauncherController'
            // }).
            // when('/route2/:param', {
            //     templateUrl: 'angular-route-template-2.jsp',
            //     controller: 'RouteController'
            // }).
            otherwise({
                redirectTo: '/login'
            });
    }

]);