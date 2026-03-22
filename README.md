# 40K Dice Roller - Mobile Edition

Calculateur de dés pour Warhammer 40K (10ème édition) optimisé pour mobile.

## 📱 Utilisation

Ce site est entièrement statique (HTML/CSS/JS). Vous pouvez :

### Option 1 : Ouvrir directement
Ouvrez simplement `Index.html` dans votre navigateur.

### Option 2 : Serveur local simple (recommandé)

#### Avec Python :
```bash
python -m http.server 8080
```

#### Avec Node.js :
```bash
npx serve
```

#### Avec PHP :
```bash
php -S localhost:8080
```

Puis accédez à `http://localhost:8080`

## 📦 Fichiers

- `Index.html` - Page principale optimisée mobile
- `dice.js` - Logique de calcul des dés 40K
- `dice-TOKEN.js` - Fichier de tokens
- `dice.css` - Styles de base
- `favicon.ico` - Icône du site

## 🎲 Fonctionnalités

- Calcul des probabilités de dés 40K (10ème édition)
- Support de toutes les règles : Lethal Hits, Sustained Hits, Devastating Wounds, etc.
- **Profils de défense prédéfinis** : Space Marines, Orks, Garde Impérial, Necrons, Tyranides, etc.
- Interface optimisée pour mobile
- Graphiques de résultats

## 📋 Profils disponibles

Le calculateur inclut des profils de défense prédéfinis pour :
- ⚔️ Space Marine Tactique
- 🛡️ Terminator
- 👑 Custodes Guard
- 🟢 Ork Boy
- 🎖️ Garde Impérial
- 💀 Necron Warrior
- 👾 Tyranid Warrior

Voir [PROFILES.md](PROFILES.md) pour ajouter vos propres profils.

## 📜 Licence

Basé sur le projet original de [Jonathan Polley](https://github.com/toadchild/40kdice)
