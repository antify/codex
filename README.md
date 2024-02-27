# Codex
Global general definitions how things work in the antify world

## Usage

Copy following files into you project root:
- `playground/.github/workflows/sync-codex-files.yml`
- `playground/.github/sync.yml`
- `playground/.editorconfig`
- `playground/.eslintrc.js`

Now if one of these files get changed in this repository, the workflow will 
detect it, sync the files and create a pull request in your repository.

## ESLint

Install the following packages to make the eslint configuration work:

```bash
pnpm i --save-dev @nuxt/eslint-config@latest eslint@latest eslint-plugin-storybook@latest
```
Add the following script to your `package.json`:

```
"scripts": {
	"lint": "eslint ."
}
```
