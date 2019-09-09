let canteenMeats = [{
    'name': 'Wyvern Thigh',
    'description': 'Meat that helps trigger Courage food skills. A long time in the stew makes it very chewy.',
    'icon': require('./assets/canteen/icon_courage.png'),
    'foodIcon': require('./assets/canteen/meat_red.png'),
    'notes': 'Available from the start',
}, {
    'name': 'Wyvern Skirt Steak',
    'description': 'Meat that helps trigger Courage food skills. Best served thinly sliced and grilled over charcoal.',
    'icon': require('./assets/canteen/icon_courage.png'),
    'foodIcon': require('./assets/canteen/meat_yellow.png'),
    'notes': 'Available from the start',
}, {
    'name': 'Wyvern Egg',
    'description': 'Meat the helps trigger Courage food skills. A precious plunder from a wyvern\'s nest.',
    'icon': require('./assets/canteen/icon_courage.png'),
    'foodIcon': require('./assets/canteen/meat_white.png'),
    'notes': 'Deliver 2 Wyvern Eggs quest from the Meowscular Chef (Gettin\' Yolked in the Forest)',
    'quest': 'Gettin\' Yolked in the Forest'
}, {
    'name': 'Wyvern Tail',
    'description': 'Meat that helps trigger Courage food skills. The tail from a flying wyvern. Worth trying at least once.',
    'icon': require('./assets/canteen/icon_courage.png'),
    'foodIcon': require('./assets/canteen/meat_red.png'),
    'notes': 'Bounty by endemic Life Research in Ancient Forest - Catch Woodland Pteryx',
    'quest': 'Research Help: Woodland Pteryx Capture'
}, {
    'name': 'Wyvern Head',
    'description': 'Meat that helps trigger Courage food skills. A staple of haute cuisine, it also occasionally features in celebratory feasts.',
    'icon': require('./assets/canteen/icon_courage.png'),
    'foodIcon': require('./assets/canteen/meat_red.png'),
    'notes': 'Available from Stage 2 Canteen (after Tobi-Kadachi)',
    'quest': 'Flying Sparks: Tobi-Kadachi'
}, {
    'name': 'Wyvern Filet',
    'description': 'Meat that helps trigger Courage food skills. The most highly valued cut of wyvern meat available.',
    'icon': require('./assets/canteen/icon_courage.png'),
    'foodIcon': require('./assets/canteen/meat_red.png'),
    'notes': 'Elder\'s Recess - You need find an item called the Twilight Stone. Start from the camp near sector 12 and look for a passage to the south. Simply follow the path, careful to not jump down at the end, and it will be here along a Beryl Deposit.'
}, {
    'name': 'Tough Meat',
    'description': 'Meat that helps trigger Resilience food skills. Working your way through this chewy meat has the added benefit of strengthening your jaw.',
    'icon': require('./assets/canteen/icon_resilience.png'),
    'foodIcon': require('./assets/canteen/meat_white.png'),
    'notes': 'Available from Stage 2 Canteen (after Tobi-Kadachi)',
    'quest': 'Flying Sparks: Tobi-Kadachi'
}, {
    'name': 'Thorny Meat',
    'description': 'Meat that helps trigger Resilience food skills. Still attached to the thorny scales from which it was cut, it calls for slow, careful eating.',
    'icon': require('./assets/canteen/icon_resilience.png'),
    'foodIcon': require('./assets/canteen/meat_yellow.png'),
    'notes': 'Available from Stage 2 Canteen (after Tobi-Kadachi)',
    'quest': 'Flying Sparks: Tobi-Kadachi'
}, {
    'name': 'Bullion Meat',
    'description': 'Meat that helps trigger Resilience food skills. Relatively expensive, but sometimes you\'ve gotta treat yourself.',
    'icon': require('./assets/canteen/icon_resilience.png'),
    'foodIcon': require('./assets/canteen/meat_yellow.png'),
    'notes': 'Slay 14 Vespoid quest from the Meowscular Chef (Exterminator of the Waste)'
}, {
    'name': 'Steeled Meat',
    'description': 'Meat that helps trigger Resilience food skills. Hard enough to break a tooth, but the protein and vitamins it packs almost makes it worth it.',
    'icon': require('./assets/canteen/icon_resilience.png'),
    'foodIcon': require('./assets/canteen/meat_red.png'),
    'notes': 'Slay 10 Girros quest from the Meowscular Chef (Chef Quest! A Rotten Request)',
    'quest': 'Chef Quest! A Rotten Request'
}, {
    'name': 'Wild Chicken',
    'description': 'Meat that helps trigger Resilience food skills. Best enjoyed by savagely cutting into it and shoveling into your mouth with abandon.',
    'icon': require('./assets/canteen/icon_resilience.png'),
    'foodIcon': require('./assets/canteen/meat_red.png'),
    'notes': 'Unlocked by collecting Dragonvein Amber - from Amber Deposit spots, Elder\'s Recess',
}, {
    'name': 'Marinated Carpaccio',
    'description': 'Meat that helps trigger Resilience food skills. Steeped in a secret sauce, this raw meat is literally dripping with flavor.',
    'icon': require('./assets/canteen/icon_resilience.png'),
    'foodIcon': require('./assets/canteen/meat_yellow.png'),
    'notes': 'Deliver 2 Lumps of Meat quest from the Meowscular Chef (The Meat of the Matter)',
    'quest': 'The Meat of the Matter'
}, {
    'name': 'Aptonoth Meat',
    'description': 'Meat that helps trigger Vigor food skills. A staple of any hunter\'s diet which is used in a wide variety of meat dishes.',
    'icon': require('./assets/canteen/icon_vigor.png'),
    'foodIcon': require('./assets/canteen/meat_green.png'),
    'notes': 'Available from Stage 3 canteen (after Pink Rathian investigations)',
    'quest': 'Tickled Pink'
}, {
    'name': 'Apceroast',
    'description': 'Meat that helps trigger Vigor food skills. Almost always served in large potions, this meat is a favorite among ravenous hunters.',
    'icon': require('./assets/canteen/icon_vigor.png'),
    'foodIcon': require('./assets/canteen/meat_yellow.png'),
    'notes': 'Available from Stage 3 canteen (after Pink Rathian investigations)',
    'quest': 'Tickled Pink'
}, {
    'name': 'Diced Steak',
    'description': 'Meat that helps trigger Vigor food skills. Relatively good quality meat cut into small, bite-sized pieces.',
    'icon': require('./assets/canteen/icon_vigor.png'),
    'foodIcon': require('./assets/canteen/meat_red.png'),
    'notes': 'Deliver Request from Provisions Manager (50p + Mega Potion)',
    'quest': 'Delivery: A Great Help'
}, {
    'name': 'Giant Sirloin',
    'description': 'Meat that helps trigger Vigor food skills. A lovely slice of Aptonoth meat that\'s tasty and filling.',
    'icon': require('./assets/canteen/icon_vigor.png'),
    'foodIcon': require('./assets/canteen/meat_red.png'),
    'quest': 'Research Help: Scavantula Capture'
}, {
    'name': 'Big Bite Burger',
    'description': 'Meat that helps trigger Vigor food skills. A burger prepared the way it was meant to be: almost too big to fit in your mouth.',
    'icon': require('./assets/canteen/icon_vigor.png'),
    'foodIcon': require('./assets/canteen/meat_red.png'),
    'notes': 'Rotten Vale - You need to find an item called Wicked Fossil. Upon exiting Camp (1) jumping off the cliff or cliimbing down, head right staying close to the left wall. A short slope to the west is present, so go down without jumping. Turn around and you should be here, right in the middle of the path.',
}, {
    'name': 'Giga Steak',
    'description': 'Meat that helps trigger Vigor food skills. Well-marbled steak so delectable that it\'s hard to put down even ong after you\'ve been full.',
    'icon': require('./assets/canteen/icon_vigor.png'),
    'foodIcon': require('./assets/canteen/meat_red.png'),
    'notes': 'Unlocked by Ancient Amber - Amber Deposit spots in Elder\'s Recess'
}, {
    'name': 'White Liver',
    'description': 'Meat that helps trigger Acumen food skills. Loved for its goopy texture.',
    'icon': require('./assets/canteen/icon_acumen.png'),
    'foodIcon': require('./assets/canteen/meat_white.png'),
    'notes': 'Available from the start'
}, {
    'name': 'Barbecued Short Rib',
    'description': 'Meat that helps trigger Acumen food skills. Mostly fat, this flavorful meat can be dangerously addictive.',
    'icon': require('./assets/canteen/icon_acumen.png'),
    'foodIcon': require('./assets/canteen/meat_yellow.png'),
    'notes': 'Available from the start'
}, {
    'name': 'Tangy Tripe',
    'description': 'Meat that helps trigger Acumen food skills. A stomachful of this makes it oddly difficult to sit still.',
    'icon': require('./assets/canteen/icon_acumen.png'),
    'foodIcon': require('./assets/canteen/meat_yellow.png'),
    'notes': 'Deliver 4 Forgotten Fossils quest from the Meowscular Chef (Chef Quest! Pumped to Deliver)',
    'quest': 'Chef Quest! Pumped to Deliver'
}, {
    'name': 'Hot Heart',
    'description': 'Meat that helps trigger Acumen food skills. A cut of meat prized for its texture, enjoyed best when devoured piping hot.',
    'icon': require('./assets/canteen/icon_acumen.png'),
    'foodIcon': require('./assets/canteen/meat_red.png'),
    'notes': 'Coral Highlands - You need to find a Platinum Pearl. Go to the eastern end of sector 12, inside the cave area and look for a vine wall to the north with a small opening around the middle. Get inside the passage and follow it until you find a large vine covered pillar. Climb it and look for a small platform behind you with the item and two Devil\'s Blight on it, align yourself and jump to reach it.'
}, {
    'name': 'Rich Rump',
    'description': 'Meat that helps trigger Acumen food skills. An exceptionally rich cut of meat from one of a monster\'s most prized body parts.',
    'icon': require('./assets/canteen/icon_acumen.png'),
    'foodIcon': require('./assets/canteen/meat_red.png'),
    'notes': 'Delivery Request from Tech Chief (700p + Uragaan Scute)',
    'quest': 'Delivery: The Juicy Meat Resistance'
}, {
    'name': 'Grand Foie Gras',
    'description': 'Meat that helps trigger Acumen food skills. Its creamy texture and rich taste make it a much sought-after ingredient.',
    'icon': require('./assets/canteen/icon_acumen.png'),
    'foodIcon': require('./assets/canteen/meat_yellow.png'),
    'notes': 'Unlocked by collecting True Beryl - Beryl Deposit spots in Elder\'s Recess'
}, {
    'name': 'Peon Turkey',
    'description': 'Meat that helps trigger Artillery food skills. Sadly it\'s more bone than meat.',
    'icon': require('./assets/canteen/icon_artillery.png'),
    'foodIcon': require('./assets/canteen/meat_red.png'),
    'notes': 'Catch 9 Carrier Ants quest by Endemic Life Researcher in Wildspire Waste',
    'quest': 'Research Help: Carrier Ant Capture'
}, {
    'name': 'Great Mutton',
    'description': 'Meat that helps trigger Artillery food skills. Highly versatile, it\'s used in a wide variety of dishes.',
    'icon': require('./assets/canteen/icon_artillery.png'),
    'foodIcon': require('./assets/canteen/meat_yellow.png'),
    'notes': 'Delivery Request from Tech Chief (800p + Radobaan Carapace)',
    'quest': 'Delivery: The Bone-In Roast Resistance'
}, {
    'name': 'Herbivore Egg',
    'description': 'Meat that helps trigger Artillery food skills. An omelette made from this could feed several hungry families.',
    'icon': require('./assets/canteen/icon_artillery.png'),
    'foodIcon': require('./assets/canteen/meat_white.png'),
    'notes': 'Deliver 2 Herbivore Eggs quest from the Meowscular Chef (Gettin\' Yolked in the Waste)',
    'quest': 'Gettin\' Yolked in the Waste'
}, {
    'name': 'King Turkey',
    'description': 'Meat that helps trigger Artillery food skills. Its meatiness makes it more than worthy of its moniker. Puts Peon Turkey to shame.',
    'icon': require('./assets/canteen/icon_artillery.png'),
    'foodIcon': require('./assets/canteen/meat_red.png'),
    'notes': 'Slay 11 Shamos quest from the Meowscular Chef (It\'s a Crying Shamos)',
    'quest': 'It\'s a Crying Shamos'
}, {
    'name': 'Magma Mutton',
    'description': 'Meat that helps trigger Artillery food skills. Succulent mutton that grows even richer in taste the longer it\'s stewed.',
    'icon': require('./assets/canteen/icon_artillery.png'),
    'foodIcon': require('./assets/canteen/meat_red.png'),
    'notes': 'Bounty by Endemic Life Researcher in Elder\'s Recess - Catch Bomb Beetle',
    'quest': 'Research Help: Bomb Beetle Capture'
}, {
    'name': 'Kaiser Turkey',
    'description': 'Meat that helps trigger Artillery food skills. A leg so imperially meaty that even King Turkey pales in comparison.',
    'icon': require('./assets/canteen/icon_artillery.png'),
    'foodIcon': require('./assets/canteen/meat_red.png'),
    'notes': 'Unlocked by collecting Abyssal Beryl - Beryl Deposit Spots in Elder\'s Recess',
}, ];

