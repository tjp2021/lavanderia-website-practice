# Willie's Lavanderia Branding Guide

## Logo

- **Type:** Simple text-based logo
- **Text:** "Willie's Lavanderia"
- **Font Recommendation:** Clean, modern, and friendly (e.g., Montserrat, Lato, or similar sans-serif)
- **Usage:**
  - White text on a green background for headers and hero sections
  - Green text on a white background for other uses

**Example (for reference):**

```
Willie's Lavanderia
```

---

## Color Palette

| Color Name | Hex      | Usage                        |
|------------|----------|------------------------------|
| Green      | #27ae60  | Primary, buttons, highlights |
| White      | #FFFFFF  | Background, text             |
| Light Gray | #F5F5F5  | Backgrounds, dividers        |

---

## CSS Example

```css
:root {
  --primary-green: #27ae60;
  --white: #ffffff;
  --light-gray: #f5f5f5;
}

.logo {
  font-family: 'Montserrat', 'Lato', Arial, sans-serif;
  font-weight: bold;
  color: var(--white);
  background: var(--primary-green);
  padding: 0.5em 1em;
  border-radius: 0.5em;
  display: inline-block;
  font-size: 2rem;
  letter-spacing: 0.05em;
}
```

---

## Notes
- Keep the design clean and uncluttered.
- Use green for CTAs and highlights to reinforce the brand.
- Ensure sufficient contrast for accessibility.
