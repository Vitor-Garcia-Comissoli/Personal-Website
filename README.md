# Personal Website
Repository with the code required to create my personal website hosted by GitHub Pages

## Website Link
You can open my personal website through the link below:

https://vitor-garcia-comissoli.github.io/Personal-Website/

## How to Update Text Content

The website supports **English (EN)** and **Portuguese (PT)** via a built-in translation system.  
All translatable text is stored in the `translations` object at the top of `js/main.js` — **not** in `index.html`.

When the page loads, JavaScript reads every element that has a `data-i18n`, `data-i18n-html`, or `data-i18n-placeholder` attribute and replaces its content with the matching value from `translations`. This means that **editing text directly in `index.html` will have no visible effect** on those elements — the JavaScript will overwrite it.

### Steps to update text

1. Open `js/main.js`.
2. Find the `translations` object near the top of the file.
3. Locate the key you want to change (e.g. `'hero-title'`, `'about-p1'`, etc.) inside the `en` block for English and/or the `pt` block for Portuguese.
4. Update the value string.
5. Save the file.

```js
// js/main.js
const translations = {
  en: {
    'hero-title': 'Your updated English title here',
    // ...
  },
  pt: {
    'hero-title': 'Seu título em português atualizado aqui',
    // ...
  }
};
```

### Attribute reference

| Attribute | Used for |
|---|---|
| `data-i18n` | Plain text content (safe; HTML is escaped) |
| `data-i18n-html` | Rich text content that may contain HTML tags (e.g. `<em>`, `<strong>`) |
| `data-i18n-placeholder` | `placeholder` attribute of `<input>` / `<textarea>` elements |

### Adding a new translatable element

1. Add `data-i18n="my-new-key"` (or the appropriate variant) to the HTML element in `index.html`.
2. Add a matching key/value pair to **both** the `en` and `pt` blocks in `js/main.js`.
3. Optionally set the English text as the default content of the element in `index.html` so it is visible when JavaScript is disabled.
