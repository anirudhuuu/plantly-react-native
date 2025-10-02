const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

// Ensure proper alignment for 16KB page sizes
config.resolver.platforms = ["ios", "android", "native", "web"];

// Optimize for 16KB page size compatibility
config.transformer.minifierConfig = {
  keep_fnames: true,
  mangle: {
    keep_fnames: true,
  },
};

module.exports = config;
