
module.exports = function(uri, feature, scenario, result, sourceLocation) {
    if (result.exception !== undefined) {
        browser.takeScreenshot();
    }
};
