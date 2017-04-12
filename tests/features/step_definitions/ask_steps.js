var seleniumWebdriver = require('selenium-webdriver');
var {defineSupportCode} = require('cucumber');

defineSupportCode(function({setDefaultTimeout, Given, Then}) {
    setDefaultTimeout(60 * 1000);
    Given('I am on the Cucumber.js GitHub repository', function() {
        return this.driver.get('http://localhost:8983/ask-gradle-proj/');
    });

    Then('I should see {stringInDoubleQuotes}', function (text) {
        var xpath = "//*[contains(text(),'" + text + "')]";
        var condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
        return this.driver.wait(condition, 10000);
    });
});