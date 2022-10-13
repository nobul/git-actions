# nobul/setup-env

Github action to setup environment

## Inputs

## `NPM_TOKEN`

**Required** Github npm registry token

## `NPM_REGISTRY_ORG`

**Required** Github npm registry org

## `NODE_VERSION`

**Required** Node version to install

## `INSTALL_NODE_DEPS`

Flag to install npm dependencies

## Example usage

```yml
uses: nobul/setup-env@v1.0.0
with:
  NPM_TOKEN: NPM_TOKEN
  NPM_REGISTRY_ORG: NPM_ORG
  NODE_VERSION: 17.1.0
  INSTALL_NODE_DEPS: false
```
