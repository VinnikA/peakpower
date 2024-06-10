const globals = require('globals');
const pluginJs = require('@eslint/js');
const pluginNode = require('eslint-plugin-node');
const pluginPromise = require('eslint-plugin-promise');

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  pluginPromise.configs.recommended,
  pluginNode.configs['recommended-module'],
];
