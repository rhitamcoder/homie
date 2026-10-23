# 🎮 Homie

**A gaming-console-style new tab page for your browser.**

Homie replaces your browser's default new tab page with a sleek, console-menu-inspired homepage. A live clock, a time-based greeting, custom wallpaper support, and a glowing shelf of shortcut tiles to your favorite streaming platforms, all wrapped in a dark, glassy aesthetic.

---

## ✨ Features

- 🕹️ **Console-style shortcut shelf** — large glowing tiles for YouTube, Netflix, JioHotstar, Hoichoi, and Twitch, each with its own brand color and hover glow
- ⏰ **Live clock** updating every second, with a full date display
- 👋 **Time-based greeting** that changes throughout the day (morning, afternoon, evening, night, and a late-night "Burning the midnight oil" message)
- 🖼️ **Custom wallpaper upload** — pick any image, it's automatically resized to fit and saved locally in your browser
- ↺ **One-click wallpaper reset**
- 🌑 **Dark overlay** keeps text readable over any wallpaper
- 📱 **Responsive layout** for smaller screens
- 🧩 **Chrome extension ready** — ships with a Manifest V3 config to override your new tab page directly

---

## 🛠️ Tech Stack

- **HTML5** — semantic markup
- **CSS3** — custom theming via CSS variables, glassmorphism, gradients, and hover glow effects, no framework
- **Vanilla JavaScript** — clock logic, greeting logic, and wallpaper handling
- **`localStorage`** — persists your chosen wallpaper between browser sessions
- **Chrome Extension Manifest V3** — overrides the browser's new tab page

---

## 📁 Project Structure

```
homie/
├── manifest.json     # Chrome extension config (Manifest V3, new tab override)
├── index.html        # Main page markup
├── script.js         # Clock, greeting, and wallpaper logic
├── style.css         # Stylesheet
└── README.md
```

---

## ▶️ Getting Started

### Using It as a Chrome Extension

1. Clone or download this repo
2. Open Chrome and go to `chrome://extensions`
3. Enable **Developer mode** (top-right toggle)
4. Click **Load unpacked** and select the project folder
5. Open a new tab, Homie will load automatically

### Using It as a Standalone Page

Just open `index.html` directly in any browser, no extension install required, though the new-tab override only works through the Chrome extension method above.

---

## 🧠 How It Works

- **Clock & greeting**: `updateClock()` runs every second via `setInterval`, formatting the current time and date, and picks a greeting message based on the current hour
- **Wallpaper upload**: when you select an image, it's drawn onto a canvas, resized to a max width of 1920px (to keep it well within `localStorage`'s ~5MB limit), converted to a compressed JPEG data URL, and saved under the key `homepage-wallpaper`
- **Wallpaper persistence**: on page load, the script checks `localStorage` for a saved wallpaper and applies it automatically, so your background survives across new tabs and browser restarts
- **Reset**: clears the saved wallpaper from `localStorage` and removes it from view

---

## 🎨 Customizing

Want different shortcuts or colors? Everything's easy to tweak:

- **Shortcuts**: edit the `<a class="tile ...">` blocks in `index.html`, add, remove, or relink any tile
- **Brand colors**: each tile's glow and gradient are set in `style.css` under the `/* Brand colors for each thumbnail */` section — change the `--glow` RGB values and `background` gradient to match a new tile
- **Theme**: the `:root` variables at the top of `style.css` control the base gradient background and text colors

---

## 📝 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.
