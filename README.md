# curiousstatistician.com

Source for [curiousstatistician.com](https://curiousstatistician.com), Tom
Goodale's site of statistics guides, courses, workshop materials, interactive
apps and blog. Built with [Quarto](https://quarto.org) and deployed to Netlify.

## Layout

```
site/        main Quarto website project
courses/     one Quarto book project per course (when added)
books/       one Quarto book project per book (when added)
shared/      navbar, footer, theme, head include and app modules used by every project
scripts/     build helpers
```

## Preview locally

Requires [Quarto](https://quarto.org/docs/get-started/) 1.10.18.

```
quarto preview site
```

To show axe-core accessibility results (WCAG 2.2 AA) in each page:

```
quarto preview site --profile a11y
```

## Licences

- Written content: [CC BY 4.0](LICENSE-content.md)
- Apps, app modules and build scripts: [MIT](LICENSE)
- Code examples in pages, example datasets and their scripts: [CC0 1.0](LICENSE-examples.md)

See also <https://curiousstatistician.com/licence/>.
