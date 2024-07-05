const path = require('path');

module.exports = {
  resolve: {
    fallback: {
      "crypto": require.resolve("crypto-browserify")
    }
  },
  // Other webpack configurations can be added as needed
};