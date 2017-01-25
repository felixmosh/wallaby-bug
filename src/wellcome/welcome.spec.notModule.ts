describe('wellcome', () => {
	beforeEach(() => {
		angular.mock.module('appWrapper');
	});

	it('should show sign', inject(($compile, $rootScope) => {
		const $scope = $rootScope.$new();
		const component = $compile('<wellcome></wellcome>')($scope);
		$scope.$apply();

		expect(component[0].querySelector('.sign').textContent).toBe('!')
	}));
});