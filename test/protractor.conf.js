// An example configuration file for Chrome only
'use strict';

exports.config = {
  chromeOnly: true,
  chromeDriver: '../node_modules/protractor/selenium/chromedriver',

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Spec patterns are relative to the current working directly when
  // protractor is called.
  specs: ['./e2e/**/*.spec.js'],

  baseUrl: 'http://localhost:9000',

  rootElement: 'body',

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  }
};
