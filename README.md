# Silicon Brief Link Tree

A lightweight, self-hosted link-in-bio page with no framework, no build step, and no paid provider lock-in.

## Edit Your Details

- Update profile, social, and button links in `app.js`.
- Replace placeholder logos by adding image paths to the `image` fields in `app.js`.
- Social icons are inline SVGs in `app.js`; add more to the `icons` object if you add another platform.
- Replace the profile placeholder by setting `profile.avatar` in `app.js`.
- Tune colors, spacing, and card styles in `styles.css`.
- The title uses the self-hosted Fredoka font in `assets/fonts`.

Example image path:

```js
{ title: "Verdent", href: "https://example.com", image: "assets/verdent.png", initials: "VE" }
```

## Preview

Open `index.html` directly in your browser. No server is required.