let canteenFish = [{
    'name': 'Ridgemane Tuna',
    'description': 'Fish that helps trigger Courage food skills. Its meat is as tasty as its mane is audacious.',
    'icon': require('./assets/canteen/icon_courage.png'),
    'foodIcon': require('./assets/canteen/fish_blue.png'),
    'notes': 'Available from Stage 2 canteen (after Tobi-Kadachi)',
    'quest': 'Flying Sparks: Tobi-Kadachi'
}, {
    'name': 'Serpentine Salmon',
    'description': 'Fish that helps trigger Courage food skills. Twisty and curvy, it looks more like a snake than a fish.',
    'icon': require('./assets/canteen/icon_courage.png'),
    'foodIcon': require('./assets/canteen/fish_red.png'),
    'notes': 'Available from Stage 3 canteen (after Pink Rathian investigations)',
    'quest': 'Tickled Pink'
}, {
    'name': 'Courageous Eel',
    'description': 'Fish that helps trigger Courage food skills. One bite and you\'ll be brimming with courage.',
    'icon': require('./assets/canteen/icon_courage.png'),
    'foodIcon': require('./assets/canteen/fish_yellow.png'),
    'notes': 'Bounty by Piscine Researcher in Ancient Forest - Catch Pink Parexus',
    'quest': 'Research Help: Pink Parexus Capture'
}, {
    'name': 'Sushifish',
    'description': 'Fish that helps trigger Courage food skills. Delicious, with just the right amount of fat. Well-liked near and far.',
    'icon': require('./assets/canteen/icon_courage.png'),
    'foodIcon': require('./assets/canteen/fish_yellow.png'),
    'notes': 'Bounty by Piscine Researcher in Wildspire Waste - Catch a Sushifish',
    'quest': 'Research Help: Sushifish Capture'
}, {
    'name': 'Ancient Seabream',
    'description': 'Fish that helps trigger Courage food skills. Gourmet fish that has been prized as a delicacy since ancient times.',
    'icon': require('./assets/canteen/icon_courage.png'),
    'foodIcon': require('./assets/canteen/fish_yellow.png'),
    'notes': 'Delivery Request from Tech Chief (800p + Grand Gajau Whisker)',
    'quest': 'Delivery: Ancient But Fresh!'
}, {
    'name': 'Boorish Yellowtail',
    'description': 'Fish that helps trigger Courage food skills. Though criticized for its vulgar appearance, this fish is actually the epitome of courage.',
    'icon': require('./assets/canteen/icon_courage.png'),
    'foodIcon': require('./assets/canteen/fish_white.png'),
    'notes': 'Defeat 10 Gajalaka quest from the Meowscular Chef (Chef Quest! Gajalaka Lockdown)',
    'quest': 'Chef Quest! Gajalaka Lockdown'
}, {
    'name': 'Jumbo Whelk',
    'description': 'Fish that helps trigger Resilience food skills. Larger shells fetch a higher price.',
    'icon': require('./assets/canteen/icon_resilience.png'),
    'foodIcon': require('./assets/canteen/fish_blue.png'),
    'notes': 'Available from the start',
}, {
    'name': 'Scallop Chips',
    'description': 'Fish that helps trigger Resilience food skills. Scallops dried for preservation. They can also be used to make a tasty soup.',
    'icon': require('./assets/canteen/icon_resilience.png'),
    'foodIcon': require('./assets/canteen/fish_yellow.png'),
    'notes': 'Available from the start'
}, {
    'name': 'Choice Abalone',
    'description': 'Fish that helps trigger Resilience food skills. First-rate in size and taste.',
    'icon': require('./assets/canteen/icon_resilience.png'),
    'foodIcon': require('./assets/canteen/fish_blue.png'),
    'notes': 'Unlocked by collecting Choice Abalone - Conch Shell spots in Coral Highlands'
}, {
    'name': 'Violet Abalone',
    'description': 'Fish that helps trigger Resilience food skills. Its aroma and flavor have transformed as much as its coloration.',
    'icon': require('./assets/canteen/icon_resilience.png'),
    'foodIcon': require('./assets/canteen/fish_blue.png'),
    'notes': 'Coral Highlands - Make your way from Southern Camp (1) to the Paolumu nest sector 9, along the way, look to your right, crouch into a small passage full of Wiggler and follow the right wall until you find it.'
}, {
    'name': 'Precious Abalone',
    'description': 'Fish that helps trigger Resilience food skills. Hailed as delicacy among delicacies.',
    'icon': require('./assets/canteen/icon_resilience.png'),
    'foodIcon': require('./assets/canteen/fish_blue.png'),
    'notes': 'Unlocked by collecting by Precious Abalone - Conch Shell spots, Coral Highlands'
}, {
    'name': 'Large-horned Turban',
    'description': 'Fish that helps trigger Resilience food skills. Study of its biology has not yet uncovered the use for its large horns.',
    'icon': require('./assets/canteen/icon_resilience.png'),
    'foodIcon': require('./assets/canteen/fish_white.png'),
    'notes': 'Unlocked by collecting Mystical Fossils - Ancient Fossils spots in Rotten Vale'
}, {
    'name': 'Squad Sardine',
    'description': 'Fish that helps trigger Vigor food skills. They form into regiment-like schools to protect their territory.',
    'icon': require('./assets/canteen/icon_vigor.png'),
    'foodIcon': require('./assets/canteen/fish_white.png'),
    'notes': 'Available from Stage 2 canteen (after Tobi-Kadachi)',
    'quest': 'Flying Sparks: Tobi-Kadachi'
}, {
    'name': 'Samurai Tuna',
    'description': 'Fish that helps trigger Vigor food skills. Notable for tha patterns on its head resembling a samurai helmet.',
    'icon': require('./assets/canteen/icon_vigor.png'),
    'foodIcon': require('./assets/canteen/fish_yellow.png'),
    'notes': 'Available from Stage 2 canteen (after Tobi-Kadachi)',
    'quest': 'Flying Sparks: Tobi-Kadachi'
}, {
    'name': 'Gajau Gill',
    'description': 'Fish that helps trigger Vigor food skills. Needs to be cooked for a long time, but the wait is definitely worth it.',
    'icon': require('./assets/canteen/icon_vigor.png'),
    'foodIcon': require('./assets/canteen/fish_yellow.png'),
    'notes': 'Delivery request from Fiver Bro (200p + Gajau Skin)',
    'quest': 'Delivery: A Feast of Fish'
}, {
    'name': 'Gajau Liver',
    'description': 'Fish that helps trigger Vigor food skills. Packed with good fats, it\'s both delicious and nutricious.',
    'icon': require('./assets/canteen/icon_vigor.png'),
    'foodIcon': require('./assets/canteen/fish_yellow.png'),
    'notes': 'Slay 7 Gajau quest from the Meowscular Chef (The Pain from Gains)'
}, {
    'name': 'Shogun Tuna',
    'description': 'Fish that helps trigger Vigor food skills. Markings along its entire body evoke the image of a full suit of samurai armor.',
    'icon': require('./assets/canteen/icon_vigor.png'),
    'foodIcon': require('./assets/canteen/fish_yellow.png'),
    'notes': 'Bounty by Piscine Researcher in Rotten Vale - Catch a Goldenfish',
    'quest': 'Research Help: Goldenfish Capture'
}, {
    'name': 'Fiery Seabream',
    'description': 'Fish that helps trigger Vigor food skills. This blazingly red fish looks as though it\'s perpetually aflame.',
    'icon': require('./assets/canteen/icon_vigor.png'),
    'foodIcon': require('./assets/canteen/fish_red.png'),
    'notes': 'Unlocked by collecting Noahstone - Upsurge Only - Beryl Deposit spots in Elder\'s Recess'
}, {
    'name': 'Bent-backed Shrimp',
    'description': 'Fish that helps trigger Acumen food skills. Its distinctively contorted body makes this shrimp difficult to eat.',
    'icon': require('./assets/canteen/icon_acumen.png'),
    'foodIcon': require('./assets/canteen/fish_red.png'),
    'notes': 'Available from Stage 3 canteen (after Pink Rathian investigations)',
    'quest': 'Tickled Pink'
}, {
    'name': 'Armor Crab',
    'description': 'Fish that helps trigger Acumen food skills. A crustacean with a shell that looks like a suit of armor and is just as tough.',
    'icon': require('./assets/canteen/icon_acumen.png'),
    'foodIcon': require('./assets/canteen/fish_white.png'),
    'notes': 'Available from Stage 3 canteen (after Pink Rathian investigations)',
    'quest': 'Tickled Pink'
}, {
    'name': 'Coral Shrimp',
    'description': 'Fish that helps trigger Acumen food skills. Petite, but with a dazzling rose-colored shell.',
    'icon': require('./assets/canteen/icon_acumen.png'),
    'foodIcon': require('./assets/canteen/fish_red.png'),
    'notes': 'Delivery Request from Fiver Bro (300p + Shamos Hide)',
    'quest': 'Delivery: Princely Prawns'
}, {
    'name': 'Fortress Crab',
    'description': 'Fish that helps trigger Acumen food skills. It attracts symbiotes to live on its shell, making its body seem larger than it is.',
    'icon': require('./assets/canteen/icon_acumen.png'),
    'foodIcon': require('./assets/canteen/fish_yellow.png'),
    'notes': 'Unlocked by collecting Deep Pearl - Pearl Oyster spots in Coral Highlands'
}, {
    'name': 'Queen Shrimp',
    'description': 'Fish that helps trigger Acumen food skills. Reigns over other shrimp as their queen.',
    'icon': require('./assets/canteen/icon_acumen.png'),
    'foodIcon': require('./assets/canteen/fish_red.png'),
    'notes': 'Unlocked by collecting Innocent Pearl - Pearl Oyster spots in Coral Highlands'
}, {
    'name': 'Millenary Crab',
    'description': 'Fish that helps trigger Acumen food skills. A magnificent crab said to live for a thousand years.',
    'icon': require('./assets/canteen/icon_acumen.png'),
    'foodIcon': require('./assets/canteen/fish_white.png'),
    'notes': 'Delivery Request from Fiver Bro (500p + Barnos Talon)',
    'quest': 'Delivery: A Thousand-Year-Old Crab!?'
}, {
    'name': 'Osseoctopus',
    'description': 'Fish that helps trigger Artillery food skills. It has a brittle texture that\'s almost like chewing on bone.',
    'icon': require('./assets/canteen/icon_artillery.png'),
    'foodIcon': require('./assets/canteen/fish_red.png'),
    'notes': 'Available from Stage 3 canteen (after Pink Rathian investigations)',
    'quest': 'Tickled Pink'
}, {
    'name': 'Pink Caviar',
    'description': 'Fish that helps trigger Artillery food skills. Brilliantly pink fish eggs, lightly pickled in salt.',
    'icon': require('./assets/canteen/icon_artillery.png'),
    'foodIcon': require('./assets/canteen/fish_red.png'),
    'notes': 'Available from Stage 3 canteen (after Pink Rathian investigations)',
    'quest': 'Tickled Pink'
}, {
    'name': 'Lily Squid',
    'description': 'Fish that helps trigger Artillery food skills. Said to bring on flashes of insight.',
    'icon': require('./assets/canteen/icon_artillery.png'),
    'foodIcon': require('./assets/canteen/fish_white.png'),
    'notes': 'Bounty by Endemic Life Researcher - Coral Highlands - Catch 3 Wigglers',
    'quest': 'Research Help: Wiggler Capture'
}, {
    'name': 'Ballerina Octopus',
    'description': 'Fish that helps trigger Artillery food skills. Cooking it makes its legs curl up like a dancer.',
    'icon': require('./assets/canteen/icon_artillery.png'),
    'foodIcon': require('./assets/canteen/fish_red.png'),
    'notes': 'Bounty by Piscine Researcher in Coral Highlands - Catch a Gunpowderfish',
    'quest': 'Research Help: Gunpowderfish Capture'
}, {
    'name': 'Soulful Caviar',
    'description': 'Fish that helps trigger Artillery food skills. Fish eggs so delicious they move the soul.',
    'icon': require('./assets/canteen/icon_artillery.png'),
    'foodIcon': require('./assets/canteen/fish_white.png'),
    'notes': 'Deliver 10 Super Abalone quest from the Meowscular Chef (What a Bunch of Abalone)',
    'quest': 'What a Bunch of Abalone'
}, {
    'name': 'Sovereign Squid',
    'description': 'Fish that helps trigger Artillery food skills. A squid whose size practically demands that it be regarded as a ruler of something.',
    'icon': require('./assets/canteen/icon_artillery.png'),
    'foodIcon': require('./assets/canteen/fish_yellow.png'),
    'notes': 'Bounty by Piscine Researcher in Elder\'s Recess - Catch Platinumfish',
    'quest': 'Research Help: Platinumfish Capture'
}, ];

