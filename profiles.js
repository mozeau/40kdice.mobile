var defenseProfiles = {
    "": {
        name: "-- Sélectionner un profil --",
        t: "", save: "", invulnerable: "", wounds: "", fnp: ""
    },

    // ── Infanterie ──────────────────────────────────────────────────────────
    "spacemarine": {
        name: "Space Marine",
        t: "5", save: "3", invulnerable: "", wounds: "2", fnp: ""
    },
    "terminator": {
        name: "Terminator",
        t: "6", save: "2", invulnerable: "4", wounds: "3", fnp: ""
    },
    "custodes": {
        name: "Custodes Guard",
        t: "7", save: "2", invulnerable: "4", wounds: "5", fnp: ""
    },
    "ork_boy": {
        name: "Ork Boy",
        t: "5", save: "5", invulnerable: "", wounds: "1", fnp: ""
    },
    "guardsman": {
        name: "Garde Impérial",
        t: "3", save: "5", invulnerable: "", wounds: "1", fnp: ""
    },
    "necron_warrior": {
        name: "Necron Warrior",
        t: "4", save: "4", invulnerable: "", wounds: "1", fnp: ""
    },
    "tyranid_warrior": {
        name: "Tyranid Warrior",
        t: "5", save: "4", invulnerable: "", wounds: "3", fnp: ""
    },
    "crisis_suit": {
        name: "Crisis Battlesuits",
        t: "5", save: "3", invulnerable: "", wounds: "4", fnp: ""
    },
    "lion_primarch": {
        name: "Primarque (Lion El'Jonson)",
        t: "10", save: "2", invulnerable: "3", wounds: "16", fnp: ""
    },

    // ── Monstre ──────────────────────────────────────────────────────────────
    "ctan": {
        name: "C'tan",
        t: "11", save: "3", invulnerable: "4", wounds: "16", fnp: "5"
    },
    "exocrine": {
        name: "Exocrine",
        t: "10", save: "3", invulnerable: "", wounds: "14", fnp: ""
    },
    "tyrannofex": {
        name: "Tyrannofex",
        t: "12", save: "2", invulnerable: "", wounds: "16", fnp: ""
    },
    "greater_daemon": {
        name: "Demon Majeur",
        t: "11", save: "3", invulnerable: "4", wounds: "18", fnp: ""
    },
    "nurgle_beast": {
        name: "Bete de Nurgle",
        t: "9", save: "5", invulnerable: "5", wounds: "7", fnp: "5"
    },

    // ── Véhicule ─────────────────────────────────────────────────────────────
    "landraider": {
        name: "Land Raider",
        t: "12", save: "2", invulnerable: "", wounds: "16", fnp: ""
    },
    "rhino": {
        name: "Rhino",
        t: "9", save: "3", invulnerable: "", wounds: "10", fnp: ""
    },
    "riptide": {
        name: "Riptide",
        t: "9", save: "2", invulnerable: "4", wounds: "14", fnp: ""
    },
    "falcon_eldar": {
        name: "Falcon Eldar",
        t: "9", save: "3", invulnerable: "5", wounds: "12", fnp: ""
    },
    "trukk_ork": {
        name: "Trukk Ork",
        t: "8", save: "4", invulnerable: "6", wounds: "10", fnp: ""
    },
    "leman_russ": {
        name: "Leman Russ",
        t: "11", save: "2", invulnerable: "", wounds: "13", fnp: ""
    },
    "dreadnought": {
        name: "Dreadnought",
        t: "10", save: "2", invulnerable: "", wounds: "10", fnp: ""
    },
    "chaos_knight_wardog": {
        name: "CK Wardog",
        t: "9", save: "3", invulnerable: "5", wounds: "14", fnp: ""
    },
    "imperial_knight": {
        name: "Gros IK",
        t: "11", save: "3", invulnerable: "5", wounds: "26", fnp: ""
    },
    "defiler": {
        name: "Defiler",
        t: "11", save: "3", invulnerable: "5", wounds: "18", fnp: ""
    }
};

var profileGroups = [
    { label: "Infanterie", keys: ["spacemarine", "terminator", "custodes", "ork_boy", "guardsman", "necron_warrior", "tyranid_warrior", "crisis_suit", "lion_primarch"] },
    { label: "Monstre",    keys: ["ctan", "exocrine", "tyrannofex", "greater_daemon", "nurgle_beast"] },
    { label: "Véhicule",   keys: ["landraider", "rhino", "riptide", "falcon_eldar", "trukk_ork", "leman_russ", "dreadnought", "chaos_knight_wardog", "imperial_knight", "defiler"] }
];
