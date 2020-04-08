const request = require('request');

module.exports = function(uri, feature, scenario, result) {
  const sessionId = browser.sessionId;
  const status = result.status === "passed" ? "Pass" : "Fail";

  return new Promise((resolve, fulfill) => {
    const result = {error: true, message: ""};
    request({
        method: "PUT",
        uri: "https://crossbrowsertesting.com/api/v3/selenium/" + sessionId,
        body: {action: "set_score", score: status},
        json: true,
      },
      function(error, response, body) {
        if (error) {
          result.message = error;
        } else if (response.statusCode !== 200) {
          result.message = body;
        } else {
          result.error = false;
          result.message = "success";
        }
      })
      .auth(process.env.CBT_USERNAME, process.env.CBT_AUTHKEY);
    result.error ? fulfill(status) : resolve(status);
  });};
