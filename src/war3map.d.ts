export {}

declare global {
    const LIBRARY_AfkMode: boolean
    var timeMinAfk: number
    const AfkMode___Z: number
    const AfkMode___SIZE: number
    const AfkMode___TRANSPARENCY: number
    var isAfk: boolean[]
    var afkModeTimers: timer[]
    var afkModeTextTags: texttag[]
    var killAllAfkTimer: timer
    const LIBRARY_Ascii: boolean
    const Ascii__TABLE_ASCII: string
    const Ascii__DEBUT_TABLE_ASCII: number
    const Ascii__TAILLE_TABLE_ASCII: number
    const LIBRARY_AutoContinueAfterSliding: boolean
    var lastClickedX: number[]
    var lastClickedY: number[]
    var lastClickedWidgets: widget[]
    var isLastTargetALocation: boolean[]
    var udg_autoContinueAfterSliding: boolean[]
    const AutoContinueAfterSliding__ECART_MAX_ANGLE: number
    const LIBRARY_DeplacementHeroHorsDeathPath: boolean
    const DeplacementHeroHorsDeathPath___GRADUATION_ANGLE: number
    const DeplacementHeroHorsDeathPath___VALEUR_DECALAGE: number
    const LIBRARY_Disco: boolean
    const LIBRARY_FunctionsOnNumbers: boolean
    const LIBRARY_GameTime: boolean
    var GameTime___hours: number
    var GameTime___minuts: number
    var GameTime___seconds: number
    var TIME_PLAYER: player
    const LIBRARY_Gravity: boolean
    var Gravity__gravity: number
    const LIBRARY_ImmolationSkills: boolean
    var IMMOLATION_SKILLS: number[]
    const LIBRARY_LevelFunctions: boolean
    const LIBRARY_MakeAction: boolean
    const LIBRARY_Meteor: boolean
    const METEOR_NORMAL: number
    const METEOR_CHEAT: number
    const LIBRARY_MonsterOrCasterStack: boolean
    var MonsterOrCasterStack___udg_enumMoc: number
    const LIBRARY_MonstersClickableSetLife: boolean
    var monstersClickable: group
    var trigMonstersClickableSetLife: trigger
    const MonstersClickableSetLife__PERIOD: number
    const LIBRARY_SlideTrigger: boolean
    const LIBRARY_Stack: boolean
    const LIBRARY_StringLib: boolean
    var STRING_INDEX_NONE: number
    var STRING_INVALID_SEGMENT: string
    var StringLib__ht_hash: hashtable
    const StringLib__KEY_ASCII: number
    const StringLib__KEY_UTF8: number
    const LIBRARY_TerrainModifyingTrig: boolean
    var y: number
    var TerrainModifyingTrig___wasCheckTerrainTriggerOn: boolean[]
    var terrainModifyWorking: boolean
    const LIBRARY_TerrainTypeAsciiConversion: boolean
    const LIBRARY_TerrainTypeFunctions: boolean
    const LIBRARY_TerrainTypeMax: boolean
    const LIBRARY_Text: boolean
    const NORMAL_TEXT_COLORCODE: string
    const MAKE_TEXT_COLORCODE: string
    const ERROR_TEXT_COLORCODE: string
    var Text_enabled: boolean
    var Text_posX: number
    var Text_posY: number
    const LIBRARY_TimerUtils: boolean
    const TimerUtils__USE_HASH_TABLE: boolean
    const TimerUtils__USE_FLEXIBLE_OFFSET: boolean
    const TimerUtils__OFFSET: number
    var TimerUtils__VOFFSET: number
    const TimerUtils__QUANTITY: number
    const TimerUtils__ARRAY_SIZE: number
    var TimerUtils__ht: hashtable
    var TimerUtils__tN: number
    const TimerUtils__HELD: number
    var TimerUtils__didinit: boolean
    const LIBRARY_Triggers: boolean
    const LIBRARY_ViewAllHideAll: boolean
    var udg_hideAll: fogmodifier
    var udg_viewAll: fogmodifier
    const LIBRARY_VisibilityModifier: boolean
    const LIBRARY_ZLibrary: boolean
    const WATER_TYPE_NONE: number
    const WATER_TYPE_SHALLOW: number
    const WATER_TYPE_DEEP: number
    const ZLibrary__PLATFORM: number
    const ZLibrary__PLATFORM_HEIGHT: number
    const ZLibrary__p: location
    const LIBRARY_BasicFunctions: boolean
    var udg_currentMonsterPlayerId: number
    const LIBRARY_CasterType: boolean
    const DEFAULT_CASTER_PROJECTILE_SPEED: number
    const MIN_CASTER_PROJECTILE_SPEED: number
    const DEFAULT_CASTER_RANGE: number
    const MIN_CASTER_LOAD_TIME: number
    const DEFAULT_CASTER_LOAD_TIME: number
    const DEFAULT_CASTER_ANIMATION: string
    const LIBRARY_DecodeString: boolean
    const LIBRARY_EscaperFunctions: boolean
    const LIBRARY_MakeCasterAction: boolean
    const LIBRARY_MakeDeleteCastersAction: boolean
    const LIBRARY_MakeDeleteMeteorsAction: boolean
    const LIBRARY_MakeDeleteMonstersAction: boolean
    const LIBRARY_MakeLastActions: boolean
    const MakeLastActions__NB_MAX_ACTIONS_SAVED: number
    const LIBRARY_MakeMeteorAction: boolean
    const LIBRARY_MakeMonsterAction: boolean
    const LIBRARY_MakeTerrainHeightAction: boolean
    const LIBRARY_MakeVisibilityModifierAction: boolean
    const LIBRARY_MessageHeroDies: boolean
    const MessageHeroDies___MESSAGE_DURATION: number
    const MessageHeroDies___TIME_BETWEEN_DEATH_AND_MESSAGE: number
    var MessageHeroDies___timerSonJoue: timer
    var MessageHeroDies___isSoundPlaying: boolean
    var MessageHeroDies___DUREE_SON: number
    const LIBRARY_MeteorArray: boolean
    const MeteorArray___MAX_NB_METEORS: number
    const LIBRARY_MeteorFunctions: boolean
    var MeteorFunctions___meteor: item
    const LIBRARY_MonsterType: boolean
    const LIBRARY_SaveLevels: boolean
    var SaveLevels___levelId: number
    var SaveLevels___level: number
    var SaveLevels___visibilityId: number
    var SaveLevels___monsterNoMoveId: number
    var SaveLevels___monsterSimplePatrolId: number
    var SaveLevels___monsterMultiplePatrolsId: number
    var SaveLevels___monsterTeleportId: number
    var SaveLevels___meteorId: number
    var SaveLevels___monsterSpawnId: number
    var SaveLevels___casterId: number
    const SaveLevels___NB_ITEM_TO_SAVE_EACH_TIME: number
    var SaveLevels___trg_startSaveNextLevel: trigger
    const LIBRARY_SaveTerrainConfigInCache: boolean
    const LIBRARY_SoundUtils: boolean
    var SoundUtils__ht: hashtable
    var SoundUtils__st: hashtable
    var SoundUtils__rt: hashtable
    var SoundUtils__kt: hashtable
    const LIBRARY_StringArrayForCache: boolean
    const CACHE_SEPARATEUR_ITEM: string
    const CACHE_SEPARATEUR_PARAM: string
    const StringArrayForCache___MAX_STRING_LENGTH: number
    var stringArrayForCache: number
    const LIBRARY_TerrainTypeGrass: boolean
    const LIBRARY_VisibilityModifierArray: boolean
    const LIBRARY_Apm: boolean
    var nbClicsOnSlide: number[]
    var timeOnSlide: number[]
    const LIBRARY_CasterFunctions: boolean
    var CasterFunctions___escaper: number
    var CasterFunctions___caster: number
    const CasterFunctions___PRECISION_TIR: number
    const CasterFunctions___PRECISION_DIFF_POS_HERO: number
    const CasterFunctions___ECART_CHECK: number
    var CasterFunctions___x1: number
    var CasterFunctions___y1: number
    var CasterFunctions___angleSlider: number
    var CasterFunctions___sliderSpeed: number
    var CasterFunctions___x2: number
    var CasterFunctions___y2: number
    var CasterFunctions___x3: number
    var CasterFunctions___y3: number
    var CasterFunctions___k1: number
    var CasterFunctions___k2: number
    var CasterFunctions___Xk1: number
    var CasterFunctions___Yk1: number
    var CasterFunctions___Xk2: number
    var CasterFunctions___Yk2: number
    var CasterFunctions___XintersectionDevantHeros: number
    var CasterFunctions___YintersectionDevantHeros: number
    const LIBRARY_CasterTypeArray: boolean
    const LIBRARY_CheckTerrainTrigger: boolean
    const CheckTerrainTrigger__TOLERANCE_ANGLE_DIFF: number
    const CheckTerrainTrigger__TOLERANCE_RAYON_DIFF: number
    const CheckTerrainTrigger__INIT_RAYON_TOLERANCE: number
    const LIBRARY_CommandShortcuts: boolean
    var A_shortcutCommand: string[]
    var Z_shortcutCommand: string[]
    var E_shortcutCommand: string[]
    var R_shortcutCommand: string[]
    var Q_shortcutCommand: string[]
    var S_shortcutCommand: string[]
    var D_shortcutCommand: string[]
    var F_shortcutCommand: string[]
    const LIBRARY_Lives: boolean
    var Lives___LIVES_PLAYER: player
    const LIBRARY_MonsterTypeArray: boolean
    const LIBRARY_SaveCasterTypes: boolean
    const LIBRARY_TeleportOnceOnly: boolean
    var TeleportOnceOnly__teleTriggers: trigger[]
    const LIBRARY_TerrainFunctions: boolean
    const LIBRARY_TerrainTypeNamesAndData: boolean
    var TERRAIN_TYPE_NAMES: string[]
    var TERRAIN_TYPE_DATA: string[]
    var NB_TERRAINS_TOTAL: number
    const LIBRARY_EscaperEffectFunctions: boolean
    const LIBRARY_ModifyTerrainFunctions: boolean
    const LIBRARY_MonsterCreationFunctions: boolean
    var MonsterCreationFunctions__monster: unit
    var MonsterCreationFunctions__ATTACK_SKILL: number
    const MonsterCreationFunctions__ABILITY_1_LIFE: number
    const MonsterCreationFunctions__ABILITY_10_LIFE: number
    const MonsterCreationFunctions__ABILITY_100_LIFE: number
    const MonsterCreationFunctions__ABILITY_1000_LIFE: number
    const MonsterCreationFunctions__ABILITY_10000_LIFE: number
    const MonsterCreationFunctions__ABILITY_ANNULER_VISION: number
    const MonsterCreationFunctions__ABILITY_FORME_CORBEAU: number
    const LIBRARY_SaveMonsterTypes: boolean
    const LIBRARY_TerrainType: boolean
    const LIBRARY_TerrainTypeFromString: boolean
    const LIBRARY_AllTerrainFunctions: boolean
    const LIBRARY_CasterShot: boolean
    var CasterShot___shotsHashtable: hashtable
    const CasterShot___PERIOD: number
    const LIBRARY_EscaperEffect: boolean
    const LIBRARY_MakeTerrainCopyPasteAction: boolean
    const LIBRARY_MakeTerrainCreateAction: boolean
    const LIBRARY_MakeTerrainHorizontalSymmetryAction: boolean
    const LIBRARY_MakeTerrainVerticalSymmetryAction: boolean
    const LIBRARY_MonsterSpawn: boolean
    var MonsterSpawn___ht: hashtable
    const MonsterSpawn___DECALAGE_UNSPAWN: number
    const MonsterSpawn___DELAY_BETWEEN_SPAWN_AND_MOVEMENT: number
    const LIBRARY_SaveWater: boolean
    var SaveWater___y: number
    const LIBRARY_TerrainTypeDeathFunctions: boolean
    const LIBRARY_TerrainTypeSlide: boolean
    const LIBRARY_TerrainTypeWalk: boolean
    const LIBRARY_ChangeAllTerrains: boolean
    var ChangeAllTerrains___oldTerrainTypes: number[]
    var ChangeAllTerrains___newTerrainTypes: number[]
    var ChangeAllTerrains___lastTerrainArrayId: number
    var ChangeAllTerrains___nbNewTerrains: number
    var ChangeAllTerrains___nbNewTerrainsAllowed: number
    var udg_changeAllTerrainsAtRevive: boolean
    const LIBRARY_ChangeOneTerrain: boolean
    var ChangeOneTerrain___oldTerrain: number
    var ChangeOneTerrain___newTerrain: number
    const LIBRARY_EscaperEffectArray: boolean
    const LIBRARY_ExchangeTerrains: boolean
    var ExchangeTerrains___terrainA: number
    var ExchangeTerrains___terrainB: number
    const LIBRARY_MonsterSpawnArray: boolean
    const LIBRARY_RandomizeTerrains: boolean
    var RandomizeTerrains___oldTerrainTypes: number[]
    var RandomizeTerrains___newTerrainTypes: number[]
    var RandomizeTerrains___lastTerrainArrayId: number
    const LIBRARY_ReinitTerrains: boolean
    var ReinitTerrains___terrainTypes: number[]
    var ReinitTerrains___terrainTypeIds: number[]
    var ReinitTerrains___terrainTypeIdsToReplace: number[]
    const LIBRARY_ReinitTerrainsPositions: boolean
    var ReinitTerrainsPositions___terrainSave_id: number
    const LIBRARY_SaveLoadTerrainWithName: boolean
    var SaveLoadTerrainWithName___saveNameInt: number
    var SaveLoadTerrainWithName___terrainSaves: hashtable
    var SaveLoadTerrainWithName___terrainSave_id: number
    const LIBRARY_SaveLoadTerrainWithoutName: boolean
    var SaveLoadTerrainWithoutName___terrainSave_id: number
    const LIBRARY_SaveTerrainRamps: boolean
    var SaveTerrainRamps___y: number
    var SaveTerrainRamps___ramps: boolean[]
    const SaveTerrainRamps___DECAL_TEST_PATH: number
    const LIBRARY_TerrainTypeDeathKillingTimers: boolean
    const LIBRARY_Escaper: boolean
    const SHOW_REVIVE_EFFECTS: boolean
    var Escaper___heroToSelect: unit
    const LIBRARY_SaveTerrainHeights: boolean
    var SaveTerrainHeights___y: number
    const LIBRARY_TerrainTypeDeath: boolean
    const DEATH_TERRAIN_MAX_TOLERANCE: number
    const LIBRARY_TrigCheckpointReviveHeroes: boolean
    var TrigCheckpointReviveHeroes_levelForReviving: number
    var TrigCheckpointReviveHeroes_revivingFinisher: number
    const LIBRARY_CasterDeleteActions: boolean
    const LIBRARY_CasterMakingActions: boolean
    const LIBRARY_CommandsFunctions: boolean
    const LIBRARY_EndMakingActions: boolean
    const LIBRARY_EscaperArray: boolean
    const LIBRARY_GettingTerrainTypeInfoActions: boolean
    const LIBRARY_Heroes: boolean
    var startPositions: location[]
    var startPositionsRandomized: location[]
    var playerIdsRandomized: number[]
    var TIME_BEFORE_HERO_SPAWN: number
    var TIME_BETWEEN_EACH_HERO_SPAWN: number
    const HERO_START_ANGLE: number
    const EFFECT_FOR_MISSING_HEROES: string
    const Heroes___NB_COLUMNS: number
    const Heroes___NB_ROWS: number
    const LIBRARY_MClearMobActions: boolean
    const LIBRARY_MClearMobDeleteActions: boolean
    const LIBRARY_MMMultiplePatrolsActions: boolean
    const LIBRARY_MMNoMoveActions: boolean
    const LIBRARY_MMSimplePatrolActions: boolean
    const MMSimplePatrolActions___MIN_DIST: number
    const MMSimplePatrolActions___MAX_DIST: number
    const MMSimplePatrolActions___ECART_DIST: number
    const MMSimplePatrolActions___ECART_ANGLE: number
    const MMSimplePatrolActions___DIST_ON_TERRAIN_MAX: number
    const MMSimplePatrolActions___DIST_ON_TERRAIN_DEFAULT: number
    var MMSimplePatrolActions___distOnTerrain: number
    const LIBRARY_MMTeleportActions: boolean
    const LIBRARY_MakeExchangeTerrainsActions: boolean
    const LIBRARY_MakeGetUnitTeleportPeriodActions: boolean
    const LIBRARY_MakeSetUnitMonsterTypeActions: boolean
    const LIBRARY_MakeSetUnitTeleportPeriodActions: boolean
    const LIBRARY_MeteorDeleteActions: boolean
    const LIBRARY_MeteorMakingActions: boolean
    const LIBRARY_MonsterDeleteActions: boolean
    const LIBRARY_MonsterSpawnMakingActions: boolean
    const LIBRARY_SaveTerrain: boolean
    var SaveTerrain___y: number
    var SaveTerrain___terrainTypeIds: number[]
    var SaveTerrain___nbTerrainTypesUsed: number
    const LIBRARY_StartAndEnd: boolean
    var DEPART_PAR_DEFAUT: number
    const LIBRARY_StartMakingActions: boolean
    const LIBRARY_TerrainCopyPasteActions: boolean
    const LIBRARY_TerrainHeightMakingActions: boolean
    const LIBRARY_TerrainHorizontalSymmetryActions: boolean
    const LIBRARY_TerrainMakingActions: boolean
    const LIBRARY_TerrainVerticalSymmetryActions: boolean
    const LIBRARY_TurnOnSlide: boolean
    var TurnOnSlide__escaper: number
    var TurnOnSlide__slider: unit
    var TurnOnSlide__n: number
    var TurnOnSlide__sliderX: number
    var TurnOnSlide__sliderY: number
    var TurnOnSlide__orderWidget: widget
    var TurnOnSlide__orderX: number
    var TurnOnSlide__orderY: number
    var TurnOnSlide__angle: number
    var TurnOnSlide__canTurn: boolean
    var udg_isDrunk: boolean[]
    var udg_drunk: number[]
    var udg_drunkLevel: number[]
    const INITIAL_DRUNK: number
    var udg_drunkEffect: effect[]
    var DRUNK_EFFECTS: string[]
    const DRUNK_EFFECT_PETIT: string
    const DRUNK_EFFECT_MOYEN: string
    const DRUNK_EFFECT_GROS: string
    var trg_turnToPoint: trigger
    var trg_turnToWidget: trigger
    const LIBRARY_VisibilityModifierMakingActions: boolean
    const LIBRARY_CommandAll: boolean
    const LIBRARY_CommandCheat: boolean
    const LIBRARY_CommandMake: boolean
    const LIBRARY_CommandRed: boolean
    const LIBRARY_CommandTrueMax: boolean
    const LIBRARY_Level: boolean
    var Level_earningLivesActivated: boolean
    const LIBRARY_Make: boolean
    const MAKE_LAST_CLIC_UNIT_ID: number
    const MAKE_CANT_CANCEL_MORE: string
    const MAKE_CANT_REDO_MORE: string
    const LIBRARY_MonsterInterface: boolean
    const MAX_NB_MONSTERS: number
    var MonsterInterface__htMonsterId2MonsterHandleId: hashtable
    const MonsterInterface__MONSTER: number
    const MonsterInterface__CASTER: number
    const NO_ID: number
    var MonsterInterface__monsterNextId: number
    const DISABLE_TRANSPARENCY: number
    const LIBRARY_SaveMapInCache: boolean
    var saveMap_cache: gamecache
    var trigSaveMapInCache: trigger
    const LIBRARY_TerrainTypeArray: boolean
    const LIBRARY_ClearMob: boolean
    var ClearMob___htClearMob: hashtable
    const CLEAR_MOB_MAX_DURATION: number
    const ClearMob___TRIGGER_MOB: number
    const ClearMob___TIMER_ACTIVATED: number
    const ClearMob___TIMER_FRONT_MONTANT: number
    const ClearMob_FRONT_MONTANT_DURATION: number
    var ClearMob___udp_currentTimer: timer
    const MAX_NB_CLEAR_MOB_BY_LEVEL: number
    const ClearMob___TRIGGER_MOB_PERMANENT_EFFECT: string
    const LIBRARY_CommandMax: boolean
    const LIBRARY_LevelArray: boolean
    const NB_MAX_LEVELS: number
    const LIBRARY_MakeCaster: boolean
    const LIBRARY_MakeDeleteCasters: boolean
    const LIBRARY_MakeDeleteMeteors: boolean
    const LIBRARY_MakeDeleteMonsters: boolean
    const LIBRARY_MakeEnd: boolean
    const LIBRARY_MakeExchangeTerrains: boolean
    const LIBRARY_MakeGetTerrainType: boolean
    const LIBRARY_MakeGetUnitTeleportPeriod: boolean
    const LIBRARY_MakeMeteor: boolean
    const LIBRARY_MakeMonsterMultiplePatrols: boolean
    const LIBRARY_MakeMonsterNoMove: boolean
    const LIBRARY_MakeMonsterSimplePatrol: boolean
    const LIBRARY_MakeMonsterSpawn: boolean
    const LIBRARY_MakeMonsterTeleport: boolean
    const LIBRARY_MakeSetUnitMonsterType: boolean
    const LIBRARY_MakeSetUnitTeleportPeriod: boolean
    const LIBRARY_MakeStart: boolean
    const LIBRARY_MakeTerrainCopyPaste: boolean
    const LIBRARY_MakeTerrainCreate: boolean
    const LIBRARY_MakeTerrainHeight: boolean
    const LIBRARY_MakeTerrainHorizontalSymmetry: boolean
    const LIBRARY_MakeTerrainVerticalSymmetry: boolean
    const LIBRARY_MakeVisibilityModifier: boolean
    const LIBRARY_MonsterMultiplePatrols: boolean
    const LIBRARY_MonsterNoMove: boolean
    const LIBRARY_MonsterOrCaster: boolean
    const LIBRARY_MonsterSimplePatrol: boolean
    var MonsterSimplePatrol__simplePatrolMobs: group
    const MonsterSimplePatrol__checkSimplePatrolMobsPeriod: number
    const LIBRARY_MonsterTeleport: boolean
    const WAIT: number
    const HIDE: number
    const MONSTER_TELEPORT_PERIOD_MIN: number
    const MONSTER_TELEPORT_PERIOD_MAX: number
    var MonsterTeleport_monsterTeleportHashtable: hashtable
    const LIBRARY_Caster: boolean
    var Caster_casterHashtable: hashtable
    const LIBRARY_ClearMobArray: boolean
    const LIBRARY_CommandExecution: boolean
    const LIBRARY_MakeClearMob: boolean
    const LIBRARY_MakeDeleteClearMob: boolean
    const LIBRARY_MonsterMultiplePatrolsArray: boolean
    const LIBRARY_MonsterNoMoveArray: boolean
    const LIBRARY_MonsterSimplePatrolArray: boolean
    const LIBRARY_MonsterTeleportArray: boolean
    const LIBRARY_CasterArray: boolean
    const LIBRARY_EscaperSavedCommands: boolean
    var udg_savedCommands: number
    var udg_has_max_name: boolean[]
    var udg_tripleKillSoundOn: boolean
    var udg_cheatCache: gamecache
    var udg_used_terrain_types: number[]
    var udg_nb_used_terrains: number
    var udg_cheatsUsed: boolean
    var udg_areRedRightsOn: boolean
    var udg_is_circleing_j: boolean[]
    var udg_loc_x: number[]
    var udg_loc_y: number[]
    var udg_hero_j: unit[]
    var udg_terrain_slide: number
    var udg_handle: handle
    var udg_x: number
    var gg_rct_departLvl_0: rect
    var gg_snd_noob: sound
    var gg_snd_multisquish: sound
    var gg_snd_questCompleted: sound
    var gg_snd_questFailed: sound
    var gg_snd_goodJob: sound
    var gg_snd_warning: sound
    var gg_snd_start: sound
    var gg_snd_allyHeroDies0: sound
    var gg_snd_heroDies0: sound
    var gg_snd_allyHeroDies1: sound
    var gg_snd_heroDies1: sound
    var gg_snd_allyHeroDies2: sound
    var gg_snd_heroDies2: sound
    var gg_snd_allyHeroDies3: sound
    var gg_snd_heroDies3: sound
    var gg_trg_Version: trigger
    var gg_trg_Constants: trigger
    var gg_trg_Text: trigger
    var gg_trg_Init_terrain_limit_variables: trigger
    var gg_trg_Init_colorCodes: trigger
    var gg_trg_Basic_functions: trigger
    var gg_trg_Functions_on_numbers: trigger
    var gg_trg_Ascii: trigger
    var gg_trg_Decode_string: trigger
    var gg_trg_ZLibrary: trigger
    var gg_trg_StringUtils: trigger
    var gg_trg_Stack: trigger
    var gg_trg_TimerUtils: trigger
    var gg_trg_SoundUtils: trigger
    var gg_trg_View_all_hide_all: trigger
    var gg_trg_Immolation_skills: trigger
    var gg_trg_MonsterType: trigger
    var gg_trg_MonsterTypeArray: trigger
    var gg_trg_Monster_creation_functions: trigger
    var gg_trg_MonsterInterface: trigger
    var gg_trg____trig_Monsters_clickable_set_life: trigger
    var gg_trg_MonsterNoMove: trigger
    var gg_trg_MonsterNoMoveArray: trigger
    var gg_trg_MonsterSimplePatrol: trigger
    var gg_trg_MonsterSimplePatrolArray: trigger
    var gg_trg_MonsterMultiplePatrols: trigger
    var gg_trg_MonsterMultiplePatrolsArray: trigger
    var gg_trg_MonsterTeleport: trigger
    var gg_trg_MonsterTeleportArray: trigger
    var gg_trg_CasterType: trigger
    var gg_trg_CasterTypeArray: trigger
    var gg_trg_Caster_functions: trigger
    var gg_trg_Caster: trigger
    var gg_trg_CasterArray: trigger
    var gg_trg_CasterShot: trigger
    var gg_trg_MonsterOrCaster: trigger
    var gg_trg_MonsterOrCasterStack: trigger
    var gg_trg_ClearMob: trigger
    var gg_trg_ClearMobArray: trigger
    var gg_trg_MonsterSpawn: trigger
    var gg_trg_MonsterSpawnArray: trigger
    var gg_trg_Terrain_type_functions: trigger
    var gg_trg_TerrainType: trigger
    var gg_trg_TerrainTypeWalk: trigger
    var gg_trg_TerrainTypeDeath_functions: trigger
    var gg_trg_TerrainTypeDeath_KillingTimers: trigger
    var gg_trg_TerrainTypeDeath: trigger
    var gg_trg_TerrainTypeSlide: trigger
    var gg_trg_TerrainTypeArray: trigger
    var gg_trg_Time_of_game_trigger: trigger
    var gg_trg_Lives_and_game_time: trigger
    var gg_trg_Meteor: trigger
    var gg_trg_MeteorArray: trigger
    var gg_trg_Meteor_functions: trigger
    var gg_trg_Right_click_on_widget: trigger
    var gg_trg_Meteor_being_used: trigger
    var gg_trg_Stop_using_normal_meteor: trigger
    var gg_trg_Effect_meteor_on_pick_up: trigger
    var gg_trg_Effect_meteor_on_pick_down: trigger
    var gg_trg_VisibilityModifier: trigger
    var gg_trg_VisibilityModifierArray: trigger
    var gg_trg_StartAndEnd: trigger
    var gg_trg_Triggers: trigger
    var gg_trg_Level: trigger
    var gg_trg____Level_functions: trigger
    var gg_trg____Trig_checkpoint_revive_heroes: trigger
    var gg_trg_LevelArray: trigger
    var gg_trg_EscaperEffect_functions: trigger
    var gg_trg_EscaperEffect: trigger
    var gg_trg_EscaperEffectArray: trigger
    var gg_trg_Escaper_functions: trigger
    var gg_trg_Escaper_disco: trigger
    var gg_trg_Escaper: trigger
    var gg_trg_EscaperArray: trigger
    var gg_trg_EscaperSavedCommands: trigger
    var gg_trg_Make: trigger
    var gg_trg_Monster_making_no_move_Actions: trigger
    var gg_trg_MakeMonsterNoMove: trigger
    var gg_trg_Monster_making_simple_patrol_Actions: trigger
    var gg_trg_MakeMonsterSimplePatrol: trigger
    var gg_trg_Monster_making_multiple_patrols_Actions: trigger
    var gg_trg_MakeMonsterMultiplePatrols: trigger
    var gg_trg_Monster_making_teleport_Actions: trigger
    var gg_trg_MakeMonsterTeleport: trigger
    var gg_trg_Monster_spawn_making_Actions: trigger
    var gg_trg_MakeMonsterSpawn: trigger
    var gg_trg_Monster_delete_Actions: trigger
    var gg_trg_MakeDeleteMonsters: trigger
    var gg_trg_Make_set_unit_monster_type_Actions: trigger
    var gg_trg_MakeSetUnitMonsterType: trigger
    var gg_trg_Make_set_unit_teleport_period_Actions: trigger
    var gg_trg_MakeSetUnitTeleportPeriod: trigger
    var gg_trg_Make_get_unit_teleport_period_Actions: trigger
    var gg_trg_MakeGetUnitTeleportPeriod: trigger
    var gg_trg_Meteor_making_Actions: trigger
    var gg_trg_MakeMeteor: trigger
    var gg_trg_Meteor_delete_Actions: trigger
    var gg_trg_MakeDeleteMeteors: trigger
    var gg_trg_Caster_making_Actions: trigger
    var gg_trg_MakeCaster: trigger
    var gg_trg_Caster_delete_Actions: trigger
    var gg_trg_MakeDeleteCasters: trigger
    var gg_trg_ClearMob_making_Actions: trigger
    var gg_trg_MakeClearMob: trigger
    var gg_trg_ClearMob_delete_Actions: trigger
    var gg_trg_MakeDeleteClearMob: trigger
    var gg_trg_Terrain_making_Actions: trigger
    var gg_trg_MakeTerrainCreate: trigger
    var gg_trg_Terrain_copy_paste_Actions: trigger
    var gg_trg_MakeTerrainCopyPaste: trigger
    var gg_trg_Terrain_vertical_symmetry_Actions: trigger
    var gg_trg_MakeTerrainVerticalSymmetry: trigger
    var gg_trg_Terrain_horizontal_symmetry_Actions: trigger
    var gg_trg_MakeTerrainHorizontalSymmetry: trigger
    var gg_trg_Terrain_height_making_Actions: trigger
    var gg_trg_MakeTerrainHeight: trigger
    var gg_trg_Make_exchange_terrains_Actions: trigger
    var gg_trg_MakeExchangeTerrains: trigger
    var gg_trg_Start_making_Actions: trigger
    var gg_trg_MakeStart: trigger
    var gg_trg_End_making_Actions: trigger
    var gg_trg_MakeEnd: trigger
    var gg_trg_VisibilityModifier_making_Actions: trigger
    var gg_trg_MakeVisibilityModifier: trigger
    var gg_trg_Getting_terrain_type_info_Actions: trigger
    var gg_trg_MakeGetTerrainType: trigger
    var gg_trg_MakeAction: trigger
    var gg_trg_MakeMonsterAction: trigger
    var gg_trg_MakeDeleteMonstersAction: trigger
    var gg_trg_MakeMeteorAction: trigger
    var gg_trg_MakeDeleteMeteorsAction: trigger
    var gg_trg_MakeCasterAction: trigger
    var gg_trg_MakeDeleteCastersAction: trigger
    var gg_trg_MakeTerrainCreateAction: trigger
    var gg_trg_MakeTerrainCopyPasteAction: trigger
    var gg_trg_MakeTerrainVerticalSymmetryAction: trigger
    var gg_trg_MakeTerrainHorizontalSymmetryAction: trigger
    var gg_trg_MakeTerrainHeightAction: trigger
    var gg_trg_MakeVisibilityModifierAction: trigger
    var gg_trg_MakeLastActions: trigger
    var gg_trg_Command_functions: trigger
    var gg_trg_Teleport_once_only: trigger
    var gg_trg_Teleport: trigger
    var gg_trg_Autorevive: trigger
    var gg_trg_Command_all: trigger
    var gg_trg_Command_red: trigger
    var gg_trg_Command_cheat: trigger
    var gg_trg_Command_make: trigger
    var gg_trg_Command_max: trigger
    var gg_trg_Command_true_max: trigger
    var gg_trg_Command_execution: trigger
    var gg_trg_Gravity: trigger
    var gg_trg_Slide: trigger
    var gg_trg_To_turn_on_slide: trigger
    var gg_trg_Auto_continue_after_sliding: trigger
    var gg_trg_CheckTerrain: trigger
    var gg_trg_All_terrain_functions: trigger
    var gg_trg_Terrain_type_ascii_conversion: trigger
    var gg_trg_Terrain_type_max: trigger
    var gg_trg_Terrain_type_grass: trigger
    var gg_trg_Terrain_type_names_and_data: trigger
    var gg_trg_Terrain_functions: trigger
    var gg_trg_Terrain_data_search: trigger
    var gg_trg_Terrain_type_from_string: trigger
    var gg_trg_Modify_terrain_functions: trigger
    var gg_trg_Terrain_modifying_trig: trigger
    var gg_trg_Change_one_terrain: trigger
    var gg_trg_Change_all_terrains: trigger
    var gg_trg_Exchange_terrains: trigger
    var gg_trg_Randomize_terrains: trigger
    var gg_trg_Reinit_terrains: trigger
    var gg_trg_Reinit_terrains_position_Change_variations_and_ut_at_beginning: trigger
    var gg_trg_Save_load_terrain_without_name: trigger
    var gg_trg_Save_load_terrain_with_name: trigger
    var gg_trg_struct_StringArrayForCache: trigger
    var gg_trg_Save_terrain_config: trigger
    var gg_trg_Save_terrain: trigger
    var gg_trg_Save_terrain_heights_and_cliffs: trigger
    var gg_trg_Save_terrain_ramps: trigger
    var gg_trg_Save_water: trigger
    var gg_trg_Save_monster_types: trigger
    var gg_trg_Save_caster_types: trigger
    var gg_trg_Save_levels: trigger
    var gg_trg_SAVE_MAP_in_cache: trigger
    var gg_trg_Init_lives: trigger
    var gg_trg_Init_escapers: trigger
    var gg_trg_Init_struct_levels: trigger
    var gg_trg_Forces_ally: trigger
    var gg_trg_Camera: trigger
    var gg_trg_No_selection_circle: trigger
    var gg_trg_Allways_day: trigger
    var gg_trg_Message_heroDies: trigger
    var gg_trg_Start_sound: trigger
    var gg_trg_Heroes: trigger
    var gg_trg_Heroes_for_test: trigger
    var gg_trg_Desactiver_Forme_de_corbeau: trigger
    var gg_trg_coop_init_sounds: trigger
    var gg_trg_creation_dialogue: trigger
    var gg_trg_apparition_dialogue_et_fermeture_automatique: trigger
    var gg_trg_appui_sur_bouton_dialogue: trigger
    var gg_trg_deplacement_heros_hors_death_path: trigger
    var gg_trg_Command_shortcuts_functions: trigger
    var gg_trg_Using_shortcut: trigger
    var gg_trg_Camera_reset: trigger
    var gg_trg_Apm: trigger
    var gg_trg_Afk_mode: trigger
    var gg_trg_Afk_mode_ordre_recu: trigger
    var gg_trg_A_player_leaves: trigger
    var gg_trg_InvisUnit_is_getting_damage: trigger
    var gg_trg_A_hero_dies_check_if_all_dead_and_sounds: trigger
    var gg_trg_Lose_a_life_and_res: trigger
    var gg_trg_Sound_monster_dies: trigger
    var gg_trg_Select_hero: trigger
    var gg_trg_Unselect_hero: trigger
    var gg_trg_Giving_making_rights: trigger
    var gg_trg_Welcome_message: trigger
    var gg_trg_Commands_1: trigger
    var gg_trg_Commands_2: trigger
    var gg_trg_Colors: trigger
    var gg_trg_Effects: trigger
    var gg_trg_Red_commands: trigger
    var gg_trg_Map_description: trigger
    var gg_trg_Contact: trigger
    var gg_trg_Command_shortcuts: trigger
    var gg_trg_Adding_quests: trigger
    var gg_trg_Antisave: trigger
    var gg_trg_Antisave_warning: trigger
    var gg_trg_Init_terrain_types: trigger
    var gg_trg_Init_monster_and_caster_types: trigger
    var gg_trg_Init_levels: trigger
    var MAP_MIN_X: number
    var MAP_MAX_X: number
    var MAP_MIN_Y: number
    var MAP_MAX_Y: number
    const INVIS_UNIT_TYPE_ID: number
    const HERO_TYPE_ID: number
    const HERO_WALK_SPEED: number
    const MAX_MOVE_SPEED: number
    const DEFAULT_MONSTER_SPEED: number
    const HERO_SLIDE_SPEED: number
    const SLIDE_PERIOD: number
    const CHECK_TERRAIN_PERIOD: number
    const LOW_PERIOD_FOR_WORK: number
    const CRITICAL_LIVES_LIMIT: number
    const DEFAULT_CAMERA_FIELD: number
    const LIMIT_NB_HERO_EFFECTS: number
    const PATROL_DISTANCE_MIN: number
    const MAX_NB_MONSTERS_BY_LEVEL: number
    const LARGEUR_CASE: number
    const TERRAIN_DEATH_TIME_TO_KILL: number
    const ENNEMY_PLAYER: player
    const NEUTRAL_PLAYER: player
    const PLAYER_INVIS_UNIT: player
    const GM_TOUCH_DEATH_TERRAIN_EFFECT_STR: string
    const GM_KILLING_EFFECT: string
    const TERRAIN_KILL_EFFECT_BODY_PART: string
    const NB_MAX_OF_TERRAINS: number
    const TERRAIN_DATA_DISPLAY_TIME: number
    const NB_MAX_TERRAIN_DATA_DISPLAY: number
    let NB_MAX_TILES_MODIFIED: number
    const NB_LIVES_AT_BEGINNING: number
    const RED: number
    const BLUE: number
    const TEAL: number
    const PURPLE: number
    const YELLOW: number
    const ORANGE: number
    const GREEN: number
    const PINK: number
    const GREY: number
    const LIGHTBLUE: number
    const DARKGREEN: number
    const BROWN: number
    const MOBS_VARIOUS_COLORS: boolean
    const POWER_CIRCLE: number
    const DUMMY_POWER_CIRCLE: number
    const COOP_REVIVE_DIST: number
    const SON_LAST_HOPE_INTERVALLE_MIN: number
    const CAN_TURN_IN_AIR: boolean
    var udg_colorCode: string[]
    var udg_baseColorString: string[]
    var COLOR_TERRAIN_SLIDE: string
    var COLOR_TERRAIN_WALK: string
    var COLOR_TERRAIN_DEATH: string
    const MONSTER_NEAR_DIFF_MAX: number
    var udg_autoreviveDelay: number
    var udg_lives: number
    var udg_escapers: number
    var udg_levels: number
    var udg_coop_index_son: number
    const COOP_DUREE_SON: number
    var dialChoixModeCoop: dialog
    var btnChoixCoop: button
    var btnChoixSolo: button
    var dialBoutonAppuye: boolean
    const DIAL_TIME_TO_ANSWER: number
    var udg_joueurDialogue: player
    var dialTimerTempLimite: timer
    var udg_coopModeActive: boolean
    var TAILLE_UNITE: number
    var udg_nbKilled: number
    var udg_gameIsLost: boolean
    const Commands1: string
    const Commands1Requirement1: string
    const Commands1Requirement2: string
    const Commands1Requirement3: string
    const Commands2: string
    const Commands2Requirement1: string
    const Commands2Requirement2: string
    const Commands2Requirement3: string
    const Colors: string
    const ColorsRequirement1: string
    const ColorsRequirement2: string
    const ColorsRequirement3: string
    const Effects: string
    const EffectsRequirement1: string
    const EffectsRequirement2: string
    const EffectsRequirement3: string
    const RedCommands: string
    const RedCommandsRequirement1: string
    const RedCommandsRequirement2: string
    const RedCommandsRequirement3: string
    const MapDescription: string
    const MapDescriptionRequirement1: string
    const MapDescriptionRequirement2: string
    const Contact: string
    const ContactRequirement1: string
    const ContactRequirement2: string
    const CommandShortcuts: string
    const CommandShortcutsRequirement1: string
    const CommandShortcutsRequirement2: string
    var udg_terrainTypes: number
    var udg_monsterTypes: number
    var udg_casterTypes: number
    var l__library_init: trigger
    const si__MakeAction: number
    var si__MakeAction_F: number
    var si__MakeAction_I: number
    var si__MakeAction_V: number[]
    var si__MakeAction_type: number[]
    var st__MakeAction_onDestroy: trigger[]
    var s__MakeAction_isActionMadeB: boolean[]
    var s__MakeAction_owner: number[]
    var st__MakeAction_cancel: trigger[]
    var st__MakeAction_redo: trigger[]
    const si__Meteor: number
    var si__Meteor_F: number
    var si__Meteor_I: number
    var si__Meteor_V: number[]
    var s__Meteor_x: number[]
    var s__Meteor_y: number[]
    var s__Meteor_meteor: item[]
    var s__Meteor_level: number[]
    var s__Meteor_arrayId: number[]
    const si__MonsterOrCasterStack: number
    var si__MonsterOrCasterStack_F: number
    var si__MonsterOrCasterStack_I: number
    var si__MonsterOrCasterStack_V: number[]
    var si__MonsterOrCasterStack_2V: number[]
    var si__MonsterOrCasterStack_3V: number[]
    var si__MonsterOrCasterStack_4V: number[]
    var si__MonsterOrCasterStack_5V: number[]
    var si__MonsterOrCasterStack_6V: number[]
    var si__MonsterOrCasterStack_7V: number[]
    var si__MonsterOrCasterStack_8V: number[]
    var si__MonsterOrCasterStack_9V: number[]
    var si__MonsterOrCasterStack_10V: number[]
    var si__MonsterOrCasterStack_11V: number[]
    var si__MonsterOrCasterStack_12V: number[]
    var si__MonsterOrCasterStack_13V: number[]
    var s__MonsterOrCasterStack_2monsterOrCaster: number[]
    var s__MonsterOrCasterStack_3monsterOrCaster: number[]
    var s__MonsterOrCasterStack_4monsterOrCaster: number[]
    var s__MonsterOrCasterStack_5monsterOrCaster: number[]
    var s__MonsterOrCasterStack_6monsterOrCaster: number[]
    var s__MonsterOrCasterStack_7monsterOrCaster: number[]
    var s__MonsterOrCasterStack_8monsterOrCaster: number[]
    var s__MonsterOrCasterStack_9monsterOrCaster: number[]
    var s__MonsterOrCasterStack_10monsterOrCaster: number[]
    var s__MonsterOrCasterStack_11monsterOrCaster: number[]
    var s__MonsterOrCasterStack_12monsterOrCaster: number[]
    var s__MonsterOrCasterStack_13monsterOrCaster: number[]
    var s__MonsterOrCasterStack_monsterOrCaster: number[]
    var s__MonsterOrCasterStack_2nextElement: number[]
    var s__MonsterOrCasterStack_3nextElement: number[]
    var s__MonsterOrCasterStack_4nextElement: number[]
    var s__MonsterOrCasterStack_5nextElement: number[]
    var s__MonsterOrCasterStack_6nextElement: number[]
    var s__MonsterOrCasterStack_7nextElement: number[]
    var s__MonsterOrCasterStack_8nextElement: number[]
    var s__MonsterOrCasterStack_9nextElement: number[]
    var s__MonsterOrCasterStack_10nextElement: number[]
    var s__MonsterOrCasterStack_11nextElement: number[]
    var s__MonsterOrCasterStack_12nextElement: number[]
    var s__MonsterOrCasterStack_13nextElement: number[]
    var s__MonsterOrCasterStack_nextElement: number[]
    const si__Stack: number
    var si__Stack_F: number
    var si__Stack_I: number
    var si__Stack_V: number[]
    const s__Stack_EMPTY: number
    var s__Stack_size: number[]
    var s__Stack_top: number[]
    var s__Stack_free: number
    var s__Stack_next: number[]
    var s__Stack_value: number[]
    const si__StringSegments: number
    var si__StringSegments_F: number
    var si__StringSegments_I: number
    var si__StringSegments_V: number[]
    var s__StringSegments_s: string[]
    var s__StringSegments_sLen: number[]
    var s__StringSegments_delim: string[]
    var s__StringSegments_dLen: number[]
    var s__StringSegments_pos: number[]
    var s__StringSegments_count: number[]
    const si__Trigger: number
    var si__Trigger_F: number
    var si__Trigger_I: number
    var si__Trigger_V: number[]
    var s__Trigger_t: trigger[]
    const si__TriggerArray: number
    var si__TriggerArray_F: number
    var si__TriggerArray_I: number
    var si__TriggerArray_V: number[]
    var s___TriggerArray_triggers: number[]
    const s___TriggerArray_triggers_size: number
    var s__TriggerArray_triggers: number[]
    var s__TriggerArray_lastInstance: number[]
    const si__VisibilityModifier: number
    var si__VisibilityModifier_F: number
    var si__VisibilityModifier_I: number
    var si__VisibilityModifier_V: number[]
    var s__VisibilityModifier_x1: number[]
    var s__VisibilityModifier_y1: number[]
    var s__VisibilityModifier_x2: number[]
    var s__VisibilityModifier_y2: number[]
    var s__VisibilityModifier_fm: fogmodifier[]
    var s__VisibilityModifier_level: number[]
    var s__VisibilityModifier_arrayId: number[]
    const si__CasterType: number
    var si__CasterType_F: number
    var si__CasterType_I: number
    var si__CasterType_V: number[]
    var s__CasterType_label: string[]
    var s__CasterType_theAlias: string[]
    var s__CasterType_casterMonsterType: number[]
    var s__CasterType_projectileMonsterType: number[]
    var s__CasterType_range: number[]
    var s__CasterType_projectileSpeed: number[]
    var s__CasterType_loadTime: number[]
    var s__CasterType_animation: string[]
    const si__MakeCasterAction: number
    var s__MakeCasterAction_caster: number[]
    var s__MakeCasterAction_level: number[]
    const si__MakeDeleteCastersAction: number
    var s__MakeDeleteCastersAction_suppressions: hashtable
    var s__MakeDeleteCastersAction_suppressionLastId: number
    var s__MakeDeleteCastersAction_suppressionId: number[]
    var s__MakeDeleteCastersAction_level: number[]
    const si__MakeDeleteMeteorsAction: number
    var s__MakeDeleteMeteorsAction_suppressions: hashtable
    var s__MakeDeleteMeteorsAction_suppressionLastId: number
    var s__MakeDeleteMeteorsAction_suppressionId: number[]
    var s__MakeDeleteMeteorsAction_level: number[]
    const si__MakeDeleteMonstersAction: number
    var s__MakeDeleteMonstersAction_suppressions: hashtable
    var s__MakeDeleteMonstersAction_suppressionLastId: number
    var s__MakeDeleteMonstersAction_suppressionId: number[]
    var s__MakeDeleteMonstersAction_level: number[]
    const si__MakeLastActions: number
    var si__MakeLastActions_F: number
    var si__MakeLastActions_I: number
    var si__MakeLastActions_V: number[]
    var s___MakeLastActions_lastActions: number[]
    const s___MakeLastActions_lastActions_size: number
    var s__MakeLastActions_lastActions: number[]
    var s__MakeLastActions_lastActionId: number[]
    var s__MakeLastActions_lastActionEffective: number[]
    var s__MakeLastActions_owner: number[]
    const si__MakeMeteorAction: number
    var s__MakeMeteorAction_meteor: number[]
    var s__MakeMeteorAction_level: number[]
    const si__MakeMonsterAction: number
    var s__MakeMonsterAction_monster: number[]
    var s__MakeMonsterAction_level: number[]
    const si__MakeTerrainHeightAction: number
    var s__MakeTerrainHeightAction_radius: number[]
    var s__MakeTerrainHeightAction_height: number[]
    var s__MakeTerrainHeightAction_x: number[]
    var s__MakeTerrainHeightAction_y: number[]
    var s__MakeTerrainHeightAction_terrainDeform: terraindeformation[]
    const si__MakeVisibilityModifierAction: number
    var s__MakeVisibilityModifierAction_level: number[]
    var s__MakeVisibilityModifierAction_visibilityModifierSave: number[]
    var s__MakeVisibilityModifierAction_visibilityModifierPointeur: number[]
    const si__MeteorArray: number
    var si__MeteorArray_F: number
    var si__MeteorArray_I: number
    var si__MeteorArray_V: number[]
    var s___MeteorArray_meteors: number[]
    const s___MeteorArray_meteors_size: number
    var s__MeteorArray_meteors: number[]
    var s__MeteorArray_lastInstance: number[]
    const si__MonsterType: number
    var si__MonsterType_F: number
    var si__MonsterType_I: number
    var si__MonsterType_V: number[]
    var s__MonsterType_label: string[]
    var s__MonsterType_theAlias: string[]
    var s__MonsterType_unitTypeId: number[]
    var s__MonsterType_scale: number[]
    var s__MonsterType_immolationSkill: number[]
    var s__MonsterType_speed: number[]
    var s__MonsterType_isClickableB: boolean[]
    var s__MonsterType_killingEffectStr: string[]
    var s__MonsterType_maxLife: number[]
    var s__MonsterType_height: number[]
    const si__SoundUtils__soundhelper: number
    var si__SoundUtils__soundhelper_F: number
    var si__SoundUtils__soundhelper_I: number
    var si__SoundUtils__soundhelper_V: number[]
    var s__SoundUtils__soundhelper_sta: number[]
    var s__SoundUtils__soundhelper_fileName: string[]
    var s__SoundUtils__soundhelper_duration: number[]
    var s__SoundUtils__soundhelper_looping: boolean[]
    var s__SoundUtils__soundhelper_is3D: boolean[]
    var s__SoundUtils__soundhelper_stopwhenoutofrange: boolean[]
    var s__SoundUtils__soundhelper_fadeInRate: number[]
    var s__SoundUtils__soundhelper_fadeOutRate: number[]
    var s__SoundUtils__soundhelper_eaxSetting: string[]
    const si__SoundUtils__soundrecycler: number
    var si__SoundUtils__soundrecycler_F: number
    var si__SoundUtils__soundrecycler_I: number
    var si__SoundUtils__soundrecycler_V: number[]
    var s__SoundUtils__soundrecycler_t: timer[]
    var s__SoundUtils__soundrecycler_s: sound[]
    var s__SoundUtils__soundrecycler_sh: number[]
    var s__SoundUtils__soundrecycler_stopped: boolean[]
    const si__StringArrayForCache: number
    var si__StringArrayForCache_F: number
    var si__StringArrayForCache_I: number
    var si__StringArrayForCache_V: number[]
    var s___StringArrayForCache_stringArray: string[]
    const s___StringArrayForCache_stringArray_size: number
    var s__StringArrayForCache_stringArray: number[]
    var s__StringArrayForCache_lastStringId: number[]
    var s__StringArrayForCache_category: string[]
    var s__StringArrayForCache_variableName: string[]
    var s__StringArrayForCache_avecSeparateur: boolean[]
    const si__VisibilityModifierArray: number
    var si__VisibilityModifierArray_F: number
    var si__VisibilityModifierArray_I: number
    var si__VisibilityModifierArray_V: number[]
    var s___VisibilityModifierArray_vms: number[]
    const s___VisibilityModifierArray_vms_size: number
    var s__VisibilityModifierArray_vms: number[]
    var s__VisibilityModifierArray_lastInstance: number[]
    const si__CasterTypeArray: number
    var si__CasterTypeArray_F: number
    var si__CasterTypeArray_I: number
    var si__CasterTypeArray_V: number[]
    var s___CasterTypeArray_casterTypes: number[]
    const s___CasterTypeArray_casterTypes_size: number
    var s__CasterTypeArray_casterTypes: number[]
    var s__CasterTypeArray_numberOfCasterTypes: number[]
    const si__Lives: number
    var si__Lives_F: number
    var si__Lives_I: number
    var si__Lives_V: number[]
    var s__Lives_nb: number[]
    var s__Lives_lb: leaderboard[]
    const si__MonsterTypeArray: number
    var si__MonsterTypeArray_F: number
    var si__MonsterTypeArray_I: number
    var si__MonsterTypeArray_V: number[]
    var s___MonsterTypeArray_monsterTypes: number[]
    const s___MonsterTypeArray_monsterTypes_size: number
    var s__MonsterTypeArray_monsterTypes: number[]
    var s__MonsterTypeArray_numberOfMonsterTypes: number[]
    const si__TerrainType: number
    var si__TerrainType_F: number
    var si__TerrainType_I: number
    var si__TerrainType_V: number[]
    var s__TerrainType_label: string[]
    var s__TerrainType_theAlias: string[]
    var s__TerrainType_kind: string[]
    var s__TerrainType_terrainTypeId: number[]
    var s__TerrainType_orderId: number[]
    var s__TerrainType_cliffClassId: number[]
    const si__CasterShot: number
    var si__CasterShot_F: number
    var si__CasterShot_I: number
    var si__CasterShot_V: number[]
    var s__CasterShot_x: number[]
    var s__CasterShot_y: number[]
    var s__CasterShot_diffX: number[]
    var s__CasterShot_diffY: number[]
    var s__CasterShot_nbTeleportationsRestantes: number[]
    var s__CasterShot_unite: unit[]
    var s__CasterShot_trig: trigger[]
    const si__EscaperEffect: number
    var si__EscaperEffect_F: number
    var si__EscaperEffect_I: number
    var si__EscaperEffect_V: number[]
    var s__EscaperEffect_ef: effect[]
    var s__EscaperEffect_efStr: string[]
    var s__EscaperEffect_bodyPart: string[]
    const si__MakeTerrainCopyPasteAction: number
    var s__MakeTerrainCopyPasteAction_terrainSavesBefore: hashtable
    var s__MakeTerrainCopyPasteAction_terrainSavesAfter: hashtable
    var s__MakeTerrainCopyPasteAction_terrainSaveLastId: number
    var s__MakeTerrainCopyPasteAction_terrainSaveId: number[]
    var s__MakeTerrainCopyPasteAction_minX: number[]
    var s__MakeTerrainCopyPasteAction_minY: number[]
    var s__MakeTerrainCopyPasteAction_maxX: number[]
    var s__MakeTerrainCopyPasteAction_maxY: number[]
    const si__MakeTerrainCreateAction: number
    var s__MakeTerrainCreateAction_terrainSaves: hashtable
    var s__MakeTerrainCreateAction_terrainSaveLastId: number
    var s__MakeTerrainCreateAction_terrainSaveId: number[]
    var s__MakeTerrainCreateAction_terrainTypeNew: number[]
    var s__MakeTerrainCreateAction_minX: number[]
    var s__MakeTerrainCreateAction_minY: number[]
    var s__MakeTerrainCreateAction_maxX: number[]
    var s__MakeTerrainCreateAction_maxY: number[]
    const si__MakeTerrainHorizontalSymmetryAction: number
    var s__MakeTerrainHorizontalSymmetryAction_minX: number[]
    var s__MakeTerrainHorizontalSymmetryAction_minY: number[]
    var s__MakeTerrainHorizontalSymmetryAction_maxX: number[]
    var s__MakeTerrainHorizontalSymmetryAction_maxY: number[]
    const si__MakeTerrainVerticalSymmetryAction: number
    var s__MakeTerrainVerticalSymmetryAction_minX: number[]
    var s__MakeTerrainVerticalSymmetryAction_minY: number[]
    var s__MakeTerrainVerticalSymmetryAction_maxX: number[]
    var s__MakeTerrainVerticalSymmetryAction_maxY: number[]
    const si__MonsterSpawn: number
    var si__MonsterSpawn_F: number
    var si__MonsterSpawn_I: number
    var si__MonsterSpawn_V: number[]
    var s__MonsterSpawn_label: string[]
    var s__MonsterSpawn_mt: number[]
    var s__MonsterSpawn_sens: string[]
    var s__MonsterSpawn_frequence: number[]
    var s__MonsterSpawn_minX: number[]
    var s__MonsterSpawn_minY: number[]
    var s__MonsterSpawn_maxX: number[]
    var s__MonsterSpawn_maxY: number[]
    var s__MonsterSpawn_tSpawn: trigger[]
    var s__MonsterSpawn_tUnspawn: trigger[]
    var s__MonsterSpawn_unspawnReg: region[]
    var s__MonsterSpawn_monsters: group[]
    var s__MonsterSpawn_level: number[]
    var s__MonsterSpawn_arrayId: number[]
    const si__TerrainTypeSlide: number
    var s__TerrainTypeSlide_slideSpeed: number[]
    var s__TerrainTypeSlide_canTurn: boolean[]
    const si__TerrainTypeWalk: number
    var s__TerrainTypeWalk_walkSpeed: number[]
    const si__EscaperEffectArray: number
    var si__EscaperEffectArray_F: number
    var si__EscaperEffectArray_I: number
    var si__EscaperEffectArray_V: number[]
    var s___EscaperEffectArray_efs: number[]
    const s___EscaperEffectArray_efs_size: number
    var s__EscaperEffectArray_efs: number[]
    var s__EscaperEffectArray_lastInstance: number[]
    const si__MonsterSpawnArray: number
    var si__MonsterSpawnArray_F: number
    var si__MonsterSpawnArray_I: number
    var si__MonsterSpawnArray_V: number[]
    var s___MonsterSpawnArray_monsterSpawns: number[]
    const s___MonsterSpawnArray_monsterSpawns_size: number
    var s__MonsterSpawnArray_monsterSpawns: number[]
    var s__MonsterSpawnArray_lastInstance: number[]
    const si__KillingTimers: number
    var si__KillingTimers_F: number
    var si__KillingTimers_I: number
    var si__KillingTimers_V: number[]
    var s___KillingTimers_timers: timer[]
    const s___KillingTimers_timers_size: number
    var s__KillingTimers_timers: number[]
    const si__Escaper: number
    var si__Escaper_F: number
    var si__Escaper_I: number
    var si__Escaper_V: number[]
    var s__Escaper_p: player[]
    var s__Escaper_hero: unit[]
    var s__Escaper_invisUnit: unit[]
    var s__Escaper_walkSpeed: number[]
    var s__Escaper_slideSpeed: number[]
    var s__Escaper_baseColorId: number[]
    var s__Escaper_cameraField: number[]
    var s__Escaper_lastTerrainType: number[]
    var s__Escaper_controler: number[]
    var s__Escaper_slide: trigger[]
    var s__Escaper_checkTerrain: trigger[]
    var s__Escaper_vcRed: number[]
    var s__Escaper_vcGreen: number[]
    var s__Escaper_vcBlue: number[]
    var s__Escaper_vcTransparency: number[]
    var s__Escaper_discoTrigger: trigger[]
    var s__Escaper_effects: number[]
    var s__Escaper_terrainKillEffect: effect[]
    var s__Escaper_meteorEffect: effect[]
    var s__Escaper_godMode: boolean[]
    var s__Escaper_godModeKills: boolean[]
    var s__Escaper_walkSpeedAbsolute: boolean[]
    var s__Escaper_slideSpeedAbsolute: boolean[]
    var s__Escaper_canTeleportB: boolean[]
    var s__Escaper_hasAutoreviveB: boolean[]
    var s__Escaper_canCheatB: boolean[]
    var s__Escaper_isMaximaxouB: boolean[]
    var s__Escaper_isTrueMaximaxouB: boolean[]
    var s__Escaper_make: number[]
    var s__Escaper_makeLastActions: number[]
    var s__Escaper_makingLevel: number[]
    var s__Escaper_currentLevelTouchTerrainDeath: number[]
    var s__Escaper_itemInInventory: item[]
    var s__Escaper_lastZ: number[]
    var s__Escaper_oldDiffZ: number[]
    var s__Escaper_speedZ: number[]
    var s__Escaper_slideLastAngleOrder: number[]
    var s__Escaper_isHeroSelectedB: boolean[]
    var s__Escaper_powerCircle: unit[]
    var s__Escaper_dummyPowerCircle: unit[]
    var s__Escaper_coopInvul: boolean[]
    const si__TerrainTypeDeath: number
    var s__TerrainTypeDeath_killingEffectStr: string[]
    var s__TerrainTypeDeath_timeToKill: number[]
    var s__TerrainTypeDeath_killingTimers: number[]
    var s__TerrainTypeDeath_toleranceDist: number[]
    const si__EscaperArray: number
    var si__EscaperArray_F: number
    var si__EscaperArray_I: number
    var si__EscaperArray_V: number[]
    var s___EscaperArray_escapers: number[]
    const s___EscaperArray_escapers_size: number
    var s__EscaperArray_escapers: number[]
    const si__RectInterface: number
    var si__RectInterface_F: number
    var si__RectInterface_I: number
    var si__RectInterface_V: number[]
    var si__RectInterface_type: number[]
    var st__RectInterface_onDestroy: trigger[]
    var s__RectInterface_minX: number[]
    var s__RectInterface_minY: number[]
    var s__RectInterface_maxX: number[]
    var s__RectInterface_maxY: number[]
    var s__RectInterface_r: rect[]
    var st__RectInterface_toString: trigger[]
    const si__Start: number
    const si__End: number
    var s__End_endReaching: trigger[]
    const si__Level: number
    var si__Level_F: number
    var si__Level_I: number
    var si__Level_V: number[]
    var s__Level_isActivatedB: boolean[]
    var s__Level_startMessage: string[]
    var s__Level_livesEarnedAtBeginning: number[]
    var s__Level_start: number[]
    var s__Level_end: number[]
    var s__Level_visibilities: number[]
    var s__Level_monstersNoMove: number[]
    var s__Level_monstersSimplePatrol: number[]
    var s__Level_monstersMultiplePatrols: number[]
    var s__Level_monstersTeleport: number[]
    var s__Level_monsterSpawns: number[]
    var s__Level_meteors: number[]
    var s__Level_casters: number[]
    var s__Level_clearMobs: number[]
    var s__Level_triggers: number[]
    const si__Make: number
    var si__Make_F: number
    var si__Make_I: number
    var si__Make_V: number[]
    var si__Make_type: number[]
    var st__Make_onDestroy: trigger[]
    var s__Make_makerOwner: player[]
    var s__Make_kind: string[]
    var s__Make_t: trigger[]
    var s__Make_maker: unit[]
    var st__Make_cancelLastAction: trigger[]
    var st__Make_redoLastAction: trigger[]
    const si__Monster: number
    var si__Monster_F: number
    var si__Monster_I: number
    var si__Monster_V: number[]
    var si__Monster_2V: number[]
    var si__Monster_3V: number[]
    var si__Monster_4V: number[]
    var si__Monster_5V: number[]
    var si__Monster_6V: number[]
    var si__Monster_7V: number[]
    var si__Monster_8V: number[]
    var si__Monster_9V: number[]
    var si__Monster_10V: number[]
    var si__Monster_11V: number[]
    var si__Monster_12V: number[]
    var si__Monster_13V: number[]
    var si__Monster_type: number[]
    var si__Monster_2type: number[]
    var si__Monster_3type: number[]
    var si__Monster_4type: number[]
    var si__Monster_5type: number[]
    var si__Monster_6type: number[]
    var si__Monster_7type: number[]
    var si__Monster_8type: number[]
    var si__Monster_9type: number[]
    var si__Monster_10type: number[]
    var si__Monster_11type: number[]
    var si__Monster_12type: number[]
    var si__Monster_13type: number[]
    var st__Monster_onDestroy: trigger[]
    var s__Monster_nbInstances: number
    var s__Monster_2id: number[]
    var s__Monster_3id: number[]
    var s__Monster_4id: number[]
    var s__Monster_5id: number[]
    var s__Monster_6id: number[]
    var s__Monster_7id: number[]
    var s__Monster_8id: number[]
    var s__Monster_9id: number[]
    var s__Monster_10id: number[]
    var s__Monster_11id: number[]
    var s__Monster_12id: number[]
    var s__Monster_13id: number[]
    var s__Monster_id: number[]
    var s__Monster_2u: unit[]
    var s__Monster_3u: unit[]
    var s__Monster_4u: unit[]
    var s__Monster_5u: unit[]
    var s__Monster_6u: unit[]
    var s__Monster_7u: unit[]
    var s__Monster_8u: unit[]
    var s__Monster_9u: unit[]
    var s__Monster_10u: unit[]
    var s__Monster_11u: unit[]
    var s__Monster_12u: unit[]
    var s__Monster_13u: unit[]
    var s__Monster_u: unit[]
    var s__Monster_2mt: number[]
    var s__Monster_3mt: number[]
    var s__Monster_4mt: number[]
    var s__Monster_5mt: number[]
    var s__Monster_6mt: number[]
    var s__Monster_7mt: number[]
    var s__Monster_8mt: number[]
    var s__Monster_9mt: number[]
    var s__Monster_10mt: number[]
    var s__Monster_11mt: number[]
    var s__Monster_12mt: number[]
    var s__Monster_13mt: number[]
    var s__Monster_mt: number[]
    var s__Monster_2level: number[]
    var s__Monster_3level: number[]
    var s__Monster_4level: number[]
    var s__Monster_5level: number[]
    var s__Monster_6level: number[]
    var s__Monster_7level: number[]
    var s__Monster_8level: number[]
    var s__Monster_9level: number[]
    var s__Monster_10level: number[]
    var s__Monster_11level: number[]
    var s__Monster_12level: number[]
    var s__Monster_13level: number[]
    var s__Monster_level: number[]
    var s__Monster_2arrayId: number[]
    var s__Monster_3arrayId: number[]
    var s__Monster_4arrayId: number[]
    var s__Monster_5arrayId: number[]
    var s__Monster_6arrayId: number[]
    var s__Monster_7arrayId: number[]
    var s__Monster_8arrayId: number[]
    var s__Monster_9arrayId: number[]
    var s__Monster_10arrayId: number[]
    var s__Monster_11arrayId: number[]
    var s__Monster_12arrayId: number[]
    var s__Monster_13arrayId: number[]
    var s__Monster_arrayId: number[]
    var s__Monster_2life: number[]
    var s__Monster_3life: number[]
    var s__Monster_4life: number[]
    var s__Monster_5life: number[]
    var s__Monster_6life: number[]
    var s__Monster_7life: number[]
    var s__Monster_8life: number[]
    var s__Monster_9life: number[]
    var s__Monster_10life: number[]
    var s__Monster_11life: number[]
    var s__Monster_12life: number[]
    var s__Monster_13life: number[]
    var s__Monster_life: number[]
    var s__Monster_2disablingTimer: timer[]
    var s__Monster_3disablingTimer: timer[]
    var s__Monster_4disablingTimer: timer[]
    var s__Monster_5disablingTimer: timer[]
    var s__Monster_6disablingTimer: timer[]
    var s__Monster_7disablingTimer: timer[]
    var s__Monster_8disablingTimer: timer[]
    var s__Monster_9disablingTimer: timer[]
    var s__Monster_10disablingTimer: timer[]
    var s__Monster_11disablingTimer: timer[]
    var s__Monster_12disablingTimer: timer[]
    var s__Monster_13disablingTimer: timer[]
    var s__Monster_disablingTimer: timer[]
    var s__Monster_2baseColorId: number[]
    var s__Monster_3baseColorId: number[]
    var s__Monster_4baseColorId: number[]
    var s__Monster_5baseColorId: number[]
    var s__Monster_6baseColorId: number[]
    var s__Monster_7baseColorId: number[]
    var s__Monster_8baseColorId: number[]
    var s__Monster_9baseColorId: number[]
    var s__Monster_10baseColorId: number[]
    var s__Monster_11baseColorId: number[]
    var s__Monster_12baseColorId: number[]
    var s__Monster_13baseColorId: number[]
    var s__Monster_baseColorId: number[]
    var s__Monster_2vcRed: number[]
    var s__Monster_3vcRed: number[]
    var s__Monster_4vcRed: number[]
    var s__Monster_5vcRed: number[]
    var s__Monster_6vcRed: number[]
    var s__Monster_7vcRed: number[]
    var s__Monster_8vcRed: number[]
    var s__Monster_9vcRed: number[]
    var s__Monster_10vcRed: number[]
    var s__Monster_11vcRed: number[]
    var s__Monster_12vcRed: number[]
    var s__Monster_13vcRed: number[]
    var s__Monster_vcRed: number[]
    var s__Monster_2vcGreen: number[]
    var s__Monster_3vcGreen: number[]
    var s__Monster_4vcGreen: number[]
    var s__Monster_5vcGreen: number[]
    var s__Monster_6vcGreen: number[]
    var s__Monster_7vcGreen: number[]
    var s__Monster_8vcGreen: number[]
    var s__Monster_9vcGreen: number[]
    var s__Monster_10vcGreen: number[]
    var s__Monster_11vcGreen: number[]
    var s__Monster_12vcGreen: number[]
    var s__Monster_13vcGreen: number[]
    var s__Monster_vcGreen: number[]
    var s__Monster_2vcBlue: number[]
    var s__Monster_3vcBlue: number[]
    var s__Monster_4vcBlue: number[]
    var s__Monster_5vcBlue: number[]
    var s__Monster_6vcBlue: number[]
    var s__Monster_7vcBlue: number[]
    var s__Monster_8vcBlue: number[]
    var s__Monster_9vcBlue: number[]
    var s__Monster_10vcBlue: number[]
    var s__Monster_11vcBlue: number[]
    var s__Monster_12vcBlue: number[]
    var s__Monster_13vcBlue: number[]
    var s__Monster_vcBlue: number[]
    var s__Monster_2vcTransparency: number[]
    var s__Monster_3vcTransparency: number[]
    var s__Monster_4vcTransparency: number[]
    var s__Monster_5vcTransparency: number[]
    var s__Monster_6vcTransparency: number[]
    var s__Monster_7vcTransparency: number[]
    var s__Monster_8vcTransparency: number[]
    var s__Monster_9vcTransparency: number[]
    var s__Monster_10vcTransparency: number[]
    var s__Monster_11vcTransparency: number[]
    var s__Monster_12vcTransparency: number[]
    var s__Monster_13vcTransparency: number[]
    var s__Monster_vcTransparency: number[]
    var st__Monster_getId: trigger[]
    var st__Monster_createUnit: trigger[]
    var st__Monster_removeUnit: trigger[]
    var st__Monster_killUnit: trigger[]
    var st__Monster_getMonsterType: trigger[]
    var st__Monster_setMonsterType: trigger[]
    var st__Monster_toString: trigger[]
    var st__Monster_getLife: trigger[]
    var st__Monster_setLife: trigger[]
    var st__Monster_temporarilyDisable: trigger[]
    var st__Monster_temporarilyEnable: trigger[]
    var st__Monster_setBaseColor: trigger[]
    var st__Monster_setVertexColor: trigger[]
    var st__Monster_reinitColor: trigger[]
    const si__TerrainTypeArray: number
    var si__TerrainTypeArray_F: number
    var si__TerrainTypeArray_I: number
    var si__TerrainTypeArray_V: number[]
    var s___TerrainTypeArray_ttWalk: number[]
    const s___TerrainTypeArray_ttWalk_size: number
    var s__TerrainTypeArray_ttWalk: number[]
    var s___TerrainTypeArray_ttDeath: number[]
    const s___TerrainTypeArray_ttDeath_size: number
    var s__TerrainTypeArray_ttDeath: number[]
    var s___TerrainTypeArray_ttSlide: number[]
    const s___TerrainTypeArray_ttSlide_size: number
    var s__TerrainTypeArray_ttSlide: number[]
    var s__TerrainTypeArray_numberOfWalk: number[]
    var s__TerrainTypeArray_numberOfDeath: number[]
    var s__TerrainTypeArray_numberOfSlide: number[]
    var s__TerrainTypeArray_mainTileset: string[]
    const si__ClearMob: number
    var si__ClearMob_F: number
    var si__ClearMob_I: number
    var si__ClearMob_V: number[]
    var s__ClearMob_level: number[]
    var s__ClearMob_arrayId: number[]
    var s__ClearMob_triggerMob: number[]
    var s__ClearMob_blockMobs: number[]
    var s__ClearMob_disableDuration: number[]
    var s__ClearMob_timerActivated: timer[]
    var s__ClearMob_timerFrontMontant: timer[]
    var s__ClearMob_enabled: boolean[]
    var s__ClearMob_triggerMobPermanentEffect: effect[]
    const si__LevelArray: number
    var si__LevelArray_F: number
    var si__LevelArray_I: number
    var si__LevelArray_V: number[]
    var s___LevelArray_levels: number[]
    const s___LevelArray_levels_size: number
    var s__LevelArray_levels: number[]
    var s__LevelArray_currentLevel: number[]
    var s__LevelArray_lastInstance: number[]
    const si__MakeCaster: number
    var s__MakeCaster_casterType: number[]
    var s__MakeCaster_angle: number[]
    const si__MakeDeleteCasters: number
    var s__MakeDeleteCasters_lastX: number[]
    var s__MakeDeleteCasters_lastY: number[]
    var s__MakeDeleteCasters_lastLocIsSaved: boolean[]
    var s__MakeDeleteCasters_lastLocSavedIsUsed: boolean[]
    var s__MakeDeleteCasters_unitLastClic: unit[]
    var s__MakeDeleteCasters_mode: string[]
    const si__MakeDeleteMeteors: number
    var s__MakeDeleteMeteors_lastX: number[]
    var s__MakeDeleteMeteors_lastY: number[]
    var s__MakeDeleteMeteors_lastLocIsSaved: boolean[]
    var s__MakeDeleteMeteors_lastLocSavedIsUsed: boolean[]
    var s__MakeDeleteMeteors_unitLastClic: unit[]
    var s__MakeDeleteMeteors_mode: string[]
    const si__MakeDeleteMonsters: number
    var s__MakeDeleteMonsters_lastX: number[]
    var s__MakeDeleteMonsters_lastY: number[]
    var s__MakeDeleteMonsters_lastLocIsSaved: boolean[]
    var s__MakeDeleteMonsters_lastLocSavedIsUsed: boolean[]
    var s__MakeDeleteMonsters_unitLastClic: unit[]
    var s__MakeDeleteMonsters_mode: string[]
    const si__MakeEnd: number
    var s__MakeEnd_lastX: number[]
    var s__MakeEnd_lastY: number[]
    var s__MakeEnd_unitLastClic: unit[]
    var s__MakeEnd_lastLocIsSaved: boolean[]
    var s__MakeEnd_lastLocSavedIsUsed: boolean[]
    const si__MakeExchangeTerrains: number
    var s__MakeExchangeTerrains_lastX: number[]
    var s__MakeExchangeTerrains_lastY: number[]
    var s__MakeExchangeTerrains_lastLocIsSaved: boolean[]
    var s__MakeExchangeTerrains_lastLocSavedIsUsed: boolean[]
    var s__MakeExchangeTerrains_unitLastClic: unit[]
    const si__MakeGetTerrainType: number
    const si__MakeGetUnitTeleportPeriod: number
    const si__MakeMeteor: number
    const si__MakeMonsterMultiplePatrols: number
    var s__MakeMonsterMultiplePatrols_mt: number[]
    var s__MakeMonsterMultiplePatrols_mode: string[]
    var s___MakeMonsterMultiplePatrols_lastX: number[]
    const s___MakeMonsterMultiplePatrols_lastX_size: number
    var s__MakeMonsterMultiplePatrols_lastX: number[]
    var si__MakeMonsterMultiplePatrols_arrI: number
    var si__MakeMonsterMultiplePatrols_arrN: number
    var si__MakeMonsterMultiplePatrols_arr: number[]
    var si__MakeMonsterMultiplePatrols_arrV: number[]
    var s___MakeMonsterMultiplePatrols_lastY: number[]
    const s___MakeMonsterMultiplePatrols_lastY_size: number
    var s__MakeMonsterMultiplePatrols_lastY: number[]
    var s__MakeMonsterMultiplePatrols_lastLocId: number[]
    var s__MakeMonsterMultiplePatrols_locPointeur: number[]
    var s__MakeMonsterMultiplePatrols_unitLastClic: unit[]
    var s__MakeMonsterMultiplePatrols_monster: number[]
    const si__MakeMonsterNoMove: number
    var s__MakeMonsterNoMove_mt: number[]
    var s__MakeMonsterNoMove_facingAngle: number[]
    const si__MakeMonsterSimplePatrol: number
    var s__MakeMonsterSimplePatrol_mode: string[]
    var s__MakeMonsterSimplePatrol_mt: number[]
    var s__MakeMonsterSimplePatrol_lastX: number[]
    var s__MakeMonsterSimplePatrol_lastY: number[]
    var s__MakeMonsterSimplePatrol_lastLocIsSaved: boolean[]
    var s__MakeMonsterSimplePatrol_lastLocSavedIsUsed: boolean[]
    var s__MakeMonsterSimplePatrol_unitLastClic: unit[]
    const si__MakeMonsterSpawn: number
    var s__MakeMonsterSpawn_lastX: number[]
    var s__MakeMonsterSpawn_lastY: number[]
    var s__MakeMonsterSpawn_unitLastClic: unit[]
    var s__MakeMonsterSpawn_lastLocIsSaved: boolean[]
    var s__MakeMonsterSpawn_lastLocSavedIsUsed: boolean[]
    var s__MakeMonsterSpawn_label: string[]
    var s__MakeMonsterSpawn_mt: number[]
    var s__MakeMonsterSpawn_sens: string[]
    var s__MakeMonsterSpawn_frequence: number[]
    const si__MakeMonsterTeleport: number
    var s__MakeMonsterTeleport_mt: number[]
    var s__MakeMonsterTeleport_period: number[]
    var s__MakeMonsterTeleport_angle: number[]
    var s__MakeMonsterTeleport_mode: string[]
    var s___MakeMonsterTeleport_lastX: number[]
    const s___MakeMonsterTeleport_lastX_size: number
    var s__MakeMonsterTeleport_lastX: number[]
    var si__MakeMonsterTeleport_arrI: number
    var si__MakeMonsterTeleport_arrN: number
    var si__MakeMonsterTeleport_arr: number[]
    var si__MakeMonsterTeleport_arrV: number[]
    var s___MakeMonsterTeleport_lastY: number[]
    const s___MakeMonsterTeleport_lastY_size: number
    var s__MakeMonsterTeleport_lastY: number[]
    var s__MakeMonsterTeleport_lastLocId: number[]
    var s__MakeMonsterTeleport_locPointeur: number[]
    var s__MakeMonsterTeleport_unitLastClic: unit[]
    var s__MakeMonsterTeleport_monster: number[]
    const si__MakeSetUnitMonsterType: number
    var s__MakeSetUnitMonsterType_lastX: number[]
    var s__MakeSetUnitMonsterType_lastY: number[]
    var s__MakeSetUnitMonsterType_lastLocIsSaved: boolean[]
    var s__MakeSetUnitMonsterType_lastLocSavedIsUsed: boolean[]
    var s__MakeSetUnitMonsterType_unitLastClic: unit[]
    var s__MakeSetUnitMonsterType_mode: string[]
    var s__MakeSetUnitMonsterType_mt: number[]
    const si__MakeSetUnitTeleportPeriod: number
    var s__MakeSetUnitTeleportPeriod_lastX: number[]
    var s__MakeSetUnitTeleportPeriod_lastY: number[]
    var s__MakeSetUnitTeleportPeriod_lastLocIsSaved: boolean[]
    var s__MakeSetUnitTeleportPeriod_lastLocSavedIsUsed: boolean[]
    var s__MakeSetUnitTeleportPeriod_unitLastClic: unit[]
    var s__MakeSetUnitTeleportPeriod_mode: string[]
    var s__MakeSetUnitTeleportPeriod_period: number[]
    const si__MakeStart: number
    var s__MakeStart_lastX: number[]
    var s__MakeStart_lastY: number[]
    var s__MakeStart_unitLastClic: unit[]
    var s__MakeStart_lastLocIsSaved: boolean[]
    var s__MakeStart_lastLocSavedIsUsed: boolean[]
    var s__MakeStart_forNextB: boolean[]
    const si__MakeTerrainCopyPaste: number
    var s__MakeTerrainCopyPaste_x1: number[]
    var s__MakeTerrainCopyPaste_y1: number[]
    var s__MakeTerrainCopyPaste_x2: number[]
    var s__MakeTerrainCopyPaste_y2: number[]
    var s__MakeTerrainCopyPaste_x3: number[]
    var s__MakeTerrainCopyPaste_y3: number[]
    var s__MakeTerrainCopyPaste_unitLastClic1: unit[]
    var s__MakeTerrainCopyPaste_unitLastClic2: unit[]
    var s__MakeTerrainCopyPaste_unitLastClic3: unit[]
    var s__MakeTerrainCopyPaste_isPoint1Saved: boolean[]
    var s__MakeTerrainCopyPaste_isPoint2Saved: boolean[]
    var s__MakeTerrainCopyPaste_isPoint3Saved: boolean[]
    var s__MakeTerrainCopyPaste_isPoint1Used: boolean[]
    var s__MakeTerrainCopyPaste_isPoint2Used: boolean[]
    var s__MakeTerrainCopyPaste_isPoint3Used: boolean[]
    const si__MakeTerrainCreate: number
    var s__MakeTerrainCreate_lastX: number[]
    var s__MakeTerrainCreate_lastY: number[]
    var s__MakeTerrainCreate_lastLocIsSaved: boolean[]
    var s__MakeTerrainCreate_lastLocSavedIsUsed: boolean[]
    var s__MakeTerrainCreate_unitLastClic: unit[]
    var s__MakeTerrainCreate_terrainType: number[]
    const si__MakeTerrainHeight: number
    var s__MakeTerrainHeight_radius: number[]
    var s__MakeTerrainHeight_height: number[]
    const si__MakeTerrainHorizontalSymmetry: number
    var s__MakeTerrainHorizontalSymmetry_lastX: number[]
    var s__MakeTerrainHorizontalSymmetry_lastY: number[]
    var s__MakeTerrainHorizontalSymmetry_lastLocIsSaved: boolean[]
    var s__MakeTerrainHorizontalSymmetry_lastLocSavedIsUsed: boolean[]
    var s__MakeTerrainHorizontalSymmetry_unitLastClic: unit[]
    const si__MakeTerrainVerticalSymmetry: number
    var s__MakeTerrainVerticalSymmetry_lastX: number[]
    var s__MakeTerrainVerticalSymmetry_lastY: number[]
    var s__MakeTerrainVerticalSymmetry_lastLocIsSaved: boolean[]
    var s__MakeTerrainVerticalSymmetry_lastLocSavedIsUsed: boolean[]
    var s__MakeTerrainVerticalSymmetry_unitLastClic: unit[]
    const si__MakeVisibilityModifier: number
    var s__MakeVisibilityModifier_lastX: number[]
    var s__MakeVisibilityModifier_lastY: number[]
    var s__MakeVisibilityModifier_unitLastClic: unit[]
    var s__MakeVisibilityModifier_lastLocIsSaved: boolean[]
    var s__MakeVisibilityModifier_lastLocSavedIsUsed: boolean[]
    const si__MonsterMultiplePatrols: number
    var s__MonsterMultiplePatrols_NB_MAX_LOC: number
    var s__MonsterMultiplePatrols_nbInstances: number
    var s__MonsterMultiplePatrols_staticLastLocInd: number
    var s__MonsterMultiplePatrols_2id: number[]
    var s__MonsterMultiplePatrols_3id: number[]
    var s__MonsterMultiplePatrols_4id: number[]
    var s__MonsterMultiplePatrols_5id: number[]
    var s__MonsterMultiplePatrols_6id: number[]
    var s__MonsterMultiplePatrols_7id: number[]
    var s__MonsterMultiplePatrols_8id: number[]
    var s__MonsterMultiplePatrols_9id: number[]
    var s__MonsterMultiplePatrols_10id: number[]
    var s__MonsterMultiplePatrols_11id: number[]
    var s__MonsterMultiplePatrols_12id: number[]
    var s__MonsterMultiplePatrols_13id: number[]
    var s__MonsterMultiplePatrols_id: number[]
    var s__MonsterMultiplePatrols_2u: unit[]
    var s__MonsterMultiplePatrols_3u: unit[]
    var s__MonsterMultiplePatrols_4u: unit[]
    var s__MonsterMultiplePatrols_5u: unit[]
    var s__MonsterMultiplePatrols_6u: unit[]
    var s__MonsterMultiplePatrols_7u: unit[]
    var s__MonsterMultiplePatrols_8u: unit[]
    var s__MonsterMultiplePatrols_9u: unit[]
    var s__MonsterMultiplePatrols_10u: unit[]
    var s__MonsterMultiplePatrols_11u: unit[]
    var s__MonsterMultiplePatrols_12u: unit[]
    var s__MonsterMultiplePatrols_13u: unit[]
    var s__MonsterMultiplePatrols_u: unit[]
    var s__MonsterMultiplePatrols_2mt: number[]
    var s__MonsterMultiplePatrols_3mt: number[]
    var s__MonsterMultiplePatrols_4mt: number[]
    var s__MonsterMultiplePatrols_5mt: number[]
    var s__MonsterMultiplePatrols_6mt: number[]
    var s__MonsterMultiplePatrols_7mt: number[]
    var s__MonsterMultiplePatrols_8mt: number[]
    var s__MonsterMultiplePatrols_9mt: number[]
    var s__MonsterMultiplePatrols_10mt: number[]
    var s__MonsterMultiplePatrols_11mt: number[]
    var s__MonsterMultiplePatrols_12mt: number[]
    var s__MonsterMultiplePatrols_13mt: number[]
    var s__MonsterMultiplePatrols_mt: number[]
    var s__MonsterMultiplePatrols_2disablingTimer: timer[]
    var s__MonsterMultiplePatrols_3disablingTimer: timer[]
    var s__MonsterMultiplePatrols_4disablingTimer: timer[]
    var s__MonsterMultiplePatrols_5disablingTimer: timer[]
    var s__MonsterMultiplePatrols_6disablingTimer: timer[]
    var s__MonsterMultiplePatrols_7disablingTimer: timer[]
    var s__MonsterMultiplePatrols_8disablingTimer: timer[]
    var s__MonsterMultiplePatrols_9disablingTimer: timer[]
    var s__MonsterMultiplePatrols_10disablingTimer: timer[]
    var s__MonsterMultiplePatrols_11disablingTimer: timer[]
    var s__MonsterMultiplePatrols_12disablingTimer: timer[]
    var s__MonsterMultiplePatrols_13disablingTimer: timer[]
    var s__MonsterMultiplePatrols_disablingTimer: timer[]
    var s__MonsterMultiplePatrols_2baseColorId: number[]
    var s__MonsterMultiplePatrols_3baseColorId: number[]
    var s__MonsterMultiplePatrols_4baseColorId: number[]
    var s__MonsterMultiplePatrols_5baseColorId: number[]
    var s__MonsterMultiplePatrols_6baseColorId: number[]
    var s__MonsterMultiplePatrols_7baseColorId: number[]
    var s__MonsterMultiplePatrols_8baseColorId: number[]
    var s__MonsterMultiplePatrols_9baseColorId: number[]
    var s__MonsterMultiplePatrols_10baseColorId: number[]
    var s__MonsterMultiplePatrols_11baseColorId: number[]
    var s__MonsterMultiplePatrols_12baseColorId: number[]
    var s__MonsterMultiplePatrols_13baseColorId: number[]
    var s__MonsterMultiplePatrols_baseColorId: number[]
    var s__MonsterMultiplePatrols_2vcRed: number[]
    var s__MonsterMultiplePatrols_3vcRed: number[]
    var s__MonsterMultiplePatrols_4vcRed: number[]
    var s__MonsterMultiplePatrols_5vcRed: number[]
    var s__MonsterMultiplePatrols_6vcRed: number[]
    var s__MonsterMultiplePatrols_7vcRed: number[]
    var s__MonsterMultiplePatrols_8vcRed: number[]
    var s__MonsterMultiplePatrols_9vcRed: number[]
    var s__MonsterMultiplePatrols_10vcRed: number[]
    var s__MonsterMultiplePatrols_11vcRed: number[]
    var s__MonsterMultiplePatrols_12vcRed: number[]
    var s__MonsterMultiplePatrols_13vcRed: number[]
    var s__MonsterMultiplePatrols_vcRed: number[]
    var s__MonsterMultiplePatrols_2vcGreen: number[]
    var s__MonsterMultiplePatrols_3vcGreen: number[]
    var s__MonsterMultiplePatrols_4vcGreen: number[]
    var s__MonsterMultiplePatrols_5vcGreen: number[]
    var s__MonsterMultiplePatrols_6vcGreen: number[]
    var s__MonsterMultiplePatrols_7vcGreen: number[]
    var s__MonsterMultiplePatrols_8vcGreen: number[]
    var s__MonsterMultiplePatrols_9vcGreen: number[]
    var s__MonsterMultiplePatrols_10vcGreen: number[]
    var s__MonsterMultiplePatrols_11vcGreen: number[]
    var s__MonsterMultiplePatrols_12vcGreen: number[]
    var s__MonsterMultiplePatrols_13vcGreen: number[]
    var s__MonsterMultiplePatrols_vcGreen: number[]
    var s__MonsterMultiplePatrols_2vcBlue: number[]
    var s__MonsterMultiplePatrols_3vcBlue: number[]
    var s__MonsterMultiplePatrols_4vcBlue: number[]
    var s__MonsterMultiplePatrols_5vcBlue: number[]
    var s__MonsterMultiplePatrols_6vcBlue: number[]
    var s__MonsterMultiplePatrols_7vcBlue: number[]
    var s__MonsterMultiplePatrols_8vcBlue: number[]
    var s__MonsterMultiplePatrols_9vcBlue: number[]
    var s__MonsterMultiplePatrols_10vcBlue: number[]
    var s__MonsterMultiplePatrols_11vcBlue: number[]
    var s__MonsterMultiplePatrols_12vcBlue: number[]
    var s__MonsterMultiplePatrols_13vcBlue: number[]
    var s__MonsterMultiplePatrols_vcBlue: number[]
    var s__MonsterMultiplePatrols_2vcTransparency: number[]
    var s__MonsterMultiplePatrols_3vcTransparency: number[]
    var s__MonsterMultiplePatrols_4vcTransparency: number[]
    var s__MonsterMultiplePatrols_5vcTransparency: number[]
    var s__MonsterMultiplePatrols_6vcTransparency: number[]
    var s__MonsterMultiplePatrols_7vcTransparency: number[]
    var s__MonsterMultiplePatrols_8vcTransparency: number[]
    var s__MonsterMultiplePatrols_9vcTransparency: number[]
    var s__MonsterMultiplePatrols_10vcTransparency: number[]
    var s__MonsterMultiplePatrols_11vcTransparency: number[]
    var s__MonsterMultiplePatrols_12vcTransparency: number[]
    var s__MonsterMultiplePatrols_13vcTransparency: number[]
    var s__MonsterMultiplePatrols_vcTransparency: number[]
    var s__MonsterMultiplePatrols_2lastLocInd: number[]
    var s__MonsterMultiplePatrols_3lastLocInd: number[]
    var s__MonsterMultiplePatrols_4lastLocInd: number[]
    var s__MonsterMultiplePatrols_5lastLocInd: number[]
    var s__MonsterMultiplePatrols_6lastLocInd: number[]
    var s__MonsterMultiplePatrols_7lastLocInd: number[]
    var s__MonsterMultiplePatrols_8lastLocInd: number[]
    var s__MonsterMultiplePatrols_9lastLocInd: number[]
    var s__MonsterMultiplePatrols_10lastLocInd: number[]
    var s__MonsterMultiplePatrols_11lastLocInd: number[]
    var s__MonsterMultiplePatrols_12lastLocInd: number[]
    var s__MonsterMultiplePatrols_13lastLocInd: number[]
    var s__MonsterMultiplePatrols_lastLocInd: number[]
    var s__MonsterMultiplePatrols_2currentMove: number[]
    var s__MonsterMultiplePatrols_3currentMove: number[]
    var s__MonsterMultiplePatrols_4currentMove: number[]
    var s__MonsterMultiplePatrols_5currentMove: number[]
    var s__MonsterMultiplePatrols_6currentMove: number[]
    var s__MonsterMultiplePatrols_7currentMove: number[]
    var s__MonsterMultiplePatrols_8currentMove: number[]
    var s__MonsterMultiplePatrols_9currentMove: number[]
    var s__MonsterMultiplePatrols_10currentMove: number[]
    var s__MonsterMultiplePatrols_11currentMove: number[]
    var s__MonsterMultiplePatrols_12currentMove: number[]
    var s__MonsterMultiplePatrols_13currentMove: number[]
    var s__MonsterMultiplePatrols_currentMove: number[]
    var s__MonsterMultiplePatrols_2sens: number[]
    var s__MonsterMultiplePatrols_3sens: number[]
    var s__MonsterMultiplePatrols_4sens: number[]
    var s__MonsterMultiplePatrols_5sens: number[]
    var s__MonsterMultiplePatrols_6sens: number[]
    var s__MonsterMultiplePatrols_7sens: number[]
    var s__MonsterMultiplePatrols_8sens: number[]
    var s__MonsterMultiplePatrols_9sens: number[]
    var s__MonsterMultiplePatrols_10sens: number[]
    var s__MonsterMultiplePatrols_11sens: number[]
    var s__MonsterMultiplePatrols_12sens: number[]
    var s__MonsterMultiplePatrols_13sens: number[]
    var s__MonsterMultiplePatrols_sens: number[]
    var s__MonsterMultiplePatrols_2x0: number[]
    var s__MonsterMultiplePatrols_3x0: number[]
    var s__MonsterMultiplePatrols_4x0: number[]
    var s__MonsterMultiplePatrols_5x0: number[]
    var s__MonsterMultiplePatrols_6x0: number[]
    var s__MonsterMultiplePatrols_7x0: number[]
    var s__MonsterMultiplePatrols_8x0: number[]
    var s__MonsterMultiplePatrols_9x0: number[]
    var s__MonsterMultiplePatrols_10x0: number[]
    var s__MonsterMultiplePatrols_11x0: number[]
    var s__MonsterMultiplePatrols_12x0: number[]
    var s__MonsterMultiplePatrols_13x0: number[]
    var s__MonsterMultiplePatrols_x0: number[]
    var s__MonsterMultiplePatrols_2y0: number[]
    var s__MonsterMultiplePatrols_3y0: number[]
    var s__MonsterMultiplePatrols_4y0: number[]
    var s__MonsterMultiplePatrols_5y0: number[]
    var s__MonsterMultiplePatrols_6y0: number[]
    var s__MonsterMultiplePatrols_7y0: number[]
    var s__MonsterMultiplePatrols_8y0: number[]
    var s__MonsterMultiplePatrols_9y0: number[]
    var s__MonsterMultiplePatrols_10y0: number[]
    var s__MonsterMultiplePatrols_11y0: number[]
    var s__MonsterMultiplePatrols_12y0: number[]
    var s__MonsterMultiplePatrols_13y0: number[]
    var s__MonsterMultiplePatrols_y0: number[]
    var s__MonsterMultiplePatrols_2r0: region[]
    var s__MonsterMultiplePatrols_3r0: region[]
    var s__MonsterMultiplePatrols_4r0: region[]
    var s__MonsterMultiplePatrols_5r0: region[]
    var s__MonsterMultiplePatrols_6r0: region[]
    var s__MonsterMultiplePatrols_7r0: region[]
    var s__MonsterMultiplePatrols_8r0: region[]
    var s__MonsterMultiplePatrols_9r0: region[]
    var s__MonsterMultiplePatrols_10r0: region[]
    var s__MonsterMultiplePatrols_11r0: region[]
    var s__MonsterMultiplePatrols_12r0: region[]
    var s__MonsterMultiplePatrols_13r0: region[]
    var s__MonsterMultiplePatrols_r0: region[]
    var s__MonsterMultiplePatrols_2t0: trigger[]
    var s__MonsterMultiplePatrols_3t0: trigger[]
    var s__MonsterMultiplePatrols_4t0: trigger[]
    var s__MonsterMultiplePatrols_5t0: trigger[]
    var s__MonsterMultiplePatrols_6t0: trigger[]
    var s__MonsterMultiplePatrols_7t0: trigger[]
    var s__MonsterMultiplePatrols_8t0: trigger[]
    var s__MonsterMultiplePatrols_9t0: trigger[]
    var s__MonsterMultiplePatrols_10t0: trigger[]
    var s__MonsterMultiplePatrols_11t0: trigger[]
    var s__MonsterMultiplePatrols_12t0: trigger[]
    var s__MonsterMultiplePatrols_13t0: trigger[]
    var s__MonsterMultiplePatrols_t0: trigger[]
    var s__MonsterMultiplePatrols_2x1: number[]
    var s__MonsterMultiplePatrols_3x1: number[]
    var s__MonsterMultiplePatrols_4x1: number[]
    var s__MonsterMultiplePatrols_5x1: number[]
    var s__MonsterMultiplePatrols_6x1: number[]
    var s__MonsterMultiplePatrols_7x1: number[]
    var s__MonsterMultiplePatrols_8x1: number[]
    var s__MonsterMultiplePatrols_9x1: number[]
    var s__MonsterMultiplePatrols_10x1: number[]
    var s__MonsterMultiplePatrols_11x1: number[]
    var s__MonsterMultiplePatrols_12x1: number[]
    var s__MonsterMultiplePatrols_13x1: number[]
    var s__MonsterMultiplePatrols_x1: number[]
    var s__MonsterMultiplePatrols_2y1: number[]
    var s__MonsterMultiplePatrols_3y1: number[]
    var s__MonsterMultiplePatrols_4y1: number[]
    var s__MonsterMultiplePatrols_5y1: number[]
    var s__MonsterMultiplePatrols_6y1: number[]
    var s__MonsterMultiplePatrols_7y1: number[]
    var s__MonsterMultiplePatrols_8y1: number[]
    var s__MonsterMultiplePatrols_9y1: number[]
    var s__MonsterMultiplePatrols_10y1: number[]
    var s__MonsterMultiplePatrols_11y1: number[]
    var s__MonsterMultiplePatrols_12y1: number[]
    var s__MonsterMultiplePatrols_13y1: number[]
    var s__MonsterMultiplePatrols_y1: number[]
    var s__MonsterMultiplePatrols_2r1: region[]
    var s__MonsterMultiplePatrols_3r1: region[]
    var s__MonsterMultiplePatrols_4r1: region[]
    var s__MonsterMultiplePatrols_5r1: region[]
    var s__MonsterMultiplePatrols_6r1: region[]
    var s__MonsterMultiplePatrols_7r1: region[]
    var s__MonsterMultiplePatrols_8r1: region[]
    var s__MonsterMultiplePatrols_9r1: region[]
    var s__MonsterMultiplePatrols_10r1: region[]
    var s__MonsterMultiplePatrols_11r1: region[]
    var s__MonsterMultiplePatrols_12r1: region[]
    var s__MonsterMultiplePatrols_13r1: region[]
    var s__MonsterMultiplePatrols_r1: region[]
    var s__MonsterMultiplePatrols_2t1: trigger[]
    var s__MonsterMultiplePatrols_3t1: trigger[]
    var s__MonsterMultiplePatrols_4t1: trigger[]
    var s__MonsterMultiplePatrols_5t1: trigger[]
    var s__MonsterMultiplePatrols_6t1: trigger[]
    var s__MonsterMultiplePatrols_7t1: trigger[]
    var s__MonsterMultiplePatrols_8t1: trigger[]
    var s__MonsterMultiplePatrols_9t1: trigger[]
    var s__MonsterMultiplePatrols_10t1: trigger[]
    var s__MonsterMultiplePatrols_11t1: trigger[]
    var s__MonsterMultiplePatrols_12t1: trigger[]
    var s__MonsterMultiplePatrols_13t1: trigger[]
    var s__MonsterMultiplePatrols_t1: trigger[]
    var s__MonsterMultiplePatrols_2x2: number[]
    var s__MonsterMultiplePatrols_3x2: number[]
    var s__MonsterMultiplePatrols_4x2: number[]
    var s__MonsterMultiplePatrols_5x2: number[]
    var s__MonsterMultiplePatrols_6x2: number[]
    var s__MonsterMultiplePatrols_7x2: number[]
    var s__MonsterMultiplePatrols_8x2: number[]
    var s__MonsterMultiplePatrols_9x2: number[]
    var s__MonsterMultiplePatrols_10x2: number[]
    var s__MonsterMultiplePatrols_11x2: number[]
    var s__MonsterMultiplePatrols_12x2: number[]
    var s__MonsterMultiplePatrols_13x2: number[]
    var s__MonsterMultiplePatrols_x2: number[]
    var s__MonsterMultiplePatrols_2y2: number[]
    var s__MonsterMultiplePatrols_3y2: number[]
    var s__MonsterMultiplePatrols_4y2: number[]
    var s__MonsterMultiplePatrols_5y2: number[]
    var s__MonsterMultiplePatrols_6y2: number[]
    var s__MonsterMultiplePatrols_7y2: number[]
    var s__MonsterMultiplePatrols_8y2: number[]
    var s__MonsterMultiplePatrols_9y2: number[]
    var s__MonsterMultiplePatrols_10y2: number[]
    var s__MonsterMultiplePatrols_11y2: number[]
    var s__MonsterMultiplePatrols_12y2: number[]
    var s__MonsterMultiplePatrols_13y2: number[]
    var s__MonsterMultiplePatrols_y2: number[]
    var s__MonsterMultiplePatrols_2r2: region[]
    var s__MonsterMultiplePatrols_3r2: region[]
    var s__MonsterMultiplePatrols_4r2: region[]
    var s__MonsterMultiplePatrols_5r2: region[]
    var s__MonsterMultiplePatrols_6r2: region[]
    var s__MonsterMultiplePatrols_7r2: region[]
    var s__MonsterMultiplePatrols_8r2: region[]
    var s__MonsterMultiplePatrols_9r2: region[]
    var s__MonsterMultiplePatrols_10r2: region[]
    var s__MonsterMultiplePatrols_11r2: region[]
    var s__MonsterMultiplePatrols_12r2: region[]
    var s__MonsterMultiplePatrols_13r2: region[]
    var s__MonsterMultiplePatrols_r2: region[]
    var s__MonsterMultiplePatrols_2t2: trigger[]
    var s__MonsterMultiplePatrols_3t2: trigger[]
    var s__MonsterMultiplePatrols_4t2: trigger[]
    var s__MonsterMultiplePatrols_5t2: trigger[]
    var s__MonsterMultiplePatrols_6t2: trigger[]
    var s__MonsterMultiplePatrols_7t2: trigger[]
    var s__MonsterMultiplePatrols_8t2: trigger[]
    var s__MonsterMultiplePatrols_9t2: trigger[]
    var s__MonsterMultiplePatrols_10t2: trigger[]
    var s__MonsterMultiplePatrols_11t2: trigger[]
    var s__MonsterMultiplePatrols_12t2: trigger[]
    var s__MonsterMultiplePatrols_13t2: trigger[]
    var s__MonsterMultiplePatrols_t2: trigger[]
    var s__MonsterMultiplePatrols_2x3: number[]
    var s__MonsterMultiplePatrols_3x3: number[]
    var s__MonsterMultiplePatrols_4x3: number[]
    var s__MonsterMultiplePatrols_5x3: number[]
    var s__MonsterMultiplePatrols_6x3: number[]
    var s__MonsterMultiplePatrols_7x3: number[]
    var s__MonsterMultiplePatrols_8x3: number[]
    var s__MonsterMultiplePatrols_9x3: number[]
    var s__MonsterMultiplePatrols_10x3: number[]
    var s__MonsterMultiplePatrols_11x3: number[]
    var s__MonsterMultiplePatrols_12x3: number[]
    var s__MonsterMultiplePatrols_13x3: number[]
    var s__MonsterMultiplePatrols_x3: number[]
    var s__MonsterMultiplePatrols_2y3: number[]
    var s__MonsterMultiplePatrols_3y3: number[]
    var s__MonsterMultiplePatrols_4y3: number[]
    var s__MonsterMultiplePatrols_5y3: number[]
    var s__MonsterMultiplePatrols_6y3: number[]
    var s__MonsterMultiplePatrols_7y3: number[]
    var s__MonsterMultiplePatrols_8y3: number[]
    var s__MonsterMultiplePatrols_9y3: number[]
    var s__MonsterMultiplePatrols_10y3: number[]
    var s__MonsterMultiplePatrols_11y3: number[]
    var s__MonsterMultiplePatrols_12y3: number[]
    var s__MonsterMultiplePatrols_13y3: number[]
    var s__MonsterMultiplePatrols_y3: number[]
    var s__MonsterMultiplePatrols_2r3: region[]
    var s__MonsterMultiplePatrols_3r3: region[]
    var s__MonsterMultiplePatrols_4r3: region[]
    var s__MonsterMultiplePatrols_5r3: region[]
    var s__MonsterMultiplePatrols_6r3: region[]
    var s__MonsterMultiplePatrols_7r3: region[]
    var s__MonsterMultiplePatrols_8r3: region[]
    var s__MonsterMultiplePatrols_9r3: region[]
    var s__MonsterMultiplePatrols_10r3: region[]
    var s__MonsterMultiplePatrols_11r3: region[]
    var s__MonsterMultiplePatrols_12r3: region[]
    var s__MonsterMultiplePatrols_13r3: region[]
    var s__MonsterMultiplePatrols_r3: region[]
    var s__MonsterMultiplePatrols_2t3: trigger[]
    var s__MonsterMultiplePatrols_3t3: trigger[]
    var s__MonsterMultiplePatrols_4t3: trigger[]
    var s__MonsterMultiplePatrols_5t3: trigger[]
    var s__MonsterMultiplePatrols_6t3: trigger[]
    var s__MonsterMultiplePatrols_7t3: trigger[]
    var s__MonsterMultiplePatrols_8t3: trigger[]
    var s__MonsterMultiplePatrols_9t3: trigger[]
    var s__MonsterMultiplePatrols_10t3: trigger[]
    var s__MonsterMultiplePatrols_11t3: trigger[]
    var s__MonsterMultiplePatrols_12t3: trigger[]
    var s__MonsterMultiplePatrols_13t3: trigger[]
    var s__MonsterMultiplePatrols_t3: trigger[]
    var s__MonsterMultiplePatrols_2x4: number[]
    var s__MonsterMultiplePatrols_3x4: number[]
    var s__MonsterMultiplePatrols_4x4: number[]
    var s__MonsterMultiplePatrols_5x4: number[]
    var s__MonsterMultiplePatrols_6x4: number[]
    var s__MonsterMultiplePatrols_7x4: number[]
    var s__MonsterMultiplePatrols_8x4: number[]
    var s__MonsterMultiplePatrols_9x4: number[]
    var s__MonsterMultiplePatrols_10x4: number[]
    var s__MonsterMultiplePatrols_11x4: number[]
    var s__MonsterMultiplePatrols_12x4: number[]
    var s__MonsterMultiplePatrols_13x4: number[]
    var s__MonsterMultiplePatrols_x4: number[]
    var s__MonsterMultiplePatrols_2y4: number[]
    var s__MonsterMultiplePatrols_3y4: number[]
    var s__MonsterMultiplePatrols_4y4: number[]
    var s__MonsterMultiplePatrols_5y4: number[]
    var s__MonsterMultiplePatrols_6y4: number[]
    var s__MonsterMultiplePatrols_7y4: number[]
    var s__MonsterMultiplePatrols_8y4: number[]
    var s__MonsterMultiplePatrols_9y4: number[]
    var s__MonsterMultiplePatrols_10y4: number[]
    var s__MonsterMultiplePatrols_11y4: number[]
    var s__MonsterMultiplePatrols_12y4: number[]
    var s__MonsterMultiplePatrols_13y4: number[]
    var s__MonsterMultiplePatrols_y4: number[]
    var s__MonsterMultiplePatrols_2r4: region[]
    var s__MonsterMultiplePatrols_3r4: region[]
    var s__MonsterMultiplePatrols_4r4: region[]
    var s__MonsterMultiplePatrols_5r4: region[]
    var s__MonsterMultiplePatrols_6r4: region[]
    var s__MonsterMultiplePatrols_7r4: region[]
    var s__MonsterMultiplePatrols_8r4: region[]
    var s__MonsterMultiplePatrols_9r4: region[]
    var s__MonsterMultiplePatrols_10r4: region[]
    var s__MonsterMultiplePatrols_11r4: region[]
    var s__MonsterMultiplePatrols_12r4: region[]
    var s__MonsterMultiplePatrols_13r4: region[]
    var s__MonsterMultiplePatrols_r4: region[]
    var s__MonsterMultiplePatrols_2t4: trigger[]
    var s__MonsterMultiplePatrols_3t4: trigger[]
    var s__MonsterMultiplePatrols_4t4: trigger[]
    var s__MonsterMultiplePatrols_5t4: trigger[]
    var s__MonsterMultiplePatrols_6t4: trigger[]
    var s__MonsterMultiplePatrols_7t4: trigger[]
    var s__MonsterMultiplePatrols_8t4: trigger[]
    var s__MonsterMultiplePatrols_9t4: trigger[]
    var s__MonsterMultiplePatrols_10t4: trigger[]
    var s__MonsterMultiplePatrols_11t4: trigger[]
    var s__MonsterMultiplePatrols_12t4: trigger[]
    var s__MonsterMultiplePatrols_13t4: trigger[]
    var s__MonsterMultiplePatrols_t4: trigger[]
    var s__MonsterMultiplePatrols_2x5: number[]
    var s__MonsterMultiplePatrols_3x5: number[]
    var s__MonsterMultiplePatrols_4x5: number[]
    var s__MonsterMultiplePatrols_5x5: number[]
    var s__MonsterMultiplePatrols_6x5: number[]
    var s__MonsterMultiplePatrols_7x5: number[]
    var s__MonsterMultiplePatrols_8x5: number[]
    var s__MonsterMultiplePatrols_9x5: number[]
    var s__MonsterMultiplePatrols_10x5: number[]
    var s__MonsterMultiplePatrols_11x5: number[]
    var s__MonsterMultiplePatrols_12x5: number[]
    var s__MonsterMultiplePatrols_13x5: number[]
    var s__MonsterMultiplePatrols_x5: number[]
    var s__MonsterMultiplePatrols_2y5: number[]
    var s__MonsterMultiplePatrols_3y5: number[]
    var s__MonsterMultiplePatrols_4y5: number[]
    var s__MonsterMultiplePatrols_5y5: number[]
    var s__MonsterMultiplePatrols_6y5: number[]
    var s__MonsterMultiplePatrols_7y5: number[]
    var s__MonsterMultiplePatrols_8y5: number[]
    var s__MonsterMultiplePatrols_9y5: number[]
    var s__MonsterMultiplePatrols_10y5: number[]
    var s__MonsterMultiplePatrols_11y5: number[]
    var s__MonsterMultiplePatrols_12y5: number[]
    var s__MonsterMultiplePatrols_13y5: number[]
    var s__MonsterMultiplePatrols_y5: number[]
    var s__MonsterMultiplePatrols_2r5: region[]
    var s__MonsterMultiplePatrols_3r5: region[]
    var s__MonsterMultiplePatrols_4r5: region[]
    var s__MonsterMultiplePatrols_5r5: region[]
    var s__MonsterMultiplePatrols_6r5: region[]
    var s__MonsterMultiplePatrols_7r5: region[]
    var s__MonsterMultiplePatrols_8r5: region[]
    var s__MonsterMultiplePatrols_9r5: region[]
    var s__MonsterMultiplePatrols_10r5: region[]
    var s__MonsterMultiplePatrols_11r5: region[]
    var s__MonsterMultiplePatrols_12r5: region[]
    var s__MonsterMultiplePatrols_13r5: region[]
    var s__MonsterMultiplePatrols_r5: region[]
    var s__MonsterMultiplePatrols_2t5: trigger[]
    var s__MonsterMultiplePatrols_3t5: trigger[]
    var s__MonsterMultiplePatrols_4t5: trigger[]
    var s__MonsterMultiplePatrols_5t5: trigger[]
    var s__MonsterMultiplePatrols_6t5: trigger[]
    var s__MonsterMultiplePatrols_7t5: trigger[]
    var s__MonsterMultiplePatrols_8t5: trigger[]
    var s__MonsterMultiplePatrols_9t5: trigger[]
    var s__MonsterMultiplePatrols_10t5: trigger[]
    var s__MonsterMultiplePatrols_11t5: trigger[]
    var s__MonsterMultiplePatrols_12t5: trigger[]
    var s__MonsterMultiplePatrols_13t5: trigger[]
    var s__MonsterMultiplePatrols_t5: trigger[]
    var s__MonsterMultiplePatrols_2x6: number[]
    var s__MonsterMultiplePatrols_3x6: number[]
    var s__MonsterMultiplePatrols_4x6: number[]
    var s__MonsterMultiplePatrols_5x6: number[]
    var s__MonsterMultiplePatrols_6x6: number[]
    var s__MonsterMultiplePatrols_7x6: number[]
    var s__MonsterMultiplePatrols_8x6: number[]
    var s__MonsterMultiplePatrols_9x6: number[]
    var s__MonsterMultiplePatrols_10x6: number[]
    var s__MonsterMultiplePatrols_11x6: number[]
    var s__MonsterMultiplePatrols_12x6: number[]
    var s__MonsterMultiplePatrols_13x6: number[]
    var s__MonsterMultiplePatrols_x6: number[]
    var s__MonsterMultiplePatrols_2y6: number[]
    var s__MonsterMultiplePatrols_3y6: number[]
    var s__MonsterMultiplePatrols_4y6: number[]
    var s__MonsterMultiplePatrols_5y6: number[]
    var s__MonsterMultiplePatrols_6y6: number[]
    var s__MonsterMultiplePatrols_7y6: number[]
    var s__MonsterMultiplePatrols_8y6: number[]
    var s__MonsterMultiplePatrols_9y6: number[]
    var s__MonsterMultiplePatrols_10y6: number[]
    var s__MonsterMultiplePatrols_11y6: number[]
    var s__MonsterMultiplePatrols_12y6: number[]
    var s__MonsterMultiplePatrols_13y6: number[]
    var s__MonsterMultiplePatrols_y6: number[]
    var s__MonsterMultiplePatrols_2r6: region[]
    var s__MonsterMultiplePatrols_3r6: region[]
    var s__MonsterMultiplePatrols_4r6: region[]
    var s__MonsterMultiplePatrols_5r6: region[]
    var s__MonsterMultiplePatrols_6r6: region[]
    var s__MonsterMultiplePatrols_7r6: region[]
    var s__MonsterMultiplePatrols_8r6: region[]
    var s__MonsterMultiplePatrols_9r6: region[]
    var s__MonsterMultiplePatrols_10r6: region[]
    var s__MonsterMultiplePatrols_11r6: region[]
    var s__MonsterMultiplePatrols_12r6: region[]
    var s__MonsterMultiplePatrols_13r6: region[]
    var s__MonsterMultiplePatrols_r6: region[]
    var s__MonsterMultiplePatrols_2t6: trigger[]
    var s__MonsterMultiplePatrols_3t6: trigger[]
    var s__MonsterMultiplePatrols_4t6: trigger[]
    var s__MonsterMultiplePatrols_5t6: trigger[]
    var s__MonsterMultiplePatrols_6t6: trigger[]
    var s__MonsterMultiplePatrols_7t6: trigger[]
    var s__MonsterMultiplePatrols_8t6: trigger[]
    var s__MonsterMultiplePatrols_9t6: trigger[]
    var s__MonsterMultiplePatrols_10t6: trigger[]
    var s__MonsterMultiplePatrols_11t6: trigger[]
    var s__MonsterMultiplePatrols_12t6: trigger[]
    var s__MonsterMultiplePatrols_13t6: trigger[]
    var s__MonsterMultiplePatrols_t6: trigger[]
    var s__MonsterMultiplePatrols_2x7: number[]
    var s__MonsterMultiplePatrols_3x7: number[]
    var s__MonsterMultiplePatrols_4x7: number[]
    var s__MonsterMultiplePatrols_5x7: number[]
    var s__MonsterMultiplePatrols_6x7: number[]
    var s__MonsterMultiplePatrols_7x7: number[]
    var s__MonsterMultiplePatrols_8x7: number[]
    var s__MonsterMultiplePatrols_9x7: number[]
    var s__MonsterMultiplePatrols_10x7: number[]
    var s__MonsterMultiplePatrols_11x7: number[]
    var s__MonsterMultiplePatrols_12x7: number[]
    var s__MonsterMultiplePatrols_13x7: number[]
    var s__MonsterMultiplePatrols_x7: number[]
    var s__MonsterMultiplePatrols_2y7: number[]
    var s__MonsterMultiplePatrols_3y7: number[]
    var s__MonsterMultiplePatrols_4y7: number[]
    var s__MonsterMultiplePatrols_5y7: number[]
    var s__MonsterMultiplePatrols_6y7: number[]
    var s__MonsterMultiplePatrols_7y7: number[]
    var s__MonsterMultiplePatrols_8y7: number[]
    var s__MonsterMultiplePatrols_9y7: number[]
    var s__MonsterMultiplePatrols_10y7: number[]
    var s__MonsterMultiplePatrols_11y7: number[]
    var s__MonsterMultiplePatrols_12y7: number[]
    var s__MonsterMultiplePatrols_13y7: number[]
    var s__MonsterMultiplePatrols_y7: number[]
    var s__MonsterMultiplePatrols_2r7: region[]
    var s__MonsterMultiplePatrols_3r7: region[]
    var s__MonsterMultiplePatrols_4r7: region[]
    var s__MonsterMultiplePatrols_5r7: region[]
    var s__MonsterMultiplePatrols_6r7: region[]
    var s__MonsterMultiplePatrols_7r7: region[]
    var s__MonsterMultiplePatrols_8r7: region[]
    var s__MonsterMultiplePatrols_9r7: region[]
    var s__MonsterMultiplePatrols_10r7: region[]
    var s__MonsterMultiplePatrols_11r7: region[]
    var s__MonsterMultiplePatrols_12r7: region[]
    var s__MonsterMultiplePatrols_13r7: region[]
    var s__MonsterMultiplePatrols_r7: region[]
    var s__MonsterMultiplePatrols_2t7: trigger[]
    var s__MonsterMultiplePatrols_3t7: trigger[]
    var s__MonsterMultiplePatrols_4t7: trigger[]
    var s__MonsterMultiplePatrols_5t7: trigger[]
    var s__MonsterMultiplePatrols_6t7: trigger[]
    var s__MonsterMultiplePatrols_7t7: trigger[]
    var s__MonsterMultiplePatrols_8t7: trigger[]
    var s__MonsterMultiplePatrols_9t7: trigger[]
    var s__MonsterMultiplePatrols_10t7: trigger[]
    var s__MonsterMultiplePatrols_11t7: trigger[]
    var s__MonsterMultiplePatrols_12t7: trigger[]
    var s__MonsterMultiplePatrols_13t7: trigger[]
    var s__MonsterMultiplePatrols_t7: trigger[]
    var s__MonsterMultiplePatrols_2x8: number[]
    var s__MonsterMultiplePatrols_3x8: number[]
    var s__MonsterMultiplePatrols_4x8: number[]
    var s__MonsterMultiplePatrols_5x8: number[]
    var s__MonsterMultiplePatrols_6x8: number[]
    var s__MonsterMultiplePatrols_7x8: number[]
    var s__MonsterMultiplePatrols_8x8: number[]
    var s__MonsterMultiplePatrols_9x8: number[]
    var s__MonsterMultiplePatrols_10x8: number[]
    var s__MonsterMultiplePatrols_11x8: number[]
    var s__MonsterMultiplePatrols_12x8: number[]
    var s__MonsterMultiplePatrols_13x8: number[]
    var s__MonsterMultiplePatrols_x8: number[]
    var s__MonsterMultiplePatrols_2y8: number[]
    var s__MonsterMultiplePatrols_3y8: number[]
    var s__MonsterMultiplePatrols_4y8: number[]
    var s__MonsterMultiplePatrols_5y8: number[]
    var s__MonsterMultiplePatrols_6y8: number[]
    var s__MonsterMultiplePatrols_7y8: number[]
    var s__MonsterMultiplePatrols_8y8: number[]
    var s__MonsterMultiplePatrols_9y8: number[]
    var s__MonsterMultiplePatrols_10y8: number[]
    var s__MonsterMultiplePatrols_11y8: number[]
    var s__MonsterMultiplePatrols_12y8: number[]
    var s__MonsterMultiplePatrols_13y8: number[]
    var s__MonsterMultiplePatrols_y8: number[]
    var s__MonsterMultiplePatrols_2r8: region[]
    var s__MonsterMultiplePatrols_3r8: region[]
    var s__MonsterMultiplePatrols_4r8: region[]
    var s__MonsterMultiplePatrols_5r8: region[]
    var s__MonsterMultiplePatrols_6r8: region[]
    var s__MonsterMultiplePatrols_7r8: region[]
    var s__MonsterMultiplePatrols_8r8: region[]
    var s__MonsterMultiplePatrols_9r8: region[]
    var s__MonsterMultiplePatrols_10r8: region[]
    var s__MonsterMultiplePatrols_11r8: region[]
    var s__MonsterMultiplePatrols_12r8: region[]
    var s__MonsterMultiplePatrols_13r8: region[]
    var s__MonsterMultiplePatrols_r8: region[]
    var s__MonsterMultiplePatrols_2t8: trigger[]
    var s__MonsterMultiplePatrols_3t8: trigger[]
    var s__MonsterMultiplePatrols_4t8: trigger[]
    var s__MonsterMultiplePatrols_5t8: trigger[]
    var s__MonsterMultiplePatrols_6t8: trigger[]
    var s__MonsterMultiplePatrols_7t8: trigger[]
    var s__MonsterMultiplePatrols_8t8: trigger[]
    var s__MonsterMultiplePatrols_9t8: trigger[]
    var s__MonsterMultiplePatrols_10t8: trigger[]
    var s__MonsterMultiplePatrols_11t8: trigger[]
    var s__MonsterMultiplePatrols_12t8: trigger[]
    var s__MonsterMultiplePatrols_13t8: trigger[]
    var s__MonsterMultiplePatrols_t8: trigger[]
    var s__MonsterMultiplePatrols_2x9: number[]
    var s__MonsterMultiplePatrols_3x9: number[]
    var s__MonsterMultiplePatrols_4x9: number[]
    var s__MonsterMultiplePatrols_5x9: number[]
    var s__MonsterMultiplePatrols_6x9: number[]
    var s__MonsterMultiplePatrols_7x9: number[]
    var s__MonsterMultiplePatrols_8x9: number[]
    var s__MonsterMultiplePatrols_9x9: number[]
    var s__MonsterMultiplePatrols_10x9: number[]
    var s__MonsterMultiplePatrols_11x9: number[]
    var s__MonsterMultiplePatrols_12x9: number[]
    var s__MonsterMultiplePatrols_13x9: number[]
    var s__MonsterMultiplePatrols_x9: number[]
    var s__MonsterMultiplePatrols_2y9: number[]
    var s__MonsterMultiplePatrols_3y9: number[]
    var s__MonsterMultiplePatrols_4y9: number[]
    var s__MonsterMultiplePatrols_5y9: number[]
    var s__MonsterMultiplePatrols_6y9: number[]
    var s__MonsterMultiplePatrols_7y9: number[]
    var s__MonsterMultiplePatrols_8y9: number[]
    var s__MonsterMultiplePatrols_9y9: number[]
    var s__MonsterMultiplePatrols_10y9: number[]
    var s__MonsterMultiplePatrols_11y9: number[]
    var s__MonsterMultiplePatrols_12y9: number[]
    var s__MonsterMultiplePatrols_13y9: number[]
    var s__MonsterMultiplePatrols_y9: number[]
    var s__MonsterMultiplePatrols_2r9: region[]
    var s__MonsterMultiplePatrols_3r9: region[]
    var s__MonsterMultiplePatrols_4r9: region[]
    var s__MonsterMultiplePatrols_5r9: region[]
    var s__MonsterMultiplePatrols_6r9: region[]
    var s__MonsterMultiplePatrols_7r9: region[]
    var s__MonsterMultiplePatrols_8r9: region[]
    var s__MonsterMultiplePatrols_9r9: region[]
    var s__MonsterMultiplePatrols_10r9: region[]
    var s__MonsterMultiplePatrols_11r9: region[]
    var s__MonsterMultiplePatrols_12r9: region[]
    var s__MonsterMultiplePatrols_13r9: region[]
    var s__MonsterMultiplePatrols_r9: region[]
    var s__MonsterMultiplePatrols_2t9: trigger[]
    var s__MonsterMultiplePatrols_3t9: trigger[]
    var s__MonsterMultiplePatrols_4t9: trigger[]
    var s__MonsterMultiplePatrols_5t9: trigger[]
    var s__MonsterMultiplePatrols_6t9: trigger[]
    var s__MonsterMultiplePatrols_7t9: trigger[]
    var s__MonsterMultiplePatrols_8t9: trigger[]
    var s__MonsterMultiplePatrols_9t9: trigger[]
    var s__MonsterMultiplePatrols_10t9: trigger[]
    var s__MonsterMultiplePatrols_11t9: trigger[]
    var s__MonsterMultiplePatrols_12t9: trigger[]
    var s__MonsterMultiplePatrols_13t9: trigger[]
    var s__MonsterMultiplePatrols_t9: trigger[]
    var s__MonsterMultiplePatrols_2x10: number[]
    var s__MonsterMultiplePatrols_3x10: number[]
    var s__MonsterMultiplePatrols_4x10: number[]
    var s__MonsterMultiplePatrols_5x10: number[]
    var s__MonsterMultiplePatrols_6x10: number[]
    var s__MonsterMultiplePatrols_7x10: number[]
    var s__MonsterMultiplePatrols_8x10: number[]
    var s__MonsterMultiplePatrols_9x10: number[]
    var s__MonsterMultiplePatrols_10x10: number[]
    var s__MonsterMultiplePatrols_11x10: number[]
    var s__MonsterMultiplePatrols_12x10: number[]
    var s__MonsterMultiplePatrols_13x10: number[]
    var s__MonsterMultiplePatrols_x10: number[]
    var s__MonsterMultiplePatrols_2y10: number[]
    var s__MonsterMultiplePatrols_3y10: number[]
    var s__MonsterMultiplePatrols_4y10: number[]
    var s__MonsterMultiplePatrols_5y10: number[]
    var s__MonsterMultiplePatrols_6y10: number[]
    var s__MonsterMultiplePatrols_7y10: number[]
    var s__MonsterMultiplePatrols_8y10: number[]
    var s__MonsterMultiplePatrols_9y10: number[]
    var s__MonsterMultiplePatrols_10y10: number[]
    var s__MonsterMultiplePatrols_11y10: number[]
    var s__MonsterMultiplePatrols_12y10: number[]
    var s__MonsterMultiplePatrols_13y10: number[]
    var s__MonsterMultiplePatrols_y10: number[]
    var s__MonsterMultiplePatrols_2r10: region[]
    var s__MonsterMultiplePatrols_3r10: region[]
    var s__MonsterMultiplePatrols_4r10: region[]
    var s__MonsterMultiplePatrols_5r10: region[]
    var s__MonsterMultiplePatrols_6r10: region[]
    var s__MonsterMultiplePatrols_7r10: region[]
    var s__MonsterMultiplePatrols_8r10: region[]
    var s__MonsterMultiplePatrols_9r10: region[]
    var s__MonsterMultiplePatrols_10r10: region[]
    var s__MonsterMultiplePatrols_11r10: region[]
    var s__MonsterMultiplePatrols_12r10: region[]
    var s__MonsterMultiplePatrols_13r10: region[]
    var s__MonsterMultiplePatrols_r10: region[]
    var s__MonsterMultiplePatrols_2t10: trigger[]
    var s__MonsterMultiplePatrols_3t10: trigger[]
    var s__MonsterMultiplePatrols_4t10: trigger[]
    var s__MonsterMultiplePatrols_5t10: trigger[]
    var s__MonsterMultiplePatrols_6t10: trigger[]
    var s__MonsterMultiplePatrols_7t10: trigger[]
    var s__MonsterMultiplePatrols_8t10: trigger[]
    var s__MonsterMultiplePatrols_9t10: trigger[]
    var s__MonsterMultiplePatrols_10t10: trigger[]
    var s__MonsterMultiplePatrols_11t10: trigger[]
    var s__MonsterMultiplePatrols_12t10: trigger[]
    var s__MonsterMultiplePatrols_13t10: trigger[]
    var s__MonsterMultiplePatrols_t10: trigger[]
    var s__MonsterMultiplePatrols_2x11: number[]
    var s__MonsterMultiplePatrols_3x11: number[]
    var s__MonsterMultiplePatrols_4x11: number[]
    var s__MonsterMultiplePatrols_5x11: number[]
    var s__MonsterMultiplePatrols_6x11: number[]
    var s__MonsterMultiplePatrols_7x11: number[]
    var s__MonsterMultiplePatrols_8x11: number[]
    var s__MonsterMultiplePatrols_9x11: number[]
    var s__MonsterMultiplePatrols_10x11: number[]
    var s__MonsterMultiplePatrols_11x11: number[]
    var s__MonsterMultiplePatrols_12x11: number[]
    var s__MonsterMultiplePatrols_13x11: number[]
    var s__MonsterMultiplePatrols_x11: number[]
    var s__MonsterMultiplePatrols_2y11: number[]
    var s__MonsterMultiplePatrols_3y11: number[]
    var s__MonsterMultiplePatrols_4y11: number[]
    var s__MonsterMultiplePatrols_5y11: number[]
    var s__MonsterMultiplePatrols_6y11: number[]
    var s__MonsterMultiplePatrols_7y11: number[]
    var s__MonsterMultiplePatrols_8y11: number[]
    var s__MonsterMultiplePatrols_9y11: number[]
    var s__MonsterMultiplePatrols_10y11: number[]
    var s__MonsterMultiplePatrols_11y11: number[]
    var s__MonsterMultiplePatrols_12y11: number[]
    var s__MonsterMultiplePatrols_13y11: number[]
    var s__MonsterMultiplePatrols_y11: number[]
    var s__MonsterMultiplePatrols_2r11: region[]
    var s__MonsterMultiplePatrols_3r11: region[]
    var s__MonsterMultiplePatrols_4r11: region[]
    var s__MonsterMultiplePatrols_5r11: region[]
    var s__MonsterMultiplePatrols_6r11: region[]
    var s__MonsterMultiplePatrols_7r11: region[]
    var s__MonsterMultiplePatrols_8r11: region[]
    var s__MonsterMultiplePatrols_9r11: region[]
    var s__MonsterMultiplePatrols_10r11: region[]
    var s__MonsterMultiplePatrols_11r11: region[]
    var s__MonsterMultiplePatrols_12r11: region[]
    var s__MonsterMultiplePatrols_13r11: region[]
    var s__MonsterMultiplePatrols_r11: region[]
    var s__MonsterMultiplePatrols_2t11: trigger[]
    var s__MonsterMultiplePatrols_3t11: trigger[]
    var s__MonsterMultiplePatrols_4t11: trigger[]
    var s__MonsterMultiplePatrols_5t11: trigger[]
    var s__MonsterMultiplePatrols_6t11: trigger[]
    var s__MonsterMultiplePatrols_7t11: trigger[]
    var s__MonsterMultiplePatrols_8t11: trigger[]
    var s__MonsterMultiplePatrols_9t11: trigger[]
    var s__MonsterMultiplePatrols_10t11: trigger[]
    var s__MonsterMultiplePatrols_11t11: trigger[]
    var s__MonsterMultiplePatrols_12t11: trigger[]
    var s__MonsterMultiplePatrols_13t11: trigger[]
    var s__MonsterMultiplePatrols_t11: trigger[]
    var s__MonsterMultiplePatrols_2x12: number[]
    var s__MonsterMultiplePatrols_3x12: number[]
    var s__MonsterMultiplePatrols_4x12: number[]
    var s__MonsterMultiplePatrols_5x12: number[]
    var s__MonsterMultiplePatrols_6x12: number[]
    var s__MonsterMultiplePatrols_7x12: number[]
    var s__MonsterMultiplePatrols_8x12: number[]
    var s__MonsterMultiplePatrols_9x12: number[]
    var s__MonsterMultiplePatrols_10x12: number[]
    var s__MonsterMultiplePatrols_11x12: number[]
    var s__MonsterMultiplePatrols_12x12: number[]
    var s__MonsterMultiplePatrols_13x12: number[]
    var s__MonsterMultiplePatrols_x12: number[]
    var s__MonsterMultiplePatrols_2y12: number[]
    var s__MonsterMultiplePatrols_3y12: number[]
    var s__MonsterMultiplePatrols_4y12: number[]
    var s__MonsterMultiplePatrols_5y12: number[]
    var s__MonsterMultiplePatrols_6y12: number[]
    var s__MonsterMultiplePatrols_7y12: number[]
    var s__MonsterMultiplePatrols_8y12: number[]
    var s__MonsterMultiplePatrols_9y12: number[]
    var s__MonsterMultiplePatrols_10y12: number[]
    var s__MonsterMultiplePatrols_11y12: number[]
    var s__MonsterMultiplePatrols_12y12: number[]
    var s__MonsterMultiplePatrols_13y12: number[]
    var s__MonsterMultiplePatrols_y12: number[]
    var s__MonsterMultiplePatrols_2r12: region[]
    var s__MonsterMultiplePatrols_3r12: region[]
    var s__MonsterMultiplePatrols_4r12: region[]
    var s__MonsterMultiplePatrols_5r12: region[]
    var s__MonsterMultiplePatrols_6r12: region[]
    var s__MonsterMultiplePatrols_7r12: region[]
    var s__MonsterMultiplePatrols_8r12: region[]
    var s__MonsterMultiplePatrols_9r12: region[]
    var s__MonsterMultiplePatrols_10r12: region[]
    var s__MonsterMultiplePatrols_11r12: region[]
    var s__MonsterMultiplePatrols_12r12: region[]
    var s__MonsterMultiplePatrols_13r12: region[]
    var s__MonsterMultiplePatrols_r12: region[]
    var s__MonsterMultiplePatrols_2t12: trigger[]
    var s__MonsterMultiplePatrols_3t12: trigger[]
    var s__MonsterMultiplePatrols_4t12: trigger[]
    var s__MonsterMultiplePatrols_5t12: trigger[]
    var s__MonsterMultiplePatrols_6t12: trigger[]
    var s__MonsterMultiplePatrols_7t12: trigger[]
    var s__MonsterMultiplePatrols_8t12: trigger[]
    var s__MonsterMultiplePatrols_9t12: trigger[]
    var s__MonsterMultiplePatrols_10t12: trigger[]
    var s__MonsterMultiplePatrols_11t12: trigger[]
    var s__MonsterMultiplePatrols_12t12: trigger[]
    var s__MonsterMultiplePatrols_13t12: trigger[]
    var s__MonsterMultiplePatrols_t12: trigger[]
    var s__MonsterMultiplePatrols_2x13: number[]
    var s__MonsterMultiplePatrols_3x13: number[]
    var s__MonsterMultiplePatrols_4x13: number[]
    var s__MonsterMultiplePatrols_5x13: number[]
    var s__MonsterMultiplePatrols_6x13: number[]
    var s__MonsterMultiplePatrols_7x13: number[]
    var s__MonsterMultiplePatrols_8x13: number[]
    var s__MonsterMultiplePatrols_9x13: number[]
    var s__MonsterMultiplePatrols_10x13: number[]
    var s__MonsterMultiplePatrols_11x13: number[]
    var s__MonsterMultiplePatrols_12x13: number[]
    var s__MonsterMultiplePatrols_13x13: number[]
    var s__MonsterMultiplePatrols_x13: number[]
    var s__MonsterMultiplePatrols_2y13: number[]
    var s__MonsterMultiplePatrols_3y13: number[]
    var s__MonsterMultiplePatrols_4y13: number[]
    var s__MonsterMultiplePatrols_5y13: number[]
    var s__MonsterMultiplePatrols_6y13: number[]
    var s__MonsterMultiplePatrols_7y13: number[]
    var s__MonsterMultiplePatrols_8y13: number[]
    var s__MonsterMultiplePatrols_9y13: number[]
    var s__MonsterMultiplePatrols_10y13: number[]
    var s__MonsterMultiplePatrols_11y13: number[]
    var s__MonsterMultiplePatrols_12y13: number[]
    var s__MonsterMultiplePatrols_13y13: number[]
    var s__MonsterMultiplePatrols_y13: number[]
    var s__MonsterMultiplePatrols_2r13: region[]
    var s__MonsterMultiplePatrols_3r13: region[]
    var s__MonsterMultiplePatrols_4r13: region[]
    var s__MonsterMultiplePatrols_5r13: region[]
    var s__MonsterMultiplePatrols_6r13: region[]
    var s__MonsterMultiplePatrols_7r13: region[]
    var s__MonsterMultiplePatrols_8r13: region[]
    var s__MonsterMultiplePatrols_9r13: region[]
    var s__MonsterMultiplePatrols_10r13: region[]
    var s__MonsterMultiplePatrols_11r13: region[]
    var s__MonsterMultiplePatrols_12r13: region[]
    var s__MonsterMultiplePatrols_13r13: region[]
    var s__MonsterMultiplePatrols_r13: region[]
    var s__MonsterMultiplePatrols_2t13: trigger[]
    var s__MonsterMultiplePatrols_3t13: trigger[]
    var s__MonsterMultiplePatrols_4t13: trigger[]
    var s__MonsterMultiplePatrols_5t13: trigger[]
    var s__MonsterMultiplePatrols_6t13: trigger[]
    var s__MonsterMultiplePatrols_7t13: trigger[]
    var s__MonsterMultiplePatrols_8t13: trigger[]
    var s__MonsterMultiplePatrols_9t13: trigger[]
    var s__MonsterMultiplePatrols_10t13: trigger[]
    var s__MonsterMultiplePatrols_11t13: trigger[]
    var s__MonsterMultiplePatrols_12t13: trigger[]
    var s__MonsterMultiplePatrols_13t13: trigger[]
    var s__MonsterMultiplePatrols_t13: trigger[]
    var s__MonsterMultiplePatrols_2x14: number[]
    var s__MonsterMultiplePatrols_3x14: number[]
    var s__MonsterMultiplePatrols_4x14: number[]
    var s__MonsterMultiplePatrols_5x14: number[]
    var s__MonsterMultiplePatrols_6x14: number[]
    var s__MonsterMultiplePatrols_7x14: number[]
    var s__MonsterMultiplePatrols_8x14: number[]
    var s__MonsterMultiplePatrols_9x14: number[]
    var s__MonsterMultiplePatrols_10x14: number[]
    var s__MonsterMultiplePatrols_11x14: number[]
    var s__MonsterMultiplePatrols_12x14: number[]
    var s__MonsterMultiplePatrols_13x14: number[]
    var s__MonsterMultiplePatrols_x14: number[]
    var s__MonsterMultiplePatrols_2y14: number[]
    var s__MonsterMultiplePatrols_3y14: number[]
    var s__MonsterMultiplePatrols_4y14: number[]
    var s__MonsterMultiplePatrols_5y14: number[]
    var s__MonsterMultiplePatrols_6y14: number[]
    var s__MonsterMultiplePatrols_7y14: number[]
    var s__MonsterMultiplePatrols_8y14: number[]
    var s__MonsterMultiplePatrols_9y14: number[]
    var s__MonsterMultiplePatrols_10y14: number[]
    var s__MonsterMultiplePatrols_11y14: number[]
    var s__MonsterMultiplePatrols_12y14: number[]
    var s__MonsterMultiplePatrols_13y14: number[]
    var s__MonsterMultiplePatrols_y14: number[]
    var s__MonsterMultiplePatrols_2r14: region[]
    var s__MonsterMultiplePatrols_3r14: region[]
    var s__MonsterMultiplePatrols_4r14: region[]
    var s__MonsterMultiplePatrols_5r14: region[]
    var s__MonsterMultiplePatrols_6r14: region[]
    var s__MonsterMultiplePatrols_7r14: region[]
    var s__MonsterMultiplePatrols_8r14: region[]
    var s__MonsterMultiplePatrols_9r14: region[]
    var s__MonsterMultiplePatrols_10r14: region[]
    var s__MonsterMultiplePatrols_11r14: region[]
    var s__MonsterMultiplePatrols_12r14: region[]
    var s__MonsterMultiplePatrols_13r14: region[]
    var s__MonsterMultiplePatrols_r14: region[]
    var s__MonsterMultiplePatrols_2t14: trigger[]
    var s__MonsterMultiplePatrols_3t14: trigger[]
    var s__MonsterMultiplePatrols_4t14: trigger[]
    var s__MonsterMultiplePatrols_5t14: trigger[]
    var s__MonsterMultiplePatrols_6t14: trigger[]
    var s__MonsterMultiplePatrols_7t14: trigger[]
    var s__MonsterMultiplePatrols_8t14: trigger[]
    var s__MonsterMultiplePatrols_9t14: trigger[]
    var s__MonsterMultiplePatrols_10t14: trigger[]
    var s__MonsterMultiplePatrols_11t14: trigger[]
    var s__MonsterMultiplePatrols_12t14: trigger[]
    var s__MonsterMultiplePatrols_13t14: trigger[]
    var s__MonsterMultiplePatrols_t14: trigger[]
    var s__MonsterMultiplePatrols_2x15: number[]
    var s__MonsterMultiplePatrols_3x15: number[]
    var s__MonsterMultiplePatrols_4x15: number[]
    var s__MonsterMultiplePatrols_5x15: number[]
    var s__MonsterMultiplePatrols_6x15: number[]
    var s__MonsterMultiplePatrols_7x15: number[]
    var s__MonsterMultiplePatrols_8x15: number[]
    var s__MonsterMultiplePatrols_9x15: number[]
    var s__MonsterMultiplePatrols_10x15: number[]
    var s__MonsterMultiplePatrols_11x15: number[]
    var s__MonsterMultiplePatrols_12x15: number[]
    var s__MonsterMultiplePatrols_13x15: number[]
    var s__MonsterMultiplePatrols_x15: number[]
    var s__MonsterMultiplePatrols_2y15: number[]
    var s__MonsterMultiplePatrols_3y15: number[]
    var s__MonsterMultiplePatrols_4y15: number[]
    var s__MonsterMultiplePatrols_5y15: number[]
    var s__MonsterMultiplePatrols_6y15: number[]
    var s__MonsterMultiplePatrols_7y15: number[]
    var s__MonsterMultiplePatrols_8y15: number[]
    var s__MonsterMultiplePatrols_9y15: number[]
    var s__MonsterMultiplePatrols_10y15: number[]
    var s__MonsterMultiplePatrols_11y15: number[]
    var s__MonsterMultiplePatrols_12y15: number[]
    var s__MonsterMultiplePatrols_13y15: number[]
    var s__MonsterMultiplePatrols_y15: number[]
    var s__MonsterMultiplePatrols_2r15: region[]
    var s__MonsterMultiplePatrols_3r15: region[]
    var s__MonsterMultiplePatrols_4r15: region[]
    var s__MonsterMultiplePatrols_5r15: region[]
    var s__MonsterMultiplePatrols_6r15: region[]
    var s__MonsterMultiplePatrols_7r15: region[]
    var s__MonsterMultiplePatrols_8r15: region[]
    var s__MonsterMultiplePatrols_9r15: region[]
    var s__MonsterMultiplePatrols_10r15: region[]
    var s__MonsterMultiplePatrols_11r15: region[]
    var s__MonsterMultiplePatrols_12r15: region[]
    var s__MonsterMultiplePatrols_13r15: region[]
    var s__MonsterMultiplePatrols_r15: region[]
    var s__MonsterMultiplePatrols_2t15: trigger[]
    var s__MonsterMultiplePatrols_3t15: trigger[]
    var s__MonsterMultiplePatrols_4t15: trigger[]
    var s__MonsterMultiplePatrols_5t15: trigger[]
    var s__MonsterMultiplePatrols_6t15: trigger[]
    var s__MonsterMultiplePatrols_7t15: trigger[]
    var s__MonsterMultiplePatrols_8t15: trigger[]
    var s__MonsterMultiplePatrols_9t15: trigger[]
    var s__MonsterMultiplePatrols_10t15: trigger[]
    var s__MonsterMultiplePatrols_11t15: trigger[]
    var s__MonsterMultiplePatrols_12t15: trigger[]
    var s__MonsterMultiplePatrols_13t15: trigger[]
    var s__MonsterMultiplePatrols_t15: trigger[]
    var s__MonsterMultiplePatrols_2x16: number[]
    var s__MonsterMultiplePatrols_3x16: number[]
    var s__MonsterMultiplePatrols_4x16: number[]
    var s__MonsterMultiplePatrols_5x16: number[]
    var s__MonsterMultiplePatrols_6x16: number[]
    var s__MonsterMultiplePatrols_7x16: number[]
    var s__MonsterMultiplePatrols_8x16: number[]
    var s__MonsterMultiplePatrols_9x16: number[]
    var s__MonsterMultiplePatrols_10x16: number[]
    var s__MonsterMultiplePatrols_11x16: number[]
    var s__MonsterMultiplePatrols_12x16: number[]
    var s__MonsterMultiplePatrols_13x16: number[]
    var s__MonsterMultiplePatrols_x16: number[]
    var s__MonsterMultiplePatrols_2y16: number[]
    var s__MonsterMultiplePatrols_3y16: number[]
    var s__MonsterMultiplePatrols_4y16: number[]
    var s__MonsterMultiplePatrols_5y16: number[]
    var s__MonsterMultiplePatrols_6y16: number[]
    var s__MonsterMultiplePatrols_7y16: number[]
    var s__MonsterMultiplePatrols_8y16: number[]
    var s__MonsterMultiplePatrols_9y16: number[]
    var s__MonsterMultiplePatrols_10y16: number[]
    var s__MonsterMultiplePatrols_11y16: number[]
    var s__MonsterMultiplePatrols_12y16: number[]
    var s__MonsterMultiplePatrols_13y16: number[]
    var s__MonsterMultiplePatrols_y16: number[]
    var s__MonsterMultiplePatrols_2r16: region[]
    var s__MonsterMultiplePatrols_3r16: region[]
    var s__MonsterMultiplePatrols_4r16: region[]
    var s__MonsterMultiplePatrols_5r16: region[]
    var s__MonsterMultiplePatrols_6r16: region[]
    var s__MonsterMultiplePatrols_7r16: region[]
    var s__MonsterMultiplePatrols_8r16: region[]
    var s__MonsterMultiplePatrols_9r16: region[]
    var s__MonsterMultiplePatrols_10r16: region[]
    var s__MonsterMultiplePatrols_11r16: region[]
    var s__MonsterMultiplePatrols_12r16: region[]
    var s__MonsterMultiplePatrols_13r16: region[]
    var s__MonsterMultiplePatrols_r16: region[]
    var s__MonsterMultiplePatrols_2t16: trigger[]
    var s__MonsterMultiplePatrols_3t16: trigger[]
    var s__MonsterMultiplePatrols_4t16: trigger[]
    var s__MonsterMultiplePatrols_5t16: trigger[]
    var s__MonsterMultiplePatrols_6t16: trigger[]
    var s__MonsterMultiplePatrols_7t16: trigger[]
    var s__MonsterMultiplePatrols_8t16: trigger[]
    var s__MonsterMultiplePatrols_9t16: trigger[]
    var s__MonsterMultiplePatrols_10t16: trigger[]
    var s__MonsterMultiplePatrols_11t16: trigger[]
    var s__MonsterMultiplePatrols_12t16: trigger[]
    var s__MonsterMultiplePatrols_13t16: trigger[]
    var s__MonsterMultiplePatrols_t16: trigger[]
    var s__MonsterMultiplePatrols_2x17: number[]
    var s__MonsterMultiplePatrols_3x17: number[]
    var s__MonsterMultiplePatrols_4x17: number[]
    var s__MonsterMultiplePatrols_5x17: number[]
    var s__MonsterMultiplePatrols_6x17: number[]
    var s__MonsterMultiplePatrols_7x17: number[]
    var s__MonsterMultiplePatrols_8x17: number[]
    var s__MonsterMultiplePatrols_9x17: number[]
    var s__MonsterMultiplePatrols_10x17: number[]
    var s__MonsterMultiplePatrols_11x17: number[]
    var s__MonsterMultiplePatrols_12x17: number[]
    var s__MonsterMultiplePatrols_13x17: number[]
    var s__MonsterMultiplePatrols_x17: number[]
    var s__MonsterMultiplePatrols_2y17: number[]
    var s__MonsterMultiplePatrols_3y17: number[]
    var s__MonsterMultiplePatrols_4y17: number[]
    var s__MonsterMultiplePatrols_5y17: number[]
    var s__MonsterMultiplePatrols_6y17: number[]
    var s__MonsterMultiplePatrols_7y17: number[]
    var s__MonsterMultiplePatrols_8y17: number[]
    var s__MonsterMultiplePatrols_9y17: number[]
    var s__MonsterMultiplePatrols_10y17: number[]
    var s__MonsterMultiplePatrols_11y17: number[]
    var s__MonsterMultiplePatrols_12y17: number[]
    var s__MonsterMultiplePatrols_13y17: number[]
    var s__MonsterMultiplePatrols_y17: number[]
    var s__MonsterMultiplePatrols_2r17: region[]
    var s__MonsterMultiplePatrols_3r17: region[]
    var s__MonsterMultiplePatrols_4r17: region[]
    var s__MonsterMultiplePatrols_5r17: region[]
    var s__MonsterMultiplePatrols_6r17: region[]
    var s__MonsterMultiplePatrols_7r17: region[]
    var s__MonsterMultiplePatrols_8r17: region[]
    var s__MonsterMultiplePatrols_9r17: region[]
    var s__MonsterMultiplePatrols_10r17: region[]
    var s__MonsterMultiplePatrols_11r17: region[]
    var s__MonsterMultiplePatrols_12r17: region[]
    var s__MonsterMultiplePatrols_13r17: region[]
    var s__MonsterMultiplePatrols_r17: region[]
    var s__MonsterMultiplePatrols_2t17: trigger[]
    var s__MonsterMultiplePatrols_3t17: trigger[]
    var s__MonsterMultiplePatrols_4t17: trigger[]
    var s__MonsterMultiplePatrols_5t17: trigger[]
    var s__MonsterMultiplePatrols_6t17: trigger[]
    var s__MonsterMultiplePatrols_7t17: trigger[]
    var s__MonsterMultiplePatrols_8t17: trigger[]
    var s__MonsterMultiplePatrols_9t17: trigger[]
    var s__MonsterMultiplePatrols_10t17: trigger[]
    var s__MonsterMultiplePatrols_11t17: trigger[]
    var s__MonsterMultiplePatrols_12t17: trigger[]
    var s__MonsterMultiplePatrols_13t17: trigger[]
    var s__MonsterMultiplePatrols_t17: trigger[]
    var s__MonsterMultiplePatrols_2x18: number[]
    var s__MonsterMultiplePatrols_3x18: number[]
    var s__MonsterMultiplePatrols_4x18: number[]
    var s__MonsterMultiplePatrols_5x18: number[]
    var s__MonsterMultiplePatrols_6x18: number[]
    var s__MonsterMultiplePatrols_7x18: number[]
    var s__MonsterMultiplePatrols_8x18: number[]
    var s__MonsterMultiplePatrols_9x18: number[]
    var s__MonsterMultiplePatrols_10x18: number[]
    var s__MonsterMultiplePatrols_11x18: number[]
    var s__MonsterMultiplePatrols_12x18: number[]
    var s__MonsterMultiplePatrols_13x18: number[]
    var s__MonsterMultiplePatrols_x18: number[]
    var s__MonsterMultiplePatrols_2y18: number[]
    var s__MonsterMultiplePatrols_3y18: number[]
    var s__MonsterMultiplePatrols_4y18: number[]
    var s__MonsterMultiplePatrols_5y18: number[]
    var s__MonsterMultiplePatrols_6y18: number[]
    var s__MonsterMultiplePatrols_7y18: number[]
    var s__MonsterMultiplePatrols_8y18: number[]
    var s__MonsterMultiplePatrols_9y18: number[]
    var s__MonsterMultiplePatrols_10y18: number[]
    var s__MonsterMultiplePatrols_11y18: number[]
    var s__MonsterMultiplePatrols_12y18: number[]
    var s__MonsterMultiplePatrols_13y18: number[]
    var s__MonsterMultiplePatrols_y18: number[]
    var s__MonsterMultiplePatrols_2r18: region[]
    var s__MonsterMultiplePatrols_3r18: region[]
    var s__MonsterMultiplePatrols_4r18: region[]
    var s__MonsterMultiplePatrols_5r18: region[]
    var s__MonsterMultiplePatrols_6r18: region[]
    var s__MonsterMultiplePatrols_7r18: region[]
    var s__MonsterMultiplePatrols_8r18: region[]
    var s__MonsterMultiplePatrols_9r18: region[]
    var s__MonsterMultiplePatrols_10r18: region[]
    var s__MonsterMultiplePatrols_11r18: region[]
    var s__MonsterMultiplePatrols_12r18: region[]
    var s__MonsterMultiplePatrols_13r18: region[]
    var s__MonsterMultiplePatrols_r18: region[]
    var s__MonsterMultiplePatrols_2t18: trigger[]
    var s__MonsterMultiplePatrols_3t18: trigger[]
    var s__MonsterMultiplePatrols_4t18: trigger[]
    var s__MonsterMultiplePatrols_5t18: trigger[]
    var s__MonsterMultiplePatrols_6t18: trigger[]
    var s__MonsterMultiplePatrols_7t18: trigger[]
    var s__MonsterMultiplePatrols_8t18: trigger[]
    var s__MonsterMultiplePatrols_9t18: trigger[]
    var s__MonsterMultiplePatrols_10t18: trigger[]
    var s__MonsterMultiplePatrols_11t18: trigger[]
    var s__MonsterMultiplePatrols_12t18: trigger[]
    var s__MonsterMultiplePatrols_13t18: trigger[]
    var s__MonsterMultiplePatrols_t18: trigger[]
    var s__MonsterMultiplePatrols_2x19: number[]
    var s__MonsterMultiplePatrols_3x19: number[]
    var s__MonsterMultiplePatrols_4x19: number[]
    var s__MonsterMultiplePatrols_5x19: number[]
    var s__MonsterMultiplePatrols_6x19: number[]
    var s__MonsterMultiplePatrols_7x19: number[]
    var s__MonsterMultiplePatrols_8x19: number[]
    var s__MonsterMultiplePatrols_9x19: number[]
    var s__MonsterMultiplePatrols_10x19: number[]
    var s__MonsterMultiplePatrols_11x19: number[]
    var s__MonsterMultiplePatrols_12x19: number[]
    var s__MonsterMultiplePatrols_13x19: number[]
    var s__MonsterMultiplePatrols_x19: number[]
    var s__MonsterMultiplePatrols_2y19: number[]
    var s__MonsterMultiplePatrols_3y19: number[]
    var s__MonsterMultiplePatrols_4y19: number[]
    var s__MonsterMultiplePatrols_5y19: number[]
    var s__MonsterMultiplePatrols_6y19: number[]
    var s__MonsterMultiplePatrols_7y19: number[]
    var s__MonsterMultiplePatrols_8y19: number[]
    var s__MonsterMultiplePatrols_9y19: number[]
    var s__MonsterMultiplePatrols_10y19: number[]
    var s__MonsterMultiplePatrols_11y19: number[]
    var s__MonsterMultiplePatrols_12y19: number[]
    var s__MonsterMultiplePatrols_13y19: number[]
    var s__MonsterMultiplePatrols_y19: number[]
    var s__MonsterMultiplePatrols_2r19: region[]
    var s__MonsterMultiplePatrols_3r19: region[]
    var s__MonsterMultiplePatrols_4r19: region[]
    var s__MonsterMultiplePatrols_5r19: region[]
    var s__MonsterMultiplePatrols_6r19: region[]
    var s__MonsterMultiplePatrols_7r19: region[]
    var s__MonsterMultiplePatrols_8r19: region[]
    var s__MonsterMultiplePatrols_9r19: region[]
    var s__MonsterMultiplePatrols_10r19: region[]
    var s__MonsterMultiplePatrols_11r19: region[]
    var s__MonsterMultiplePatrols_12r19: region[]
    var s__MonsterMultiplePatrols_13r19: region[]
    var s__MonsterMultiplePatrols_r19: region[]
    var s__MonsterMultiplePatrols_2t19: trigger[]
    var s__MonsterMultiplePatrols_3t19: trigger[]
    var s__MonsterMultiplePatrols_4t19: trigger[]
    var s__MonsterMultiplePatrols_5t19: trigger[]
    var s__MonsterMultiplePatrols_6t19: trigger[]
    var s__MonsterMultiplePatrols_7t19: trigger[]
    var s__MonsterMultiplePatrols_8t19: trigger[]
    var s__MonsterMultiplePatrols_9t19: trigger[]
    var s__MonsterMultiplePatrols_10t19: trigger[]
    var s__MonsterMultiplePatrols_11t19: trigger[]
    var s__MonsterMultiplePatrols_12t19: trigger[]
    var s__MonsterMultiplePatrols_13t19: trigger[]
    var s__MonsterMultiplePatrols_t19: trigger[]
    var s__MonsterMultiplePatrols_2currentTrigger: trigger[]
    var s__MonsterMultiplePatrols_3currentTrigger: trigger[]
    var s__MonsterMultiplePatrols_4currentTrigger: trigger[]
    var s__MonsterMultiplePatrols_5currentTrigger: trigger[]
    var s__MonsterMultiplePatrols_6currentTrigger: trigger[]
    var s__MonsterMultiplePatrols_7currentTrigger: trigger[]
    var s__MonsterMultiplePatrols_8currentTrigger: trigger[]
    var s__MonsterMultiplePatrols_9currentTrigger: trigger[]
    var s__MonsterMultiplePatrols_10currentTrigger: trigger[]
    var s__MonsterMultiplePatrols_11currentTrigger: trigger[]
    var s__MonsterMultiplePatrols_12currentTrigger: trigger[]
    var s__MonsterMultiplePatrols_13currentTrigger: trigger[]
    var s__MonsterMultiplePatrols_currentTrigger: trigger[]
    const si__MonsterNoMove: number
    var s__MonsterNoMove_nbInstances: number
    var s__MonsterNoMove_2id: number[]
    var s__MonsterNoMove_3id: number[]
    var s__MonsterNoMove_4id: number[]
    var s__MonsterNoMove_5id: number[]
    var s__MonsterNoMove_6id: number[]
    var s__MonsterNoMove_7id: number[]
    var s__MonsterNoMove_8id: number[]
    var s__MonsterNoMove_9id: number[]
    var s__MonsterNoMove_10id: number[]
    var s__MonsterNoMove_11id: number[]
    var s__MonsterNoMove_12id: number[]
    var s__MonsterNoMove_13id: number[]
    var s__MonsterNoMove_id: number[]
    var s__MonsterNoMove_2u: unit[]
    var s__MonsterNoMove_3u: unit[]
    var s__MonsterNoMove_4u: unit[]
    var s__MonsterNoMove_5u: unit[]
    var s__MonsterNoMove_6u: unit[]
    var s__MonsterNoMove_7u: unit[]
    var s__MonsterNoMove_8u: unit[]
    var s__MonsterNoMove_9u: unit[]
    var s__MonsterNoMove_10u: unit[]
    var s__MonsterNoMove_11u: unit[]
    var s__MonsterNoMove_12u: unit[]
    var s__MonsterNoMove_13u: unit[]
    var s__MonsterNoMove_u: unit[]
    var s__MonsterNoMove_2mt: number[]
    var s__MonsterNoMove_3mt: number[]
    var s__MonsterNoMove_4mt: number[]
    var s__MonsterNoMove_5mt: number[]
    var s__MonsterNoMove_6mt: number[]
    var s__MonsterNoMove_7mt: number[]
    var s__MonsterNoMove_8mt: number[]
    var s__MonsterNoMove_9mt: number[]
    var s__MonsterNoMove_10mt: number[]
    var s__MonsterNoMove_11mt: number[]
    var s__MonsterNoMove_12mt: number[]
    var s__MonsterNoMove_13mt: number[]
    var s__MonsterNoMove_mt: number[]
    var s__MonsterNoMove_2disablingTimer: timer[]
    var s__MonsterNoMove_3disablingTimer: timer[]
    var s__MonsterNoMove_4disablingTimer: timer[]
    var s__MonsterNoMove_5disablingTimer: timer[]
    var s__MonsterNoMove_6disablingTimer: timer[]
    var s__MonsterNoMove_7disablingTimer: timer[]
    var s__MonsterNoMove_8disablingTimer: timer[]
    var s__MonsterNoMove_9disablingTimer: timer[]
    var s__MonsterNoMove_10disablingTimer: timer[]
    var s__MonsterNoMove_11disablingTimer: timer[]
    var s__MonsterNoMove_12disablingTimer: timer[]
    var s__MonsterNoMove_13disablingTimer: timer[]
    var s__MonsterNoMove_disablingTimer: timer[]
    var s__MonsterNoMove_2baseColorId: number[]
    var s__MonsterNoMove_3baseColorId: number[]
    var s__MonsterNoMove_4baseColorId: number[]
    var s__MonsterNoMove_5baseColorId: number[]
    var s__MonsterNoMove_6baseColorId: number[]
    var s__MonsterNoMove_7baseColorId: number[]
    var s__MonsterNoMove_8baseColorId: number[]
    var s__MonsterNoMove_9baseColorId: number[]
    var s__MonsterNoMove_10baseColorId: number[]
    var s__MonsterNoMove_11baseColorId: number[]
    var s__MonsterNoMove_12baseColorId: number[]
    var s__MonsterNoMove_13baseColorId: number[]
    var s__MonsterNoMove_baseColorId: number[]
    var s__MonsterNoMove_2vcRed: number[]
    var s__MonsterNoMove_3vcRed: number[]
    var s__MonsterNoMove_4vcRed: number[]
    var s__MonsterNoMove_5vcRed: number[]
    var s__MonsterNoMove_6vcRed: number[]
    var s__MonsterNoMove_7vcRed: number[]
    var s__MonsterNoMove_8vcRed: number[]
    var s__MonsterNoMove_9vcRed: number[]
    var s__MonsterNoMove_10vcRed: number[]
    var s__MonsterNoMove_11vcRed: number[]
    var s__MonsterNoMove_12vcRed: number[]
    var s__MonsterNoMove_13vcRed: number[]
    var s__MonsterNoMove_vcRed: number[]
    var s__MonsterNoMove_2vcGreen: number[]
    var s__MonsterNoMove_3vcGreen: number[]
    var s__MonsterNoMove_4vcGreen: number[]
    var s__MonsterNoMove_5vcGreen: number[]
    var s__MonsterNoMove_6vcGreen: number[]
    var s__MonsterNoMove_7vcGreen: number[]
    var s__MonsterNoMove_8vcGreen: number[]
    var s__MonsterNoMove_9vcGreen: number[]
    var s__MonsterNoMove_10vcGreen: number[]
    var s__MonsterNoMove_11vcGreen: number[]
    var s__MonsterNoMove_12vcGreen: number[]
    var s__MonsterNoMove_13vcGreen: number[]
    var s__MonsterNoMove_vcGreen: number[]
    var s__MonsterNoMove_2vcBlue: number[]
    var s__MonsterNoMove_3vcBlue: number[]
    var s__MonsterNoMove_4vcBlue: number[]
    var s__MonsterNoMove_5vcBlue: number[]
    var s__MonsterNoMove_6vcBlue: number[]
    var s__MonsterNoMove_7vcBlue: number[]
    var s__MonsterNoMove_8vcBlue: number[]
    var s__MonsterNoMove_9vcBlue: number[]
    var s__MonsterNoMove_10vcBlue: number[]
    var s__MonsterNoMove_11vcBlue: number[]
    var s__MonsterNoMove_12vcBlue: number[]
    var s__MonsterNoMove_13vcBlue: number[]
    var s__MonsterNoMove_vcBlue: number[]
    var s__MonsterNoMove_2vcTransparency: number[]
    var s__MonsterNoMove_3vcTransparency: number[]
    var s__MonsterNoMove_4vcTransparency: number[]
    var s__MonsterNoMove_5vcTransparency: number[]
    var s__MonsterNoMove_6vcTransparency: number[]
    var s__MonsterNoMove_7vcTransparency: number[]
    var s__MonsterNoMove_8vcTransparency: number[]
    var s__MonsterNoMove_9vcTransparency: number[]
    var s__MonsterNoMove_10vcTransparency: number[]
    var s__MonsterNoMove_11vcTransparency: number[]
    var s__MonsterNoMove_12vcTransparency: number[]
    var s__MonsterNoMove_13vcTransparency: number[]
    var s__MonsterNoMove_vcTransparency: number[]
    var s__MonsterNoMove_2x: number[]
    var s__MonsterNoMove_3x: number[]
    var s__MonsterNoMove_4x: number[]
    var s__MonsterNoMove_5x: number[]
    var s__MonsterNoMove_6x: number[]
    var s__MonsterNoMove_7x: number[]
    var s__MonsterNoMove_8x: number[]
    var s__MonsterNoMove_9x: number[]
    var s__MonsterNoMove_10x: number[]
    var s__MonsterNoMove_11x: number[]
    var s__MonsterNoMove_12x: number[]
    var s__MonsterNoMove_13x: number[]
    var s__MonsterNoMove_x: number[]
    var s__MonsterNoMove_2y: number[]
    var s__MonsterNoMove_3y: number[]
    var s__MonsterNoMove_4y: number[]
    var s__MonsterNoMove_5y: number[]
    var s__MonsterNoMove_6y: number[]
    var s__MonsterNoMove_7y: number[]
    var s__MonsterNoMove_8y: number[]
    var s__MonsterNoMove_9y: number[]
    var s__MonsterNoMove_10y: number[]
    var s__MonsterNoMove_11y: number[]
    var s__MonsterNoMove_12y: number[]
    var s__MonsterNoMove_13y: number[]
    var s__MonsterNoMove_y: number[]
    var s__MonsterNoMove_2angle: number[]
    var s__MonsterNoMove_3angle: number[]
    var s__MonsterNoMove_4angle: number[]
    var s__MonsterNoMove_5angle: number[]
    var s__MonsterNoMove_6angle: number[]
    var s__MonsterNoMove_7angle: number[]
    var s__MonsterNoMove_8angle: number[]
    var s__MonsterNoMove_9angle: number[]
    var s__MonsterNoMove_10angle: number[]
    var s__MonsterNoMove_11angle: number[]
    var s__MonsterNoMove_12angle: number[]
    var s__MonsterNoMove_13angle: number[]
    var s__MonsterNoMove_angle: number[]
    const si__MonsterOrCaster: number
    var si__MonsterOrCaster_F: number
    var si__MonsterOrCaster_I: number
    var si__MonsterOrCaster_V: number[]
    var si__MonsterOrCaster_2V: number[]
    var si__MonsterOrCaster_3V: number[]
    var si__MonsterOrCaster_4V: number[]
    var si__MonsterOrCaster_5V: number[]
    var si__MonsterOrCaster_6V: number[]
    var si__MonsterOrCaster_7V: number[]
    var si__MonsterOrCaster_8V: number[]
    var si__MonsterOrCaster_9V: number[]
    var si__MonsterOrCaster_10V: number[]
    var si__MonsterOrCaster_11V: number[]
    var si__MonsterOrCaster_12V: number[]
    var si__MonsterOrCaster_13V: number[]
    var s__MonsterOrCaster_2monster: number[]
    var s__MonsterOrCaster_3monster: number[]
    var s__MonsterOrCaster_4monster: number[]
    var s__MonsterOrCaster_5monster: number[]
    var s__MonsterOrCaster_6monster: number[]
    var s__MonsterOrCaster_7monster: number[]
    var s__MonsterOrCaster_8monster: number[]
    var s__MonsterOrCaster_9monster: number[]
    var s__MonsterOrCaster_10monster: number[]
    var s__MonsterOrCaster_11monster: number[]
    var s__MonsterOrCaster_12monster: number[]
    var s__MonsterOrCaster_13monster: number[]
    var s__MonsterOrCaster_monster: number[]
    var s__MonsterOrCaster_2caster: number[]
    var s__MonsterOrCaster_3caster: number[]
    var s__MonsterOrCaster_4caster: number[]
    var s__MonsterOrCaster_5caster: number[]
    var s__MonsterOrCaster_6caster: number[]
    var s__MonsterOrCaster_7caster: number[]
    var s__MonsterOrCaster_8caster: number[]
    var s__MonsterOrCaster_9caster: number[]
    var s__MonsterOrCaster_10caster: number[]
    var s__MonsterOrCaster_11caster: number[]
    var s__MonsterOrCaster_12caster: number[]
    var s__MonsterOrCaster_13caster: number[]
    var s__MonsterOrCaster_caster: number[]
    const si__MonsterSimplePatrol: number
    var s__MonsterSimplePatrol_nbInstances: number
    var s__MonsterSimplePatrol_2id: number[]
    var s__MonsterSimplePatrol_3id: number[]
    var s__MonsterSimplePatrol_4id: number[]
    var s__MonsterSimplePatrol_5id: number[]
    var s__MonsterSimplePatrol_6id: number[]
    var s__MonsterSimplePatrol_7id: number[]
    var s__MonsterSimplePatrol_8id: number[]
    var s__MonsterSimplePatrol_9id: number[]
    var s__MonsterSimplePatrol_10id: number[]
    var s__MonsterSimplePatrol_11id: number[]
    var s__MonsterSimplePatrol_12id: number[]
    var s__MonsterSimplePatrol_13id: number[]
    var s__MonsterSimplePatrol_id: number[]
    var s__MonsterSimplePatrol_2u: unit[]
    var s__MonsterSimplePatrol_3u: unit[]
    var s__MonsterSimplePatrol_4u: unit[]
    var s__MonsterSimplePatrol_5u: unit[]
    var s__MonsterSimplePatrol_6u: unit[]
    var s__MonsterSimplePatrol_7u: unit[]
    var s__MonsterSimplePatrol_8u: unit[]
    var s__MonsterSimplePatrol_9u: unit[]
    var s__MonsterSimplePatrol_10u: unit[]
    var s__MonsterSimplePatrol_11u: unit[]
    var s__MonsterSimplePatrol_12u: unit[]
    var s__MonsterSimplePatrol_13u: unit[]
    var s__MonsterSimplePatrol_u: unit[]
    var s__MonsterSimplePatrol_2mt: number[]
    var s__MonsterSimplePatrol_3mt: number[]
    var s__MonsterSimplePatrol_4mt: number[]
    var s__MonsterSimplePatrol_5mt: number[]
    var s__MonsterSimplePatrol_6mt: number[]
    var s__MonsterSimplePatrol_7mt: number[]
    var s__MonsterSimplePatrol_8mt: number[]
    var s__MonsterSimplePatrol_9mt: number[]
    var s__MonsterSimplePatrol_10mt: number[]
    var s__MonsterSimplePatrol_11mt: number[]
    var s__MonsterSimplePatrol_12mt: number[]
    var s__MonsterSimplePatrol_13mt: number[]
    var s__MonsterSimplePatrol_mt: number[]
    var s__MonsterSimplePatrol_2disablingTimer: timer[]
    var s__MonsterSimplePatrol_3disablingTimer: timer[]
    var s__MonsterSimplePatrol_4disablingTimer: timer[]
    var s__MonsterSimplePatrol_5disablingTimer: timer[]
    var s__MonsterSimplePatrol_6disablingTimer: timer[]
    var s__MonsterSimplePatrol_7disablingTimer: timer[]
    var s__MonsterSimplePatrol_8disablingTimer: timer[]
    var s__MonsterSimplePatrol_9disablingTimer: timer[]
    var s__MonsterSimplePatrol_10disablingTimer: timer[]
    var s__MonsterSimplePatrol_11disablingTimer: timer[]
    var s__MonsterSimplePatrol_12disablingTimer: timer[]
    var s__MonsterSimplePatrol_13disablingTimer: timer[]
    var s__MonsterSimplePatrol_disablingTimer: timer[]
    var s__MonsterSimplePatrol_2baseColorId: number[]
    var s__MonsterSimplePatrol_3baseColorId: number[]
    var s__MonsterSimplePatrol_4baseColorId: number[]
    var s__MonsterSimplePatrol_5baseColorId: number[]
    var s__MonsterSimplePatrol_6baseColorId: number[]
    var s__MonsterSimplePatrol_7baseColorId: number[]
    var s__MonsterSimplePatrol_8baseColorId: number[]
    var s__MonsterSimplePatrol_9baseColorId: number[]
    var s__MonsterSimplePatrol_10baseColorId: number[]
    var s__MonsterSimplePatrol_11baseColorId: number[]
    var s__MonsterSimplePatrol_12baseColorId: number[]
    var s__MonsterSimplePatrol_13baseColorId: number[]
    var s__MonsterSimplePatrol_baseColorId: number[]
    var s__MonsterSimplePatrol_2vcRed: number[]
    var s__MonsterSimplePatrol_3vcRed: number[]
    var s__MonsterSimplePatrol_4vcRed: number[]
    var s__MonsterSimplePatrol_5vcRed: number[]
    var s__MonsterSimplePatrol_6vcRed: number[]
    var s__MonsterSimplePatrol_7vcRed: number[]
    var s__MonsterSimplePatrol_8vcRed: number[]
    var s__MonsterSimplePatrol_9vcRed: number[]
    var s__MonsterSimplePatrol_10vcRed: number[]
    var s__MonsterSimplePatrol_11vcRed: number[]
    var s__MonsterSimplePatrol_12vcRed: number[]
    var s__MonsterSimplePatrol_13vcRed: number[]
    var s__MonsterSimplePatrol_vcRed: number[]
    var s__MonsterSimplePatrol_2vcGreen: number[]
    var s__MonsterSimplePatrol_3vcGreen: number[]
    var s__MonsterSimplePatrol_4vcGreen: number[]
    var s__MonsterSimplePatrol_5vcGreen: number[]
    var s__MonsterSimplePatrol_6vcGreen: number[]
    var s__MonsterSimplePatrol_7vcGreen: number[]
    var s__MonsterSimplePatrol_8vcGreen: number[]
    var s__MonsterSimplePatrol_9vcGreen: number[]
    var s__MonsterSimplePatrol_10vcGreen: number[]
    var s__MonsterSimplePatrol_11vcGreen: number[]
    var s__MonsterSimplePatrol_12vcGreen: number[]
    var s__MonsterSimplePatrol_13vcGreen: number[]
    var s__MonsterSimplePatrol_vcGreen: number[]
    var s__MonsterSimplePatrol_2vcBlue: number[]
    var s__MonsterSimplePatrol_3vcBlue: number[]
    var s__MonsterSimplePatrol_4vcBlue: number[]
    var s__MonsterSimplePatrol_5vcBlue: number[]
    var s__MonsterSimplePatrol_6vcBlue: number[]
    var s__MonsterSimplePatrol_7vcBlue: number[]
    var s__MonsterSimplePatrol_8vcBlue: number[]
    var s__MonsterSimplePatrol_9vcBlue: number[]
    var s__MonsterSimplePatrol_10vcBlue: number[]
    var s__MonsterSimplePatrol_11vcBlue: number[]
    var s__MonsterSimplePatrol_12vcBlue: number[]
    var s__MonsterSimplePatrol_13vcBlue: number[]
    var s__MonsterSimplePatrol_vcBlue: number[]
    var s__MonsterSimplePatrol_2vcTransparency: number[]
    var s__MonsterSimplePatrol_3vcTransparency: number[]
    var s__MonsterSimplePatrol_4vcTransparency: number[]
    var s__MonsterSimplePatrol_5vcTransparency: number[]
    var s__MonsterSimplePatrol_6vcTransparency: number[]
    var s__MonsterSimplePatrol_7vcTransparency: number[]
    var s__MonsterSimplePatrol_8vcTransparency: number[]
    var s__MonsterSimplePatrol_9vcTransparency: number[]
    var s__MonsterSimplePatrol_10vcTransparency: number[]
    var s__MonsterSimplePatrol_11vcTransparency: number[]
    var s__MonsterSimplePatrol_12vcTransparency: number[]
    var s__MonsterSimplePatrol_13vcTransparency: number[]
    var s__MonsterSimplePatrol_vcTransparency: number[]
    var s__MonsterSimplePatrol_2x1: number[]
    var s__MonsterSimplePatrol_3x1: number[]
    var s__MonsterSimplePatrol_4x1: number[]
    var s__MonsterSimplePatrol_5x1: number[]
    var s__MonsterSimplePatrol_6x1: number[]
    var s__MonsterSimplePatrol_7x1: number[]
    var s__MonsterSimplePatrol_8x1: number[]
    var s__MonsterSimplePatrol_9x1: number[]
    var s__MonsterSimplePatrol_10x1: number[]
    var s__MonsterSimplePatrol_11x1: number[]
    var s__MonsterSimplePatrol_12x1: number[]
    var s__MonsterSimplePatrol_13x1: number[]
    var s__MonsterSimplePatrol_x1: number[]
    var s__MonsterSimplePatrol_2y1: number[]
    var s__MonsterSimplePatrol_3y1: number[]
    var s__MonsterSimplePatrol_4y1: number[]
    var s__MonsterSimplePatrol_5y1: number[]
    var s__MonsterSimplePatrol_6y1: number[]
    var s__MonsterSimplePatrol_7y1: number[]
    var s__MonsterSimplePatrol_8y1: number[]
    var s__MonsterSimplePatrol_9y1: number[]
    var s__MonsterSimplePatrol_10y1: number[]
    var s__MonsterSimplePatrol_11y1: number[]
    var s__MonsterSimplePatrol_12y1: number[]
    var s__MonsterSimplePatrol_13y1: number[]
    var s__MonsterSimplePatrol_y1: number[]
    var s__MonsterSimplePatrol_2x2: number[]
    var s__MonsterSimplePatrol_3x2: number[]
    var s__MonsterSimplePatrol_4x2: number[]
    var s__MonsterSimplePatrol_5x2: number[]
    var s__MonsterSimplePatrol_6x2: number[]
    var s__MonsterSimplePatrol_7x2: number[]
    var s__MonsterSimplePatrol_8x2: number[]
    var s__MonsterSimplePatrol_9x2: number[]
    var s__MonsterSimplePatrol_10x2: number[]
    var s__MonsterSimplePatrol_11x2: number[]
    var s__MonsterSimplePatrol_12x2: number[]
    var s__MonsterSimplePatrol_13x2: number[]
    var s__MonsterSimplePatrol_x2: number[]
    var s__MonsterSimplePatrol_2y2: number[]
    var s__MonsterSimplePatrol_3y2: number[]
    var s__MonsterSimplePatrol_4y2: number[]
    var s__MonsterSimplePatrol_5y2: number[]
    var s__MonsterSimplePatrol_6y2: number[]
    var s__MonsterSimplePatrol_7y2: number[]
    var s__MonsterSimplePatrol_8y2: number[]
    var s__MonsterSimplePatrol_9y2: number[]
    var s__MonsterSimplePatrol_10y2: number[]
    var s__MonsterSimplePatrol_11y2: number[]
    var s__MonsterSimplePatrol_12y2: number[]
    var s__MonsterSimplePatrol_13y2: number[]
    var s__MonsterSimplePatrol_y2: number[]
    const si__MonsterTeleport: number
    var s__MonsterTeleport_NB_MAX_LOC: number
    var s__MonsterTeleport_nbInstances: number
    var s__MonsterTeleport_staticLastLocInd: number
    var s__MonsterTeleport_2id: number[]
    var s__MonsterTeleport_3id: number[]
    var s__MonsterTeleport_4id: number[]
    var s__MonsterTeleport_5id: number[]
    var s__MonsterTeleport_6id: number[]
    var s__MonsterTeleport_7id: number[]
    var s__MonsterTeleport_8id: number[]
    var s__MonsterTeleport_9id: number[]
    var s__MonsterTeleport_10id: number[]
    var s__MonsterTeleport_11id: number[]
    var s__MonsterTeleport_12id: number[]
    var s__MonsterTeleport_13id: number[]
    var s__MonsterTeleport_id: number[]
    var s__MonsterTeleport_2u: unit[]
    var s__MonsterTeleport_3u: unit[]
    var s__MonsterTeleport_4u: unit[]
    var s__MonsterTeleport_5u: unit[]
    var s__MonsterTeleport_6u: unit[]
    var s__MonsterTeleport_7u: unit[]
    var s__MonsterTeleport_8u: unit[]
    var s__MonsterTeleport_9u: unit[]
    var s__MonsterTeleport_10u: unit[]
    var s__MonsterTeleport_11u: unit[]
    var s__MonsterTeleport_12u: unit[]
    var s__MonsterTeleport_13u: unit[]
    var s__MonsterTeleport_u: unit[]
    var s__MonsterTeleport_2mt: number[]
    var s__MonsterTeleport_3mt: number[]
    var s__MonsterTeleport_4mt: number[]
    var s__MonsterTeleport_5mt: number[]
    var s__MonsterTeleport_6mt: number[]
    var s__MonsterTeleport_7mt: number[]
    var s__MonsterTeleport_8mt: number[]
    var s__MonsterTeleport_9mt: number[]
    var s__MonsterTeleport_10mt: number[]
    var s__MonsterTeleport_11mt: number[]
    var s__MonsterTeleport_12mt: number[]
    var s__MonsterTeleport_13mt: number[]
    var s__MonsterTeleport_mt: number[]
    var s__MonsterTeleport_2disablingTimer: timer[]
    var s__MonsterTeleport_3disablingTimer: timer[]
    var s__MonsterTeleport_4disablingTimer: timer[]
    var s__MonsterTeleport_5disablingTimer: timer[]
    var s__MonsterTeleport_6disablingTimer: timer[]
    var s__MonsterTeleport_7disablingTimer: timer[]
    var s__MonsterTeleport_8disablingTimer: timer[]
    var s__MonsterTeleport_9disablingTimer: timer[]
    var s__MonsterTeleport_10disablingTimer: timer[]
    var s__MonsterTeleport_11disablingTimer: timer[]
    var s__MonsterTeleport_12disablingTimer: timer[]
    var s__MonsterTeleport_13disablingTimer: timer[]
    var s__MonsterTeleport_disablingTimer: timer[]
    var s__MonsterTeleport_2baseColorId: number[]
    var s__MonsterTeleport_3baseColorId: number[]
    var s__MonsterTeleport_4baseColorId: number[]
    var s__MonsterTeleport_5baseColorId: number[]
    var s__MonsterTeleport_6baseColorId: number[]
    var s__MonsterTeleport_7baseColorId: number[]
    var s__MonsterTeleport_8baseColorId: number[]
    var s__MonsterTeleport_9baseColorId: number[]
    var s__MonsterTeleport_10baseColorId: number[]
    var s__MonsterTeleport_11baseColorId: number[]
    var s__MonsterTeleport_12baseColorId: number[]
    var s__MonsterTeleport_13baseColorId: number[]
    var s__MonsterTeleport_baseColorId: number[]
    var s__MonsterTeleport_2vcRed: number[]
    var s__MonsterTeleport_3vcRed: number[]
    var s__MonsterTeleport_4vcRed: number[]
    var s__MonsterTeleport_5vcRed: number[]
    var s__MonsterTeleport_6vcRed: number[]
    var s__MonsterTeleport_7vcRed: number[]
    var s__MonsterTeleport_8vcRed: number[]
    var s__MonsterTeleport_9vcRed: number[]
    var s__MonsterTeleport_10vcRed: number[]
    var s__MonsterTeleport_11vcRed: number[]
    var s__MonsterTeleport_12vcRed: number[]
    var s__MonsterTeleport_13vcRed: number[]
    var s__MonsterTeleport_vcRed: number[]
    var s__MonsterTeleport_2vcGreen: number[]
    var s__MonsterTeleport_3vcGreen: number[]
    var s__MonsterTeleport_4vcGreen: number[]
    var s__MonsterTeleport_5vcGreen: number[]
    var s__MonsterTeleport_6vcGreen: number[]
    var s__MonsterTeleport_7vcGreen: number[]
    var s__MonsterTeleport_8vcGreen: number[]
    var s__MonsterTeleport_9vcGreen: number[]
    var s__MonsterTeleport_10vcGreen: number[]
    var s__MonsterTeleport_11vcGreen: number[]
    var s__MonsterTeleport_12vcGreen: number[]
    var s__MonsterTeleport_13vcGreen: number[]
    var s__MonsterTeleport_vcGreen: number[]
    var s__MonsterTeleport_2vcBlue: number[]
    var s__MonsterTeleport_3vcBlue: number[]
    var s__MonsterTeleport_4vcBlue: number[]
    var s__MonsterTeleport_5vcBlue: number[]
    var s__MonsterTeleport_6vcBlue: number[]
    var s__MonsterTeleport_7vcBlue: number[]
    var s__MonsterTeleport_8vcBlue: number[]
    var s__MonsterTeleport_9vcBlue: number[]
    var s__MonsterTeleport_10vcBlue: number[]
    var s__MonsterTeleport_11vcBlue: number[]
    var s__MonsterTeleport_12vcBlue: number[]
    var s__MonsterTeleport_13vcBlue: number[]
    var s__MonsterTeleport_vcBlue: number[]
    var s__MonsterTeleport_2vcTransparency: number[]
    var s__MonsterTeleport_3vcTransparency: number[]
    var s__MonsterTeleport_4vcTransparency: number[]
    var s__MonsterTeleport_5vcTransparency: number[]
    var s__MonsterTeleport_6vcTransparency: number[]
    var s__MonsterTeleport_7vcTransparency: number[]
    var s__MonsterTeleport_8vcTransparency: number[]
    var s__MonsterTeleport_9vcTransparency: number[]
    var s__MonsterTeleport_10vcTransparency: number[]
    var s__MonsterTeleport_11vcTransparency: number[]
    var s__MonsterTeleport_12vcTransparency: number[]
    var s__MonsterTeleport_13vcTransparency: number[]
    var s__MonsterTeleport_vcTransparency: number[]
    var s__MonsterTeleport_2period: number[]
    var s__MonsterTeleport_3period: number[]
    var s__MonsterTeleport_4period: number[]
    var s__MonsterTeleport_5period: number[]
    var s__MonsterTeleport_6period: number[]
    var s__MonsterTeleport_7period: number[]
    var s__MonsterTeleport_8period: number[]
    var s__MonsterTeleport_9period: number[]
    var s__MonsterTeleport_10period: number[]
    var s__MonsterTeleport_11period: number[]
    var s__MonsterTeleport_12period: number[]
    var s__MonsterTeleport_13period: number[]
    var s__MonsterTeleport_period: number[]
    var s__MonsterTeleport_2angle: number[]
    var s__MonsterTeleport_3angle: number[]
    var s__MonsterTeleport_4angle: number[]
    var s__MonsterTeleport_5angle: number[]
    var s__MonsterTeleport_6angle: number[]
    var s__MonsterTeleport_7angle: number[]
    var s__MonsterTeleport_8angle: number[]
    var s__MonsterTeleport_9angle: number[]
    var s__MonsterTeleport_10angle: number[]
    var s__MonsterTeleport_11angle: number[]
    var s__MonsterTeleport_12angle: number[]
    var s__MonsterTeleport_13angle: number[]
    var s__MonsterTeleport_angle: number[]
    var s__MonsterTeleport_2lastLocInd: number[]
    var s__MonsterTeleport_3lastLocInd: number[]
    var s__MonsterTeleport_4lastLocInd: number[]
    var s__MonsterTeleport_5lastLocInd: number[]
    var s__MonsterTeleport_6lastLocInd: number[]
    var s__MonsterTeleport_7lastLocInd: number[]
    var s__MonsterTeleport_8lastLocInd: number[]
    var s__MonsterTeleport_9lastLocInd: number[]
    var s__MonsterTeleport_10lastLocInd: number[]
    var s__MonsterTeleport_11lastLocInd: number[]
    var s__MonsterTeleport_12lastLocInd: number[]
    var s__MonsterTeleport_13lastLocInd: number[]
    var s__MonsterTeleport_lastLocInd: number[]
    var s__MonsterTeleport_2currentLoc: number[]
    var s__MonsterTeleport_3currentLoc: number[]
    var s__MonsterTeleport_4currentLoc: number[]
    var s__MonsterTeleport_5currentLoc: number[]
    var s__MonsterTeleport_6currentLoc: number[]
    var s__MonsterTeleport_7currentLoc: number[]
    var s__MonsterTeleport_8currentLoc: number[]
    var s__MonsterTeleport_9currentLoc: number[]
    var s__MonsterTeleport_10currentLoc: number[]
    var s__MonsterTeleport_11currentLoc: number[]
    var s__MonsterTeleport_12currentLoc: number[]
    var s__MonsterTeleport_13currentLoc: number[]
    var s__MonsterTeleport_currentLoc: number[]
    var s__MonsterTeleport_2sens: number[]
    var s__MonsterTeleport_3sens: number[]
    var s__MonsterTeleport_4sens: number[]
    var s__MonsterTeleport_5sens: number[]
    var s__MonsterTeleport_6sens: number[]
    var s__MonsterTeleport_7sens: number[]
    var s__MonsterTeleport_8sens: number[]
    var s__MonsterTeleport_9sens: number[]
    var s__MonsterTeleport_10sens: number[]
    var s__MonsterTeleport_11sens: number[]
    var s__MonsterTeleport_12sens: number[]
    var s__MonsterTeleport_13sens: number[]
    var s__MonsterTeleport_sens: number[]
    var s__MonsterTeleport_2x0: number[]
    var s__MonsterTeleport_3x0: number[]
    var s__MonsterTeleport_4x0: number[]
    var s__MonsterTeleport_5x0: number[]
    var s__MonsterTeleport_6x0: number[]
    var s__MonsterTeleport_7x0: number[]
    var s__MonsterTeleport_8x0: number[]
    var s__MonsterTeleport_9x0: number[]
    var s__MonsterTeleport_10x0: number[]
    var s__MonsterTeleport_11x0: number[]
    var s__MonsterTeleport_12x0: number[]
    var s__MonsterTeleport_13x0: number[]
    var s__MonsterTeleport_x0: number[]
    var s__MonsterTeleport_2y0: number[]
    var s__MonsterTeleport_3y0: number[]
    var s__MonsterTeleport_4y0: number[]
    var s__MonsterTeleport_5y0: number[]
    var s__MonsterTeleport_6y0: number[]
    var s__MonsterTeleport_7y0: number[]
    var s__MonsterTeleport_8y0: number[]
    var s__MonsterTeleport_9y0: number[]
    var s__MonsterTeleport_10y0: number[]
    var s__MonsterTeleport_11y0: number[]
    var s__MonsterTeleport_12y0: number[]
    var s__MonsterTeleport_13y0: number[]
    var s__MonsterTeleport_y0: number[]
    var s__MonsterTeleport_2x1: number[]
    var s__MonsterTeleport_3x1: number[]
    var s__MonsterTeleport_4x1: number[]
    var s__MonsterTeleport_5x1: number[]
    var s__MonsterTeleport_6x1: number[]
    var s__MonsterTeleport_7x1: number[]
    var s__MonsterTeleport_8x1: number[]
    var s__MonsterTeleport_9x1: number[]
    var s__MonsterTeleport_10x1: number[]
    var s__MonsterTeleport_11x1: number[]
    var s__MonsterTeleport_12x1: number[]
    var s__MonsterTeleport_13x1: number[]
    var s__MonsterTeleport_x1: number[]
    var s__MonsterTeleport_2y1: number[]
    var s__MonsterTeleport_3y1: number[]
    var s__MonsterTeleport_4y1: number[]
    var s__MonsterTeleport_5y1: number[]
    var s__MonsterTeleport_6y1: number[]
    var s__MonsterTeleport_7y1: number[]
    var s__MonsterTeleport_8y1: number[]
    var s__MonsterTeleport_9y1: number[]
    var s__MonsterTeleport_10y1: number[]
    var s__MonsterTeleport_11y1: number[]
    var s__MonsterTeleport_12y1: number[]
    var s__MonsterTeleport_13y1: number[]
    var s__MonsterTeleport_y1: number[]
    var s__MonsterTeleport_2x2: number[]
    var s__MonsterTeleport_3x2: number[]
    var s__MonsterTeleport_4x2: number[]
    var s__MonsterTeleport_5x2: number[]
    var s__MonsterTeleport_6x2: number[]
    var s__MonsterTeleport_7x2: number[]
    var s__MonsterTeleport_8x2: number[]
    var s__MonsterTeleport_9x2: number[]
    var s__MonsterTeleport_10x2: number[]
    var s__MonsterTeleport_11x2: number[]
    var s__MonsterTeleport_12x2: number[]
    var s__MonsterTeleport_13x2: number[]
    var s__MonsterTeleport_x2: number[]
    var s__MonsterTeleport_2y2: number[]
    var s__MonsterTeleport_3y2: number[]
    var s__MonsterTeleport_4y2: number[]
    var s__MonsterTeleport_5y2: number[]
    var s__MonsterTeleport_6y2: number[]
    var s__MonsterTeleport_7y2: number[]
    var s__MonsterTeleport_8y2: number[]
    var s__MonsterTeleport_9y2: number[]
    var s__MonsterTeleport_10y2: number[]
    var s__MonsterTeleport_11y2: number[]
    var s__MonsterTeleport_12y2: number[]
    var s__MonsterTeleport_13y2: number[]
    var s__MonsterTeleport_y2: number[]
    var s__MonsterTeleport_2x3: number[]
    var s__MonsterTeleport_3x3: number[]
    var s__MonsterTeleport_4x3: number[]
    var s__MonsterTeleport_5x3: number[]
    var s__MonsterTeleport_6x3: number[]
    var s__MonsterTeleport_7x3: number[]
    var s__MonsterTeleport_8x3: number[]
    var s__MonsterTeleport_9x3: number[]
    var s__MonsterTeleport_10x3: number[]
    var s__MonsterTeleport_11x3: number[]
    var s__MonsterTeleport_12x3: number[]
    var s__MonsterTeleport_13x3: number[]
    var s__MonsterTeleport_x3: number[]
    var s__MonsterTeleport_2y3: number[]
    var s__MonsterTeleport_3y3: number[]
    var s__MonsterTeleport_4y3: number[]
    var s__MonsterTeleport_5y3: number[]
    var s__MonsterTeleport_6y3: number[]
    var s__MonsterTeleport_7y3: number[]
    var s__MonsterTeleport_8y3: number[]
    var s__MonsterTeleport_9y3: number[]
    var s__MonsterTeleport_10y3: number[]
    var s__MonsterTeleport_11y3: number[]
    var s__MonsterTeleport_12y3: number[]
    var s__MonsterTeleport_13y3: number[]
    var s__MonsterTeleport_y3: number[]
    var s__MonsterTeleport_2x4: number[]
    var s__MonsterTeleport_3x4: number[]
    var s__MonsterTeleport_4x4: number[]
    var s__MonsterTeleport_5x4: number[]
    var s__MonsterTeleport_6x4: number[]
    var s__MonsterTeleport_7x4: number[]
    var s__MonsterTeleport_8x4: number[]
    var s__MonsterTeleport_9x4: number[]
    var s__MonsterTeleport_10x4: number[]
    var s__MonsterTeleport_11x4: number[]
    var s__MonsterTeleport_12x4: number[]
    var s__MonsterTeleport_13x4: number[]
    var s__MonsterTeleport_x4: number[]
    var s__MonsterTeleport_2y4: number[]
    var s__MonsterTeleport_3y4: number[]
    var s__MonsterTeleport_4y4: number[]
    var s__MonsterTeleport_5y4: number[]
    var s__MonsterTeleport_6y4: number[]
    var s__MonsterTeleport_7y4: number[]
    var s__MonsterTeleport_8y4: number[]
    var s__MonsterTeleport_9y4: number[]
    var s__MonsterTeleport_10y4: number[]
    var s__MonsterTeleport_11y4: number[]
    var s__MonsterTeleport_12y4: number[]
    var s__MonsterTeleport_13y4: number[]
    var s__MonsterTeleport_y4: number[]
    var s__MonsterTeleport_2x5: number[]
    var s__MonsterTeleport_3x5: number[]
    var s__MonsterTeleport_4x5: number[]
    var s__MonsterTeleport_5x5: number[]
    var s__MonsterTeleport_6x5: number[]
    var s__MonsterTeleport_7x5: number[]
    var s__MonsterTeleport_8x5: number[]
    var s__MonsterTeleport_9x5: number[]
    var s__MonsterTeleport_10x5: number[]
    var s__MonsterTeleport_11x5: number[]
    var s__MonsterTeleport_12x5: number[]
    var s__MonsterTeleport_13x5: number[]
    var s__MonsterTeleport_x5: number[]
    var s__MonsterTeleport_2y5: number[]
    var s__MonsterTeleport_3y5: number[]
    var s__MonsterTeleport_4y5: number[]
    var s__MonsterTeleport_5y5: number[]
    var s__MonsterTeleport_6y5: number[]
    var s__MonsterTeleport_7y5: number[]
    var s__MonsterTeleport_8y5: number[]
    var s__MonsterTeleport_9y5: number[]
    var s__MonsterTeleport_10y5: number[]
    var s__MonsterTeleport_11y5: number[]
    var s__MonsterTeleport_12y5: number[]
    var s__MonsterTeleport_13y5: number[]
    var s__MonsterTeleport_y5: number[]
    var s__MonsterTeleport_2x6: number[]
    var s__MonsterTeleport_3x6: number[]
    var s__MonsterTeleport_4x6: number[]
    var s__MonsterTeleport_5x6: number[]
    var s__MonsterTeleport_6x6: number[]
    var s__MonsterTeleport_7x6: number[]
    var s__MonsterTeleport_8x6: number[]
    var s__MonsterTeleport_9x6: number[]
    var s__MonsterTeleport_10x6: number[]
    var s__MonsterTeleport_11x6: number[]
    var s__MonsterTeleport_12x6: number[]
    var s__MonsterTeleport_13x6: number[]
    var s__MonsterTeleport_x6: number[]
    var s__MonsterTeleport_2y6: number[]
    var s__MonsterTeleport_3y6: number[]
    var s__MonsterTeleport_4y6: number[]
    var s__MonsterTeleport_5y6: number[]
    var s__MonsterTeleport_6y6: number[]
    var s__MonsterTeleport_7y6: number[]
    var s__MonsterTeleport_8y6: number[]
    var s__MonsterTeleport_9y6: number[]
    var s__MonsterTeleport_10y6: number[]
    var s__MonsterTeleport_11y6: number[]
    var s__MonsterTeleport_12y6: number[]
    var s__MonsterTeleport_13y6: number[]
    var s__MonsterTeleport_y6: number[]
    var s__MonsterTeleport_2x7: number[]
    var s__MonsterTeleport_3x7: number[]
    var s__MonsterTeleport_4x7: number[]
    var s__MonsterTeleport_5x7: number[]
    var s__MonsterTeleport_6x7: number[]
    var s__MonsterTeleport_7x7: number[]
    var s__MonsterTeleport_8x7: number[]
    var s__MonsterTeleport_9x7: number[]
    var s__MonsterTeleport_10x7: number[]
    var s__MonsterTeleport_11x7: number[]
    var s__MonsterTeleport_12x7: number[]
    var s__MonsterTeleport_13x7: number[]
    var s__MonsterTeleport_x7: number[]
    var s__MonsterTeleport_2y7: number[]
    var s__MonsterTeleport_3y7: number[]
    var s__MonsterTeleport_4y7: number[]
    var s__MonsterTeleport_5y7: number[]
    var s__MonsterTeleport_6y7: number[]
    var s__MonsterTeleport_7y7: number[]
    var s__MonsterTeleport_8y7: number[]
    var s__MonsterTeleport_9y7: number[]
    var s__MonsterTeleport_10y7: number[]
    var s__MonsterTeleport_11y7: number[]
    var s__MonsterTeleport_12y7: number[]
    var s__MonsterTeleport_13y7: number[]
    var s__MonsterTeleport_y7: number[]
    var s__MonsterTeleport_2x8: number[]
    var s__MonsterTeleport_3x8: number[]
    var s__MonsterTeleport_4x8: number[]
    var s__MonsterTeleport_5x8: number[]
    var s__MonsterTeleport_6x8: number[]
    var s__MonsterTeleport_7x8: number[]
    var s__MonsterTeleport_8x8: number[]
    var s__MonsterTeleport_9x8: number[]
    var s__MonsterTeleport_10x8: number[]
    var s__MonsterTeleport_11x8: number[]
    var s__MonsterTeleport_12x8: number[]
    var s__MonsterTeleport_13x8: number[]
    var s__MonsterTeleport_x8: number[]
    var s__MonsterTeleport_2y8: number[]
    var s__MonsterTeleport_3y8: number[]
    var s__MonsterTeleport_4y8: number[]
    var s__MonsterTeleport_5y8: number[]
    var s__MonsterTeleport_6y8: number[]
    var s__MonsterTeleport_7y8: number[]
    var s__MonsterTeleport_8y8: number[]
    var s__MonsterTeleport_9y8: number[]
    var s__MonsterTeleport_10y8: number[]
    var s__MonsterTeleport_11y8: number[]
    var s__MonsterTeleport_12y8: number[]
    var s__MonsterTeleport_13y8: number[]
    var s__MonsterTeleport_y8: number[]
    var s__MonsterTeleport_2x9: number[]
    var s__MonsterTeleport_3x9: number[]
    var s__MonsterTeleport_4x9: number[]
    var s__MonsterTeleport_5x9: number[]
    var s__MonsterTeleport_6x9: number[]
    var s__MonsterTeleport_7x9: number[]
    var s__MonsterTeleport_8x9: number[]
    var s__MonsterTeleport_9x9: number[]
    var s__MonsterTeleport_10x9: number[]
    var s__MonsterTeleport_11x9: number[]
    var s__MonsterTeleport_12x9: number[]
    var s__MonsterTeleport_13x9: number[]
    var s__MonsterTeleport_x9: number[]
    var s__MonsterTeleport_2y9: number[]
    var s__MonsterTeleport_3y9: number[]
    var s__MonsterTeleport_4y9: number[]
    var s__MonsterTeleport_5y9: number[]
    var s__MonsterTeleport_6y9: number[]
    var s__MonsterTeleport_7y9: number[]
    var s__MonsterTeleport_8y9: number[]
    var s__MonsterTeleport_9y9: number[]
    var s__MonsterTeleport_10y9: number[]
    var s__MonsterTeleport_11y9: number[]
    var s__MonsterTeleport_12y9: number[]
    var s__MonsterTeleport_13y9: number[]
    var s__MonsterTeleport_y9: number[]
    var s__MonsterTeleport_2x10: number[]
    var s__MonsterTeleport_3x10: number[]
    var s__MonsterTeleport_4x10: number[]
    var s__MonsterTeleport_5x10: number[]
    var s__MonsterTeleport_6x10: number[]
    var s__MonsterTeleport_7x10: number[]
    var s__MonsterTeleport_8x10: number[]
    var s__MonsterTeleport_9x10: number[]
    var s__MonsterTeleport_10x10: number[]
    var s__MonsterTeleport_11x10: number[]
    var s__MonsterTeleport_12x10: number[]
    var s__MonsterTeleport_13x10: number[]
    var s__MonsterTeleport_x10: number[]
    var s__MonsterTeleport_2y10: number[]
    var s__MonsterTeleport_3y10: number[]
    var s__MonsterTeleport_4y10: number[]
    var s__MonsterTeleport_5y10: number[]
    var s__MonsterTeleport_6y10: number[]
    var s__MonsterTeleport_7y10: number[]
    var s__MonsterTeleport_8y10: number[]
    var s__MonsterTeleport_9y10: number[]
    var s__MonsterTeleport_10y10: number[]
    var s__MonsterTeleport_11y10: number[]
    var s__MonsterTeleport_12y10: number[]
    var s__MonsterTeleport_13y10: number[]
    var s__MonsterTeleport_y10: number[]
    var s__MonsterTeleport_2x11: number[]
    var s__MonsterTeleport_3x11: number[]
    var s__MonsterTeleport_4x11: number[]
    var s__MonsterTeleport_5x11: number[]
    var s__MonsterTeleport_6x11: number[]
    var s__MonsterTeleport_7x11: number[]
    var s__MonsterTeleport_8x11: number[]
    var s__MonsterTeleport_9x11: number[]
    var s__MonsterTeleport_10x11: number[]
    var s__MonsterTeleport_11x11: number[]
    var s__MonsterTeleport_12x11: number[]
    var s__MonsterTeleport_13x11: number[]
    var s__MonsterTeleport_x11: number[]
    var s__MonsterTeleport_2y11: number[]
    var s__MonsterTeleport_3y11: number[]
    var s__MonsterTeleport_4y11: number[]
    var s__MonsterTeleport_5y11: number[]
    var s__MonsterTeleport_6y11: number[]
    var s__MonsterTeleport_7y11: number[]
    var s__MonsterTeleport_8y11: number[]
    var s__MonsterTeleport_9y11: number[]
    var s__MonsterTeleport_10y11: number[]
    var s__MonsterTeleport_11y11: number[]
    var s__MonsterTeleport_12y11: number[]
    var s__MonsterTeleport_13y11: number[]
    var s__MonsterTeleport_y11: number[]
    var s__MonsterTeleport_2x12: number[]
    var s__MonsterTeleport_3x12: number[]
    var s__MonsterTeleport_4x12: number[]
    var s__MonsterTeleport_5x12: number[]
    var s__MonsterTeleport_6x12: number[]
    var s__MonsterTeleport_7x12: number[]
    var s__MonsterTeleport_8x12: number[]
    var s__MonsterTeleport_9x12: number[]
    var s__MonsterTeleport_10x12: number[]
    var s__MonsterTeleport_11x12: number[]
    var s__MonsterTeleport_12x12: number[]
    var s__MonsterTeleport_13x12: number[]
    var s__MonsterTeleport_x12: number[]
    var s__MonsterTeleport_2y12: number[]
    var s__MonsterTeleport_3y12: number[]
    var s__MonsterTeleport_4y12: number[]
    var s__MonsterTeleport_5y12: number[]
    var s__MonsterTeleport_6y12: number[]
    var s__MonsterTeleport_7y12: number[]
    var s__MonsterTeleport_8y12: number[]
    var s__MonsterTeleport_9y12: number[]
    var s__MonsterTeleport_10y12: number[]
    var s__MonsterTeleport_11y12: number[]
    var s__MonsterTeleport_12y12: number[]
    var s__MonsterTeleport_13y12: number[]
    var s__MonsterTeleport_y12: number[]
    var s__MonsterTeleport_2x13: number[]
    var s__MonsterTeleport_3x13: number[]
    var s__MonsterTeleport_4x13: number[]
    var s__MonsterTeleport_5x13: number[]
    var s__MonsterTeleport_6x13: number[]
    var s__MonsterTeleport_7x13: number[]
    var s__MonsterTeleport_8x13: number[]
    var s__MonsterTeleport_9x13: number[]
    var s__MonsterTeleport_10x13: number[]
    var s__MonsterTeleport_11x13: number[]
    var s__MonsterTeleport_12x13: number[]
    var s__MonsterTeleport_13x13: number[]
    var s__MonsterTeleport_x13: number[]
    var s__MonsterTeleport_2y13: number[]
    var s__MonsterTeleport_3y13: number[]
    var s__MonsterTeleport_4y13: number[]
    var s__MonsterTeleport_5y13: number[]
    var s__MonsterTeleport_6y13: number[]
    var s__MonsterTeleport_7y13: number[]
    var s__MonsterTeleport_8y13: number[]
    var s__MonsterTeleport_9y13: number[]
    var s__MonsterTeleport_10y13: number[]
    var s__MonsterTeleport_11y13: number[]
    var s__MonsterTeleport_12y13: number[]
    var s__MonsterTeleport_13y13: number[]
    var s__MonsterTeleport_y13: number[]
    var s__MonsterTeleport_2x14: number[]
    var s__MonsterTeleport_3x14: number[]
    var s__MonsterTeleport_4x14: number[]
    var s__MonsterTeleport_5x14: number[]
    var s__MonsterTeleport_6x14: number[]
    var s__MonsterTeleport_7x14: number[]
    var s__MonsterTeleport_8x14: number[]
    var s__MonsterTeleport_9x14: number[]
    var s__MonsterTeleport_10x14: number[]
    var s__MonsterTeleport_11x14: number[]
    var s__MonsterTeleport_12x14: number[]
    var s__MonsterTeleport_13x14: number[]
    var s__MonsterTeleport_x14: number[]
    var s__MonsterTeleport_2y14: number[]
    var s__MonsterTeleport_3y14: number[]
    var s__MonsterTeleport_4y14: number[]
    var s__MonsterTeleport_5y14: number[]
    var s__MonsterTeleport_6y14: number[]
    var s__MonsterTeleport_7y14: number[]
    var s__MonsterTeleport_8y14: number[]
    var s__MonsterTeleport_9y14: number[]
    var s__MonsterTeleport_10y14: number[]
    var s__MonsterTeleport_11y14: number[]
    var s__MonsterTeleport_12y14: number[]
    var s__MonsterTeleport_13y14: number[]
    var s__MonsterTeleport_y14: number[]
    var s__MonsterTeleport_2x15: number[]
    var s__MonsterTeleport_3x15: number[]
    var s__MonsterTeleport_4x15: number[]
    var s__MonsterTeleport_5x15: number[]
    var s__MonsterTeleport_6x15: number[]
    var s__MonsterTeleport_7x15: number[]
    var s__MonsterTeleport_8x15: number[]
    var s__MonsterTeleport_9x15: number[]
    var s__MonsterTeleport_10x15: number[]
    var s__MonsterTeleport_11x15: number[]
    var s__MonsterTeleport_12x15: number[]
    var s__MonsterTeleport_13x15: number[]
    var s__MonsterTeleport_x15: number[]
    var s__MonsterTeleport_2y15: number[]
    var s__MonsterTeleport_3y15: number[]
    var s__MonsterTeleport_4y15: number[]
    var s__MonsterTeleport_5y15: number[]
    var s__MonsterTeleport_6y15: number[]
    var s__MonsterTeleport_7y15: number[]
    var s__MonsterTeleport_8y15: number[]
    var s__MonsterTeleport_9y15: number[]
    var s__MonsterTeleport_10y15: number[]
    var s__MonsterTeleport_11y15: number[]
    var s__MonsterTeleport_12y15: number[]
    var s__MonsterTeleport_13y15: number[]
    var s__MonsterTeleport_y15: number[]
    var s__MonsterTeleport_2x16: number[]
    var s__MonsterTeleport_3x16: number[]
    var s__MonsterTeleport_4x16: number[]
    var s__MonsterTeleport_5x16: number[]
    var s__MonsterTeleport_6x16: number[]
    var s__MonsterTeleport_7x16: number[]
    var s__MonsterTeleport_8x16: number[]
    var s__MonsterTeleport_9x16: number[]
    var s__MonsterTeleport_10x16: number[]
    var s__MonsterTeleport_11x16: number[]
    var s__MonsterTeleport_12x16: number[]
    var s__MonsterTeleport_13x16: number[]
    var s__MonsterTeleport_x16: number[]
    var s__MonsterTeleport_2y16: number[]
    var s__MonsterTeleport_3y16: number[]
    var s__MonsterTeleport_4y16: number[]
    var s__MonsterTeleport_5y16: number[]
    var s__MonsterTeleport_6y16: number[]
    var s__MonsterTeleport_7y16: number[]
    var s__MonsterTeleport_8y16: number[]
    var s__MonsterTeleport_9y16: number[]
    var s__MonsterTeleport_10y16: number[]
    var s__MonsterTeleport_11y16: number[]
    var s__MonsterTeleport_12y16: number[]
    var s__MonsterTeleport_13y16: number[]
    var s__MonsterTeleport_y16: number[]
    var s__MonsterTeleport_2x17: number[]
    var s__MonsterTeleport_3x17: number[]
    var s__MonsterTeleport_4x17: number[]
    var s__MonsterTeleport_5x17: number[]
    var s__MonsterTeleport_6x17: number[]
    var s__MonsterTeleport_7x17: number[]
    var s__MonsterTeleport_8x17: number[]
    var s__MonsterTeleport_9x17: number[]
    var s__MonsterTeleport_10x17: number[]
    var s__MonsterTeleport_11x17: number[]
    var s__MonsterTeleport_12x17: number[]
    var s__MonsterTeleport_13x17: number[]
    var s__MonsterTeleport_x17: number[]
    var s__MonsterTeleport_2y17: number[]
    var s__MonsterTeleport_3y17: number[]
    var s__MonsterTeleport_4y17: number[]
    var s__MonsterTeleport_5y17: number[]
    var s__MonsterTeleport_6y17: number[]
    var s__MonsterTeleport_7y17: number[]
    var s__MonsterTeleport_8y17: number[]
    var s__MonsterTeleport_9y17: number[]
    var s__MonsterTeleport_10y17: number[]
    var s__MonsterTeleport_11y17: number[]
    var s__MonsterTeleport_12y17: number[]
    var s__MonsterTeleport_13y17: number[]
    var s__MonsterTeleport_y17: number[]
    var s__MonsterTeleport_2x18: number[]
    var s__MonsterTeleport_3x18: number[]
    var s__MonsterTeleport_4x18: number[]
    var s__MonsterTeleport_5x18: number[]
    var s__MonsterTeleport_6x18: number[]
    var s__MonsterTeleport_7x18: number[]
    var s__MonsterTeleport_8x18: number[]
    var s__MonsterTeleport_9x18: number[]
    var s__MonsterTeleport_10x18: number[]
    var s__MonsterTeleport_11x18: number[]
    var s__MonsterTeleport_12x18: number[]
    var s__MonsterTeleport_13x18: number[]
    var s__MonsterTeleport_x18: number[]
    var s__MonsterTeleport_2y18: number[]
    var s__MonsterTeleport_3y18: number[]
    var s__MonsterTeleport_4y18: number[]
    var s__MonsterTeleport_5y18: number[]
    var s__MonsterTeleport_6y18: number[]
    var s__MonsterTeleport_7y18: number[]
    var s__MonsterTeleport_8y18: number[]
    var s__MonsterTeleport_9y18: number[]
    var s__MonsterTeleport_10y18: number[]
    var s__MonsterTeleport_11y18: number[]
    var s__MonsterTeleport_12y18: number[]
    var s__MonsterTeleport_13y18: number[]
    var s__MonsterTeleport_y18: number[]
    var s__MonsterTeleport_2x19: number[]
    var s__MonsterTeleport_3x19: number[]
    var s__MonsterTeleport_4x19: number[]
    var s__MonsterTeleport_5x19: number[]
    var s__MonsterTeleport_6x19: number[]
    var s__MonsterTeleport_7x19: number[]
    var s__MonsterTeleport_8x19: number[]
    var s__MonsterTeleport_9x19: number[]
    var s__MonsterTeleport_10x19: number[]
    var s__MonsterTeleport_11x19: number[]
    var s__MonsterTeleport_12x19: number[]
    var s__MonsterTeleport_13x19: number[]
    var s__MonsterTeleport_x19: number[]
    var s__MonsterTeleport_2y19: number[]
    var s__MonsterTeleport_3y19: number[]
    var s__MonsterTeleport_4y19: number[]
    var s__MonsterTeleport_5y19: number[]
    var s__MonsterTeleport_6y19: number[]
    var s__MonsterTeleport_7y19: number[]
    var s__MonsterTeleport_8y19: number[]
    var s__MonsterTeleport_9y19: number[]
    var s__MonsterTeleport_10y19: number[]
    var s__MonsterTeleport_11y19: number[]
    var s__MonsterTeleport_12y19: number[]
    var s__MonsterTeleport_13y19: number[]
    var s__MonsterTeleport_y19: number[]
    var s__MonsterTeleport_2t: timer[]
    var s__MonsterTeleport_3t: timer[]
    var s__MonsterTeleport_4t: timer[]
    var s__MonsterTeleport_5t: timer[]
    var s__MonsterTeleport_6t: timer[]
    var s__MonsterTeleport_7t: timer[]
    var s__MonsterTeleport_8t: timer[]
    var s__MonsterTeleport_9t: timer[]
    var s__MonsterTeleport_10t: timer[]
    var s__MonsterTeleport_11t: timer[]
    var s__MonsterTeleport_12t: timer[]
    var s__MonsterTeleport_13t: timer[]
    var s__MonsterTeleport_t: timer[]
    const si__Caster: number
    var si__Caster_F: number
    var si__Caster_I: number
    var si__Caster_V: number[]
    var si__Caster_2V: number[]
    var si__Caster_3V: number[]
    var si__Caster_4V: number[]
    var si__Caster_5V: number[]
    var si__Caster_6V: number[]
    var si__Caster_7V: number[]
    var si__Caster_8V: number[]
    var si__Caster_9V: number[]
    var si__Caster_10V: number[]
    var si__Caster_11V: number[]
    var si__Caster_12V: number[]
    var si__Caster_13V: number[]
    var si__Caster_14V: number[]
    var si__Caster_15V: number[]
    var si__Caster_16V: number[]
    var si__Caster_17V: number[]
    var si__Caster_18V: number[]
    var si__Caster_19V: number[]
    var si__Caster_20V: number[]
    var si__Caster_21V: number[]
    var si__Caster_22V: number[]
    var si__Caster_23V: number[]
    var si__Caster_24V: number[]
    var si__Caster_25V: number[]
    var si__Caster_26V: number[]
    var si__Caster_27V: number[]
    var si__Caster_28V: number[]
    var si__Caster_29V: number[]
    var si__Caster_30V: number[]
    var si__Caster_31V: number[]
    var si__Caster_32V: number[]
    var si__Caster_33V: number[]
    var si__Caster_34V: number[]
    var si__Caster_35V: number[]
    var si__Caster_36V: number[]
    var si__Caster_37V: number[]
    var s__Caster_2id: number[]
    var s__Caster_3id: number[]
    var s__Caster_4id: number[]
    var s__Caster_5id: number[]
    var s__Caster_6id: number[]
    var s__Caster_7id: number[]
    var s__Caster_8id: number[]
    var s__Caster_9id: number[]
    var s__Caster_10id: number[]
    var s__Caster_11id: number[]
    var s__Caster_12id: number[]
    var s__Caster_13id: number[]
    var s__Caster_14id: number[]
    var s__Caster_15id: number[]
    var s__Caster_16id: number[]
    var s__Caster_17id: number[]
    var s__Caster_18id: number[]
    var s__Caster_19id: number[]
    var s__Caster_20id: number[]
    var s__Caster_21id: number[]
    var s__Caster_22id: number[]
    var s__Caster_23id: number[]
    var s__Caster_24id: number[]
    var s__Caster_25id: number[]
    var s__Caster_26id: number[]
    var s__Caster_27id: number[]
    var s__Caster_28id: number[]
    var s__Caster_29id: number[]
    var s__Caster_30id: number[]
    var s__Caster_31id: number[]
    var s__Caster_32id: number[]
    var s__Caster_33id: number[]
    var s__Caster_34id: number[]
    var s__Caster_35id: number[]
    var s__Caster_36id: number[]
    var s__Caster_37id: number[]
    var s__Caster_id: number[]
    var s__Caster_2level: number[]
    var s__Caster_3level: number[]
    var s__Caster_4level: number[]
    var s__Caster_5level: number[]
    var s__Caster_6level: number[]
    var s__Caster_7level: number[]
    var s__Caster_8level: number[]
    var s__Caster_9level: number[]
    var s__Caster_10level: number[]
    var s__Caster_11level: number[]
    var s__Caster_12level: number[]
    var s__Caster_13level: number[]
    var s__Caster_14level: number[]
    var s__Caster_15level: number[]
    var s__Caster_16level: number[]
    var s__Caster_17level: number[]
    var s__Caster_18level: number[]
    var s__Caster_19level: number[]
    var s__Caster_20level: number[]
    var s__Caster_21level: number[]
    var s__Caster_22level: number[]
    var s__Caster_23level: number[]
    var s__Caster_24level: number[]
    var s__Caster_25level: number[]
    var s__Caster_26level: number[]
    var s__Caster_27level: number[]
    var s__Caster_28level: number[]
    var s__Caster_29level: number[]
    var s__Caster_30level: number[]
    var s__Caster_31level: number[]
    var s__Caster_32level: number[]
    var s__Caster_33level: number[]
    var s__Caster_34level: number[]
    var s__Caster_35level: number[]
    var s__Caster_36level: number[]
    var s__Caster_37level: number[]
    var s__Caster_level: number[]
    var s__Caster_2arrayId: number[]
    var s__Caster_3arrayId: number[]
    var s__Caster_4arrayId: number[]
    var s__Caster_5arrayId: number[]
    var s__Caster_6arrayId: number[]
    var s__Caster_7arrayId: number[]
    var s__Caster_8arrayId: number[]
    var s__Caster_9arrayId: number[]
    var s__Caster_10arrayId: number[]
    var s__Caster_11arrayId: number[]
    var s__Caster_12arrayId: number[]
    var s__Caster_13arrayId: number[]
    var s__Caster_14arrayId: number[]
    var s__Caster_15arrayId: number[]
    var s__Caster_16arrayId: number[]
    var s__Caster_17arrayId: number[]
    var s__Caster_18arrayId: number[]
    var s__Caster_19arrayId: number[]
    var s__Caster_20arrayId: number[]
    var s__Caster_21arrayId: number[]
    var s__Caster_22arrayId: number[]
    var s__Caster_23arrayId: number[]
    var s__Caster_24arrayId: number[]
    var s__Caster_25arrayId: number[]
    var s__Caster_26arrayId: number[]
    var s__Caster_27arrayId: number[]
    var s__Caster_28arrayId: number[]
    var s__Caster_29arrayId: number[]
    var s__Caster_30arrayId: number[]
    var s__Caster_31arrayId: number[]
    var s__Caster_32arrayId: number[]
    var s__Caster_33arrayId: number[]
    var s__Caster_34arrayId: number[]
    var s__Caster_35arrayId: number[]
    var s__Caster_36arrayId: number[]
    var s__Caster_37arrayId: number[]
    var s__Caster_arrayId: number[]
    var s__Caster_2casterType: number[]
    var s__Caster_3casterType: number[]
    var s__Caster_4casterType: number[]
    var s__Caster_5casterType: number[]
    var s__Caster_6casterType: number[]
    var s__Caster_7casterType: number[]
    var s__Caster_8casterType: number[]
    var s__Caster_9casterType: number[]
    var s__Caster_10casterType: number[]
    var s__Caster_11casterType: number[]
    var s__Caster_12casterType: number[]
    var s__Caster_13casterType: number[]
    var s__Caster_14casterType: number[]
    var s__Caster_15casterType: number[]
    var s__Caster_16casterType: number[]
    var s__Caster_17casterType: number[]
    var s__Caster_18casterType: number[]
    var s__Caster_19casterType: number[]
    var s__Caster_20casterType: number[]
    var s__Caster_21casterType: number[]
    var s__Caster_22casterType: number[]
    var s__Caster_23casterType: number[]
    var s__Caster_24casterType: number[]
    var s__Caster_25casterType: number[]
    var s__Caster_26casterType: number[]
    var s__Caster_27casterType: number[]
    var s__Caster_28casterType: number[]
    var s__Caster_29casterType: number[]
    var s__Caster_30casterType: number[]
    var s__Caster_31casterType: number[]
    var s__Caster_32casterType: number[]
    var s__Caster_33casterType: number[]
    var s__Caster_34casterType: number[]
    var s__Caster_35casterType: number[]
    var s__Caster_36casterType: number[]
    var s__Caster_37casterType: number[]
    var s__Caster_casterType: number[]
    var s__Caster_2x: number[]
    var s__Caster_3x: number[]
    var s__Caster_4x: number[]
    var s__Caster_5x: number[]
    var s__Caster_6x: number[]
    var s__Caster_7x: number[]
    var s__Caster_8x: number[]
    var s__Caster_9x: number[]
    var s__Caster_10x: number[]
    var s__Caster_11x: number[]
    var s__Caster_12x: number[]
    var s__Caster_13x: number[]
    var s__Caster_14x: number[]
    var s__Caster_15x: number[]
    var s__Caster_16x: number[]
    var s__Caster_17x: number[]
    var s__Caster_18x: number[]
    var s__Caster_19x: number[]
    var s__Caster_20x: number[]
    var s__Caster_21x: number[]
    var s__Caster_22x: number[]
    var s__Caster_23x: number[]
    var s__Caster_24x: number[]
    var s__Caster_25x: number[]
    var s__Caster_26x: number[]
    var s__Caster_27x: number[]
    var s__Caster_28x: number[]
    var s__Caster_29x: number[]
    var s__Caster_30x: number[]
    var s__Caster_31x: number[]
    var s__Caster_32x: number[]
    var s__Caster_33x: number[]
    var s__Caster_34x: number[]
    var s__Caster_35x: number[]
    var s__Caster_36x: number[]
    var s__Caster_37x: number[]
    var s__Caster_x: number[]
    var s__Caster_2y: number[]
    var s__Caster_3y: number[]
    var s__Caster_4y: number[]
    var s__Caster_5y: number[]
    var s__Caster_6y: number[]
    var s__Caster_7y: number[]
    var s__Caster_8y: number[]
    var s__Caster_9y: number[]
    var s__Caster_10y: number[]
    var s__Caster_11y: number[]
    var s__Caster_12y: number[]
    var s__Caster_13y: number[]
    var s__Caster_14y: number[]
    var s__Caster_15y: number[]
    var s__Caster_16y: number[]
    var s__Caster_17y: number[]
    var s__Caster_18y: number[]
    var s__Caster_19y: number[]
    var s__Caster_20y: number[]
    var s__Caster_21y: number[]
    var s__Caster_22y: number[]
    var s__Caster_23y: number[]
    var s__Caster_24y: number[]
    var s__Caster_25y: number[]
    var s__Caster_26y: number[]
    var s__Caster_27y: number[]
    var s__Caster_28y: number[]
    var s__Caster_29y: number[]
    var s__Caster_30y: number[]
    var s__Caster_31y: number[]
    var s__Caster_32y: number[]
    var s__Caster_33y: number[]
    var s__Caster_34y: number[]
    var s__Caster_35y: number[]
    var s__Caster_36y: number[]
    var s__Caster_37y: number[]
    var s__Caster_y: number[]
    var s__Caster_2angle: number[]
    var s__Caster_3angle: number[]
    var s__Caster_4angle: number[]
    var s__Caster_5angle: number[]
    var s__Caster_6angle: number[]
    var s__Caster_7angle: number[]
    var s__Caster_8angle: number[]
    var s__Caster_9angle: number[]
    var s__Caster_10angle: number[]
    var s__Caster_11angle: number[]
    var s__Caster_12angle: number[]
    var s__Caster_13angle: number[]
    var s__Caster_14angle: number[]
    var s__Caster_15angle: number[]
    var s__Caster_16angle: number[]
    var s__Caster_17angle: number[]
    var s__Caster_18angle: number[]
    var s__Caster_19angle: number[]
    var s__Caster_20angle: number[]
    var s__Caster_21angle: number[]
    var s__Caster_22angle: number[]
    var s__Caster_23angle: number[]
    var s__Caster_24angle: number[]
    var s__Caster_25angle: number[]
    var s__Caster_26angle: number[]
    var s__Caster_27angle: number[]
    var s__Caster_28angle: number[]
    var s__Caster_29angle: number[]
    var s__Caster_30angle: number[]
    var s__Caster_31angle: number[]
    var s__Caster_32angle: number[]
    var s__Caster_33angle: number[]
    var s__Caster_34angle: number[]
    var s__Caster_35angle: number[]
    var s__Caster_36angle: number[]
    var s__Caster_37angle: number[]
    var s__Caster_angle: number[]
    var s__Caster_2disablingTimer: timer[]
    var s__Caster_3disablingTimer: timer[]
    var s__Caster_4disablingTimer: timer[]
    var s__Caster_5disablingTimer: timer[]
    var s__Caster_6disablingTimer: timer[]
    var s__Caster_7disablingTimer: timer[]
    var s__Caster_8disablingTimer: timer[]
    var s__Caster_9disablingTimer: timer[]
    var s__Caster_10disablingTimer: timer[]
    var s__Caster_11disablingTimer: timer[]
    var s__Caster_12disablingTimer: timer[]
    var s__Caster_13disablingTimer: timer[]
    var s__Caster_14disablingTimer: timer[]
    var s__Caster_15disablingTimer: timer[]
    var s__Caster_16disablingTimer: timer[]
    var s__Caster_17disablingTimer: timer[]
    var s__Caster_18disablingTimer: timer[]
    var s__Caster_19disablingTimer: timer[]
    var s__Caster_20disablingTimer: timer[]
    var s__Caster_21disablingTimer: timer[]
    var s__Caster_22disablingTimer: timer[]
    var s__Caster_23disablingTimer: timer[]
    var s__Caster_24disablingTimer: timer[]
    var s__Caster_25disablingTimer: timer[]
    var s__Caster_26disablingTimer: timer[]
    var s__Caster_27disablingTimer: timer[]
    var s__Caster_28disablingTimer: timer[]
    var s__Caster_29disablingTimer: timer[]
    var s__Caster_30disablingTimer: timer[]
    var s__Caster_31disablingTimer: timer[]
    var s__Caster_32disablingTimer: timer[]
    var s__Caster_33disablingTimer: timer[]
    var s__Caster_34disablingTimer: timer[]
    var s__Caster_35disablingTimer: timer[]
    var s__Caster_36disablingTimer: timer[]
    var s__Caster_37disablingTimer: timer[]
    var s__Caster_disablingTimer: timer[]
    var s__Caster_2baseColorId: number[]
    var s__Caster_3baseColorId: number[]
    var s__Caster_4baseColorId: number[]
    var s__Caster_5baseColorId: number[]
    var s__Caster_6baseColorId: number[]
    var s__Caster_7baseColorId: number[]
    var s__Caster_8baseColorId: number[]
    var s__Caster_9baseColorId: number[]
    var s__Caster_10baseColorId: number[]
    var s__Caster_11baseColorId: number[]
    var s__Caster_12baseColorId: number[]
    var s__Caster_13baseColorId: number[]
    var s__Caster_14baseColorId: number[]
    var s__Caster_15baseColorId: number[]
    var s__Caster_16baseColorId: number[]
    var s__Caster_17baseColorId: number[]
    var s__Caster_18baseColorId: number[]
    var s__Caster_19baseColorId: number[]
    var s__Caster_20baseColorId: number[]
    var s__Caster_21baseColorId: number[]
    var s__Caster_22baseColorId: number[]
    var s__Caster_23baseColorId: number[]
    var s__Caster_24baseColorId: number[]
    var s__Caster_25baseColorId: number[]
    var s__Caster_26baseColorId: number[]
    var s__Caster_27baseColorId: number[]
    var s__Caster_28baseColorId: number[]
    var s__Caster_29baseColorId: number[]
    var s__Caster_30baseColorId: number[]
    var s__Caster_31baseColorId: number[]
    var s__Caster_32baseColorId: number[]
    var s__Caster_33baseColorId: number[]
    var s__Caster_34baseColorId: number[]
    var s__Caster_35baseColorId: number[]
    var s__Caster_36baseColorId: number[]
    var s__Caster_37baseColorId: number[]
    var s__Caster_baseColorId: number[]
    var s__Caster_2vcRed: number[]
    var s__Caster_3vcRed: number[]
    var s__Caster_4vcRed: number[]
    var s__Caster_5vcRed: number[]
    var s__Caster_6vcRed: number[]
    var s__Caster_7vcRed: number[]
    var s__Caster_8vcRed: number[]
    var s__Caster_9vcRed: number[]
    var s__Caster_10vcRed: number[]
    var s__Caster_11vcRed: number[]
    var s__Caster_12vcRed: number[]
    var s__Caster_13vcRed: number[]
    var s__Caster_14vcRed: number[]
    var s__Caster_15vcRed: number[]
    var s__Caster_16vcRed: number[]
    var s__Caster_17vcRed: number[]
    var s__Caster_18vcRed: number[]
    var s__Caster_19vcRed: number[]
    var s__Caster_20vcRed: number[]
    var s__Caster_21vcRed: number[]
    var s__Caster_22vcRed: number[]
    var s__Caster_23vcRed: number[]
    var s__Caster_24vcRed: number[]
    var s__Caster_25vcRed: number[]
    var s__Caster_26vcRed: number[]
    var s__Caster_27vcRed: number[]
    var s__Caster_28vcRed: number[]
    var s__Caster_29vcRed: number[]
    var s__Caster_30vcRed: number[]
    var s__Caster_31vcRed: number[]
    var s__Caster_32vcRed: number[]
    var s__Caster_33vcRed: number[]
    var s__Caster_34vcRed: number[]
    var s__Caster_35vcRed: number[]
    var s__Caster_36vcRed: number[]
    var s__Caster_37vcRed: number[]
    var s__Caster_vcRed: number[]
    var s__Caster_2vcGreen: number[]
    var s__Caster_3vcGreen: number[]
    var s__Caster_4vcGreen: number[]
    var s__Caster_5vcGreen: number[]
    var s__Caster_6vcGreen: number[]
    var s__Caster_7vcGreen: number[]
    var s__Caster_8vcGreen: number[]
    var s__Caster_9vcGreen: number[]
    var s__Caster_10vcGreen: number[]
    var s__Caster_11vcGreen: number[]
    var s__Caster_12vcGreen: number[]
    var s__Caster_13vcGreen: number[]
    var s__Caster_14vcGreen: number[]
    var s__Caster_15vcGreen: number[]
    var s__Caster_16vcGreen: number[]
    var s__Caster_17vcGreen: number[]
    var s__Caster_18vcGreen: number[]
    var s__Caster_19vcGreen: number[]
    var s__Caster_20vcGreen: number[]
    var s__Caster_21vcGreen: number[]
    var s__Caster_22vcGreen: number[]
    var s__Caster_23vcGreen: number[]
    var s__Caster_24vcGreen: number[]
    var s__Caster_25vcGreen: number[]
    var s__Caster_26vcGreen: number[]
    var s__Caster_27vcGreen: number[]
    var s__Caster_28vcGreen: number[]
    var s__Caster_29vcGreen: number[]
    var s__Caster_30vcGreen: number[]
    var s__Caster_31vcGreen: number[]
    var s__Caster_32vcGreen: number[]
    var s__Caster_33vcGreen: number[]
    var s__Caster_34vcGreen: number[]
    var s__Caster_35vcGreen: number[]
    var s__Caster_36vcGreen: number[]
    var s__Caster_37vcGreen: number[]
    var s__Caster_vcGreen: number[]
    var s__Caster_2vcBlue: number[]
    var s__Caster_3vcBlue: number[]
    var s__Caster_4vcBlue: number[]
    var s__Caster_5vcBlue: number[]
    var s__Caster_6vcBlue: number[]
    var s__Caster_7vcBlue: number[]
    var s__Caster_8vcBlue: number[]
    var s__Caster_9vcBlue: number[]
    var s__Caster_10vcBlue: number[]
    var s__Caster_11vcBlue: number[]
    var s__Caster_12vcBlue: number[]
    var s__Caster_13vcBlue: number[]
    var s__Caster_14vcBlue: number[]
    var s__Caster_15vcBlue: number[]
    var s__Caster_16vcBlue: number[]
    var s__Caster_17vcBlue: number[]
    var s__Caster_18vcBlue: number[]
    var s__Caster_19vcBlue: number[]
    var s__Caster_20vcBlue: number[]
    var s__Caster_21vcBlue: number[]
    var s__Caster_22vcBlue: number[]
    var s__Caster_23vcBlue: number[]
    var s__Caster_24vcBlue: number[]
    var s__Caster_25vcBlue: number[]
    var s__Caster_26vcBlue: number[]
    var s__Caster_27vcBlue: number[]
    var s__Caster_28vcBlue: number[]
    var s__Caster_29vcBlue: number[]
    var s__Caster_30vcBlue: number[]
    var s__Caster_31vcBlue: number[]
    var s__Caster_32vcBlue: number[]
    var s__Caster_33vcBlue: number[]
    var s__Caster_34vcBlue: number[]
    var s__Caster_35vcBlue: number[]
    var s__Caster_36vcBlue: number[]
    var s__Caster_37vcBlue: number[]
    var s__Caster_vcBlue: number[]
    var s__Caster_2vcTransparency: number[]
    var s__Caster_3vcTransparency: number[]
    var s__Caster_4vcTransparency: number[]
    var s__Caster_5vcTransparency: number[]
    var s__Caster_6vcTransparency: number[]
    var s__Caster_7vcTransparency: number[]
    var s__Caster_8vcTransparency: number[]
    var s__Caster_9vcTransparency: number[]
    var s__Caster_10vcTransparency: number[]
    var s__Caster_11vcTransparency: number[]
    var s__Caster_12vcTransparency: number[]
    var s__Caster_13vcTransparency: number[]
    var s__Caster_14vcTransparency: number[]
    var s__Caster_15vcTransparency: number[]
    var s__Caster_16vcTransparency: number[]
    var s__Caster_17vcTransparency: number[]
    var s__Caster_18vcTransparency: number[]
    var s__Caster_19vcTransparency: number[]
    var s__Caster_20vcTransparency: number[]
    var s__Caster_21vcTransparency: number[]
    var s__Caster_22vcTransparency: number[]
    var s__Caster_23vcTransparency: number[]
    var s__Caster_24vcTransparency: number[]
    var s__Caster_25vcTransparency: number[]
    var s__Caster_26vcTransparency: number[]
    var s__Caster_27vcTransparency: number[]
    var s__Caster_28vcTransparency: number[]
    var s__Caster_29vcTransparency: number[]
    var s__Caster_30vcTransparency: number[]
    var s__Caster_31vcTransparency: number[]
    var s__Caster_32vcTransparency: number[]
    var s__Caster_33vcTransparency: number[]
    var s__Caster_34vcTransparency: number[]
    var s__Caster_35vcTransparency: number[]
    var s__Caster_36vcTransparency: number[]
    var s__Caster_37vcTransparency: number[]
    var s__Caster_vcTransparency: number[]
    var s__Caster_2casterUnit: unit[]
    var s__Caster_3casterUnit: unit[]
    var s__Caster_4casterUnit: unit[]
    var s__Caster_5casterUnit: unit[]
    var s__Caster_6casterUnit: unit[]
    var s__Caster_7casterUnit: unit[]
    var s__Caster_8casterUnit: unit[]
    var s__Caster_9casterUnit: unit[]
    var s__Caster_10casterUnit: unit[]
    var s__Caster_11casterUnit: unit[]
    var s__Caster_12casterUnit: unit[]
    var s__Caster_13casterUnit: unit[]
    var s__Caster_14casterUnit: unit[]
    var s__Caster_15casterUnit: unit[]
    var s__Caster_16casterUnit: unit[]
    var s__Caster_17casterUnit: unit[]
    var s__Caster_18casterUnit: unit[]
    var s__Caster_19casterUnit: unit[]
    var s__Caster_20casterUnit: unit[]
    var s__Caster_21casterUnit: unit[]
    var s__Caster_22casterUnit: unit[]
    var s__Caster_23casterUnit: unit[]
    var s__Caster_24casterUnit: unit[]
    var s__Caster_25casterUnit: unit[]
    var s__Caster_26casterUnit: unit[]
    var s__Caster_27casterUnit: unit[]
    var s__Caster_28casterUnit: unit[]
    var s__Caster_29casterUnit: unit[]
    var s__Caster_30casterUnit: unit[]
    var s__Caster_31casterUnit: unit[]
    var s__Caster_32casterUnit: unit[]
    var s__Caster_33casterUnit: unit[]
    var s__Caster_34casterUnit: unit[]
    var s__Caster_35casterUnit: unit[]
    var s__Caster_36casterUnit: unit[]
    var s__Caster_37casterUnit: unit[]
    var s__Caster_casterUnit: unit[]
    var s__Caster_2trg_unitWithinRange: trigger[]
    var s__Caster_3trg_unitWithinRange: trigger[]
    var s__Caster_4trg_unitWithinRange: trigger[]
    var s__Caster_5trg_unitWithinRange: trigger[]
    var s__Caster_6trg_unitWithinRange: trigger[]
    var s__Caster_7trg_unitWithinRange: trigger[]
    var s__Caster_8trg_unitWithinRange: trigger[]
    var s__Caster_9trg_unitWithinRange: trigger[]
    var s__Caster_10trg_unitWithinRange: trigger[]
    var s__Caster_11trg_unitWithinRange: trigger[]
    var s__Caster_12trg_unitWithinRange: trigger[]
    var s__Caster_13trg_unitWithinRange: trigger[]
    var s__Caster_14trg_unitWithinRange: trigger[]
    var s__Caster_15trg_unitWithinRange: trigger[]
    var s__Caster_16trg_unitWithinRange: trigger[]
    var s__Caster_17trg_unitWithinRange: trigger[]
    var s__Caster_18trg_unitWithinRange: trigger[]
    var s__Caster_19trg_unitWithinRange: trigger[]
    var s__Caster_20trg_unitWithinRange: trigger[]
    var s__Caster_21trg_unitWithinRange: trigger[]
    var s__Caster_22trg_unitWithinRange: trigger[]
    var s__Caster_23trg_unitWithinRange: trigger[]
    var s__Caster_24trg_unitWithinRange: trigger[]
    var s__Caster_25trg_unitWithinRange: trigger[]
    var s__Caster_26trg_unitWithinRange: trigger[]
    var s__Caster_27trg_unitWithinRange: trigger[]
    var s__Caster_28trg_unitWithinRange: trigger[]
    var s__Caster_29trg_unitWithinRange: trigger[]
    var s__Caster_30trg_unitWithinRange: trigger[]
    var s__Caster_31trg_unitWithinRange: trigger[]
    var s__Caster_32trg_unitWithinRange: trigger[]
    var s__Caster_33trg_unitWithinRange: trigger[]
    var s__Caster_34trg_unitWithinRange: trigger[]
    var s__Caster_35trg_unitWithinRange: trigger[]
    var s__Caster_36trg_unitWithinRange: trigger[]
    var s__Caster_37trg_unitWithinRange: trigger[]
    var s__Caster_trg_unitWithinRange: trigger[]
    var s___Caster_escapersInRange: number[]
    var s__2_Caster_escapersInRange: number[]
    var s__3_Caster_escapersInRange: number[]
    var s__4_Caster_escapersInRange: number[]
    var s__5_Caster_escapersInRange: number[]
    var s__6_Caster_escapersInRange: number[]
    var s__7_Caster_escapersInRange: number[]
    var s__8_Caster_escapersInRange: number[]
    var s__9_Caster_escapersInRange: number[]
    var s__10_Caster_escapersInRange: number[]
    var s__11_Caster_escapersInRange: number[]
    var s__12_Caster_escapersInRange: number[]
    var s__13_Caster_escapersInRange: number[]
    var s__14_Caster_escapersInRange: number[]
    var s__15_Caster_escapersInRange: number[]
    var s__16_Caster_escapersInRange: number[]
    var s__17_Caster_escapersInRange: number[]
    var s__18_Caster_escapersInRange: number[]
    var s__19_Caster_escapersInRange: number[]
    var s__20_Caster_escapersInRange: number[]
    var s__21_Caster_escapersInRange: number[]
    var s__22_Caster_escapersInRange: number[]
    var s__23_Caster_escapersInRange: number[]
    var s__24_Caster_escapersInRange: number[]
    var s__25_Caster_escapersInRange: number[]
    var s__26_Caster_escapersInRange: number[]
    var s__27_Caster_escapersInRange: number[]
    var s__28_Caster_escapersInRange: number[]
    var s__29_Caster_escapersInRange: number[]
    var s__30_Caster_escapersInRange: number[]
    var s__31_Caster_escapersInRange: number[]
    var s__32_Caster_escapersInRange: number[]
    var s__33_Caster_escapersInRange: number[]
    var s__34_Caster_escapersInRange: number[]
    var s__35_Caster_escapersInRange: number[]
    var s__36_Caster_escapersInRange: number[]
    var s__37_Caster_escapersInRange: number[]
    const s___Caster_escapersInRange_size: number
    var s__Caster_2escapersInRange: number[]
    var s__Caster_3escapersInRange: number[]
    var s__Caster_4escapersInRange: number[]
    var s__Caster_5escapersInRange: number[]
    var s__Caster_6escapersInRange: number[]
    var s__Caster_7escapersInRange: number[]
    var s__Caster_8escapersInRange: number[]
    var s__Caster_9escapersInRange: number[]
    var s__Caster_10escapersInRange: number[]
    var s__Caster_11escapersInRange: number[]
    var s__Caster_12escapersInRange: number[]
    var s__Caster_13escapersInRange: number[]
    var s__Caster_14escapersInRange: number[]
    var s__Caster_15escapersInRange: number[]
    var s__Caster_16escapersInRange: number[]
    var s__Caster_17escapersInRange: number[]
    var s__Caster_18escapersInRange: number[]
    var s__Caster_19escapersInRange: number[]
    var s__Caster_20escapersInRange: number[]
    var s__Caster_21escapersInRange: number[]
    var s__Caster_22escapersInRange: number[]
    var s__Caster_23escapersInRange: number[]
    var s__Caster_24escapersInRange: number[]
    var s__Caster_25escapersInRange: number[]
    var s__Caster_26escapersInRange: number[]
    var s__Caster_27escapersInRange: number[]
    var s__Caster_28escapersInRange: number[]
    var s__Caster_29escapersInRange: number[]
    var s__Caster_30escapersInRange: number[]
    var s__Caster_31escapersInRange: number[]
    var s__Caster_32escapersInRange: number[]
    var s__Caster_33escapersInRange: number[]
    var s__Caster_34escapersInRange: number[]
    var s__Caster_35escapersInRange: number[]
    var s__Caster_36escapersInRange: number[]
    var s__Caster_37escapersInRange: number[]
    var s__Caster_escapersInRange: number[]
    var s__Caster_2nbEscapersInRange: number[]
    var s__Caster_3nbEscapersInRange: number[]
    var s__Caster_4nbEscapersInRange: number[]
    var s__Caster_5nbEscapersInRange: number[]
    var s__Caster_6nbEscapersInRange: number[]
    var s__Caster_7nbEscapersInRange: number[]
    var s__Caster_8nbEscapersInRange: number[]
    var s__Caster_9nbEscapersInRange: number[]
    var s__Caster_10nbEscapersInRange: number[]
    var s__Caster_11nbEscapersInRange: number[]
    var s__Caster_12nbEscapersInRange: number[]
    var s__Caster_13nbEscapersInRange: number[]
    var s__Caster_14nbEscapersInRange: number[]
    var s__Caster_15nbEscapersInRange: number[]
    var s__Caster_16nbEscapersInRange: number[]
    var s__Caster_17nbEscapersInRange: number[]
    var s__Caster_18nbEscapersInRange: number[]
    var s__Caster_19nbEscapersInRange: number[]
    var s__Caster_20nbEscapersInRange: number[]
    var s__Caster_21nbEscapersInRange: number[]
    var s__Caster_22nbEscapersInRange: number[]
    var s__Caster_23nbEscapersInRange: number[]
    var s__Caster_24nbEscapersInRange: number[]
    var s__Caster_25nbEscapersInRange: number[]
    var s__Caster_26nbEscapersInRange: number[]
    var s__Caster_27nbEscapersInRange: number[]
    var s__Caster_28nbEscapersInRange: number[]
    var s__Caster_29nbEscapersInRange: number[]
    var s__Caster_30nbEscapersInRange: number[]
    var s__Caster_31nbEscapersInRange: number[]
    var s__Caster_32nbEscapersInRange: number[]
    var s__Caster_33nbEscapersInRange: number[]
    var s__Caster_34nbEscapersInRange: number[]
    var s__Caster_35nbEscapersInRange: number[]
    var s__Caster_36nbEscapersInRange: number[]
    var s__Caster_37nbEscapersInRange: number[]
    var s__Caster_nbEscapersInRange: number[]
    var s__Caster_2canShoot: boolean[]
    var s__Caster_3canShoot: boolean[]
    var s__Caster_4canShoot: boolean[]
    var s__Caster_5canShoot: boolean[]
    var s__Caster_6canShoot: boolean[]
    var s__Caster_7canShoot: boolean[]
    var s__Caster_8canShoot: boolean[]
    var s__Caster_9canShoot: boolean[]
    var s__Caster_10canShoot: boolean[]
    var s__Caster_11canShoot: boolean[]
    var s__Caster_12canShoot: boolean[]
    var s__Caster_13canShoot: boolean[]
    var s__Caster_14canShoot: boolean[]
    var s__Caster_15canShoot: boolean[]
    var s__Caster_16canShoot: boolean[]
    var s__Caster_17canShoot: boolean[]
    var s__Caster_18canShoot: boolean[]
    var s__Caster_19canShoot: boolean[]
    var s__Caster_20canShoot: boolean[]
    var s__Caster_21canShoot: boolean[]
    var s__Caster_22canShoot: boolean[]
    var s__Caster_23canShoot: boolean[]
    var s__Caster_24canShoot: boolean[]
    var s__Caster_25canShoot: boolean[]
    var s__Caster_26canShoot: boolean[]
    var s__Caster_27canShoot: boolean[]
    var s__Caster_28canShoot: boolean[]
    var s__Caster_29canShoot: boolean[]
    var s__Caster_30canShoot: boolean[]
    var s__Caster_31canShoot: boolean[]
    var s__Caster_32canShoot: boolean[]
    var s__Caster_33canShoot: boolean[]
    var s__Caster_34canShoot: boolean[]
    var s__Caster_35canShoot: boolean[]
    var s__Caster_36canShoot: boolean[]
    var s__Caster_37canShoot: boolean[]
    var s__Caster_canShoot: boolean[]
    var s__Caster_2t: timer[]
    var s__Caster_3t: timer[]
    var s__Caster_4t: timer[]
    var s__Caster_5t: timer[]
    var s__Caster_6t: timer[]
    var s__Caster_7t: timer[]
    var s__Caster_8t: timer[]
    var s__Caster_9t: timer[]
    var s__Caster_10t: timer[]
    var s__Caster_11t: timer[]
    var s__Caster_12t: timer[]
    var s__Caster_13t: timer[]
    var s__Caster_14t: timer[]
    var s__Caster_15t: timer[]
    var s__Caster_16t: timer[]
    var s__Caster_17t: timer[]
    var s__Caster_18t: timer[]
    var s__Caster_19t: timer[]
    var s__Caster_20t: timer[]
    var s__Caster_21t: timer[]
    var s__Caster_22t: timer[]
    var s__Caster_23t: timer[]
    var s__Caster_24t: timer[]
    var s__Caster_25t: timer[]
    var s__Caster_26t: timer[]
    var s__Caster_27t: timer[]
    var s__Caster_28t: timer[]
    var s__Caster_29t: timer[]
    var s__Caster_30t: timer[]
    var s__Caster_31t: timer[]
    var s__Caster_32t: timer[]
    var s__Caster_33t: timer[]
    var s__Caster_34t: timer[]
    var s__Caster_35t: timer[]
    var s__Caster_36t: timer[]
    var s__Caster_37t: timer[]
    var s__Caster_t: timer[]
    var s__Caster_2enabled: boolean[]
    var s__Caster_3enabled: boolean[]
    var s__Caster_4enabled: boolean[]
    var s__Caster_5enabled: boolean[]
    var s__Caster_6enabled: boolean[]
    var s__Caster_7enabled: boolean[]
    var s__Caster_8enabled: boolean[]
    var s__Caster_9enabled: boolean[]
    var s__Caster_10enabled: boolean[]
    var s__Caster_11enabled: boolean[]
    var s__Caster_12enabled: boolean[]
    var s__Caster_13enabled: boolean[]
    var s__Caster_14enabled: boolean[]
    var s__Caster_15enabled: boolean[]
    var s__Caster_16enabled: boolean[]
    var s__Caster_17enabled: boolean[]
    var s__Caster_18enabled: boolean[]
    var s__Caster_19enabled: boolean[]
    var s__Caster_20enabled: boolean[]
    var s__Caster_21enabled: boolean[]
    var s__Caster_22enabled: boolean[]
    var s__Caster_23enabled: boolean[]
    var s__Caster_24enabled: boolean[]
    var s__Caster_25enabled: boolean[]
    var s__Caster_26enabled: boolean[]
    var s__Caster_27enabled: boolean[]
    var s__Caster_28enabled: boolean[]
    var s__Caster_29enabled: boolean[]
    var s__Caster_30enabled: boolean[]
    var s__Caster_31enabled: boolean[]
    var s__Caster_32enabled: boolean[]
    var s__Caster_33enabled: boolean[]
    var s__Caster_34enabled: boolean[]
    var s__Caster_35enabled: boolean[]
    var s__Caster_36enabled: boolean[]
    var s__Caster_37enabled: boolean[]
    var s__Caster_enabled: boolean[]
    const si__ClearMobArray: number
    var si__ClearMobArray_F: number
    var si__ClearMobArray_I: number
    var si__ClearMobArray_V: number[]
    var s___ClearMobArray_clearMobs: number[]
    const s___ClearMobArray_clearMobs_size: number
    var s__ClearMobArray_clearMobs: number[]
    var s__ClearMobArray_lastInstance: number[]
    const si__MakeClearMob: number
    var s__MakeClearMob_disableDuration: number[]
    var s__MakeClearMob_clearMob: number[]
    var s___MakeClearMob_clickedMobs: number[]
    const s___MakeClearMob_clickedMobs_size: number
    var s__MakeClearMob_clickedMobs: number[]
    var si__MakeClearMob_arrI: number
    var si__MakeClearMob_arrN: number
    var si__MakeClearMob_arr: number[]
    var si__MakeClearMob_arrV: number[]
    var s__MakeClearMob_lastClickedMobInd: number[]
    var s__MakeClearMob_pointeurClickedMob: number[]
    const si__MakeDeleteClearMob: number
    const si__MonsterMultiplePatrolsArray: number
    var si__MonsterMultiplePatrolsArray_F: number
    var si__MonsterMultiplePatrolsArray_I: number
    var si__MonsterMultiplePatrolsArray_V: number[]
    var si__MonsterMultiplePatrolsArray_2V: number[]
    var si__MonsterMultiplePatrolsArray_3V: number[]
    var si__MonsterMultiplePatrolsArray_4V: number[]
    var s___MonsterMultiplePatrolsArray_monsters: number[]
    var s__2_MonsterMultiplePatrolsArray_monsters: number[]
    var s__3_MonsterMultiplePatrolsArray_monsters: number[]
    var s__4_MonsterMultiplePatrolsArray_monsters: number[]
    const s___MonsterMultiplePatrolsArray_monsters_size: number
    var s__MonsterMultiplePatrolsArray_2monsters: number[]
    var s__MonsterMultiplePatrolsArray_3monsters: number[]
    var s__MonsterMultiplePatrolsArray_4monsters: number[]
    var s__MonsterMultiplePatrolsArray_monsters: number[]
    var s__MonsterMultiplePatrolsArray_2lastInstance: number[]
    var s__MonsterMultiplePatrolsArray_3lastInstance: number[]
    var s__MonsterMultiplePatrolsArray_4lastInstance: number[]
    var s__MonsterMultiplePatrolsArray_lastInstance: number[]
    const si__MonsterNoMoveArray: number
    var si__MonsterNoMoveArray_F: number
    var si__MonsterNoMoveArray_I: number
    var si__MonsterNoMoveArray_V: number[]
    var si__MonsterNoMoveArray_2V: number[]
    var si__MonsterNoMoveArray_3V: number[]
    var si__MonsterNoMoveArray_4V: number[]
    var s___MonsterNoMoveArray_monsters: number[]
    var s__2_MonsterNoMoveArray_monsters: number[]
    var s__3_MonsterNoMoveArray_monsters: number[]
    var s__4_MonsterNoMoveArray_monsters: number[]
    const s___MonsterNoMoveArray_monsters_size: number
    var s__MonsterNoMoveArray_2monsters: number[]
    var s__MonsterNoMoveArray_3monsters: number[]
    var s__MonsterNoMoveArray_4monsters: number[]
    var s__MonsterNoMoveArray_monsters: number[]
    var s__MonsterNoMoveArray_2lastInstance: number[]
    var s__MonsterNoMoveArray_3lastInstance: number[]
    var s__MonsterNoMoveArray_4lastInstance: number[]
    var s__MonsterNoMoveArray_lastInstance: number[]
    const si__MonsterSimplePatrolArray: number
    var si__MonsterSimplePatrolArray_F: number
    var si__MonsterSimplePatrolArray_I: number
    var si__MonsterSimplePatrolArray_V: number[]
    var si__MonsterSimplePatrolArray_2V: number[]
    var si__MonsterSimplePatrolArray_3V: number[]
    var si__MonsterSimplePatrolArray_4V: number[]
    var s___MonsterSimplePatrolArray_monsters: number[]
    var s__2_MonsterSimplePatrolArray_monsters: number[]
    var s__3_MonsterSimplePatrolArray_monsters: number[]
    var s__4_MonsterSimplePatrolArray_monsters: number[]
    const s___MonsterSimplePatrolArray_monsters_size: number
    var s__MonsterSimplePatrolArray_2monsters: number[]
    var s__MonsterSimplePatrolArray_3monsters: number[]
    var s__MonsterSimplePatrolArray_4monsters: number[]
    var s__MonsterSimplePatrolArray_monsters: number[]
    var s__MonsterSimplePatrolArray_2lastInstance: number[]
    var s__MonsterSimplePatrolArray_3lastInstance: number[]
    var s__MonsterSimplePatrolArray_4lastInstance: number[]
    var s__MonsterSimplePatrolArray_lastInstance: number[]
    const si__MonsterTeleportArray: number
    var si__MonsterTeleportArray_F: number
    var si__MonsterTeleportArray_I: number
    var si__MonsterTeleportArray_V: number[]
    var si__MonsterTeleportArray_2V: number[]
    var si__MonsterTeleportArray_3V: number[]
    var si__MonsterTeleportArray_4V: number[]
    var s___MonsterTeleportArray_monsters: number[]
    var s__2_MonsterTeleportArray_monsters: number[]
    var s__3_MonsterTeleportArray_monsters: number[]
    var s__4_MonsterTeleportArray_monsters: number[]
    const s___MonsterTeleportArray_monsters_size: number
    var s__MonsterTeleportArray_2monsters: number[]
    var s__MonsterTeleportArray_3monsters: number[]
    var s__MonsterTeleportArray_4monsters: number[]
    var s__MonsterTeleportArray_monsters: number[]
    var s__MonsterTeleportArray_2lastInstance: number[]
    var s__MonsterTeleportArray_3lastInstance: number[]
    var s__MonsterTeleportArray_4lastInstance: number[]
    var s__MonsterTeleportArray_lastInstance: number[]
    const si__CasterArray: number
    var si__CasterArray_F: number
    var si__CasterArray_I: number
    var si__CasterArray_V: number[]
    var si__CasterArray_2V: number[]
    var si__CasterArray_3V: number[]
    var si__CasterArray_4V: number[]
    var s___CasterArray_casters: number[]
    var s__2_CasterArray_casters: number[]
    var s__3_CasterArray_casters: number[]
    var s__4_CasterArray_casters: number[]
    const s___CasterArray_casters_size: number
    var s__CasterArray_2casters: number[]
    var s__CasterArray_3casters: number[]
    var s__CasterArray_4casters: number[]
    var s__CasterArray_casters: number[]
    var s__CasterArray_2lastInstance: number[]
    var s__CasterArray_3lastInstance: number[]
    var s__CasterArray_4lastInstance: number[]
    var s__CasterArray_lastInstance: number[]
    const si__EscaperSavedCommands: number
    var si__EscaperSavedCommands_F: number
    var si__EscaperSavedCommands_I: number
    var si__EscaperSavedCommands_V: number[]
    var s__EscaperSavedCommands_savedCommands: hashtable[]
    var s__TimerUtils__data: number[]
    var s__TimerUtils__tT: timer[]
    var s__ReinitTerrainsPositions___TERRAIN_SAVE: number[]
    var s__2ReinitTerrainsPositions___TERRAIN_SAVE: number[]
    var s__3ReinitTerrainsPositions___TERRAIN_SAVE: number[]
    var s__4ReinitTerrainsPositions___TERRAIN_SAVE: number[]
    var s__5ReinitTerrainsPositions___TERRAIN_SAVE: number[]
    var s__6ReinitTerrainsPositions___TERRAIN_SAVE: number[]
    var s__7ReinitTerrainsPositions___TERRAIN_SAVE: number[]
    var s__8ReinitTerrainsPositions___TERRAIN_SAVE: number[]
    var s__9ReinitTerrainsPositions___TERRAIN_SAVE: number[]
    var s__10ReinitTerrainsPositions___TERRAIN_SAVE: number[]
    var s__11ReinitTerrainsPositions___TERRAIN_SAVE: number[]
    var s__12ReinitTerrainsPositions___TERRAIN_SAVE: number[]
    var s__13ReinitTerrainsPositions___TERRAIN_SAVE: number[]
    var s__14ReinitTerrainsPositions___TERRAIN_SAVE: number[]
    var s__15ReinitTerrainsPositions___TERRAIN_SAVE: number[]
    var s__16ReinitTerrainsPositions___TERRAIN_SAVE: number[]
    var s__17ReinitTerrainsPositions___TERRAIN_SAVE: number[]
    var s__18ReinitTerrainsPositions___TERRAIN_SAVE: number[]
    var s__19ReinitTerrainsPositions___TERRAIN_SAVE: number[]
    var s__20ReinitTerrainsPositions___TERRAIN_SAVE: number[]
    var s__21ReinitTerrainsPositions___TERRAIN_SAVE: number[]
    var s__22ReinitTerrainsPositions___TERRAIN_SAVE: number[]
    var s__23ReinitTerrainsPositions___TERRAIN_SAVE: number[]
    var s__24ReinitTerrainsPositions___TERRAIN_SAVE: number[]
    var s__25ReinitTerrainsPositions___TERRAIN_SAVE: number[]
    var s__26ReinitTerrainsPositions___TERRAIN_SAVE: number[]
    var s__27ReinitTerrainsPositions___TERRAIN_SAVE: number[]
    var s__28ReinitTerrainsPositions___TERRAIN_SAVE: number[]
    var s__29ReinitTerrainsPositions___TERRAIN_SAVE: number[]
    var s__SaveLoadTerrainWithoutName___terrainSave: number[]
    var s__2SaveLoadTerrainWithoutName___terrainSave: number[]
    var s__3SaveLoadTerrainWithoutName___terrainSave: number[]
    var s__4SaveLoadTerrainWithoutName___terrainSave: number[]
    var s__5SaveLoadTerrainWithoutName___terrainSave: number[]
    var s__6SaveLoadTerrainWithoutName___terrainSave: number[]
    var s__7SaveLoadTerrainWithoutName___terrainSave: number[]
    var s__8SaveLoadTerrainWithoutName___terrainSave: number[]
    var s__9SaveLoadTerrainWithoutName___terrainSave: number[]
    var s__10SaveLoadTerrainWithoutName___terrainSave: number[]
    var s__11SaveLoadTerrainWithoutName___terrainSave: number[]
    var s__12SaveLoadTerrainWithoutName___terrainSave: number[]
    var s__13SaveLoadTerrainWithoutName___terrainSave: number[]
    var s__14SaveLoadTerrainWithoutName___terrainSave: number[]
    var s__15SaveLoadTerrainWithoutName___terrainSave: number[]
    var s__16SaveLoadTerrainWithoutName___terrainSave: number[]
    var s__17SaveLoadTerrainWithoutName___terrainSave: number[]
    var s__18SaveLoadTerrainWithoutName___terrainSave: number[]
    var s__19SaveLoadTerrainWithoutName___terrainSave: number[]
    var s__20SaveLoadTerrainWithoutName___terrainSave: number[]
    var s__21SaveLoadTerrainWithoutName___terrainSave: number[]
    var s__22SaveLoadTerrainWithoutName___terrainSave: number[]
    var s__23SaveLoadTerrainWithoutName___terrainSave: number[]
    var s__24SaveLoadTerrainWithoutName___terrainSave: number[]
    var s__25SaveLoadTerrainWithoutName___terrainSave: number[]
    var s__26SaveLoadTerrainWithoutName___terrainSave: number[]
    var s__27SaveLoadTerrainWithoutName___terrainSave: number[]
    var s__28SaveLoadTerrainWithoutName___terrainSave: number[]
    var s__29SaveLoadTerrainWithoutName___terrainSave: number[]
    var s__s__MonsterMultiplePatrols_X: number[]
    var s__s__MonsterMultiplePatrols_Y: number[]
    var s__s__MonsterTeleport_X: number[]
    var s__s__MonsterTeleport_Y: number[]
    var si__TerrainType_type: number[]
    var st__TerrainType_onDestroy: trigger[]
    var st__Meteor_onDestroy: trigger
    var st__MonsterOrCasterStack_onDestroy: trigger
    var st__MonsterOrCasterStack_destroy: trigger
    var st__Stack_onDestroy: trigger
    var st__Trigger_onDestroy: trigger
    var st__TriggerArray_onDestroy: trigger
    var st__VisibilityModifier_onDestroy: trigger
    var st__CasterType_onDestroy: trigger
    var st__MakeLastActions_onDestroy: trigger
    var st__MakeMeteorAction_getLevel: trigger
    var st__MakeMonsterAction_getLevel: trigger
    var st__MakeTerrainHeightAction_apply: trigger
    var st__MakeVisibilityModifierAction_getLevel: trigger
    var st__MeteorArray_setMeteorNull: trigger
    var st__MeteorArray_onDestroy: trigger
    var st__MonsterType_onDestroy: trigger
    var st__SoundUtils__soundrecycler_onDestroy: trigger
    var st__StringArrayForCache_create: trigger
    var st__StringArrayForCache_push: trigger
    var st__StringArrayForCache_writeInCache: trigger
    var st__VisibilityModifierArray_onDestroy: trigger
    var st__VisibilityModifierArray_count: trigger
    var st__VisibilityModifierArray_get: trigger
    var st__VisibilityModifierArray_getLastInstanceId: trigger
    var st__VisibilityModifierArray_setNull: trigger
    var st__Lives_getLeaderboard: trigger
    var st__Lives_onDestroy: trigger
    var st__TerrainType_getTerrainTypeId: trigger
    var st__TerrainType_getKind: trigger
    var st__CasterShot_create: trigger
    var st__CasterShot_onDestroy: trigger
    var st__CasterShot_destroy: trigger
    var st__EscaperEffect_onDestroy: trigger
    var st__MakeTerrainHorizontalSymmetryAction_applySymmetry: trigger
    var st__MakeTerrainVerticalSymmetryAction_applySymmetry: trigger
    var st__MonsterSpawn_onDestroy: trigger
    var st__MonsterSpawn_startMobMovement: trigger
    var st__MonsterSpawn_createMob: trigger
    var st__MonsterSpawn_toString: trigger
    var st__TerrainTypeSlide_getSlideSpeed: trigger
    var st__TerrainTypeSlide_getCanTurn: trigger
    var st__TerrainTypeWalk_getWalkSpeed: trigger
    var st__EscaperEffectArray_onDestroy: trigger
    var st__MonsterSpawnArray_get: trigger
    var st__MonsterSpawnArray_getLastInstanceId: trigger
    var st__MonsterSpawnArray_count: trigger
    var st__MonsterSpawnArray_onDestroy: trigger
    var st__MonsterSpawnArray_setMonsterSpawnNull: trigger
    var st__KillingTimers_onDestroy: trigger
    var st__Escaper_onDestroy: trigger
    var st__Escaper_enableSlide: trigger
    var st__Escaper_enableCheckTerrain: trigger
    var st__Escaper_isSliding: trigger
    var st__Escaper_doesCheckTerrain: trigger
    var st__Escaper_moveHero: trigger
    var st__Escaper_moveInvisUnit: trigger
    var st__Escaper_getHero: trigger
    var st__Escaper_isAlive: trigger
    var st__Escaper_kill: trigger
    var st__Escaper_pause: trigger
    var st__Escaper_reverse: trigger
    var st__Escaper_setIsHeroSelectedForPlayer: trigger
    var st__Escaper_destroyTerrainKillEffect: trigger
    var st__Escaper_getLastTerrainType: trigger
    var st__Escaper_setLastTerrainType: trigger
    var st__Escaper_setSlideSpeed: trigger
    var st__Escaper_setWalkSpeed: trigger
    var st__Escaper_getSlideSpeed: trigger
    var st__Escaper_getRealSlideSpeed: trigger
    var st__Escaper_getWalkSpeed: trigger
    var st__Escaper_isAbsoluteSlideSpeed: trigger
    var st__Escaper_isAbsoluteWalkSpeed: trigger
    var st__Escaper_isGodModeOn: trigger
    var st__Escaper_setBaseColorDisco: trigger
    var st__Escaper_getBaseColor: trigger
    var st__Escaper_setVcRed: trigger
    var st__Escaper_setVcGreen: trigger
    var st__Escaper_setVcBlue: trigger
    var st__Escaper_setVcTransparency: trigger
    var st__Escaper_getVcRed: trigger
    var st__Escaper_getVcGreen: trigger
    var st__Escaper_getVcBlue: trigger
    var st__Escaper_getVcTransparency: trigger
    var st__Escaper_getPlayer: trigger
    var st__Escaper_getMakingLevel: trigger
    var st__Escaper_destroyMake: trigger
    var st__Escaper_destroyAllSavedActions: trigger
    var st__Escaper_getLastZ: trigger
    var st__Escaper_setLastZ: trigger
    var st__Escaper_getOldDiffZ: trigger
    var st__Escaper_setOldDiffZ: trigger
    var st__Escaper_getSpeedZ: trigger
    var st__Escaper_setSpeedZ: trigger
    var st__Escaper_setCoopInvul: trigger
    var st__Escaper_refreshCerclePosition: trigger
    var st__TerrainTypeDeath_getKillingEffectStr: trigger
    var st__TerrainTypeDeath_getTimeToKill: trigger
    var st__TerrainTypeDeath_killEscaper: trigger
    var st__TerrainTypeDeath_getTimer: trigger
    var st__TerrainTypeDeath_getToleranceDist: trigger
    var st__EscaperArray_get: trigger
    var st__EscaperArray_nullify: trigger
    var st__Start_getRandomX: trigger
    var st__Start_getRandomY: trigger
    var st__Level_activate: trigger
    var st__Level_getStart: trigger
    var st__Level_getStartRandomX: trigger
    var st__Level_getStartRandomY: trigger
    var st__Level_newStart: trigger
    var st__Level_newEnd: trigger
    var st__Level_getEnd: trigger
    var st__Level_getNbMonsters: trigger
    var st__Level_onDestroy: trigger
    var st__Level_recreateMonstersOfType: trigger
    var st__Level_refreshCastersOfType: trigger
    var st__Level_getId: trigger
    var st__Level_setNbLivesEarned: trigger
    var st__Level_getNbLives: trigger
    var st__Level_newVisibilityModifier: trigger
    var st__Level_newVisibilityModifierFromExisting: trigger
    var st__Level_removeVisibilities: trigger
    var st__Level_activateVisibilities: trigger
    var st__Level_setStartMessage: trigger
    var st__Level_getStartMessage: trigger
    var st__TerrainTypeArray_get: trigger
    var st__TerrainTypeArray_getTerrainType: trigger
    var st__TerrainTypeArray_isTerrainTypeIdAlreadyUsed: trigger
    var st__TerrainTypeArray_isLabelAlreadyUsed: trigger
    var st__TerrainTypeArray_newWalk: trigger
    var st__TerrainTypeArray_newDeath: trigger
    var st__TerrainTypeArray_newSlide: trigger
    var st__TerrainTypeArray_getWalk: trigger
    var st__TerrainTypeArray_getDeath: trigger
    var st__TerrainTypeArray_getSlide: trigger
    var st__TerrainTypeArray_displayForPlayer: trigger
    var st__TerrainTypeArray_saveInCache: trigger
    var st__TerrainTypeArray_count: trigger
    var st__TerrainTypeArray_getMainTileset: trigger
    var st__ClearMob_getTriggerMob: trigger
    var st__ClearMob_getBlockMobs: trigger
    var st__ClearMob_initialize: trigger
    var st__ClearMob_onDestroy: trigger
    var st__ClearMob_isBeingActivated: trigger
    var st__LevelArray_goToLevel: trigger
    var st__LevelArray_goToNextLevel: trigger
    var st__LevelArray_restartTheGame: trigger
    var st__LevelArray_new: trigger
    var st__LevelArray_destroyLastLevel: trigger
    var st__LevelArray_count: trigger
    var st__LevelArray_getCurrentLevel: trigger
    var st__LevelArray_get: trigger
    var st__LevelArray_getLevelFromMonsterSpawnArray: trigger
    var st__LevelArray_getLevelFromMeteorArray: trigger
    var st__LevelArray_getLevelFromVisibilityModifierArray: trigger
    var st__LevelArray_removeMonstersOfType: trigger
    var st__LevelArray_removeCastersOfType: trigger
    var st__LevelArray_getLastLevelId: trigger
    var st__LevelArray_getNbMonsters: trigger
    var st__MakeCaster_getCasterType: trigger
    var st__MakeCaster_getAngle: trigger
    var st__MakeCaster_create: trigger
    var st__MakeDeleteCasters_isLastLocSavedUsed: trigger
    var st__MakeDeleteCasters_create: trigger
    var st__MakeDeleteCasters_saveLoc: trigger
    var st__MakeDeleteCasters_unsaveLocDefinitely: trigger
    var st__MakeDeleteCasters_getMode: trigger
    var st__MakeDeleteMeteors_isLastLocSavedUsed: trigger
    var st__MakeDeleteMeteors_create: trigger
    var st__MakeDeleteMeteors_saveLoc: trigger
    var st__MakeDeleteMeteors_unsaveLocDefinitely: trigger
    var st__MakeDeleteMeteors_getMode: trigger
    var st__MakeDeleteMonsters_isLastLocSavedUsed: trigger
    var st__MakeDeleteMonsters_create: trigger
    var st__MakeDeleteMonsters_saveLoc: trigger
    var st__MakeDeleteMonsters_unsaveLocDefinitely: trigger
    var st__MakeDeleteMonsters_getMode: trigger
    var st__MakeEnd_create: trigger
    var st__MakeEnd_saveLoc: trigger
    var st__MakeEnd_isLastLocSavedUsed: trigger
    var st__MakeExchangeTerrains_create: trigger
    var st__MakeExchangeTerrains_saveLoc: trigger
    var st__MakeExchangeTerrains_unsaveLocDefinitely: trigger
    var st__MakeExchangeTerrains_isLastLocSavedUsed: trigger
    var st__MakeGetTerrainType_create: trigger
    var st__MakeGetUnitTeleportPeriod_create: trigger
    var st__MakeMeteor_create: trigger
    var st__MakeMonsterMultiplePatrols_getMonsterType: trigger
    var st__MakeMonsterMultiplePatrols_getMode: trigger
    var st__MakeMonsterMultiplePatrols_getMonster: trigger
    var st__MakeMonsterMultiplePatrols_create: trigger
    var st__MakeMonsterMultiplePatrols_nextMonster: trigger
    var st__MakeMonsterMultiplePatrols_getLocPointeur: trigger
    var st__MakeMonsterMultiplePatrols_saveLoc: trigger
    var st__MakeMonsterMultiplePatrols_setMonster: trigger
    var st__MakeMonsterNoMove_getMonsterType: trigger
    var st__MakeMonsterNoMove_getFacingAngle: trigger
    var st__MakeMonsterNoMove_create: trigger
    var st__MakeMonsterSimplePatrol_getMonsterType: trigger
    var st__MakeMonsterSimplePatrol_create: trigger
    var st__MakeMonsterSimplePatrol_saveLoc: trigger
    var st__MakeMonsterSimplePatrol_unsaveLoc: trigger
    var st__MakeMonsterSimplePatrol_unsaveLocDefinitely: trigger
    var st__MakeMonsterSimplePatrol_isLastLocSavedUsed: trigger
    var st__MakeMonsterSimplePatrol_getMode: trigger
    var st__MakeMonsterSpawn_create: trigger
    var st__MakeMonsterSpawn_saveLoc: trigger
    var st__MakeMonsterSpawn_isLastLocSavedUsed: trigger
    var st__MakeMonsterTeleport_getMonsterType: trigger
    var st__MakeMonsterTeleport_getPeriod: trigger
    var st__MakeMonsterTeleport_getAngle: trigger
    var st__MakeMonsterTeleport_getMode: trigger
    var st__MakeMonsterTeleport_getMonster: trigger
    var st__MakeMonsterTeleport_create: trigger
    var st__MakeMonsterTeleport_nextMonster: trigger
    var st__MakeMonsterTeleport_addWaitPeriod: trigger
    var st__MakeMonsterTeleport_addHidePeriod: trigger
    var st__MakeMonsterTeleport_getLocPointeur: trigger
    var st__MakeMonsterTeleport_saveLoc: trigger
    var st__MakeMonsterTeleport_setMonster: trigger
    var st__MakeSetUnitMonsterType_getMonsterType: trigger
    var st__MakeSetUnitMonsterType_isLastLocSavedUsed: trigger
    var st__MakeSetUnitMonsterType_create: trigger
    var st__MakeSetUnitMonsterType_saveLoc: trigger
    var st__MakeSetUnitMonsterType_unsaveLocDefinitely: trigger
    var st__MakeSetUnitMonsterType_getMode: trigger
    var st__MakeSetUnitTeleportPeriod_getPeriod: trigger
    var st__MakeSetUnitTeleportPeriod_isLastLocSavedUsed: trigger
    var st__MakeSetUnitTeleportPeriod_create: trigger
    var st__MakeSetUnitTeleportPeriod_saveLoc: trigger
    var st__MakeSetUnitTeleportPeriod_unsaveLocDefinitely: trigger
    var st__MakeSetUnitTeleportPeriod_getMode: trigger
    var st__MakeStart_create: trigger
    var st__MakeStart_saveLoc: trigger
    var st__MakeStart_isLastLocSavedUsed: trigger
    var st__MakeStart_forNext: trigger
    var st__MakeTerrainCopyPaste_create: trigger
    var st__MakeTerrainCopyPaste_saveLoc: trigger
    var st__MakeTerrainCreate_isLastLocSavedUsed: trigger
    var st__MakeTerrainCreate_getTerrainType: trigger
    var st__MakeTerrainCreate_create: trigger
    var st__MakeTerrainCreate_saveLoc: trigger
    var st__MakeTerrainCreate_unsaveLocDefinitely: trigger
    var st__MakeTerrainHeight_create: trigger
    var st__MakeTerrainHeight_getRadius: trigger
    var st__MakeTerrainHeight_getHeight: trigger
    var st__MakeTerrainHorizontalSymmetry_isLastLocSavedUsed: trigger
    var st__MakeTerrainHorizontalSymmetry_create: trigger
    var st__MakeTerrainHorizontalSymmetry_saveLoc: trigger
    var st__MakeTerrainHorizontalSymmetry_unsaveLocDefinitely: trigger
    var st__MakeTerrainVerticalSymmetry_isLastLocSavedUsed: trigger
    var st__MakeTerrainVerticalSymmetry_create: trigger
    var st__MakeTerrainVerticalSymmetry_saveLoc: trigger
    var st__MakeTerrainVerticalSymmetry_unsaveLocDefinitely: trigger
    var st__MakeVisibilityModifier_create: trigger
    var st__MakeVisibilityModifier_saveLoc: trigger
    var st__MakeVisibilityModifier_unsaveLocDefinitely: trigger
    var st__MakeVisibilityModifier_isLastLocSavedUsed: trigger
    var st__MonsterMultiplePatrols_storeNewLoc: trigger
    var st__MonsterMultiplePatrols_destroyLocs: trigger
    var st__MonsterMultiplePatrols_getCurrentTrigger: trigger
    var st__MonsterMultiplePatrols_nextMove: trigger
    var st__MonsterMultiplePatrols_destroyLastLoc: trigger
    var st__MonsterMultiplePatrols_addNewLoc: trigger
    var st__MonsterMultiplePatrols_destroy: trigger
    var st__MonsterOrCaster_create: trigger
    var st__MonsterOrCaster_getId: trigger
    var st__MonsterOrCaster_killUnit: trigger
    var st__MonsterOrCaster_temporarilyDisable: trigger
    var st__MonsterOrCaster_temporarilyEnable: trigger
    var st__MonsterOrCaster_setBaseColor: trigger
    var st__MonsterOrCaster_setVertexColor: trigger
    var st__MonsterOrCaster_reinitColor: trigger
    var st__MonsterOrCaster_getUnit: trigger
    var st__MonsterOrCaster_copy: trigger
    var st__MonsterOrCaster_getMonsterType: trigger
    var st__MonsterTeleport_storeNewLoc: trigger
    var st__MonsterTeleport_destroyLocs: trigger
    var st__MonsterTeleport_setPeriod: trigger
    var st__MonsterTeleport_getPeriod: trigger
    var st__MonsterTeleport_nextMove: trigger
    var st__MonsterTeleport_getX: trigger
    var st__MonsterTeleport_getY: trigger
    var st__MonsterTeleport_addNewLoc: trigger
    var st__MonsterTeleport_destroyLastLoc: trigger
    var st__MonsterTeleport_destroy: trigger
    var st__Caster_isEnabled: trigger
    var st__Caster_getId: trigger
    var st__Caster_getX: trigger
    var st__Caster_getY: trigger
    var st__Caster_getRange: trigger
    var st__Caster_getProjectileSpeed: trigger
    var st__Caster_getCasterUnit: trigger
    var st__Caster_getProjectileMonsterType: trigger
    var st__Caster_getLoadTime: trigger
    var st__Caster_getCasterType: trigger
    var st__Caster_getAnimation: trigger
    var st__Caster_enable: trigger
    var st__Caster_disable: trigger
    var st__Caster_killUnit: trigger
    var st__Caster_onDestroy: trigger
    var st__Caster_escaperOutOfRangeOrDead: trigger
    var st__Caster_temporarilyDisable: trigger
    var st__Caster_temporarilyEnable: trigger
    var st__Caster_setBaseColor: trigger
    var st__Caster_setVertexColor: trigger
    var st__Caster_reinitColor: trigger
    var st__Caster_toString: trigger
    var st__Caster_destroy: trigger
    var st__ClearMobArray_create: trigger
    var st__ClearMobArray_onDestroy: trigger
    var st__ClearMobArray_setClearMobNull: trigger
    var st__ClearMobArray_initializeClearMobs: trigger
    var st__MakeClearMob_create: trigger
    var st__MakeClearMob_clickMade: trigger
    var st__MakeDeleteClearMob_create: trigger
    var st__MakeDeleteClearMob_clickMade: trigger
    var st__MonsterMultiplePatrolsArray_create: trigger
    var st__MonsterMultiplePatrolsArray_get: trigger
    var st__MonsterMultiplePatrolsArray_getLastInstanceId: trigger
    var st__MonsterMultiplePatrolsArray_new: trigger
    var st__MonsterMultiplePatrolsArray_count: trigger
    var st__MonsterMultiplePatrolsArray_onDestroy: trigger
    var st__MonsterMultiplePatrolsArray_setMonsterNull: trigger
    var st__MonsterMultiplePatrolsArray_getMonsterNear: trigger
    var st__MonsterMultiplePatrolsArray_createMonsters: trigger
    var st__MonsterMultiplePatrolsArray_removeMonsters: trigger
    var st__MonsterMultiplePatrolsArray_recreateMonstersOfType: trigger
    var st__MonsterMultiplePatrolsArray_removeMonstersOfType: trigger
    var st__MonsterMultiplePatrolsArray_destroy: trigger
    var st__MonsterNoMoveArray_create: trigger
    var st__MonsterNoMoveArray_get: trigger
    var st__MonsterNoMoveArray_getLastInstanceId: trigger
    var st__MonsterNoMoveArray_new: trigger
    var st__MonsterNoMoveArray_count: trigger
    var st__MonsterNoMoveArray_onDestroy: trigger
    var st__MonsterNoMoveArray_setMonsterNull: trigger
    var st__MonsterNoMoveArray_getMonsterNear: trigger
    var st__MonsterNoMoveArray_createMonsters: trigger
    var st__MonsterNoMoveArray_removeMonsters: trigger
    var st__MonsterNoMoveArray_recreateMonstersOfType: trigger
    var st__MonsterNoMoveArray_removeMonstersOfType: trigger
    var st__MonsterNoMoveArray_destroy: trigger
    var st__MonsterSimplePatrolArray_create: trigger
    var st__MonsterSimplePatrolArray_get: trigger
    var st__MonsterSimplePatrolArray_getLastInstanceId: trigger
    var st__MonsterSimplePatrolArray_new: trigger
    var st__MonsterSimplePatrolArray_count: trigger
    var st__MonsterSimplePatrolArray_onDestroy: trigger
    var st__MonsterSimplePatrolArray_setMonsterNull: trigger
    var st__MonsterSimplePatrolArray_getMonsterNear: trigger
    var st__MonsterSimplePatrolArray_createMonsters: trigger
    var st__MonsterSimplePatrolArray_removeMonsters: trigger
    var st__MonsterSimplePatrolArray_recreateMonstersOfType: trigger
    var st__MonsterSimplePatrolArray_removeMonstersOfType: trigger
    var st__MonsterSimplePatrolArray_destroy: trigger
    var st__MonsterTeleportArray_create: trigger
    var st__MonsterTeleportArray_get: trigger
    var st__MonsterTeleportArray_getLastInstanceId: trigger
    var st__MonsterTeleportArray_new: trigger
    var st__MonsterTeleportArray_count: trigger
    var st__MonsterTeleportArray_onDestroy: trigger
    var st__MonsterTeleportArray_setMonsterNull: trigger
    var st__MonsterTeleportArray_getMonsterNear: trigger
    var st__MonsterTeleportArray_createMonsters: trigger
    var st__MonsterTeleportArray_removeMonsters: trigger
    var st__MonsterTeleportArray_recreateMonstersOfType: trigger
    var st__MonsterTeleportArray_removeMonstersOfType: trigger
    var st__MonsterTeleportArray_destroy: trigger
    var st__CasterArray_create: trigger
    var st__CasterArray_get: trigger
    var st__CasterArray_getLastInstanceId: trigger
    var st__CasterArray_new: trigger
    var st__CasterArray_count: trigger
    var st__CasterArray_onDestroy: trigger
    var st__CasterArray_setCasterNull: trigger
    var st__CasterArray_getCasterNear: trigger
    var st__CasterArray_createCasters: trigger
    var st__CasterArray_removeCasters: trigger
    var st__CasterArray_refreshCastersOfType: trigger
    var st__CasterArray_removeCastersOfType: trigger
    var st__EscaperSavedCommands_new: trigger
    var st__EscaperSavedCommands_execute: trigger
    var st___prototype2: trigger[]
    var st___prototype3: trigger[]
    var st___prototype51: trigger[]
    var f__arg_integer1: number
    var f__arg_integer2: number
    var f__arg_string1: string
    var f__arg_string2: string
    var f__arg_boolean1: boolean
    var f__arg_boolean2: boolean
    var f__arg_real1: number
    var f__arg_real2: number
    var f__arg_real3: number
    var f__arg_real4: number
    var f__arg_real5: number
    var f__arg_unit1: unit
    var f__arg_player1: player
    var f__arg_timer1: timer
    var f__arg_sound1: sound
    var f__arg_this: number
    var f__result_boolean: boolean
    var f__result_integer: number
    var f__result_leaderboard: leaderboard
    var f__result_string: string
    var f__result_unit: unit
    var f__result_real: number
    var f__result_player: player
    var f__result_timer: timer
    var f__result_trigger: trigger
    var rf__return_integer: number
    var rf__return_real: number
    var rf__return_timer: timer
    var rf__return_unit: unit
    var rf__return_trigger: trigger
    var rf__return_boolean: boolean
    var rf__return_region: region
    var rf__return_code: Function
    var rf__return_string: string
    var rf__return_sound: sound
    function rf__sg__ReinitTerrainsPositions___TERRAIN_SAVE_get(i: number): void
    function sg__ReinitTerrainsPositions___TERRAIN_SAVE_get(i: number): number
    function sg__ReinitTerrainsPositions___TERRAIN_SAVE_set(i: number, v: number): void
    function rf__sg__SaveLoadTerrainWithoutName___terrainSave_get(i: number): void
    function sg__SaveLoadTerrainWithoutName___terrainSave_get(i: number): number
    function sg__SaveLoadTerrainWithoutName___terrainSave_set(i: number, v: number): void
    function rf__sg___CasterArray_casters_get(i: number): void
    function sg___CasterArray_casters_get(i: number): number
    function sg___CasterArray_casters_set(i: number, v: number): void
    function rf__sg__CasterArray_get_casters(i: number): void
    function sg__CasterArray_get_casters(i: number): number
    function sg__CasterArray_set_casters(i: number, v: number): void
    function rf__sg__CasterArray_get_lastInstance(i: number): void
    function sg__CasterArray_get_lastInstance(i: number): number
    function sg__CasterArray_set_lastInstance(i: number, v: number): void
    function rf__sg___MonsterTeleportArray_monsters_get(i: number): void
    function sg___MonsterTeleportArray_monsters_get(i: number): number
    function sg___MonsterTeleportArray_monsters_set(i: number, v: number): void
    function rf__sg__MonsterTeleportArray_get_monsters(i: number): void
    function sg__MonsterTeleportArray_get_monsters(i: number): number
    function sg__MonsterTeleportArray_set_monsters(i: number, v: number): void
    function rf__sg__MonsterTeleportArray_get_lastInstance(i: number): void
    function sg__MonsterTeleportArray_get_lastInstance(i: number): number
    function sg__MonsterTeleportArray_set_lastInstance(i: number, v: number): void
    function rf__sg___MonsterSimplePatrolArray_monsters_get(i: number): void
    function sg___MonsterSimplePatrolArray_monsters_get(i: number): number
    function sg___MonsterSimplePatrolArray_monsters_set(i: number, v: number): void
    function rf__sg__MonsterSimplePatrolArray_get_monsters(i: number): void
    function sg__MonsterSimplePatrolArray_get_monsters(i: number): number
    function sg__MonsterSimplePatrolArray_set_monsters(i: number, v: number): void
    function rf__sg__MonsterSimplePatrolArray_get_lastInstance(i: number): void
    function sg__MonsterSimplePatrolArray_get_lastInstance(i: number): number
    function sg__MonsterSimplePatrolArray_set_lastInstance(i: number, v: number): void
    function rf__sg___MonsterNoMoveArray_monsters_get(i: number): void
    function sg___MonsterNoMoveArray_monsters_get(i: number): number
    function sg___MonsterNoMoveArray_monsters_set(i: number, v: number): void
    function rf__sg__MonsterNoMoveArray_get_monsters(i: number): void
    function sg__MonsterNoMoveArray_get_monsters(i: number): number
    function sg__MonsterNoMoveArray_set_monsters(i: number, v: number): void
    function rf__sg__MonsterNoMoveArray_get_lastInstance(i: number): void
    function sg__MonsterNoMoveArray_get_lastInstance(i: number): number
    function sg__MonsterNoMoveArray_set_lastInstance(i: number, v: number): void
    function rf__sg___MonsterMultiplePatrolsArray_monsters_get(i: number): void
    function sg___MonsterMultiplePatrolsArray_monsters_get(i: number): number
    function sg___MonsterMultiplePatrolsArray_monsters_set(i: number, v: number): void
    function rf__sg__MonsterMultiplePatrolsArray_get_monsters(i: number): void
    function sg__MonsterMultiplePatrolsArray_get_monsters(i: number): number
    function sg__MonsterMultiplePatrolsArray_set_monsters(i: number, v: number): void
    function rf__sg__MonsterMultiplePatrolsArray_get_lastInstance(i: number): void
    function sg__MonsterMultiplePatrolsArray_get_lastInstance(i: number): number
    function sg__MonsterMultiplePatrolsArray_set_lastInstance(i: number, v: number): void
    function rf__sg__MonsterOrCasterStack_get_monsterOrCaster(i: number): void
    function sg__MonsterOrCasterStack_get_monsterOrCaster(i: number): number
    function sg__MonsterOrCasterStack_set_monsterOrCaster(i: number, v: number): void
    function rf__sg__MonsterOrCasterStack_get_nextElement(i: number): void
    function sg__MonsterOrCasterStack_get_nextElement(i: number): number
    function sg__MonsterOrCasterStack_set_nextElement(i: number, v: number): void
    function rf__sg___Caster_escapersInRange_get(i: number): void
    function sg___Caster_escapersInRange_get(i: number): number
    function sg___Caster_escapersInRange_set(i: number, v: number): void
    function rf__sg__Caster_get_id(i: number): void
    function sg__Caster_get_id(i: number): number
    function sg__Caster_set_id(i: number, v: number): void
    function rf__sg__Caster_get_level(i: number): void
    function sg__Caster_get_level(i: number): number
    function sg__Caster_set_level(i: number, v: number): void
    function rf__sg__Caster_get_arrayId(i: number): void
    function sg__Caster_get_arrayId(i: number): number
    function sg__Caster_set_arrayId(i: number, v: number): void
    function rf__sg__Caster_get_casterType(i: number): void
    function sg__Caster_get_casterType(i: number): number
    function sg__Caster_set_casterType(i: number, v: number): void
    function rf__sg__Caster_get_x(i: number): void
    function sg__Caster_get_x(i: number): number
    function sg__Caster_set_x(i: number, v: number): void
    function rf__sg__Caster_get_y(i: number): void
    function sg__Caster_get_y(i: number): number
    function sg__Caster_set_y(i: number, v: number): void
    function rf__sg__Caster_get_angle(i: number): void
    function sg__Caster_get_angle(i: number): number
    function sg__Caster_set_angle(i: number, v: number): void
    function rf__sg__Caster_get_disablingTimer(i: number): void
    function sg__Caster_get_disablingTimer(i: number): timer
    function sg__Caster_set_disablingTimer(i: number, v: timer): void
    function rf__sg__Caster_get_baseColorId(i: number): void
    function sg__Caster_get_baseColorId(i: number): number
    function sg__Caster_set_baseColorId(i: number, v: number): void
    function rf__sg__Caster_get_vcRed(i: number): void
    function sg__Caster_get_vcRed(i: number): number
    function sg__Caster_set_vcRed(i: number, v: number): void
    function rf__sg__Caster_get_vcGreen(i: number): void
    function sg__Caster_get_vcGreen(i: number): number
    function sg__Caster_set_vcGreen(i: number, v: number): void
    function rf__sg__Caster_get_vcBlue(i: number): void
    function sg__Caster_get_vcBlue(i: number): number
    function sg__Caster_set_vcBlue(i: number, v: number): void
    function rf__sg__Caster_get_vcTransparency(i: number): void
    function sg__Caster_get_vcTransparency(i: number): number
    function sg__Caster_set_vcTransparency(i: number, v: number): void
    function rf__sg__Caster_get_casterUnit(i: number): void
    function sg__Caster_get_casterUnit(i: number): unit
    function sg__Caster_set_casterUnit(i: number, v: unit): void
    function rf__sg__Caster_get_trg_unitWithinRange(i: number): void
    function sg__Caster_get_trg_unitWithinRange(i: number): trigger
    function sg__Caster_set_trg_unitWithinRange(i: number, v: trigger): void
    function rf__sg__Caster_get_escapersInRange(i: number): void
    function sg__Caster_get_escapersInRange(i: number): number
    function sg__Caster_set_escapersInRange(i: number, v: number): void
    function rf__sg__Caster_get_nbEscapersInRange(i: number): void
    function sg__Caster_get_nbEscapersInRange(i: number): number
    function sg__Caster_set_nbEscapersInRange(i: number, v: number): void
    function rf__sg__Caster_get_canShoot(i: number): void
    function sg__Caster_get_canShoot(i: number): boolean
    function sg__Caster_set_canShoot(i: number, v: boolean): void
    function rf__sg__Caster_get_t(i: number): void
    function sg__Caster_get_t(i: number): timer
    function sg__Caster_set_t(i: number, v: timer): void
    function rf__sg__Caster_get_enabled(i: number): void
    function sg__Caster_get_enabled(i: number): boolean
    function sg__Caster_set_enabled(i: number, v: boolean): void
    function rf__sg__MonsterOrCaster_get_monster(i: number): void
    function sg__MonsterOrCaster_get_monster(i: number): number
    function sg__MonsterOrCaster_set_monster(i: number, v: number): void
    function rf__sg__MonsterOrCaster_get_caster(i: number): void
    function sg__MonsterOrCaster_get_caster(i: number): number
    function sg__MonsterOrCaster_set_caster(i: number, v: number): void
    function rf__sg__Monster_get_id(i: number): void
    function sg__Monster_get_id(i: number): number
    function sg__Monster_set_id(i: number, v: number): void
    function rf__sg__Monster_get_u(i: number): void
    function sg__Monster_get_u(i: number): unit
    function sg__Monster_set_u(i: number, v: unit): void
    function rf__sg__Monster_get_mt(i: number): void
    function sg__Monster_get_mt(i: number): number
    function sg__Monster_set_mt(i: number, v: number): void
    function rf__sg__Monster_get_level(i: number): void
    function sg__Monster_get_level(i: number): number
    function sg__Monster_set_level(i: number, v: number): void
    function rf__sg__Monster_get_arrayId(i: number): void
    function sg__Monster_get_arrayId(i: number): number
    function sg__Monster_set_arrayId(i: number, v: number): void
    function rf__sg__Monster_get_life(i: number): void
    function sg__Monster_get_life(i: number): number
    function sg__Monster_set_life(i: number, v: number): void
    function rf__sg__Monster_get_disablingTimer(i: number): void
    function sg__Monster_get_disablingTimer(i: number): timer
    function sg__Monster_set_disablingTimer(i: number, v: timer): void
    function rf__sg__Monster_get_baseColorId(i: number): void
    function sg__Monster_get_baseColorId(i: number): number
    function sg__Monster_set_baseColorId(i: number, v: number): void
    function rf__sg__Monster_get_vcRed(i: number): void
    function sg__Monster_get_vcRed(i: number): number
    function sg__Monster_set_vcRed(i: number, v: number): void
    function rf__sg__Monster_get_vcGreen(i: number): void
    function sg__Monster_get_vcGreen(i: number): number
    function sg__Monster_set_vcGreen(i: number, v: number): void
    function rf__sg__Monster_get_vcBlue(i: number): void
    function sg__Monster_get_vcBlue(i: number): number
    function sg__Monster_set_vcBlue(i: number, v: number): void
    function rf__sg__Monster_get_vcTransparency(i: number): void
    function sg__Monster_get_vcTransparency(i: number): number
    function sg__Monster_set_vcTransparency(i: number, v: number): void
    function rf__si__Monster_getType(thiss: number): void
    function si__Monster_getType(thiss: number): number
    function rf__sg__MonsterMultiplePatrols_get_lastLocInd(i: number): void
    function sg__MonsterMultiplePatrols_get_lastLocInd(i: number): number
    function sg__MonsterMultiplePatrols_set_lastLocInd(i: number, v: number): void
    function rf__sg__MonsterMultiplePatrols_get_currentMove(i: number): void
    function sg__MonsterMultiplePatrols_get_currentMove(i: number): number
    function sg__MonsterMultiplePatrols_set_currentMove(i: number, v: number): void
    function rf__sg__MonsterMultiplePatrols_get_sens(i: number): void
    function sg__MonsterMultiplePatrols_get_sens(i: number): number
    function sg__MonsterMultiplePatrols_set_sens(i: number, v: number): void
    function rf__sg__MonsterMultiplePatrols_get_x0(i: number): void
    function sg__MonsterMultiplePatrols_get_x0(i: number): number
    function sg__MonsterMultiplePatrols_set_x0(i: number, v: number): void
    function rf__sg__MonsterMultiplePatrols_get_y0(i: number): void
    function sg__MonsterMultiplePatrols_get_y0(i: number): number
    function sg__MonsterMultiplePatrols_set_y0(i: number, v: number): void
    function rf__sg__MonsterMultiplePatrols_get_r0(i: number): void
    function sg__MonsterMultiplePatrols_get_r0(i: number): region
    function sg__MonsterMultiplePatrols_set_r0(i: number, v: region): void
    function rf__sg__MonsterMultiplePatrols_get_t0(i: number): void
    function sg__MonsterMultiplePatrols_get_t0(i: number): trigger
    function sg__MonsterMultiplePatrols_set_t0(i: number, v: trigger): void
    function rf__sg__MonsterMultiplePatrols_get_x1(i: number): void
    function sg__MonsterMultiplePatrols_get_x1(i: number): number
    function sg__MonsterMultiplePatrols_set_x1(i: number, v: number): void
    function rf__sg__MonsterMultiplePatrols_get_y1(i: number): void
    function sg__MonsterMultiplePatrols_get_y1(i: number): number
    function sg__MonsterMultiplePatrols_set_y1(i: number, v: number): void
    function rf__sg__MonsterMultiplePatrols_get_r1(i: number): void
    function sg__MonsterMultiplePatrols_get_r1(i: number): region
    function sg__MonsterMultiplePatrols_set_r1(i: number, v: region): void
    function rf__sg__MonsterMultiplePatrols_get_t1(i: number): void
    function sg__MonsterMultiplePatrols_get_t1(i: number): trigger
    function sg__MonsterMultiplePatrols_set_t1(i: number, v: trigger): void
    function rf__sg__MonsterMultiplePatrols_get_x2(i: number): void
    function sg__MonsterMultiplePatrols_get_x2(i: number): number
    function sg__MonsterMultiplePatrols_set_x2(i: number, v: number): void
    function rf__sg__MonsterMultiplePatrols_get_y2(i: number): void
    function sg__MonsterMultiplePatrols_get_y2(i: number): number
    function sg__MonsterMultiplePatrols_set_y2(i: number, v: number): void
    function rf__sg__MonsterMultiplePatrols_get_r2(i: number): void
    function sg__MonsterMultiplePatrols_get_r2(i: number): region
    function sg__MonsterMultiplePatrols_set_r2(i: number, v: region): void
    function rf__sg__MonsterMultiplePatrols_get_t2(i: number): void
    function sg__MonsterMultiplePatrols_get_t2(i: number): trigger
    function sg__MonsterMultiplePatrols_set_t2(i: number, v: trigger): void
    function rf__sg__MonsterMultiplePatrols_get_x3(i: number): void
    function sg__MonsterMultiplePatrols_get_x3(i: number): number
    function sg__MonsterMultiplePatrols_set_x3(i: number, v: number): void
    function rf__sg__MonsterMultiplePatrols_get_y3(i: number): void
    function sg__MonsterMultiplePatrols_get_y3(i: number): number
    function sg__MonsterMultiplePatrols_set_y3(i: number, v: number): void
    function rf__sg__MonsterMultiplePatrols_get_r3(i: number): void
    function sg__MonsterMultiplePatrols_get_r3(i: number): region
    function sg__MonsterMultiplePatrols_set_r3(i: number, v: region): void
    function rf__sg__MonsterMultiplePatrols_get_t3(i: number): void
    function sg__MonsterMultiplePatrols_get_t3(i: number): trigger
    function sg__MonsterMultiplePatrols_set_t3(i: number, v: trigger): void
    function rf__sg__MonsterMultiplePatrols_get_x4(i: number): void
    function sg__MonsterMultiplePatrols_get_x4(i: number): number
    function sg__MonsterMultiplePatrols_set_x4(i: number, v: number): void
    function rf__sg__MonsterMultiplePatrols_get_y4(i: number): void
    function sg__MonsterMultiplePatrols_get_y4(i: number): number
    function sg__MonsterMultiplePatrols_set_y4(i: number, v: number): void
    function rf__sg__MonsterMultiplePatrols_get_r4(i: number): void
    function sg__MonsterMultiplePatrols_get_r4(i: number): region
    function sg__MonsterMultiplePatrols_set_r4(i: number, v: region): void
    function rf__sg__MonsterMultiplePatrols_get_t4(i: number): void
    function sg__MonsterMultiplePatrols_get_t4(i: number): trigger
    function sg__MonsterMultiplePatrols_set_t4(i: number, v: trigger): void
    function rf__sg__MonsterMultiplePatrols_get_x5(i: number): void
    function sg__MonsterMultiplePatrols_get_x5(i: number): number
    function sg__MonsterMultiplePatrols_set_x5(i: number, v: number): void
    function rf__sg__MonsterMultiplePatrols_get_y5(i: number): void
    function sg__MonsterMultiplePatrols_get_y5(i: number): number
    function sg__MonsterMultiplePatrols_set_y5(i: number, v: number): void
    function rf__sg__MonsterMultiplePatrols_get_r5(i: number): void
    function sg__MonsterMultiplePatrols_get_r5(i: number): region
    function sg__MonsterMultiplePatrols_set_r5(i: number, v: region): void
    function rf__sg__MonsterMultiplePatrols_get_t5(i: number): void
    function sg__MonsterMultiplePatrols_get_t5(i: number): trigger
    function sg__MonsterMultiplePatrols_set_t5(i: number, v: trigger): void
    function rf__sg__MonsterMultiplePatrols_get_x6(i: number): void
    function sg__MonsterMultiplePatrols_get_x6(i: number): number
    function sg__MonsterMultiplePatrols_set_x6(i: number, v: number): void
    function rf__sg__MonsterMultiplePatrols_get_y6(i: number): void
    function sg__MonsterMultiplePatrols_get_y6(i: number): number
    function sg__MonsterMultiplePatrols_set_y6(i: number, v: number): void
    function rf__sg__MonsterMultiplePatrols_get_r6(i: number): void
    function sg__MonsterMultiplePatrols_get_r6(i: number): region
    function sg__MonsterMultiplePatrols_set_r6(i: number, v: region): void
    function rf__sg__MonsterMultiplePatrols_get_t6(i: number): void
    function sg__MonsterMultiplePatrols_get_t6(i: number): trigger
    function sg__MonsterMultiplePatrols_set_t6(i: number, v: trigger): void
    function rf__sg__MonsterMultiplePatrols_get_x7(i: number): void
    function sg__MonsterMultiplePatrols_get_x7(i: number): number
    function sg__MonsterMultiplePatrols_set_x7(i: number, v: number): void
    function rf__sg__MonsterMultiplePatrols_get_y7(i: number): void
    function sg__MonsterMultiplePatrols_get_y7(i: number): number
    function sg__MonsterMultiplePatrols_set_y7(i: number, v: number): void
    function rf__sg__MonsterMultiplePatrols_get_r7(i: number): void
    function sg__MonsterMultiplePatrols_get_r7(i: number): region
    function sg__MonsterMultiplePatrols_set_r7(i: number, v: region): void
    function rf__sg__MonsterMultiplePatrols_get_t7(i: number): void
    function sg__MonsterMultiplePatrols_get_t7(i: number): trigger
    function sg__MonsterMultiplePatrols_set_t7(i: number, v: trigger): void
    function rf__sg__MonsterMultiplePatrols_get_x8(i: number): void
    function sg__MonsterMultiplePatrols_get_x8(i: number): number
    function sg__MonsterMultiplePatrols_set_x8(i: number, v: number): void
    function rf__sg__MonsterMultiplePatrols_get_y8(i: number): void
    function sg__MonsterMultiplePatrols_get_y8(i: number): number
    function sg__MonsterMultiplePatrols_set_y8(i: number, v: number): void
    function rf__sg__MonsterMultiplePatrols_get_r8(i: number): void
    function sg__MonsterMultiplePatrols_get_r8(i: number): region
    function sg__MonsterMultiplePatrols_set_r8(i: number, v: region): void
    function rf__sg__MonsterMultiplePatrols_get_t8(i: number): void
    function sg__MonsterMultiplePatrols_get_t8(i: number): trigger
    function sg__MonsterMultiplePatrols_set_t8(i: number, v: trigger): void
    function rf__sg__MonsterMultiplePatrols_get_x9(i: number): void
    function sg__MonsterMultiplePatrols_get_x9(i: number): number
    function sg__MonsterMultiplePatrols_set_x9(i: number, v: number): void
    function rf__sg__MonsterMultiplePatrols_get_y9(i: number): void
    function sg__MonsterMultiplePatrols_get_y9(i: number): number
    function sg__MonsterMultiplePatrols_set_y9(i: number, v: number): void
    function rf__sg__MonsterMultiplePatrols_get_r9(i: number): void
    function sg__MonsterMultiplePatrols_get_r9(i: number): region
    function sg__MonsterMultiplePatrols_set_r9(i: number, v: region): void
    function rf__sg__MonsterMultiplePatrols_get_t9(i: number): void
    function sg__MonsterMultiplePatrols_get_t9(i: number): trigger
    function sg__MonsterMultiplePatrols_set_t9(i: number, v: trigger): void
    function rf__sg__MonsterMultiplePatrols_get_x10(i: number): void
    function sg__MonsterMultiplePatrols_get_x10(i: number): number
    function sg__MonsterMultiplePatrols_set_x10(i: number, v: number): void
    function rf__sg__MonsterMultiplePatrols_get_y10(i: number): void
    function sg__MonsterMultiplePatrols_get_y10(i: number): number
    function sg__MonsterMultiplePatrols_set_y10(i: number, v: number): void
    function rf__sg__MonsterMultiplePatrols_get_r10(i: number): void
    function sg__MonsterMultiplePatrols_get_r10(i: number): region
    function sg__MonsterMultiplePatrols_set_r10(i: number, v: region): void
    function rf__sg__MonsterMultiplePatrols_get_t10(i: number): void
    function sg__MonsterMultiplePatrols_get_t10(i: number): trigger
    function sg__MonsterMultiplePatrols_set_t10(i: number, v: trigger): void
    function rf__sg__MonsterMultiplePatrols_get_x11(i: number): void
    function sg__MonsterMultiplePatrols_get_x11(i: number): number
    function sg__MonsterMultiplePatrols_set_x11(i: number, v: number): void
    function rf__sg__MonsterMultiplePatrols_get_y11(i: number): void
    function sg__MonsterMultiplePatrols_get_y11(i: number): number
    function sg__MonsterMultiplePatrols_set_y11(i: number, v: number): void
    function rf__sg__MonsterMultiplePatrols_get_r11(i: number): void
    function sg__MonsterMultiplePatrols_get_r11(i: number): region
    function sg__MonsterMultiplePatrols_set_r11(i: number, v: region): void
    function rf__sg__MonsterMultiplePatrols_get_t11(i: number): void
    function sg__MonsterMultiplePatrols_get_t11(i: number): trigger
    function sg__MonsterMultiplePatrols_set_t11(i: number, v: trigger): void
    function rf__sg__MonsterMultiplePatrols_get_x12(i: number): void
    function sg__MonsterMultiplePatrols_get_x12(i: number): number
    function sg__MonsterMultiplePatrols_set_x12(i: number, v: number): void
    function rf__sg__MonsterMultiplePatrols_get_y12(i: number): void
    function sg__MonsterMultiplePatrols_get_y12(i: number): number
    function sg__MonsterMultiplePatrols_set_y12(i: number, v: number): void
    function rf__sg__MonsterMultiplePatrols_get_r12(i: number): void
    function sg__MonsterMultiplePatrols_get_r12(i: number): region
    function sg__MonsterMultiplePatrols_set_r12(i: number, v: region): void
    function rf__sg__MonsterMultiplePatrols_get_t12(i: number): void
    function sg__MonsterMultiplePatrols_get_t12(i: number): trigger
    function sg__MonsterMultiplePatrols_set_t12(i: number, v: trigger): void
    function rf__sg__MonsterMultiplePatrols_get_x13(i: number): void
    function sg__MonsterMultiplePatrols_get_x13(i: number): number
    function sg__MonsterMultiplePatrols_set_x13(i: number, v: number): void
    function rf__sg__MonsterMultiplePatrols_get_y13(i: number): void
    function sg__MonsterMultiplePatrols_get_y13(i: number): number
    function sg__MonsterMultiplePatrols_set_y13(i: number, v: number): void
    function rf__sg__MonsterMultiplePatrols_get_r13(i: number): void
    function sg__MonsterMultiplePatrols_get_r13(i: number): region
    function sg__MonsterMultiplePatrols_set_r13(i: number, v: region): void
    function rf__sg__MonsterMultiplePatrols_get_t13(i: number): void
    function sg__MonsterMultiplePatrols_get_t13(i: number): trigger
    function sg__MonsterMultiplePatrols_set_t13(i: number, v: trigger): void
    function rf__sg__MonsterMultiplePatrols_get_x14(i: number): void
    function sg__MonsterMultiplePatrols_get_x14(i: number): number
    function sg__MonsterMultiplePatrols_set_x14(i: number, v: number): void
    function rf__sg__MonsterMultiplePatrols_get_y14(i: number): void
    function sg__MonsterMultiplePatrols_get_y14(i: number): number
    function sg__MonsterMultiplePatrols_set_y14(i: number, v: number): void
    function rf__sg__MonsterMultiplePatrols_get_r14(i: number): void
    function sg__MonsterMultiplePatrols_get_r14(i: number): region
    function sg__MonsterMultiplePatrols_set_r14(i: number, v: region): void
    function rf__sg__MonsterMultiplePatrols_get_t14(i: number): void
    function sg__MonsterMultiplePatrols_get_t14(i: number): trigger
    function sg__MonsterMultiplePatrols_set_t14(i: number, v: trigger): void
    function rf__sg__MonsterMultiplePatrols_get_x15(i: number): void
    function sg__MonsterMultiplePatrols_get_x15(i: number): number
    function sg__MonsterMultiplePatrols_set_x15(i: number, v: number): void
    function rf__sg__MonsterMultiplePatrols_get_y15(i: number): void
    function sg__MonsterMultiplePatrols_get_y15(i: number): number
    function sg__MonsterMultiplePatrols_set_y15(i: number, v: number): void
    function rf__sg__MonsterMultiplePatrols_get_r15(i: number): void
    function sg__MonsterMultiplePatrols_get_r15(i: number): region
    function sg__MonsterMultiplePatrols_set_r15(i: number, v: region): void
    function rf__sg__MonsterMultiplePatrols_get_t15(i: number): void
    function sg__MonsterMultiplePatrols_get_t15(i: number): trigger
    function sg__MonsterMultiplePatrols_set_t15(i: number, v: trigger): void
    function rf__sg__MonsterMultiplePatrols_get_x16(i: number): void
    function sg__MonsterMultiplePatrols_get_x16(i: number): number
    function sg__MonsterMultiplePatrols_set_x16(i: number, v: number): void
    function rf__sg__MonsterMultiplePatrols_get_y16(i: number): void
    function sg__MonsterMultiplePatrols_get_y16(i: number): number
    function sg__MonsterMultiplePatrols_set_y16(i: number, v: number): void
    function rf__sg__MonsterMultiplePatrols_get_r16(i: number): void
    function sg__MonsterMultiplePatrols_get_r16(i: number): region
    function sg__MonsterMultiplePatrols_set_r16(i: number, v: region): void
    function rf__sg__MonsterMultiplePatrols_get_t16(i: number): void
    function sg__MonsterMultiplePatrols_get_t16(i: number): trigger
    function sg__MonsterMultiplePatrols_set_t16(i: number, v: trigger): void
    function rf__sg__MonsterMultiplePatrols_get_x17(i: number): void
    function sg__MonsterMultiplePatrols_get_x17(i: number): number
    function sg__MonsterMultiplePatrols_set_x17(i: number, v: number): void
    function rf__sg__MonsterMultiplePatrols_get_y17(i: number): void
    function sg__MonsterMultiplePatrols_get_y17(i: number): number
    function sg__MonsterMultiplePatrols_set_y17(i: number, v: number): void
    function rf__sg__MonsterMultiplePatrols_get_r17(i: number): void
    function sg__MonsterMultiplePatrols_get_r17(i: number): region
    function sg__MonsterMultiplePatrols_set_r17(i: number, v: region): void
    function rf__sg__MonsterMultiplePatrols_get_t17(i: number): void
    function sg__MonsterMultiplePatrols_get_t17(i: number): trigger
    function sg__MonsterMultiplePatrols_set_t17(i: number, v: trigger): void
    function rf__sg__MonsterMultiplePatrols_get_x18(i: number): void
    function sg__MonsterMultiplePatrols_get_x18(i: number): number
    function sg__MonsterMultiplePatrols_set_x18(i: number, v: number): void
    function rf__sg__MonsterMultiplePatrols_get_y18(i: number): void
    function sg__MonsterMultiplePatrols_get_y18(i: number): number
    function sg__MonsterMultiplePatrols_set_y18(i: number, v: number): void
    function rf__sg__MonsterMultiplePatrols_get_r18(i: number): void
    function sg__MonsterMultiplePatrols_get_r18(i: number): region
    function sg__MonsterMultiplePatrols_set_r18(i: number, v: region): void
    function rf__sg__MonsterMultiplePatrols_get_t18(i: number): void
    function sg__MonsterMultiplePatrols_get_t18(i: number): trigger
    function sg__MonsterMultiplePatrols_set_t18(i: number, v: trigger): void
    function rf__sg__MonsterMultiplePatrols_get_x19(i: number): void
    function sg__MonsterMultiplePatrols_get_x19(i: number): number
    function sg__MonsterMultiplePatrols_set_x19(i: number, v: number): void
    function rf__sg__MonsterMultiplePatrols_get_y19(i: number): void
    function sg__MonsterMultiplePatrols_get_y19(i: number): number
    function sg__MonsterMultiplePatrols_set_y19(i: number, v: number): void
    function rf__sg__MonsterMultiplePatrols_get_r19(i: number): void
    function sg__MonsterMultiplePatrols_get_r19(i: number): region
    function sg__MonsterMultiplePatrols_set_r19(i: number, v: region): void
    function rf__sg__MonsterMultiplePatrols_get_t19(i: number): void
    function sg__MonsterMultiplePatrols_get_t19(i: number): trigger
    function sg__MonsterMultiplePatrols_set_t19(i: number, v: trigger): void
    function rf__sg__MonsterMultiplePatrols_get_currentTrigger(i: number): void
    function sg__MonsterMultiplePatrols_get_currentTrigger(i: number): trigger
    function sg__MonsterMultiplePatrols_set_currentTrigger(i: number, v: trigger): void
    function rf__sg__MonsterNoMove_get_x(i: number): void
    function sg__MonsterNoMove_get_x(i: number): number
    function sg__MonsterNoMove_set_x(i: number, v: number): void
    function rf__sg__MonsterNoMove_get_y(i: number): void
    function sg__MonsterNoMove_get_y(i: number): number
    function sg__MonsterNoMove_set_y(i: number, v: number): void
    function rf__sg__MonsterNoMove_get_angle(i: number): void
    function sg__MonsterNoMove_get_angle(i: number): number
    function sg__MonsterNoMove_set_angle(i: number, v: number): void
    function rf__sg__MonsterSimplePatrol_get_x1(i: number): void
    function sg__MonsterSimplePatrol_get_x1(i: number): number
    function sg__MonsterSimplePatrol_set_x1(i: number, v: number): void
    function rf__sg__MonsterSimplePatrol_get_y1(i: number): void
    function sg__MonsterSimplePatrol_get_y1(i: number): number
    function sg__MonsterSimplePatrol_set_y1(i: number, v: number): void
    function rf__sg__MonsterSimplePatrol_get_x2(i: number): void
    function sg__MonsterSimplePatrol_get_x2(i: number): number
    function sg__MonsterSimplePatrol_set_x2(i: number, v: number): void
    function rf__sg__MonsterSimplePatrol_get_y2(i: number): void
    function sg__MonsterSimplePatrol_get_y2(i: number): number
    function sg__MonsterSimplePatrol_set_y2(i: number, v: number): void
    function rf__sg__MonsterTeleport_get_period(i: number): void
    function sg__MonsterTeleport_get_period(i: number): number
    function sg__MonsterTeleport_set_period(i: number, v: number): void
    function rf__sg__MonsterTeleport_get_angle(i: number): void
    function sg__MonsterTeleport_get_angle(i: number): number
    function sg__MonsterTeleport_set_angle(i: number, v: number): void
    function rf__sg__MonsterTeleport_get_lastLocInd(i: number): void
    function sg__MonsterTeleport_get_lastLocInd(i: number): number
    function sg__MonsterTeleport_set_lastLocInd(i: number, v: number): void
    function rf__sg__MonsterTeleport_get_currentLoc(i: number): void
    function sg__MonsterTeleport_get_currentLoc(i: number): number
    function sg__MonsterTeleport_set_currentLoc(i: number, v: number): void
    function rf__sg__MonsterTeleport_get_sens(i: number): void
    function sg__MonsterTeleport_get_sens(i: number): number
    function sg__MonsterTeleport_set_sens(i: number, v: number): void
    function rf__sg__MonsterTeleport_get_x0(i: number): void
    function sg__MonsterTeleport_get_x0(i: number): number
    function sg__MonsterTeleport_set_x0(i: number, v: number): void
    function rf__sg__MonsterTeleport_get_y0(i: number): void
    function sg__MonsterTeleport_get_y0(i: number): number
    function sg__MonsterTeleport_set_y0(i: number, v: number): void
    function rf__sg__MonsterTeleport_get_x1(i: number): void
    function sg__MonsterTeleport_get_x1(i: number): number
    function sg__MonsterTeleport_set_x1(i: number, v: number): void
    function rf__sg__MonsterTeleport_get_y1(i: number): void
    function sg__MonsterTeleport_get_y1(i: number): number
    function sg__MonsterTeleport_set_y1(i: number, v: number): void
    function rf__sg__MonsterTeleport_get_x2(i: number): void
    function sg__MonsterTeleport_get_x2(i: number): number
    function sg__MonsterTeleport_set_x2(i: number, v: number): void
    function rf__sg__MonsterTeleport_get_y2(i: number): void
    function sg__MonsterTeleport_get_y2(i: number): number
    function sg__MonsterTeleport_set_y2(i: number, v: number): void
    function rf__sg__MonsterTeleport_get_x3(i: number): void
    function sg__MonsterTeleport_get_x3(i: number): number
    function sg__MonsterTeleport_set_x3(i: number, v: number): void
    function rf__sg__MonsterTeleport_get_y3(i: number): void
    function sg__MonsterTeleport_get_y3(i: number): number
    function sg__MonsterTeleport_set_y3(i: number, v: number): void
    function rf__sg__MonsterTeleport_get_x4(i: number): void
    function sg__MonsterTeleport_get_x4(i: number): number
    function sg__MonsterTeleport_set_x4(i: number, v: number): void
    function rf__sg__MonsterTeleport_get_y4(i: number): void
    function sg__MonsterTeleport_get_y4(i: number): number
    function sg__MonsterTeleport_set_y4(i: number, v: number): void
    function rf__sg__MonsterTeleport_get_x5(i: number): void
    function sg__MonsterTeleport_get_x5(i: number): number
    function sg__MonsterTeleport_set_x5(i: number, v: number): void
    function rf__sg__MonsterTeleport_get_y5(i: number): void
    function sg__MonsterTeleport_get_y5(i: number): number
    function sg__MonsterTeleport_set_y5(i: number, v: number): void
    function rf__sg__MonsterTeleport_get_x6(i: number): void
    function sg__MonsterTeleport_get_x6(i: number): number
    function sg__MonsterTeleport_set_x6(i: number, v: number): void
    function rf__sg__MonsterTeleport_get_y6(i: number): void
    function sg__MonsterTeleport_get_y6(i: number): number
    function sg__MonsterTeleport_set_y6(i: number, v: number): void
    function rf__sg__MonsterTeleport_get_x7(i: number): void
    function sg__MonsterTeleport_get_x7(i: number): number
    function sg__MonsterTeleport_set_x7(i: number, v: number): void
    function rf__sg__MonsterTeleport_get_y7(i: number): void
    function sg__MonsterTeleport_get_y7(i: number): number
    function sg__MonsterTeleport_set_y7(i: number, v: number): void
    function rf__sg__MonsterTeleport_get_x8(i: number): void
    function sg__MonsterTeleport_get_x8(i: number): number
    function sg__MonsterTeleport_set_x8(i: number, v: number): void
    function rf__sg__MonsterTeleport_get_y8(i: number): void
    function sg__MonsterTeleport_get_y8(i: number): number
    function sg__MonsterTeleport_set_y8(i: number, v: number): void
    function rf__sg__MonsterTeleport_get_x9(i: number): void
    function sg__MonsterTeleport_get_x9(i: number): number
    function sg__MonsterTeleport_set_x9(i: number, v: number): void
    function rf__sg__MonsterTeleport_get_y9(i: number): void
    function sg__MonsterTeleport_get_y9(i: number): number
    function sg__MonsterTeleport_set_y9(i: number, v: number): void
    function rf__sg__MonsterTeleport_get_x10(i: number): void
    function sg__MonsterTeleport_get_x10(i: number): number
    function sg__MonsterTeleport_set_x10(i: number, v: number): void
    function rf__sg__MonsterTeleport_get_y10(i: number): void
    function sg__MonsterTeleport_get_y10(i: number): number
    function sg__MonsterTeleport_set_y10(i: number, v: number): void
    function rf__sg__MonsterTeleport_get_x11(i: number): void
    function sg__MonsterTeleport_get_x11(i: number): number
    function sg__MonsterTeleport_set_x11(i: number, v: number): void
    function rf__sg__MonsterTeleport_get_y11(i: number): void
    function sg__MonsterTeleport_get_y11(i: number): number
    function sg__MonsterTeleport_set_y11(i: number, v: number): void
    function rf__sg__MonsterTeleport_get_x12(i: number): void
    function sg__MonsterTeleport_get_x12(i: number): number
    function sg__MonsterTeleport_set_x12(i: number, v: number): void
    function rf__sg__MonsterTeleport_get_y12(i: number): void
    function sg__MonsterTeleport_get_y12(i: number): number
    function sg__MonsterTeleport_set_y12(i: number, v: number): void
    function rf__sg__MonsterTeleport_get_x13(i: number): void
    function sg__MonsterTeleport_get_x13(i: number): number
    function sg__MonsterTeleport_set_x13(i: number, v: number): void
    function rf__sg__MonsterTeleport_get_y13(i: number): void
    function sg__MonsterTeleport_get_y13(i: number): number
    function sg__MonsterTeleport_set_y13(i: number, v: number): void
    function rf__sg__MonsterTeleport_get_x14(i: number): void
    function sg__MonsterTeleport_get_x14(i: number): number
    function sg__MonsterTeleport_set_x14(i: number, v: number): void
    function rf__sg__MonsterTeleport_get_y14(i: number): void
    function sg__MonsterTeleport_get_y14(i: number): number
    function sg__MonsterTeleport_set_y14(i: number, v: number): void
    function rf__sg__MonsterTeleport_get_x15(i: number): void
    function sg__MonsterTeleport_get_x15(i: number): number
    function sg__MonsterTeleport_set_x15(i: number, v: number): void
    function rf__sg__MonsterTeleport_get_y15(i: number): void
    function sg__MonsterTeleport_get_y15(i: number): number
    function sg__MonsterTeleport_set_y15(i: number, v: number): void
    function rf__sg__MonsterTeleport_get_x16(i: number): void
    function sg__MonsterTeleport_get_x16(i: number): number
    function sg__MonsterTeleport_set_x16(i: number, v: number): void
    function rf__sg__MonsterTeleport_get_y16(i: number): void
    function sg__MonsterTeleport_get_y16(i: number): number
    function sg__MonsterTeleport_set_y16(i: number, v: number): void
    function rf__sg__MonsterTeleport_get_x17(i: number): void
    function sg__MonsterTeleport_get_x17(i: number): number
    function sg__MonsterTeleport_set_x17(i: number, v: number): void
    function rf__sg__MonsterTeleport_get_y17(i: number): void
    function sg__MonsterTeleport_get_y17(i: number): number
    function sg__MonsterTeleport_set_y17(i: number, v: number): void
    function rf__sg__MonsterTeleport_get_x18(i: number): void
    function sg__MonsterTeleport_get_x18(i: number): number
    function sg__MonsterTeleport_set_x18(i: number, v: number): void
    function rf__sg__MonsterTeleport_get_y18(i: number): void
    function sg__MonsterTeleport_get_y18(i: number): number
    function sg__MonsterTeleport_set_y18(i: number, v: number): void
    function rf__sg__MonsterTeleport_get_x19(i: number): void
    function sg__MonsterTeleport_get_x19(i: number): number
    function sg__MonsterTeleport_set_x19(i: number, v: number): void
    function rf__sg__MonsterTeleport_get_y19(i: number): void
    function sg__MonsterTeleport_get_y19(i: number): number
    function sg__MonsterTeleport_set_y19(i: number, v: number): void
    function rf__sg__MonsterTeleport_get_t(i: number): void
    function sg__MonsterTeleport_get_t(i: number): timer
    function sg__MonsterTeleport_set_t(i: number, v: timer): void
    function sc__MakeAction_cancel(thiss: number): boolean
    function sx__MakeAction_cancel(thiss: number): void
    function sc__MakeAction_redo(thiss: number): boolean
    function sx__MakeAction_redo(thiss: number): void
    function sc__MakeAction_deallocate(thiss: number): void
    function sc__EscaperSavedCommands_new(thiss: number, escaper: number, commandName: string, command: string): void
    function sc__EscaperSavedCommands_execute(thiss: number, escaper: number, commandName: string): boolean
    function rf__s__EscaperSavedCommands__allocate(): void
    function s__EscaperSavedCommands__allocate(): number
    function s__EscaperSavedCommands_deallocate(thiss: number): void
    function sc__CasterArray_create(): number
    function sc__CasterArray_get(thiss: number, arrayId: number): number
    function sc__CasterArray_getLastInstanceId(thiss: number): number
    function sc__CasterArray_new(
        thiss: number,
        casterType: number,
        x: number,
        l__y: number,
        angle: number,
        enable: boolean
    ): number
    function sc__CasterArray_count(thiss: number): number
    function sc__CasterArray_onDestroy(thiss: number): void
    function sc__CasterArray_setCasterNull(thiss: number, casterArrayId: number): void
    function sc__CasterArray_getCasterNear(thiss: number, x: number, l__y: number): number
    function sc__CasterArray_createCasters(thiss: number): void
    function sc__CasterArray_removeCasters(thiss: number): void
    function sc__CasterArray_refreshCastersOfType(thiss: number, casterType: number): void
    function sc__CasterArray_removeCastersOfType(thiss: number, casterType: number): void
    function rf__s__CasterArray__allocate(): void
    function s__CasterArray__allocate(): number
    function sc__CasterArray_deallocate(thiss: number): void
    function sc__MonsterTeleportArray_create(): number
    function sc__MonsterTeleportArray_get(thiss: number, arrayId: number): number
    function sc__MonsterTeleportArray_getLastInstanceId(thiss: number): number
    function sc__MonsterTeleportArray_new(
        thiss: number,
        mt: number,
        period: number,
        angle: number,
        mode: string,
        createUnit: boolean
    ): number
    function sc__MonsterTeleportArray_count(thiss: number): number
    function sc__MonsterTeleportArray_onDestroy(thiss: number): void
    function sc__MonsterTeleportArray_setMonsterNull(thiss: number, monsterArrayId: number): void
    function sc__MonsterTeleportArray_getMonsterNear(thiss: number, x: number, l__y: number): number
    function sc__MonsterTeleportArray_createMonsters(thiss: number): void
    function sc__MonsterTeleportArray_removeMonsters(thiss: number): void
    function sc__MonsterTeleportArray_recreateMonstersOfType(thiss: number, mt: number): void
    function sc__MonsterTeleportArray_removeMonstersOfType(thiss: number, mt: number): void
    function rf__s__MonsterTeleportArray__allocate(): void
    function s__MonsterTeleportArray__allocate(): number
    function sc__MonsterTeleportArray_deallocate(thiss: number): void
    function sc__MonsterSimplePatrolArray_create(): number
    function sc__MonsterSimplePatrolArray_get(thiss: number, arrayId: number): number
    function sc__MonsterSimplePatrolArray_getLastInstanceId(thiss: number): number
    function sc__MonsterSimplePatrolArray_new(
        thiss: number,
        mt: number,
        x1: number,
        y1: number,
        x2: number,
        y2: number,
        createUnit: boolean
    ): number
    function sc__MonsterSimplePatrolArray_count(thiss: number): number
    function sc__MonsterSimplePatrolArray_onDestroy(thiss: number): void
    function sc__MonsterSimplePatrolArray_setMonsterNull(thiss: number, monsterArrayId: number): void
    function sc__MonsterSimplePatrolArray_getMonsterNear(thiss: number, x: number, l__y: number): number
    function sc__MonsterSimplePatrolArray_createMonsters(thiss: number): void
    function sc__MonsterSimplePatrolArray_removeMonsters(thiss: number): void
    function sc__MonsterSimplePatrolArray_recreateMonstersOfType(thiss: number, mt: number): void
    function sc__MonsterSimplePatrolArray_removeMonstersOfType(thiss: number, mt: number): void
    function rf__s__MonsterSimplePatrolArray__allocate(): void
    function s__MonsterSimplePatrolArray__allocate(): number
    function sc__MonsterSimplePatrolArray_deallocate(thiss: number): void
    function sc__MonsterNoMoveArray_create(): number
    function sc__MonsterNoMoveArray_get(thiss: number, arrayId: number): number
    function sc__MonsterNoMoveArray_getLastInstanceId(thiss: number): number
    function sc__MonsterNoMoveArray_new(
        thiss: number,
        mt: number,
        x: number,
        l__y: number,
        angle: number,
        createUnit: boolean
    ): number
    function sc__MonsterNoMoveArray_count(thiss: number): number
    function sc__MonsterNoMoveArray_onDestroy(thiss: number): void
    function sc__MonsterNoMoveArray_setMonsterNull(thiss: number, monsterArrayId: number): void
    function sc__MonsterNoMoveArray_getMonsterNear(thiss: number, x: number, l__y: number): number
    function sc__MonsterNoMoveArray_createMonsters(thiss: number): void
    function sc__MonsterNoMoveArray_removeMonsters(thiss: number): void
    function sc__MonsterNoMoveArray_recreateMonstersOfType(thiss: number, mt: number): void
    function sc__MonsterNoMoveArray_removeMonstersOfType(thiss: number, mt: number): void
    function rf__s__MonsterNoMoveArray__allocate(): void
    function s__MonsterNoMoveArray__allocate(): number
    function sc__MonsterNoMoveArray_deallocate(thiss: number): void
    function sc__MonsterMultiplePatrolsArray_create(): number
    function sc__MonsterMultiplePatrolsArray_get(thiss: number, arrayId: number): number
    function sc__MonsterMultiplePatrolsArray_getLastInstanceId(thiss: number): number
    function sc__MonsterMultiplePatrolsArray_new(thiss: number, mt: number, mode: string, createUnit: boolean): number
    function sc__MonsterMultiplePatrolsArray_count(thiss: number): number
    function sc__MonsterMultiplePatrolsArray_onDestroy(thiss: number): void
    function sc__MonsterMultiplePatrolsArray_setMonsterNull(thiss: number, monsterArrayId: number): void
    function sc__MonsterMultiplePatrolsArray_getMonsterNear(thiss: number, x: number, l__y: number): number
    function sc__MonsterMultiplePatrolsArray_createMonsters(thiss: number): void
    function sc__MonsterMultiplePatrolsArray_removeMonsters(thiss: number): void
    function sc__MonsterMultiplePatrolsArray_recreateMonstersOfType(thiss: number, mt: number): void
    function sc__MonsterMultiplePatrolsArray_removeMonstersOfType(thiss: number, mt: number): void
    function rf__s__MonsterMultiplePatrolsArray__allocate(): void
    function s__MonsterMultiplePatrolsArray__allocate(): number
    function sc__MonsterMultiplePatrolsArray_deallocate(thiss: number): void
    function sc__Meteor_onDestroy(thiss: number): void
    function rf__s__Meteor__allocate(): void
    function s__Meteor__allocate(): number
    function sc__Meteor_deallocate(thiss: number): void
    function sc__MonsterOrCasterStack_onDestroy(thiss: number): void
    function rf__s__MonsterOrCasterStack__allocate(): void
    function s__MonsterOrCasterStack__allocate(): number
    function sc__MonsterOrCasterStack_deallocate(thiss: number): void
    function sc__ClearMobArray_create(): number
    function sc__ClearMobArray_onDestroy(thiss: number): void
    function sc__ClearMobArray_setClearMobNull(thiss: number, clearMobArrayId: number): void
    function sc__ClearMobArray_initializeClearMobs(thiss: number): void
    function rf__s__ClearMobArray__allocate(): void
    function s__ClearMobArray__allocate(): number
    function sc__ClearMobArray_deallocate(thiss: number): void
    function sc__Caster_isEnabled(thiss: number): boolean
    function sc__Caster_getId(thiss: number): number
    function sc__Caster_getX(thiss: number): number
    function sc__Caster_getY(thiss: number): number
    function sc__Caster_getRange(thiss: number): number
    function sc__Caster_getProjectileSpeed(thiss: number): number
    function sc__Caster_getCasterUnit(thiss: number): unit
    function sc__Caster_getProjectileMonsterType(thiss: number): number
    function sc__Caster_getLoadTime(thiss: number): number
    function sc__Caster_getCasterType(thiss: number): number
    function sc__Caster_getAnimation(thiss: number): string
    function sc__Caster_enable(thiss: number): void
    function sc__Caster_disable(thiss: number): void
    function sc__Caster_killUnit(thiss: number): void
    function sc__Caster_onDestroy(thiss: number): void
    function sc__Caster_escaperOutOfRangeOrDead(thiss: number, escaper: number): void
    function sc__Caster_temporarilyDisable(thiss: number, disablingTimer: timer): void
    function sc__Caster_temporarilyEnable(thiss: number, disablingTimer: timer): void
    function sc__Caster_setBaseColor(thiss: number, colorString: string): void
    function sc__Caster_setVertexColor(thiss: number, vcRed: number, vcGreen: number, vcBlue: number): void
    function sc__Caster_reinitColor(thiss: number): void
    function sc__Caster_toString(thiss: number): string
    function rf__s__Caster__allocate(): void
    function s__Caster__allocate(): number
    function sc__Caster_deallocate(thiss: number): void
    function sc__Stack_onDestroy(thiss: number): void
    function rf__s__Stack__allocate(): void
    function s__Stack__allocate(): number
    function sc__Stack_deallocate(thiss: number): void
    function rf__s__StringSegments__allocate(): void
    function s__StringSegments__allocate(): number
    function s__StringSegments_deallocate(thiss: number): void
    function sc__MonsterOrCaster_create(mobId: number): number
    function sc__MonsterOrCaster_getId(thiss: number): number
    function sc__MonsterOrCaster_killUnit(thiss: number): void
    function sc__MonsterOrCaster_temporarilyDisable(thiss: number, disablingTimer: timer): void
    function sc__MonsterOrCaster_temporarilyEnable(thiss: number, enablingTimer: timer): void
    function sc__MonsterOrCaster_setBaseColor(thiss: number, colorString: string): void
    function sc__MonsterOrCaster_setVertexColor(thiss: number, vcRed: number, vcGreen: number, vcBlue: number): void
    function sc__MonsterOrCaster_reinitColor(thiss: number): void
    function sc__MonsterOrCaster_getUnit(thiss: number): unit
    function sc__MonsterOrCaster_copy(thiss: number): number
    function sc__MonsterOrCaster_getMonsterType(thiss: number): number
    function rf__s__MonsterOrCaster__allocate(): void
    function s__MonsterOrCaster__allocate(): number
    function s__MonsterOrCaster_deallocate(thiss: number): void
    function sc__Trigger_onDestroy(thiss: number): void
    function rf__s__Trigger__allocate(): void
    function s__Trigger__allocate(): number
    function sc__Trigger_deallocate(thiss: number): void
    function sc__TriggerArray_onDestroy(thiss: number): void
    function rf__s__TriggerArray__allocate(): void
    function s__TriggerArray__allocate(): number
    function sc__TriggerArray_deallocate(thiss: number): void
    function sc__VisibilityModifier_onDestroy(thiss: number): void
    function rf__s__VisibilityModifier__allocate(): void
    function s__VisibilityModifier__allocate(): number
    function sc__VisibilityModifier_deallocate(thiss: number): void
    function sc__CasterType_onDestroy(thiss: number): void
    function rf__s__CasterType__allocate(): void
    function s__CasterType__allocate(): number
    function sc__CasterType_deallocate(thiss: number): void
    function sc__MakeCasterAction_onDestroy(thiss: number): void
    function sc__MakeCasterAction_cancel(thiss: number): boolean
    function sc__MakeCasterAction_redo(thiss: number): boolean
    function rf__s__MakeCasterAction__allocate(): void
    function s__MakeCasterAction__allocate(): number
    function sc__MakeDeleteCastersAction_onDestroy(thiss: number): void
    function sc__MakeDeleteCastersAction_cancel(thiss: number): boolean
    function sc__MakeDeleteCastersAction_redo(thiss: number): boolean
    function rf__s__MakeDeleteCastersAction__allocate(): void
    function s__MakeDeleteCastersAction__allocate(): number
    function sc__MakeDeleteMeteorsAction_onDestroy(thiss: number): void
    function sc__MakeDeleteMeteorsAction_cancel(thiss: number): boolean
    function sc__MakeDeleteMeteorsAction_redo(thiss: number): boolean
    function rf__s__MakeDeleteMeteorsAction__allocate(): void
    function s__MakeDeleteMeteorsAction__allocate(): number
    function sc__MakeDeleteMonstersAction_onDestroy(thiss: number): void
    function sc__MakeDeleteMonstersAction_cancel(thiss: number): boolean
    function sc__MakeDeleteMonstersAction_redo(thiss: number): boolean
    function rf__s__MakeDeleteMonstersAction__allocate(): void
    function s__MakeDeleteMonstersAction__allocate(): number
    function sc__MakeLastActions_onDestroy(thiss: number): void
    function rf__s__MakeLastActions__allocate(): void
    function s__MakeLastActions__allocate(): number
    function sc__MakeLastActions_deallocate(thiss: number): void
    function sc__MakeMeteorAction_getLevel(thiss: number): number
    function sc__MakeMeteorAction_onDestroy(thiss: number): void
    function sc__MakeMeteorAction_cancel(thiss: number): boolean
    function sc__MakeMeteorAction_redo(thiss: number): boolean
    function rf__s__MakeMeteorAction__allocate(): void
    function s__MakeMeteorAction__allocate(): number
    function sc__MakeMonsterAction_getLevel(thiss: number): number
    function sc__MakeMonsterAction_onDestroy(thiss: number): void
    function sc__MakeMonsterAction_cancel(thiss: number): boolean
    function sc__MakeMonsterAction_redo(thiss: number): boolean
    function rf__s__MakeMonsterAction__allocate(): void
    function s__MakeMonsterAction__allocate(): number
    function sc__MakeTerrainHeightAction_apply(thiss: number): void
    function sc__MakeTerrainHeightAction_cancel(thiss: number): boolean
    function sc__MakeTerrainHeightAction_redo(thiss: number): boolean
    function rf__s__MakeTerrainHeightAction__allocate(): void
    function s__MakeTerrainHeightAction__allocate(): number
    function sc__MakeVisibilityModifierAction_getLevel(thiss: number): number
    function sc__MakeVisibilityModifierAction_onDestroy(thiss: number): void
    function sc__MakeVisibilityModifierAction_cancel(thiss: number): boolean
    function sc__MakeVisibilityModifierAction_redo(thiss: number): boolean
    function rf__s__MakeVisibilityModifierAction__allocate(): void
    function s__MakeVisibilityModifierAction__allocate(): number
    function sc__MeteorArray_setMeteorNull(thiss: number, arrayId: number): void
    function sc__MeteorArray_onDestroy(thiss: number): void
    function rf__s__MeteorArray__allocate(): void
    function s__MeteorArray__allocate(): number
    function sc__MeteorArray_deallocate(thiss: number): void
    function sc__MonsterType_onDestroy(thiss: number): void
    function rf__s__MonsterType__allocate(): void
    function s__MonsterType__allocate(): number
    function sc__MonsterType_deallocate(thiss: number): void
    function rf__s__SoundUtils__soundhelper__allocate(): void
    function s__SoundUtils__soundhelper__allocate(): number
    function s__SoundUtils__soundhelper_deallocate(thiss: number): void
    function sc__SoundUtils__soundrecycler_onDestroy(thiss: number): void
    function rf__s__SoundUtils__soundrecycler__allocate(): void
    function s__SoundUtils__soundrecycler__allocate(): number
    function sc__SoundUtils__soundrecycler_deallocate(thiss: number): void
    function sc__StringArrayForCache_create(category: string, variableName: string, avecSeparateur: boolean): number
    function sc__StringArrayForCache_push(thiss: number, str: string): void
    function sc__StringArrayForCache_writeInCache(thiss: number): void
    function rf__s__StringArrayForCache__allocate(): void
    function s__StringArrayForCache__allocate(): number
    function s__StringArrayForCache_deallocate(thiss: number): void
    function sc__VisibilityModifierArray_onDestroy(thiss: number): void
    function sc__VisibilityModifierArray_count(thiss: number): number
    function sc__VisibilityModifierArray_get(thiss: number, visibilityId: number): number
    function sc__VisibilityModifierArray_getLastInstanceId(thiss: number): number
    function sc__VisibilityModifierArray_setNull(thiss: number, arrayId: number): void
    function rf__s__VisibilityModifierArray__allocate(): void
    function s__VisibilityModifierArray__allocate(): number
    function sc__VisibilityModifierArray_deallocate(thiss: number): void
    function rf__s__CasterTypeArray__allocate(): void
    function s__CasterTypeArray__allocate(): number
    function s__CasterTypeArray_deallocate(thiss: number): void
    function sc__LevelArray_goToLevel(thiss: number, finisher: number, levelId: number): boolean
    function sc__LevelArray_goToNextLevel(thiss: number, finisher: number): boolean
    function sc__LevelArray_restartTheGame(thiss: number): void
    function sc__LevelArray_new(thiss: number): boolean
    function sc__LevelArray_destroyLastLevel(thiss: number): boolean
    function sc__LevelArray_count(thiss: number): number
    function sc__LevelArray_getCurrentLevel(thiss: number): number
    function sc__LevelArray_get(thiss: number, levelId: number): number
    function sc__LevelArray_getLevelFromMonsterSpawnArray(thiss: number, msa: number): number
    function sc__LevelArray_getLevelFromMeteorArray(thiss: number, ma: number): number
    function sc__LevelArray_getLevelFromVisibilityModifierArray(thiss: number, vma: number): number
    function sc__LevelArray_removeMonstersOfType(thiss: number, mt: number): void
    function sc__LevelArray_removeCastersOfType(thiss: number, ct: number): void
    function sc__LevelArray_getLastLevelId(thiss: number): number
    function sc__LevelArray_getNbMonsters(thiss: number, mode: string): number
    function rf__s__LevelArray__allocate(): void
    function s__LevelArray__allocate(): number
    function s__LevelArray_deallocate(thiss: number): void
    function sc__ClearMob_getTriggerMob(thiss: number): number
    function sc__ClearMob_getBlockMobs(thiss: number): number
    function sc__ClearMob_initialize(thiss: number): void
    function sc__ClearMob_onDestroy(thiss: number): void
    function sc__ClearMob_isBeingActivated(thiss: number): boolean
    function rf__s__ClearMob__allocate(): void
    function s__ClearMob__allocate(): number
    function sc__ClearMob_deallocate(thiss: number): void
    function sc__TerrainTypeArray_get(thiss: number, label: string): number
    function sc__TerrainTypeArray_getTerrainType(thiss: number, x: number, l__y: number): number
    function sc__TerrainTypeArray_isTerrainTypeIdAlreadyUsed(thiss: number, terrainTypeId: number): boolean
    function sc__TerrainTypeArray_isLabelAlreadyUsed(thiss: number, label: string): boolean
    function sc__TerrainTypeArray_newWalk(
        thiss: number,
        label: string,
        terrainTypeId: number,
        walkspeed: number
    ): number
    function sc__TerrainTypeArray_newDeath(
        thiss: number,
        label: string,
        terrainTypeId: number,
        killingEffectStr: string,
        timeToKill: number,
        toleranceDist: number
    ): number
    function sc__TerrainTypeArray_newSlide(
        thiss: number,
        label: string,
        terrainTypeId: number,
        slideSpeed: number,
        canTurn: boolean
    ): number
    function sc__TerrainTypeArray_getWalk(thiss: number, id: number): number
    function sc__TerrainTypeArray_getDeath(thiss: number, id: number): number
    function sc__TerrainTypeArray_getSlide(thiss: number, id: number): number
    function sc__TerrainTypeArray_displayForPlayer(thiss: number, p: player): void
    function sc__TerrainTypeArray_saveInCache(thiss: number): void
    function sc__TerrainTypeArray_count(thiss: number): number
    function sc__TerrainTypeArray_getMainTileset(thiss: number): string
    function rf__s__TerrainTypeArray__allocate(): void
    function s__TerrainTypeArray__allocate(): number
    function s__TerrainTypeArray_deallocate(thiss: number): void
    function sc__Monster_getId(thiss: number): number
    function sx__Monster_getId(thiss: number): void
    function sc__Monster_createUnit(thiss: number): void
    function sx__Monster_createUnit(thiss: number): void
    function sc__Monster_removeUnit(thiss: number): void
    function sx__Monster_removeUnit(thiss: number): void
    function sc__Monster_killUnit(thiss: number): void
    function sx__Monster_killUnit(thiss: number): void
    function sc__Monster_getMonsterType(thiss: number): number
    function sx__Monster_getMonsterType(thiss: number): void
    function sc__Monster_setMonsterType(thiss: number, mt: number): boolean
    function sx__Monster_setMonsterType(thiss: number, mt: number): void
    function sc__Monster_toString(thiss: number): string
    function sx__Monster_toString(thiss: number): void
    function sc__Monster_getLife(thiss: number): number
    function sx__Monster_getLife(thiss: number): void
    function sc__Monster_setLife(thiss: number, life: number): void
    function sx__Monster_setLife(thiss: number, life: number): void
    function sc__Monster_temporarilyDisable(thiss: number, disablingTimer: timer): void
    function sx__Monster_temporarilyDisable(thiss: number, disablingTimer: timer): void
    function sc__Monster_temporarilyEnable(thiss: number, enablingTimer: timer): void
    function sx__Monster_temporarilyEnable(thiss: number, enablingTimer: timer): void
    function sc__Monster_setBaseColor(thiss: number, colorString: string): void
    function sx__Monster_setBaseColor(thiss: number, colorString: string): void
    function sc__Monster_setVertexColor(thiss: number, vcRed: number, vcGreen: number, vcBlue: number): void
    function sx__Monster_setVertexColor(thiss: number, vcRed: number, vcGreen: number, vcBlue: number): void
    function sc__Monster_reinitColor(thiss: number): void
    function sx__Monster_reinitColor(thiss: number): void
    function sc__Monster_deallocate(thiss: number): void
    function sc__Make_cancelLastAction(thiss: number): boolean
    function sx__Make_cancelLastAction(thiss: number): void
    function sc__Make_redoLastAction(thiss: number): boolean
    function sx__Make_redoLastAction(thiss: number): void
    function sc__Make_deallocate(thiss: number): void
    function sc__Level_activate(thiss: number, activ: boolean): void
    function sc__Level_getStart(thiss: number): number
    function sc__Level_getStartRandomX(thiss: number): number
    function sc__Level_getStartRandomY(thiss: number): number
    function sc__Level_newStart(thiss: number, x1: number, y1: number, x2: number, y2: number): void
    function sc__Level_newEnd(thiss: number, x1: number, y1: number, x2: number, y2: number): void
    function sc__Level_getEnd(thiss: number): number
    function sc__Level_getNbMonsters(thiss: number, mode: string): number
    function sc__Level_onDestroy(thiss: number): void
    function sc__Level_recreateMonstersOfType(thiss: number, mt: number): void
    function sc__Level_refreshCastersOfType(thiss: number, ct: number): void
    function sc__Level_getId(thiss: number): number
    function sc__Level_setNbLivesEarned(thiss: number, nbLives: number): boolean
    function sc__Level_getNbLives(thiss: number): number
    function sc__Level_newVisibilityModifier(thiss: number, x1: number, y1: number, x2: number, y2: number): number
    function sc__Level_newVisibilityModifierFromExisting(thiss: number, vm: number): number
    function sc__Level_removeVisibilities(thiss: number): void
    function sc__Level_activateVisibilities(thiss: number, activate: boolean): void
    function sc__Level_setStartMessage(thiss: number, str: string): void
    function sc__Level_getStartMessage(thiss: number): string
    function rf__s__Level__allocate(): void
    function s__Level__allocate(): number
    function sc__Level_deallocate(thiss: number): void
    function sc__Lives_getLeaderboard(thiss: number): leaderboard
    function sc__Lives_onDestroy(thiss: number): void
    function rf__s__Lives__allocate(): void
    function s__Lives__allocate(): number
    function sc__Lives_deallocate(thiss: number): void
    function sc__RectInterface_toString(thiss: number): string
    function sx__RectInterface_toString(thiss: number): void
    function sc__RectInterface_deallocate(thiss: number): void
    function sc__EscaperArray_get(thiss: number, id: number): number
    function sc__EscaperArray_nullify(thiss: number, id: number): void
    function rf__s__EscaperArray__allocate(): void
    function s__EscaperArray__allocate(): number
    function s__EscaperArray_deallocate(thiss: number): void
    function rf__s__MonsterTypeArray__allocate(): void
    function s__MonsterTypeArray__allocate(): number
    function s__MonsterTypeArray_deallocate(thiss: number): void
    function sc__Escaper_onDestroy(thiss: number): void
    function sc__Escaper_enableSlide(thiss: number, doEnable: boolean): boolean
    function sc__Escaper_enableCheckTerrain(thiss: number, doEnable: boolean): boolean
    function sc__Escaper_isSliding(thiss: number): boolean
    function sc__Escaper_doesCheckTerrain(thiss: number): boolean
    function sc__Escaper_moveHero(thiss: number, x: number, l__y: number): void
    function sc__Escaper_moveInvisUnit(thiss: number, x: number, l__y: number): void
    function sc__Escaper_getHero(thiss: number): unit
    function sc__Escaper_isAlive(thiss: number): boolean
    function sc__Escaper_kill(thiss: number): boolean
    function sc__Escaper_pause(thiss: number, doPause: boolean): boolean
    function sc__Escaper_reverse(thiss: number): void
    function sc__Escaper_setIsHeroSelectedForPlayer(thiss: number, p: player, heroSelected: boolean): void
    function sc__Escaper_destroyTerrainKillEffect(thiss: number): void
    function sc__Escaper_getLastTerrainType(thiss: number): number
    function sc__Escaper_setLastTerrainType(thiss: number, terrainType: number): void
    function sc__Escaper_setSlideSpeed(thiss: number, slideSpeed: number): void
    function sc__Escaper_setWalkSpeed(thiss: number, walkSpeed: number): void
    function sc__Escaper_getSlideSpeed(thiss: number): number
    function sc__Escaper_getRealSlideSpeed(thiss: number): number
    function sc__Escaper_getWalkSpeed(thiss: number): number
    function sc__Escaper_isAbsoluteSlideSpeed(thiss: number): boolean
    function sc__Escaper_isAbsoluteWalkSpeed(thiss: number): boolean
    function sc__Escaper_isGodModeOn(thiss: number): boolean
    function sc__Escaper_setBaseColorDisco(thiss: number, baseColorId: number): boolean
    function sc__Escaper_getBaseColor(thiss: number): number
    function sc__Escaper_setVcRed(thiss: number, vcRed: number): boolean
    function sc__Escaper_setVcGreen(thiss: number, vcGreen: number): boolean
    function sc__Escaper_setVcBlue(thiss: number, vcBlue: number): boolean
    function sc__Escaper_setVcTransparency(thiss: number, vcTransparency: number): boolean
    function sc__Escaper_getVcRed(thiss: number): number
    function sc__Escaper_getVcGreen(thiss: number): number
    function sc__Escaper_getVcBlue(thiss: number): number
    function sc__Escaper_getVcTransparency(thiss: number): number
    function sc__Escaper_getPlayer(thiss: number): player
    function sc__Escaper_getMakingLevel(thiss: number): number
    function sc__Escaper_destroyMake(thiss: number): boolean
    function sc__Escaper_destroyAllSavedActions(thiss: number): void
    function sc__Escaper_getLastZ(thiss: number): number
    function sc__Escaper_setLastZ(thiss: number, lastZ: number): void
    function sc__Escaper_getOldDiffZ(thiss: number): number
    function sc__Escaper_setOldDiffZ(thiss: number, oldDiffZ: number): void
    function sc__Escaper_getSpeedZ(thiss: number): number
    function sc__Escaper_setSpeedZ(thiss: number, speedZ: number): void
    function sc__Escaper_setCoopInvul(thiss: number, invul: boolean): void
    function sc__Escaper_refreshCerclePosition(thiss: number): void
    function rf__s__Escaper__allocate(): void
    function s__Escaper__allocate(): number
    function sc__Escaper_deallocate(thiss: number): void
    function sc__KillingTimers_onDestroy(thiss: number): void
    function rf__s__KillingTimers__allocate(): void
    function s__KillingTimers__allocate(): number
    function sc__KillingTimers_deallocate(thiss: number): void
    function sc__MonsterSpawnArray_get(thiss: number, arrayId: number): number
    function sc__MonsterSpawnArray_getLastInstanceId(thiss: number): number
    function sc__MonsterSpawnArray_count(thiss: number): number
    function sc__MonsterSpawnArray_onDestroy(thiss: number): void
    function sc__MonsterSpawnArray_setMonsterSpawnNull(thiss: number, monsterSpawnArrayId: number): void
    function rf__s__MonsterSpawnArray__allocate(): void
    function s__MonsterSpawnArray__allocate(): number
    function sc__MonsterSpawnArray_deallocate(thiss: number): void
    function sc__EscaperEffectArray_onDestroy(thiss: number): void
    function rf__s__EscaperEffectArray__allocate(): void
    function s__EscaperEffectArray__allocate(): number
    function sc__EscaperEffectArray_deallocate(thiss: number): void
    function sc__TerrainType_getTerrainTypeId(thiss: number): number
    function sc__TerrainType_getKind(thiss: number): string
    function sc__TerrainType_onDestroy(thiss: number): void
    function rf__s__TerrainType__allocate(): void
    function s__TerrainType__allocate(): number
    function sc__TerrainType_deallocate(thiss: number): void
    function sc__MonsterSpawn_onDestroy(thiss: number): void
    function sc__MonsterSpawn_startMobMovement(thiss: number, mobUnit: unit): void
    function sc__MonsterSpawn_createMob(thiss: number): unit
    function sc__MonsterSpawn_toString(thiss: number): string
    function rf__s__MonsterSpawn__allocate(): void
    function s__MonsterSpawn__allocate(): number
    function sc__MonsterSpawn_deallocate(thiss: number): void
    function sc__MakeTerrainVerticalSymmetryAction_applySymmetry(thiss: number): void
    function sc__MakeTerrainVerticalSymmetryAction_cancel(thiss: number): boolean
    function sc__MakeTerrainVerticalSymmetryAction_redo(thiss: number): boolean
    function rf__s__MakeTerrainVerticalSymmetryAction__allocate(): void
    function s__MakeTerrainVerticalSymmetryAction__allocate(): number
    function sc__MakeTerrainHorizontalSymmetryAction_applySymmetry(thiss: number): void
    function sc__MakeTerrainHorizontalSymmetryAction_cancel(thiss: number): boolean
    function sc__MakeTerrainHorizontalSymmetryAction_redo(thiss: number): boolean
    function rf__s__MakeTerrainHorizontalSymmetryAction__allocate(): void
    function s__MakeTerrainHorizontalSymmetryAction__allocate(): number
    function sc__MakeTerrainCreateAction_onDestroy(thiss: number): void
    function sc__MakeTerrainCreateAction_cancel(thiss: number): boolean
    function sc__MakeTerrainCreateAction_redo(thiss: number): boolean
    function rf__s__MakeTerrainCreateAction__allocate(): void
    function s__MakeTerrainCreateAction__allocate(): number
    function sc__MakeTerrainCopyPasteAction_onDestroy(thiss: number): void
    function sc__MakeTerrainCopyPasteAction_cancel(thiss: number): boolean
    function sc__MakeTerrainCopyPasteAction_redo(thiss: number): boolean
    function rf__s__MakeTerrainCopyPasteAction__allocate(): void
    function s__MakeTerrainCopyPasteAction__allocate(): number
    function sc__EscaperEffect_onDestroy(thiss: number): void
    function rf__s__EscaperEffect__allocate(): void
    function s__EscaperEffect__allocate(): number
    function sc__EscaperEffect_deallocate(thiss: number): void
    function sc__CasterShot_create(
        monsterType: number,
        Xdep: number,
        Ydep: number,
        angle: number,
        speed: number,
        portee: number
    ): number
    function sc__CasterShot_onDestroy(thiss: number): void
    function rf__s__CasterShot__allocate(): void
    function s__CasterShot__allocate(): number
    function sc__CasterShot_deallocate(thiss: number): void
    function sc__MakeDeleteClearMob_create(maker: unit): number
    function sc__MakeDeleteClearMob_onDestroy(thiss: number): void
    function sc__MakeDeleteClearMob_clickMade(thiss: number, monsterOrCasterId: number): void
    function sc__MakeDeleteClearMob_cancelLastAction(thiss: number): boolean
    function sc__MakeDeleteClearMob_redoLastAction(thiss: number): boolean
    function rf__s__MakeDeleteClearMob__allocate(): void
    function s__MakeDeleteClearMob__allocate(): number
    function sc__TerrainTypeSlide_getSlideSpeed(thiss: number): number
    function sc__TerrainTypeSlide_getCanTurn(thiss: number): boolean
    function rf__s__TerrainTypeSlide__allocate(): void
    function s__TerrainTypeSlide__allocate(): number
    function sc__TerrainTypeWalk_getWalkSpeed(thiss: number): number
    function rf__s__TerrainTypeWalk__allocate(): void
    function s__TerrainTypeWalk__allocate(): number
    function sc__TerrainTypeDeath_onDestroy(thiss: number): void
    function sc__TerrainTypeDeath_getKillingEffectStr(thiss: number): string
    function sc__TerrainTypeDeath_getTimeToKill(thiss: number): number
    function sc__TerrainTypeDeath_killEscaper(thiss: number, escaper: number): void
    function sc__TerrainTypeDeath_getTimer(thiss: number, escaperId: number): timer
    function sc__TerrainTypeDeath_getToleranceDist(thiss: number): number
    function rf__s__TerrainTypeDeath__allocate(): void
    function s__TerrainTypeDeath__allocate(): number
    function sc__Start_onDestroy(thiss: number): void
    function sc__Start_getRandomX(thiss: number): number
    function sc__Start_getRandomY(thiss: number): number
    function sc__Start_toString(thiss: number): string
    function rf__s__Start__allocate(): void
    function s__Start__allocate(): number
    function sc__End_onDestroy(thiss: number): void
    function sc__End_toString(thiss: number): string
    function rf__s__End__allocate(): void
    function s__End__allocate(): number
    function sc__MakeCaster_getCasterType(thiss: number): number
    function sc__MakeCaster_getAngle(thiss: number): number
    function sc__MakeCaster_create(maker: unit, casterType: number, angle: number): number
    function sc__MakeCaster_onDestroy(thiss: number): void
    function sc__MakeCaster_cancelLastAction(thiss: number): boolean
    function sc__MakeCaster_redoLastAction(thiss: number): boolean
    function rf__s__MakeCaster__allocate(): void
    function s__MakeCaster__allocate(): number
    function sc__MakeDeleteCasters_isLastLocSavedUsed(thiss: number): boolean
    function sc__MakeDeleteCasters_create(maker: unit, mode: string): number
    function sc__MakeDeleteCasters_onDestroy(thiss: number): void
    function sc__MakeDeleteCasters_saveLoc(thiss: number, x: number, l__y: number): void
    function sc__MakeDeleteCasters_unsaveLocDefinitely(thiss: number): void
    function sc__MakeDeleteCasters_cancelLastAction(thiss: number): boolean
    function sc__MakeDeleteCasters_redoLastAction(thiss: number): boolean
    function sc__MakeDeleteCasters_getMode(thiss: number): string
    function rf__s__MakeDeleteCasters__allocate(): void
    function s__MakeDeleteCasters__allocate(): number
    function sc__MakeDeleteMeteors_isLastLocSavedUsed(thiss: number): boolean
    function sc__MakeDeleteMeteors_create(maker: unit, mode: string): number
    function sc__MakeDeleteMeteors_onDestroy(thiss: number): void
    function sc__MakeDeleteMeteors_saveLoc(thiss: number, x: number, l__y: number): void
    function sc__MakeDeleteMeteors_unsaveLocDefinitely(thiss: number): void
    function sc__MakeDeleteMeteors_cancelLastAction(thiss: number): boolean
    function sc__MakeDeleteMeteors_redoLastAction(thiss: number): boolean
    function sc__MakeDeleteMeteors_getMode(thiss: number): string
    function rf__s__MakeDeleteMeteors__allocate(): void
    function s__MakeDeleteMeteors__allocate(): number
    function sc__MakeDeleteMonsters_isLastLocSavedUsed(thiss: number): boolean
    function sc__MakeDeleteMonsters_create(maker: unit, mode: string): number
    function sc__MakeDeleteMonsters_onDestroy(thiss: number): void
    function sc__MakeDeleteMonsters_saveLoc(thiss: number, x: number, l__y: number): void
    function sc__MakeDeleteMonsters_unsaveLocDefinitely(thiss: number): void
    function sc__MakeDeleteMonsters_cancelLastAction(thiss: number): boolean
    function sc__MakeDeleteMonsters_redoLastAction(thiss: number): boolean
    function sc__MakeDeleteMonsters_getMode(thiss: number): string
    function rf__s__MakeDeleteMonsters__allocate(): void
    function s__MakeDeleteMonsters__allocate(): number
    function sc__MakeEnd_create(maker: unit): number
    function sc__MakeEnd_onDestroy(thiss: number): void
    function sc__MakeEnd_saveLoc(thiss: number, x: number, l__y: number): void
    function sc__MakeEnd_isLastLocSavedUsed(thiss: number): boolean
    function sc__MakeEnd_cancelLastAction(thiss: number): boolean
    function sc__MakeEnd_redoLastAction(thiss: number): boolean
    function rf__s__MakeEnd__allocate(): void
    function s__MakeEnd__allocate(): number
    function sc__MakeExchangeTerrains_create(maker: unit): number
    function sc__MakeExchangeTerrains_onDestroy(thiss: number): void
    function sc__MakeExchangeTerrains_saveLoc(thiss: number, x: number, l__y: number): void
    function sc__MakeExchangeTerrains_unsaveLocDefinitely(thiss: number): void
    function sc__MakeExchangeTerrains_isLastLocSavedUsed(thiss: number): boolean
    function sc__MakeExchangeTerrains_cancelLastAction(thiss: number): boolean
    function sc__MakeExchangeTerrains_redoLastAction(thiss: number): boolean
    function rf__s__MakeExchangeTerrains__allocate(): void
    function s__MakeExchangeTerrains__allocate(): number
    function sc__MakeGetTerrainType_create(maker: unit): number
    function sc__MakeGetTerrainType_onDestroy(thiss: number): void
    function sc__MakeGetTerrainType_cancelLastAction(thiss: number): boolean
    function sc__MakeGetTerrainType_redoLastAction(thiss: number): boolean
    function rf__s__MakeGetTerrainType__allocate(): void
    function s__MakeGetTerrainType__allocate(): number
    function sc__MakeGetUnitTeleportPeriod_create(maker: unit): number
    function sc__MakeGetUnitTeleportPeriod_onDestroy(thiss: number): void
    function sc__MakeGetUnitTeleportPeriod_cancelLastAction(thiss: number): boolean
    function sc__MakeGetUnitTeleportPeriod_redoLastAction(thiss: number): boolean
    function rf__s__MakeGetUnitTeleportPeriod__allocate(): void
    function s__MakeGetUnitTeleportPeriod__allocate(): number
    function sc__MakeMeteor_create(maker: unit): number
    function sc__MakeMeteor_onDestroy(thiss: number): void
    function sc__MakeMeteor_cancelLastAction(thiss: number): boolean
    function sc__MakeMeteor_redoLastAction(thiss: number): boolean
    function rf__s__MakeMeteor__allocate(): void
    function s__MakeMeteor__allocate(): number
    function sc__MakeMonsterMultiplePatrols_getMonsterType(thiss: number): number
    function sc__MakeMonsterMultiplePatrols_getMode(thiss: number): string
    function sc__MakeMonsterMultiplePatrols_getMonster(thiss: number): number
    function sc__MakeMonsterMultiplePatrols_create(maker: unit, mode: string, mt: number): number
    function sc__MakeMonsterMultiplePatrols_onDestroy(thiss: number): void
    function sc__MakeMonsterMultiplePatrols_nextMonster(thiss: number): void
    function sc__MakeMonsterMultiplePatrols_getLocPointeur(thiss: number): number
    function sc__MakeMonsterMultiplePatrols_saveLoc(thiss: number, x: number, l__y: number): void
    function sc__MakeMonsterMultiplePatrols_setMonster(thiss: number, monster: number): void
    function sc__MakeMonsterMultiplePatrols_cancelLastAction(thiss: number): boolean
    function sc__MakeMonsterMultiplePatrols_redoLastAction(thiss: number): boolean
    function rf__s__MakeMonsterMultiplePatrols__allocate(): void
    function s__MakeMonsterMultiplePatrols__allocate(): number
    function sc__MakeMonsterNoMove_getMonsterType(thiss: number): number
    function sc__MakeMonsterNoMove_getFacingAngle(thiss: number): number
    function sc__MakeMonsterNoMove_create(maker: unit, mt: number, facingAngle: number): number
    function sc__MakeMonsterNoMove_onDestroy(thiss: number): void
    function sc__MakeMonsterNoMove_cancelLastAction(thiss: number): boolean
    function sc__MakeMonsterNoMove_redoLastAction(thiss: number): boolean
    function rf__s__MakeMonsterNoMove__allocate(): void
    function s__MakeMonsterNoMove__allocate(): number
    function sc__MakeMonsterSimplePatrol_getMonsterType(thiss: number): number
    function sc__MakeMonsterSimplePatrol_create(maker: unit, mode: string, mt: number): number
    function sc__MakeMonsterSimplePatrol_onDestroy(thiss: number): void
    function sc__MakeMonsterSimplePatrol_saveLoc(thiss: number, x: number, l__y: number): void
    function sc__MakeMonsterSimplePatrol_unsaveLoc(thiss: number): boolean
    function sc__MakeMonsterSimplePatrol_unsaveLocDefinitely(thiss: number): void
    function sc__MakeMonsterSimplePatrol_isLastLocSavedUsed(thiss: number): boolean
    function sc__MakeMonsterSimplePatrol_cancelLastAction(thiss: number): boolean
    function sc__MakeMonsterSimplePatrol_redoLastAction(thiss: number): boolean
    function sc__MakeMonsterSimplePatrol_getMode(thiss: number): string
    function rf__s__MakeMonsterSimplePatrol__allocate(): void
    function s__MakeMonsterSimplePatrol__allocate(): number
    function sc__MakeMonsterSpawn_create(
        maker: unit,
        label: string,
        mt: number,
        sens: string,
        frequence: number
    ): number
    function sc__MakeMonsterSpawn_onDestroy(thiss: number): void
    function sc__MakeMonsterSpawn_saveLoc(thiss: number, x: number, l__y: number): void
    function sc__MakeMonsterSpawn_isLastLocSavedUsed(thiss: number): boolean
    function sc__MakeMonsterSpawn_cancelLastAction(thiss: number): boolean
    function sc__MakeMonsterSpawn_redoLastAction(thiss: number): boolean
    function rf__s__MakeMonsterSpawn__allocate(): void
    function s__MakeMonsterSpawn__allocate(): number
    function sc__MakeMonsterTeleport_getMonsterType(thiss: number): number
    function sc__MakeMonsterTeleport_getPeriod(thiss: number): number
    function sc__MakeMonsterTeleport_getAngle(thiss: number): number
    function sc__MakeMonsterTeleport_getMode(thiss: number): string
    function sc__MakeMonsterTeleport_getMonster(thiss: number): number
    function sc__MakeMonsterTeleport_create(
        maker: unit,
        mode: string,
        mt: number,
        period: number,
        angle: number
    ): number
    function sc__MakeMonsterTeleport_onDestroy(thiss: number): void
    function sc__MakeMonsterTeleport_nextMonster(thiss: number): void
    function sc__MakeMonsterTeleport_addWaitPeriod(thiss: number): boolean
    function sc__MakeMonsterTeleport_addHidePeriod(thiss: number): boolean
    function sc__MakeMonsterTeleport_getLocPointeur(thiss: number): number
    function sc__MakeMonsterTeleport_saveLoc(thiss: number, x: number, l__y: number): boolean
    function sc__MakeMonsterTeleport_setMonster(thiss: number, monster: number): void
    function sc__MakeMonsterTeleport_cancelLastAction(thiss: number): boolean
    function sc__MakeMonsterTeleport_redoLastAction(thiss: number): boolean
    function rf__s__MakeMonsterTeleport__allocate(): void
    function s__MakeMonsterTeleport__allocate(): number
    function sc__MakeSetUnitMonsterType_getMonsterType(thiss: number): number
    function sc__MakeSetUnitMonsterType_isLastLocSavedUsed(thiss: number): boolean
    function sc__MakeSetUnitMonsterType_create(maker: unit, mode: string, mt: number): number
    function sc__MakeSetUnitMonsterType_onDestroy(thiss: number): void
    function sc__MakeSetUnitMonsterType_saveLoc(thiss: number, x: number, l__y: number): void
    function sc__MakeSetUnitMonsterType_unsaveLocDefinitely(thiss: number): void
    function sc__MakeSetUnitMonsterType_cancelLastAction(thiss: number): boolean
    function sc__MakeSetUnitMonsterType_redoLastAction(thiss: number): boolean
    function sc__MakeSetUnitMonsterType_getMode(thiss: number): string
    function rf__s__MakeSetUnitMonsterType__allocate(): void
    function s__MakeSetUnitMonsterType__allocate(): number
    function sc__MakeSetUnitTeleportPeriod_getPeriod(thiss: number): number
    function sc__MakeSetUnitTeleportPeriod_isLastLocSavedUsed(thiss: number): boolean
    function sc__MakeSetUnitTeleportPeriod_create(maker: unit, mode: string, period: number): number
    function sc__MakeSetUnitTeleportPeriod_onDestroy(thiss: number): void
    function sc__MakeSetUnitTeleportPeriod_saveLoc(thiss: number, x: number, l__y: number): void
    function sc__MakeSetUnitTeleportPeriod_unsaveLocDefinitely(thiss: number): void
    function sc__MakeSetUnitTeleportPeriod_cancelLastAction(thiss: number): boolean
    function sc__MakeSetUnitTeleportPeriod_redoLastAction(thiss: number): boolean
    function sc__MakeSetUnitTeleportPeriod_getMode(thiss: number): string
    function rf__s__MakeSetUnitTeleportPeriod__allocate(): void
    function s__MakeSetUnitTeleportPeriod__allocate(): number
    function sc__MakeStart_create(maker: unit, forNext: boolean): number
    function sc__MakeStart_onDestroy(thiss: number): void
    function sc__MakeStart_saveLoc(thiss: number, x: number, l__y: number): void
    function sc__MakeStart_isLastLocSavedUsed(thiss: number): boolean
    function sc__MakeStart_cancelLastAction(thiss: number): boolean
    function sc__MakeStart_redoLastAction(thiss: number): boolean
    function sc__MakeStart_forNext(thiss: number): boolean
    function rf__s__MakeStart__allocate(): void
    function s__MakeStart__allocate(): number
    function sc__MakeTerrainCopyPaste_create(maker: unit): number
    function sc__MakeTerrainCopyPaste_onDestroy(thiss: number): void
    function sc__MakeTerrainCopyPaste_saveLoc(thiss: number, x: number, l__y: number): void
    function sc__MakeTerrainCopyPaste_cancelLastAction(thiss: number): boolean
    function sc__MakeTerrainCopyPaste_redoLastAction(thiss: number): boolean
    function rf__s__MakeTerrainCopyPaste__allocate(): void
    function s__MakeTerrainCopyPaste__allocate(): number
    function sc__MakeTerrainCreate_isLastLocSavedUsed(thiss: number): boolean
    function sc__MakeTerrainCreate_getTerrainType(thiss: number): number
    function sc__MakeTerrainCreate_create(maker: unit, terrainType: number): number
    function sc__MakeTerrainCreate_onDestroy(thiss: number): void
    function sc__MakeTerrainCreate_saveLoc(thiss: number, x: number, l__y: number): void
    function sc__MakeTerrainCreate_unsaveLocDefinitely(thiss: number): void
    function sc__MakeTerrainCreate_cancelLastAction(thiss: number): boolean
    function sc__MakeTerrainCreate_redoLastAction(thiss: number): boolean
    function rf__s__MakeTerrainCreate__allocate(): void
    function s__MakeTerrainCreate__allocate(): number
    function sc__MakeTerrainHeight_create(maker: unit, radius: number, height: number): number
    function sc__MakeTerrainHeight_getRadius(thiss: number): number
    function sc__MakeTerrainHeight_getHeight(thiss: number): number
    function sc__MakeTerrainHeight_onDestroy(thiss: number): void
    function sc__MakeTerrainHeight_cancelLastAction(thiss: number): boolean
    function sc__MakeTerrainHeight_redoLastAction(thiss: number): boolean
    function rf__s__MakeTerrainHeight__allocate(): void
    function s__MakeTerrainHeight__allocate(): number
    function sc__MakeTerrainHorizontalSymmetry_isLastLocSavedUsed(thiss: number): boolean
    function sc__MakeTerrainHorizontalSymmetry_create(maker: unit): number
    function sc__MakeTerrainHorizontalSymmetry_onDestroy(thiss: number): void
    function sc__MakeTerrainHorizontalSymmetry_saveLoc(thiss: number, x: number, l__y: number): void
    function sc__MakeTerrainHorizontalSymmetry_unsaveLocDefinitely(thiss: number): void
    function sc__MakeTerrainHorizontalSymmetry_cancelLastAction(thiss: number): boolean
    function sc__MakeTerrainHorizontalSymmetry_redoLastAction(thiss: number): boolean
    function rf__s__MakeTerrainHorizontalSymmetry__allocate(): void
    function s__MakeTerrainHorizontalSymmetry__allocate(): number
    function sc__MakeTerrainVerticalSymmetry_isLastLocSavedUsed(thiss: number): boolean
    function sc__MakeTerrainVerticalSymmetry_create(maker: unit): number
    function sc__MakeTerrainVerticalSymmetry_onDestroy(thiss: number): void
    function sc__MakeTerrainVerticalSymmetry_saveLoc(thiss: number, x: number, l__y: number): void
    function sc__MakeTerrainVerticalSymmetry_unsaveLocDefinitely(thiss: number): void
    function sc__MakeTerrainVerticalSymmetry_cancelLastAction(thiss: number): boolean
    function sc__MakeTerrainVerticalSymmetry_redoLastAction(thiss: number): boolean
    function rf__s__MakeTerrainVerticalSymmetry__allocate(): void
    function s__MakeTerrainVerticalSymmetry__allocate(): number
    function sc__MakeVisibilityModifier_create(maker: unit): number
    function sc__MakeVisibilityModifier_onDestroy(thiss: number): void
    function sc__MakeVisibilityModifier_saveLoc(thiss: number, x: number, l__y: number): void
    function sc__MakeVisibilityModifier_unsaveLocDefinitely(thiss: number): void
    function sc__MakeVisibilityModifier_isLastLocSavedUsed(thiss: number): boolean
    function sc__MakeVisibilityModifier_cancelLastAction(thiss: number): boolean
    function sc__MakeVisibilityModifier_redoLastAction(thiss: number): boolean
    function rf__s__MakeVisibilityModifier__allocate(): void
    function s__MakeVisibilityModifier__allocate(): number
    function sc__MonsterMultiplePatrols_storeNewLoc(x: number, l__y: number): boolean
    function sc__MonsterMultiplePatrols_destroyLocs(): void
    function sc__MonsterMultiplePatrols_getId(thiss: number): number
    function sc__MonsterMultiplePatrols_getCurrentTrigger(thiss: number): trigger
    function sc__MonsterMultiplePatrols_removeUnit(thiss: number): void
    function sc__MonsterMultiplePatrols_killUnit(thiss: number): void
    function sc__MonsterMultiplePatrols_onDestroy(thiss: number): void
    function sc__MonsterMultiplePatrols_nextMove(thiss: number): void
    function sc__MonsterMultiplePatrols_createUnit(thiss: number): void
    function sc__MonsterMultiplePatrols_getLife(thiss: number): number
    function sc__MonsterMultiplePatrols_setLife(thiss: number, life: number): void
    function sc__MonsterMultiplePatrols_destroyLastLoc(thiss: number): boolean
    function sc__MonsterMultiplePatrols_addNewLoc(thiss: number, x: number, l__y: number): number
    function sc__MonsterMultiplePatrols_getMonsterType(thiss: number): number
    function sc__MonsterMultiplePatrols_setMonsterType(thiss: number, mt: number): boolean
    function sc__MonsterMultiplePatrols_temporarilyDisable(thiss: number, disablingTimer: timer): void
    function sc__MonsterMultiplePatrols_temporarilyEnable(thiss: number, disablingTimer: timer): void
    function sc__MonsterMultiplePatrols_setBaseColor(thiss: number, colorString: string): void
    function sc__MonsterMultiplePatrols_setVertexColor(
        thiss: number,
        vcRed: number,
        vcGreen: number,
        vcBlue: number
    ): void
    function sc__MonsterMultiplePatrols_reinitColor(thiss: number): void
    function sc__MonsterMultiplePatrols_toString(thiss: number): string
    function rf__s__MonsterMultiplePatrols__allocate(): void
    function s__MonsterMultiplePatrols__allocate(): number
    function sc__MonsterNoMove_getId(thiss: number): number
    function sc__MonsterNoMove_removeUnit(thiss: number): void
    function sc__MonsterNoMove_killUnit(thiss: number): void
    function sc__MonsterNoMove_onDestroy(thiss: number): void
    function sc__MonsterNoMove_createUnit(thiss: number): void
    function sc__MonsterNoMove_getLife(thiss: number): number
    function sc__MonsterNoMove_setLife(thiss: number, life: number): void
    function sc__MonsterNoMove_getMonsterType(thiss: number): number
    function sc__MonsterNoMove_setMonsterType(thiss: number, mt: number): boolean
    function sc__MonsterNoMove_toString(thiss: number): string
    function sc__MonsterNoMove_temporarilyDisable(thiss: number, disablingTimer: timer): void
    function sc__MonsterNoMove_temporarilyEnable(thiss: number, disablingTimer: timer): void
    function sc__MonsterNoMove_setBaseColor(thiss: number, colorString: string): void
    function sc__MonsterNoMove_setVertexColor(thiss: number, vcRed: number, vcGreen: number, vcBlue: number): void
    function sc__MonsterNoMove_reinitColor(thiss: number): void
    function rf__s__MonsterNoMove__allocate(): void
    function s__MonsterNoMove__allocate(): number
    function sc__MonsterSimplePatrol_getId(thiss: number): number
    function sc__MonsterSimplePatrol_removeUnit(thiss: number): void
    function sc__MonsterSimplePatrol_killUnit(thiss: number): void
    function sc__MonsterSimplePatrol_onDestroy(thiss: number): void
    function sc__MonsterSimplePatrol_createUnit(thiss: number): void
    function sc__MonsterSimplePatrol_getLife(thiss: number): number
    function sc__MonsterSimplePatrol_setLife(thiss: number, life: number): void
    function sc__MonsterSimplePatrol_getMonsterType(thiss: number): number
    function sc__MonsterSimplePatrol_setMonsterType(thiss: number, mt: number): boolean
    function sc__MonsterSimplePatrol_temporarilyDisable(thiss: number, disablingTimer: timer): void
    function sc__MonsterSimplePatrol_temporarilyEnable(thiss: number, disablingTimer: timer): void
    function sc__MonsterSimplePatrol_setBaseColor(thiss: number, colorString: string): void
    function sc__MonsterSimplePatrol_setVertexColor(thiss: number, vcRed: number, vcGreen: number, vcBlue: number): void
    function sc__MonsterSimplePatrol_reinitColor(thiss: number): void
    function sc__MonsterSimplePatrol_toString(thiss: number): string
    function rf__s__MonsterSimplePatrol__allocate(): void
    function s__MonsterSimplePatrol__allocate(): number
    function sc__MonsterTeleport_storeNewLoc(x: number, l__y: number): boolean
    function sc__MonsterTeleport_destroyLocs(): void
    function sc__MonsterTeleport_getId(thiss: number): number
    function sc__MonsterTeleport_removeUnit(thiss: number): void
    function sc__MonsterTeleport_killUnit(thiss: number): void
    function sc__MonsterTeleport_onDestroy(thiss: number): void
    function sc__MonsterTeleport_setPeriod(thiss: number, period: number): boolean
    function sc__MonsterTeleport_getPeriod(thiss: number): number
    function sc__MonsterTeleport_createUnit(thiss: number): void
    function sc__MonsterTeleport_nextMove(thiss: number): void
    function sc__MonsterTeleport_getLife(thiss: number): number
    function sc__MonsterTeleport_setLife(thiss: number, life: number): void
    function sc__MonsterTeleport_getX(thiss: number, id: number): number
    function sc__MonsterTeleport_getY(thiss: number, id: number): number
    function sc__MonsterTeleport_addNewLoc(thiss: number, x: number, l__y: number): boolean
    function sc__MonsterTeleport_destroyLastLoc(thiss: number): boolean
    function sc__MonsterTeleport_getMonsterType(thiss: number): number
    function sc__MonsterTeleport_setMonsterType(thiss: number, mt: number): boolean
    function sc__MonsterTeleport_temporarilyDisable(thiss: number, disablingTimer: timer): void
    function sc__MonsterTeleport_temporarilyEnable(thiss: number, disablingTimer: timer): void
    function sc__MonsterTeleport_setBaseColor(thiss: number, colorString: string): void
    function sc__MonsterTeleport_setVertexColor(thiss: number, vcRed: number, vcGreen: number, vcBlue: number): void
    function sc__MonsterTeleport_reinitColor(thiss: number): void
    function sc__MonsterTeleport_toString(thiss: number): string
    function rf__s__MonsterTeleport__allocate(): void
    function s__MonsterTeleport__allocate(): number
    function sc__MakeClearMob_create(maker: unit, disableDuration: number): number
    function sc__MakeClearMob_onDestroy(thiss: number): void
    function sc__MakeClearMob_clickMade(thiss: number, monsterOrCasterId: number): void
    function sc__MakeClearMob_cancelLastAction(thiss: number): boolean
    function sc__MakeClearMob_redoLastAction(thiss: number): boolean
    function rf__s__MakeClearMob__allocate(): void
    function s__MakeClearMob__allocate(): number
    function sc___prototype2_execute(i: number): void
    function sc___prototype2_evaluate(i: number): void
    function sc___prototype3_execute(i: number, a1: number): void
    function sc___prototype3_evaluate(i: number, a1: number): void
    function sc___prototype51_execute(i: number, a1: sound, a2: boolean, a3: boolean): void
    function sc___prototype51_evaluate(i: number, a1: sound, a2: boolean, a3: boolean): void
    function h__StopSound(a0: sound, a1: boolean, a2: boolean): void
    function rf__AreAllAliveHeroesAfk(): void
    function AreAllAliveHeroesAfk(): boolean
    function KillAllHeroesIfAfk(): void
    function KillAllHeroesAfkInFiveSeconds(): void
    function SetAfkMode(playerId: number): void
    function StopAfk(playerId: number): void
    function AfkModeTimerExpires_0(): void
    function AfkModeTimerExpires_1(): void
    function AfkModeTimerExpires_2(): void
    function AfkModeTimerExpires_3(): void
    function AfkModeTimerExpires_4(): void
    function AfkModeTimerExpires_5(): void
    function AfkModeTimerExpires_6(): void
    function AfkModeTimerExpires_7(): void
    function AfkModeTimerExpires_8(): void
    function AfkModeTimerExpires_9(): void
    function AfkModeTimerExpires_10(): void
    function AfkModeTimerExpires_11(): void
    function rf__GetAfkModeTimeExpiresCodeFromId(id: number): void
    function GetAfkModeTimeExpiresCodeFromId(id: number): Function
    function Init_AfkMode(): void
    function rf__Ascii__CaractereVersAscii(caractere: string): void
    function Ascii__CaractereVersAscii(caractere: string): number
    function rf__Ascii__AsciiVersCaractere(source: number): void
    function Ascii__AsciiVersCaractere(source: number): string
    function rf__String2Ascii(source: string): void
    function String2Ascii(source: string): number
    function rf__Ascii2String(source: number): void
    function Ascii2String(source: number): string
    function AutoContinueAfterSliding(n: number): void
    function ClearLastClickSave(n: number): void
    function Init_AutoContinueAfterSliding(): void
    function DeplacementHeroHorsDeathPath(hero: unit): void
    function ApplyRandomColor(n: number): void
    function Disco_Actions(): void
    function rf__EstChiffre(str: string): void
    function EstChiffre(str: string): boolean
    function rf__IsInteger(str: string): void
    function IsInteger(str: string): boolean
    function IsPositiveInteger(str: string): boolean
    function IsPercentage(str: string): boolean
    function rf__PercentageStringOrX2Integer(str: string): void
    function PercentageStringOrX2Integer(str: string): number
    function rf__I2HexaString(n: number): void
    function I2HexaString(n: number): string
    function Trig_time_of_game_Actions(): void
    function Init_GameTime(): void
    function SetGravity(newGravity: number): void
    function GetGravity(): number
    function GetRealGravity(): number
    function InitGravity(): void
    function Init_ImmolationSkills(): void
    function rf__IsLevelBeingMade(level: number): void
    function IsLevelBeingMade(level: number): boolean
    function s__Meteor_getItem(thiss: number): item
    function s__Meteor_create(x: number, l__y: number): number
    function s__Meteor_removeMeteor(thiss: number): void
    function s__Meteor_createMeteor(thiss: number): void
    function s__Meteor_onDestroy(thiss: number): void
    function s__Meteor_deallocate(thiss: number): void
    function s__Meteor_replace(thiss: number): void
    function s__Meteor_toString(thiss: number): string
    function GetEnumMoc(): number
    function rf__s__MonsterOrCasterStack_create(monsterOrCaster: number): void
    function s__MonsterOrCasterStack_create(monsterOrCaster: number): number
    function rf__s__MonsterOrCasterStack_addMonsterOrCaster(thiss: number, monsterOrCaster: number): void
    function s__MonsterOrCasterStack_addMonsterOrCaster(thiss: number, monsterOrCaster: number): boolean
    function s__MonsterOrCasterStack_onDestroy(thiss: number): void
    function s__MonsterOrCasterStack_deallocate(thiss: number): void
    function s__MonsterOrCasterStack_executeForAll(thiss: number, functionName: string): void
    function rf__s__MonsterOrCasterStack_containsMob(thiss: number, mobId: number): void
    function s__MonsterOrCasterStack_containsMob(thiss: number, mobId: number): boolean
    function s__MonsterOrCasterStack_getLast(thiss: number): number
    function rf__s__MonsterOrCasterStack_removeLast(thiss: number): void
    function s__MonsterOrCasterStack_removeLast(thiss: number): boolean
    function MonstersClickableSetLifeForEach(): void
    function MonstersClickableSetLife_Actions(): void
    function Init_MonstersClickableSetLife(): void
    function Slide_0_Actions(): void
    function Slide_1_Actions(): void
    function Slide_2_Actions(): void
    function Slide_3_Actions(): void
    function Slide_4_Actions(): void
    function Slide_5_Actions(): void
    function Slide_6_Actions(): void
    function Slide_7_Actions(): void
    function Slide_8_Actions(): void
    function Slide_9_Actions(): void
    function Slide_10_Actions(): void
    function Slide_11_Actions(): void
    function rf__GetSlideActions(n: number): void
    function GetSlideActions(n: number): Function
    function CreateSlideTrigger(playerId: number): trigger
    function s__Stack_push(thiss: number, i: number): void
    function rf__s__Stack_pop(thiss: number): void
    function s__Stack_pop(thiss: number): number
    function s__Stack_peek(thiss: number): number
    function s__Stack_add(thiss: number, value: number): void
    function rf__s__Stack_contains(thiss: number, value: number): void
    function s__Stack_contains(thiss: number, value: number): boolean
    function s__Stack_count(thiss: number, value: number): number
    function s__Stack__get_first(thiss: number): number
    function s__Stack__get_random(thiss: number): number
    function rf__s__Stack_remove(thiss: number, value: number): void
    function s__Stack_remove(thiss: number, value: number): boolean
    function rf__s__Stack_purge(thiss: number, value: number): void
    function s__Stack_purge(thiss: number, value: number): number
    function s__Stack_enum(thiss: number, f: number, top2bottom: boolean): void
    function s__Stack_copy(thiss: number): number
    function s__Stack_onDestroy(thiss: number): void
    function s__Stack_deallocate(thiss: number): void
    function s__Stack_onInit(): void
    function s__StringSegments_calculateCount(thiss: number): void
    function s__StringSegments_create(s: string, delim: string): number
    function s__StringSegments_countSegments(thiss: number): number
    function s__StringSegments_hasMoreSegments(thiss: number): boolean
    function rf__s__StringSegments_nextSegment(thiss: number): void
    function s__StringSegments_nextSegment(thiss: number): string
    function s__StringSegments_nextSegmentEx(thiss: number, delim: string): string
    function rf__StringTrimLeft(str: string): void
    function StringTrimLeft(str: string): string
    function rf__StringTrimRight(str: string): void
    function StringTrimRight(str: string): string
    function rf__StringTrim(str: string): void
    function StringTrim(str: string): string
    function rf__StringIndexOf(source: string, toFind: string, caseSensitive: boolean): void
    function StringIndexOf(source: string, toFind: string, caseSensitive: boolean): number
    function rf__StringIndexOfReverse(source: string, toFind: string, caseSensitive: boolean): void
    function StringIndexOfReverse(source: string, toFind: string, caseSensitive: boolean): number
    function StringReplace(source: string, old: string, newv: string, caseSensitive: boolean): string
    function StringHashCS(s: string): number
    function rf__IsStringAscii(s: string): void
    function IsStringAscii(s: string): boolean
    function StringAsciiAt(s: string, index: number): number
    function rf__StringLengthUtf8(s: string): void
    function StringLengthUtf8(s: string): number
    function rf__IsStringValidUtf8(s: string): void
    function IsStringValidUtf8(s: string): boolean
    function StringLib__InitAsciiHash(): void
    function StringLib__InitUtf8Hash(): void
    function StringLib__Init(): void
    function Init_TerrainModifyingTrig(): void
    function StopEnabledCheckTerrainTriggers(): void
    function RestartEnabledCheckTerrainTriggers(): void
    function rf__TerrainTypeId2TerrainTypeAsciiString(terrainType: number): void
    function TerrainTypeId2TerrainTypeAsciiString(terrainType: number): string
    function rf__TerrainTypeAsciiString2TerrainTypeId(terrainTypeAsciiString: string): void
    function TerrainTypeAsciiString2TerrainTypeId(terrainTypeAsciiString: string): number
    function rf__TerrainTypeId2TerrainType(terrainTypeId: number): void
    function TerrainTypeId2TerrainType(terrainTypeId: number): number
    function rf__IsTerrainTypeOfKind(terrainTypeId: number, terrainTypeKind: string): void
    function IsTerrainTypeOfKind(terrainTypeId: number, terrainTypeKind: string): boolean
    function rf__TerrainTypeMaxId2TerrainTypeId(maxId: number): void
    function TerrainTypeMaxId2TerrainTypeId(maxId: number): number
    function rf__TerrainTypeId2TerrainTypeMaxId(terrainTypeId: number): void
    function TerrainTypeId2TerrainTypeMaxId(terrainTypeId: number): number
    function rf__Text__ForPlayer_timed_withColorCode(
        p: player,
        duration: number,
        colorcode: string,
        message: string
    ): void
    function Text__ForPlayer_timed_withColorCode(
        p: player,
        duration: number,
        colorcode: string,
        message: string
    ): boolean
    function rf__Text__ForAll_timed_withColorCode(duration: number, colorcode: string, message: string): void
    function Text__ForAll_timed_withColorCode(duration: number, colorcode: string, message: string): boolean
    function Text_P_timed(p: player, duration: number, message: string): boolean
    function Text_P(p: player, message: string): boolean
    function Text_erP_timed(p: player, duration: number, message: string): boolean
    function Text_erP(p: player, message: string): boolean
    function Text_mkP_timed(p: player, duration: number, message: string): boolean
    function Text_mkP(p: player, message: string): boolean
    function Text_A_timed(duration: number, message: string): boolean
    function Text_A(message: string): boolean
    function Text_erA_timed(duration: number, message: string): boolean
    function Text_erA(message: string): boolean
    function Text_mkA_timed(duration: number, message: string): boolean
    function Text_mkA(message: string): boolean
    function DisplayLineToPlayer(p: player): void
    function SetTimerData(t: timer, value: number): void
    function GetTimerData(t: timer): number
    function NewTimerEx(value: number): timer
    function NewTimer(): timer
    function ReleaseTimer(t: timer): void
    function TimerUtils__init(): void
    function s__Trigger_onDestroy(thiss: number): void
    function s__Trigger_deallocate(thiss: number): void
    function s__Trigger_create(): number
    function s__Trigger_activate(thiss: number, activ: boolean): void
    function s__TriggerArray_create(): number
    function s__TriggerArray_onDestroy(thiss: number): void
    function s__TriggerArray_deallocate(thiss: number): void
    function s__TriggerArray_activate(thiss: number, activ: boolean): void
    function RefreshHideAllVM(): void
    function Init_ViewAllHideAll(): void
    function s__VisibilityModifier_create(x1: number, y1: number, x2: number, y2: number): number
    function s__VisibilityModifier_onDestroy(thiss: number): void
    function s__VisibilityModifier_deallocate(thiss: number): void
    function s__VisibilityModifier_activate(thiss: number, activ: boolean): void
    function s__VisibilityModifier_copy(thiss: number): number
    function s__VisibilityModifier_toString(thiss: number): string
    function GetSurfaceZ(x: number, l__y: number): number
    function GetTerrainZ(x: number, l__y: number): number
    function rf__GetUnitZ(u: unit): void
    function GetUnitZ(u: unit): number
    function SetUnitZ(u: unit, z: number): void
    function CreateUnitZ(l__ZLibrary__p: player, unitid: number, x: number, l__y: number, z: number, face: number): unit
    function rf__GetWaterDepth(x: number, l__y: number): void
    function GetWaterDepth(x: number, l__y: number): number
    function rf__GetWaterType(x: number, l__y: number): void
    function GetWaterType(x: number, l__y: number): number
    function IsUnitBetweenLocs(u: unit, x1: number, y1: number, x2: number, y2: number): boolean
    function IsItemBetweenLocs(i: item, x1: number, y1: number, x2: number, y2: number): boolean
    function IsPlayerInGame(p: player): boolean
    function SpecialIllidan(hero: unit): void
    function IsIssuedOrder(orderString: string): boolean
    function IsLastOrderPause(): boolean
    function GetLocDist(x1: number, y1: number, x2: number, y2: number): number
    function GetCurrentMonsterPlayer(): player
    function IsUnitInvulnerable(u: unit): boolean
    function StopUnit(U: unit): void
    function rf__IsHero(U: unit): void
    function IsHero(U: unit): boolean
    function ClearTextForPlayer(p: player): void
    function MoveCamExceptForPlayer(p: player, x: number, l__y: number): void
    function rf__StringContainsChar(str: string, char: string): void
    function StringContainsChar(str: string, char: string): boolean
    function IsBoolString(S: string): boolean
    function S2B(S: string): boolean
    function rf__B2S(b: boolean): void
    function B2S(b: boolean): string
    function IsOnGround(slider: unit): boolean
    function IsNearBounds(x: number, l__y: number): boolean
    function rf__tileset2tilesetChar(tileset: string): void
    function tileset2tilesetChar(tileset: string): string
    function rf__tileset2tilesetString(tileset: string): void
    function tileset2tilesetString(tileset: string): string
    function rf__s__CasterType_create(
        label: string,
        casterMonsterType: number,
        projectileMonsterType: number,
        range: number,
        projectileSpeed: number,
        loadTime: number,
        animation: string
    ): void
    function s__CasterType_create(
        label: string,
        casterMonsterType: number,
        projectileMonsterType: number,
        range: number,
        projectileSpeed: number,
        loadTime: number,
        animation: string
    ): number
    function s__CasterType_setLabel(thiss: number, label: string): void
    function s__CasterType_setAlias(thiss: number, theAlias: string): number
    function s__CasterType_refresh(thiss: number): void
    function s__CasterType_onDestroy(thiss: number): void
    function s__CasterType_deallocate(thiss: number): void
    function s__CasterType_getCasterMonsterType(thiss: number): number
    function s__CasterType_setCasterMonsterType(thiss: number, newCasterMonsterType: number): void
    function s__CasterType_getProjectileMonsterType(thiss: number): number
    function s__CasterType_setProjectileMonsterType(thiss: number, newProjectileMonsterType: number): void
    function s__CasterType_getRange(thiss: number): number
    function rf__s__CasterType_setRange(thiss: number, newRange: number): void
    function s__CasterType_setRange(thiss: number, newRange: number): boolean
    function s__CasterType_getProjectileSpeed(thiss: number): number
    function rf__s__CasterType_setProjectileSpeed(thiss: number, newSpeed: number): void
    function s__CasterType_setProjectileSpeed(thiss: number, newSpeed: number): boolean
    function s__CasterType_getLoadTime(thiss: number): number
    function rf__s__CasterType_setLoadTime(thiss: number, loadTime: number): void
    function s__CasterType_setLoadTime(thiss: number, loadTime: number): boolean
    function s__CasterType_getAnimation(thiss: number): string
    function s__CasterType_setAnimation(thiss: number, animation: string): void
    function s__CasterType_displayForPlayer(thiss: number, p: player): void
    function s__CasterType_toString(thiss: number): string
    function rf__DecodeString__DecodeChar(char: string): void
    function DecodeString__DecodeChar(char: string): string
    function DecodeString(strIn: string): string
    function ColorInfo(escaperToGetInfo: number, playerToDisplay: player): void
    function rf__Hero2Escaper(hero: unit): void
    function Hero2Escaper(hero: unit): number
    function s__MakeCasterAction_getLevel(thiss: number): number
    function rf__s__MakeCasterAction_create(level: number, caster: number): void
    function s__MakeCasterAction_create(level: number, caster: number): number
    function s__MakeCasterAction_onDestroy(thiss: number): void
    function rf__s__MakeCasterAction_cancel(thiss: number): void
    function s__MakeCasterAction_cancel(thiss: number): boolean
    function rf__s__MakeCasterAction_redo(thiss: number): void
    function s__MakeCasterAction_redo(thiss: number): boolean
    function s__MakeDeleteCastersAction_onInit(): void
    function s__MakeDeleteCastersAction_newSuppression(suppression: hashtable): number
    function s__MakeDeleteCastersAction_removeSuppression(suppressionId: number): void
    function s__MakeDeleteCastersAction_getLevel(thiss: number): number
    function rf__s__MakeDeleteCastersAction_create(level: number, suppression: hashtable): void
    function s__MakeDeleteCastersAction_create(level: number, suppression: hashtable): number
    function s__MakeDeleteCastersAction_onDestroy(thiss: number): void
    function rf__s__MakeDeleteCastersAction_cancel(thiss: number): void
    function s__MakeDeleteCastersAction_cancel(thiss: number): boolean
    function rf__s__MakeDeleteCastersAction_redo(thiss: number): void
    function s__MakeDeleteCastersAction_redo(thiss: number): boolean
    function s__MakeDeleteMeteorsAction_onInit(): void
    function s__MakeDeleteMeteorsAction_newSuppression(suppression: hashtable): number
    function s__MakeDeleteMeteorsAction_removeSuppression(suppressionId: number): void
    function s__MakeDeleteMeteorsAction_getLevel(thiss: number): number
    function rf__s__MakeDeleteMeteorsAction_create(level: number, suppression: hashtable): void
    function s__MakeDeleteMeteorsAction_create(level: number, suppression: hashtable): number
    function s__MakeDeleteMeteorsAction_onDestroy(thiss: number): void
    function rf__s__MakeDeleteMeteorsAction_cancel(thiss: number): void
    function s__MakeDeleteMeteorsAction_cancel(thiss: number): boolean
    function rf__s__MakeDeleteMeteorsAction_redo(thiss: number): void
    function s__MakeDeleteMeteorsAction_redo(thiss: number): boolean
    function s__MakeDeleteMonstersAction_onInit(): void
    function s__MakeDeleteMonstersAction_newSuppression(suppression: hashtable): number
    function s__MakeDeleteMonstersAction_removeSuppression(suppressionId: number): void
    function s__MakeDeleteMonstersAction_getLevel(thiss: number): number
    function rf__s__MakeDeleteMonstersAction_create(level: number, suppression: hashtable): void
    function s__MakeDeleteMonstersAction_create(level: number, suppression: hashtable): number
    function s__MakeDeleteMonstersAction_onDestroy(thiss: number): void
    function rf__s__MakeDeleteMonstersAction_cancel(thiss: number): void
    function s__MakeDeleteMonstersAction_cancel(thiss: number): boolean
    function rf__s__MakeDeleteMonstersAction_redo(thiss: number): void
    function s__MakeDeleteMonstersAction_redo(thiss: number): boolean
    function s__MakeLastActions_create(owner: number): number
    function s__MakeLastActions_onDestroy(thiss: number): void
    function s__MakeLastActions_deallocate(thiss: number): void
    function s__MakeLastActions_newAction(thiss: number, action: number): number
    function rf__s__MakeLastActions_cancelLastAction(thiss: number): void
    function s__MakeLastActions_cancelLastAction(thiss: number): boolean
    function rf__s__MakeLastActions_redoLastAction(thiss: number): void
    function s__MakeLastActions_redoLastAction(thiss: number): boolean
    function s__MakeLastActions_deleteSpecificActionsForLevel(thiss: number, level: number): void
    function s__MakeLastActions_destroyCancelledActions(thiss: number): void
    function s__MakeLastActions_destroyAllActions(thiss: number): void
    function s__MakeMeteorAction_getLevel(thiss: number): number
    function rf__s__MakeMeteorAction_create(level: number, meteor: number): void
    function s__MakeMeteorAction_create(level: number, meteor: number): number
    function s__MakeMeteorAction_onDestroy(thiss: number): void
    function rf__s__MakeMeteorAction_cancel(thiss: number): void
    function s__MakeMeteorAction_cancel(thiss: number): boolean
    function rf__s__MakeMeteorAction_redo(thiss: number): void
    function s__MakeMeteorAction_redo(thiss: number): boolean
    function s__MakeMonsterAction_getLevel(thiss: number): number
    function rf__s__MakeMonsterAction_create(level: number, monster: number): void
    function s__MakeMonsterAction_create(level: number, monster: number): number
    function s__MakeMonsterAction_onDestroy(thiss: number): void
    function rf__s__MakeMonsterAction_cancel(thiss: number): void
    function s__MakeMonsterAction_cancel(thiss: number): boolean
    function rf__s__MakeMonsterAction_redo(thiss: number): void
    function s__MakeMonsterAction_redo(thiss: number): boolean
    function s__MakeTerrainHeightAction_create(radius: number, height: number, x: number, l__y: number): number
    function s__MakeTerrainHeightAction_apply(thiss: number): void
    function rf__s__MakeTerrainHeightAction_cancel(thiss: number): void
    function s__MakeTerrainHeightAction_cancel(thiss: number): boolean
    function rf__s__MakeTerrainHeightAction_redo(thiss: number): void
    function s__MakeTerrainHeightAction_redo(thiss: number): boolean
    function s__MakeVisibilityModifierAction_getLevel(thiss: number): number
    function rf__s__MakeVisibilityModifierAction_create(level: number, visibilityModifier: number): void
    function s__MakeVisibilityModifierAction_create(level: number, visibilityModifier: number): number
    function s__MakeVisibilityModifierAction_onDestroy(thiss: number): void
    function rf__s__MakeVisibilityModifierAction_cancel(thiss: number): void
    function s__MakeVisibilityModifierAction_cancel(thiss: number): boolean
    function rf__s__MakeVisibilityModifierAction_redo(thiss: number): void
    function s__MakeVisibilityModifierAction_redo(thiss: number): boolean
    function rf__MessageHeroDies___GetRandomSoundHeroDies(): void
    function MessageHeroDies___GetRandomSoundHeroDies(): sound
    function rf__MessageHeroDies___GetRandomSoundAllyHeroDies(): void
    function MessageHeroDies___GetRandomSoundAllyHeroDies(): sound
    function MessageHeroDies___SoundEnd(): void
    function MessageHeroDies___PlaySoundHeroDies(fallenPlayer: player): void
    function MessageHeroDies___DisplayDeathMessagePlayer_0(): void
    function MessageHeroDies___DisplayDeathMessagePlayer_1(): void
    function MessageHeroDies___DisplayDeathMessagePlayer_2(): void
    function MessageHeroDies___DisplayDeathMessagePlayer_3(): void
    function MessageHeroDies___DisplayDeathMessagePlayer_4(): void
    function MessageHeroDies___DisplayDeathMessagePlayer_5(): void
    function MessageHeroDies___DisplayDeathMessagePlayer_6(): void
    function MessageHeroDies___DisplayDeathMessagePlayer_7(): void
    function MessageHeroDies___DisplayDeathMessagePlayer_8(): void
    function MessageHeroDies___DisplayDeathMessagePlayer_9(): void
    function MessageHeroDies___DisplayDeathMessagePlayer_10(): void
    function MessageHeroDies___DisplayDeathMessagePlayer_11(): void
    function DisplayDeathMessagePlayer(p: player): void
    function s__MeteorArray_create(): number
    function s__MeteorArray_getFirstEmpty(thiss: number): number
    function rf__s__MeteorArray_get(thiss: number, arrayId: number): void
    function s__MeteorArray_get(thiss: number, arrayId: number): number
    function rf__s__MeteorArray_new(thiss: number, x: number, l__y: number, createMeteor: boolean): void
    function s__MeteorArray_new(thiss: number, x: number, l__y: number, createMeteor: boolean): number
    function s__MeteorArray_setMeteorNull(thiss: number, arrayId: number): void
    function s__MeteorArray_count(thiss: number): number
    function s__MeteorArray_onDestroy(thiss: number): void
    function s__MeteorArray_deallocate(thiss: number): void
    function rf__s__MeteorArray_clearMeteor(thiss: number, meteorId: number): void
    function s__MeteorArray_clearMeteor(thiss: number, meteorId: number): boolean
    function s__MeteorArray_createMeteors(thiss: number): void
    function s__MeteorArray_removeMeteors(thiss: number): void
    function rf__s__MeteorArray_getMeteorNear(thiss: number, x: number, l__y: number): void
    function s__MeteorArray_getMeteorNear(thiss: number, x: number, l__y: number): number
    function s__MeteorArray_getLastInstanceId(thiss: number): number
    function HeroAddCheatMeteor(hero: unit): item
    function HeroComingToSlide_CheckItem(hero: unit): void
    function HeroComingOutFromSlide_CheckItem(hero: unit): void
    function ExecuteRightClicOnUnit(hero: unit, u: unit): void
    function s__MonsterType_setLabel(thiss: number, label: string): void
    function s__MonsterType_setAlias(thiss: number, theAlias: string): number
    function rf__s__MonsterType_create(
        label: string,
        unitTypeId: number,
        scale: number,
        immolationRadius: number,
        speed: number,
        isClickable: boolean
    ): void
    function s__MonsterType_create(
        label: string,
        unitTypeId: number,
        scale: number,
        immolationRadius: number,
        speed: number,
        isClickable: boolean
    ): number
    function s__MonsterType_refresh(thiss: number): void
    function s__MonsterType_onDestroy(thiss: number): void
    function s__MonsterType_deallocate(thiss: number): void
    function s__MonsterType_getUnitTypeId(thiss: number): number
    function rf__s__MonsterType_setUnitTypeId(thiss: number, unitTypeId: number): void
    function s__MonsterType_setUnitTypeId(thiss: number, unitTypeId: number): boolean
    function s__MonsterType_getScale(thiss: number): number
    function rf__s__MonsterType_setScale(thiss: number, scale: number): void
    function s__MonsterType_setScale(thiss: number, scale: number): boolean
    function s__MonsterType_getImmolationSkill(thiss: number): number
    function rf__s__MonsterType_setImmolation(thiss: number, immolationRadius: number): void
    function s__MonsterType_setImmolation(thiss: number, immolationRadius: number): boolean
    function s__MonsterType_getUnitMoveSpeed(thiss: number): number
    function rf__s__MonsterType_setUnitMoveSpeed(thiss: number, speed: number): void
    function s__MonsterType_setUnitMoveSpeed(thiss: number, speed: number): boolean
    function s__MonsterType_isClickable(thiss: number): boolean
    function rf__s__MonsterType_setIsClickable(thiss: number, isClickable: boolean): void
    function s__MonsterType_setIsClickable(thiss: number, isClickable: boolean): boolean
    function s__MonsterType_getKillingEffectStr(thiss: number): string
    function s__MonsterType_setKillingEffectStr(thiss: number, effectStr: string): number
    function rf__s__MonsterType_setNbMeteorsToKill(thiss: number, nbMeteorsToKill: number): void
    function s__MonsterType_setNbMeteorsToKill(thiss: number, nbMeteorsToKill: number): number
    function s__MonsterType_getMaxLife(thiss: number): number
    function s__MonsterType_getHeight(thiss: number): number
    function rf__s__MonsterType_setHeight(thiss: number, height: number): void
    function s__MonsterType_setHeight(thiss: number, height: number): boolean
    function s__MonsterType_getImmolationRadiusStr(thiss: number): string
    function s__MonsterType_displayForPlayer(thiss: number, p: player): void
    function s__MonsterType_displayTotalForPlayer(thiss: number, p: player): void
    function s__MonsterType_toString(thiss: number): string
    function Init_MonsterType(): void
    function SaveLevels___SaveCasters_Actions(): void
    function SaveLevels___StartSaveCasters(): void
    function SaveLevels___SaveMonsterSpawns_Actions(): void
    function SaveLevels___StartSaveMonsterSpawns(): void
    function SaveLevels___SaveMeteors_Actions(): void
    function SaveLevels___StartSaveMeteors(): void
    function SaveLevels___SaveMonstersTeleport_Actions(): void
    function SaveLevels___StartSaveMonstersTeleport(): void
    function SaveLevels___SaveMonstersMultiplePatrols_Actions(): void
    function SaveLevels___StartSaveMonstersMultiplePatrols(): void
    function SaveLevels___SaveMonstersSimplePatrol_Actions(): void
    function SaveLevels___StartSaveMonstersSimplePatrol(): void
    function SaveLevels___SaveMonstersNoMove_Actions(): void
    function SaveLevels___StartSaveMonstersNoMove(): void
    function SaveLevels___SaveVisibilities_Actions(): void
    function SaveLevels___StartSaveVisibilities(): void
    function SaveLevels___EndSaveLevel(): void
    function SaveLevels___StartSaveLevel(): void
    function StartSaveLevels(): void
    function StartSaveNextLevel_Actions(): void
    function InitStartSaveNextLevel(): void
    function SaveTerrainConfig(): void
    function s__SoundUtils__soundhelper_create(
        fileName: string,
        duration: number,
        looping: boolean,
        is3D: boolean,
        stopwhenoutofrange: boolean,
        fadeInRate: number,
        fadeOutRate: number,
        eaxSetting: string
    ): number
    function s__SoundUtils__soundrecycler_create(whichSound: sound, soundRef: number): number
    function s__SoundUtils__soundrecycler_onDestroy(thiss: number): void
    function s__SoundUtils__soundrecycler_deallocate(thiss: number): void
    function SoundUtils__HookStopSound(soundHandle: sound, killWhenDone: boolean, fadeOut: boolean): void
    function SoundUtils__HookKillSoundWhenDone(soundHandle: sound): void
    function DefineSoundEx(
        fileName: string,
        duration: number,
        looping: boolean,
        is3D: boolean,
        stopwhenoutofrange: boolean,
        fadeInRate: number,
        fadeOutRate: number,
        eaxSetting: string
    ): number
    function DefineSound(fileName: string, duration: number, looping: boolean, is3D: boolean): number
    function rf__ReleaseSound(s: sound): void
    function ReleaseSound(s: sound): boolean
    function SoundUtils__Recycle(): void
    function SoundUtils__Run(): void
    function rf__RunSound(soundRef: number): void
    function RunSound(soundRef: number): sound
    function RunSoundOnUnit(soundRef: number, whichUnit: unit): sound
    function RunSoundAtPoint(soundRef: number, x: number, l__y: number, z: number): sound
    function RunSoundForPlayer(soundRef: number, p: player): sound
    function s__StringArrayForCache_create(category: string, variableName: string, avecSeparateur: boolean): number
    function s__StringArrayForCache_nextString(thiss: number): void
    function s__StringArrayForCache_push(thiss: number, str: string): void
    function s__StringArrayForCache_writeInCache(thiss: number): void
    function rf__TerrainTypeGrassId2MaxId(grassId: number): void
    function TerrainTypeGrassId2MaxId(grassId: number): number
    function rf__TerrainTypeMaxId2GrassId(maxId: number): void
    function TerrainTypeMaxId2GrassId(maxId: number): number
    function TerrainTypeGrassId2TerrainTypeId(grassId: number): number
    function s__VisibilityModifierArray_create(): number
    function s__VisibilityModifierArray_onDestroy(thiss: number): void
    function s__VisibilityModifierArray_deallocate(thiss: number): void
    function rf__s__VisibilityModifierArray_new(thiss: number, x1: number, y1: number, x2: number, y2: number): void
    function s__VisibilityModifierArray_new(thiss: number, x1: number, y1: number, x2: number, y2: number): number
    function rf__s__VisibilityModifierArray_newFromExisting(thiss: number, vm: number): void
    function s__VisibilityModifierArray_newFromExisting(thiss: number, vm: number): number
    function s__VisibilityModifierArray_count(thiss: number): number
    function rf__s__VisibilityModifierArray_get(thiss: number, visibilityId: number): void
    function s__VisibilityModifierArray_get(thiss: number, visibilityId: number): number
    function s__VisibilityModifierArray_getLastInstanceId(thiss: number): number
    function s__VisibilityModifierArray_setNull(thiss: number, arrayId: number): void
    function s__VisibilityModifierArray_removeAllVisibilityModifiers(thiss: number): void
    function s__VisibilityModifierArray_removeLasts(thiss: number, numberOfVMToRemove: number): boolean
    function s__VisibilityModifierArray_activate(thiss: number, activ: boolean): void
    function Init_Apm(): void
    function DisplayApm(playerId: number): void
    function DisplayApmAll(playerId: number): void
    function CasterFunctions___CalculerPointsIntersections(): void
    function CasterFunctions___TrouverTempsIdeal(tempsMax: number): number
    function CasterFunctions___CasterTryToShoot(): void
    function CasterUnitWithinRange_Actions(): void
    function s__CasterTypeArray_create(): number
    function rf__s__CasterTypeArray_get(thiss: number, label: string): void
    function s__CasterTypeArray_get(thiss: number, label: string): number
    function s__CasterTypeArray_isLabelAlreadyUsed(thiss: number, label: string): boolean
    function rf__s__CasterTypeArray_new(
        thiss: number,
        label: string,
        casterMonsterType: number,
        projectileMonsterType: number,
        range: number,
        projectileSpeed: number,
        loadTime: number,
        animation: string
    ): void
    function s__CasterTypeArray_new(
        thiss: number,
        label: string,
        casterMonsterType: number,
        projectileMonsterType: number,
        range: number,
        projectileSpeed: number,
        loadTime: number,
        animation: string
    ): number
    function rf__s__CasterTypeArray_remove(thiss: number, label: string): void
    function s__CasterTypeArray_remove(thiss: number, label: string): boolean
    function s__CasterTypeArray_displayForPlayer(thiss: number, p: player): void
    function s__CasterTypeArray_saveInCache(thiss: number): void
    function CheckTerrain_0_Actions(): void
    function CheckTerrain_1_Actions(): void
    function CheckTerrain_2_Actions(): void
    function CheckTerrain_3_Actions(): void
    function CheckTerrain_4_Actions(): void
    function CheckTerrain_5_Actions(): void
    function CheckTerrain_6_Actions(): void
    function CheckTerrain_7_Actions(): void
    function CheckTerrain_8_Actions(): void
    function CheckTerrain_9_Actions(): void
    function CheckTerrain_10_Actions(): void
    function CheckTerrain_11_Actions(): void
    function rf__GetCheckTerrainActions(n: number): void
    function GetCheckTerrainActions(n: number): Function
    function CreateCheckTerrainTrigger(playerId: number): trigger
    function InitShortcutSkills(playerId: number): void
    function AssignShortcut(playerId: number, shortcut: string, command: string): void
    function UnassignShortcut(playerId: number, shortcut: string): void
    function rf__IsShortcut(S: string): void
    function IsShortcut(S: string): boolean
    function rf__GetStringAssignedFromCommand(command: string): void
    function GetStringAssignedFromCommand(command: string): string
    function DisplayShortcuts(playerId: number): void
    function s__Lives_display(thiss: number, show: boolean): void
    function s__Lives_refresh(thiss: number): void
    function s__Lives_getLeaderboard(thiss: number): leaderboard
    function s__Lives_create(): number
    function s__Lives_onDestroy(thiss: number): void
    function s__Lives_deallocate(thiss: number): void
    function s__Lives_get(thiss: number): number
    function rf__s__Lives_setNb(thiss: number, nbLives: number): void
    function s__Lives_setNb(thiss: number, nbLives: number): boolean
    function s__Lives_add(thiss: number, n: number): void
    function s__Lives_loseALife(thiss: number): void
    function s__MonsterTypeArray_create(): number
    function rf__s__MonsterTypeArray_get(thiss: number, label: string): void
    function s__MonsterTypeArray_get(thiss: number, label: string): number
    function s__MonsterTypeArray_isLabelAlreadyUsed(thiss: number, label: string): boolean
    function rf__s__MonsterTypeArray_new(
        thiss: number,
        label: string,
        unitTypeId: number,
        scale: number,
        immolationRadius: number,
        speed: number,
        isClickable: boolean
    ): void
    function s__MonsterTypeArray_new(
        thiss: number,
        label: string,
        unitTypeId: number,
        scale: number,
        immolationRadius: number,
        speed: number,
        isClickable: boolean
    ): number
    function rf__s__MonsterTypeArray_remove(thiss: number, label: string): void
    function s__MonsterTypeArray_remove(thiss: number, label: string): boolean
    function s__MonsterTypeArray_displayForPlayer(thiss: number, p: player): void
    function s__MonsterTypeArray_monsterUnit2KillEffectStr(thiss: number, monsterUnit: unit): string
    function rf__s__MonsterTypeArray_monsterUnit2MonsterType(thiss: number, monsterUnit: unit): void
    function s__MonsterTypeArray_monsterUnit2MonsterType(thiss: number, monsterUnit: unit): number
    function s__MonsterTypeArray_saveInCache(thiss: number): void
    function StartSaveCasterTypes(): void
    function TeleportOnceOnly_Actions(): void
    function ActivateTeleportOnceOnly(hero: unit): void
    function rf__IsTerrainAlreadyUsed(terrainType: number): void
    function IsTerrainAlreadyUsed(terrainType: number): boolean
    function IsTerrainsLimitNumberReached(): boolean
    function rf__AddNewTerrain(newTerrain: number): void
    function AddNewTerrain(newTerrain: number): boolean
    function rf__CanUseTerrain(terrainType: number): void
    function CanUseTerrain(terrainType: number): boolean
    function GetRandomTerrain(): number
    function GetRandomUsedTerrain(): number
    function GetRandomNotUsedTerrain(): number
    function rf__GetTerrainName(terrain: number): void
    function GetTerrainName(terrain: number): string
    function rf__GetTerrainData(terrain: number): void
    function GetTerrainData(terrain: number): string
    function DisplayTerrainDataToPlayer(p: player, terrain: number): void
    function Init_TerrainTypeNamesAndData(): void
    function rf__String2BodyPartStr(S: string): void
    function String2BodyPartStr(S: string): string
    function IsBodyPartStr(s: string): boolean
    function rf__String2EffectStr(str: string): void
    function String2EffectStr(str: string): string
    function IsEffectStr(str: string): boolean
    function GetNbCaseBetween(minX: number, minY: number, maxX: number, maxY: number): number
    function ChangeTerrainType(x: number, l__y: number, terrainTypeId: number): void
    function rf__ChangeTerrainBetween(terrainType: number, x1: number, y1: number, x2: number, y2: number): void
    function ChangeTerrainBetween(terrainType: number, x1: number, y1: number, x2: number, y2: number): boolean
    function MonsterCreationFunctions__UnitAddRemoveLifeAbility(u: unit, lifeAbility: number): void
    function UnitAddMaxLife(u: unit, lifeToAdd: number): void
    function rf__SetUnitMaxLife(u: unit, newMaxLife: number): void
    function SetUnitMaxLife(u: unit, newMaxLife: number): boolean
    function NewImmobileMonsterForPlayer(mt: number, p: player, x: number, l__y: number, angle: number): unit
    function NewImmobileMonster(mt: number, x: number, l__y: number, angle: number): unit
    function NewPatrolMonster(mt: number, x1: number, y1: number, x2: number, y2: number): unit
    function StartSaveMonsterTypes(): void
    function s__TerrainType_setOrderId(thiss: number, orderId: number): number
    function s__TerrainType_getOrderId(thiss: number): number
    function s__TerrainType_setCliffClassId(thiss: number, cliffClassId: number): number
    function s__TerrainType_getCliffClassId(thiss: number): number
    function s__TerrainType_setType(thiss: number, terrainTypeId: number): void
    function s__TerrainType_setLabel(thiss: number, label: string): void
    function s__TerrainType_setAlias(thiss: number, theAlias: string): number
    function s__TerrainType_getTerrainTypeId(thiss: number): number
    function rf__s__TerrainType_setTerrainTypeId(thiss: number, terrainTypeId: number): void
    function s__TerrainType_setTerrainTypeId(thiss: number, terrainTypeId: number): boolean
    function s__TerrainType_getKind(thiss: number): string
    function s__TerrainType_onDestroy(thiss: number): void
    function s__TerrainType_displayForPlayer(thiss: number, p: player): void
    function s__TerrainType_toString(thiss: number): string
    function rf__TerrainTypeString2TerrainTypeId(str: string): void
    function TerrainTypeString2TerrainTypeId(str: string): number
    function CasterShot___CasterShot_Actions(): void
    function s__CasterShot_create(
        monsterType: number,
        Xdep: number,
        Ydep: number,
        angle: number,
        speed: number,
        portee: number
    ): number
    function s__CasterShot_onDestroy(thiss: number): void
    function s__CasterShot_deallocate(thiss: number): void
    function InitCasterShot(): void
    function s__EscaperEffect_create(efStr: string, u: unit, bodyPart: string): number
    function s__EscaperEffect_onDestroy(thiss: number): void
    function s__EscaperEffect_deallocate(thiss: number): void
    function s__EscaperEffect_recreate(thiss: number, u: unit): void
    function s__EscaperEffect_remove(thiss: number): void
    function s__MakeTerrainCopyPasteAction_onInit(): void
    function s__MakeTerrainCopyPasteAction_newTerrainSaveId(): number
    function s__MakeTerrainCopyPasteAction_removeTerrainSave(terrainSaveId: number): void
    function rf__s__MakeTerrainCopyPasteAction_create(
        x1: number,
        y1: number,
        x2: number,
        y2: number,
        x3: number,
        y3: number,
        x4: number,
        y4: number
    ): void
    function s__MakeTerrainCopyPasteAction_create(
        x1: number,
        y1: number,
        x2: number,
        y2: number,
        x3: number,
        y3: number,
        x4: number,
        y4: number
    ): number
    function s__MakeTerrainCopyPasteAction_onDestroy(thiss: number): void
    function s__MakeTerrainCopyPasteAction_terrainModificationCancel(thiss: number): void
    function s__MakeTerrainCopyPasteAction_terrainModificationRedo(thiss: number): void
    function rf__s__MakeTerrainCopyPasteAction_cancel(thiss: number): void
    function s__MakeTerrainCopyPasteAction_cancel(thiss: number): boolean
    function rf__s__MakeTerrainCopyPasteAction_redo(thiss: number): void
    function s__MakeTerrainCopyPasteAction_redo(thiss: number): boolean
    function s__MakeTerrainCreateAction_onInit(): void
    function s__MakeTerrainCreateAction_newTerrainSaveId(): number
    function s__MakeTerrainCreateAction_removeTerrainSave(terrainSaveId: number): void
    function rf__s__MakeTerrainCreateAction_create(
        terrainTypeNew: number,
        x1: number,
        y1: number,
        x2: number,
        y2: number
    ): void
    function s__MakeTerrainCreateAction_create(
        terrainTypeNew: number,
        x1: number,
        y1: number,
        x2: number,
        y2: number
    ): number
    function s__MakeTerrainCreateAction_onDestroy(thiss: number): void
    function s__MakeTerrainCreateAction_terrainModificationCancel(thiss: number): void
    function s__MakeTerrainCreateAction_terrainModificationRedo(thiss: number): void
    function rf__s__MakeTerrainCreateAction_cancel(thiss: number): void
    function s__MakeTerrainCreateAction_cancel(thiss: number): boolean
    function rf__s__MakeTerrainCreateAction_redo(thiss: number): void
    function s__MakeTerrainCreateAction_redo(thiss: number): boolean
    function rf__s__MakeTerrainHorizontalSymmetryAction_create(x1: number, y1: number, x2: number, y2: number): void
    function s__MakeTerrainHorizontalSymmetryAction_create(x1: number, y1: number, x2: number, y2: number): number
    function s__MakeTerrainHorizontalSymmetryAction_applySymmetry(thiss: number): void
    function rf__s__MakeTerrainHorizontalSymmetryAction_cancel(thiss: number): void
    function s__MakeTerrainHorizontalSymmetryAction_cancel(thiss: number): boolean
    function rf__s__MakeTerrainHorizontalSymmetryAction_redo(thiss: number): void
    function s__MakeTerrainHorizontalSymmetryAction_redo(thiss: number): boolean
    function rf__s__MakeTerrainVerticalSymmetryAction_create(x1: number, y1: number, x2: number, y2: number): void
    function s__MakeTerrainVerticalSymmetryAction_create(x1: number, y1: number, x2: number, y2: number): number
    function s__MakeTerrainVerticalSymmetryAction_applySymmetry(thiss: number): void
    function rf__s__MakeTerrainVerticalSymmetryAction_cancel(thiss: number): void
    function s__MakeTerrainVerticalSymmetryAction_cancel(thiss: number): boolean
    function rf__s__MakeTerrainVerticalSymmetryAction_redo(thiss: number): void
    function s__MakeTerrainVerticalSymmetryAction_redo(thiss: number): boolean
    function MonsterSpawn___RemoveEnumMonster(): void
    function MonsterSpawn___MonsterStartMovement(): void
    function MonsterSpawn___MonsterSpawn_Actions(): void
    function MonsterSpawn___UnspawMonster_Actions(): void
    function s__MonsterSpawn_onInit(): void
    function s__MonsterSpawn_getLabel(thiss: number): string
    function s__MonsterSpawn_desactivate(thiss: number): void
    function s__MonsterSpawn_createUnspawnReg(thiss: number): void
    function s__MonsterSpawn_activate(thiss: number): void
    function s__MonsterSpawn_onDestroy(thiss: number): void
    function s__MonsterSpawn_deallocate(thiss: number): void
    function s__MonsterSpawn_create(
        label: string,
        mt: number,
        sens: string,
        frequence: number,
        x1: number,
        y1: number,
        x2: number,
        y2: number
    ): number
    function s__MonsterSpawn_startMobMovement(thiss: number, mobUnit: unit): void
    function s__MonsterSpawn_createMob(thiss: number): unit
    function s__MonsterSpawn_setLabel(thiss: number, newLabel: string): void
    function s__MonsterSpawn_setMonsterType(thiss: number, mt: number): void
    function s__MonsterSpawn_setSens(thiss: number, sens: string): void
    function s__MonsterSpawn_setFrequence(thiss: number, frequence: number): void
    function s__MonsterSpawn_displayForPlayer(thiss: number, p: player): void
    function s__MonsterSpawn_toString(thiss: number): string
    function SaveWater___SaveWaterHeights_Actions(): void
    function StartSaveWaterHeights(): void
    function StartSaveWater(): void
    function rf__TerrainKillTimer2Escaper(theTimer: timer): void
    function TerrainKillTimer2Escaper(theTimer: timer): number
    function DeathTerrainKillEscaper_Actions(): void
    function rf__s__TerrainTypeSlide_create(
        label: string,
        terrainTypeId: number,
        slideSpeed: number,
        canTurn: boolean
    ): void
    function s__TerrainTypeSlide_create(
        label: string,
        terrainTypeId: number,
        slideSpeed: number,
        canTurn: boolean
    ): number
    function s__TerrainTypeSlide_getSlideSpeed(thiss: number): number
    function s__TerrainTypeSlide_setSlideSpeed(thiss: number, slideSpeed: number): void
    function s__TerrainTypeSlide_getCanTurn(thiss: number): boolean
    function rf__s__TerrainTypeSlide_setCanTurn(thiss: number, canTurn: boolean): void
    function s__TerrainTypeSlide_setCanTurn(thiss: number, canTurn: boolean): boolean
    function rf__s__TerrainTypeWalk_create(label: string, terrainTypeId: number, walkSpeed: number): void
    function s__TerrainTypeWalk_create(label: string, terrainTypeId: number, walkSpeed: number): number
    function s__TerrainTypeWalk_getWalkSpeed(thiss: number): number
    function s__TerrainTypeWalk_setWalkSpeed(thiss: number, walkSpeed: number): void
    function ChangeAllTerrains_Actions(): void
    function ChangeAllTerrains___StartTerrainModifying(): void
    function ChangeAllTerrains___GetRandomTerrain_checked(): number
    function ChangeAllTerrains___GetRandomKnownTerrain_checked(): number
    function ChangeAllTerrains___GetRandomNotKnownTerrain_checked(): number
    function rf__ChangeAllTerrains(mode: string): void
    function ChangeAllTerrains(mode: string): boolean
    function ChangeAppearanceOfOneTerrain_Actions(): void
    function ChangeOneTerrain___StartTerrainModifying(): void
    function rf__ChangeOneTerrain(terrainTypeLabel: string, newTerrainType: string): void
    function ChangeOneTerrain(terrainTypeLabel: string, newTerrainType: string): string
    function s__EscaperEffectArray_create(): number
    function s__EscaperEffectArray_new(thiss: number, efStr: string, u: unit, bodyPart: string): void
    function s__EscaperEffectArray_count(thiss: number): number
    function s__EscaperEffectArray_onDestroy(thiss: number): void
    function s__EscaperEffectArray_deallocate(thiss: number): void
    function s__EscaperEffectArray_destroyLastEffects(thiss: number, numEfToDestroy: number): void
    function s__EscaperEffectArray_hideEffects(thiss: number): void
    function s__EscaperEffectArray_showEffects(thiss: number, u: unit): void
    function ExchangeTerrains_Actions(): void
    function ExchangeTerrains___StartTerrainModifying(): void
    function rf__ExchangeTerrains(terrainTypeLabelA: string, terrainTypeLabelB: string): void
    function ExchangeTerrains(terrainTypeLabelA: string, terrainTypeLabelB: string): boolean
    function s__MonsterSpawnArray_create(): number
    function s__MonsterSpawnArray_getFirstEmpty(thiss: number): number
    function rf__s__MonsterSpawnArray_get(thiss: number, arrayId: number): void
    function s__MonsterSpawnArray_get(thiss: number, arrayId: number): number
    function rf__s__MonsterSpawnArray_getFromLabel(thiss: number, label: string): void
    function s__MonsterSpawnArray_getFromLabel(thiss: number, label: string): number
    function s__MonsterSpawnArray_getLastInstanceId(thiss: number): number
    function rf__s__MonsterSpawnArray_new(
        thiss: number,
        label: string,
        mt: number,
        sens: string,
        frequence: number,
        x1: number,
        y1: number,
        x2: number,
        y2: number,
        activate: boolean
    ): void
    function s__MonsterSpawnArray_new(
        thiss: number,
        label: string,
        mt: number,
        sens: string,
        frequence: number,
        x1: number,
        y1: number,
        x2: number,
        y2: number,
        activate: boolean
    ): number
    function s__MonsterSpawnArray_count(thiss: number): number
    function s__MonsterSpawnArray_onDestroy(thiss: number): void
    function s__MonsterSpawnArray_deallocate(thiss: number): void
    function s__MonsterSpawnArray_setMonsterSpawnNull(thiss: number, monsterSpawnArrayId: number): void
    function rf__s__MonsterSpawnArray_clearMonsterSpawn(thiss: number, label: string): void
    function s__MonsterSpawnArray_clearMonsterSpawn(thiss: number, label: string): boolean
    function rf__s__MonsterSpawnArray_setMonsterType(thiss: number, label: string, mt: number): void
    function s__MonsterSpawnArray_setMonsterType(thiss: number, label: string, mt: number): boolean
    function rf__s__MonsterSpawnArray_setSens(thiss: number, label: string, sens: string): void
    function s__MonsterSpawnArray_setSens(thiss: number, label: string, sens: string): boolean
    function rf__s__MonsterSpawnArray_setFrequence(thiss: number, label: string, frequence: number): void
    function s__MonsterSpawnArray_setFrequence(thiss: number, label: string, frequence: number): boolean
    function s__MonsterSpawnArray_activate(thiss: number): void
    function s__MonsterSpawnArray_desactivate(thiss: number): void
    function s__MonsterSpawnArray_displayForPlayer(thiss: number, p: player): void
    function rf__s__MonsterSpawnArray_changeLabel(thiss: number, oldLabel: string, newLabel: string): void
    function s__MonsterSpawnArray_changeLabel(thiss: number, oldLabel: string, newLabel: string): boolean
    function RandomizeTerrains_Actions(): void
    function RandomizeTerrains___StartTerrainModifying(): void
    function RandomizeTerrains(): void
    function ReinitTerrains___SaveTerrainConfig(): void
    function Init_ReinitTerrains(): void
    function ReinitTerrains_Actions(): void
    function ReinitTerrains___StartTerrainModifying(): void
    function ReinitTerrains(): void
    function ReinitTerrainsPositions___SaveTerrain_Actions(): void
    function ReinitTerrainsPositions___StartSaveTerrain(): void
    function Init_Reinit_terrains_position_Change_variations_and_ut_at_beginning(): void
    function ReinitTerrainsPosition_Actions(): void
    function ReinitTerrainsPositions___StartTerrainModifying(): void
    function ReinitTerrainsPosition(): void
    function SaveLoadTerrainWithName___SaveTerrain_Actions(): void
    function SaveTerrainWithName(saveName: string): void
    function rf__DeleteTerrainSaveWithName(saveName: string): void
    function DeleteTerrainSaveWithName(saveName: string): boolean
    function SaveLoadTerrainWithName___LoadTerrain_Actions(): void
    function rf__LoadTerrainWithName(saveName: string): void
    function LoadTerrainWithName(saveName: string): boolean
    function SaveLoadTerrainWithoutName___SaveTerrain_Actions(): void
    function SaveTerrainWithoutName(): void
    function SaveLoadTerrainWithoutName___LoadTerrain_Actions(): void
    function LoadTerrainWithoutName(): void
    function SaveTerrainRamps___SaveTerrainRamps_Actions(): void
    function StartSaveTerrainRamps(): void
    function s__KillingTimers_onDestroy(thiss: number): void
    function s__KillingTimers_deallocate(thiss: number): void
    function s__KillingTimers_create(): number
    function s__KillingTimers_start(thiss: number, timerId: number, time: number): void
    function s__KillingTimers_get(thiss: number, id: number): timer
    function rf__s__Escaper_resetItem(thiss: number): void
    function s__Escaper_resetItem(thiss: number): boolean
    function s__Escaper_addEffectMeteor(thiss: number): void
    function s__Escaper_removeEffectMeteor(thiss: number): void
    function s__Escaper_selectHero(thiss: number): void
    function rf__s__Escaper_createHero(thiss: number, x: number, l__y: number, angle: number): void
    function s__Escaper_createHero(thiss: number, x: number, l__y: number, angle: number): boolean
    function s__Escaper_createHeroAtStart(thiss: number): boolean
    function s__Escaper_create(playerId: number): number
    function s__Escaper_removeHero(thiss: number): void
    function s__Escaper_onDestroy(thiss: number): void
    function s__Escaper_deallocate(thiss: number): void
    function rf__s__Escaper_getId(thiss: number): void
    function s__Escaper_getId(thiss: number): number
    function rf__s__Escaper_enableSlide(thiss: number, doEnable: boolean): void
    function s__Escaper_enableSlide(thiss: number, doEnable: boolean): boolean
    function s__Escaper_setSlideLastAngleOrder(thiss: number, angle: number): void
    function s__Escaper_getSlideLastAngleOrder(thiss: number): number
    function rf__s__Escaper_enableCheckTerrain(thiss: number, doEnable: boolean): void
    function s__Escaper_enableCheckTerrain(thiss: number, doEnable: boolean): boolean
    function s__Escaper_isSliding(thiss: number): boolean
    function s__Escaper_doesCheckTerrain(thiss: number): boolean
    function s__Escaper_moveHero(thiss: number, x: number, l__y: number): void
    function s__Escaper_moveInvisUnit(thiss: number, x: number, l__y: number): void
    function s__Escaper_getHero(thiss: number): unit
    function s__Escaper_isAlive(thiss: number): boolean
    function s__Escaper_isPaused(thiss: number): boolean
    function rf__s__Escaper_kill(thiss: number): void
    function s__Escaper_kill(thiss: number): boolean
    function rf__s__Escaper_pause(thiss: number, doPause: boolean): void
    function s__Escaper_pause(thiss: number, doPause: boolean): boolean
    function s__Escaper_specialIllidan(thiss: number): void
    function rf__s__Escaper_revive(thiss: number, x: number, l__y: number): void
    function s__Escaper_revive(thiss: number, x: number, l__y: number): boolean
    function s__Escaper_reviveAtStart(thiss: number): boolean
    function s__Escaper_turnInstantly(thiss: number, angle: number): void
    function s__Escaper_reverse(thiss: number): void
    function s__Escaper_giveHeroControl(thiss: number, escaper: number): void
    function s__Escaper_resetOwner(thiss: number): void
    function s__Escaper_setIsHeroSelectedForPlayer(thiss: number, p: player, heroSelected: boolean): void
    function s__Escaper_newEffect(thiss: number, efStr: string, bodyPart: string): void
    function s__Escaper_destroyLastEffects(thiss: number, numEfToDestroy: number): void
    function s__Escaper_hideEffects(thiss: number): void
    function s__Escaper_showEffects(thiss: number): void
    function s__Escaper_destroyTerrainKillEffect(thiss: number): void
    function s__Escaper_createTerrainKillEffect(thiss: number, killEffectStr: string): void
    function s__Escaper_getLastTerrainType(thiss: number): number
    function s__Escaper_setLastTerrainType(thiss: number, terrainType: number): void
    function s__Escaper_setSlideSpeed(thiss: number, slideSpeed: number): void
    function s__Escaper_setWalkSpeed(thiss: number, walkSpeed: number): void
    function s__Escaper_getSlideSpeed(thiss: number): number
    function s__Escaper_getRealSlideSpeed(thiss: number): number
    function s__Escaper_getWalkSpeed(thiss: number): number
    function s__Escaper_isAbsoluteSlideSpeed(thiss: number): boolean
    function s__Escaper_absoluteSlideSpeed(thiss: number, slideSpeed: number): void
    function s__Escaper_stopAbsoluteSlideSpeed(thiss: number): void
    function s__Escaper_isAbsoluteWalkSpeed(thiss: number): boolean
    function s__Escaper_absoluteWalkSpeed(thiss: number, walkSpeed: number): void
    function s__Escaper_stopAbsoluteWalkSpeed(thiss: number): void
    function s__Escaper_setGodMode(thiss: number, godMode: boolean): void
    function s__Escaper_setGodModeKills(thiss: number, godModeKills: boolean): void
    function s__Escaper_isGodModeOn(thiss: number): boolean
    function s__Escaper_doesGodModeKills(thiss: number): boolean
    function rf__s__Escaper_setBaseColor(thiss: number, baseColorId: number): void
    function s__Escaper_setBaseColor(thiss: number, baseColorId: number): boolean
    function rf__s__Escaper_setBaseColorDisco(thiss: number, baseColorId: number): void
    function s__Escaper_setBaseColorDisco(thiss: number, baseColorId: number): boolean
    function s__Escaper_getBaseColor(thiss: number): number
    function rf__s__Escaper_setVcRed(thiss: number, vcRed: number): void
    function s__Escaper_setVcRed(thiss: number, vcRed: number): boolean
    function rf__s__Escaper_setVcGreen(thiss: number, vcGreen: number): void
    function s__Escaper_setVcGreen(thiss: number, vcGreen: number): boolean
    function rf__s__Escaper_setVcBlue(thiss: number, vcBlue: number): void
    function s__Escaper_setVcBlue(thiss: number, vcBlue: number): boolean
    function rf__s__Escaper_setVcTransparency(thiss: number, vcTransparency: number): void
    function s__Escaper_setVcTransparency(thiss: number, vcTransparency: number): boolean
    function s__Escaper_getVcRed(thiss: number): number
    function s__Escaper_getVcGreen(thiss: number): number
    function s__Escaper_getVcBlue(thiss: number): number
    function s__Escaper_getVcTransparency(thiss: number): number
    function s__Escaper_refreshVertexColor(thiss: number): void
    function s__Escaper_setCanCheat(thiss: number, canCheat: boolean): void
    function s__Escaper_setIsMaximaxou(thiss: number, isMaximaxou: boolean): void
    function s__Escaper_setIsTrueMaximaxou(thiss: number, isTrueMaximaxou: boolean): void
    function s__Escaper_canCheat(thiss: number): boolean
    function s__Escaper_isMaximaxou(thiss: number): boolean
    function s__Escaper_isTrueMaximaxou(thiss: number): boolean
    function s__Escaper_getPlayer(thiss: number): player
    function s__Escaper_setCameraField(thiss: number, cameraField: number): void
    function s__Escaper_getCameraField(thiss: number): number
    function s__Escaper_resetCamera(thiss: number): void
    function s__Escaper_kick(thiss: number, kicked: number): void
    function s__Escaper_setCanTeleport(thiss: number, canTeleport: boolean): void
    function s__Escaper_canTeleport(thiss: number): boolean
    function s__Escaper_hasAutorevive(thiss: number): boolean
    function s__Escaper_setHasAutorevive(thiss: number, hasAutorevive: boolean): void
    function s__Escaper_getMake(thiss: number): number
    function s__Escaper_destroyMakeIfForSpecificLevel(thiss: number): void
    function rf__s__Escaper_setMakingLevel(thiss: number, level: number): void
    function s__Escaper_setMakingLevel(thiss: number, level: number): boolean
    function rf__s__Escaper_getMakingLevel(thiss: number): void
    function s__Escaper_getMakingLevel(thiss: number): number
    function s__Escaper_isMakingCurrentLevel(thiss: number): boolean
    function rf__s__Escaper_destroyMake(thiss: number): void
    function s__Escaper_destroyMake(thiss: number): boolean
    function s__Escaper_makeCreateNoMoveMonsters(thiss: number, mt: number, facingAngle: number): void
    function s__Escaper_makeCreateSimplePatrolMonsters(thiss: number, mode: string, mt: number): void
    function s__Escaper_makeCreateMultiplePatrolsMonsters(thiss: number, mode: string, mt: number): void
    function s__Escaper_makeCreateTeleportMonsters(
        thiss: number,
        mode: string,
        mt: number,
        period: number,
        angle: number
    ): void
    function rf__s__Escaper_makeMmpOrMtNext(thiss: number): void
    function s__Escaper_makeMmpOrMtNext(thiss: number): boolean
    function rf__s__Escaper_makeMonsterTeleportWait(thiss: number): void
    function s__Escaper_makeMonsterTeleportWait(thiss: number): boolean
    function rf__s__Escaper_makeMonsterTeleportHide(thiss: number): void
    function s__Escaper_makeMonsterTeleportHide(thiss: number): boolean
    function s__Escaper_makeCreateMonsterSpawn(
        thiss: number,
        label: string,
        mt: number,
        sens: string,
        frequence: number
    ): void
    function s__Escaper_makeDeleteMonsters(thiss: number, mode: string): void
    function s__Escaper_makeSetUnitTeleportPeriod(thiss: number, mode: string, period: number): void
    function s__Escaper_makeGetUnitTeleportPeriod(thiss: number): void
    function s__Escaper_makeSetUnitMonsterType(thiss: number, mode: string, mt: number): void
    function s__Escaper_makeCreateMeteor(thiss: number): void
    function s__Escaper_makeDeleteMeteors(thiss: number, mode: string): void
    function s__Escaper_makeCreateCaster(thiss: number, casterType: number, angle: number): void
    function s__Escaper_makeDeleteCasters(thiss: number, mode: string): void
    function s__Escaper_makeCreateClearMobs(thiss: number, disableDuration: number): void
    function s__Escaper_makeDeleteClearMobs(thiss: number): void
    function s__Escaper_makeCreateTerrain(thiss: number, terrainType: number): void
    function s__Escaper_makeTerrainCopyPaste(thiss: number): void
    function s__Escaper_makeTerrainVerticalSymmetry(thiss: number): void
    function s__Escaper_makeTerrainHorizontalSymmetry(thiss: number): void
    function s__Escaper_makeTerrainHeight(thiss: number, radius: number, height: number): void
    function s__Escaper_makeGetTerrainType(thiss: number): void
    function s__Escaper_makeExchangeTerrains(thiss: number): void
    function s__Escaper_makeCreateStart(thiss: number, forNext: boolean): void
    function s__Escaper_makeCreateEnd(thiss: number): void
    function s__Escaper_makeCreateVisibilityModifier(thiss: number): void
    function rf__s__Escaper_cancelLastAction(thiss: number): void
    function s__Escaper_cancelLastAction(thiss: number): boolean
    function rf__s__Escaper_redoLastAction(thiss: number): void
    function s__Escaper_redoLastAction(thiss: number): boolean
    function s__Escaper_deleteSpecificActionsForLevel(thiss: number, level: number): void
    function s__Escaper_newAction(thiss: number, action: number): number
    function s__Escaper_destroyAllSavedActions(thiss: number): void
    function s__Escaper_destroyCancelledActions(thiss: number): void
    function s__Escaper_getLastZ(thiss: number): number
    function s__Escaper_setLastZ(thiss: number, lastZ: number): void
    function s__Escaper_getOldDiffZ(thiss: number): number
    function s__Escaper_setOldDiffZ(thiss: number, oldDiffZ: number): void
    function s__Escaper_getSpeedZ(thiss: number): number
    function s__Escaper_setSpeedZ(thiss: number, speedZ: number): void
    function s__Escaper_coopReviveHero(thiss: number): void
    function s__Escaper_isCoopInvul(thiss: number): boolean
    function s__Escaper_setCoopInvul(thiss: number, invul: boolean): void
    function s__Escaper_enableTrigCoopRevive(thiss: number): void
    function s__Escaper_refreshCerclePosition(thiss: number): void
    function SaveTerrainHeights___SaveTerrainCliffs_Actions(): void
    function StartSaveTerrainCliffs(): void
    function SaveTerrainHeights___SaveTerrainHeights_Actions(): void
    function StartSaveTerrainHeights(): void
    function rf__s__TerrainTypeDeath_create(
        label: string,
        terrainTypeId: number,
        killingEffectStr: string,
        timeToKill: number,
        toleranceDist: number
    ): void
    function s__TerrainTypeDeath_create(
        label: string,
        terrainTypeId: number,
        killingEffectStr: string,
        timeToKill: number,
        toleranceDist: number
    ): number
    function s__TerrainTypeDeath_onDestroy(thiss: number): void
    function s__TerrainTypeDeath_setKillingEffectStr(thiss: number, killingEffectStr: string): void
    function s__TerrainTypeDeath_getKillingEffectStr(thiss: number): string
    function rf__s__TerrainTypeDeath_setTimeToKill(thiss: number, newTimeToKill: number): void
    function s__TerrainTypeDeath_setTimeToKill(thiss: number, newTimeToKill: number): boolean
    function s__TerrainTypeDeath_getTimeToKill(thiss: number): number
    function s__TerrainTypeDeath_killEscaper(thiss: number, escaper: number): void
    function s__TerrainTypeDeath_getTimer(thiss: number, escaperId: number): timer
    function s__TerrainTypeDeath_getToleranceDist(thiss: number): number
    function rf__s__TerrainTypeDeath_setToleranceDist(thiss: number, toleranceDist: number): void
    function s__TerrainTypeDeath_setToleranceDist(thiss: number, toleranceDist: number): boolean
    function Trig_Trig_checkpoint_revive_heroes_Actions(): void
    function Init_Trig_checkpoint_revive_heroes(): void
    function CasterDelete_Actions(): void
    function CasterMaking_Actions(): void
    function rf__CmdName(str: string): void
    function CmdName(str: string): string
    function IsCmd(str: string): boolean
    function rf__CmdParam(str: string, paramNumber: number): void
    function CmdParam(str: string, paramNumber: number): string
    function NbParam(str: string): number
    function NoParam(str: string): boolean
    function rf__ColorString2Id(colorString: string): void
    function ColorString2Id(colorString: string): number
    function IsColorString(colorString: string): boolean
    function IsPlayerColorString(colorString: string): boolean
    function EndMaking_Actions(): void
    function s__EscaperArray_create(): number
    function s__EscaperArray_newAt(thiss: number, id: number): void
    function s__EscaperArray_count(thiss: number): number
    function s__EscaperArray_get(thiss: number, id: number): number
    function s__EscaperArray_nullify(thiss: number, id: number): void
    function s__EscaperArray_remove(thiss: number, id: number): void
    function s__EscaperArray_deleteSpecificActionsForLevel(thiss: number, level: number): void
    function s__EscaperArray_destroyMakesIfForSpecificLevel_currentLevel(thiss: number): void
    function GettingTerrainTypeInfo_Actions(): void
    function RandomizeStartPositionsAndHeroSpawnOrder(): void
    function Trig_heroes_Actions(): void
    function Init_Heroes(): void
    function ClearMobMaking_Actions(): void
    function ClearMobDelete_Actions(): void
    function MonsterMakingMultiplePatrols_Actions(): void
    function MonsterMakingNoMove_Actions(): void
    function rf__MakeSimplePatrolAuto_ChangeDistOnTerrain(newDist: number): void
    function MakeSimplePatrolAuto_ChangeDistOnTerrain(newDist: number): boolean
    function MakeSimplePatrolAuto_ChangeDistOnTerrainDefault(): void
    function MonsterMakingSimplePatrol_Actions(): void
    function MonsterMakingTeleport_Actions(): void
    function MakeExchangeTerrains_Actions(): void
    function GetUnitTeleportPeriod_Actions(): void
    function SetUnitMonsterType_Actions(): void
    function SetUnitTeleportPeriod_Actions(): void
    function MeteorDelete_Actions(): void
    function MeteorMaking_Actions(): void
    function MonsterDelete_Actions(): void
    function MonsterSpawnMaking_Actions(): void
    function SaveTerrain___SaveTerrainsUsed(): void
    function SaveTerrain___SaveMapDimensionsAndCenterOffset(): void
    function rf__SaveTerrain___GetTerrainId(x: number, l__SaveTerrain___y: number): void
    function SaveTerrain___GetTerrainId(x: number, l__SaveTerrain___y: number): string
    function GererOrdreTerrains(): void
    function SaveTerrain___SaveTerrain_Actions(): void
    function StartSaveTerrain(): void
    function s__Start_create(x1: number, y1: number, x2: number, y2: number): number
    function s__Start_onDestroy(thiss: number): void
    function s__Start_getRandomX(thiss: number): number
    function s__Start_getRandomY(thiss: number): number
    function s__Start_getCenterX(thiss: number): number
    function s__Start_getCenterY(thiss: number): number
    function s__Start_toString(thiss: number): string
    function EndReaching_Actions(): void
    function s__End_create(x1: number, y1: number, x2: number, y2: number): number
    function s__End_activate(thiss: number, activ: boolean): void
    function s__End_onDestroy(thiss: number): void
    function s__End_toString(thiss: number): string
    function Init_StartAndEnd(): void
    function StartMaking_Actions(): void
    function TerrainCopyPaste_Actions(): void
    function TerrainHeightMaking_Actions(): void
    function TerrainHorizontalSymmetry_Actions(): void
    function TerrainMaking_Actions(): void
    function TerrainVerticalSymmetry_Actions(): void
    function Trig_to_turn_to_point_Conditions(): boolean
    function Trig_to_turn_to_point_Actions(): void
    function Trig_to_turn_to_widget_Conditions(): boolean
    function Trig_to_turn_to_widget_Actions(): void
    function Init_ToTurnOnSlide(): void
    function VisibilityModifierMaking_Actions(): void
    function rf__ExecuteCommandAll(escaper: number, cmd: string): void
    function ExecuteCommandAll(escaper: number, cmd: string): boolean
    function rf__ExecuteCommandCheat(escaper: number, cmd: string): void
    function ExecuteCommandCheat(escaper: number, cmd: string): boolean
    function rf__ExecuteCommandMake(escaper: number, cmd: string): void
    function ExecuteCommandMake(escaper: number, cmd: string): boolean
    function rf__ExecuteCommandRed(escaper: number, cmd: string): void
    function ExecuteCommandRed(escaper: number, cmd: string): boolean
    function rf__ExecuteCommandTrueMax(escaper: number, cmd: string): void
    function ExecuteCommandTrueMax(escaper: number, cmd: string): boolean
    function s__Level_create(): number
    function s__Level_activate(thiss: number, activ: boolean): void
    function s__Level_checkpointReviveHeroes(thiss: number, finisher: number): void
    function s__Level_getStart(thiss: number): number
    function s__Level_getStartRandomX(thiss: number): number
    function s__Level_getStartRandomY(thiss: number): number
    function s__Level_newStart(thiss: number, x1: number, y1: number, x2: number, y2: number): void
    function s__Level_newEnd(thiss: number, x1: number, y1: number, x2: number, y2: number): void
    function s__Level_getEnd(thiss: number): number
    function s__Level_getNbMonsters(thiss: number, mode: string): number
    function s__Level_onDestroy(thiss: number): void
    function s__Level_deallocate(thiss: number): void
    function s__Level_recreateMonstersOfType(thiss: number, mt: number): void
    function s__Level_removeMonstersOfType(thiss: number, mt: number): void
    function s__Level_refreshCastersOfType(thiss: number, ct: number): void
    function s__Level_removeCastersOfType(thiss: number, ct: number): void
    function rf__s__Level_getId(thiss: number): void
    function s__Level_getId(thiss: number): number
    function s__Level_isActivated(thiss: number): boolean
    function s__Level_setIsActivated(thiss: number, activated: boolean): void
    function rf__s__Level_setNbLivesEarned(thiss: number, nbLives: number): void
    function s__Level_setNbLivesEarned(thiss: number, nbLives: number): boolean
    function s__Level_getNbLives(thiss: number): number
    function s__Level_newVisibilityModifier(thiss: number, x1: number, y1: number, x2: number, y2: number): number
    function s__Level_newVisibilityModifierFromExisting(thiss: number, vm: number): number
    function s__Level_removeVisibilities(thiss: number): void
    function s__Level_activateVisibilities(thiss: number, activate: boolean): void
    function s__Level_setStartMessage(thiss: number, str: string): void
    function s__Level_getStartMessage(thiss: number): string
    function rf__Make_GetActions(kind: string): void
    function Make_GetActions(kind: string): Function
    function MonsterInterface__InitHtMonster(): void
    function GetNextMonsterId(): number
    function MonsterIdHasBeenSetTo(monsterId: number): void
    function MonsterHashtableSetMonsterId(monster: number, oldId: number, newId: number): void
    function MonsterId2Monster(monsterId: number): number
    function MonsterHashtableRemoveMonsterId(id: number): void
    function CasterHashtableSetCasterId(caster: number, oldId: number, newId: number): void
    function CasterId2Caster(casterId: number): number
    function CasterHashtableRemoveCasterId(id: number): void
    function StartSaveMapInCache(): void
    function Init_SaveMapInCache(): void
    function s__TerrainTypeArray_create(): number
    function rf__s__TerrainTypeArray_get(thiss: number, label: string): void
    function s__TerrainTypeArray_get(thiss: number, label: string): number
    function rf__s__TerrainTypeArray_getTerrainType(thiss: number, x: number, l__y: number): void
    function s__TerrainTypeArray_getTerrainType(thiss: number, x: number, l__y: number): number
    function rf__s__TerrainTypeArray_isTerrainTypeIdAlreadyUsed(thiss: number, terrainTypeId: number): void
    function s__TerrainTypeArray_isTerrainTypeIdAlreadyUsed(thiss: number, terrainTypeId: number): boolean
    function s__TerrainTypeArray_isLabelAlreadyUsed(thiss: number, label: string): boolean
    function rf__s__TerrainTypeArray_newWalk(
        thiss: number,
        label: string,
        terrainTypeId: number,
        walkspeed: number
    ): void
    function s__TerrainTypeArray_newWalk(thiss: number, label: string, terrainTypeId: number, walkspeed: number): number
    function rf__s__TerrainTypeArray_newDeath(
        thiss: number,
        label: string,
        terrainTypeId: number,
        killingEffectStr: string,
        timeToKill: number,
        toleranceDist: number
    ): void
    function s__TerrainTypeArray_newDeath(
        thiss: number,
        label: string,
        terrainTypeId: number,
        killingEffectStr: string,
        timeToKill: number,
        toleranceDist: number
    ): number
    function rf__s__TerrainTypeArray_newSlide(
        thiss: number,
        label: string,
        terrainTypeId: number,
        slideSpeed: number,
        canTurn: boolean
    ): void
    function s__TerrainTypeArray_newSlide(
        thiss: number,
        label: string,
        terrainTypeId: number,
        slideSpeed: number,
        canTurn: boolean
    ): number
    function rf__s__TerrainTypeArray_remove(thiss: number, label: string): void
    function s__TerrainTypeArray_remove(thiss: number, label: string): boolean
    function s__TerrainTypeArray_getWalk(thiss: number, id: number): number
    function s__TerrainTypeArray_getDeath(thiss: number, id: number): number
    function s__TerrainTypeArray_getSlide(thiss: number, id: number): number
    function s__TerrainTypeArray_displayForPlayer(thiss: number, p: player): void
    function s__TerrainTypeArray_saveInCache(thiss: number): void
    function s__TerrainTypeArray_count(thiss: number): number
    function rf__s__TerrainTypeArray_setOrder(thiss: number, cmd: string): void
    function s__TerrainTypeArray_setOrder(thiss: number, cmd: string): boolean
    function rf__s__TerrainTypeArray_setMainTileset(thiss: number, tileset: string): void
    function s__TerrainTypeArray_setMainTileset(thiss: number, tileset: string): boolean
    function s__TerrainTypeArray_getMainTileset(thiss: number): string
    function ClearTriggerMobId2ClearMob(triggerMobId: number): number
    function ClearMobTimerExpires(): void
    function ClearMobFrontMontantTimerExpires(): void
    function KillMonsterOrCasterEach(): void
    function TemporarilyDisableMonsterOrCasterEach(): void
    function TemporarilyEnableMonsterOrCasterEach(): void
    function ClearMob___InitClearMob(): void
    function s__ClearMob_getDisableDuration(thiss: number): number
    function rf__s__ClearMob_setDisableDuration(thiss: number, disableDuration: number): void
    function s__ClearMob_setDisableDuration(thiss: number, disableDuration: number): boolean
    function s__ClearMob_getTriggerMob(thiss: number): number
    function rf__s__ClearMob_setTriggerMob(thiss: number, newTriggerMob: number): void
    function s__ClearMob_setTriggerMob(thiss: number, newTriggerMob: number): boolean
    function s__ClearMob_getBlockMobs(thiss: number): number
    function rf__s__ClearMob_create(triggerMobId: number, disableDuration: number): void
    function s__ClearMob_create(triggerMobId: number, disableDuration: number): number
    function s__ClearMob_initialize(thiss: number): void
    function s__ClearMob_close(thiss: number): void
    function s__ClearMob_redoTriggerMobPermanentEffect(thiss: number): void
    function rf__s__ClearMob_addBlockMob(thiss: number, blockMobId: number): void
    function s__ClearMob_addBlockMob(thiss: number, blockMobId: number): boolean
    function s__ClearMob_removeLastBlockMob(thiss: number): boolean
    function s__ClearMob_removeAllBlockMobs(thiss: number): void
    function s__ClearMob_onDestroy(thiss: number): void
    function s__ClearMob_deallocate(thiss: number): void
    function s__ClearMob_isBeingActivated(thiss: number): boolean
    function s__ClearMob_activate(thiss: number): void
    function rf__ExecuteCommandMax(escaper: number, cmd: string): void
    function ExecuteCommandMax(escaper: number, cmd: string): boolean
    function s__LevelArray_create(): number
    function rf__s__LevelArray_goToLevel(thiss: number, finisher: number, levelId: number): void
    function s__LevelArray_goToLevel(thiss: number, finisher: number, levelId: number): boolean
    function rf__s__LevelArray_goToNextLevel(thiss: number, finisher: number): void
    function s__LevelArray_goToNextLevel(thiss: number, finisher: number): boolean
    function s__LevelArray_restartTheGame(thiss: number): void
    function rf__s__LevelArray_new(thiss: number): void
    function s__LevelArray_new(thiss: number): boolean
    function rf__s__LevelArray_destroyLastLevel(thiss: number): void
    function s__LevelArray_destroyLastLevel(thiss: number): boolean
    function s__LevelArray_count(thiss: number): number
    function s__LevelArray_getCurrentLevel(thiss: number): number
    function rf__s__LevelArray_get(thiss: number, levelId: number): void
    function s__LevelArray_get(thiss: number, levelId: number): number
    function rf__s__LevelArray_getLevelFromMonsterNoMoveArray(thiss: number, ma: number): void
    function s__LevelArray_getLevelFromMonsterNoMoveArray(thiss: number, ma: number): number
    function rf__s__LevelArray_getLevelFromMonsterSimplePatrolArray(thiss: number, ma: number): void
    function s__LevelArray_getLevelFromMonsterSimplePatrolArray(thiss: number, ma: number): number
    function rf__s__LevelArray_getLevelFromMonsterMultiplePatrolsArray(thiss: number, ma: number): void
    function s__LevelArray_getLevelFromMonsterMultiplePatrolsArray(thiss: number, ma: number): number
    function rf__s__LevelArray_getLevelFromMonsterTeleportArray(thiss: number, ma: number): void
    function s__LevelArray_getLevelFromMonsterTeleportArray(thiss: number, ma: number): number
    function rf__s__LevelArray_getLevelFromMonsterSpawnArray(thiss: number, msa: number): void
    function s__LevelArray_getLevelFromMonsterSpawnArray(thiss: number, msa: number): number
    function rf__s__LevelArray_getLevelFromMeteorArray(thiss: number, ma: number): void
    function s__LevelArray_getLevelFromMeteorArray(thiss: number, ma: number): number
    function rf__s__LevelArray_getLevelFromVisibilityModifierArray(thiss: number, vma: number): void
    function s__LevelArray_getLevelFromVisibilityModifierArray(thiss: number, vma: number): number
    function rf__s__LevelArray_getLevelFromCasterArray(thiss: number, casterArray: number): void
    function s__LevelArray_getLevelFromCasterArray(thiss: number, casterArray: number): number
    function rf__s__LevelArray_getLevelFromClearMobArray(thiss: number, clearMobArray: number): void
    function s__LevelArray_getLevelFromClearMobArray(thiss: number, clearMobArray: number): number
    function s__LevelArray_removeMonstersOfType(thiss: number, mt: number): void
    function s__LevelArray_removeCastersOfType(thiss: number, ct: number): void
    function s__LevelArray_getLastLevelId(thiss: number): number
    function s__LevelArray_getNbMonsters(thiss: number, mode: string): number
    function rf__ForceGetLevel(levelId: number): void
    function ForceGetLevel(levelId: number): number
    function s__MakeCaster_getCasterType(thiss: number): number
    function s__MakeCaster_getAngle(thiss: number): number
    function rf__s__MakeCaster_create(maker: unit, casterType: number, angle: number): void
    function s__MakeCaster_create(maker: unit, casterType: number, angle: number): number
    function s__MakeCaster_onDestroy(thiss: number): void
    function s__MakeCaster_cancelLastAction(thiss: number): boolean
    function s__MakeCaster_redoLastAction(thiss: number): boolean
    function s__MakeDeleteCasters_isLastLocSavedUsed(thiss: number): boolean
    function rf__s__MakeDeleteCasters_create(maker: unit, mode: string): void
    function s__MakeDeleteCasters_create(maker: unit, mode: string): number
    function s__MakeDeleteCasters_onDestroy(thiss: number): void
    function s__MakeDeleteCasters_saveLoc(thiss: number, x: number, l__y: number): void
    function rf__s__MakeDeleteCasters_unsaveLoc(thiss: number): void
    function s__MakeDeleteCasters_unsaveLoc(thiss: number): boolean
    function s__MakeDeleteCasters_unsaveLocDefinitely(thiss: number): void
    function s__MakeDeleteCasters_cancelLastAction(thiss: number): boolean
    function rf__s__MakeDeleteCasters_redoLastAction(thiss: number): void
    function s__MakeDeleteCasters_redoLastAction(thiss: number): boolean
    function s__MakeDeleteCasters_getMode(thiss: number): string
    function s__MakeDeleteMeteors_isLastLocSavedUsed(thiss: number): boolean
    function rf__s__MakeDeleteMeteors_create(maker: unit, mode: string): void
    function s__MakeDeleteMeteors_create(maker: unit, mode: string): number
    function s__MakeDeleteMeteors_onDestroy(thiss: number): void
    function s__MakeDeleteMeteors_saveLoc(thiss: number, x: number, l__y: number): void
    function rf__s__MakeDeleteMeteors_unsaveLoc(thiss: number): void
    function s__MakeDeleteMeteors_unsaveLoc(thiss: number): boolean
    function s__MakeDeleteMeteors_unsaveLocDefinitely(thiss: number): void
    function s__MakeDeleteMeteors_cancelLastAction(thiss: number): boolean
    function rf__s__MakeDeleteMeteors_redoLastAction(thiss: number): void
    function s__MakeDeleteMeteors_redoLastAction(thiss: number): boolean
    function s__MakeDeleteMeteors_getMode(thiss: number): string
    function s__MakeDeleteMonsters_isLastLocSavedUsed(thiss: number): boolean
    function rf__s__MakeDeleteMonsters_create(maker: unit, mode: string): void
    function s__MakeDeleteMonsters_create(maker: unit, mode: string): number
    function s__MakeDeleteMonsters_onDestroy(thiss: number): void
    function s__MakeDeleteMonsters_saveLoc(thiss: number, x: number, l__y: number): void
    function rf__s__MakeDeleteMonsters_unsaveLoc(thiss: number): void
    function s__MakeDeleteMonsters_unsaveLoc(thiss: number): boolean
    function s__MakeDeleteMonsters_unsaveLocDefinitely(thiss: number): void
    function s__MakeDeleteMonsters_cancelLastAction(thiss: number): boolean
    function rf__s__MakeDeleteMonsters_redoLastAction(thiss: number): void
    function s__MakeDeleteMonsters_redoLastAction(thiss: number): boolean
    function s__MakeDeleteMonsters_getMode(thiss: number): string
    function rf__s__MakeEnd_create(maker: unit): void
    function s__MakeEnd_create(maker: unit): number
    function s__MakeEnd_onDestroy(thiss: number): void
    function s__MakeEnd_saveLoc(thiss: number, x: number, l__y: number): void
    function rf__s__MakeEnd_unsaveLoc(thiss: number): void
    function s__MakeEnd_unsaveLoc(thiss: number): boolean
    function s__MakeEnd_isLastLocSavedUsed(thiss: number): boolean
    function s__MakeEnd_cancelLastAction(thiss: number): boolean
    function rf__s__MakeEnd_redoLastAction(thiss: number): void
    function s__MakeEnd_redoLastAction(thiss: number): boolean
    function rf__s__MakeExchangeTerrains_create(maker: unit): void
    function s__MakeExchangeTerrains_create(maker: unit): number
    function s__MakeExchangeTerrains_onDestroy(thiss: number): void
    function s__MakeExchangeTerrains_saveLoc(thiss: number, x: number, l__y: number): void
    function rf__s__MakeExchangeTerrains_unsaveLoc(thiss: number): void
    function s__MakeExchangeTerrains_unsaveLoc(thiss: number): boolean
    function s__MakeExchangeTerrains_unsaveLocDefinitely(thiss: number): void
    function s__MakeExchangeTerrains_isLastLocSavedUsed(thiss: number): boolean
    function s__MakeExchangeTerrains_cancelLastAction(thiss: number): boolean
    function rf__s__MakeExchangeTerrains_redoLastAction(thiss: number): void
    function s__MakeExchangeTerrains_redoLastAction(thiss: number): boolean
    function rf__s__MakeGetTerrainType_create(maker: unit): void
    function s__MakeGetTerrainType_create(maker: unit): number
    function s__MakeGetTerrainType_onDestroy(thiss: number): void
    function s__MakeGetTerrainType_cancelLastAction(thiss: number): boolean
    function s__MakeGetTerrainType_redoLastAction(thiss: number): boolean
    function rf__s__MakeGetUnitTeleportPeriod_create(maker: unit): void
    function s__MakeGetUnitTeleportPeriod_create(maker: unit): number
    function s__MakeGetUnitTeleportPeriod_onDestroy(thiss: number): void
    function s__MakeGetUnitTeleportPeriod_cancelLastAction(thiss: number): boolean
    function s__MakeGetUnitTeleportPeriod_redoLastAction(thiss: number): boolean
    function rf__s__MakeMeteor_create(maker: unit): void
    function s__MakeMeteor_create(maker: unit): number
    function s__MakeMeteor_onDestroy(thiss: number): void
    function s__MakeMeteor_cancelLastAction(thiss: number): boolean
    function s__MakeMeteor_redoLastAction(thiss: number): boolean
    function s__MakeMonsterMultiplePatrols_getMonsterType(thiss: number): number
    function s__MakeMonsterMultiplePatrols_getMode(thiss: number): string
    function s__MakeMonsterMultiplePatrols_getMonster(thiss: number): number
    function rf__s__MakeMonsterMultiplePatrols_create(maker: unit, mode: string, mt: number): void
    function s__MakeMonsterMultiplePatrols_create(maker: unit, mode: string, mt: number): number
    function s__MakeMonsterMultiplePatrols_onDestroy(thiss: number): void
    function s__MakeMonsterMultiplePatrols_nextMonster(thiss: number): void
    function s__MakeMonsterMultiplePatrols_getLocPointeur(thiss: number): number
    function s__MakeMonsterMultiplePatrols_setUnitLastClicPosition(thiss: number, x: number, l__y: number): void
    function s__MakeMonsterMultiplePatrols_saveLoc(thiss: number, x: number, l__y: number): void
    function rf__s__MakeMonsterMultiplePatrols_unsaveLoc(thiss: number): void
    function s__MakeMonsterMultiplePatrols_unsaveLoc(thiss: number): boolean
    function s__MakeMonsterMultiplePatrols_setMonster(thiss: number, monster: number): void
    function s__MakeMonsterMultiplePatrols_cancelLastAction(thiss: number): boolean
    function rf__s__MakeMonsterMultiplePatrols_redoLastAction(thiss: number): void
    function s__MakeMonsterMultiplePatrols_redoLastAction(thiss: number): boolean
    function s__MakeMonsterNoMove_getMonsterType(thiss: number): number
    function s__MakeMonsterNoMove_getFacingAngle(thiss: number): number
    function rf__s__MakeMonsterNoMove_create(maker: unit, mt: number, facingAngle: number): void
    function s__MakeMonsterNoMove_create(maker: unit, mt: number, facingAngle: number): number
    function s__MakeMonsterNoMove_onDestroy(thiss: number): void
    function s__MakeMonsterNoMove_cancelLastAction(thiss: number): boolean
    function s__MakeMonsterNoMove_redoLastAction(thiss: number): boolean
    function s__MakeMonsterSimplePatrol_getMonsterType(thiss: number): number
    function rf__s__MakeMonsterSimplePatrol_create(maker: unit, mode: string, mt: number): void
    function s__MakeMonsterSimplePatrol_create(maker: unit, mode: string, mt: number): number
    function s__MakeMonsterSimplePatrol_onDestroy(thiss: number): void
    function s__MakeMonsterSimplePatrol_saveLoc(thiss: number, x: number, l__y: number): void
    function rf__s__MakeMonsterSimplePatrol_unsaveLoc(thiss: number): void
    function s__MakeMonsterSimplePatrol_unsaveLoc(thiss: number): boolean
    function s__MakeMonsterSimplePatrol_unsaveLocDefinitely(thiss: number): void
    function s__MakeMonsterSimplePatrol_isLastLocSavedUsed(thiss: number): boolean
    function s__MakeMonsterSimplePatrol_cancelLastAction(thiss: number): boolean
    function rf__s__MakeMonsterSimplePatrol_redoLastAction(thiss: number): void
    function s__MakeMonsterSimplePatrol_redoLastAction(thiss: number): boolean
    function s__MakeMonsterSimplePatrol_getMode(thiss: number): string
    function rf__s__MakeMonsterSpawn_create(
        maker: unit,
        label: string,
        mt: number,
        sens: string,
        frequence: number
    ): void
    function s__MakeMonsterSpawn_create(maker: unit, label: string, mt: number, sens: string, frequence: number): number
    function s__MakeMonsterSpawn_onDestroy(thiss: number): void
    function s__MakeMonsterSpawn_saveLoc(thiss: number, x: number, l__y: number): void
    function rf__s__MakeMonsterSpawn_unsaveLoc(thiss: number): void
    function s__MakeMonsterSpawn_unsaveLoc(thiss: number): boolean
    function s__MakeMonsterSpawn_isLastLocSavedUsed(thiss: number): boolean
    function s__MakeMonsterSpawn_cancelLastAction(thiss: number): boolean
    function rf__s__MakeMonsterSpawn_redoLastAction(thiss: number): void
    function s__MakeMonsterSpawn_redoLastAction(thiss: number): boolean
    function s__MakeMonsterTeleport_getMonsterType(thiss: number): number
    function s__MakeMonsterTeleport_getPeriod(thiss: number): number
    function s__MakeMonsterTeleport_getAngle(thiss: number): number
    function s__MakeMonsterTeleport_getMode(thiss: number): string
    function s__MakeMonsterTeleport_getMonster(thiss: number): number
    function rf__s__MakeMonsterTeleport_create(
        maker: unit,
        mode: string,
        mt: number,
        period: number,
        angle: number
    ): void
    function s__MakeMonsterTeleport_create(maker: unit, mode: string, mt: number, period: number, angle: number): number
    function s__MakeMonsterTeleport_onDestroy(thiss: number): void
    function s__MakeMonsterTeleport_nextMonster(thiss: number): void
    function rf__s__MakeMonsterTeleport_addWaitPeriod(thiss: number): void
    function s__MakeMonsterTeleport_addWaitPeriod(thiss: number): boolean
    function rf__s__MakeMonsterTeleport_addHidePeriod(thiss: number): void
    function s__MakeMonsterTeleport_addHidePeriod(thiss: number): boolean
    function s__MakeMonsterTeleport_getLocPointeur(thiss: number): number
    function s__MakeMonsterTeleport_setUnitLastClicPosition(thiss: number, x: number, l__y: number): void
    function rf__s__MakeMonsterTeleport_saveLoc(thiss: number, x: number, l__y: number): void
    function s__MakeMonsterTeleport_saveLoc(thiss: number, x: number, l__y: number): boolean
    function rf__s__MakeMonsterTeleport_unsaveLoc(thiss: number): void
    function s__MakeMonsterTeleport_unsaveLoc(thiss: number): boolean
    function s__MakeMonsterTeleport_setMonster(thiss: number, monster: number): void
    function s__MakeMonsterTeleport_cancelLastAction(thiss: number): boolean
    function rf__s__MakeMonsterTeleport_redoLastAction(thiss: number): void
    function s__MakeMonsterTeleport_redoLastAction(thiss: number): boolean
    function s__MakeSetUnitMonsterType_getMonsterType(thiss: number): number
    function s__MakeSetUnitMonsterType_isLastLocSavedUsed(thiss: number): boolean
    function rf__s__MakeSetUnitMonsterType_create(maker: unit, mode: string, mt: number): void
    function s__MakeSetUnitMonsterType_create(maker: unit, mode: string, mt: number): number
    function s__MakeSetUnitMonsterType_onDestroy(thiss: number): void
    function s__MakeSetUnitMonsterType_saveLoc(thiss: number, x: number, l__y: number): void
    function rf__s__MakeSetUnitMonsterType_unsaveLoc(thiss: number): void
    function s__MakeSetUnitMonsterType_unsaveLoc(thiss: number): boolean
    function s__MakeSetUnitMonsterType_unsaveLocDefinitely(thiss: number): void
    function s__MakeSetUnitMonsterType_cancelLastAction(thiss: number): boolean
    function rf__s__MakeSetUnitMonsterType_redoLastAction(thiss: number): void
    function s__MakeSetUnitMonsterType_redoLastAction(thiss: number): boolean
    function s__MakeSetUnitMonsterType_getMode(thiss: number): string
    function s__MakeSetUnitTeleportPeriod_getPeriod(thiss: number): number
    function s__MakeSetUnitTeleportPeriod_isLastLocSavedUsed(thiss: number): boolean
    function rf__s__MakeSetUnitTeleportPeriod_create(maker: unit, mode: string, period: number): void
    function s__MakeSetUnitTeleportPeriod_create(maker: unit, mode: string, period: number): number
    function s__MakeSetUnitTeleportPeriod_onDestroy(thiss: number): void
    function s__MakeSetUnitTeleportPeriod_saveLoc(thiss: number, x: number, l__y: number): void
    function rf__s__MakeSetUnitTeleportPeriod_unsaveLoc(thiss: number): void
    function s__MakeSetUnitTeleportPeriod_unsaveLoc(thiss: number): boolean
    function s__MakeSetUnitTeleportPeriod_unsaveLocDefinitely(thiss: number): void
    function s__MakeSetUnitTeleportPeriod_cancelLastAction(thiss: number): boolean
    function rf__s__MakeSetUnitTeleportPeriod_redoLastAction(thiss: number): void
    function s__MakeSetUnitTeleportPeriod_redoLastAction(thiss: number): boolean
    function s__MakeSetUnitTeleportPeriod_getMode(thiss: number): string
    function rf__s__MakeStart_create(maker: unit, forNext: boolean): void
    function s__MakeStart_create(maker: unit, forNext: boolean): number
    function s__MakeStart_onDestroy(thiss: number): void
    function s__MakeStart_saveLoc(thiss: number, x: number, l__y: number): void
    function rf__s__MakeStart_unsaveLoc(thiss: number): void
    function s__MakeStart_unsaveLoc(thiss: number): boolean
    function s__MakeStart_isLastLocSavedUsed(thiss: number): boolean
    function s__MakeStart_cancelLastAction(thiss: number): boolean
    function rf__s__MakeStart_redoLastAction(thiss: number): void
    function s__MakeStart_redoLastAction(thiss: number): boolean
    function s__MakeStart_forNext(thiss: number): boolean
    function rf__s__MakeTerrainCopyPaste_create(maker: unit): void
    function s__MakeTerrainCopyPaste_create(maker: unit): number
    function s__MakeTerrainCopyPaste_onDestroy(thiss: number): void
    function s__MakeTerrainCopyPaste_createUnitClic(thiss: number, u: unit, x: number, l__y: number): unit
    function s__MakeTerrainCopyPaste_unsaveLoc(thiss: number, locId: number): void
    function s__MakeTerrainCopyPaste_unsaveLocDefinitely(thiss: number, locId: number): void
    function s__MakeTerrainCopyPaste_unsaveLocsDefinitely(thiss: number): void
    function s__MakeTerrainCopyPaste_saveLoc(thiss: number, x: number, l__y: number): void
    function rf__s__MakeTerrainCopyPaste_cancelLastAction(thiss: number): void
    function s__MakeTerrainCopyPaste_cancelLastAction(thiss: number): boolean
    function rf__s__MakeTerrainCopyPaste_redoLastAction(thiss: number): void
    function s__MakeTerrainCopyPaste_redoLastAction(thiss: number): boolean
    function s__MakeTerrainCreate_isLastLocSavedUsed(thiss: number): boolean
    function s__MakeTerrainCreate_getTerrainType(thiss: number): number
    function rf__s__MakeTerrainCreate_create(maker: unit, terrainType: number): void
    function s__MakeTerrainCreate_create(maker: unit, terrainType: number): number
    function s__MakeTerrainCreate_onDestroy(thiss: number): void
    function s__MakeTerrainCreate_saveLoc(thiss: number, x: number, l__y: number): void
    function rf__s__MakeTerrainCreate_unsaveLoc(thiss: number): void
    function s__MakeTerrainCreate_unsaveLoc(thiss: number): boolean
    function s__MakeTerrainCreate_unsaveLocDefinitely(thiss: number): void
    function s__MakeTerrainCreate_cancelLastAction(thiss: number): boolean
    function rf__s__MakeTerrainCreate_redoLastAction(thiss: number): void
    function s__MakeTerrainCreate_redoLastAction(thiss: number): boolean
    function rf__s__MakeTerrainHeight_create(maker: unit, radius: number, height: number): void
    function s__MakeTerrainHeight_create(maker: unit, radius: number, height: number): number
    function s__MakeTerrainHeight_getRadius(thiss: number): number
    function s__MakeTerrainHeight_getHeight(thiss: number): number
    function s__MakeTerrainHeight_onDestroy(thiss: number): void
    function s__MakeTerrainHeight_cancelLastAction(thiss: number): boolean
    function s__MakeTerrainHeight_redoLastAction(thiss: number): boolean
    function s__MakeTerrainHorizontalSymmetry_isLastLocSavedUsed(thiss: number): boolean
    function rf__s__MakeTerrainHorizontalSymmetry_create(maker: unit): void
    function s__MakeTerrainHorizontalSymmetry_create(maker: unit): number
    function s__MakeTerrainHorizontalSymmetry_onDestroy(thiss: number): void
    function s__MakeTerrainHorizontalSymmetry_saveLoc(thiss: number, x: number, l__y: number): void
    function rf__s__MakeTerrainHorizontalSymmetry_unsaveLoc(thiss: number): void
    function s__MakeTerrainHorizontalSymmetry_unsaveLoc(thiss: number): boolean
    function s__MakeTerrainHorizontalSymmetry_unsaveLocDefinitely(thiss: number): void
    function s__MakeTerrainHorizontalSymmetry_cancelLastAction(thiss: number): boolean
    function rf__s__MakeTerrainHorizontalSymmetry_redoLastAction(thiss: number): void
    function s__MakeTerrainHorizontalSymmetry_redoLastAction(thiss: number): boolean
    function s__MakeTerrainVerticalSymmetry_isLastLocSavedUsed(thiss: number): boolean
    function rf__s__MakeTerrainVerticalSymmetry_create(maker: unit): void
    function s__MakeTerrainVerticalSymmetry_create(maker: unit): number
    function s__MakeTerrainVerticalSymmetry_onDestroy(thiss: number): void
    function s__MakeTerrainVerticalSymmetry_saveLoc(thiss: number, x: number, l__y: number): void
    function rf__s__MakeTerrainVerticalSymmetry_unsaveLoc(thiss: number): void
    function s__MakeTerrainVerticalSymmetry_unsaveLoc(thiss: number): boolean
    function s__MakeTerrainVerticalSymmetry_unsaveLocDefinitely(thiss: number): void
    function s__MakeTerrainVerticalSymmetry_cancelLastAction(thiss: number): boolean
    function rf__s__MakeTerrainVerticalSymmetry_redoLastAction(thiss: number): void
    function s__MakeTerrainVerticalSymmetry_redoLastAction(thiss: number): boolean
    function rf__s__MakeVisibilityModifier_create(maker: unit): void
    function s__MakeVisibilityModifier_create(maker: unit): number
    function s__MakeVisibilityModifier_onDestroy(thiss: number): void
    function s__MakeVisibilityModifier_saveLoc(thiss: number, x: number, l__y: number): void
    function rf__s__MakeVisibilityModifier_unsaveLoc(thiss: number): void
    function s__MakeVisibilityModifier_unsaveLoc(thiss: number): boolean
    function s__MakeVisibilityModifier_unsaveLocDefinitely(thiss: number): void
    function s__MakeVisibilityModifier_isLastLocSavedUsed(thiss: number): boolean
    function s__MakeVisibilityModifier_cancelLastAction(thiss: number): boolean
    function rf__s__MakeVisibilityModifier_redoLastAction(thiss: number): void
    function s__MakeVisibilityModifier_redoLastAction(thiss: number): boolean
    function MonsterMultiplePatrols__NewRegion(x: number, l__y: number): region
    function MonsterMultiplePatrols_move_Actions(): void
    function s__MonsterMultiplePatrols_count(): number
    function rf__s__MonsterMultiplePatrols_storeNewLoc(x: number, l__y: number): void
    function s__MonsterMultiplePatrols_storeNewLoc(x: number, l__y: number): boolean
    function s__MonsterMultiplePatrols_destroyLocs(): void
    function s__MonsterMultiplePatrols_getId(thiss: number): number
    function rf__s__MonsterMultiplePatrols_setId(thiss: number, id: number): void
    function s__MonsterMultiplePatrols_setId(thiss: number, id: number): number
    function s__MonsterMultiplePatrols_getCurrentTrigger(thiss: number): trigger
    function s__MonsterMultiplePatrols_removeUnit(thiss: number): void
    function s__MonsterMultiplePatrols_killUnit(thiss: number): void
    function s__MonsterMultiplePatrols_onDestroy(thiss: number): void
    function s__MonsterMultiplePatrols_disableTrigger(thiss: number, id: number): void
    function s__MonsterMultiplePatrols_activateMove(thiss: number, id: number): void
    function s__MonsterMultiplePatrols_nextMove(thiss: number): void
    function rf__s__MonsterMultiplePatrols_create(mt: number, mode: string): void
    function s__MonsterMultiplePatrols_create(mt: number, mode: string): number
    function s__MonsterMultiplePatrols_createUnit(thiss: number): void
    function s__MonsterMultiplePatrols_getLife(thiss: number): number
    function s__MonsterMultiplePatrols_setLife(thiss: number, life: number): void
    function rf__s__MonsterMultiplePatrols_getX(thiss: number, id: number): void
    function s__MonsterMultiplePatrols_getX(thiss: number, id: number): number
    function rf__s__MonsterMultiplePatrols_getY(thiss: number, id: number): void
    function s__MonsterMultiplePatrols_getY(thiss: number, id: number): number
    function rf__s__MonsterMultiplePatrols_destroyLastLoc(thiss: number): void
    function s__MonsterMultiplePatrols_destroyLastLoc(thiss: number): boolean
    function s__MonsterMultiplePatrols_addNewLocAt(thiss: number, id: number, x: number, l__y: number): void
    function rf__s__MonsterMultiplePatrols_addNewLoc(thiss: number, x: number, l__y: number): void
    function s__MonsterMultiplePatrols_addNewLoc(thiss: number, x: number, l__y: number): number
    function s__MonsterMultiplePatrols_getMonsterType(thiss: number): number
    function rf__s__MonsterMultiplePatrols_setMonsterType(thiss: number, mt: number): void
    function s__MonsterMultiplePatrols_setMonsterType(thiss: number, mt: number): boolean
    function s__MonsterMultiplePatrols_temporarilyDisable(thiss: number, disablingTimer: timer): void
    function s__MonsterMultiplePatrols_temporarilyEnable(thiss: number, disablingTimer: timer): void
    function s__MonsterMultiplePatrols_setBaseColor(thiss: number, colorString: string): void
    function s__MonsterMultiplePatrols_setVertexColor(
        thiss: number,
        vcRed: number,
        vcGreen: number,
        vcBlue: number
    ): void
    function s__MonsterMultiplePatrols_reinitColor(thiss: number): void
    function rf__s__MonsterMultiplePatrols_toString(thiss: number): void
    function s__MonsterMultiplePatrols_toString(thiss: number): string
    function s__MonsterNoMove_count(): number
    function s__MonsterNoMove_getId(thiss: number): number
    function rf__s__MonsterNoMove_setId(thiss: number, id: number): void
    function s__MonsterNoMove_setId(thiss: number, id: number): number
    function s__MonsterNoMove_removeUnit(thiss: number): void
    function s__MonsterNoMove_killUnit(thiss: number): void
    function s__MonsterNoMove_onDestroy(thiss: number): void
    function s__MonsterNoMove_create(mt: number, x: number, l__y: number, angle: number): number
    function s__MonsterNoMove_createUnit(thiss: number): void
    function s__MonsterNoMove_getLife(thiss: number): number
    function s__MonsterNoMove_setLife(thiss: number, life: number): void
    function s__MonsterNoMove_getMonsterType(thiss: number): number
    function rf__s__MonsterNoMove_setMonsterType(thiss: number, mt: number): void
    function s__MonsterNoMove_setMonsterType(thiss: number, mt: number): boolean
    function s__MonsterNoMove_toString(thiss: number): string
    function s__MonsterNoMove_temporarilyDisable(thiss: number, disablingTimer: timer): void
    function s__MonsterNoMove_temporarilyEnable(thiss: number, disablingTimer: timer): void
    function s__MonsterNoMove_setBaseColor(thiss: number, colorString: string): void
    function s__MonsterNoMove_setVertexColor(thiss: number, vcRed: number, vcGreen: number, vcBlue: number): void
    function s__MonsterNoMove_reinitColor(thiss: number): void
    function s__MonsterOrCaster_create(mobId: number): number
    function rf__s__MonsterOrCaster_getId(thiss: number): void
    function s__MonsterOrCaster_getId(thiss: number): number
    function s__MonsterOrCaster_killUnit(thiss: number): void
    function s__MonsterOrCaster_temporarilyDisable(thiss: number, disablingTimer: timer): void
    function s__MonsterOrCaster_temporarilyEnable(thiss: number, enablingTimer: timer): void
    function s__MonsterOrCaster_setBaseColor(thiss: number, colorString: string): void
    function s__MonsterOrCaster_setVertexColor(thiss: number, vcRed: number, vcGreen: number, vcBlue: number): void
    function s__MonsterOrCaster_reinitColor(thiss: number): void
    function rf__s__MonsterOrCaster_getUnit(thiss: number): void
    function s__MonsterOrCaster_getUnit(thiss: number): unit
    function s__MonsterOrCaster_copy(thiss: number): number
    function rf__s__MonsterOrCaster_getMonsterType(thiss: number): void
    function s__MonsterOrCaster_getMonsterType(thiss: number): number
    function MonsterSimplePatrol__CheckSimplePatrolMobsEnum(): void
    function MonsterSimplePatrol__CheckSimplePatrolMobs_Actions(): void
    function Init_MonsterSimplePatrol(): void
    function s__MonsterSimplePatrol_count(): number
    function s__MonsterSimplePatrol_getId(thiss: number): number
    function rf__s__MonsterSimplePatrol_setId(thiss: number, id: number): void
    function s__MonsterSimplePatrol_setId(thiss: number, id: number): number
    function s__MonsterSimplePatrol_removeUnit(thiss: number): void
    function s__MonsterSimplePatrol_killUnit(thiss: number): void
    function s__MonsterSimplePatrol_onDestroy(thiss: number): void
    function s__MonsterSimplePatrol_create(mt: number, x1: number, y1: number, x2: number, y2: number): number
    function s__MonsterSimplePatrol_createUnit(thiss: number): void
    function s__MonsterSimplePatrol_getLife(thiss: number): number
    function s__MonsterSimplePatrol_setLife(thiss: number, life: number): void
    function s__MonsterSimplePatrol_getMonsterType(thiss: number): number
    function rf__s__MonsterSimplePatrol_setMonsterType(thiss: number, mt: number): void
    function s__MonsterSimplePatrol_setMonsterType(thiss: number, mt: number): boolean
    function s__MonsterSimplePatrol_temporarilyDisable(thiss: number, disablingTimer: timer): void
    function s__MonsterSimplePatrol_temporarilyEnable(thiss: number, disablingTimer: timer): void
    function s__MonsterSimplePatrol_setBaseColor(thiss: number, colorString: string): void
    function s__MonsterSimplePatrol_setVertexColor(thiss: number, vcRed: number, vcGreen: number, vcBlue: number): void
    function s__MonsterSimplePatrol_reinitColor(thiss: number): void
    function s__MonsterSimplePatrol_toString(thiss: number): string
    function MonsterTeleport_move_Actions(): void
    function s__MonsterTeleport_count(): number
    function rf__s__MonsterTeleport_storeNewLoc(x: number, l__y: number): void
    function s__MonsterTeleport_storeNewLoc(x: number, l__y: number): boolean
    function s__MonsterTeleport_destroyLocs(): void
    function s__MonsterTeleport_getId(thiss: number): number
    function rf__s__MonsterTeleport_setId(thiss: number, id: number): void
    function s__MonsterTeleport_setId(thiss: number, id: number): number
    function s__MonsterTeleport_removeUnit(thiss: number): void
    function s__MonsterTeleport_killUnit(thiss: number): void
    function s__MonsterTeleport_onDestroy(thiss: number): void
    function rf__s__MonsterTeleport_create(mt: number, period: number, angle: number, mode: string): void
    function s__MonsterTeleport_create(mt: number, period: number, angle: number, mode: string): number
    function rf__s__MonsterTeleport_setPeriod(thiss: number, period: number): void
    function s__MonsterTeleport_setPeriod(thiss: number, period: number): boolean
    function s__MonsterTeleport_getPeriod(thiss: number): number
    function s__MonsterTeleport_createUnit(thiss: number): void
    function s__MonsterTeleport_nextMove(thiss: number): void
    function s__MonsterTeleport_getLife(thiss: number): number
    function s__MonsterTeleport_setLife(thiss: number, life: number): void
    function rf__s__MonsterTeleport_getX(thiss: number, id: number): void
    function s__MonsterTeleport_getX(thiss: number, id: number): number
    function rf__s__MonsterTeleport_getY(thiss: number, id: number): void
    function s__MonsterTeleport_getY(thiss: number, id: number): number
    function s__MonsterTeleport_addNewLocAt(thiss: number, id: number, x: number, l__y: number): void
    function rf__s__MonsterTeleport_addNewLoc(thiss: number, x: number, l__y: number): void
    function s__MonsterTeleport_addNewLoc(thiss: number, x: number, l__y: number): boolean
    function rf__s__MonsterTeleport_destroyLastLoc(thiss: number): void
    function s__MonsterTeleport_destroyLastLoc(thiss: number): boolean
    function s__MonsterTeleport_getMonsterType(thiss: number): number
    function rf__s__MonsterTeleport_setMonsterType(thiss: number, mt: number): void
    function s__MonsterTeleport_setMonsterType(thiss: number, mt: number): boolean
    function s__MonsterTeleport_temporarilyDisable(thiss: number, disablingTimer: timer): void
    function s__MonsterTeleport_temporarilyEnable(thiss: number, disablingTimer: timer): void
    function s__MonsterTeleport_setBaseColor(thiss: number, colorString: string): void
    function s__MonsterTeleport_setVertexColor(thiss: number, vcRed: number, vcGreen: number, vcBlue: number): void
    function s__MonsterTeleport_reinitColor(thiss: number): void
    function rf__s__MonsterTeleport_toString(thiss: number): void
    function s__MonsterTeleport_toString(thiss: number): string
    function InitMonsterTeleport(): void
    function s__Caster_isEnabled(thiss: number): boolean
    function s__Caster_getId(thiss: number): number
    function rf__s__Caster_setId(thiss: number, id: number): void
    function s__Caster_setId(thiss: number, id: number): number
    function s__Caster_getX(thiss: number): number
    function s__Caster_getY(thiss: number): number
    function s__Caster_getRange(thiss: number): number
    function s__Caster_getProjectileSpeed(thiss: number): number
    function s__Caster_getCasterUnit(thiss: number): unit
    function s__Caster_getProjectileMonsterType(thiss: number): number
    function s__Caster_getLoadTime(thiss: number): number
    function s__Caster_getCasterType(thiss: number): number
    function s__Caster_getAnimation(thiss: number): string
    function s__Caster_create(casterType: number, x: number, l__y: number, angle: number): number
    function s__Caster_enable(thiss: number): void
    function s__Caster_disable(thiss: number): void
    function s__Caster_killUnit(thiss: number): void
    function s__Caster_refresh(thiss: number): void
    function s__Caster_onDestroy(thiss: number): void
    function s__Caster_deallocate(thiss: number): void
    function s__Caster_escaperOutOfRangeOrDead(thiss: number, escaper: number): void
    function s__Caster_temporarilyDisable(thiss: number, disablingTimer: timer): void
    function s__Caster_temporarilyEnable(thiss: number, disablingTimer: timer): void
    function s__Caster_setBaseColor(thiss: number, colorString: string): void
    function s__Caster_setVertexColor(thiss: number, vcRed: number, vcGreen: number, vcBlue: number): void
    function s__Caster_reinitColor(thiss: number): void
    function s__Caster_toString(thiss: number): string
    function InitCaster(): void
    function s__ClearMobArray_create(): number
    function s__ClearMobArray_getFirstEmpty(thiss: number): number
    function rf__s__ClearMobArray_get(thiss: number, arrayId: number): void
    function s__ClearMobArray_get(thiss: number, arrayId: number): number
    function s__ClearMobArray_getLastInstanceId(thiss: number): number
    function rf__s__ClearMobArray_new(
        thiss: number,
        triggerMobId: number,
        disableDuration: number,
        initialize: boolean
    ): void
    function s__ClearMobArray_new(
        thiss: number,
        triggerMobId: number,
        disableDuration: number,
        initialize: boolean
    ): number
    function s__ClearMobArray_count(thiss: number): number
    function s__ClearMobArray_onDestroy(thiss: number): void
    function s__ClearMobArray_deallocate(thiss: number): void
    function s__ClearMobArray_setClearMobNull(thiss: number, clearMobArrayId: number): void
    function rf__s__ClearMobArray_clearClearMob(thiss: number, clearMobId: number): void
    function s__ClearMobArray_clearClearMob(thiss: number, clearMobId: number): boolean
    function rf__s__ClearMobArray_getClearMobNear(thiss: number, x: number, l__y: number): void
    function s__ClearMobArray_getClearMobNear(thiss: number, x: number, l__y: number): number
    function s__ClearMobArray_initializeClearMobs(thiss: number): void
    function s__ClearMobArray_closeClearMobs(thiss: number): void
    function ExecuteCommandSingle(escaper: number, cmd: string): void
    function ExecuteCommand(escaper: number, cmd: string): void
    function Trig_Command_execution_Actions(): void
    function Init_Command_execution(): void
    function rf__s__MakeClearMob_create(maker: unit, disableDuration: number): void
    function s__MakeClearMob_create(maker: unit, disableDuration: number): number
    function s__MakeClearMob_onDestroy(thiss: number): void
    function s__MakeClearMob_clickMade(thiss: number, monsterOrCasterId: number): void
    function rf__s__MakeClearMob_cancelLastAction(thiss: number): void
    function s__MakeClearMob_cancelLastAction(thiss: number): boolean
    function rf__s__MakeClearMob_redoLastAction(thiss: number): void
    function s__MakeClearMob_redoLastAction(thiss: number): boolean
    function rf__s__MakeDeleteClearMob_create(maker: unit): void
    function s__MakeDeleteClearMob_create(maker: unit): number
    function s__MakeDeleteClearMob_onDestroy(thiss: number): void
    function s__MakeDeleteClearMob_clickMade(thiss: number, monsterOrCasterId: number): void
    function s__MakeDeleteClearMob_cancelLastAction(thiss: number): boolean
    function s__MakeDeleteClearMob_redoLastAction(thiss: number): boolean
    function s__MonsterMultiplePatrolsArray_create(): number
    function s__MonsterMultiplePatrolsArray_getFirstEmpty(thiss: number): number
    function rf__s__MonsterMultiplePatrolsArray_get(thiss: number, arrayId: number): void
    function s__MonsterMultiplePatrolsArray_get(thiss: number, arrayId: number): number
    function s__MonsterMultiplePatrolsArray_getLastInstanceId(thiss: number): number
    function rf__s__MonsterMultiplePatrolsArray_new(thiss: number, mt: number, mode: string, createUnit: boolean): void
    function s__MonsterMultiplePatrolsArray_new(thiss: number, mt: number, mode: string, createUnit: boolean): number
    function s__MonsterMultiplePatrolsArray_count(thiss: number): number
    function s__MonsterMultiplePatrolsArray_onDestroy(thiss: number): void
    function s__MonsterMultiplePatrolsArray_deallocate(thiss: number): void
    function s__MonsterMultiplePatrolsArray_setMonsterNull(thiss: number, monsterArrayId: number): void
    function rf__s__MonsterMultiplePatrolsArray_clearMonster(thiss: number, monsterId: number): void
    function s__MonsterMultiplePatrolsArray_clearMonster(thiss: number, monsterId: number): boolean
    function rf__s__MonsterMultiplePatrolsArray_getMonsterNear(thiss: number, x: number, l__y: number): void
    function s__MonsterMultiplePatrolsArray_getMonsterNear(thiss: number, x: number, l__y: number): number
    function s__MonsterMultiplePatrolsArray_createMonsters(thiss: number): void
    function s__MonsterMultiplePatrolsArray_removeMonsters(thiss: number): void
    function s__MonsterMultiplePatrolsArray_recreateMonstersOfType(thiss: number, mt: number): void
    function s__MonsterMultiplePatrolsArray_removeMonstersOfType(thiss: number, mt: number): void
    function s__MonsterNoMoveArray_create(): number
    function s__MonsterNoMoveArray_getFirstEmpty(thiss: number): number
    function rf__s__MonsterNoMoveArray_get(thiss: number, arrayId: number): void
    function s__MonsterNoMoveArray_get(thiss: number, arrayId: number): number
    function s__MonsterNoMoveArray_getLastInstanceId(thiss: number): number
    function rf__s__MonsterNoMoveArray_new(
        thiss: number,
        mt: number,
        x: number,
        l__y: number,
        angle: number,
        createUnit: boolean
    ): void
    function s__MonsterNoMoveArray_new(
        thiss: number,
        mt: number,
        x: number,
        l__y: number,
        angle: number,
        createUnit: boolean
    ): number
    function s__MonsterNoMoveArray_count(thiss: number): number
    function s__MonsterNoMoveArray_onDestroy(thiss: number): void
    function s__MonsterNoMoveArray_deallocate(thiss: number): void
    function s__MonsterNoMoveArray_setMonsterNull(thiss: number, monsterArrayId: number): void
    function rf__s__MonsterNoMoveArray_clearMonster(thiss: number, monsterId: number): void
    function s__MonsterNoMoveArray_clearMonster(thiss: number, monsterId: number): boolean
    function rf__s__MonsterNoMoveArray_getMonsterNear(thiss: number, x: number, l__y: number): void
    function s__MonsterNoMoveArray_getMonsterNear(thiss: number, x: number, l__y: number): number
    function s__MonsterNoMoveArray_createMonsters(thiss: number): void
    function s__MonsterNoMoveArray_removeMonsters(thiss: number): void
    function s__MonsterNoMoveArray_recreateMonstersOfType(thiss: number, mt: number): void
    function s__MonsterNoMoveArray_removeMonstersOfType(thiss: number, mt: number): void
    function s__MonsterSimplePatrolArray_create(): number
    function s__MonsterSimplePatrolArray_getFirstEmpty(thiss: number): number
    function rf__s__MonsterSimplePatrolArray_get(thiss: number, arrayId: number): void
    function s__MonsterSimplePatrolArray_get(thiss: number, arrayId: number): number
    function s__MonsterSimplePatrolArray_getLastInstanceId(thiss: number): number
    function rf__s__MonsterSimplePatrolArray_new(
        thiss: number,
        mt: number,
        x1: number,
        y1: number,
        x2: number,
        y2: number,
        createUnit: boolean
    ): void
    function s__MonsterSimplePatrolArray_new(
        thiss: number,
        mt: number,
        x1: number,
        y1: number,
        x2: number,
        y2: number,
        createUnit: boolean
    ): number
    function s__MonsterSimplePatrolArray_count(thiss: number): number
    function s__MonsterSimplePatrolArray_onDestroy(thiss: number): void
    function s__MonsterSimplePatrolArray_deallocate(thiss: number): void
    function s__MonsterSimplePatrolArray_setMonsterNull(thiss: number, monsterArrayId: number): void
    function rf__s__MonsterSimplePatrolArray_clearMonster(thiss: number, monsterId: number): void
    function s__MonsterSimplePatrolArray_clearMonster(thiss: number, monsterId: number): boolean
    function rf__s__MonsterSimplePatrolArray_getMonsterNear(thiss: number, x: number, l__y: number): void
    function s__MonsterSimplePatrolArray_getMonsterNear(thiss: number, x: number, l__y: number): number
    function s__MonsterSimplePatrolArray_createMonsters(thiss: number): void
    function s__MonsterSimplePatrolArray_removeMonsters(thiss: number): void
    function s__MonsterSimplePatrolArray_recreateMonstersOfType(thiss: number, mt: number): void
    function s__MonsterSimplePatrolArray_removeMonstersOfType(thiss: number, mt: number): void
    function s__MonsterTeleportArray_create(): number
    function s__MonsterTeleportArray_getFirstEmpty(thiss: number): number
    function rf__s__MonsterTeleportArray_get(thiss: number, arrayId: number): void
    function s__MonsterTeleportArray_get(thiss: number, arrayId: number): number
    function s__MonsterTeleportArray_getLastInstanceId(thiss: number): number
    function rf__s__MonsterTeleportArray_new(
        thiss: number,
        mt: number,
        period: number,
        angle: number,
        mode: string,
        createUnit: boolean
    ): void
    function s__MonsterTeleportArray_new(
        thiss: number,
        mt: number,
        period: number,
        angle: number,
        mode: string,
        createUnit: boolean
    ): number
    function s__MonsterTeleportArray_count(thiss: number): number
    function s__MonsterTeleportArray_onDestroy(thiss: number): void
    function s__MonsterTeleportArray_deallocate(thiss: number): void
    function s__MonsterTeleportArray_setMonsterNull(thiss: number, monsterArrayId: number): void
    function rf__s__MonsterTeleportArray_clearMonster(thiss: number, monsterId: number): void
    function s__MonsterTeleportArray_clearMonster(thiss: number, monsterId: number): boolean
    function rf__s__MonsterTeleportArray_getMonsterNear(thiss: number, x: number, l__y: number): void
    function s__MonsterTeleportArray_getMonsterNear(thiss: number, x: number, l__y: number): number
    function s__MonsterTeleportArray_createMonsters(thiss: number): void
    function s__MonsterTeleportArray_removeMonsters(thiss: number): void
    function s__MonsterTeleportArray_recreateMonstersOfType(thiss: number, mt: number): void
    function s__MonsterTeleportArray_removeMonstersOfType(thiss: number, mt: number): void
    function s__CasterArray_create(): number
    function s__CasterArray_getFirstEmpty(thiss: number): number
    function rf__s__CasterArray_get(thiss: number, arrayId: number): void
    function s__CasterArray_get(thiss: number, arrayId: number): number
    function s__CasterArray_getLastInstanceId(thiss: number): number
    function rf__s__CasterArray_new(
        thiss: number,
        casterType: number,
        x: number,
        l__y: number,
        angle: number,
        enable: boolean
    ): void
    function s__CasterArray_new(
        thiss: number,
        casterType: number,
        x: number,
        l__y: number,
        angle: number,
        enable: boolean
    ): number
    function s__CasterArray_count(thiss: number): number
    function s__CasterArray_onDestroy(thiss: number): void
    function s__CasterArray_deallocate(thiss: number): void
    function s__CasterArray_setCasterNull(thiss: number, casterArrayId: number): void
    function rf__s__CasterArray_clearCaster(thiss: number, casterId: number): void
    function s__CasterArray_clearCaster(thiss: number, casterId: number): boolean
    function rf__s__CasterArray_getCasterNear(thiss: number, x: number, l__y: number): void
    function s__CasterArray_getCasterNear(thiss: number, x: number, l__y: number): number
    function s__CasterArray_createCasters(thiss: number): void
    function s__CasterArray_removeCasters(thiss: number): void
    function s__CasterArray_refreshCastersOfType(thiss: number, casterType: number): void
    function s__CasterArray_removeCastersOfType(thiss: number, casterType: number): void
    function s__EscaperSavedCommands_create(): number
    function s__EscaperSavedCommands_new(thiss: number, escaper: number, commandName: string, command: string): void
    function rf__s__EscaperSavedCommands_execute(thiss: number, escaper: number, commandName: string): void
    function s__EscaperSavedCommands_execute(thiss: number, escaper: number, commandName: string): boolean
    function Init_EscaperSavedCommands(): void
    function InitGlobals(): void
    function InitSounds(): void
    function CreateRegions(): void
    function InitTrig_Init_terrain_limit_variables(): void
    function Trig_init_colorCodes_Actions(): void
    function InitTrig_Init_colorCodes(): void
    function Trig_right_click_on_widget_Conditions(): boolean
    function Trig_right_click_on_widget_Actions(): void
    function InitTrig_Right_click_on_widget(): void
    function Trig_meteor_being_used_Actions(): void
    function InitTrig_Meteor_being_used(): void
    function rf__Trig_Stop_using_normal_meteor_Conditions(): void
    function Trig_Stop_using_normal_meteor_Conditions(): boolean
    function Trig_Stop_using_normal_meteor_Actions(): void
    function InitTrig_Stop_using_normal_meteor(): void
    function Trig_Effect_meteor_on_pick_up_Conditions(): boolean
    function Trig_Effect_meteor_on_pick_up_Actions(): void
    function InitTrig_Effect_meteor_on_pick_up(): void
    function Trig_Effect_meteor_on_pick_down_Actions(): void
    function InitTrig_Effect_meteor_on_pick_down(): void
    function Trig_teleport_Conditions(): boolean
    function Trig_teleport_Actions(): void
    function InitTrig_Teleport(): void
    function Trig_autorevive_Conditions(): boolean
    function Trig_autorevive_Actions(): void
    function InitTrig_Autorevive(): void
    function Trig_init_lives_Actions(): void
    function InitTrig_Init_lives(): void
    function InitTrig_Init_escapers(): void
    function InitTrig_Init_struct_levels(): void
    function Trig_Forces_ally_Actions(): void
    function InitTrig_Forces_ally(): void
    function Trig_Camera_Actions(): void
    function InitTrig_Camera(): void
    function Trig_No_selection_circle_Actions(): void
    function InitTrig_No_selection_circle(): void
    function Trig_Allways_day_Actions(): void
    function InitTrig_Allways_day(): void
    function Trig_Start_sound_Actions(): void
    function InitTrig_Start_sound(): void
    function Trig_coop_init_sounds_Actions(): void
    function InitTrig_coop_init_sounds(): void
    function CreationDialogue_Actions(): void
    function InitTrig_creation_dialogue(): void
    function FermerDialogueAutomatiquement(): void
    function Trig_apparition_dialogue_Actions(): void
    function InitTrig_apparition_dialogue_et_fermeture_automatique(): void
    function TrigAppuiBoutonDialogue_Actions(): void
    function InitTrig_appui_sur_bouton_dialogue(): void
    function Trig_using_shortcut_Conditions(): boolean
    function Trig_using_shortcut_Actions(): void
    function InitTrig_Using_shortcut(): void
    function Trig_Camera_reset_Actions(): void
    function InitTrig_Camera_reset(): void
    function Trig_afk_mode_ordre_recu_Actions(): void
    function InitTrig_Afk_mode_ordre_recu(): void
    function Trig_a_player_leaves_Actions(): void
    function InitTrig_A_player_leaves(): void
    function Trig_invisUnit_dies_Actions(): void
    function InitTrig_InvisUnit_is_getting_damage(): void
    function Trig_a_hero_dies_Conditions(): boolean
    function Trig_a_hero_dies_Actions(): void
    function InitTrig_A_hero_dies_check_if_all_dead_and_sounds(): void
    function Trig_Lose_a_life_and_res_Actions(): void
    function InitTrig_Lose_a_life_and_res(): void
    function rf__Trig_Sound_monster_dies_Conditions(): void
    function Trig_Sound_monster_dies_Conditions(): boolean
    function Trig_Sound_monster_dies_Actions(): void
    function InitTrig_Sound_monster_dies(): void
    function Trig_Select_hero_Actions(): void
    function InitTrig_Select_hero(): void
    function Trig_Unselect_hero_Actions(): void
    function InitTrig_Unselect_hero(): void
    function Trig_Giving_making_rights_Actions(): void
    function InitTrig_Giving_making_rights(): void
    function Trig_Welcome_message_Actions(): void
    function InitTrig_Welcome_message(): void
    function InitTrig_Commands_2(): void
    function InitTrig_Colors(): void
    function InitTrig_Effects(): void
    function InitTrig_Red_commands(): void
    function InitTrig_Map_description(): void
    function InitTrig_Contact(): void
    function InitTrig_Command_shortcuts(): void
    function Trig_adding_quests_Actions(): void
    function InitTrig_Adding_quests(): void
    function Trig_Antisave_Actions(): void
    function InitTrig_Antisave(): void
    function Trig_antisave_warning_Actions(): void
    function InitTrig_Antisave_warning(): void
    function InitTrig_Init_terrain_types(): void
    function InitTrig_Init_monster_and_caster_types(): void
    function InitCustomTriggers(): void
    function RunInitializationTriggers(): void
    function InitCustomPlayerSlots(): void
    function InitCustomTeams(): void
    function InitAllyPriorities(): void
    function main(): void
    function config(): void
    function sa__EscaperSavedCommands_new(): boolean
    function rf__sa__EscaperSavedCommands_execute(): void
    function sa__EscaperSavedCommands_execute(): boolean
    function sa__CasterArray_create(): boolean
    function rf__sa__CasterArray_get(): void
    function sa__CasterArray_get(): boolean
    function sa__CasterArray_getLastInstanceId(): boolean
    function rf__sa__CasterArray_new(): void
    function sa__CasterArray_new(): boolean
    function sa__CasterArray_count(): boolean
    function sa__CasterArray_onDestroy(): boolean
    function sa__CasterArray_setCasterNull(): boolean
    function rf__sa__CasterArray_getCasterNear(): void
    function sa__CasterArray_getCasterNear(): boolean
    function sa__CasterArray_createCasters(): boolean
    function sa__CasterArray_removeCasters(): boolean
    function sa__CasterArray_refreshCastersOfType(): boolean
    function sa__CasterArray_removeCastersOfType(): boolean
    function sa__MonsterTeleportArray_create(): boolean
    function rf__sa__MonsterTeleportArray_get(): void
    function sa__MonsterTeleportArray_get(): boolean
    function sa__MonsterTeleportArray_getLastInstanceId(): boolean
    function rf__sa__MonsterTeleportArray_new(): void
    function sa__MonsterTeleportArray_new(): boolean
    function sa__MonsterTeleportArray_count(): boolean
    function sa__MonsterTeleportArray_onDestroy(): boolean
    function sa__MonsterTeleportArray_setMonsterNull(): boolean
    function rf__sa__MonsterTeleportArray_getMonsterNear(): void
    function sa__MonsterTeleportArray_getMonsterNear(): boolean
    function sa__MonsterTeleportArray_createMonsters(): boolean
    function sa__MonsterTeleportArray_removeMonsters(): boolean
    function sa__MonsterTeleportArray_recreateMonstersOfType(): boolean
    function sa__MonsterTeleportArray_removeMonstersOfType(): boolean
    function sa__MonsterSimplePatrolArray_create(): boolean
    function rf__sa__MonsterSimplePatrolArray_get(): void
    function sa__MonsterSimplePatrolArray_get(): boolean
    function sa__MonsterSimplePatrolArray_getLastInstanceId(): boolean
    function rf__sa__MonsterSimplePatrolArray_new(): void
    function sa__MonsterSimplePatrolArray_new(): boolean
    function sa__MonsterSimplePatrolArray_count(): boolean
    function sa__MonsterSimplePatrolArray_onDestroy(): boolean
    function sa__MonsterSimplePatrolArray_setMonsterNull(): boolean
    function rf__sa__MonsterSimplePatrolArray_getMonsterNear(): void
    function sa__MonsterSimplePatrolArray_getMonsterNear(): boolean
    function sa__MonsterSimplePatrolArray_createMonsters(): boolean
    function sa__MonsterSimplePatrolArray_removeMonsters(): boolean
    function sa__MonsterSimplePatrolArray_recreateMonstersOfType(): boolean
    function sa__MonsterSimplePatrolArray_removeMonstersOfType(): boolean
    function sa__MonsterNoMoveArray_create(): boolean
    function rf__sa__MonsterNoMoveArray_get(): void
    function sa__MonsterNoMoveArray_get(): boolean
    function sa__MonsterNoMoveArray_getLastInstanceId(): boolean
    function rf__sa__MonsterNoMoveArray_new(): void
    function sa__MonsterNoMoveArray_new(): boolean
    function sa__MonsterNoMoveArray_count(): boolean
    function sa__MonsterNoMoveArray_onDestroy(): boolean
    function sa__MonsterNoMoveArray_setMonsterNull(): boolean
    function rf__sa__MonsterNoMoveArray_getMonsterNear(): void
    function sa__MonsterNoMoveArray_getMonsterNear(): boolean
    function sa__MonsterNoMoveArray_createMonsters(): boolean
    function sa__MonsterNoMoveArray_removeMonsters(): boolean
    function sa__MonsterNoMoveArray_recreateMonstersOfType(): boolean
    function sa__MonsterNoMoveArray_removeMonstersOfType(): boolean
    function sa__MonsterMultiplePatrolsArray_create(): boolean
    function rf__sa__MonsterMultiplePatrolsArray_get(): void
    function sa__MonsterMultiplePatrolsArray_get(): boolean
    function sa__MonsterMultiplePatrolsArray_getLastInstanceId(): boolean
    function rf__sa__MonsterMultiplePatrolsArray_new(): void
    function sa__MonsterMultiplePatrolsArray_new(): boolean
    function sa__MonsterMultiplePatrolsArray_count(): boolean
    function sa__MonsterMultiplePatrolsArray_onDestroy(): boolean
    function sa__MonsterMultiplePatrolsArray_setMonsterNull(): boolean
    function rf__sa__MonsterMultiplePatrolsArray_getMonsterNear(): void
    function sa__MonsterMultiplePatrolsArray_getMonsterNear(): boolean
    function sa__MonsterMultiplePatrolsArray_createMonsters(): boolean
    function sa__MonsterMultiplePatrolsArray_removeMonsters(): boolean
    function sa__MonsterMultiplePatrolsArray_recreateMonstersOfType(): boolean
    function sa__MonsterMultiplePatrolsArray_removeMonstersOfType(): boolean
    function sa__Meteor_onDestroy(): boolean
    function sa__MonsterOrCasterStack_onDestroy(): boolean
    function sa__ClearMobArray_create(): boolean
    function sa__ClearMobArray_onDestroy(): boolean
    function sa__ClearMobArray_setClearMobNull(): boolean
    function sa__ClearMobArray_initializeClearMobs(): boolean
    function sa__Caster_isEnabled(): boolean
    function sa__Caster_getId(): boolean
    function sa__Caster_getX(): boolean
    function sa__Caster_getY(): boolean
    function sa__Caster_getRange(): boolean
    function sa__Caster_getProjectileSpeed(): boolean
    function sa__Caster_getCasterUnit(): boolean
    function sa__Caster_getProjectileMonsterType(): boolean
    function sa__Caster_getLoadTime(): boolean
    function sa__Caster_getCasterType(): boolean
    function sa__Caster_getAnimation(): boolean
    function sa__Caster_enable(): boolean
    function sa__Caster_disable(): boolean
    function sa__Caster_killUnit(): boolean
    function sa__Caster_onDestroy(): boolean
    function sa__Caster_escaperOutOfRangeOrDead(): boolean
    function sa__Caster_temporarilyDisable(): boolean
    function sa__Caster_temporarilyEnable(): boolean
    function rf__sa__Caster_setBaseColor(): void
    function sa__Caster_setBaseColor(): boolean
    function sa__Caster_setVertexColor(): boolean
    function sa__Caster_reinitColor(): boolean
    function sa__Caster_toString(): boolean
    function sa__Stack_onDestroy(): boolean
    function sa__MonsterOrCaster_create(): boolean
    function rf__sa__MonsterOrCaster_getId(): void
    function sa__MonsterOrCaster_getId(): boolean
    function sa__MonsterOrCaster_killUnit(): boolean
    function sa__MonsterOrCaster_temporarilyDisable(): boolean
    function sa__MonsterOrCaster_temporarilyEnable(): boolean
    function sa__MonsterOrCaster_setBaseColor(): boolean
    function sa__MonsterOrCaster_setVertexColor(): boolean
    function sa__MonsterOrCaster_reinitColor(): boolean
    function rf__sa__MonsterOrCaster_getUnit(): void
    function sa__MonsterOrCaster_getUnit(): boolean
    function sa__MonsterOrCaster_copy(): boolean
    function rf__sa__MonsterOrCaster_getMonsterType(): void
    function sa__MonsterOrCaster_getMonsterType(): boolean
    function sa__Trigger_onDestroy(): boolean
    function sa__TriggerArray_onDestroy(): boolean
    function sa__VisibilityModifier_onDestroy(): boolean
    function sa__CasterType_onDestroy(): boolean
    function sa__MakeCasterAction_onDestroy(): boolean
    function rf__sa__MakeCasterAction_cancel(): void
    function sa__MakeCasterAction_cancel(): boolean
    function rf__sa__MakeCasterAction_redo(): void
    function sa__MakeCasterAction_redo(): boolean
    function sa__MakeDeleteCastersAction_onDestroy(): boolean
    function rf__sa__MakeDeleteCastersAction_cancel(): void
    function sa__MakeDeleteCastersAction_cancel(): boolean
    function rf__sa__MakeDeleteCastersAction_redo(): void
    function sa__MakeDeleteCastersAction_redo(): boolean
    function sa__MakeDeleteMeteorsAction_onDestroy(): boolean
    function rf__sa__MakeDeleteMeteorsAction_cancel(): void
    function sa__MakeDeleteMeteorsAction_cancel(): boolean
    function rf__sa__MakeDeleteMeteorsAction_redo(): void
    function sa__MakeDeleteMeteorsAction_redo(): boolean
    function sa__MakeDeleteMonstersAction_onDestroy(): boolean
    function rf__sa__MakeDeleteMonstersAction_cancel(): void
    function sa__MakeDeleteMonstersAction_cancel(): boolean
    function rf__sa__MakeDeleteMonstersAction_redo(): void
    function sa__MakeDeleteMonstersAction_redo(): boolean
    function sa__MakeLastActions_onDestroy(): boolean
    function sa__MakeMeteorAction_getLevel(): boolean
    function sa__MakeMeteorAction_onDestroy(): boolean
    function rf__sa__MakeMeteorAction_cancel(): void
    function sa__MakeMeteorAction_cancel(): boolean
    function rf__sa__MakeMeteorAction_redo(): void
    function sa__MakeMeteorAction_redo(): boolean
    function sa__MakeMonsterAction_getLevel(): boolean
    function sa__MakeMonsterAction_onDestroy(): boolean
    function rf__sa__MakeMonsterAction_cancel(): void
    function sa__MakeMonsterAction_cancel(): boolean
    function rf__sa__MakeMonsterAction_redo(): void
    function sa__MakeMonsterAction_redo(): boolean
    function sa__MakeTerrainHeightAction_apply(): boolean
    function rf__sa__MakeTerrainHeightAction_cancel(): void
    function sa__MakeTerrainHeightAction_cancel(): boolean
    function rf__sa__MakeTerrainHeightAction_redo(): void
    function sa__MakeTerrainHeightAction_redo(): boolean
    function sa__MakeVisibilityModifierAction_getLevel(): boolean
    function sa__MakeVisibilityModifierAction_onDestroy(): boolean
    function rf__sa__MakeVisibilityModifierAction_cancel(): void
    function sa__MakeVisibilityModifierAction_cancel(): boolean
    function rf__sa__MakeVisibilityModifierAction_redo(): void
    function sa__MakeVisibilityModifierAction_redo(): boolean
    function sa__MeteorArray_setMeteorNull(): boolean
    function sa__MeteorArray_onDestroy(): boolean
    function sa__MonsterType_onDestroy(): boolean
    function sa__SoundUtils__soundrecycler_onDestroy(): boolean
    function sa__StringArrayForCache_create(): boolean
    function sa__StringArrayForCache_push(): boolean
    function sa__StringArrayForCache_writeInCache(): boolean
    function sa__VisibilityModifierArray_onDestroy(): boolean
    function sa__VisibilityModifierArray_count(): boolean
    function rf__sa__VisibilityModifierArray_get(): void
    function sa__VisibilityModifierArray_get(): boolean
    function sa__VisibilityModifierArray_getLastInstanceId(): boolean
    function sa__VisibilityModifierArray_setNull(): boolean
    function rf__sa__LevelArray_goToLevel(): void
    function sa__LevelArray_goToLevel(): boolean
    function rf__sa__LevelArray_goToNextLevel(): void
    function sa__LevelArray_goToNextLevel(): boolean
    function sa__LevelArray_restartTheGame(): boolean
    function rf__sa__LevelArray_new(): void
    function sa__LevelArray_new(): boolean
    function rf__sa__LevelArray_destroyLastLevel(): void
    function sa__LevelArray_destroyLastLevel(): boolean
    function sa__LevelArray_count(): boolean
    function sa__LevelArray_getCurrentLevel(): boolean
    function rf__sa__LevelArray_get(): void
    function sa__LevelArray_get(): boolean
    function rf__sa__LevelArray_getLevelFromMonsterSpawnArray(): void
    function sa__LevelArray_getLevelFromMonsterSpawnArray(): boolean
    function rf__sa__LevelArray_getLevelFromMeteorArray(): void
    function sa__LevelArray_getLevelFromMeteorArray(): boolean
    function rf__sa__LevelArray_getLevelFromVisibilityModifierArray(): void
    function sa__LevelArray_getLevelFromVisibilityModifierArray(): boolean
    function sa__LevelArray_removeMonstersOfType(): boolean
    function sa__LevelArray_removeCastersOfType(): boolean
    function sa__LevelArray_getLastLevelId(): boolean
    function sa__LevelArray_getNbMonsters(): boolean
    function sa__ClearMob_getTriggerMob(): boolean
    function sa__ClearMob_getBlockMobs(): boolean
    function sa__ClearMob_initialize(): boolean
    function sa__ClearMob_onDestroy(): boolean
    function sa__ClearMob_isBeingActivated(): boolean
    function rf__sa__TerrainTypeArray_get(): void
    function sa__TerrainTypeArray_get(): boolean
    function rf__sa__TerrainTypeArray_getTerrainType(): void
    function sa__TerrainTypeArray_getTerrainType(): boolean
    function rf__sa__TerrainTypeArray_isTerrainTypeIdAlreadyUsed(): void
    function sa__TerrainTypeArray_isTerrainTypeIdAlreadyUsed(): boolean
    function sa__TerrainTypeArray_isLabelAlreadyUsed(): boolean
    function rf__sa__TerrainTypeArray_newWalk(): void
    function sa__TerrainTypeArray_newWalk(): boolean
    function rf__sa__TerrainTypeArray_newDeath(): void
    function sa__TerrainTypeArray_newDeath(): boolean
    function rf__sa__TerrainTypeArray_newSlide(): void
    function sa__TerrainTypeArray_newSlide(): boolean
    function sa__TerrainTypeArray_getWalk(): boolean
    function sa__TerrainTypeArray_getDeath(): boolean
    function sa__TerrainTypeArray_getSlide(): boolean
    function sa__TerrainTypeArray_displayForPlayer(): boolean
    function sa__TerrainTypeArray_saveInCache(): boolean
    function sa__TerrainTypeArray_count(): boolean
    function sa__TerrainTypeArray_getMainTileset(): boolean
    function rf__sa__Level_activate(): void
    function sa__Level_activate(): boolean
    function sa__Level_getStart(): boolean
    function sa__Level_getStartRandomX(): boolean
    function sa__Level_getStartRandomY(): boolean
    function sa__Level_newStart(): boolean
    function sa__Level_newEnd(): boolean
    function sa__Level_getEnd(): boolean
    function sa__Level_getNbMonsters(): boolean
    function sa__Level_onDestroy(): boolean
    function sa__Level_recreateMonstersOfType(): boolean
    function sa__Level_refreshCastersOfType(): boolean
    function rf__sa__Level_getId(): void
    function sa__Level_getId(): boolean
    function rf__sa__Level_setNbLivesEarned(): void
    function sa__Level_setNbLivesEarned(): boolean
    function sa__Level_getNbLives(): boolean
    function sa__Level_newVisibilityModifier(): boolean
    function sa__Level_newVisibilityModifierFromExisting(): boolean
    function sa__Level_removeVisibilities(): boolean
    function sa__Level_activateVisibilities(): boolean
    function sa__Level_setStartMessage(): boolean
    function sa__Level_getStartMessage(): boolean
    function sa__Lives_getLeaderboard(): boolean
    function sa__Lives_onDestroy(): boolean
    function sa__EscaperArray_get(): boolean
    function sa__EscaperArray_nullify(): boolean
    function sa__Escaper_onDestroy(): boolean
    function rf__sa__Escaper_enableSlide(): void
    function sa__Escaper_enableSlide(): boolean
    function rf__sa__Escaper_enableCheckTerrain(): void
    function sa__Escaper_enableCheckTerrain(): boolean
    function sa__Escaper_isSliding(): boolean
    function sa__Escaper_doesCheckTerrain(): boolean
    function sa__Escaper_moveHero(): boolean
    function sa__Escaper_moveInvisUnit(): boolean
    function sa__Escaper_getHero(): boolean
    function sa__Escaper_isAlive(): boolean
    function rf__sa__Escaper_kill(): void
    function sa__Escaper_kill(): boolean
    function rf__sa__Escaper_pause(): void
    function sa__Escaper_pause(): boolean
    function sa__Escaper_reverse(): boolean
    function sa__Escaper_setIsHeroSelectedForPlayer(): boolean
    function sa__Escaper_destroyTerrainKillEffect(): boolean
    function sa__Escaper_getLastTerrainType(): boolean
    function sa__Escaper_setLastTerrainType(): boolean
    function sa__Escaper_setSlideSpeed(): boolean
    function sa__Escaper_setWalkSpeed(): boolean
    function sa__Escaper_getSlideSpeed(): boolean
    function sa__Escaper_getRealSlideSpeed(): boolean
    function sa__Escaper_getWalkSpeed(): boolean
    function sa__Escaper_isAbsoluteSlideSpeed(): boolean
    function sa__Escaper_isAbsoluteWalkSpeed(): boolean
    function sa__Escaper_isGodModeOn(): boolean
    function rf__sa__Escaper_setBaseColorDisco(): void
    function sa__Escaper_setBaseColorDisco(): boolean
    function sa__Escaper_getBaseColor(): boolean
    function rf__sa__Escaper_setVcRed(): void
    function sa__Escaper_setVcRed(): boolean
    function rf__sa__Escaper_setVcGreen(): void
    function sa__Escaper_setVcGreen(): boolean
    function rf__sa__Escaper_setVcBlue(): void
    function sa__Escaper_setVcBlue(): boolean
    function rf__sa__Escaper_setVcTransparency(): void
    function sa__Escaper_setVcTransparency(): boolean
    function sa__Escaper_getVcRed(): boolean
    function sa__Escaper_getVcGreen(): boolean
    function sa__Escaper_getVcBlue(): boolean
    function sa__Escaper_getVcTransparency(): boolean
    function sa__Escaper_getPlayer(): boolean
    function rf__sa__Escaper_getMakingLevel(): void
    function sa__Escaper_getMakingLevel(): boolean
    function rf__sa__Escaper_destroyMake(): void
    function sa__Escaper_destroyMake(): boolean
    function sa__Escaper_destroyAllSavedActions(): boolean
    function sa__Escaper_getLastZ(): boolean
    function sa__Escaper_setLastZ(): boolean
    function sa__Escaper_getOldDiffZ(): boolean
    function sa__Escaper_setOldDiffZ(): boolean
    function sa__Escaper_getSpeedZ(): boolean
    function sa__Escaper_setSpeedZ(): boolean
    function sa__Escaper_setCoopInvul(): boolean
    function sa__Escaper_refreshCerclePosition(): boolean
    function sa__KillingTimers_onDestroy(): boolean
    function rf__sa__MonsterSpawnArray_get(): void
    function sa__MonsterSpawnArray_get(): boolean
    function sa__MonsterSpawnArray_getLastInstanceId(): boolean
    function sa__MonsterSpawnArray_count(): boolean
    function sa__MonsterSpawnArray_onDestroy(): boolean
    function sa__MonsterSpawnArray_setMonsterSpawnNull(): boolean
    function sa__EscaperEffectArray_onDestroy(): boolean
    function sa__TerrainType_getTerrainTypeId(): boolean
    function sa__TerrainType_getKind(): boolean
    function sa__TerrainType_onDestroy(): boolean
    function sa__MonsterSpawn_onDestroy(): boolean
    function sa__MonsterSpawn_startMobMovement(): boolean
    function sa__MonsterSpawn_createMob(): boolean
    function sa__MonsterSpawn_toString(): boolean
    function sa__MakeTerrainVerticalSymmetryAction_applySymmetry(): boolean
    function rf__sa__MakeTerrainVerticalSymmetryAction_cancel(): void
    function sa__MakeTerrainVerticalSymmetryAction_cancel(): boolean
    function rf__sa__MakeTerrainVerticalSymmetryAction_redo(): void
    function sa__MakeTerrainVerticalSymmetryAction_redo(): boolean
    function sa__MakeTerrainHorizontalSymmetryAction_applySymmetry(): boolean
    function rf__sa__MakeTerrainHorizontalSymmetryAction_cancel(): void
    function sa__MakeTerrainHorizontalSymmetryAction_cancel(): boolean
    function rf__sa__MakeTerrainHorizontalSymmetryAction_redo(): void
    function sa__MakeTerrainHorizontalSymmetryAction_redo(): boolean
    function sa__MakeTerrainCreateAction_onDestroy(): boolean
    function rf__sa__MakeTerrainCreateAction_cancel(): void
    function sa__MakeTerrainCreateAction_cancel(): boolean
    function rf__sa__MakeTerrainCreateAction_redo(): void
    function sa__MakeTerrainCreateAction_redo(): boolean
    function sa__MakeTerrainCopyPasteAction_onDestroy(): boolean
    function rf__sa__MakeTerrainCopyPasteAction_cancel(): void
    function sa__MakeTerrainCopyPasteAction_cancel(): boolean
    function rf__sa__MakeTerrainCopyPasteAction_redo(): void
    function sa__MakeTerrainCopyPasteAction_redo(): boolean
    function sa__EscaperEffect_onDestroy(): boolean
    function sa__CasterShot_create(): boolean
    function sa__CasterShot_onDestroy(): boolean
    function sa__MakeDeleteClearMob_create(): boolean
    function sa__MakeDeleteClearMob_onDestroy(): boolean
    function sa__MakeDeleteClearMob_clickMade(): boolean
    function sa__MakeDeleteClearMob_cancelLastAction(): boolean
    function sa__MakeDeleteClearMob_redoLastAction(): boolean
    function sa__TerrainTypeSlide_getSlideSpeed(): boolean
    function sa__TerrainTypeSlide_getCanTurn(): boolean
    function sa__TerrainTypeWalk_getWalkSpeed(): boolean
    function sa__TerrainTypeDeath_onDestroy(): boolean
    function sa__TerrainTypeDeath_getKillingEffectStr(): boolean
    function sa__TerrainTypeDeath_getTimeToKill(): boolean
    function sa__TerrainTypeDeath_killEscaper(): boolean
    function sa__TerrainTypeDeath_getTimer(): boolean
    function sa__TerrainTypeDeath_getToleranceDist(): boolean
    function sa__Start_onDestroy(): boolean
    function sa__Start_getRandomX(): boolean
    function sa__Start_getRandomY(): boolean
    function sa__Start_toString(): boolean
    function sa__End_onDestroy(): boolean
    function sa__End_toString(): boolean
    function sa__MakeCaster_getCasterType(): boolean
    function sa__MakeCaster_getAngle(): boolean
    function sa__MakeCaster_create(): boolean
    function sa__MakeCaster_onDestroy(): boolean
    function sa__MakeCaster_cancelLastAction(): boolean
    function sa__MakeCaster_redoLastAction(): boolean
    function sa__MakeDeleteCasters_isLastLocSavedUsed(): boolean
    function sa__MakeDeleteCasters_create(): boolean
    function sa__MakeDeleteCasters_onDestroy(): boolean
    function sa__MakeDeleteCasters_saveLoc(): boolean
    function sa__MakeDeleteCasters_unsaveLocDefinitely(): boolean
    function sa__MakeDeleteCasters_cancelLastAction(): boolean
    function rf__sa__MakeDeleteCasters_redoLastAction(): void
    function sa__MakeDeleteCasters_redoLastAction(): boolean
    function sa__MakeDeleteCasters_getMode(): boolean
    function sa__MakeDeleteMeteors_isLastLocSavedUsed(): boolean
    function sa__MakeDeleteMeteors_create(): boolean
    function sa__MakeDeleteMeteors_onDestroy(): boolean
    function sa__MakeDeleteMeteors_saveLoc(): boolean
    function sa__MakeDeleteMeteors_unsaveLocDefinitely(): boolean
    function sa__MakeDeleteMeteors_cancelLastAction(): boolean
    function rf__sa__MakeDeleteMeteors_redoLastAction(): void
    function sa__MakeDeleteMeteors_redoLastAction(): boolean
    function sa__MakeDeleteMeteors_getMode(): boolean
    function sa__MakeDeleteMonsters_isLastLocSavedUsed(): boolean
    function sa__MakeDeleteMonsters_create(): boolean
    function sa__MakeDeleteMonsters_onDestroy(): boolean
    function sa__MakeDeleteMonsters_saveLoc(): boolean
    function sa__MakeDeleteMonsters_unsaveLocDefinitely(): boolean
    function sa__MakeDeleteMonsters_cancelLastAction(): boolean
    function rf__sa__MakeDeleteMonsters_redoLastAction(): void
    function sa__MakeDeleteMonsters_redoLastAction(): boolean
    function sa__MakeDeleteMonsters_getMode(): boolean
    function sa__MakeEnd_create(): boolean
    function sa__MakeEnd_onDestroy(): boolean
    function sa__MakeEnd_saveLoc(): boolean
    function sa__MakeEnd_isLastLocSavedUsed(): boolean
    function sa__MakeEnd_cancelLastAction(): boolean
    function rf__sa__MakeEnd_redoLastAction(): void
    function sa__MakeEnd_redoLastAction(): boolean
    function sa__MakeExchangeTerrains_create(): boolean
    function sa__MakeExchangeTerrains_onDestroy(): boolean
    function sa__MakeExchangeTerrains_saveLoc(): boolean
    function sa__MakeExchangeTerrains_unsaveLocDefinitely(): boolean
    function sa__MakeExchangeTerrains_isLastLocSavedUsed(): boolean
    function sa__MakeExchangeTerrains_cancelLastAction(): boolean
    function rf__sa__MakeExchangeTerrains_redoLastAction(): void
    function sa__MakeExchangeTerrains_redoLastAction(): boolean
    function sa__MakeGetTerrainType_create(): boolean
    function sa__MakeGetTerrainType_onDestroy(): boolean
    function sa__MakeGetTerrainType_cancelLastAction(): boolean
    function sa__MakeGetTerrainType_redoLastAction(): boolean
    function sa__MakeGetUnitTeleportPeriod_create(): boolean
    function sa__MakeGetUnitTeleportPeriod_onDestroy(): boolean
    function sa__MakeGetUnitTeleportPeriod_cancelLastAction(): boolean
    function sa__MakeGetUnitTeleportPeriod_redoLastAction(): boolean
    function sa__MakeMeteor_create(): boolean
    function sa__MakeMeteor_onDestroy(): boolean
    function sa__MakeMeteor_cancelLastAction(): boolean
    function sa__MakeMeteor_redoLastAction(): boolean
    function sa__MakeMonsterMultiplePatrols__disposeArrays(): boolean
    function sa__MakeMonsterMultiplePatrols_getMonsterType(): boolean
    function sa__MakeMonsterMultiplePatrols_getMode(): boolean
    function sa__MakeMonsterMultiplePatrols_getMonster(): boolean
    function sa__MakeMonsterMultiplePatrols_create(): boolean
    function sa__MakeMonsterMultiplePatrols_onDestroy(): boolean
    function sa__MakeMonsterMultiplePatrols_nextMonster(): boolean
    function sa__MakeMonsterMultiplePatrols_getLocPointeur(): boolean
    function rf__sa__MakeMonsterMultiplePatrols_saveLoc(): void
    function sa__MakeMonsterMultiplePatrols_saveLoc(): boolean
    function sa__MakeMonsterMultiplePatrols_setMonster(): boolean
    function sa__MakeMonsterMultiplePatrols_cancelLastAction(): boolean
    function rf__sa__MakeMonsterMultiplePatrols_redoLastAction(): void
    function sa__MakeMonsterMultiplePatrols_redoLastAction(): boolean
    function sa__MakeMonsterNoMove_getMonsterType(): boolean
    function sa__MakeMonsterNoMove_getFacingAngle(): boolean
    function sa__MakeMonsterNoMove_create(): boolean
    function sa__MakeMonsterNoMove_onDestroy(): boolean
    function sa__MakeMonsterNoMove_cancelLastAction(): boolean
    function sa__MakeMonsterNoMove_redoLastAction(): boolean
    function sa__MakeMonsterSimplePatrol_getMonsterType(): boolean
    function sa__MakeMonsterSimplePatrol_create(): boolean
    function sa__MakeMonsterSimplePatrol_onDestroy(): boolean
    function sa__MakeMonsterSimplePatrol_saveLoc(): boolean
    function rf__sa__MakeMonsterSimplePatrol_unsaveLoc(): void
    function sa__MakeMonsterSimplePatrol_unsaveLoc(): boolean
    function sa__MakeMonsterSimplePatrol_unsaveLocDefinitely(): boolean
    function sa__MakeMonsterSimplePatrol_isLastLocSavedUsed(): boolean
    function sa__MakeMonsterSimplePatrol_cancelLastAction(): boolean
    function rf__sa__MakeMonsterSimplePatrol_redoLastAction(): void
    function sa__MakeMonsterSimplePatrol_redoLastAction(): boolean
    function sa__MakeMonsterSimplePatrol_getMode(): boolean
    function sa__MakeMonsterSpawn_create(): boolean
    function sa__MakeMonsterSpawn_onDestroy(): boolean
    function sa__MakeMonsterSpawn_saveLoc(): boolean
    function sa__MakeMonsterSpawn_isLastLocSavedUsed(): boolean
    function sa__MakeMonsterSpawn_cancelLastAction(): boolean
    function rf__sa__MakeMonsterSpawn_redoLastAction(): void
    function sa__MakeMonsterSpawn_redoLastAction(): boolean
    function sa__MakeMonsterTeleport__disposeArrays(): boolean
    function sa__MakeMonsterTeleport_getMonsterType(): boolean
    function sa__MakeMonsterTeleport_getPeriod(): boolean
    function sa__MakeMonsterTeleport_getAngle(): boolean
    function sa__MakeMonsterTeleport_getMode(): boolean
    function sa__MakeMonsterTeleport_getMonster(): boolean
    function sa__MakeMonsterTeleport_create(): boolean
    function sa__MakeMonsterTeleport_onDestroy(): boolean
    function sa__MakeMonsterTeleport_nextMonster(): boolean
    function rf__sa__MakeMonsterTeleport_addWaitPeriod(): void
    function sa__MakeMonsterTeleport_addWaitPeriod(): boolean
    function rf__sa__MakeMonsterTeleport_addHidePeriod(): void
    function sa__MakeMonsterTeleport_addHidePeriod(): boolean
    function sa__MakeMonsterTeleport_getLocPointeur(): boolean
    function rf__sa__MakeMonsterTeleport_saveLoc(): void
    function sa__MakeMonsterTeleport_saveLoc(): boolean
    function sa__MakeMonsterTeleport_setMonster(): boolean
    function sa__MakeMonsterTeleport_cancelLastAction(): boolean
    function rf__sa__MakeMonsterTeleport_redoLastAction(): void
    function sa__MakeMonsterTeleport_redoLastAction(): boolean
    function sa__MakeSetUnitMonsterType_getMonsterType(): boolean
    function sa__MakeSetUnitMonsterType_isLastLocSavedUsed(): boolean
    function sa__MakeSetUnitMonsterType_create(): boolean
    function sa__MakeSetUnitMonsterType_onDestroy(): boolean
    function sa__MakeSetUnitMonsterType_saveLoc(): boolean
    function sa__MakeSetUnitMonsterType_unsaveLocDefinitely(): boolean
    function sa__MakeSetUnitMonsterType_cancelLastAction(): boolean
    function rf__sa__MakeSetUnitMonsterType_redoLastAction(): void
    function sa__MakeSetUnitMonsterType_redoLastAction(): boolean
    function sa__MakeSetUnitMonsterType_getMode(): boolean
    function sa__MakeSetUnitTeleportPeriod_getPeriod(): boolean
    function sa__MakeSetUnitTeleportPeriod_isLastLocSavedUsed(): boolean
    function sa__MakeSetUnitTeleportPeriod_create(): boolean
    function sa__MakeSetUnitTeleportPeriod_onDestroy(): boolean
    function sa__MakeSetUnitTeleportPeriod_saveLoc(): boolean
    function sa__MakeSetUnitTeleportPeriod_unsaveLocDefinitely(): boolean
    function sa__MakeSetUnitTeleportPeriod_cancelLastAction(): boolean
    function rf__sa__MakeSetUnitTeleportPeriod_redoLastAction(): void
    function sa__MakeSetUnitTeleportPeriod_redoLastAction(): boolean
    function sa__MakeSetUnitTeleportPeriod_getMode(): boolean
    function sa__MakeStart_create(): boolean
    function sa__MakeStart_onDestroy(): boolean
    function sa__MakeStart_saveLoc(): boolean
    function sa__MakeStart_isLastLocSavedUsed(): boolean
    function sa__MakeStart_cancelLastAction(): boolean
    function rf__sa__MakeStart_redoLastAction(): void
    function sa__MakeStart_redoLastAction(): boolean
    function sa__MakeStart_forNext(): boolean
    function sa__MakeTerrainCopyPaste_create(): boolean
    function sa__MakeTerrainCopyPaste_onDestroy(): boolean
    function rf__sa__MakeTerrainCopyPaste_saveLoc(): void
    function sa__MakeTerrainCopyPaste_saveLoc(): boolean
    function rf__sa__MakeTerrainCopyPaste_cancelLastAction(): void
    function sa__MakeTerrainCopyPaste_cancelLastAction(): boolean
    function rf__sa__MakeTerrainCopyPaste_redoLastAction(): void
    function sa__MakeTerrainCopyPaste_redoLastAction(): boolean
    function sa__MakeTerrainCreate_isLastLocSavedUsed(): boolean
    function sa__MakeTerrainCreate_getTerrainType(): boolean
    function sa__MakeTerrainCreate_create(): boolean
    function sa__MakeTerrainCreate_onDestroy(): boolean
    function sa__MakeTerrainCreate_saveLoc(): boolean
    function sa__MakeTerrainCreate_unsaveLocDefinitely(): boolean
    function sa__MakeTerrainCreate_cancelLastAction(): boolean
    function rf__sa__MakeTerrainCreate_redoLastAction(): void
    function sa__MakeTerrainCreate_redoLastAction(): boolean
    function sa__MakeTerrainHeight_create(): boolean
    function sa__MakeTerrainHeight_getRadius(): boolean
    function sa__MakeTerrainHeight_getHeight(): boolean
    function sa__MakeTerrainHeight_onDestroy(): boolean
    function sa__MakeTerrainHeight_cancelLastAction(): boolean
    function sa__MakeTerrainHeight_redoLastAction(): boolean
    function sa__MakeTerrainHorizontalSymmetry_isLastLocSavedUsed(): boolean
    function sa__MakeTerrainHorizontalSymmetry_create(): boolean
    function sa__MakeTerrainHorizontalSymmetry_onDestroy(): boolean
    function sa__MakeTerrainHorizontalSymmetry_saveLoc(): boolean
    function sa__MakeTerrainHorizontalSymmetry_unsaveLocDefinitely(): boolean
    function sa__MakeTerrainHorizontalSymmetry_cancelLastAction(): boolean
    function rf__sa__MakeTerrainHorizontalSymmetry_redoLastAction(): void
    function sa__MakeTerrainHorizontalSymmetry_redoLastAction(): boolean
    function sa__MakeTerrainVerticalSymmetry_isLastLocSavedUsed(): boolean
    function sa__MakeTerrainVerticalSymmetry_create(): boolean
    function sa__MakeTerrainVerticalSymmetry_onDestroy(): boolean
    function sa__MakeTerrainVerticalSymmetry_saveLoc(): boolean
    function sa__MakeTerrainVerticalSymmetry_unsaveLocDefinitely(): boolean
    function sa__MakeTerrainVerticalSymmetry_cancelLastAction(): boolean
    function rf__sa__MakeTerrainVerticalSymmetry_redoLastAction(): void
    function sa__MakeTerrainVerticalSymmetry_redoLastAction(): boolean
    function sa__MakeVisibilityModifier_create(): boolean
    function sa__MakeVisibilityModifier_onDestroy(): boolean
    function sa__MakeVisibilityModifier_saveLoc(): boolean
    function sa__MakeVisibilityModifier_unsaveLocDefinitely(): boolean
    function sa__MakeVisibilityModifier_isLastLocSavedUsed(): boolean
    function sa__MakeVisibilityModifier_cancelLastAction(): boolean
    function rf__sa__MakeVisibilityModifier_redoLastAction(): void
    function sa__MakeVisibilityModifier_redoLastAction(): boolean
    function rf__sa__MonsterMultiplePatrols_storeNewLoc(): void
    function sa__MonsterMultiplePatrols_storeNewLoc(): boolean
    function sa__MonsterMultiplePatrols_destroyLocs(): boolean
    function sa__MonsterMultiplePatrols_getId(): boolean
    function sa__MonsterMultiplePatrols_getCurrentTrigger(): boolean
    function sa__MonsterMultiplePatrols_removeUnit(): boolean
    function sa__MonsterMultiplePatrols_killUnit(): boolean
    function sa__MonsterMultiplePatrols_onDestroy(): boolean
    function sa__MonsterMultiplePatrols_nextMove(): boolean
    function rf__sa__MonsterMultiplePatrols_createUnit(): void
    function sa__MonsterMultiplePatrols_createUnit(): boolean
    function sa__MonsterMultiplePatrols_getLife(): boolean
    function sa__MonsterMultiplePatrols_setLife(): boolean
    function rf__sa__MonsterMultiplePatrols_destroyLastLoc(): void
    function sa__MonsterMultiplePatrols_destroyLastLoc(): boolean
    function rf__sa__MonsterMultiplePatrols_addNewLoc(): void
    function sa__MonsterMultiplePatrols_addNewLoc(): boolean
    function sa__MonsterMultiplePatrols_getMonsterType(): boolean
    function rf__sa__MonsterMultiplePatrols_setMonsterType(): void
    function sa__MonsterMultiplePatrols_setMonsterType(): boolean
    function sa__MonsterMultiplePatrols_temporarilyDisable(): boolean
    function sa__MonsterMultiplePatrols_temporarilyEnable(): boolean
    function rf__sa__MonsterMultiplePatrols_setBaseColor(): void
    function sa__MonsterMultiplePatrols_setBaseColor(): boolean
    function sa__MonsterMultiplePatrols_setVertexColor(): boolean
    function sa__MonsterMultiplePatrols_reinitColor(): boolean
    function rf__sa__MonsterMultiplePatrols_toString(): void
    function sa__MonsterMultiplePatrols_toString(): boolean
    function sa__MonsterNoMove_getId(): boolean
    function sa__MonsterNoMove_removeUnit(): boolean
    function sa__MonsterNoMove_killUnit(): boolean
    function sa__MonsterNoMove_onDestroy(): boolean
    function sa__MonsterNoMove_createUnit(): boolean
    function sa__MonsterNoMove_getLife(): boolean
    function sa__MonsterNoMove_setLife(): boolean
    function sa__MonsterNoMove_getMonsterType(): boolean
    function rf__sa__MonsterNoMove_setMonsterType(): void
    function sa__MonsterNoMove_setMonsterType(): boolean
    function sa__MonsterNoMove_toString(): boolean
    function sa__MonsterNoMove_temporarilyDisable(): boolean
    function sa__MonsterNoMove_temporarilyEnable(): boolean
    function rf__sa__MonsterNoMove_setBaseColor(): void
    function sa__MonsterNoMove_setBaseColor(): boolean
    function sa__MonsterNoMove_setVertexColor(): boolean
    function sa__MonsterNoMove_reinitColor(): boolean
    function sa__MonsterSimplePatrol_getId(): boolean
    function sa__MonsterSimplePatrol_removeUnit(): boolean
    function sa__MonsterSimplePatrol_killUnit(): boolean
    function sa__MonsterSimplePatrol_onDestroy(): boolean
    function sa__MonsterSimplePatrol_createUnit(): boolean
    function sa__MonsterSimplePatrol_getLife(): boolean
    function sa__MonsterSimplePatrol_setLife(): boolean
    function sa__MonsterSimplePatrol_getMonsterType(): boolean
    function rf__sa__MonsterSimplePatrol_setMonsterType(): void
    function sa__MonsterSimplePatrol_setMonsterType(): boolean
    function sa__MonsterSimplePatrol_temporarilyDisable(): boolean
    function sa__MonsterSimplePatrol_temporarilyEnable(): boolean
    function rf__sa__MonsterSimplePatrol_setBaseColor(): void
    function sa__MonsterSimplePatrol_setBaseColor(): boolean
    function sa__MonsterSimplePatrol_setVertexColor(): boolean
    function sa__MonsterSimplePatrol_reinitColor(): boolean
    function sa__MonsterSimplePatrol_toString(): boolean
    function rf__sa__MonsterTeleport_storeNewLoc(): void
    function sa__MonsterTeleport_storeNewLoc(): boolean
    function sa__MonsterTeleport_destroyLocs(): boolean
    function sa__MonsterTeleport_getId(): boolean
    function sa__MonsterTeleport_removeUnit(): boolean
    function sa__MonsterTeleport_killUnit(): boolean
    function sa__MonsterTeleport_onDestroy(): boolean
    function rf__sa__MonsterTeleport_setPeriod(): void
    function sa__MonsterTeleport_setPeriod(): boolean
    function sa__MonsterTeleport_getPeriod(): boolean
    function rf__sa__MonsterTeleport_createUnit(): void
    function sa__MonsterTeleport_createUnit(): boolean
    function sa__MonsterTeleport_nextMove(): boolean
    function sa__MonsterTeleport_getLife(): boolean
    function sa__MonsterTeleport_setLife(): boolean
    function rf__sa__MonsterTeleport_getX(): void
    function sa__MonsterTeleport_getX(): boolean
    function rf__sa__MonsterTeleport_getY(): void
    function sa__MonsterTeleport_getY(): boolean
    function rf__sa__MonsterTeleport_addNewLoc(): void
    function sa__MonsterTeleport_addNewLoc(): boolean
    function rf__sa__MonsterTeleport_destroyLastLoc(): void
    function sa__MonsterTeleport_destroyLastLoc(): boolean
    function sa__MonsterTeleport_getMonsterType(): boolean
    function rf__sa__MonsterTeleport_setMonsterType(): void
    function sa__MonsterTeleport_setMonsterType(): boolean
    function sa__MonsterTeleport_temporarilyDisable(): boolean
    function sa__MonsterTeleport_temporarilyEnable(): boolean
    function rf__sa__MonsterTeleport_setBaseColor(): void
    function sa__MonsterTeleport_setBaseColor(): boolean
    function sa__MonsterTeleport_setVertexColor(): boolean
    function sa__MonsterTeleport_reinitColor(): boolean
    function rf__sa__MonsterTeleport_toString(): void
    function sa__MonsterTeleport_toString(): boolean
    function sa__MakeClearMob__disposeArrays(): boolean
    function sa__MakeClearMob_create(): boolean
    function sa__MakeClearMob_onDestroy(): boolean
    function rf__sa__MakeClearMob_clickMade(): void
    function sa__MakeClearMob_clickMade(): boolean
    function rf__sa__MakeClearMob_cancelLastAction(): void
    function sa__MakeClearMob_cancelLastAction(): boolean
    function rf__sa__MakeClearMob_redoLastAction(): void
    function sa__MakeClearMob_redoLastAction(): boolean
    function rf__sa___prototype2_TimerUtils__init(): void
    function sa___prototype2_TimerUtils__init(): boolean
    function sa___prototype51_SoundUtils__HookStopSound(): boolean
    function jasshelper__initstructs239980312(): void
}
