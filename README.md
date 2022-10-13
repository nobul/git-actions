# nobul/setup-env

Github action to setup environment

## Inputs

## `NOBUL_NPM_TOKEN`

**Required** Github npm token for @nobul registry

## `NODE`

Flag to install npm dependencies

## `always_auth`

**Required** Force npm to always require authentication when accessing the registry.

## Example usage

```yml
uses: nobul/setup-env@v1.0.0
with:
  NOBUL_NPM_TOKEN: NPM_TOKEN
  NODE: true
```
