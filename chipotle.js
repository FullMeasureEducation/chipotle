module.exports = {
  'Demo test Google' : function (browser) {
    browser
      .url('https://order.chipotle.com/Invitational/Index/122')
      .waitForElementVisible('body', 1000)
      .waitForElementVisible("input[name='Email']", 1000)
      .setValue("input[name='Email']", 'ermail@gmail.com')
      .setValue("input[name='Password']", 'somepassword')
      .click('#logonButton')
      .waitForElementVisible('#addNewEmail', 5000)
      .click('#NotifyAllSubmitted')
      .click('#inviteSelectAll')
        .pause(5000)
      .click('.submit')
      .waitForElementVisible('#createAnotherMeal', 15000)
      .pause(1000)
      .end();
  }
};