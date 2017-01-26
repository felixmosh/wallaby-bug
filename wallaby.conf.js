const wallabyWebpack = require('wallaby-webpack');
const webpack = require('webpack');
const webpackPostprocessor = wallabyWebpack({
	entryPatterns: [
		'src/appWrapper.js',
		'src/**/*.spec.notModule.js'
	],
        preserveEntryFileLoadOrder: true,
	module: {
		plugins: [
			new webpack.IgnorePlugin(/externals/)
		],
		loaders: [
			{
				test: /\.html$/,
				loader: 'html-loader'
			}, {
				test: /\.scss$/,
				loader: 'null-loader'
			}
		]
	},
	externals: {
		"angular": "angular"
	}
});

module.exports = function () {
	return {
		files: [
			{pattern: 'node_modules/angular/angular.js', instrument: false},
			{pattern: 'node_modules/angular-mocks/angular-mocks.js', instrument: false},
			{pattern: 'src/app.ts', load: false},
			{pattern: 'src/appWrapper.ts', load: false},
      'src/**/*.notModule.ts',
			{pattern: 'src/**/*.spec.notModule.ts', ignore: true}
		],
		tests: [
			{pattern: 'src/**/*.spec.notModule.ts', load: false}
		],
		debug: true,
		testFramework: 'jasmine',
		postprocessor: webpackPostprocessor,
		bootstrap: function () {
			window.__moduleBundler.loadTests();
		}
	}
};
