# @uniswap/eslint-config

Uniswap ESLint config for Typescript and React project with standards and best practices.

- Typescript and Jest support
- Seamless Prettier integration
- Separate environment for Node.js and React projects

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

or:

```json
{
  "extends": "@uniswap/eslint-config/react"
}
```

#### VSCode

If you're a VSCode user, consider installing the official [ESLing plugin](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and adding the following to your `.vscode/settings.json` config:

https://github.com/Uniswap/eslint-config/blob/4b95491cf0ea411db950174f21432ea7c9d60370/.vscode/settings.json#L1-L6

This will automatically run `eslint --fix` on save.
