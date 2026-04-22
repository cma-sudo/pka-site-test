# PKA — Maquette locale

Réplique moderne du site pk-archi.com, en HTML/CSS/JS statique, pour validation en local.

## Comment ouvrir le site sur votre Mac

### Option A — Double-clic (le plus simple)

1. Décompressez le dossier `pka-site-local`
2. Double-cliquez sur `index.html`
3. Le site s'ouvre dans votre navigateur par défaut

> ⚠️ Les visites virtuelles Matterport peuvent mettre quelques secondes à charger (elles viennent du web).

### Option B — Serveur local (recommandé pour un rendu parfait)

Ouvrez le Terminal (Cmd+Espace → taper "Terminal"), puis :

```bash
cd ~/Downloads/pka-site-local
python3 -m http.server 8000
```

Ouvrez ensuite http://localhost:8000 dans Safari / Chrome.

Pour arrêter le serveur : Ctrl+C dans le Terminal.

## Structure du projet

```
pka-site-local/
├── index.html              ← Accueil
├── scan-3d.html            ← Page Scan 3D
├── modelisation.html       ← Page Modélisation BIM
├── visites-virtuelles.html ← Page Visites virtuelles (9 Matterport embed)
├── projets.html            ← Galerie de réalisations
├── contact.html            ← Contact + carte
├── style.css               ← Feuille de style complète
├── script.js               ← Interactions (menu mobile, animations)
├── images/                 ← Photos des projets (12 images)
└── README.md               ← Ce fichier
```

## Parti pris de design

- **Typographie** : Fraunces (serif éditorial) + JetBrains Mono (technique)
- **Palette** : beige papier calque + encre + bleu plan technique + accents wireframe
- **Parti pris graphique** : évocations du métier — grille en arrière-plan (nuage de points), coordonnées géographiques affichées, numérotation façon relevé
- **Mobile-first responsive** : s'adapte parfaitement à tous les écrans

## Technologie

- HTML5 sémantique pur
- CSS3 (custom properties, grid, animations)
- Vanilla JavaScript (aucune dépendance)
- Fonts chargées depuis Google Fonts
- Images locales

**Aucun framework, aucune build-step, aucune dépendance npm.**

## Différences avec le site WordPress actuel (pkarchicom.wordpress.com)

### Améliorations

- ✓ Thème moderne 2026 (le site actuel utilise Twenty Seventeen, thème de 2016)
- ✓ Navigation claire avec 6 sections structurées
- ✓ Accueil avec accroche métier + CTA immédiat
- ✓ Page Visites virtuelles avec 9 Matterport **embarqués directement** (plus besoin de cliquer sur des liens externes)
- ✓ Portfolio Projets organisé par réalisation avec contexte
- ✓ Contact avec carte OpenStreetMap
- ✓ SEO : meta descriptions, structure sémantique, alt text
- ✓ Responsive mobile-first
- ✓ Performance : léger, pas de plugins WordPress, chargement rapide

### Ce qui n'a pas été implémenté (reste à décider)

- Pas de CMS / admin — tout édite au code
- Pas de blog (les "Articles" du site actuel ne sont pas repris)
- Pas de zone "Services en ligne (réservé)"
- Pas de formulaire de contact fonctionnel (nécessite un backend)

## Prochaines étapes possibles

1. **Si le design est validé** : porter vers un vrai WordPress local (Local by Flywheel) ou un générateur statique (Astro, 11ty)
2. **Domaine pk-archi.com** : rediriger vers ce nouveau site plutôt que l'actuel WordPress.com Simple
3. **Formulaire contact** : ajouter via Formspree, Getform ou équivalent (1 ligne de code)
4. **Blog** : réintégrer la section Articles si souhaité
5. **Hébergement** : Netlify, Vercel ou OVH statique — gratuit ou ~2€/mois

---

Site généré à partir du contenu réel de pkarchicom.wordpress.com
via l'API WordPress.com MCP (lecture seule, aucune modification sur le site live).
