let lowRankPalicoArmors = [{
        'name': 'Leather',
        'weapon': {
            'name': 'Felyne Acorn Spade',
            'icon': require('./assets/palico/leather_weapon.png'),
            'rarity': '1',
            'attackMelee': '2',
            'attackRanged': '2',
            'attackType': 'Severing',
            'element': 'None',
            'affinity': '0%',
            'description': 'A much-beloved starter weapon for the Palico crowd. Doubles as a handy trowel for use in the garden!',
            'materials': [{
                'name': 'Iron Ore',
                'quantity': '1'
            }, ],
            'cost': '20'
        },
        'head': {
            'name': 'Felyne Leather Cap',
            'icon': require('./assets/palico/leather_helm.png'),
            'rarity': '1',
            'defense': '2',
            'vsFire': '0',
            'vsWater': '0',
            'vsThunder': '0',
            'vsIce': '0',
            'vsDragon': '0',
            'description': 'Standard-issue headgear for the novice Palico. Light but fairly tough. Gotta start somewhere!',
            'materials': [{
                'name': 'Iron Ore',
                'quantity': '1'
            }, ],
            'cost': '10'
        },
        'body': {
            'name': 'Felyne Leather Vest',
            'icon': require('./assets/palico/leather_body.png'),
            'rarity': '1',
            'defense': '2',
            'vsFire': '2',
            'vsWater': '0',
            'vsThunder': '0',
            'vsIce': '0',
            'vsDragon': '0',
            'description': 'The sleeveless design of this entry-leve Palico armor allows for full freedom of motion.',
            'materials': [{
                'name': 'Iron Ore',
                'quantity': '1'
            }, ],
            'cost': '10'
        },
        'totalDefense': '4',
        'totalFireDefense': '4',
        'totalWaterDefense': '0',
        'totalThunderDefense': '0',
        'totalIceDefense': '0',
        'totalDragonDefense': '0',
    },
    {
        'name': 'Bone',
        'weapon': {
            'name': 'Felyne Bone Hammer',
            'icon': require('./assets/palico/bone_weapon.png'),
            'rarity': '1',
            'attackMelee': '4',
            'attackRanged': '2',
            'attackType': 'Blunt',
            'element': 'None',
            'affinity': '0%',
            'description': 'Made from easy-to-come-by bone, this hammer is lightweight but sturdy.',
            'materials': [{
                'name': 'Monster Bone S',
                'quantity': '1'
            }, ],
            'cost': '40'
        },
        'head': {
            'name': 'Felyne Bone Helm',
            'icon': require('./assets/palico/bone_helm.png'),
            'rarity': '1',
            'defense': '4',
            'vsFire': '2',
            'vsWater': '0',
            'vsThunder': '2',
            'vsIce': '0',
            'vsDragon': '2',
            'description': 'Headgear built around a monster skull base. Donning it will awaken the primal beast within.',
            'materials': [{
                'name': 'Monster Bone S',
                'quantity': '1'
            }, ],
            'cost': '20'
        },
        'body': {
            'name': 'Felyne Bone Mail',
            'icon': require('./assets/palico/bone_body.png'),
            'rarity': '1',
            'defense': '4',
            'vsFire': '2',
            'vsWater': '0',
            'vsThunder': '2',
            'vsIce': '0',
            'vsDragon': '2',
            'description': 'A certain primal scent clings to this set of body armor. Made from a mix of monster bones.',
            'materials': [{
                'name': 'Monster Bone S',
                'quantity': '1'
            }, ],
            'cost': '20'
        },
        'totalDefense': '8',
        'totalFireDefense': '4',
        'totalWaterDefense': '0',
        'totalThunderDefense': '4',
        'totalIceDefense': '0',
        'totalDragonDefense': '4',
    },
    {
        'name': 'Jagras',
        'weapon': {
            'name': 'Felyne Jag Gunhammer',
            'icon': require('./assets/palico/jagras_weapon.png'),
            'rarity': '1',
            'attackMelee': '5',
            'attackRanged': '3',
            'attackType': 'Blunt',
            'element': 'None',
            'affinity': '0%',
            'description': 'A Great Jagras weapon. It looks like a gun but can\'t shoot. Made exclusively for bonking.',
            'materials': [{
                'name': 'Great Jagras Claw',
                'quantity': '1'
            }, ],
            'cost': '40'
        },
        'head': {
            'name': 'Felyne Jagras Helm',
            'icon': require('./assets/palico/jagras_helm.png'),
            'rarity': '1',
            'defense': '4',
            'vsFire': '-2',
            'vsWater': '2',
            'vsThunder': '-1',
            'vsIce': '-1',
            'vsDragon': '1',
            'description': 'Your palico might start pawing at this helm\'s shaggy Great Jagras fur. It\'s a feature, we promise!',
            'materials': [{
                'name': 'Great Jagras Hide',
                'quantity': '1'
            }, ],
            'cost': '20'
        },
        'body': {
            'name': 'Felyne Jagras Mail',
            'icon': require('./assets/palico/jagras_body.png'),
            'rarity': '1',
            'defense': '4',
            'vsFire': '-2',
            'vsWater': '2',
            'vsThunder': '-1',
            'vsIce': '-1',
            'vsDragon': '1',
            'description': 'The strong yet supple fur on this shaggy Great Jagras armor offers solid protection.',
            'materials': [{
                'name': 'Great Jagras Mane',
                'quantity': '1'
            }, ],
            'cost': '20'
        },
        'totalDefense': '8',
        'totalFireDefense': '-4',
        'totalWaterDefense': '4',
        'totalThunderDefense': '-2',
        'totalIceDefense': '-2',
        'totalDragonDefense': '2',
    },
    {
        'name': 'Kulu',
        'weapon': {
            'name': 'Felyne Kulu Lute',
            'icon': require('./assets/palico/kulu_weapon.png'),
            'rarity': '1',
            'attackMelee': '3',
            'attackRanged': '5',
            'attackType': 'Blunt',
            'element': 'None',
            'affinity': '10%',
            'description': 'Made from Kulu-Ya-Ku parts, each note plucked from its strings drips with sweet nostalgia.',
            'materials': [{
                'name': 'Kulu-Ya-Ku Scale',
                'quantity': '1'
            }, ],
            'cost': '40'
        },
        'head': {
            'name': 'Felyne Kulu Turban',
            'icon': require('./assets/palico/kulu_helm.png'),
            'rarity': '4',
            'attackMelee': '0',
            'attackRanged': '-3',
            'attackType': '0',
            'element': '1',
            'affinity': '0',
            'description': 'It may seem like any ordinary turban, but its Kulu-Ya-Ku hide make offers surprising defense.',
            'materials': [{
                'name': 'Kulu-Ya-Ku Plume',
                'quantity': '1'
            }, ],
            'cost': '20'
        },
        'body': {
            'name': 'Felyne Kulu Vest',
            'icon': require('./assets/palico/kulu_body.png'),
            'rarity': '1',
            'defense': '4',
            'vsFire': '0',
            'vsWater': '-3',
            'vsThunder': '0',
            'vsIce': '1',
            'vsDragon': '0',
            'description': 'Made of soft, durable Kulu-Ya-Ku hide, this armor won\'t restrict your Palico\'s motion.',
            'materials': [{
                'name': 'Kulu-Ya-Ku Hide',
                'quantity': '1'
            }, ],
            'cost': '20'
        },
        'totalDefense': '8',
        'totalFireDefense': '0',
        'totalWaterDefense': '-6',
        'totalThunderDefense': '0',
        'totalIceDefense': '2',
        'totalDragonDefense': '0',
    },
    {
        'name': 'Pukei',
        'weapon': {
            'name': 'Felyne Pukei Bow',
            'icon': require('./assets/palico/pukei_weapon.png'),
            'rarity': '2',
            'attackMelee': '4',
            'attackRanged': '6',
            'attackType': 'Blunt',
            'element': 'Poison 80',
            'affinity': '0%',
            'description': 'Made from Pukei-Pukei parts. Despite a whimsical design it doesn\'t actually fire arrows. Bonking only.',
            'materials': [{
                'name': 'Pukei-Pukei Sac',
                'quantity': '1'
            }, ],
            'cost': '80'
        },
        'head': {
            'name': 'Felyne Pukei Hood',
            'icon': require('./assets/palico/pukei_helm.png'),
            'rarity': '2',
            'defense': '6',
            'vsFire': '0',
            'vsWater': '3',
            'vsThunder': '-3',
            'vsIce': '0',
            'vsDragon': '1',
            'description': 'This quirky Pukei-Pukei hood\'s design falls somewhere between cute and creepy.',
            'materials': [{
                'name': 'Pukei-Pukei Scale',
                'quantity': '1'
            }, ],
            'cost': '40'
        },
        'body': {
            'name': 'Felyne Pukei Mantle',
            'icon': require('./assets/palico/pukei_body.png'),
            'rarity': '2',
            'defense': '6',
            'vsFire': '0',
            'vsWater': '3',
            'vsThunder': '-3',
            'vsIce': '0',
            'vsDragon': '1',
            'description': 'This Pukei-Pukei armor\'s weirdo design makes it consistently popular with weirdo Palicoes.',
            'materials': [{
                'name': 'Pukei-Pukei Quill',
                'quantity': '1'
            }, ],
            'cost': '40'
        },
        'totalDefense': '12',
        'totalFireDefense': '0',
        'totalWaterDefense': '6',
        'totalThunderDefense': '-6',
        'totalIceDefense': '0',
        'totalDragonDefense': '2',
    },
    {
        'name': 'Alloy',
        'weapon': {
            'name': 'Felyne Iron Sword',
            'icon': require('./assets/palico/alloy_weapon.png'),
            'rarity': '2',
            'attackMelee': '2',
            'attackRanged': '4',
            'attackType': 'Severing',
            'element': 'None',
            'affinity': '0%',
            'description': 'A large sword made by smelting down fine ore and hammering it for three days straight. Certified lethal.',
            'materials': [{
                'name': 'Machalite Ore',
                'quantity': '1'
            }, ],
            'cost': '80'
        },
        'head': {
            'name': 'Felyne Alloy Helm',
            'icon': require('./assets/palico/alloy_helm.png'),
            'rarity': '2',
            'defense': '4',
            'vsFire': '-2',
            'vsWater': '0',
            'vsThunder': '-2',
            'vsIce': '-2',
            'vsDragon': '0',
            'description': 'A helmet made by smelting fine ore, then pounding it for three days straight. Certified strong.',
            'materials': [{
                'name': 'Machalite Ore',
                'quantity': '1'
            }, ],
            'cost': '40'
        },
        'body': {
            'name': 'Felyne Alloy Mail',
            'icon': require('./assets/palico/alloy_body.png'),
            'rarity': '2',
            'defense': '4',
            'vsFire': '-2',
            'vsWater': '0',
            'vsThunder': '-2',
            'vsIce': '-2',
            'vsDragon': '0',
            'description': 'Body armor made by smelting fine ore, then pounding it for three days straight. Guaranteed tough.',
            'materials': [{
                'name': 'Machalite Ore',
                'quantity': '1'
            }, ],
            'cost': '40'
        },
        'totalDefense': '8',
        'totalFireDefense': '-4',
        'totalWaterDefense': '0',
        'totalThunderDefense': '-4',
        'totalIceDefense': '-4',
        'totalDragonDefense': '0',
    },
    {
        'name': 'Barroth',
        'weapon': {
            'name': 'Felyne Barroth Mace',
            'icon': require('./assets/palico/barroth_weapon.png'),
            'rarity': '2',
            'attackMelee': '12',
            'attackRanged': '8',
            'attackType': 'Blunt',
            'element': 'None',
            'affinity': '-20%',
            'defenseBonus': '+5',
            'description': 'Made with only the hardest Barroth parts, this weapon is capable of smashing boulders into gravel.',
            'materials': [{
                'name': 'Barroth Claw',
                'quantity': '1'
            }, ],
            'cost': '80'
        },
        'head': {
            'name': 'Felyne Barroth Helm',
            'icon': require('./assets/palico/barroth_helm.png'),
            'rarity': '2',
            'defense': '6',
            'vsFire': '-3',
            'vsWater': '-1',
            'vsThunder': '3',
            'vsIce': '-1',
            'vsDragon': '0',
            'description': 'Hard as a boulder, this Barroth headgear offers exceptional defense.',
            'materials': [{
                'name': 'Barroth Scalp',
                'quantity': '1'
            }, ],
            'cost': '40'
        },
        'body': {
            'name': 'Felyne Barroth Mail',
            'icon': require('./assets/palico/barroth_body.png'),
            'rarity': '2',
            'defense': '6',
            'vsFire': '-3',
            'vsWater': '-1',
            'vsThunder': '3',
            'vsIce': '-1',
            'vsDragon': '0',
            'description': 'This Barroth armor is hard as stone. Roll around in the mud and you\'ll be a Barroth pup!',
            'materials': [{
                'name': 'Barroth Shell',
                'quantity': '1'
            }, ],
            'cost': '40'
        },
        'totalDefense': '12',
        'totalFireDefense': '-6',
        'totalWaterDefense': '-2',
        'totalThunderDefense': '6',
        'totalIceDefense': '-2',
        'totalDragonDefense': '0',
    },
    {
        'name': 'Jyura',
        'weapon': {
            'name': 'Felyne Jyura Sword',
            'icon': require('./assets/palico/jyura_weapon.png'),
            'rarity': '2',
            'attackMelee': '7',
            'attackRanged': '6',
            'attackType': 'Severing',
            'element': 'Water 100',
            'affinity': '0%',
            'description': 'Made from Jyuratodus parts. The strength of ancient swordsmen seeps into the wielder\'s paw pads.',
            'materials': [{
                'name': 'Jyuratodus Fang',
                'quantity': '1'
            }, ],
            'cost': '80'
        },
        'head': {
            'name': 'Felyne Jyura Helm',
            'icon': require('./assets/palico/jyura_helm.png'),
            'rarity': '2',
            'defense': '8',
            'vsFire': '-1',
            'vsWater': '2',
            'vsThunder': '-3',
            'vsIce': '0',
            'vsDragon': '0',
            'description': 'The smell of mud lingers on this Jyuratodus helm, evoking memories of childhood playtime.',
            'materials': [{
                'name': 'Jyuratodus Fin',
                'quantity': '1'
            }, ],
            'cost': '40'
        },
        'body': {
            'name': 'Felyne Jyura Mail',
            'icon': require('./assets/palico/jyura_body.png'),
            'rarity': '2',
            'defense': '8',
            'vsFire': '-1',
            'vsWater': '2',
            'vsThunder': '-3',
            'vsIce': '0',
            'vsDragon': '0',
            'description': 'Cracks run along this Jyuratodus armor, lending it a rough-hewn, sturdy feel.',
            'materials': [{
                'name': 'Jyuratodus Scale',
                'quantity': '1'
            }, ],
            'cost': '40'
        },
        'totalDefense': '16',
        'totalFireDefense': '-2',
        'totalWaterDefense': '4',
        'totalThunderDefense': '-6',
        'totalIceDefense': '0',
        'totalDragonDefense': '0',
    },
    {
        'name': 'Kadachi',
        'weapon': {
            'name': 'Felyne Kadachi Fork',
            'icon': require('./assets/palico/kadachi_weapon.png'),
            'rarity': '2',
            'attackMelee': '6',
            'attackRanged': '5',
            'attackType': 'Severing',
            'element': 'Thunder 140',
            'affinity': '10%',
            'description': 'Made from Tobi-Kadachi parts. It may look like an adorable Felyne, but the ears are long and sharp.',
            'materials': [{
                'name': 'Tobi-Kadachi Claw',
                'quantity': '1'
            }, ],
            'cost': '80'
        },
        'head': {
            'name': 'Felyne Kadachi Hood',
            'icon': require('./assets/palico/kadachi_helm.png'),
            'rarity': '2',
            'defense': '8',
            'vsFire': '0',
            'vsWater': '-3',
            'vsThunder': '3',
            'vsIce': '0',
            'vsDragon': '0',
            'description': 'Complete with fluffy ears, this Tobi-Kadachi hood is so cute, you\'ll never let your Palico take it off.',
            'materials': [{
                'name': 'Tobi-Kadachi Scale',
                'quantity': '1'
            }, ],
            'cost': '40'
        },
        'body': {
            'name': 'Felyne Kadachi Suit',
            'icon': require('./assets/palico/kadachi_body.png'),
            'rarity': '2',
            'defense': '8',
            'vsFire': '0',
            'vsWater': '-3',
            'vsThunder': '3',
            'vsIce': '0',
            'vsDragon': '0',
            'description': 'Your Palico will look absolutely adorable in this.. That is until it\'s covered in monster guts.',
            'materials': [{
                'name': 'Tobi-Kadachi Pelt',
                'quantity': '1'
            }, ],
            'cost': '40'
        },
        'totalDefense': '16',
        'totalFireDefense': '0',
        'totalWaterDefense': '-6',
        'totalThunderDefense': '6',
        'totalIceDefense': '0',
        'totalDragonDefense': '0',
    },
    {
        'name': 'Anja',
        'weapon': {
            'name': 'Felyne Anja Bonehammer',
            'icon': require('./assets/palico/anja_weapon.png'),
            'rarity': '3',
            'attackMelee': '14',
            'attackRanged': '12',
            'attackType': 'Blunt',
            'element': 'Fire 160',
            'affinity': '-30%',
            'description': 'Made from Anjanath parts. It was made by lashing together huge bones. This hammer hits hard and heavy.',
            'materials': [{
                'name': 'Anjanath Fang',
                'quantity': '1'
            }, ],
            'cost': '120'
        },
        'head': {
            'name': 'Felyne Anja Helm',
            'icon': require('./assets/palico/anja_helm.png'),
            'rarity': '3',
            'defense': '10',
            'vsFire': '3',
            'vsWater': '-3',
            'vsThunder': '-1',
            'vsIce': '-1',
            'vsDragon': '0',
            'description': 'This helm captures the furr-ocious spirit of the Anjanath purr-fectly... only it\'s a heck of a lot cuter.',
            'materials': [{
                'name': 'Anjanath Scale',
                'quantity': '1'
            }, ],
            'cost': '80'
        },
        'body': {
            'name': 'Felyne Anja Mail',
            'icon': require('./assets/palico/anja_body.png'),
            'rarity': '3',
            'defense': '10',
            'vsFire': '3',
            'vsWater': '-3',
            'vsThunder': '-1',
            'vsIce': '-1',
            'vsDragon': '0',
            'description': 'Large and heavy, this gear offers the complete purrotection while capturing the Anjanath\'s fierce fighting spirit.',
            'materials': [{
                'name': 'Anjanath Pelt',
                'quantity': '1'
            }, ],
            'cost': '80'
        },
        'totalDefense': '20',
        'totalFireDefense': '6',
        'totalWaterDefense': '-6',
        'totalThunderDefense': '-2',
        'totalIceDefense': '-2',
        'totalDragonDefense': '0',
    }, {
        'name': 'Rathian',
        'weapon': {
            'name': 'Felyne Rathian Rapier',
            'icon': require('./assets/palico/rathian_weapon.png'),
            'rarity': '3',
            'attackMelee': '10',
            'attackRanged': '8',
            'attackType': 'Severing',
            'element': 'Poison 90',
            'affinity': '0%',
            'description': 'Made from Rathian parts. The strength of a queen slumbers in this gorgeous emerald sword.',
            'materials': [{
                'name': 'Rathian Spike',
                'quantity': '1'
            }, ],
            'cost': '120'
        },
        'head': {
            'name': 'Felyne Rathian Helm',
            'icon': require('./assets/palico/rathian_helm.png'),
            'rarity': '3',
            'defense': '10',
            'vsFire': '2',
            'vsWater': '0',
            'vsThunder': '-2',
            'vsIce': '0',
            'vsDragon': '-3',
            'description': 'Regal and fierce, this Rathian helm masterwork combines high defense and fire resistance.',
            'materials': [{
                'name': 'Rathian Scale',
                'quantity': '1'
            }, ],
            'cost': '80'
        },
        'body': {
            'name': 'Felyne Rathian Mail',
            'icon': require('./assets/palico/rathian_body.png'),
            'rarity': '3',
            'defense': '10',
            'vsFire': '2',
            'vsWater': '0',
            'vsThunder': '-2',
            'vsIce': '0',
            'vsDragon': '-3',
            'description': 'Rathian armor made of strong, supple outer plating. It evokes the ire and grandeur of a queen.',
            'materials': [{
                'name': 'Rathian Shell',
                'quantity': '1'
            }, ],
            'cost': '80'
        },
        'totalDefense': '20',
        'totalFireDefense': '4',
        'totalWaterDefense': '0',
        'totalThunderDefense': '-4',
        'totalIceDefense': '0',
        'totalDragonDefense': '-6',
    }, {
        'name': 'Lumu',
        'weapon': {
            'name': 'Felyne Lumu Pawpads',
            'icon': require('./assets/palico/lumu_weapon.png'),
            'rarity': '3',
            'attackMelee': '10',
            'attackRanged': '12',
            'attackType': 'Blunt',
            'element': 'None',
            'affinity': '0%',
            'description': 'Made from Paolumu parts. The Felyne paw motif is cute, but those pads are brutally hard.',
            'materials': [{
                'name': 'Paolumu Shell',
                'quantity': '1'
            }, ],
            'cost': '120'
        },
        'head': {
            'name': 'Felyne Lumu Hat',
            'icon': require('./assets/palico/lumu_helm.png'),
            'rarity': '3',
            'defense': '10',
            'vsFire': '-3',
            'vsWater': '2',
            'vsThunder': '0',
            'vsIce': '1',
            'vsDragon': '0',
            'description': 'This Paolumu headgear doubles as an airbag to protect your Palico from sudden impact.',
            'materials': [{
                'name': 'Paolumu Scale',
                'quantity': '1'
            }, ],
            'cost': '80'
        },
        'body': {
            'name': 'Felyne Lumu Cape',
            'icon': require('./assets/palico/lumu_body.png'),
            'rarity': '3',
            'defense': '10',
            'vsFire': '-3',
            'vsWater': '2',
            'vsThunder': '0',
            'vsIce': '1',
            'vsDragon': '0',
            'description': 'This Paolumu cape feels light as cotton but offers sturdy protection. Even fade-resistant!',
            'materials': [{
                'name': 'Paolumu Pelt',
                'quantity': '1'
            }, ],
            'cost': '80'
        },
        'totalDefense': '20',
        'totalFireDefense': '-6',
        'totalWaterDefense': '4',
        'totalThunderDefense': '0',
        'totalIceDefense': '2',
        'totalDragonDefense': '0',
    }, {
        'name': 'Baan',
        'weapon': {
            'name': 'Felyne Baan Ball',
            'icon': require('./assets/palico/baan_weapon.png'),
            'rarity': '3',
            'attackMelee': '10',
            'attackRanged': '8',
            'attackType': 'Blunt',
            'element': 'Sleep 55',
            'affinity': '0%',
            'defenseBonus': '+8',
            'description': 'Made from Radobaan parts. It\'s an engineering marvel, made using the very latest in crafting technology.',
            'materials': [{
                'name': 'Wyvern Bonemass',
                'quantity': '1'
            }, ],
            'cost': '120'
        },
        'head': {
            'name': 'Felyne Baan Helm',
            'icon': require('./assets/palico/baan_helm.png'),
            'rarity': '3',
            'defense': '12',
            'vsFire': '0',
            'vsWater': '2',
            'vsThunder': '0',
            'vsIce': '-1',
            'vsDragon': '-2',
            'description': 'This Radobaan headgear feels big and bulky, but its translucent top offers excellent visibility.',
            'materials': [{
                'name': 'Radobaan Oilshell.',
                'quantity': '1'
            }, ],
            'cost': '80'
        },
        'body': {
            'name': 'Felyne Baan Suit',
            'icon': require('./assets/palico/baan_body.png'),
            'rarity': '3',
            'defense': '12',
            'vsFire': '0',
            'vsWater': '2',
            'vsThunder': '0',
            'vsIce': '-1',
            'vsDragon': '-2',
            'description': 'Palicoes in this Radobaan gear get used to being asked "Can you even move in that thing?"',
            'materials': [{
                'name': 'Radobaan Scale',
                'quantity': '1'
            }, ],
            'cost': '80'
        },
        'totalDefense': '24',
        'totalFireDefense': '0',
        'totalWaterDefense': '4',
        'totalThunderDefense': '0',
        'totalIceDefense': '-2',
        'totalDragonDefense': '-4',
    }, {
        'name': 'Ladybug',
        'weapon': {
            'name': 'Kitty-of-the-Valley Rod',
            'icon': require('./assets/palico/ladybug_weapon.png'),
            'rarity': '3',
            'attackMelee': '10',
            'attackRanged': '8',
            'attackType': 'Blunt',
            'element': 'Paralysis 55',
            'affinity': '0%',
            'description': 'This paralyzing weapon glows in the dark thanks to the swarm of thunderbugs living in the bud.',
            'materials': [{
                'name': 'Great Hornfly',
                'quantity': '1'
            }, ],
            'cost': '120'
        },
        'head': {
            'name': 'Felyne Ladybug Cap',
            'icon': require('./assets/palico/ladybug_helm.png'),
            'rarity': '3',
            'defense': '8',
            'vsFire': '-1',
            'vsWater': '-1',
            'vsThunder': '2',
            'vsIce': '0',
            'vsDragon': '2',
            'description': 'Headgear for the Palico who demands function AND cuteness. The best part? Those antennae.',
            'materials': [{
                'name': 'Great Hornfly',
                'quantity': '1'
            }, ],
            'cost': '80'
        },
        'body': {
            'name': 'Felyne Ladybug Wings',
            'icon': require('./assets/palico/ladybug_body.png'),
            'rarity': '3',
            'defense': '8',
            'vsFire': '-1',
            'vsWater': '-1',
            'vsThunder': '2',
            'vsIce': '0',
            'vsDragon': '2',
            'description': 'The only flaw in this adorably spotted armor\'s design is that it doesn\'t let you fly.',
            'materials': [{
                'name': 'Great Hornfly',
                'quantity': '1'
            }, ],
            'cost': '80'
        },
        'totalDefense': '16',
        'totalFireDefense': '-2',
        'totalWaterDefense': '-2',
        'totalThunderDefense': '4',
        'totalIceDefense': '0',
        'totalDragonDefense': '4',
    }, {
        'name': 'Legiana',
        'weapon': {
            'name': 'Felyne Legiana Sword',
            'icon': require('./assets/palico/legiana_weapon.png'),
            'rarity': '4',
            'attackMelee': '8',
            'attackRanged': '8',
            'attackType': 'Severing',
            'element': 'Ice 180',
            'affinity': '0%',
            'description': 'Made from Legiana parts. This azure blade is capable of splitting glaciers.',
            'materials': [{
                'name': 'Legiana Claw',
                'quantity': '1'
            }, ],
            'cost': '150'
        },
        'head': {
            'name': 'Felyne Legiana Helm',
            'icon': require('./assets/palico/legiana_helm.png'),
            'rarity': '4',
            'defense': '14',
            'vsFire': '-1',
            'vsWater': '2',
            'vsThunder': '-3',
            'vsIce': '3',
            'vsDragon': '0',
            'description': 'Every Palico dreams of wearing this designer Legiana headgear, made in a rich, clear blue.',
            'materials': [{
                'name': 'Legiana Hide',
                'quantity': '1'
            }, ],
            'cost': '120'
        },
        'body': {
            'name': 'Felyne Legiana Mail',
            'icon': require('./assets/palico/legiana_body.png'),
            'rarity': '4',
            'defense': '14',
            'vsFire': '-1',
            'vsWater': '2',
            'vsThunder': '-3',
            'vsIce': '3',
            'vsDragon': '0',
            'description': 'This Legiana armor features icy-blue highlights and is said to grant the speed of a gale racing atop the sea.',
            'materials': [{
                'name': 'Legiana Webbing',
                'quantity': '1'
            }, ],
            'cost': '120'
        },
        'totalDefense': '28',
        'totalFireDefense': '-2',
        'totalWaterDefense': '4',
        'totalThunderDefense': '-6',
        'totalIceDefense': '6',
        'totalDragonDefense': '0',
    }, {
        'name': 'Odogaron',
        'weapon': {
            'name': 'Felyne Garon Chainblade',
            'icon': require('./assets/palico/odogaron_weapon.png'),
            'rarity': '4',
            'attackMelee': '11',
            'attackRanged': '11',
            'attackType': 'Severing',
            'element': 'None',
            'affinity': '30%',
            'description': 'Made from Odogaron parts. A cruel sickle meets heavy-weighted chain in this hellish creation.',
            'materials': [{
                'name': 'Odogaron Claw',
                'quantity': '1'
            }, ],
            'cost': '150'
        },
        'head': {
            'name': 'Felyne Odogaron Helm',
            'icon': require('./assets/palico/odogaron_helm.png'),
            'rarity': '4',
            'defense': '14',
            'vsFire': '2',
            'vsWater': '2',
            'vsThunder': '-2',
            'vsIce': '-3',
            'vsDragon': '0',
            'description': 'This intimidating Odogaron Helm features prominently in rookie Palico hazing traditions.',
            'materials': [{
                'name': 'Odogaron Scale',
                'quantity': '1'
            }, ],
            'cost': '120'
        },
        'body': {
            'name': 'Felyne Odogaron Mail',
            'icon': require('./assets/palico/odogaron_body.png'),
            'rarity': '4',
            'defense': '14',
            'vsFire': '2',
            'vsWater': '2',
            'vsThunder': '-2',
            'vsIce': '-3',
            'vsDragon': '0',
            'description': 'This Odogaron armor was designed to be as protective as it is intimidating. Even has a tail guard!',
            'materials': [{
                'name': 'Odogaron Sinew',
                'quantity': '1'
            }, ],
            'cost': '120'
        },
        'totalDefense': '28',
        'totalFireDefense': '4',
        'totalWaterDefense': '4',
        'totalThunderDefense': '-4',
        'totalIceDefense': '-6',
        'totalDragonDefense': '0',
    }, {
        'name': 'Rathalos',
        'weapon': {
            'name': 'Felyne Rathalos Blade',
            'icon': require('./assets/palico/rathalos_weapon.png'),
            'rarity': '4',
            'attackMelee': '16',
            'attackRanged': '14',
            'attackType': 'Severing',
            'element': 'Fire 120',
            'affinity': '10%',
            'description': 'Made from Rathalos parts. Blazing wyvern breath spews forth with every slash of this blade.',
            'materials': [{
                'name': 'Rathalos Scale',
                'quantity': '1'
            }, ],
            'cost': '200'
        },
        'head': {
            'name': 'Felyne Rathalos Helm',
            'icon': require('./assets/palico/rathalos_helm.png'),
            'rarity': '4',
            'defense': '16',
            'vsFire': '3',
            'vsWater': '1',
            'vsThunder': '-2',
            'vsIce': '1',
            'vsDragon': '-3',
            'description': 'A symbol of King of the Sky\'s rage and majesty, this Rathalos helm can quiet even a roaring blaze.',
            'materials': [{
                'name': 'Rathalos Shell',
                'quantity': '1'
            }, ],
            'cost': '150'
        },
        'body': {
            'name': 'Felyne Rathalos Mail',
            'icon': require('./assets/palico/rathalos_body.png'),
            'rarity': '4',
            'defense': '16',
            'vsFire': '3',
            'vsWater': '1',
            'vsThunder': '-2',
            'vsIce': '1',
            'vsDragon': '-3',
            'description': 'Made of sturdy Rathalos plating, this fine armor confers the King of the Sky\'s grace and brutality.',
            'materials': [{
                'name': 'Rathalos Shell',
                'quantity': '1'
            }, ],
            'cost': '150'
        },
        'totalDefense': '32',
        'totalFireDefense': '6',
        'totalWaterDefense': '2',
        'totalThunderDefense': '-4',
        'totalIceDefense': '2',
        'totalDragonDefense': '-6',
    }, {
        'name': 'Diablos',
        'weapon': {
            'name': 'Felyne Diablos Hammer',
            'icon': require('./assets/palico/diablos_weapon.png'),
            'rarity': '4',
            'attackMelee': '18',
            'attackRanged': '10',
            'attackType': 'Blunt',
            'element': 'None',
            'affinity': '-20%',
            'defenseBonus': '+10',
            'description': 'Made from Diablos parts, this hammer rages at prey. It\'s said to be host to a bloodthirst all of its own.',
            'materials': [{
                'name': 'Diablos Tailcase',
                'quantity': '1'
            }, ],
            'cost': '200'
        },
        'head': {
            'name': 'Felyne Diablos Helm',
            'icon': require('./assets/palico/diablos_helm.png'),
            'rarity': '4',
            'defense': '16',
            'vsFire': '3',
            'vsWater': '-2',
            'vsThunder': '0',
            'vsIce': '-3',
            'vsDragon': '2',
            'description': 'A host to the desert despot\'s soul, this Diablos helm bestows an unbreakable will on its user.',
            'materials': [{
                'name': 'Twisted Horn',
                'quantity': '1'
            }, ],
            'cost': '150'
        },
        'body': {
            'name': 'Felyne Diablos Mail',
            'icon': require('./assets/palico/diablos_body.png'),
            'rarity': '4',
            'defense': '16',
            'vsFire': '3',
            'vsWater': '-2',
            'vsThunder': '0',
            'vsIce': '-3',
            'vsDragon': '2',
            'description': 'Hard enough to repel steel, this Diablos armor turns the wearer into the terror of the sands.',
            'materials': [{
                'name': 'Diablos Shell',
                'quantity': '1'
            }, ],
            'cost': '150'
        },
        'totalDefense': '32',
        'totalFireDefense': '6',
        'totalWaterDefense': '-4',
        'totalThunderDefense': '0',
        'totalIceDefense': '-6',
        'totalDragonDefense': '4',
    }, {
        'name': 'Kirin',
        'weapon': {
            'name': 'Felyne Godsblade Zapurr',
            'icon': require('./assets/palico/kirin_weapon.png'),
            'rarity': '4',
            'attackMelee': '9',
            'attackRanged': '11',
            'attackType': 'Severing',
            'element': 'Thunder 220',
            'affinity': '0%',
            'description': 'Made from Kirin parts, this weapon is modified for Palico use. Thunder echoes with each and every thrust.',
            'materials': [{
                'name': 'Kirin Thunderhorn',
                'quantity': '1'
            }, ],
            'cost': '200'
        },
        'head': {
            'name': 'Felyne Kirin Horn',
            'icon': require('./assets/palico/kirin_helm.png'),
            'rarity': '4',
            'defense': '18',
            'vsFire': '-3',
            'vsWater': '-2',
            'vsThunder': '4',
            'vsIce': '-2',
            'vsDragon': '2',
            'description': 'The long horn jutting from the front of this Kirin headgear makes a bold statement.',
            'materials': [{
                'name': 'Kirin Mane',
                'quantity': '1'
            }, ],
            'cost': '150'
        },
        'body': {
            'name': 'Felyne Kirin Vest',
            'icon': require('./assets/palico/kirin_body.png'),
            'rarity': '4',
            'defense': '18',
            'vsFire': '-3',
            'vsWater': '-2',
            'vsThunder': '4',
            'vsIce': '-2',
            'vsDragon': '2',
            'description': 'Wear the full set of this Kirin gear and you\'ll be the object of everyone\'s envy.',
            'materials': [{
                'name': 'Kirin Hide',
                'quantity': '1'
            }, ],
            'cost': '150'
        },
        'totalDefense': '36',
        'totalFireDefense': '-6',
        'totalWaterDefense': '-4',
        'totalThunderDefense': '8',
        'totalIceDefense': '-4',
        'totalDragonDefense': '4',
    }, {
        'name': 'Death',
        'weapon': {
            'name': 'Felyne Deathgear Scythe',
            'icon': require('./assets/palico/death_weapon.png'),
            'rarity': '4',
            'attackMelee': '16',
            'attackRanged': '14',
            'attackType': 'Severing',
            'element': 'Dragon 130',
            'elderseal': 'Low',
            'affinity': '0%',
            'description': 'A fearsome scythe that cleaves away consciousness. Even the largest prey fall instantly into restful slumber.',
            'materials': [{
                    'name': 'Sinister Cloth',
                    'quantity': '1'
                },
                {
                    'name': 'Warped Bone',
                    'quantity': '1'
                },
            ],
            'cost': '200'
        },
        'head': {
            'name': 'Felyne Deathgear Hood',
            'icon': require('./assets/palico/death_helm.png'),
            'rarity': '4',
            'defense': '16',
            'vsFire': '3',
            'vsWater': '2',
            'vsThunder': '-2',
            'vsIce': '3',
            'vsDragon': '-4',
            'description': 'This deathly hood would scare the pants right off of your Palico, if they actually wore pants.',
            'materials': [{
                'name': 'Sinister Cloth',
                'quantity': '1'
            }, ],
            'cost': '150'
        },
        'body': {
            'name': 'Felyne Deathgear Cowl',
            'icon': require('./assets/palico/death_body.png'),
            'rarity': '4',
            'defense': '16',
            'vsFire': '3',
            'vsWater': '2',
            'vsThunder': '-2',
            'vsIce': '3',
            'vsDragon': '-4',
            'description': 'A spooky black shroud. Possible cursed. The wearer experiences constant chills up their spine.',
            'materials': [{
                'name': 'Sinister Cloth',
                'quantity': '1'
            }, ],
            'cost': '150'
        },
        'totalDefense': '32',
        'totalFireDefense': '6',
        'totalWaterDefense': '4',
        'totalThunderDefense': '-4',
        'totalIceDefense': '6',
        'totalDragonDefense': '-8',
    },
    {
        'name': 'Watcher',
        'weapon': {
            'name': 'Felyne Watcher Grinder',
            'icon': require('./assets/palico/watcher_weapon.png'),
            'rarity': '3',
            'attackMelee': '14',
            'attackRanged': '8',
            'attackType': 'Severing',
            'element': 'Thunder 160',
            'affinity': '-20%',
            'description': 'A weapon crafted from the Machines. Even carapaces are split clean with a swift blow from this contraption.',
            'materials': [{
                'name': 'Watcher Lens',
                'quantity': '1'
            }, {
                'name': 'Electro Sac',
                'quantity': '1'
            }, ],
            'cost': '80'
        },
        'totalDefense': '0',
        'totalFireDefense': '0',
        'totalWaterDefense': '0',
        'totalThunderDefense': '0',
        'totalIceDefense': '0',
        'totalDragonDefense': '0',
    },
    {
        'name': 'Azure Star',
        'weapon': {
            'name': 'Felyne Azure Star Baton',
            'icon': require('./assets/palico/azure_star_weapon.png'),
            'rarity': '2',
            'attackMelee': '10',
            'attackRanged': '6',
            'attackType': 'Blunt',
            'element': 'Water 140',
            'affinity': '20%',
            'description': 'A fancy weapon that glimmers with a blue sheen. Given to a Palico that will help usher in a new era.',
            'materials': [{
                'name': 'Azure Star Shard',
                'quantity': '1'
            }, {
                'name': 'Great Jagras Mane',
                'quantity': '1'
            }, ],
            'cost': '60'
        },
        'head': {
            'name': 'Felyne Azure Star Crown',
            'icon': require('./assets/palico/azure_star_helm.png'),
            'rarity': '2',
            'defense': '12',
            'vsFire': '2',
            'vsWater': '2',
            'vsThunder': '0',
            'vsIce': '0',
            'vsDragon': '3',
            'description': 'A helm that glimmers with a blue sheen. Grants courage and wisdom to its wearer, the herald of a new era.',
            'materials': [{
                'name': 'Azure Star Shard',
                'quantity': '1'
            }, {
                'name': 'Great Jagras Scale',
                'quantity': '1'
            }, ],
            'cost': '60'
        },
        'body': {
            'name': 'Felyne Azure Star Armor',
            'icon': require('./assets/palico/azure_star_body.png'),
            'rarity': '2',
            'defense': '12',
            'vsFire': '2',
            'vsWater': '2',
            'vsThunder': '0',
            'vsIce': '0',
            'vsDragon': '3',
            'description': 'Armor that glimmers with a blue sheen. The embedded jewel is proof of its owner\'s resolution.',
            'materials': [{
                'name': 'Azure Star Shard',
                'quantity': '1'
            }, {
                'name': 'Great Jagras Hide',
                'quantity': '1'
            }, ],
            'cost': '60'
        },
        'totalDefense': '24',
        'totalFireDefense': '4',
        'totalWaterDefense': '4',
        'totalThunderDefense': '0',
        'totalIceDefense': '0',
        'totalDragonDefense': '6',
    },
    {
        'name': 'Butterfly Set',
        'weapon': {
            'name': 'Felyne Butterfly Wand',
            'icon': require('./assets/palico/butterfly_alpha_weapon.png'),
            'rarity': '3',
            'attackMelee': '10',
            'attackRanged': '8',
            'attackType': 'Blunt',
            'element': 'Paralysis 50',
            'affinity': '0%',
            'description': 'Requires a Spring Blossom Ticket to craft. Inspired by dancing spring bees, it livens up any banquet.',
            'materials': [{
                'name': 'Spring Blossom Ticket',
                'quantity': '1'
            }, {
                'name': 'Earth Crystal',
                'quantity': '1'
            }, ],
            'cost': '120'
        },
        'head': {
            'name': 'Felyne Butterfly Hat',
            'icon': require('./assets/palico/butterfly_alpha_helm.png'),
            'rarity': '3',
            'defense': '10',
            'vsFire': '1',
            'vsWater': '1',
            'vsThunder': '4',
            'vsIce': '1',
            'vsDragon': '1',
            'description': 'Requires a Spring Blossom Ticket to craft. Inspired by dancing spring bees, it livens up any banquet.',
            'materials': [{
                'name': 'Spring Blossom Ticket',
                'quantity': '1'
            }, {
                'name': 'Earth Crystal',
                'quantity': '1'
            }, ],
            'cost': '80'
        },
        'body': {
            'name': 'Felyne Butterfly Vest',
            'icon': require('./assets/palico/butterfly_alpha_body.png'),
            'rarity': '3',
            'defense': '10',
            'vsFire': '1',
            'vsWater': '1',
            'vsThunder': '4',
            'vsIce': '1',
            'vsDragon': '1',
            'description': 'Requires a Spring Blossom Ticket to craft. Inspired by dancing spring bees, it livens up any banquet.',
            'materials': [{
                'name': 'Spring Blossom Ticket',
                'quantity': '1'
            }, {
                'name': 'Earth Crystal',
                'quantity': '1'
            }, ],
            'cost': '80'
        },
        'totalDefense': '20',
        'totalFireDefense': '2',
        'totalWaterDefense': '2',
        'totalThunderDefense': '8',
        'totalIceDefense': '2',
        'totalDragonDefense': '2',
    },
    {
        'name': 'Aloha Set',
        'weapon': {
            'name': 'Felyne Aloha Ukulele',
            'icon': require('./assets/palico/aloha_set_alpha_weapon.png'),
            'rarity': '3',
            'attackMelee': '12',
            'attackRanged': '10',
            'attackType': 'Blunt',
            'element': 'Water 120',
            'affinity': '0%',
            'description': 'Requires a Summer Twilight Ticket to craft. For bonking monsters only. No mewnlight serenades.',
            'materials': [{
                'name': 'Summer Twilight Ticket',
                'quantity': '1'
            }, {
                'name': 'Earth Crystal',
                'quantity': '1'
            }, ],
            'cost': '120'
        },
        'head': {
            'name': 'Felyne Aloha Straw Hat',
            'icon': require('./assets/palico/aloha_set_alpha_helm.png'),
            'rarity': '3',
            'defense': '12',
            'vsFire': '1',
            'vsWater': '4',
            'vsThunder': '1',
            'vsIce': '1',
            'vsDragon': '1',
            'description': 'Requires a Summer Twilight Ticket to craft. Experience an everlasting summer with this armor.',
            'materials': [{
                'name': 'Summer Twilight Ticket',
                'quantity': '1'
            }, {
                'name': 'Earth Crystal',
                'quantity': '1'
            }, ],
            'cost': '80'
        },
        'body': {
            'name': 'Felyne Aloha Shirt',
            'icon': require('./assets/palico/aloha_set_alpha_body.png'),
            'rarity': '3',
            'defense': '12',
            'vsFire': '1',
            'vsWater': '4',
            'vsThunder': '1',
            'vsIce': '1',
            'vsDragon': '1',
            'description': 'Requires a Summer Twilight Ticket to craft. Armor that\'ll let your Palico enjoy an eternal summer.',
            'materials': [{
                'name': 'Summer Twilight Ticket',
                'quantity': '1'
            }, {
                'name': 'Earth Crystal',
                'quantity': '1'
            }, ],
            'cost': '80'
        },
        'totalDefense': '24',
        'totalFireDefense': '2',
        'totalWaterDefense': '8',
        'totalThunderDefense': '2',
        'totalIceDefense': '2',
        'totalDragonDefense': '2',
    },
    {
        'name': 'Ghost Set',
        'weapon': {
            'name': 'Felyne Jack-o\'-Lantern',
            'icon': require('./assets/palico/ghost_alpha_weapon.png'),
            'rarity': '3',
            'attackMelee': '14',
            'attackRanged': '12',
            'attackType': 'Blunt',
            'element': 'Fire 120',
            'affinity': '0%',
            'description': 'Requires an Autumn Harvest Ticket to craft. A weapon that\'ll let your Palico enjoy trick or treating.',
            'materials': [{
                'name': 'Autumn Harvest Ticket',
                'quantity': '1'
            }, {
                'name': 'Machalite Ore',
                'quantity': '1'
            }, ],
            'cost': '150'
        },
        'head': {
            'name': 'Felyne Meowloween Mask',
            'icon': require('./assets/palico/ghost_alpha_helm.png'),
            'rarity': '3',
            'defense': '14',
            'vsFire': '4',
            'vsWater': '1',
            'vsThunder': '1',
            'vsIce': '1',
            'vsDragon': '1',
            'description': 'Requires an Autumn Harvest Ticket to craft. Get scheming with this armor.',
            'materials': [{
                'name': 'Autumn Harvest Ticket',
                'quantity': '1'
            }, {
                'name': 'Machalite Ore',
                'quantity': '1'
            }, ],
            'cost': '120'
        },
        'body': {
            'name': 'Felyne Ghost Garb',
            'icon': require('./assets/palico/ghost_alpha_body.png'),
            'rarity': '3',
            'defense': '14',
            'vsFire': '4',
            'vsWater': '1',
            'vsThunder': '1',
            'vsIce': '1',
            'vsDragon': '1',
            'description': 'Requires an Autumn Harvest Ticket to craft. Armor that\'ll let your Palico enjoy trick or treating.',
            'materials': [{
                'name': 'Autumn Harvest Ticket',
                'quantity': '1'
            }, {
                'name': 'Machalite Ore',
                'quantity': '1'
            }, ],
            'cost': '120'
        },
        'totalDefense': '28',
        'totalFireDefense': '8',
        'totalWaterDefense': '2',
        'totalThunderDefense': '2',
        'totalIceDefense': '2',
        'totalDragonDefense': '2',
    },
    {
        'name': 'Snow Set',
        'weapon': {
            'name': 'Felyne Snowcat Bell',
            'icon': require('./assets/palico/snow_set_alpha_weapon.png'),
            'rarity': '3',
            'attackMelee': '16',
            'attackRanged': '10',
            'attackType': 'Blunt',
            'element': 'Ice 140',
            'affinity': '0%',
            'description': 'Requires a Winter Star Ticket to craft. Jingle some bells of your own with this weapon!',
            'materials': [{
                'name': 'Winter Star Ticket',
                'quantity': '1'
            }, {
                'name': 'Machalite Ore',
                'quantity': '1'
            }, ],
            'cost': '150'
        },
        'head': {
            'name': 'Felyne Snowcat Head',
            'icon': require('./assets/palico/snow_set_alpha_head.png'),
            'rarity': '3',
            'defense': '16',
            'vsFire': '1',
            'vsWater': '1',
            'vsThunder': '1',
            'vsIce': '4',
            'vsDragon': '1',
            'description': 'Requires a Winter Star Ticket to craft. Enjoy the winter festivities in a costume modeled after a snowcat!',
            'materials': [{
                'name': 'Winter Star Ticket',
                'quantity': '1'
            }, {
                'name': 'Machalite Ore',
                'quantity': '1'
            }, ],
            'cost': '120'
        },
        'body': {
            'name': 'Felyne Snowcat Suit',
            'icon': require('./assets/palico/snow_set_alpha_body.png'),
            'rarity': '3',
            'defense': '16',
            'vsFire': '1',
            'vsWater': '1',
            'vsThunder': '1',
            'vsIce': '4',
            'vsDragon': '1',
            'description': 'Requires a Winter Star Ticket to craft. Enjoy the winter festivities in a costume modeled after a snowcat!',
            'materials': [{
                'name': 'Winter Star Ticket',
                'quantity': '1'
            }, {
                'name': 'Machalite Ore',
                'quantity': '1'
            }, ],
            'cost': '120'
        },
        'totalDefense': '32',
        'totalFireDefense': '2',
        'totalWaterDefense': '2',
        'totalThunderDefense': '2',
        'totalIceDefense': '8',
        'totalDragonDefense': '2',
    },
    {
        'name': 'Star Set',
        'weapon': {
            'name': 'Felyne Star Mic Stand',
            'icon': require('./assets/palico/star_set_weapon.png'),
            'rarity': '4',
            'attackMelee': '18',
            'attackRanged': '12',
            'attackType': 'Blunt',
            'element': 'Thunder 180',
            'affinity': '0%',
            'description': 'Requires an Appreciation Ticket to craft. Get your groove on and shine during the Appreciation Fest!',
            'materials': [{
                'name': 'Appreciation Ticket',
                'quantity': '1'
            }, {
                'name': 'Lightcrystal',
                'quantity': '1'
            }, ],
            'cost': '200'
        },
        'head': {
            'name': 'Felyne Star Head',
            'icon': require('./assets/palico/star_set_helm.png'),
            'rarity': '4',
            'defense': '18',
            'vsFire': '1',
            'vsWater': '1',
            'vsThunder': '1',
            'vsIce': '1',
            'vsDragon': '4',
            'description': 'Requires an Appreciation Ticket to craft. Get your groove on and shine during the Appreciation Fest!',
            'materials': [{
                'name': 'Appreciation Ticket',
                'quantity': '1'
            }, {
                'name': 'Lightcrystal',
                'quantity': '1'
            }, ],
            'cost': '150'
        },
        'body': {
            'name': 'Felyne Starstruck Suit',
            'icon': require('./assets/palico/star_set_body.png'),
            'rarity': '4',
            'defense': '18',
            'vsFire': '1',
            'vsWater': '1',
            'vsThunder': '1',
            'vsIce': '1',
            'vsDragon': '4',
            'description': 'Requires an Appreciation Ticket to craft. Get your groove on and shine during the Appreciation Fest!',
            'materials': [{
                'name': 'Appreciation Ticket',
                'quantity': '1'
            }, {
                'name': 'Lightcrystal',
                'quantity': '1'
            }, ],
            'cost': '150'
        },
        'totalDefense': '36',
        'totalFireDefense': '2',
        'totalWaterDefense': '2',
        'totalThunderDefense': '2',
        'totalIceDefense': '2',
        'totalDragonDefense': '8',
    },
];

