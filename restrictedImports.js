exports.node = {
  paths: [
    {
      name: '@ethersproject/providers',
      message: 'Please only use Providers instantiated in constants/providers to improve traceability.',
      allowTypeImports: true,
    },
    {
      name: 'ethers',
      message: "Please import from '@ethersproject/module' directly to support tree-shaking.",
    },
  ],
  patterns: [
    {
      group: ['**/dist'],
      message: 'Do not import from dist/ - this is an implementation detail, and breaks tree-shaking.',
    },
  ],
}

exports.react = {
  paths: [
    ...exports.node.paths,
    {
      name: 'styled-components',
      message: 'Please import from styled-components/macro.',
    },
    {
      name: '@lingui/macro',
      importNames: ['t'],
      message: 'Please use <Trans> instead of t.',
    },
  ],
  patterns: exports.node.patterns,
}
