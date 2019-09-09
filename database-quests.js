let assignedQuests = [{
        'name': 'Jagras of the Ancient Forest',
        'translationKey': 'quest-jagras-of-the-ancient-forest',
        'level': '1',
        'type': 'quest-type-slaying-quest',
        'objective': 'quest-objective-slay-7-jagras',
        'targetMonsters': ['Jagras'],
        'icon': require('./assets/quests/icon_slaying.png'),
        'rewardMoney': '720',
        'timeLimit': '50',
        'conditions': ['quest-conditions-none'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Aptonoth', 'Mernos'],
        'client': 'quest-client-the-commander',
        'description': 'quest-jagras-of-the-ancient-forest-description'
    },
    {
        'name': 'A Kestodon Kerfuffle',
        'translationKey': 'quest-a-kestodon-kerfuffle',
        'level': '2',
        'type': 'quest-type-slaying-quest',
        'objective': 'quest-objective-complete-the-assignment',
        'targetMonsters': ['Kestodon'],
        'icon': require('./assets/quests/icon_slaying.png'),
        'rewardMoney': '1200',
        'timeLimit': '50',
        'conditions': ['quest-conditions-none'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Aptonoth', 'Mernos', 'Jagras'],
        'client': 'quest-client-the-commander',
        'description': 'quest-a-kestodon-kerfuffle-description'
    },
    {
        'name': 'Bird-Brained Bandit',
        'translationKey': 'quest-bird-brained-bandit',
        'level': '2',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-a-kulu-ya-ku',
        'targetMonsters': ['Kulu-Ya-Ku'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '1800',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-2-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Aptonoth', 'Mernos', 'Jagras'],
        'client': 'quest-client-provisions-manager',
        'description': 'quest-bird-brained-bandit-description'
    },
    {
        'name': 'The Great Jagras Hunt',
        'translationKey': 'quest-the-great-jagras-hunt',
        'level': '2',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-a-great-jagras',
        'targetMonsters': ['Great Jagras'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '1200',
        'timeLimit': '50',
        'conditions': ['quest-conditions-none'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Aptonoth', 'Mernos', 'Jagras'],
        'client': 'quest-client-field-team-leader',
        'description': 'quest-the-great-jagras-hunt-description'
    },
    {
        'name': 'Flying Sparks Tobi-Kadachi',
        'translationKey': 'quest-flying-sparks-tobi-kadachi',
        'level': '3',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-a-tobi-kadachi',
        'targetMonsters': ['Tobi-Kadachi'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '3240',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-4-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Aptonoth', 'Mernos', 'Jagras'],
        'client': 'quest-client-chief-botanist',
        'description': 'quest-flying-sparks-tobi-kadachi-description',
        'notableRewards': 'quest-flying-sparks-tobi-kadachi-notable-rewards'
    },
    {
        'name': 'Sinister Shadows in the Swamp',
        'translationKey': 'quest-sinister-shadows-in-the-swamp',
        'level': '3',
        'type': 'quest-type-special-quest',
        'objective': 'quest-objective-complete-the-assignment',
        'targetMonsters': ['Jyuratodus'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '3240',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-3-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Apceros', 'Gajau', 'Kestodon', 'Noios'],
        'client': 'quest-client-the-commander',
        'description': 'quest-sinister-shadows-in-the-swamp-description'
    },
    {
        'name': 'The Best Kind of Quest',
        'translationKey': 'quest-the-best-kind-of-quest',
        'level': '3',
        'type': 'quest-type-special-quest',
        'objective': 'quest-objective-complete-the-assignment',
        'targetMonsters': ['Barroth'],
        'icon': require('./assets/quests/icon_special.png'),
        'rewardMoney': '2520',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-3-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Apceros', 'Gajau', 'Kestodon', 'Noios'],
        'client': 'quest-client-the-commander',
        'description': 'quest-the-best-kind-of-quest-description'
    },
    {
        'name': 'Urgent: Pukei-Pukei Hunt',
        'translationKey': 'quest-urgent-pukei-pukei-hunt',
        'level': '3',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-a-pukei-pukei',
        'targetMonsters': ['Pukei-Pukei'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '2520',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-2-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Aptonoth', 'Mernos', 'Jagras'],
        'client': 'quest-client-the-commander',
        'description': 'quest-urgent-pukei-pukei-hunt-description'
    },
    {
        'name': 'Ballooning Problems',
        'translationKey': 'quest-ballooning-problems',
        'level': '4',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-a-paolumu',
        'targetMonsters': ['Paolumu'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '4320',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-6-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Kelbi', 'Raphinos', 'Shamos'],
        'client': 'quest-client-third-fleet-master',
        'description': 'quest-ballooning-problems-description'
    },
    {
        'name': 'One for the History Books',
        'translationKey': 'quest-one-for-the-history-books',
        'level': '4',
        'type': 'quest-type-special-quest',
        'objective': 'quest-objective-complete-the-assignment',
        'targetMonsters': ['Zorah Magdaros'],
        'icon': require('./assets/quests/icon_special.png'),
        'rewardMoney': '4320',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-5-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Barnos'],
        'client': 'quest-client-the-commander',
        'description': 'quest-one-for-the-history-books-description'
    },
    {
        'name': 'Radobaan Roadblock',
        'translationKey': 'quest-radobaan-roadblock',
        'level': '4',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-a-radobaan',
        'targetMonsters': ['Radobaan'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '4320',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-7-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Hornetaur', 'Raphinos', 'Girros'],
        'client': 'quest-client-the-handler',
        'description': 'quest-radobaan-roadblock-description'
    },
    {
        'name': 'The Encroaching Anjanath',
        'translationKey': 'quest-the-encroaching-anjanath',
        'level': '4',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-an-anjanath',
        'targetMonsters': ['Anjanath'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '4320',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-4-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Aptonoth', 'Mernos', 'Jagras'],
        'client': 'quest-client-field-team-leader',
        'description': 'quest-the-encroaching-anjanath-description'
    },
    {
        'name': 'A Fiery Throne Atop the Forest',
        'translationKey': 'quest-a-fiery-throne-atop-the-forest',
        'level': '5',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-a-rathalos',
        'targetMonsters': ['Rathalos'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '5400',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-8-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Aptonoth', 'Mernos', 'Jagras'],
        'client': 'quest-client-the-handler',
        'description': 'quest-a-fiery-throne-atop-the-forest-description'
    },
    {
        'name': 'Horned Tyrant Below the Sands',
        'translationKey': 'quest-horned-tyrant-below-the-sands',
        'level': '5',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-a-diablos',
        'targetMonsters': ['Diablos'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '5400',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-8-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Apceros', 'Gajau', 'Kestodon', 'Noios'],
        'client': 'quest-client-the-handler',
        'description': 'quest-horned-tyrant-below-the-sands-description'
    },
    {
        'name': 'Into the Bowels of the Vale',
        'translationKey': 'quest-into-the-bowels-of-the-vale',
        'level': '5',
        'type': 'quest-type-special-quest',
        'objective': 'quest-objective-complete-the-assignment',
        'targetMonsters': ['Odogaron'],
        'icon': require('./assets/quests/icon_special.png'),
        'rewardMoney': '5400',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-8-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Hornetaur', 'Raphinos', 'Girros'],
        'client': 'quest-client-third-fleet-master',
        'description': 'quest-into-the-bowels-of-the-vale-description'
    },
    {
        'name': 'Legiana: Embodiment of Elegance',
        'translationKey': 'quest-legiana-embodiment-of-elegance',
        'level': '5',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-a-legiana',
        'targetMonsters': ['Legiana'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '5400',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-8-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Kelbi', 'Raphinos', 'Shamos'],
        'client': 'quest-client-third-fleet-master',
        'description': 'quest-legiana-embodiment-of-elegance'
    },
    {
        'name': 'A Colossal Task',
        'translationKey': 'quest-a-colossal-task',
        'level': '6',
        'type': 'quest-type-special-quest',
        'objective': 'quest-objective-complete-the-assignment',
        'targetMonsters': ['Zorah Magdaros'],
        'icon': require('./assets/quests/icon_special.png'),
        'rewardMoney': '8280',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-10-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times', 'quest-failure-fail-to-guide-zorah-magdaros'],
        'otherMonsters': ['Barnos'],
        'client': 'quest-client-the-commander',
        'description': 'quest-a-colossal-task-description',
        'notableRewards': 'monster-materials-commendation',
        'tips': 'quest-a-colossal-task-tips'
    },
    {
        'name': 'Invader in the Waste',
        'translationKey': 'quest-invader-in-the-waste',
        'level': '6',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-a-pukei-pukei',
        'targetMonsters': ['Pukei-Pukei'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '7200',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-11-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Apceros', 'Noios', 'Kestodon', 'Gajalaka'],
        'client': 'quest-client-the-handler',
        'description': 'quest-invader-in-the-waste-description'
    },
    {
        'name': 'Tickled Pink',
        'translationKey': 'quest-tickled-pink',
        'level': '6',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-an-anjanath',
        'targetMonsters': ['Anjanath'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '9000',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-11-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Apceros', 'Noios', 'Kestodon', 'Gajalaka'],
        'client': 'quest-client-chief-ecologist',
        'description': 'quest-tickled-pink-description',
        'notableRewards': 'quest-tickled-pink-notable-rewards'
    },
    {
        'name': 'Old World Monster in the New World',
        'translationKey': 'quest-old-monster-in-the-new-world',
        'level': '7',
        'type': 'quest-type-special-quest',
        'objective': 'quest-objective-complete-the-assignment',
        'targetMonsters': ['Pink Rathian'],
        'icon': require('./assets/quests/icon_special.png'),
        'rewardMoney': '12600',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-12-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Kelbi', 'Raphinos', 'Shamos', 'Gajalaka'],
        'client': 'quest-client-the-commander',
        'description': 'quest-old-monster-in-the-new-world-description'
    },
    {
        'name': 'A Wound and a Thirst',
        'translationKey': 'quest-a-wound-and-a-thirst',
        'level': '8',
        'type': 'quest-type-slaying-quest',
        'objective': 'quest-objective-slay-nergigante',
        'targetMonsters': ['Nergigante'],
        'icon': require('./assets/quests/icon_slaying.png'),
        'rewardMoney': '18000',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-13-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'client': 'quest-client-the-commander',
        'description': 'quest-a-wound-and-a-thirst-description'
    },
    {
        'name': 'Hellish Fiend Vaal Hazak',
        'translationKey': 'quest-hellish-fiend-vaal-hazak',
        'level': '8',
        'type': 'quest-type-slaying-quest',
        'objective': 'quest-objective-slay-vaal-hazak',
        'targetMonsters': ['Vaal Hazak'],
        'icon': require('./assets/quests/icon_slaying.png'),
        'rewardMoney': '18000',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-14-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Girros', 'Raphinos'],
        'client': 'quest-client-third-fleet-master',
        'description': 'quest-hellish-fiend-vaal-hazak-description'
    },
    {
        'name': 'Kushala Daora, Dragon of Steel',
        'translationKey': 'quest-kushala-daora-dragon-of-steel',
        'level': '8',
        'type': 'quest-type-slaying-quest',
        'objective': 'quest-objective-slay-kushala-daora',
        'targetMonsters': ['Kushala Daora'],
        'icon': require('./assets/quests/icon_slaying.png'),
        'rewardMoney': '18000',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-14-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'client': 'quest-client-field-team-leader',
        'description': 'quest-kushala-daora-dragon-of-steel-description'
    },
    {
        'name': 'Teostra the Infernal',
        'translationKey': 'quest-teostra-the-infernal',
        'level': '8',
        'type': 'quest-type-slaying-quest',
        'objective': 'quest-objective-slay-teostra',
        'targetMonsters': ['Teostra'],
        'icon': require('./assets/quests/icon_slaying.png'),
        'rewardMoney': '18000',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-14-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'client': 'quest-client-the-huntsman',
        'description': 'quest-teostra-the-infernal-description'
    },
    {
        'name': 'Land of Convergence',
        'translationKey': 'quest-land-of-convergence',
        'level': '9',
        'type': 'quest-type-special-quest',
        'objective': 'quest-objective-complete-the-assignment',
        'targetMonsters': ['Xeno\'jiiva'],
        'icon': require('./assets/quests/icon_special.png'),
        'rewardMoney': '19800',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-15-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'client': 'quest-client-the-admiral',
        'description': 'quest-land-of-convergence-description'
    },
    {
        'name': 'Beyond the Blasting Scales',
        'translationKey': 'quest-beyond-the-blasting-scales',
        'level': '9',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-2-bazelgeuse',
        'targetMonsters': ['Bazelgeuse'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '27720',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-29-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Apceros', 'Noios', 'Kestodon', 'Gajalaka'],
        'client': 'quest-client-the-commander',
        'description': 'quest-beyond-the-blasting-scales-description'
    },
    {
        'name': 'Thunderous Rumble in the Highlands',
        'translationKey': 'quest-thunderous-rumble-in-the-highlands',
        'level': '9',
        'type': 'quest-type-slaying-quest',
        'objective': 'quest-objective-slay-a-kirin-tempered',
        'targetMonsters': ['Kirin'],
        'icon': require('./assets/quests/icon_slaying.png'),
        'rewardMoney': '21600',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-49-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'client': 'quest-client-the-commander',
        'description': 'quest-thunderous-rumble-in-the-highlands-description'
    },
];

let optionalQuests = [{
        'name': 'A Thicket of Thugs',
        'translationKey': 'quest-a-thicket-of-thugs',
        'level': '1',
        'type': 'quest-type-slaying-quest',
        'objective': 'quest-objective-slay-7-jagras',
        'targetMonsters': ['Jagras'],
        'icon': require('./assets/quests/icon_slaying.png'),
        'rewardMoney': '720',
        'timeLimit': '50',
        'conditions': ['quest-conditions-none'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Aptonoth', 'Mernos'],
        'client': 'quest-client-chief-ecologist',
        'description': 'quest-a-thicket-of-thugs-description'
    },
    {
        'name': 'Butting Heads with Nature',
        'translationKey': 'quest-butting-heads-with-nature',
        'level': '1',
        'type': 'quest-type-slaying-quest',
        'objective': 'quest-objective-slay-12-kestodon',
        'targetMonsters': ['Kestodon'],
        'icon': require('./assets/quests/icon_slaying.png'),
        'rewardMoney': '720',
        'timeLimit': '50',
        'conditions': ['quest-conditions-none'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Aptonoth', 'Mernos', 'Jagras'],
        'client': 'quest-client-chief-ecologist',
        'description': 'quest-butting-heads-with-nature-description',
        'tips': 'quest-butting-heads-with-nature-tips'
    },
    {
        'name': 'Fungal Flexin\' in the Ancient Forest',
        'translationKey': 'quest-fungal-flexin-in-the-ancient-forest',
        'level': '1',
        'type': 'quest-type-delivery-quest',
        'objective': 'quest-objective-deliver-20-gourmet-shroomcaps',
        'icon': require('./assets/quests/icon_delivery.png'),
        'rewardMoney': '720',
        'timeLimit': '50',
        'conditions': ['quest-conditions-none'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'client': 'quest-client-the-meowscular-chef',
        'description': 'quest-fungal-flexin-in-the-ancient-forest-description',
        'notableRewards': 'quest-fungal-flexin-in-the-ancient-forest-notable-rewards',
        'tips': 'quest-fungal-flexin-in-the-ancient-forest-tips'
    },
    {
        'name': 'Camp Crasher',
        'translationKey': 'quest-camp-crasher',
        'level': '2',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-a-kulu-ya-ku',
        'targetMonsters': ['Kulu-Ya-Ku'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '1800',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-2-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Aptonoth', 'Mernos', 'Jagras'],
        'client': 'quest-client-chief-ecologist',
        'description': 'quest-camp-crasher-description',
        'tips': 'quest-camp-crasher-tips'
    },
    {
        'name': 'Snatch the Snatcher',
        'translationKey': 'quest-snatch-the-snatcher',
        'level': '2',
        'type': 'quest-type-capture-quest',
        'objective': 'quest-objective-capture-a-kulu-ya-ku',
        'targetMonsters': ['Kulu-Ya-Ku'],
        'icon': require('./assets/quests/icon_capture.png'),
        'rewardMoney': '2520',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-3-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times', 'Kulu-Ya-Ku is slain'],
        'otherMonsters': ['Apceros', 'Gajau', 'Kestodon', 'Noios'],
        'client': 'quest-client-smart-biologist',
        'description': 'quest-snatch-the-snatcher-description',
        'tips': 'quest-snatch-the-snatcher-tips'
    },
    {
        'name': 'The Pain from Gains',
        'translationKey': 'quest-the-pain-from-gains',
        'level': '2',
        'type': 'quest-type-slaying-quest',
        'objective': 'quest-objective-slay-7-gajau',
        'targetMonsters': ['Gajau'],
        'icon': require('./assets/quests/icon_slaying.png'),
        'rewardMoney': '1080',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-3-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Apceros', 'Kestodon', 'Noios'],
        'client': 'quest-client-the-meowscular-chef',
        'description': 'quest-the-pain-from-gains-description',
        'notableRewards': 'quest-the-pain-from-gains-notable-rewards',
        'tips': 'quest-the-pain-from-gains-tips'
    },
    {
        'name': 'Exterminator of the Waste',
        'translationKey': 'quest-exterminator-of-the-waste',
        'level': '2',
        'type': 'quest-type-slaying-quest',
        'objective': 'quest-objective-slay-14-vespoid',
        'targetMonsters': ['Vespoid'],
        'icon': require('./assets/quests/icon_slaying.png'),
        'rewardMoney': '1080',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-3-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Apceros', 'Kestodon', 'Gajau', 'Noios'],
        'client': 'quest-client-the-meowscular-chef',
        'description': 'quest-exterminator-of-the-waste-description',
        'tips': 'quest-exterminator-of-the-waste-tips'
    },
    {
        'name': 'The Great Glutton',
        'translationKey': 'quest-the-great-glutton',
        'level': '2',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-a-great-jagras',
        'targetMonsters': ['Great Jagras'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '1800',
        'timeLimit': '50',
        'conditions': ['quest-conditions-none'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Aptonoth', 'Mernos', 'Jagras'],
        'client': 'quest-client-chief-ecologist',
        'description': 'quest-the-great-glutton-description',
        'tips': 'quest-the-great-glutton-tips'
    },
    {
        'name': 'Scatternut Shortage',
        'translationKey': 'quest-scatternut-shortage',
        'level': '3',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-a-pukei-pukei',
        'targetMonsters': ['Pukei-Pukei'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '2520',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-2-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Aptonoth', 'Jagras', 'Mernos'],
        'description': 'quest-scatternut-shortage-description'
    },
    {
        'name': 'Landing the Landslide Wyvern',
        'translationKey': 'quest-landing-the-landslide-wyvern',
        'level': '3',
        'type': 'quest-type-capture-quest',
        'objective': 'quest-objective-capture-a-barroth',
        'targetMonsters': ['Barroth'],
        'icon': require('./assets/quests/icon_capture.png'),
        'rewardMoney': '3600',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-3-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times', 'quest-failure-barroth-is-slain'],
        'otherMonsters': ['Apceros', 'Gajau', 'Kestodon', 'Noios'],
        'client': 'quest-client-smart-biologist',
        'description': 'quest-landing-the-landslide-wyvern-description',
        'tips': 'quest-landing-the-landslide-wyvern-tips'
    },
    {
        'name': 'Special Arena: Pukei-Pukei',
        'translationKey': 'quest-special-arena-pukei-pukei',
        'level': '3',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-a-pukei-pukei',
        'targetMonsters': ['Pukei-Pukei'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '2520',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-3-or-higher', 'quest-conditions-capture-a-pukei-pukei'],
        'client': 'quest-client-arena-lass',
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'tips': 'quest-special-arena-pukei-pukei-tips'
    },
    {
        'name': 'Special Arena: Barroth',
        'translationKey': 'quest-special-arena-barroth',
        'level': '3',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-a-barroth',
        'targetMonsters': ['Barroth'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '2520',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-4-or-higher', 'quest-conditions-capture-a-barroth'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'client': 'quest-client-arena-lass',
        'description': 'quest-special-arena-barroth-description',
        'tips': 'quest-special-arena-barroth-tips'
    },
    {
        'name': 'Mired in the Spire',
        'translationKey': 'quest-mired-in-the-spire',
        'level': '3',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-a-barroth',
        'targetMonsters': ['Barroth'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '2520',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-3-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Apceros', 'Gajau', 'Kestodon', 'Noios'],
        'client': 'quest-client-chief-biologist',
        'description': 'quest-mired-in-the-spire-description',
        'tips': 'quest-mired-in-the-spire-tips'
    },
    {
        'name': 'Prickly Predicament',
        'translationKey': 'quest-prickly-predicament',
        'level': '3',
        'type': 'quest-type-delivery-quest',
        'objective': 'quest-objective-deliver-20-bauble-cactuses',
        'icon': require('./assets/quests/icon_delivery.png'),
        'rewardMoney': '1080',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-3-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Apceros', 'Gajau', 'Kestodon', 'Noios'],
        'client': 'quest-client-laid-back-botanist',
        'description': 'quest-prickly-predicament-description',
        'notableRewards': 'quest-prickly-predicament-notable-rewards',
        'tips': 'quest-prickly-predicament-tips'
    },
    {
        'name': 'Gettin\' Yolked in the Waste',
        'translationKey': 'quest-gettin-yolked-in-the-waste',
        'level': '3',
        'type': 'quest-type-delivery-quest',
        'objective': 'quest-objective-deliver-2-herbivore-eggs',
        'icon': require('./assets/quests/icon_delivery.png'),
        'rewardMoney': '1080',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-3-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Apceros', 'Kestodon', 'Gajau', 'Noios'],
        'client': 'quest-client-the-meowscular-chef',
        'description': 'quest-gettin-yolked-in-the-waste-description',
        'tips': 'quest-gettin-yolked-in-the-waste-tips'
    },
    {
        'name': 'Special Arena: Tobi-Kadachi',
        'translationKey': 'quest-special-arena-tobi-kadachi',
        'level': '3',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-a-tobi-kadachi',
        'targetMonsters': ['Tobi-Kadachi'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '3240',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-5-or-higher', 'quest-conditions-capture-a-tobi-kadachi'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'client': 'quest-client-arena-lass',
        'description': 'quest-special-arena-tobi-kadachi-description',
        'tips': 'quest-special-arena-tobi-kadachi-tips'
    },
    {
        'name': 'The Current Situation',
        'translationKey': 'quest-the-current-situation',
        'level': '3',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-a-tobi-kadachi',
        'targetMonsters': ['Tobi-Kadachi'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '3240',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-4-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Aptonoth', 'Mernos', 'Jagras'],
        'client': 'quest-client-chief-ecologist',
        'description': 'quest-the-current-situation-description',
        'tips': 'quest-the-current-situation-tips'
    },
    {
        'name': 'The Piscine Problem',
        'translationKey': 'quest-the-piscine-problem',
        'level': '3',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-a-jyuratodus',
        'targetMonsters': ['Jyuratodus'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '3240',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-3-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Apceros', 'Gajau', 'Kestodon', 'Noios'],
        'client': 'quest-client-chief-ecologist',
        'description': 'quest-the-piscine-problem-description',
        'tips': 'quest-the-piscine-problem-tips'
    },
    {
        'name': 'A Bone to Pick',
        'translationKey': 'quest-a-bone-to-pick',
        'level': '4',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-a-radobaan',
        'targetMonsters': ['Radobaan'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '4320',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-8-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Hornetaur', 'Raphinos', 'Girros'],
        'client': 'quest-client-chief-ecologist',
        'description': 'quest-a-bone-to-pick-description',
        'tips': 'quest-a-bone-to-pick-tips'
    },
    {
        'name': 'A Rotten Thing to Do',
        'translationKey': 'quest-a-rotten-thing-to-do',
        'level': '4',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-a-great-girros',
        'targetMonsters': ['Great Girros'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '3240',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-8-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Hornetaur', 'Raphinos', ' Girros'],
        'client': 'quest-client-stunned-researcher',
        'description': 'quest-a-rotten-thing-to-do-description',
        'tips': 'quest-a-rotten-thing-to-do-tips'
    },
    {
        'name': 'A Tzitzi for Science',
        'translationKey': 'quest-a-tzitzi-for-science',
        'level': '4',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-a-tzitzi-ya-ku',
        'targetMonsters': ['Tzitzi-Ya-Ku'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '3240',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-6-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Kelbi', 'Raphinos', 'Shamos'],
        'client': 'quest-client-eccentric-trio',
        'description': 'quest-a-tzitzi-for-science-description',
        'tips': 'quest-a-tzitzi-for-science-tips'
    },
    {
        'name': 'On Nightmare\'s Wings',
        'translationKey': 'quest-on-nightmares-wings',
        'level': '4',
        'type': 'quest-type-slaying-quest',
        'objective': 'quest-objective-slay-5-raphinos',
        'targetMonsters': ['Raphinos'],
        'icon': require('./assets/quests/icon_slaying.png'),
        'rewardMoney': '2520',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-8-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Hornetaur', 'Girros'],
        'client': 'quest-client-the-armory',
        'description': 'quest-on-nightmares-wings-description',
        'tips': 'quest-on-nightmares-wings-tips'
    },
    {
        'name': 'Special Arena: Anjanath',
        'translationKey': 'quest-special-arena-anjanath',
        'level': '4',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-an-anjanath',
        'targetMonsters': ['Anjanath'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '??',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-?-or-higher', 'quest-conditions-capture-an-anjanath'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'client': 'quest-client-arena-lass',
        'tips': 'quest-special-arena-anjanath-tips'
    },
    {
        'name': 'Special Arena: Rathian',
        'translationKey': 'quest-special-arena-rathian',
        'level': '4',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-a-rathian',
        'targetMonsters': ['Rathian'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '??',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-?-or-higher', 'quest-conditions-capture-a-rathian'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'client': 'quest-client-arena-lass',
        'tips': 'quest-special-arena-rathian-tips'
    },
    {
        'name': 'Special Arena: Paolumu',
        'translationKey': 'quest-special-arena-paolumu',
        'level': '4',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-a-paolumu',
        'targetMonsters': ['Paolumu'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '4320',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-7-or-higher', 'quest-conditions-capture-a-paolumu'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'client': 'quest-client-arena-lass',
        'description': 'quest-special-arena-paolumu-description',
        'tips': 'quest-special-arena-paolumu-tips'
    },
    {
        'name': 'Special Arena: Radobaan',
        'translationKey': 'quest-special-arena-radobaan',
        'level': '4',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-a-radobaan',
        'targetMonsters': ['Radobaan'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '??',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-?-or-higher', 'quest-conditions-capture-a-radobaan'],
        'client': 'quest-client-arena-lass',
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'tips': 'quest-special-arena-radobaan-tips'
    },
    {
        'name': 'Troubled Troupers',
        'translationKey': 'quest-troubled-troupers',
        'level': '4',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-2-tzitzi-ya-ku',
        'targetMonsters': ['Tzitzi-Ya-Ku'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '9000',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-6-or-higher, Max Player: 1'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Kelbi', 'Shamos', 'Raphinos'],
        'client': 'quest-client-troupers',
        'description': 'quest-troubled-troupers-description',
        'tips': 'quest-troubled-troupers-tips'
    },
    {
        'name': 'One Helluva Sinus Infection',
        'translationKey': 'quest-one-helluva-sinus-infection',
        'level': '4',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-an-anjanath',
        'targetMonsters': ['Anjanath'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '4320',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-4-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Aptonoth', 'Mernos', 'Jagras'],
        'client': 'quest-client-chief-ecologist',
        'description': 'quest-one-helluva-sinus-infection-description',
        'tips': 'quest-one-helluva-sinus-infection-tips'
    },
    {
        'name': 'Gettin\' Yolked in the Forest',
        'translationKey': 'quest-gettin-yolked-in-the-forest',
        'level': '4',
        'type': 'quest-type-delivery-quest',
        'objective': 'quest-objective-deliver-2-wyvern-eggs',
        'icon': require('./assets/quests/icon_delivery.png'),
        'rewardMoney': '3600',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-4-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Vespoid'],
        'client': 'quest-client-the-meowscular-chef',
        'description': 'quest-gettin-yolked-in-the-forest-description',
        'tips': 'quest-gettin-yolked-in-the-forest-tips'
    },
    {
        'name': 'Royal Relocation',
        'translationKey': 'quest-royal-relocation',
        'level': '4',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-a-rathian',
        'targetMonsters': ['Rathian'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '4320',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-5-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Apceros', 'Kestodon', 'Gajau', 'Noios'],
        'client': 'quest-client-laid-back-botanist',
        'description': 'quest-royal-relocation-description',
        'tips': 'quest-royal-relocation-tips'
    },
    {
        'name': 'It\'s a Crying Shamos',
        'translationKey': 'quest-its-a-crying-shamos',
        'level': '4',
        'type': 'quest-type-slaying-quest',
        'objective': 'quest-objective-slay-11-shamos',
        'targetMonsters': ['Shamos'],
        'icon': require('./assets/quests/icon_slaying.png'),
        'rewardMoney': '2520',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-6-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Kelbi', 'Raphinos'],
        'client': 'quest-client-the-meowscular-chef',
        'description': 'quest-its-a-crying-shamos-description',
        'notableRewards': 'quest-its-a-crying-shamos-notable-rewards',
        'tips': 'quest-its-a-crying-shamos-tips'
    },
    {
        'name': 'Persistent Pests',
        'translationKey': 'quest-persistent-pests',
        'level': '4',
        'type': 'quest-type-slaying-quest',
        'objective': 'quest-objective-slay-14-hornetaur',
        'targetMonsters': ['Hornetaur'],
        'icon': require('./assets/quests/icon_slaying.png'),
        'rewardMoney': '2520',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-8-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Girros', 'Raphinos'],
        'client': 'quest-client-chief-botanist',
        'description': 'quest-persistent-pests-description',
        'tips': 'quest-persistent-pests-tips'
    },
    {
        'name': 'Sorry You\'re Not Invited',
        'translationKey': 'quest-sorry-youre-not-invited',
        'level': '4',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-a-paolumu',
        'targetMonsters': ['Paolumu'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '4320',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-6-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Kelbi', 'Raphinos', 'Shamos'],
        'client': 'quest-client-chief-ecologist',
        'description': 'quest-sorry-youre-not-invited-description',
        'tips': 'quest-sorry-youre-not-invited-tips'
    },
    {
        'name': 'What a Bunch of Abalone',
        'translationKey': 'quest-what-a-bunch-of-abalone',
        'level': '4',
        'type': 'quest-type-delivery-quest',
        'objective': 'quest-objective-deliver-10-super-abalone',
        'icon': require('./assets/quests/icon_delivery.png'),
        'rewardMoney': '3600',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-6-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Kelbi', 'Shamos', 'Raphinos'],
        'client': 'quest-client-the-meowscular-chef',
        'description': 'quest-what-a-bunch-of-abalone-description',
        'notableRewards': 'quest-what-a-bunch-of-abalone-notable-rewards',
        'tips': 'quest-what-a-bunch-of-abalone-tips'
    },
    {
        'name': 'White Monster for a White Coat',
        'translationKey': 'quest-white-monster-for-a-white-coat',
        'level': '4',
        'type': 'quest-type-capture-quest',
        'objective': 'quest-objective-capture-a-paolumu',
        'targetMonsters': ['Paolumu'],
        'icon': require('./assets/quests/icon_capture.png'),
        'rewardMoney': '5760',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-6-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times', 'Paolumu is slain'],
        'otherMonsters': ['Kelbi', 'Raphinos', 'Shamos'],
        'client': 'quest-client-smart-biologist',
        'description': 'quest-white-monster-for-a-white-coat-description',
        'tips': 'quest-white-monster-for-a-white-coat-tips'
    },
    {
        'name': 'A Humid Headache',
        'translationKey': 'quest-a-humid-headache',
        'level': '5',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-a-legiana',
        'targetMonsters': ['Legiana'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '5400',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-8-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Kelbi', 'Raphinos', 'Shamos'],
        'client': 'quest-client-chief-ecologist',
        'description': 'quest-a-humid-headache-description'
    },
    {
        'name': 'Gone in a Flash',
        'translationKey': 'quest-gone-in-a-flash',
        'level': '5',
        'type': 'quest-type-slaying-quest',
        'objective': 'quest-objective-slay-a-kirin',
        'targetMonsters': ['Kirin'],
        'icon': require('./assets/quests/icon_slaying.png'),
        'rewardMoney': '9000',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-8-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'client': 'quest-client-impatient-biologist',
        'description': 'quest-gone-in-a-flash-description',
        'notableRewards': 'quest-gone-in-a-flash-notable-rewards',
        'notes': 'quest-gone-in-a-flash-notes'
    },
    {
        'name': 'Special Arena: Diablos',
        'translationKey': 'quest-special-arena-diablos',
        'level': '5',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-a-diablos',
        'targetMonsters': ['Diablos'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '5400',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-10-or-higher', 'quest-conditions-capture-a-diablos'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'client': 'quest-client-arena-lass',
        'description': 'quest-special-arena-diablos-description',
        'tips': 'quest-special-arena-diablos-tips'
    },
    {
        'name': 'Special Arena: Odogaron',
        'translationKey': 'quest-special-arena-odogaron',
        'level': '5',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-an-odogaron',
        'targetMonsters': ['Odogaron'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '5400',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-?-or-higher, quest-objective-capture-an-odogaron'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'client': 'quest-client-arena-lass',
        'tips': 'quest-special-arena-odogaron-tips'
    },
    {
        'name': 'Special Arena: Legiana',
        'translationKey': 'quest-special-arena-legiana',
        'level': '5',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-a-legiana',
        'targetMonsters': ['Legiana'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '5400',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-?-or-higher', 'quest-conditions-capture-a-legiana'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'client': 'quest-client-arena-lass',
        'tips': 'quest-special-arena-legiana-tips'
    },
    {
        'name': 'Man\'s Best Fiend',
        'translationKey': 'quest-mans-best-fiend',
        'level': '5',
        'type': 'quest-type-capture-quest',
        'objective': 'quest-objective-capture-an-odogaron',
        'targetMonsters': ['Odogaron'],
        'icon': require('./assets/quests/icon_capture.png'),
        'rewardMoney': '7200',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-8-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times', 'quest-failure-odogaron-is-slain'],
        'otherMonsters': ['Hornetaur', 'Raphinos', 'Girros'],
        'client': 'quest-client-smart-biologist',
        'description': 'quest-mans-best-fiend-description',
        'tips': 'quest-mans-best-fiend-tips'
    },
    {
        'name': 'The Meat of the Matter',
        'translationKey': 'quest-the-meat-of-the-matter',
        'level': '5',
        'type': 'quest-type-delivery-quest',
        'objective': 'quest-objective-deliver-2-lumps-of-meat',
        'icon': require('./assets/quests/icon_delivery.png'),
        'rewardMoney': '3600',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-8-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Hornetaur', 'Girros', 'Raphinos'],
        'client': 'quest-client-the-meowscular-chef',
        'description': 'quest-the-meat-of-the-matter-description',
        'notableRewards': 'quest-the-meat-of-the-matter-notable-rewards',
        'tips': 'quest-the-meat-of-the-matter-tips'
    },
    {
        'name': 'Special Arena: Rathalos',
        'translationKey': 'quest-special-arena-rathalos',
        'level': '5',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-a-rathalos',
        'targetMonsters': ['Rathalos'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '5400',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-?-or-higher', 'quest-conditions-capture-a-rathalos'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'client': 'quest-client-arena-lass',
        'tips': 'quest-special-arena-rathalos-tips'
    },
    {
        'name': 'Redefining the "Power Couple"',
        'translationKey': 'quest-redefining-the-power-couple',
        'level': '5',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-all-target-monsters',
        'targetMonsters': ['Rathalos', 'Rathian'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '7920',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-9-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Aptonoth', 'Mernos', 'Jagras'],
        'client': 'quest-client-the-armory',
        'description': 'quest-redefining-the-power-couple-description',
        'notableRewards': 'quest-redefining-the-power-couple-notable-rewards'
    },
    {
        'name': 'Scratching the Itch',
        'translationKey': 'quest-scratching-the-itch',
        'level': '5',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-an-odogaron',
        'targetMonsters': ['Odogaron'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '5400',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-8-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Hornetaur', 'Raphinos', 'Girros'],
        'client': 'quest-client-chief-ecologist',
        'description': 'quest-scratching-the-itch-description'
    },
    {
        'name': 'Twin Spines Upon the Sands',
        'translationKey': 'quest-twin-spines-upon-the-sands',
        'level': '5',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-a-diablos',
        'targetMonsters': ['Diablos'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '5400',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-8-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Apceros', 'Gajau', 'Kestodon', 'Noios'],
        'client': 'quest-client-chief-ecologist',
        'description': 'quest-twin-spines-upon-the-sands-description'
    },
    {
        'name': 'When Desire Becomes an Obsession',
        'translationKey': 'quest-when-desire-becomes-an-obsession',
        'level': '5',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-a-rathalos',
        'targetMonsters': ['Rathalos'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '5400',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-8-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Aptonoth', 'Mernos', 'Jagras'],
        'client': 'quest-client-chief-ecologist',
        'description': 'quest-when-desire-becomes-an-obsession-description'
    },
    {
        'name': 'A Crown of Mud and Anger',
        'translationKey': 'quest-a-crown-of-mud-and-anger',
        'level': '6',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-a-barroth',
        'targetMonsters': ['Barroth'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '7200',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-11-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Apceros', 'Noios', 'Kestodon', 'Gajalaka'],
        'client': 'quest-client-the-commander',
        'description': 'quest-a-crown-of-mud-and-anger-description',
        'notes': 'quest-a-crown-of-mud-and-anger-notes'
    },
    {
        'name': 'A Hair-Raising Experience',
        'translationKey': 'quest-a-hair-raising-experience',
        'level': '6',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-a-tobi-kadachi',
        'targetMonsters': ['Tobi-Kadachi'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '7200',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-11-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Aptonoth', 'Mernos', 'Jagras', 'Gajalaka'],
        'client': 'quest-client-the-commander',
        'description': 'quest-a-hair-raising-experience-description',
        'notes': 'quest-a-hair-raising-experience-notes'
    },
    {
        'name': 'A Meow for Help',
        'translationKey': 'quest-a-meow-for-help',
        'level': '6',
        'type': 'quest-type-slaying-quest',
        'objective': 'quest-objective-slay-13-gastodon',
        'targetMonsters': ['Gastodon'],
        'icon': require('./assets/quests/icon_slaying.png'),
        'rewardMoney': '5400',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-13-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Barnos', 'Gajalaka'],
        'client': 'quest-client-foraging-felyne',
        'description': 'quest-a-meow-for-help-description',
        'tips': 'quest-a-meow-for-help-tips'
    },
    {
        'name': 'A Scalding Scoop',
        'translationKey': 'quest-a-scalding-scoop',
        'level': '6',
        'type': 'quest-type-slaying-quest',
        'objective': 'quest-objective-slay-5-barnos',
        'targetMonsters': ['Barnos'],
        'icon': require('./assets/quests/icon_slaying.png'),
        'rewardMoney': '6480',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-13-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Gastodon', 'Gajalaka'],
        'client': 'quest-client-daredevil-editor',
        'description': 'quest-a-scalding-scoop-description',
        'tips': 'quest-a-scalding-scoop-tips'
    },
    {
        'name': 'A Tingling Taste',
        'translationKey': 'quest-a-tingling-taste',
        'level': '6',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-a-great-girros',
        'targetMonsters': ['Great Girros'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '5400',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-11-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Hornetaur', 'Raphinos', 'Girros', 'Gajalaka'],
        'client': 'quest-client-third-fleet-master',
        'description': 'quest-a-tingling-taste-description',
        'notes': 'quest-a-tingling-taste-notes'
    },
    {
        'name': 'Left Quite the Impression',
        'translationKey': 'quest-left-quite-the-impression',
        'level': '6',
        'type': 'quest-type-special-quest',
        'objective': 'quest-objective-complete-the-quest',
        'targetMonsters': ['Zorah Magdaros'],
        'icon': require('./assets/quests/icon_special.png'),
        'rewardMoney': '8280',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-11-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times', 'quest-failure-fail-to-guide-zorah-magdaros'],
        'client': 'quest-client-chief-ecologist',
        'description': 'quest-left-quite-the-impression-description',
        'notes': 'quest-left-quite-the-impression-notes'
    },
    {
        'name': 'Brown Desert, Green Queen',
        'translationKey': 'quest-brown-desert-green-queen',
        'level': '6',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-a-rathian',
        'targetMonsters': ['Rathian'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '9000',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-11-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Apceros', 'Noios', 'Kestodon', 'Gajalaka'],
        'client': 'quest-client-the-commander',
        'description': 'quest-brown-desert-green-queen-description',
        'notes': 'quest-brown-desert-green-queen-notes'
    },
    {
        'name': 'Dodogama Drama',
        'translationKey': 'quest-dodogama-drama',
        'level': '6',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-a-dodogama',
        'targetMonsters': ['Dodogama'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '9000',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-13-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Gastodon', 'Gajalaka', 'Barnos'],
        'client': 'quest-client-serious-handler',
        'description': 'quest-dodogama-drama-description',
        'tips': 'quest-dodogama-drama-tips'
    },
    {
        'name': 'Chef Quest! Gajalaka Lockdown',
        'translationKey': 'quest-chef-quest-gajalaka-lockdown',
        'level': '6',
        'type': 'quest-type-slaying-quest',
        'objective': 'quest-objective-defeat-10-gajalaka',
        'targetMonsters': ['Gajalaka'],
        'icon': require('./assets/quests/icon_slaying.png'),
        'rewardMoney': '5400',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-13-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Gastodon', 'Barnos'],
        'client': 'quest-client-the-meowscular-chef',
        'description': 'quest-chef-quest-gajalaka-lockdown-description',
        'notableRewards': 'quest-chef-quest-gajalaka-lockdown-notable-rewards'
    },
    {
        'name': 'Special Arena: HR Pukei-Pukei',
        'translationKey': 'quest-special-arena-hr-pukei-pukei',
        'level': '6',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-a-pukei-pukei',
        'targetMonsters': ['Pukei-Pukei'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '??',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-?-or-higher', 'quest-conditions-capture-hr-pukei-pukei'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'client': 'quest-client-arena-lass',
        'notes': 'quest-special-arena-hr-pukei-pukei-notes'
    },
    {
        'name': 'Special Arena: HR Anjanath',
        'translationKey': 'quest-special-arena-hr-anjanath',
        'level': '6',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-an-anjanath',
        'targetMonsters': ['Anjanath'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '??',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-?-or-higher', 'quest-conditions-capture-hr-anjanath'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'client': 'quest-client-arena-lass',
        'notes': 'quest-special-arena-hr-anjanath-notes'
    },
    {
        'name': 'Special Arena: HR Barroth',
        'translationKey': 'quest-special-arena-hr-barroth',
        'level': '6',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-a-barroth',
        'targetMonsters': ['Barroth'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '??',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-?-or-higher', 'quest-conditions-capture-hr-barroth'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'client': 'quest-client-arena-lass',
        'notes': 'quest-special-arena-hr-barroth-notes'
    },
    {
        'name': 'Special Arena: HR Paolumu',
        'translationKey': 'quest-special-arena-hr-paolumu',
        'level': '6',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-a-paolumu',
        'targetMonsters': ['Paolumu'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '??',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-?-or-higher', 'quest-conditions-capture-hr-paolumu'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'client': 'quest-client-arena-lass',
        'notes': 'quest-special-arena-hr-paolumu-notes'
    },
    {
        'name': 'Special Arena: HR Tobi-Kadachi',
        'translationKey': 'quest-special-arena-hr-tobi-kadachi',
        'level': '6',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-a-tobi-kadachi',
        'targetMonsters': ['Tobi-Kadachi'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '??',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-?-or-higher', 'quest-conditions-capture-hr-tobi-kadachi'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'client': 'quest-client-arena-lass',
        'notes': 'quest-special-arena-hr-tobi-kadachi-notes'
    },
    {
        'name': 'Special Arena: HR Rathian',
        'translationKey': 'quest-special-arena-hr-rathian',
        'level': '6',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-a-rathian',
        'targetMonsters': ['Rathian'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '??',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-?-or-higher', 'quest-conditions-capture-hr-rathian'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'client': 'quest-client-arena-lass',
        'notes': 'quest-special-arena-hr-rathian-notes'
    },
    {
        'name': 'Special Arena: HR Radobaan',
        'translationKey': 'quest-special-arena-hr-radobaan',
        'level': '6',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-a-radobaan',
        'targetMonsters': ['Radobaan'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '??',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-?-or-higher', 'quest-conditions-capture-hr-radobaan'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'client': 'quest-client-arena-lass',
        'notes': 'quest-special-arena-hr-radobaan-notes'
    },
    {
        'name': 'Googly-eyed Green Monster',
        'translationKey': 'quest-googly-eyed-green-monster',
        'level': '6',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-a-pukei-pukei',
        'targetMonsters': ['Pukei-Pukei'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '7200',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-11-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Aptonoth', 'Mernos', 'Jagras', 'Gajalaka'],
        'client': 'quest-client-the-commander',
        'description': 'quest-googly-eyed-green-monster-description',
        'notes': 'quest-googly-eyed-green-monster-notes'
    },
    {
        'name': 'Hard to Swallow',
        'translationKey': 'quest-hard-to-swallow',
        'level': '6',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-a-great-jagras',
        'targetMonsters': ['Great Jagras'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '5400',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-11-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Aptonoth', 'Mernos', 'Jagras', 'Gajalaka'],
        'client': 'quest-client-the-commander',
        'description': 'quest-hard-to-swallow-description',
        'notes': 'quest-hard-to-swallow-notes'
    },
    {
        'name': 'It Can\'t See You if You Don\'t Move',
        'translationKey': 'quest-it-cant-see-you-if-you-dont-move',
        'level': '6',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-an-anjanath',
        'targetMonsters': ['Anjanath'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '9000',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-11-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Aptonoth', 'Mernos', 'Jagras', 'Gajalaka'],
        'client': 'quest-client-the-commander',
        'description': 'quest-it-cant-see-you-if-you-dont-move-description',
        'notes': 'quest-it-cant-see-you-if-you-dont-move-notes'
    },
    {
        'name': 'Keep Your Hands to Yourself!',
        'translationKey': 'quest-keep-your-hands-to-yourself',
        'level': '6',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-a-kulu-ya-ku',
        'targetMonsters': ['Kulu-Ya-Ku'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '5400',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-11-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Apceros', 'Noios', 'Kestodon', 'Gajalaka'],
        'client': 'quest-client-the-commander',
        'description': 'quest-keep-your-hands-to-yourself-description',
        'notes': 'quest-keep-your-hands-to-yourself-notes'
    },
    {
        'name': 'Loop the Paolumu',
        'translationKey': 'quest-loop-the-paolumu',
        'level': '6',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-a-paolumu',
        'targetMonsters': ['Paolumu'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '7200',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-11-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Kelbi', 'Raphinos', 'Shamos', 'Gajalak'],
        'client': 'quest-client-the-commander',
        'description': 'quest-loop-the-paolumu-description',
        'notes': 'quest-loop-the-paolumu-notes'
    },
    {
        'name': 'Pukei-Pukei Ambush',
        'translationKey': 'quest-pukei-pukei-ambush',
        'level': '6',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-a-pukei-pukei',
        'targetMonsters': ['Pukei-Pukei'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '7200',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-11-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Apceros', 'Noios', 'Kestodon', 'Gajalaka'],
        'client': 'quest-client-the-commander',
        'description': 'quest-pukei-pukei-ambush-description',
        'notes': 'quest-pukei-pukei-ambush-notes'
    },
    {
        'name': 'Say Cheese!',
        'translationKey': 'quest-say-cheese',
        'level': '6',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-a-tzitzi-ya-ku',
        'targetMonsters': ['Tzitzi-Ya-Ku'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '5400',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-11-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Kelbi', 'Raphinos', 'Shamos', 'Gajalaka'],
        'client': 'quest-client-the-commander',
        'description': 'quest-say-cheese-description',
        'notes': 'quest-say-cheese-notes'
    },
    {
        'name': 'Stuck in a Rut',
        'translationKey': 'quest-stuck-in-a-rut',
        'level': '6',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-a-radobaan',
        'targetMonsters': ['Radobaan'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '9000',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-11-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Hornetaur', 'Raphinos', 'Girros', 'Gajalaka'],
        'client': 'quest-client-the-commander',
        'description': 'quest-stuck-in-a-rut-description',
        'notes': 'quest-stuck-in-a-rut-notes'
    },
    {
        'name': 'Chef Quest! Pumped to Deliver',
        'translationKey': 'quest-chef-quest-pumped-to-deliver',
        'level': '6',
        'type': 'quest-type-delivery-quest',
        'objective': 'quest-objective-deliver-4-forgotten-fossils',
        'icon': require('./assets/quests/icon_delivery.png'),
        'rewardMoney': '5400',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-11-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Hornetaur', 'Raphinos', 'Girros', 'Gajalaka'],
        'client': 'quest-client-the-meowscular-chef',
        'description': 'quest-chef-quest-pumped-to-deliver-description',
        'notableRewards': 'quest-chef-quest-pumped-to-deliver-notable-rewards',
        'tips': 'quest-chef-quest-pumped-to-deliver-tips'
    },
    {
        'name': 'Chef Quest! A Rotten Request',
        'translationKey': 'quest-chef-quest-a-rotten-request',
        'level': '6',
        'type': 'quest-type-slaying-quest',
        'objective': 'quest-objective-slay-10-girros',
        'targetMonsters': ['Girros'],
        'icon': require('./assets/quests/icon_slaying.png'),
        'rewardMoney': '5400',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-11-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Hornetaur', 'Raphinos'],
        'client': 'quest-client-the-meowscular-chef',
        'description': 'quest-chef-quest-a-rotten-request-description',
        'notableRewards': 'quest-chef-quest-a-rotten-request-notable-rewards',
        'tips': 'quest-chef-quest-a-rotten-request-tips'
    },
    {
        'name': 'Stuck in Their Ways',
        'translationKey': 'quest-stuck-in-their-ways',
        'level': '6',
        'type': 'quest-type-capture-quest',
        'objective': 'quest-objective-capture-a-tobi-kadachi',
        'targetMonsters': ['Tobi-Kadachi'],
        'icon': require('./assets/quests/icon_capture.png'),
        'rewardMoney': '9360',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-11-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times', 'Tobi-Kadachi is slain'],
        'otherMonsters': ['Aptonoth', 'Mernos', 'Jagras', 'Gajalaka'],
        'client': 'quest-client-shy-scholar',
        'description': 'quest-stuck-in-their-ways-description',
        'notableRewards': 'quest-stuck-in-their-ways-notable-rewards',
        'notes': 'quest-stuck-in-their-ways-notes'
    },
    {
        'name': 'The Sleeping Sylvan Queen',
        'translationKey': 'quest-the-sleeping-sylvan-queen',
        'level': '6',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-a-rathian',
        'targetMonsters': ['Rathian'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '9000',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-11-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Aptonoth', 'Mernos', 'Jagras', 'Gajalaka'],
        'client': 'quest-client-the-commander',
        'description': 'quest-the-sleeping-sylvan-queen-description',
        'notes': 'quest-the-sleeping-sylvan-queen-notes'
    },
    {
        'name': 'Trespassing Troublemaker',
        'translationKey': 'quest-trespassing-troublemaker',
        'level': '6',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-an-anjanath',
        'targetMonsters': ['Anjanath'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '9000',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-11-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Apceros', 'Noios', 'Kestodon', 'Gajalaka'],
        'client': 'quest-client-the-commander',
        'description': 'quest-trespassing-troublemaker-description',
        'notes': 'quest-trespassing-troublemaker-notes'
    },
    {
        'name': 'Up to Your Waist in the Waste',
        'translationKey': 'quest-up-to-your-waist-in-the-waste',
        'level': '6',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-a-jyuratodus',
        'targetMonsters': ['Jyuratodus'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '9000',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-11-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Apceros', 'Noios', 'Kestodon', 'Gajalaka '],
        'client': 'quest-client-the-commander',
        'description': 'quest-up-to-your-waist-in-the-waste-description',
        'notes': 'quest-up-to-your-waist-in-the-waste-notes'
    },
    {
        'name': 'A Cherry Wind Upon the Reefs',
        'translationKey': 'quest-a-cherry-wind-upon-the-reefs',
        'level': '7',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-a-pink-rathian',
        'targetMonsters': ['Pink Rathian'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '12600',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-12-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Kelbi', 'Raphinos', 'Shamos', 'Gajalaka'],
        'client': 'quest-client-the-commander',
        'description': 'quest-a-cherry-wind-upon-the-reefs-description',
        'notes': 'quest-a-cherry-wind-upon-the-reefs-notes'
    },
    {
        'name': 'A Fiery Convergence',
        'translationKey': 'quest-a-fiery-convergence',
        'level': '7',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-all-target-monsters',
        'targetMonsters': ['Lavasioth', 'Uragaan'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '21600',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-13-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Gastodon', 'Gajalaka', 'Barnos'],
        'client': 'quest-client-the-armory',
        'description': 'quest-a-fiery-convergence-description',
        'notableRewards': 'quest-a-fiery-convergence-notable-rewards'
    },
    {
        'name': 'Special Arena: HR Uragaan',
        'translationKey': 'quest-special-arena-hr-uragaan',
        'level': '7',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-an-uragaan',
        'targetMonsters': ['Uragaan'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '??',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-?-or-higher', 'quest-conditions-capture-hr-uragaan'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'client': 'quest-client-arena-lass',
        'notes': 'quest-special-arena-hr-uragaan-notes'
    },
    {
        'name': 'Special Arena: HR Pink Rathian',
        'translationKey': 'quest-special-arena-hr-pink-rathian',
        'level': '7',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-a-pink-rathian',
        'targetMonsters': ['Pink Rathian'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '??',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-?-or-higher', 'quest-conditions-capture-hr-pink-rathian'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'client': 'quest-client-arena-lass',
        'notes': 'quest-special-arena-hr-pink-rathian-notes'
    },
    {
        'name': 'Special Arena: HR Odogaron',
        'translationKey': 'quest-special-arena-hr-odogaron',
        'level': '7',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-an-odogaron',
        'targetMonsters': ['Odogaron'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '??',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-?-or-higher', 'quest-conditions-capture-hr-odogaron'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'client': 'quest-client-arena-lass',
        'notes': 'quest-special-arena-hr-odogaron-notes'
    },
    {
        'name': 'Special Arena: HR Rathalos',
        'translationKey': 'quest-special-arena-hr-rathalos',
        'level': '7',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-a-rathalos',
        'targetMonsters': ['Rathalos'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '12600',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-13-or-higher', 'quest-conditions-capture-hr-rathalos'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'client': 'quest-client-arena-lass',
        'description': 'quest-special-arena-hr-rathalos-description',
        'notes': 'quest-special-arena-hr-rathalos-notes'
    },
    {
        'name': 'Special Arena: HR Azure Rathalos',
        'translationKey': 'quest-special-arena-hr-azure-rathalos',
        'level': '7',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-an-azure-rathalos',
        'targetMonsters': ['Azure Rathalos'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '??',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-?-or-higher', 'quest-conditions-capture-hr-azure-rathalos'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'client': 'quest-client-arena-lass',
        'notes': 'quest-special-arena-hr-azure-rathalos-notes'
    },
    {
        'name': 'Special Arena: HR Diablos',
        'translationKey': 'quest-special-arena-hr-diablos',
        'level': '7',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-a-diablos',
        'targetMonsters': ['Diablos'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '??',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-?-or-higher', 'quest-conditions-capture-hr-diablos'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'client': 'quest-client-arena-lass',
        'notes': 'quest-special-arena-hr-diablos-notes'
    },
    {
        'name': 'Special Arena: HR Black Diablos',
        'translationKey': 'quest-special-arena-hr-black-diablos',
        'level': '7',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-a-black-diablos',
        'targetMonsters': ['Black Diablos'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '??',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-?-or-higher', 'quest-conditions-capture-hr-black-diablos'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'client': 'quest-client-arena-lass',
        'notes': 'quest-special-arena-hr-black-diablos-notes'
    },
    {
        'name': 'Special Arena: HR Legiana',
        'translationKey': 'quest-special-arena-hr-legiana',
        'level': '7',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-a-legiana',
        'targetMonsters': ['Legiana'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '??',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-?-or-higher', 'quest-conditions-capture-hr-legiana'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'client': 'quest-client-arena-lass',
        'notes': 'quest-special-arena-hr-legiana-notes'
    },
    {
        'name': 'Bazelgeuse in the Field of Fire',
        'translationKey': 'quest-bazelgeuse-in-the-field-of-fire',
        'level': '7',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-a-bazelgeuse',
        'targetMonsters': ['Bazelgeuse'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '14400',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-13-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Gastodon', 'Gajalaka', 'Barnos'],
        'client': 'quest-client-smart-biologist',
        'description': 'quest-bazelgeuse-in-the-field-of-fire-description'
    },
    {
        'name': 'Well, That Diablos!',
        'translationKey': 'quest-well-that-diablos',
        'level': '7',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-a-diablos',
        'targetMonsters': ['Diablos'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '12600',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-13-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Apceros', 'Noios', 'Kestodon', 'Gajalaka'],
        'client': 'quest-client-the-commander',
        'description': 'quest-well-that-diablos-description',
        'notes': 'quest-well-that-diablos-notes'
    },
    {
        'name': 'Two-Horned Hostility',
        'translationKey': 'quest-two-horned-hostility',
        'level': '7',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-a-black-diablos',
        'targetMonsters': ['Black Diablos'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '14400',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-13-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Apceros', 'Kestodon', 'Noios', 'Gajalaka'],
        'client': 'quest-client-serious-handler',
        'description': 'quest-two-horned-hostility-description',
        'notes': 'quest-two-horned-hostility-notes'
    },
    {
        'name': 'RRRRRumble in the Waste!',
        'translationKey': 'quest-rrrrrumble-in-the-waste',
        'level': '7',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-all-target-monsters',
        'targetMonsters': ['Diablos', 'Black Diablos'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '21600',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-13-or-higher, quest-rrrrrumble-in-the-waste-conditions'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Apceros', 'Kestodon', 'Noios', 'Gajalaka'],
        'client': 'quest-client-third-fleet-master',
        'description': 'quest-rrrrrumble-in-the-waste-description',
        'notableRewards': 'quest-rrrrrumble-in-the-waste-notable-rewards',
        'notes': 'quest-rrrrrumble-in-the-waste-notes'
    },
    {
        'name': 'Lavasioth, Monster of Magma',
        'translationKey': 'quest-lavasioth-monster-of-magma',
        'level': '7',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-a-lavasioth',
        'targetMonsters': ['Lavasioth'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '12600',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-13-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Gastodon', 'Gajalaka', 'Barnos', 'Gajalaka'],
        'client': 'quest-client-serious-handler',
        'description': 'quest-lavasioth-monster-of-magma-description'
    },
    {
        'name': 'Legiana: Highlands Royalty',
        'translationKey': 'quest-legiana-highlands-royalty',
        'level': '7',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-a-legiana',
        'targetMonsters': ['Legiana'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '12600',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-13-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Kelbi', 'Raphinos', 'Shamos', 'Gajalaka'],
        'client': 'quest-client-the-commander',
        'description': 'quest-legiana-highlands-royalty-description',
        'notes': 'quest-legiana-highlands-royalty-notes'
    },
    {
        'name': 'A Sore Site',
        'translationKey': 'quest-a-sore-site',
        'level': '7',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-an-odogaron',
        'targetMonsters': ['Odogaron'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '12600',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-13-or-higher', 'given by Airship Engineer in Research Base'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Kelbi', 'Shamos', 'Raphinos', 'Gajalaka'],
        'client': 'quest-client-airship-engineer',
        'description': 'quest-a-sore-site-description',
        'notableRewards': 'quest-a-sore-site-notable-rewards',
        'notes': 'quest-a-sore-site-notes'
    },
    {
        'name': 'Odogaron Unleashed',
        'translationKey': 'quest-odogaron-unleashed',
        'level': '7',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-an-odogaron',
        'targetMonsters': ['Odogaron'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '12600',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-13-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Hornetaur', 'Raphinos', 'Girros', 'Gajalaka'],
        'client': 'quest-client-the-commander',
        'description': 'quest-odogaron-unleashed-description',
        'notes': 'quest-odogaron-unleashed-notes'
    },
    {
        'name': 'Ore-eating Occupier',
        'translationKey': 'quest-ore-eating-occupier',
        'level': '7',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-an-uragaan',
        'targetMonsters': ['Uragaan'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '14400',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-13-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Gastodon', 'Gajalaka', 'Barnos'],
        'client': 'quest-client-serious-handler',
        'description': 'quest-ore-eating-occupier-description'
    },
    {
        'name': 'Pretty in Pink',
        'translationKey': 'quest-pretty-in-pink',
        'level': '7',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-a-pink-rathian',
        'targetMonsters': ['Pink Rathian'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '12600',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-12-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Apceros', 'Noios', 'Kestodon', 'Gajalaka'],
        'client': 'quest-client-the-commander',
        'description': 'quest-pretty-in-pink-description',
        'notes': 'quest-pretty-in-pink-notes'
    },
    {
        'name': 'Rathalos in Blue',
        'translationKey': 'quest-rathalos-in-blue',
        'level': '7',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-an-azure-rathalos',
        'targetMonsters': ['Azure Rathalos'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '14400',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-13-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Aptonoth', 'Mernos', 'Jagras', 'Gajalaka'],
        'client': 'quest-client-the-commander',
        'description': 'quest-rathalos-in-blue-description',
        'notes': 'quest-rathalos-in-blue-notes'
    },
    {
        'name': 'Rathalos Rematch',
        'translationKey': 'quest-rathalos-rematch',
        'level': '7',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-a-rathalos',
        'targetMonsters': ['Rathalos'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '12600',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-13-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Aptonoth', 'Mernos', 'Jagras', 'Gajalaka'],
        'client': 'quest-client-the-commander',
        'description': 'quest-rathalos-rematch-description',
        'notes': 'quest-rathalos-rematch-notes'
    },
    {
        'name': 'Ruler of the Azure Skies',
        'translationKey': 'quest-ruler-of-the-azure-skies',
        'level': '7',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-an-azure-rathalos',
        'targetMonsters': ['Azure Rathalos'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '14400',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-13-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Gastodon', 'Gajalaka', 'Barnos'],
        'client': 'quest-client-the-commander',
        'description': 'quest-ruler-of-the-azure-skies-description',
        'notes': 'quest-ruler-of-the-azure-skies-notes'
    },
    {
        'name': 'Talons of Ire and Ice',
        'translationKey': 'quest-talons-of-ire-and-ice',
        'level': '7',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-all-target-monsters',
        'targetMonsters': ['Legiana', 'Odogaron'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '20160',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-13-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Kelbi', 'Raphinos', 'Shamos', 'Gajalaka'],
        'client': 'quest-client-chief-botanist',
        'description': 'quest-talons-of-ire-and-ice-description',
        'notes': 'quest-talons-of-ire-and-ice-notes'
    },
    {
        'name': 'The Red and Blue Crew',
        'translationKey': 'quest-the-red-and-blue-crew',
        'level': '7',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-all-target-monsters',
        'targetMonsters': ['Rathalos', 'Azure Rathalos'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '21600',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-13-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Aptonoth', 'Mernos', 'Jagras', 'Gajalaka'],
        'client': 'quest-client-the-armory',
        'description': 'quest-the-red-and-blue-crew-description',
        'notableRewards': 'quest-the-red-and-blue-crew-notable-rewards',
        'notes': 'quest-the-red-and-blue-crew-notes'
    },
    {
        'name': 'Today\'s Special: Hunter Flambé',
        'translationKey': 'quest-todays-special-hunter-flambe',
        'level': '7',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-a-deviljho',
        'targetMonsters': ['Deviljho'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '14400',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-13-or-higher, quest-todays-special-hunter-flambe-conditions'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Aptonoth', 'Jagras', 'Mernos', 'Gajalaka'],
        'client': 'quest-client-the-handler',
        'description': 'quest-todays-special-hunter-flambe-description',
        'notes': 'quest-todays-special-hunter-flambe-notes'
    },
    {
        'name': 'A Portent of Disaster',
        'translationKey': 'quest-a-portent-of-disaster',
        'level': '8',
        'type': 'quest-type-slaying-quest',
        'objective': 'quest-objective-slay-a-kushala-daora',
        'targetMonsters': ['Kushala Daora'],
        'icon': require('./assets/quests/icon_slaying.png'),
        'rewardMoney': '18000',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-14-or-higher, quest-a-portent-of-disaster-conditions'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'client': 'quest-client-the-armory',
        'description': 'quest-a-portent-of-disaster-description'
    },
    {
        'name': 'Lightning Strikes Twice',
        'translationKey': 'quest-lightning-strikes-twice',
        'level': '8',
        'type': 'quest-type-slaying-quest',
        'objective': 'quest-objective-slay-a-kirin',
        'targetMonsters': ['Kirin'],
        'icon': require('./assets/quests/icon_slaying.png'),
        'rewardMoney': '18000',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-14-or-higher, quest-lightning-strikes-twice-conditions'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'client': 'quest-client-impatient-biologist',
        'description': 'quest-lightning-strikes-twice-description'
    },
    {
        'name': 'Blue Prominence',
        'translationKey': 'quest-blue-prominence',
        'level': '8',
        'type': 'quest-type-slaying-quest',
        'objective': 'quest-objective-slay-lunastra',
        'targetMonsters': ['Lunastra'],
        'icon': require('./assets/quests/icon_slaying.png'),
        'rewardMoney': '18000',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-16-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'client': 'quest-client-endemic-life-researcher',
        'description': 'quest-blue-prominence-description'
    },
    {
        'name': 'Stirrings from the Grave',
        'translationKey': 'quest-stirrings-from-the-grave',
        'level': '8',
        'type': 'quest-type-slaying-quest',
        'objective': 'quest-objective-slay-vaal-hazak',
        'targetMonsters': ['Vaal Hazak'],
        'icon': require('./assets/quests/icon_slaying.png'),
        'rewardMoney': '18000',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-14-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Girros', 'Raphinos'],
        'client': 'quest-client-chief-ecologist',
        'description': 'quest-stirrings-from-the-grave-description'
    },
    {
        'name': 'Master of the Gale',
        'translationKey': 'quest-master-of-the-gale',
        'level': '8',
        'type': 'quest-type-slaying-quest',
        'objective': 'quest-objective-slay-a-kushala-daora',
        'targetMonsters': ['Kushala Daora'],
        'icon': require('./assets/quests/icon_slaying.png'),
        'rewardMoney': '18000',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-14-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'client': 'quest-client-chief-ecologist',
        'description': 'quest-master-of-the-gale-description'
    },
    {
        'name': 'The Eater of Elders',
        'translationKey': 'quest-the-eater-of-elders',
        'level': '8',
        'type': 'quest-type-slaying-quest',
        'objective': 'quest-objective-slay-nergigante',
        'targetMonsters': ['Nergigante'],
        'icon': require('./assets/quests/icon_slaying.png'),
        'rewardMoney': '18000',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-13-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'client': 'quest-client-the-admiral',
        'description': 'quest-the-eater-of-elders-description'
    },
    {
        'name': 'Hellfire\'s Stronghold',
        'translationKey': 'quest-hellfires-stronghold',
        'level': '8',
        'type': 'quest-type-slaying-quest',
        'objective': 'quest-objective-slay-a-teostra',
        'targetMonsters': ['Teostra'],
        'icon': require('./assets/quests/icon_slaying.png'),
        'rewardMoney': '18000',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-14-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'client': 'quest-client-chief-ecologist',
        'description': 'quest-hellfires-stronghold-description'
    },
    {
        'name': 'The Winds of Wrath Bite Deep',
        'translationKey': 'quest-the-winds-of-wrath-bite-deep',
        'level': '8',
        'type': 'quest-type-slaying-quest',
        'objective': 'quest-objective-slay-a-kushala-daora',
        'targetMonsters': ['Kushala Daora'],
        'icon': require('./assets/quests/icon_slaying.png'),
        'rewardMoney': '18000',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-14-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'client': 'quest-client-the-admiral',
        'description': 'quest-the-winds-of-wrath-bite-deep-description'
    },
    {
        'name': 'The Fires of Hell Bite Deep',
        'translationKey': 'quest-the-fires-of-hell-bite-deep',
        'level': '8',
        'type': 'quest-type-slaying-quest',
        'objective': 'quest-objective-slay-a-teostra',
        'targetMonsters': ['Teostra'],
        'icon': require('./assets/quests/icon_slaying.png'),
        'rewardMoney': '18000',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-14-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'client': 'quest-client-the-admiral',
        'description': 'quest-the-fires-of-hell-bite-deep-description'
    },
    {
        'name': 'A Blaze on the Sand',
        'translationKey': 'quest-a-blaze-on-the-sand',
        'level': '8',
        'type': 'quest-type-slaying-quest',
        'objective': 'quest-objective-slay-a-teostra',
        'targetMonsters': ['Teostra'],
        'icon': require('./assets/quests/icon_slaying.png'),
        'rewardMoney': '18000',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-14-or-higher, quest-a-blaze-on-the-sand-conditions'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'client': 'quest-client-the-armory',
        'description': 'quest-a-blaze-on-the-sand-description',
        'notableRewards': 'quest-a-blaze-on-the-sand-notable-rewards'
    },
    {
        'name': 'Infernal Monarchy',
        'translationKey': 'quest-infernal-monarchy',
        'level': '8',
        'type': 'quest-type-slaying-quest',
        'objective': 'quest-objective-slay-all-target-monsters',
        'targetMonsters': ['Teostra', 'Lunastra'],
        'icon': require('./assets/quests/icon_slaying.png'),
        'rewardMoney': '28800',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-16-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'client': 'quest-client-chief-ecologist',
        'description': 'quest-infernal-monarchy-description'
    },
    {
        'name': 'A Light Upon the River\'s Gloom',
        'translationKey': 'quest-a-light-upon-the-rivers-gloom',
        'level': '9',
        'type': 'quest-type-slaying-quest',
        'objective': 'quest-objective-slay-xenojiiva',
        'targetMonsters': ['Xeno\'jiiva'],
        'icon': require('./assets/quests/icon_slaying.png'),
        'rewardMoney': '19800',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-16-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'client': 'quest-client-chief-ecologist',
        'description': 'quest-a-light-upon-the-rivers-gloom-description',
        'notes': 'quest-a-light-upon-the-rivers-gloom-notes'
    },
    {
        'name': 'Showdown: The Muck and the Maul',
        'translationKey': 'quest-showdown-the-muck-and-the-maul',
        'level': '9',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-all-target-monsters',
        'targetMonsters': ['Barroth', 'Radobaan'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '15840',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-15-or-higher', 'quest-showdown-the-muck-and-the-maul-conditions'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'client': 'quest-client-the-armory',
        'description': 'quest-showdown-the-muck-and-the-maul-description',
        'notableRewards': 'quest-showdown-the-muck-and-the-maul-notable-rewards'
    },
    {
        'name': 'New World Sky, New World Flower',
        'translationKey': 'quest-new-world-sky-new-world-flower',
        'level': '9',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-all-target-monsters',
        'targetMonsters': ['Pink Rathian', 'Azure Rathalos'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '25920',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-15-or-higher, quest-new-world-sky-new-world-flower-conditions'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'client': 'quest-client-the-armory',
        'description': 'quest-new-world-sky-new-world-flower-description',
        'notableRewards': 'quest-new-world-sky-new-world-flower-notable-rewards'
    },
    {
        'name': 'A Summons from Below',
        'translationKey': 'quest-a-summons-from-below',
        'level': '9',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-all-target-monsters',
        'targetMonsters': ['Vaal Hazak', 'Odogaron'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '29520',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-15-or-higher, quest-a-summons-from-below-conditions'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Girros', 'Raphinos'],
        'client': 'quest-client-the-armory',
        'description': 'quest-a-summons-from-below-description',
        'notableRewards': 'quest-a-summons-from-below-notable-rewards'
    },
    {
        'name': 'The White Winds of the New World',
        'translationKey': 'quest-the-white-winds-of-the-new-world',
        'level': '9',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-all-target-monsters',
        'targetMonsters': ['Legiana', 'Odogaron', 'Diablos', 'Rathalos'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '27720',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-15-or-higher', 'quest-the-white-winds-of-the-new-world-conditions'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'client': 'quest-client-the-commander',
        'description': 'quest-the-white-winds-of-the-new-world-description',
        'notes': 'quest-the-white-winds-of-the-new-world-notes',
        'notableRewards': 'quest-the-white-winds-of-the-new-world-notable-rewards'
    },
    {
        'name': 'The Sapphire Star\'s Guidance',
        'translationKey': 'quest-the-sapphire-stars-guidance',
        'level': '9',
        'type': 'quest-type-slaying-quest',
        'objective': 'quest-objective-slay-all-target-monsters',
        'targetMonsters': ['Kushala Daora', 'Teostra', 'Nergigante'],
        'icon': require('./assets/quests/icon_slaying.png'),
        'rewardMoney': '38880',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-100-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'client': 'quest-client-the-commander',
        'description': 'quest-the-sapphire-stars-guidance-description',
        'notableRewards': 'quest-the-sapphire-stars-guidance-notable-rewards',
        'notes': 'quest-the-sapphire-stars-guidance-notes'
    },
    {
        'name': 'A Visitor from Eorzea',
        'translationKey': 'quest-a-visitor-from-eorzea',
        'level': '9',
        'type': 'quest-type-slaying-quest',
        'objective': 'quest-objective-slay-the-behemoth',
        'targetMonsters': ['Behemoth'],
        'icon': require('./assets/quests/icon_slaying.png'),
        'rewardMoney': '25200',
        'timeLimit': '35',
        'conditions': ['quest-conditions-hr-16-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'client': 'quest-client-serious-handler',
        'description': 'quest-a-visitor-from-eorzea-description',
    },
];

let eventQuests = [{
        'name': 'Up at the Crack of Dawn',
        'translationKey': 'quest-up-at-the-crack-of-dawn',
        'level': '1',
        'type': 'quest-type-slaying-quest',
        'objective': 'quest-objective-slay-12-kestodon',
        'targetMonsters': ['Kestodon'],
        'icon': require('./assets/quests/icon_slaying.png'),
        'rewardMoney': '1080',
        'timeLimit': '50',
        'conditions': ['quest-conditions-none'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'client': 'quest-client-elite-defender',
        'description': 'quest-up-at-the-crack-of-dawn-description',
        'repeatable': true,
    },
    {
        'name': 'Where Sun Meets Moon',
        'translationKey': 'quest-where-sun-meets-moon',
        'level': '3',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-all-target-monsters',
        'targetMonsters': ['Pukei-Pukei', 'Tobi-Kadachi'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '5400',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-4-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Aptonoth', 'Mernos', 'Jagras'],
        'client': 'quest-client-i-hate-this-forkin-forest',
        'description': 'quest-where-sun-meets-moon-description',
        'repeatable': true,
    },
    {
        'name': 'Timberland Troublemakers',
        'translationKey': 'quest-timberland-troublemakers',
        'level': '4',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-2-anjanath',
        'targetMonsters': ['Anjanath'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '8640',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-4-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Aptonoth', 'Mernos', 'Jagras'],
        'client': 'quest-client-am-i-getting-enough-sleep',
        'description': 'quest-timberland-troublemakers-description',
        'repeatable': true,
    },
    {
        'name': 'Every Hunter\'s Dream',
        'translationKey': 'quest-every-hunters-dream',
        'level': '5',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-all-target-monsters',
        'targetMonsters': ['Paolumu', 'Rathalos'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '7200',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-8-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'client': 'quest-client-the-huntsman',
        'description': 'quest-every-hunters-dream-description',
        'repeatable': true,
    },
    {
        'name': 'Midnight Mayhem',
        'translationKey': 'quest-midnight-mayhem',
        'level': '6',
        'type': 'quest-type-slaying-quest',
        'objective': 'quest-objective-slay-10-gastodon',
        'targetMonsters': ['Gastodon'],
        'icon': require('./assets/quests/icon_slaying.png'),
        'rewardMoney': '8100',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-11-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'client': 'quest-client-tribe-outlaw',
        'description': 'quest-midnight-mayhem-description',
        'repeatable': true,
    },
    {
        'name': 'A Royal Pain',
        'translationKey': 'quest-a-royal-pain',
        'level': '6',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-all-target-monsters',
        'targetMonsters': ['Rathian', 'Pink Rathian'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '9000',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-11-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'client': 'quest-client-tribe-outlaw',
        'description': 'quest-a-royal-pain-description',
        'repeatable': true,
    },
    {
        'name': 'Kings Know No Fear',
        'translationKey': 'quest-kings-know-no-fear',
        'level': '7',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-all-target-monsters',
        'targetMonsters': ['Rathalos', 'Azure Rathalos'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '12960',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-13-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'client': 'quest-client-cool-fiver',
        'description': 'quest-kings-know-no-fear-description',
        'repeatable': true,
    },
    {
        'name': 'The Name\'s Lavasioth!',
        'translationKey': 'quest-the-names-lavasioth',
        'level': '9',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-a-lavasioth',
        'targetMonsters': ['Lavasioth'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '25200',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-50-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Gastodon', 'Gajalaka', 'Barnos'],
        'client': 'quest-client-excitable-a-lister',
        'description': 'quest-the-names-lavasioth-description',
        'repeatable': true,
    },
    {
        'name': 'The Greatest Jagras',
        'translationKey': 'quest-the-greatest-jagras',
        'level': '9',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-a-great-jagras',
        'targetMonsters': ['Great Jagras'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '12600',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-50-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'client': 'quest-client-chief-ecologist',
        'description': 'quest-the-greatest-jagras-description',
        'repeatable': true,
    },
    {
        'name': 'USJ: Gold Star Treatment',
        'translationKey': 'quest-usj-gold-star-treatment',
        'level': '3',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-3-great-jagras',
        'targetMonsters': ['Great Jagras'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '3960',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-4-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'client': 'quest-client-stupendous-crew',
        'description': 'quest-usj-gold-star-treatment-description',
        'repeatable': true,
    },
    {
        'name': 'Lessons of the Wild',
        'translationKey': 'quest-lessons-of-the-wild',
        'level': '5',
        'type': 'quest-type-slaying-quest',
        'objective': 'quest-objective-slay-8-barnos',
        'targetMonsters': ['Barnos'],
        'icon': require('./assets/quests/icon_slaying.png'),
        'rewardMoney': '2520',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-6-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'client': 'quest-client-nora-outcast',
        'description': 'quest-lessons-of-the-wild-description',
        'repeatable': true,
    },
    {
        'name': 'The Proving',
        'translationKey': 'quest-the-proving',
        'level': '6',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-an-anjanath',
        'targetMonsters': ['Anjanath'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '9000',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-11-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Aptonoth', 'Mernos', 'Jagras', 'Gajalaka'],
        'client': 'quest-client-nora-high-matriach',
        'description': 'quest-the-proving-description',
        'repeatable': true,
    },    
    {
        'name': 'A Rush of Blood',
        'translationKey': 'quest-a-rush-of-blood',
        'level': '7',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-2-odogaron',
        'targetMonsters': ['Odogaron', 'Odogaron'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '21600',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-13-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'client': 'quest-client-girl-with-green-ribbon',
        'description': 'quest-a-rush-of-blood-description'
    },
    {
        'name': 'USJ Blazing Azure Stars!',
        'translationKey': 'quest-usj-blazing-azure-stars',
        'level': '7',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-all-target-monsters',
        'targetMonsters': ['Dodogala', 'Azure Rathalos'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '18000',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-13-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Gastodon', 'Gajalaka', 'Barnos'],
        'client': 'quest-client-stupendous-crew',
        'description': 'quest-usj-blazing-azure-stars-description',
        'repeatable': true
    },
    {
        'name': 'Code: Red',
        'translationKey': 'quest-code-red',
        'level': '8',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-all-target-monsters',
        'targetMonsters': ['Anjanath', 'Odogaron', 'Rathalos', 'Teostra'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '36000',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-14-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'client': 'quest-client-stylish-red-fiver',
        'description': 'quest-code-red-description'
    },
    {
        'name': 'A Visitor from Eorzea (Extreme)',
        'translationKey': 'quest-a-visitor-from-eorzea-extreme',
        'level': '9',
        'type': 'quest-type-slaying-quest',
        'objective': 'quest-objective-slay-the-behemoth',
        'targetMonsters': ['Behemoth'],
        'icon': require('./assets/quests/icon_slaying.png'),
        'rewardMoney': '25200',
        'timeLimit': '35',
        'conditions': ['quest-conditions-hr-16-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'client': 'quest-client-serious-handler',
        'description': 'quest-a-visitor-from-eorzea-description',
    },
    {
        'name': 'The Heart of the Nora',
        'translationKey': 'quest-the-heart-of-the-nora',
        'level': '9',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-2-deviljho',
        'targetMonsters': ['Deviljho'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '36000',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-50-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Aptonoth', 'Mernos', 'Jagras', 'Gajalaka'],
        'client': 'quest-client-daughter-of-an-outcast',
        'description': 'quest-the-heart-of-the-nora-description',
        'repeatable': true,
    },
    {
        'name': 'Contract: Woodland Spirit',
        'translationKey': 'quest-contract-woodland-spirit',
        'level': '9',
        'type': 'quest-type-slaying-quest',
        'objective': 'quest-objective-slay-the-ancient-leshen',
        'targetMonsters': ['Leshen'],
        'icon': require('./assets/quests/icon_slaying.png'),
        'rewardMoney': '36000',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-50-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Jagras'],
        'client': 'quest-client-commander',
        'description': 'quest-contract-woodland-spirit-description',
        'repeatable': true,
    },
    {
        'name': 'Chew the Fat',
        'translationKey': 'quest-chew-the-fat',
        'level': '2',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-2-great-jagras',
        'targetMonsters': ['Great Jagras'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '3240',
        'timeLimit': '50',
        'conditions': ['quest-conditions-none'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Aptonoth', 'Mernos', 'Jagras'],
        'client': 'quest-client-field-team-leader',
        'description': 'quest-chew-the-fat-description',
        'repeatable': true,
    },
    {
        'name': 'Ya-Ku With That?',
        'translationKey': 'quest-ya-ku-with-that',
        'level': '4',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-all-target-monsters',
        'targetMonsters': ['Kulu-Ya-Ku', 'Tzitzi-Ya-Ku'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '4320',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-6-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'client': 'quest-client-canteen-felyne',
        'description': 'quest-ya-ku-with-that-description',
        'repeatable': true,
    },
    {
        'name': 'Greeting the Gluttons',
        'translationKey': 'quest-greeting-the-gluttons',
        'level': '4',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-all-target-monsters',
        'targetMonsters': ['Great Jagras', 'Pukei-Pukei', 'Paolumu'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '7920',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-6-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'client': 'quest-client-fiver-bro',
        'description': 'quest-greeting-the-gluttons-description',
        'repeatable': true,
    },
    {
        'name': 'Wicked Wildspire Warfare',
        'translationKey': 'quest-wicked-wildspire-warfare',
        'level': '5',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-all-target-monsters',
        'targetMonsters': ['Diablos', 'Barroth', 'Barroth'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '9360',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-8-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'client': 'quest-client-smart-biologist',
        'description': 'quest-wicked-wildspire-warfare-description',
        'repeatable': true,
    },
    {
        'name': 'Flesh Cleaved to Bone',
        'translationKey': 'quest-flesh-cleaved-to-bone',
        'level': '5',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-all-target-monsters',
        'targetMonsters': ['Radobaan', 'Odogaron'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '7920',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-8-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'client': 'quest-client-third-fleet-master',
        'description': 'quest-flesh-cleaved-to-bone-description',
        'repeatable': true,
    },
    {
        'name': 'Kirin the Myth',
        'translationKey': 'quest-kirin-the-myth',
        'level': '5',
        'type': 'quest-type-slaying-quest',
        'objective': 'quest-objective-slay-2-kirin',
        'targetMonsters': ['Kirin'],
        'icon': require('./assets/quests/icon_slaying.png'),
        'rewardMoney': '14400',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-8-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'client': 'quest-client-field-team-grizzled-hunter',
        'description': 'quest-kirin-the-myth-description',
        'repeatable': true,
    },
    {
        'name': 'The Poison Posse',
        'translationKey': 'quest-the-poison-posse',
        'level': '5',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-all-target-monsters',
        'targetMonsters': ['Pukei-Pukei', 'Rathian', 'Rathalos'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '8280',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-8-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Aptonoth', 'Mernos', 'Jagras'],
        'client': 'quest-client-cheerful-scholar',
        'description': 'quest-the-poison-posse-description',
        'repeatable': true,
    },
    {
        'name': 'Gaze Upon the Dawn',
        'translationKey': 'quest-gaze-upon-the-dawn',
        'level': '6',
        'type': 'quest-type-special-quest',
        'objective': 'quest-objective-guide-zorah-magdaros',
        'targetMonsters': ['Zorah Magdaros'],
        'icon': require('./assets/quests/icon_special.png'),
        'rewardMoney': '15120',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-11-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Barnos'],
        'client': 'quest-client-excitable-a-lister',
        'description': 'quest-gaze-upon-the-dawn-description',
        'repeatable': true
    },
    {
        'name': 'Scrapping with the Shamos',
        'translationKey': 'quest-scrapping-with-the-shamos',
        'level': '6',
        'type': 'quest-type-slaying-quest',
        'objective': 'quest-objective-hunt-13-shamos',
        'targetMonsters': ['Shamos'],
        'icon': require('./assets/quests/icon_slaying.png'),
        'rewardMoney': '5400',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-11-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Kelbi', 'Raphinos'],
        'client': 'quest-client-second-fleet-master',
        'description': 'quest-scrapping-with-the-shamos-description',
        'repeatable': true
    },
    {
        'name': 'A Flash in the Pan',
        'translationKey': 'quest-a-flash-in-the-pan',
        'level': '6',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-3-tzitzi-ya-ku',
        'targetMonsters': ['Tzitzi-Ya-Ku', 'Tzitzi-Ya-Ku', 'Tzitzi-Ya-Ku'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '16200',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-11-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'client': 'quest-client-analytics-director',
        'description': 'quest-a-flash-in-the-pan-description',
        'repeatable': true
    },
    {
        'name': 'Egg Lovers United',
        'translationKey': 'quest-egg-lovers-united',
        'level': '6',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-a-kulu-ya-ku',
        'targetMonsters': ['Kulu-Ya-Ku'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '7200',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-11-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'client': 'quest-client-analytic-researcher',
        'description': 'quest-egg-lovers-united-description',
        'repeatable': true
    },
    {
        'name': 'Wiggle Me This',
        'translationKey': 'quest-wiggle-me-this',
        'level': '6',
        'type': 'quest-type-delivery-quest',
        'objective': 'quest-objective-deliver-10-wigglers',
        'icon': require('./assets/quests/icon_delivery.png'),
        'rewardMoney': '3600',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-11-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Kelbi', 'Shamos', 'Raphinos', 'Gajalaka'],
        'client': 'quest-client-endemic-life-researcher',
        'description': 'quest-wiggle-me-this-description',
        'repeatable': true
    },
    {
        'name': 'Triple Threat Throwdown',
        'translationKey': 'quest-triple-threat-throwdown',
        'level': '6',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-all-target-monsters',
        'targetMonsters': ['Great Jagras', 'Great Girros', 'Dodogama'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '14040',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-13-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'client': 'quest-client-timid-fiver',
        'description': 'quest-triple-threat-throwdown-description',
        'repeatable': true
    },
    {
        'name': 'Rollin\' With The Uragaan',
        'translationKey': 'quest-rollin-with-the-uragaan',
        'level': '7',
        'type': '50',
        'objective': 'quest-objective-hunt-2-uragaan',
        'targetMonsters': ['Uragaan', 'Uragaan'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '23400',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-13-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Gastodon', 'Barnos', 'Gajalaka'],
        'client': 'quest-client-serious-handler',
        'description': 'quest-rollin-with-the-uragaan-description',
        'repeatable': true
    },
    {
        'name': 'Deep Green Blues',
        'translationKey': 'quest-deep-green-blues',
        'level': '7',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-all-target-monsters',
        'targetMonsters': ['Great Jagras', 'Pukei-Pukei', 'Tobi-Kadachi', 'Anjanath', 'Rathalos'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '28800',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-13-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Aptonoth', 'Jagras', 'Mernos', 'Gajalaka'],
        'client': 'quest-client-the-commander',
        'description': 'quest-deep-green-blues-description',
        'repeatable': true
    },
    {
        'name': 'Wildspire Bolero',
        'translationKey': 'quest-wildspire-bolero',
        'level': '7',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-all-target-monsters',
        'targetMonsters': ['Kulu-Ya-Ku', 'Barroth', 'Jyuratodus', 'Rathian', 'Diablos'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '30240',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-13-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Apceros', 'Kestodon', 'Noios', 'Gajalaka'],
        'client': 'quest-client-the-commander',
        'description': 'quest-wildspire-bolero-description',
        'repeatable': true
    },
    {
        'name': 'Coral Waltz',
        'translationKey': 'quest-coral-waltz',
        'level': '7',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-all-target-monsters',
        'targetMonsters': ['Tzitzi-Ya-Ku', 'Paolumu', 'Pink Rathian', 'Legiana'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '26640',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-13-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Kelbi', 'Shamos', 'Raphinos', 'Gajalaka'],
        'client': 'quest-client-the-commander',
        'description': 'quest-coral-waltz-description',
        'repeatable': true
    },
    {
        'name': 'Effluvial Opera',
        'translationKey': 'quest-effluvial-opera',
        'level': '7',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-all-target-monsters',
        'targetMonsters': ['Great Girros', 'Radobaan', 'Odogaron', 'Bazelgeuse'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '28800',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-13-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Hornetaur', 'Girros', 'Raphinos', 'Gajalaka'],
        'client': 'quest-client-the-commander',
        'description': 'quest-effluvial-opera-description',
        'repeatable': true
    },
    {
        'name': 'Rock N\' Roll Recess',
        'translationKey': 'quest-rock-n-roll-recess',
        'level': '7',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-all-target-monsters',
        'targetMonsters': ['Dodogama', 'Uragaan', 'Lavasioth', 'Azure Rathalos'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '35280',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-13-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Gastodon', 'Barnos', 'Gajalaka'],
        'client': 'quest-client-the-commander',
        'description': 'quest-rock-n-roll-recess-description',
        'repeatable': true
    },
    {
        'name': 'This is How Revolts Start',
        'translationKey': 'quest-this-is-how-revolts-start',
        'level': '7',
        'type': 'quest-type-7-quest',
        'objective': 'quest-objective-hunt-all-target-monsters',
        'targetMonsters': ['Diablos', 'Black Diablos'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '21600',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-13-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Apceros', 'Kestodon', 'Noios', 'Gajalaka'],
        'client': 'quest-client-chief-botanist',
        'description': 'quest-this-is-how-revolts-start-description'
    },
    {
        'name': 'The Deathly Quiet Curtain',
        'translationKey': 'quest-the-deathly-quiet-curtain',
        'level': '9',
        'type': 'quest-type-slaying-quest',
        'objective': 'quest-objective-slay-vaal-hazak',
        'targetMonsters': ['Vaal Hazak'],
        'icon': require('./assets/quests/icon_slaying.png'),
        'rewardMoney': '36000',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-50-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Girros', 'Raphinos'],
        'client': 'quest-client-third-fleet-master',
        'description': 'quest-the-deathly-quiet-curtain-description',
        'repeatable': true
    },
    {
        'name': 'A Whisper of White Mane',
        'translationKey': 'quest-a-whisper-of-white-mane',
        'level': '9',
        'type': 'quest-type-slaying-quest',
        'objective': 'quest-objective-slay-kirin',
        'targetMonsters': ['Kirin'],
        'icon': require('./assets/quests/icon_slaying.png'),
        'rewardMoney': '36000',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-50-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'client': 'quest-client-long-black-haired-hunter',
        'description': 'quest-a-whisper-of-white-mane-description',
        'repeatable': true
    },
    {
        'name': 'The Scorn of the Sun',
        'translationKey': 'quest-the-scorn-of-the-sun',
        'level': '9',
        'type': 'quest-type-slaying-quest',
        'objective': 'quest-objective-slay-teostra',
        'targetMonsters': ['Teostra'],
        'icon': require('./assets/quests/icon_slaying.png'),
        'rewardMoney': '36000',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-50-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'client': 'quest-client-fourth-fleet-a-lister',
        'description': 'quest-the-scorn-of-the-sun-description',
        'repeatable': true
    },
    {
        'name': 'The Eye of the Storm',
        'translationKey': 'quest-the-eye-of-the-storm',
        'level': '9',
        'type': 'quest-type-slaying-quest',
        'objective': 'quest-objective-slay-kushala-daora',
        'targetMonsters': ['Kushala Daora'],
        'icon': require('./assets/quests/icon_slaying.png'),
        'rewardMoney': '36000',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-50-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'client': 'quest-client-excitable-a-lister',
        'description': 'quest-the-eye-of-the-storm-description',
        'repeatable': true
    },
    {
        'name': 'The Heralds of Destruction Cry',
        'translationKey': 'quest-the-heralds-of-destruction-cry',
        'level': '9',
        'type': 'quest-type-slaying-quest',
        'objective': 'quest-objective-slay-nergigante',
        'targetMonsters': ['Nergigante'],
        'icon': require('./assets/quests/icon_slaying.png'),
        'rewardMoney': '36000',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-50-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'client': 'quest-client-lost-scholar',
        'description': 'quest-the-heralds-of-destruction-cry-description',
        'repeatable': true
    },
    {
        'name': 'When Blue Dust Surpasses Red Lust',
        'translationKey': 'quest-when-blue-dust-surpasses-red-lust',
        'level': '9',
        'type': 'quest-type-slaying-quest',
        'objective': 'quest-objective-slay-lunastra',
        'targetMonsters': ['Lunastra'],
        'icon': require('./assets/quests/icon_slaying.png'),
        'rewardMoney': '36000',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-50-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'client': 'quest-client-newly-single-commission-member',
        'description': 'quest-when-blue-dust-surpasses-red-lust-description',
        'repeatable': true
    },
    {
        'name': 'Relish the Moment',
        'translationKey': 'quest-relish-the-moment',
        'level': '9',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-a-deviljho',
        'targetMonsters': ['Deviljho'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '21600',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-50-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Aptonoth', 'Mernos', 'Jagras', 'Gajalaka'],
        'client': 'quest-client-analytics-director',
        'description': 'quest-relish-the-moment-description',
        'repeatable': true
    },
    {
        'name': 'Undying Alpenglow',
        'translationKey': 'quest-undying-alpenglow',
        'level': '9',
        'type': 'quest-type-special-quest',
        'objective': 'quest-objective-guide-zorah-magdaros',
        'icon': require('./assets/quests/icon_special.png'),
        'rewardMoney': '36000',
        'timeLimit': '25',
        'conditions': ['quest-conditions-hr-50-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times', 'quest-failure-fail-to-guide-zorah-magdaros'],
        'otherMonsters': ['Barnos'],
        'client': 'quest-client-anonymous-fiver',
        'description': 'quest-undying-alpenglow-description',
        'repeatable': true
    },
    {
        'name': 'Like a Moth to the Flame',
        'translationKey': 'quest-like-a-moth-to-the-flame',
        'level': '9',
        'type': 'quest-type-slaying-quest',
        'objective': 'quest-objective-slay-xenojiiva',
        'icon': require('./assets/quests/icon_slaying.png'),
        'rewardMoney': '43200',
        'timeLimit': '30',
        'conditions': ['quest-conditions-hr-50-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'client': 'quest-client-the-seeker',
        'description': 'quest-like-a-moth-to-the-flame-description',
        'repeatable': true
    },
    {
        'name': 'Keeper of the Otherworld',
        'translationKey': 'quest-keeper-of-the-otherworld',
        'level': '9',
        'type': 'quest-type-slaying-quest',
        'objective': 'quest-objective-slay-xenojiiva',
        'targetMonsters': ['Xenojiiva'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '21600',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-50-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'client': 'quest-client-third-fleet-senior-scholar',
        'description': 'quest-keeper-of-the-otherworld-description',
        'repeatable': true
    },
    {
        'name': 'A Simple Task',
        'translationKey': 'quest-a-simple-task',
        'level': '9',
        'type': 'quest-type-delivery-quest',
        'objective': 'quest-objective-deliver-10-gourmet-shroomcaps',
        'icon': require('./assets/quests/icon_delivery.png'),
        'rewardMoney': '3600',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-30-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Aptonoth', 'Jagras', 'Mernos', 'Gajalaka'],
        'client': 'quest-client-scholar-on-the-scene',
        'description': 'quest-a-simple-task-description',
        'repeatable': true
    },
    {
        'name': 'Tracking the Delivery',
        'translationKey': 'quest-tracking-the-delivery',
        'level': '9',
        'type': 'quest-type-delivery-quest',
        'objective': 'quest-objective-deliver-10-blue-beryl',
        'icon': require('./assets/quests/icon_delivery.png'),
        'rewardMoney': '5400',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-50-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Gastodon', 'Barnos', 'Gajalaka'],
        'client': 'quest-client-scholar-on-the-scene',
        'description': 'quest-tracking-the-delivery-description',
        'repeatable': true
    },
    {
        'name': 'Snow & Cherry Blossoms',
        'translationKey': 'quest-snow-cherry-blossoms',
        'level': '9',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-all-target-monsters',
        'targetMonsters': ['Pink Rathian', 'Legiana'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '25200',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-30-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Kelbi', 'Shamos', 'Raphinos', 'Gajalaka'],
        'client': 'quest-client-the-tracker',
        'description': 'quest-snow-cherry-blossoms-description',
        'repeatable': true
    },
    {
        'name': 'A Nose for an Eye',
        'translationKey': 'quest-a-nose-for-an-eye',
        'level': '9',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-all-target-monsters',
        'targetMonsters': ['Anjanath', 'Azure Rathalos'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '23400',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-30-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Aptonoth'],
        'client': 'quest-client-the-huntsman',
        'description': 'quest-a-nose-for-an-eye-description',
        'repeatable': true
    },
    {
        'name': 'No Tomorrow for Usurpers',
        'translationKey': 'quest-no-tomorrow-for-usurpers',
        'level': '9',
        'type': 'quest-type-hunting-quest',
        'objective': 'quest-objective-hunt-all-target-monsters',
        'targetMonsters': ['Bazelgeuse'],
        'icon': require('./assets/quests/icon_hunting.png'),
        'rewardMoney': '23400',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-30-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'otherMonsters': ['Gastodon', 'Gajalaka', 'Barnos'],
        'client': 'quest-client-the-admiral',
        'description': 'quest-no-tomorrow-for-usurpers-description',
        'repeatable': true
    },
    {
        'name': 'The Thronetaker',
        'translationKey': 'quest-the-thronetaker',
        'level': '9',
        'type': 'quest-type-slaying-quest',
        'objective': 'quest-objective-slay-all-target-monsters',
        'targetMonsters': ['Nergigante', 'Lunastra', 'Teostra'],
        'icon': require('./assets/quests/icon_slaying.png'),
        'rewardMoney': '37800',
        'timeLimit': '50',
        'conditions': ['quest-conditions-hr-50-or-higher'],
        'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
        'client': 'quest-client-thats-the-new-world-for-you',
        'description': 'quest-the-thronetaker-description',
        'repeatable': true
    },
];

let specialAssignmentsQuests = [{
    'name': 'Contract: Trouble in the Ancient Forest',
    'translationKey': 'quest-contract-trouble-in-the-ancient-forest',
    'level': '9',
    'type': 'quest-type-special-quest',
    'objective': 'quest-objective-complete-the-assignment',
    'targetMonsters': ['Leshen'],
    'icon': require('./assets/quests/icon_special.png'),
    'rewardMoney': '19800',
    'timeLimit': '60',
    'conditions': ['quest-conditions-hr-16-or-higher', 'quest-conditions-max-players-1'],
    'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
    'client': 'quest-client-commander',
    'description': 'quest-contract-trouble-in-the-ancient-forest-description',
}, {
    'name': 'He Taketh it with His Eyes',
    'translationKey': 'quest-he-taketh-it-with-his-eyes',
    'level': '9',
    'type': 'quest-type-slaying-quest',
    'objective': 'quest-objective-slay-the-behemoth',
    'targetMonsters': ['Behemoth'],
    'icon': require('./assets/quests/icon_slaying.png'),
    'rewardMoney': '25200',
    'timeLimit': '35',
    'conditions': ['quest-conditions-hr-16-or-higher'],
    'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
    'client': 'quest-client-serious-handler',
    'description': 'quest-he-taketh-it-with-his-eyes-description',
}, {
    'name': 'The Legendary Beast',
    'translationKey': 'quest-the-legendary-beast',
    'level': '9',
    'type': 'quest-type-special-quest',
    'objective': 'quest-objective-complete-the-assignment',
    'targetMonsters': ['Behemoth'],
    'icon': require('./assets/quests/icon_special.png'),
    'rewardMoney': '17640',
    'timeLimit': '35',
    'conditions': ['quest-conditions-hr-16-or-higher'],
    'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
    'client': 'quest-client-serious-handler',
    'description': 'quest-the-legendary-beast-description',
}, {
    'name': 'A Visitor from Another World',
    'translationKey': 'quest-a-visitor-from-another-world',
    'level': '6',
    'type': 'quest-type-special-quest',
    'objective': 'quest-objective-complete-the-assignment',
    'targetMonsters': ['Kulu-Ya-Ku'],
    'icon': require('./assets/quests/icon_special.png'),
    'rewardMoney': '10800',
    'timeLimit': '50',
    'conditions': ['quest-conditions-hr-16-or-higher'],
    'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
    'otherMonsters': ['Aptonoth', 'Noios', 'Kestodon', 'Gajalaka'],
    'client': 'quest-client-serious-handler',
    'description': 'quest-a-visitor-from-another-world-description',
}, {
    'name': 'The Food Chain Dominator',
    'translationKey': 'quest-the-food-chain-dominator',
    'level': '7',
    'type': 'quest-type-hunting-quest',
    'objective': 'quest-objective-hunt-a-deviljho',
    'targetMonsters': ['Deviljho'],
    'icon': require('./assets/quests/icon_hunting.png'),
    'rewardMoney': '14400',
    'timeLimit': '50',
    'conditions': ['quest-conditions-hr-13-or-higher'],
    'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
    'otherMonsters': ['Aptonoth', 'Mernos', 'Jagras', 'Gajalaka'],
    'client': 'quest-client-eccentric-trio',
    'description': 'quest-the-food-chain-dominator-description',
    'notes': 'quest-the-food-chain-dominator-notes',
    'tips': 'quest-the-food-chain-dominator-tips'
}, {
    'name': 'The Blazing Sun',
    'translationKey': 'quest-the-blazing-sun',
    'level': '8',
    'type': 'quest-type-slaying-quest',
    'objective': 'quest-objective-slay-teostra',
    'targetMonsters': ['Teostra'],
    'icon': require('./assets/quests/icon_slaying.png'),
    'rewardMoney': '18000',
    'timeLimit': '50',
    'conditions': ['quest-conditions-hr-16-or-higher'],
    'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
    'client': 'quest-client-the-huntsman',
    'description': 'quest-the-blazing-sun-description',
}, {
    'name': 'Pandora\'s Arena',
    'translationKey': 'quest-pandoras-arena',
    'level': '8',
    'type': 'quest-type-special-quest',
    'objective': 'quest-objective-complete-the-assignment',
    'targetMonsters': ['Lunastra'],
    'icon': require('./assets/quests/icon_special.png'),
    'rewardMoney': '12600',
    'timeLimit': '15',
    'conditions': ['quest-conditions-hr-16-or-higher'],
    'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
    'client': 'quest-client-second-fleet-master',
    'description': 'quest-the-pandoras-arena-description',
}, {
    'name': 'No Remorse, No Surrender',
    'translationKey': 'quest-no-remorse-no-surrender',
    'level': '8',
    'type': 'quest-type-slaying-quest',
    'objective': 'quest-objective-slay-all-target-monsters',
    'targetMonsters': ['Lunastra', 'Teostra'],
    'icon': require('./assets/quests/icon_slaying.png'),
    'rewardMoney': '28800',
    'timeLimit': '50',
    'conditions': ['quest-conditions-hr-16-or-higher'],
    'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-3-times'],
    'client': 'quest-client-the-huntsman',
    'description': 'quest-no-remorse-no-surrender-description',
},]

let arenaQuests = [{
    'name': 'Arena Quest 01',
    'translationKey': 'quest-arena-quest-01',
    'level': '1',
    'objective': 'quest-objective-slay-a-pukei-pukei',
    'targetMonsters': ['Pukei-Pukei'],
    'icon': require('./assets/quests/icon_arena.png'),
    'rewardMoney': '1080',
    'timeLimit': '50',
    'conditions': ['quest-conditions-none'],
    'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-9-times'],
    'client': 'quest-client-arena-lass',
    'description': 'quest-arena-quest-01-description',
    'rank': [{
            'name': 'A',
            'time': '02\'30"00',
        },
        {
            'name': 'B',
            'time': '06\'30"00',
        },
        {
            'name': 'C',
            'time': '50\'00"00',
        }
    ],
    'equipmentInfo': [{
        'weapon': 'Jagras Blade I',
        'head': {
            'name': 'Rathalos Helm',
            'level': '3',
            'rarity': '4',
            'defense': '34',
            'vsFire': '3',
            'vsWater': '1',
            'vsThunder': '-2',
            'vsIce': '1',
            'vsDragon': '-3',
        },
        'upperBody': {
            'name': 'Rathalos Mail',
            'level': '4',
            'rarity': '4',
            'defense': '36',
            'vsFire': '3',
            'vsWater': '1',
            'vsThunder': '02',
            'vsIce': '1',
            'vsDragon': '-03',
        },
        'hands': {
            'name': 'Kadachi Vambraces',
            'level': '1',
            'rarity': '2',
            'defense': '16',
            'vsFire': '0',
            'vsWater': '-3',
            'vsThunder': '3',
            'vsIce': '0',
            'vsDragon': '0',
        },
        'lowerBody': {
            'name': 'Rathalos Coil',
            'level': '3',
            'rarity': '4',
            'defense': '34',
            'vsFire': '3',
            'vsWater': '1',
            'vsThunder': '-2',
            'vsIce': '1',
            'vsDragon': '-3',
        },
        'legs': {
            'name': 'Rathalos Greaves',
            'level': '3',
            'rarity': '4',
            'defense': '34',
            'vsFire': '3',
            'vsWater': '1',
            'vsThunder': '-2',
            'vsIce': '1',
            'vsDragon': '-3',
        },
        'charm': 'Attack Charm I',
        'items': [{
            'name': 'Potion',
            'quantity': '10',
        }, {
            'name': 'Mega Potion',
            'quantity': '10',
        }, {
            'name': 'Max Potion',
            'quantity': '1',
        }, {
            'name': 'Well-done Steak',
            'quantity': '10'
        }, {
            'name': 'Antidote',
            'quantity': '10'
        }, {
            'name': 'Paralysis Knife',
            'quantity': '5'
        }, {
            'name': 'Farcaster',
            'quantity': '1'
        }]
    }, {
        'weapon': 'Lumu Knife I',
        'head': {
            'name': 'Lumu Hat',
            'level': '10',
            'rarity': '3',
            'defense': '38',
            'vsFire': '-3',
            'vsWater': '2',
            'vsThunder': '0',
            'vsIce': '1',
            'vsDragon': '0',
        },
        'upperBody': {
            'name': 'Lumu Mail',
            'level': '6',
            'rarity': '3',
            'defense': '30',
            'vsFire': '-3',
            'vsWater': '2',
            'vsThunder': '0',
            'vsIce': '1',
            'vsDragon': '0',
        },
        'hands': {
            'name': 'Bone Vambraces',
            'level': '5',
            'rarity': '1',
            'defense': '14',
            'vsFire': '2',
            'vsWater': '0',
            'vsThunder': '2',
            'vsIce': '0',
            'vsDragon': '2',
        },
        'lowerBody': {
            'name': 'Lumu Coil',
            'level': '10',
            'rarity': '3',
            'defense': '38',
            'vsFire': '-3',
            'vsWater': '2',
            'vsThunder': '0',
            'vsIce': '1',
            'vsDragon': '0',
        },
        'legs': {
            'name': 'Lumu Greaves',
            'level': '9',
            'rarity': '3',
            'defense': '36',
            'vsFire': '-3',
            'vsWater': '2',
            'vsThunder': '0',
            'vsIce': '1',
            'vsDragon': '0',
        },
        'charm': 'Handicraft Charm I',
        'items': [{
            'name': 'Potion',
            'quantity': '10',
        }, {
            'name': 'Mega Potion',
            'quantity': '10',
        }, {
            'name': 'Max Potion',
            'quantity': '1',
        }, {
            'name': 'Well-done Steak',
            'quantity': '10',
        }, {
            'name': 'Antidote',
            'quantity': '10',
        }, {
            'name': 'Herbal Medicine',
            'quantity': '5',
        }, {
            'name': 'Flash Pod',
            'quantity': '2',
        }, {
            'name': 'Large Barrel Bomb',
            'quantity': '2',
        }, {
            'name': 'Paralysis Knife',
            'quantity': '5',
        }, {
            'name': 'Shock Trap',
            'quantity': '1',
        }, {
            'name': 'Farcaster',
            'quantity': '1',
        }, ]
    }, {
        'weapon': 'Iron Hammer III',
        'head': {
            'name': 'Diablos Helm',
            'level': '3',
            'rarity': '4',
            'defense': '36',
            'vsFire': '3',
            'vsWater': '-2',
            'vsThunder': '0',
            'vsIce': '-3',
            'vsDragon': '2',
        },
        'upperBody': {
            'name': 'Diablos Mail',
            'level': '4',
            'rarity': '4',
            'defense': '38',
            'vsFire': '3',
            'vsWater': '-2',
            'vsThunder': '0',
            'vsIce': '-3',
            'vsDragon': '2',
        },
        'hands': {
            'name': 'Barroth Vambraces',
            'level': '1',
            'rarity': '2',
            'defense': '14',
            'vsFire': '-3',
            'vsWater': '-1',
            'vsThunder': '3',
            'vsIce': '-1',
            'vsDragon': '0',
        },
        'lowerBody': {
            'name': 'Diablos Coil',
            'level': '3',
            'rarity': '4',
            'defense': '36',
            'vsFire': '3',
            'vsWater': '-2',
            'vsThunder': '0',
            'vsIce': '-3',
            'vsDragon': '2',
        },
        'legs': {
            'name': 'Diablos Greaves',
            'level': '3',
            'rarity': '4',
            'defense': '36',
            'vsFire': '3',
            'vsWater': '-2',
            'vsThunder': '0',
            'vsIce': '-3',
            'vsDragon': '2',
        },
        'charm': 'Marathon Charm',
        'items': [{
            'name': 'Potion',
            'quantity': '10',
        }, {
            'name': 'Mega Potion',
            'quantity': '10',
        }, {
            'name': 'Max Potion',
            'quantity': '1',
        }, {
            'name': 'Well-done Steak',
            'quantity': '10',
        }, {
            'name': 'Antidote',
            'quantity': '10',
        }, {
            'name': 'Sleep Knife',
            'quantity': '5',
        }, {
            'name': 'Farcaster',
            'quantity': '1',
        }, ]
    }, {
        'weapon': 'Jagras Axe I',
        'head': {
            'name': 'Tzitzi Headgear',
            'level': '7',
            'rarity': '3',
            'defense': '30',
            'vsFire': '0',
            'vsWater': '0',
            'vsThunder': '-3',
            'vsIce': '-2',
            'vsDragon': '0',
        },
        'upperBody': {
            'name': 'Tzitzi Mail',
            'level': '5',
            'rarity': '3',
            'defense': '26',
            'vsFire': '0',
            'vsWater': '0',
            'vsThunder': '-3',
            'vsIce': '-2',
            'vsDragon': '0',
        },
        'hands': {
            'name': 'Death Stench Grip',
            'level': '3',
            'rarity': '4',
            'defense': '36',
            'vsFire': '3',
            'vsWater': '2',
            'vsThunder': '-2',
            'vsIce': '3',
            'vsDragon': '-4',
        },
        'lowerBody': {
            'name': 'Tzitzi Coil',
            'level': '7',
            'rarity': '3',
            'defense': '30',
            'vsFire': '0',
            'vsWater': '0',
            'vsThunder': '-3',
            'vsIce': '-2',
            'vsDragon': '0',
        },
        'legs': {
            'name': 'Tzitzi Greaves',
            'level': '7',
            'rarity': '3',
            'defense': '30',
            'vsFire': '0',
            'vsWater': '0',
            'vsThunder': '-3',
            'vsIce': '-2',
            'vsDragon': '0',
        },
        'charm': 'Focus Charm II',
        'items': [{
            'name': 'Potion',
            'quantity': '10',
        }, {
            'name': 'Mega Potion',
            'quantity': '10',
        }, {
            'name': 'Max Potion',
            'quantity': '1',
        }, {
            'name': 'Well-done Steak',
            'quantity': '10',
        }, {
            'name': 'Antidote',
            'quantity': '10',
        }, {
            'name': 'Flash Pod',
            'quantity': '1',
        }, {
            'name': 'Farcaster',
            'quantity': '1',
        }, ]
    }, {
        'weapon': 'Thunder Blitz I',
        'head': {
            'name': 'Pukei Hood',
            'level': '9',
            'rarity': '2',
            'defense': '28',
            'vsFire': '0',
            'vsWater': '3',
            'vsThunder': '-3',
            'vsIce': '0',
            'vsDragon': '1',
        },
        'upperBody': {
            'name': 'Pukei Mail',
            'level': '9',
            'rarity': '2',
            'defense': '28',
            'vsFire': '0',
            'vsWater': '3',
            'vsThunder': '-3',
            'vsIce': '0',
            'vsDragon': '1',
        },
        'hands': {
            'name': 'Anja Vambraces',
            'level': '3',
            'rarity': '3',
            'defense': '24',
            'vsFire': '3',
            'vsWater': '-3',
            'vsThunder': '-1',
            'vsIce': '-1',
            'vsDragon': '0',
        },
        'lowerBody': {
            'name': 'Pukei Coil',
            'level': '9',
            'rarity': '2',
            'defense': '28',
            'vsFire': '0',
            'vsWater': '3',
            'vsThunder': '-3',
            'vsIce': '0',
            'vsDragon': '1',
        },
        'legs': {
            'name': 'Pukei Greaves',
            'level': '9',
            'rarity': '2',
            'defense': '28',
            'vsFire': '0',
            'vsWater': '3',
            'vsThunder': '-3',
            'vsIce': '0',
            'vsDragon': '1',
        },
        'charm': 'KO Charm I',
        'items': [{
            'name': 'Potion',
            'quantity': '10',
        }, {
            'name': 'Mega Potion',
            'quantity': '10',
        }, {
            'name': 'Lifepowder',
            'quantity': '2',
        }, {
            'name': 'Herbal Powder',
            'quantity': '2',
        }, {
            'name': 'Demon Powder',
            'quantity': '1',
        }, {
            'name': 'Hardshell Powder',
            'quantity': '1',
        }, {
            'name': 'Max Potion',
            'quantity': '1',
        }, {
            'name': 'Well-done Steak',
            'quantity': '10',
        }, {
            'name': 'Antidote',
            'quantity': '10',
        }, {
            'name': 'Flash Pod',
            'quantity': '2',
        }, {
            'name': 'Large Barrel Bomb',
            'quantity': '2',
        }, {
            'name': 'Pitfall Trap',
            'quantity': '1',
        }, {
            'name': 'Shock Trap',
            'quantity': '1',
        }, {
            'name': 'Farcaster',
            'quantity': '1',
        }, ],
        'ammo': [{
            'name': 'Normal Ammo 2',
            'quantity': '99',
        }, {
            'name': 'Spread Ammo 1',
            'quantity': '80',
        }, {
            'name': 'Pierce Ammo 1',
            'quantity': '60',
        }, {
            'name': 'Paralysis Ammo 2',
            'quantity': '8',
        }, {
            'name': 'Sticky Ammo 1',
            'quantity': '9',
        }, {
            'name': 'Sticky Ammo 2',
            'quantity': '9',
        }, {
            'name': 'Slicing Ammo',
            'quantity': '10',
        }, ]
    }, ]
}, {
    'name': 'Arena Quest 02',
    'translationKey': 'quest-arena-quest-02',
    'level': '2',
    'objective': 'quest-objective-slay-a-kulu-ya-ku',
    'targetMonsters': ['Kulu-Ya-Ku'],
    'icon': require('./assets/quests/icon_arena.png'),
    'rewardMoney': '1080',
    'timeLimit': '50',
    'conditions': ['quest-conditions-hr-2-or-higher'],
    'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-9-times'],
    'client': 'quest-client-arena-lass',
    'description': 'quest-arena-quest-02-description',
    'rank': [{
            'name': 'A',
            'time': '02\'00"00',
        },
        {
            'name': 'B',
            'time': '06\'00"00',
        },
        {
            'name': 'C',
            'time': '50\'00"00',
        }
    ],
    'equipmentInfo': [{
        'weapon': 'Matched Slicers III',
        'head': {
            'name': 'Leather Headgear',
            'level': '3',
            'rarity': '1',
            'defense': '6',
            'vsFire': '2',
            'vsWater': '0',
            'vsThunder': '0',
            'vsIce': '0',
            'vsDragon': '0',
        },
        'upperBody': {
            'name': 'Kulu Mail',
            'level': '3',
            'rarity': '1',
            'defense': '14',
            'vsFire': '0',
            'vsWater': '-3',
            'vsThunder': '0',
            'vsIce': '1',
            'vsDragon': '0',
        },
        'hands': {
            'name': 'Kestodon Guards',
            'level': '3',
            'rarity': '1',
            'defense': '16',
            'vsFire': '4',
            'vsWater': '0',
            'vsThunder': '0',
            'vsIce': '0',
            'vsDragon': '0',
        },
        'lowerBody': {
            'name': 'Jagras Coil',
            'level': '3',
            'rarity': '1',
            'defense': '12',
            'vsFire': '-2',
            'vsWater': '2',
            'vsThunder': '-1',
            'vsIce': '-1',
            'vsDragon': '1',
        },
        'legs': {
            'name': 'Alloy Greaves',
            'level': '2',
            'rarity': '2',
            'defense': '10',
            'vsFire': '-2',
            'vsWater': '1',
            'vsThunder': '-2',
            'vsIce': '-2',
            'vsDragon': '1',
        },
        'items': [{
            'name': 'Potion',
            'quantity': '10',
        }, {
            'name': 'Mega Potion',
            'quantity': '10',
        }, {
            'name': 'Max Potion',
            'quantity': '1',
        }, {
            'name': 'Well-done Steak',
            'quantity': '10',
        }, {
            'name': 'Dash Juice',
            'quantity': '2',
        }, {
            'name': 'Flash Pod',
            'quantity': '2',
        }, {
            'name': 'Large Barrel Bomb',
            'quantity': '2',
        }, {
            'name': 'Shock Trap',
            'quantity': '1',
        }, {
            'name': 'Farcaster',
            'quantity': '1',
        }, ]
    }, {
        'weapon': 'Iron Hammer III',
        'head': {
            'name': 'Jagras Helm',
            'level': '3',
            'rarity': '1',
            'defense': '12',
            'vsFire': '-2',
            'vsWater': '2',
            'vsThunder': '-1',
            'vsIce': '-1',
            'vsDragon': '1',
        },
        'upperBody': {
            'name': 'Hunter\'s Mail',
            'level': '3',
            'rarity': '1',
            'defense': '10',
            'vsFire': '2',
            'vsWater': '2',
            'vsThunder': '0',
            'vsIce': '0',
            'vsDragon': '0',
        },
        'hands': {
            'name': 'Bone Vambraces',
            'level': '3',
            'rarity': '1',
            'defense': '10',
            'vsFire': '2',
            'vsWater': '0',
            'vsThunder': '2',
            'vsIce': '0',
            'vsDragon': '2',
        },
        'lowerBody': {
            'name': 'Kulu Coil',
            'level': '3',
            'rarity': '1',
            'defense': '14',
            'vsFire': '0',
            'vsWater': '-3',
            'vsThunder': '0',
            'vsIce': '1',
            'vsDragon': '0',
        },
        'legs': {
            'name': 'Chainmail Trousers',
            'level': '2',
            'rarity': '1',
            'defense': '4',
            'vsFire': '0',
            'vsWater': '2',
            'vsThunder': '0',
            'vsIce': '0',
            'vsDragon': '0',
        },
        'items': [{
            'name': 'Potion',
            'quantity': '10',
        }, {
            'name': 'Mega Potion',
            'quantity': '10',
        }, {
            'name': 'Max Potion',
            'quantity': '1',
        }, {
            'name': 'Well-done Steak',
            'quantity': '10',
        }, {
            'name': 'Might Pill',
            'quantity': '2',
        }, {
            'name': 'Paralysis Knife',
            'quantity': '5',
        }, {
            'name': 'Pitfall Trap',
            'quantity': '1',
        }, {
            'name': 'Farcaster',
            'quantity': '1',
        }, ]
    }, {
        'weapon': 'Steel Gunlance I',
        'head': {
            'name': 'Vespoid Helm',
            'level': '3',
            'rarity': '1',
            'defense': '12',
            'vsFire': '-2',
            'vsWater': '1',
            'vsThunder': '1',
            'vsIce': '1',
            'vsDragon': '2',
        },
        'upperBody': {
            'name': 'Bone Mail',
            'level': '3',
            'rarity': '1',
            'defense': '10',
            'vsFire': '2',
            'vsWater': '0',
            'vsThunder': '2',
            'vsIce': '0',
            'vsDragon': '2',
        },
        'hands': {
            'name': 'Alloy Vambraces',
            'level': '3',
            'rarity': '2',
            'defense': '12',
            'vsFire': '-2',
            'vsWater': '1',
            'vsThunder': '-2',
            'vsIce': '-2',
            'vsDragon': '1',
        },
        'lowerBody': {
            'name': 'Chainmail Belt',
            'level': '3',
            'rarity': '1',
            'defense': '6',
            'vsFire': '0',
            'vsWater': '2',
            'vsThunder': '0',
            'vsIce': '0',
            'vsDragon': '0',
        },
        'legs': {
            'name': 'Alloy Greaves',
            'level': '2',
            'rarity': '2',
            'defense': '10',
            'vsFire': '-2',
            'vsWater': '1',
            'vsThunder': '-2',
            'vsIce': '-2',
            'vsDragon': '1',
        },
        'items': [{
            'name': 'Potion',
            'quantity': '10',
        }, {
            'name': 'Mega Potion',
            'quantity': '10',
        }, {
            'name': 'Max Potion',
            'quantity': '1',
        }, {
            'name': 'Well-done Steak',
            'quantity': '10',
        }, {
            'name': 'Sleep Knife',
            'quantity': '5',
        }, {
            'name': 'Farcaster',
            'quantity': '1',
        }, ]
    }, {
        'weapon': 'Proto Commission Axe III',
        'head': {
            'name': 'Jagras Helm',
            'level': '3',
            'rarity': '1',
            'defense': '12',
            'vsFire': '-2',
            'vsWater': '2',
            'vsThunder': '-1',
            'vsIce': '-1',
            'vsDragon': '1',
        },
        'upperBody': {
            'name': 'Bone Mail',
            'level': '3',
            'rarity': '1',
            'defense': '10',
            'vsFire': '2',
            'vsWater': '0',
            'vsThunder': '2',
            'vsIce': '0',
            'vsDragon': '2',
        },
        'hands': {
            'name': 'Bone Vambraces',
            'level': '3',
            'rarity': '1',
            'defense': '10',
            'vsFire': '2',
            'vsWater': '0',
            'vsThunder': '2',
            'vsIce': '0',
            'vsDragon': '2',
        },
        'lowerBody': {
            'name': 'Kulu Coil',
            'level': '3',
            'rarity': '1',
            'defense': '14',
            'vsFire': '0',
            'vsWater': '-3',
            'vsThunder': '0',
            'vsIce': '1',
            'vsDragon': '0',
        },
        'legs': {
            'name': 'Alloy Greaves',
            'level': '2',
            'rarity': '2',
            'defense': '10',
            'vsFire': '-2',
            'vsWater': '1',
            'vsThunder': '-2',
            'vsIce': '-2',
            'vsDragon': '1',
        },
        'items': [{
            'name': 'Potion',
            'quantity': '10',
        }, {
            'name': 'Mega Potion',
            'quantity': '10',
        }, {
            'name': 'Hardshell Powder',
            'quantity': '1',
        }, {
            'name': 'Max Potion',
            'quantity': '1',
        }, {
            'name': 'Well-done Steak',
            'quantity': '10',
        }, {
            'name': 'Flash Pod',
            'quantity': '3',
        }, {
            'name': 'Pitfall Trap',
            'quantity': '1',
        }, {
            'name': 'Farcaster',
            'quantity': '1',
        }, ]
    }, {
        'weapon': 'Jagras Blitz I',
        'head': {
            'name': 'Bone Helm',
            'level': '3',
            'rarity': '1',
            'defense': '10',
            'vsFire': '2',
            'vsWater': '0',
            'vsThunder': '2',
            'vsIce': '0',
            'vsDragon': '2',
        },
        'upperBody': {
            'name': 'Chainmail Vest',
            'level': '3',
            'rarity': '1',
            'defense': '6',
            'vsFire': '0',
            'vsWater': '2',
            'vsThunder': '0',
            'vsIce': '0',
            'vsDragon': '0',
        },
        'hands': {
            'name': 'Vespoid Vambraces',
            'level': '3',
            'rarity': '1',
            'defense': '12',
            'vsFire': '-2',
            'vsWater': '1',
            'vsThunder': '1',
            'vsIce': '1',
            'vsDragon': '2',
        },
        'lowerBody': {
            'name': 'Kulu Coil',
            'level': '3',
            'rarity': '1',
            'defense': '14',
            'vsFire': '0',
            'vsWater': '-3',
            'vsThunder': '0',
            'vsIce': '1',
            'vsDragon': '0',
        },
        'legs': {
            'name': 'Kulu Greaves',
            'level': '2',
            'rarity': '1',
            'defense': '12',
            'vsFire': '0',
            'vsWater': '-3',
            'vsThunder': '0',
            'vsIce': '1',
            'vsDragon': '0',
        },
        'items': [{
            'name': 'Potion',
            'quantity': '10',
        }, {
            'name': 'Mega Potion',
            'quantity': '10',
        }, {
            'name': 'Lifepowder',
            'quantity': '1',
        }, {
            'name': 'Demon Powder',
            'quantity': '1',
        }, {
            'name': 'Hardshell Powder',
            'quantity': '1',
        }, {
            'name': 'Max Potion',
            'quantity': '1',
        }, {
            'name': 'Well-done Steak',
            'quantity': '10',
        }, {
            'name': 'Sleep Knife',
            'quantity': '5',
        }, {
            'name': 'Shock Trap',
            'quantity': '1',
        }, {
            'name': 'Farcaster',
            'quantity': '1',
        }, ],
        'ammo': [{
            'name': 'Pierce Ammo 2',
            'quantity': '60',
        }, {
            'name': 'Spread Ammo 2',
            'quantity': '70',
        }, {
            'name': 'Sticky Ammo 1',
            'quantity': '9',
        }, {
            'name': 'Paralysis Ammo 1',
            'quantity': '12',
        }, {
            'name': 'Slicing Ammo',
            'quantity': '10',
        }, {
            'name': 'Normal Ammo 3',
            'quantity': '99',
        }, {
            'name': 'Poison Ammo 1',
            'quantity': '12',
        }, {
            'name': 'Sleep Ammo 1',
            'quantity': '12',
        }, ]
    }, ]
}, {
    'name': 'Arena Quest 03',
    'translationKey': 'quest-arena-quest-03',
    'level': '4',
    'objective': 'quest-objective-slay-a-rathian',
    'targetMonsters': ['Rathian'],
    'icon': require('./assets/quests/icon_arena.png'),
    'rewardMoney': '1080',
    'timeLimit': '50',
    'conditions': ['quest-conditions-hr-5-or-higher'],
    'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-9-times'],
    'client': 'quest-client-arena-lass',
    'description': 'quest-arena-quest-03-description',
    'rank': [{
            'name': 'A',
            'time': '04\'00"00',
        },
        {
            'name': 'B',
            'time': '08\'00"00',
        },
        {
            'name': 'C',
            'time': '50\'00"00',
        }
    ],
    'equipmentInfo': [{
        'weapon': 'Thunder Lance II',
        'head': {
            'name': 'Barroth Helm',
            'level': '6',
            'rarity': '2',
            'defense': '24',
            'vsFire': '-3',
            'vsWater': '-',
            'vsThunder': '3',
            'vsIce': '-1',
            'vsDragon': '0',
        },
        'upperBody': {
            'name': 'Anja Mail',
            'level': '4',
            'rarity': '3',
            'defense': '26',
            'vsFire': '3',
            'vsWater': '-3',
            'vsThunder': '-1',
            'vsIce': '-1',
            'vsDragon': '0',
        },
        'hands': {
            'name': 'Barroth Vambraces',
            'level': '5',
            'rarity': '2',
            'defense': '22',
            'vsFire': '-3',
            'vsWater': '-1',
            'vsThunder': '3',
            'vsIce': '-1',
            'vsDragon': '0',
        },
        'lowerBody': {
            'name': 'Anja Coil',
            'level': '4',
            'rarity': '3',
            'defense': '26',
            'vsFire': '3',
            'vsWater': '-3',
            'vsThunder': '-1',
            'vsIce': '-1',
            'vsDragon': '0',
        },
        'legs': {
            'name': 'Rathian Greaves',
            'level': '4',
            'rarity': '3',
            'defense': '28',
            'vsFire': '2',
            'vsWater': '0',
            'vsThunder': '-2',
            'vsIce': '0',
            'vsDragon': '-3',
        },
        'items': [{
            'name': 'Potion',
            'quantity': '10',
        }, {
            'name': 'Mega Potion',
            'quantity': '10',
        }, {
            'name': 'Max Potion',
            'quantity': '2',
        }, {
            'name': 'Well-done Steak',
            'quantity': '10',
        }, {
            'name': 'Antidote',
            'quantity': '10',
        }, {
            'name': 'Mega Demondrug',
            'quantity': '2',
        }, {
            'name': 'Flash Pod',
            'quantity': '3',
        }, {
            'name': 'Mega Barrel Bomb',
            'quantity': '2',
        }, {
            'name': 'Large Barrel Bomb',
            'quantity': '2',
        }, {
            'name': 'Paralysis Knife',
            'quantity': '5',
        }, {
            'name': 'Farcaster',
            'quantity': '1',
        }, {
            'name': 'Powercharm',
            'quantity': '1',
        }, {
            'name': 'Powertalon',
            'quantity': '1',
        }, ]
    }, {
        'weapon': 'Spiked Horn II',
        'head': {
            'name': 'Jagras Helm',
            'level': '7',
            'rarity': '1',
            'defense': '20',
            'vsFire': '-2',
            'vsWater': '2',
            'vsThunder': '-1',
            'vsIce': '-1',
            'vsDragon': '1',
        },
        'upperBody': {
            'name': 'Pukei Mail',
            'level': '7',
            'rarity': '2',
            'defense': '24',
            'vsFire': '0',
            'vsWater': '3',
            'vsThunder': '-2',
            'vsIce': '0',
            'vsDragon': '1',
        },
        'hands': {
            'name': 'Hornetaur Vambraces',
            'level': '7',
            'rarity': '3',
            'defense': '30',
            'vsFire': '-1',
            'vsWater': '-1',
            'vsThunder': '0',
            'vsIce': '0',
            'vsDragon': '2',
        },
        'lowerBody': {
            'name': 'Kulu Coil',
            'level': '7',
            'rarity': '1',
            'defense': '22',
            'vsFire': '0',
            'vsWater': '-3',
            'vsThunder': '0',
            'vsIce': '1',
            'vsDragon': '0',
        },
        'legs': {
            'name': 'Rathian Greaves',
            'level': '6',
            'rarity': '3',
            'defense': '32',
            'vsFire': '2',
            'vsWater': '0',
            'vsThunder': '-2',
            'vsIce': '0',
            'vsDragon': '-3',
        },
        'items': [{
            'name': 'Potion',
            'quantity': '10',
        }, {
            'name': 'Mega Potion',
            'quantity': '10',
        }, {
            'name': 'Lifepowder',
            'quantity': '2',
        }, {
            'name': 'Demon Powder',
            'quantity': '2',
        }, {
            'name': 'Max Potion',
            'quantity': '2',
        }, {
            'name': 'Well-done Steak',
            'quantity': '10',
        }, {
            'name': 'Antidote',
            'quantity': '10',
        }, {
            'name': 'Flash Pod',
            'quantity': '3',
        }, {
            'name': 'Paralysis Knife',
            'quantity': '5',
        }, {
            'name': 'EZ Pitfall Trap',
            'quantity': '1',
        }, {
            'name': 'Pitfall Trap',
            'quantity': '1',
        }, {
            'name': 'EZ Shock Trap',
            'quantity': '1',
        }, {
            'name': 'Shock Trap',
            'quantity': '1',
        }, {
            'name': 'Faraster',
            'quantity': '1',
        }, {
            'name': 'Powercharm',
            'quantity': '1',
        }, {
            'name': 'Powertalon',
            'quantity': '1',
        }, ]
    }, {
        'weapon': 'Pulsar Strongarm III',
        'head': {
            'name': 'Vespoid Helm',
            'level': '9',
            'rarity': '1',
            'defense': '24',
            'vsFire': '-2',
            'vsWater': '1',
            'vsThunder': '1',
            'vsIce': '1',
            'vsDragon': '2',
        },
        'upperBody': {
            'name': 'Vespoid Mail',
            'level': '9',
            'rarity': '1',
            'defense': '24',
            'vsFire': '-2',
            'vsWater': '1',
            'vsThunder': '1',
            'vsIce': '1',
            'vsDragon': '2',
        },
        'hands': {
            'name': 'Pukei Vambraces',
            'level': '9',
            'rarity': '2',
            'defense': '28',
            'vsFire': '0',
            'vsWater': '3',
            'vsThunder': '-3',
            'vsIce': '0',
            'vsDragon': '1',
        },
        'lowerBody': {
            'name': 'Jyura Coil',
            'level': '8',
            'rarity': '2',
            'defense': '28',
            'vsFire': '-1',
            'vsWater': '2',
            'vsThunder': '-3',
            'vsIce': '0',
            'vsDragon': '0',
        },
        'legs': {
            'name': 'Jyura Greaves',
            'level': '8',
            'rarity': '2',
            'defense': '28',
            'vsFire': '-1',
            'vsWater': '2',
            'vsThunder': '-3',
            'vsIce': '0',
            'vsDragon': '0',
        },
        'items': [{
            'name': 'Potion',
            'quantity': '10',
        }, {
            'name': 'Mega Potion',
            'quantity': '10',
        }, {
            'name': 'Max Potion',
            'quantity': '2',
        }, {
            'name': 'Well-done Steak',
            'quantity': '10',
        }, {
            'name': 'Antidote',
            'quantity': '10',
        }, {
            'name': 'Mega Demondrug',
            'quantity': '2',
        }, {
            'name': 'Flash Pod',
            'quantity': '3',
        }, {
            'name': 'Mega Barrel Bomb',
            'quantity': '2',
        }, {
            'name': 'Large Barrel Bomb',
            'quantity': '2',
        }, {
            'name': 'Pitfall Trap',
            'quantity': '1',
        }, {
            'name': 'Farcaster',
            'quantity': '1',
        }, {
            'name': 'Powercharm',
            'quantity': '1',
        }, {
            'name': 'Powertalon',
            'quantity': '1',
        }, ]
    }, {
        'weapon': 'Hard Bone Rod II',
        'head': {
            'name': 'Kadachi Helm',
            'level': '5',
            'rarity': '2',
            'defense': '24',
            'vsFire': '0',
            'vsWater': '-3',
            'vsThunder': '3',
            'vsIce': '0',
            'vsDragon': '0',
        },
        'upperBody': {
            'name': 'Kadachi Mail',
            'level': '5',
            'rarity': '2',
            'defense': '24',
            'vsFire': '0',
            'vsWater': '-3',
            'vsThunder': '3',
            'vsIce': '0',
            'vsDragon': '0',
        },
        'hands': {
            'name': 'Kadachi Vambraces',
            'level': '5',
            'rarity': '2',
            'defense': '24',
            'vsFire': '0',
            'vsWater': '-3',
            'vsThunder': '3',
            'vsIce': '0',
            'vsDragon': '0',
        },
        'lowerBody': {
            'name': 'Anja Coil',
            'level': '5',
            'rarity': '3',
            'defense': '28',
            'vsFire': '3',
            'vsWater': '-3',
            'vsThunder': '-1',
            'vsIce': '-1',
            'vsDragon': '0',
        },
        'legs': {
            'name': 'Hornetaur Greaves',
            'level': '5',
            'rarity': '3',
            'defense': '26',
            'vsFire': '-1',
            'vsWater': '-1',
            'vsThunder': '0',
            'vsIce': '0',
            'vsDragon': '2',
        },
        'items': [{
            'name': 'Potion',
            'quantity': '10',
        }, {
            'name': 'Mega Potion',
            'quantity': '10',
        }, {
            'name': 'Max Potion',
            'quantity': '2',
        }, {
            'name': 'Well-done Steak',
            'quantity': '10',
        }, {
            'name': 'Antidote',
            'quantity': '10',
        }, {
            'name': 'Flash Pod',
            'quantity': '3',
        }, {
            'name': 'Poison Knife',
            'quantity': '5',
        }, {
            'name': 'Paralysis Knife',
            'quantity': '2',
        }, {
            'name': 'Sleep Knife',
            'quantity': '5',
        }, {
            'name': 'Pitfall Trap',
            'quantity': '1',
        }, {
            'name': 'Shock Trap',
            'quantity': '1',
        }, {
            'name': 'Farcaster',
            'quantity': '1',
        }, {
            'name': 'Powercharm',
            'quantity': '1',
        }, {
            'name': 'Powertalon',
            'quantity': '1',
        }, ]
    }, {
        'weapon': 'Pulsar Shooter III',
        'head': {
            'name': 'Alloy Helm',
            'level': '7',
            'rarity': '2',
            'defense': '20',
            'vsFire': '-2',
            'vsWater': '1',
            'vsThunder': '-2',
            'vsIce': '-2',
            'vsDragon': '1',
        },
        'upperBody': {
            'name': 'Pukei Mail',
            'level': '7',
            'rarity': '2',
            'defense': '24',
            'vsFire': '0',
            'vsWater': '3',
            'vsThunder': '-3',
            'vsIce': '0',
            'vsDragon': '1',
        },
        'hands': {
            'name': 'Anja Vambraces',
            'level': '7',
            'rarity': '3',
            'defense': '32',
            'vsFire': '3',
            'vsWater': '-3',
            'vsThunder': '-1',
            'vsIce': '-1',
            'vsDragon': '0',
        },
        'lowerBody': {
            'name': 'Kadachi Coil',
            'level': '6',
            'rarity': '2',
            'defense': '26',
            'vsFire': '0',
            'vsWater': '-3',
            'vsThunder': '3',
            'vsIce': '0',
            'vsDragon': '0',
        },
        'legs': {
            'name': 'Anja Greaves',
            'level': '6',
            'rarity': '3',
            'defense': '30',
            'vsFire': '3',
            'vsWater': '-3',
            'vsThunder': '-1',
            'vsIce': '-1',
            'vsDragon': '0',
        },
        'items': [{
            'name': 'Potion',
            'quantity': '10',
        }, {
            'name': 'Mega Potion',
            'quantity': '10',
        }, {
            'name': 'Lifepowder',
            'quantity': '2',
        }, {
            'name': 'Demon Powder',
            'quantity': '2',
        }, {
            'name': 'Max Potion',
            'quantity': '2',
        }, {
            'name': 'Well-done Steak',
            'quantity': '10',
        }, {
            'name': 'Antidote',
            'quantity': '10',
        }, {
            'name': 'Sleep Knife',
            'quantity': '5',
        }, {
            'name': 'EZ Pitfall Trap',
            'quantity': '1',
        }, {
            'name': 'Pitfall Trap',
            'quantity': '1',
        }, {
            'name': 'Farcaster',
            'quantity': '1',
        }, {
            'name': 'Powercharm',
            'quantity': '1',
        }, {
            'name': 'Powertalon',
            'quantity': '1',
        }, ],
        'ammo': [{
            'name': 'Pierce Ammo 3',
            'quantity': '60',
        }, {
            'name': 'Spread Ammo 1',
            'quantity': '80',
        }, {
            'name': 'Sticky Ammo 2',
            'quantity': '9',
        }, {
            'name': 'Cluster Bomb 2',
            'quantity': '3',
        }, {
            'name': 'Paralysis Ammo 1',
            'quantity': '12',
        }, {
            'name': 'Paralysis Ammo 2',
            'quantity': '8',
        }, {
            'name': 'Thunder Ammo',
            'quantity': '60',
        }, {
            'name': 'Dragon Ammo',
            'quantity': '3',
        }, {
            'name': 'Slicing Ammo',
            'quantity': '30',
        }, {
            'name': 'Wyvern Ammo',
            'quantity': '5',
        }, {
            'name': 'Demon Ammo',
            'quantity': '1',
        }, ]
    }, ]
}, {
    'name': 'Arena Quest 04',
    'translationKey': 'quest-arena-quest-04',
    'level': '6',
    'objective': 'quest-objective-slay-a-tzitzi-ya-ku',
    'targetMonsters': ['Tzitzi-Ya-Ku'],
    'icon': require('./assets/quests/icon_arena.png'),
    'rewardMoney': '2160',
    'timeLimit': '50',
    'conditions': ['quest-conditions-hr-11-or-higher'],
    'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-9-times'],
    'client': 'quest-client-arena-lass',
    'description': 'quest-arena-quest-04-description',
    'rank': [{
            'name': 'A',
            'time': '04\'30"00',
        },
        {
            'name': 'B',
            'time': '10\'30\"00',
        },
        {
            'name': 'C',
            'time': '50\'00"00',
        }
    ],
    'equipmentInfo': [{
        'weapon': 'Dazzling Flash II',
        'head': {
            'name': 'Rathian Helm',
            'level': '9',
            'rarity': '3',
            'defense': '38',
            'vsFire': '2',
            'vsWater': '0',
            'vsThunder': '-2',
            'vsIce': '0',
            'vsDragon': '-3',
        },
        'upperBody': {
            'name': 'Legiana Mail',
            'level': '9',
            'rarity': '4',
            'defense': '46',
            'vsFire': '-1',
            'vsWater': '2',
            'vsThunder': '-3',
            'vsIce': '3',
            'vsDragon': '0',
        },
        'hands': {
            'name': 'Kadachi Vambraces',
            'level': '12',
            'rarity': '2',
            'defense': '38',
            'vsFire': '0',
            'vsWater': '-3',
            'vsThunder': '3',
            'vsIce': '0',
            'vsDragon': '0',
        },
        'lowerBody': {
            'name': 'Kirin Hoop',
            'level': '9',
            'rarity': '4',
            'defense': '50',
            'vsFire': '-3',
            'vsWater': '-2',
            'vsThunder': '4',
            'vsIce': '-2',
            'vsDragon': '2',
        },
        'legs': {
            'name': 'Kulu Greaves ⍺',
            'level': '9',
            'rarity': '5',
            'defense': '56',
            'vsFire': '0',
            'vsWater': '-3',
            'vsThunder': '0',
            'vsIce': '1',
            'vsDragon': '0',
        },
        'charm': 'Awakening Charm II',
        'specializedTool1': 'Health Booster',
        'items': [{
            'name': 'Potion',
            'quantity': '10',
        }, {
            'name': 'Mega Potion',
            'quantity': '10',
        }, {
            'name': 'Max Potion',
            'quantity': '2',
        }, {
            'name': 'Well-done Steak',
            'quantity': '10',
        }, {
            'name': 'Mega Barrel Bomb',
            'quantity': '2',
        }, {
            'name': 'Large Barrel Bomb',
            'quantity': '2',
        }, {
            'name': 'Paralysis Knife',
            'quantity': '5',
        }, {
            'name': 'Shock Trap',
            'quantity': '1',
        }, {
            'name': 'Farcaster',
            'quantity': '1',
        }, {
            'name': 'Powercharm',
            'quantity': '1',
        }, {
            'name': 'Powertalon',
            'quantity': '1',
        }, ]
    }, {
        'weapon': 'Lightning Bash II',
        'head': {
            'name': 'Kirin Horn',
            'level': '8',
            'rarity': '4',
            'defense': '48',
            'vsFire': '-3',
            'vsWater': '-2',
            'vsThunder': '4',
            'vsIce': '-2',
            'vsDragon': '2',
        },
        'upperBody': {
            'name': 'Anja Mail',
            'level': '11',
            'rarity': '3',
            'defense': '40',
            'vsFire': '3',
            'vsWater': '-3',
            'vsThunder': '-1',
            'vsIce': '-1',
            'vsDragon': '0',
        },
        'hands': {
            'name': 'Alloy Vambraces ⍺',
            'level': '8',
            'rarity': '5',
            'defense': '50',
            'vsFire': '-2',
            'vsWater': '0',
            'vsThunder': '-2',
            'vsIce': '-2',
            'vsDragon': '0',
        },
        'lowerBody': {
            'name': 'Diablos Coil',
            'level': '8',
            'rarity': '4',
            'defense': '46',
            'vsFire': '3',
            'vsWater': '-2',
            'vsThunder': '0',
            'vsIce': '-3',
            'vsDragon': '2',
        },
        'legs': {
            'name': 'Death Stench Heel',
            'level': '8',
            'rarity': '4',
            'defense': '46',
            'vsFire': '3',
            'vsWater': '2',
            'vsThunder': '-2',
            'vsIce': '3',
            'vsDragon': '-4',
        },
        'specializedTool1': 'Ghillie Mantle',
        'items': [{
            'name': 'Potion',
            'quantity': '10',
        }, {
            'name': 'Mega Potion',
            'quantity': '10',
        }, {
            'name': 'Max Potion',
            'quantity': '2',
        }, {
            'name': 'Well-done Steak',
            'quantity': '10',
        }, {
            'name': 'Mega Barrel Bomb',
            'quantity': '2',
        }, {
            'name': 'Large Barrel Bomb',
            'quantity': '2',
        }, {
            'name': 'Poison Knife',
            'quantity': '5',
        }, {
            'name': 'Pitfall Trap',
            'quantity': '1',
        }, {
            'name': 'Farcaster',
            'quantity': '1',
        }, {
            'name': 'Powercharm',
            'quantity': '1',
        }, {
            'name': 'Powertalon',
            'quantity': '1',
        }, ]
    }, {
        'weapon': 'Great Bagpipe III',
        'head': {
            'name': 'Girros Mask',
            'level': '13',
            'rarity': '3',
            'defense': '44',
            'vsFire': '0',
            'vsWater': '-3',
            'vsThunder': '2',
            'vsIce': '0',
            'vsDragon': '1',
        },
        'upperBody': {
            'name': 'Diablos Mail',
            'level': '13',
            'rarity': '4',
            'defense': '56',
            'vsFire': '3',
            'vsWater': '-2',
            'vsThunder': '0',
            'vsIce': '-3',
            'vsDragon': '2',
        },
        'hands': {
            'name': 'Bone Vambraces',
            'level': '15',
            'rarity': '1',
            'defense': '34',
            'vsFire': '2',
            'vsWater': '0',
            'vsThunder': '2',
            'vsIce': '0',
            'vsDragon': '2',
        },
        'lowerBody': {
            'name': 'Tzitzi Coil',
            'level': '13',
            'rarity': '3',
            'defense': '42',
            'vsFire': '0',
            'vsWater': '0',
            'vsThunder': '-3',
            'vsIce': '-2',
            'vsDragon': '0',
        },
        'legs': {
            'name': 'Odogaron Greaves',
            'level': '13',
            'rarity': '4',
            'defense': '54',
            'vsFire': '2',
            'vsWater': '2',
            'vsThunder': '-2',
            'vsIce': '-3',
            'vsDragon': '0',
        },
        'specializedTool1': 'Health Booster',
        'items': [{
            'name': 'Potion',
            'quantity': '10',
        }, {
            'name': 'Mega Potion',
            'quantity': '10',
        }, {
            'name': 'Max Potion',
            'quantity': '2',
        }, {
            'name': 'Well-done Steak',
            'quantity': '10',
        }, {
            'name': 'Dash Juice',
            'quantity': '2',
        }, {
            'name': 'Might Seed',
            'quantity': '2',
        }, {
            'name': 'Adamant Seed',
            'quantity': '2',
        }, {
            'name': 'Sleep Knife',
            'quantity': '5',
        }, {
            'name': 'EZ Pitfall Trap',
            'quantity': '1',
        }, {
            'name': 'Pitfall Trap',
            'quantity': '1',
        }, {
            'name': 'EZ Shock Trap',
            'quantity': '1',
        }, {
            'name': 'Shock Trap',
            'quantity': '1',
        }, {
            'name': 'Farcaster',
            'quantity': '1',
        }, ]
    }, {
        'weapon': 'Lightning Chopper II',
        'head': {
            'name': 'Jagras Helm ⍺',
            'level': '9',
            'rarity': '5',
            'defense': '56',
            'vsFire': '-2',
            'vsWater': '2',
            'vsThunder': '-1',
            'vsIce': '-1',
            'vsDragon': '1',
        },
        'upperBody': {
            'name': 'Tzitzi Mail',
            'level': '9',
            'rarity': '3',
            'defense': '34',
            'vsFire': '0',
            'vsWater': '0',
            'vsThunder': '-3',
            'vsIce': '-2',
            'vsDragon': '0',
        },
        'hands': {
            'name': 'Hornetaur Vambraces',
            'level': '12',
            'rarity': '3',
            'defense': '40',
            'vsFire': '-1',
            'vsWater': '-1',
            'vsThunder': '0',
            'vsIce': '0',
            'vsDragon': '2',
        },
        'lowerBody': {
            'name': 'Chainmail Belt ⍺',
            'level': '9',
            'rarity': '5',
            'defense': '48',
            'vsFire': '0',
            'vsWater': '2',
            'vsThunder': '0',
            'vsIce': '0',
            'vsDragon': '0',
        },
        'legs': {
            'name': 'Alloy Greaves ß',
            'level': '9',
            'rarity': '5',
            'defense': '52',
            'vsFire': '-2',
            'vsWater': '0',
            'vsThunder': '-2',
            'vsIce': '-2',
            'vsDragon': '0',
        },
        'specializedTool1': 'Vitality Mantle',
        'items': [{
            'name': 'Potion',
            'quantity': '10',
        }, {
            'name': 'Mega Potion',
            'quantity': '10',
        }, {
            'name': 'Max Potion',
            'quantity': '2',
        }, {
            'name': 'Well-done Steak',
            'quantity': '10',
        }, {
            'name': 'Mega Barrel Bomb',
            'quantity': '2',
        }, {
            'name': 'Large Barrel Bomb',
            'quantity': '2',
        }, {
            'name': 'Pitfall Trap',
            'quantity': '1',
        }, {
            'name': 'Shock Trap',
            'quantity': '1',
        }, {
            'name': 'Farcaster',
            'quantity': '1',
        }, {
            'name': 'Powercharm',
            'quantity': '1',
        }, {
            'name': 'Powertalon',
            'quantity': '1',
        }, ]
    }, {
        'weapon': 'Archer\'s Dance I',
        'head': {
            'name': 'Vespoid Helm ⍺',
            'level': '6',
            'rarity': '5',
            'defense': '48',
            'vsFire': '-2',
            'vsWater': '1',
            'vsThunder': '1',
            'vsIce': '1',
            'vsDragon': '2',
        },
        'upperBody': {
            'name': 'Pukei Mail ß',
            'level': '6',
            'rarity': '5',
            'defense': '52',
            'vsFire': '0',
            'vsWater': '3',
            'vsThunder': '-3',
            'vsIce': '0',
            'vsDragon': '1',
        },
        'hands': {
            'name': 'Tzitzi Vambraces ⍺',
            'level': '6',
            'rarity': '5',
            'defense': '50',
            'vsFire': '0',
            'vsWater': '0',
            'vsThunder': '-3',
            'vsIce': '-2',
            'vsDragon': '0',
        },
        'lowerBody': {
            'name': 'Kulu Coil ⍺',
            'level': '6',
            'rarity': '5',
            'defense': '50',
            'vsFire': '0',
            'vsWater': '-3',
            'vsThunder': '0',
            'vsIce': '1',
            'vsDragon': '0',
        },
        'legs': {
            'name': 'Jyura Greaves',
            'level': '6',
            'rarity': '2',
            'defense': '24',
            'vsFire': '-1',
            'vsWater': '2',
            'vsThunder': '-3',
            'vsIce': '0',
            'vsDragon': '0',
        },
        'charm': 'Awakening Charm II',
        'specializedTool1': 'Ghillie Mantle',
        'items': [{
            'name': 'Potion',
            'quantity': '10',
        }, {
            'name': 'Mega Potion',
            'quantity': '10',
        }, {
            'name': 'Demon Powder',
            'quantity': '1',
        }, {
            'name': 'Hardshell Powder',
            'quantity': '1',
        }, {
            'name': 'Max Potion',
            'quantity': '2',
        }, {
            'name': 'Well-done Steak',
            'quantity': '10',
        }, {
            'name': 'Might Pill',
            'quantity': '2',
        }, {
            'name': 'Pitfall Trap',
            'quantity': '1',
        }, {
            'name': 'Shock Trap',
            'quantity': '1',
        }, {
            'name': 'Farcaster',
            'quantity': '1',
        }, ],
        'ammo': [{
            'name': 'Paralysis Coating',
            'quantity': '20',
        }, {
            'name': 'Blast Coating',
            'quantity': '20',
        }, {
            'name': 'Sleep Coating',
            'quantity': '20',
        }, ]
    }, ]
}, {
    'name': 'Arena Quest 05',
    'translationKey': 'quest-arena-quest-05',
    'level': '6',
    'objective': 'quest-objective-slay-a-barroth',
    'targetMonsters': ['Barroth'],
    'icon': require('./assets/quests/icon_arena.png'),
    'rewardMoney': '2160',
    'timeLimit': '50',
    'conditions': ['quest-conditions-hr-11-or-higher'],
    'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-9-times'],
    'client': 'quest-client-arena-lass',
    'description': 'quest-arena-quest-05-description',
    'rank': [{
            'name': 'A',
            'time': '04\'00"00',
        },
        {
            'name': 'B',
            'time': '10\'00"00',
        },
        {
            'name': 'C',
            'time': '50\'00"00',
        }
    ],
    'equipmentInfo': [{
        'weapon': 'Datura Blaze II',
        'head': {
            'name': 'Diablos Helm',
            'level': '7',
            'rarity': '4',
            'defense': '44',
            'vsFire': '3',
            'vsWater': '-2',
            'vsThunder': '0',
            'vsIce': '-3',
            'vsDragon': '2',
        },
        'upperBody': {
            'name': 'Bone Mail ⍺',
            'level': '7',
            'rarity': '5',
            'defense': '48',
            'vsFire': '2',
            'vsWater': '0',
            'vsThunder': '2',
            'vsIce': '0',
            'vsDragon': '2',
        },
        'hands': {
            'name': 'Pukei Vambraces ⍺',
            'level': '7',
            'rarity': '5',
            'defense': '54',
            'vsFire': '0',
            'vsWater': '3',
            'vsThunder': '-3',
            'vsIce': '0',
            'vsDragon': '1',
        },
        'lowerBody': {
            'name': 'Pukei Coil ⍺',
            'level': '7',
            'rarity': '5',
            'defense': '54',
            'vsFire': '0',
            'vsWater': '3',
            'vsThunder': '-3',
            'vsIce': '0',
            'vsDragon': '1',
        },
        'legs': {
            'name': 'Kulu Greaves',
            'level': '10',
            'rarity': '1',
            'defense': '28',
            'vsFire': '0',
            'vsWater': '-3',
            'vsThunder': '0',
            'vsIce': '1',
            'vsDragon': '0',
        },
        'specializedTool1': 'Health Booster',
        'items': [{
            'name': 'Potion',
            'quantity': '10',
        }, {
            'name': 'Mega Potion',
            'quantity': '10',
        }, {
            'name': 'Max Potion',
            'quantity': '2',
        }, {
            'name': 'Well-done Steak',
            'quantity': '10',
        }, {
            'name': 'Mega Barrel Bomb',
            'quantity': '2',
        }, {
            'name': 'Large Barrel Bomb',
            'quantity': '2',
        }, {
            'name': 'Shock Trap',
            'quantity': '1',
        }, {
            'name': 'Farcaster',
            'quantity': '1',
        }, {
            'name': 'Powercharm',
            'quantity': '1',
        }, {
            'name': 'Powertalon',
            'quantity': '1',
        }, ]
    }, {
        'weapon': 'Heavy Bone Lance I',
        'head': {
            'name': 'Barroth Helm ⍺',
            'level': '6',
            'rarity': '5',
            'defense': '52',
            'vsFire': '-3',
            'vsWater': '-1',
            'vsThunder': '3',
            'vsIce': '-1',
            'vsDragon': '0',
        },
        'upperBody': {
            'name': 'Lumu Mail',
            'level': '6',
            'rarity': '3',
            'defense': '30',
            'vsFire': '-3',
            'vsWater': '2',
            'vsThunder': '0',
            'vsIce': '1',
            'vsDragon': '0',
        },
        'hands': {
            'name': 'Barroth Vambraces ⍺',
            'level': '6',
            'rarity': '5',
            'defense': '52',
            'vsFire': '-3',
            'vsWater': '-1',
            'vsThunder': '3',
            'vsIce': '-1',
            'vsDragon': '0',
        },
        'lowerBody': {
            'name': 'Barroth Coil ⍺',
            'level': '6',
            'rarity': '5',
            'defense': '52',
            'vsFire': '-3',
            'vsWater': '-1',
            'vsThunder': '3',
            'vsIce': '-1',
            'vsDragon': '0',
        },
        'legs': {
            'name': 'Barroth Greaves ⍺',
            'level': '6',
            'rarity': '5',
            'defense': '52',
            'vsFire': '-3',
            'vsWater': '-1',
            'vsThunder': '3',
            'vsIce': '-1',
            'vsDragon': '0',
        },
        'specializedTool1': 'Glider Mantle',
        'items': [{
            'name': 'Potion',
            'quantity': '10',
        }, {
            'name': 'Mega Potion',
            'quantity': '10',
        }, {
            'name': 'Max Potion',
            'quantity': '2',
        }, {
            'name': 'Well-done Steak',
            'quantity': '10',
        }, {
            'name': 'Dash Juice',
            'quantity': '2',
        }, {
            'name': 'Flash Pod',
            'quantity': '3',
        }, {
            'name': 'Paralysis Knife',
            'quantity': '5',
        }, {
            'name': 'Sleep Knife',
            'quantity': '5',
        }, {
            'name': 'Pitfall Trap',
            'quantity': '1',
        }, {
            'name': 'Shock Trap',
            'quantity': '1',
        }, {
            'name': 'Farcaster',
            'quantity': '1',
        }, ]
    }, {
        'weapon': 'Steel Gunlance III',
        'head': {
            'name': 'Rathalos Helm',
            'level': '6',
            'rarity': '4',
            'defense': '40',
            'vsFire': '3',
            'vsWater': '1',
            'vsThunder': '-2',
            'vsIce': '1',
            'vsDragon': '-3',
        },
        'upperBody': {
            'name': 'Odogaron Mail',
            'level': '6',
            'rarity': '4',
            'defense': '40',
            'vsFire': '2',
            'vsWater': '2',
            'vsThunder': '-2',
            'vsIce': '-3',
            'vsDragon': '0',
        },
        'hands': {
            'name': 'Lumu Vambraces',
            'level': '8',
            'rarity': '3',
            'defense': '34',
            'vsFire': '-3',
            'vsWater': '2',
            'vsThunder': '0',
            'vsIce': '1',
            'vsDragon': '0',
        },
        'lowerBody': {
            'name': 'High Metal Coil ⍺',
            'level': '6',
            'rarity': '6',
            'defense': '60',
            'vsFire': '0',
            'vsWater': '-1',
            'vsThunder': '-2',
            'vsIce': '3',
            'vsDragon': '0',
        },
        'legs': {
            'name': 'Hornetaur Greaves ß',
            'level': '6',
            'rarity': '5',
            'defense': '48',
            'vsFire': '-1',
            'vsWater': '-1',
            'vsThunder': '0',
            'vsIce': '0',
            'vsDragon': '2',
        },
        'charm': 'Awakening Charm II',
        'specializedTool1': 'Ghillie Mantle',
        'items': [{
            'name': 'Potion',
            'quantity': '10',
        }, {
            'name': 'Mega Potion',
            'quantity': '10',
        }, {
            'name': 'Max Potion',
            'quantity': '2',
        }, {
            'name': 'Well-done Steak',
            'quantity': '10',
        }, {
            'name': 'Mega Barrel Bomb',
            'quantity': '2',
        }, {
            'name': 'Large Barrel Bomb',
            'quantity': '2',
        }, {
            'name': 'Pitfall Trap',
            'quantity': '1',
        }, {
            'name': 'Farcaster',
            'quantity': '1',
        }, {
            'name': 'Powercharm',
            'quantity': '1',
        }, {
            'name': 'Powertalon',
            'quantity': '1',
        }, ]
    }, {
        'weapon': 'Chrome Guardian I',
        'head': {
            'name': 'Rathian Helm',
            'level': '8',
            'rarity': '3',
            'defense': '36',
            'vsFire': '2',
            'vsWater': '0',
            'vsThunder': '-2',
            'vsIce': '0',
            'vsDragon': '-3',
        },
        'upperBody': {
            'name': 'Diablos Mail',
            'level': '8',
            'rarity': '4',
            'defense': '46',
            'vsFire': '3',
            'vsWater': '-2',
            'vsThunder': '0',
            'vsIce': '-3',
            'vsDragon': '2',
        },
        'hands': {
            'name': 'Death Stench Grip',
            'level': '8',
            'rarity': '4',
            'defense': '46',
            'vsFire': '3',
            'vsWater': '2',
            'vsThunder': '-2',
            'vsIce': '3',
            'vsDragon': '-4',
        },
        'lowerBody': {
            'name': 'High Metal Coil ⍺',
            'level': '8',
            'rarity': '6',
            'defense': '64',
            'vsFire': '0',
            'vsWater': '-1',
            'vsThunder': '-2',
            'vsIce': '3',
            'vsDragon': '0',
        },
        'legs': {
            'name': 'Jyura Greaves',
            'level': '9',
            'rarity': '2',
            'defense': '30',
            'vsFire': '-1',
            'vsWater': '2',
            'vsThunder': '-3',
            'vsIce': '0',
            'vsDragon': '0',
        },
        'specializedTool1': 'Vitality Mantle',
        'items': [{
            'name': 'Potion',
            'quantity': '10',
        }, {
            'name': 'Mega Potion',
            'quantity': '10',
        }, {
            'name': 'Max Potion',
            'quantity': '2',
        }, {
            'name': 'Well-done Steak',
            'quantity': '10',
        }, {
            'name': 'Dash Juice',
            'quantity': '2',
        }, {
            'name': 'Flash Pod',
            'quantity': '3',
        }, {
            'name': 'EZ Pitfall Trap',
            'quantity': '1',
        }, {
            'name': 'Pitfall Trap',
            'quantity': '1',
        }, {
            'name': 'EZ Shock Trap',
            'quantity': '1',
        }, {
            'name': 'Shock Trap',
            'quantity': '1',
        }, {
            'name': 'Farcaster',
            'quantity': '1',
        }, ]
    }, {
        'weapon': 'Datura Blaster II',
        'head': {
            'name': 'High Metal Helm ⍺',
            'level': '3',
            'rarity': '6',
            'defense': '54',
            'vsFire': '0',
            'vsWater': '-1',
            'vsThunder': '-2',
            'vsIce': '3',
            'vsDragon': '0',
        },
        'upperBody': {
            'name': 'High Metal Mail ⍺',
            'level': '3',
            'rarity': '6',
            'defense': '54',
            'vsFire': '0',
            'vsWater': '-1',
            'vsThunder': '-2',
            'vsIce': '3',
            'vsDragon': '0',
        },
        'hands': {
            'name': 'Pukei Vambraces ⍺',
            'level': '3',
            'rarity': '5',
            'defense': '46',
            'vsFire': '0',
            'vsWater': '3',
            'vsThunder': '-3',
            'vsIce': '0',
            'vsDragon': '1',
        },
        'lowerBody': {
            'name': 'Pukei Coil ⍺',
            'level': '3',
            'rarity': '5',
            'defense': '46',
            'vsFire': '0',
            'vsWater': '3',
            'vsThunder': '-3',
            'vsIce': '0',
            'vsDragon': '1',
        },
        'legs': {
            'name': 'Chainmail Trousers ⍺',
            'level': '2',
            'rarity': '5',
            'defense': '34',
            'vsFire': '0',
            'vsWater': '2',
            'vsThunder': '0',
            'vsIce': '0',
            'vsDragon': '0',
        },
        'specializedTool1': 'Health Booster',
        'items': [{
            'name': 'Potion',
            'quantity': '10',
        }, {
            'name': 'Mega Potion',
            'quantity': '10',
        }, {
            'name': 'Max Potion',
            'quantity': '2',
        }, {
            'name': 'Well-done Steak',
            'quantity': '10',
        }, {
            'name': 'Flash Pod',
            'quantity': '3',
        }, {
            'name': 'Paralysis Knife',
            'quantity': '5',
        }, {
            'name': 'Sleep Knife',
            'quantity': '5',
        }, {
            'name': 'Pitfall Trap',
            'quantity': '1',
        }, {
            'name': 'Shock Trap',
            'quantity': '1',
        }, {
            'name': 'Farcaster',
            'quantity': '1',
        }, ],
        'ammo': [{
            'name': 'Normal Ammo 3',
            'quantity': '99',
        }, {
            'name': 'Pierce Ammo 2',
            'quantity': '60',
        }, {
            'name': 'Spread Ammo 3',
            'quantity': '60',
        }, {
            'name': 'Flaming Ammo',
            'quantity': '60',
        }, {
            'name': 'Poison Ammo 1',
            'quantity': '12',
        }, {
            'name': 'Poison Ammo 2',
            'quantity': '12',
        }, {
            'name': 'Cluster Bomb 1',
            'quantity': '3',
        }, {
            'name': 'Sticky Ammo 1',
            'quantity': '9',
        }, {
            'name': 'Wyvern Ammo',
            'quantity': '5',
        }, ]
    }, ]
}, {
    'name': 'Arena Quest 06',
    'translationKey': 'quest-arena-quest-06',
    'level': '6',
    'objective': 'quest-objective-slay-a-dodogama',
    'targetMonsters': ['Dodogama'],
    'icon': require('./assets/quests/icon_arena.png'),
    'rewardMoney': '2160',
    'timeLimit': '50',
    'conditions': ['quest-conditions-hr-13-or-higher'],
    'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-9-times'],
    'client': 'quest-client-arena-lass',
    'description': 'quest-arena-quest-06-description',
    'rank': [{
            'name': 'A',
            'time': '04\'00"00',
        },
        {
            'name': 'B',
            'time': '08\'00"00',
        },
        {
            'name': 'C',
            'time': '50\'00"00',
        }
    ],
    'equipmentInfo': [{
        'weapon': 'Kadachi Fang II',
        'head': {
            'name': 'Death Stench Brain',
            'level': '9',
            'rarity': '4',
            'defense': '48',
            'vsFire': '3',
            'vsWater': '2',
            'vsThunder': '-2',
            'vsIce': '3',
            'vsDragon': '-4',
        },
        'upperBody': {
            'name': 'Rathalos Mail',
            'level': '9',
            'rarity': '4',
            'defense': '46',
            'vsFire': '3',
            'vsWater': '1',
            'vsThunder': '-2',
            'vsIce': '1',
            'vsDragon': '-3',
        },
        'hands': {
            'name': 'Death Stench Grip',
            'level': '9',
            'rarity': '4',
            'defense': '48',
            'vsFire': '3',
            'vsWater': '2',
            'vsThunder': '-2',
            'vsIce': '3',
            'vsDragon': '-4',
        },
        'lowerBody': {
            'name': 'Odogaron Coil',
            'level': '9',
            'rarity': '4',
            'defense': '46',
            'vsFire': '2',
            'vsWater': '2',
            'vsThunder': '-2',
            'vsIce': '-3',
            'vsDragon': '0',
        },
        'legs': {
            'name': 'Jyura Greaves ⍺',
            'level': '9',
            'rarity': '5',
            'defense': '60',
            'vsFire': '-1',
            'vsWater': '2',
            'vsThunder': '-3',
            'vsIce': '0',
            'vsDragon': '0',
        },
        'specializedTool1': 'Vitality Mantle',
        'items': [{
            'name': 'Potion',
            'quantity': '10',
        }, {
            'name': 'Mega Potion',
            'quantity': '10',
        }, {
            'name': 'Max Potion',
            'quantity': '2',
        }, {
            'name': 'Well-done Steak',
            'quantity': '10',
        }, {
            'name': 'Flash Pod',
            'quantity': '3',
        }, {
            'name': 'Mega Barrel Bomb',
            'quantity': '2',
        }, {
            'name': 'Large Barrel Bomb',
            'quantity': '2',
        }, {
            'name': 'Farcaster',
            'quantity': '1',
        }, {
            'name': 'Powercharm',
            'quantity': '1',
        }, {
            'name': 'Powertalon',
            'quantity': '1',
        }, ]
    }, {
        'weapon': 'Baan Claw I',
        'head': {
            'name': 'Bone Helm ⍺',
            'level': '4',
            'rarity': '5',
            'defense': '42',
            'vsFire': '2',
            'vsWater': '0',
            'vsThunder': '2',
            'vsIce': '0',
            'vsDragon': '2',
        },
        'upperBody': {
            'name': 'Baan Mail ⍺',
            'level': '3',
            'rarity': '6',
            'defense': '50',
            'vsFire': '0',
            'vsWater': '2',
            'vsThunder': '0',
            'vsIce': '-1',
            'vsDragon': '-2',
        },
        'hands': {
            'name': 'Dodogama Vambraces ⍺',
            'level': '4',
            'rarity': '5',
            'defense': '54',
            'vsFire': '2',
            'vsWater': '0',
            'vsThunder': '-3',
            'vsIce': '0',
            'vsDragon': '2',
        },
        'lowerBody': {
            'name': 'Baan Coil ⍺',
            'level': '3',
            'rarity': '6',
            'defense': '50',
            'vsFire': '0',
            'vsWater': '2',
            'vsThunder': '0',
            'vsIce': '-1',
            'vsDragon': '-2',
        },
        'legs': {
            'name': 'Hunter\'s Greaves ⍺',
            'level': '4',
            'rarity': '5',
            'defense': '42',
            'vsFire': '2',
            'vsWater': '2',
            'vsThunder': '0',
            'vsIce': '0',
            'vsDragon': '0',
        },
        'specializedTool1': 'Glider Mantle',
        'items': [{
            'name': 'Potion',
            'quantity': '10',
        }, {
            'name': 'Mega Potion',
            'quantity': '10',
        }, {
            'name': 'Max Potion',
            'quantity': '2',
        }, {
            'name': 'Well-done Steak',
            'quantity': '10',
        }, {
            'name': 'Flash Pod',
            'quantity': '3',
        }, {
            'name': 'Poison Knife',
            'quantity': '5',
        }, {
            'name': 'Paralysis Knife',
            'quantity': '5',
        }, {
            'name': 'Sleep Knife',
            'quantity': '5',
        }, {
            'name': 'Pitfall Trap',
            'quantity': '1',
        }, {
            'name': 'Shock Trap',
            'quantity': '1',
        }, {
            'name': 'Farcaster',
            'quantity': '1',
        }, ]
    }, {
        'weapon': 'Lightning Spire II',
        'head': {
            'name': 'Kadachi Helm ⍺',
            'level': '7',
            'rarity': '5',
            'defense': '56',
            'vsFire': '0',
            'vsWater': '-3',
            'vsThunder': '3',
            'vsIce': '0',
            'vsDragon': '0',
        },
        'upperBody': {
            'name': 'Kadachi Mail ⍺',
            'level': '6',
            'rarity': '5',
            'defense': '54',
            'vsFire': '0',
            'vsWater': '-3',
            'vsThunder': '3',
            'vsIce': '0',
            'vsDragon': '0',
        },
        'hands': {
            'name': 'Kadachi Vambraces ⍺',
            'level': '6',
            'rarity': '5',
            'defense': '54',
            'vsFire': '0',
            'vsWater': '-3',
            'vsThunder': '3',
            'vsIce': '0',
            'vsDragon': '0',
        },
        'lowerBody': {
            'name': 'Chainmail Belt ⍺',
            'level': '6',
            'rarity': '5',
            'defense': '42',
            'vsFire': '0',
            'vsWater': '2',
            'vsThunder': '0',
            'vsIce': '0',
            'vsDragon': '0',
        },
        'legs': {
            'name': 'Alloy Greaves ⍺',
            'level': '6',
            'rarity': '5',
            'defense': '46',
            'vsFire': '-2',
            'vsWater': '0',
            'vsThunder': '-2',
            'vsIce': '-2',
            'vsDragon': '0',
        },
        'specializedTool1': 'Health Booster',
        'items': [{
            'name': 'Potion',
            'quantity': '10',
        }, {
            'name': 'Mega Potion',
            'quantity': '10',
        }, {
            'name': 'Max Potion',
            'quantity': '2',
        }, {
            'name': 'Well-done Steak',
            'quantity': '10',
        }, {
            'name': 'Mega Barrel Bomb',
            'quantity': '2',
        }, {
            'name': 'Large Barrel Bomb',
            'quantity': '2',
        }, {
            'name': 'Paralysis Knife',
            'quantity': '5',
        }, {
            'name': 'Farcaster',
            'quantity': '1',
        }, {
            'name': 'Powercharm',
            'quantity': '1',
        }, {
            'name': 'Powertalon',
            'quantity': '1',
        }, ]
    }, {
        'weapon': 'Datura Blade I',
        'head': {
            'name': 'Rathian Helm ⍺',
            'level': '3',
            'rarity': '5',
            'defense': '50',
            'vsFire': '2',
            'vsWater': '0',
            'vsThunder': '-2',
            'vsIce': '0',
            'vsDragon': '-3',
        },
        'upperBody': {
            'name': 'Lumu Mail ⍺',
            'level': '3',
            'rarity': '5',
            'defense': '48',
            'vsFire': '-3',
            'vsWater': '2',
            'vsThunder': '0',
            'vsIce': '1',
            'vsDragon': '0',
        },
        'hands': {
            'name': 'Legiana Vambraces ⍺',
            'level': '2',
            'rarity': '6',
            'defense': '56',
            'vsFire': '-1',
            'vsWater': '2',
            'vsThunder': '-3',
            'vsIce': '3',
            'vsDragon': '0',
        },
        'lowerBody': {
            'name': 'Rathian Coil ⍺',
            'level': '3',
            'rarity': '5',
            'defense': '50',
            'vsFire': '2',
            'vsWater': '0',
            'vsThunder': '-2',
            'vsIce': '0',
            'vsDragon': '-3',
        },
        'legs': {
            'name': 'Kadachi Greaves ⍺',
            'level': '3',
            'rarity': '5',
            'defense': '48',
            'vsFire': '0',
            'vsWater': '-3',
            'vsThunder': '3',
            'vsIce': '0',
            'vsDragon': '0',
        },
        'specializedTool1': 'Glider Mantle',
        'items': [{
            'name': 'Potion',
            'quantity': '10',
        }, {
            'name': 'Mega Potion',
            'quantity': '10',
        }, {
            'name': 'Max Potion',
            'quantity': '2',
        }, {
            'name': 'Well-done Steak',
            'quantity': '10',
        }, {
            'name': 'Flash Pod',
            'quantity': '3',
        }, {
            'name': 'EZ Pitall Trap',
            'quantity': '1',
        }, {
            'name': 'Pitfall Trap',
            'quantity': '1',
        }, {
            'name': 'EZ Shock Trap',
            'quantity': '1',
        }, {
            'name': 'Shock Trap',
            'quantity': '1',
        }, {
            'name': 'Farcaster',
            'quantity': '1',
        }, ]
    }, {
        'weapon': 'Anja Buster I',
        'head': {
            'name': 'Vespoid Helm ⍺',
            'level': '6',
            'rarity': '5',
            'defense': '48',
            'vsFire': '-2',
            'vsWater': '1',
            'vsThunder': '1',
            'vsIce': '1',
            'vsDragon': '2',
        },
        'upperBody': {
            'name': 'Anja Mail ⍺',
            'level': '6',
            'rarity': '5',
            'defense': '54',
            'vsFire': '3',
            'vsWater': '-3',
            'vsThunder': '-1',
            'vsIce': '-1',
            'vsDragon': '0',
        },
        'hands': {
            'name': 'Anja Vambraces ⍺',
            'level': '6',
            'rarity': '5',
            'defense': '54',
            'vsFire': '3',
            'vsWater': '-3',
            'vsThunder': '-1',
            'vsIce': '-1',
            'vsDragon': '0',
        },
        'lowerBody': {
            'name': 'Chainmail Belt ⍺',
            'level': '6',
            'rarity': '5',
            'defense': '42',
            'vsFire': '0',
            'vsWater': '2',
            'vsThunder': '0',
            'vsIce': '0',
            'vsDragon': '0',
        },
        'legs': {
            'name': 'Odogaron Greaves',
            'level': '6',
            'rarity': '4',
            'defense': '40',
            'vsFire': '2',
            'vsWater': '2',
            'vsThunder': '-2',
            'vsIce': '-3',
            'vsDragon': '0',
        },
        'specializedTool1': 'Vitality Mantle',
        'items': [{
            'name': 'Potion',
            'quantity': '10',
        }, {
            'name': 'Mega Potion',
            'quantity': '10',
        }, {
            'name': 'Max Potion',
            'quantity': '2',
        }, {
            'name': 'Well-done Steak',
            'quantity': '10',
        }, {
            'name': 'Flash Pod',
            'quantity': '3',
        }, {
            'name': 'Paralysis Knife',
            'quantity': '5',
        }, {
            'name': 'Sleep Knife',
            'quantity': '5',
        }, {
            'name': 'Pitfall Trap',
            'quantity': '1',
        }, {
            'name': 'Shock Trap',
            'quantity': '1',
        }, {
            'name': 'Farcaster',
            'quantity': '1',
        }, ],
        'ammo': [{
            'name': 'Normal Ammo 2',
            'quantity': '99',
        }, {
            'name': 'Normal Ammo 3',
            'quantity': '99',
        }, {
            'name': 'Pierce Ammo 1',
            'quantity': '60',
        }, {
            'name': 'Pierce Ammo 2',
            'quantity': '60',
        }, {
            'name': 'Pierce Ammo 3',
            'quantity': '60',
        }, {
            'name': 'Sticky Ammo 1',
            'quantity': '9',
        }, {
            'name': 'Sticky Ammo 2',
            'quantity': '9',
        }, {
            'name': 'Sticky Ammo 3',
            'quantity': '9',
        }, {
            'name': 'Poison Ammo 2',
            'quantity': '8',
        }, {
            'name': 'Demon Ammo',
            'quantity': '2',
        }, ]
    }, ]
}, {
    'name': 'Arena Quest 07',
    'translationKey': 'quest-arena-quest-07',
    'level': '7',
    'objective': 'quest-objective-slay-an-azure-rathalos',
    'targetMonsters': ['Azure Rathalos'],
    'icon': require('./assets/quests/icon_arena.png'),
    'rewardMoney': '2160',
    'timeLimit': '50',
    'conditions': ['quest-conditions-hr-13-or-higher'],
    'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-9-times'],
    'client': 'quest-client-arena-lass',
    'description': 'quest-arena-quest-07-description',
    'rank': [{
            'name': 'A',
            'time': '07\'00"00',
        },
        {
            'name': 'B',
            'time': '30\'00"00',
        },
        {
            'name': 'C',
            'time': '50\'00"00',
        }
    ],
    'equipmentInfo': [{
        'weapon': 'Master Bang',
        'head': {
            'name': 'Barroth Helm ⍺',
            'level': '10',
            'rarity': '5',
            'defense': '60',
            'vsFire': '-3',
            'vsWater': '-1',
            'vsThunder': '3',
            'vsIce': '-1',
            'vsDragon': '0',
        },
        'upperBody': {
            'name': 'Tzitzi Mail ⍺',
            'level': '10',
            'rarity': '5',
            'defense': '58',
            'vsFire': '0',
            'vsWater': '0',
            'vsThunder': '-3',
            'vsIce': '-2',
            'vsDragon': '0',
        },
        'hands': {
            'name': 'Jyura Vambraces ⍺',
            'level': '10',
            'rarity': '5',
            'defense': '62',
            'vsFire': '-1',
            'vsWater': '2',
            'vsThunder': '-3',
            'vsIce': '0',
            'vsDragon': '0',
        },
        'lowerBody': {
            'name': 'Barroth Coil ⍺',
            'level': '10',
            'rarity': '5',
            'defense': '60',
            'vsFire': '-3',
            'vsWater': '-1',
            'vsThunder': '3',
            'vsIce': '-1',
            'vsDragon': '0',
        },
        'legs': {
            'name': 'Uragaan Greaves ⍺',
            'level': '9',
            'rarity': '7',
            'defense': '76',
            'vsFire': '4',
            'vsWater': '-3',
            'vsThunder': '1',
            'vsIce': '-2',
            'vsDragon': '-2',
        },
        'specializedTool1': 'Glider Mantle',
        'items': [{
            'name': 'Potion',
            'quantity': '10',
        }, {
            'name': 'Mega Potion',
            'quantity': '10',
        }, {
            'name': 'Max Potion',
            'quantity': '2',
        }, {
            'name': 'Well-done Steak',
            'quantity': '10',
        }, {
            'name': 'Antidote',
            'quantity': '10',
        }, {
            'name': 'Might Seed',
            'quantity': '2',
        }, {
            'name': 'Adamant Seed',
            'quantity': '2',
        }, {
            'name': 'Nulberry',
            'quantity': '10',
        }, {
            'name': 'Flash Pod',
            'quantity': '3',
        }, {
            'name': 'Mega Bounce Bomb',
            'quantity': '5',
        }, {
            'name': 'Bounce Bomb',
            'quantity': '5',
        }, {
            'name': 'Paralysis Knife',
            'quantity': '5',
        }, {
            'name': 'Sleep Knife',
            'quantity': '5',
        }, {
            'name': 'EZ Pitfall Trap',
            'quantity': '1',
        }, {
            'name': 'Pitfall Trap',
            'quantity': '1',
        }, {
            'name': 'EZ Shock Trap',
            'quantity': '1',
        }, {
            'name': 'Shock Trap',
            'quantity': '1',
        }, {
            'name': 'Farcaster',
            'quantity': '1',
        }, {
            'name': 'Powertalon',
            'quantity': '1',
        }, ]
    }, {
        'weapon': 'Strong Hatchets II',
        'head': {
            'name': 'Rath Heart Helm ⍺',
            'level': '10',
            'rarity': '6',
            'defense': '70',
            'vsFire': '3',
            'vsWater': '0',
            'vsThunder': '-3',
            'vsIce': '0',
            'vsDragon': '-4',
        },
        'upperBody': {
            'name': 'Kadachi Mail ⍺',
            'level': '10',
            'rarity': '6',
            'defense': '70',
            'vsFire': '3',
            'vsWater': '0',
            'vsThunder': '-3',
            'vsIce': '0',
            'vsDragon': '-4',
        },
        'hands': {
            'name': 'Kadachi Vambraces ⍺',
            'level': '10',
            'rarity': '5',
            'defense': '62',
            'vsFire': '0',
            'vsWater': '-3',
            'vsThunder': '3',
            'vsIce': '0',
            'vsDragon': '0',
        },
        'lowerBody': {
            'name': 'Diablos Coil ⍺',
            'level': '10',
            'rarity': '6',
            'defense': '72',
            'vsFire': '3',
            'vsWater': '-2',
            'vsThunder': '0',
            'vsIce': '-3',
            'vsDragon': '2',
        },
        'legs': {
            'name': 'Alloy Greaves ⍺',
            'level': '11',
            'rarity': '5',
            'defense': '56',
            'vsFire': '-2',
            'vsWater': '0',
            'vsThunder': '-2',
            'vsIce': '-2',
            'vsDragon': '0',
        },
        'specializedTool1': 'Health Booster',
        'items': [{
            'name': 'Potion',
            'quantity': '10',
        }, {
            'name': 'Mega Potion',
            'quantity': '10',
        }, {
            'name': 'Max Potion',
            'quantity': '2',
        }, {
            'name': 'Well-done Steak',
            'quantity': '10',
        }, {
            'name': 'Antidote',
            'quantity': '10',
        }, {
            'name': 'Nulberry',
            'quantity': '10',
        }, {
            'name': 'EZ Flash Pod',
            'quantity': '3',
        }, {
            'name': 'Flash Pod',
            'quantity': '3',
        }, {
            'name': 'Mega Bounce Bomb',
            'quantity': '5',
        }, {
            'name': 'Bounce Bomb',
            'quantity': '5',
        }, {
            'name': 'Paralysis Knife',
            'quantity': '5',
        }, {
            'name': 'Sleep Knife',
            'quantity': '5',
        }, {
            'name': 'Farcaster',
            'quantity': '1',
        }, {
            'name': 'Powertalon',
            'quantity': '1',
        }, ]
    }, {
        'weapon': 'Cocytus',
        'head': {
            'name': 'Diablos Helm ⍺',
            'level': '5',
            'rarity': '6',
            'defense': '62',
            'vsFire': '3',
            'vsWater': '-2',
            'vsThunder': '0',
            'vsIce': '-3',
            'vsDragon': '2',
        },
        'upperBody': {
            'name': 'Diablos Mail ⍺',
            'level': '5',
            'rarity': '6',
            'defense': '62',
            'vsFire': '3',
            'vsWater': '-2',
            'vsThunder': '0',
            'vsIce': '-3',
            'vsDragon': '2',
        },
        'hands': {
            'name': 'Diablos Vambraces ⍺',
            'level': '5',
            'rarity': '6',
            'defense': '62',
            'vsFire': '3',
            'vsWater': '-2',
            'vsThunder': '0',
            'vsIce': '-3',
            'vsDragon': '2',
        },
        'lowerBody': {
            'name': 'Dober Coil ⍺',
            'level': '4',
            'rarity': '7',
            'defense': '66',
            'vsFire': '-2',
            'vsWater': '0',
            'vsThunder': '-1',
            'vsIce': '-1',
            'vsDragon': '4',
        },
        'legs': {
            'name': 'Dober Greaves ⍺',
            'level': '4',
            'rarity': '7',
            'defense': '66',
            'vsFire': '-2',
            'vsWater': '0',
            'vsThunder': '-1',
            'vsIce': '-1',
            'vsDragon': '4',
        },
        'specializedTool1': 'Vitality Mantle',
        'items': [{
            'name': 'Potion',
            'quantity': '10',
        }, {
            'name': 'Mega Potion',
            'quantity': '10',
        }, {
            'name': 'Max Potion',
            'quantity': '2',
        }, {
            'name': 'Well-done Steak',
            'quantity': '10',
        }, {
            'name': 'Antidote',
            'quantity': '10',
        }, {
            'name': 'Nulberry',
            'quantity': '10',
        }, {
            'name': 'Mega Demondrug',
            'quantity': '2',
        }, {
            'name': 'Might Seed',
            'quantity': '2',
        }, {
            'name': 'Flash Pod',
            'quantity': '3',
        }, {
            'name': 'Mega Barrel Bomb',
            'quantity': '2',
        }, {
            'name': 'Large Barrel Bomb',
            'quantity': '2',
        }, {
            'name': 'Mega Bounce Bomb',
            'quantity': '5',
        }, {
            'name': 'Bounce Bomb',
            'quantity': '5',
        }, {
            'name': 'Paralysis Knife',
            'quantity': '5',
        }, {
            'name': 'Farcaster',
            'quantity': '1',
        }, {
            'name': 'Powercharm',
            'quantity': '1',
        }, {
            'name': 'Powertalon',
            'quantity': '1',
        }, ]
    }, {
        'weapon': 'Fortissimo II',
        'head': {
            'name': 'Legiana Helm ⍺',
            'level': '11',
            'rarity': '6',
            'defense': '74',
            'vsFire': '-1',
            'vsWater': '2',
            'vsThunder': '-3',
            'vsIce': '3',
            'vsDragon': '0',
        },
        'upperBody': {
            'name': 'Barroth Mail ⍺',
            'level': '12',
            'rarity': '5',
            'defense': '64',
            'vsFire': '-3',
            'vsWater': '-1',
            'vsThunder': '3',
            'vsIce': '-1',
            'vsDragon': '0',
        },
        'hands': {
            'name': 'Barroth Vambraces ⍺',
            'level': '12',
            'rarity': '5',
            'defense': '64',
            'vsFire': '-3',
            'vsWater': '-1',
            'vsThunder': '3',
            'vsIce': '-1',
            'vsDragon': '0',
        },
        'lowerBody': {
            'name': 'Bone Coil ß',
            'level': '11',
            'rarity': '5',
            'defense': '56',
            'vsFire': '2',
            'vsWater': '0',
            'vsThunder': '2',
            'vsIce': '0',
            'vsDragon': '2',
        },
        'legs': {
            'name': 'Kulu Greaves ⍺',
            'level': '11',
            'rarity': '5',
            'defense': '60',
            'vsFire': '0',
            'vsWater': '-3',
            'vsThunder': '0',
            'vsIce': '1',
            'vsDragon': '0',
        },
        'specializedTool1': 'Vitality Mantle',
        'items': [{
            'name': 'Potion',
            'quantity': '10',
        }, {
            'name': 'Mega Potion',
            'quantity': '10',
        }, {
            'name': 'Herbal Powder',
            'quantity': '2',
        }, {
            'name': 'Demon Powder',
            'quantity': '2',
        }, {
            'name': 'Hardshell Powder',
            'quantity': '2',
        }, {
            'name': 'Max Potion',
            'quantity': '2',
        }, {
            'name': 'Well-done Steak',
            'quantity': '10',
        }, {
            'name': 'Antidote',
            'quantity': '10',
        }, {
            'name': 'Nulberry',
            'quantity': '10',
        }, {
            'name': 'EZ Flash Pod',
            'quantity': '3',
        }, {
            'name': 'Flash Pod',
            'quantity': '3',
        }, {
            'name': 'Mega Bounce Bomb',
            'quantity': '5',
        }, {
            'name': 'Bounce Bomb',
            'quantity': '5',
        }, {
            'name': 'Paralysis Knife',
            'quantity': '5',
        }, {
            'name': 'Sleep Knife',
            'quantity': '5',
        }, {
            'name': 'Pitfall Trap',
            'quantity': '1',
        }, {
            'name': 'Shock Trap',
            'quantity': '1',
        }, {
            'name': 'Farcaster',
            'quantity': '1',
        }, {
            'name': 'Powertalon',
            'quantity': '1',
        }, ]
    }, {
        'weapon': 'Legia Snowfletcher',
        'head': {
            'name': 'Diablos Helm ß',
            'level': '6',
            'rarity': '6',
            'defense': '64',
            'vsFire': '3',
            'vsWater': '-2',
            'vsThunder': '0',
            'vsIce': '-3',
            'vsDragon': '2',
        },
        'upperBody': {
            'name': 'Uragaan Mail ⍺',
            'level': '6',
            'rarity': '7',
            'defense': '70',
            'vsFire': '4',
            'vsWater': '-3',
            'vsThunder': '1',
            'vsIce': '-2',
            'vsDragon': '-2',
        },
        'hands': {
            'name': 'Bone Vambraces ß',
            'level': '6',
            'rarity': '5',
            'defense': '46',
            'vsFire': '2',
            'vsWater': '0',
            'vsThunder': '2',
            'vsIce': '0',
            'vsDragon': '2',
        },
        'lowerBody': {
            'name': 'Uragaan Coil ⍺',
            'level': '6',
            'rarity': '7',
            'defense': '70',
            'vsFire': '4',
            'vsWater': '-3',
            'vsThunder': '1',
            'vsIce': '-2',
            'vsDragon': '-2',
        },
        'legs': {
            'name': 'Diablos Greaves ⍺',
            'level': '6',
            'rarity': '6',
            'defense': '64',
            'vsFire': '3',
            'vsWater': '-2',
            'vsThunder': '0',
            'vsIce': '-3',
            'vsDragon': '2',
        },
        'specializedTool1': 'Glider Mantle',
        'items': [{
            'name': 'Potion',
            'quantity': '10',
        }, {
            'name': 'Mega Potion',
            'quantity': '10',
        }, {
            'name': 'Max Potion',
            'quantity': '2',
        }, {
            'name': 'Well-done Steak',
            'quantity': '10',
        }, {
            'name': 'Antidote',
            'quantity': '10',
        }, {
            'name': 'Nulberry',
            'quantity': '10',
        }, {
            'name': 'Mega Demondrug',
            'quantity': '2',
        }, {
            'name': 'Might Seed',
            'quantity': '3',
        }, {
            'name': 'Flash Pod',
            'quantity': '3',
        }, {
            'name': 'Mega Barrel Bomb',
            'quantity': '2',
        }, {
            'name': 'Large Barrel Bomb',
            'quantity': '2',
        }, {
            'name': 'Farcaster',
            'quantity': '1',
        }, {
            'name': 'Powertalon',
            'quantity': '1',
        }, {
            'name': 'Powercharm',
            'quantity': '1',
        }, ],
        'ammo': [{
            'name': 'Power Coating',
            'quantity': '50',
        }, {
            'name': 'Poison Coating',
            'quantity': '20',
        }, {
            'name': 'Sleep Coating',
            'quantity': '20',
        }, ]
    }, ]
}, {
    'name': 'Arena Quest 08',
    'translationKey': 'quest-arena-quest-08',
    'level': '8',
    'objective': 'quest-objective-slay-all-target-monsters',
    'targetMonsters': ['Radobaan', 'Uragaan'],
    'icon': require('./assets/quests/icon_arena.png'),
    'rewardMoney': '3240',
    'timeLimit': '50',
    'conditions': ['quest-conditions-hr-15-or-higher'],
    'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-9-times'],
    'client': 'quest-client-arena-lass',
    'description': 'quest-arena-quest-08-description',
    'rank': [{
            'name': 'A',
            'time': '07\'00"00',
        },
        {
            'name': 'B',
            'time': '13\'00"00',
        },
        {
            'name': 'C',
            'time': '50\'00"00',
        }
    ],
    'equipmentInfo': [{
        'weapon': 'Imperial Shimmer',
        'head': {
            'name': 'Rath Soul Helm ß',
            'level': '4',
            'rarity': '7',
            'defense': '62',
            'vsFire': '3',
            'vsWater': '2',
            'vsThunder': '2',
            'vsIce': '-3',
            'vsDragon': '-4',
        },
        'upperBody': {
            'name': 'Rathalos Mail ⍺',
            'level': '4',
            'rarity': '6',
            'defense': '60',
            'vsFire': '3',
            'vsWater': '1',
            'vsThunder': '-2',
            'vsIce': '1',
            'vsDragon': '-3',
        },
        'hands': {
            'name': 'Xeno\'jiiva Claws ⍺',
            'level': '3',
            'rarity': '8',
            'defense': '76',
            'vsFire': '-3',
            'vsWater': '2',
            'vsThunder': '2',
            'vsIce': '2',
            'vsDragon': '-4',
        },
        'lowerBody': {
            'name': 'Kaiser Coil ⍺',
            'level': '4',
            'rarity': '8',
            'defense': '70',
            'vsFire': '3',
            'vsWater': '-3',
            'vsThunder': '1',
            'vsIce': '-3',
            'vsDragon': '1',
        },
        'legs': {
            'name': 'Nergigante Greaves ⍺l',
            'level': '3',
            'rarity': '8',
            'defense': '68',
            'vsFire': '1',
            'vsWater': '1',
            'vsThunder': '-3',
            'vsIce': '1',
            'vsDragon': '-3',
        },
        'charm': 'Critical Charm I',
        'specializedTool1': 'Affinity Booster',
        'specializedTool2': 'Rocksteady Mantle',
        'items': [{
            'name': 'Potion',
            'quantity': '10',
        }, {
            'name': 'Mega Potion',
            'quantity': '10',
        }, {
            'name': 'EZ Max Potion',
            'quantity': '2',
        }, {
            'name': 'Max Potion',
            'quantity': '2',
        }, {
            'name': 'Ancient Potion',
            'quantity': '1',
        }, {
            'name': 'Well-done Steak',
            'quantity': '10',
        }, {
            'name': 'Nulberry',
            'quantity': '10',
        }, {
            'name': 'Flash Pod',
            'quantity': '3',
        }, ]
    }, {
        'weapon': 'Chrome Slicers II',
        'head': {
            'name': 'Rath Heart Helm ⍺',
            'level': '10',
            'rarity': '6',
            'defense': '70',
            'vsFire': '3',
            'vsWater': '0',
            'vsThunder': '-3',
            'vsIce': '0',
            'vsDragon': '-4',
        },
        'upperBody': {
            'name': 'Anja Mail ß',
            'level': '10',
            'rarity': '5',
            'defense': '62',
            'vsFire': '3',
            'vsWater': '-3',
            'vsThunder': '-1',
            'vsIce': '-1',
            'vsDragon': '0',
        },
        'hands': {
            'name': 'Kadachi Vambraces ⍺',
            'level': '10',
            'rarity': '5',
            'defense': '62',
            'vsFire': '0',
            'vsWater': '-3',
            'vsThunder': '3',
            'vsIce': '0',
            'vsDragon': '0',
        },
        'lowerBody': {
            'name': 'Kirin Hoop ⍺',
            'level': '10',
            'rarity': '8',
            'defense': '82',
            'vsFire': '-3',
            'vsWater': '-2',
            'vsThunder': '4',
            'vsIce': '-2',
            'vsDragon': '2',
        },
        'legs': {
            'name': 'Kirin Leg Guards ß',
            'level': '10',
            'rarity': '8',
            'defense': '82',
            'vsFire': '-3',
            'vsWater': '-2',
            'vsThunder': '4',
            'vsIce': '-2',
            'vsDragon': '2',
        },
        'charm': 'Evasion Charm I',
        'specializedTool1': 'Apothecary Mantle',
        'specializedTool2': 'Health Booster',
        'items': [{
            'name': 'Potion',
            'quantity': '10',
        }, {
            'name': 'Mega Potion',
            'quantity': '10',
        }, {
            'name': 'EZ Max Potion',
            'quantity': '2',
        }, {
            'name': 'Max Potion',
            'quantity': '2',
        }, {
            'name': 'Ancient Potion',
            'quantity': '1',
        }, {
            'name': 'Well-done Steak',
            'quantity': '10',
        }, {
            'name': 'Nulberry',
            'quantity': '10',
        }, {
            'name': 'Shock Trap',
            'quantity': '1',
        }, {
            'name': 'Pitfall Trap',
            'quantity': '1',
        }, ]
    }, {
        'weapon': 'Bazel Raider II',
        'head': {
            'name': 'Vaal Hazak Helm ß',
            'level': '7',
            'rarity': '8',
            'defense': '76',
            'vsFire': '-4',
            'vsWater': '4',
            'vsThunder': '1',
            'vsIce': '-1',
            'vsDragon': '-3',
        },
        'upperBody': {
            'name': 'Lumu Mail ⍺',
            'level': '8',
            'rarity': '5',
            'defense': '58',
            'vsFire': '-3',
            'vsWater': '2',
            'vsThunder': '0',
            'vsIce': '1',
            'vsDragon': '0',
        },
        'hands': {
            'name': 'Vaal Hazak Braces ß',
            'level': '7',
            'rarity': '8',
            'defense': '76',
            'vsFire': '-4',
            'vsWater': '4',
            'vsThunder': '1',
            'vsIce': '-1',
            'vsDragon': '-3',
        },
        'lowerBody': {
            'name': 'Vaal Hazak Coil ß',
            'level': '7',
            'rarity': '8',
            'defense': '76',
            'vsFire': '-4',
            'vsWater': '4',
            'vsThunder': '1',
            'vsIce': '-1',
            'vsDragon': '-3',
        },
        'legs': {
            'name': 'Anja Greaves ⍺',
            'level': '8',
            'rarity': '5',
            'defense': '58',
            'vsFire': '3',
            'vsWater': '-3',
            'vsThunder': '-1',
            'vsIce': '-1',
            'vsDragon': '0',
        },
        'charm': 'Attack Charm I',
        'specializedTool1': 'Vitality Mantle',
        'specializedTool2': 'Evasion Mantle',
        'items': [{
            'name': 'Potion',
            'quantity': '10',
        }, {
            'name': 'Mega Potion',
            'quantity': '10',
        }, {
            'name': 'Max Potion',
            'quantity': '2',
        }, {
            'name': 'EZ Max Potion',
            'quantity': '2',
        }, {
            'name': 'Ancient Potion',
            'quantity': '1',
        }, {
            'name': 'Well-done Steak',
            'quantity': '10',
        }, {
            'name': 'Nulberry',
            'quantity': '10',
        }, {
            'name': 'Paralysis Knife',
            'quantity': '5',
        }, {
            'name': 'Poison Knife',
            'quantity': '5',
        }, ]
    }, {
        'weapon': 'Water Glaive II',
        'head': {
            'name': 'Nergigante Helm ⍺',
            'level': '7',
            'rarity': '8',
            'defense': '76',
            'vsFire': '1',
            'vsWater': '1',
            'vsThunder': '-3',
            'vsIce': '1',
            'vsDragon': '-3',
        },
        'upperBody': {
            'name': 'Xeno\'jiiva Hide ß',
            'level': '7',
            'rarity': '8',
            'defense': '84',
            'vsFire': '-3',
            'vsWater': '2',
            'vsThunder': '2',
            'vsIce': '2',
            'vsDragon': '-4',
        },
        'hands': {
            'name': 'Tzitzi Vambraces ⍺',
            'level': '7',
            'rarity': '5',
            'defense': '52',
            'vsFire': '0',
            'vsWater': '0',
            'vsThunder': '-3',
            'vsIce': '-2',
            'vsDragon': '0',
        },
        'lowerBody': {
            'name': 'Tzitzi Coil ⍺',
            'level': '7',
            'rarity': '5',
            'defense': '52',
            'vsFire': '0',
            'vsWater': '0',
            'vsThunder': '-3',
            'vsIce': '-2',
            'vsDragon': '0',
        },
        'legs': {
            'name': 'Xeno\'jiiva Spurs ⍺',
            'level': '6',
            'rarity': '8',
            'defense': '82',
            'vsFire': '-3',
            'vsWater': '2',
            'vsThunder': '2',
            'vsIce': '2',
            'vsDragon': '-4',
        },
        'charm': 'Evasion Charm I',
        'specializedTool1': 'Glider Mantle',
        'specializedTool2': 'Vitality Mantle',
        'items': [{
            'name': 'Potion',
            'quantity': '10',
        }, {
            'name': 'Mega Potion',
            'quantity': '10',
        }, {
            'name': 'EZ Max Potion',
            'quantity': '2',
        }, {
            'name': 'Max Potion',
            'quantity': '2',
        }, {
            'name': 'Ancient Potion',
            'quantity': '1',
        }, {
            'name': 'Well-done Steak',
            'quantity': '10',
        }, {
            'name': 'Nulberry',
            'quantity': '10',
        }, {
            'name': 'Might Seed',
            'quantity': '3',
        }, {
            'name': 'Might Pill',
            'quantity': '3',
        }, {
            'name': 'Adamant Seed',
            'quantity': '3',
        }, {
            'name': 'Dash Juice',
            'quantity': '2',
        }, ]
    }, {
        'weapon': 'Great Hunter\'s Bow',
        'head': {
            'name': 'Xeno\'jiiva Headgear ⍺',
            'level': '3',
            'rarity': '8',
            'defense': '76',
            'vsFire': '-3',
            'vsWater': '2',
            'vsThunder': '2',
            'vsIce': '2',
            'vsDragon': '-4',
        },
        'upperBody': {
            'name': 'Diablos Mail ß',
            'level': '4',
            'rarity': '6',
            'defense': '60',
            'vsFire': '3',
            'vsWater': '-2',
            'vsThunder': '0',
            'vsIce': '-3',
            'vsDragon': '2',
        },
        'hands': {
            'name': 'Bone Vambraces ß',
            'level': '4',
            'rarity': '5',
            'defense': '42',
            'vsFire': '2',
            'vsWater': '0',
            'vsThunder': '2',
            'vsIce': '0',
            'vsDragon': '2',
        },
        'lowerBody': {
            'name': 'Xeno\'jiiva Spine ⍺',
            'level': '3',
            'rarity': '8',
            'defense': '76',
            'vsFire': '-3',
            'vsWater': '2',
            'vsThunder': '2',
            'vsIce': '2',
            'vsDragon': '-4',
        },
        'legs': {
            'name': 'Lavasioth Greaves ß',
            'level': '4',
            'rarity': '6',
            'defense': '62',
            'vsFire': '3',
            'vsWater': '-3',
            'vsThunder': '1',
            'vsIce': '-2',
            'vsDragon': '2',
        },
        'charm': 'Penetration Charm',
        'specializedTool1': 'Impact Mantle',
        'specializedTool2': 'Apothecary Mantle',
        'items': [{
            'name': 'Potion',
            'quantity': '10',
        }, {
            'name': 'Mega Potion',
            'quantity': '10',
        }, {
            'name': 'EZ Max Potion',
            'quantity': '2',
        }, {
            'name': 'Max Potion',
            'quantity': '2',
        }, {
            'name': 'Ancient Potion',
            'quantity': '1',
        }, {
            'name': 'Well-done Steak',
            'quantity': '10',
        }, {
            'name': 'Nulberry',
            'quantity': '10',
        }, {
            'name': 'Mega Barrel Bomb',
            'quantity': '2',
        }, {
            'name': 'Large Barrel Bomb',
            'quantity': '2',
        }, {
            'name': 'Paralysis Knife',
            'quantity': '5',
        }, ],
        'ammo': [{
            'name': 'Blast Coating',
            'quantity': '20',
        }, ]
    }, ]
}, {
    'name': 'Arena Quest 09',
    'translationKey': 'quest-arena-quest-09',
    'level': '8',
    'objective': 'quest-objective-slay-all-target-monsters',
    'targetMonsters': ['Diablos', 'Black Diablos'],
    'icon': require('./assets/quests/icon_arena.png'),
    'rewardMoney': '3240',
    'timeLimit': '50',
    'conditions': ['quest-conditions-hr-15-or-higher'],
    'failureConditions': ['quest-failure-time-expires', 'quest-failure-faint-9-times'],
    'client': 'quest-client-arena-lass',
    'description': 'quest-arena-quest-09-description',
    'rank': [{
            'name': 'A',
            'time': '08\'30"00',
        },
        {
            'name': 'B',
            'time': '15\'00"00',
        },
        {
            'name': 'C',
            'time': '50\'00"00',
        }
    ],
    'equipmentInfo': [{
        'weapon': 'Magda Potestas I',
        'head': {
            'name': 'Bazel Helm ⍺',
            'level': '7',
            'rarity': '7',
            'defense': '70',
            'vsFire': '3',
            'vsWater': '1',
            'vsThunder': '-4',
            'vsIce': '-2',
            'vsDragon': '-2',
        },
        'upperBody': {
            'name': 'Uragaan Mail ⍺',
            'level': '7',
            'rarity': '7',
            'defense': '72',
            'vsFire': '4',
            'vsWater': '-3',
            'vsThunder': '1',
            'vsIce': '-2',
            'vsDragon': '-2',
        },
        'hands': {
            'name': 'Bazel Vambraces ⍺',
            'level': '7',
            'rarity': '7',
            'defense': '70',
            'vsFire': '3',
            'vsWater': '1',
            'vsThunder': '-4',
            'vsIce': '-2',
            'vsDragon': '-2',
        },
        'lowerBody': {
            'name': 'Diablos Nero Coil ⍺',
            'level': '6',
            'rarity': '7',
            'defense': '66',
            'vsFire': '2',
            'vsWater': '-3',
            'vsThunder': '0',
            'vsIce': '-4',
            'vsDragon': '2',
        },
        'legs': {
            'name': 'Kaiser Greaves ⍺',
            'level': '6',
            'rarity': '8',
            'defense': '74',
            'vsFire': '3',
            'vsWater': '-3',
            'vsThunder': '1',
            'vsIce': '-3',
            'vsDragon': '1',
        },
        'charm': 'Earplugs Charm Ii',
        'specializedTool1': 'Health Booster',
        'specializedTool2': 'Rocksteady Mantle',
        'items': [{
            'name': 'Potion',
            'quantity': '10',
        }, {
            'name': 'Mega Potion',
            'quantity': '10',
        }, {
            'name': 'Hardshell Powder',
            'quantity': '2',
        }, {
            'name': 'EZ Max Potion',
            'quantity': '2',
        }, {
            'name': 'Max Potion',
            'quantity': '2',
        }, {
            'name': 'Ancient Potion',
            'quantity': '1',
        }, {
            'name': 'Well-done Steak',
            'quantity': '10',
        }, {
            'name': 'Screamer Pod',
            'quantity': '3',
        }, {
            'name': 'Flash Pod',
            'quantity': '3',
        }, {
            'name': 'Mega Barrel Bomb',
            'quantity': '2',
        }, {
            'name': 'Large Barrel Bomb',
            'quantity': '2',
        }, ]
    }, {
        'weapon': 'Legia Rimespire',
        'head': {
            'name': 'Barroth Helm ⍺',
            'level': '13',
            'rarity': '5',
            'defense': '66',
            'vsFire': '-3',
            'vsWater': '-1',
            'vsThunder': '3',
            'vsIce': '-1',
            'vsDragon': '0',
        },
        'upperBody': {
            'name': 'Odogaron Mail ⍺',
            'level': '13',
            'rarity': '6',
            'defense': '78',
            'vsFire': '2',
            'vsWater': '2',
            'vsThunder': '-2',
            'vsIce': '-3',
            'vsDragon': '0',
        },
        'hands': {
            'name': 'Bone Vambraces ß',
            'level': '13',
            'rarity': '5',
            'defense': '60',
            'vsFire': '2',
            'vsWater': '0',
            'vsThunder': '2',
            'vsIce': '0',
            'vsDragon': '2',
        },
        'lowerBody': {
            'name': 'Odogaron Coil ⍺',
            'level': '13',
            'rarity': '6',
            'defense': '78',
            'vsFire': '2',
            'vsWater': '2',
            'vsThunder': '-2',
            'vsIce': '-3',
            'vsDragon': '0',
        },
        'legs': {
            'name': 'Diablos Greaves ⍺',
            'level': '13',
            'rarity': '6',
            'defense': '78',
            'vsFire': '3',
            'vsWater': '-2',
            'vsThunder': '0',
            'vsIce': '-3',
            'vsDragon': '2',
        },
        'charm': 'KO Charm I',
        'specializedTool1': 'Impact Mantle',
        'specializedTool2': 'Evasion Mantle',
        'items': [{
            'name': 'Potion',
            'quantity': '10',
        }, {
            'name': 'Mega Potion',
            'quantity': '10',
        }, {
            'name': 'EZ Max Potion',
            'quantity': '2',
        }, {
            'name': 'Max Potion',
            'quantity': '2',
        }, {
            'name': 'Ancient Potion',
            'quantity': '1',
        }, {
            'name': 'Well-done Steak',
            'quantity': '10',
        }, {
            'name': 'Screamer Pod',
            'quantity': '3',
        }, {
            'name': 'Flash Pod',
            'quantity': '3',
        }, {
            'name': 'Mega Barrel Bomb',
            'quantity': '2',
        }, {
            'name': 'Large Barrel Bomb',
            'quantity': '2',
        }, ]
    }, {
        'weapon': 'Icesteel Spear',
        'head': {
            'name': 'Kirin Horn ⍺',
            'level': '11',
            'rarity': '8',
            'defense': '84',
            'vsFire': '-3',
            'vsWater': '-2',
            'vsThunder': '4',
            'vsIce': '-2',
            'vsDragon': '2',
        },
        'upperBody': {
            'name': 'Rath Heart Mail ⍺',
            'level': '12',
            'rarity': '6',
            'defense': '74',
            'vsFire': '3',
            'vsWater': '0',
            'vsThunder': '-3',
            'vsIce': '0',
            'vsDragon': '-4',
        },
        'hands': {
            'name': 'Uragaan Vambraces ß',
            'level': '12',
            'rarity': '7',
            'defense': '82',
            'vsFire': '4',
            'vsWater': '-3',
            'vsThunder': '1',
            'vsIce': '-2',
            'vsDragon': '-2',
        },
        'lowerBody': {
            'name': 'Diablos Coil ß',
            'level': '12',
            'rarity': '6',
            'defense': '76',
            'vsFire': '3',
            'vsWater': '-2',
            'vsThunder': '0',
            'vsIce': '-3',
            'vsDragon': '2',
        },
        'legs': {
            'name': 'Rath Heart Greaves ß',
            'level': '12',
            'rarity': '6',
            'defense': '74',
            'vsFire': '3',
            'vsWater': '0',
            'vsThunder': '-3',
            'vsIce': '0',
            'vsDragon': '-4',
        },
        'charm': 'Blessing Charm I',
        'specializedTool1': 'Vitality Mantle',
        'specializedTool2': 'Health Booster',
        'items': [{
            'name': 'Potion',
            'quantity': '10',
        }, {
            'name': 'Mega Potion',
            'quantity': '10',
        }, {
            'name': 'EZ Max Potion2',
            'quantity': '',
        }, {
            'name': 'Max Potion',
            'quantity': '2',
        }, {
            'name': 'Ancient Potion',
            'quantity': '1',
        }, {
            'name': 'Well-done Steak',
            'quantity': '10',
        }, {
            'name': 'EZ Screamer Pod',
            'quantity': '3',
        }, {
            'name': 'Screamer Pod',
            'quantity': '3',
        }, {
            'name': 'Mega Barrel Bomb',
            'quantity': '2',
        }, {
            'name': 'Large Barrel Bomb',
            'quantity': '2',
        }, {
            'name': 'Poison Knife',
            'quantity': '5',
        }, {
            'name': 'Paralysis Knife',
            'quantity': '5',
        }, ]
    }, {
        'weapon': 'Glutton Gunlance III',
        'head': {
            'name': 'Dober Helm ⍺',
            'level': '12',
            'rarity': '7',
            'defense': '82',
            'vsFire': '-2',
            'vsWater': '0',
            'vsThunder': '-1',
            'vsIce': '-1',
            'vsDragon': '4',
        },
        'upperBody': {
            'name': 'Baan Mail ß',
            'level': '12',
            'rarity': '6',
            'defense': '68',
            'vsFire': '0',
            'vsWater': '2',
            'vsThunder': '0',
            'vsIce': '-1',
            'vsDragon': '-2',
        },
        'hands': {
            'name': 'Baan Vambraces ⍺',
            'level': '12',
            'rarity': '6',
            'defense': '68',
            'vsFire': '0',
            'vsWater': '2',
            'vsThunder': '0',
            'vsIce': '-1',
            'vsDragon': '-2',
        },
        'lowerBody': {
            'name': 'Dodogama Coil ß',
            'level': '13',
            'rarity': '5',
            'defense': '72',
            'vsFire': '2',
            'vsWater': '0',
            'vsThunder': '-3',
            'vsIce': '0',
            'vsDragon': '2',
        },
        'legs': {
            'name': 'Kirin Leg Guards ß',
            'level': '11',
            'rarity': '8',
            'defense': '84',
            'vsFire': '-3',
            'vsWater': '-2',
            'vsThunder': '4',
            'vsIce': '-2',
            'vsDragon': '2',
        },
        'specializedTool1': 'Apothecary Mantle',
        'specializedTool2': 'Impact Mantle',
        'items': [{
            'name': 'Potion',
            'quantity': '10',
        }, {
            'name': 'Mega Potion',
            'quantity': '10',
        }, {
            'name': 'EZ Max Potion',
            'quantity': '2',
        }, {
            'name': 'Max Potion',
            'quantity': '2',
        }, {
            'name': 'Ancient Potion',
            'quantity': '1',
        }, {
            'name': 'Well-done Steak',
            'quantity': '10',
        }, {
            'name': 'EZ Screamer Pod',
            'quantity': '3',
        }, {
            'name': 'Screamer Pod',
            'quantity': '3',
        }, {
            'name': 'Flash Pod',
            'quantity': '3',
        }, {
            'name': 'Sleep Knife',
            'quantity': '5',
        }, {
            'name': 'Shock Trap',
            'quantity': '1',
        }, ]
    }, {
        'weapon': 'Teostra\'s Flames',
        'head': {
            'name': 'Bazel Helm ß',
            'level': '11',
            'rarity': '7',
            'defense': '78',
            'vsFire': '3',
            'vsWater': '1',
            'vsThunder': '-4',
            'vsIce': '-2',
            'vsDragon': '-2',
        },
        'upperBody': {
            'name': 'Kaiser Mail ⍺',
            'level': '11',
            'rarity': '8',
            'defense': '84',
            'vsFire': '3',
            'vsWater': '-3',
            'vsThunder': '1',
            'vsIce': '-3',
            'vsDragon': '1',
        },
        'hands': {
            'name': 'Bazel Vambraces ⍺',
            'level': '11',
            'rarity': '7',
            'defense': '78',
            'vsFire': '3',
            'vsWater': '1',
            'vsThunder': '-4',
            'vsIce': '-2',
            'vsDragon': '-2',
        },
        'lowerBody': {
            'name': 'Bazel Coil ⍺',
            'level': '11',
            'rarity': '7',
            'defense': '78',
            'vsFire': '3',
            'vsWater': '1',
            'vsThunder': '-4',
            'vsIce': '-2',
            'vsDragon': '-2',
        },
        'legs': {
            'name': 'Anja Greaves ⍺',
            'level': '10',
            'rarity': '5',
            'defense': '62',
            'vsFire': '3',
            'vsWater': '-3',
            'vsThunder': '-1',
            'vsIce': '-1',
            'vsDragon': '0',
        },
        'specializedTool1': 'Affinity Booster',
        'specializedTool2': 'Rocksteady Mantle',
        'items': [{
            'name': 'Potion',
            'quantity': '10',
        }, {
            'name': 'Mega Potion',
            'quantity': '10',
        }, {
            'name': 'Lifepowder',
            'quantity': '3',
        }, {
            'name': 'Demon Powder',
            'quantity': '3',
        }, {
            'name': 'Hardshell Powder',
            'quantity': '3',
        }, {
            'name': 'EZ Max Potion',
            'quantity': '2',
        }, {
            'name': 'Max Potion',
            'quantity': '2',
        }, {
            'name': 'Ancient Potion',
            'quantity': '1',
        }, {
            'name': 'Well-done Steak',
            'quantity': '10',
        }, {
            'name': 'EZ Screamer Pod',
            'quantity': '3',
        }, {
            'name': 'Screamer Pod',
            'quantity': '3',
        }, {
            'name': 'Flash Pod',
            'quantity': '3',
        }, {
            'name': 'Sleep Knife',
            'quantity': '5',
        }, {
            'name': 'EZ Shock Trap',
            'quantity': '1',
        }, {
            'name': 'Shock Trap',
            'quantity': '1',
        }, ],
        'ammo': [{
            'name': 'Normal Ammo 2',
            'quantity': '99',
        }, {
            'name': 'Normal Ammo 3',
            'quantity': '99',
        }, {
            'name': 'Pierce Ammo 1',
            'quantity': '60',
        }, {
            'name': 'Pierce Ammo 2',
            'quantity': '60',
        }, {
            'name': 'Pierce Ammo 3',
            'quantity': '60',
        }, {
            'name': 'Sticky Ammo 1',
            'quantity': '9',
        }, {
            'name': 'Sticky Ammo 2',
            'quantity': '9',
        }, {
            'name': 'Sticky Ammo 3',
            'quantity': '9',
        }, {
            'name': 'Cluster Bomb 1',
            'quantity': '3',
        }, {
            'name': 'Cluster Bomb 2',
            'quantity': '3',
        }, {
            'name': 'Cluster Bomb 3',
            'quantity': '3',
        }, {
            'name': 'Wyvern Ammo',
            'quantity': '5',
        }, {
            'name': 'Slicing Ammo',
            'quantity': '30',
        }, ]
    }, ]
}, ]

let deliveries = [{
    'name': 'Sprouting an Ancient Tree',
    'client': 'Forceful Fiver',
    'description': 'The Ancient Tree needs rich fertilizer to reach its full potential. That\'s where our research comes in!',
    'requestedItems': [{
        'name': 'Research Points',
        'required': '500'
    }, {
        'name': 'Coral Bone',
        'required': '1'
    }],
    'rewards': 'Catalyst'
}, {
    'name': 'Grow, Greenery, Grow',
    'client': 'quest-client-timid-fiver',
    'description': 'Nothing beats a bountiful harvest! You can really feel all the love you put in being reciprocated back at you.',
    'requestedItems': [{
        'name': 'Research Points',
        'required': '600'
    }, {
        'name': 'Great Jagras Hide+',
        'required': '1'
    }],
    'rewards': 'Mega Fertilizer'
}, {
    'name': 'A Mountain of Mushrooms',
    'client': 'Sisterly Fourth',
    'description': 'The rarest mushrooms only grow on the best-fed trees. Talk about picky eaters!',
    'requestedItems': [{
        'name': 'Research Points',
        'required': '700'
    }, {
        'name': 'Kulu-Ya-Ku Plume+',
        'required': '1'
    }],
    'rewards': 'Choice Mushroom Substrate'
}, {
    'name': 'The Pied Bug Piper',
    'client': 'Hotblooded Fourth',
    'description': 'Quality insects flock to quality trees. Let\'s gather a bunch to our Ancient Tree and turn this forest into a party!',
    'requestedItems': [{
        'name': 'Research Points',
        'required': '800'
    }, {
        'name': 'Tzitzi-Ya-Ku Photophore+',
        'required': '1'
    }],
    'rewards': 'Thick Summoner Jelly'
}, {
    'name': 'Shattering the Grass Ceiling',
    'client': 'Easygoing Fiver',
    'description': 'Ancient Trees contain greater power than we ever imagined. It\'s possible their potential is truly limitless.',
    'requestedItems': [{
        'name': 'Research Points',
        'required': '900'
    }, {
        'name': 'Great Girros Hood+',
        'required': '1'
    }],
    'rewards': 'Ancient Catalyst'
}, {
    'name': 'A Gentle Earthen Bed',
    'client': 'quest-client-laid-back-botanist',
    'description': 'Soil is made from the life and death of era after era. The Ancient Trees of the New World are living witnesses to history!',
    'requestedItems': [{
        'name': 'Research Points',
        'required': '1000'
    }, {
        'name': 'Dragonbone Relic',
        'required': '3'
    }],
    'rewards': 'Soft Soil'
}, {
    'name': 'To Hold a Harvest',
    'client': 'quest-client-laid-back-botanist',
    'description': 'Your Harvest Box starting to run out of room? I\'ll pull a few strings, see if I can\'t get you some extra space.',
    'requestedItems': [{
        'name': 'Research Points',
        'required': '300'
    }, {
        'name': 'Aqua Sac',
        'required': '2'
    }],
    'rewards': 'Harvest Box Upgrade'
}, {
    'name': 'Your Storage Solution',
    'client': 'quest-client-laid-back-botanist',
    'description': 'Getting more stuff\'s great, till you need someplace to put it all. Leave it to me, kid. I\'ve done this before.',
    'requestedItems': [{
        'name': 'Research Points',
        'required': '1000'
    }, {
        'name': 'Torrent Sac',
        'required': '1'
    }],
    'rewards': 'Harvest Box Upgrade'
}, {
    'name': 'Setting Up Camp: Ancient Forest I',
    'client': 'Provisions Manager',
    'description': 'What a lovely spot. It\'s like a flower bed! Now that we\'ve got our campsite, we just need the materials on that list!',
    'requestedItems': [{
        'name': 'Research Points',
        'required': '50'
    }, {
        'name': 'Iron Ore',
        'required': '2'
    }, {
        'name': 'Ancient Bone',
        'required': '1'
    }],
    'rewards': 'Northwest Camp (8)'
}, {
    'name': 'Setting Up Camp: Ancient Forest II',
    'client': 'Provisions Manager',
    'description': 'I always dreamed of building a tree fort. Bring me the materials on the list and we can make that dream a reality!',
    'requestedItems': [{
        'name': 'Research Points',
        'required': '1000'
    }, {
        'name': 'Anjanath Pelt',
        'required': '1'
    }, {
        'name': 'Monster Bone L',
        'required': '2'
    }],
    'rewards': 'Ancient Forest Camp (17)'
}, {
    'name': 'Setting Up Camp: Wildspire Waste I',
    'client': 'Provisions Manager',
    'description': 'Securing this oasis is huge. Now we just need the materials on that list and we can get this camp built!',
    'requestedItems': [{
        'name': 'Research Points',
        'required': '300'
    }, {
        'name': 'Vespoid Shell',
        'required': '2'
    }, {
        'name': 'Monster Bone M',
        'required': '1'
    }],
    'rewards': 'Central Camp (6)'
}, {
    'name': 'Setting Up Camp: Wildspire Waste II',
    'client': 'Provisions Manager',
    'description': 'We\'ll need to build a camp sturdy enough to withstand the sands. Bring me everything on that list!',
    'requestedItems': [{
        'name': 'Research Points',
        'required': '800'
    }, {
        'name': 'Rathian Scale',
        'required': '2'
    }, {
        'name': 'Monster Bone L',
        'required': '2'
    }, ],
    'rewards': 'Northeast Camp (15)'
}, {
    'name': 'Setting Up Camp: Coral Highlands',
    'client': 'Provisions Manager',
    'description': 'What an interesting spot. It\'s perfect for a secret hideout! We just need the materials on that list to build it.',
    'requestedItems': [{
        'name': 'Research Points',
        'required': '1000'
    }, {
        'name': 'Tzitzi-Ya-Ku Hide',
        'required': '1'
    }, {
        'name': 'Monster Bone M',
        'required': '2'
    }],
    'rewards': 'Northeast Camp (12)'
}, {
    'name': 'Setting Up Camp: Elder\'s Recess I',
    'client': 'Provisions Manager',
    'description': 'This spot\'s clear of monsters, and the cliffs offer fantastic visibility. Bring those materials and we\'ll set up camp!',
    'requestedItems': [{
        'name': 'Research Points',
        'required': '750'
    }, {
        'name': 'Barnos Hide+',
        'required': '2'
    }, {
        'name': 'Monster Bone+',
        'required': '1'
    }],
    'rewards': 'Eastern Camp (8)'
}, {
    'name': 'Setting Up Camp: Elder\'s Recess II',
    'client': 'Provisions Manager',
    'description': 'Whew, it\'s toasty here. But there are rare ore deposits all over! Now we just need the materials on this list.',
    'requestedItems': [{
        'name': 'Research Points',
        'required': '1200'
    }, {
        'name': 'Dodogama Hide+',
        'required': '1'
    }, {
        'name': 'Wingdrake Hide',
        'required': '2'
    }],
    'rewards': 'Northwest Camp (16)'
}, {
    'name': 'The Shortcut to Happiness',
    'client': 'quest-client-airship-engineer',
    'description': 'It\'s a pain getting around in the Coral Highlands, huh? I\'m thinking a ropelift would fix that! Care to help me out?',
    'requestedItems': [{
        'name': 'Research Points',
        'required': '1000'
    }, {
        'name': 'Shamos Hide',
        'required': '5'
    }, {
        'name': 'Sturdy Bone',
        'required': '1'
    }],
    'rewards': 'Ropelift'
}, {
    'name': 'Armory R&D: Waterproofing',
    'client': 'Armory',
    'description': 'Even our best gear\'s not much good if it gets flooded. Time to develop a new line of water-tight protection!',
    'requestedItems': [{
        'name': 'Research Points',
        'required': '1500'
    }, {
        'name': 'Jyuratodus Scale+',
        'required': '3'
    }, {
        'name': 'Jyuratodus Fin+',
        'required': '1'
    }],
    'rewards': 'Waterproof Mantle'
}, {
    'name': 'Dante\'s Inferno',
    'client': 'Second Fleet',
    'description': 'Oi, Fiver! If you insist on wearing that clown suit, how about I make you some stylish layered armor to cover it up? Just get me the materials and I\'ll get hammerin\'!',
    'requestedItems': [{
        'name': 'Research Points',
        'required': '5000'
    }, {
        'name': 'Teostra Ticket',
        'required': '2'
    }, {
        'name': 'Red Orb',
        'required': '2'
    }],
    'rewards': 'Dante Layered Armor'
}, {
    'name': 'Blooming Sakura',
    'client': 'Second Fleet',
    'description': 'Oi, Fiver! You think you can become a true world warrior with that get up!? I\'ve got just the layered armor to get you looking like a true fighter.',
    'requestedItems': [{
        'name': 'Research Points',
        'required': '5000'
    }, {
        'name': 'Lunastra Ticket',
        'required': '2'
    }, {
        'name': 'SFV Ticket II',
        'required': '1'
    }, ],
    'rewards': 'Sakura Layered Armor'
}, {
    'name': 'Armory R&D: Weatherizing',
    'client': 'Armory',
    'description': 'You\'re not going out cold in just that? I hear Paolumu materials are great insulators. Let\'s warm you up with those!',
    'requestedItems': [{
        'name': 'Research Points',
        'required': '1500'
    }, {
        'name': 'Paolumu Pelt+',
        'required': '3'
    }, {
        'name': 'Paolumu Wing',
        'required': '1'
    }],
    'rewards': 'Iceproof Mantle'
}, {
    'name': 'Mushrooms: Nature\'s Smelly Bounty',
    'client': 'quest-client-fiver-bro',
    'description': 'Know what gets me fired up to hunt? A fancy meal! Just once, I\'d like to try this so-called "king of mushrooms."',
    'requestedItems': [{
        'name': 'Research Points',
        'required': '100'
    }, {
        'name': 'Mosswine Hide',
        'required': '1'
    }],
    'rewards': 'King Truffle'
}, {
    'name': 'A Feast of Fish',
    'client': 'quest-client-fiver-bro',
    'description': 'Fish are a huge staple. Whenever that smell hits me, my gut starts growling. Just thinking of it has me hungry now!',
    'requestedItems': [{
        'name': 'Research Points',
        'required': '200'
    }, {
        'name': 'Gajau Skin',
        'required': '1'
    }],
    'rewards': 'Gajau Gill'
}, {
    'name': 'Princely Prawns',
    'client': 'quest-client-fiver-bro',
    'description': 'Food\'s not all taste. Color sparks the appetite, too! Red most of all, they say. But me, I eat the whole rainbow.',
    'requestedItems': [{
        'name': 'Research Points',
        'required': '300'
    }, {
        'name': 'Shamos Hide',
        'required': '1'
    }],
    'rewards': 'Coral Shrimp'
}, {
    'name': 'Million Zenny Veggie',
    'client': 'quest-client-fiver-bro',
    'description': 'Hey, now. All meat\'s not a very balanced diet. Get some greens in you! Try this one. The flavor will knock you flat!',
    'requestedItems': [{
        'name': 'Research Points',
        'required': '400'
    }, {
        'name': 'Girros Fang',
        'required': '1'
    }],
    'rewards': 'Millionfold Cabbage'
}, {
    'name': 'A Thousand-Year-Old Crab!?',
    'client': 'quest-client-fiver-bro',
    'description': 'When you come across a true delicacy, you get this feeling of... reverence, almost. Especially with this crab!',
    'requestedItems': [{
        'name': 'Research Points',
        'required': '500'
    }, {
        'name': 'Barnos Talon',
        'required': '1'
    }],
    'rewards': 'Millenary Crab'
}, {
    'name': 'Tomatoes Red as Magma',
    'client': 'Excitable A-Lister',
    'description': 'Seeing lava always reminds me of... something. I can\'t quite -- SOUP! Bubbling hot tomato soup! Now I\'m craving some...',
    'requestedItems': [{
        'name': 'Research Points',
        'required': '600'
    }, {
        'name': 'Lava Nugget',
        'required': '1'
    }],
    'rewards': 'Fatty Tomato'
}, {
    'name': 'The Juicy Meat Resistance',
    'client': 'Tech Chief',
    'description': 'Know how to stay young? MEAT. Lots of it. Now, get out there and get chompin\'! Work those jaw muscles!',
    'requestedItems': [{
        'name': 'Research Points',
        'required': '700'
    }, {
        'name': 'Uragaan Scale',
        'required': '1'
    }],
    'rewards': 'Rich Rump'
}, {
    'name': 'The Bone-In Roast Resistance',
    'client': 'Tech Chief',
    'description': 'You\'re not a real hunter till you chomp into that golden-brown roast. Now, go make the New World your meat locker!',
    'requestedItems': [{
        'name': 'Research Points',
        'required': '800'
    }, {
        'name': 'Radobaan Carapace',
        'required': '1'
    }],
    'rewards': 'Great Mutton'
}, {
    'name': 'Ancient But Fresh!',
    'client': 'Tech Chief',
    'description': 'Fresh fish has that faintly smell aroma. I can almost smell it now! Been years since I\'ve had any, though... *AHEM*',
    'requestedItems': [{
        'name': 'Research Points',
        'required': '800'
    }, {
        'name': 'Grand Gajau Whisker',
        'required': '1'
    }],
    'rewards': 'Ancient Seabream'
}, {
    'name': 'A Veggie Master of Disguise',
    'client': 'Tech Chief',
    'description': 'In field work and food, if it ain\'t fun, I\'m not interested. A mystery vegetable, though? Sounds right up my alley!',
    'requestedItems': [{
        'name': 'Research Points',
        'required': '800'
    }, {
        'name': 'Hornetaur Carapace',
        'required': '1'
    }],
    'rewards': 'Aromaticelery'
}, {
    'name': 'Phantasmagoric Paprika!',
    'client': 'Tech Chief',
    'description': 'There\'s an ingredient that transforms in downright magical ways. You the type to find that threatening, or are you in!?',
    'requestedItems': [{
        'name': 'Research Points',
        'required': '600'
    }, {
        'name': 'Pukei-Pukei Sac+',
        'required': '1'
    }],
    'rewards': 'Prismatic Paprika'
}, {
    'name': 'A Master\'s Toast',
    'client': 'Third Fleet Provisions',
    'description': 'Being cooped up with research all day gets you in the mood to cut loose. You ready to go wild!? ...Responsibly.',
    'requestedItems': [{
        'name': 'Research Points',
        'required': '600'
    }, {
        'name': 'Thunder Sac',
        'required': '2'
    }],
    'rewards': 'Master Ale'
}, {
    'name': 'A Fire-Spewing Brew',
    'client': 'quest-client-cheerful-scholar',
    'description': 'Not that I\'M interested, but the Fleet Master said she wanted to drink it. So it\'s not for me. It\'s for her. Not me.',
    'requestedItems': [{
        'name': 'Research Points',
        'required': '1000'
    }, {
        'name': 'Dodogama Jaw',
        'required': '2'
    }],
    'rewards': 'Ratha Whiskey'
}, {
    'name': 'A Great Help',
    'client': 'Provisions Manager',
    'description': 'Creating stuff is Hunting 101! Mix some honey with a potion and you get a mega potion! Go on, give it a try!',
    'requestedItems': [{
        'name': 'Research Points',
        'required': '50'
    }, {
        'name': 'Mega Potion',
        'required': '1'
    }],
    'rewards': 'Diced Steak'
}, {
    'name': 'Wisdom of Sabi',
    'client': 'Guild Armory Researcher',
    'description': 'Thanks to your work in the New World, we\'ve developed some new equipment! Though an ocean apart, the fruits of our labor are with you!',
    'requestedItems': [{
        'name': 'Research Points',
        'required': '600'
    }, {
        'name': 'Bushi Ticket',
        'required': '3'
    }, {
        'name': 'Uragaan Scale+',
        'required': '3'
    }, ],
    'rewards': 'Bushi Kabuto "Sabi"'
}, {
    'name': 'Spirit of Sabi',
    'client': 'Guild Armory Researcher',
    'description': 'Thanks to your work in the New World, we\'ve developed some new equipment! Though an ocean apart, the fruits of our labor are with you!',
    'requestedItems': [{
        'name': 'Research Points',
        'required': '600'
    }, {
        'name': 'Bushi Ticket',
        'required': '3'
    }, {
        'name': 'Legiana Scale+',
        'required': '3'
    }, ],
    'rewards': 'Bushi Muneate "Sabi"'
}, {
    'name': 'Strength of Sabi',
    'client': 'Guild Armory Researcher',
    'description': 'Thanks to your work in the New World, we\'ve developed some new equipment! Though an ocean apart, the fruits of our labor are with you!',
    'requestedItems': [{
        'name': 'Research Points',
        'required': '600'
    }, {
        'name': 'Bushi Ticket',
        'required': '3'
    }, {
        'name': 'Rathalos Scale+',
        'required': '3'
    }, ],
    'rewards': 'Bushi Kote "Sabi"'
}, {
    'name': 'Foundation of Sabi',
    'client': 'Guild Armory Researcher',
    'description': 'Thanks to your work in the New World, we\'ve developed some new equipment! Though an ocean apart, the fruits of our labor are with you!',
    'requestedItems': [{
        'name': 'Research Points',
        'required': '600'
    }, {
        'name': 'Bushi Ticket',
        'required': '3'
    }, {
        'name': 'Black Diablos Carapace',
        'required': '3'
    }, ],
    'rewards': 'Bushi Koshiate "Sabi"'
}, {
    'name': 'Flight of Sabi',
    'client': 'Guild Armory Researcher',
    'description': 'Thanks to your work in the New World, we\'ve developed some new equipment! Though an ocean apart, the fruits of our labor are with you!',
    'requestedItems': [{
        'name': 'Research Points',
        'required': '600'
    }, {
        'name': 'Bushi Ticket',
        'required': '3'
    }, {
        'name': 'Odogaron Scale+',
        'required': '3'
    }, ],
    'rewards': 'Bushi Suneate "Sabi"'
}, {
    'name': 'Wisdom of Homare',
    'client': 'Guild Armory Researcher',
    'description': 'Thanks to your work in the New World, we\'ve developed some new equipment! Though an ocean apart, the fruits of our labor are with you!',
    'requestedItems': [{
        'name': 'Research Points',
        'required': '800'
    }, {
        'name': 'Bushi Ticket',
        'required': '4'
    }, {
        'name': 'Immortal Dragonscale',
        'required': '3'
    }, ],
    'rewards': 'Bushi Kabuto "Homare"'
}, {
    'name': 'Spirit of Homare',
    'client': 'Guild Armory Researcher',
    'description': 'Thanks to your work in the New World, we\'ve developed some new equipment! Though an ocean apart, the fruits of our labor are with you!',
    'requestedItems': [{
        'name': 'Research Points',
        'required': '800'
    }, {
        'name': 'Bushi Ticket',
        'required': '4'
    }, {
        'name': 'Daora Dragon Scale+',
        'required': '3'
    }, ],
    'rewards': 'Bushi Muneate "Homare"'
}, {
    'name': 'Strength of Homare',
    'client': 'Guild Armory Researcher',
    'description': 'Thanks to your work in the New World, we\'ve developed some new equipment! Though an ocean apart, the fruits of our labor are with you!',
    'requestedItems': [{
        'name': 'Research Points',
        'required': '800'
    }, {
        'name': 'Bushi Ticket',
        'required': '4'
    }, {
        'name': 'Kirin Hide+',
        'required': '3'
    }, ],
    'rewards': 'Bushi Kote "Homare"'
}, {
    'name': 'Foundation of Homare',
    'client': 'Guild Armory Researcher',
    'description': 'Thanks to your work in the New World, we\'ve developed some new equipment! Though an ocean apart, the fruits of our labor are with you!',
    'requestedItems': [{
        'name': 'Research Points',
        'required': '800'
    }, {
        'name': 'Bushi Ticket',
        'required': '4'
    }, {
        'name': 'Fire Dragon Scale+',
        'required': '3'
    }, ],
    'rewards': 'Bushi Koshiate "Homare"'
}, {
    'name': 'Flight of Homare',
    'client': 'Guild Armory Researcher',
    'description': 'Thanks to your work in the New World, we\'ve developed some new equipment! Though an ocean apart, the fruits of our labor are with you!',
    'requestedItems': [{
        'name': 'Research Points',
        'required': '800'
    }, {
        'name': 'Bushi Ticket',
        'required': '4'
    }, {
        'name': 'Deceased Scale',
        'required': '3'
    }, ],
    'rewards': 'Bushi Suneate "Homare"'
}, {
    'name': 'The Honor of the Drachen',
    'client': 'Second Fleet',
    'description': 'Oi, Fiver! If you insist on hurtin\' people\'s vision with that clown suit yer wearin\', how about we cover it up with something that\'s guaranteed to put an eye out! Oh, and I hear it looks pretty good in red too.',
    'requestedItems': [{
        'name': 'Research Points',
        'required': '5000'
    }, {
        'name': 'Glamour Prism',
        'required': '1'
    }, {
        'name': 'Novacrystal',
        'required': '3'
    }],
    'rewards': 'Drachen Layered Armor'
}, {
    'name': 'Budding Blossoms',
    'client': 'Second Fleet',
    'description': 'Oi, Fiver! You\'re embarrassing me with that clown suit! Let\'s fix you up proper with some layered armor so I don\'t have to see that bleedin\' mess. Just get me the materials I need!',
    'requestedItems': [{
        'name': 'Research Points',
        'required': '5000'
    }, {
        'name': 'Kirin Ticket',
        'required': '2'
    }],
    'rewards': 'Blossom Layered Armor'
}, {
    'name': 'Float Like Butterflies',
    'client': 'Second Fleet',
    'description': 'Oi, Fiver! If you insist on wearing that clown suit, how about I make you some layered armor to cover it up? Just get me the materials and I\'ll get hammerin\'!',
    'requestedItems': [{
        'name': 'Research Points',
        'required': '5000'
    }, {
        'name': 'Summer Field Insect Guide',
        'required': '2'
    }, {
        'name': 'Great Hornfly',
        'required': '5'
    }],
    'rewards': 'Butterfly Layered Armor'
}, {
    'name': 'Death Becomes You',
    'client': 'Second Fleet',
    'description': 'Oi, Fiver! You\'re embarrassing me with that clown suit! Let\'s fix you up proper with some layered armor so I don\'t have to see that bleedin\' mess. Just get me the materials I need!',
    'requestedItems': [{
        'name': 'Research Points',
        'required': '5000'
    }, {
        'name': 'Vaal Hazak Ticket',
        'required': '2'
    }, {
        'name': 'Sinister Cloth',
        'required': '5'
    }],
    'rewards': 'Death Stench Layered Armor'
}, {
    'name': 'Breaking out the Brigade',
    'client': 'Second Fleet',
    'description': 'Oi, Fiver! You\'re embarrassing me with that clown suit! Let\'s fix you up proper with some layered armor so I don\'t have to see that bleedin\' mess. Just get me the materials I need!',
    'requestedItems': [{
        'name': 'Research Points',
        'required': '5000'
    }, {
        'name': 'Hunter King Coin',
        'required': '5'
    }, {
        'name': 'High Commendation',
        'required': '5'
    }, ],
    'rewards': 'Brigade Layered Armor'
}, {
    'name': 'Commanding the Commish',
    'client': 'Second Fleet',
    'description': 'Oi, Fiver! If you\'re gonna be the Sapphire Star around these parts, you better look the part! And you can\'t do that wearing that nonsense! Let\'s suit you up with some layered armor!',
    'requestedItems': [{
        'name': 'Research Points',
        'required': '5000'
    }, {
        'name': 'Xeno\'jiiva Ticket',
        'required': '2'
    }, {
        'name': 'Research Commission Ticket',
        'required': '1'
    }, ],
    'rewards': 'Commission Layered Armor'
}, {
    'name': 'Original Origin',
    'client': 'Second Fleet',
    'description': 'Oi, Fiver! How are you still huntin\' monsters with that get up!? We need you to get you something proper lookin\', like a real hunter! I\'ve got just the layered armor for you!',
    'requestedItems': [{
        'name': 'Research Points',
        'required': '5000'
    }, {
        'name': 'Zorah Magdaros Ticket',
        'required': '3'
    }, {
        'name': 'High Commendation',
        'required': '5'
    }, ],
    'rewards': 'Origin Layered Armor'
}, {
    'name': 'Quite the Eyesore',
    'client': 'Second Fleet',
    'description': 'Oi, Five-- ...What\'s wrong there? ... You got what kinda what in yer eye? ...That be all kinds of infected! Even the Handler might lose her appetite lookin\' at that!',
    'requestedItems': [{
        'name': 'Research Points',
        'required': '1000'
    }, {
        'name': 'Faux Ticket II',
        'required': '1'
    }, {
        'name': 'Black Bandage',
        'required': '2'
    }, ],
    'rewards': 'Sealed Eyepatch Layered Armor'
}, {
    'name': 'Wiggly Wobbly Woo',
    'client': 'Second Fleet',
    'description': 'Fiver, you some sorta comedian or somethin\'? I ain\'t laughin\' yet, but if you put this layered armor on your head, you might get a few chuckles outta me!',
    'requestedItems': [{
        'name': 'Research Points',
        'required': '1000'
    }, {
        'name': 'Faux Ticket II',
        'required': '1'
    }, {
        'name': 'Wiggler Ticket',
        'required': '2'
    }, ],
    'rewards': 'Wiggler Head Layered Armor'
}, {
    'name': 'Deep Dive Down',
    'client': 'Second Fleet',
    'description': 'Oi, Fiver! Even in the thick of summer, you\'re wearing that nonsense? Go get me the materials I need and I\'ll fix you up with something to cool down that hot mess.',
    'requestedItems': [{
        'name': 'Research Points',
        'required': '5000'
    }, {
        'name': 'Summer Twilight Ticket',
        'required': '5'
    }, ],
    'rewards': 'Diver Layered Armor'
}, {
    'name': 'Lurking in the Shadows',
    'client': 'Second Fleet',
    'description': 'Oi, Fiver! I\'m tired of lookin\' at that clown suit of yours, so I made these cool shades to block out that horrible imagery! Go get me the materials I need and I\'ll hammer together a pair for you too!',
    'requestedItems': [{
        'name': 'Research Points',
        'required': '1000'
    }, {
        'name': 'Summer Twilight Ticket',
        'required': '2'
    }, {
        'name': 'Black Crysttal Ticket',
        'required': '1'
    }, ],
    'rewards': 'Shadow Shades Layered Armor'
}, {
    'name': 'Cross My Heart',
    'client': 'Second Fleet',
    'description': 'Oi, Fiver! If you insist on wearing that clown suit, how about I make you some layered armor to cover it up? Just get me the materials and I\'ll start hammerin\'!',
    'requestedItems': [{
        'name': 'Research Points',
        'required': '5000'
    }, {
        'name': 'Kushala Daora Ticket',
        'required': '2'
    }, {
        'name': 'Ace Hunter Coin',
        'required': '1'
    }, ],
    'rewards': 'Guild Cross Layered Armor'
}, {
    'name': 'Time to Harvest!',
    'client': 'Second Fleet',
    'description': 'Oi, Fiver! I\'ve seen some scary costumes in my time, but that clown suit takes the cake! I\'ve got just the treat to fix up your tricks!',
    'requestedItems': [{
        'name': 'Research Points',
        'required': '5000'
    }, {
        'name': 'Autumn Harvest Ticket',
        'required': '5'
    }, ],
    'rewards': 'Harvest Layered Armor'
}, {
    'name': 'The Whole Hog',
    'client': 'Second Fleet',
    'description': 'Oi, Fiver! If you insist on wearing that clown suit, how about I make you some layered armor that\'ll make you look like the hogstar you are? Just get me the materials and I\'ll get hammerin\'!',
    'requestedItems': [{
        'name': 'Research Points',
        'required': '1000'
    }, {
        'name': 'Faux Ticket',
        'required': '1'
    }, {
        'name': 'Mosswine Hide',
        'required': '2'
    },],
    'rewards': 'Mosswine Mask Layered Armor',
    'notes': 'To unlock, complete A Royal Pain event quest and talk to the Smithy.',
}, {
    'name': 'Just the Faux',
    'client': 'Second Fleet',
    'description': 'Oi, Fiver! If you insist on wearing that clown suit, how about I make you some layered armor that\'ll make you look like the cool cat you are? Just get me the materials and I\'ll get hammerin\'!',
    'requestedItems': [{
        'name': 'Research Points',
        'required': '1000'
    }, {
        'name': 'Faux Ticket',
        'required': '1'
    }, {
        'name': 'Tailraider Voucher',
        'required': '1'
    },],
    'rewards': 'Faux Felyne Layered Armor',
    'notes': 'To unlock, complete A Royal Pain event quest and talk to the Smithy.',
}, {
    'name': 'Beyond the Horizon',
    'client': 'Second Fleet',
    'description': 'Oi, Fiver! You\'d think by now you\'d have enough materials to build an army of armor, but look at you...still wearing that nonsense! I\'ve got just the layered armor for you!',
    'requestedItems': [{
        'name': 'Research Points',
        'required': '5000'
    }, {
        'name': 'Aloy Ticket',
        'required': '3'
    }, {
        'name': 'Nora Brave Trophy',
        'required': '2'
    },],
    'rewards': 'Aloy Layered Armor',
    'notes': 'To unlock, complete The Heart of the Nora event quest and talk to the Smithy.',
}, {
    'name': 'Threads of Orion',
    'client': 'Second Fleet',
    'description': 'Oi, Fiver! You\'re freezing your keister off in that nonsense! Go get me the materials I need and I\'ll fix you up with something to get yer heart burning, mate!',
    'requestedItems': [{
        'name': 'Research Points',
        'required': '5000'
    }, {
        'name': 'Winter Star Ticket',
        'required': '5'
    },],
    'rewards': 'Orion Layered Armor',
    'notes': 'To unlock, go to the Smithy during the Winter Fest Event.',
}, {
    'name': 'Becoming an Assassin',
    'client': 'Second Fleet Master',
    'description': 'I\'ve developed something that embodies the conviction and dignity of the man in the white robe. This shall be a masterpiece! I just need you to get me the materials!',
    'requestedItems': [{
        'name': 'Research Points',
        'required': '5000'
    }, {
        'name': 'Senu\'s Feather',
        'required': '2'
    },],
    'rewards': 'Bayek Layered Armor',
    'notes': 'Complete the SDF: Silent, Deadly, Fierce quest in the Special Arena 2 times.',
}, {
    'name': 'Specialized Tool: Assassin\'s Hood',
    'client': 'Armory',
    'description': 'I\'ve developed a specialized tool in the image of the man in the white robe. This shall be a masterpiece! I just need the materials to make it a reality!',
    'requestedItems': [{
        'name': 'Research Points',
        'required': '1000'
    }, {
        'name': 'Senu\'s Feather',
        'required': '2'
    },],
    'rewards': 'Specialized Tool: Assassin\'s Hood',
    'notes': 'Complete the SDF: Silent, Deadly, Fierce quest in the Special Arena 2 times.',
}, {
    'name': 'Dressed to the Nines',
    'client': 'Second Fleet',
    'description': 'Oi, Fiver, OI! There\'s no way I\'m gonna let our Sapphire Star go to the celebration lookin\' like the entertainment! You\'ve gotta look the part and I\'ve got just the thing to make you shine!',
    'requestedItems': [{
        'name': 'Research Points',
        'required': '5000'
    }, {
        'name': 'Appreciation Ticket',
        'required': '10'
    },],
    'rewards': 'Gala Suit Layered Armor',
    'notes': 'Talk to the Smithy during the Appreciation Fest.',
}, {
    'name': 'Scalping for Skulls',
    'client': 'Second Fleet',
    'description': 'Oi, Fiver! Since I can\'t get through yer thick skull about those clown suits, I decided to use it as inspiration! Lucky for you, your ACTUAL skull isn\'t needed to make it.',
    'requestedItems': [{
        'name': 'Research Points',
        'required': '1000'
    }, {
        'name': 'Faux Ticket III',
        'required': '1'
    }, {
        'name': 'Unknown Skull',
        'required': '2'
    }],
    'rewards': 'Skull Mask Layered Head Armor',
    'notes': 'Complete The Greatest Jagras event quest during the Appreciation Fest.',
}, {
    'name': 'Klutzy Kulu Kapers',
    'client': 'Second Fleet',
    'description': 'Oi, Fiver! Stop puttin\' all of yer eggs in one basket and change that clown suit to somethin\' with a bit more plumage! Plunk this on your noggin, and you\'ll be right at the top of the peckin\' order!',
    'requestedItems': [{
        'name': 'Research Points',
        'required': '1000'
    }, {
        'name': 'Faux Ticket III',
        'required': '1'
    }, {
        'name': 'Kulu-Ya-Ku Ticket',
        'required': '2'
    }],
    'rewards': 'Kulu-Ya-Ku Layered Head Armor',
    'notes': 'Get the Faux Ticket III and Kulu-Ya-Ku Ticket by completing The Greatest Jagras event quest during the Appreciation Fest.',
}, {
    'name': 'Geralt of Rivia',
    'client': 'Second Fleet',
    'description': 'Oi, Fiver! I\'ve been workin\' on some layered armor for you. It won\'t give you any witcher\'s senses but it\'ll give you some fashion sense!',
    'requestedItems': [{
        'name': 'Research Points',
        'required': '5000'
    }, {
        'name': 'Mutagen',
        'required': '1'
    }, ],
    'rewards': 'Geralt Layered Armor',
    'notes': 'Defeat the Ancient Leshen in Contract: Woodland Spirit event quest to get the Mutagen.',
}, {
    'name': 'Cirilla Fiona Elen Riannon',
    'client': 'Second Fleet',
    'description': 'Oi, Fiver! Would ye believe that witcher feller has a daughter?!? I just had to make some layered armor in her likeness! Got the grace of a swallow, she has.',
    'requestedItems': [{
        'name': 'Research Points',
        'required': '5000'
    }, {
        'name': 'Mutagen',
        'required': '1'
    }, ],
    'rewards': 'Ciri Layered Armor',
    'notes': 'Defeat the Ancient Leshen in Contract: Woodland Spirit event quest to get the Mutagen.',
},];

export { assignedQuests, optionalQuests, eventQuests, specialAssignmentsQuests, deliveries, arenaQuests }