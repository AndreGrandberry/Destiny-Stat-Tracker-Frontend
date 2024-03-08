export default {
    testEnvironment: 'node',
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
    extensionsToTreatAsEsm: ['.jsx', '.js', '.mjs'],
    globals: {
      'import-meta': true,
    },
  };
  