# Portfolio — HAJDAOUI Sara

Portfolio personnel professionnel de HAJDAOUI Sara, étudiante ingénieure en informatique orientée IA, Machine Learning et Data.

> Site accessible par lien direct — non destiné à être indexé par les moteurs de recherche.

---

## Technologies

| Outil | Version | Usage |
|---|---|---|
| React | 18 | Framework UI |
| Vite | 5 | Build tool |
| React Router | 6 | Routing SPA |
| react-icons | 5 | Icônes |
| CSS natif | — | Styles, animations, thème |

---

## Installation

**Prérequis** : Node.js ≥ 18

```bash
# Cloner le repository
git clone https://github.com/Sara-hjd/portfolio.git
cd portfolio

# Installer les dépendances
npm install
```

---

## Développement

```bash
npm run dev
```

Le site est accessible sur [http://localhost:3000](http://localhost:3000).

---

## Build de production

```bash
npm run build
```

Les fichiers sont générés dans le dossier `dist/`.

Pour prévisualiser le build localement :
```bash
npm run preview
```

---

## Déploiement (Vercel)

Ce projet est configuré pour Vercel avec `vercel.json`.

**Première fois :**
1. Pousser le code sur GitHub
2. Aller sur [vercel.com](https://vercel.com) → New Project → Importer le repository
3. Framework : Vite (détecté automatiquement)
4. Déployer

**Mises à jour :**
```bash
git add .
git commit -m "description de la modification"
git push
```
Vercel déploie automatiquement à chaque push sur `main`.

---

## Structure du projet

```
src/
├── data/           ← Source unique de vérité du contenu
│   ├── personal.js     Informations personnelles
│   ├── projects.js     Liste et détail des projets
│   ├── skills.js       Compétences par catégorie
│   ├── experience.js   Expériences professionnelles
│   └── education.js    Formation
├── components/     ← Composants réutilisables
├── pages/          ← Pages de l'application
├── hooks/          ← Hooks React
└── styles/         ← CSS global, tokens, accessibilité
```

---

## Personnalisation du contenu

**Toutes les modifications de contenu se font dans `src/data/` uniquement.**

### Modifier les informations personnelles
Éditer [`src/data/personal.js`](./src/data/personal.js)

### Ajouter/modifier des compétences
Éditer [`src/data/skills.js`](./src/data/skills.js)

### Ajouter un projet
Éditer [`src/data/projects.js`](./src/data/projects.js)
- Copier le template commenté en haut du fichier
- Remplir les champs avec les vraies informations
- Configurer les champs `show.*` pour contrôler les sections affichées

### Ajouter une expérience
Éditer [`src/data/experience.js`](./src/data/experience.js)

### Ajouter une formation
Éditer [`src/data/education.js`](./src/data/education.js)

### Mettre à jour le CV
Remplacer le fichier [`public/cv.pdf`](./public/cv.pdf)

---

## Confidentialité

Ce site intègre plusieurs mesures de non-indexation :

- `<meta name="robots" content="noindex, nofollow">` dans `index.html`
- `public/robots.txt` avec `Disallow: /`
- Header HTTP `X-Robots-Tag: noindex, nofollow` via `vercel.json`

Le site reste **accessible publiquement** à toute personne possédant l'URL directe.
Ces mesures sont des instructions aux crawlers — elles ne constituent pas une garantie absolue de confidentialité.

---

## Licence

Code source distribué sous licence MIT.
Contenu (textes, projets, CV) — tous droits réservés HAJDAOUI Sara.
