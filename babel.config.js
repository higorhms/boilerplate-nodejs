module.exports = {
  presets: [
      ['@babel/preset-env', { targets: { node: 'current' } }],
      '@babel/preset-typescript'
  ],
  plugins: [
      ['module-resolver', {
          alias: {
              "@domains": "./src/domains",
              "@main": "./src/main",
              "@data": "./src/data",
              "@infra": "./src/infra",
              "@presentation": "./src/presentation",
          }
      }],
      "babel-plugin-transform-typescript-metadata", ["@babel/plugin-proposal-decorators", { "legacy": true }],
      ["@babel/plugin-proposal-class-properties", { "loose": true }]
  ],
}