let highRankPalicoArmors = [{
        'name': 'Leather Set ⍺',
        'weapon': {
            'name': 'Felyne Acorn Spade ⍺',
            'icon': require('./assets/palico/leather_alpha_weapon.png'),
            'rarity': '5',
            'attackMelee': '25',
            'attackRanged': '14',
            'attackType': 'Severing',
            'element': 'None',
            'affinity': '0%',
            'description': 'A much-beloved started weapon for the Palico crowd. Doubles as a handy trowel for use in the garden!',
            'materials': [{
                'name': 'Piercing Claw',
                'quantity': '1'
            }, ],
            'cost': '250'
        },
        'head': {
            'name': 'Felyne Leather Cap ⍺',
            'icon': require('./assets/palico/leather_alpha_helm.png'),
            'rarity': '5',
            'defense': '28',
            'vsFire': '2',
            'vsWater': '0',
            'vsThunder': '0',
            'vsIce': '0',
            'vsDragon': '0',
            'description': 'Standard-issue headgear for the novice Palico. Light but fairly tough. Gotta start somewhere!',
            'materials': [{
                'name': 'High-quality Pelt',
                'quantity': '1'
            }, ],
            'cost': '200'
        },
        'body': {
            'name': 'Felyne Leather Vest ⍺',
            'icon': require('./assets/palico/leather_alpha_body.png'),
            'rarity': '5',
            'defense': '28',
            'vsFire': '2',
            'vsWater': '0',
            'vsThunder': '0',
            'vsIce': '0',
            'vsDragon': '0',
            'description': 'The sleeveless design of this entry-level Palico armro allows for full freedom of motion.',
            'materials': [{
                'name': 'High-quality Pelt',
                'quantity': '1'
            }, ],
            'cost': '200'
        },
        'totalDefense': '56',
        'totalFireDefense': '4',
        'totalWaterDefense': '0',
        'totalThunderDefense': '0',
        'totalIceDefense': '0',
        'totalDragonDefense': '0',
    }, {
        'name': 'Bone Set ⍺',
        'weapon': {
            'name': 'Felyne Bone Hammer ⍺',
            'icon': require('./assets/palico/bone_weapon.png'),
            'rarity': '5',
            'attackMelee': '30',
            'attackRanged': '10',
            'attackType': 'Blunt',
            'element': 'None',
            'affinity': '0%',
            'description': 'Made from easy-to-come-by bone, this hammer is lightweight but sturdy.',
            'materials': [{
                'name': 'Quality Bone',
                'quantity': '1'
            }, ],
            'cost': '250'
        },
        'head': {
            'name': 'Felyne Bone Helm ⍺',
            'icon': require('./assets/palico/bone_helm.png'),
            'rarity': '5',
            'defense': '30',
            'vsFire': '2',
            'vsWater': '0',
            'vsThunder': '2',
            'vsIce': '0',
            'vsDragon': '2',
            'description': 'Headgear built around a monster skull base. Donning it will awaken the primal beast within.',
            'materials': [{
                'name': 'Quality Bone',
                'quantity': '1'
            }, ],
            'cost': '200'
        },
        'body': {
            'name': 'Felyne Bone Mail ⍺',
            'icon': require('./assets/palico/bone_body.png'),
            'rarity': '5',
            'defense': '30',
            'vsFire': '2',
            'vsWater': '0',
            'vsThunder': '2',
            'vsIce': '0',
            'vsDragon': '2',
            'description': 'A certain primal scent clings to this set of body armor. Made from a mix of monster bones.',
            'materials': [{
                'name': 'Quality Bone',
                'quantity': '1'
            }, ],
            'cost': '200'
        },
        'totalDefense': '60',
        'totalFireDefense': '4',
        'totalWaterDefense': '0',
        'totalThunderDefense': '4',
        'totalIceDefense': '0',
        'totalDragonDefense': '4',
    }, {
        'name': 'Jagras Set ⍺',
        'weapon': {
            'name': 'Felyne Jag Gunhammer ⍺',
            'icon': require('./assets/palico/jagras_weapon.png'),
            'rarity': '5',
            'attackMelee': '32',
            'attackRanged': '12',
            'attackType': 'Blunt',
            'element': 'None',
            'affinity': '0%',
            'description': 'A Great Jagras weapon. It looks like a gun but can\'t shoot. Made exclusively for bonking.',
            'materials': [{
                'name': 'Great Jagras Claw+',
                'quantity': '1'
            }, ],
            'cost': '250'
        },
        'head': {
            'name': 'Felyne Jagras Helm ⍺',
            'icon': require('./assets/palico/jagras_helm.png'),
            'rarity': '5',
            'defense': '32',
            'vsFire': '-2',
            'vsWater': '2',
            'vsThunder': '-1',
            'vsIce': '-1',
            'vsDragon': '1',
            'description': 'Your palico might start pawing at this helm\'s shaggy Great Jagras fur. It\'s a feature, we promise!',
            'materials': [{
                'name': 'Great Jagras Hide+',
                'quantity': '1'
            }, ],
            'cost': '200'
        },
        'body': {
            'name': 'Felyne Jagras Mail ⍺',
            'icon': require('./assets/palico/jagras_body.png'),
            'rarity': '5',
            'defense': '32',
            'vsFire': '-2',
            'vsWater': '2',
            'vsThunder': '-1',
            'vsIce': '-1',
            'vsDragon': '1',
            'description': 'The strong yet supple fur on this shaggy Great Jagras armor offers solid protection.',
            'materials': [{
                    'name': 'Great Jagras Scale+',
                    'quantity': '1'
                },
                {
                    'name': 'Great Jagras Mane',
                    'quantity': '1'
                },
            ],
            'cost': '200'
        },
        'totalDefense': '64',
        'totalFireDefense': '-4',
        'totalWaterDefense': '4',
        'totalThunderDefense': '-2',
        'totalIceDefense': '-2',
        'totalDragonDefense': '2',
    }, {
        'name': 'Kulu Set ⍺',
        'weapon': {
            'name': 'Felyne Kulu Lute ⍺',
            'icon': require('./assets/palico/kulu_weapon.png'),
            'rarity': '5',
            'attackMelee': '26',
            'attackRanged': '12',
            'attackType': 'Blunt',
            'element': 'None',
            'affinity': '20%',
            'description': 'Made from Kulu-Ya-Ku parts, each note plucked from its strings drips with sweet nostalgia.',
            'materials': [{
                'name': 'Kulu-Ya-Ku Scale+',
                'quantity': '1'
            }, ],
            'cost': '250'
        },
        'head': {
            'name': 'Felyne Kulu Turban ⍺',
            'icon': require('./assets/palico/kulu_helm.png'),
            'rarity': '5',
            'defense': '32',
            'vsFire': '0',
            'vsWater': '-3',
            'vsThunder': '0',
            'vsIce': '1',
            'vsDragon': '0',
            'description': 'It may seem like ordinary turban, but its Kulu-Ya-Ku hide make offers surprising defense.',
            'materials': [{
                'name': 'Kulu-Ya-Ku Plume+',
                'quantity': '1'
            }, ],
            'cost': '200'
        },
        'body': {
            'name': 'Felyne Kulu Vest ⍺',
            'icon': require('./assets/palico/kulu_body.png'),
            'rarity': '5',
            'defense': '32',
            'vsFire': '0',
            'vsWater': '-3',
            'vsThunder': '0',
            'vsIce': '1',
            'vsDragon': '0',
            'description': 'Made of soft, durable Kulu-Ya-Ku hide, this armor won\'t restrict your Palico\'s motion.',
            'materials': [{
                'name': 'Kulu-Ya-Ku Hide+',
                'quantity': '1'
            }, ],
            'cost': '200'
        },
        'totalDefense': '64',
        'totalFireDefense': '0',
        'totalWaterDefense': '-6',
        'totalThunderDefense': '0',
        'totalIceDefense': '2',
        'totalDragonDefense': '0',
    },
    {
        'name': 'Pukei Set ⍺',
        'weapon': {
            'name': 'Felyne Pukei Bow ⍺',
            'icon': require('./assets/palico/pukei_weapon.png'),
            'rarity': '5',
            'attackMelee': '30',
            'attackRanged': '22',
            'attackType': 'Blunt',
            'element': 'Poison 90',
            'affinity': '0%',
            'description': 'Made from Pukei-Pukei parts. Despite a whimsical design it doesn\'t actually fire arrows. Bonking only.',
            'materials': [{
                'name': 'Pukei-Pukei Sac+',
                'quantity': '1'
            }, ],
            'cost': '250'
        },
        'head': {
            'name': 'Felyne Pukei Hood ⍺',
            'icon': require('./assets/palico/pukei_helm.png'),
            'rarity': '5',
            'defense': '34',
            'vsFire': '0',
            'vsWater': '3',
            'vsThunder': '-3',
            'vsIce': '0',
            'vsDragon': '1',
            'description': 'This quircky Pukei-Pukei hood\'s design falls somewhere between cute and creepy.',
            'materials': [{
                'name': 'Pukei-Pukei Scale+',
                'quantity': '1'
            }, ],
            'cost': '200'
        },
        'body': {
            'name': 'Felyne Pukei Mantle ⍺',
            'icon': require('./assets/palico/pukei_body.png'),
            'rarity': '5',
            'defense': '34',
            'vsFire': '0',
            'vsWater': '3',
            'vsThunder': '-3',
            'vsIce': '0',
            'vsDragon': '1',
            'description': 'This Pukei-Pukei armor\'s weirdo design makes it consistenly popular with weirdo Palicoes.',
            'materials': [{
                    'name': 'Pukei-Pukei Scale+',
                    'quantity': '1'
                },
                {
                    'name': 'Pukei-Pukei Quill',
                    'quantity': '1'
                },
            ],
            'cost': '200'
        },
        'totalDefense': '68',
        'totalFireDefense': '0',
        'totalWaterDefense': '6',
        'totalThunderDefense': '-6',
        'totalIceDefense': '0',
        'totalDragonDefense': '2',
    }, {
        'name': 'Alloy Set ⍺',
        'weapon': {
            'name': 'Felyne Iron Sword ⍺',
            'icon': require('./assets/palico/alloy_weapon.png'),
            'rarity': '5',
            'attackMelee': '20',
            'attackRanged': '18',
            'attackType': 'Severing',
            'element': 'None',
            'affinity': '0%',
            'description': 'A large sword made by smelting down fine ore and hammering it for three days straight. Certified lethal.',
            'materials': [{
                'name': 'Carbalite Ore',
                'quantity': '1'
            }, ],
            'cost': '250'
        },
        'head': {
            'name': 'Felyne Alloy Helm ⍺',
            'icon': require('./assets/palico/alloy_helm.png'),
            'rarity': '5',
            'defense': '30',
            'vsFire': '-2',
            'vsWater': '0',
            'vsThunder': '-2',
            'vsIce': '-2',
            'vsDragon': '0',
            'description': 'A helmet made by smelting fine ore, then pounding it for three days straight. Certified strong.',
            'materials': [{
                'name': 'Carbalite Ore',
                'quantity': '1'
            }, ],
            'cost': '200'
        },
        'body': {
            'name': 'Felyne Alloy Mail ⍺',
            'icon': require('./assets/palico/alloy_body.png'),
            'rarity': '5',
            'defense': '30',
            'vsFire': '-2',
            'vsWater': '0',
            'vsThunder': '-2',
            'vsIce': '-2',
            'vsDragon': '0',
            'description': 'Body armor made by smelting fine ore, then pounding it for three days straight. Guaranteed tough.',
            'materials': [{
                'name': 'Carbalite Ore',
                'quantity': '1'
            }, ],
            'cost': '200'
        },
        'totalDefense': '60',
        'totalFireDefense': '-4',
        'totalWaterDefense': '0',
        'totalThunderDefense': '-4',
        'totalIceDefense': '-4',
        'totalDragonDefense': '0',
    }, {
        'name': 'Barroth Set ⍺',
        'weapon': {
            'name': 'Felyne Barroth Mace ⍺',
            'icon': require('./assets/palico/barroth_weapon.png'),
            'rarity': '5',
            'attackMelee': '36',
            'attackRanged': '20',
            'attackType': 'Blunt',
            'element': 'None',
            'affinity': '-20%',
            'defenseBonus': '+10',
            'description': 'Made with only the hardest Barroth parts, this weapon is capable of smashing boulders into gravel.',
            'materials': [{
                'name': 'Barroth Claw+',
                'quantity': '1'
            }, ],
            'cost': '250'
        },
        'head': {
            'name': 'Felyne Barroth Helm ⍺',
            'icon': require('./assets/palico/barroth_helm.png'),
            'rarity': '5',
            'defense': '34',
            'vsFire': '-3',
            'vsWater': '-1',
            'vsThunder': '3',
            'vsIce': '-1',
            'vsDragon': '0',
            'description': 'Hard as a boulder, this Barroth headgear offers exceptional defense.',
            'materials': [{
                    'name': 'Barroth Carapace',
                    'quantity': '1'
                },
                {
                    'name': 'Barroth Scalp',
                    'quantity': '1'
                },
            ],
            'cost': '200'
        },
        'body': {
            'name': 'Felyne Barroth Mail ⍺',
            'icon': require('./assets/palico/barroth_body.png'),
            'rarity': '5',
            'defense': '34',
            'vsFire': '-3',
            'vsWater': '-1',
            'vsThunder': '3',
            'vsIce': '-1',
            'vsDragon': '0',
            'description': 'This Barroth armor is hard as stone. Roll around in the mud and you\'ll be a Barroth pup!',
            'materials': [{
                'name': 'Barroth Carapace',
                'quantity': '1'
            }, ],
            'cost': '200'
        },
        'totalDefense': '68',
        'totalFireDefense': '-6',
        'totalWaterDefense': '-2',
        'totalThunderDefense': '6',
        'totalIceDefense': '-2',
        'totalDragonDefense': '0',
    }, {
        'name': 'Jyura Set ⍺',
        'weapon': {
            'name': 'Felyne Jyura Sword ⍺',
            'icon': require('./assets/palico/jyura_weapon.png'),
            'rarity': '5',
            'attackMelee': '32',
            'attackRanged': '18',
            'attackType': 'Severing',
            'element': 'Water 140',
            'affinity': '0%',
            'description': 'Made from Jyuratodus parts. The strength of ancient swordsmen seeps into the wielder\'s paw pads.',
            'materials': [{
                'name': 'Jyuratodus Fang+',
                'quantity': '1'
            }, ],
            'cost': '300'
        },
        'head': {
            'name': 'Felyne Jyura Helm ⍺',
            'icon': require('./assets/palico/jyura_helm.png'),
            'rarity': '5',
            'defense': '36',
            'vsFire': '-1',
            'vsWater': '2',
            'vsThunder': '-3',
            'vsIce': '0',
            'vsDragon': '0',
            'description': 'The smell of mud lingers on this Jyuratodus helm, evoking memories of childhood playtime.',
            'materials': [{
                'name': 'Jyuratodus Fin+',
                'quantity': '1'
            }, ],
            'cost': '250'
        },
        'body': {
            'name': 'Felyne Jyura Mail ⍺',
            'icon': require('./assets/palico/jyura_body.png'),
            'rarity': '5',
            'defense': '36',
            'vsFire': '-1',
            'vsWater': '2',
            'vsThunder': '-3',
            'vsIce': '0',
            'vsDragon': '0',
            'description': 'Cracks run along this Jyuratodus armor, lending it a rough-hewn sturdy feel.',
            'materials': [{
                'name': 'Jyuratodus Scale+',
                'quantity': '1'
            }, ],
            'cost': '250'
        },
        'totalDefense': '72',
        'totalFireDefense': '-2',
        'totalWaterDefense': '4',
        'totalThunderDefense': '-6',
        'totalIceDefense': '0',
        'totalDragonDefense': '0',
    }, {
        'name': 'Kadachi Set ⍺',
        'weapon': {
            'name': 'Felyne Kadachi Fork ⍺',
            'icon': require('./assets/palico/kadachi_weapon.png'),
            'rarity': '5',
            'attackMelee': '30',
            'attackRanged': '14',
            'attackType': 'Severing',
            'element': 'Thunder 180',
            'affinity': '10%',
            'description': 'Made from Tobi-Kadachi parts. It may look like an adorable Felyne, but the ears are long and sharp.',
            'materials': [{
                'name': 'Tobi-Kadachi Claw+',
                'quantity': '1'
            }, ],
            'cost': '300'
        },
        'head': {
            'name': 'Felyne Kadachi Hood ⍺',
            'icon': require('./assets/palico/kadachi_helm.png'),
            'rarity': '5',
            'defense': '36',
            'vsFire': '0',
            'vsWater': '-3',
            'vsThunder': '3',
            'vsIce': '0',
            'vsDragon': '0',
            'description': 'Complete with fluffy ears, this Tobi-Kadachi hood is so cute, you\'ll never let your Palico take it off.',
            'materials': [{
                'name': 'Tobi-Kadachi Scale+',
                'quantity': '1'
            }, ],
            'cost': '250'
        },
        'body': {
            'name': 'Felyne Kadachi Suit ⍺',
            'icon': require('./assets/palico/kadachi_body.png'),
            'rarity': '5',
            'defense': '36',
            'vsFire': '0',
            'vsWater': '-3',
            'vsThunder': '3',
            'vsIce': '0',
            'vsDragon': '0',
            'description': 'Your Palico will look absolutely adorable in this... That is until it\'s covered in monster guts.',
            'materials': [{
                'name': 'Tobi-Kadachi Pelt+',
                'quantity': '1'
            }, ],
            'cost': '250'
        },
        'totalDefense': '72',
        'totalFireDefense': '0',
        'totalWaterDefense': '-6',
        'totalThunderDefense': '6',
        'totalIceDefense': '0',
        'totalDragonDefense': '0',
    }, {
        'name': 'Anja Set ⍺',
        'weapon': {
            'name': 'Felyne Anja Bonehammer ⍺',
            'icon': require('./assets/palico/anja_weapon.png'),
            'rarity': '5',
            'attackMelee': '40',
            'attackRanged': '28',
            'attackType': 'Blunt',
            'element': 'Fire 300',
            'affinity': '-30%',
            'description': 'Made from Anjanath parts. It was made by lashing together huge bones. This hammer htis hard and ehavy.',
            'materials': [{
                'name': 'Anjanath Fang+',
                'quantity': '1'
            }, ],
            'cost': '300'
        },
        'head': {
            'name': 'Felyne Anja Helm ⍺',
            'icon': require('./assets/palico/anja_helm.png'),
            'rarity': '5',
            'defense': '36',
            'vsFire': '3',
            'vsWater': '-3',
            'vsThunder': '-1',
            'vsIce': '-1',
            'vsDragon': '0',
            'description': 'This helm captures the furr-ocious spirit of the Anjanath purr-fectly... only it\'s a heck of a lot cuter.',
            'materials': [{
                'name': 'Anjanath Scale+',
                'quantity': '1'
            }, ],
            'cost': '250'
        },
        'body': {
            'name': 'Felyne Anja Mail ⍺',
            'icon': require('./assets/palico/anja_body.png'),
            'rarity': '5',
            'defense': '36',
            'vsFire': '3',
            'vsWater': '-3',
            'vsThunder': '-1',
            'vsIce': '-1',
            'vsDragon': '0',
            'description': 'Large and heavy, this gear offers complete purrotection while capturing the Anjanath\'s fierce fighting spirit.',
            'materials': [{
                'name': 'Anjanath Pelt+',
                'quantity': '1'
            }, ],
            'cost': '250'
        },
        'totalDefense': '72',
        'totalFireDefense': '6',
        'totalWaterDefense': '-6',
        'totalThunderDefense': '-2',
        'totalIceDefense': '-2',
        'totalDragonDefense': '0',
    }, {
        'name': 'Rathian Set ⍺',
        'weapon': {
            'name': 'Felyne Rathian Rapier ⍺',
            'icon': require('./assets/palico/rathian_weapon.png'),
            'rarity': '5',
            'attackMelee': '46',
            'attackRanged': '21',
            'attackType': 'Severing',
            'element': 'Poison 105',
            'affinity': '0%',
            'description': 'Made from Rathian parts. The strength of a queen slumbers in this gorgeous emerald sword.',
            'materials': [{
                'name': 'Rathian Spike+',
                'quantity': '1'
            }, ],
            'cost': '300'
        },
        'head': {
            'name': 'Felyne Rathian Helm ⍺',
            'icon': require('./assets/palico/rathian_helm.png'),
            'rarity': '5',
            'defense': '36',
            'vsFire': '2',
            'vsWater': '0',
            'vsThunder': '-2',
            'vsIce': '0',
            'vsDragon': '-3',
            'description': 'Regal and fierce, this Rathian helm mastework combines high defense and fire resistance.',
            'materials': [{
                'name': 'Rathian Scale+',
                'quantity': '1'
            }, ],
            'cost': '250'
        },
        'body': {
            'name': 'Felyne Rathian Mail ⍺',
            'icon': require('./assets/palico/rathian_body.png'),
            'rarity': '5',
            'defense': '36',
            'vsFire': '2',
            'vsWater': '0',
            'vsThunder': '-2',
            'vsIce': '0',
            'vsDragon': '-3',
            'description': 'Rathian armor made of strong, supple outer plating. It evokes the ire and grandeur of a queen.',
            'materials': [{
                'name': 'Rathian Carapace',
                'quantity': '1'
            }, ],
            'cost': '250'
        },
        'totalDefense': '72',
        'totalFireDefense': '4',
        'totalWaterDefense': '0',
        'totalThunderDefense': '-4',
        'totalIceDefense': '0',
        'totalDragonDefense': '-6',
    }, {
        'name': 'Lumu Set ⍺',
        'weapon': {
            'name': 'Felyne Lumu Pawpads ⍺',
            'icon': require('./assets/palico/lumu_weapon.png'),
            'rarity': '5',
            'attackMelee': '35',
            'attackRanged': '35',
            'attackType': 'Blunt',
            'element': 'None',
            'affinity': '0%',
            'description': 'Made from Paolumu parts. The Felyne paw motif is cute, but those pads are brutally hard.',
            'materials': [{
                'name': 'Paolumu Carapace+',
                'quantity': '1'
            }, ],
            'cost': '300'
        },
        'head': {
            'name': 'Felyne Lumu Hat ⍺',
            'icon': require('./assets/palico/lumu_helm.png'),
            'rarity': '5',
            'defense': '36',
            'vsFire': '-3',
            'vsWater': '2',
            'vsThunder': '0',
            'vsIce': '1',
            'vsDragon': '0',
            'description': 'This Paolumu headgear doubles as an airbag to protect your Palico from sudden impact.',
            'materials': [{
                'name': 'Paolumu Scale+',
                'quantity': '1'
            }, ],
            'cost': '250'
        },
        'body': {
            'name': 'Felyne Lumu Cape ⍺',
            'icon': require('./assets/palico/lumu_body.png'),
            'rarity': '5',
            'defense': '36',
            'vsFire': '-3',
            'vsWater': '2',
            'vsThunder': '0',
            'vsIce': '1',
            'vsDragon': '0',
            'description': 'This Paolumu cape feels light as cotton but offers sturdy protection. Even fade-resistant!',
            'materials': [{
                'name': 'Paolumu Pelt+',
                'quantity': '1'
            }, ],
            'cost': '250'
        },
        'totalDefense': '72',
        'totalFireDefense': '-6',
        'totalWaterDefense': '4',
        'totalThunderDefense': '0',
        'totalIceDefense': '2',
        'totalDragonDefense': '0',
    }, {
        'name': 'Baan Set ⍺',
        'weapon': {
            'name': 'Felyne Baan Ball ⍺',
            'icon': require('./assets/palico/baan_weapon.png'),
            'rarity': '5',
            'attackMelee': '48',
            'attackRanged': '19',
            'attackType': 'Blunt',
            'element': 'Sleep 75',
            'affinity': '0%',
            'defenseBonus': '+16',
            'description': 'Made from Radobaan parts. It\'s an engineering marvel, made using the very latest in crafting technology.',
            'materials': [{
                    'name': 'Radobaan Carapace',
                    'quantity': '1'
                },
                {
                    'name': 'Wyvern Bonemass',
                    'quantity': '1'
                },
            ],
            'cost': '300'
        },
        'head': {
            'name': 'Felyne Baan Helm ⍺',
            'icon': require('./assets/palico/baan_helm.png'),
            'rarity': '5',
            'defense': '38',
            'vsFire': '0',
            'vsWater': '2',
            'vsThunder': '0',
            'vsIce': '-1',
            'vsDragon': '-2',
            'description': 'This Radobaan headgear feels big and bulky, but its translucent top offers excellent visibility.',
            'materials': [{
                    'name': 'Radobaan Scale+',
                    'quantity': '1'
                },
                {
                    'name': 'Radobaan Oilshell',
                    'quantity': '1'
                },
            ],
            'cost': '250'
        },
        'body': {
            'name': 'Felyne Baan Suit ⍺',
            'icon': require('./assets/palico/baan_body.png'),
            'rarity': '5',
            'defense': '38',
            'vsFire': '0',
            'vsWater': '2',
            'vsThunder': '0',
            'vsIce': '-1',
            'vsDragon': '-2',
            'description': 'Palicoes in this Radobaan gear get used to being asked "Can you even move in that thing?"',
            'materials': [{
                'name': 'Radobaan Scale+',
                'quantity': '1'
            }, ],
            'cost': '250'
        },
        'totalDefense': '76',
        'totalFireDefense': '0',
        'totalWaterDefense': '4',
        'totalThunderDefense': '0',
        'totalIceDefense': '-2',
        'totalDragonDefense': '-4',
    }, {
        'name': 'Ladybug Set ⍺',
        'weapon': {
            'name': 'Kitty-of-the-Valley Rod ⍺',
            'icon': require('./assets/palico/ladybug_weapon.png'),
            'rarity': '5',
            'attackMelee': '44',
            'attackRanged': '23',
            'attackType': 'Blunt',
            'element': 'Paralysis 75',
            'affinity': '0%',
            'description': 'This paralyzing weapon glows in the dark thanks to the swarm of thunderbugs living in the bud.',
            'materials': [{
                    'name': 'Monster Broth',
                    'quantity': '1'
                },
                {
                    'name': 'Great Hornfly',
                    'quantity': '1'
                },
                {
                    'name': 'Omniplegia Sac',
                    'quantity': '1'
                },
            ],
            'cost': '250'
        },
        'head': {
            'name': 'Felyne Ladybug Cap ⍺',
            'icon': require('./assets/palico/ladybug_helm.png'),
            'rarity': '5',
            'defense': '30',
            'vsFire': '-1',
            'vsWater': '-1',
            'vsThunder': '2',
            'vsIce': '0',
            'vsDragon': '2',
            'description': 'Headgear for the Palico who demands function ANd cuteness. The best part? Those antennae.',
            'materials': [{
                    'name': 'Vespoid Carapace',
                    'quantity': '1'
                },
                {
                    'name': 'Great Hornfly',
                    'quantity': '1'
                },
            ],
            'cost': '200'
        },
        'body': {
            'name': 'Felyne Ladybug Wings ⍺',
            'icon': require('./assets/palico/ladybug_body.png'),
            'rarity': '5',
            'defense': '30',
            'vsFire': '-1',
            'vsWater': '-1',
            'vsThunder': '2',
            'vsIce': '0',
            'vsDragon': '2',
            'description': 'The only flaw in this adorably spotted armor\'s design is that it doesn\'t let you fly.',
            'materials': [{
                    'name': 'Vespoid Innerwing',
                    'quantity': '1'
                },
                {
                    'name': 'Great Hornfly',
                    'quantity': '1'
                },
            ],
            'cost': '200'
        },
        'totalDefense': '60',
        'totalFireDefense': '-2',
        'totalWaterDefense': '-2',
        'totalThunderDefense': '4',
        'totalIceDefense': '0',
        'totalDragonDefense': '4',
    }, {
        'name': 'Zorah Set ⍺',
        'weapon': {
            'name': 'Felyne Zorah Puppet ⍺',
            'icon': require('./assets/palico/zorah_weapon.png'),
            'rarity': '6',
            'attackMelee': '25',
            'attackRanged': '12',
            'attackType': 'Severing',
            'element': 'Blast 30',
            'affinity': '0%',
            'defenseBonus': '+5',
            'description': 'Made from Zorah Magdaros parts. Those who chuckle at its cute doll will at least go out laughing.',
            'materials': [{
                'name': 'Zorah Magdaros Magma',
                'quantity': '1'
            }, ],
            'cost': '350'
        },
        'head': {
            'name': 'Felyne Zorah Crown ⍺',
            'icon': require('./assets/palico/zorah_helm.png'),
            'rarity': '6',
            'defense': '36',
            'vsFire': '4',
            'vsWater': '-3',
            'vsThunder': '-1',
            'vsIce': '-2',
            'vsDragon': '-3',
            'description': 'Laugh at this awkward Zorah Magdaros headgear and you won\'t live to catch your breath.',
            'materials': [{
                'name': 'Zorah Magdaros Heat Scale',
                'quantity': '1'
            }, ],
            'cost': '300'
        },
        'body': {
            'name': 'Felyne Zorah Suit ⍺',
            'icon': require('./assets/palico/zorah_body.png'),
            'rarity': '6',
            'defense': '36',
            'vsFire': '4',
            'vsWater': '-3',
            'vsThunder': '-1',
            'vsIce': '-2',
            'vsDragon': '-3',
            'description': 'Dismiss this funny-looking Zorah Magdaros armor and you\'ll regret it with your final breath.',
            'materials': [{
                'name': 'Zorah Magdaros Pleura',
                'quantity': '1'
            }, ],
            'cost': '300'
        },
        'totalDefense': '72',
        'totalFireDefense': '8',
        'totalWaterDefense': '-6',
        'totalThunderDefense': '-2',
        'totalIceDefense': '-4',
        'totalDragonDefense': '-6',
    }, {
        'name': 'Legiana Set ⍺',
        'weapon': {
            'name': 'Felyne Legiana Sword ⍺',
            'icon': require('./assets/palico/legiana_weapon.png'),
            'rarity': '6',
            'attackMelee': '40',
            'attackRanged': '25',
            'attackType': 'Severing',
            'element': 'Ice 250',
            'affinity': '0%',
            'description': 'Made from Legiana parts. This azure blade is capable of splitting glaciers.',
            'materials': [{
                'name': 'Legiana Claw+',
                'quantity': '1'
            }, ],
            'cost': '350'
        },
        'head': {
            'name': 'Felyne Legiana Helm ⍺',
            'icon': require('./assets/palico/legiana_helm.png'),
            'rarity': '6',
            'defense': '42',
            'vsFire': '-1',
            'vsWater': '2',
            'vsThunder': '-3',
            'vsIce': '3',
            'vsDragon': '0',
            'description': 'Every Palico dreams of wearing this designer Legiana headgear, made in a rich, clear blue.',
            'materials': [{
                'name': 'Legiana Hide+',
                'quantity': '1'
            }, ],
            'cost': '300'
        },
        'body': {
            'name': 'Felyne Legiana Mail ⍺',
            'icon': require('./assets/palico/legiana_body.png'),
            'rarity': '6',
            'defense': '42',
            'vsFire': '-1',
            'vsWater': '2',
            'vsThunder': '-3',
            'vsIce': '3',
            'vsDragon': '0',
            'description': 'This Legiana armor features icy-blue highlights and is said to grant the speed of a gale racing atop the sea.',
            'materials': [{
                'name': 'Legiana Wing',
                'quantity': '1'
            }, ],
            'cost': '300'
        },
        'totalDefense': '84',
        'totalFireDefense': '-2',
        'totalWaterDefense': '4',
        'totalThunderDefense': '-6',
        'totalIceDefense': '6',
        'totalDragonDefense': '0',
    }, {
        'name': 'Odogaron Set ⍺',
        'weapon': {
            'name': 'Felyne Garon Chainblade ⍺',
            'icon': require('./assets/palico/odogaron_weapon.png'),
            'rarity': '6',
            'attackMelee': '46',
            'attackRanged': '27',
            'attackType': 'Severing',
            'element': 'None',
            'affinity': '30%',
            'description': 'Made from Odogaron parts. A cruel sickle meets heavy-weighted chain in this hellish creation.',
            'materials': [{
                'name': 'Odogaron Claw+',
                'quantity': '1'
            }, ],
            'cost': '350'
        },
        'head': {
            'name': 'Felyne Odogaron Helm ⍺',
            'icon': require('./assets/palico/odogaron_helm.png'),
            'rarity': '6',
            'defense': '42',
            'vsFire': '2',
            'vsWater': '2',
            'vsThunder': '-2',
            'vsIce': '-3',
            'vsDragon': '0',
            'description': 'This intimidating Odogaron helm features prominently in rookie Palico hazing traditions.',
            'materials': [{
                'name': 'Odogaron Scale+',
                'quantity': '1'
            }, ],
            'cost': '300'
        },
        'body': {
            'name': 'Felyne Odogaron Mail ⍺',
            'icon': require('./assets/palico/odogaron_body.png'),
            'rarity': '6',
            'defense': '42',
            'vsFire': '2',
            'vsWater': '2',
            'vsThunder': '-2',
            'vsIce': '-3',
            'vsDragon': '0',
            'description': 'This Odogaron armor was designed to be as protective as it is intimidating. Even has a tail guard!',
            'materials': [{
                'name': 'Odogaron Sinew+',
                'quantity': '1'
            }, ],
            'cost': '300'
        },
        'totalDefense': '84',
        'totalFireDefense': '4',
        'totalWaterDefense': '4',
        'totalThunderDefense': '-4',
        'totalIceDefense': '-6',
        'totalDragonDefense': '0',
    }, {
        'name': 'Rathalos Set ⍺',
        'weapon': {
            'name': 'Felyne Rathalos Blade ⍺',
            'icon': require('./assets/palico/rathalos_weapon.png'),
            'rarity': '6',
            'attackMelee': '45',
            'attackRanged': '25',
            'attackType': 'Severing',
            'element': 'Fire 200',
            'affinity': '10%',
            'description': 'Made from Rathalos parts. Blazing wyvern breath spews forth with every slash of this blade.',
            'materials': [{
                'name': 'Rathalos Scale+',
                'quantity': '1'
            }, ],
            'cost': '350'
        },
        'head': {
            'name': 'Felyne Rathalos Helm ⍺',
            'icon': require('./assets/palico/rathalos_helm.png'),
            'rarity': '6',
            'defense': '42',
            'vsFire': '3',
            'vsWater': '1',
            'vsThunder': '-2',
            'vsIce': '1',
            'vsDragon': '-3',
            'description': 'A symbol of the King of the Sky\'s rage and majesty, this Rathalos helm can quiet even a roaring blaze.',
            'materials': [{
                'name': 'Rathalos Carapace',
                'quantity': '1'
            }, ],
            'cost': '300'
        },
        'body': {
            'name': 'Felyne Rathalos Mail ⍺',
            'icon': require('./assets/palico/rathalos_body.png'),
            'rarity': '6',
            'defense': '42',
            'vsFire': '3',
            'vsWater': '1',
            'vsThunder': '-2',
            'vsIce': '1',
            'vsDragon': '-3',
            'description': 'Made of sturdy Rathalos plating, this fine armor confers the King of the Sky\'s grace and brutality.',
            'materials': [{
                'name': 'Rathalos Carapace',
                'quantity': '1'
            }, ],
            'cost': '300'
        },
        'totalDefense': '84',
        'totalFireDefense': '6',
        'totalWaterDefense': '2',
        'totalThunderDefense': '-4',
        'totalIceDefense': '2',
        'totalDragonDefense': '-6',
    }, {
        'name': 'Diablos Set ⍺',
        'weapon': {
            'name': 'Felyne Diablos Hammer ⍺',
            'icon': require('./assets/palico/diablos_weapon.png'),
            'rarity': '6',
            'attackMelee': '60',
            'attackRanged': '20',
            'attackType': 'Blunt',
            'element': 'None',
            'affinity': '-20%',
            'defenseBonus': '+20',
            'description': 'Made from Diablos parts, this hammer rages at prey. It\'s said to be host to a bloodthirst all of its own.',
            'materials': [{
                    'name': 'Diablos Ridge+',
                    'quantity': '1'
                },
                {
                    'name': 'Diablos Tailcase',
                    'quantity': '1'
                },
            ],
            'cost': '350'
        },
        'head': {
            'name': 'Felyne Diablos Helm ⍺',
            'icon': require('./assets/palico/diablos_helm.png'),
            'rarity': '6',
            'defense': '46',
            'vsFire': '3',
            'vsWater': '-2',
            'vsThunder': '0',
            'vsIce': '-3',
            'vsDragon': '2',
            'description': 'A host to the desert despot\'s soul, this Diablos helm bestows an unbreakable will on its user.',
            'materials': [{
                'name': 'Majestic Horn',
                'quantity': '1'
            }, ],
            'cost': '300'
        },
        'body': {
            'name': 'Felyne Diablos Mail ⍺',
            'icon': require('./assets/palico/diablos_body.png'),
            'rarity': '6',
            'defense': '46',
            'vsFire': '3',
            'vsWater': '-2',
            'vsThunder': '0',
            'vsIce': '-3',
            'vsDragon': '2',
            'description': 'Hard enough to repel steel, this Diablos armor turns the wearer into the the terror of the sands.',
            'materials': [{
                'name': 'Diablos Carapace',
                'quantity': '1'
            }, ],
            'cost': '300'
        },
        'totalDefense': '92',
        'totalFireDefense': '6',
        'totalWaterDefense': '-4',
        'totalThunderDefense': '0',
        'totalIceDefense': '-6',
        'totalDragonDefense': '4',
    }, {
        'name': 'Lavasioth Set ⍺',
        'weapon': {
            'name': 'Felyne Lava Mace ⍺',
            'icon': require('./assets/palico/lavasioth_weapon.png'),
            'rarity': '6',
            'attackMelee': '50',
            'attackRanged': '20',
            'attackType': 'Blunt',
            'element': 'Fire 300',
            'affinity': '0%',
            'description': 'A Lavasioth weapon. Made of ultra-hard materials tempered in lava.',
            'materials': [{
                'name': 'Lavasioth Fang+',
                'quantity': '1'
            }, ],
            'cost': '350'
        },
        'head': {
            'name': 'Felyne Lavasioth Helm ⍺',
            'icon': require('./assets/palico/lavasioth_helm.png'),
            'rarity': '6',
            'defense': '42',
            'vsFire': '4',
            'vsWater': '-3',
            'vsThunder': '1',
            'vsIce': '-2',
            'vsDragon': '-2',
            'description': 'The tall crest atop this Lavasioth helms stroke the flames of your Palico\'s fighting spirit.',
            'materials': [{
                'name': 'Lavasioth Fin+',
                'quantity': '1'
            }, ],
            'cost': '300'
        },
        'body': {
            'name': 'Felyne Lavasioth Cowl ⍺',
            'icon': require('./assets/palico/lavasioth_body.png'),
            'rarity': '6',
            'defense': '42',
            'vsFire': '3',
            'vsWater': '-3',
            'vsThunder': '-1',
            'vsIce': '-1',
            'vsDragon': '3',
            'description': 'Wedding protection and mobility, this Lavasioth armor grants the courage to face anything.',
            'materials': [{
                'name': 'Lavasioth Scale+',
                'quantity': '1'
            }, ],
            'cost': '300'
        },
        'totalDefense': '84',
        'totalFireDefense': '7',
        'totalWaterDefense': '-6',
        'totalThunderDefense': '0',
        'totalIceDefense': '-3',
        'totalDragonDefense': '1',
    }, {
        'name': 'Uragaan Set ⍺',
        'weapon': {
            'name': 'Felyne Uragaan Ironslab ⍺',
            'icon': require('./assets/palico/uragaan_weapon.png'),
            'rarity': '7',
            'attackMelee': '55',
            'attackRanged': '25',
            'attackType': 'Blunt',
            'element': 'Fire 150',
            'affinity': '0%',
            'defenseBonus': '+25',
            'description': 'Made from Uragaan parts. It\'s capable of splintering iron. May be the heaviest Palicon weapon ever.',
            'materials': [{
                'name': 'Uragaan Jaw',
                'quantity': '1'
            }, ],
            'cost': '400'
        },
        'head': {
            'name': 'Felyne Uragaan Helm ⍺',
            'icon': require('./assets/palico/uragaan_helm.png'),
            'rarity': '7',
            'defense': '46',
            'vsFire': '4',
            'vsWater': '-3',
            'vsThunder': '1',
            'vsIce': '-2',
            'vsDragon': '-2',
            'description': 'This Uragaan helm offers unrivaled defense, but you won\'t understand a single thing your Palico says.',
            'materials': [{
                'name': 'Uragaan Carapace',
                'quantity': '1'
            }, ],
            'cost': '350'
        },
        'body': {
            'name': 'Felyne Uragaan Mail ⍺',
            'icon': require('./assets/palico/uragaan_body.png'),
            'rarity': '7',
            'defense': '46',
            'vsFire': '4',
            'vsWater': '-3',
            'vsThunder': '1',
            'vsIce': '-2',
            'vsDragon': '-2',
            'description': 'By covering the wearer entirely in plating, this Uragaan armor offers unparalleled defense.',
            'materials': [{
                'name': 'Uragaan Scute',
                'quantity': '1'
            }, ],
            'cost': '350'
        },
        'totalDefense': '92',
        'totalFireDefense': '8',
        'totalWaterDefense': '-6',
        'totalThunderDefense': '2',
        'totalIceDefense': '-4',
        'totalDragonDefense': '-4',
    }, {
        'name': 'Bazel Set ⍺',
        'weapon': {
            'name': 'Felyne Bazel Mace ⍺',
            'icon': require('./assets/palico/bazel_alpha_weapon.png'),
            'rarity': '7',
            'attackMelee': '52',
            'attackRanged': '30',
            'attackType': 'Blunt',
            'element': 'Blast 40',
            'affinity': '0%',
            'description': 'Made from Bazelgeuse parts. Let the frenzy of the hunt take you. Embrace your raw, primal instincts.',
            'materials': [{
                'name': 'Bazelgeuse Fuse',
                'quantity': '1'
            }, ],
            'cost': '400'
        },
        'head': {
            'name': 'Felyne Bazel Helm ⍺',
            'icon': require('./assets/palico/bazel_alpha_helm.png'),
            'rarity': '7',
            'defense': '50',
            'vsFire': '3',
            'vsWater': '1',
            'vsThunder': '-4',
            'vsIce': '-2',
            'vsDragon': '-2',
            'description': 'Donning this Bazelgeuse helm unleashes your Palico\'s inner beast as it roars into battle.',
            'materials': [{
                'name': 'Bazelgeuse Scale+',
                'quantity': '1'
            }, ],
            'cost': '350'
        },
        'body': {
            'name': 'Felyne Bazel Mail ⍺',
            'icon': require('./assets/palico/bazel_alpha_body.png'),
            'rarity': '7',
            'defense': '50',
            'vsFire': '3',
            'vsWater': '1',
            'vsThunder': '-4',
            'vsIce': '-2',
            'vsDragon': '-2',
            'description': 'Wear this Bazelgeuse armor and give in to frenzy, for the best hunter fights with wild abandon.',
            'materials': [{
                'name': 'Bazelgeuse Carapace',
                'quantity': '1'
            }, ],
            'cost': '350'
        },
        'totalDefense': '100',
        'totalFireDefense': '6',
        'totalWaterDefense': '2',
        'totalThunderDefense': '-8',
        'totalIceDefense': '-4',
        'totalDragonDefense': '-4',
    }, {
        'name': 'Death Set ⍺',
        'weapon': {
            'name': 'Felyne Deathgear Scythe ⍺',
            'icon': require('./assets/palico/death_weapon.png'),
            'rarity': '7',
            'attackMelee': '45',
            'attackRanged': '26',
            'attackType': 'Severing',
            'element': 'Dragon 260',
            'elderseal': 'Low',
            'affinity': '0%',
            'description': 'A fearsome scythe that cleaves away consciousness. Even the largest prey fall instantly into restful slumber.',
            'materials': [{
                    'name': 'Elder Dragon Bone',
                    'quantity': '1'
                },
                {
                    'name': 'Sinister Cloth',
                    'quantity': '1'
                },
            ],
            'cost': '400'
        },
        'head': {
            'name': 'Felyne Deathgear Hood ⍺',
            'icon': require('./assets/palico/death_helm.png'),
            'rarity': '7',
            'defense': '42',
            'vsFire': '3',
            'vsWater': '2',
            'vsThunder': '-2',
            'vsIce': '3',
            'vsDragon': '-4',
            'description': 'This deathly hood would scare the pants right off of your Palico, if they actually wore pants.',
            'materials': [{
                    'name': 'Elder Dragon Bone',
                    'quantity': '1'
                },
                {
                    'name': 'Sinister Cloth',
                    'quantity': '1'
                },
            ],
            'cost': '350'
        },
        'body': {
            'name': 'Felyne Deathgear Cowl ⍺',
            'icon': require('./assets/palico/death_body.png'),
            'rarity': '7',
            'defense': '42',
            'vsFire': '3',
            'vsWater': '2',
            'vsThunder': '-2',
            'vsIce': '3',
            'vsDragon': '4',
            'description': 'A spooky black shroud. Possible cursed. The wearer experiences constants chills up their spine.',
            'materials': [{
                    'name': 'Elder Dragon Bone',
                    'quantity': '1'
                },
                {
                    'name': 'Sinister Cloth',
                    'quantity': '1'
                },
            ],
            'cost': '350'
        },
        'totalDefense': '84',
        'totalFireDefense': '6',
        'totalWaterDefense': '4',
        'totalThunderDefense': '-4',
        'totalIceDefense': '6',
        'totalDragonDefense': '-8',
    }, {
        'name': 'Gajalaka Set ⍺',
        'weapon': {
            'name': 'Felyne Gajalaka Sword ⍺',
            'icon': require('./assets/palico/gajalaka_weapon.png'),
            'rarity': '7',
            'attackMelee': '50',
            'attackRanged': '40',
            'attackType': 'Severing',
            'element': 'None',
            'affinity': '20%',
            'description': 'A wild Gajalaka weapon made from ore. Sharp, and brilliant in its own right.',
            'materials': [{
                'name': 'Gajalaka Sketch',
                'quantity': '1'
            }, {
                'name': 'Carbalite Ore',
                'quantity': '1'
            }, ],
            'cost': '400'
        },
        'head': {
            'name': 'Felyne Gajalaka Mask ⍺',
            'icon': require('./assets/palico/gajalaka_helm.png'),
            'rarity': '7',
            'defense': '44',
            'vsFire': '1',
            'vsWater': '1',
            'vsThunder': '1',
            'vsIce': '1',
            'vsDragon': '1',
            'description': 'Traditional armor of the Gajalaka tribe. It took some begging, but they finally made us a set. Now your Palico\'s truly one of them.',
            'materials': [{
                'name': 'Gajalaka Sketch',
                'quantity': '1'
            }, {
                'name': 'Brutal Bone',
                'quantity': '1'
            }, ],
            'cost': '350'
        },
        'body': {
            'name': 'Felyne Gajalaka Cloak ⍺',
            'icon': require('./assets/palico/gajalaka_body.png'),
            'rarity': '7',
            'defense': '44',
            'vsFire': '1',
            'vsWater': '1',
            'vsThunder': '1',
            'vsIce': '1',
            'vsDragon': '1',
            'description': 'Traditional armor of the Gajalaka tribe. It took some begging, but they finally made us a set. Now your Palico\'s truly one of them.',
            'materials': [{
                'name': 'Gajalaka Sketch',
                'quantity': '1'
            }, {
                'name': 'Brutal Bone',
                'quantity': '1'
            }, ],
            'cost': '350'
        },
        'totalDefense': '88',
        'totalFireDefense': '2',
        'totalWaterDefense': '2',
        'totalThunderDefense': '2',
        'totalIceDefense': '2',
        'totalDragonDefense': '2',
    }, {
        'name': 'Nergigante Set ⍺',
        'weapon': {
            'name': 'Felyne Nergigante Hammer ⍺',
            'icon': require('./assets/palico/nergigante_weapon.png'),
            'rarity': '8',
            'attackMelee': '70',
            'attackRanged': '16',
            'attackType': 'Blunt',
            'element': 'Dragon 60',
            'elderseal': 'High',
            'affinity': '0%',
            'description': 'Made from Nergigante parts. As terrifying in function as it is in form, it promises raw destruction.',
            'materials': [{
                'name': 'Nergigante Regrowth Plate',
                'quantity': '1'
            }, ],
            'cost': '500'
        },
        'head': {
            'name': 'Felyne Nergigante Helm ⍺',
            'icon': require('./assets/palico/nergigante_helm.png'),
            'rarity': '8',
            'defense': '54',
            'vsFire': '1',
            'vsWater': '1',
            'vsThunder': '-3',
            'vsIce': '1',
            'vsDragon': '-3',
            'description': 'This Nergigante helm drips with a fiendish gluttony fit to devour all before it.',
            'materials': [{
                'name': 'Nergigante Horn+',
                'quantity': '1'
            }, ],
            'cost': '400'
        },
        'body': {
            'name': 'Felyne Nergigante Mail ⍺',
            'icon': require('./assets/palico/nergigante_body.png'),
            'rarity': '8',
            'defense': '54',
            'vsFire': '1',
            'vsWater': '1',
            'vsThunder': '-3',
            'vsIce': '1',
            'vsDragon': '-3',
            'description': 'The belly of this Nergigante armor bears a dragon\'s eye motif that stares down prey.',
            'materials': [{
                'name': 'Nergigante Carapace',
                'quantity': '1'
            }, ],
            'cost': '400'
        },
        'totalDefense': '108',
        'totalFireDefense': '2',
        'totalWaterDefense': '2',
        'totalThunderDefense': '-6',
        'totalIceDefense': '2',
        'totalDragonDefense': '-6',
    }, {
        'name': 'Daora Set ⍺',
        'weapon': {
            'name': 'Felyne Daora\'s Wang ⍺',
            'icon': require('./assets/palico/daora_alpha_weapon.png'),
            'rarity': '8',
            'attackMelee': '56',
            'attackRanged': '32',
            'attackType': 'Severing',
            'element': 'Ice 200',
            'affinity': '10%',
            'description': 'Made from Kushala Daora parts. Any caught within its gale are swept away, helpless in the wind.',
            'materials': [{
                'name': 'Daora Claw+',
                'quantity': '1'
            }, ],
            'cost': '500'
        },
        'head': {
            'name': 'Felyne Daora Snarl ⍺',
            'icon': require('./assets/palico/daora_alpha_helm.png'),
            'rarity': '8',
            'defense': '56',
            'vsFire': '0',
            'vsWater': '2',
            'vsThunder': '-3',
            'vsIce': '4',
            'vsDragon': '-2',
            'description': 'This glorious Kushala Daora helm bears the likeness of the goddess of the moon and the harvest.',
            'materials': [{
                'name': 'Daora Dragon Scale+',
                'quantity': '1'
            }, ],
            'cost': '400'
        },
        'body': {
            'name': 'Felyne Daora Vise ⍺',
            'icon': require('./assets/palico/daora_alpha_body.png'),
            'rarity': '8',
            'defense': '56',
            'vsFire': '0',
            'vsWater': '2',
            'vsThunder': '-3',
            'vsIce': '4',
            'vsDragon': '-2',
            'description': 'Prosperity in the next life is guaranteed to any who fall while wearing this Kushala Daora gear.',
            'materials': [{
                'name': 'Daora Carapace',
                'quantity': '1'
            }, ],
            'cost': '400'
        },
        'totalDefense': '112',
        'totalFireDefense': '0',
        'totalWaterDefense': '4',
        'totalThunderDefense': '-6',
        'totalIceDefense': '8',
        'totalDragonDefense': '-4',
    }, {
        'name': 'Kaiser Set ⍺',
        'weapon': {
            'name': 'Felyne Kaiser Mace ⍺',
            'icon': require('./assets/palico/kaiser_alpha_weapon.png'),
            'rarity': '8',
            'attackMelee': '58',
            'attackRanged': '26',
            'attackType': 'Blunt',
            'element': 'Blast 45',
            'affinity': '0%',
            'description': 'Made from Teostra parts, this staff is the very definition of regal. All Felynes bend the knee to it.',
            'materials': [{
                'name': 'Teostra Claw+',
                'quantity': '500'
            }, ],
            'cost': '400'
        },
        'head': {
            'name': 'Felyne Kaiser Corona ⍺',
            'icon': require('./assets/palico/kaiser_alpha_helm.png'),
            'rarity': '8',
            'defense': '56',
            'vsFire': '3',
            'vsWater': '-3',
            'vsThunder': '1',
            'vsIce': '-3',
            'vsDragon': '1',
            'description': 'The faint sound of a harpsicord plays as your Palico dons this Teostra periwig. A symbol of power and wealth.',
            'materials': [{
                'name': 'Teostra Mane',
                'quantity': '1'
            }, ],
            'cost': '400'
        },
        'body': {
            'name': 'Felyne Kaiser Robe ⍺',
            'icon': require('./assets/palico/kaiser_alpha_body.png'),
            'rarity': '8',
            'defense': '56',
            'vsFire': '3',
            'vsWater': '-3',
            'vsThunder': '1',
            'vsIce': '-3',
            'vsDragon': '1',
            'description': 'As nobility incarnate, this dark crimson Teostra cape can be worn only be those of royal blood.',
            'materials': [{
                'name': 'Teostra Carapace',
                'quantity': '1'
            }, ],
            'cost': '400'
        },
        'totalDefense': '112',
        'totalFireDefense': '6',
        'totalWaterDefense': '-6',
        'totalThunderDefense': '2',
        'totalIceDefense': '-6',
        'totalDragonDefense': '2',
    }, {
        'name': 'Vaal Set ⍺',
        'weapon': {
            'name': 'Felyne Hazak Sword ⍺',
            'icon': require('./assets/palico/vaal_alpha_weapon.png'),
            'rarity': '8',
            'attackMelee': '60',
            'attackRanged': '26',
            'attackType': 'Severing',
            'element': 'Dragon 220',
            'elderseal': 'Average',
            'affinity': '0%',
            'description': 'Made of Vaal Hazak parts. The skull whispers eerily, "Strip every fishy morsel from the bone."',
            'materials': [{
                'name': 'Vaal Hazak Talon',
                'quantity': '1'
            }, ],
            'cost': '500'
        },
        'head': {
            'name': 'Felyne Vaal Skull ⍺',
            'icon': require('./assets/palico/vaal_alpha_helm.png'),
            'rarity': '8',
            'defense': '56',
            'vsFire': '-4',
            'vsWater': '4',
            'vsThunder': '1',
            'vsIce': '-1',
            'vsDragon': '-3',
            'description': 'Nine out of ten Palicoes agree this armored Vaal Hazak skull helm is scary but super cool.',
            'materials': [{
                'name': 'Vaal Hazak Carapace',
                'quantity': '1'
            }, ],
            'cost': '400'
        },
        'body': {
            'name': 'Felyne Vaal Bones ⍺',
            'icon': require('./assets/palico/vaal_alpha_body.png'),
            'rarity': '8',
            'defense': '56',
            'vsFire': '-4',
            'vsWater': '4',
            'vsThunder': '1',
            'vsIce': '-1',
            'vsDragon': '3',
            'description': 'It\'s a trade secret how they get this Vaal Hazak armor\'s belly to be see-through.',
            'materials': [{
                'name': 'Vaal Hazak Membrane',
                'quantity': '1'
            }, ],
            'cost': '400'
        },
        'totalDefense': '112',
        'totalFireDefense': '-8',
        'totalWaterDefense': '8',
        'totalThunderDefense': '2',
        'totalIceDefense': '-2',
        'totalDragonDefense': '-6',
    },
    {
        'name': 'Kirin Set ⍺',
        'weapon': {
            'name': 'Felyne Godsblade Zapurr ⍺',
            'icon': require('./assets/palico/kirin_weapon.png'),
            'rarity': '8',
            'attackMelee': '42',
            'attackRanged': '25',
            'attackType': 'Severing',
            'element': 'Thunder 350',
            'affinity': '0%',
            'description': 'Made from Kirin parts, this weapon is modified for Palico use. Thunder echoes with each and every thrust.',
            'materials': [{
                'name': 'Kirin Azure Horn',
                'quantity': '1'
            }, ],
            'cost': '500'
        },
        'head': {
            'name': 'Felyne Kirin Horn ⍺',
            'icon': require('./assets/palico/kirin_helm.png'),
            'rarity': '8',
            'defense': '56',
            'vsFire': '-3',
            'vsWater': '-2',
            'vsThunder': '4',
            'vsIce': '-2',
            'vsDragon': '2',
            'description': 'The long horn jutting from the front of this Kirin headgear makes a bold statement.',
            'materials': [{
                'name': 'Kirin Hide+',
                'quantity': '1'
            }, {
                'name': 'Kirin Mane',
                'quantity': '1'
            }, ],
            'cost': '400'
        },
        'body': {
            'name': 'Felyne Kirin Vest ⍺',
            'icon': require('./assets/palico/kirin_body.png'),
            'rarity': '8',
            'defense': '56',
            'vsFire': '-3',
            'vsWater': '-2',
            'vsThunder': '4',
            'vsIce': '-2',
            'vsDragon': '2',
            'description': 'Wear the full set of this Kirin gear and you\'ll be the object of everyone\'s envy.',
            'materials': [{
                'name': 'Kirin Hide+',
                'quantity': '1'
            }, ],
            'cost': '400'
        },
        'totalDefense': '112',
        'totalFireDefense': '-6',
        'totalWaterDefense': '-4',
        'totalThunderDefense': '8',
        'totalIceDefense': '-4',
        'totalDragonDefense': '4',
    },
    {
        'name': 'Xeno Set ⍺',
        'weapon': {
            'name': 'Felyne Xeno Bouquet ⍺',
            'icon': require('./assets/palico/xeno_alpha_weapon.png'),
            'rarity': '8',
            'attackMelee': '55',
            'attackRanged': '40',
            'attackType': 'Severing',
            'element': 'Dragon 190',
            'elderseal': 'Low',
            'affinity': '10%',
            'description': 'Made from Xeno\'jiiva parts. Flowers adorn this sword, like a bouquet at an underworld wedding.',
            'materials': [{
                'name': 'Xeno\'jiiva Claw',
                'quantity': '1'
            }, ],
            'cost': '600'
        },
        'head': {
            'name': 'Felyne Xeno Veil ⍺',
            'icon': require('./assets/palico/xeno_alpha_helm.png'),
            'rarity': '8',
            'defense': '60',
            'vsFire': '-3',
            'vsWater': '2',
            'vsThunder': '2',
            'vsIce': '2',
            'vsDragon': '-4',
            'description': 'The faint-glowing veil on this Xeno\'jiiva helm dances, evoking the revels at underworld feasts.',
            'materials': [{
                'name': 'Xeno\'jiiva Shell',
                'quantity': '1'
            }, ],
            'cost': '500'
        },
        'body': {
            'name': 'Felyne Xeno Dress ⍺',
            'icon': require('./assets/palico/xeno_alpha_body.png'),
            'rarity': '8',
            'defense': '60',
            'vsFire': '-3',
            'vsWater': '2',
            'vsThunder': '2',
            'vsIce': '2',
            'vsDragon': '-4',
            'description': 'The dim glow of this Xeno\'jiiva dress evokes the quiet prayers offered at underworld feasts.',
            'materials': [{
                'name': 'Xeno\'jiiva Veil',
                'quantity': '1'
            }, ],
            'cost': '500'
        },
        'totalDefense': '120',
        'totalFireDefense': '-6',
        'totalWaterDefense': '4',
        'totalThunderDefense': '4',
        'totalIceDefense': '4',
        'totalDragonDefense': '-8',
    }, {
        'name': 'Mega Man ⍺',
        'weapon': {
            'name': 'Mega Buster ⍺',
            'icon': require('./assets/palico/mega_man_alpha_weapon.png'),
            'rarity': '6',
            'attackMelee': '40',
            'attackRanged': '40',
            'attackType': 'Blunt',
            'element': 'None',
            'affinity': '0%',
            'description': 'A replica of the infamous Mega Buster. Square off against any fearsome monster in 8-bit glory!',
            'materials': [{
                'name': 'Mega Man Ticket',
                'quantity': '2'
            }, ],
            'cost': '500'
        },
        'totalDefense': '0',
        'totalFireDefense': '0',
        'totalWaterDefense': '0',
        'totalThunderDefense': '0',
        'totalIceDefense': '0',
        'totalDragonDefense': '0',
    }, {
        'name': 'Deviljho ⍺',
        'weapon': {
            'name': 'Felyne Vangis Mace ⍺',
            'icon': require('./assets/palico/vangis_alpha_weapon.png'),
            'rarity': '7',
            'attackMelee': '65',
            'attackRanged': '22',
            'attackType': 'Blunt',
            'element': 'Dragon 180',
            'elderseal': 'High',
            'affinity': '-20',
            'description': 'A blunt Deviljho weapon that bleeds with the same rage and green of the monster from which it was created.',
            'materials': [{
                'name': 'Deviljho Scalp',
                'quantity': '1'
            }, ],
            'cost': '450'
        },
        'head': {
            'name': 'Felyne Vangis Helm ⍺',
            'icon': require('./assets/palico/vangis_alpha_helm.png'),
            'rarity': '7',
            'defense': '50',
            'vsFire': '1',
            'vsWater': '1',
            'vsThunder': '-3',
            'vsIce': '2',
            'vsDragon': '-3',
            'description': 'This devious Deviljho helm brings only nightmares and despair to all living creatures.',
            'materials': [{
                'name': 'Deviljho Scale',
                'quantity': '1'
            }, ],
            'cost': '350'
        },
        'body': {
            'name': 'Felyne Vangis Mail ⍺',
            'icon': require('./assets/palico/vangis_alpha_body.png'),
            'rarity': '7',
            'defense': '50',
            'vsFire': '1',
            'vsWater': '1',
            'vsThunder': '-3',
            'vsIce': '2',
            'vsDragon': '-3',
            'description': 'The glimmering belt on this Deviljho armor is symbolic of a tyrant\'s insatiable greed.',
            'materials': [{
                'name': 'Deviljho Hide',
                'quantity': '1'
            }, ],
            'cost': '350'
        },
        'totalDefense': '100',
        'totalFireDefense': '2',
        'totalWaterDefense': '2',
        'totalThunderDefense': '-6',
        'totalIceDefense': '4',
        'totalDragonDefense': '-6',
    }, {
        'name': 'Butterfly Set ⍺',
        'weapon': {
            'name': 'Felyne Butterfly Wand ⍺',
            'icon': require('./assets/palico/butterfly_alpha_weapon.png'),
            'rarity': '5',
            'attackMelee': '48',
            'attackRanged': '18',
            'attackType': 'Blunt',
            'element': 'Paralysis 70',
            'affinity': '0%',
            'description': 'Requires a Spring Blossom Ticket to craft. Inspired by dancing spring bees, it livens up any banquet.',
            'materials': [{
                    'name': 'Spring Blossom Ticket',
                    'quantity': '1'
                },
                {
                    'name': 'Dragonvein Crystal',
                    'quantity': '1'
                },
            ],
            'cost': '350'
        },
        'head': {
            'name': 'Felyne Butterfly Hat ⍺',
            'icon': require('./assets/palico/butterfly_alpha_helm.png'),
            'rarity': '5',
            'defense': '34',
            'vsFire': '1',
            'vsWater': '1',
            'vsThunder': '4',
            'vsIce': '1',
            'vsDragon': '1',
            'description': 'Requires a Spring Blossom Ticket to craft. Inspired by dancing spring bees, it livens up any banquet.',
            'materials': [{
                'name': 'Spring Blossom Ticket',
                'quantity': '1'
            }, {
                'name': 'Dragonvein Crystal',
                'quantity': '1'
            }, ],
            'cost': '250'
        },
        'body': {
            'name': 'Felyne Butterfly Vest ⍺',
            'icon': require('./assets/palico/butterfly_alpha_body.png'),
            'rarity': '5',
            'defense': '34',
            'vsFire': '1',
            'vsWater': '1',
            'vsThunder': '4',
            'vsIce': '1',
            'vsDragon': '1',
            'description': 'Requires a Spring Blossom Ticket to craft. Inspired by dancing spring bees, it livens up any banquet.',
            'materials': [{
                'name': 'Spring Blossom Ticket',
                'quantity': '1'
            }, {
                'name': 'Dragonvein Crystal',
                'quantity': '1'
            }, ],
            'cost': '250'
        },
        'totalDefense': '68',
        'totalFireDefense': '2',
        'totalWaterDefense': '2',
        'totalThunderDefense': '8',
        'totalIceDefense': '2',
        'totalDragonDefense': '2',
    },
    {
        'name': 'Kulve Taroth Set ⍺',
        'weapon': {
            'name': 'Felyne Kulve Fan ⍺',
            'icon': require('./assets/palico/kulve_taroth_alpha_weapon.png'),
            'rarity': '8',
            'attackMelee': '60',
            'attackRanged': '50',
            'attackType': 'Blunt',
            'element': 'None',
            'affinity': '0%',
            'description': 'The golden scales of Kulve Taroth have been reworked to forge this elegant, yet useful fan.',
            'materials': [{
                'name': 'Kulve Taroth Golden Tailshell',
                'quantity': '1'
            }, ],
            'cost': '600'
        },
        'head': {
            'name': 'Felyne Kulve Fur ⍺',
            'icon': require('./assets/palico/kulve_taroth_alpha_helm.png'),
            'rarity': '8',
            'defense': '60',
            'vsFire': '4',
            'vsWater': '-2',
            'vsThunder': '3',
            'vsIce': '-4',
            'vsDragon': '-2',
            'description': 'Armor made from the carapaces of Kulve Taroth. They\'ve been worked into a gorgeous, warm headpiece.',
            'materials': [{
                'name': 'Kulve Taroth Golden Shell',
                'quantity': '1'
            }, ],
            'cost': '500'
        },
        'body': {
            'name': 'Felyne Kulve Suit ⍺',
            'icon': require('./assets/palico/kulve_taroth_alpha_body.png'),
            'rarity': '8',
            'defense': '60',
            'vsFire': '4',
            'vsWater': '-2',
            'vsThunder': '3',
            'vsIce': '-4',
            'vsDragon': '-2',
            'description': 'Armor made from the carapaces of the Kulve Taroth. They\'ve been worked into a beautiful, fluffy suit.',
            'materials': [{
                'name': 'Kulve Taroth Golden Scale',
                'quantity': '1'
            }, ],
            'cost': '500'
        },
        'totalDefense': '120',
        'totalFireDefense': '8',
        'totalWaterDefense': '-4',
        'totalThunderDefense': '6',
        'totalIceDefense': '-8',
        'totalDragonDefense': '-4',
    },
    {
        'name': 'Felyne Samurai Set ⍺',
        'weapon': {
            'name': 'Felyne Samurai Sword ⍺',
            'icon': require('./assets/palico/samurai_alpha_weapon.png'),
            'rarity': '8',
            'attackMelee': '70',
            'attackRanged': '20',
            'attackType': 'Severing',
            'element': 'None',
            'affinity': '10%',
            'description': 'A blade with a hilt in the shape of a paw. Popular among Palicoes, it\'s cute and dignified all at once.',
            'materials': [{
                'name': 'Bushi Ticket',
                'quantity': '2'
            }, ],
            'cost': '500'
        },
        'head': {
            'name': 'Felyne Samurai Helm ⍺',
            'icon': require('./assets/palico/samurai_alpha_helm.png'),
            'rarity': '8',
            'defense': '56',
            'vsFire': '2',
            'vsWater': '0',
            'vsThunder': '-2',
            'vsIce': '2',
            'vsDragon': '2',
            'description': 'A helm of a Palico that desires to unify all. The paw design fills follow Palicoes with courage.',
            'materials': [{
                'name': 'Bushi Ticket',
                'quantity': '1'
            }, ],
            'cost': '400'
        },
        'body': {
            'name': 'Felyne Samurai Armor ⍺',
            'icon': require('./assets/palico/samurai_alpha_body.png'),
            'rarity': '8',
            'defense': '56',
            'vsFire': '2',
            'vsWater': '0',
            'vsThunder': '-2',
            'vsIce': '2',
            'vsDragon': '2',
            'description': 'Armor belonging to an aspiring Palico shogun. The emblazoned cherry blossom appeals to all warriors.',
            'materials': [{
                'name': 'Bushi Ticket',
                'quantity': '1'
            }, ],
            'cost': '400'
        },
        'totalDefense': '112',
        'totalFireDefense': '4',
        'totalWaterDefense': '0',
        'totalThunderDefense': '-4',
        'totalIceDefense': '4',
        'totalDragonDefense': '4',
    },
    {
        'name': 'Lunastra Set ⍺',
        'weapon': {
            'name': 'Felyne Eliza Parasol ⍺',
            'icon': require('./assets/palico/lunastra_weapon.png'),
            'rarity': '8',
            'attackMelee': '65',
            'attackRanged': '16',
            'attackType': 'Severing',
            'element': 'Blast 35',
            'affinity': '0%',
            'description': 'A parasol created from Lunastra parts that exudes nobility. An elegant match for parkgoers.',
            'materials': [{
                'name': 'Lunastra Wing',
                'quantity': '1'
            }, ],
            'cost': '600'
        },
        'head': {
            'name': 'Felyne Eliza Headpiece ⍺',
            'icon': require('./assets/palico/lunastra_helm.png'),
            'rarity': '8',
            'defense': '60',
            'vsFire': '3',
            'vsWater': '1',
            'vsThunder': '1',
            'vsIce': '-3',
            'vsDragon': '-2',
            'description': 'The flowing locks of this regal headpiece are sure to grab the atetntion of Purr-ince Charming.',
            'materials': [{
                'name': 'Lunastra Mane',
                'quantity': '1'
            }, ],
            'cost': '500'
        },
        'body': {
            'name': 'Felyne Eliza Ruffle ⍺',
            'icon': require('./assets/palico/lunastra_body.png'),
            'rarity': '8',
            'defense': '60',
            'vsFire': '3',
            'vsWater': '1',
            'vsThunder': '1',
            'vsIce': '-3',
            'vsDragon': '-2',
            'description': 'This Lunastra armor carries an air of nobility about it that\'s suitable only for one family lineage.',
            'materials': [{
                'name': 'Lunastra Scale+',
                'quantity': '1'
            }, ],
            'cost': '500'
        },
        'totalDefense': '120',
        'totalFireDefense': '6',
        'totalWaterDefense': '2',
        'totalThunderDefense': '2',
        'totalIceDefense': '-6',
        'totalDragonDefense': '-4',
    },
    {
        'name': 'Aloha Set ⍺',
        'weapon': {
            'name': 'Felyne Aloha Ukulele ⍺',
            'icon': require('./assets/palico/aloha_set_alpha_weapon.png'),
            'rarity': '5',
            'attackMelee': '38',
            'attackRanged': '32',
            'attackType': 'Blunt',
            'element': 'Water 210',
            'affinity': '0%',
            'description': 'Requires a Summer Twilight Ticket to craft. For bonking monsters only. No mewnlight serenades.',
            'materials': [{
                'name': 'Summer Twilight Ticket',
                'quantity': '1'
            }, {
                'name': 'Dragonvein Crystal',
                'quantity': '1'
            }, ],
            'cost': '350'
        },
        'head': {
            'name': 'Felyne Aloha Straw Set ⍺',
            'icon': require('./assets/palico/aloha_set_alpha_helm.png'),
            'rarity': '5',
            'defense': '36',
            'vsFire': '1',
            'vsWater': '4',
            'vsThunder': '1',
            'vsIce': '1',
            'vsDragon': '1',
            'description': 'Requires a Summer Twilight Ticket to craft. Experience an everlasting summer with this armor.',
            'materials': [{
                'name': 'Summer Twilight Ticket',
                'quantity': '1'
            }, {
                'name': 'Dragonvein Crystal',
                'quantity': '1'
            }, ],
            'cost': '250'
        },
        'body': {
            'name': 'Felyne Aloha Shirt ⍺',
            'icon': require('./assets/palico/aloha_set_alpha_body.png'),
            'rarity': '5',
            'defense': '36',
            'vsFire': '1',
            'vsWater': '4',
            'vsThunder': '1',
            'vsIce': '1',
            'vsDragon': '1',
            'description': 'Requires a Summer Twilight Ticket to craft. Armor that\'ll let your Palico enjoy an eternal summer.',
            'materials': [{
                'name': 'Summer Twilight Ticket',
                'quantity': '1'
            }, {
                'name': 'Dragonvein Crystal',
                'quantity': '1'
            }, ],
            'cost': '250'
        },
        'totalDefense': '72',
        'totalFireDefense': '2',
        'totalWaterDefense': '8',
        'totalThunderDefense': '2',
        'totalIceDefense': '2',
        'totalDragonDefense': '2',
    },
    {
        'name': 'Ghost Set ⍺',
        'weapon': {
            'name': 'Felyne Jack-o\'-Lantern ⍺',
            'icon': require('./assets/palico/ghost_alpha_weapon.png'),
            'rarity': '6',
            'attackMelee': '44',
            'attackRanged': '36',
            'attackType': 'Blunt',
            'element': 'Fire 240',
            'affinity': '0%',
            'description': 'Requires an Autumn Harvest Ticket to craft. A weapon that\'ll let your Palico enjoy trick or treating.',
            'materials': [{
                'name': 'Autumn Harvest Ticket',
                'quantity': '1'
            }, {
                'name': 'Carbalite Ore',
                'quantity': '1'
            }, ],
            'cost': '400'
        },
        'head': {
            'name': 'Felyne Meowloween Mask ⍺',
            'icon': require('./assets/palico/ghost_alpha_helm.png'),
            'rarity': '6',
            'defense': '42',
            'vsFire': '4',
            'vsWater': '1',
            'vsThunder': '1',
            'vsIce': '1',
            'vsDragon': '1',
            'description': 'Requires an Autumn Harvest Ticket to craft. Get scheming with this armor.',
            'materials': [{
                'name': 'Autumn Harvest Ticket',
                'quantity': '1'
            }, {
                'name': 'Carbalite Ore',
                'quantity': '1'
            }, ],
            'cost': '300'
        },
        'body': {
            'name': 'Felyne Ghost Garb ⍺',
            'icon': require('./assets/palico/ghost_alpha_body.png'),
            'rarity': '6',
            'defense': '42',
            'vsFire': '4',
            'vsWater': '1',
            'vsThunder': '1',
            'vsIce': '1',
            'vsDragon': '1',
            'description': 'Requires an Autumn Harvest Ticket to craft. Armor that\'ll let your Palico enjoy trick or treating.',
            'materials': [{
                'name': 'Autumn Harvest Ticket',
                'quantity': '1'
            }, {
                'name': 'Carbalite Ore',
                'quantity': '1'
            }, ],
            'cost': '300'
        },
        'totalDefense': '84',
        'totalFireDefense': '8',
        'totalWaterDefense': '2',
        'totalThunderDefense': '2',
        'totalIceDefense': '2',
        'totalDragonDefense': '2',
    },
    {
        'name': 'Snow Set ⍺',
        'weapon': {
            'name': 'Felyne Snowcat Bell ⍺',
            'icon': require('./assets/palico/snow_set_alpha_weapon.png'),
            'rarity': '6',
            'attackMelee': '50',
            'attackRanged': '40',
            'attackType': 'Blunt',
            'element': 'Ice 240',
            'affinity': '0%',
            'description': 'Requires a Winter Star Ticket to craft. Jingle some bells of your own with this weapon!',
            'materials': [{
                'name': 'Winter Star Ticket',
                'quantity': '1'
            }, {
                'name': 'Carbalite Ore',
                'quantity': '1'
            }, ],
            'cost': '400'
        },
        'head': {
            'name': 'Felyne Snowcat Head ⍺',
            'icon': require('./assets/palico/snow_set_alpha_head.png'),
            'rarity': '6',
            'defense': '46',
            'vsFire': '1',
            'vsWater': '1',
            'vsThunder': '1',
            'vsIce': '4',
            'vsDragon': '1',
            'description': 'Requires a Winter Star Ticket to craft. Enjoy the winter festivities in a costume modeled after a snowcat!',
            'materials': [{
                'name': 'Winter Star Ticket',
                'quantity': '1'
            }, {
                'name': 'Carbalite Ore',
                'quantity': '1'
            }, ],
            'cost': '300'
        },
        'body': {
            'name': 'Felyne Snowcat Suit ⍺',
            'icon': require('./assets/palico/snow_set_alpha_body.png'),
            'rarity': '46',
            'defense': '1',
            'vsFire': '1',
            'vsWater': '1',
            'vsThunder': '1',
            'vsIce': '4',
            'vsDragon': '1',
            'description': 'Requires a Winter Star Ticket to craft. Enjoy the winter festivities in a costume modeled after a snowcat!',
            'materials': [{
                'name': 'Winter Star Ticket',
                'quantity': '1'
            }, {
                'name': 'Carbalite Ore',
                'quantity': '1'
            }, ],
            'cost': '300'
        },
        'totalDefense': '92',
        'totalFireDefense': '2',
        'totalWaterDefense': '2',
        'totalThunderDefense': '2',
        'totalIceDefense': '8',
        'totalDragonDefense': '2',
    },
    {
        'name': 'Moogle ⍺',
        'weapon': {
            'name': 'Gold Chocobo Rod ⍺',
            'icon': require('./assets/palico/moogle_alpha_weapon.png'),
            'rarity': '8',
            'attackMelee': '40',
            'attackRanged': '55',
            'attackType': 'Blunt',
            'element': 'Dragon 360',
            'elderseal': 'Average',
            'affinity': '0%',
            'defenseBonus': '+20',
            'description': 'A shiny gold chocobo weapon for your Palico. Wielded by the one known as Good King Moggle Mog XII.',
            'materials': [{
                'name': 'Behemoth Bone',
                'quantity': '1'
            }, {
                'name': 'Behemoth Shearclaw',
                'quantity': '1'
            }, {
                'name': 'Aetheryte Shard',
                'quantity': '1'
            }, ],
            'cost': '600'
        },
        'totalDefense': '0',
        'totalFireDefense': '0',
        'totalWaterDefense': '0',
        'totalThunderDefense': '0',
        'totalIceDefense': '0',
        'totalDragonDefense': '0',
    },
    {
        'name': 'Star Set ⍺',
        'weapon': {
            'name': 'Felyne Star Mic Stand ⍺',
            'icon': require('./assets/palico/star_set_weapon.png'),
            'rarity': '7',
            'attackMelee': '56',
            'attackRanged': '44',
            'attackType': 'Blunt',
            'element': 'Thunder 270',
            'affinity': '0%',
            'description': 'Requires an Appreciation Ticket to craft. Get your groove on and shine during the Appreciation Fest!',
            'materials': [{
                'name': 'Appreciation Ticket',
                'quantity': '3'
            }, {
                'name': 'Novacrystal',
                'quantity': '1'
            }, ],
            'cost': '450'
        },
        'head': {
            'name': 'Felyne Star Head ⍺',
            'icon': require('./assets/palico/star_set_helm.png'),
            'rarity': '7',
            'defense': '50',
            'vsFire': '1',
            'vsWater': '1',
            'vsThunder': '1',
            'vsIce': '1',
            'vsDragon': '4',
            'description': 'Requires an Appreciation Ticket to craft. Get your groove on and shine during the Appreciation Fest!',
            'materials': [{
                'name': 'Appreciation Ticket',
                'quantity': '3'
            }, {
                'name': 'Novacrystal',
                'quantity': '1'
            }, ],
            'cost': '350'
        },
        'body': {
            'name': 'Felyne Starstruck Suit ⍺',
            'icon': require('./assets/palico/star_set_body.png'),
            'rarity': '7',
            'defense': '50',
            'vsFire': '1',
            'vsWater': '1',
            'vsThunder': '1',
            'vsIce': '1',
            'vsDragon': '4',
            'description': 'Requires an Appreciation Ticket to craft. Get your groove on and shine during the Appreciation Fest!',
            'materials': [{
                'name': 'Appreciation Ticket',
                'quantity': '3'
            }, {
                'name': 'Novacrystal',
                'quantity': '1'
            }, ],
            'cost': '350'
        },
        'totalDefense': '100',
        'totalFireDefense': '2',
        'totalWaterDefense': '2',
        'totalThunderDefense': '2',
        'totalIceDefense': '2',
        'totalDragonDefense': '8',
    },
    {
        'name': 'Nekker ⍺',
        'weapon': {
            'name': 'Cursed Staff ⍺',
            'icon': require('./assets/palico/nekker_alpha_weapon.png'),
            'rarity': '8',
            'attackMelee': '78',
            'attackRanged': '32',
            'attackType': 'Blunt',
            'element': 'None',
            'affinity': '-15%',
            'description': 'A magic staff made of monster bone. Grants fighting spirit to even the most craven of cowards.',
            'materials': [{
                'name': 'Nekker Card (Weapon)',
                'quantity': '1'
            }, ],
            'cost': '600'
        },
        'totalDefense': '0',
        'totalFireDefense': '0',
        'totalWaterDefense': '0',
        'totalThunderDefense': '0',
        'totalIceDefense': '0',
        'totalDragonDefense': '0',
    },
];