let canteenVeggies = [{
    'name': 'Magnicelery',
    'description': 'Veggie that helps trigger Courage food skills. Once you develop a taste for it, you\ll find it hard to resist.',
    'icon': require('./assets/canteen/icon_courage.png'),
    'foodIcon': require('./assets/canteen/veggie_green.png'),
    'notes': 'Available from Stage 2 canteen (after Tobi-Kadachi)',
    'quest': 'Flying Sparks: Tobi-Kadachi'
}, {
    'name': 'Rapscallion',
    'description': 'Veggie that helps trigger Courage food skills. Eaten raw, its flavor is so sharp that even a Deviljho might shed a tear.',
    'icon': require('./assets/canteen/icon_courage.png'),
    'foodIcon': require('./assets/canteen/veggie_yellow.png'),
    'notes': 'Available from Stage 2 canteen (after Tobi-Kadachi)',
    'quest': 'Flying Sparks: Tobi-Kadachi'
}, {
    'name': 'Jewel Cactus',
    'description': 'Veggie that helps trigger Courage food skills. Large and packed with juicy, fleshy meat.',
    'icon': require('./assets/canteen/icon_courage.png'),
    'foodIcon': require('./assets/canteen/veggie_green.png'),
    'notes': 'Unlocked by collecting Jewel Cactus - Round Cactus spots in Wildspire Waste'
}, {
    'name': 'Dragonbloom',
    'description': 'Veggie that helps trigger Courage food skills. A flower with fruit as tough as wyvern scales.',
    'icon': require('./assets/canteen/icon_courage.png'),
    'foodIcon': require('./assets/canteen/veggie_red.png'),
    'notes': 'Wildspire Waste - Start from Southwest Camp (1) and head north following the rocky path. Keep going until arriving to a more open area and look to the right for vines. Climb all the way up the mountain to get to the Dragonbloom and a nice view.'
}, {
    'name': 'Kingly Cactus',
    'description': 'Veggie that helps trigger Courage food skills. A cactus of majestic, almost king-like, quality.',
    'icon': require('./assets/canteen/icon_courage.png'),
    'foodIcon': require('./assets/canteen/veggie_green.png'),
    'notes': 'Unlocked by collecting Kingly Cactus - Round Cactus spots in Wildspire Waste'
}, {
    'name': 'Fatty Tomato',
    'description': 'Veggie that helps trigger Courage food skills. A gourmet tomato bursting with sweet juices.',
    'icon': require('./assets/canteen/icon_courage.png'),
    'foodIcon': require('./assets/canteen/veggie_red.png'),
    'notes': 'Delivery request from Excitable A-Lister (600p + Lava Nugget)',
    'quest': 'Delivery: Tomatoes Red as Magma'
}, {
    'name': 'Stonecorn',
    'description': 'Veggie that helps trigger Resilience food skills. A stalk of corn that takes almost superhuman strength to shuck.',
    'icon': require('./assets/canteen/icon_resilience.png'),
    'foodIcon': require('./assets/canteen/veggie_yellow.png'),
    'notes': 'Available from Stage 3 canteen (after Pink Rathian investigations)',
    'quest': 'Tickled Pink'
}, {
    'name': 'Steadfast Spud',
    'description': 'Veggie that helps trigger Resilience food skills. The tenacious roots it spreads make for back-breaking work come harvesting time.',
    'icon': require('./assets/canteen/icon_resilience.png'),
    'foodIcon': require('./assets/canteen/veggie_yellow.png'),
    'notes': 'Available from Stage 3 canteen (after Pink Rathian investigations)',
    'quest': 'Tickled Pink'
}, {
    'name': 'Exquisite Shroomcap',
    'description': 'Veggie that helps trigger Resilience food skills. A delectable mushroom that even chefs are wont to pop into their mouths while cooking.',
    'icon': require('./assets/canteen/icon_resilience.png'),
    'foodIcon': require('./assets/canteen/veggie_white.png'),
    'notes': 'Unlocked by collecting Exquisite Shroomcap - Unique Mushroom Colony spots in Ancient Forest.\nAt least two in Sector 4.\nAt least two in Sector 8.\nAt least one in Sector 9.  One can be hidden behind a tree on the border of Sector 9 and 1.\nAt least three on the border of Sector 6 and 11\nMultiple in Sector 5.\nAt least one in Sector 10.',
}, {
    'name': 'Moonlit Mushroom',
    'description': 'Veggie that helps trigger Resilience food skills. A mushroom that glows faintly like the moon.',
    'icon': require('./assets/canteen/icon_resilience.png'),
    'foodIcon': require('./assets/canteen/veggie_white.png'),
    'notes': 'Go to 1 star quest Fungal Flexin\' in the Ancient Forest (100% spawn rate). Exit the Northeast Camp (11) to the west and fall down to the bushy area, keep heading west under some branches. You should end up in a watery area, then look south.'
}, {
    'name': 'Spirit Shroomcap',
    'description': 'Veggie that helps trigger Resilience food skills. The glow of this mushroom can only be described as otherworldly.',
    'icon': require('./assets/canteen/icon_resilience.png'),
    'foodIcon': require('./assets/canteen/veggie_white.png'),
    'notes': 'Unlocked by collecting Spirit Shroomcap - Upsurge only - Unique Mushroom Colony spots in Ancient Forest'
}, {
    'name': 'Soiled Shroomcap',
    'description': 'Veggie that helps trigger Resilience food skills. Surprisingly difficult to find, they were once thought to be only a legend.',
    'icon': require('./assets/canteen/icon_resilience.png'),
    'foodIcon': require('./assets/canteen/veggie_yellow.png'),
    'notes': 'Deliver 20 Gourmet Shroomcaps quest from the Meowscular Chef (Fungal Flexin\' in the Ancient Forest)',
    'quest': 'Fungal Flexin\' in the Ancient Forest'
}, {
    'name': 'Plumpkin',
    'description': 'Veggie that helps trigger Vigor food skills. An imposing, gorgeously proportioned pumpkin. Its taste is almost irrelevant.',
    'icon': require('./assets/canteen/icon_vigor.png'),
    'foodIcon': require('./assets/canteen/veggie_green.png'),
    'notes': 'Available from the start'
}, {
    'name': 'Cudgel Onion',
    'description': 'Veggie that helps trigger Vigor food skills. As its name suggests, its sharp taste and rough appearance are almost ogreish.',
    'icon': require('./assets/canteen/icon_vigor.png'),
    'foodIcon': require('./assets/canteen/veggie_green.png'),
    'notes': 'Available from the start'
}, {
    'name': 'Shinebloom',
    'description': 'Veggie that helps trigger Vigor food skills. Its aroma paints the mind with an image of soft, dappled sunlight.',
    'icon': require('./assets/canteen/icon_vigor.png'),
    'foodIcon': require('./assets/canteen/veggie_red.png'),
    'notes': 'Unlocked by collecting Shinebloom - from Flower Bed spots in Ancient Forest'
}, {
    'name': 'Sunkissed Grass',
    'description': 'Veggie that helps trigger Vigor food skills. An herb claimed to have broad remedial powers.',
    'icon': require('./assets/canteen/icon_vigor.png'),
    'foodIcon': require('./assets/canteen/veggie_yellow.png'),
    'notes': 'Ancient Forest - Go down to the Ancient Forest Camp (17) and look for a small passage under some branches, crawl under them. Follow the path, vine jump over the small gap and you should end up in a nest with the item and a nice view over the New World.'
}, {
    'name': 'Goldbloom',
    'description': 'Veggie that helps trigger Vigor food skills. A flower that radiates golden beauty.',
    'icon': require('./assets/canteen/icon_vigor.png'),
    'foodIcon': require('./assets/canteen/veggie_red.png'),
    'notes': 'Unlocked by collecting Goldbloom - Flower Bed spots in Ancient Forest'
}, {
    'name': 'King Truffle',
    'description': 'Veggie that helps trigger Vigor food skills. Even a pinch of this adds volumes of delightful aromas to any dish.',
    'icon': require('./assets/canteen/icon_vigor.png'),
    'foodIcon': require('./assets/canteen/veggie_white.png'),
    'notes': 'Delivery request from Fiver Bro (100p + Mosswine Hide)',
    'quest': 'Delivery: Mushrooms: Nature\'s Smelly Bounty'
}, {
    'name': 'Aromaticelery',
    'description': 'Veggie that helps trigger Acumen food skills. Its aroma varies greatly depending on how it\'s prepared.',
    'icon': require('./assets/canteen/icon_acumen.png'),
    'foodIcon': require('./assets/canteen/veggie_green.png'),
    'notes': 'Delivery request from Tech Chief (800p + Hornetaur Carapace)',
    'quest': 'Delivery: A Veggie Master of Disguise'
}, {
    'name': 'Prismatic Paprika',
    'description': 'Veggie that helps trigger Acumen food skills. Its coloration varies greatly depending on how it\'s prepared.',
    'icon': require('./assets/canteen/icon_acumen.png'),
    'foodIcon': require('./assets/canteen/veggie_yellow.png'),
    'notes': 'Delivery request from Tech Chief (600p + Pukei-Pukei Sac+)',
    'quest': 'Delivery: Phantasmorganic Paprika!'
}, {
    'name': 'Tainted Fruit',
    'description': 'Veggie that helps trigger Acumen food skills. A fruit that\'s ripened in spite of the extreme conditions of the Rotten Vale.',
    'icon': require('./assets/canteen/icon_acumen.png'),
    'foodIcon': require('./assets/canteen/veggie_red.png'),
    'notes': 'Unlocked by collecting Tainted Fruit - Uncommon - Crimson Fruit spots in Rotten Vale'
}, {
    'name': 'Heavenberry',
    'description': 'Veggie that helps trigger Acumen food skills. Its flavor is praised as a taste of heaven.',
    'icon': require('./assets/canteen/icon_acumen.png'),
    'foodIcon': require('./assets/canteen/veggie_yellow.png'),
    'notes': 'Unlocked by collecting Heavenberry - Upsurge only - Crimson Fruit spots in Rotten Vale. From Central Camp (11) go down to the north, then follow the wall on the left until you get to th passage to sector 15. Climb the vines on the left to find it next to some Herb.'
}, {
    'name': 'Elysian Fruit',
    'description': 'Veggie that helps trigger Acumen food skills. It has an aroma so magical it seems to come from another world.',
    'icon': require('./assets/canteen/icon_acumen.png'),
    'foodIcon': require('./assets/canteen/veggie_red.png'),
    'notes': 'Unlocked by collecting Elysian Fruit - Crimson Fruit spots, Rotten Vale'
}, {
    'name': 'Millionfold Cabbage',
    'description': 'Veggie that helps trigger Acumen food skills. It boasts a phenomenal texture thanks to its innumerable layers of leaves.',
    'icon': require('./assets/canteen/icon_acumen.png'),
    'foodIcon': require('./assets/canteen/veggie_green.png'),
    'notes': 'Delivery request from Fiver Bro (400p + Girros Fang)',
    'quest': 'Delivery: Million Zenny Veggie'
}, {
    'name': 'Kut-Ku Bean',
    'description': 'Veggie that helps trigger Artillery food skills. The occasional bean is hot enough to have you spouting fire like a Yian Kut-Ku',
    'icon': require('./assets/canteen/icon_artillery.png'),
    'foodIcon': require('./assets/canteen/veggie_red.png'),
    'notes': 'Available from Stage 3 canteen (after Pink Rathian investigations)',
    'quest': 'Tickled Pink'
}, {
    'name': 'Molten Mango',
    'description': 'Veggie that helps trigger Artillery food skills. A mango that ripens quickly after it\'s picked, and continues to seethe with heat long after.',
    'icon': require('./assets/canteen/icon_artillery.png'),
    'foodIcon': require('./assets/canteen/veggie_red.png'),
    'notes': 'Available from Stage 3 canteen (after Pink Rathian investigations)',
    'quest': 'Tickled Pink'
}, {
    'name': 'Rockfruit',
    'description': 'Veggie that helps trigger Artillery food skills. A fruit with tough, rock-like rind.',
    'icon': require('./assets/canteen/icon_artillery.png'),
    'foodIcon': require('./assets/canteen/veggie_yellow.png'),
    'notes': 'Unlocked by colelcting Rockfruit - Tough-Skinned Fruit spots in Wildspire Waste'
}, {
    'name': 'Divineapple',
    'description': 'Veggie that helps trigger Artillery food skills. A tropical fruit that\'s tricky to grow.',
    'icon': require('./assets/canteen/icon_artillery.png'),
    'foodIcon': require('./assets/canteen/veggie_yellow.png'),
    'notes': 'Unlocked by collecting Divineapple - Upsurge/Flourishing - Tough-skinned Fruit spots in Wildspire Waste'
}, {
    'name': 'Wildfruit',
    'description': 'Veggie that helps trigger Artillery food skills. Its wild taste is a favorite among gourmets.',
    'icon': require('./assets/canteen/icon_artillery.png'),
    'foodIcon': require('./assets/canteen/veggie_yellow.png'),
    'notes': 'Unlocked by collecting Wildfruit - Tough-skinned Fruit spots in Rotten Vale'
}, {
    'name': 'Emerald Durian',
    'description': 'Veggie that helps trigger Artillery food skills. A rare fruit that shines like an emerald, and is almost as valuable.',
    'icon': require('./assets/canteen/icon_artillery.png'),
    'foodIcon': require('./assets/canteen/veggie_green.png'),
    'notes': 'Unlocked by co;lecting Legandary Fossil - Ancient Fossil spots in Rotten Vale'
}, ]

