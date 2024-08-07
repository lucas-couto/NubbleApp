module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: '.',
        alias: {
          '@components': './src/components',
          '@hooks': './src/hooks',
          '@routes': './src/routes',
          '@screens': './src/screens',
          '@domain': './src/domain',
          '@theme': './src/theme',
          '@brand': './src/brand',
          '@api': './src/api',
          '@types': './src/types',
        },
      },
    ],
  ],
};
