module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: [
    'plugin:vue/vue3-recommended',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],

  parserOptions: {
    ecmaVersion: 2020,
  },

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

    'vue/component-name-in-template-casing': ['error', 'PascalCase', {
      registeredComponentsOnly: false,
      ignores: [],
    }],

    'vue/custom-event-name-casing': ['error', 'camelCase'],

    'vue/new-line-between-multi-line-property': ['error', {
      minLineOfMultilineProperty: 2,
    }],

    'vue/no-boolean-default': ['error', 'no-default'],
    'vue/no-deprecated-v-is': 'error',
    'vue/no-duplicate-attr-inheritance': 'error',
    'vue/no-empty-component-block': 'error',

    'vue/no-reserved-component-names': ['error', {
      disallowVueBuiltInComponents: true,
      disallowVue3BuiltInComponents: true,
    }],

    'vue/no-static-inline-styles': ['error', {
      allowBinding: false,
    }],

    'vue/no-template-target-blank': ['error', {
      allowReferrer: true,
      enforceDynamicLinks: 'always',
    }],

    'vue/no-this-in-before-route-enter': 'error',

    'vue/no-unsupported-features': ['error', {
      version: '^3.1.0',
      ignores: [],
    }],

    'vue/no-unused-properties': ['error', {
      groups: ['props', 'data', 'computed', 'methods', 'setup'],
      deepData: true,
      ignorePublicMembers: false,
    }],

    'vue/no-useless-mustaches': ['error', {
      ignoreIncludesComment: false,
      ignoreStringEscape: false,
    }],

    'vue/no-useless-v-bind': ['error', {
      ignoreIncludesComment: false,
      ignoreStringEscape: false,
    }],

    'vue/padding-line-between-blocks': ['error', 'always'],
    'vue/require-name-property': 'error',

    'vue/v-on-event-hyphenation': ['error', 'always', {
      autofix: true,
      ignore: [],
    }],

    'vue/v-on-function-call': ['error', 'never'],
    'vue/valid-next-tick': 'error',
    'vue/array-bracket-newline': 'error',
    'vue/array-bracket-spacing': 'error',
    'vue/arrow-spacing': 'error',
    'vue/block-spacing': 'error',
    'vue/brace-style': 'error',
    'vue/comma-dangle': 'error',
    'vue/comma-spacing': 'error',
    'vue/dot-notation': 'error',
    'vue/eqeqeq': 'error',
    'vue/func-call-spacing': ['error', 'never'],

    'vue/key-spacing': ['error', {
      beforeColon: false,
      afterColon: true,
      mode: 'strict',
    }],

    'vue/no-extra-parens': 'error',
    'vue/no-irregular-whitespace': 'error',
    'vue/no-useless-concat': 'error',
    'vue/object-curly-spacing': ['error', 'always'],
    'vue/prefer-template': 'error',

    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'import/prefer-default-export': 'off',
  },

  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
};
