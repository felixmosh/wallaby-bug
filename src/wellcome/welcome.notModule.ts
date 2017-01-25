class WellcomeController {
	public sign;
	constructor() {
	}
	
	$onInit() {
		this.sign = '!';
	}
}


angular.module('app').component('wellcome', {
	controller: WellcomeController,
	template: '<div>This demo wallaby-webpack / wallaby bug <span class="sign">{{$ctrl.sign}}</span></div>',
	bindings: {
		sign: '<'
	}
});