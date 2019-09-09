let kinsectTrees = [{
        title: 'Culldrone Lineage',
        data: [{
                'name': 'Culldrone I',
                'icon': require('./assets/kinsects/culldrone.png'),
                'rarity': '1',
                'attackType': 'Sever',
                'dustEffect': 'Poison',
                'element': 'None',
                'power': '1',
                'speed': '1',
                'heal': '1',
            },
            {
                'name': 'Culldrone II',
                'from': 'Culldrone I',
                'icon': require('./assets/kinsects/culldrone.png'),
                'rarity': '2',
                'attackType': 'Sever',
                'dustEffect': 'Poison',
                'element': 'None',
                'power': '2',
                'speed': '2',
                'heal': '2',
                'materials': [{
                    'name': 'Iron Ore',
                    'quantity': '3'
                }, ],
                'cost': '200'
            },
            {
                'name': 'Culldrone III',
                'from': 'Culldrone II',
                'icon': require('./assets/kinsects/culldrone.png'),
                'rarity': '2',
                'attackType': 'Sever',
                'dustEffect': 'Poison',
                'element': 'None',
                'power': '3',
                'speed': '3',
                'heal': '3',
                'materials': [{
                        'name': 'Earth Crystal',
                        'quantity': '2'
                    },
                    {
                        'name': 'Monster Bone M',
                        'quantity': '1'
                    },
                ],
                'cost': '300'
            },
            {
                'name': 'Alucanid I',
                'from': 'Culldrone III',
                'icon': require('./assets/kinsects/alucanid.png'),
                'rarity': '3',
                'attackType': 'Sever',
                'dustEffect': 'Poison',
                'element': 'None',
                'power': '6',
                'speed': '3',
                'heal': '4',
                'materials': [{
                        'name': 'Monster Bone L',
                        'quantity': '1'
                    },
                    {
                        'name': 'Iron Ore',
                        'quantity': '3'
                    },
                ],
                'cost': '500'
            },
            {
                'name': 'Alucanid II',
                'from': 'Alucanid I',
                'icon': require('./assets/kinsects/alucanid.png'),
                'rarity': '4',
                'attackType': 'Sever',
                'dustEffect': 'Poison',
                'element': 'None',
                'power': '8',
                'speed': '4',
                'heal': '6',
                'materials': [{
                    'name': 'Dragonite Ore',
                    'quantity': '3'
                }, ],
                'cost': '800'
            },
            {
                'name': 'Alucanid III',
                'from': 'Alucanid II',
                'icon': require('./assets/kinsects/alucanid.png'),
                'rarity': '4',
                'attackType': 'Sever',
                'dustEffect': 'Poison',
                'element': 'None',
                'power': '10',
                'speed': '5',
                'heal': '8',
                'materials': [{
                        'name': 'Monster Bone+',
                        'quantity': '2'
                    },
                    {
                        'name': 'Anjanath Fang',
                        'quantity': '1'
                    },
                ],
                'cost': '1200'
            },
            {
                'name': 'Monarch Alucanid I',
                'from': 'Alucanid III',
                'icon': require('./assets/kinsects/monarch_alucanid.png'),
                'rarity': '5',
                'attackType': 'Sever',
                'dustEffect': 'Poison',
                'element': 'None',
                'power': '12',
                'speed': '6',
                'heal': '9',
                'materials': [{
                        'name': 'Monster Keenbone',
                        'quantity': '2'
                    },
                    {
                        'name': 'Carbalite Ore',
                        'quantity': '3'
                    },
                    {
                        'name': 'Piercing Claw',
                        'quantity': '2'
                    },
                ],
                'cost': '2400'
            },
            {
                'name': 'Monarch Alucanid II',
                'from': 'Monarch Alucanid I',
                'icon': require('./assets/kinsects/monarch_alucanid.png'),
                'rarity': '6',
                'attackType': 'Sever',
                'dustEffect': 'Poison',
                'element': 'None',
                'power': '13',
                'speed': '6',
                'heal': '10',
                'materials': [{
                        'name': 'Monster Hardbone',
                        'quantity': '2'
                    },
                    {
                        'name': 'Fucium Ore',
                        'quantity': '2'
                    },
                    {
                        'name': 'Toxin Sac',
                        'quantity': '2'
                    },
                ],
                'cost': '3600'
            },
            {
                'name': 'Monarch Alucanid III',
                'from': 'Monarch Alucanid II',
                'icon': require('./assets/kinsects/monarch_alucanid.png'),
                'rarity': '7',
                'attackType': 'Sever',
                'dustEffect': 'Poison',
                'element': 'None',
                'power': '14',
                'speed': '7',
                'heal': '11',
                'materials': [{
                        'name': 'Elder Dragon Bone',
                        'quantity': '2'
                    },
                    {
                        'name': 'Monster Hardbone',
                        'quantity': '3'
                    },
                    {
                        'name': 'Novacrystal',
                        'quantity': '1'
                    },
                ],
                'cost': '4800'
            },
        ]
    },
    {
        title: 'Empresswing Lineage',
        data: [{
                'name': 'Empresswing I',
                'from': 'Alucanid III',
                'icon': require('./assets/kinsects/empresswing.png'),
                'rarity': '5',
                'attackType': 'Sever',
                'dustEffect': 'Blast',
                'element': 'None',
                'power': '13',
                'speed': '5',
                'heal': '8',
                'materials': [{
                        'name': 'Monster Keenbone',
                        'quantity': '2'
                    },
                    {
                        'name': 'Carbalite Ore',
                        'quantity': '3'
                    },
                    {
                        'name': 'Monster Broth',
                        'quantity': '2'
                    },
                ],
                'cost': '2400'
            },
            {
                'name': 'Empresswing II',
                'from': 'Empresswing I',
                'icon': require('./assets/kinsects/empresswing.png'),
                'rarity': '6',
                'attackType': 'Sever',
                'dustEffect': 'Blast',
                'element': 'None',
                'power': '14',
                'speed': '5',
                'heal': '9',
                'materials': [{
                        'name': 'Monster Hardbone',
                        'quantity': '2'
                    },
                    {
                        'name': 'Fucium Ore',
                        'quantity': '2'
                    },
                    {
                        'name': 'Inferno Sac',
                        'quantity': '2'
                    },
                ],
                'cost': '3600'
            },
            {
                'name': 'Empresswing III',
                'from': 'Empresswing II',
                'icon': require('./assets/kinsects/empresswing.png'),
                'rarity': '7',
                'attackType': 'Sever',
                'dustEffect': 'Blast',
                'element': 'None',
                'power': '15',
                'speed': '5',
                'heal': '10',
                'materials': [{
                        'name': 'Elder Dragon Bone',
                        'quantity': '2'
                    },
                    {
                        'name': 'Monster Hardbone',
                        'quantity': '3'
                    },
                    {
                        'name': 'Firecell Stone',
                        'quantity': '1'
                    },
                ],
                'cost': '4800'
            },
        ]
    },
    {
        title: 'Rigiprayne Lineage',
        data: [{
                'name': 'Rigiprayne I',
                'from': 'Culldrone III',
                'icon': require('./assets/kinsects/rigiprayne.png'),
                'rarity': '3',
                'attackType': 'Sever',
                'dustEffect': 'Paralysis',
                'element': 'None',
                'power': '3',
                'speed': '3',
                'heal': '8',
                'materials': [{
                        'name': 'Monster Bone L',
                        'quantity': '1'
                    },
                    {
                        'name': 'Earth Crystal',
                        'quantity': '2'
                    },
                ],
                'cost': '500'
            },
            {
                'name': 'Rigiprayne II',
                'from': 'Rigiprayne I',
                'icon': require('./assets/kinsects/rigiprayne.png'),
                'rarity': '4',
                'attackType': 'Sever',
                'dustEffect': 'Paralysis',
                'element': 'None',
                'power': '3',
                'speed': '4',
                'heal': '9',
                'materials': [{
                        'name': 'Dragonite Ore',
                        'quantity': '2'
                    },
                    {
                        'name': 'Coral Crystal',
                        'quantity': '2'
                    },
                ],
                'cost': '800'
            },
            {
                'name': 'Rigiprayne III',
                'from': 'Rigiprayne II',
                'icon': require('./assets/kinsects/rigiprayne.png'),
                'rarity': '4',
                'attackType': 'Sever',
                'dustEffect': 'Paralysis',
                'element': 'None',
                'power': '4',
                'speed': '4',
                'heal': '11',
                'materials': [{
                        'name': 'Monster Bone+',
                        'quantity': '2'
                    },
                    {
                        'name': 'Tzitzi-Ya-Ku Claw',
                        'quantity': '1'
                    },
                ],
                'cost': '1200'
            },
            {
                'name': 'Cancadaman I',
                'from': 'Rigiprayne III',
                'icon': require('./assets/kinsects/cancadaman.png'),
                'rarity': '5',
                'attackType': 'Sever',
                'dustEffect': 'Paralysis',
                'element': 'None',
                'power': '4',
                'speed': '10',
                'heal': '13',
                'materials': [{
                        'name': 'Monster Keenbone',
                        'quantity': '2'
                    },
                    {
                        'name': 'Carbalite Ore',
                        'quantity': '3'
                    },
                    {
                        'name': 'Hornetaur Carapace',
                        'quantity': '2'
                    },
                ],
                'cost': '2400'
            },
            {
                'name': 'Cancadaman II',
                'from': 'Cancadaman I',
                'icon': require('./assets/kinsects/cancadaman.png'),
                'rarity': '6',
                'attackType': 'Sever',
                'dustEffect': 'Paralysis',
                'element': 'None',
                'power': '4',
                'speed': '11',
                'heal': '14',
                'materials': [{
                        'name': 'Monster Hardbone',
                        'quantity': '2'
                    },
                    {
                        'name': 'Fucium Ore',
                        'quantity': '2'
                    },
                    {
                        'name': 'Omniplegia Sac',
                        'quantity': '2'
                    },
                ],
                'cost': '3600'
            },
            {
                'name': 'Cancadaman III',
                'from': 'Cancadaman II',
                'icon': require('./assets/kinsects/cancadaman.png'),
                'rarity': '7',
                'attackType': 'Sever',
                'dustEffect': 'Paralysis',
                'element': 'None',
                'power': '4',
                'speed': '12',
                'heal': '15',
                'materials': [{
                        'name': 'Elder Dragon Bone',
                        'quantity': '2'
                    },
                    {
                        'name': 'Monster Hardbone',
                        'quantity': '3'
                    },
                    {
                        'name': 'Dragonbone Relic',
                        'quantity': '1'
                    },
                ],
                'cost': '4800'
            },
        ]
    },
    {
        title: 'Fiddlebrix Lineage',
        data: [{
                'name': 'Fiddlebrix I',
                'from': 'Rigiprayne III',
                'icon': require('./assets/kinsects/fiddlebrix.png'),
                'rarity': '5',
                'attackType': 'Sever',
                'dustEffect': 'Blast',
                'element': 'None',
                'power': '9',
                'speed': '4',
                'heal': '13',
                'materials': [{
                        'name': 'Monster Keenbone',
                        'quantity': '2'
                    },
                    {
                        'name': 'Carbalite Ore',
                        'quantity': '3'
                    },
                    {
                        'name': 'Shamos Hide+',
                        'quantity': '2'
                    },
                ],
                'cost': '2400'
            },
            {
                'name': 'Fiddlebrix II',
                'from': 'Fiddlebrix I',
                'icon': require('./assets/kinsects/fiddlebrix.png'),
                'rarity': '6',
                'attackType': 'Sever',
                'dustEffect': 'Blast',
                'element': 'None',
                'power': '10',
                'speed': '4',
                'heal': '14',
                'materials': [{
                        'name': 'Monster Hardbone',
                        'quantity': '2'
                    },
                    {
                        'name': 'Fucium Ore',
                        'quantity': '2'
                    },
                    {
                        'name': 'Inferno Sac',
                        'quantity': '2'
                    },
                ],
                'cost': '3600'
            },
            {
                'name': 'Fiddlebrix III',
                'from': 'Fiddlebrix II',
                'icon': require('./assets/kinsects/fiddlebrix.png'),
                'rarity': '7',
                'attackType': 'Sever',
                'dustEffect': 'Blast',
                'element': 'None',
                'power': '11',
                'speed': '4',
                'heal': '15',
                'materials': [{
                        'name': 'Elder Dragon Bone',
                        'quantity': '2'
                    },
                    {
                        'name': 'Monster Hardbone',
                        'quantity': '3'
                    },
                    {
                        'name': 'Firecell Stone',
                        'quantity': '1'
                    },
                ],
                'cost': '4800'
            },
        ]
    },
    {
        title: 'Windchopper Lineage',
        data: [{
                'name': 'Windchopper I',
                'from': 'Culldrone III',
                'icon': require('./assets/kinsects/windchopper.png'),
                'rarity': '3',
                'attackType': 'Sever',
                'dustEffect': 'Heal',
                'element': 'None',
                'power': '4',
                'speed': '6',
                'heal': '3',
                'materials': [{
                        'name': 'Monster Bone L',
                        'quantity': '1'
                    },
                    {
                        'name': 'Machalite Ore',
                        'quantity': '1'
                    },
                ],
                'cost': '500'
            },
            {
                'name': 'Windchopper II',
                'from': 'Windchopper I',
                'icon': require('./assets/kinsects/windchopper.png'),
                'rarity': '4',
                'attackType': 'Sever',
                'dustEffect': 'Heal',
                'element': 'None',
                'power': '4',
                'speed': '8',
                'heal': '3',
                'materials': [{
                        'name': 'Dragonite Ore',
                        'quantity': '2'
                    },
                    {
                        'name': 'Machalite Ore',
                        'quantity': '3'
                    },
                ],
                'cost': '800'
            },
            {
                'name': 'Windchopper III',
                'from': 'Windchopper II',
                'icon': require('./assets/kinsects/windchopper.png'),
                'rarity': '4',
                'attackType': 'Sever',
                'dustEffect': 'Heal',
                'element': 'None',
                'power': '4',
                'speed': '10',
                'heal': '3',
                'materials': [{
                        'name': 'Monster Bone+',
                        'quantity': '2'
                    },
                    {
                        'name': 'Rathian Webbing',
                        'quantity': '1'
                    },
                ],
                'cost': '1200'
            },
            {
                'name': 'Grancathar I',
                'from': 'Windchopper III',
                'icon': require('./assets/kinsects/grancathar.png'),
                'rarity': '5',
                'attackType': 'Sever',
                'dustEffect': 'Heal',
                'element': 'None',
                'power': '4',
                'speed': '13',
                'heal': '7',
                'materials': [{
                        'name': 'Monster Keenbone',
                        'quantity': '2'
                    },
                    {
                        'name': 'Carbalite Ore',
                        'quantity': '3'
                    },
                    {
                        'name': 'Hornetaur Innerwing',
                        'quantity': '2'
                    },
                ],
                'cost': '2400'
            },
            {
                'name': 'Grancathar II',
                'from': 'Grancathar I',
                'icon': require('./assets/kinsects/grancathar.png'),
                'rarity': '6',
                'attackType': 'Sever',
                'dustEffect': 'Heal',
                'element': 'None',
                'power': '4',
                'speed': '14',
                'heal': '9',
                'materials': [{
                        'name': 'Monster Hardbone',
                        'quantity': '2'
                    },
                    {
                        'name': 'Fucium Ore',
                        'quantity': '2'
                    },
                    {
                        'name': 'Lightcrystal',
                        'quantity': '1'
                    },
                ],
                'cost': '3600'
            },
            {
                'name': 'Grancathar III',
                'from': 'Grancathar II',
                'icon': require('./assets/kinsects/grancathar.png'),
                'rarity': '7',
                'attackType': 'Sever',
                'dustEffect': 'Heal',
                'element': 'None',
                'power': '4',
                'speed': '15',
                'heal': '11',
                'materials': [{
                        'name': 'Elder Dragon Bone',
                        'quantity': '2'
                    },
                    {
                        'name': 'Monster Hardbone',
                        'quantity': '3'
                    },
                    {
                        'name': 'Novacrystal',
                        'quantity': '1'
                    },
                ],
                'cost': '4800'
            },
        ]
    },
    {
        title: 'Pseudocath Lineage',
        data: [{
                'name': 'Pseudocath I',
                'from': 'Windchopper III',
                'icon': require('./assets/kinsects/pseudocath.png'),
                'rarity': '5',
                'attackType': 'Sever',
                'dustEffect': 'Blast',
                'element': 'None',
                'power': '8',
                'speed': '13',
                'heal': '3',
                'materials': [{
                        'name': 'Monster Keenbone',
                        'quantity': '2'
                    },
                    {
                        'name': 'Carbalite Ore',
                        'quantity': '3'
                    },
                    {
                        'name': 'Monster Broth',
                        'quantity': '2'
                    },
                ],
                'cost': '2400'
            },
            {
                'name': 'Pseudocath II',
                'from': 'Pseudocath I',
                'icon': require('./assets/kinsects/pseudocath.png'),
                'rarity': '6',
                'attackType': 'Sever',
                'dustEffect': 'Blast',
                'element': 'None',
                'power': '10',
                'speed': '14',
                'heal': '3',
                'materials': [{
                        'name': 'Monster Hardbone',
                        'quantity': '2'
                    },
                    {
                        'name': 'Fucium Ore',
                        'quantity': '2'
                    },
                    {
                        'name': 'Inferno Sac',
                        'quantity': '2'
                    },
                ],
                'cost': '3600'
            },
            {
                'name': 'Pseudocath III',
                'from': 'Pseudocath II',
                'icon': require('./assets/kinsects/pseudocath.png'),
                'rarity': '7',
                'attackType': 'Sever',
                'dustEffect': 'Blast',
                'element': 'None',
                'power': '12',
                'speed': '15',
                'heal': '3',
                'materials': [{
                        'name': 'Elder Dragon Bone',
                        'quantity': '2'
                    },
                    {
                        'name': 'Monster Hardbone',
                        'quantity': '3'
                    },
                    {
                        'name': 'Firecell Stone',
                        'quantity': '1'
                    },
                ],
                'cost': '4800'
            },
        ]
    },
    {
        title: 'Mauldrone Lineage',
        data: [{
                'name': 'Mauldrone I',
                'icon': require('./assets/kinsects/mauldrone.png'),
                'rarity': '1',
                'attackType': 'Blunt',
                'dustEffect': 'Heal',
                'element': 'None',
                'power': '1',
                'speed': '1',
                'heal': '1',
            },
            {
                'name': 'Mauldrone II',
                'from': 'Mauldrone I',
                'icon': require('./assets/kinsects/mauldrone.png'),
                'rarity': '2',
                'attackType': 'Blunt',
                'dustEffect': 'Heal',
                'element': 'None',
                'power': '2',
                'speed': '2',
                'heal': '2',
                'materials': [{
                    'name': 'Monster Bone S',
                    'quantity': '3'
                }, ],
                'cost': '200'
            },
            {
                'name': 'Mauldrone III',
                'from': 'Mauldrone II',
                'icon': require('./assets/kinsects/mauldrone.png'),
                'rarity': '2',
                'attackType': 'Blunt',
                'dustEffect': 'Heal',
                'element': 'None',
                'power': '3',
                'speed': '3',
                'heal': '3',
                'materials': [{
                        'name': 'Boulder Bone',
                        'quantity': '2'
                    },
                    {
                        'name': 'Monster Bone M',
                        'quantity': '1'
                    },
                ],
                'cost': '300'
            },
            {
                'name': 'Foebeetle I',
                'from': 'Mauldrone III',
                'icon': require('./assets/kinsects/foebeetle.png'),
                'rarity': '3',
                'attackType': 'Blunt',
                'dustEffect': 'Poison',
                'element': 'None',
                'power': '6',
                'speed': '4',
                'heal': '4',
                'materials': [{
                        'name': 'Monster Bone L',
                        'quantity': '1'
                    },
                    {
                        'name': 'Boulder Bone',
                        'quantity': '1'
                    },
                ],
                'cost': '500'
            },
            {
                'name': 'Foebeetle II',
                'from': 'Foebeetle I',
                'icon': require('./assets/kinsects/foebeetle.png'),
                'rarity': '4',
                'attackType': 'Blunt',
                'dustEffect': 'Poison',
                'element': 'None',
                'power': '8',
                'speed': '5',
                'heal': '4',
                'materials': [{
                    'name': 'Sturdy Bone',
                    'quantity': '3'
                }, ],
                'cost': '800'
            },
            {
                'name': 'Foebeetle III',
                'from': 'Foebeetle II',
                'icon': require('./assets/kinsects/foebeetle.png'),
                'rarity': '4',
                'attackType': 'Blunt',
                'dustEffect': 'Poison',
                'element': 'None',
                'power': '10',
                'speed': '6',
                'heal': '4',
                'materials': [{
                        'name': 'Monster Bone+',
                        'quantity': '2'
                    },
                    {
                        'name': 'Wyvern Bonemass',
                        'quantity': '1'
                    },
                ],
                'cost': '1200'
            },
            {
                'name': 'Carnage Beetle I',
                'from': 'Foebeetle III',
                'icon': require('./assets/kinsects/carnage_beetle.png'),
                'rarity': '5',
                'attackType': 'Blunt',
                'dustEffect': 'Poison',
                'element': 'None',
                'power': '11',
                'speed': '8',
                'heal': '4',
                'materials': [{
                        'name': 'Monster Keenbone',
                        'quantity': '2'
                    },
                    {
                        'name': 'Quality Bone',
                        'quantity': '3'
                    },
                    {
                        'name': 'Dragonvein Crystal',
                        'quantity': '2'
                    },
                ],
                'cost': '2400'
            },
            {
                'name': 'Carnage Beetle II',
                'from': 'Carnage Beetle I',
                'icon': require('./assets/kinsects/carnage_beetle.png'),
                'rarity': '6',
                'attackType': 'Blunt',
                'dustEffect': 'Poison',
                'element': 'None',
                'power': '12',
                'speed': '9',
                'heal': '4',
                'materials': [{
                        'name': 'Monster Hardbone',
                        'quantity': '2'
                    },
                    {
                        'name': 'Brutal Bone',
                        'quantity': '1'
                    },
                    {
                        'name': 'Toxin Sac',
                        'quantity': '2'
                    },
                ],
                'cost': '3600'
            },
            {
                'name': 'Carnage Beetle III',
                'from': 'Carnage Beetle II',
                'icon': require('./assets/kinsects/carnage_beetle.png'),
                'rarity': '7',
                'attackType': 'Blunt',
                'dustEffect': 'Poison',
                'element': 'None',
                'power': '13',
                'speed': '11',
                'heal': '4',
                'materials': [{
                        'name': 'Elder Dragon Blood',
                        'quantity': '2'
                    },
                    {
                        'name': 'Monster Hardbone',
                        'quantity': '3'
                    },
                    {
                        'name': 'Novacrystal',
                        'quantity': '1'
                    },
                ],
                'cost': '4800'
            },
        ]
    },
    {
        title: 'Bonnetfille Lineage',
        data: [{
                'name': 'Bonnetfille I',
                'from': 'Foebeetle III',
                'icon': require('./assets/kinsects/bonnetfille.png'),
                'rarity': '5',
                'attackType': 'Blunt',
                'dustEffect': 'Blast',
                'element': 'None',
                'power': '12',
                'speed': '6',
                'heal': '6',
                'materials': [{
                        'name': 'Monster Keenbone',
                        'quantity': '2'
                    },
                    {
                        'name': 'Quality Bone',
                        'quantity': '3'
                    },
                    {
                        'name': 'Jagras Hide+',
                        'quantity': '2'
                    },
                ],
                'cost': '2400'
            },
            {
                'name': 'Bonnetfille II',
                'from': 'Bonnetfille I',
                'icon': require('./assets/kinsects/bonnetfille.png'),
                'rarity': '6',
                'attackType': 'Blunt',
                'dustEffect': 'Blast',
                'element': 'None',
                'power': '13',
                'speed': '6',
                'heal': '7',
                'materials': [{
                        'name': 'Monster Hardbone',
                        'quantity': '2'
                    },
                    {
                        'name': 'Brutal Bone',
                        'quantity': '1'
                    },
                    {
                        'name': 'Inferno Sac',
                        'quantity': '2'
                    },
                ],
                'cost': '3600'
            },
            {
                'name': 'Bonnetfille III',
                'from': 'Bonnetfille II',
                'icon': require('./assets/kinsects/bonnetfille.png'),
                'rarity': '7',
                'attackType': 'Blunt',
                'dustEffect': 'Blast',
                'element': 'None',
                'power': '14',
                'speed': '6',
                'heal': '8',
                'materials': [{
                        'name': 'Elder Dragon Blood',
                        'quantity': '2'
                    },
                    {
                        'name': 'Monster Hardbone',
                        'quantity': '3'
                    },
                    {
                        'name': 'Firecell Stone',
                        'quantity': '1'
                    },
                ],
                'cost': '4800'
            },
        ]
    },
    {
        title: 'Ladytarge Lineage',
        data: [{
                'name': 'Ladytarge I',
                'from': 'Mauldrone III',
                'icon': require('./assets/kinsects/ladytarge.png'),
                'rarity': '3',
                'attackType': 'Blunt',
                'dustEffect': 'Paralysis',
                'element': 'None',
                'power': '4',
                'speed': '4',
                'heal': '6',
                'materials': [{
                        'name': 'Monster Bone L',
                        'quantity': '1'
                    },
                    {
                        'name': 'Monster Bone S',
                        'quantity': '3'
                    },
                ],
                'cost': '500'
            },
            {
                'name': 'Ladytarge II',
                'from': 'Ladytarge I',
                'icon': require('./assets/kinsects/ladytarge.png'),
                'rarity': '4',
                'attackType': 'Blunt',
                'dustEffect': 'Paralysis',
                'element': 'None',
                'power': '4',
                'speed': '5',
                'heal': '7',
                'materials': [{
                        'name': 'Sturdy Bone',
                        'quantity': '2'
                    },
                    {
                        'name': 'Coral Bone',
                        'quantity': '1'
                    },
                ],
                'cost': '800'
            },
            {
                'name': 'Ladytarge III',
                'from': 'Ladytarge II',
                'icon': require('./assets/kinsects/ladytarge.png'),
                'rarity': '4',
                'attackType': 'Blunt',
                'dustEffect': 'Paralysis',
                'element': 'None',
                'power': '5',
                'speed': '6',
                'heal': '8',
                'materials': [{
                        'name': 'Monster Bone+',
                        'quantity': '2'
                    },
                    {
                        'name': 'Great Girros Fang',
                        'quantity': '1'
                    },
                ],
                'cost': '1200'
            },
            {
                'name': 'Ladypavise I',
                'from': 'Ladytarge III',
                'icon': require('./assets/kinsects/ladypavise.png'),
                'rarity': '5',
                'attackType': 'Blunt',
                'dustEffect': 'Paralysis',
                'element': 'None',
                'power': '7',
                'speed': '6',
                'heal': '13',
                'materials': [{
                        'name': 'Monster Keenbone',
                        'quantity': '2'
                    },
                    {
                        'name': 'Quality Bone',
                        'quantity': '3'
                    },
                    {
                        'name': 'Girros Hide+',
                        'quantity': '2'
                    },
                ],
                'cost': '2400'
            },
            {
                'name': 'Ladypavise II',
                'from': 'Ladypavise I',
                'icon': require('./assets/kinsects/ladypavise.png'),
                'rarity': '6',
                'attackType': 'Blunt',
                'dustEffect': 'Paralysis',
                'element': 'None',
                'power': '8',
                'speed': '6',
                'heal': '14',
                'materials': [{
                        'name': 'Monster Hardbone',
                        'quantity': '2'
                    },
                    {
                        'name': 'Brutal Bone',
                        'quantity': '1'
                    },
                    {
                        'name': 'Omniplegia Sac',
                        'quantity': '2'
                    },
                ],
                'cost': '3600'
            },
            {
                'name': 'Ladypavise III',
                'from': 'Ladypavise II',
                'icon': require('./assets/kinsects/ladypavise.png'),
                'rarity': '7',
                'attackType': 'Blunt',
                'dustEffect': 'Paralysis',
                'element': 'None',
                'power': '9',
                'speed': '6',
                'heal': '15',
                'materials': [{
                        'name': 'Elder Dragon Blood',
                        'quantity': '2'
                    },
                    {
                        'name': 'Monster Hardbone',
                        'quantity': '3'
                    },
                    {
                        'name': 'Dragonbone Relic',
                        'quantity': '1'
                    },
                ],
                'cost': '4800'
            },
        ]
    },
    {
        title: 'Arkmaiden Lineage',
        data: [{
                'name': 'Arkmaiden I',
                'from': 'Ladytarge III',
                'icon': require('./assets/kinsects/arkmaiden.png'),
                'rarity': '5',
                'attackType': 'Blunt',
                'dustEffect': 'Blast',
                'element': 'None',
                'power': '5',
                'speed': '6',
                'heal': '13',
                'materials': [{
                        'name': 'Monster Keenbone',
                        'quantity': '2'
                    },
                    {
                        'name': 'Quality Bone',
                        'quantity': '3'
                    },
                    {
                        'name': 'Vespoid Carapace',
                        'quantity': '2'
                    },
                ],
                'cost': '2400'
            },
            {
                'name': 'Arkmaiden II',
                'from': 'Arkmaiden I',
                'icon': require('./assets/kinsects/arkmaiden.png'),
                'rarity': '6',
                'attackType': 'Blunt',
                'dustEffect': 'Blast',
                'element': 'None',
                'power': '6',
                'speed': '6',
                'heal': '14',
                'materials': [{
                        'name': 'Monster Hardbone',
                        'quantity': '2'
                    },
                    {
                        'name': 'Brutal Bone',
                        'quantity': '1'
                    },
                    {
                        'name': 'Inferno Sac',
                        'quantity': '2'
                    },
                ],
                'cost': '3600'
            },
            {
                'name': 'Arkmaiden III',
                'from': 'Arkmaiden II',
                'icon': require('./assets/kinsects/arkmaiden.png'),
                'rarity': '7',
                'attackType': 'Blunt',
                'dustEffect': 'Blast',
                'element': 'None',
                'power': '7',
                'speed': '6',
                'heal': '15',
                'materials': [{
                        'name': 'Elder Dragon Blood',
                        'quantity': '2'
                    },
                    {
                        'name': 'Monster Hardbone',
                        'quantity': '3'
                    },
                    {
                        'name': 'Firecell Stone',
                        'quantity': '1'
                    },
                ],
                'cost': '4800'
            },
        ]
    },
    {
        title: 'Gullshad Lineage',
        data: [{
                'name': 'Gullshad I',
                'from': 'Mauldrone III',
                'icon': require('./assets/kinsects/gullshad.png'),
                'rarity': '3',
                'attackType': 'Blunt',
                'dustEffect': 'Heal',
                'element': 'None',
                'power': '3',
                'speed': '6',
                'heal': '4',
                'materials': [{
                        'name': 'Monster Bone L',
                        'quantity': '1'
                    },
                    {
                        'name': 'Ancient Bone',
                        'quantity': '2'
                    },
                ],
                'cost': '500'
            },
            {
                'name': 'Gullshad II',
                'from': 'Gullshad I',
                'icon': require('./assets/kinsects/gullshad.png'),
                'rarity': '4',
                'attackType': 'Blunt',
                'dustEffect': 'Heal',
                'element': 'None',
                'power': '3',
                'speed': '8',
                'heal': '4',
                'materials': [{
                        'name': 'Sturdy Bone',
                        'quantity': '2'
                    },
                    {
                        'name': 'Warped Bone',
                        'quantity': '1'
                    },
                ],
                'cost': '800'
            },
            {
                'name': 'Gullshad III',
                'from': 'Gullshad II',
                'icon': require('./assets/kinsects/gullshad.png'),
                'rarity': '4',
                'attackType': 'Blunt',
                'dustEffect': 'Heal',
                'element': 'None',
                'power': '3',
                'speed': '10',
                'heal': '5',
                'materials': [{
                        'name': 'Monster Bone+',
                        'quantity': '2'
                    },
                    {
                        'name': 'Paolumu Shell',
                        'quantity': '1'
                    },
                ],
                'cost': '1200'
            },
            {
                'name': 'Bullshroud I',
                'from': 'Gullshad III',
                'icon': require('./assets/kinsects/bullshroud.png'),
                'rarity': '5',
                'attackType': 'Blunt',
                'dustEffect': 'Heal',
                'element': 'None',
                'power': '5',
                'speed': '13',
                'heal': '5',
                'materials': [{
                        'name': 'Monster Keenbone',
                        'quantity': '2'
                    },
                    {
                        'name': 'Quality Bone',
                        'quantity': '3'
                    },
                    {
                        'name': 'Wingdrake Hide+',
                        'quantity': '2'
                    },
                ],
                'cost': '2400'
            },
            {
                'name': 'Bullshroud II',
                'from': 'Bullshroud I',
                'icon': require('./assets/kinsects/bullshroud.png'),
                'rarity': '6',
                'attackType': 'Blunt',
                'dustEffect': 'Heal',
                'element': 'None',
                'power': '5',
                'speed': '14',
                'heal': '6',
                'materials': [{
                        'name': 'Monster Hardbone',
                        'quantity': '2'
                    },
                    {
                        'name': 'Brutal Bone',
                        'quantity': '1'
                    },
                    {
                        'name': 'Lightcrystal',
                        'quantity': '1'
                    },
                ],
                'cost': '3600'
            },
            {
                'name': 'Bullshroud III',
                'from': 'Bullshroud II',
                'icon': require('./assets/kinsects/bullshroud.png'),
                'rarity': '7',
                'attackType': 'Blunt',
                'dustEffect': 'Heal',
                'element': 'None',
                'power': '5',
                'speed': '15',
                'heal': '7',
                'materials': [{
                        'name': 'Elder Dragon Blood',
                        'quantity': '2'
                    },
                    {
                        'name': 'Monster Hardbone',
                        'quantity': '3'
                    },
                    {
                        'name': 'Novacrystal',
                        'quantity': '1'
                    },
                ],
                'cost': '4800'
            },
        ]
    },
    {
        title: 'Whispervesp Lineage',
        data: [{
                'name': 'Whispervesp I',
                'from': 'Gullshad III',
                'icon': require('./assets/kinsects/whispervesp.png'),
                'rarity': '4',
                'attackType': 'Blunt',
                'dustEffect': 'Heal',
                'element': 'None',
                'power': '3',
                'speed': '10',
                'heal': '5',
                'materials': [{
                        'name': 'Monster Keenbone',
                        'quantity': '2'
                    },
                    {
                        'name': 'Quality Bone',
                        'quantity': '3'
                    },
                    {
                        'name': 'Vespoid Innerwing',
                        'quantity': '2'
                    },
                ],
                'cost': '2400'
            },
            {
                'name': 'Whispervesp II',
                'from': 'Whispervesp I',
                'icon': require('./assets/kinsects/whispervesp.png'),
                'rarity': '6',
                'attackType': 'Blunt',
                'dustEffect': 'Blast',
                'element': 'None',
                'power': '3',
                'speed': '13',
                'heal': '9',
                'materials': [{
                        'name': 'Monster Hardbone',
                        'quantity': '2'
                    },
                    {
                        'name': 'Brutal Bone',
                        'quantity': '1'
                    },
                    {
                        'name': 'Inferno Sac',
                        'quantity': '2'
                    },
                ],
                'cost': '3600'
            },
            {
                'name': 'Whispervesp III',
                'from': 'Whispervesp II',
                'icon': require('./assets/kinsects/whispervesp.png'),
                'rarity': '7',
                'attackType': 'Blunt',
                'dustEffect': 'Blast',
                'element': 'None',
                'power': '3',
                'speed': '15',
                'heal': '11',
                'materials': [{
                        'name': 'Elder Dragon Blood',
                        'quantity': '2'
                    },
                    {
                        'name': 'Monster Hardbone',
                        'quantity': '3'
                    },
                    {
                        'name': 'Firecell Stone',
                        'quantity': '1'
                    },
                ],
                'cost': '4800'
            },
        ]
    },
    {
        title: 'Midgardsormr Lineage',
        data: [{
            'name': 'Dragon Soul',
            'icon': require('./assets/kinsects/dragon_soul.jpg'),
            'rarity': '6',
            'attackType': 'Blunt',
            'dustEffect': 'Blast',
            'element': 'None',
            'power': '12',
            'speed': '11',
            'heal': '1',
        }, {
            'name': 'True Dragon Soul',
            'from': 'Dragon Soul',
            'icon': require('./assets/kinsects/dragon_soul.jpg'),
            'rarity': '7',
            'attackType': 'Blunt',
            'dustEffect': 'Blast',
            'element': 'None',
            'power': '15',
            'speed': '14',
            'heal': '1',
            'materials': [{
                    'name': 'Aetheryte Shard',
                    'quantity': '5'
                },
                {
                    'name': 'Behemoth Shearclaw',
                    'quantity': '1'
                },
                {
                    'name': 'Dragonbone Relic',
                    'quantity': '2'
                },
                {
                    'name': 'Novacrystal',
                    'quantity': '2'
                },
            ],
            'cost': '4800'
        },  ]
    }
];

export { kinsectTrees }