let canteenDrinks = [{
    'name': 'Tater Mud',
    'description': 'Alcohol that helps trigger Perception food skills. A drink that goes down as easy as it sounds.',
    'icon': require('./assets/canteen/icon_perception.png'),
    'foodIcon': require('./assets/canteen/drink_yellow.png'),
    'notes': 'Available from Stage 3 canteen (after Pink Rathian investigations)'
}, {
    'name': 'Dragon Ale',
    'description': 'Alcohol that helps trigger Perception food skills. Strong enough to knock out a wyvern, though how that was tested is left up to the imagination.',
    'icon': require('./assets/canteen/icon_perception.png'),
    'foodIcon': require('./assets/canteen/drink_green.png'),
    'notes': 'Available from Stage 3 canteen (after Pink Rathian investigations)'
}, {
    'name': 'Demontater Brew',
    'description': 'Alcohol that helps trigger Perception food skills. Bitter enough to put a hole through a Deviljho\'s stomach.',
    'icon': require('./assets/canteen/icon_perception.png'),
    'foodIcon': require('./assets/canteen/drink_yellow.png'),
    'notes': 'Hunt Great Girros quest from Third Fleet Master (A Tingling Taste)',
    'quest': 'A Tingling Taste'
}, {
    'name': 'Wyvern Amber Ale',
    'description': 'Alcohol that helps trigger Perception food skills. An aromatic, full-bodied brew.',
    'icon': require('./assets/canteen/icon_perception.png'),
    'foodIcon': require('./assets/canteen/drink_yellow.png'),
    'notes': 'Capture Tobi-Kadachi quest from Shy Scholar (Stuck in Their Ways)',
    'quest': 'Stuck in Their Ways'
}, {
    'name': 'Goldenfish Brew',
    'description': 'Alcohol that helps trigger Perception food skills. Consider yourself lucky to get hands on this holy grail of brews.',
    'icon': require('./assets/canteen/icon_perception.png'),
    'foodIcon': require('./assets/canteen/drink_yellow.png'),
    'notes': 'Hunt Odogaron quest from Airship Engineer (A Sore Site)',
    'quest': 'A Sore Site'
}, {
    'name': 'Dragonkiller Sake',
    'description': 'Alcohol that helps trigger Perception food skills. Rice wine distilled according to a long-researched process. The epitome of sake.',
    'icon': require('./assets/canteen/icon_perception.png'),
    'foodIcon': require('./assets/canteen/drink_yellow.png'),
    'notes': 'Bounty by Endemic Life Researcher - Catch Phantom Bird (Bristly Crake). You need to complete all of his previous bounties.',
    'quest': 'Research Help: Phantom Bird'
}, {
    'name': 'Hunter\'s Brew',
    'description': 'Alcohol that helps trigger Fortune food skills. The perfect refreshment after a long hunt.',
    'icon': require('./assets/canteen/icon_fortune.png'),
    'foodIcon': require('./assets/canteen/drink_yellow.png'),
    'notes': 'Available from Stage 3 canteen (after Pink Rathian investigations)'
}, {
    'name': 'Star Brandy',
    'description': 'Alcohol that helps trigger Fortune food skills. Its bottle features the Research Commission\'s famous sapphire star on its label.',
    'icon': require('./assets/canteen/icon_fortune.png'),
    'foodIcon': require('./assets/canteen/drink_yellow.png'),
    'notes': 'Available from Stage 3 canteen (after Pink Rathian investigations)'
}, {
    'name': 'Master Ale',
    'description': 'Alcohol that helps trigger Fortune food skills. Brewed with roasted malt, this rich, velvety brew is popular with beer aficionados.',
    'icon': require('./assets/canteen/icon_fortune.png'),
    'foodIcon': require('./assets/canteen/drink_white.png'),
    'notes': 'Delivery request from Third Fleet Provisions (600p + Thunder Sac)',
    'quest': 'Delivery: A Master\'s Toast'
}, {
    'name': 'Ratha Whiskey',
    'description': 'Alcohol that helps trigger Fortune food skills. Whiskey aged in a barrel scorched by a Rathalos\'s fiery breath.',
    'icon': require('./assets/canteen/icon_fortune.png'),
    'foodIcon': require('./assets/canteen/drink_red.png'),
    'notes': 'Delivery request from Cheerful Scholar (1000p + 2 x Dodogama Jaw)',
    'quest': 'Delivery: A Fire-Spewing Brew'
}, {
    'name': 'Astera Beer',
    'description': 'Alcohol that helps trigger Fortune food skills. The local brew of the Research Commission. Perfect for celebratory toasts.',
    'icon': require('./assets/canteen/icon_fortune.png'),
    'foodIcon': require('./assets/canteen/drink_yellow.png'),
    'notes': 'Hunt Diablos and Black Diablos quest from Third Fleet Master (RRRRRumble in the Waste!)',
    'quest': 'RRRRRumble in the Waste!'
}, {
    'name': 'Blessed Wine',
    'description': 'Alcohol that helps trigger Fortune food skills. It holds the record for the longest time at the top of the rankings in Wine Hunter\'s monthly.',
    'icon': require('./assets/canteen/icon_fortune.png'),
    'foodIcon': require('./assets/canteen/drink_red.png'),
    'notes': 'Bounty by Piscine Researcher in Rotten Vale (Capture the Ancient) - Petricant in Rotten Vale. You need to complete all of his previous bounties.',
    'quest': 'Research Help: Capture the Ancient'
}, ]

