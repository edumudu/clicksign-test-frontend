module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',

  moduleNameMapper: {
    '^@\\/(.+)/(.*\\.svg)\\?inline$': '<rootDir>/src/$1/$2',
  },

  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.svg$': 'vue-jest',
  },
};
