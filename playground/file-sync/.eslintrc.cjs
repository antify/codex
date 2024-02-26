module.exports = {
	extends: [
		'@nuxt/eslint-config',
		'plugin:storybook/recommended'
	],
	rules: {
		'prefer-promise-reject-errors': 'error',
		'no-extra-semi': 0,
		'no-unused-vars': 'warn',
		'vue/html-self-closing': 0,
		'vue/singleline-html-element-content-newline': 0,
		"vue/component-name-in-template-casing": ["error", "PascalCase", {
			"registeredComponentsOnly": false
		}],
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/no-explicit-any': 'warn',
		'@typescript-eslint/no-misused-promises': 'error',
		'@typescript-eslint/no-unnecessary-type-assertion': 'error',
	},
};
