describe('wellcome', () => {
	let driver;

	beforeEach(() => {
		angular.mock.module('appWrapper');
	});

	beforeEach(() => {
		driver = new testDrivers.WellcomeDriver();
		driver.when.created();
	});

	it('should show sign', () => {
		expect(driver.get.signText()).toBe('!')
	});
});