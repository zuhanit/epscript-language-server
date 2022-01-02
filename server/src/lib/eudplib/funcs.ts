interface BuiltinFunction {
    name: string;
    args: string[];
    doc: string;
}

export const builtinFunctions: BuiltinFunction[] = [
    {
        "name": "Accumulate",
        "args": [
            "Player",
            "Comparison",
            "Number",
            "ResourceType"
        ],
        "doc": ""
    },
    {
        "name": "AddCurrentPlayer",
        "args": [
            "p"
        ],
        "doc": ""
    },
    {
        "name": "Always",
        "args": [
            ""
        ],
        "doc": ""
    },
    {
        "name": "Assignable2List",
        "args": [
            "a"
        ],
        "doc": ""
    },
    {
        "name": "Bring",
        "args": [
            "Player",
            "Comparison",
            "Number",
            "Unit",
            "Location"
        ],
        "doc": ""
    },
    {
        "name": "CenterView",
        "args": [
            "Where"
        ],
        "doc": ""
    },
    {
        "name": "Command",
        "args": [
            "Player",
            "Comparison",
            "Number",
            "Unit"
        ],
        "doc": "[Player] commands [Comparison] [Number] [Unit].\n\n    Example::\n        Command(Player1, AtLeast, 30, \"Terran Marine\")\n\n\n    "
    },
    {
        "name": "CommandLeast",
        "args": [
            "Unit"
        ],
        "doc": ""
    },
    {
        "name": "CommandLeastAt",
        "args": [
            "Unit",
            "Location"
        ],
        "doc": ""
    },
    {
        "name": "CommandMost",
        "args": [
            "Unit"
        ],
        "doc": ""
    },
    {
        "name": "CommandMostAt",
        "args": [
            "Unit",
            "Location"
        ],
        "doc": ""
    },
    {
        "name": "Comment",
        "args": [
            "Text"
        ],
        "doc": ""
    },
    {
        "name": "CompressPayload",
        "args": [
            "mode"
        ],
        "doc": " Set payload compression mode.\n\n    :param mode: If true, enable object stacking (compression). If false,\n    disable it.\n    "
    },
    {
        "name": "CountdownTimer",
        "args": [
            "Comparison",
            "Time"
        ],
        "doc": "Checks countdown timer.\n\n    Example::\n\n        CountdownTimer(AtLeast, 10)\n\n    Memory Layout::\n\n        0000 0000 0000 0000 TTTT TTTT 0000 CP01 0000\n\n        T : Time, CP : Comparison.\n    "
    },
    {
        "name": "CreatePayload",
        "args": [
            "root"
        ],
        "doc": ""
    },
    {
        "name": "CreateUnit",
        "args": [
            "Number",
            "Unit",
            "Where",
            "ForPlayer"
        ],
        "doc": ""
    },
    {
        "name": "CreateUnitWithProperties",
        "args": [
            "Count",
            "Unit",
            "Where",
            "Player",
            "Properties"
        ],
        "doc": ""
    },
    {
        "name": "Deaths",
        "args": [
            "Player",
            "Comparison",
            "Number",
            "Unit"
        ],
        "doc": ""
    },
    {
        "name": "DeathsX",
        "args": [
            "Player",
            "Comparison",
            "Number",
            "Unit",
            "Mask"
        ],
        "doc": ""
    },
    {
        "name": "Defeat",
        "args": [
            ""
        ],
        "doc": ""
    },
    {
        "name": "Disabled",
        "args": [
            "arg"
        ],
        "doc": "Disable condition or action"
    },
    {
        "name": "DisplayText",
        "args": [
            "Text",
            "AlwaysDisplay=4"
        ],
        "doc": ""
    },
    {
        "name": "DoActions",
        "args": [
            "*actions",
            "preserved=True"
        ],
        "doc": ""
    },
    {
        "name": "Draw",
        "args": [
            ""
        ],
        "doc": ""
    },
    {
        "name": "EPD",
        "args": [
            "p"
        ],
        "doc": ""
    },
    {
        "name": "EPS_SetDebug",
        "args": [
            "b"
        ],
        "doc": ""
    },
    {
        "name": "EP_SetRValueStrictMode",
        "args": [
            "mode"
        ],
        "doc": ""
    },
    {
        "name": "EUDAnd",
        "args": [
            "cond1",
            "*conds"
        ],
        "doc": " cond1 && cond2 && ... && condn\n\n    .. note::\n        This function computes AND value of various conditions.\n        If you don't want to do much computation, you should better use\n        plain list instead of this function.\n\n    .. warning:: Short circuiting is not supported.\n\n    :param conds: List of conditions\n    "
    },
    {
        "name": "EUDBinaryMax",
        "args": [
            "cond",
            "minv=0",
            "maxv=4294967295"
        ],
        "doc": " Find maximum x satisfying cond(x) using binary search\n\n    :param cond: Test condition\n    :param minv: Minimum value in domain\n    :param maxv: Maximum value in domain\n\n    Cond should be binary classifier, meaning that for some N\n        for all x > N, cond(x) is false.\n        for all x <= N, cond(x) is true\n    Then EUDBinaryMin will find such N.\n\n    .. note:: If none of the value satisfies condition, then this\n        function will return maxv.\n    "
    },
    {
        "name": "EUDBinaryMin",
        "args": [
            "cond",
            "minv=0",
            "maxv=4294967295"
        ],
        "doc": " Find minimum x satisfying cond(x) using binary search\n\n    :param cond: Test condition\n    :param minv: Minimum value in domain\n    :param maxv: Maximum value in domain\n\n    Cond should be binary classifier, meaning that for some N\n        for all x < N, cond(x) is false.\n        for all x >= N, cond(x) is true\n    Then EUDBinaryMin will find such N\n\n    .. note:: If none of the value satisfies condition, then this\n        function will return maxv.\n    "
    },
    {
        "name": "EUDBranch",
        "args": [
            "conditions",
            "ontrue",
            "onfalse"
        ],
        "doc": "Branch by whether conditions is satisfied or not.\n\n    :param conditions: Nested list of conditions.\n    :param ontrue: When all conditions are true, this branch is taken.\n    :param onfalse: When any of the conditions are false, this branch is taken.\n    "
    },
    {
        "name": "EUDBreak",
        "args": [
            ""
        ],
        "doc": ""
    },
    {
        "name": "EUDBreakIf",
        "args": [
            "conditions"
        ],
        "doc": ""
    },
    {
        "name": "EUDBreakIfNot",
        "args": [
            "conditions"
        ],
        "doc": ""
    },
    {
        "name": "EUDClearNamespace",
        "args": [
            ""
        ],
        "doc": ""
    },
    {
        "name": "EUDContinue",
        "args": [
            ""
        ],
        "doc": ""
    },
    {
        "name": "EUDContinueIf",
        "args": [
            "conditions"
        ],
        "doc": ""
    },
    {
        "name": "EUDContinueIfNot",
        "args": [
            "conditions"
        ],
        "doc": ""
    },
    {
        "name": "EUDCreateBlock",
        "args": [
            "name",
            "userdata"
        ],
        "doc": ""
    },
    {
        "name": "EUDCreateVariables",
        "args": [
            "varn"
        ],
        "doc": ""
    },
    {
        "name": "EUDDoEvents",
        "args": [
            ""
        ],
        "doc": ""
    },
    {
        "name": "EUDElse",
        "args": [
            ""
        ],
        "doc": ""
    },
    {
        "name": "EUDElseIf",
        "args": [
            ""
        ],
        "doc": ""
    },
    {
        "name": "EUDElseIfNot",
        "args": [
            ""
        ],
        "doc": ""
    },
    {
        "name": "EUDEndExecuteOnce",
        "args": [
            ""
        ],
        "doc": ""
    },
    {
        "name": "EUDEndIf",
        "args": [
            ""
        ],
        "doc": ""
    },
    {
        "name": "EUDEndInfLoop",
        "args": [
            ""
        ],
        "doc": ""
    },
    {
        "name": "EUDEndLoopN",
        "args": [
            ""
        ],
        "doc": ""
    },
    {
        "name": "EUDEndPlayerLoop",
        "args": [
            ""
        ],
        "doc": ""
    },
    {
        "name": "EUDEndSwitch",
        "args": [
            ""
        ],
        "doc": ""
    },
    {
        "name": "EUDEndWhile",
        "args": [
            ""
        ],
        "doc": ""
    },
    {
        "name": "EUDExecuteOnce",
        "args": [
            ""
        ],
        "doc": ""
    },
    {
        "name": "EUDFunc",
        "args": [
            "fdecl_func"
        ],
        "doc": ""
    },
    {
        "name": "EUDFuncPtr",
        "args": [
            "argn",
            "retn"
        ],
        "doc": ""
    },
    {
        "name": "EUDGetBlockList",
        "args": [
            ""
        ],
        "doc": ""
    },
    {
        "name": "EUDGetLastBlock",
        "args": [
            ""
        ],
        "doc": ""
    },
    {
        "name": "EUDGetLastBlockOfName",
        "args": [
            "name"
        ],
        "doc": ""
    },
    {
        "name": "EUDIf",
        "args": [
            ""
        ],
        "doc": ""
    },
    {
        "name": "EUDIfNot",
        "args": [
            ""
        ],
        "doc": ""
    },
    {
        "name": "EUDInfLoop",
        "args": [
            ""
        ],
        "doc": ""
    },
    {
        "name": "EUDIsContinuePointSet",
        "args": [
            ""
        ],
        "doc": ""
    },
    {
        "name": "EUDJump",
        "args": [
            "nextptr"
        ],
        "doc": ""
    },
    {
        "name": "EUDJumpIf",
        "args": [
            "conditions",
            "ontrue"
        ],
        "doc": ""
    },
    {
        "name": "EUDJumpIfNot",
        "args": [
            "conditions",
            "onfalse"
        ],
        "doc": ""
    },
    {
        "name": "EUDLoopBullet",
        "args": [
            ""
        ],
        "doc": ""
    },
    {
        "name": "EUDLoopList",
        "args": [
            "header_offset",
            "break_offset=None"
        ],
        "doc": ""
    },
    {
        "name": "EUDLoopN",
        "args": [
            ""
        ],
        "doc": ""
    },
    {
        "name": "EUDLoopNewUnit",
        "args": [
            "allowance=2"
        ],
        "doc": ""
    },
    {
        "name": "EUDLoopPlayer",
        "args": [
            "ptype='Human'",
            "force=None",
            "race=None"
        ],
        "doc": ""
    },
    {
        "name": "EUDLoopPlayerUnit",
        "args": [
            "player"
        ],
        "doc": ""
    },
    {
        "name": "EUDLoopRange",
        "args": [
            "start",
            "end=None"
        ],
        "doc": ""
    },
    {
        "name": "EUDLoopSprite",
        "args": [
            ""
        ],
        "doc": ""
    },
    {
        "name": "EUDLoopTrigger",
        "args": [
            "player"
        ],
        "doc": ""
    },
    {
        "name": "EUDLoopUnit",
        "args": [
            ""
        ],
        "doc": ""
    },
    {
        "name": "EUDLoopUnit2",
        "args": [
            ""
        ],
        "doc": "EUDLoopUnit\ubcf4\ub2e4 \uc57d\uac04? \ube60\ub985\ub2c8\ub2e4. \uc720\ub2db \ub9ac\uc2a4\ud2b8\ub97c \ub530\ub77c\uac00\uc9c0 \uc54a\uace0\n    1700\uac1c \uc720\ub2db\uc744 \ub3c4\ub294 \ubc29\uc2dd\uc73c\ub85c \uc791\ub3d9\ud569\ub2c8\ub2e4.\n    "
    },
    {
        "name": "EUDMethod",
        "args": [
            "method"
        ],
        "doc": ""
    },
    {
        "name": "EUDNot",
        "args": [
            "cond"
        ],
        "doc": " !cond\n\n    :param conds: Condition to negate\n    "
    },
    {
        "name": "EUDOnStart",
        "args": [
            "func"
        ],
        "doc": ""
    },
    {
        "name": "EUDOr",
        "args": [
            "cond1",
            "*conds"
        ],
        "doc": " cond1 || cond2 || ... || condn\n\n    .. warning:: Short circuiting is not supported\n\n    :param conds: List of conditions\n    "
    },
    {
        "name": "EUDPeekBlock",
        "args": [
            "name"
        ],
        "doc": ""
    },
    {
        "name": "EUDPlayerLoop",
        "args": [
            ""
        ],
        "doc": ""
    },
    {
        "name": "EUDPopBlock",
        "args": [
            "name"
        ],
        "doc": ""
    },
    {
        "name": "EUDRegisterObjectToNamespace",
        "args": [
            "funcname",
            "obj"
        ],
        "doc": " Register object to inline code namespace. "
    },
    {
        "name": "EUDRegistered",
        "args": [
            "func"
        ],
        "doc": " Decoreator for registering class / function. "
    },
    {
        "name": "EUDReturn",
        "args": [
            "*args"
        ],
        "doc": ""
    },
    {
        "name": "EUDSetContinuePoint",
        "args": [
            ""
        ],
        "doc": ""
    },
    {
        "name": "EUDStack",
        "args": [
            "basetype=None"
        ],
        "doc": ""
    },
    {
        "name": "EUDSwitch",
        "args": [
            "var"
        ],
        "doc": ""
    },
    {
        "name": "EUDSwitchCase",
        "args": [
            ""
        ],
        "doc": ""
    },
    {
        "name": "EUDSwitchDefault",
        "args": [
            ""
        ],
        "doc": ""
    },
    {
        "name": "EUDTernary",
        "args": [
            "conditions",
            "*",
            "neg=False"
        ],
        "doc": ""
    },
    {
        "name": "EUDTraceLog",
        "args": [
            "lineno=None"
        ],
        "doc": "Log trace."
    },
    {
        "name": "EUDTracedFunc",
        "args": [
            "fdecl_func"
        ],
        "doc": ""
    },
    {
        "name": "EUDTracedMethod",
        "args": [
            "method"
        ],
        "doc": ""
    },
    {
        "name": "EUDTracedTypedFunc",
        "args": [
            "argtypes",
            "rettypes=None"
        ],
        "doc": ""
    },
    {
        "name": "EUDTracedTypedMethod",
        "args": [
            "argtypes",
            "rettypes=None"
        ],
        "doc": ""
    },
    {
        "name": "EUDTypedFunc",
        "args": [
            "argtypes",
            "rettypes=None",
            "*",
            "traced=False"
        ],
        "doc": ""
    },
    {
        "name": "EUDTypedFuncPtr",
        "args": [
            "argtypes",
            "rettypes"
        ],
        "doc": ""
    },
    {
        "name": "EUDTypedMethod",
        "args": [
            "argtypes",
            "rettypes=None",
            "*",
            "traced=False"
        ],
        "doc": ""
    },
    {
        "name": "EUDVArray",
        "args": [
            "size",
            "basetype=None"
        ],
        "doc": ""
    },
    {
        "name": "EUDWhile",
        "args": [
            ""
        ],
        "doc": ""
    },
    {
        "name": "EUDWhileNot",
        "args": [
            ""
        ],
        "doc": ""
    },
    {
        "name": "EUDXTypedFunc",
        "args": [
            "argmasks",
            "argtypes",
            "rettypes=None",
            "*",
            "traced=False"
        ],
        "doc": ""
    },
    {
        "name": "ElapsedTime",
        "args": [
            "Comparison",
            "Time"
        ],
        "doc": ""
    },
    {
        "name": "EncodeAIScript",
        "args": [
            "ais",
            "issueError=False"
        ],
        "doc": ""
    },
    {
        "name": "EncodeAllyStatus",
        "args": [
            "s",
            "issueError=False"
        ],
        "doc": "\n    Convert [Enemy, Ally, AlliedVictory] to number [0, 1, 2].\n    "
    },
    {
        "name": "EncodeComparison",
        "args": [
            "s",
            "issueError=False"
        ],
        "doc": "\n    Convert [AtLeast, AtMost, Exactly] to number [0, 1, 10].\n    "
    },
    {
        "name": "EncodeCount",
        "args": [
            "s",
            "issueError=False"
        ],
        "doc": "\n    Convert [All, (other numbers)] to number [0, (as-is)].\n    "
    },
    {
        "name": "EncodeLocation",
        "args": [
            "loc",
            "issueError=False"
        ],
        "doc": ""
    },
    {
        "name": "EncodeModifier",
        "args": [
            "s",
            "issueError=False"
        ],
        "doc": "\n    Convert [SetTo, Add, Subtract] to number [7, 8, 9].\n    "
    },
    {
        "name": "EncodeOrder",
        "args": [
            "s",
            "issueError=False"
        ],
        "doc": "\n    Convert [Move, Patrol, Attack] to number [0, 1, 2].\n    "
    },
    {
        "name": "EncodePlayer",
        "args": [
            "s",
            "issueError=False"
        ],
        "doc": "\n    Convert player identifier to corresponding number.\n\n    ======================= ========\n        Identifier           Number\n    ======================= ========\n    P1                         0\n    P2                         1\n    P3                         2\n    P4                         3\n    P5                         4\n    P6                         5\n    P7                         6\n    P8                         7\n    P9                         8\n    P10                        9\n    P11                        10\n    P12                        11\n    Player1                    0\n    Player2                    1\n    Player3                    2\n    Player4                    3\n    Player5                    4\n    Player6                    5\n    Player7                    6\n    Player8                    7\n    Player9                    8\n    Player10                   9\n    Player11                   10\n    Player12                   11\n    CurrentPlayer              13\n    Foes                       14\n    Allies                     15\n    NeutralPlayers             16\n    AllPlayers                 17\n    Force1                     18\n    Force2                     19\n    Force3                     20\n    Force4                     21\n    NonAlliedVictoryPlayers    26\n    ======================= ========\n\n    "
    },
    {
        "name": "EncodePropState",
        "args": [
            "s",
            "issueError=False"
        ],
        "doc": "\n    Convert [Enable, Disable, Toogle] to number [4, 5, 6]\n    "
    },
    {
        "name": "EncodeProperty",
        "args": [
            "prop",
            "issueError=False"
        ],
        "doc": ""
    },
    {
        "name": "EncodeResource",
        "args": [
            "s",
            "issueError=False"
        ],
        "doc": "\n    Convert [Ore, Gas, OreAndGas] to [0, 1, 2]\n    "
    },
    {
        "name": "EncodeScore",
        "args": [
            "s",
            "issueError=False"
        ],
        "doc": "\n    Convert score type identifier to number.\n\n    ================= ========\n        Score type     Number\n    ================= ========\n    Total                0\n    Units                1\n    Buildings            2\n    UnitsAndBuildings    3\n    Kills                4\n    Razings              5\n    KillsAndRazings      6\n    Custom               7\n    ================= ========\n\n    "
    },
    {
        "name": "EncodeString",
        "args": [
            "s",
            "issueError=False"
        ],
        "doc": ""
    },
    {
        "name": "EncodeSwitch",
        "args": [
            "sw",
            "issueError=False"
        ],
        "doc": ""
    },
    {
        "name": "EncodeSwitchAction",
        "args": [
            "s",
            "issueError=False"
        ],
        "doc": "\n    Convert [Set, Clear, Toogle, Random] to [4, 5, 6, 11].\n    "
    },
    {
        "name": "EncodeSwitchState",
        "args": [
            "s",
            "issueError=False"
        ],
        "doc": "\n    Convert [Set, Cleared] to [2, 3].\n    "
    },
    {
        "name": "EncodeTBL",
        "args": [
            "t",
            "issueError=False"
        ],
        "doc": ""
    },
    {
        "name": "EncodeUnit",
        "args": [
            "u",
            "issueError=False"
        ],
        "doc": ""
    },
    {
        "name": "Evaluate",
        "args": [
            "x"
        ],
        "doc": "\n    Evaluate expressions\n    "
    },
    {
        "name": "FlattenList",
        "args": [
            "l"
        ],
        "doc": ""
    },
    {
        "name": "GetChkTokenized",
        "args": [
            ""
        ],
        "doc": ""
    },
    {
        "name": "GetEUDNamespace",
        "args": [
            ""
        ],
        "doc": " Get list of functions that inline code can use. "
    },
    {
        "name": "GetFirstTrigTrigger",
        "args": [
            "player"
        ],
        "doc": " Get dlist start of trig-trigger for player "
    },
    {
        "name": "GetGlobalStringBuffer",
        "args": [
            ""
        ],
        "doc": ""
    },
    {
        "name": "GetLastTrigTrigger",
        "args": [
            "player"
        ],
        "doc": " Get dlist end of trig-trigger for player"
    },
    {
        "name": "GetLocationIndex",
        "args": [
            "l"
        ],
        "doc": ""
    },
    {
        "name": "GetObjectAddr",
        "args": [
            "obj"
        ],
        "doc": ""
    },
    {
        "name": "GetPlayerInfo",
        "args": [
            "player"
        ],
        "doc": ""
    },
    {
        "name": "GetPropertyIndex",
        "args": [
            "prop"
        ],
        "doc": ""
    },
    {
        "name": "GetStringIndex",
        "args": [
            "s"
        ],
        "doc": ""
    },
    {
        "name": "GetSwitchIndex",
        "args": [
            "s"
        ],
        "doc": ""
    },
    {
        "name": "GetTraceStackDepth",
        "args": [
            ""
        ],
        "doc": ""
    },
    {
        "name": "GetTriggerCounter",
        "args": [
            ""
        ],
        "doc": ""
    },
    {
        "name": "GetUnitIndex",
        "args": [
            "u"
        ],
        "doc": ""
    },
    {
        "name": "GiveUnits",
        "args": [
            "Count",
            "Unit",
            "Owner",
            "Where",
            "NewOwner"
        ],
        "doc": ""
    },
    {
        "name": "HighestScore",
        "args": [
            "ScoreType"
        ],
        "doc": ""
    },
    {
        "name": "IsConstExpr",
        "args": [
            "x"
        ],
        "doc": ""
    },
    {
        "name": "IsEUDVariable",
        "args": [
            "x"
        ],
        "doc": ""
    },
    {
        "name": "IsMapdataInitalized",
        "args": [
            ""
        ],
        "doc": ""
    },
    {
        "name": "IsPName",
        "args": [
            "player",
            "name"
        ],
        "doc": ""
    },
    {
        "name": "IsSCDBMap",
        "args": [
            ""
        ],
        "doc": ""
    },
    {
        "name": "IsUserCP",
        "args": [
            ""
        ],
        "doc": ""
    },
    {
        "name": "KillUnit",
        "args": [
            "Unit",
            "Player"
        ],
        "doc": ""
    },
    {
        "name": "KillUnitAt",
        "args": [
            "Count",
            "Unit",
            "Where",
            "ForPlayer"
        ],
        "doc": ""
    },
    {
        "name": "LeaderBoardComputerPlayers",
        "args": [
            "State"
        ],
        "doc": ""
    },
    {
        "name": "LeaderBoardControl",
        "args": [
            "Unit",
            "Label"
        ],
        "doc": ""
    },
    {
        "name": "LeaderBoardControlAt",
        "args": [
            "Unit",
            "Location",
            "Label"
        ],
        "doc": ""
    },
    {
        "name": "LeaderBoardGoalControl",
        "args": [
            "Goal",
            "Unit",
            "Label"
        ],
        "doc": ""
    },
    {
        "name": "LeaderBoardGoalControlAt",
        "args": [
            "Goal",
            "Unit",
            "Location",
            "Label"
        ],
        "doc": ""
    },
    {
        "name": "LeaderBoardGoalKills",
        "args": [
            "Goal",
            "Unit",
            "Label"
        ],
        "doc": ""
    },
    {
        "name": "LeaderBoardGoalResources",
        "args": [
            "Goal",
            "ResourceType",
            "Label"
        ],
        "doc": ""
    },
    {
        "name": "LeaderBoardGoalScore",
        "args": [
            "Goal",
            "ScoreType",
            "Label"
        ],
        "doc": ""
    },
    {
        "name": "LeaderBoardGreed",
        "args": [
            "Goal"
        ],
        "doc": ""
    },
    {
        "name": "LeaderBoardKills",
        "args": [
            "Unit",
            "Label"
        ],
        "doc": ""
    },
    {
        "name": "LeaderBoardResources",
        "args": [
            "ResourceType",
            "Label"
        ],
        "doc": ""
    },
    {
        "name": "LeaderBoardScore",
        "args": [
            "ScoreType",
            "Label"
        ],
        "doc": ""
    },
    {
        "name": "LeastKills",
        "args": [
            "Unit"
        ],
        "doc": ""
    },
    {
        "name": "LeastResources",
        "args": [
            "ResourceType"
        ],
        "doc": ""
    },
    {
        "name": "List2Assignable",
        "args": [
            "l"
        ],
        "doc": ""
    },
    {
        "name": "LoadMap",
        "args": [
            "fname"
        ],
        "doc": "Load basemap from fname\n\n    :param fname: Path for basemap.\n    "
    },
    {
        "name": "LowestScore",
        "args": [
            "ScoreType"
        ],
        "doc": ""
    },
    {
        "name": "MPQAddFile",
        "args": [
            "fname",
            "content",
            "isWave=False"
        ],
        "doc": "Add file/wave to output map.\n\n    :param fname: Desired filename in mpq\n    :param content: Content to put inside.\n    :param isWave: Is file wave file? Wave file can be lossy compressed if this\n        flag is set to True.\n\n    .. note::\n        This function may error if duplicate filenames is found. However, not\n        all duplicated filenames are guaranteed to be catched here. Some of\n        them may be catched at UpdateMPQ(internal) function.\n    "
    },
    {
        "name": "MPQAddWave",
        "args": [
            "fname",
            "content"
        ],
        "doc": "Add wave to output map.\n\n    :param fname: Desired filename in mpq\n    :param content: Content to put inside.\n\n    .. note:: See `MPQAddFile` for more info\n    "
    },
    {
        "name": "MPQCheckFile",
        "args": [
            "fname"
        ],
        "doc": "Check if filename is already exist.\n\n    :param fname: Desired filename in mpq\n    "
    },
    {
        "name": "Memory",
        "args": [
            "dest",
            "cmptype",
            "value"
        ],
        "doc": ""
    },
    {
        "name": "MemoryEPD",
        "args": [
            "dest",
            "cmptype",
            "value"
        ],
        "doc": ""
    },
    {
        "name": "MemoryX",
        "args": [
            "dest",
            "cmptype",
            "value",
            "mask"
        ],
        "doc": ""
    },
    {
        "name": "MemoryXEPD",
        "args": [
            "dest",
            "cmptype",
            "value",
            "mask"
        ],
        "doc": ""
    },
    {
        "name": "MinimapPing",
        "args": [
            "Where"
        ],
        "doc": ""
    },
    {
        "name": "ModifyUnitEnergy",
        "args": [
            "Count",
            "Unit",
            "Owner",
            "Where",
            "Percent"
        ],
        "doc": ""
    },
    {
        "name": "ModifyUnitHangarCount",
        "args": [
            "Add",
            "Count",
            "Unit",
            "Owner",
            "Where"
        ],
        "doc": ""
    },
    {
        "name": "ModifyUnitHitPoints",
        "args": [
            "Count",
            "Unit",
            "Owner",
            "Where",
            "Percent"
        ],
        "doc": ""
    },
    {
        "name": "ModifyUnitResourceAmount",
        "args": [
            "Count",
            "Owner",
            "Where",
            "NewValue"
        ],
        "doc": ""
    },
    {
        "name": "ModifyUnitShields",
        "args": [
            "Count",
            "Unit",
            "Owner",
            "Where",
            "Percent"
        ],
        "doc": ""
    },
    {
        "name": "MostKills",
        "args": [
            "Unit"
        ],
        "doc": ""
    },
    {
        "name": "MostResources",
        "args": [
            "ResourceType"
        ],
        "doc": ""
    },
    {
        "name": "MoveLocation",
        "args": [
            "Location",
            "OnUnit",
            "Owner",
            "DestLocation"
        ],
        "doc": ""
    },
    {
        "name": "MoveUnit",
        "args": [
            "Count",
            "UnitType",
            "Owner",
            "StartLocation",
            "DestLocation"
        ],
        "doc": ""
    },
    {
        "name": "MuteUnitSpeech",
        "args": [
            ""
        ],
        "doc": ""
    },
    {
        "name": "Never",
        "args": [
            ""
        ],
        "doc": ""
    },
    {
        "name": "NextTrigger",
        "args": [
            ""
        ],
        "doc": ""
    },
    {
        "name": "NonSeqCompute",
        "args": [
            "assignpairs"
        ],
        "doc": ""
    },
    {
        "name": "Opponents",
        "args": [
            "Player",
            "Comparison",
            "Number"
        ],
        "doc": ""
    },
    {
        "name": "Order",
        "args": [
            "Unit",
            "Owner",
            "StartLocation",
            "OrderType",
            "DestLocation"
        ],
        "doc": ""
    },
    {
        "name": "PColor",
        "args": [
            "i"
        ],
        "doc": ""
    },
    {
        "name": "PName",
        "args": [
            "x"
        ],
        "doc": ""
    },
    {
        "name": "PRT_SetInliningRate",
        "args": [
            "rate"
        ],
        "doc": " Set how much triggers will be inlined into STR section. "
    },
    {
        "name": "PRT_SkipPayloadRelocator",
        "args": [
            "enable"
        ],
        "doc": ""
    },
    {
        "name": "PTrigger",
        "args": [
            "players",
            "conditions=None",
            "actions=None"
        ],
        "doc": "Execute trigger by player basis\n\n    :param players: Players the trigger should execute with. When Current\n        Player specifies any of the players, trigger will execute.\n    :param conditions: List of conditions. If all conditions are met, then\n        actions will be executed.\n    :param actions: List of actions.\n    "
    },
    {
        "name": "PauseGame",
        "args": [
            ""
        ],
        "doc": ""
    },
    {
        "name": "PauseTimer",
        "args": [
            ""
        ],
        "doc": ""
    },
    {
        "name": "PlayWAV",
        "args": [
            "WAVName"
        ],
        "doc": ""
    },
    {
        "name": "PopTriggerScope",
        "args": [
            ""
        ],
        "doc": ""
    },
    {
        "name": "PreserveTrigger",
        "args": [
            ""
        ],
        "doc": ""
    },
    {
        "name": "PushTriggerScope",
        "args": [
            ""
        ],
        "doc": ""
    },
    {
        "name": "RandList",
        "args": [
            "lst"
        ],
        "doc": ""
    },
    {
        "name": "RegisterCreatePayloadCallback",
        "args": [
            "f"
        ],
        "doc": ""
    },
    {
        "name": "RemoveUnit",
        "args": [
            "Unit",
            "Player"
        ],
        "doc": ""
    },
    {
        "name": "RemoveUnitAt",
        "args": [
            "Count",
            "Unit",
            "Where",
            "ForPlayer"
        ],
        "doc": ""
    },
    {
        "name": "RlocInt",
        "args": [
            "offset",
            "rlocmode"
        ],
        "doc": ""
    },
    {
        "name": "RunAIScript",
        "args": [
            "Script"
        ],
        "doc": ""
    },
    {
        "name": "RunAIScriptAt",
        "args": [
            "Script",
            "Where"
        ],
        "doc": ""
    },
    {
        "name": "SCMD2Text",
        "args": [
            "s"
        ],
        "doc": ""
    },
    {
        "name": "SaveMap",
        "args": [
            "fname",
            "rootf",
            "*",
            "sectorSize=None"
        ],
        "doc": "Save output map with root function.\n\n    :param fname: Path for output map.\n    :param rootf: Main entry function.\n    "
    },
    {
        "name": "Score",
        "args": [
            "Player",
            "ScoreType",
            "Comparison",
            "Number"
        ],
        "doc": ""
    },
    {
        "name": "SeqCompute",
        "args": [
            "assignpairs"
        ],
        "doc": ""
    },
    {
        "name": "SetAllianceStatus",
        "args": [
            "Player",
            "Status"
        ],
        "doc": ""
    },
    {
        "name": "SetCountdownTimer",
        "args": [
            "TimeModifier",
            "Time"
        ],
        "doc": ""
    },
    {
        "name": "SetCurrentPlayer",
        "args": [
            "p"
        ],
        "doc": ""
    },
    {
        "name": "SetDeaths",
        "args": [
            "Player",
            "Modifier",
            "Number",
            "Unit"
        ],
        "doc": ""
    },
    {
        "name": "SetDeathsX",
        "args": [
            "Player",
            "Modifier",
            "Number",
            "Unit",
            "Mask"
        ],
        "doc": ""
    },
    {
        "name": "SetDoodadState",
        "args": [
            "State",
            "Unit",
            "Owner",
            "Where"
        ],
        "doc": ""
    },
    {
        "name": "SetInvincibility",
        "args": [
            "State",
            "Unit",
            "Owner",
            "Where"
        ],
        "doc": ""
    },
    {
        "name": "SetKills",
        "args": [
            "Player",
            "Modifier",
            "Number",
            "Unit"
        ],
        "doc": ""
    },
    {
        "name": "SetMemory",
        "args": [
            "dest",
            "modtype",
            "value"
        ],
        "doc": ""
    },
    {
        "name": "SetMemoryEPD",
        "args": [
            "dest",
            "modtype",
            "value"
        ],
        "doc": ""
    },
    {
        "name": "SetMemoryX",
        "args": [
            "dest",
            "modtype",
            "value",
            "mask"
        ],
        "doc": ""
    },
    {
        "name": "SetMemoryXEPD",
        "args": [
            "epd",
            "modtype",
            "value",
            "mask"
        ],
        "doc": ""
    },
    {
        "name": "SetMissionObjectives",
        "args": [
            "Text"
        ],
        "doc": ""
    },
    {
        "name": "SetNextPtr",
        "args": [
            "trg",
            "dest"
        ],
        "doc": ""
    },
    {
        "name": "SetNextScenario",
        "args": [
            "ScenarioName"
        ],
        "doc": ""
    },
    {
        "name": "SetNextTrigger",
        "args": [
            "trg"
        ],
        "doc": " For optimization purpose, one may call this function directly "
    },
    {
        "name": "SetPName",
        "args": [
            "player",
            "*name"
        ],
        "doc": ""
    },
    {
        "name": "SetPNamef",
        "args": [
            "player",
            "format_string",
            "*args"
        ],
        "doc": ""
    },
    {
        "name": "SetResources",
        "args": [
            "Player",
            "Modifier",
            "Amount",
            "ResourceType"
        ],
        "doc": ""
    },
    {
        "name": "SetScore",
        "args": [
            "Player",
            "Modifier",
            "Amount",
            "ScoreType"
        ],
        "doc": ""
    },
    {
        "name": "SetSwitch",
        "args": [
            "Switch",
            "State"
        ],
        "doc": ""
    },
    {
        "name": "SetVariables",
        "args": [
            "srclist",
            "dstlist",
            "mdtlist=None"
        ],
        "doc": ""
    },
    {
        "name": "Switch",
        "args": [
            "Switch",
            "State"
        ],
        "doc": ""
    },
    {
        "name": "TalkingPortrait",
        "args": [
            "Unit",
            "Time"
        ],
        "doc": ""
    },
    {
        "name": "TextFX_FadeIn",
        "args": [
            "*args",
            "color=None",
            "wait=1",
            "reset=True",
            "tag=None",
            "encoding='UTF-8'"
        ],
        "doc": "Print multiple string / number and apply color from Left To Right\n\n    Keyword arguments:\n    color -- tuple of color codes (default 0x03, 0x04, 0x05, 0x14)\n    wait  -- time interval between effect (default 1)\n    reset -- automatically reset when didn't run for a moment (default True)\n    tag   -- internal tag and identifier (default: vargs)\n    "
    },
    {
        "name": "TextFX_FadeOut",
        "args": [
            "*args",
            "color=None",
            "wait=1",
            "reset=True",
            "tag=None",
            "encoding='UTF-8'"
        ],
        "doc": "Print multiple string / number and apply color from Left To Right\n\n    Keyword arguments:\n    color -- tuple of color codes (default 0x03, 0x04, 0x05, 0x14)\n    wait  -- time interval between effect (default 1)\n    reset -- automatically reset when didn't run for a moment (default True)\n    tag   -- internal tag and identifier (default: vargs)\n    "
    },
    {
        "name": "TextFX_Remove",
        "args": [
            "tag"
        ],
        "doc": ""
    },
    {
        "name": "TextFX_SetTimer",
        "args": [
            "tag",
            "modtype",
            "value"
        ],
        "doc": ""
    },
    {
        "name": "Transmission",
        "args": [
            "Unit",
            "Where",
            "WAVName",
            "TimeModifier",
            "Time",
            "Text",
            "AlwaysDisplay=4"
        ],
        "doc": ""
    },
    {
        "name": "TrigTriggerBegin",
        "args": [
            "player"
        ],
        "doc": ""
    },
    {
        "name": "TrigTriggerEnd",
        "args": [
            "player"
        ],
        "doc": ""
    },
    {
        "name": "Trigger",
        "args": [
            "conditions=None",
            "actions=None",
            "preserved=True"
        ],
        "doc": "General easy-to-use trigger\n\n    :param conditions: List of conditions. If there are none, trigger will\n        always execute.\n    :param actions: List of actions. If there are none, trigger will have no\n        actions.\n    :param preserved: Is trigger preserved? True by default.\n\n    .. note::\n        This is 'extended' trigger. All conditions and variables can contain\n        `EUDVariable` object, and there may be more than 16 conditions and 64\n        actions. Trigger internally uses `RawTrigger`.\n    "
    },
    {
        "name": "UnMuteUnitSpeech",
        "args": [
            ""
        ],
        "doc": ""
    },
    {
        "name": "UnpauseGame",
        "args": [
            ""
        ],
        "doc": ""
    },
    {
        "name": "UnpauseTimer",
        "args": [
            ""
        ],
        "doc": ""
    },
    {
        "name": "VProc",
        "args": [
            "v",
            "actions"
        ],
        "doc": ""
    },
    {
        "name": "Victory",
        "args": [
            ""
        ],
        "doc": ""
    },
    {
        "name": "Wait",
        "args": [
            "Time"
        ],
        "doc": ""
    },
    {
        "name": "b2i1",
        "args": [
            "b",
            "index=0"
        ],
        "doc": ""
    },
    {
        "name": "b2i2",
        "args": [
            "b",
            "index=0"
        ],
        "doc": ""
    },
    {
        "name": "b2i4",
        "args": [
            "b",
            "index=0"
        ],
        "doc": ""
    },
    {
        "name": "b2u",
        "args": [
            "b"
        ],
        "doc": ""
    },
    {
        "name": "cachedfunc",
        "args": [
            "function"
        ],
        "doc": ""
    },
    {
        "name": "createEncoder",
        "args": [
            "f"
        ],
        "doc": ""
    },
    {
        "name": "ep_assert",
        "args": [
            "statement",
            "message='Assertionfailed'"
        ],
        "doc": ""
    },
    {
        "name": "ep_eprint",
        "args": [
            "*args",
            "**kwargs"
        ],
        "doc": ""
    },
    {
        "name": "ep_warn",
        "args": [
            "message"
        ],
        "doc": ""
    },
    {
        "name": "epsCompile",
        "args": [
            "filename",
            "bCode"
        ],
        "doc": ""
    },
    {
        "name": "eudplibVersion",
        "args": [
            ""
        ],
        "doc": ""
    },
    {
        "name": "f_addcurpl",
        "args": [
            "cp"
        ],
        "doc": "Add current player value.\n\n    eudplib internally caches the current player value,\n    so this function add to that value.\n    "
    },
    {
        "name": "f_addloc",
        "args": [
            "locID",
            "*coords"
        ],
        "doc": ""
    },
    {
        "name": "f_bitand",
        "args": [
            "a",
            "b"
        ],
        "doc": "Calculate a & b"
    },
    {
        "name": "f_bitlshift",
        "args": [
            "a",
            "b",
            "**kwargs"
        ],
        "doc": " Calculate a << b "
    },
    {
        "name": "f_bitnand",
        "args": [
            "a",
            "b"
        ],
        "doc": "Calculate ~(a & b)"
    },
    {
        "name": "f_bitnor",
        "args": [
            "a",
            "b"
        ],
        "doc": "Calculate ~(a | b)"
    },
    {
        "name": "f_bitnot",
        "args": [
            "a"
        ],
        "doc": "Calculate ~a"
    },
    {
        "name": "f_bitnxor",
        "args": [
            "a",
            "b"
        ],
        "doc": "Calculate ~(a ^ b)"
    },
    {
        "name": "f_bitor",
        "args": [
            "a",
            "b"
        ],
        "doc": "Calculate a | b"
    },
    {
        "name": "f_bitrshift",
        "args": [
            "a",
            "b"
        ],
        "doc": " Calculate a >> b "
    },
    {
        "name": "f_bread",
        "args": [
            "ptr"
        ],
        "doc": ""
    },
    {
        "name": "f_bread_cp",
        "args": [
            "cpo",
            "subp"
        ],
        "doc": ""
    },
    {
        "name": "f_bwrite",
        "args": [
            "ptr",
            "b"
        ],
        "doc": ""
    },
    {
        "name": "f_bwrite_cp",
        "args": [
            "cpo",
            "subp",
            "b"
        ],
        "doc": ""
    },
    {
        "name": "f_bwrite_epd",
        "args": [
            "epd",
            "subp",
            "b"
        ],
        "doc": ""
    },
    {
        "name": "f_cpchar_print",
        "args": [
            "*args",
            "EOS=True",
            "encoding='UTF-8'"
        ],
        "doc": ""
    },
    {
        "name": "f_cpstr_print",
        "args": [
            "*args",
            "EOS=True",
            "encoding='UTF-8'"
        ],
        "doc": "Print multiple string / number to CurrentPlayer.\n\n    :param args: Things to print\n\n    "
    },
    {
        "name": "f_cunitepdread_cp",
        "args": [
            "cpo"
        ],
        "doc": ""
    },
    {
        "name": "f_cunitread_cp",
        "args": [
            "cpo"
        ],
        "doc": ""
    },
    {
        "name": "f_dbstr_print",
        "args": [
            "dst",
            "*args",
            "EOS=True",
            "encoding='UTF-8'"
        ],
        "doc": "Print multiple string / number to dst.\n\n    :param dst: Destination address (Not EPD player)\n    :param args: Things to print\n\n    "
    },
    {
        "name": "f_dilateloc",
        "args": [
            "locID",
            "*coords"
        ],
        "doc": ""
    },
    {
        "name": "f_div",
        "args": [
            "a",
            "b",
            "**kwargs"
        ],
        "doc": "Calculate (a//b, a%b) "
    },
    {
        "name": "f_dwadd_cp",
        "args": [
            "cpo",
            "value"
        ],
        "doc": ""
    },
    {
        "name": "f_dwadd_epd",
        "args": [
            "targetplayer",
            "value"
        ],
        "doc": ""
    },
    {
        "name": "f_dwepdread_cp",
        "args": [
            "cpo",
            "**kwargs"
        ],
        "doc": ""
    },
    {
        "name": "f_dwepdread_epd_safe",
        "args": [
            "*args",
            "**kwargs"
        ],
        "doc": ""
    },
    {
        "name": "f_dwread",
        "args": [
            "ptr"
        ],
        "doc": ""
    },
    {
        "name": "f_dwread_cp",
        "args": [
            "cpo",
            "**kwargs"
        ],
        "doc": ""
    },
    {
        "name": "f_dwread_epd_safe",
        "args": [
            "*args",
            "**kwargs"
        ],
        "doc": ""
    },
    {
        "name": "f_dwsubtract_cp",
        "args": [
            "cpo",
            "value"
        ],
        "doc": ""
    },
    {
        "name": "f_dwsubtract_epd",
        "args": [
            "targetplayer",
            "value"
        ],
        "doc": ""
    },
    {
        "name": "f_dwwrite",
        "args": [
            "ptr",
            "dw"
        ],
        "doc": ""
    },
    {
        "name": "f_dwwrite_cp",
        "args": [
            "cpo",
            "value"
        ],
        "doc": ""
    },
    {
        "name": "f_dwwrite_epd",
        "args": [
            "targetplayer",
            "value"
        ],
        "doc": ""
    },
    {
        "name": "f_epdread_cp",
        "args": [
            "cpo",
            "**kwargs"
        ],
        "doc": ""
    },
    {
        "name": "f_epdread_epd",
        "args": [
            "targetplayer"
        ],
        "doc": ""
    },
    {
        "name": "f_epdread_epd_safe",
        "args": [
            "*args",
            "**kwargs"
        ],
        "doc": ""
    },
    {
        "name": "f_eprintf",
        "args": [
            "format_string",
            "*args"
        ],
        "doc": ""
    },
    {
        "name": "f_eprintln",
        "args": [
            "*args"
        ],
        "doc": ""
    },
    {
        "name": "f_eprintln2",
        "args": [
            "*args"
        ],
        "doc": ""
    },
    {
        "name": "f_flagread_epd",
        "args": [
            "targetplayer",
            "*flags",
            "_readerdict={}"
        ],
        "doc": ""
    },
    {
        "name": "f_getlocTL",
        "args": [
            "locID",
            "**kwargs"
        ],
        "doc": ""
    },
    {
        "name": "f_getseed",
        "args": [
            ""
        ],
        "doc": ""
    },
    {
        "name": "f_getuserplayerid",
        "args": [
            ""
        ],
        "doc": ""
    },
    {
        "name": "f_maskread_cp",
        "args": [
            "cpoffset",
            "mask",
            "_fdict={}"
        ],
        "doc": ""
    },
    {
        "name": "f_maskread_epd",
        "args": [
            "targetplayer",
            "mask",
            "_fdict={}"
        ],
        "doc": ""
    },
    {
        "name": "f_mul",
        "args": [
            "a",
            "b",
            "**kwargs"
        ],
        "doc": "Calculate a * b"
    },
    {
        "name": "f_parse",
        "args": [
            "dst",
            "radix=10"
        ],
        "doc": ""
    },
    {
        "name": "f_posread_cp",
        "args": [
            "cpoffset"
        ],
        "doc": ""
    },
    {
        "name": "f_posread_epd",
        "args": [
            "epd"
        ],
        "doc": ""
    },
    {
        "name": "f_printAt",
        "args": [
            "line",
            "format_string",
            "*args"
        ],
        "doc": ""
    },
    {
        "name": "f_println",
        "args": [
            "format_string",
            "*args"
        ],
        "doc": ""
    },
    {
        "name": "f_readgen_cp",
        "args": [
            "mask",
            "*args",
            "docstring=None",
            "_fdict={8388600:{((0",
            ")",
            "(b'|\\x00S\\x00'",
            ")):<functionf_readgen_cp.<locals>.f_read_cp_templateat0x0459FD60>",
            "((0",
            "-1452249)",
            "(b'|\\x00S\\x00'",
            "b'|\\x00d\\x01\\x1a\\x00S\\x00')):<functionf_readgen_cp.<locals>.f_read_cp_templateat0x045A7028>}}"
        ],
        "doc": ""
    },
    {
        "name": "f_readgen_epd",
        "args": [
            "mask",
            "*args",
            "docstring=None",
            "_fdict={8388600:{((0",
            ")",
            "(b'|\\x00S\\x00'",
            ")):<eudplib.core.eudfunc.eudtypedfuncn.EUDTypedFuncNobjectat0x0459DA00>",
            "((0",
            "-1452249)",
            "(b'|\\x00S\\x00'",
            "b'|\\x00d\\x01\\x1a\\x00S\\x00')):<eudplib.core.eudfunc.eudtypedfuncn.EUDTypedFuncNobjectat0x0459DB38>}}"
        ],
        "doc": ""
    },
    {
        "name": "f_setcurpl",
        "args": [
            "cp"
        ],
        "doc": ""
    },
    {
        "name": "f_setcurpl2cpcache",
        "args": [
            "v=[]",
            "actions=[]"
        ],
        "doc": ""
    },
    {
        "name": "f_setloc",
        "args": [
            "locID",
            "*coords"
        ],
        "doc": ""
    },
    {
        "name": "f_setloc_epd",
        "args": [
            "locID",
            "epd"
        ],
        "doc": ""
    },
    {
        "name": "f_settbl",
        "args": [
            "tblID",
            "offset",
            "*args",
            "encoding='cp949'"
        ],
        "doc": ""
    },
    {
        "name": "f_settbl2",
        "args": [
            "tblID",
            "offset",
            "*args",
            "encoding='cp949'"
        ],
        "doc": ""
    },
    {
        "name": "f_settblf",
        "args": [
            "tblID",
            "offset",
            "format_string",
            "*args",
            "encoding='cp949'"
        ],
        "doc": ""
    },
    {
        "name": "f_settblf2",
        "args": [
            "tblID",
            "offset",
            "format_string",
            "*args",
            "encoding='cp949'"
        ],
        "doc": ""
    },
    {
        "name": "f_simpleprint",
        "args": [
            "*args",
            "spaced=True"
        ],
        "doc": ""
    },
    {
        "name": "f_sprintf",
        "args": [
            "dst",
            "format_string",
            "*args",
            "EOS=True",
            "encoding='UTF-8'"
        ],
        "doc": ""
    },
    {
        "name": "f_sprintf_cp",
        "args": [
            "format_string",
            "*args",
            "EOS=True",
            "encoding='UTF-8'"
        ],
        "doc": ""
    },
    {
        "name": "f_srand",
        "args": [
            "seed"
        ],
        "doc": ""
    },
    {
        "name": "f_wread",
        "args": [
            "ptr"
        ],
        "doc": ""
    },
    {
        "name": "f_wread_cp",
        "args": [
            "cpo",
            "subp"
        ],
        "doc": ""
    },
    {
        "name": "f_wwrite",
        "args": [
            "ptr",
            "w"
        ],
        "doc": ""
    },
    {
        "name": "f_wwrite_cp",
        "args": [
            "cpo",
            "subp",
            "w"
        ],
        "doc": ""
    },
    {
        "name": "f_wwrite_epd",
        "args": [
            "epd",
            "subp",
            "w"
        ],
        "doc": ""
    },
    {
        "name": "find_data_file",
        "args": [
            "filename",
            "file"
        ],
        "doc": ""
    },
    {
        "name": "i2b1",
        "args": [
            "i"
        ],
        "doc": ""
    },
    {
        "name": "i2b2",
        "args": [
            "i"
        ],
        "doc": ""
    },
    {
        "name": "i2b4",
        "args": [
            "i"
        ],
        "doc": ""
    },
    {
        "name": "isStrict",
        "args": [
            ""
        ],
        "doc": ""
    },
    {
        "name": "isUnproxyInstance",
        "args": [
            "x",
            "cls"
        ],
        "doc": ""
    },
    {
        "name": "setEpsGlobals",
        "args": [
            "globalList"
        ],
        "doc": ""
    },
    {
        "name": "setStrict",
        "args": [
            "mode"
        ],
        "doc": ""
    },
    {
        "name": "toRlocInt",
        "args": [
            "x"
        ],
        "doc": "Convert int/RlocInt to rlocint"
    },
    {
        "name": "u2b",
        "args": [
            "s"
        ],
        "doc": ""
    },
    {
        "name": "u2utf8",
        "args": [
            "s"
        ],
        "doc": ""
    },
    {
        "name": "unProxy",
        "args": [
            "x"
        ],
        "doc": ""
    },
    {
        "name": "DisplayTextAt",
        "args": [
            "line",
            "text"
        ],
        "doc": ""
    },
    {
        "name": "GetMapStringAddr",
        "args": [
            "strId"
        ],
        "doc": ""
    },
    {
        "name": "GetTBLAddr",
        "args": [
            "tblId"
        ],
        "doc": ""
    },
    {
        "name": "QueueGameCommand",
        "args": [
            "data",
            "size"
        ],
        "doc": "Queue game command to packet queue.\n\n    Starcraft periodically broadcasts game packets to other player. Game\n    packets are stored to queue, and this function add data to that queue, so\n    that SC can broadcast it.\n\n    :param data: Data to put in queue\n    :param size: Size of data\n\n    .. note::\n        If packet queue is full, this function fails. This behavior is silent\n        without any warning or error, since this behavior shouldn't happen in\n        common situations. So **Don't use this function too much in a frame.**\n\n    "
    },
    {
        "name": "QueueGameCommand_MergeArchon",
        "args": [
            ""
        ],
        "doc": ""
    },
    {
        "name": "QueueGameCommand_MergeDarkArchon",
        "args": [
            ""
        ],
        "doc": ""
    },
    {
        "name": "QueueGameCommand_MinimapPing",
        "args": [
            "xy"
        ],
        "doc": "Queue minimap ping action.\n\n    :param xy: (y * 65536) + x, where (x, y) is coordinate for right click.\n    "
    },
    {
        "name": "QueueGameCommand_PauseGame",
        "args": [
            ""
        ],
        "doc": ""
    },
    {
        "name": "QueueGameCommand_QueuedRightClick",
        "args": [
            "xy"
        ],
        "doc": "Queue right click action.\n\n    :param xy: (y * 65536) + x, where (x, y) is coordinate for right click.\n    "
    },
    {
        "name": "QueueGameCommand_RestartGame",
        "args": [
            ""
        ],
        "doc": ""
    },
    {
        "name": "QueueGameCommand_ResumeGame",
        "args": [
            ""
        ],
        "doc": ""
    },
    {
        "name": "QueueGameCommand_RightClick",
        "args": [
            "xy"
        ],
        "doc": "Queue right click action.\n\n    :param xy: (y * 65536) + x, where (x, y) is coordinate for right click.\n    "
    },
    {
        "name": "QueueGameCommand_Select",
        "args": [
            "n",
            "ptrList"
        ],
        "doc": ""
    },
    {
        "name": "QueueGameCommand_TrainUnit",
        "args": [
            "unit"
        ],
        "doc": ""
    },
    {
        "name": "QueueGameCommand_UseCheat",
        "args": [
            "flags"
        ],
        "doc": ""
    },
    {
        "name": "RunTrigTrigger",
        "args": [
            ""
        ],
        "doc": ""
    },
    {
        "name": "f_atan2",
        "args": [
            "y",
            "x"
        ],
        "doc": ""
    },
    {
        "name": "f_bitsplit",
        "args": [
            "a"
        ],
        "doc": "Splits bit of given number\n\n    :returns: int bits[32];  // bits[i] = (ith bit from LSB of a is set)\n    "
    },
    {
        "name": "f_bitxor",
        "args": [
            "a",
            "b"
        ],
        "doc": "Calculate a ^ b"
    },
    {
        "name": "f_blockpatch_epd",
        "args": [
            "dstepd",
            "srcepd",
            "dwn"
        ],
        "doc": " Patch 4*dwn bytes of memory at dstepd with memory of srcepd.\n\n    .. note::\n        After calling this function, contents at srcepd memory may change.\n        Since new contents are required for :py:`f_unpatchall` to run, you\n        shouldn't use the memory for any other means.\n    "
    },
    {
        "name": "f_bread_epd",
        "args": [
            "epd",
            "subp"
        ],
        "doc": ""
    },
    {
        "name": "f_cp949_to_utf8_cpy",
        "args": [
            "dst",
            "src"
        ],
        "doc": ""
    },
    {
        "name": "f_cpchar_adddw",
        "args": [
            "number"
        ],
        "doc": ""
    },
    {
        "name": "f_cpstr_adddw",
        "args": [
            "number"
        ],
        "doc": "Print number as string to CurrentPlayer.\n\n    :param number: DWORD to print\n    "
    },
    {
        "name": "f_cpstr_addptr",
        "args": [
            "number"
        ],
        "doc": "Print number as string to CurrentPlayer.\n\n    :param number: DWORD to print\n    "
    },
    {
        "name": "f_read_epd_template",
        "args": [
            "targetplayer"
        ],
        "doc": ""
    },
    {
        "name": "f_read_epd_template",
        "args": [
            "targetplayer"
        ],
        "doc": ""
    },
    {
        "name": "f_dbstr_adddw",
        "args": [
            "dst",
            "number"
        ],
        "doc": "Print number as string to dst.\n\n    :param dst: Destination address (Not EPD player)\n    :param number: DWORD to print\n\n    :returns: dst + strlen(itoa(number))\n    "
    },
    {
        "name": "f_dbstr_addptr",
        "args": [
            "dst",
            "number"
        ],
        "doc": "Print number as string to dst.\n\n    :param dst: Destination address (Not EPD player)\n    :param number: DWORD to print\n\n    :returns: dst + strlen(itoa(number))\n    "
    },
    {
        "name": "f_dbstr_addstr",
        "args": [
            "dst",
            "src"
        ],
        "doc": "Print string as string to dst. Same as strcpy except of return value.\n\n    :param dst: Destination address (Not EPD player)\n    :param src: Source address (Not EPD player)\n\n    :returns: dst + strlen(src)\n    "
    },
    {
        "name": "f_dbstr_addstr_epd",
        "args": [
            "dst",
            "epd"
        ],
        "doc": "Print string as string to dst. Same as strcpy except of return value.\n\n    :param dst: Destination address (Not EPD player)\n    :param epd: Source EPD player\n\n    :returns: dst + strlen_epd(epd)\n    "
    },
    {
        "name": "f_dwbreak",
        "args": [
            "number"
        ],
        "doc": "Get hiword/loword/4byte of dword"
    },
    {
        "name": "f_dwbreak2",
        "args": [
            "number"
        ],
        "doc": "Get hiword/loword/4byte of dword"
    },
    {
        "name": "f_dwepdread_epd",
        "args": [
            "targetplayer"
        ],
        "doc": ""
    },
    {
        "name": "f_dwpatch_epd",
        "args": [
            "dstepd",
            "value"
        ],
        "doc": ""
    },
    {
        "name": "f_dwrand",
        "args": [
            ""
        ],
        "doc": ""
    },
    {
        "name": "f_dwread_epd",
        "args": [
            "targetplayer"
        ],
        "doc": ""
    },
    {
        "name": "f_getcurpl",
        "args": [
            ""
        ],
        "doc": "Get current player value.\n\n    eudplib internally caches the current player value, so this function uses\n    that value if the value is valid. Otherwise, update the current player\n    cache and return it.\n    "
    },
    {
        "name": "f_getgametick",
        "args": [
            ""
        ],
        "doc": "Get current game tick value."
    },
    {
        "name": "f_gettextptr",
        "args": [
            ""
        ],
        "doc": ""
    },
    {
        "name": "f_lengthdir",
        "args": [
            "length",
            "angle"
        ],
        "doc": ""
    },
    {
        "name": "f_memcmp",
        "args": [
            "buf1",
            "buf2",
            "count"
        ],
        "doc": ""
    },
    {
        "name": "f_memcpy",
        "args": [
            "dst",
            "src",
            "copylen"
        ],
        "doc": ""
    },
    {
        "name": "f_playerexist",
        "args": [
            "player"
        ],
        "doc": "Check if player has not left the game.\n\n    :returns: 1 if player exists, 0 if not.\n    "
    },
    {
        "name": "f_raise_CCMU",
        "args": [
            "player"
        ],
        "doc": ""
    },
    {
        "name": "f_rand",
        "args": [
            ""
        ],
        "doc": ""
    },
    {
        "name": "f_randomize",
        "args": [
            ""
        ],
        "doc": ""
    },
    {
        "name": "f_repmovsd_epd",
        "args": [
            "dstepdp",
            "srcepdp",
            "copydwn"
        ],
        "doc": ""
    },
    {
        "name": "f_sqrt",
        "args": [
            "n"
        ],
        "doc": ""
    },
    {
        "name": "f_strcmp",
        "args": [
            "s1",
            "s2"
        ],
        "doc": ""
    },
    {
        "name": "f_strcpy",
        "args": [
            "dst",
            "src"
        ],
        "doc": "\n    Strcpy equivilant in eudplib. Copy C-style string.\n\n    :param dst: Destination address (Not EPD player)\n    :param src: Source address (Not EPD player)\n\n    :return: dst\n    "
    },
    {
        "name": "f_strlen",
        "args": [
            "src"
        ],
        "doc": ""
    },
    {
        "name": "f_strlen_epd",
        "args": [
            "epd"
        ],
        "doc": ""
    },
    {
        "name": "f_strnstr",
        "args": [
            "string",
            "substring",
            "count"
        ],
        "doc": ""
    },
    {
        "name": "f_unpatchall",
        "args": [
            ""
        ],
        "doc": ""
    },
    {
        "name": "f_wread_epd",
        "args": [
            "epd",
            "subp"
        ],
        "doc": ""
    }
];