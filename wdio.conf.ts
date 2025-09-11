exports.config = {
  runner: 'local',
  specs: ['./features/**/*.feature'],
  framework: 'cucumber',
  cucumberOpts: {
    require: ['./steps/*.js'],
    timeout: 60000
  },
  services: ['appium'],
  capabilities: [{
  "platformName": "Android",
  "appium:deviceName": "emulator-5554",
  "appium:app": "//Users//mac//Documents//danilo//desafio.apk",
  "appium:automationName": "UiAutomator2",
  "appium:noReset": false,
  "appium:osName": "Mac"
}]
};
