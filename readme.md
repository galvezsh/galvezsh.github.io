# 🌐 DigitalVoid

**DigitalVoid** is a modular and multilingual web project built entirely with **HTML**, **CSS**, and **vanilla JavaScript**, using a custom runtime rendering engine and a component-oriented architecture.

Unlike frameworks like React or Vue, DigitalVoid relies on a fully native and framework-free approach, using JavaScript classes to dynamically generate content, support multiple languages, and simulate reusable components.

---

## ⚙️ How It Works

Each page is represented by its own folder (e.g. `/home/`, `/about/`, `/projects/homelab/`).
Inside each folder there’s a minimal `index.html` that acts as an entry point. The corresponding JS file (`home.js`, `about.js`, etc.) then:

1. Loads the **`engine.js`** file, which acts as the **component renderer and entry point**.
2. Loads the **multilanguage manager** (`strings.js`), which selects the locale automatically based on a **browser cookie**.
3. Dynamically builds the page by rendering imported UI components, each defined in its own file under `/js/componentes`.


### ✅ What's New

- Pages are now organized into **folders with their own** `index.html`, allowing clean URLs like `/home/`, `/about/`, `/projects/homelab/`.
- All UI components (e.g., Navbar, Footer, Toast) are in separate JavaScript files inside `/js/components/`. `engine.js` no longer contains full component definitions — it now bootstraps rendering and connects logic.
- No need to manually duplicate HTML markup for components. Simply declare an element placeholder (e.g. `<footer></footer>`) and the engine will render it.
- Cookies are now explicitly set with `path=/`, so locale, theme, and first-visit state are shared across all pages.

---

## 📁 Project Structure

```plaintext
DigitalVoid/
├── about/
│   └── index.html
├── projects/
│   ├── index.html
│   ├── flipper/
│   │   └── index.html
│   ├── homelab/
│   │   └── index.html
│   └── minecraft/
│       └── index.html
├── home/
│   └── index.html
├── css/
│   ├── about.css
│   ├── animations.css
│   ├── docs.css
│   ├── errors.css
│   ├── home.css
│   ├── projects.css
│   ├── shared.css
│   └── themes.css
├── js/
│   ├── languages/
│   │   ├── en.js       # English strings
│   │   ├── es.js       # English strings
│   │   └── strings.js  # Language detection & loader
│   ├── components/
│   │   ├── Footer.js
│   │   ├── Modal.js
│   │   ├── NavBar.js
│   │   ├── Toast.js
│   │   └── Void.js
│   ├── about.js
│   ├── engine.js   # Only handles rendering logic and component bootstrapping
│   ├── home.js
│   └── projects.js
├── resources/
│   ├── images/
│   └── videos/
├── credentials.txt
├── 404.html        # Custom 404 error. Github pages only supports the 404 error
├── robots.txt
└── readme.md
```

---

## 🌍 Multilanguage Support

The site supports multiple languages (currently English and Spanish) using modular language files:

- `js/languages/en.js`, `js/languages/es.js` — locale strings
- `js/languages/strings.js` — detects language preference via cookies and loads the corresponding locale

Each page-specific script (like `about.js`) loads `strings.js`, which then uses the desired locale when rendering content. You simply pass the language code to the string manager, and it handles the rest.


## ♻️ Component-Like Reusability

DigitalVoid’s rendering engine simulates React-like behavior using native JavaScript classes:

- UI components like NavBar, Footer, and Toast are now standalone modules inside /js/componentes/.
- Components are automatically created and rendered by the engine — you just need to declare a placeholder tag in your HTML (e.g. `<footer></footer> || <div class="toast"></div>`).
- Logic, structure, and styling are handled dynamically — no need to repeat layout or markup patterns.


## 🛠️ Technologies Used

- **HTML5**
- **CSS3**
- **JavaScript (ES6+)**
  - Object-Oriented Programming (OOP)
  - DOM manipulation
  - Dynamic rendering

---

## 🚧 Purpose

DigitalVoid explores a clean and scalable way to build interactive, localized, and reusable interfaces without relying on third-party frameworks or build tools.

- Provide a testbed for advanced JavaScript logic without using libraries.
- Support multilingual, modular, and scalable web page generation.
- Simulate a component-based architecture using just native technologies.


## 📜 License

This project is released under the **MIT License**.  
Feel free to use, modify, and distribute it.
