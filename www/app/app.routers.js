RemindMe.config(['$routeProvider',
    
    function($routeProvider) {

        $routeProvider.
            when('/login', {
                templateUrl: 'app/components/login/loginView.html',
                controller: 'LoginController'
            }).
            when('/home', {
                templateUrl: 'app/components/home/homeView.html',
                controller: 'HomeController'
            }).
            when('/calendar', {
                templateUrl: 'app/components/calendar/calendarView.html',
                controller: 'CalendarController'
            }).
            when('/menu', {
                templateUrl: 'app/components/Menu/menuView.html',
                controller: 'MenuController'
            }).
            // when('/route2/:param', {
            //     templateUrl: 'angular-route-template-2.jsp',
            //     controller: 'RouteController'
            // }).
            otherwise({
                redirectTo: '/menu'
            });
    }

]);