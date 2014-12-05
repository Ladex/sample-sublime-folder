exports.comfig = {

	allScriptsTimeout: 99999,

	seleniumAddress:'http://localhost:444/wd/hub',

	capabilities:{
		'browserName':'chrome'
	},

	baseUrl:'http://localhost:9000',

	framework:'jasmine',

  // Spec patterns are relative to the current working directly when
  // protractor is called.
  specs: ['test/e2e/*.js'],
 
  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    isVerbose : true,
    includeStackTrace : true
  }
};