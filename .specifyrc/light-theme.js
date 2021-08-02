const path = require('path');
require('dotenv').config({ path: path.resolve(process.cwd(), '.env') });

const parsersConfig = [
  {
    name: 'kebabcasify',
    options: {
      keys: ['name'],
    },
  },
  {
    name: 'sort-by',
    options: {
      keys: ['name'],
    },
  },
  {
    name: 'to-css-custom-properties',
    options: {
      formatConfig: {
        selector: '.light-mode',
      },
    },
  },
];

module.exports = {
  repository: '@specifyapp/Light-Theme',
  personalAccessToken: process.env.SPECIFY_KEY,
  rules: [
    {
      name: 'Colors',
      path: 'assets/styles/01-utils/variables/colors/_light-theme.scss',
      filter: {
        types: ['color'],
      },
      parsers: parsersConfig,
    },
    {
      name: 'Gradients',
      path: 'assets/styles/01-utils/variables/gradients/_light-theme.scss',
      filter: {
        types: ['gradient'],
      },
      parsers: parsersConfig,
    },
  ],
};
