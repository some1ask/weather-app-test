const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  'stylelint-config-standard-scss', 
    'stylelint-config-recommended-vue', 
    'stylelint-config-recess-order',
    'stylelint-config-css-modules',
    'stylelint-config-prettier'
});
