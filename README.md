# nobul/setup-env

Github action to setup environment for github actions runners

## Inputs

## `NPM_TOKEN`

**Required** Github npm registry token

## `NPM_REGISTRY_ORG`

**Required** Github npm registry org

## `NODE_VERSION`

Node version to install

## `PYTHON_VERSION`

Python version to install

## Example usage

```yml
uses: nobul/setup-env@v1.0.0
with:
  NPM_TOKEN: NPM_TOKEN
  NPM_REGISTRY_ORG: NPM_ORG
  NODE_VERSION: 17.1.0
  PYTHON_VERSION: 3.9.9
```
