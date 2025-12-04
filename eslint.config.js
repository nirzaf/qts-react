import nextConfig from 'eslint-config-next';

const baseConfig = Array.isArray(nextConfig) ? nextConfig : [nextConfig];

export default [
  ...baseConfig,
  {
    ignores: ['dist', 'node_modules'],
    rules: {
      '@next/next/no-img-element': 'off',
      'import/no-anonymous-default-export': 'off',
      'react-hooks/exhaustive-deps': 'off',
      'react-hooks/error-boundaries': 'off',
      'react-hooks/purity': 'off',
      'react-hooks/set-state-in-effect': 'off',
      'react/no-unescaped-entities': 'off',
    },
  },
];
