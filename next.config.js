module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /chess.js/,
      parser: {
        amd: false,
      },
    });

    return config;
  },
};
