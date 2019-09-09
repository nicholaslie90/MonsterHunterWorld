let endemicLife = [{
        title: 'Terrestrial Life',
        data: [{
                'name': 'Shepherd Hare',
                'icon': require('./assets/endemic_life/shepherd-hare.jpg'),
                'locations': [{
                    'name': 'Ancient Forest',
                    'sectors': '1, 8',
                }, {
                    'name': 'Wildspire Waste',
                    'sectors': '1',
                }, ],
                'tips': 'Flees as the player gets too close. Walk slowly, crouch, or use the Ghille Mantle to get within capture range.',
                'howToCapture': 'Use the Capture Net. Aim for the creature and press Square when the frame turns orange.',
                'housePlacing': 'Carpet, Floor, Hearth, Garden',
                'otherRewards': '7 RP',
                'description': 'endemic-life-shepherd-hare-description',
            },
            {
                'name': 'Pilot Hare',
                'icon': require('./assets/endemic_life/pilot-hare.jpg'),
                'locations': [{
                        'name': 'Ancient Forest',
                        'sectors': '1, 8, mostly on sunny days',
                    },
                    {
                        'name': 'Wildspire Waste',
                        'sectors': '1, mostly on sunny days',
                    },
                ],
                'youTube': ['oBYc825tBbo'],
                'tips': 'Flees as the player gets too close. Walk slowly, crouch, or use the Ghille Mantle to get within capture range.',
                'howToCapture': 'Use the Capture Net. Aim for the creature and press Square when the frame turns orange.',
                'housePlacing': 'Carpet, Floor, Hearth, Garden',
                'description': 'endemic-life-pilot-hare-description',
            },
            {
                'name': 'Forest Gecko',
                'icon': require('./assets/endemic_life/forest-gecko.jpg'),
                'locations': [{
                    'name': 'Ancient Forest',
                    'sectors': '10, 17',
                }],
                'youTube': ['E7zofgalvN4'],
                'howToCapture': 'Use the Capture Net. Aim for the creature and press Square when the frame turns orange.',
                'housePlacing': 'Carpet, Floor, Hearth, Entryway, Garden, Tree, Column',
                'otherRewards': '7 RP',
                'description': 'endemic-life-forest-gecko-description',
            },
            {
                'name': 'Wildspire Gecko',
                'icon': require('./assets/endemic_life/wildspire-gecko.jpg'),
                'locations': [{
                    'name': 'Wildspire Waste',
                    'sectors': '5 (in the cave leading up the mountain), 6, 15 (where you land when jumping in the hole north of sector 8',
                }],
                'howToCapture': 'Use the Capture Net. Aim for the creature and press Square when the frame turns orange.',
                'housePlacing': 'Carpet, Floor, Hearth, Entryway, Garden, Tree Column',
                'description': 'endemic-life-wildspire-gecko-description',
            },
            {
                'name': 'Gloom Gecko',
                'icon': require('./assets/endemic_life/gloom-gecko.jpg'),
                'locations': [{
                        'name': 'Rotten Vale',
                        'sectors': '11 (climb the vines in the Central Camp (11) and jump down south, they are on the wall)',
                    },
                    {
                        'name': 'Elder\'s Recess',
                        'sectors': '8 (where you have to crouch to enter the Eastern Camp (8), near some Honey)',
                    },
                ],
                'howToCapture': 'Use the Capture Net. Aim for the creature and press Square when the frame turns orange.',
                'housePlacing': 'Carpet, Floor, Hearth, Entryway, Garden, Tree, Column',
                'description': 'endemic-life-gloom-gecko-description'
            },
            {
                'name': 'Moonlight Gecko',
                'icon': require('./assets/endemic_life/moonlight-gecko.jpg'),
                'locations': [{
                        'name': 'Rotten Vale',
                        'sectors': '11 (after you jump down from camp it can be seen above the glowing moss, sector 13 next to the Lump of Meat behind a branch wall)',
                    },
                    {
                        'name': 'Elder\'s Recess',
                        'sectors': '8 (right near the camp site above the glowing moss)',
                    },
                ],
                'youTube': ['oBYc825tBbo'],
                'howToCapture': 'Use the Capture Net. Aim for the creature and press Square when the frame turns orange.',
                'housePlacing': 'Carpet, Floor, Hearth, Entryway, Garden, Tree, Column',
                'otherRewards': '220 RP',
                'description': 'endemic-life-moonlight-gecko-description'
            },
            {
                'name': 'Vaporonoid',
                'icon': require('./assets/endemic_life/vaporonoid.jpg'),
                'locations': [{
                    'name': 'Ancient Forest',
                    'sectors': '10',
                }, {
                    'name': 'Wildspire Waste',
                    'sectors': '5 (level 3, go straight up north from sector 1)',
                }, ],
                'tips': 'Won\'t flee unless its web is destroyed and doesn\'t move much. Easily captured.',
                'howToCapture': 'Use the Capture Net. Aim for the creature and press Square when the frame turns orange.',
                'housePlacing': 'Column (spawn with its web)',
                'description': 'endemic-life-vaporonoid-description',
            },
            {
                'name': 'Scavantula',
                'icon': require('./assets/endemic_life/scavantula.jpg'),
                'locations': [{
                    'name': 'Rotten Vale',
                    'sectors': '4 (on the ground), 5 (up inside a small area with bones)',
                }],
                'tips': 'Will flee when startled by a net throw, an attack, or when disturbing the bonepiles they are gathered around.',
                'howToCapture': 'Use the Capture Net. Aim for the creature and press Square when the frame turns orange.',
                'housePlacing': 'Carpet, Floor, Hearth, Garden',
                'description': 'endemic-life-scavantula-description',
            },
            {
                'name': 'Revolture',
                'icon': require('./assets/endemic_life/revolture.jpg'),
                'locations': [{
                    'name': 'Ancient Forest',
                    'sectors': 'Outdoor Areas',
                }],
                'tips': 'Pretty common around other creatures, especially dead ones (they react to what the player kills)',
                'howToCapture': 'Use the Capture Net. Aim for the creature and press Square when the frame turns orange.',
                'housePlacing': 'Carpet, Floor, Hearth, Garden, Sky',
                'description': 'endemic-life-revolture-description'
            },
            {
                'name': 'Blissbill',
                'icon': require('./assets/endemic_life/blissbill.jpg'),
                'locations': [{
                    'name': 'Ancient Forest',
                    'sectors': '1',
                }, {
                    'name': 'Wildspire Waste',
                    'sectors': '5, 9',
                }, ],
                'howToCapture': 'Use the Capture Net. Aim for the creature and press Square when the frame turns orange.',
                'housePlacing': 'Carpet, Floor, Hearth, Garden, Sky',
                'description': 'endemic-life-blissbill-description'
            },
            {
                'name': 'Dung Beetle',
                'icon': require('./assets/endemic_life/dung-beetle.jpg'),
                'locations': [{
                    'name': 'Wildspire Waste',
                    'sectors': '7 (near the small cave entrance)',
                }],
                'howToCapture': 'Use the Capture Net. Aim for the creature and press Square when the frame turns orange.',
                'housePlacing': 'Carpet, Floor, Hearth, Garden',
                'notes': 'Won\'t have its dung ball unless you feed it in your house.',
                'description': 'endemic-life-dung-beetle-description'
            },
            {
                'name': 'Bomb Beetle',
                'icon': require('./assets/endemic_life/bomb-beetle.jpg'),
                'locations': [{
                    'name': 'Elder\'s Recess',
                    'sectors': '2',
                }],
                'howToCapture': 'Use the Capture Net. Aim for the creature and press Square when the frame turns orange.',
                'housePlacing': 'Carpet, Floor, Hearth, Garden',
                'notes': 'Won\'t have its rock unless you feed it in your house.',
                'description': 'endemic-life-bomb-beetle-description'
            },
            {
                'name': 'Paratoad',
                'icon': require('./assets/endemic_life/paratoad.jpg'),
                'locations': [{
                    'name': 'Ancient Forest',
                    'sectors': '5, 9',
                }, {
                    'name': 'Wildspire Waste',
                    'sectors': '4',
                }, {
                    'name': 'Coral Highlands',
                    'sectors': '13',
                }, {
                    'name': 'Rotten Vale',
                    'sectors': '10',
                }, {
                    'name': 'Elder\'s Recess',
                    'sectors': '2',
                }, ],
                'howToCapture': 'Use the Capture Net. Aim for the creature and press Square when the frame turns orange.',
                'housePlacing': 'Carpet, Floor, Hearth, Garden',
                'otherRewards': '20 RP',
                'description': 'endemic-life-paratoad-description'
            },
            {
                'name': 'Sleeptoad',
                'icon': require('./assets/endemic_life/sleeptoad.jpg'),
                'locations': [{
                    'name': 'Coral Highlands',
                    'sectors': '5',
                }],
                'howToCapture': 'Use the Capture Net. Aim for the creature and press Square when the frame turns orange.',
                'housePlacing': 'Carpet, Floor, Hearth, Garden',
                'description': 'endemic-life-sleeptoad-description'
            },
            {
                'name': 'Nitrotoad',
                'icon': require('./assets/endemic_life/nitrotoad.jpg'),
                'locations': [{
                    'name': 'Elder\'s Recess',
                    'sectors': '2, 11',
                }],
                'howToCapture': 'Use the Capture Net. Aim for the creature and press Square when the frame turns orange.',
                'housePlacing': 'Carpet, Floor, Hearth, Garden',
                'description': 'endemic-life-nitrotoad-description'
            },
            {
                'name': 'Wiggler',
                'icon': require('./assets/endemic_life/wiggler.jpg'),
                'locations': [{
                    'name': 'Coral Highlands',
                    'sectors': '1, 3, 9, 10, 11',
                }],
                'tips': 'By crouching (pressing the dodge button while standing still) and moving slowly, or by simply using the Ghille Mantle, you can avoid it fleeing as you approach.',
                'howToCapture': 'Use the Capture Net. Aim for the creature and press Square when the frame turns orange.',
                'housePlacing': 'Pot',
                'description': 'endemic-life-wiggler-description'
            },
            {
                'name': 'Wiggler Queen',
                'icon': require('./assets/endemic_life/wiggler-queen.jpg'),
                'locations': [{
                    'name': 'Coral Highlands',
                    'sectors': '1, 3, 9, 10, 11',
                }],
                'youTube': ['oBYc825tBbo'],
                'tips': 'Spawns randomly within Wiggler groups at night. By crouching (pressing the dodge button while standing still) and moving slowly, or by simply using the Ghille Mantle, you can avoid it fleeing as you approach.',
                'howToCapture': 'Use the Capture Net. Aim for the creature and press Square when the frame turns orange.',
                'housePlacing': 'Pot',
                'otherRewards': '180 RP',
                'description': 'endemic-life-wiggler-queen-description',
            },
            {
                'name': 'Carrier Ant',
                'icon': require('./assets/endemic_life/carrier-ant.jpg'),
                'locations': [{
                    'name': 'Ancient Forest',
                    'sectors': '1',
                }, {
                    'name': 'Wildspire Waste',
                    'sectors': '1, 6, 8, (large group of Carrier Ant will also spawn when a monster destroy one of their nest and flee in all directions)',
                }, {
                    'name': 'Rotten Vale',
                    'sectors': '15 (close to the Grimalkyne camp)',
                }, ],
                'howToCapture': 'Use the Capture Net. Aim for the creature and press Square when the frame turns orange.',
                'housePlacing': 'Carpet, Floor, Hearth, Garden',
                'description': 'endemic-life-carrier-ant-description',
            },
            {
                'name': 'Emperor Hopper',
                'icon': require('./assets/endemic_life/emperor-hopper.jpg'),
                'locations': [{
                    'name': 'Ancient Forest',
                    'sectors': '',
                }, {
                    'name': 'Wildspire Waste',
                    'sectors': '1 (right outside the camp)',
                }, ],
                'howToCapture': 'Use the Capture Net. Aim for the creature and press Square when the frame turns orange.',
                'housePlacing': 'Carpet, Floor, Hearth, Garden',
                'description': 'endemic-life-emperor-hopper-description'
            },
            {
                'name': 'Tyrant Hopper',
                'icon': require('./assets/endemic_life/tyrant-hopper.jpg'),
                'locations': [{
                    'name': 'Rotten Vale',
                    'sectors': '2, 10, 5 (right as you crawl under the blockage they\'ll be jumping in front of you. BE SLOW!)',
                }],
                'youTube': ['oBYc825tBbo'],
                'howToCapture': 'Use the Capture Net. Aim for the creature and press Square when the frame turns orange.',
                'housePlacing': 'Carpet, Floor, Hearth, Garden',
                'description': 'endemic-life-tyrant-hopper-description'
            },
            {
                'name': 'Iron Helmcrab',
                'icon': require('./assets/endemic_life/iron-helmcrab.jpg'),
                'locations': [{
                    'name': 'Wildspire Waste',
                    'sectors': '4, 9, 10 (around the swamp area)',
                }],
                'howToCapture': 'Use the Capture Net. Aim for the creature and press Square when the frame turns orange.',
                'housePlacing': 'Carpet, Floor, Hearth, Garden',
                'description': 'endemic-life-iron-helmcrab-description',
            },
            {
                'name': 'Soldier Helmcrab',
                'icon': require('./assets/endemic_life/soldier-helmcrab.jpg'),
                'locations': [{
                    'name': 'Rotten Vale',
                    'sectors': '9 *hard to see but wandering on the ground)',
                }],
                'howToCapture': 'Use the Capture Net. Aim for the creature and press Square when the frame turns orange.',
                'housePlacing': 'Carpet, Floor, Hearth, Garden',
                'description': 'endemic-life-soldier-helmcrab-description',
            },
            {
                'name': 'Emerald Helmcrab',
                'icon': require('./assets/endemic_life/emerald-helmcrab.jpg'),
                'locations': [{
                    'name': 'Wildspire Waste',
                    'sectors': '4, 9, 10 (randomly spawn around Iron Helmcrab)',
                }, {
                    'name': 'Rotten Vale',
                    'sectors': '9 (randomly spawn around Soldier Helmcrab)',
                }, ],
                'youTube': ['oBYc825tBbo'],
                'howToCapture': 'Use the Capture Net. Aim for the creature and press Square when the frame turns orange.',
                'housePlacing': 'Carpet, Floor, Hearth, Garden',
                'otherRewards': '240 RP',
                'description': 'endemic-life-emerald-helmcrab-description',
            },
            {
                'name': 'Copper Calappa',
                'icon': require('./assets/endemic_life/copper-calappa.jpg'),
                'locations': [{
                    'name': 'Caverns of El Dorado',
                    'sectors': '1, 2 and 3',
                }],
                'tips': 'Copper Calappas can be found picking materials off of Kulve Taroth. They are extremely common. This creature was added in the Kulve Taroth update (Patch 3.0). Copper Calappa will carry Gold Chip Fragments, worth 300z per piece. This creature is not necessary to unlock the Wild, Wild, Wildlife Guild Card background. Since this creature lives in the Caverns of El Dorado, which are only accessible during the Kulve Taroth event, it is only available for capture for a limited time.',
                'howToCapture': 'Use the Capture Net. Aim for the creature and press Square when the frame turns orange.',
                'housePlacing': 'Carpet, Floor, Hearth, Garden',
                'otherRewards': '8 RP',
                'description': 'endemic-life-copper-calappa-description',
            },
            {
                'name': 'Gold Calappa',
                'icon': require('./assets/endemic_life/copper-calappa.jpg'),
                'locations': [{
                    'name': 'Caverns of El Dorado',
                    'sectors': '1, 2 and 3',
                }],
                'tips': 'Gold Calappas will sometimes spawn on the lower levels of Sector 1 near normal Copper Calappas. The Gold Calappa is much larger than its counterpart, has a shinier shell, and has a red jewel on its back, making it easy to differentiate. This creature was added with the Kulve Taroth update (Patch 3.0). This creature is not necessary to unlock the Wild, Wild, Wildlife Guild Card background. Since this creature lives in the Caverns of El Dorado, which are only accessible during the Kulve Taroth event, it is only available for capture for a limited time.',
                'howToCapture': 'Use the Capture Net. Aim for the creature and press Square when the frame turns orange.',
                'housePlacing': 'Carpet, Floor, Hearth, Garden',
                'otherRewards': '100 RP',
                'description': 'endemic-life-gold-calappa-description',
            },
            {
                'name': 'Gold Helmcrab',
                'icon': require('./assets/endemic_life/gold-helmcrab.jpg'),
                'locations': [{
                    'name': 'Caverns of El Dorado',
                    'sectors': '1 and 2',
                }],
                'tips': 'Gold Helmcrabs are found along the floors of the Caverns of El Dorado in large groups. If you can\'t find any in Sector 1, there will be a pack at the start of Sector 2 directly in front of you as you chase Kulve Taroth.',
                'howToCapture': 'Use the Capture Net. Aim for the creature and press Square when the frame turns orange.',
                'housePlacing': 'Carpet, Floor, Hearth, Garden',
                'otherRewards': '14 RP',
                'description': 'endemic-life-gold-helmcrab-description',
            },
            {
                'name': 'Shiny Gold Helmcrab',
                'icon': require('./assets/endemic_life/shiny-gold-helmcrab.jpg'),
                'locations': [{
                    'name': 'Caverns of El Dorado',
                    'sectors': '1 and 2',
                }],
                'tips': ' The Shiny Gold Helmcrab will sometimes spawn near the Fire Herb in the top-left corner of Sector 1, out on the sunlit rocks. It will also spawn in Sector 2 in the sunlit patch on the rocks above the lava fissure. Unlike the standard Gold Helmcrab, this creature is almost completely covered in gold and is extremely noticeable in the sunlight.',
                'howToCapture': 'Use the Capture Net. Aim for the creature and press Square when the frame turns orange.',
                'housePlacing': 'Carpet, Floor, Hearth, Garden',
                'otherRewards': '120 RP',
                'description': 'endemic-life-shiny-gold-helmcrab-description'
            },
            {
                'name': 'Tsuchinoko',
                'icon': require('./assets/endemic_life/tsuchinoko.jpg'),
                'locations': [{
                    'name': 'Caverns of El Dorado',
                    'sectors': '1',
                }],
                'tips': 'Tsuchinoko scuttles along the ground, similar to the Gold Helmcrab. However, it is smaller and moves faster, so it is easy to tell when you\'ve found a Tsuchinoko. This creature was added with the Kulve Taroth update (Patch 3.0). The creature resembles a cross between a snake and a stingray, and moves around like a worm. Strange, to say the least. This creature is not necessary to unlock the Wild, Wild, Wildlife Guild Card background. This creature gets the special border for rare animals in the Endemic Life portion of the Field Guide. It is classified as Terrestrial Life. Since this creature lives in the Caverns of El Dorado, which are only accessible during the Kulve Taroth event, it is only available for capture for a limited time.',
                'howToCapture': 'Use the Capture Net. Aim for the creature and press Square when the frame turns orange.',
                'housePlacing': 'Carpet, Floor, Hearth, Garden',
                'otherRewards': '500 RP',
                'description': 'endemic-life-tsuchinoko-description'
            },
        ],
    },
    {
        title: 'Aquatic Life',
        data: [{
                'name': 'Climbing Joyperch',
                'icon': require('./assets/endemic_life/climbing-joyperch.jpg'),
                'locations': [{
                    'name': 'Ancient Forest',
                    'sectors': '',
                }, {
                    'name': 'Wildspire Waste',
                    'sectors': '1 (middle of the water), 11 (in the water inside underground cave)',
                }, ],
                'howToCapture': 'Use the Capture Net. Aim for the creature and press Square when the frame turns orange.',
                'housePlacing': 'Garden, Pond',
                'description': 'endemic-life-climbing-joyperch-description',
            },
            {
                'name': 'Pink Parexus',
                'icon': require('./assets/endemic_life/pink-parexus.jpg'),
                'locations': [{
                    'name': 'Ancient Forest',
                    'sectors': '1, 4, 9, 11',
                }, {
                    'name': 'Wildspire Waste',
                    'sectors': '6',
                }, {
                    'name': 'Coral Highlands',
                    'sectors': '7, 11',
                }, {
                    'name': 'Rotten Vale',
                    'sectors': '9',
                }, {
                    'name': 'Elder\'s Recess',
                    'sectors': '8',
                }, ],
                'howToCapture': 'Use the Fishing Rod and press O at the right time.',
                'housePlacing': 'Pond',
                'otherRewards': '15 RP (200 RP if Great Size)',
                'description': 'endemic-life-pink-parexus-description'
            },
            {
                'name': 'Pink Parexus (Great Size)',
                'icon': require('./assets/endemic_life/pink-parexus.jpg'),
                'locations': [{
                    'name': 'Ancient Forest',
                    'sectors': '1, 4, 9, 11',
                }, {
                    'name': 'Wildspire Waste',
                    'sectors': '6',
                }, {
                    'name': 'Coral Highlands',
                    'sectors': '7, 11',
                }, {
                    'name': 'Rotten Vale',
                    'sectors': '9',
                }, {
                    'name': 'Elder\'s Recess',
                    'sectors': '8',
                }, ],
                'howToCapture': 'Use the Fishing Rod and press O at the right time.',
                'housePlacing': 'Pond',
                'otherRewards': '200 RP',
                'description': 'endemic-life-pink-parexus-description'
            },
            {
                'name': 'Burst Arowana',
                'icon': require('./assets/endemic_life/burst-arowana.jpg'),
                'locations': [{
                    'name': 'Ancient Forest',
                    'sectors': '1, 11',
                }, {
                    'name': 'Wildspire Waste',
                    'sectors': '1, 10',
                }, {
                    'name': 'Coral Highlands',
                    'sectors': '11',
                }, {
                    'name': 'Rotten Vale',
                    'sectors': '9',
                }, {
                    'name': 'Elder\'s Recess',
                    'sectors': '8',
                }, ],
                'howToCapture': 'Use the Fishing Rod and press O at the right time.',
                'housePlacing': 'Pond',
                'otherRewards': '18 RP',
                'description': 'endemic-life-burst-arowana-description',
            },
            {
                'name': 'Burst Arowana (Great Size)',
                'icon': require('./assets/endemic_life/burst-arowana.jpg'),
                'locations': [{
                    'name': 'Ancient Forest',
                    'sectors': '1, 11',
                }, {
                    'name': 'Wildspire Waste',
                    'sectors': '1, 10',
                }, {
                    'name': 'Coral Highlands',
                    'sectors': '11',
                }, {
                    'name': 'Rotten Vale',
                    'sectors': '9',
                }, {
                    'name': 'Elder\'s Recess',
                    'sectors': '8',
                }, ],
                'howToCapture': 'Use the Fishing Rod and press O at the right time.',
                'housePlacing': 'Pond',
                'otherRewards': '?? RP',
                'description': 'endemic-life-burst-arowana-description',
            },
            {
                'name': 'Bomb Arowana',
                'icon': require('./assets/endemic_life/bomb-arowana.jpg'),
                'locations': [{
                    'name': 'Ancient Forest',
                    'sectors': '11',
                }, {
                    'name': 'Wildspire Waste',
                    'sectors': '10',
                }, {
                    'name': 'Coral Highlands',
                    'sectors': '11, 14',
                }, {
                    'name': 'Rotten Vale',
                    'sectors': '9',
                }, {
                    'name': 'Elder\'s Recess',
                    'sectors': '8',
                }, ],
                'howToCapture': 'Use the Fishing Rod and press O at the right time.',
                'housePlacing': 'Pond',
                'otherRewards': '20 RP, Bomb Arowana Scale',
                'description': 'endemic-life-bomb-arowana-description',
            },
            {
                'name': 'Bomb Arowana (Great Size)',
                'icon': require('./assets/endemic_life/bomb-arowana.jpg'),
                'locations': [{
                    'name': 'Ancient Forest',
                    'sectors': '11',
                }, {
                    'name': 'Wildspire Waste',
                    'sectors': '10',
                }, {
                    'name': 'Coral Highlands',
                    'sectors': '11, 14',
                }, {
                    'name': 'Rotten Vale',
                    'sectors': '9',
                }, {
                    'name': 'Elder\'s Recess',
                    'sectors': '8',
                }, ],
                'howToCapture': 'Use the Fishing Rod and press O at the right time.',
                'housePlacing': 'Pond',
                'otherRewards': '?? RP, Great Bomb Arowana Scale',
                'description': 'endemic-life-bomb-arowana-description',
            },
            {
                'name': 'Andangler',
                'icon': require('./assets/endemic_life/andangler.jpg'),
                'locations': [{
                    'name': 'Coral Highlands',
                    'sectors': '11, 14',
                }],
                'howToCapture': 'Use the Fishing Rod and press O at the right time.',
                'housePlacing': 'Pond',
                'description': 'endemic-life-andangler-description',
            },
            {
                'name': 'Hopguppy',
                'icon': require('./assets/endemic_life/hopguppy.jpg'),
                'locations': [{
                    'name': 'Ancient Forest',
                    'sectors': '11',
                }, {
                    'name': 'Wildspire Waste',
                    'sectors': '6 (Central Camp, small pond behind the tent)',
                }, {
                    'name': 'Coral Highlands',
                    'sectors': '',
                }, ],
                'howToCapture': 'Use the Capture Net in the water to catch these small fishes, they won\'t bite the Fishing Rod.',
                'housePlacing': 'Pond',
                'description': 'endemic-life-hogpuppy-description'
            },
            {
                'name': 'Petricanths',
                'icon': require('./assets/endemic_life/petricanths.jpg'),
                'locations': [{
                    'name': 'Rotten Vale',
                    'sectors': '15 (rarely spawns in the Goldenfish pond on the left of the Plunderers.)',
                }, {
                    'name': 'Elder\'s Recess',
                    'sectors': '8 (Eastern Camp, rarely spawns far on the left when facing the pond.)',
                }, ],
                'youTube': ['zJc7Il7Af0M'],
                'tips': 'Fishing all the fish in a pond will cause it to refresh after a short time, alternating between both areas also refreshes them. As a larger fish, the player needs to play the fishing mini-game. A baitbug can help lure the Petricanths but isn\'t mandatory.',
                'howToCapture': 'Use the Fishing Rod and press O at the right time.',
                'housePlacing': 'Pond',
                'otherRewards': '500 RP, A Living Fossil Medal',
                'description': 'endemic-life-petricanths-description'
            },
            {
                'name': 'Whetfish',
                'icon': require('./assets/endemic_life/whetfish.jpg'),
                'locations': [{
                    'name': 'Ancient Forest',
                    'sectors': '1, 4',
                }, {
                    'name': 'Wildspire Waste',
                    'sectors': '1, 6',
                }, {
                    'name': 'Coral Highlands',
                    'sectors': '11',
                }, {
                    'name': 'Rotten Vale',
                    'sectors': '9',
                }, {
                    'name': 'Elder\'s Recess',
                    'sectors': '8',
                }, ],
                'howToCapture': 'Use the Fishing Rod and press O at the right time.',
                'housePlacing': 'Pond',
                'otherRewards': '12 RP',
                'description': 'endemic-life-whetfish-description',
            },
            {
                'name': 'Whetfish (Great Size)',
                'icon': require('./assets/endemic_life/whetfish.jpg'),
                'locations': [{
                    'name': 'Ancient Forest',
                    'sectors': '1, 4',
                }, {
                    'name': 'Wildspire Waste',
                    'sectors': '1, 6',
                }, {
                    'name': 'Coral Highlands',
                    'sectors': '11',
                }, {
                    'name': 'Rotten Vale',
                    'sectors': '9',
                }, {
                    'name': 'Elder\'s Recess',
                    'sectors': '8',
                }, ],
                'howToCapture': 'Use the Fishing Rod and press O at the right time.',
                'housePlacing': 'Pond',
                'otherRewards': '?? RP, Whetfish Fin+',
                'description': 'endemic-life-whetfish-description',
            },
            {
                'name': 'Gastronome Tuna',
                'icon': require('./assets/endemic_life/gastronome-tuna.jpg'),
                'locations': [{
                    'name': 'Ancient Forest',
                    'sectors': '4 (on the shore near Kestodon)',
                }, {
                    'name': 'Wildspire Waste',
                    'sectors': '6 (Central Camp, inside the camp)',
                }, {
                    'name': 'Elder\'s Recess',
                    'sectors': '8 (Eastern Camp, inside the camp)',
                }, ],
                'youTube': ['oBYc825tBbo'],
                'howToCapture': 'Use the Fishing Rod and press O at the right time.',
                'housePlacing': 'Pond',
                'otherRewards': '150 RP, a random item will drop next to the player (Sushifish Scale, Golden Scale, Baitbug, Lightcrystal)',
                'description': 'endemic-life-gastronome-tuna-description'
            },
            {
                'name': 'Gastronome Tuna (Great Size)',
                'icon': require('./assets/endemic_life/gastronome-tuna.jpg'),
                'locations': [{
                    'name': 'Ancient Forest',
                    'sectors': '4 (on the shore near Kestodon)',
                }, {
                    'name': 'Wildspire Waste',
                    'sectors': '6 (Central Camp, inside the camp)',
                }, {
                    'name': 'Rotten Vale',
                    'sectors': '10',
                }, {
                    'name': 'Elder\'s Recess',
                    'sectors': '8 (Eastern Camp, inside the camp)',
                }, ],
                'howToCapture': 'Use the Fishing Rod and press O at the right time.',
                'housePlacing': 'Pond',
                'otherRewards': '400 RP, a random item will drop next to the player (Sushifish Scale, Golden Scale, Baitbug, Lightcrystal)',
                'description': 'endemic-life-gastronome-tuna-description'
            },
            {
                'name': 'King Marlin',
                'icon': require('./assets/endemic_life/king-marlin.jpg'),
                'locations': [{
                    'name': 'Ancient Forest',
                    'sectors': '4 (rarely spawn during daytime)',
                }],
                'youTube': ['oBYc825tBbo'],
                'howToCapture': 'Use the Fishing Rod and press O at the right time.',
                'housePlacing': 'Pond',
                'otherRewards': '180 RP (560 RP if Great Size)',
                'description': 'endemic-life-king-marlin-description'
            },
            {
                'name': 'King Marlin (Great Size)',
                'icon': require('./assets/endemic_life/king-marlin.jpg'),
                'locations': [{
                    'name': 'Ancient Forest',
                    'sectors': '4 (rarely spawn during daytime)',
                }],
                'howToCapture': 'Use the Fishing Rod and press O at the right time.',
                'housePlacing': 'Pond',
                'otherRewards': '560 RP',
                'description': 'endemic-life-king-marlin-description'
            },
            {
                'name': 'Goldenfish',
                'icon': require('./assets/endemic_life/goldenfish.jpg'),
                'locations': [{
                    'name': 'Coral Highlands',
                    'sectors': '14',
                }, {
                    'name': 'Rotten Vale',
                    'sectors': '15 (can catch 7 in one go)',
                }, {
                    'name': 'Elder\'s Recess',
                    'sectors': '8',
                }, ],
                'howToCapture': 'Use the Fishing Rod and press O at the right time.',
                'housePlacing': 'Pond',
                'otherRewards': '30 RP, Golden Scale',
                'description': 'endemic-life-goldenfish-description'
            },
            {
                'name': 'Goldenfish (Great Size)',
                'icon': require('./assets/endemic_life/goldenfish.jpg'),
                'locations': [{
                    'name': 'Coral Highlands',
                    'sectors': '14',
                }, {
                    'name': 'Rotten Vale',
                    'sectors': '15 (can catch 7 in one go)',
                }, {
                    'name': 'Elder\'s Recess',
                    'sectors': '8',
                }, ],
                'howToCapture': 'Use the Fishing Rod and press O at the right time.',
                'housePlacing': 'Pond',
                'otherRewards': '150 RP, Golden Scale+',
                'description': 'endemic-life-goldenfish-description'
            },
            {
                'name': 'Goldenfry',
                'icon': require('./assets/endemic_life/goldenfry.jpg'),
                'locations': [{
                    'name': 'Ancient Forest',
                    'sectors': '11 (in a small cave where Grimalkynes often spawn)',
                }, {
                    'name': 'Wildspire Waste',
                    'sectors': '6 (Camp)',
                }, {
                    'name': 'Coral Highlands',
                    'sectors': '',
                }, {
                    'name': 'Rotten Vale',
                    'sectors': '15',
                }, {
                    'name': 'Elder\'s Recess',
                    'sectors': '',
                }, ],
                'howToCapture': 'Use the Fishing Rod and press O at the right time.',
                'housePlacing': 'Pond',
                'otherRewards': '20 RP, Glided Scale',
                'description': 'endemic-life-goldenfry-description'
            },
            {
                'name': 'Goldenfry (Great Size)',
                'icon': require('./assets/endemic_life/goldenfry.jpg'),
                'locations': [{
                    'name': 'Ancient Forest',
                    'sectors': '11 (in a small cave where Grimalkynes often spawn)',
                }, {
                    'name': 'Wildspire Waste',
                    'sectors': '6 (Camp)',
                }, {
                    'name': 'Coral Highlands',
                    'sectors': '',
                }, {
                    'name': 'Rotten Vale',
                    'sectors': '15',
                }, {
                    'name': 'Elder\'s Recess',
                    'sectors': '',
                }, ],
                'howToCapture': 'Use the Fishing Rod and press O at the right time.',
                'housePlacing': 'Pond',
                'otherRewards': '?? RP, Glided Scale+',
                'description': 'endemic-life-goldenfry-description'
            },
            {
                'name': 'Sushifish',
                'icon': require('./assets/endemic_life/sushifish.jpg'),
                'locations': [{
                    'name': 'Ancient Forest',
                    'sectors': '1, 4, 11',
                }, {
                    'name': 'Wildspire Waste',
                    'sectors': '1, 6, 10',
                }, {
                    'name': 'Coral Highlands',
                    'sectors': '1, 7, 11',
                }, {
                    'name': 'Rotten Vale',
                    'sectors': '9',
                }, {
                    'name': 'Elder\'s Recess',
                    'sectors': '8',
                }, ],
                'howToCapture': 'Use the Capture Net. Aim for the creature and press Square when the frame turns orange.',
                'housePlacing': 'Pond',
                'otherRewards': '15 RP, Sushifish Scale',
                'description': 'endemic-life-sushifish-description'
            },
            {
                'name': 'Sushifish (Great Size)',
                'icon': require('./assets/endemic_life/sushifish.jpg'),
                'locations': [{
                    'name': 'Ancient Forest',
                    'sectors': '1, 4, 11',
                }, {
                    'name': 'Wildspire Waste',
                    'sectors': '1, 6, 10',
                }, {
                    'name': 'Coral Highlands',
                    'sectors': '1, 7, 11',
                }, {
                    'name': 'Rotten Vale',
                    'sectors': '9',
                }, {
                    'name': 'Elder\'s Recess',
                    'sectors': '8',
                }, ],
                'howToCapture': 'Use the Capture Net. Aim for the creature and press Square when the frame turns orange.',
                'housePlacing': 'Pond',
                'otherRewards': '?? RP, Great Sushifish Scale',
                'description': 'endemic-life-sushifish-description'
            },
            {
                'name': 'Gunpowderfish',
                'icon': require('./assets/endemic_life/gunpowderfish.jpg'),
                'locations': [{
                    'name': 'Coral Highlands',
                    'sectors': '7',
                }, {
                    'name': 'Rotten Vale',
                    'sectors': '9',
                }, {
                    'name': 'Elder\'s Recess',
                    'sectors': '8',
                }, ],
                'howToCapture': 'Use the Fishing Rod and press O at the right time.',
                'housePlacing': 'Pond',
                'otherRewards': '22 RP, Gunpowderfish Scale',
                'description': 'endemic-life-gunpowderfish-description'
            },
            {
                'name': 'Gunpowderfish (Great Size)',
                'icon': require('./assets/endemic_life/gunpowderfish.jpg'),
                'locations': [{
                    'name': 'Coral Highlands',
                    'sectors': '7',
                }, {
                    'name': 'Rotten Vale',
                    'sectors': '9',
                }, {
                    'name': 'Elder\'s Recess',
                    'sectors': '8',
                }, ],
                'youTube': ['oBYc825tBbo'],
                'howToCapture': 'Use the Fishing Rod and press O at the right time.',
                'housePlacing': 'Pond',
                'otherRewards': '170RP, Great Gunpwoderfish Scale',
                'description': 'endemic-life-gunpowderfish-description'
            },
            {
                'name': 'Platinumfish',
                'icon': require('./assets/endemic_life/platinumfish.jpg'),
                'locations': [{
                    'name': 'Elder\'s Recess',
                    'sectors': '7, 8 (one always spawn in the leftmost part of the fishing spot in Eastern Camp (8))',
                }],
                'howToCapture': 'Use the Fishing Rod and press O at the right time.',
                'housePlacing': 'Pond',
                'otherRewards': '60 RP, Platinum Scale (300 RP, Platinum Scale+)',
                'description': 'endemic-life-platinumfish-description'
            },
            {
                'name': 'Platinumfish (Great Size)',
                'icon': require('./assets/endemic_life/platinumfish.jpg'),
                'locations': [{
                    'name': 'Elder\'s Recess',
                    'sectors': '7, 8 (one always spawn in the leftmost part of the fishing spot in Eastern Camp (8))',
                }],
                'howToCapture': 'Use the Fishing Rod and press O at the right time.',
                'housePlacing': 'Pond',
                'otherRewards': '300 RP, Platinum Scale+',
                'description': 'endemic-life-platinumfish-description'
            },
        ],
    },
    {
        title: 'Airborne Life',
        data: [{
                'name': 'Cobalt Flutterfly',
                'icon': require('./assets/endemic_life/cobalt-flutterfly.jpg'),
                'locations': [{
                    'name': 'Ancient Forest',
                    'sectors': '5, 9, 17',
                }],
                'howToCapture': 'Use the Capture Net. Aim for the creature and press Square when the frame turns orange.',
                'housePlacing': 'Carpet, Floor, Hearth, Garden, Sky',
                'notes': 'When placed in the player\'s house, 3 Cobalt Flutterfly will fly around the chosen spot.',
                'description': 'endemic-life-cobalt-flutterfly-description'
            },
            {
                'name': 'Phantom Flutterfly',
                'icon': require('./assets/endemic_life/phantom-flutterfly.jpg'),
                'locations': [{
                    'name': 'Ancient Forest',
                    'sectors': '6 (near the Pukei-Pukei nest, sunny days, a single flutterfly, yellow flash instead of blue, may need to bounch back and forth between Astera and the forest to get it to spawn), 11 (near the Mosswine to the group of 3 Nitroshrooms)',
                }],
                'youTube': ['oBYc825tBbo'],
                'howToCapture': 'Use the Capture Net. Aim for the creature and press Square when the frame turns orange.',
                'housePlacing': 'Carpet, Floor, Hearth, Garden, Sky',
                'description': 'endemic-life-phantom-flutterfly'
            },
            {
                'name': 'Omenfly',
                'icon': require('./assets/endemic_life/omenfly.jpg'),
                'locations': [{
                    'name': 'Ancient Forest',
                    'sectors': '3, 5, 10, 11, 16',
                }, {
                    'name': 'Wildspire Waste',
                    'sectors': '2, 3, 10',
                }, {
                    'name': 'Coral Highlands',
                    'sectors': '8, 11, 14',
                }, {
                    'name': 'Rotten Vale',
                    'sectors': '1',
                }, {
                    'name': 'Elder\'s Recess',
                    'sectors': '',
                }, ],
                'howToCapture': 'Use the Capture Net. Aim for the creature and press Square when the frame turns orange.',
                'housePlacing': 'Carpet, Floor, Hearth, Garden, Sky',
                'otherRewards': '6 RP',
                'description': 'endemic-life-omenfly-description'
            },
            {
                'name': 'Augurfly',
                'icon': require('./assets/endemic_life/augurfly.jpg'),
                'locations': [{
                    'name': 'Ancient Forest',
                    'sectors': '3, 5, 10, 11, 16',
                }, {
                    'name': 'Wildspire Waste',
                    'sectors': '2, 3, 10',
                }, {
                    'name': 'Coral Highlands',
                    'sectors': '8, 11, 14',
                }, {
                    'name': 'Rotten Vale',
                    'sectors': '1',
                }, {
                    'name': 'Elder\'s Recess',
                    'sectors': '',
                }, ],
                'youTube': ['oBYc825tBbo'],
                'howToCapture': 'Use the Capture Net. Aim for the creature and press Square when the frame turns orange.',
                'housePlacing': 'Carpet, Floor, Hearth, Garden, Sky',
                'description': 'endemic-life-augurfly-description'
            },
            {
                'name': 'Scalebat',
                'icon': require('./assets/endemic_life/scalebat.jpg'),
                'locations': [{
                    'name': 'Ancient Forest',
                    'sectors': '10 (when you move through the cave)',
                }, {
                    'name': 'Wildspire Waste',
                    'sectors': '',
                }, {
                    'name': 'Rotten Vale',
                    'sectors': '',
                }, {
                    'name': 'Elder\'s Recess',
                    'sectors': '16 (dozens of them will fly out when moving down the water stream that start from the Gajalaka hideout and leads to the Northweset Camp)',
                }, ],
                'howToCapture': 'Use the Capture Net. Aim for the creature and press Square when the frame turns orange.',
                'housePlacing': 'Entryway, Sky',
                'description': 'endemic-life-scalebat-description'
            },
            {
                'name': 'Elegant Coralbird',
                'icon': require('./assets/endemic_life/elegant-coralbird.jpg'),
                'locations': [{
                    'name': 'Coral Highlands',
                    'sectors': '1, 6 (flying around in a group of 3)',
                }],
                'howToCapture': 'Use the Capture Net. Aim for the creature and press Square when the frame turns orange.',
                'housePlacing': 'Carpet, Floor, Hearth, Garden, Sky',
                'description': 'endemic-life-elegant-coralbird-description'
            },
            {
                'name': 'Dapper Coralbird',
                'icon': require('./assets/endemic_life/dapper-coralbird.jpg'),
                'locations': [{
                    'name': 'Coral Highlands',
                    'sectors': '1, 6 (spawn randomly in an Elegant Coralbird group, recognizable by it\'s more purple color and the number of birds (4 instead of 3), only flee if startled (i.e. by a missed net shot))',
                }],
                'youTube': ['oBYc825tBbo'],
                'howToCapture': 'Use the Capture Net. Aim for the creature and press Square when the frame turns orange.',
                'housePlacing': 'Carpet, Floor, Hearth, Garden, Sky',
                'otherRewards': '180 RP',
                'description': 'endemic-life-dapper-coralbird-description'
            },
            {
                'name': 'Vigorwasp',
                'icon': require('./assets/endemic_life/vigorwasp.jpg'),
                'locations': [{
                    'name': 'Ancient Forest',
                    'sectors': '5 (in a tree trunk), 6 (near the Pukei-Pukei nest)',
                }, {
                    'name': 'Wildspire Waste',
                    'sectors': '',
                }, {
                    'name': 'Coral Highlands',
                    'sectors': '8 (multiple can be found flying around)',
                }, ],
                'tips': 'The Vigorwasp spawned by your Palico can also be captured.',
                'howToCapture': 'Use the Capture Net. Aim for the creature and press Square when the frame turns orange.',
                'housePlacing': 'Carpet, Floor, Hearth, Garden, Sky',
                'otherRewards': '10 RP',
                'description': 'endemic-life-vigorwasp-description'
            },
            {
                'name': 'Giant Vigorwasp',
                'icon': require('./assets/endemic_life/giant-vigorwasp.jpg'),
                'locations': [{
                    'name': 'Ancient Forest',
                    'sectors': '13 (at the bottom of the zone with vine floors, report suggests that it only spawn at night.)',
                }],
                'youTube': ['oBYc825tBbo'],
                'tips': 'Appears to be a fixed spawn. Not rare, always there in the same spot.',
                'howToCapture': 'Use the Capture Net. Aim for the creature and press Square when the frame turns orange.',
                'housePlacing': 'Carpet, Floor, Hearth, Garden, Sky',
                'otherRewards': '40 RP',
                'description': 'endemic-life-giant-vigorwasp-description'
            },
            {
                'name': 'Flying Meduso',
                'icon': require('./assets/endemic_life/flying-meduso.jpg'),
                'locations': [{
                    'name': 'Coral Highlands',
                    'sectors': '1 (right outside the southern camp, all around the map)',
                }],
                'howToCapture': 'Use the Capture Net. Aim for the creature and press Square when the frame turns orange.',
                'housePlacing': 'Carpet, Floor, Hearth, Garden, Sky',
                'description': 'endemic-life-flying-meduso-description'
            },
            {
                'name': 'Flashfly',
                'icon': require('./assets/endemic_life/flashfly.jpg'),
                'locations': [{
                    'name': 'Ancient Forest',
                    'sectors': '2 (in the Great Jagras nest)',
                }, {
                    'name': 'Wildspire Waste',
                    'sectors': '8 (in the underground area near the Diablos nest)',
                }, {
                    'name': 'Coral Highlands',
                    'sectors': '',
                }, {
                    'name': 'Rotten Vale',
                    'sectors': '',
                }, {
                    'name': 'Elder\'s Recess',
                    'sectors': '15 (behind the south wall that Nergigante sometimes destroy)',
                }, ],
                'howToCapture': 'Use the Capture Net. Aim for the creature and press Square when the frame turns orange.',
                'housePlacing': 'Carpet, Floor, Hearth, Garden, Sky',
                'otherRewards': '12 RP',
                'description':' endemic-life-flashfly-description'
            },
            {
                'name': 'Grandfather Mantagrell',
                'icon': require('./assets/endemic_life/grandfather-mantagrell.jpg'),
                'locations': [{
                    'name': 'Coral Highlands',
                    'sectors': '11 (they fly up high in the sky and can be brought down with the Slinger or a weapon hit)',
                }],
                'youTube': ['oBYc825tBbo'],
                'howToCapture': 'Use the Capture Net. Aim for the creature and press Square when the frame turns orange.',
                'housePlacing': 'Sky',
                'description': 'endemic-life-grandfather-mantagrell-description'
            },
        ],
    }, {
        title: 'Treetop Life',
        data: [{
                'name': 'Woodland Pteryx',
                'icon': require('./assets/endemic_life/woodland-pteryx.jpg'),
                'locations': [{
                    'name': 'Ancient Forest',
                    'sectors': '5, 11',
                }],
                'howToCapture': 'Use the Capture Net. Aim for the creature and press Square when the frame turns orange.',
                'housePlacing': 'Carpet, Floor, Hearth, Garden',
                'description': 'endemic-life-woodland-pteryx-description'
            },
            {
                'name': 'Forest Pteryx',
                'icon': require('./assets/endemic_life/forest-pteryx.jpg'),
                'locations': [{
                    'name': 'Ancient Forest',
                    'sectors': '5 (spawn randomly instead of a Woodland Pteryx)',
                }],
                'youTube': ['oBYc825tBbo'],
                'howToCapture': 'Use the Capture Net. Aim for the creature and press Square when the frame turns orange.',
                'housePlacing': 'Carpet, Floor, Hearth, Garden',
                'otherRewards': '200 RP',
                'description': 'endemic-life-forest-pteryx-description'
            },
            {
                'name': 'Hercudrome',
                'icon': require('./assets/endemic_life/hercudrome.jpg'),
                'locations': [{
                    'name': 'Ancient Forest',
                    'sectors': '1 (on the path from sector 1 to 9 on the trunk of a palm tree on the right side, at the dead end next to the campsite, partially up a tree on the right)\n\n6, atop the raised woodland platform just west of the Pukei-Pukei nest. Head up the tree ramp to the west of the Pukei-Pukei nest (with a blue mushroom on it), directly across the walkway to gnarled roots blocking your path\n\n8, on the trunk of a tree on the left side of a curving ramp on the southeastern border. From the destructible border (pushing vines out of the way) between a honey gathering point and a unique mushroom colony, take a right to walk up the ramp\n\n10, near the center of the sector in the tunnels, above a mining site next to a ledge. From the room with the honey gathering point, facing the root walkway that leads to a unique mushroom colony, take a slight left under the root way towards some omen flies. Take an immediate left to a room with omen flies, a mining site, and the beetle.\n\n11, on an elevated ledge near the southern border, hidden in a small recess behind some foliage next to a honey gathering point (not the honey accessible by a wedge beetle).\n\n17, on the underside of the entryway branch at the Bugtrapper home base.',
                }, ],
                'howToCapture': 'Use the Capture Net. Aim for the creature and press Square when the frame turns orange.',
                'housePlacing': 'Pot, Entryway, Tree, Column',
                'description': 'endemic-life-hercudrome-description'
            },
            {
                'name': 'Gold Hercudrome',
                'icon': require('./assets/endemic_life/gold-hercudrome.jpg'),
                'locations': [{
                    'name': 'Ancient Forest',
                    'sectors': '',
                }, {
                    'name': 'Wildspire Waste',
                    'sectors': '5 (by night on a dead tree in a rocky passage)',
                }, ],
                'youTube': ['oBYc825tBbo'],
                'howToCapture': 'Use the Capture Net. Aim for the creature and press Square when the frame turns orange.',
                'housePlacing': 'Pot, Entryway, Tree, Column',
                'otherRewards': '200 RP',
                'description': 'endemic-life-gold-hercudrome-description'
            },
            {
                'name': 'Prism Hercudrome',
                'icon': require('./assets/endemic_life/prism-hercudrome.jpg'),
                'locations': [{
                    'name': 'Ancient Forest',
                    'sectors': '1 (near the bottom in the second look off on the left as you head to sector 3, there is a tree to the right but only spawns at Dawn or Dusk.)',
                }, {
                    'name': 'Wildspire Waste',
                    'sectors': '10 (rarely spawn on a dead tree on top a one of the 2 flat rock near the lake at Dawn or Dusk)',
                }, {
                    'name': 'Coral Highlands',
                    'sectors': '11',
                }, {
                    'name': 'Rotten Vale',
                    'sectors': '11',
                }, {
                    'name': 'Elder\'s Recess',
                    'sectors': '',
                }, ],
                'youTube': ['zJc7Il7Af0M'],
                'tips': 'The Prism Hercudrome won\'t flee no matter how close the player is.',
                'howToCapture': 'Use the Capture Net. Aim for the creature and press Square when the frame turns orange.',
                'housePlacing': 'Pot, Entryway, Tree, Column',
                'otherRewards': '500 RP, Rainbow Bright Medal (Capture a creature that glitters like a rainbow)',
                'description': 'endemic-life-prism-hercudrome-description'
            },
        ],
    }, {
        title: 'Unclassified Life',
        data: [{
                'name': 'Downy Crake',
                'icon': require('./assets/endemic_life/downy-crake.jpg'),
                'locations': [{
                    'name': 'Ancient Forest',
                    'sectors': '1, 8 (on the back of Aptonoth)',
                }, {
                    'name': 'Wildspire Waste',
                    'sectors': 'On top of Aptonoths',
                }, {
                    'name': 'Coral Highlands',
                    'sectors': 'On top of Grandfather Mantagrell',
                }, ],
                'youTube': ['zJc7Il7Af0M'],
                'tips': 'They rarely spawn as a group on top of a random Aptonoth or Apceros. They like to appear when their host isn\'t on your screen so look away and listen until you hear their chirping. Always use the Ghillie Mantle to ensure they don\'t flee as you get close. It\'s possible to catch more than one in one net throw. Reports suggest they are more likely to spawn during dawn and day.',
                'howToCapture': 'Use the Capture Net. Aim for the creature and press Square when the frame turns orange.',
                'housePlacing': 'Carpet, Floor, Hearth, Pot, Garden',
                'otherRewards': '200 RP, Snuggles for All medal (Capture a fluffy, snuggly creature)',
                'description': 'endemic-life-downy-crake-description'
            },
            {
                'name': 'Bristly Crake',
                'icon': require('./assets/endemic_life/bristly-crake.jpg'),
                'locations': [{
                    'name': 'Rotten Vale',
                    'sectors': '15 (rarely spawn on the back of the Mosswine that wanders above the Goldenfish pond, if it spots the player, it\'ll try to flee and get stuck at the end of the path for an easy catch. Also spawns on the back of the Mosswine that wanders between sectors 3 and 5.)',
                }, {
                    'name': 'Elder\'s Recess',
                    'sectors': '11 (rarely spawn on the back of a Gastodon, will flee if it or its host notices the player)',
                }, ],
                'youTube': ['zJc7Il7Af0M'],
                'tips': 'Use of the Ghille Mantle is heavily recommended.',
                'howToCapture': 'Use the Capture Net. Aim for the creature and press Square when the frame turns orange.',
                'housePlacing': 'Carpet, Floor, Hearth, Pot, Garden',
                'otherRewards': '800 RP, Bristles for All medal (Capture a stiff, bristly creature)',
                'description': 'endemic-life-bristly-crake-description'
            },
            {
                'name': 'Cactuar',
                'icon': require('./assets/endemic_life/cactuar.jpg'),
                'locations': [{
                    'name': 'Wildspire Waste',
                    'sectors': '7 (near the camp), 8 (near the sinkhole)',
                }, ],
                'youTube': ['Jf465sbUQA0'],
                'tips': 'Use of the Ghille Mantle is heavily recommended.',
                'howToCapture': 'Use the Capture Net. Aim for the creature and press Square when the frame turns orange. It\'s the large, regular-sized cactuar.',
                'otherRewards': '300 RP',
                'description': 'endemic-life-cactuar-description',
            },
            {
                'name': 'Cactuar Cutting',
                'icon': require('./assets/endemic_life/cactuar.jpg'),
                'locations': [{
                    'name': 'Wildspire Waste',
                    'sectors': '5 (up in the bird\'s nest, day or night), 6 (cactus patch), 8 (near the sinkhole)',
                }, ],
                'youTube': ['Jf465sbUQA0'],
                'tips': 'Use of the Ghille Mantle is heavily recommended.',
                'howToCapture': 'Use the Capture Net. Aim for the creature and press Square when the frame turns orange. It\'s the small-sized, runs really fast.',
                'otherRewards': '85 RP',
                'description': 'endemic-life-cactuar-cutting-description',
            },
            {
                'name': 'Flowering Cactuar Cutting',
                'icon': require('./assets/endemic_life/flowering-cactuar-cutting.jpg'),
                'locations': [{
                    'name': 'Wildspire Waste',
                }, ],
                'youTube': ['Jf465sbUQA0'],
                'tips': 'Use of the Ghille Mantle is heavily recommended.',
                'howToCapture': 'Use the Capture Net. Aim for the creature and press Square when the frame turns orange.',
                'otherRewards': '1000 RP',
                'description': 'endemic-life-flowering-cactuar-cutting-description',
            },
            {
                'name': 'Nekker',
                'icon': require('./assets/endemic_life/nekker.png'),
                'locations': [{
                    'name': 'Ancient Forest',
                }, ],
                'youTube': ['_RtL0eTW7BM'],
                'tips': 'Use of the Ghille Mantle is heavily recommended.',
                'howToCapture': 'You need to go to the Ancient Forest that has a Great Jagras at night time. The easiest way to do this is taking the optional quest Hard to Swallow or go to Ancient Forest on expedition at night. Start at the Southwest Camp and go the an area where you usually spot a Great Jagras. Hide in the bushes, let the Great Jagras leave and come back with a full belly. When it spits out, there will be a Nekker and that\'s the time to use your Capture Net.',
                'otherRewards': '350 RP',
                'description': 'endemic-life-nekker-description',
            },
        ],
    },
];

export { endemicLife }