let canteenSkills = [{
        'name': 'Felyne Polisher',
        'type': 'Courage',
        'icon': require('./assets/canteen/icon_courage.png'),
        'description': 'Often speeds up sharpening time.',
        'activationSource': '2'
    },
    {
        'name': 'Felyne Rider',
        'type': 'Courage',
        'icon': require('./assets/canteen/icon_courage.png'),
        'description': 'Makes it easier to mount monsters.',
        'activationSource': '4'
    },
    {
        'name': 'Felyne Slugger',
        'type': 'Courage',
        'icon': require('./assets/canteen/icon_courage.png'),
        'description': 'Makes it easier to stun monsters.',
        'activationSource': '6'
    },
    {
        'name': 'Felyne Acrobat',
        'type': 'Resilience',
        'icon': require('./assets/canteen/icon_resilience.png'),
        'description': 'Allows the hunter to recover quickly when sent flying.',
        'activationSource': '2'
    },
    {
        'name': 'Felyne Feet',
        'type': 'Resilience',
        'icon': require('./assets/canteen/icon_resilience.png'),
        'description': 'Prevents you from getting knocked on your butt.',
        'activationSource': '4'
    },
    {
        'name': 'Felyne Moxie',
        'type': 'Resilience',
        'icon': require('./assets/canteen/icon_resilience.png'),
        'description': 'Prevents fainting one time when damage taken exceeds your remaining health.',
        'activationSource': '6'
    },
    {
        'name': 'Felyne Riser (Hi)',
        'type': 'Vigor',
        'icon': require('./assets/canteen/icon_vigor.png'),
        'description': 'Greatly extends the invulnerability period when getting up.',
        'activationSource': '2'
    },
    {
        'name': 'Felyne Black Belt',
        'type': 'Vigor',
        'icon': require('./assets/canteen/icon_vigor.png'),
        'description': 'Reduces stamina depletion when evading, blocking or doing certain other actions.',
        'activationSource': '4'
    }, {
        'name': 'Felyne Heroics',
        'type': 'Vigor',
        'icon': require('./assets/canteen/icon_vigor.png'),
        'description': 'Greatly increases attack when health is dangerously low.',
        'activationSource': '6'
    },
    {
        'name': 'Felyne Groomer',
        'type': 'Acumen',
        'icon': require('./assets/canteen/icon_acumen.png'),
        'description': 'Halves the effect duration of Defense Down and speeds up blight recovery.',
        'activationSource': '2'
    },
    {
        'name': 'Felyne Medic',
        'type': 'Acumen',
        'icon': require('./assets/canteen/icon_acumen.png'),
        'description': 'Increases health recovery from items.',
        'activationSource': '4'
    },
    {
        'name': 'Felyne Specialist',
        'type': 'Acumen',
        'icon': require('./assets/canteen/icon_acumen.png'),
        'description': 'Increases the potency of abnormal status attacks.',
        'activationSource': '6'
    },
    {
        'name': 'Felyne Sharpshooter',
        'type': 'Artillery',
        'icon': require('./assets/canteen/icon_artillery.png'),
        'description': 'Increases the power of normal shots (Normal S) and normal arrows.',
        'activationSource': '2'
    },
    {
        'name': 'Felyne Bombardier',
        'type': 'Artillery',
        'icon': require('./assets/canteen/icon_artillery.png'),
        'description': 'Increases ballista, sticky ammo, and gunlance shell damage.',
        'activationSource': '4'
    },
    {
        'name': 'Felyne Pyro',
        'type': 'Artillery',
        'icon': require('./assets/canteen/icon_artillery.png'),
        'description': 'Upgrades Large Barrel Bombs to Mega Barrel Bombs.',
        'activationSource': '6'
    },
    {
        'name': 'Felyne Iron Carver',
        'type': 'Perception',
        'icon': require('./assets/canteen/icon_perception.png'),
        'description': 'Prevents knockbacks while carving.',
        'activationSource': '2'
    },
    {
        'name': 'Felyne Exchanger',
        'type': 'Perception',
        'icon': require('./assets/canteen/icon_perception.png'),
        'description': 'Increases the number of research points you receive at the end of a quest.',
        'activationSource': '4'
    },
    {
        'name': 'Felyne Carver (Hi)',
        'type': 'Perception',
        'icon': require('./assets/canteen/icon_perception.png'),
        'description': 'Often increases the number of times you can carve.',
        'activationSource': '6'
    },
    {
        'name': 'Felyne Harvester',
        'type': 'Fortune',
        'icon': require('./assets/canteen/icon_fortune.png'),
        'description': 'Reduces the time between gathering point respawns.',
        'activationSource': '2'
    },
    {
        'name': 'Felyne Fat Cat',
        'type': 'Fortune',
        'icon': require('./assets/canteen/icon_fortune.png'),
        'description': 'Increases the amount of zenny you receive at the end of a quest.',
        'activationSource': '4'
    },
    {
        'name': 'Lucky Cat',
        'type': 'Fortune',
        'icon': require('./assets/canteen/icon_fortune.png'),
        'description': 'Sometimes increases the number of reward items received at the end of a quest.',
        'activationSource': '6'
    },
    {
        'name': 'Cool Cat',
        'type': 'Daily',
        'icon': require('./assets/canteen/icon_daily.png'),
        'description': 'Grants a temporary attack boost when you use the Kick Back gesture for a while.',
    },
    {
        'name': 'Felynebacker',
        'type': 'Daily',
        'icon': require('./assets/canteen/icon_daily.png'),
        'description': 'Prevents being knocked back when transporting item.',
    },
    {
        'name': 'Felyne Booster',
        'type': 'Daily',
        'icon': require('./assets/canteen/icon_daily.png'),
        'description': 'Temporarily increases attack and defense at the start of a quest.',
    },
    {
        'name': 'Felyne Bulldozer',
        'type': 'Daily',
        'icon': require('./assets/canteen/icon_daily.png'),
        'description': 'Increases attack power when you strike right after an attack is deflected.',
    },
    {
        'name': 'Felyne Cliffhanger',
        'type': 'Daily',
        'icon': require('./assets/canteen/icon_daily.png'),
        'description': 'Decreases stamina depletion when evading on walls or ivy.',
    },
    {
        'name': 'Felyne Defender (Lo)',
        'type': 'Daily',
        'icon': require('./assets/canteen/icon_daily.png'),
        'description': 'Sometimes decreases damage taken.',
    },
    {
        'name': 'Felyne Defender (Hi)',
        'type': 'Daily',
        'icon': require('./assets/canteen/icon_daily.png'),
        'description': 'Often decreases damage taken.',
    },
    {
        'name': 'Felyne Deflector',
        'type': 'Daily',
        'icon': require('./assets/canteen/icon_daily.png'),
        'description': 'Helps your weapon retain sharpness when attacks are deflected.',
    },
    {
        'name': 'Felyne Escape Artist',
        'type': 'Daily',
        'icon': require('./assets/canteen/icon_daily.png'),
        'description': 'Decreases stamina depletion when fleeing from large monsters.',
    },
    {
        'name': 'Felyne Fisher',
        'type': 'Daily',
        'icon': require('./assets/canteen/icon_daily.png'),
        'description': 'Increases the likelihood that fish will bite when fishing.',
    },
    {
        'name': 'Felyne Fur Coating',
        'type': 'Daily',
        'icon': require('./assets/canteen/icon_daily.png'),
        'description': 'Prevents or lessens the effects of blights and environmental damage.',
    },
    {
        'name': 'Felyne Gripper',
        'type': 'Daily',
        'icon': require('./assets/canteen/icon_daily.png'),
        'description': 'Prevents some attacks from knocking you off of walls or ivy.',
    },
    {
        'name': 'Felyne Insurance',
        'type': 'Daily',
        'icon': require('./assets/canteen/icon_daily.png'),
        'description': 'Prevents your group from being penalized the first time a member faints.',
    },
    {
        'name': 'Felyne Provoker',
        'type': 'Daily',
        'icon': require('./assets/canteen/icon_daily.png'),
        'description': 'Draws monsters\' attention, increasing the likelihood of being targeted.',
    },
    {
        'name': 'Felyne Researcher',
        'type': 'Daily',
        'icon': require('./assets/canteen/icon_daily.png'),
        'description': 'Unlock investigations more easily during expeditions.',
    },
    {
        'name': 'Felyne Sprinter',
        'type': 'Daily',
        'icon': require('./assets/canteen/icon_daily.png'),
        'description': 'Dashing depletes less stamina when transporting an item.',
    },
    {
        'name': 'Felyne Temper',
        'type': 'Daily',
        'icon': require('./assets/canteen/icon_daily.png'),
        'description': 'Increases bowgun damage, but also increases deviation.',
    },
    {
        'name': 'Felyne Trainer',
        'type': 'Daily',
        'icon': require('./assets/canteen/icon_daily.png'),
        'description': 'Speeds up Palico growth.',
    },
    {
        'name': 'Felyne Weakener',
        'type': 'Daily',
        'icon': require('./assets/canteen/icon_daily.png'),
        'description': 'Large monsters encountered on quests have an increased chance of being weaker than normal.',
    },
]

export {
    canteenMeats,
    canteenFish,
    canteenVeggies,
    canteenDrinks,
    canteenSkills
}