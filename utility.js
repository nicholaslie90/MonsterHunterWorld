/**
 * Created by nicholaslie on 19/03/18.
 */

import React, {Component} from 'react';
import {AdMobBanner} from "react-native-admob";
import {
    Platform,
} from "react-native";
import * as database from './database'

const productIdRemoveAds = 'nicholaslie.mhwguidewiki.iap.removeads';
const productIDDonateCoffee = 'nicholaslie.mhwguidewiki.iap.donatecoffee';
const iapiOS = ['nicholaslie.monsterhunterworld.iap.removeads'];

let _ = require('lodash');

function addToSkillMap(armorTree, map) {
    // console.warn("map: " + map);
    if (map !== undefined) {
        // console.warn('armorTree: ' + armorTree.setBonusSkills);
        if (armorTree.setBonusSkills !== undefined) {
            _.forEach(armorTree.setBonusSkills, (setBonusSkill) => {
                let key = setBonusSkill.name + "~" + setBonusSkill.alias;
                // console.warn(key);

                let existingData = map.get(key);
                if (existingData !== undefined) {
                    // console.warn(existingData + ' Found!');
                    map.set(key, parseInt(map.get(key)) + 1);
                    // console.warn("Update: " + key + " set to " + parseInt(map.get(key)));
                } else {
                    map.set(key, 1);
                    // console.warn(key + " set to " + parseInt(map.get(key)));
                }
            })
        }
    }
}

function calculateSetBonusSkillMap(armorComponent, map) {
    let isFound = false;
    // console.warn('Searching high-ranked armors..');
    // console.warn(armorComponent.name + ', ' + map);
    database.highRankArmors.map((armorTree)=>{
        if (armorTree.head !== undefined && armorTree.head.name === armorComponent.name) {
            // console.warn("Found HR: " + armorComponent.name + " belongs to " +  armorTree.name);
            // hasSetBonusSkill(highRankArmorTree, equipmentArray);
            addToSkillMap(armorTree, map);
            isFound = true;
            // return map;
        }
        if (armorTree.upperBody !== undefined && armorTree.upperBody.name === armorComponent.name) {
            // console.warn("Found HR: " + armorComponent.name + " belongs to " +  armorTree.name);
            addToSkillMap(armorTree, map);
            isFound = true;
            // return map;
        }
        if (armorTree.hands !== undefined && armorTree.hands.name === armorComponent.name) {
            // console.warn("Found HR: " + armorComponent.name + " belongs to " +  armorTree.name);
            addToSkillMap(armorTree, map);
            isFound = true;
            // return map;
        }
        if (armorTree.lowerBody !== undefined && armorTree.lowerBody.name === armorComponent.name) {
            // console.warn("Found HR: " + armorComponent.name + " belongs to " +  armorTree.name);
            addToSkillMap(armorTree, map);
            isFound = true;
            // return map;
        }
        if (armorTree.legs !== undefined && armorTree.legs.name === armorComponent.name) {
            // console.warn("Found HR: " + armorComponent.name + " belongs to " +  armorTree.name);
            addToSkillMap(armorTree, map);
            isFound = true;
            // return map;
        }
    });

    if (!isFound) {
        database.lowRankArmors.map((armorTree)=>{
            if (armorTree.head !== undefined && armorTree.head.name === armorComponent.name) {
                // console.warn("Found LR: " + armorComponent.name + " belongs to " +  armorTree.name);
                // hasSetBonusSkill(highRankArmorTree, equipmentArray);
                addToSkillMap(armorTree, map);
                isFound = true;
                // return map;
            }
            if (armorTree.upperBody !== undefined && armorTree.upperBody.name === armorComponent.name) {
                // console.warn("Found LR: " + armorComponent.name + " belongs to " +  armorTree.name);
                addToSkillMap(armorTree, map);
                isFound = true;
                // return map;
            }
            if (armorTree.hands !== undefined && armorTree.hands.name === armorComponent.name) {
                // console.warn("Found LR: " + armorComponent.name + " belongs to " +  armorTree.name);
                addToSkillMap(armorTree, map);
                isFound = true;
                // return map;
            }
            if (armorTree.lowerBody !== undefined && armorTree.lowerBody.name === armorComponent.name) {
                // console.warn("Found LR: " + armorComponent.name + " belongs to " +  armorTree.name);
                addToSkillMap(armorTree, map);
                isFound = true;
                // return map;
            }
            if (armorTree.legs !== undefined && armorTree.legs.name === armorComponent.name) {
                // console.warn("Found LR: " + armorComponent.name + " belongs to " +  armorTree.name);
                addToSkillMap(armorTree, map);
                isFound = true;
                // return map;
            }
        });
    }

}