let masterRankPalicoArmors = [{
    'name': 'Duffel Set ⍺+',
    'weapon': {
        'name': 'Felyne Trekker Peckaxe ⍺+',
        'icon': require('./assets/palico/duffel_set_alpha_weapon.png'),
        'rarity': '9',
        'attackMelee': '50',
        'attackRanged': '20',
        'attackType': 'Severing',
        'element': '-',
        'affinity': '0%',
        'description': 'An essential weapon for Palicoes venturing into cold regions. Shaped like a Kulu-Ya-Ku.',
        'materials': [{
            'name': 'Eltalite Ore',
            'quantity': '1'
        }, ],
        'cost': '400'
    },
    'head': {
        'name': 'Felyne Duffel Hood ⍺+',
        'icon': require('./assets/palico/duffel_set_alpha_helm.png'),
        'rarity': '9',
        'defense': '74',
        'vsFire': '0',
        'vsWater': '0',
        'vsThunder': '2',
        'vsIce': '2',
        'vsDragon': '0',
        'description': 'Headgear that protects your Palico against the cold by covering its ears with a comfy hood.',
        'materials': [{
            'name': 'Prized Pelt',
            'quantity': '1'
        }, ],
        'cost': '350'
    },
    'body': {
        'name': 'Felyne Duffel Coat ⍺+',
        'icon': require('./assets/palico/duffel_set_alpha_body.png'),
        'rarity': '9',
        'defense': '74',
        'vsFire': '0',
        'vsWater': '0',
        'vsThunder': '2',
        'vsIce': '2',
        'vsDragon': '0',
        'description': 'Armor that protects your Palico against the cold using light and warm materials.',
        'materials': [{
            'name': 'Prized Pelt',
            'quantity': '1'
        }, ],
        'cost': '350'
    },
    'totalDefense': '148',
    'totalFireDefense': '0',
    'totalWaterDefense': '0',
    'totalThunderDefense': '4',
    'totalIceDefense': '4',
    'totalDragonDefense': '0',
}, {
    'name': 'Bone Set ⍺+',
    'weapon': {
        'name': 'Felyne Bone Hammer ⍺+',
        'icon': require('./assets/palico/bone_weapon.png'),
        'rarity': '9',
        'attackMelee': '55',
        'attackRanged': '15',
        'attackType': 'Blunt',
        'element': '-',
        'affinity': '0%',
        'description': 'Made from easy-to-come-by bone, this hammer is lightweight yet sturdy.',
        'materials': [{
            'name': 'Thick Bone',
            'quantity': '1'
        }, ],
        'cost': '400'
    },
    'head': {
        'name': 'Felyne Bone Helm ⍺+',
        'icon': require('./assets/palico/bone_helm.png'),
        'rarity': '9',
        'defense': '76',
        'vsFire': '2',
        'vsWater': '0',
        'vsThunder': '2',
        'vsIce': '0',
        'vsDragon': '2',
        'description': 'Headgear built around a monster skull base. Donning it will awake the primal beast within.',
        'materials': [{
            'name': 'Thick Bone',
            'quantity': '1'
        }, ],
        'cost': '350'
    },
    'body': {
        'name': 'Felyne Bone Mail ⍺+',
        'icon': require('./assets/palico/bone_body.png'),
        'rarity': '9',
        'defense': '76',
        'vsFire': '2',
        'vsWater': '0',
        'vsThunder': '2',
        'vsIce': '0',
        'vsDragon': '2',
        'description': 'A certain primal scent clings to this set of body armor. Made form a mix of monster bones.',
        'materials': [{
            'name': 'Thick Bone',
            'quantity': '1'
        }, ],
        'cost': '350'
    },
    'totalDefense': '152',
    'totalFireDefense': '4',
    'totalWaterDefense': '0',
    'totalThunderDefense': '4',
    'totalIceDefense': '0',
    'totalDragonDefense': '4',
}, {
    'name': 'Alloy Set ⍺+',
    'weapon': {
        'name': 'Felyne Iron Sword ⍺+',
        'icon': require('./assets/palico/alloy_weapon.png'),
        'rarity': '9',
        'attackMelee': '45',
        'attackRanged': '25',
        'attackType': 'Severing',
        'element': '-',
        'affinity': '0%',
        'description': 'A large sword made by smelting down fine ore and hammering it for three days straight. Certified lethal.',
        'materials': [{
            'name': 'Meldspar Ore',
            'quantity': '1'
        }, ],
        'cost': '400'
    },
    'head': {
        'name': 'Felyne Alloy Helm ⍺+',
        'icon': require('./assets/palico/alloy_helm.png'),
        'rarity': '9',
        'defense': '78',
        'vsFire': '-2',
        'vsWater': '0',
        'vsThunder': '-2',
        'vsIce': '-2',
        'vsDragon': '0',
        'description': 'A helmet made by smelting fine ore, then pounding it for three days straight. Certified strong.',
        'materials': [{
            'name': 'Meldspar Ore',
            'quantity': '1'
        }, ],
        'cost': '350'
    },
    'body': {
        'name': 'Felyne Alloy Mail ⍺+',
        'icon': require('./assets/palico/alloy_body.png'),
        'rarity': '9',
        'defense': '156',
        'vsFire': '-4',
        'vsWater': '0',
        'vsThunder': '-4',
        'vsIce': '-4',
        'vsDragon': '0',
        'description': 'Body armor made by smelting fine ore, then pounding it for three days straight. Guaranteed tough.',
        'materials': [{
            'name': 'Meldspar Ore',
            'quantity': '1'
        }, ],
        'cost': '350'
    },
    'totalDefense': '156',
    'totalFireDefense': '-4',
    'totalWaterDefense': '0',
    'totalThunderDefense': '-4',
    'totalIceDefense': '-4',
    'totalDragonDefense': '0',
}, {
    'name': 'Jagras Set ⍺+',
    'weapon': {
        'name': 'Felyne Jag Gunhammer ⍺+',
        'icon': require('./assets/palico/jagras_weapon.png'),
        'rarity': '9',
        'attackMelee': '60',
        'attackRanged': '20',
        'attackType': 'Blunt',
        'element': '-',
        'affinity': '0%',
        'description': 'A Great Jagras weapon. It looks like a gun but can\'t shoot. Made exclusively for bonking.',
        'materials': [{
            'name': 'Great Jagras Hardclaw',
            'quantity': '1'
        }, ],
        'cost': '400'
    },
    'head': {
        'name': 'Felyne Jagras Helm ⍺+',
        'icon': require('./assets/palico/jagras_helm.png'),
        'rarity': '9',
        'defense': '80',
        'vsFire': '-2',
        'vsWater': '2',
        'vsThunder': '-1',
        'vsIce': '-1',
        'vsDragon': '1',
        'description': 'Your palico might start pawing at this helm\'s shaggy Great Jagras fur. It\'s a feature, we promise!',
        'materials': [{
            'name': 'Great Jagras Thickhide',
            'quantity': '1'
        }, ],
        'cost': '350'
    },
    'body': {
        'name': 'Felyne Jagras Mail ⍺+',
        'icon': require('./assets/palico/jagras_body.png'),
        'rarity': '9',
        'defense': '80',
        'vsFire': '-2',
        'vsWater': '2',
        'vsThunder': '-1',
        'vsIce': '-1',
        'vsDragon': '1',
        'description': 'The strong yet supple fur on this shaggy Great Jagras armor offers solid protection.',
        'materials': [{
            'name': 'Great Jagras Shard',
            'quantity': '1'
        }, ],
        'cost': '350'
    },
    'totalDefense': '160',
    'totalFireDefense': '-4',
    'totalWaterDefense': '4',
    'totalThunderDefense': '-2',
    'totalIceDefense': '-2',
    'totalDragonDefense': '2',
}, {
    'name': 'Kulu Set ⍺+',
    'weapon': {
        'name': 'Felyne Kulu Lute ⍺+',
        'icon': require('./assets/palico/kulu_weapon.png'),
        'rarity': '9',
        'attackMelee': '50',
        'attackRanged': '20',
        'attackType': 'Blunt',
        'element': '-',
        'affinity': '25%',
        'description': 'Made from Kulu-Ya-Ku parts, each note plucked from its strings drips with sweet nostalgia.',
        'materials': [{
            'name': 'Kulu-Ya-Ku Shard',
            'quantity': '1'
        }, ],
        'cost': '400'
    },
    'head': {
        'name': 'Felyne Kulu Turban ⍺+',
        'icon': require('./assets/palico/kulu_helm.png'),
        'rarity': '9',
        'defense': '80',
        'vsFire': '0',
        'vsWater': '-3',
        'vsThunder': '0',
        'vsIce': '1',
        'vsDragon': '0',
        'description': 'It may seem like any ordinary turban, but its Kulu-Ya-Ku hide make offers surprising defense.',
        'materials': [{
            'name': 'Large Kulu-Ya-Ku Plume',
            'quantity': '1'
        }, ],
        'cost': '350'
    },
    'body': {
        'name': 'Felyne Kulu Vest ⍺+',
        'icon': require('./assets/palico/kulu_body.png'),
        'rarity': '9',
        'defense': '80',
        'vsFire': '0',
        'vsWater': '-3',
        'vsThunder': '0',
        'vsIce': '1',
        'vsDragon': '0',
        'description': 'Made of soft, durable Kulu-Ya-Ku hide, this armor won\'t restrict your Palico\'s motion.',
        'materials': [{
            'name': 'Kulu-Ya-Ku Thickhide',
            'quantity': '1'
        }, ],
        'cost': '350'
    },
    'totalDefense': '160',
    'totalFireDefense': '0',
    'totalWaterDefense': '-6',
    'totalThunderDefense': '0',
    'totalIceDefense': '2',
    'totalDragonDefense': '0',
}, {
    'name': 'Pukei Set ⍺+',
    'weapon': {
        'name': 'Felyne Pukei Bow ⍺+',
        'icon': require('./assets/palico/pukei_weapon.png'),
        'rarity': '9',
        'attackMelee': '45',
        'attackRanged': '30',
        'attackType': 'Blunt',
        'element': 'Poison 100',
        'affinity': '0%',
        'description': 'Made from Pukei-Pukei parts. Despite a whimsical design it doesn\'t actually fire arrows. Bonking only.',
        'materials': [{
            'name': 'Large Pukei-Pukei Sac',
            'quantity': '1'
        }, ],
        'cost': '400'
    },
    'head': {
        'name': 'Felyne Pukei Hood ⍺+',
        'icon': require('./assets/palico/pukei_helm.png'),
        'rarity': '9',
        'defense': '80',
        'vsFire': '0',
        'vsWater': '3',
        'vsThunder': '-3',
        'vsIce': '0',
        'vsDragon': '1',
        'description': 'This quirky Pukei-Pukei hood\'s design falls somewhere between cute and creepy.',
        'materials': [{
            'name': 'Pukei-Pukei Shard',
            'quantity': '1'
        }, ],
        'cost': '350'
    },
    'body': {
        'name': 'Felyne Pukei Mantle ⍺+',
        'icon': require('./assets/palico/pukei_body.png'),
        'rarity': '9',
        'defense': '80',
        'vsFire': '0',
        'vsWater': '3',
        'vsThunder': '-3',
        'vsIce': '0',
        'vsDragon': '1',
        'description': 'This Pukei-Pukei armor\'s weirdo design makes it consistently popular with weirdo Palicoes.',
        'materials': [{
            'name': 'Pukei-Pukei Fellwing',
            'quantity': '1'
        }, ],
        'cost': '350'
    },
    'totalDefense': '160',
    'totalFireDefense': '0',
    'totalWaterDefense': '6',
    'totalThunderDefense': '-6',
    'totalIceDefense': '0',
    'totalDragonDefense': '2',
}, {
    'name': 'Barroth Set ⍺+',
    'weapon': {
        'name': 'Felyne Barroth Mace ⍺+',
        'icon': require('./assets/palico/barroth_weapon.png'),
        'rarity': '9',
        'attackMelee': '60',
        'attackRanged': '25',
        'attackType': 'Blunt',
        'element': '-',
        'affinity': '-20%',
        'defenseBonus': '+15',
        'description': 'Made with only the hardest Barroth parts, this weapon is capable of smashing boulders into gravel.',
        'materials': [{
            'name': 'Barroth Hardclaw',
            'quantity': '1'
        }, ],
        'cost': '400'
    },
    'head': {
        'name': 'Felyne Barroth Helm ⍺+',
        'icon': require('./assets/palico/barroth_helm.png'),
        'rarity': '9',
        'defense': '82',
        'vsFire': '-3',
        'vsWater': '-1',
        'vsThunder': '3',
        'vsIce': '-1',
        'vsDragon': '0',
        'description': 'Hard as aboulder, this Barroth headgear offers exceptional defense.',
        'materials': [{
            'name': 'Barroth Crown',
            'quantity': '1'
        }, ],
        'cost': '350'
    },
    'body': {
        'name': 'Felyne Barroth Mail ⍺+',
        'icon': require('./assets/palico/barroth_body.png'),
        'rarity': '9',
        'defense': '164',
        'vsFire': '-6',
        'vsWater': '-2',
        'vsThunder': '6',
        'vsIce': '-2',
        'vsDragon': '0',
        'description': 'This Barroth armor is hard as stone. Roll around in the mud and you\'ll be a Barroth pup!',
        'materials': [{
            'name': 'Barroth Cortex',
            'quantity': '1'
        }, ],
        'cost': '350'
    },
    'totalDefense': '164',
    'totalFireDefense': '-6',
    'totalWaterDefense': '-2',
    'totalThunderDefense': '6',
    'totalIceDefense': '-2',
    'totalDragonDefense': '0',
}, {
    'name': 'Jyura Set ⍺+',
    'weapon': {
        'name': 'Felyne Jyura Sword ⍺+',
        'icon': require('./assets/palico/jyura_weapon.png'),
        'rarity': '9',
        'attackMelee': '45',
        'attackRanged': '35',
        'attackType': 'Severing',
        'element': 'Water 160',
        'affinity': '0%',
        'description': 'Made from Jyuratodus parts. The strength of ancient swordsmen seeps into the wielder\'s paw pads.',
        'materials': [{
            'name': 'Jyuratodus Hardfang',
            'quantity': '1'
        }, ],
        'cost': '400'
    },
    'head': {
        'name': 'Felyne Jyura Helm ⍺+',
        'icon': require('./assets/palico/jyura_helm.png'),
        'rarity': '9',
        'defense': '82',
        'vsFire': '-1',
        'vsWater': '2',
        'vsThunder': '-3',
        'vsIce': '0',
        'vsDragon': '0',
        'description': 'The smell of mud lingers on this Jyuratodus helm, evoking memories of childhood playtime.',
        'materials': [{
            'name': 'Jyuratodus Grandfin',
            'quantity': '1'
        }, ],
        'cost': '350'
    },
    'body': {
        'name': 'Felyne Jyura Mail ⍺+',
        'icon': require('./assets/palico/jyura_body.png'),
        'rarity': '9',
        'defense': '82',
        'vsFire': '-1',
        'vsWater': '2',
        'vsThunder': '-3',
        'vsIce': '0',
        'vsDragon': '0',
        'description': 'Cracks run along this Jyuratodus armor, lending it a rough-hewn, sturdy feel.',
        'materials': [{
            'name': 'Jyuratodus Shard',
            'quantity': '1'
        }, ],
        'cost': '350'
    },
    'totalDefense': '164',
    'totalFireDefense': '-2',
    'totalWaterDefense': '4',
    'totalThunderDefense': '-6',
    'totalIceDefense': '0',
    'totalDragonDefense': '0',
}, {
    'name': 'Beo Set ⍺+',
    'weapon': {
        'name': 'Felyne Beo Board ⍺+',
        'icon': require('./assets/palico/beo_weapon.png'),
        'rarity': '9',
        'attackMelee': '55',
        'attackRanged': '30',
        'attackType': 'Blunt',
        'element': 'Ice 180',
        'affinity': '0%',
        'description': 'This Beotodus weapon packs much more punch than you\'d think. Handy for traversing snow, too!',
        'materials': [{
            'name': 'Beotodus Hardhorn',
            'quantity': '1'
        }, ],
        'cost': '400'
    },
    'head': {
        'name': 'Felyne Beo Goggles ⍺+',
        'icon': require('./assets/palico/beo_helm.png'),
        'rarity': '9',
        'defense': '82',
        'vsFire': '-3',
        'vsWater': '0',
        'vsThunder': '-2',
        'vsIce': '3',
        'vsDragon': '2',
        'description': 'Does your Palico like to walk on the wild side? Try this durable-yet-daring Beotodus helmet.',
        'materials': [{
            'name': 'Beotodus Cortex',
            'quantity': '1'
        }, ],
        'cost': '350'
    },
    'body': {
        'name': 'Felyne Beo Gear ⍺+',
        'icon': require('./assets/palico/beo_body.png'),
        'rarity': '9',
        'defense': '82',
        'vsFire': '-3',
        'vsWater': '0',
        'vsThunder': '-2',
        'vsIce': '3',
        'vsDragon': '2',
        'description': 'You\'ll be warm and safe in this Beotodus Palico gear, but you\'ll look cool and dangerous.',
        'materials': [{
            'name': 'Beotodus Shard',
            'quantity': '1'
        }, ],
        'cost': '350'
    },
    'totalDefense': '164',
    'totalFireDefense': '-6',
    'totalWaterDefense': '0',
    'totalThunderDefense': '-4',
    'totalIceDefense': '6',
    'totalDragonDefense': '4',
}, {
    'name': 'Kadachi Set ⍺+',
    'weapon': {
        'name': 'Felyne Kadachi Fork ⍺+',
        'icon': require('./assets/palico/kadachi_weapon.png'),
        'rarity': '9',
        'attackMelee': '40',
        'attackRanged': '30',
        'attackType': 'Severing',
        'element': 'Thunder 300',
        'affinity': '15%',
        'description': 'Made from Tobi-Kadachi parts. It may look like an adorable Felyne, but the ears are long and sharp.',
        'materials': [{
            'name': 'Tobi-Kadachi Hardclaw',
            'quantity': '1'
        }, ],
        'cost': '400'
    },
    'head': {
        'name': 'Felyne Kadachi Hood ⍺+',
        'icon': require('./assets/palico/kadachi_helm.png'),
        'rarity': '9',
        'defense': '82',
        'vsFire': '0',
        'vsWater': '-3',
        'vsThunder': '3',
        'vsIce': '0',
        'vsDragon': '0',
        'description': 'Complete with fluffy ears, this Tobi-Kadachi hood is so cute, you\'ll never let your Palico take it off.',
        'materials': [{
            'name': 'Tobi-Kadachi Shard',
            'quantity': '1'
        }, ],
        'cost': '350'
    },
    'body': {
        'name': 'Felyne Kadachi Suit ⍺+',
        'icon': require('./assets/palico/kadachi_body.png'),
        'rarity': '9',
        'defense': '82',
        'vsFire': '0',
        'vsWater': '-3',
        'vsThunder': '3',
        'vsIce': '0',
        'vsDragon': '0',
        'description': 'Your Palico will look absolutely adorable in this... That is until it\'s covered in monster guts.',
        'materials': [{
            'name': 'Tobi-Kadachi Thickfur',
            'quantity': '1'
        }, ],
        'cost': '350'
    },
    'totalDefense': '164',
    'totalFireDefense': '0',
    'totalWaterDefense': '-6',
    'totalThunderDefense': '6',
    'totalIceDefense': '0',
    'totalDragonDefense': '0',
}, {
    'name': 'Ladybug Set ⍺+',
    'weapon': {
        'name': 'Kitty-of-the-Valley Rod ⍺+',
        'icon': require('./assets/palico/ladybug_weapon.png'),
        'rarity': '9',
        'attackMelee': '45',
        'attackRanged': '25',
        'attackType': 'Blunt',
        'element': 'Paralysis 90',
        'affinity': '0%',
        'description': 'This paralyzing weapon glows in the dark thanks to the swarm of thunderbugs living in the bud.',
        'materials': [{
            'name': 'Monster Essence',
            'quantity': '1'
        }, {
            'name': 'Great Hornfly',
            'quantity': '1'
        }, {
            'name': 'Ultraplegia Sac',
            'quantity': '1'
        },],
        'cost': '400'
    },
    'head': {
        'name': 'Felyne Ladybug Cap ⍺+',
        'icon': require('./assets/palico/ladybug_helm.png'),
        'rarity': '9',
        'defense': '78',
        'vsFire': '-1',
        'vsWater': '-1',
        'vsThunder': '2',
        'vsIce': '0',
        'vsDragon': '2',
        'description': 'Headgear for the Palico who demands function AND cuteness. The best part? Those antennae.',
        'materials': [{
            'name': 'Great Hornfly',
            'quantity': '1'
        }, {
            'name': 'Vespoid Razorwing',
            'quantity': '1'
        }, ],
        'cost': '350'
    },
    'body': {
        'name': 'Felyne Ladybug Wings ⍺+',
        'icon': require('./assets/palico/ladybug_body.png'),
        'rarity': '9',
        'defense': '78',
        'vsFire': '-1',
        'vsWater': '-1',
        'vsThunder': '2',
        'vsIce': '0',
        'vsDragon': '2',
        'description': 'The only flaw in this adorably spotted armor\'s design is that it doesn\'t let you fly.',
        'materials': [{
            'name': 'Great Hornfly',
            'quantity': '1'
        }, {
            'name': 'Vespoid Razorwing',
            'quantity': '1'
        }, ],
        'cost': '350'
    },
    'totalDefense': '156',
    'totalFireDefense': '-2',
    'totalWaterDefense': '-2',
    'totalThunderDefense': '4',
    'totalIceDefense': '0',
    'totalDragonDefense': '4',
}, {
    'name': 'Banbaro Set ⍺+',
    'weapon': {
        'name': 'Felyne Grimalkyne Doll ⍺+',
        'icon': require('./assets/palico/banbaro_weapon.png'),
        'rarity': '9',
        'attackMelee': '80',
        'attackRanged': '30',
        'attackType': 'Blunt',
        'element': '-',
        'affinity': '0%',
        'description': 'Rumor has it this sweet little stuffed toy is among the deadliest creations of all time.',
        'materials': [{
            'name': 'Banbaro Great Horn',
            'quantity': '1'
        }, ],
        'cost': '500'
    },
    'head': {
        'name': 'Felyne Banbaro Hood ⍺+',
        'icon': require('./assets/palico/banbaro_helm.png'),
        'rarity': '9',
        'defense': '86',
        'vsFire': '-2',
        'vsWater': '2',
        'vsThunder': '-1',
        'vsIce': '3',
        'vsDragon': '-3',
        'description': 'The ears on this Banbaro hood are really horns, while the fur keeps your Palico\'s ears toasty.',
        'materials': [{
            'name': 'Banbaro Cortex',
            'quantity': '1'
        }, ],
        'cost': '400'
    },
    'body': {
        'name': 'Felyne Banbaro Suit ⍺+',
        'icon': require('./assets/palico/banbaro_body.png'),
        'rarity': '9',
        'defense': '86',
        'vsFire': '-2',
        'vsWater': '2',
        'vsThunder': '-1',
        'vsIce': '3',
        'vsDragon': '-3',
        'description': 'Banbaro Palico gear with two crucial descriptors: cozy and cute. Hard to take off, though.',
        'materials': [{
            'name': 'Banbaro Chine',
            'quantity': '1'
        }, ],
        'cost': '400'
    },
    'totalDefense': '172',
    'totalFireDefense': '-4',
    'totalWaterDefense': '4',
    'totalThunderDefense': '-2',
    'totalIceDefense': '6',
    'totalDragonDefense': '-6',
}, {
    'name': 'Anja Set ⍺+',
    'weapon': {
        'name': 'F Anja Bonehammer ⍺+',
        'icon': require('./assets/palico/anja_weapon.png'),
        'rarity': '9',
        'attackMelee': '70',
        'attackRanged': '35',
        'attackType': 'Blunt',
        'element': 'Fire 320',
        'affinity': '-30%',
        'description': 'Made from Anjanath parts. It was made by lashing together huge bones. This hammer hits hard and heavy.',
        'materials': [{
            'name': 'Anjanath Hardfang',
            'quantity': '1'
        }, ],
        'cost': '500'
    },
    'head': {
        'name': 'Felyne Anja Helm ⍺+',
        'icon': require('./assets/palico/anja_helm.png'),
        'rarity': '9',
        'defense': '86',
        'vsFire': '3',
        'vsWater': '-3',
        'vsThunder': '-1',
        'vsIce': '-1',
        'vsDragon': '0',
        'description': 'This helm captures the furr-ocious spirit of the Anjanath purr-fectly... only it\'s a heck of a lot cuter.',
        'materials': [{
            'name': 'Anjanath Shard',
            'quantity': '1'
        }, ],
        'cost': '400'
    },
    'body': {
        'name': 'Felyne Anja Mail ⍺+',
        'icon': require('./assets/palico/anja_body.png'),
        'rarity': '9',
        'defense': '86',
        'vsFire': '3',
        'vsWater': '-3',
        'vsThunder': '-1',
        'vsIce': '-1',
        'vsDragon': '0',
        'description': 'Large and heavy, this gear offers complete purrotection while capturing the Anjanath\'s fierce fighting spirit.',
        'materials': [{
            'name': 'Anjanath Fur',
            'quantity': '1'
        }, ],
        'cost': '400'
    },
    'totalDefense': '172',
    'totalFireDefense': '6',
    'totalWaterDefense': '-6',
    'totalThunderDefense': '-2',
    'totalIceDefense': '-2',
    'totalDragonDefense': '0',
}, {
    'name': 'Rathian Set ⍺+',
    'weapon': {
        'name': 'F Rathian Rapier ⍺+',
        'icon': require('./assets/palico/rathian_weapon.png'),
        'rarity': '9',
        'attackMelee': '55',
        'attackRanged': '40',
        'attackType': 'Severing',
        'element': 'Poison 120',
        'affinity': '0%',
        'description': 'Made from Rathian parts. The strength of a queen slumbers in this gorgeous emerald sword.',
        'materials': [{
            'name': 'Rathian Surspike',
            'quantity': '1'
        }, ],
        'cost': '500'
    },
    'head': {
        'name': 'Felyne Rathian Helm ⍺+',
        'icon': require('./assets/palico/rathian_helm.png'),
        'rarity': '9',
        'defense': '86',
        'vsFire': '2',
        'vsWater': '0',
        'vsThunder': '-2',
        'vsIce': '0',
        'vsDragon': '-3',
        'description': 'Regal and fierce, this Rathian helm masterwork combines high defense and fire resistance.',
        'materials': [{
            'name': 'Rathian Shard',
            'quantity': '1'
        }, ],
        'cost': '400'
    },
    'body': {
        'name': 'Felyne Rathian Mail ⍺+',
        'icon': require('./assets/palico/rathian_body.png'),
        'rarity': '9',
        'defense': '86',
        'vsFire': '2',
        'vsWater': '0',
        'vsThunder': '-2',
        'vsIce': '0',
        'vsDragon': '-3',
        'description': 'Rathian armor made of strong, supple outer plating. It evokes the ire and grandeur of a queen.',
        'materials': [{
            'name': 'Rathian Cortex',
            'quantity': '1'
        }, ],
        'cost': '400'
    },
    'totalDefense': '172',
    'totalFireDefense': '4',
    'totalWaterDefense': '0',
    'totalThunderDefense': '-4',
    'totalIceDefense': '0',
    'totalDragonDefense': '-6',
}, {
    'name': 'Lumu Set ⍺+',
    'weapon': {
        'name': 'Felyne Lumu Pawpads ⍺+',
        'icon': require('./assets/palico/lumu_weapon.png'),
        'rarity': '9',
        'attackMelee': '60',
        'attackRanged': '40',
        'attackType': 'Blunt',
        'element': '-',
        'affinity': '0%',
        'description': 'Made from Paolumu parts. The Felyne paw motif is cute, but those pads are brutally hard.',
        'materials': [{
            'name': 'Paolumu Cortex',
            'quantity': '1'
        }, ],
        'cost': '500'
    },
    'head': {
        'name': 'Felyne Lumu Hat ⍺+',
        'icon': require('./assets/palico/lumu_helm.png'),
        'rarity': '9',
        'defense': '86',
        'vsFire': '-3',
        'vsWater': '2',
        'vsThunder': '0',
        'vsIce': '1',
        'vsDragon': '0',
        'description': 'This Paolumu headgear doubles as an airbag to protect your Palico from sudden impact.',
        'materials': [{
            'name': 'Paolumu Shard',
            'quantity': '1'
        }, ],
        'cost': '400'
    },
    'body': {
        'name': 'Felyne Lumu Cape ⍺+',
        'icon': require('./assets/palico/lumu_body.png'),
        'rarity': '9',
        'defense': '86',
        'vsFire': '-3',
        'vsWater': '2',
        'vsThunder': '0',
        'vsIce': '1',
        'vsDragon': '0',
        'description': 'This Paolumu cape feels light as cotton but offers sturdy protection. Even fade-resistant!',
        'materials': [{
            'name': 'Paolumu Thickfur',
            'quantity': '1'
        }, ],
        'cost': '400'
    },
    'totalDefense': '172',
    'totalFireDefense': '-6',
    'totalWaterDefense': '4',
    'totalThunderDefense': '0',
    'totalIceDefense': '2',
    'totalDragonDefense': '0',
}, {
    'name': 'Baan Set ⍺+',
    'weapon': {
        'name': 'Felyne Baan Ball ⍺+',
        'icon': require('./assets/palico/baan_weapon.png'),
        'rarity': '9',
        'attackMelee': '65',
        'attackRanged': '20',
        'attackType': 'Blunt',
        'element': 'Sleep 100',
        'affinity': '0%',
        'defenseBonus': '+20',
        'description': 'Made from Radobaan parts. It\'s an engineering marvel, made using the very latest in crafting technology.',
        'materials': [{
            'name': 'Large Wyvern Bonemass',
            'quantity': '1'
        }, ],
        'cost': '500'
    },
    'head': {
        'name': 'Felyne Baan Helm ⍺+',
        'icon': require('./assets/palico/baan_helm.png'),
        'rarity': '9',
        'defense': '88',
        'vsFire': '0',
        'vsWater': '2',
        'vsThunder': '0',
        'vsIce': '-1',
        'vsDragon': '-2',
        'description': 'This Radobaan headgear feels big and bulky, but its translucent top offers excellent visibility.',
        'materials': [{
            'name': 'Radobaan Oilshell+',
            'quantity': '1'
        }, ],
        'cost': '400'
    },
    'body': {
        'name': 'Felyne Baan Suit ⍺+',
        'icon': require('./assets/palico/baan_body.png'),
        'rarity': '9',
        'defense': '88',
        'vsFire': '0',
        'vsWater': '2',
        'vsThunder': '0',
        'vsIce': '-1',
        'vsDragon': '-2',
        'description': 'Palicoes in this Radobaan gear get used to being asked "Can you even move in that thing?"',
        'materials': [{
            'name': 'Radobaan Shard',
            'quantity': '1'
        }, ],
        'cost': '400'
    },
    'totalDefense': '176',
    'totalFireDefense': '0',
    'totalWaterDefense': '4',
    'totalThunderDefense': '0',
    'totalIceDefense': '-2',
    'totalDragonDefense': '-4',
}, {
    'name': 'Death Set ⍺+',
    'weapon': {
        'name': 'F Deathgear Scythe ⍺+',
        'icon': require('./assets/palico/death_weapon.png'),
        'rarity': '9',
        'attackMelee': '60',
        'attackRanged': '35',
        'attackType': 'Severing',
        'element': 'Dragon 280',
        'affinity': '0%',
        'description': 'A fearsome scythe that cleaves away consciousness. Even the largest prey fell instantly into restful slumber.',
        'materials': [{
            'name': 'Sinister Cloth',
            'quantity': '1'
        }, {
            'name': 'Heavy Anjanath Nosebone',
            'quantity': '1'
        }, ],
        'cost': '500'
    },
    'head': {
        'name': 'Felyne Deathgear Hood ⍺+',
        'icon': require('./assets/palico/death_helm.png'),
        'rarity': '9',
        'defense': '84',
        'vsFire': '3',
        'vsWater': '2',
        'vsThunder': '-2',
        'vsIce': '3',
        'vsDragon': '-4',
        'description': 'This deathly hood would scare the pants right off of your Palico, if they actually wore pants.',
        'materials': [{
            'name': 'Sinister Cloth',
            'quantity': '1'
        }, {
            'name': 'Radobaan Oilshell+',
            'quantity': '1'
        }, ],
        'cost': '400'
    },
    'body': {
        'name': 'Felyne Deathgear Cowl ⍺+',
        'icon': require('./assets/palico/death_body.png'),
        'rarity': '9',
        'defense': '84',
        'vsFire': '3',
        'vsWater': '2',
        'vsThunder': '-2',
        'vsIce': '3',
        'vsDragon': '-4',
        'description': 'A spooky black shroud. Possible cursed. The wearer experiences constant chills up their spine.',
        'materials': [{
            'name': 'Sinister Cloth',
            'quantity': '1'
        }, {
            'name': 'Rathian Shard',
            'quantity': '1'
        }, ],
        'cost': '400'
    },
    'totalDefense': '168',
    'totalFireDefense': '6',
    'totalWaterDefense': '4',
    'totalThunderDefense': '-4',
    'totalIceDefense': '6',
    'totalDragonDefense': '-8',
}, {
    'name': 'Boaboa Set ⍺+',
    'weapon': {
        'name': 'F Boaboa Bonehammer ⍺+',
        'icon': require('./assets/palico/boaboa_weapon.png'),
        'rarity': '9',
        'attackMelee': '75',
        'attackRanged': '30',
        'attackType': 'Blunt',
        'element': '-',
        'affinity': '0%',
        'defenseBonus': '+25',
        'description': 'Boaboa weapon. Crafting this weapon with the bones of your prey is a rite of passage.',
        'materials': [{
            'name': 'Boaboa Ticket',
            'quantity': '1'
        }, {
            'name': 'Cortos Hardclaw',
            'quantity': '1'
        }, ],
        'cost': '500'
    },
    'head': {
        'name': 'Felyne Boaboa Mask ⍺+',
        'icon': require('./assets/palico/boaboa_helm.png'),
        'rarity': '9',
        'defense': '84',
        'vsFire': '-1',
        'vsWater': '2',
        'vsThunder': '-2',
        'vsIce': '3',
        'vsDragon': '4',
        'description': 'Boaboa headgear. A sign of friendship from one hunter to another.',
        'materials': [{
            'name': 'Boaboa Ticket',
            'quantity': '1'
        }, {
            'name': 'Anteka Antler',
            'quantity': '1'
        }, ],
        'cost': '400'
    },
    'body': {
        'name': 'Felyne Boaboa Coat ⍺+',
        'icon': require('./assets/palico/boaboa_body.png'),
        'rarity': '9',
        'defense': '84',
        'vsFire': '-1',
        'vsWater': '2',
        'vsThunder': '-2',
        'vsIce': '3',
        'vsDragon': '4',
        'description': 'Boaboa armor that uses only the warmest fur. Perfect for snowy climates.',
        'materials': [{
            'name': 'Boaboa Ticket',
            'quantity': '1'
        }, {
            'name': 'Wulg Thickfur',
            'quantity': '1'
        }, ],
        'cost': '400'
    },
    'totalDefense': '168',
    'totalFireDefense': '-2',
    'totalWaterDefense': '4',
    'totalThunderDefense': '-4',
    'totalIceDefense': '6',
    'totalDragonDefense': '8',
}, {
    'name': 'Artian Set ⍺+',
    'weapon': {
        'name': 'Felyne Artian Disc ⍺+',
        'icon': require('./assets/palico/artian_weapon.png'),
        'rarity': '10',
        'attackMelee': '50',
        'attackRanged': '50',
        'attackType': 'Severing',
        'element': 'Dragon 220',
        'affinity': '0%',
        'description': 'A disc-shaped weapon made from a mysterious mined metal. Slices its target into pieces.',
        'materials': [{
            'name': 'Ancient Fragment',
            'quantity': '1'
        }, {
            'name': 'Meldspar Ore',
            'quantity': '1'
        }, ],
        'cost': '600'
    },
    'head': {
        'name': 'Felyne Artian Core ⍺+',
        'icon': require('./assets/palico/artian_helm.png'),
        'rarity': '10',
        'defense': '92',
        'vsFire': '1',
        'vsWater': '-2',
        'vsThunder': '-2',
        'vsIce': '2',
        'vsDragon': '3',
        'description': 'A highly sturdy Palico helm made from a mysterious mined metal.',
        'materials': [{
            'name': 'Ancient Fragment',
            'quantity': '1'
        }, {
            'name': 'Lightning Sac',
            'quantity': '1'
        }, ],
        'cost': '500'
    },
    'body': {
        'name': 'Felyne Artian Gear ⍺+',
        'icon': require('./assets/palico/artian_body.png'),
        'rarity': '10',
        'defense': '92',
        'vsFire': '1',
        'vsWater': '-2',
        'vsThunder': '-2',
        'vsIce': '2',
        'vsDragon': '3',
        'description': 'The materials in this suit inexplicably magnetize, keeping Palicoes afloat.',
        'materials': [{
            'name': 'Ancient Fragment',
            'quantity': '1'
        }, {
            'name': 'Deadly Poison Sac',
            'quantity': '1'
        }, ],
        'cost': '500'
    },
    'totalDefense': '184',
    'totalFireDefense': '2',
    'totalWaterDefense': '-4',
    'totalThunderDefense': '-4',
    'totalIceDefense': '4',
    'totalDragonDefense': '6',
},{
    'name': 'Barioth Set ⍺+',
    'weapon': {
        'name': 'Felyne Barioth Knife ⍺+',
        'icon': require('./assets/palico/barioth_weapon.png'),
        'rarity': '10',
        'attackMelee': '70',
        'attackRanged': '35',
        'attackType': 'Severing',
        'element': 'Ice 200',
        'affinity': '20%',
        'description': 'A knife made from Barioth tusk that can freeze prey with a single slash.',
        'materials': [{
            'name': 'Barioth Hardclaw',
            'quantity': '1'
        }, ],
        'cost': '600'
    },
    'head': {
        'name': 'Felyne Barioth Helm ⍺+',
        'icon': require('./assets/palico/barioth_helm.png'),
        'rarity': '10',
        'defense': '92',
        'vsFire': '-3',
        'vsWater': '2',
        'vsThunder': '-2',
        'vsIce': '3',
        'vsDragon': '0',
        'description': 'Head armor made from Barioth parts. So intimidating, it hushes crying children.',
        'materials': [{
            'name': 'Barioth Cortex',
            'quantity': '1'
        }, ],
        'cost': '500'
    },
    'body': {
        'name': 'Felyne Barioth Mail ⍺+',
        'icon': require('./assets/palico/barioth_body.png'),
        'rarity': '10',
        'defense': '92',
        'vsFire': '-3',
        'vsWater': '2',
        'vsThunder': '-2',
        'vsIce': '3',
        'vsDragon': '0',
        'description': 'Body armor made from an icy predator. The white pelt blends right into snow.',
        'materials': [{
            'name': 'Barioth Thickfur',
            'quantity': '1'
        }, ],
        'cost': '500'
    }, 
    'totalDefense': '184',
    'totalFireDefense': '-6',
    'totalWaterDefense': '4',
    'totalThunderDefense': '-4',
    'totalIceDefense': '6',
    'totalDragonDefense': '0',
}, {
    'name': 'Rathalos Set ⍺+',
    'weapon': {
        'name': 'Felyne Rathalos Blade ⍺+',
        'icon': require('./assets/palico/rathalos_weapon.png'),
        'rarity': '10',
        'attackMelee': '60',
        'attackRanged': '40',
        'attackType': 'Severing',
        'element': 'Fire 220',
        'affinity': '15%',
        'description': 'Made from Rathalos parts. Blazing wyvern breath spews forth with every slash of this blade.',
        'materials': [{
            'name': 'Rathalos Shard',
            'quantity': '1'
        }, ],
        'cost': '600'
    },
    'head': {
        'name': 'Felyne Rathalos Helm ⍺+',
        'icon': require('./assets/palico/rathalos_helm.png'),
        'rarity': '10',
        'defense': '92',
        'vsFire': '3',
        'vsWater': '1',
        'vsThunder': '-2',
        'vsIce': '1',
        'vsDragon': '-3',
        'description': 'A symbol of the King of the Sky\'s rage and majesty, this Rathalos helm can quiet even a roaring blaze.',
        'materials': [{
            'name': 'Rathalos Cortex',
            'quantity': '1'
        }, ],
        'cost': '500'
    },
    'body': {
        'name': 'Felyne Rathalos Mail ⍺+',
        'icon': require('./assets/palico/rathalos_body.png'),
        'rarity': '10',
        'defense': '92',
        'vsFire': '3',
        'vsWater': '1',
        'vsThunder': '-2',
        'vsIce': '1',
        'vsDragon': '-3',
        'description': 'Made of sturdy Rathalos plating, this fine armor confers the King of the Sky\'s grace and brutality.',
        'materials': [{
            'name': 'Rathalos Cortex',
            'quantity': '1'
        }, ],
        'cost': '500'
    },
    'totalDefense': '184',
    'totalFireDefense': '6',
    'totalWaterDefense': '2',
    'totalThunderDefense': '-4',
    'totalIceDefense': '2',
    'totalDragonDefense': '-6',
}, {
    'name': 'Diablos Set ⍺+',
    'weapon': {
        'name': 'Felyne Diablos Hammer ⍺+',
        'icon': require('./assets/palico/diablos_weapon.png'),
        'rarity': '10',
        'attackMelee': '80',
        'attackRanged': '35',
        'attackType': 'Blunt',
        'element': '-',
        'affinity': '-20%',
        'defenseBonus': '+20',
        'description': 'Made from Diablos parts, this hammer rages at prey. It\'s said to be host to a bloodthirst all of its own.',
        'materials': [{
            'name': 'Diablos Tailcase+',
            'quantity': '1'
        }, ],
        'cost': '600'
    },
    'head': {
        'name': 'Felyne Diabos Helm ⍺+',
        'icon': require('./assets/palico/diablos_helm.png'),
        'rarity': '10',
        'defense': '94',
        'vsFire': '3',
        'vsWater': '-2',
        'vsThunder': '0',
        'vsIce': '-3',
        'vsDragon': '-2',
        'description': 'A host to the desert\'s despot soul, this Diablos helm bestows an unbreakable will on its user.',
        'materials': [{
            'name': 'Twisted Stouthorn',
            'quantity': '1'
        }, ],
        'cost': '500'
    },
    'body': {
        'name': 'Felyne Diablos Mail ⍺+',
        'icon': require('./assets/palico/diablos_body.png'),
        'rarity': '10',
        'defense': '94',
        'vsFire': '3',
        'vsWater': '-2',
        'vsThunder': '0',
        'vsIce': '-3',
        'vsDragon': '-2',
        'description': 'Hard enough to repel steel, this Diablos armor turns the wearer into the terror of the sands.',
        'materials': [{
            'name': 'Diablos Cortex',
            'quantity': '1'
        }, ],
        'cost': '500'
    },
    'totalDefense': '188',
    'totalFireDefense': '6',
    'totalWaterDefense': '-4',
    'totalThunderDefense': '0',
    'totalIceDefense': '-6',
    'totalDragonDefense': '4',
}, {
    'name': 'Legiana Set ⍺+',
    'weapon': {
        'name': 'Felyne Legiana Sword ⍺+',
        'icon': require('./assets/palico/legiana_weapon.png'),
        'rarity': '10',
        'attackMelee': '55',
        'attackRanged': '40',
        'attackType': 'Severing',
        'element': 'Ice 280',
        'affinity': '0%',
        'description': 'Made from Legiana parts. This azure blade is capable of splitting glaciers.',
        'materials': [{
            'name': 'Legiana Hardclaw',
            'quantity': '1'
        }, ],
        'cost': '600'
    },
    'head': {
        'name': 'Felyne Legiana Helm ⍺+',
        'icon': require('./assets/palico/legiana_helm.png'),
        'rarity': '10',
        'defense': '92',
        'vsFire': '-1',
        'vsWater': '2',
        'vsThunder': '-3',
        'vsIce': '3',
        'vsDragon': '0',
        'description': 'Every Palico dreams of wearing this designer Legiana headgear, made in a rich, clear blue.',
        'materials': [{
            'name': 'Legiana Thickhide',
            'quantity': '1'
        }, ],
        'cost': '500'
    },
    'body': {
        'name': 'Felyne Legiana Mail ⍺+',
        'icon': require('./assets/palico/legiana_body.png'),
        'rarity': '10',
        'defense': '92',
        'vsFire': '-1',
        'vsWater': '2',
        'vsThunder': '-3',
        'vsIce': '3',
        'vsDragon': '0',
        'description': 'This Legiana armor features icy-blue highlights and is said to grant the speed of a gale racing atop the sea.',
        'materials': [{
            'name': 'Legiana Fellwing',
            'quantity': '1'
        }, ],
        'cost': '500'
    },
    'totalDefense': '184',
    'totalFireDefense': '-2',
    'totalWaterDefense': '4',
    'totalThunderDefense': '-6',
    'totalIceDefense': '6',
    'totalDragonDefense': '0',
}, {
    'name': 'Odogaron Set ⍺+',
    'weapon': {
        'name': 'Felyne Garon Chainblade ⍺+',
        'icon': require('./assets/palico/odogaron_weapon.png'),
        'rarity': '10',
        'attackMelee': '55',
        'attackRanged': '45',
        'attackType': 'Severing',
        'element': '-',
        'affinity': '30%',
        'description': 'Made from Odogaron parts. A cruel sickle meets heavy-weighted chain in this hellish creation.',
        'materials': [{
            'name': 'Odogaron Hardclaw',
            'quantity': '1'
        }, ],
        'cost': '600'
    },
    'head': {
        'name': 'Felyne Odogaron Helm ⍺+',
        'icon': require('./assets/palico/odogaron_helm.png'),
        'rarity': '10',
        'defense': '92',
        'vsFire': '2',
        'vsWater': '2',
        'vsThunder': '-2',
        'vsIce': '-3',
        'vsDragon': '0',
        'description': 'This intimidating Odogaron helm features prominently in rookie Palico hazing rituals.',
        'materials': [{
            'name': 'Odogaron Shard',
            'quantity': '1'
        }, ],
        'cost': '500'
    },
    'body': {
        'name': 'Felyne Odogaron Mail ⍺+',
        'icon': require('./assets/palico/odogaron_body.png'),
        'rarity': '10',
        'defense': '92',
        'vsFire': '2',
        'vsWater': '2',
        'vsThunder': '-2',
        'vsIce': '-3',
        'vsDragon': '0',
        'description': 'This Odogaron armor was designed to be as protective as it is intimidating. Even has a tail guard!',
        'materials': [{
            'name': 'Hard Odogaron Sinew',
            'quantity': '1'
        }, ],
        'cost': '500'
    },
    'totalDefense': '184',
    'totalFireDefense': '4',
    'totalWaterDefense': '4',
    'totalThunderDefense': '-4',
    'totalIceDefense': '-6',
    'totalDragonDefense': '0',
}, {
    'name': 'Lavasioth Set ⍺+',
    'weapon': {
        'name': 'Felyne Lava Mace ⍺+',
        'icon': require('./assets/palico/lavasioth_weapon.png'),
        'rarity': '10',
        'attackMelee': '65',
        'attackRanged': '35',
        'attackType': 'Blunt',
        'element': 'Fire 320',
        'affinity': '0%',
        'description': 'A Lavasioth weapon. Made of ultra-hard materials tempered in lava.',
        'materials': [{
            'name': 'Lavasioth Hardfang',
            'quantity': '1'
        }, ],
        'cost': '600'
    },
    'head': {
        'name': 'Felyne Lavasioth Helm ⍺+',
        'icon': require('./assets/palico/lavasioth_helm.png'),
        'rarity': '10',
        'defense': '92',
        'vsFire': '3',
        'vsWater': '-3',
        'vsThunder': '-1',
        'vsIce': '-1',
        'vsDragon': '3',
        'description': 'The tall crest atop this Lavasioth helm stokes the flames of your Palico\'s fighting spirit.',
        'materials': [{
            'name': 'Lavasioth Grandfin',
            'quantity': '1'
        }, ],
        'cost': '500'
    },
    'body': {
        'name': 'Felyne Lavasioth Cowl ⍺+',
        'icon': require('./assets/palico/lavasioth_body.png'),
        'rarity': '10',
        'defense': '92',
        'vsFire': '3',
        'vsWater': '-3',
        'vsThunder': '-1',
        'vsIce': '-1',
        'vsDragon': '3',
        'description': 'Wedding protection and mobility, this Lavasioth armor grants the courage to face anything.',
        'materials': [{
            'name': 'Lavasioth Shard',
            'quantity': '1'
        }, ],
        'cost': '500'
    },
    'totalDefense': '184',
    'totalFireDefense': '6',
    'totalWaterDefense': '-6',
    'totalThunderDefense': '-2',
    'totalIceDefense': '-2',
    'totalDragonDefense': '6',
}, {
    'name': 'Uragaan Set ⍺+',
    'weapon': {
        'name': 'Felyne Uragaan Ironslab ⍺+',
        'icon': require('./assets/palico/uragaan_weapon.png'),
        'rarity': '10',
        'attackMelee': '75',
        'attackRanged': '40',
        'attackType': 'Blunt',
        'element': 'Fire 170',
        'affinity': '0%',
        'defenseBonus': '+30',
        'description': 'Made from Uragaan parts. It\'s capable of splintering iron. May be the heaviest Palico weapon ever.',
        'materials': [{
            'name': 'Uragaan Jaw+',
            'quantity': '1'
        }, ],
        'cost': '600'
    },
    'head': {
        'name': 'Felyne Uragaan Helm ⍺+',
        'icon': require('./assets/palico/uragaan_helm.png'),
        'rarity': '10',
        'defense': '96',
        'vsFire': '4',
        'vsWater': '-3',
        'vsThunder': '1',
        'vsIce': '-2',
        'vsDragon': '-2',
        'description': 'This Uragaan helm offers unrivaled defense, but you won\'t understand a single thing your Palico says.',
        'materials': [{
            'name': 'Uragaan Cortex',
            'quantity': '1'
        }, ],
        'cost': '500'
    },
    'body': {
        'name': 'Felyne Uragaan Mail ⍺+',
        'icon': require('./assets/palico/uragaan_body.png'),
        'rarity': '10',
        'defense': '96',
        'vsFire': '4',
        'vsWater': '-3',
        'vsThunder': '1',
        'vsIce': '-2',
        'vsDragon': '-2',
        'description': 'By covering the wearer entirely in plating, this Uragaan armor offers unparalleled defense.',
        'materials': [{
            'name': 'Uragaan Scute+',
            'quantity': '1'
        }, ],
        'cost': '500'
    },
    'totalDefense': '192',
    'totalFireDefense': '8',
    'totalWaterDefense': '-6',
    'totalThunderDefense': '2',
    'totalIceDefense': '-4',
    'totalDragonDefense': '-4',
}, {
    'name': 'Nargacuga Set ⍺+',
    'weapon': {
        'name': 'Felyne Narga Shuriken ⍺+',
        'icon': require('./assets/palico/nargacuga_weapon.png'),
        'rarity': '10',
        'attackMelee': '40',
        'attackRanged': '70',
        'attackType': 'Severing',
        'element': '-',
        'affinity': '15%',
        'description': 'A strange weapon with a long past. Stalk your prey from the darkness, like a true Nargacuga.',
        'materials': [{
            'name': 'Nargacuga Hardfang',
            'quantity': '1'
        }, ],
        'cost': '600'
    },
    'head': {
        'name': 'Felyne Narga Helm ⍺+',
        'icon': require('./assets/palico/nargacuga_helm.png'),
        'rarity': '10',
        'defense': '92',
        'vsFire': '-2',
        'vsWater': '2',
        'vsThunder': '-3',
        'vsIce': '0',
        'vsDragon': '0',
        'description': 'Nargacuga headgear modeled after traditional black robes from a country in the far east.',
        'materials': [{
            'name': 'Nargacuga Shard',
            'quantity': '1'
        }, ],
        'cost': '500'
    },
    'body': {
        'name': 'Felyne Narga Mail ⍺+',
        'icon': require('./assets/palico/nargacuga_body.png'),
        'rarity': '10',
        'defense': '92',
        'vsFire': '-2',
        'vsWater': '2',
        'vsThunder': '-3',
        'vsIce': '0',
        'vsDragon': '0',
        'description': 'Pitch-black like a Nargacuga, this armor allows the wearer to sneak up on its prey unnoticed.',
        'materials': [{
            'name': 'Nargacuga Blackfur+',
            'quantity': '1'
        }, ],
        'cost': '500'
    },
    'totalDefense': '184',
    'totalFireDefense': '-4',
    'totalWaterDefense': '4',
    'totalThunderDefense': '-6',
    'totalIceDefense': '0',
    'totalDragonDefense': '0',
}, {
    'name': 'Glavenus Set ⍺+',
    'weapon': {
        'name': 'F Scorching Blade ⍺+',
        'icon': require('./assets/palico/glavenus_weapon.png'),
        'rarity': '10',
        'attackMelee': '75',
        'attackRanged': '25',
        'attackType': 'Severing',
        'element': 'Fire 200',
        'affinity': '0%',
        'description': 'A dual-edged blade made of polished Glavenus parts. Cauterizes when it cuts.',
        'materials': [{
            'name': 'Glavenus Hardfang',
            'quantity': '1'
        }, ],
        'cost': '600'
    },
    'head': {
        'name': 'F Glavenus Helm ⍺+',
        'icon': require('./assets/palico/glavenus_helm.png'),
        'rarity': '10',
        'defense': '94',
        'vsFire': '3',
        'vsWater': '-3',
        'vsThunder': '1',
        'vsIce': '-1',
        'vsDragon': '-1',
        'description': 'This Glavenus headgear is like flames given form, tough enough to withstand inferno itself.',
        'materials': [{
            'name': 'Glavenus Cortex',
            'quantity': '1'
        }, ],
        'cost': '500'
    },
    'body': {
        'name': 'F Glavenus Mail ⍺+',
        'icon': require('./assets/palico/glavenus_body.png'),
        'rarity': '10',
        'defense': '94',
        'vsFire': '3',
        'vsWater': '-3',
        'vsThunder': '1',
        'vsIce': '-1',
        'vsDragon': '-1',
        'description': 'Once polished and refined, the Glavenus\'s tail makes for highly durable armor.',
        'materials': [{
            'name': 'Glavenus Shard',
            'quantity': '1'
        }, ],
        'cost': '500'
    },
    'totalDefense': '188',
    'totalFireDefense': '6',
    'totalWaterDefense': '-6',
    'totalThunderDefense': '2',
    'totalIceDefense': '-2',
    'totalDragonDefense': '-2',
}, {
    'name': 'Brachydios Set ⍺+',
    'weapon': {
        'name': 'Felyne Brachy Punch ⍺+',
        'icon': require('./assets/palico/brachydios_weapon.png'),
        'rarity': '10',
        'attackMelee': '65',
        'attackRanged': '25',
        'attackType': 'Blunt',
        'element': 'Blast 60',
        'affinity': '0%',
        'description': 'This Brachydios weapon has a glove at the end to punch a hole in your unfortunate prey.',
        'materials': [{
            'name': 'Glowing Slime',
            'quantity': '1'
        }, ],
        'cost': '600'
    },
    'head': {
        'name': 'Felyne Brachy Headgear ⍺+',
        'icon': require('./assets/palico/brachydios_helm.png'),
        'rarity': '10',
        'defense': '94',
        'vsFire': '3',
        'vsWater': '-2',
        'vsThunder': '1',
        'vsIce': '-3',
        'vsDragon': '1',
        'description': 'Brachydios headgear popular with pugilist Palicoes pursuing their predestined purpose.',
        'materials': [{
            'name': 'Brachydios Crown',
            'quantity': '1'
        }, ],
        'cost': '500'
    }, 
    'body': {
        'name': 'Felyne Brachy Gloves ⍺+',
        'icon': require('./assets/palico/brachydios_body.png'),
        'rarity': '10',
        'defense': '94',
        'vsFire': '3',
        'vsWater': '-2',
        'vsThunder': '1',
        'vsIce': '-3',
        'vsDragon': '1',
        'description': 'Brachydios armor often used for training by Palico boxing enthusiasts.',
        'materials': [{
            'name': 'Brachydios Pounder+',
            'quantity': '1'
        }, ],
        'cost': '500'
    },
    'totalDefense': '188',
    'totalFireDefense': '6',
    'totalWaterDefense': '-4',
    'totalThunderDefense': '2',
    'totalIceDefense': '-6',
    'totalDragonDefense': '2',
}, {
    'name': 'Tigrex Set ⍺+',
    'weapon': {
        'name': 'Felyne Tigrex Whammer ⍺+',
        'icon': require('./assets/palico/tigrex_weapon.png'),
        'rarity': '10',
        'attackMelee': '85',
        'attackRanged': '35',
        'attackType': 'Blunt',
        'element': '-',
        'affinity': '-30%',
        'description': 'One hit on this Tigrex weapon is enough to bite into your prey\'s flesh and shatter its bones.',
        'materials': [{
            'name': 'Tigrex Hardclaw',
            'quantity': '1'
        }, ],
        'cost': '600'
    },
    'head': {
        'name': 'Felyne Tigrex Helm ⍺+',
        'icon': require('./assets/palico/tigrex_helm.png'),
        'rarity': '10',
        'defense': '92',
        'vsFire': '2',
        'vsWater': '0',
        'vsThunder': '-3',
        'vsIce': '0',
        'vsDragon': '-2',
        'description': 'This Tigrex headgear makes the wearer so violent they\'ll even bite the hand that feeds them.',
        'materials': [{
            'name': 'Tigrex Cortex',
            'quantity': '1'
        }, ],
        'cost': '500'
    },
    'body': {
        'name': 'Felyne Tigrex Mail ⍺+',
        'icon': require('./assets/palico/tigrex_body.png'),
        'rarity': '10',
        'defense': '92',
        'vsFire': '2',
        'vsWater': '0',
        'vsThunder': '-3',
        'vsIce': '0',
        'vsDragon': '-2',
        'description': 'With this beastly Tigrex armor, the wearer gains enough confidence to crush anything underfoot.',
        'materials': [{
            'name': 'Tigrex Shard',
            'quantity': '1'
        }, ],
        'cost': '500'
    },
    'totalDefense': '184',
    'totalFireDefense': '4',
    'totalWaterDefense': '0',
    'totalThunderDefense': '-6',
    'totalIceDefense': '0',
    'totalDragonDefense': '-4',
}, {
    'name': 'Shrieking Set ⍺+',
    'weapon': {
        'name': 'Felyne Hoarcry Sword ⍺+',
        'icon': require('./assets/palico/shrieking_weapon.png'),
        'rarity': '11',
        'attackMelee': '65',
        'attackRanged': '50',
        'attackType': 'Severing',
        'element': 'Ice 300',
        'affinity': '0%',
        'description': 'This azure blade made from the noble Shrieking Legiana is WAY too cool to not show off.',
        'materials': [{
            'name': 'Obsidian Icetalon',
            'quantity': '1'
        }, ],
        'cost': '700'
    },
    'head': {
        'name': 'Felyne Hoarcry Helm ⍺+',
        'icon': require('./assets/palico/shrieking_helm.png'),
        'rarity': '11',
        'defense': '98',
        'vsFire': '-3',
        'vsWater': '2',
        'vsThunder': '-1',
        'vsIce': '3',
        'vsDragon': '0',
        'description': 'Twin antennae allow Palicoes in this Shrieking Legiana helm to detect incoming blizzards.',
        'materials': [{
            'name': 'Rimed Hide',
            'quantity': '1'
        }, ],
        'cost': '600'
    },
    'body': {
        'name': 'Felyne Hoarcry Mail ⍺+',
        'icon': require('./assets/palico/shrieking_body.png'),
        'rarity': '11',
        'defense': '196',
        'vsFire': '-6',
        'vsWater': '4',
        'vsThunder': '-2',
        'vsIce': '6',
        'vsDragon': '0',
        'description': 'Harness the winds with this Shrieking Legiana gear and bend blizzards to your whims.',
        'materials': [{
            'name': 'Stark Wing',
            'quantity': '1'
        }, ],
        'cost': '600'
    },
    'totalDefense': '196',
    'totalFireDefense': '-6',
    'totalWaterDefense': '4',
    'totalThunderDefense': '-2',
    'totalIceDefense': '6',
    'totalDragonDefense': '0',
}, {
    'name': 'Gajalaka Set ⍺+',
    'weapon': {
        'name': 'Felyne Gajalaka Sword ⍺+',
        'icon': require('./assets/palico/gajalaka_weapon.png'),
        'rarity': '11',
        'attackMelee': '65',
        'attackRanged': '45',
        'attackType': 'Severing',
        'element': '-',
        'affinity': '20%',
        'description': 'A wild Gajalaka weapon made from ore. Sharp, and brilliant in its own right.',
        'materials': [{
            'name': 'Boaboa Ticket',
            'quantity': '1'
        }, {
            'name': 'Monster Solidbone',
            'quantity': '1'
        }, ],
        'cost': '700'
    },
    'head': {
        'name': 'Felyne Gajalaka Mask ⍺+',
        'icon': require('./assets/palico/gajalaka_helm.png'),
        'rarity': '11',
        'defense': '96',
        'vsFire': '1',
        'vsWater': '1',
        'vsThunder': '1',
        'vsIce': '1',
        'vsDragon': '1',
        'description': 'Traditional armor of the Gajalaka tribe. It took some begging, but they finally made us a set. Now your Palico\'s truly one of them!',
        'materials': [{
            'name': 'Boaboa Ticket',
            'quantity': '1'
        }, {
            'name': 'Monster Solidbone',
            'quantity': '1'
        }, ],
        'cost': '600'
    },
    'body': {
        'name': 'Felyne Gajalaka Cloak ⍺+',
        'icon': require('./assets/palico/gajalaka_body.png'),
        'rarity': '11',
        'defense': '96',
        'vsFire': '1',
        'vsWater': '1',
        'vsThunder': '1',
        'vsIce': '1',
        'vsDragon': '1',
        'description': 'Traditional armor of the Gajalaka tribe. It took some begging, but they finally made us a set. Now your Palico\'s truly one of them!',
        'materials': [{
            'name': 'Boaboa Ticket',
            'quantity': '1'
        }, {
            'name': 'Monster Solidbone',
            'quantity': '1'
        }, ],
        'cost': '600'
    },
    'totalDefense': '196',
    'totalFireDefense': '2',
    'totalWaterDefense': '2',
    'totalThunderDefense': '2',
    'totalIceDefense': '2',
    'totalDragonDefense': '2',
}, {
    'name': 'Seething Set ⍺+',
    'weapon': {
        'name': 'Felyne Pride Mace ⍺+',
        'icon': require('./assets/palico/seething_weapon.png'),
        'rarity': '11',
        'attackMelee': '75',
        'attackRanged': '45',
        'attackType': 'Blunt',
        'element': 'Blast 55',
        'affinity': '-10%',
        'description': 'Awaken your Palico\'s primal lust for battle with this Seething Bazelgeuse weapon.',
        'materials': [{
            'name': 'Distilled Blast Fluid',
            'quantity': '1'
        }, ],
        'cost': '1000'
    },
    'head': {
        'name': 'Felyne Pride Helm ⍺+',
        'icon': require('./assets/palico/seething_helm.png'),
        'rarity': '11',
        'defense': '110',
        'vsFire': '3',
        'vsWater': '1',
        'vsThunder': '-2',
        'vsIce': '-4',
        'vsDragon': '2',
        'description': 'Those who conquer the paradox of raging calmly in this Seething Bazelgeuse helm attain primacy.',
        'materials': [{
            'name': 'Bazelgeuse Shard',
            'quantity': '1'
        }, ],
        'cost': '800'
    },
    'body': {
        'name': 'Felyne Pride Mail ⍺+',
        'icon': require('./assets/palico/seething_body.png'),
        'rarity': '11',
        'defense': '110',
        'vsFire': '3',
        'vsWater': '1',
        'vsThunder': '-2',
        'vsIce': '-4',
        'vsDragon': '2',
        'description': 'Take up this Seething Bazelgeuse gear and unleash your fury on the wilds. The true hunt lies there.',
        'materials': [{
            'name': 'Flickering Silvershell',
            'quantity': '1'
        }, ],
        'cost': '800'
    },
    'totalDefense': '220',
    'totalFireDefense': '6',
    'totalWaterDefense': '-2',
    'totalThunderDefense': '-4',
    'totalIceDefense': '-8',
    'totalDragonDefense': '-4',
}, {
    'name': 'Savage Set ⍺+',
    'weapon': {
        'name': 'Felyne Esurient Bone ⍺+',
        'icon': require('./assets/palico/savage_weapon.png'),
        'rarity': '11',
        'attackMelee': '90',
        'attackRanged': '35',
        'attackType': 'Blunt',
        'element': 'Dragon 200',
        'affinity': '-20%',
        'description': 'The spikes on this weapon are bits of bone that grew through a Savage Deviljho\'s skin.',
        'materials': [{
            'name': 'Deviljho Ripper',
            'quantity': '1'
        }, ],
        'cost': '1000'
    },
    'head': {
        'name': 'Felyne Esurient Mask ⍺+',
        'icon': require('./assets/palico/savage_helm.png'),
        'rarity': '11',
        'defense': '110',
        'vsFire': '2',
        'vsWater': '1',
        'vsThunder': '-3',
        'vsIce': '1',
        'vsDragon': '-3',
        'description': 'The ferocious appearance of this Deviljho armor strikes fear into the hearts of Palicoes everywhere.',
        'materials': [{
            'name': 'Deviljho Blackpiel',
            'quantity': '1'
        }, ],
        'cost': '800'
    },
    'body': {
        'name': 'Felyne Esurient Suit ⍺+',
        'icon': require('./assets/palico/savage_body.png'),
        'rarity': '11',
        'defense': '110',
        'vsFire': '2',
        'vsWater': '1',
        'vsThunder': '-3',
        'vsIce': '1',
        'vsDragon': '-3',
        'description': 'The bulging muscles on this Savage Deviljho armor aren\'t just for show. They offer top protection.',
        'materials': [{
            'name': 'Deviljho Shard',
            'quantity': '1'
        }, ],
        'cost': '800'
    },
    'totalDefense': '220',
    'totalFireDefense': '4',
    'totalWaterDefense': '2',
    'totalThunderDefense': '-6',
    'totalIceDefense': '2',
    'totalDragonDefense': '-6',
},{
    'name': 'Velkhana Set ⍺+',
    'weapon': {
        'name': 'Felyne Rimeguard Lance ⍺+',
        'icon': require('./assets/palico/velkhana_weapon.png'),
        'rarity': '12',
        'attackMelee': '75',
        'attackRanged': '60',
        'attackType': 'Severing',
        'element': 'Ice 240',
        'affinity': '0%',
        'description': 'This Velkhana Icicle spear will continue piercing its enemies as long as your Palico\'s spirit remains intact.',
        'materials': [{
            'name': 'Velkhana Crownhorn',
            'quantity': '1'
        }, ],
        'cost': '1000'
    },
    'head': {
        'name': 'Felyne Rimeguard Helm ⍺+',
        'icon': require('./assets/palico/velkhana_helm.png'),
        'rarity': '12',
        'defense': '114',
        'vsFire': '-3',
        'vsWater': '2',
        'vsThunder': '-1',
        'vsIce': '4',
        'vsDragon': '-1',
        'description': 'The icy ornaments on this Velkhana helm are crystals that precipitated out of frigid air.',
        'materials': [{
            'name': 'Velkhana Fellwing',
            'quantity': '1'
        }, ],
        'cost': '800'
    },
    'body': {
        'name': 'Felyne Rimeguard Mail ⍺+',
        'icon': require('./assets/palico/velkhana_body.png'),
        'rarity': '12',
        'defense': '114',
        'vsFire': '-3',
        'vsWater': '2',
        'vsThunder': '-1',
        'vsIce': '4',
        'vsDragon': '-1',
        'description': 'The ice festooning this platinum Velkhana armor also serves to enhance its formidable defense.',
        'materials': [{
            'name': 'Crystal Shard',
            'quantity': '1'
        }, ],
        'cost': '800'
    },
    'totalDefense': '228',
    'totalFireDefense': '-6',
    'totalWaterDefense': '4',
    'totalThunderDefense': '-2',
    'totalIceDefense': '8',
    'totalDragonDefense': '-2',
}, {
    'name': 'Blackveil Set ⍺+',
    'weapon': {
        'name': 'Felyne Specter Scepter ⍺+',
        'icon': require('./assets/palico/blackveil_weapon.png'),
        'rarity': '12',
        'attackMelee': '80',
        'attackRanged': '35',
        'attackType': 'Blunt',
        'element': 'Dragon 260',
        'affinity': '0%',
        'description': 'This Blackveil Veil Hazak scepter contains a ruby that shines with the wielder\'s own life force.',
        'materials': [{
            'name': 'Vaal Hazak Hardclaw',
            'quantity': '1'
        }, ],
        'cost': '1000'
    },
    'head': {
        'name': 'Felyne Specter Skull ⍺+',
        'icon': require('./assets/palico/blackveil_helm.png'),
        'rarity': '12',
        'defense': '116',
        'vsFire': '-2',
        'vsWater': '4',
        'vsThunder': '1',
        'vsIce': '1',
        'vsDragon': '-3',
        'description': 'Wear this skulltacular Blackveil Vaal Hazak mask to bed to see the underworld in your dreams.',
        'materials': [{
            'name': 'Vaal Hazak Cortex',
            'quantity': '1'
        }, ],
        'cost': '800'
    },
    'body': {
        'name': 'Felyne Specter Coat ⍺+',
        'icon': require('./assets/palico/blackveil_body.png'),
        'rarity': '12',
        'defense': '116',
        'vsFire': '-2',
        'vsWater': '4',
        'vsThunder': '1',
        'vsIce': '1',
        'vsDragon': '-3',
        'description': 'This Blackveil Vaal Hazak armor transforms its wearer into an ethereal, floating host. Scary!',
        'materials': [{
            'name': 'Deathweaver Membrane',
            'quantity': '1'
        }, ],
        'cost': '800'
    },
    'totalDefense': '232',
    'totalFireDefense': '-4',
    'totalWaterDefense': '8',
    'totalThunderDefense': '2',
    'totalIceDefense': '2',
    'totalDragonDefense': '-6',
}, {
    'name': 'Teostra Set ⍺+',
    'weapon': {
        'name': 'Felyne Kaiser Mace ⍺+',
        'icon': require('./assets/palico/teostra_weapon.png'),
        'rarity': '12',
        'attackMelee': '85',
        'attackRanged': '35',
        'attackType': 'Blunt',
        'element': 'Blast 50',
        'affinity': '0%',
        'description': 'Made from Teostra parts, this staff is the very definition of regal. All Felynes bend the knee to it.',
        'materials': [{
            'name': 'Fire Dragon Hardclaw',
            'quantity': '1'
        }, ],
        'cost': '1000'
    },
    'head': {
        'name': 'Felyne Kaiser Corona ⍺+',
        'icon': require('./assets/palico/teostra_helm.png'),
        'rarity': '12',
        'defense': '114',
        'vsFire': '3',
        'vsWater': '-3',
        'vsThunder': '1',
        'vsIce': '-3',
        'vsDragon': '1',
        'description': 'The faint sound of a harpsichord plays as your Palico dons this Teostra periwig. A symbol of power and wealth.',
        'materials': [{
            'name': 'Teostra Mane+',
            'quantity': '1'
        }, ],
        'cost': '800'
    },
    'body': {
        'name': 'Felyne Kaiser Robe ⍺+',
        'icon': require('./assets/palico/teostra_body.png'),
        'rarity': '12',
        'defense': '114',
        'vsFire': '3',
        'vsWater': '-3',
        'vsThunder': '1',
        'vsIce': '-3',
        'vsDragon': '1',
        'description': 'As nobility incarnate, this dark crimson Teostra cape can be worn only by those of royal blood.',
        'materials': [{
            'name': 'Teostra Cortex',
            'quantity': '1'
        }, ],
        'cost': '800'
    },
    'totalDefense': '228',
    'totalFireDefense': '6',
    'totalWaterDefense': '-6',
    'totalThunderDefense': '2',
    'totalIceDefense': '-6',
    'totalDragonDefense': '2',
}, {
    'name': 'Kushala Set ⍺+',
    'weapon': {
        'name': 'Felyne Daora\'s Wand ⍺+',
        'icon': require('./assets/palico/kushala_weapon.png'),
        'rarity': '12',
        'attackMelee': '70',
        'attackRanged': '50',
        'attackType': 'Severing',
        'element': 'Ice 220',
        'affinity': '10%',
        'description': 'Made from Kushala Daora parts. Any caught within its gale are swept away, helpless in the wind.',
        'materials': [{
            'name': 'Daora Hardclaw',
            'quantity': '1'
        }, ],
        'cost': '1000'
    },
    'head': {
        'name': 'Felyne Daora Snarl ⍺+',
        'icon': require('./assets/palico/kushala_helm.png'),
        'rarity': '12',
        'defense': '114',
        'vsFire': '0',
        'vsWater': '2',
        'vsThunder': '-3',
        'vsIce': '4',
        'vsDragon': '-2',
        'description': 'This glorious Kushala Daora helm bears the likeness of the goddess of the moon and the harvest.',
        'materials': [{
            'name': 'Daora Shard',
            'quantity': '1'
        }, ],
        'cost': '800'
    },
    'body': {
        'name': 'Felyne Daora Vise ⍺+',
        'icon': require('./assets/palico/kushala_body.png'),
        'rarity': '12',
        'defense': '114',
        'vsFire': '0',
        'vsWater': '2',
        'vsThunder': '-3',
        'vsIce': '4',
        'vsDragon': '-2',
        'description': 'Prosperity in the next life is guaranteed to any who fall while wearing this Kushala Daora gear.',
        'materials': [{
            'name': 'Daora Cortex',
            'quantity': '1'
        }, ],
        'cost': '800'
    },
    'totalDefense': '228',
    'totalFireDefense': '0',
    'totalWaterDefense': '4',
    'totalThunderDefense': '-6',
    'totalIceDefense': '8',
    'totalDragonDefense': '-4',
}, {
    'name': 'Kirin Set ⍺+',
    'weapon': {
        'name': 'Felyne Godsblade Zapurr ⍺+',
        'icon': require('./assets/palico/kirin_weapon.png'),
        'rarity': '12',
        'attackMelee': '60',
        'attackRanged': '45',
        'attackType': 'Severing',
        'element': 'Thunder 390',
        'affinity': '0%',
        'description': 'Made from Kirin parts, this weapon is modified for Palico use. Thunder echoes with each and every thrust.',
        'materials': [{
            'name': 'Kirin Azure Horn+',
            'quantity': '1'
        }, ],
        'cost': '1000'
    },
    'head': {
        'name': 'Felyne Kirin Horn ⍺+',
        'icon': require('./assets/palico/kirin_helm.png'),
        'rarity': '12',
        'defense': '112',
        'vsFire': '-3',
        'vsWater': '-2',
        'vsThunder': '4',
        'vsIce': '-2',
        'vsDragon': '2',
        'description': 'The long horn jutting from the front of this Kirin headgear makes a bold statement.',
        'materials': [{
            'name': 'Kirin Silvermane',
            'quantity': '1'
        }, ],
        'cost': '800'
    },
    'body': {
        'name': 'Felyne Kirin Vest ⍺+',
        'icon': require('./assets/palico/kirin_body.png'),
        'rarity': '12',
        'defense': '112',
        'vsFire': '-3',
        'vsWater': '-2',
        'vsThunder': '4',
        'vsIce': '-2',
        'vsDragon': '2',
        'description': 'Wear the full set of this Kirin gear and you\'ll be the object of everyone\'s envy.',
        'materials': [{
            'name': 'Kirin Finehide',
            'quantity': '1'
        }, ],
        'cost': '800'
    },
    'totalDefense': '224',
    'totalFireDefense': '-6',
    'totalWaterDefense': '-4',
    'totalThunderDefense': '8',
    'totalIceDefense': '-4',
    'totalDragonDefense': '4',
}, {
    'name': 'Namielle Set ⍺+',
    'weapon': {
        'name': 'Felyne Nami Rod ⍺+',
        'icon': require('./assets/palico/namielle_weapon.png'),
        'rarity': '12',
        'attackMelee': '40',
        'attackRanged': '70',
        'attackType': 'Blunt',
        'element': 'Water 200',
        'affinity': '15%',
        'description': 'A Namielle Palico weapon vibrant in color, yet able to handily smash boulders into dust.',
        'materials': [{
            'name': 'Namielle Whisker',
            'quantity': '1'
        }, ],
        'cost': '1000'
    },
    'head': {
        'name': 'Felyne Nami Hood ⍺+',
        'icon': require('./assets/palico/namielle_helm.png'),
        'rarity': '12',
        'defense': '116',
        'vsFire': '-3',
        'vsWater': '4',
        'vsThunder': '3',
        'vsIce': '0',
        'vsDragon': '-2',
        'description': 'This Namielle Palico helm boasts top-tier shock resistance. Also, hypnotically glowing tentacles.',
        'materials': [{
            'name': 'Namielle Fellwing',
            'quantity': '1'
        }, ],
        'cost': '800'
    },
    'body': {
        'name': 'Felyne Nami Suit ⍺+',
        'icon': require('./assets/palico/namielle_body.png'),
        'rarity': '12',
        'defense': '116',
        'vsFire': '-3',
        'vsWater': '4',
        'vsThunder': '3',
        'vsIce': '0',
        'vsDragon': '-2',
        'description': 'Stronger when damp, this curious Namielle Palico armor stretches in all the right places.',
        'materials': [{
            'name': 'Namielle Finehide',
            'quantity': '1'
        }, ],
        'cost': '800'
    },
    'totalDefense': '232',
    'totalFireDefense': '-6',
    'totalWaterDefense': '8',
    'totalThunderDefense': '6',
    'totalIceDefense': '0',
    'totalDragonDefense': '-4',
}, {
    'name': 'Ishvalda Set ⍺+',
    'weapon': {
        'name': 'Felyne Ishvalda Orb ⍺+',
        'icon': require('./assets/palico/ishvalda_weapon.png'),
        'rarity': '12',
        'attackMelee': '65',
        'attackRanged': '55',
        'attackType': 'Blunt',
        'element': 'Dragon 300',
        'affinity': '0%',
        'description': 'Despite its elegant look, this Shara Ishvalda weapon strikes with the force of a meteor impact.',
        'materials': [{
            'name': 'Shara Ishvalda Tenderplate',
            'quantity': '1'
        }, ],
        'cost': '1200'
    },
    'head': {
        'name': 'Felyne Ishvalda Crown ⍺+',
        'icon': require('./assets/palico/ishvalda_helm.png'),
        'rarity': '12',
        'defense': '124',
        'vsFire': '0',
        'vsWater': '-2',
        'vsThunder': '3',
        'vsIce': '-3',
        'vsDragon': '0',
        'description': 'Palico who don this Shara Ishvalda helm attain kitty enlightenment. The fastest way to Purr-vana.',
        'materials': [{
            'name': 'Shara Ishvalda Tenderscale',
            'quantity': '1'
        }, ],
        'cost': '1000'
    },
    'body': {
        'name': 'Felyne Ishvalda Raiment ⍺+',
        'icon': require('./assets/palico/ishvalda_body.png'),
        'rarity': '12',
        'defense': '124',
        'vsFire': '0',
        'vsWater': '-2',
        'vsThunder': '3',
        'vsIce': '-3',
        'vsDragon': '0',
        'description': 'Palicoes in this Shara Ishvalda armor can move purely by the power of their mind. Supposedly.',
        'materials': [{
            'name': 'Shara Ishvalda Boulderplate',
            'quantity': '1'
        }, ],
        'cost': '1000'
    },
    'totalDefense': '248',
    'totalFireDefense': '0',
    'totalWaterDefense': '-4',
    'totalThunderDefense': '6',
    'totalIceDefense': '-6',
    'totalDragonDefense': '0',
},{
    'name': 'Zorah Set ⍺+',
    'weapon': {
        'name': 'Felyne Zorah Puppet ⍺+',
        'icon': require('./assets/palico/zorah_weapon.png'),
        'rarity': '12',
        'attackMelee': '66',
        'attackRanged': '44',
        'attackType': 'Severing',
        'element': 'Blast 40',
        'affinity': '0%',
        'defenseBonus': '+45',
        'description': 'Made from Zorah Magdaros parts. Those who chucke at its cute doll form will at least go out laughing.',
        'materials': [{
            'name': 'Fierce Dragonvein Bone',
            'quantity': '1'
        }, {
            'name': 'Conqueror\'s Seal',
            'quantity': '1'
        },],
        'cost': '1200'
    },
    'head': {
        'name': 'Felyne Zorah Crown ⍺+',
        'icon': require('./assets/palico/zorah_helm.png'),
        'rarity': '12',
        'defense': '120',
        'vsFire': '4',
        'vsWater': '-3',
        'vsThunder': '-1',
        'vsIce': '-2',
        'vsDragon': '-3',
        'description': 'Laugh at this awkward Zorah Magdaros headgear and you won\'t live to catch your breath.',
        'materials': [{
            'name': 'Fierce Dragonvein Bone',
            'quantity': '1'
        }, {
            'name': 'Conqueror\'s Seal',
            'quantity': '1'
        },],
        'cost': '1000'
    }, 
    'body': {
        'name': 'Felyne Zorah Suit ⍺+',
        'icon': require('./assets/palico/zorah_body.png'),
        'rarity': '12',
        'defense': '240',
        'vsFire': '8',
        'vsWater': '-6',
        'vsThunder': '-2',
        'vsIce': '-4',
        'vsDragon': '-6',
        'description': 'Dismiss this funny-looking Zorah Magdaros armor and you\'ll regret it with your final breath.',
        'materials': [{
            'name': 'Fierce Dragonvein Bone',
            'quantity': '1'
        }, {
            'name': 'Conqueror\'s Seal',
            'quantity': '1'
        },],
        'cost': '1000'
    },
    'totalDefense': '240',
    'totalFireDefense': '8',
    'totalWaterDefense': '-6',
    'totalThunderDefense': '-2',
    'totalIceDefense': '-4',
    'totalDragonDefense': '-6',
}, {
    'name': 'Garuga Set ⍺+',
    'weapon': {
        'name': 'Felyne Garuga Fan ⍺+',
        'icon': require('./assets/palico/garuga_weapon.png'),
        'rarity': '11',
        'attackMelee': '80',
        'attackRanged': '40',
        'attackType': 'Severing',
        'element': 'Poison 80',
        'affinity': '15%',
        'description': 'A Yian Garuga feather fan. Its eerie power summons great gales. Or was it tall tales?',
        'materials': [{
            'name': 'Fancy Beak',
            'quantity': '1'
        }, ],
        'cost': '1000'
    },
    'head': {
        'name': 'Felyne Garuga Hood ⍺+',
        'icon': require('./assets/palico/garuga_helm.png'),
        'rarity': '11',
        'defense': '92',
        'vsFire': '2',
        'vsWater': '-3',
        'vsThunder': '2',
        'vsIce': '-2',
        'vsDragon': '-2',
        'description': 'With its dignified whiskers, this Yian Garuga armor almost makes you forget the wearer is a Palico.',
        'materials': [{
            'name': 'Garuga Shard',
            'quantity': '1'
        }, ],
        'cost': '800'
    },
    'body': {
        'name': 'Felyne Garuga Robe ⍺+',
        'icon': require('./assets/palico/garuga_body.png'),
        'rarity': '11',
        'defense': '92',
        'vsFire': '2',
        'vsWater': '-3',
        'vsThunder': '2',
        'vsIce': '-2',
        'vsDragon': '-2',
        'description': 'A lovely Garuga robe for proud Palicoes who only serve well-mannered hunters.',
        'materials': [{
            'name': 'Garuga Silverpelt',
            'quantity': '1'
        }, ],
        'cost': '800'
    },
    'totalDefense': '184',
    'totalFireDefense': '4',
    'totalWaterDefense': '-6',
    'totalThunderDefense': '4',
    'totalIceDefense': '-4',
    'totalDragonDefense': '-4',
}, {
    'name': 'Zinogre Set ⍺+',
    'weapon': {
        'name': 'Felyne Mewsurper\'s Peal ⍺+',
        'icon': require('./assets/palico/zinogre_weapon.png'),
        'rarity': '11',
        'attackMelee': '85',
        'attackRanged': '45',
        'attackType': 'Severing',
        'element': 'Thunder 250',
        'affinity': '0%',
        'description': 'Each swing of this Zinogre weapon rends the skies, summoning fierce lightning bolts.',
        'materials': [{
            'name': 'Zinogre Deathly Shocker',
            'quantity': '1'
        }, ],
        'cost': '1000'
    },
    'head': {
        'name': 'Felyne Zinogre Helm ⍺+',
        'icon': require('./assets/palico/zinogre_helm.png'),
        'rarity': '11',
        'defense': '98',
        'vsFire': '-1',
        'vsWater': '-1',
        'vsThunder': '4',
        'vsIce': '-4',
        'vsDragon': '1',
        'description': 'The intimidating air emanating from this Zinogre headgear makes the wearer\'s prey cower in fear.',
        'materials': [{
            'name': 'Zinogre Hardhorn',
            'quantity': '1'
        }, ],
        'cost': '800'
    },
    'body': {
        'name': 'Felyne Zingore Mail ⍺+',
        'icon': require('./assets/palico/zinogre_body.png'),
        'rarity': '11',
        'defense': '98',
        'vsFire': '-1',
        'vsWater': '-1',
        'vsThunder': '4',
        'vsIce': '-4',
        'vsDragon': '1',
        'description': 'This Zinogre armor brings out the beast inside. You\'ll never lose sight of your prey again.',
        'materials': [{
            'name': 'Zinogre Cortex',
            'quantity': '1'
        }, ],
        'cost': '800'
    },
    'totalDefense': '196',
    'totalFireDefense': '-2',
    'totalWaterDefense': '-2',
    'totalThunderDefense': '8',
    'totalIceDefense': '-8',
    'totalDragonDefense': '2',
}, {
    'name': 'Lunastra Set ⍺+',
    'weapon': {
        'name': 'Felyne Eliza Parasol ⍺+',
        'icon': require('./assets/palico/lunastra_weapon.png'),
        'rarity': '12',
        'attackMelee': '90',
        'attackRanged': '35',
        'attackType': 'Severing',
        'element': 'Blast 45',
        'affinity': '0%',
        'description': 'A parasol created from Lunastra parts that exudes nobility. An elegant match for parkgoers.',
        'materials': [{
            'name': 'Lunastra Fellwing',
            'quantity': '1'
        }, ],
        'cost': '1200'
    },
    'head': {
        'name': 'Felyne Eliza Corona ⍺+',
        'icon': require('./assets/palico/lunastra_helm.png'),
        'rarity': '12',
        'defense': '120',
        'vsFire': '3',
        'vsWater': '1',
        'vsThunder': '1',
        'vsIce': '-3',
        'vsDragon': '-2',
        'description': 'The flowing locks of this regal headpiece are sure to grab the attention of Purr-ince Charming.',
        'materials': [{
            'name': 'Lunastra Mane+',
            'quantity': '1'
        }, ],
        'cost': '1000'
    },
    'body': {
        'name': 'Felyne Eliza Ruffle ⍺+',
        'icon': require('./assets/palico/lunastra_body.png'),
        'rarity': '12',
        'defense': '120',
        'vsFire': '3',
        'vsWater': '1',
        'vsThunder': '1',
        'vsIce': '-3',
        'vsDragon': '-2',
        'description': 'This Lunastra armor carries an air of nobility about it that\'s suitable only for one family lineage.',
        'materials': [{
            'name': 'Lunastra Shard',
            'quantity': '1'
        }, ],
        'cost': '1000'
    },
    'totalDefense': '240',
    'totalFireDefense': '6',
    'totalWaterDefense': '2',
    'totalThunderDefense': '2',
    'totalIceDefense': '-6',
    'totalDragonDefense': '-4',
},{
    'name': 'Ruiner Set ⍺+',
    'weapon': {
        'name': 'Felyne Ruinous Claw ⍺+',
        'icon': require('./assets/palico/nergigante_weapon.png'),
        'rarity': '12',
        'attackMelee': '100',
        'attackRanged': '40',
        'attackType': 'Severing',
        'element': 'Dragon 80',
        'affinity': '0%',
        'description': 'Claw away your prey\'s will to fight with this exceptionally sharp Ruiner Nergigante weapon.',
        'materials': [{
            'name': 'Nergigante Hardclaw',
            'quantity': '1'
        }, ],
        'cost': '1200'
    },
    'head': {
        'name': 'Felyne Ruinous Helm ⍺+',
        'icon': require('./assets/palico/nergigante_helm.png'),
        'rarity': '12',
        'defense': '128',
        'vsFire': '1',
        'vsWater': '1',
        'vsThunder': '-3',
        'vsIce': '1',
        'vsDragon': '-3',
        'description': 'This Ruiner Nergigante helm will transform the gentlest Palico into an avatar of destruction.',
        'materials': [{
            'name': 'Annihilating Greathorn',
            'quantity': '1'
        }, ],
        'cost': '1000'
    },
    'body': {
        'name': 'Felyne Ruinous Mail ⍺+',
        'icon': require('./assets/palico/nergigante_body.png'),
        'rarity': '12',
        'defense': '128',
        'vsFire': '1',
        'vsWater': '1',
        'vsThunder': '-3',
        'vsIce': '1',
        'vsDragon': '-3',
        'description': 'Some Palicoes are too frightened by the sight of this Ruiner Nergigante gear to put it on.',
        'materials': [{
            'name': 'Nergigante Cortex',
            'quantity': '1'
        }, ],
        'cost': '1000'
    },
    'totalDefense': '256',
    'totalFireDefense': '2',
    'totalWaterDefense': '2',
    'totalThunderDefense': '-6',
    'totalIceDefense': '2',
    'totalDragonDefense': '-6',
}, {
    'name': 'Guild Set ⍺+',
    'weapon': {
        'name': 'Felyne Guild Book ⍺+',
        'icon': require('./assets/palico/guild_weapon.png'),
        'rarity': '12',
        'attackMelee': '70',
        'attackRanged': '50',
        'attackType': 'Blunt',
        'element': 'Sleep 90',
        'affinity': '0%',
        'description': 'A superbly bound tome given only to Guild members. Reinforced to withstand extreme circumstances.',
        'materials': [{
            'name': 'Research Commission Ticket+',
            'quantity': '1'
        }, {
            'name': 'Conqueror\'s Seal',
            'quantity': '1'
        },],
        'cost': '1200'
    },
    'head': {
        'name': 'Felyne Guild Cap ⍺+',
        'icon': null,
        'rarity': '12',
        'defense': '114',
        'vsFire': '2',
        'vsWater': '1',
        'vsThunder': '1',
        'vsIce': '2',
        'vsDragon': '2',
        'description': 'A winter cap sized for a Palico, given only to those in service of the Guild. Cute, yet classy.',
        'materials': [{
            'name': 'Research Commission Ticket+',
            'quantity': '1'
        }, {
            'name': 'Steam Ticket',
            'quantity': '1'
        },],
        'cost': '1000'
    },
    'body': {
        'name': 'Felyne Guild Coat ⍺+',
        'icon': null,
        'rarity': '12',
        'defense': '114',
        'vsFire': '2',
        'vsWater': '1',
        'vsThunder': '1',
        'vsIce': '2',
        'vsDragon': '2',
        'description': 'A Palico winter coat that is only given to Guild members. Very fashionable.',
        'materials': [{
            'name': 'Research Commission Ticket+',
            'quantity': '1'
        }, {
            'name': 'Thermae Ticket',
            'quantity': '1'
        },],
        'cost': '1000'
    },
    'totalDefense': '228',
    'totalFireDefense': '4',
    'totalWaterDefense': '2',
    'totalThunderDefense': '2',
    'totalIceDefense': '4',
    'totalDragonDefense': '4',
}, {
    'name': 'Huntsman Set ⍺+',
    'weapon': {
        'name': 'F Wyvern Blade "Green" ⍺+',
        'icon': require('./assets/palico/huntsman_weapon.png'),
        'rarity': '12',
        'attackMelee': '75',
        'attackRanged': '40',
        'attackType': 'Severing',
        'element': 'Fire 200',
        'affinity': '0%',
        'description': 'A Palico weapon radiating a deep respect for the Huntsman. Very sharp, despite its size.',
        'materials': [{
            'name': 'Research Commission Ticket+',
            'quantity': '1'
        }, {
            'name': 'Rathian Mantle',
            'quantity': '1'
        },],
        'cost': '1200'
    },
    'head': {
        'name': 'F Huntsman Helm ⍺+',
        'icon': require('./assets/palico/huntsman_helm.png'),
        'rarity': '12',
        'defense': '114',
        'vsFire': '2',
        'vsWater': '1',
        'vsThunder': '1',
        'vsIce': '2',
        'vsDragon': '2',
        'description': 'Palico headgear radiating a deep respect for the Huntsman. A masterpierce forged with the love for a craftsman\'s master.',
        'materials': [{
            'name': 'Research Commission Ticket+',
            'quantity': '1'
        }, {
            'name': 'Rathian Weave',
            'quantity': '1'
        },],
        'cost': '1000'
    },
    'body': {
        'name': 'F Huntsman Mail ⍺+',
        'icon': require('./assets/palico/huntsman_body.png'),
        'rarity': '12',
        'defense': '114',
        'vsFire': '2',
        'vsWater': '1',
        'vsThunder': '1',
        'vsIce': '2',
        'vsDragon': '2',
        'description': 'Palico armor radiating a deep respect for the Huntsman. It took ages to put together.',
        'materials': [{
            'name': 'Research Commission Ticket+',
            'quantity': '1'
        }, {
            'name': 'Rathian Weave',
            'quantity': '1'
        },],
        'cost': '1000'
    },
    'totalDefense': '228',
    'totalFireDefense': '4',
    'totalWaterDefense': '2',
    'totalThunderDefense': '2',
    'totalIceDefense': '4',
    'totalDragonDefense': '4',
}, {
    'name': 'Safi Set ⍺+',
    'weapon': {
        'name': 'Felyne Safi Spear ⍺+',
        'icon': require('./assets/palico/safi_weapon.png'),
        'rarity': '12',
        'attackMelee': '65',
        'attackRanged': '65',
        'attackType': 'Severing',
        'element': 'Dragon 200',
        'affinity': '20%',
        'description': 'Awakened from its slumber in the ravine, this red Safi\'jiiva spear brings nothing but demise.',
        'materials': [{
            'name': 'Safi\'jiiva Hardhorn',
            'quantity': '1'
        }, ],
        'cost': '1200'
    },
    'head': {
        'name': 'Felyne Safi Crown ⍺+',
        'icon': require('./assets/palico/safi_helm.png'),
        'rarity': '12',
        'defense': '120',
        'vsFire': '2',
        'vsWater': '1',
        'vsThunder': '1',
        'vsIce': '1',
        'vsDragon': '-1',
        'description': 'The forbidden power of the beast that rules the earth lies within this Safi\'jiiva crown.',
        'materials': [{
            'name': 'Safi\'jiiva Cortex',
            'quantity': '1'
        }, {
            'name': 'Safi\'jiiva Shard',
            'quantity': '1'
        },],
        'cost': '1000'
    },
    'body': {
        'name': 'Felyne Safi Armor ⍺+',
        'icon': require('./assets/palico/safi_body.png'),
        'rarity': '12',
        'defense': '120',
        'vsFire': '2',
        'vsWater': '1',
        'vsThunder': '1',
        'vsIce': '1',
        'vsDragon': '-1',
        'description': 'Safi\'jiiva armor that unleashes the true form of the beast that will dominate the heavens.',
        'materials': [{
            'name': 'Safi\'jiiva Shard',
            'quantity': '1'
        }, ],
        'cost': '1000'
    },
    'totalDefense': '240',
    'totalFireDefense': '4',
    'totalWaterDefense': '2',
    'totalThunderDefense': '2',
    'totalIceDefense': '2',
    'totalDragonDefense': '-2',
}, {
    'name': 'Shishi-mai Set ⍺+',
    'weapon': {
        'name': 'Felyne Shishi-mai Lamp ⍺+',
        'icon': require('./assets/palico/shishimai_weapon.png'),
        'rarity': '9',
        'attackMelee': '65',
        'attackRanged': '35',
        'attackType': 'Blunt',
        'element': 'Blast 40',
        'affinity': '0%',
        'description': 'Requires a Joyful Ticket to craft. Shishi-mai, bring only the fortune of the Holiday Joy! Evil, begone!',
        'materials': [{
            'name': 'Joyful Ticket',
            'quantity': '1'
        }, {
            'name': 'Boulder Bone',
            'quantity': '1'
        },],
        'cost': '400'
    },
    'head': {
        'name': 'Felyne Shishi-mai Head ⍺+',
        'icon': require('./assets/palico/shishimai_helm.png'),
        'rarity': '9',
        'defense': '86',
        'vsFire': '1',
        'vsWater': '1',
        'vsThunder': '1',
        'vsIce': '4',
        'vsDragon': '1',
        'description': 'Requires a Joyful Ticket to craft. Shishi-mai, bring only the fortune of the Holiday Joy! Evil, begone!',
        'materials': [{
            'name': 'Joyful Ticket',
            'quantity': '1'
        }, {
            'name': 'Boulder Bone',
            'quantity': '1'
        },],
        'cost': '350'
    },
    'body': {
        'name': 'Felyne Shishi-mai Body ⍺+',
        'icon': require('./assets/palico/shishimai_body.png'),
        'rarity': '9',
        'defense': '86',
        'vsFire': '1',
        'vsWater': '1',
        'vsThunder': '1',
        'vsIce': '4',
        'vsDragon': '1',
        'description': 'Requires a Joyful Ticket to craft. Shishi-mai, bring only the fortune of the Holiday Joy! Evil, begone!',
        'materials': [{
            'name': 'Joyful Ticket',
            'quantity': '1'
        }, {
            'name': 'Boulder Bone',
            'quantity': '1'
        },],
        'cost': '350'
    },
    'totalDefense': '172',
    'totalFireDefense': '2',
    'totalWaterDefense': '2',
    'totalThunderDefense': '2',
    'totalIceDefense': '8',
    'totalDragonDefense': '2',
},];

