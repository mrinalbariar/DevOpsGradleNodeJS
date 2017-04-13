
var seleniumWebdriver = require('selenium-webdriver');
var phantomjs_exe = require('phantomjs').path;
var customPhantom = seleniumWebdriver.Capabilities.phantomjs();
customPhantom.set("phantomjs.binary.path", phantomjs_exe);

var {defineSupportCode} = require('cucumber');

function CustomWorld() {
    this.driver = new seleniumWebdriver.Builder()
       	.withCapabilities(customPhantom)
        .build();
}

defineSupportCode(function({setWorldConstructor}) {
    setWorldConstructor(CustomWorld)
});
