# 40K Dice Roller - Mobile Edition 📱🎲

Version mobile optimisée du calculateur de probabilités de dés pour Warhammer 40,000 (10ème édition).

![40K Logo](https://img.shields.io/badge/Warhammer-40K-darkred)
![Edition](https://img.shields.io/badge/Edition-10th-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## 📖 À propos

Ce projet est une **version mobile optimisée** du [40K Visual Dice Calculator](https://github.com/toadchild/40kdice) créé par [Jonathan Polley](http://ghostlords.com/). 

Le calculateur original est un excellent outil pour calculer les probabilités d'attaque dans Warhammer 40K, mais n'était pas optimisé pour une utilisation sur mobile. Cette version reprend le moteur de calcul du projet original et ajoute :

- ✅ **Interface responsive** adaptée aux smartphones et tablettes
- ✅ **Design mobile-first** avec des contrôles tactiles optimisés
- ✅ **Profils prédéfinis** pour les unités courantes (Space Marines, Orks, Garde Impérial, etc.)
- ✅ **Site web statique** sans dépendances serveur
- ✅ **Déploiement simplifié** sur n'importe quel hébergeur web

## 🎯 Fonctionnalités

### Calculs de dés complets (10ème édition)
- Lethal Hits
- Sustained Hits
- Devastating Wounds
- Critical Hits/Wounds (Anti-X)
- Rerolls (1s, fails, non-crits)
- Feel No Pain
- Invulnerable Saves
- Cover

### Profils prédéfinis
Le calculateur inclut des profils de défense pour :
- ⚔️ Space Marine Tactique
- 🛡️ Terminator
- 👑 Custodes Guard
- 🟢 Ork Boy
- 🎖️ Garde Impérial
- 💀 Necron Warrior
- 👾 Tyranid Warrior

### Interface mobile-optimisée
- Clavier numérique automatique sur les champs appropriés
- Checkboxes et boutons agrandis pour le tactile
- Design épuré et lisible sur petits écrans
- Graphiques Chart.js responsive

## 🚀 Utilisation

### Option 1 : GitHub Pages
Le site est déployé sur GitHub Pages : [Lien vers votre site]

### Option 2 : Installation locale

#### Avec Python (recommandé)
```bash
git clone [votre-repo-url]
cd 40K-Dice-Roller-Mobile
python -m http.server 8080
```
Puis ouvrez http://localhost:8080

#### Avec Node.js
```bash
git clone [votre-repo-url]
cd 40K-Dice-Roller-Mobile
npx serve
```

#### Avec PHP
```bash
git clone [votre-repo-url]
cd 40K-Dice-Roller-Mobile
php -S localhost:8080
```

### Option 3 : Double-clic
Ouvrez simplement `index.html` dans votre navigateur (certaines fonctionnalités peuvent ne pas marcher).

## 📁 Structure du projet

```
40K-Dice-Roller-Mobile/
├── index.html          # Page principale
├── dice.js             # Moteur de calcul (du projet original)
├── dice.css            # Styles de base
├── favicon.ico         # Icône
├── README.md           # Ce fichier
├── PROFILES.md         # Guide pour ajouter des profils
└── test-checkbox.html  # Page de test
```

## 🔧 Personnalisation

### Ajouter vos propres profils

Consultez [PROFILES.md](PROFILES.md) pour le guide détaillé.

Résumé rapide :
1. Ouvrez `dice.js`
2. Ajoutez votre profil dans l'objet `defenseProfiles`
3. Ajoutez l'option correspondante dans `index.html`

Exemple :
```javascript
"primaris": {
    name: "Primaris Intercessor",
    t: "4",
    save: "3",
    invulnerable: "",
    wounds: "2",
    fnp: ""
}
```

## 🙏 Crédits

### Projet original
Ce projet est basé sur le **40K Visual Dice Calculator** de [Jonathan Polley](http://ghostlords.com/).
- Repository original : https://github.com/toadchild/40kdice
- Site web : http://ghostlords.com/dice/
- Contact : 40k@ghostlords.com

**Tout le mérite du moteur de calcul revient à Jonathan Polley.** Ce projet ne fait qu'adapter l'interface pour mobile.

### Modifications apportées
- Interface responsive mobile-first
- Design CSS moderne et tactile
- Profils de défense prédéfinis
- Simplification du déploiement (HTML/CSS/JS pur)

## 📜 Licence

Ce projet reprend le code du [40K Visual Dice Calculator](https://github.com/toadchild/40kdice) original.

Veuillez consulter le repository original pour les détails de licence.

[Warhammer 40,000](https://warhammer40000.com/) est © Games Workshop Limited.

## 🐛 Bugs et suggestions

Si vous trouvez des bugs ou avez des suggestions d'amélioration :
1. Vérifiez d'abord si le bug existe dans le [projet original](https://github.com/toadchild/40kdice/issues)
2. Si c'est spécifique à cette version mobile, ouvrez une issue ici

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
- Fork le projet
- Créer une branche pour votre feature
- Soumettre une Pull Request

## ⭐ Remerciements

Un immense merci à **Jonathan Polley** pour avoir créé et maintenu le calculateur original. Son travail a rendu ce projet possible.

---

**Note** : Ce projet n'est pas affilié à Games Workshop. Warhammer 40,000 est une marque déposée de Games Workshop Limited.
