module.exports = {
  root: true,
  env: {
    node: true,
    browser: true
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        'vue/html-self-closing': 0,
        'vue/singleline-html-element-content-newline': 0,
        'vue/multi-word-component-names': 0,
        'vue/max-attributes-per-line': 0
      },
      extends: ['eslint:recommended', 'plugin:vue/vue3-recommended']
    },
    {
      files: ['*.js'],
      rules: {},
      extends: ['eslint:recommended']
    },
    {
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      rules: {
        '@typescript-eslint/no-unused-vars': ['error'],
        '@typescript-eslint/no-empty-function': 0
      },
      extends: ['plugin:@typescript-eslint/recommended']
    }
  ],
  extends: ['prettier']
}
