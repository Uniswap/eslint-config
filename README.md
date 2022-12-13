# @uniswap/eslint-config

Uniswap's ESLint config to enforce coding standards and best practices.

- TypeScript and Jest support
- Seamless Prettier integration
- Separate environments for Node.js and React

## Installation

```bash
yarn add --dev eslint @uniswap/eslint-config
```

## Usage

```json
{
  "extends": "@uniswap"
}
```

> This will extend ESLint config for Node.js 

or:

```json
{
  "extends": "@uniswap/eslint-config/react"
}
```

#### VSCode

If you're a VSCode user, consider installing the official [ESLint plugin](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and copying [`./.vscode/settings.json`](.vscode/settings.json#L1-L6) to your own `.vscode/settings.json` configuration file. This will automatically run `eslint --fix` on save.
