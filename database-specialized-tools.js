let mantles = [{
    'name': 'Apothecary Mantle',
    'icon': require('./assets/specialized_tools/apothecary_mantle.png'),
    'effectDuration': '60',
    'rechargeTime': '210',
    'howToGet': 'Complete research of 10 different monsters from 8★ quest A Portent of Disaster',
    'quest': 'A Portent of Disaster',
    'description': 'Increases the probability of triggering status buildup when attacking with weapons that induce abnormal statuses.'
}, {
    'name': 'Bandit Mantle',
    'icon': require('./assets/specialized_tools/bandit_mantle.png'),
    'effectDuration': '180',
    'rechargeTime': '210',
    'howToGet': 'Complete 5★ quest Redefining the "Power Couple"',
    'quest': 'Redefining the "Power Couple"',
    'description': 'Causes monsters to drop rare trade-in items when you attack them.'
}, {
    'name': 'Challenger Mantle',
    'icon': require('./assets/specialized_tools/challenger_mantle.png'),
    'effectDuration': '180',
    'rechargeTime': '300',
    'howToGet': 'Complete 7★ quest The Red and Blue Crew',
    'quest': 'The Red and Blue Crew',
    'description': 'Prompts monsters to target you more often and makes them easier to lure. The effect expires if you are attacked.'
}, {
    'name': 'Dragonproof Mantle',
    'icon': require('./assets/specialized_tools/dragonproof_mantle.png'),
    'effectDuration': '120',
    'rechargeTime': '300',
    'howToGet': 'Complete 7★ special assignment quest The Food Chain Dominator',
    'quest': 'The Food Chain Dominator',
    'description': 'Reduces Dragon damage. Nullifies Dragonblight, and powers up your weapon\'s dragon properties.'
}, {
    'name': 'Evasion Mantle',
    'icon': require('./assets/specialized_tools/evasion_mantle.png'),
    'effectDuration': '90',
    'rechargeTime': '360',
    'howToGet': 'Unlocks after 5 different threats level 2 tempered hunts. From 9★ quest New World Sky, New World Flower',
    'quest': 'New World Sky, New World Flower',
    'description': 'Increases the invulnerability window while evading and grants a temporary attack boost for evading a monster attack at the very last moment.'
}, {
    'name': 'Fireproof Mantle',
    'icon': require('./assets/specialized_tools/fireproof_mantle.png'),
    'effectDuration': '180',
    'rechargeTime': '210',
    'howToGet': 'Complete 7★ A Fiery Convergence',
    'quest': 'A Fiery Convergence',
    'description': 'Reduces fire damage, nullifies fireblight and blastblight, and prevents damage from hot environments.'
}, {
    'name': 'Ghille Mantle',
    'icon': require('./assets/specialized_tools/ghille_mantle.png'),
    'effectDuration': '120',
    'rechargeTime': '300',
    'howToGet': 'Automatically obtained from early quests.',
    'description': 'Conceals you from enemy view temporarily. The effect expires if you perform an attack or take damage.'
}, {
    'name': 'Glider Mantle',
    'icon': require('./assets/specialized_tools/glider_mantle.png'),
    'effectDuration': '180',
    'rechargeTime': '210',
    'howToGet': 'Given after completing the first quest in the Coral Highlands.',
    'description': 'Increases jump airtime and grants the power to ride strong winds. Also makes it easier to mount monsters.'
}, {
    'name': 'Iceproof Mantle',
    'icon': require('./assets/specialized_tools/iceproof_mantle.png'),
    'effectDuration': '180',
    'rechargeTime': '210',
    'howToGet': 'Complete delivery Armory R&D: Weatherizing.',
    'delivery': 'Armory R&D: Weatherizing',
    'description': 'Reduces ice damage and nullifies iceblight.'
}, {
    'name': 'Immunity Mantle',
    'icon': require('./assets/specialized_tools/immunity_mantle.png'),
    'effectDuration': '120',
    'rechargeTime': '210',
    'howToGet': 'Complete research of 15 different monsters from quest 9★ A Blaze on the Sand',
    'quest': 'A Blaze on the Sand',
    'description': 'Removes and nullifies all abnormal status effects for the duration of the effect.'
}, {
    'name': 'Impact Mantle',
    'icon': require('./assets/specialized_tools/impact_mantle.png'),
    'effectDuration': '90',
    'rechargeTime': '360',
    'howToGet': 'Unlocks after 5 different threat level 1 tempered hunts. From 9★ quest Showdown: The Muck and the Maul',
    'quest': 'Showdown: The Muck and the Maul',
    'description': 'Adds a stun effect to most attacks or increases the potency of an existing stun effect.'
}, {
    'name': 'Rocksteady Mantle',
    'icon': require('./assets/specialized_tools/rocksteady_mantle.png'),
    'effectDuration': '90',
    'rechargeTime': '360',
    'howToGet': 'Unlocks after 3 different tempered Elder kills from quest 9★ A Summons from Below',
    'quest': 'A Summons from Below',
    'description': 'Eliminates damage reactions, prevents wind effects, protects your hearing, and grants tremor resistance. You also receive less damage from attacks.'
}, {
    'name': 'Temporal Mantle',
    'icon': require('./assets/specialized_tools/temporal_mantle.png'),
    'effectDuration': '120',
    'rechargeTime': '300',
    'howToGet': 'Complete 8★ Special Assignment Quest: No Remorse, No Surrender',
    'quest': 'No Remorse, No Surrender',
    'description': 'Nullifies damage from powerful attacks by automatically evading.'
}, {
    'name': 'Thunderproof Mantle',
    'icon': require('./assets/specialized_tools/thunderproof_mantle.png'),
    'effectDuration': '180',
    'rechargeTime': '210',
    'howToGet': 'Complete 5★ quest Gone in a Flash',
    'quest': 'Gone in a Flash',
    'description': 'Reduces thunder damage and nullifies thunderblight and paralysis.'
}, {
    'name': 'Vitality Mantle',
    'icon': require('./assets/specialized_tools/vitality_mantle.png'),
    'effectDuration': '120',
    'rechargeTime': '360',
    'howToGet': 'Complete 6★ quest Tickled Pink',
    'quest': 'Tickled Pink',
    'description': 'Negates a fixed amount of damage, after which the effect expires.'
}, {
    'name': 'Waterproof Mantle',
    'icon': require('./assets/specialized_tools/waterproof_mantle.png'),
    'effectDuration': '180',
    'rechargeTime': '210',
    'howToGet': 'Complete delivery Armory R&D: Waterproofing.',
    'delivery': 'Armory R&D: Waterproofing',
    'description': 'Reduces water damage, nullifies waterblight, reduces mobility restrictions in muck and negates them entirely for deep water.'
}, {
    'name': 'Assassin\'s Hood',
    'icon': require('./assets/specialized_tools/assassins_hood.png'),
    'effectDuration': '360',
    'rechargeTime': '180',
    'howToGet': 'Complete delivery Specialized Tool: Assassin\'s Hood.',
    'delivery': 'Specialized Tool: Assassin\'s Hood',
    'description': 'Increases movement speed and allows you to hide quicker. Lasts until you deal damage to a monster caught unaware.'
}]

let smokers = [{
    'name': 'Affinity Booster',
    'icon': require('./assets/specialized_tools/affinity_booster.png'),
    'effectDuration': '60',
    'rechargeTime': '180',
    'howToGet': 'Complete 6★ quest A Tingling Taste to trigger chain of quests. Note: the quest doesn\'t have the bubble mark. Final quest which gives the item is 7★ RRRRRumble in the Waste',
    'quest': 'RRRRRumble in the Waste',
    'description': 'Places a smoker that increase affinity.'
}, {
    'name': 'Cleanser Booster',
    'icon': require('./assets/specialized_tools/cleanser_booster.png'),
    'effectDuration': '60',
    'rechargeTime': '150',
    'howToGet': 'Complete 4★ quest On Nightmare\'s Wings',
    'quest': 'On Nightmare\'s Wings',
    'description': 'Places a smoker that removes any abnormal status effects and elemental blights.'
}, {
    'name': 'Health Booster',
    'icon': require('./assets/specialized_tools/health_booster.png'),
    'effectDuration': '60',
    'rechargeTime': '150',
    'howToGet': 'You\'ll get this eventually.',
    'description': 'Places a smoker that gradually restores your health.'
}]

export { mantles, smokers }