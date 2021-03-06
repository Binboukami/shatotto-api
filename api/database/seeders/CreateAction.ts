import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { Action } from 'App/Models'

export default class CreateActionSeeder extends BaseSeeder {
  public async run() {
    await Action.createMany([
      {
        'key': 'F1',
        'name': 'Fire I',
        'level': '2',
        'url': '/actions/1',
        'description': 'Deals fire damage with a potency of 180. Additional Effect: Grants Astral Fire or removes Umbral Ice. Duration: 15s. Additional Effect: 40% chance next Fire III will cost no MP and have no cast time. Duration: 30s',
        'typeId': 2,
        'elementId': 2,
        'targetId': 1,
        'aspectId': 2,
        'cast': 2.5,
        'recast': 2.5,
        'potency': 180,
        'mpCost': 800,
        'aoe': false,
        'aoeScale': 0,
        'dot': false,
        'dotPotency': 0,
        'dotDuration': 0,
        'effectDuration': 15,
        'cooldown': 0
      },
      {
        'key': 'F2',
        'name': 'Fire II',
        'level': '18',
        'url': '/actions/2',
        'description': 'Deals fire damage with a potency of 100 to target and all enemies nearby it. Additional Effect: Grants Astral Fire III and removes Umbral Ice. Duration: 15s. Astral Fire Bonus: Grants Enhanced Flare. Effect is canceled if Astral Fire ends.',
        'typeId': 2,
        'elementId': 2,
        'targetId': 2,
        'aspectId': 4,
        'cast': 3,
        'recast': 2.5,
        'potency': 100,
        'mpCost': 1500,
        'aoe': true,
        'aoeScale': 0,
        'dot': false,
        'dotPotency': 0,
        'dotDuration': 0,
        'effectDuration': 15,
        'cooldown': 0
      },
      {
        'key': 'F3',
        'name': 'Fire III',
        'level': '35',
        'url': '/actions/3',
        'description': 'Deals fire damage with a potency of 260. Additional Effect: Grants Astral Fire III and removes Umbral Ice. Duration: 15s',
        'typeId': 2,
        'elementId': 2,
        'targetId': 1,
        'aspectId': 4,
        'cast': 3.5,
        'recast': 2.5,
        'potency': 260,
        'mpCost': 2000,
        'aoe': true,
        'aoeScale': 0,
        'dot': false,
        'dotPotency': 0,
        'dotDuration': 0,
        'effectDuration': 15,
        'cooldown': 0
      },
      {
        'key': 'F4',
        'name': 'Fire IV',
        'level': '60',
        'url': '/actions/4',
        'description': 'Deals fire damage with a potency of 310. Can only be executed while under the effect of Astral Fire.',
        'typeId': 2,
        'elementId': 2,
        'targetId': 1,
        'aspectId': 1,
        'cast': 2.8,
        'recast': 2.5,
        'potency': 310,
        'mpCost': 800,
        'aoe': true,
        'aoeScale': 0,
        'dot': false,
        'dotPotency': 0,
        'dotDuration': 0,
        'effectDuration': 0,
        'cooldown': 0
      },
      {
        'key': 'B1',
        'name': 'Blizzard I',
        'level': '1',
        'url': '/actions/5',
        'description': 'Deals ice damage with a potency of 180. Additional Effect: Grants Umbral Ice or removes Astral Fire. Duration: 15s',
        'typeId': 2,
        'elementId': 1,
        'targetId': 1,
        'aspectId': 5,
        'cast': 2.5,
        'recast': 2.5,
        'potency': 180,
        'mpCost': 400,
        'aoe': false,
        'aoeScale': 0,
        'dot': false,
        'dotPotency': 0,
        'dotDuration': 0,
        'effectDuration': 15,
        'cooldown': 0
      },
      {
        'key': 'B2',
        'name': 'Blizzard II',
        'level': '12',
        'url': '/actions/6',
        'description': 'Deals ice damage with a potency of 100 to target and all enemies nearby it. Additional Effect: Grants Umbral Ice III and removes Astral Fire. Duration: 15s',
        'typeId': 2,
        'elementId': 1,
        'targetId': 2,
        'aspectId': 7,
        'cast': 3,
        'recast': 2.5,
        'potency': 100,
        'mpCost': 800,
        'aoe': true,
        'aoeScale': 0,
        'dot': false,
        'dotPotency': 0,
        'dotDuration': 0,
        'effectDuration': 15,
        'cooldown': 0
      },
      {
        'key': 'B3',
        'name': 'Blizzard III',
        'level': '35',
        'url': '/actions/7',
        'description': 'Deals ice damage with a potency of 260. Additional Effect: Grants Umbral Ice III and removes Astral Fire. Duration: 15s',
        'typeId': 2,
        'elementId': 1,
        'targetId': 1,
        'aspectId': 7,
        'cast': 3.5,
        'recast': 2.5,
        'potency': 260,
        'mpCost': 800,
        'aoe': false,
        'aoeScale': 0,
        'dot': false,
        'dotPotency': 0,
        'dotDuration': 0,
        'effectDuration': 15,
        'cooldown': 0
      },
      {
        'key': 'B4',
        'name': 'Blizzard IV',
        'level': '58',
        'url': '/actions/8',
        'description': "Deals ice damage with a potency of 310. Additional Effect: Grants 3 Umbral Hearts. Umbral Heart Bonus: Nullifies Astral Fire's MP cost increase for Fire spells and reduces MP cost for Flare by one-third. Can only be executed while under the effect of Umbral Ice.",
        'typeId': 2,
        'elementId': 1,
        'targetId': 1,
        'aspectId': 1,
        'cast': 2.5,
        'recast': 2.5,
        'potency': 310,
        'mpCost': 800,
        'aoe': false,
        'aoeScale': 0,
        'dot': false,
        'dotPotency': 0,
        'dotDuration': 0,
        'effectDuration': 0,
        'cooldown': 0
      },
      {
        'key': 'T1',
        'name': 'Thunder I',
        'level': '6',
        'url': '/actions/9',
        'description': 'Deals lightning damage with a potency of 30. Additional Effect: Lightning damage over time. Potency: 35. Duration: 21s. Additional Effect: 10% chance after each tick that the next Thunder spell of any grade will add its full damage over time amount to its initial damage, have no cast time, and cost no MP. Duration: 40s. Only one Thunder spell-induced damage over time effect per caster can be inflicted upon a single target.',
        'typeId': 2,
        'elementId': 3,
        'targetId': 1,
        'aspectId': 1,
        'cast': 2.5,
        'recast': 2.5,
        'potency': 30,
        'mpCost': 200,
        'aoe': false,
        'aoeScale': 0,
        'dot': true,
        'dotPotency': 35,
        'dotDuration': 21,
        'effectDuration': 40,
        'cooldown': 0
      },
      {
        'key': 'T2',
        'name': 'Thunder II',
        'level': '26',
        'url': '/actions/10',
        'description': "Deals lightning damage with a potency of 50 to target and all enemies nearby it. Additional Effect: Lightning damage over time. Potency: 15. Duration: 18s. Additional Effect: 3% chance after each tick that the next Thunder spell of any grade will add its full damage over time amount to its initial damage, have no cast time, and cost no MP. Duration: 40s. Only one Thunder spell-induced damage over time effect per caster can be inflicted upon a single target.",
        'typeId': 2,
        'elementId': 3,
        'targetId': 2,
        'aspectId': 1,
        'cast': 2.5,
        'recast': 2.5,
        'potency': 50,
        'mpCost': 400,
        'aoe': true,
        'aoeScale': 0,
        'dot': true,
        'dotPotency': 15,
        'dotDuration': 18,
        'effectDuration': 40,
        'cooldown': 0
      },
      {
        'key': 'T3',
        'name': 'Thunder III',
        'level': '45',
        'url': '/actions/11',
        'description': 'Deals lightning damage with a potency of 50. Additional Effect: Lightning damage over time. Potency: 35. Duration: 30s. Additional Effect: 10% chance after each tick that the next Thunder spell of any grade will add its full damage over time amount to its initial damage, have no cast time, and cost no MP. Duration: 40s. Only one Thunder spell-induced damage over time effect per caster can be inflicted upon a single target.',
        'typeId': 2,
        'elementId': 3,
        'targetId': 1,
        'aspectId': 1,
        'cast': 2.5,
        'recast': 2.5,
        'potency': 50,
        'mpCost': 400,
        'aoe': false,
        'aoeScale': 0,
        'dot': true,
        'dotPotency': 35,
        'dotDuration': 30,
        'effectDuration': 40,
        'cooldown': 0
      },
      {
        'key': 'T4',
        'name': 'Thunder IV',
        'level': '64',
        'url': '/actions/12',
        'description': 'Deals lightning damage with a potency of 50 to target and all enemies nearby it. Additional Effect: Lightning damage over time. Potency: 20. Duration: 18s. Additional Effect: 3% chance after each tick that the next Thunder spell of any grade will add its full damage over time amount to its initial damage, have no cast time, and cost no MP. Duration: 40s. Only one Thunder spell-induced damage over time effect per caster can be inflicted upon a single target.',
        'typeId': 2,
        'elementId': 3,
        'targetId': 2,
        'aspectId': 1,
        'cast': 2.5,
        'recast': 2.5,
        'potency': 50,
        'mpCost': 400,
        'aoe': true,
        'aoeScale': 0,
        'dot': true,
        'dotPotency': 20,
        'dotDuration': 18,
        'effectDuration': 40,
        'cooldown': 0
      },
      {
        'key': 'Scathe',
        'name': 'Scathe',
        'level': '15',
        'url': '/actions/13',
        'description': 'Deals unaspected damage with a potency of 100. Additional Effect: 20 % chance potency will double',
        'typeId': 2,
        'elementId': 4,
        'targetId': 1,
        'aspectId': 1,
        'cast': 0,
        'recast': 2.5,
        'potency': 100,
        'mpCost': 800,
        'aoe': false,
        'aoeScale': 0,
        'dot': false,
        'dotPotency': 0,
        'dotDuration': 0,
        'cooldown': 0
      },
      {
        'key': 'Freeze',
        'name': 'Freeze',
        'level': '40',
        'url': '/actions/14',
        'description': "Deals ice damage with a potency of 120 to target and all enemies nearby it. Additional Effect: Grants 3 Umbral Hearts. Umbral Heart Bonus: Nullifies Astral Fire's MP cost increase for Fire spells and reduces MP cost for Flare by one-third. Can only be executed while under the effect of Umbral Ice.",
        'typeId': 2,
        'elementId': 1,
        'targetId': 2,
        'aspectId': 1,
        'cast': 2.8,
        'recast': 2.5,
        'potency': 120,
        'mpCost': 1000,
        'aoe': true,
        'aoeScale': 0,
        'dot': false,
        'dotPotency': 0,
        'dotDuration': 0,
        'cooldown': 0
      },
      {
        'key': 'Flare',
        'name': 'Flare',
        'level': '50',
        'url': '/actions/15',
        'description': "Deals fire damage to target and all enemies nearby it with a potency of 220 for the first enemy, and 40% less for all remaining enemies. Enhanced Flare Potency: 280. Additional Effect: Grants Astral Fire III.Duration: 15s.Can only be executed while under the effect of Astral Fire.",
        'typeId': 2,
        'elementId': 2,
        'targetId': 2,
        'aspectId': 4,
        'cast': 4,
        'recast': 2.5,
        'potency': 220,
        'mpCost': 10000,
        'aoe': true,
        'aoeScale': 0.6,
        'dot': false,
        'dotPotency': 0,
        'dotDuration': 0,
        'effectDuration': 15,
        'cooldown': 0
      },
      {
        'key': 'Foul',
        'name': 'Foul',
        'level': '70',
        'url': '/actions/16',
        'description': 'Deals unaspected damage to target and all enemies nearby it with a potency of 560 for the first enemy, and 60% less for all remaining enemies. Polyglot Cost: 1',
        'typeId': 2,
        'elementId': 4,
        'targetId': 2,
        'aspectId': 1,
        'cast': 0,
        'recast': 2.5,
        'potency': 560,
        'mpCost': 0,
        'aoe': true,
        'aoeScale': 0.4,
        'dot': false,
        'dotPotency': 0,
        'dotDuration': 0,
        'cooldown': 0
      },
      {
        'key': 'Despair',
        'name': 'Despair',
        'level': '72',
        'url': '/actions/17',
        'description': 'Deals fire damage with a potency of 340. Additional Effect: Grants Astral Fire III. Duration: 15s. Can only be executed while under the effect of Astral Fire.',
        'typeId': 2,
        'elementId': 2,
        'targetId': 1,
        'aspectId': 4,
        'cast': 3,
        'recast': 2.5,
        'potency': 340,
        'mpCost': 10000,
        'aoe': false,
        'aoeScale': 0,
        'dot': false,
        'dotPotency': 0,
        'dotDuration': 0,
        'effectDuration': 15,
        'cooldown': 0
      },
      {
        'key': 'US',
        'name': 'Umbral Soul',
        'level': '76',
        'url': '/actions/18',
        'description': "Grants Umbral Ice and 1 Umbral Heart. Umbral Heart Bonus: Nullifies Astral Fire's MP cost increase for Fire spells and reduces MP cost for Flare by one-third. Can only be executed while under the effect of Umbral Ice.",
        'typeId': 2,
        'elementId': 1,
        'targetId': 1,
        'aspectId': 5,
        'cast': 0,
        'recast': 2.5,
        'potency': 0,
        'mpCost': 0,
        'aoe': false,
        'aoeScale': 0,
        'dot': false,
        'dotPotency': 0,
        'dotDuration': 0,
        'cooldown': 0
      },
      {
        'key': 'Xeno',
        'name': 'Xenoglossy',
        'level': '80',
        'url': '/actions/19',
        'description': 'Deals unaspected damage with a potency of 760. Polyglot Cost: 1',
        'typeId': 2,
        'elementId': 4,
        'targetId': 1,
        'aspectId': 1,
        'cast': 0,
        'recast': 2.5,
        'potency': 760,
        'mpCost': 0,
        'aoe': false,
        'aoeScale': 0,
        'dot': false,
        'dotPotency': 0,
        'dotDuration': 0,
        'cooldown': 0
      },
      {
        'key': 'HF',
        'name': 'High Fire',
        'level': '82',
        'url': '/actions/20',
        'description': "Deals fire damage with a potency of 140 to target and all enemies nearby it. Additional Effect: Grants Astral Fire III and removes Umbral Ice. Duration: 15s. Astral Fire Bonus: Grants Enhanced Flare. Effect is canceled if Astral Fire ends.",
        'typeId': 2,
        'elementId': 2,
        'targetId': 2,
        'aspectId': 4,
        'cast': 3,
        'recast': 2.5,
        'potency': 140,
        'mpCost': 1500,
        'aoe': true,
        'aoeScale': 0,
        'dot': false,
        'dotPotency': 0,
        'dotDuration': 0,
        'effectDuration': 15,
        'cooldown': 0
      },
      {
        'key': 'HB',
        'name': 'High Blizzard',
        'level': '82',
        'url': '/actions/21',
        'description': "Deals ice damage with a potency of 140 to target and all enemies nearby it. Additional Effect: Grants Umbral Ice III and removes Astral Fire. Duration: 15s",
        'typeId': 2,
        'elementId': 1,
        'targetId': 2,
        'aspectId': 7,
        'cast': 3,
        'recast': 2.5,
        'potency': 120,
        'mpCost': 800,
        'aoe': true,
        'aoeScale': 0,
        'dot': false,
        'dotPotency': 0,
        'dotDuration': 0,
        'effectDuration': 15,
        'cooldown': 0
      },
      {
        'key': 'Para',
        'name': 'Paradox',
        'level': '90',
        'url': '/actions/22',
        'description': "Deals unaspected damage with a potency of 500. Astral Fire Bonus: Refreshes the duration of Astral Fire and 40% chance to grant Firestarter. Duration: 15s. Firestarter Effect: Next Fire III will require no time to cast and cost no MP. Duration: 30s. Umbral Ice Bonus: Spell is cast immediately, requires no MP to cast, and refreshes the duration of Umbral Ice. Duration: 15s. Can only be executed while under the effect of Paradox. ???This action cannot be assigned to a hotbar.",
        'typeId': 2,
        'elementId': 4,
        'targetId': 1,
        'aspectId': 1,
        'cast': 2.5,
        'recast': 2.5,
        'potency': 500,
        'mpCost': 1600,
        'aoe': false,
        'aoeScale': 0,
        'dot': false,
        'dotPotency': 0,
        'dotDuration': 0,
        'effectDuration': 15,
        'cooldown': 0
      },
      {
        'key': 'Sleep',
        'name': 'Sleep',
        'level': '10',
        'url': '/actions/23',
        'description': "Puts target and all nearby enemies to sleep. Duration: 30s. Cancels auto-attack upon execution.",
        'typeId': 2,
        'elementId': 4,
        'targetId': 1,
        'aspectId': 1,
        'cast': 2.5,
        'recast': 2.5,
        'potency': 0,
        'mpCost': 800,
        'aoe': false,
        'aoeScale': 0,
        'dot': false,
        'dotPotency': 0,
        'dotDuration': 0,
        'effectDuration': 30,
        'cooldown': 0
      },
      // Abilities
      {
        'key': 'Addle',
        'name': 'Addle',
        'level': '8',
        'url': '/actions/24',
        'description': "Lowers target's physical damage dealt by 5% and magic damage dealt by 10%. Duration: 10s",
        'typeId': 1,
        'elementId': 4,
        'targetId': 1,
        'aspectId': 1,
        'cast': 0,
        'recast': 0,
        'potency': 0,
        'mpCost': 0,
        'aoe': false,
        'aoeScale': 0,
        'dot': false,
        'dotPotency': 0,
        'dotDuration': 0,
        'effectDuration': 10,
        'cooldown': 90
      },
      {
        'key': 'Trans',
        'name': 'Transpose',
        'level': '10',
        'url': '/actions/25',
        'description': "Swaps Astral Fire with a single Umbral Ice, or Umbral Ice with a single Astral Fire.",
        'typeId': 1,
        'elementId': 4,
        'targetId': 1,
        'aspectId': 1,
        'cast': 0,
        'recast': 0,
        'potency': 0,
        'mpCost': 0,
        'aoe': false,
        'aoeScale': 0,
        'dot': false,
        'dotPotency': 0,
        'dotDuration': 0,
        'effectDuration': 0,
        'cooldown': 5
      },
      {
        'key': 'Swift',
        'name': 'Swiftcast',
        'level': '18',
        'url': '/actions/26',
        'description': "Next spell is cast immediately. Duration: 10s",
        'typeId': 1,
        'elementId': 4,
        'targetId': 1,
        'aspectId': 1,
        'cast': 0,
        'recast': 0,
        'potency': 0,
        'mpCost': 0,
        'aoe': false,
        'aoeScale': 0,
        'dot': false,
        'dotPotency': 0,
        'dotDuration': 0,
        'effectDuration': 10,
        'cooldown': 60
      },
      {
        'key': 'Lucid',
        'name': 'Lucid Dreaming',
        'level': '24',
        'url': '/actions/27',
        'description': "Gradually restores own MP. Potency: 55. Duration: 21s",
        'typeId': 1,
        'elementId': 4,
        'targetId': 1,
        'aspectId': 1,
        'cast': 0,
        'recast': 0,
        'potency': 55,
        'mpCost': 0,
        'aoe': false,
        'aoeScale': 0,
        'dot': false,
        'dotPotency': 0,
        'dotDuration': 0,
        'effectDuration': 21,
        'cooldown': 60
      },
      {
        'key': 'Manaward',
        'name': 'Manaward',
        'level': '30',
        'url': '/actions/28',
        'description': "Creates a barrier that nullifies damage totaling up to 30% of maximum HP. Duration: 20s",
        'typeId': 1,
        'elementId': 4,
        'targetId': 1,
        'aspectId': 1,
        'cast': 0,
        'recast': 0,
        'potency': 0,
        'mpCost': 0,
        'aoe': false,
        'aoeScale': 0,
        'dot': false,
        'dotPotency': 0,
        'dotDuration': 0,
        'effectDuration': 20,
        'cooldown': 120
      },
      {
        'key': 'Manafont',
        'name': 'Manafont',
        'level': '30',
        'url': '/actions/29',
        'description': "Restores 30% of maximum MP.",
        'typeId': 1,
        'elementId': 4,
        'targetId': 1,
        'aspectId': 1,
        'cast': 0,
        'recast': 0,
        'potency': 0,
        'mpCost': 0,
        'aoe': false,
        'aoeScale': 0,
        'dot': false,
        'dotPotency': 0,
        'dotDuration': 0,
        'effectDuration': 0,
        'cooldown': 120
      },
      {
        'key': 'Sure',
        'name': 'Surecast',
        'level': '44',
        'url': '/actions/30',
        'description': "Spells can be cast without interruption. Additional Effect: Nullifies most knockback and draw-in effects. Duration: 6s",
        'typeId': 1,
        'elementId': 4,
        'targetId': 1,
        'aspectId': 1,
        'cast': 0,
        'recast': 0,
        'potency': 0,
        'mpCost': 0,
        'aoe': false,
        'aoeScale': 0,
        'dot': false,
        'dotPotency': 0,
        'dotDuration': 0,
        'effectDuration': 6,
        'cooldown': 120
      },
      {
        'key': 'LL',
        'name': 'Ley Lines',
        'level': '52',
        'url': '/actions/31',
        'description': "Connects naturally occurring ley lines to create a circle of power which, while standing within it, reduces spell cast time and recast time, and auto-attack delay by 15%. Duration: 30s",
        'typeId': 1,
        'elementId': 4,
        'targetId': 1,
        'aspectId': 1,
        'cast': 0,
        'recast': 0,
        'potency': 0,
        'mpCost': 0,
        'aoe': false,
        'aoeScale': 0,
        'dot': false,
        'dotPotency': 0,
        'dotDuration': 0,
        'effectDuration': 30,
        'cooldown': 120
      },
      {
        'key': 'Sharp',
        'name': 'Sharpcast',
        'level': '54',
        'url': '/actions/32',
        'description': "Ensures the next Scathe, Fire, Paradox, or Thunder spell cast will, for the first hit, trigger Scathe's additional effect, Firestarter, or Thundercloud. Duration: 30s. Maximum Charges: 2",
        'typeId': 1,
        'elementId': 4,
        'targetId': 1,
        'aspectId': 1,
        'cast': 0,
        'recast': 0,
        'potency': 0,
        'mpCost': 0,
        'aoe': false,
        'aoeScale': 0,
        'dot': false,
        'dotPotency': 0,
        'dotDuration': 0,
        'effectDuration': 30,
        'cooldown': 30
      },
      {
        'key': 'Triple',
        'name': 'Triple Cast',
        'level': '66',
        'url': '/actions/33',
        'description': "The next three spells will require no cast time. Duration: 15s. Maximum Charges: 2",
        'typeId': 1,
        'elementId': 4,
        'targetId': 1,
        'aspectId': 1,
        'cast': 0,
        'recast': 0,
        'potency': 0,
        'mpCost': 0,
        'aoe': false,
        'aoeScale': 0,
        'dot': false,
        'dotPotency': 0,
        'dotDuration': 0,
        'effectDuration': 15,
        'cooldown': 60
      },
      {
        'key': 'Amp',
        'name': 'Amplifier',
        'level': '86',
        'url': '/actions/34',
        'description': "Grants Polyglot. Can only be executed while under the effect of Astral Fire or Umbral Ice.",
        'typeId': 1,
        'elementId': 4,
        'targetId': 1,
        'aspectId': 1,
        'cast': 0,
        'recast': 0,
        'potency': 0,
        'mpCost': 0,
        'aoe': false,
        'aoeScale': 0,
        'dot': false,
        'dotPotency': 0,
        'dotDuration': 0,
        'effectDuration': 0,
        'cooldown': 120
      },
    ])
  }
}