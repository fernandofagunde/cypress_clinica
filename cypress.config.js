const { defineConfig } = require("cypress");
const { allureCypress } = require("allure-cypress/reporter");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:9090",
    setupNodeEvents(on, config) {
      allureCypress(on, config);
      return config;
    },
  },
});
