import type { StorybookConfig } from '@storybook/react-vite';
import path from 'path';
import { loadConfigFromFile, mergeConfig } from 'vite';

const config: StorybookConfig = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../lib/**/*.mdx',
    '../lib/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  staticDirs: ['../lib/assets/img'],
  async viteFinal(config: any) {
    const {
      // @ts-ignore
      config: { resolve },
      // @ts-ignore
    } = await loadConfigFromFile(path.resolve(__dirname, '../vite.config.ts'));
    return mergeConfig(config, { resolve });
  },
};
export default config;
