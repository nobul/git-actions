# nobul/setup-registry

Github action to setup github npm registry access

## Inputs

## `NPM_TOKEN`

**Required** Github npm registry token

## `NPM_REGISTRY_ORG`

**Required** Github npm registry org

## Example usage

```yml
uses: nobul/setup-registry@main
with:
  NPM_TOKEN: NPM_TOKEN
  NPM_REGISTRY_ORG: NPM_ORG
```
