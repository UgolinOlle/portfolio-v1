# Portfolio

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
![GitHub last commit](https://img.shields.io/github/last-commit/ugolinolle/portfolio-v1)
[![GitHub stars](https://img.shields.io/github/stars/ugolinolle/portfolio-v1)](https://github.com/ugolinolle/portfolio-v1/stargazers)
[![GitHub issues](https://img.shields.io/github/issues/ugolinolle/portfolio-v1)](https://github.com/ugolinolle/portfolio-v1/issues)
[![GitHub forks](https://img.shields.io/github/forks/ugolinolle/portfolio-v1)](https://github.com/ugolinolle/portfolio-v1/network)

Ce dépôt contient le code source de mon portfolio personnel. Vous pouvez y trouver des informations sur moi, mes projets et mes compétences techniques.

## Structure du Projet

Le projet est organisé de la manière suivante :

```plaintext
.
├── components
│  ├── Header.tsx
│  ├── NavigationLink.tsx
│  ├── ThemeSwitcher.tsx
│  └── ui
│     ├── Button.tsx
│     ├── Link.tsx
│     ├── Section.tsx
│     └── Title.tsx
├── LICENSE
├── next.config.js
├── package.json
├── pages
│  ├── 404.tsx
│  ├── _app.tsx
│  ├── _document.tsx
│  ├── about.tsx
│  ├── api
│  │  └── github.ts
│  ├── index.tsx
│  ├── projects
│  │  └── index.tsx
│  └── tech.tsx
├── postcss.config.js
├── public
│  ├── 42_Logo.png
│  ├── 42 Logo.svg
│  ├── favicon.ico
│  ├── profile-pic.png
│  ├── projects
│  │  ├── get_next_line
│  │  │  ├── logo-black.svg
│  │  │  ├── logo-color.svg
│  │  │  ├── logo-no-background.svg
│  │  │  └── logo-white.svg
│  │  ├── printf
│  │  │  ├── logo-black.svg
│  │  │  ├── logo-color.svg
│  │  │  ├── logo-no-background.svg
│  │  │  └── logo-white.svg
│  │  └── talent_flow
│  │     ├── logo-black.svg
│  │     ├── logo-color.svg
│  │     ├── logo-no-background.svg
│  │     └── logo-white.svg
│  └── tech
│     ├── bag.webp
│     ├── discord.jpeg
│     ├── Docker logo.svg
│     ├── insomnia.png
│     ├── intellij.png
│     ├── iterm.png
│     ├── keyboard.webp
│     ├── mac.jpg
│     ├── mouse.webp
│     ├── notion_logo.png
│     ├── slack.png
│     ├── tableplus.webp
│     ├── todoist.png
│     └── vscode.jpeg
├── README.md
├── styles
│  └── globals.css
├── tailwind.config.ts
├── tsconfig.json
├── utils
│  ├── api.js
│  ├── constants.ts
│  └── interfaces
│     └── about.ts
└── yarn.lock
```

## Langages, Frameworks et Packages Utilisés
- Langages de Programmation : JavaScript, TypeScript
- Frameworks : Next.js
- Outils de Build : Webpack, Babel
- Gestionnaire de Packages : Yarn
- CSS : Tailwind CSS
- Préprocesseur CSS : PostCSS
- Gestion de Version : Git, GitHub
- Intégration de Données : API GitHub

## Comment Démarrer
1. Clonez ce dépôt sur votre machine locale.
```
git clone https://github.com/UgolinOlle/portfolio-v1.git
```
2. Exécutez `yarn install` pour installer les dépendances.
3. Exécutez `yarn dev` pour lancer l'application en mode développement.
4. Ouvrez votre navigateur et accédez à `http://localhost:3000` pour voir le portfolio.

# Licence
Ce projet est sous licence MIT - voir le fichier LICENSE pour plus de détails.

[© Ugolin Ollé](mailto:hello@ugolin-olle.com)
