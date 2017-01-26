namespace testDrivers {
	export class WellcomeDriver {
		public element;

		constructor() {

		}

		public when = {
			created: () => {
				angular.mock.inject(($compile, $rootScope) => {
					const $scope = $rootScope.$new();
					this.element = $compile('<wellcome></wellcome>')($scope);
					$scope.$apply();
				});
			}
		};

		public get = {
			signText: () => {
				return this.element[0].querySelector('.sign').textContent;
			}
		};
	}
}