function calculateSkill(item, array, level = 0) {
    if (item.skills !== undefined) {
        item.skills.map((skill, index) => {
            let skillFromDatabase;
            let skillName;
            let skillLevel = 0;

            if (skill.name !== undefined) {
                //Skill from armor components
                skillName = skill.name;
                skillLevel = parseInt(skill.level);
            } else {
                //Skill from charm
                skillName = skill;
                skillLevel = parseInt(level);
            }

            skillFromDatabase = _.find(database.skills, {name: skillName});

            let skillObject = {};
            let currentSkill;
            // Try finding existing skill from the array
            if (array.length > 0) {
                _.forEach(array, (skillInArray) => {
                    if (skillInArray.skill.name === skillName) {
                        currentSkill = skillInArray;
                        return false;
                    }
                });
            }
            if (currentSkill !== undefined) {
                //Update the level of the currentSkill
                if (parseInt(currentSkill.level) < parseInt(skillFromDatabase.maxLevel)) {
                    currentSkill.level += skillLevel;
                    if (parseInt(currentSkill.level) > parseInt(skillFromDatabase.maxLevel)) {
                        currentSkill.level = skillFromDatabase.maxLevel;
                    }
                }
            } else {
                //Insert new skill and its level
                skillObject.skill = skillFromDatabase !== undefined ? skillFromDatabase : skill.name;
                skillObject.level = skillLevel;
                array.push(skillObject);
            }
        });
    } else {
        //Skill from decorations
        if (item.skill !== undefined) {
            let skillFromDatabase = _.find(database.skills, {name: item.skill});

            let skillObject = {};
            let currentSkill;
            // Try finding existing skill from the array
            if (array.length > 0) {
                _.forEach(array, (skillInArray) => {

                    if (skillInArray.skill.name === item.skill) {
                        currentSkill = skillInArray;
                        return false;
                    }
                });
            }
            if (currentSkill !== undefined) {
                //Update the level of the currentSkill
                if (parseInt(currentSkill.level) < parseInt(skillFromDatabase.maxLevel)) {
                    currentSkill.level += parseInt(level);
                    if (parseInt(currentSkill.level) > parseInt(skillFromDatabase.maxLevel)) {
                        currentSkill.level = skillFromDatabase.maxLevel;
                    }
                }
            } else {
                //Insert new skill and its level
                skillObject.skill = skillFromDatabase !== undefined ? skillFromDatabase : item.skill;
                skillObject.level = parseInt(level);
                array.push(skillObject);
            }
        }
    }
}

function createReducer(initialState, handlers) {
    return function reducer(state = initialState, action) {
        if (handlers.hasOwnProperty(action, type)) {
            return handlers[action.type](state, action)
        } else {
            return state
        }
    }
}

const makeCancelable = (promise) => {
    //https://reactjs.org/blog/2015/12/16/ismounted-antipattern.html
    let hasCanceled_ = false;

    const wrappedPromise = new Promise((resolve, reject) => {
        promise.then(
            val => hasCanceled_ ? reject({isCanceled: true}) : resolve(val),
            error => hasCanceled_ ? reject({isCanceled: true}) : reject(error)
        );
    });

    return {
        promise: wrappedPromise,
        cancel() {
            hasCanceled_ = true;
        },
    };
};

function makeAdMob(iOSAdUnitID, androidAdUnitID) {
    return Platform.select({
        ios: () => <AdMobBanner
            adSize="fullBanner"
            adUnitID={iOSAdUnitID}
            testDevices={[AdMobBanner.simulatorId]}
            style={{justifyContent: 'center'}}
        />,
        android: () => <AdMobBanner
            adSize="fullBanner"
            adUnitID={androidAdUnitID}
            testDevices={[AdMobBanner.simulatorId]}
            style={{justifyContent: 'center'}}
        />,
    })();
}

function printAllProperties(object) {
    let propValue;
    for (let propName in object) {
        propValue = object[propName]

        console.log(propName, propValue);
    }
}

function returnRarityColor(rarity) {
    switch (rarity) {
        case '1':
            return '#A8AEAB';

        case '2':
            return '#FFFFFF';

        case '3':
            return '#A8C74F';

        case '4':
            return '#61AA59';

        case '5':
            return '#71ABAB';

        case '6':
            return '#5F5EB0';

        case '7':
            return '#8D60D3';

        case '8':
            return '#B9725B';

        case '9':
            return '#972850';

        case '10':
            return '#1CCBF9';

        case '11':
            return '#F9CB19';

        case '12':
            return '#C8EAEB';
    }
}

function returnWeaponElement(elementParam) {
    let elementIcon = null;
    if (elementParam !== undefined) {
        let element = elementParam.split(" ");
        if (element.length > 0) {
            switch (element[0]) {
                case "None":
                    elementIcon = null;
                    break;
                case "Fire":
                    elementIcon = require('./assets/general/icon_fire.png');
                    break;
                case "Ice":
                    elementIcon = require('./assets/general/icon_ice.png');
                    break;
                case "Water":
                    elementIcon = require('./assets/general/icon_water.png');
                    break;
                case "Thunder":
                    elementIcon = require('./assets/general/icon_thunder.png');
                    break;
                case "Poison":
                    elementIcon = require('./assets/general/icon_poison.png');
                    break;
                case "Paralysis":
                    elementIcon = require('./assets/general/icon_paralysis.png');
                    break;
                case "Sleep":
                    elementIcon = require('./assets/general/icon_sleep.png');
                    break;
                case "Blast":
                    elementIcon = require('./assets/general/icon_blast.png');
                    break;
                case "Dragon":
                    elementIcon = require('./assets/general/icon_dragon.png');
                    break;
            }
        }
    }
    return elementIcon;
}

function returnSlot(slot) {
    switch (slot) {
        case '-':
            return require('./assets/decorations/icon_jewel_none.png');

        case '1':
            return require('./assets/decorations/icon_jewel_1.png');

        case '2':
            return require('./assets/decorations/icon_jewel_2.png');

        case '3':
            return require('./assets/decorations/icon_jewel_3.png');
    }
}

export {
    calculateSetBonusSkillMap,
    calculateSkill,
    makeAdMob,
    printAllProperties,
    returnRarityColor,
    returnWeaponElement,
    returnSlot,
    productIdRemoveAds,
    productIDDonateCoffee,
    iapiOS,
}