RemindMe.controller("MenuController",

	function($scope, $location) {

		var 
			htmlContent = 'app/components/Menu/menuView.html',
			menuContent = [
				{ name:"login", text:"Login" },
				{ name:"home", text:"Home" },
				{ name:"calendar", text:"Calendar" }
			]
		;

		$scope.animateClass = "menuAnimation";

		this.html = htmlContent;

		this.content = menuContent;

		this.selected = 0;

		this.click = function (index) {
			this.selected = index;
			changeView(index);
		};

		function changeView (index) {
			$location.path(menuContent[index].name);
		}

	}

);