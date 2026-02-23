# Build Plan – Dark Mode Feature

This plan breaks down the steps I took to implement the dark mode toggle for the Velvet Comb website.

1. **Define CSS variables**  
   - Created `--background`, `--text`, and `--accent` in `styles.css` for light and dark themes.

2. **Apply variables to key elements**  
   - Applied the CSS variables to `body`, `header`, `footer`, buttons, and text in `styles.css`.

3. **Write toggleTheme() function**  
   - Wrote a JavaScript function in `script.js` that switches the `data-theme` attribute on `<html>` between "light" and "dark".

4. **Add dark mode toggle button**  
   - Added a button in the header of `index.html` with ID `dark-mode-toggle`.

5. **Connect button to function**  
   - Added an event listener in `script.js` so clicking the button calls `toggleTheme()`.  
   - Verified ID matches and script placement is correct.

6. **Test and review functionality**  
   - Opened the site in browser, clicked button, confirmed dark mode applied correctly.  
   - Self-review: checked edge cases (missing ID, DOM loading issues) and confirmed no errors.
