# Codex

Global general definitions how things work in the antify world

## Naming Conventions
* Events should always be written in present tense.
* Events should never start with `on`.

**Bad**
```ts
defineEmits([
  'onButtonClicked',
]);
```
**Good**
```ts
defineEmits([
  'buttonClick',
]);
```


## Usage

Copy following files into you project root:

- `playground/.github/workflows/sync-codex-files.yml`
- `playground/.github/sync.yml`
- `playground/.editorconfig`
- `playground/eslint.config.js`

Now if one of these files get changed in this repository, the workflow will
detect it, sync the files and create a pull request in your repository.

## ESLint

Install the following packages to make the eslint configuration work:

```bash
pnpm i --save-dev globals @eslint/js typescript-eslint eslint-plugin-vue @stylistic/eslint-plugin @nuxt/eslint-plugin eslint-plugin-storybook
```

Add the following script to your `package.json`:

```
"scripts": {
  "lint": "eslint ."
}
```