let palicoArmorSets = [{
    'name': 'Watcher',
    'icon': require('./assets/palico_sets/watcher.png'),
    'head': {
        'name': 'Felyne Watcher Head',
        'rarity': '3',
        'defense': '20',
        'vsFire': '-2',
        'vsWater': '-2',
        'vsThunder': '-2',
        'vsIce': '-2',
        'vsDragon': '-2',
        'description': 'Palico armor crafted to resemble a Watcher. Provides great support on any hunt! (Full Armor Set)',
    },
    'body': {
        'name': 'Felyne Watcher Body',
        'rarity': '3',
        'defense': '20',
        'vsFire': '-2',
        'vsWater': '-2',
        'vsThunder': '-2',
        'vsIce': '-2',
        'vsDragon': '-2',
        'description': 'Palico armor crafted to resemble a Watcher. Provides great support on any hunt! (Full Armor Set)',
    },
    'totalDefense': '40',
    'totalFireDefense': '-4',
    'totalWaterDefense': '-4',
    'totalThunderDefense': '-4',
    'totalIceDefense': '-4',
    'totalDragonDefense': '-4',
    'materials': [{
        'name': 'Watcher Lens',
        'quantity': '2'
    }, {
        'name': 'Dragonite Ore',
        'quantity': '3'
    }, ],
    'cost': '200'
}, {
    'name': 'Mega Man ⍺',
    'icon': require('./assets/palico_sets/megaman.png'),
    'head': {
        'name': 'Mega Man Helmet',
        'rarity': '6',
        'defense': '38',
        'vsFire': '3',
        'vsWater': '3',
        'vsThunder': '3',
        'vsIce': '3',
        'vsDragon': '3',
        'description': 'Palico armor fashioned after the blue bomber. Show them what 8-bit is all about! (Full Armor Set)',
    },
    'body': {
        'name': 'Mega Man Suit',
        'rarity': '6',
        'defense': '38',
        'vsFire': '3',
        'vsWater': '3',
        'vsThunder': '3',
        'vsIce': '3',
        'vsDragon': '3',
        'description': 'Palico armor fashioned after the blue bomber. Show them what 8-bit is all about! (Full Armor Set)',
    },
    'totalDefense': '76',
    'totalFireDefense': '6',
    'totalWaterDefense': '6',
    'totalThunderDefense': '6',
    'totalIceDefense': '6',
    'totalDragonDefense': '6',
    'materials': [{
        'name': 'Mega Man Ticket',
        'quantity': '3'
    }, ],
    'cost': '1000'
}, {
    'name': 'Moogle ⍺',
    'icon': require('./assets/palico_sets/moogle.png'),
    'head': {
        'name': 'Moogle Head ⍺',
        'rarity': '8',
        'defense': '60',
        'vsFire': '-2',
        'vsWater': '-2',
        'vsThunder': '3',
        'vsIce': '-2',
        'vsDragon': '4',
        'description': 'Palico armor fashioned after a moogle. Let\'s go out on a hunt, kupo! (Full Armor Set)',
    },
    'body': {
        'name': 'Moogle Body ⍺',
        'rarity': '8',
        'defense': '60',
        'vsFire': '-2',
        'vsWater': '-2',
        'vsThunder': '3',
        'vsIce': '-3',
        'vsDragon': '4',
        'description': 'Palico armor fashioned after a moogle. Let\'s go out on a hunt, kupo! (Full Armor Set)',
    },
    'totalDefense': '120',
    'totalFireDefense': '-4',
    'totalWaterDefense': '-4',
    'totalThunderDefense': '6',
    'totalIceDefense': '-4',
    'totalDragonDefense': '8',
    'materials': [{
        'name': 'Behemoth Mane',
        'quantity': '1'
    }, {
        'name': 'Behemoth Tail',
        'quantity': '1'
    }, {
        'name': 'Aetheryte Shard',
        'quantity': '1'
    }, ],
    'cost': '1500'
}, {
    'name': 'Nekker ⍺',
    'icon': require('./assets/palico_sets/nekker.jpg'),
    'head': {
        'name': 'Nekker Head ⍺',
        'rarity': '8',
        'defense': '60',
        'vsFire': '1',
        'vsWater': '-4',
        'vsThunder': '1',
        'vsIce': '1',
        'vsDragon': '1',
        'description': 'Armor that turns your Palico into a nekker, a common creature in the witcher\'s world. (Full Armor Set)',
    },
    'body': {
        'name': 'Nekker Body ⍺',
        'rarity': '8',
        'defense': '60',
        'vsFire': '1',
        'vsWater': '-4',
        'vsThunder': '1',
        'vsIce': '1',
        'vsDragon': '1',
        'description': 'Armor that turns your Palico into a nekker, a common creature in the witcher\'s world. (Full Armor Set)',
    },
    'totalDefense': '395',
    'totalFireDefense': '2',
    'totalWaterDefense': '-8',
    'totalThunderDefense': '2',
    'totalIceDefense': '2',
    'totalDragonDefense': '2',
    'materials': [{
        'name': 'Nekker Card (Armor)',
        'quantity': '1'
    }, ],
    'cost': '1500'
},];

