import type { Config } from 'jest';

const config: Config = {
  preset: 'jest-expo',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native|@expo|expo(nent)?|@expo-google-fonts|@unimodules|unimodules|sentry-expo|native-base)',
  ],
};

export default config;