let palicoGadgets = [{
        'name': 'Vigorwasp Spray',
        'icon': require('./assets/palico_gadgets/vigorwasp-spray.png'),
        'maxProficiency': '10',
        'effects': 'Allows Palico to use an item to recover health in a small area of effect.',
        'howToGet': 'Starting equipment.',
    },
    {
        'name': 'Flashfly Cage',
        'icon': require('./assets/palico_gadgets/flashfly-cage.png'),
        'maxProficiency': '10',
        'effects': 'Allows Palico to place a trap that acts as a flash bomb. A shock trap is added to this after a certain proficiency is earned.',
        'howToGet': 'Grimalkyne tribes sidequest in Ancient Forest.',
    },
    {
        'name': 'Shieldspire',
        'icon': require('./assets/palico_gadgets/shieldspire.png'),
        'maxProficiency': '10',
        'effects': 'Allows Palico to guard attacks and draw attention to itself.',
        'howToGet': 'Grimalkyne tribes sidequest in Wildspire Waste.',
    },
    {
        'name': 'Plunderblade',
        'icon': require('./assets/palico_gadgets/plunderblade.png'),
        'maxProficiency': '10',
        'effects': 'Allows Palico to steal items from monsters.',
        'howToGet': 'Grimalkyne tribes sidequest in Rotten Vale.',
    },
    {
        'name': 'Coral Orchestra',
        'icon': require('./assets/palico_gadgets/coral-orchestra.png'),
        'maxProficiency': '10',
        'effects': ' Allows Palico to play music to buff the hunter in various ways.',
        'howToGet': 'Grimalkyne tribes sidequest in Coral Highlands.',
    },
    {
        'name': 'Meowlotov Cocktail',
        'icon': require('./assets/palico_gadgets/meowlotov-cocktail.png'),
        'maxProficiency': '10',
        'effects': ' Allows Palico to throw bombs at monsters.',
        'howToGet': 'Grimalkyne tribes (Gajalaka) sidequest in Elder\'s Recess.',
    }
];

export {
    lowRankPalicoArmors,
    highRankPalicoArmors,
    masterRankPalicoArmors,
    palicoGadgets,
    palicoArmorSets
}