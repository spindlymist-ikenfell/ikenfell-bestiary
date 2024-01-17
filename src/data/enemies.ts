import { EnemyData } from "../types"

export const enemies: EnemyData[] = [
    {
        "ClassName": "EnemyAeldra",
        "Name": "Aeldra",
        "Categories": [
            "Flying",
            "Human"
        ],
        "HP": 500,
        "Pow": 58,
        "Def": 110,
        "Spd": 80,
        "Mov": 4,
        "Exp": 0,
        "Money": 0,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCibilsSweetest",
                        "ItemName": "Sadio's Sweetest",
                        "ItemSprite": "icons_5_18"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCibilsSweetest",
                        "ItemName": "Sadio's Sweetest",
                        "ItemSprite": "icons_5_18"
                    }
                ]
            },
            "Great": {
                "Operator": "OR",
                "List": [
                    {
                        "ItemType": "ItemRoseCordial",
                        "MaxRewarded": 99,
                        "MaxOwned": 99,
                        "ItemName": "Rose Cordial",
                        "ItemSprite": "icons_5_19"
                    },
                    {
                        "ItemType": "ItemCibilsSweetest",
                        "ItemName": "Sadio's Sweetest",
                        "ItemSprite": "icons_5_18"
                    }
                ]
            }
        },
        "Sprite": "battle_aeldra_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyAeldraBomb",
        "Name": "Crimson Node",
        "Categories": [
            "Magic"
        ],
        "HP": 999,
        "Pow": 50,
        "Def": 999,
        "Spd": 50,
        "Mov": 3,
        "Exp": 0,
        "Money": 0,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": "battle_aeldra_40_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyAeldraHand",
        "Name": "Underclaw",
        "Categories": [],
        "HP": 60,
        "Pow": 54,
        "Def": 110,
        "Spd": 60,
        "Mov": 3,
        "Exp": 0,
        "Money": 0,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": "battle_redhand_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyAgony",
        "Name": "Agony",
        "Categories": [
            "Giant",
            "Magic"
        ],
        "HP": 300,
        "Pow": 44,
        "Def": 75,
        "Spd": 80,
        "Mov": 4,
        "Exp": 400,
        "Money": 0,
        "Rewards": {
            "Operator": "AND",
            "List": [
                {
                    "ItemType": "ItemGhostCoin",
                    "ItemName": "Ghost Coin",
                    "ItemSprite": "icons_0_17"
                },
                {
                    "ItemType": "ItemGhostCoin",
                    "ItemName": "Ghost Coin",
                    "ItemSprite": "icons_0_17"
                }
            ]
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemSpecterAle",
                        "ItemName": "Specter Ale",
                        "ItemSprite": "icons_6_19"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemSpecterAle",
                        "ItemName": "Specter Ale",
                        "ItemSprite": "icons_6_19"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemSpecterAle",
                        "ItemName": "Specter Ale",
                        "ItemSprite": "icons_6_19"
                    },
                    {
                        "ItemType": "Blackstars",
                        "ItemName": "Blackstars",
                        "ItemSprite": "feet_7_2"
                    }
                ]
            }
        },
        "Sprite": "battle_agony_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyAgonyDrip",
        "Name": "Minor Spawn",
        "Categories": [
            "Flying",
            "Magic"
        ],
        "HP": 30,
        "Pow": 40,
        "Def": 73,
        "Spd": 50,
        "Mov": 3,
        "Exp": 0,
        "Money": 0,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": "battle_reddrip_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyAgonyDrip2",
        "Name": "Major Spawn",
        "Categories": [
            "Flying",
            "Magic"
        ],
        "HP": 30,
        "Pow": 40,
        "Def": 73,
        "Spd": 50,
        "Mov": 3,
        "Exp": 0,
        "Money": 0,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": "battle_redsplash_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyAllcat",
        "Name": "The Allcat",
        "Categories": [
            "Flying",
            "Giant"
        ],
        "HP": 300,
        "Pow": 62,
        "Def": 120,
        "Spd": 80,
        "Mov": 4,
        "Exp": 0,
        "Money": 0,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": "battle_allcat_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyAllcatGrey",
        "Name": "Sooty",
        "Categories": [
            "None"
        ],
        "HP": 40,
        "Pow": 58,
        "Def": 110,
        "Spd": 70,
        "Mov": 3,
        "Exp": 0,
        "Money": 0,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": null,
        "Notes": []
    },
    {
        "ClassName": "EnemyAllcatOrange",
        "Name": "Tabby",
        "Categories": [
            "None"
        ],
        "HP": 40,
        "Pow": 58,
        "Def": 110,
        "Spd": 70,
        "Mov": 3,
        "Exp": 0,
        "Money": 0,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": null,
        "Notes": []
    },
    {
        "ClassName": "EnemyAllcatSmall",
        "Name": "The Allcat",
        "Categories": [
            "None"
        ],
        "HP": 200,
        "Pow": 60,
        "Def": 120,
        "Spd": 80,
        "Mov": 4,
        "Exp": 0,
        "Money": 0,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": "battle_allcat_small_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyAllcatWhite",
        "Name": "Snowy",
        "Categories": [
            "None"
        ],
        "HP": 40,
        "Pow": 58,
        "Def": 110,
        "Spd": 70,
        "Mov": 3,
        "Exp": 0,
        "Money": 0,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": null,
        "Notes": []
    },
    {
        "ClassName": "EnemyAutochopper",
        "Name": "Autochopper",
        "Categories": [
            "Flying"
        ],
        "HP": 30,
        "Pow": 50,
        "Def": 90,
        "Spd": 60,
        "Mov": 3,
        "Exp": 40,
        "Money": 50,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": "battle_autochopper_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyAutochopper2",
        "Name": "Autochopper",
        "Categories": [],
        "HP": 30,
        "Pow": 50,
        "Def": 98,
        "Spd": 60,
        "Mov": 3,
        "Exp": 40,
        "Money": 50,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": "battle_autochopper_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyAutoeye",
        "Name": "Autoeye",
        "Categories": [],
        "HP": 40,
        "Pow": 52,
        "Def": 100,
        "Spd": 60,
        "Mov": 2,
        "Exp": 40,
        "Money": 50,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": "battle_autoeye_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyBax",
        "Name": "Bax",
        "Categories": [
            "Human"
        ],
        "HP": 7,
        "Pow": 10,
        "Def": 6,
        "Spd": 12,
        "Mov": 3,
        "Exp": 0,
        "Money": 0,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": "battle_bax_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyBeacon",
        "Name": "Beacon",
        "Categories": [
            "Magic"
        ],
        "HP": 30,
        "Pow": 10,
        "Def": 8,
        "Spd": 10,
        "Mov": 2,
        "Exp": 0,
        "Money": 0,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": "battle_firesprite_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyBee",
        "Name": "Bumbler",
        "Categories": [
            "Flying"
        ],
        "HP": 18,
        "Pow": 38,
        "Def": 56,
        "Spd": 45,
        "Mov": 4,
        "Exp": 25,
        "Money": 30,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemMintShroom",
                        "ItemName": "Mint Shroom",
                        "ItemSprite": "icons_9_16"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemMintShroom",
                        "ItemName": "Mint Shroom",
                        "ItemSprite": "icons_9_16"
                    }
                ]
            },
            "Great": {
                "Operator": "OR",
                "List": [
                    {
                        "ItemType": "ItemCibilsGreen",
                        "MaxRewarded": 1,
                        "MaxOwned": 3,
                        "ItemName": "Sadio's Green",
                        "ItemSprite": "icons_2_18"
                    },
                    {
                        "ItemType": "ItemMintShroom",
                        "ItemName": "Mint Shroom",
                        "ItemSprite": "icons_9_16"
                    }
                ]
            }
        },
        "Sprite": "battle_bee_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyBlackhat",
        "Name": "Blackhat",
        "Categories": [
            "Human"
        ],
        "HP": 50,
        "Pow": 12,
        "Def": 16,
        "Spd": 16,
        "Mov": 3,
        "Exp": 10,
        "Money": 0,
        "Rewards": {
            "Operator": "AND",
            "List": [
                {
                    "ItemType": "Seawater",
                    "ItemName": "Seawater",
                    "ItemSprite": "hats_2_2"
                }
            ]
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemBlueBlossom",
                        "ItemName": "Blue Blossom",
                        "ItemSprite": "icons_7_5"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemBlueBlossom",
                        "ItemName": "Blue Blossom",
                        "ItemSprite": "icons_7_5"
                    }
                ]
            },
            "Great": {
                "Operator": "OR",
                "List": [
                    {
                        "ItemType": "ItemBigBomb",
                        "MaxRewarded": 3,
                        "MaxOwned": 3,
                        "ItemName": "Big Bomb",
                        "ItemSprite": "icons_8_18"
                    },
                    {
                        "ItemType": "ItemBlueBlossom",
                        "ItemName": "Blue Blossom",
                        "ItemSprite": "icons_7_5"
                    }
                ]
            }
        },
        "Sprite": "battle_blackhat_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyBlackhatCleric",
        "Name": "Fetch",
        "Categories": [
            "Magic",
            "Human"
        ],
        "HP": 20,
        "Pow": 10,
        "Def": 16,
        "Spd": 16,
        "Mov": 3,
        "Exp": 10,
        "Money": 0,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemGoldBlossom",
                        "ItemName": "Gold Blossom",
                        "ItemSprite": "icons_8_5"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemBlueBlossom",
                        "ItemName": "Blue Blossom",
                        "ItemSprite": "icons_7_5"
                    }
                ]
            }
        },
        "Sprite": "battle_bcleric_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyBlackhatSafina",
        "Name": "Fetch",
        "Categories": [
            "Magic",
            "Human"
        ],
        "HP": 20,
        "Pow": 12,
        "Def": 16,
        "Spd": 16,
        "Mov": 4,
        "Exp": 10,
        "Money": 0,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemGoldBlossom",
                        "ItemName": "Gold Blossom",
                        "ItemSprite": "icons_8_5"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemThornBerries",
                        "ItemName": "Thorn Berries",
                        "ItemSprite": "icons_2_10"
                    }
                ]
            }
        },
        "Sprite": "battle_bsafina_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyBlackhatStudent",
        "Name": "Fetch",
        "Categories": [
            "Magic",
            "Human"
        ],
        "HP": 20,
        "Pow": 12,
        "Def": 16,
        "Spd": 16,
        "Mov": 3,
        "Exp": 10,
        "Money": 0,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemBlueBlossom",
                        "ItemName": "Blue Blossom",
                        "ItemSprite": "icons_7_5"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemSweetCake",
                        "ItemName": "Sweet Cake",
                        "ItemSprite": "icons_6_12"
                    }
                ]
            }
        },
        "Sprite": "battle_bstudent_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyBloodwyn",
        "Name": "Bloodwyn",
        "Categories": [
            "Giant"
        ],
        "HP": 240,
        "Pow": 35,
        "Def": 60,
        "Spd": 50,
        "Mov": 4,
        "Exp": 200,
        "Money": 0,
        "Rewards": {
            "Operator": "AND",
            "List": [
                {
                    "ItemType": "ItemBookOfSafety",
                    "ItemName": "Book of Safety",
                    "ItemSprite": "icons_6_17"
                },
                {
                    "ItemType": "ItemPrizeMedal",
                    "ItemName": "Prize Medal",
                    "ItemSprite": "icons_3_16"
                },
                {
                    "ItemType": "ItemPrizeMedal",
                    "ItemName": "Prize Medal",
                    "ItemSprite": "icons_3_16"
                }
            ]
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemBookOfLove",
                        "ItemName": "Book of Love",
                        "ItemSprite": "icons_2_17"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemBookOfLove",
                        "ItemName": "Book of Love",
                        "ItemSprite": "icons_2_17"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemBookOfLove",
                        "ItemName": "Book of Love",
                        "ItemSprite": "icons_2_17"
                    },
                    {
                        "ItemType": "TheBattleWitch",
                        "ItemName": "The Battle Witch",
                        "ItemSprite": "armor_2_3"
                    }
                ]
            }
        },
        "Sprite": "battle_bloodwyn_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyBlueBird",
        "Name": "Bluefeather",
        "Categories": [
            "Flying"
        ],
        "HP": 6,
        "Pow": 7,
        "Def": 7,
        "Spd": 10,
        "Mov": 3,
        "Exp": 3,
        "Money": 3,
        "Rewards": {
            "Operator": "AND",
            "List": [
                {
                    "ItemType": "ItemRedMushroom",
                    "MaxRewarded": 1,
                    "MaxOwned": 2,
                    "ItemName": "Red Mushroom",
                    "ItemSprite": "icons_4_5"
                }
            ]
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": "battle_bluebird_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyBlueBird2",
        "Name": "Bluefeather",
        "Categories": [
            "Flying"
        ],
        "HP": 8,
        "Pow": 10,
        "Def": 8,
        "Spd": 11,
        "Mov": 3,
        "Exp": 2,
        "Money": 2,
        "Rewards": {
            "Operator": "AND",
            "List": [
                {
                    "ItemType": "ItemRedMushroom",
                    "MaxRewarded": 2,
                    "MaxOwned": 2,
                    "IsCombinedMax": true,
                    "ItemName": "Red Mushroom",
                    "ItemSprite": "icons_4_5"
                }
            ]
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": "battle_bluebird_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyBookBlue",
        "Name": "Horror",
        "Categories": [],
        "HP": 14,
        "Pow": 16,
        "Def": 18,
        "Spd": 18,
        "Mov": 3,
        "Exp": 8,
        "Money": 8,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemPinkSeeds",
                        "ItemName": "Pink Seeds",
                        "ItemSprite": "icons_6_15"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemPinkSeeds",
                        "ItemName": "Pink Seeds",
                        "ItemSprite": "icons_6_15"
                    }
                ]
            },
            "Great": {
                "Operator": "OR",
                "List": [
                    {
                        "ItemType": "ItemCaveAcorn",
                        "MaxRewarded": 3,
                        "MaxOwned": 3,
                        "ItemName": "Cave Acorn",
                        "ItemSprite": "icons_3_11"
                    },
                    {
                        "ItemType": "ItemPinkSeeds",
                        "ItemName": "Pink Seeds",
                        "ItemSprite": "icons_6_15"
                    }
                ]
            }
        },
        "Sprite": "battle_book_blue_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyBookPurple",
        "Name": "Mystery",
        "Categories": [
            "Flying"
        ],
        "HP": 30,
        "Pow": 36,
        "Def": 54,
        "Spd": 37,
        "Mov": 3,
        "Exp": 35,
        "Money": 50,
        "Rewards": {
            "Operator": "AND",
            "List": [
                {
                    "ItemType": "ItemCibilsRed",
                    "MaxRewarded": 1,
                    "MaxOwned": 1,
                    "ItemName": "Sadio's Red",
                    "ItemSprite": "icons_0_18"
                }
            ]
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCibilsRed",
                        "ItemName": "Sadio's Red",
                        "ItemSprite": "icons_0_18"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCibilsRed",
                        "ItemName": "Sadio's Red",
                        "ItemSprite": "icons_0_18"
                    }
                ]
            },
            "Great": {
                "Operator": "OR",
                "List": [
                    {
                        "ItemType": "ItemBookOfLove",
                        "MaxRewarded": 1,
                        "MaxOwned": 1,
                        "ItemName": "Book of Love",
                        "ItemSprite": "icons_2_17"
                    },
                    {
                        "ItemType": "ItemCibilsRed",
                        "ItemName": "Sadio's Red",
                        "ItemSprite": "icons_0_18"
                    }
                ]
            }
        },
        "Sprite": "battle_book_purple_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyBookPurpleBloodwyn",
        "Name": "Mystery",
        "Categories": [],
        "HP": 30,
        "Pow": 36,
        "Def": 54,
        "Spd": 37,
        "Mov": 3,
        "Exp": 0,
        "Money": 0,
        "Rewards": {
            "Operator": "AND",
            "List": [
                {
                    "ItemType": "ItemCibilsRed",
                    "MaxRewarded": 1,
                    "MaxOwned": 1,
                    "ItemName": "Sadio's Red",
                    "ItemSprite": "icons_0_18"
                }
            ]
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCibilsRed",
                        "ItemName": "Sadio's Red",
                        "ItemSprite": "icons_0_18"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCibilsRed",
                        "ItemName": "Sadio's Red",
                        "ItemSprite": "icons_0_18"
                    }
                ]
            },
            "Great": {
                "Operator": "OR",
                "List": [
                    {
                        "ItemType": "ItemBookOfLove",
                        "MaxRewarded": 1,
                        "MaxOwned": 1,
                        "ItemName": "Book of Love",
                        "ItemSprite": "icons_2_17"
                    },
                    {
                        "ItemType": "ItemCibilsRed",
                        "ItemName": "Sadio's Red",
                        "ItemSprite": "icons_0_18"
                    }
                ]
            }
        },
        "Sprite": "battle_book_purple_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyBookRed",
        "Name": "Thriller",
        "Categories": [],
        "HP": 14,
        "Pow": 13,
        "Def": 18,
        "Spd": 18,
        "Mov": 3,
        "Exp": 8,
        "Money": 8,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemPinkSeeds",
                        "ItemName": "Pink Seeds",
                        "ItemSprite": "icons_6_15"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemPinkSeeds",
                        "ItemName": "Pink Seeds",
                        "ItemSprite": "icons_6_15"
                    }
                ]
            },
            "Great": {
                "Operator": "OR",
                "List": [
                    {
                        "ItemType": "ItemPowerCherry",
                        "MaxRewarded": 3,
                        "MaxOwned": 3,
                        "ItemName": "Pow Cherry",
                        "ItemSprite": "icons_0_10"
                    },
                    {
                        "ItemType": "ItemPinkSeeds",
                        "ItemName": "Pink Seeds",
                        "ItemSprite": "icons_6_15"
                    }
                ]
            }
        },
        "Sprite": "battle_book_red_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyBookworm",
        "Name": "Bookworm",
        "Categories": [],
        "HP": 12,
        "Pow": 32,
        "Def": 60,
        "Spd": 38,
        "Mov": 3,
        "Exp": 0,
        "Money": 0,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": "battle_bookworm_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyBookwormGreen",
        "Name": "Stinkworm",
        "Categories": [],
        "HP": 6,
        "Pow": 11,
        "Def": 5,
        "Spd": 10,
        "Mov": 3,
        "Exp": 3,
        "Money": 2,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": "battle_bookworm2_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyBunwitch",
        "Name": "Lagomagus",
        "Categories": [
            "Human"
        ],
        "HP": 16,
        "Pow": 23,
        "Def": 32,
        "Spd": 24,
        "Mov": 3,
        "Exp": 15,
        "Money": 15,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemHoneycrisp",
                        "ItemName": "Honeycrisp",
                        "ItemSprite": "icons_2_7"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemHoneycrisp",
                        "ItemName": "Honeycrisp",
                        "ItemSprite": "icons_2_7"
                    }
                ]
            },
            "Great": {
                "Operator": "OR",
                "List": [
                    {
                        "ItemType": "Thunderbrim",
                        "MaxRewarded": 1,
                        "MaxOwned": 1,
                        "ItemName": "Thunderbrim",
                        "ItemSprite": "hats_3_2"
                    },
                    {
                        "ItemType": "ItemHoneycrisp",
                        "ItemName": "Honeycrisp",
                        "ItemSprite": "icons_2_7"
                    }
                ]
            }
        },
        "Sprite": "battle_bunwitch_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyBunwitch2",
        "Name": "Lagomagus",
        "Categories": [],
        "HP": 16,
        "Pow": 24,
        "Def": 35,
        "Spd": 25,
        "Mov": 3,
        "Exp": 20,
        "Money": 15,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemHoneycrisp",
                        "ItemName": "Honeycrisp",
                        "ItemSprite": "icons_2_7"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemHoneycrisp",
                        "ItemName": "Honeycrisp",
                        "ItemSprite": "icons_2_7"
                    }
                ]
            },
            "Great": {
                "Operator": "OR",
                "List": [
                    {
                        "ItemType": "Thunderbrim",
                        "MaxRewarded": 1,
                        "MaxOwned": 1,
                        "ItemName": "Thunderbrim",
                        "ItemSprite": "hats_3_2"
                    },
                    {
                        "ItemType": "ItemHoneycrisp",
                        "ItemName": "Honeycrisp",
                        "ItemSprite": "icons_2_7"
                    }
                ]
            }
        },
        "Sprite": "battle_bunwitch_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyButterfly",
        "Name": "Flutterfang",
        "Categories": [
            "Flying"
        ],
        "HP": 30,
        "Pow": 38,
        "Def": 56,
        "Spd": 45,
        "Mov": 4,
        "Exp": 30,
        "Money": 40,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemRareCoin",
                        "ItemName": "Rare Coin",
                        "ItemSprite": "icons_8_12"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemRareCoin",
                        "ItemName": "Rare Coin",
                        "ItemSprite": "icons_8_12"
                    }
                ]
            },
            "Great": {
                "Operator": "OR",
                "List": [
                    {
                        "ItemType": "ItemBeautyToken",
                        "MaxRewarded": 1,
                        "MaxOwned": 3,
                        "ItemName": "Beauty Token",
                        "ItemSprite": "icons_9_11"
                    },
                    {
                        "ItemType": "ItemRareCoin",
                        "ItemName": "Rare Coin",
                        "ItemSprite": "icons_8_12"
                    }
                ]
            }
        },
        "Sprite": "battle_butterfly_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyCauldron",
        "Name": "Cauldron",
        "Categories": [
            "Armored"
        ],
        "HP": 9999,
        "Pow": 15,
        "Def": 100,
        "Spd": 18,
        "Mov": 0,
        "Exp": 0,
        "Money": 0,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemSpiceLeaf",
                        "ItemName": "Spice Leaf",
                        "ItemSprite": "icons_5_6"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemSpiceLeaf",
                        "ItemName": "Spice Leaf",
                        "ItemSprite": "icons_5_6"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemSpiceLeaf",
                        "ItemName": "Spice Leaf",
                        "ItemSprite": "icons_5_6"
                    }
                ]
            }
        },
        "Sprite": "battle_cauldron_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyChuckles",
        "Name": "Chuckles",
        "Categories": [
            "Armored",
            "Giant"
        ],
        "HP": 100,
        "Pow": 12,
        "Def": 14,
        "Spd": 18,
        "Mov": 4,
        "Exp": 30,
        "Money": 0,
        "Rewards": {
            "Operator": "AND",
            "List": [
                {
                    "ItemType": "ItemRareCoin",
                    "ItemName": "Rare Coin",
                    "ItemSprite": "icons_8_12"
                },
                {
                    "ItemType": "Woolymuffs",
                    "ItemName": "Woolymuffs",
                    "ItemSprite": "hats_1_3"
                }
            ]
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemRancidFruit",
                        "ItemName": "Rancid Fruit",
                        "ItemSprite": "icons_7_15"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemRancidFruit",
                        "ItemName": "Rancid Fruit",
                        "ItemSprite": "icons_7_15"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemRancidFruit",
                        "ItemName": "Rancid Fruit",
                        "ItemSprite": "icons_7_15"
                    },
                    {
                        "ItemType": "ItemRareCoin",
                        "ItemName": "Rare Coin",
                        "ItemSprite": "icons_8_12"
                    }
                ]
            }
        },
        "Sprite": "battle_chuckles_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyCibil",
        "Name": "Sadio",
        "Categories": [
            "Human"
        ],
        "HP": 30,
        "Pow": 10,
        "Def": 13,
        "Spd": 13,
        "Mov": 5,
        "Exp": 0,
        "Money": 0,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemBigBomb",
                        "ItemName": "Big Bomb",
                        "ItemSprite": "icons_8_18"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemBigBomb",
                        "ItemName": "Big Bomb",
                        "ItemSprite": "icons_8_18"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemBigBomb",
                        "ItemName": "Big Bomb",
                        "ItemSprite": "icons_8_18"
                    }
                ]
            }
        },
        "Sprite": "battle_cibil_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyCodex",
        "Name": "Codexus",
        "Categories": [
            "Flying"
        ],
        "HP": 400,
        "Pow": 52,
        "Def": 110,
        "Spd": 100,
        "Mov": 2,
        "Exp": 0,
        "Money": 0,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": "battle_codex_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyCodexBee",
        "Name": "Bumble Eye",
        "Categories": [
            "Flying"
        ],
        "HP": 40,
        "Pow": 52,
        "Def": 110,
        "Spd": 60,
        "Mov": 3,
        "Exp": 0,
        "Money": 0,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": "battle_bee_eye_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyCodexEyepole",
        "Name": "Eyepole",
        "Categories": [
            "Human"
        ],
        "HP": 50,
        "Pow": 52,
        "Def": 120,
        "Spd": 60,
        "Mov": 3,
        "Exp": 0,
        "Money": 0,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": "battle_eyepole_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyCodexEyeworm",
        "Name": "Eyeworm",
        "Categories": [],
        "HP": 40,
        "Pow": 52,
        "Def": 110,
        "Spd": 60,
        "Mov": 3,
        "Exp": 0,
        "Money": 0,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": "battle_bookworm_eye_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyCodexFlame",
        "Name": "Red Flame",
        "Categories": [
            "Magic"
        ],
        "HP": 1,
        "Pow": 48,
        "Def": 110,
        "Spd": 60,
        "Mov": 1,
        "Exp": 0,
        "Money": 0,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": "battle_lantern_flame_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyCodexSackeye",
        "Name": "Sackeye",
        "Categories": [
            "Human"
        ],
        "HP": 40,
        "Pow": 52,
        "Def": 120,
        "Spd": 60,
        "Mov": 3,
        "Exp": 0,
        "Money": 0,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": "battle_sackeye_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyCrackedGhost",
        "Name": "Cracked Ghost",
        "Categories": [],
        "HP": 30,
        "Pow": 38,
        "Def": 66,
        "Spd": 45,
        "Mov": 3,
        "Exp": 30,
        "Money": 50,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemBeautyToken",
                        "ItemName": "Beauty Token",
                        "ItemSprite": "icons_9_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemBeautyToken",
                        "ItemName": "Beauty Token",
                        "ItemSprite": "icons_9_11"
                    }
                ]
            },
            "Great": {
                "Operator": "OR",
                "List": [
                    {
                        "ItemType": "ItemGhostCookie",
                        "MaxRewarded": 1,
                        "MaxOwned": 5,
                        "ItemName": "Ghost Cookie",
                        "ItemSprite": "icons_5_17"
                    },
                    {
                        "ItemType": "ItemBeautyToken",
                        "ItemName": "Beauty Token",
                        "ItemSprite": "icons_9_11"
                    }
                ]
            }
        },
        "Sprite": "battle_cracked_ghost_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyCraterbaby",
        "Name": "Craterbaby",
        "Categories": [
            "Flying"
        ],
        "HP": 12,
        "Pow": 23,
        "Def": 26,
        "Spd": 20,
        "Mov": 3,
        "Exp": 8,
        "Money": 8,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemHoneycrisp",
                        "ItemName": "Honeycrisp",
                        "ItemSprite": "icons_2_7"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemHoneycrisp",
                        "ItemName": "Honeycrisp",
                        "ItemSprite": "icons_2_7"
                    }
                ]
            },
            "Great": {
                "Operator": "OR",
                "List": [
                    {
                        "ItemType": "ItemCaveAcorn",
                        "MaxRewarded": 1,
                        "MaxOwned": 1,
                        "ItemName": "Cave Acorn",
                        "ItemSprite": "icons_3_11"
                    },
                    {
                        "ItemType": "ItemHoneycrisp",
                        "ItemName": "Honeycrisp",
                        "ItemSprite": "icons_2_7"
                    }
                ]
            }
        },
        "Sprite": "battle_craterbaby_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyCraterface",
        "Name": "Craterface",
        "Categories": [
            "Flying",
            "Giant"
        ],
        "HP": 20,
        "Pow": 24,
        "Def": 26,
        "Spd": 20,
        "Mov": 4,
        "Exp": 15,
        "Money": 15,
        "Rewards": {
            "Operator": "AND",
            "List": [
                {
                    "ItemType": "ItemStarCookie",
                    "MaxRewarded": 1,
                    "MaxOwned": 1,
                    "ItemName": "Star Cookie",
                    "ItemSprite": "icons_8_15"
                }
            ]
        },
        "Stealable": {
            "Oops": {
                "Operator": "OR",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "Notes": [
                            0
                        ],
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    },
                    {
                        "ItemType": "ItemComebackCandy",
                        "Notes": [
                            1
                        ],
                        "ItemName": "Comeback Candy",
                        "ItemSprite": "icons_1_10"
                    }
                ]
            },
            "Nice": {
                "Operator": "OR",
                "List": [
                    {
                        "ItemType": "ItemStarCookie",
                        "Notes": [
                            0
                        ],
                        "ItemName": "Star Cookie",
                        "ItemSprite": "icons_8_15"
                    },
                    {
                        "ItemType": "ItemComebackCandy",
                        "Notes": [
                            1
                        ],
                        "ItemName": "Comeback Candy",
                        "ItemSprite": "icons_1_10"
                    }
                ]
            },
            "Great": {
                "Operator": "OR",
                "List": [
                    {
                        "ItemType": "RoyalSnug",
                        "MaxOwned": 1,
                        "Notes": [
                            0
                        ],
                        "ItemName": "Royal Snug",
                        "ItemSprite": "hats_3_1"
                    },
                    {
                        "ItemType": "ItemStarCookie",
                        "MaxRewarded": 5,
                        "MaxOwned": 5,
                        "Notes": [
                            1
                        ],
                        "ItemName": "Star Cookie",
                        "ItemSprite": "icons_8_15"
                    }
                ]
            }
        },
        "Sprite": "battle_craterface_0_0",
        "Notes": [
            "only if you have no Royal Snugs",
            "only if you have at least 1 Royal Snug"
        ]
    },
    {
        "ClassName": "EnemyCraterface2",
        "Name": "Lunar Goon",
        "Categories": [
            "Flying",
            "Giant"
        ],
        "HP": 60,
        "Pow": 54,
        "Def": 100,
        "Spd": 60,
        "Mov": 4,
        "Exp": 50,
        "Money": 50,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCibilsBlue",
                        "ItemName": "Sadio's Blue",
                        "ItemSprite": "icons_1_18"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCibilsBlue",
                        "ItemName": "Sadio's Blue",
                        "ItemSprite": "icons_1_18"
                    }
                ]
            },
            "Great": {
                "Operator": "OR",
                "List": [
                    {
                        "ItemType": "TheRomantic",
                        "MaxRewarded": 1,
                        "MaxOwned": 1,
                        "ItemName": "The Romantic",
                        "ItemSprite": "hats_7_2"
                    },
                    {
                        "ItemType": "ItemCibilsBlue",
                        "ItemName": "Sadio's Blue",
                        "ItemSprite": "icons_1_18"
                    }
                ]
            }
        },
        "Sprite": "battle_craterface2_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyCrystal",
        "Name": "Beryllous",
        "Categories": [
            "Armored",
            "Magic"
        ],
        "HP": 15,
        "Pow": 13,
        "Def": 20,
        "Spd": 16,
        "Mov": 4,
        "Exp": 8,
        "Money": 8,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": "battle_crystal_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyCyclops",
        "Name": "Cyclops",
        "Categories": [
            "Armored",
            "Giant"
        ],
        "HP": 20,
        "Pow": 28,
        "Def": 48,
        "Spd": 30,
        "Mov": 3,
        "Exp": 25,
        "Money": 25,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemPinkPods",
                        "ItemName": "Pink Pods",
                        "ItemSprite": "icons_6_16"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemPinkPods",
                        "ItemName": "Pink Pods",
                        "ItemSprite": "icons_6_16"
                    }
                ]
            },
            "Great": {
                "Operator": "OR",
                "List": [
                    {
                        "ItemType": "SteelToes",
                        "MaxRewarded": 1,
                        "MaxOwned": 1,
                        "ItemName": "Steel Toes",
                        "ItemSprite": "feet_4_0"
                    },
                    {
                        "ItemType": "ItemPinkPods",
                        "ItemName": "Pink Pods",
                        "ItemSprite": "icons_6_16"
                    }
                ]
            }
        },
        "Sprite": "battle_golem2_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyDarkeye",
        "Name": "Nightgazer",
        "Categories": [
            "Magic"
        ],
        "HP": 20,
        "Pow": 36,
        "Def": 54,
        "Spd": 37,
        "Mov": 4,
        "Exp": 30,
        "Money": 40,
        "Rewards": {
            "Operator": "AND",
            "List": [
                {
                    "ItemType": "ItemCibilsGreen",
                    "MaxRewarded": 1,
                    "MaxOwned": 1,
                    "ItemName": "Sadio's Green",
                    "ItemSprite": "icons_2_18"
                }
            ]
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCibilsGreen",
                        "ItemName": "Sadio's Green",
                        "ItemSprite": "icons_2_18"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCibilsGreen",
                        "ItemName": "Sadio's Green",
                        "ItemSprite": "icons_2_18"
                    }
                ]
            },
            "Great": {
                "Operator": "OR",
                "List": [
                    {
                        "ItemType": "ItemDemonEye",
                        "MaxRewarded": 3,
                        "MaxOwned": 3,
                        "ItemName": "Demon Eye",
                        "ItemSprite": "icons_7_18"
                    },
                    {
                        "ItemType": "ItemCibilsGreen",
                        "ItemName": "Sadio's Green",
                        "ItemSprite": "icons_2_18"
                    }
                ]
            }
        },
        "Sprite": "battle_darkeye_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyDarkeyeStacks",
        "Name": "Nightgazer",
        "Categories": [],
        "HP": 25,
        "Pow": 38,
        "Def": 66,
        "Spd": 37,
        "Mov": 4,
        "Exp": 30,
        "Money": 50,
        "Rewards": {
            "Operator": "AND",
            "List": [
                {
                    "ItemType": "ItemCibilsGreen",
                    "MaxRewarded": 1,
                    "MaxOwned": 1,
                    "ItemName": "Sadio's Green",
                    "ItemSprite": "icons_2_18"
                }
            ]
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCibilsGreen",
                        "ItemName": "Sadio's Green",
                        "ItemSprite": "icons_2_18"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCibilsGreen",
                        "ItemName": "Sadio's Green",
                        "ItemSprite": "icons_2_18"
                    }
                ]
            },
            "Great": {
                "Operator": "OR",
                "List": [
                    {
                        "ItemType": "ItemDemonEye",
                        "MaxRewarded": 3,
                        "MaxOwned": 3,
                        "ItemName": "Demon Eye",
                        "ItemSprite": "icons_7_18"
                    },
                    {
                        "ItemType": "ItemCibilsGreen",
                        "ItemName": "Sadio's Green",
                        "ItemSprite": "icons_2_18"
                    }
                ]
            }
        },
        "Sprite": "battle_darkeye_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyDarkskull",
        "Name": "Charbones",
        "Categories": [],
        "HP": 30,
        "Pow": 10,
        "Def": 9,
        "Spd": 10,
        "Mov": 4,
        "Exp": 20,
        "Money": 0,
        "Rewards": {
            "Operator": "AND",
            "List": [
                {
                    "ItemType": "ItemCommonCoin",
                    "ItemName": "Common Coin",
                    "ItemSprite": "icons_8_11"
                },
                {
                    "ItemType": "ItemSweetSprout",
                    "ItemName": "Sweet Sprout",
                    "ItemSprite": "icons_5_7"
                },
                {
                    "ItemType": "ItemBlackBomb",
                    "ItemName": "Black Bomb",
                    "ItemSprite": "icons_5_15"
                }
            ]
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": "battle_darkskull_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyEoc",
        "Name": "The Leader",
        "Categories": [
            "Magic"
        ],
        "HP": 4,
        "Pow": 7,
        "Def": 5,
        "Spd": 8,
        "Mov": 3,
        "Exp": 3,
        "Money": 0,
        "Rewards": {
            "Operator": "AND",
            "List": [
                {
                    "ItemType": "ItemSmallMushroom",
                    "ItemName": "Small Mushroom",
                    "ItemSprite": "icons_4_6"
                },
                {
                    "ItemType": "ItemSmallMushroom",
                    "ItemName": "Small Mushroom",
                    "ItemSprite": "icons_4_6"
                },
                {
                    "ItemType": "ItemRedMushroom",
                    "ItemName": "Red Mushroom",
                    "ItemSprite": "icons_4_5"
                }
            ]
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": "battle_eoc_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyEyeFlower",
        "Name": "Eyepoppy",
        "Categories": [],
        "HP": 30,
        "Pow": 36,
        "Def": 56,
        "Spd": 45,
        "Mov": 3,
        "Exp": 30,
        "Money": 40,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": "battle_eyeflower_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyEyesore",
        "Name": "Eyesore",
        "Categories": [
            "Flying",
            "Magic"
        ],
        "HP": 14,
        "Pow": 23,
        "Def": 30,
        "Spd": 24,
        "Mov": 4,
        "Exp": 12,
        "Money": 12,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCaveAcorn",
                        "ItemName": "Cave Acorn",
                        "ItemSprite": "icons_3_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCaveAcorn",
                        "ItemName": "Cave Acorn",
                        "ItemSprite": "icons_3_11"
                    }
                ]
            },
            "Great": {
                "Operator": "OR",
                "List": [
                    {
                        "ItemType": "ItemRancidFruit",
                        "MaxRewarded": 3,
                        "MaxOwned": 3,
                        "ItemName": "Rancid Fruit",
                        "ItemSprite": "icons_7_15"
                    },
                    {
                        "ItemType": "ItemCaveAcorn",
                        "ItemName": "Cave Acorn",
                        "ItemSprite": "icons_3_11"
                    }
                ]
            }
        },
        "Sprite": "battle_eyesore_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyFakeTileBlue",
        "Name": "Undersloop",
        "Categories": [],
        "HP": 8,
        "Pow": 10,
        "Def": 8,
        "Spd": 10,
        "Mov": 3,
        "Exp": 1,
        "Money": 3,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": null,
        "Notes": []
    },
    {
        "ClassName": "EnemyFakeTileRed",
        "Name": "Undersnoop",
        "Categories": [],
        "HP": 8,
        "Pow": 10,
        "Def": 8,
        "Spd": 10,
        "Mov": 3,
        "Exp": 1,
        "Money": 3,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": null,
        "Notes": []
    },
    {
        "ClassName": "EnemyFantom",
        "Name": "Fantom",
        "Categories": [
            "Giant",
            "Magic",
            "Human"
        ],
        "HP": 200,
        "Pow": 54,
        "Def": 110,
        "Spd": 80,
        "Mov": 4,
        "Exp": 0,
        "Money": 0,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": "battle_fantom_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyFantom2",
        "Name": "Fantom",
        "Categories": [
            "Flying",
            "Giant",
            "Magic",
            "Human"
        ],
        "HP": 200,
        "Pow": 54,
        "Def": 110,
        "Spd": 80,
        "Mov": 5,
        "Exp": 0,
        "Money": 0,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": "battle_fantom2_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyFantom3",
        "Name": "Fantom",
        "Categories": [
            "Giant",
            "Magic",
            "Human"
        ],
        "HP": 120,
        "Pow": 58,
        "Def": 110,
        "Spd": 70,
        "Mov": 3,
        "Exp": 0,
        "Money": 0,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": "battle_fantom3_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyFlower",
        "Name": "Petuni",
        "Categories": [],
        "HP": 8,
        "Pow": 10,
        "Def": 8,
        "Spd": 11,
        "Mov": 2,
        "Exp": 2,
        "Money": 3,
        "Rewards": {
            "Operator": "AND",
            "List": [
                {
                    "ItemType": "ItemGoldBlossom",
                    "MaxRewarded": 1,
                    "MaxOwned": 2,
                    "ItemName": "Gold Blossom",
                    "ItemSprite": "icons_8_5"
                }
            ]
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": "battle_flower_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyFluttergum",
        "Name": "Fluttergum",
        "Categories": [
            "Flying"
        ],
        "HP": 8,
        "Pow": 9,
        "Def": 8,
        "Spd": 10,
        "Mov": 4,
        "Exp": 3,
        "Money": 3,
        "Rewards": {
            "Operator": "AND",
            "List": [
                {
                    "ItemType": "ItemBlueBlossom",
                    "MaxRewarded": 1,
                    "MaxOwned": 1,
                    "ItemName": "Blue Blossom",
                    "ItemSprite": "icons_7_5"
                }
            ]
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": "battle_fluttergum_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyFlutterlamp",
        "Name": "Flutterlamp",
        "Categories": [
            "Flying"
        ],
        "HP": 15,
        "Pow": 23,
        "Def": 26,
        "Spd": 20,
        "Mov": 3,
        "Exp": 12,
        "Money": 12,
        "Rewards": {
            "Operator": "AND",
            "List": [
                {
                    "ItemType": "ItemDewPlum",
                    "MaxRewarded": 1,
                    "MaxOwned": 1,
                    "ItemName": "Dew Plum",
                    "ItemSprite": "icons_1_7"
                }
            ]
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemDewPlum",
                        "ItemName": "Dew Plum",
                        "ItemSprite": "icons_1_7"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemDewPlum",
                        "ItemName": "Dew Plum",
                        "ItemSprite": "icons_1_7"
                    }
                ]
            },
            "Great": {
                "Operator": "OR",
                "List": [
                    {
                        "ItemType": "ItemStarCookie",
                        "MaxRewarded": 1,
                        "MaxOwned": 1,
                        "ItemName": "Star Cookie",
                        "ItemSprite": "icons_8_15"
                    },
                    {
                        "ItemType": "ItemDewPlum",
                        "ItemName": "Dew Plum",
                        "ItemSprite": "icons_1_7"
                    }
                ]
            }
        },
        "Sprite": "battle_lamp_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyFlutterlamp2",
        "Name": "Fluttertorch",
        "Categories": [
            "Flying"
        ],
        "HP": 25,
        "Pow": 50,
        "Def": 90,
        "Spd": 60,
        "Mov": 2,
        "Exp": 40,
        "Money": 50,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCibilsBlue",
                        "ItemName": "Sadio's Blue",
                        "ItemSprite": "icons_1_18"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCibilsBlue",
                        "ItemName": "Sadio's Blue",
                        "ItemSprite": "icons_1_18"
                    }
                ]
            },
            "Great": {
                "Operator": "OR",
                "List": [
                    {
                        "ItemType": "ItemCibilsSparkly",
                        "MaxRewarded": 3,
                        "MaxOwned": 3,
                        "ItemName": "Sadio's Sparkly",
                        "ItemSprite": "icons_0_13"
                    },
                    {
                        "ItemType": "ItemCibilsBlue",
                        "ItemName": "Sadio's Blue",
                        "ItemSprite": "icons_1_18"
                    }
                ]
            }
        },
        "Sprite": "battle_lamp2_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyFungi",
        "Name": "Fungi Dimini",
        "Categories": [
            "None"
        ],
        "HP": 12,
        "Pow": 27,
        "Def": 43,
        "Spd": 30,
        "Mov": 4,
        "Exp": 15,
        "Money": 15,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemRedMushroom",
                        "ItemName": "Red Mushroom",
                        "ItemSprite": "icons_4_5"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemRedMushroom",
                        "ItemName": "Red Mushroom",
                        "ItemSprite": "icons_4_5"
                    }
                ]
            },
            "Great": {
                "Operator": "OR",
                "List": [
                    {
                        "ItemType": "ItemToxicShroom",
                        "MaxRewarded": 2,
                        "MaxOwned": 2,
                        "ItemName": "Toxic Shroom",
                        "ItemSprite": "icons_2_8"
                    },
                    {
                        "ItemType": "ItemRedMushroom",
                        "ItemName": "Red Mushroom",
                        "ItemSprite": "icons_4_5"
                    }
                ]
            }
        },
        "Sprite": "battle_fungi_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyFungiLair",
        "Name": "Fungi Dimini",
        "Categories": [
            "None"
        ],
        "HP": 20,
        "Pow": 40,
        "Def": 15,
        "Spd": 10,
        "Mov": 3,
        "Exp": 50,
        "Money": 50,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": "battle_fungi_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyFungo",
        "Name": "Fungo Colosso",
        "Categories": [
            "Giant"
        ],
        "HP": 30,
        "Pow": 29,
        "Def": 46,
        "Spd": 30,
        "Mov": 4,
        "Exp": 30,
        "Money": 30,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemMintShroom",
                        "ItemName": "Mint Shroom",
                        "ItemSprite": "icons_9_16"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemMintShroom",
                        "ItemName": "Mint Shroom",
                        "ItemSprite": "icons_9_16"
                    }
                ]
            },
            "Great": {
                "Operator": "OR",
                "List": [
                    {
                        "ItemType": "ItemFruityShroom",
                        "MaxRewarded": 3,
                        "MaxOwned": 3,
                        "ItemName": "Fruity Shroom",
                        "ItemSprite": "icons_9_17"
                    },
                    {
                        "ItemType": "ItemMintShroom",
                        "ItemName": "Mint Shroom",
                        "ItemSprite": "icons_9_16"
                    }
                ]
            }
        },
        "Sprite": "battle_fungo_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyFuzzy",
        "Name": "Mossling",
        "Categories": [],
        "HP": 3,
        "Pow": 7,
        "Def": 6,
        "Spd": 8,
        "Mov": 2,
        "Exp": 1,
        "Money": 0,
        "Rewards": {
            "Operator": "AND",
            "List": [
                {
                    "ItemType": "ItemSmallMushroom",
                    "MaxRewarded": 1,
                    "MaxOwned": 5,
                    "ItemName": "Small Mushroom",
                    "ItemSprite": "icons_4_6"
                }
            ]
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": "battle_fuzzy_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyFuzzyStack",
        "Name": "Mosstower",
        "Categories": [],
        "HP": 6,
        "Pow": 7,
        "Def": 6,
        "Spd": 10,
        "Mov": 2,
        "Exp": 0,
        "Money": 2,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": "battle_fuzzy_stack_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyFuzzyTutorial",
        "Name": "Mossling",
        "Categories": [],
        "HP": 7,
        "Pow": 7,
        "Def": 6,
        "Spd": 11,
        "Mov": 2,
        "Exp": 5,
        "Money": 0,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": "battle_fuzzy_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyFuzzyTutorial2",
        "Name": "Mossling",
        "Categories": [],
        "HP": 7,
        "Pow": 7,
        "Def": 6,
        "Spd": 11,
        "Mov": 2,
        "Exp": 3,
        "Money": 0,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": "battle_fuzzy_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyGardener",
        "Name": "Gardener",
        "Categories": [
            "Armored",
            "Giant"
        ],
        "HP": 100,
        "Pow": 39,
        "Def": 65,
        "Spd": 80,
        "Mov": 5,
        "Exp": 0,
        "Money": 0,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemVeggieStew",
                        "ItemName": "Veggie Stew",
                        "ItemSprite": "icons_4_17"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemVeggieStew",
                        "ItemName": "Veggie Stew",
                        "ItemSprite": "icons_4_17"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemVeggieStew",
                        "ItemName": "Veggie Stew",
                        "ItemSprite": "icons_4_17"
                    },
                    {
                        "ItemType": "PrizePoppies",
                        "MaxRewarded": 1,
                        "ItemName": "Prize Poppies",
                        "ItemSprite": "accessories_6_7"
                    }
                ]
            }
        },
        "Sprite": "battle_gardener_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyGardener2",
        "Name": "Gardener",
        "Categories": [
            "None"
        ],
        "HP": 100,
        "Pow": 39,
        "Def": 62,
        "Spd": 80,
        "Mov": 5,
        "Exp": 300,
        "Money": 0,
        "Rewards": {
            "Operator": "AND",
            "List": [
                {
                    "ItemType": "ItemPrizeMedal",
                    "ItemName": "Prize Medal",
                    "ItemSprite": "icons_3_16"
                },
                {
                    "ItemType": "ItemPrizeMedal",
                    "ItemName": "Prize Medal",
                    "ItemSprite": "icons_3_16"
                },
                {
                    "ItemType": "PrizeShoots",
                    "ItemName": "Prize Shoots",
                    "ItemSprite": "accessories_7_7"
                }
            ]
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemPrizeMedal",
                        "ItemName": "Prize Medal",
                        "ItemSprite": "icons_3_16"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemPrizeMedal",
                        "ItemName": "Prize Medal",
                        "ItemSprite": "icons_3_16"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemPrizeMedal",
                        "ItemName": "Prize Medal",
                        "ItemSprite": "icons_3_16"
                    },
                    {
                        "ItemType": "PrizePoppies",
                        "MaxRewarded": 1,
                        "ItemName": "Prize Poppies",
                        "ItemSprite": "accessories_6_7"
                    }
                ]
            }
        },
        "Sprite": "battle_gardener_32_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyGardenerBee",
        "Name": "Bumbler",
        "Categories": [],
        "HP": 18,
        "Pow": 38,
        "Def": 60,
        "Spd": 50,
        "Mov": 4,
        "Exp": 0,
        "Money": 0,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemMintShroom",
                        "ItemName": "Mint Shroom",
                        "ItemSprite": "icons_9_16"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemMintShroom",
                        "ItemName": "Mint Shroom",
                        "ItemSprite": "icons_9_16"
                    }
                ]
            },
            "Great": {
                "Operator": "OR",
                "List": [
                    {
                        "ItemType": "ItemCibilsGreen",
                        "MaxRewarded": 1,
                        "MaxOwned": 3,
                        "ItemName": "Sadio's Green",
                        "ItemSprite": "icons_2_18"
                    },
                    {
                        "ItemType": "ItemMintShroom",
                        "ItemName": "Mint Shroom",
                        "ItemSprite": "icons_9_16"
                    }
                ]
            }
        },
        "Sprite": "battle_bee_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyGardenerButterfly",
        "Name": "Flutterfang",
        "Categories": [],
        "HP": 30,
        "Pow": 38,
        "Def": 60,
        "Spd": 50,
        "Mov": 4,
        "Exp": 0,
        "Money": 0,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemRareCoin",
                        "ItemName": "Rare Coin",
                        "ItemSprite": "icons_8_12"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemRareCoin",
                        "ItemName": "Rare Coin",
                        "ItemSprite": "icons_8_12"
                    }
                ]
            },
            "Great": {
                "Operator": "OR",
                "List": [
                    {
                        "ItemType": "ItemBeautyToken",
                        "MaxRewarded": 1,
                        "MaxOwned": 3,
                        "ItemName": "Beauty Token",
                        "ItemSprite": "icons_9_11"
                    },
                    {
                        "ItemType": "ItemRareCoin",
                        "ItemName": "Rare Coin",
                        "ItemSprite": "icons_8_12"
                    }
                ]
            }
        },
        "Sprite": "battle_butterfly_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyGardenerFlower",
        "Name": "Eyepoppy",
        "Categories": [],
        "HP": 30,
        "Pow": 38,
        "Def": 60,
        "Spd": 50,
        "Mov": 3,
        "Exp": 0,
        "Money": 0,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": "battle_eyeflower_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyGhostFat",
        "Name": "The Dancer",
        "Categories": [
            "Magic"
        ],
        "HP": 5,
        "Pow": 7,
        "Def": 5,
        "Spd": 8,
        "Mov": 3,
        "Exp": 3,
        "Money": 0,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": "battle_ghost_fat_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyGhostSkinny",
        "Name": "The Creep",
        "Categories": [
            "Magic"
        ],
        "HP": 4,
        "Pow": 7,
        "Def": 5,
        "Spd": 8,
        "Mov": 3,
        "Exp": 3,
        "Money": 0,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": "battle_ghost_skinny_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyGhrost",
        "Name": "Ghrost",
        "Categories": [],
        "HP": 8,
        "Pow": 10,
        "Def": 8,
        "Spd": 10,
        "Mov": 3,
        "Exp": 3,
        "Money": 3,
        "Rewards": {
            "Operator": "AND",
            "List": [
                {
                    "ItemType": "ItemSweetSprout",
                    "MaxRewarded": 1,
                    "Notes": [
                        0
                    ],
                    "ItemName": "Sweet Sprout",
                    "ItemSprite": "icons_5_7"
                },
                {
                    "ItemType": "ItemRedMushroom",
                    "MaxRewarded": 1,
                    "MaxOwned": 3,
                    "ItemName": "Red Mushroom",
                    "ItemSprite": "icons_4_5"
                }
            ]
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": "battle_ghrost_0_0",
        "Notes": [
            "only if fighting multiple Ghrosts"
        ]
    },
    {
        "ClassName": "EnemyGhrostling",
        "Name": "Ghrostling",
        "Categories": [],
        "HP": 4,
        "Pow": 9,
        "Def": 8,
        "Spd": 10,
        "Mov": 3,
        "Exp": 1,
        "Money": 1,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": "battle_ghrostling_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyGilda",
        "Name": "Gilda",
        "Categories": [
            "Human"
        ],
        "HP": 80,
        "Pow": 11,
        "Def": 9,
        "Spd": 14,
        "Mov": 3,
        "Exp": 30,
        "Money": 0,
        "Rewards": {
            "Operator": "AND",
            "List": [
                {
                    "ItemType": "ItemSweetCake",
                    "ItemName": "Sweet Cake",
                    "ItemSprite": "icons_6_12"
                },
                {
                    "ItemType": "ItemRareCoin",
                    "ItemName": "Rare Coin",
                    "ItemSprite": "icons_8_12"
                }
            ]
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": "battle_gilda_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyGilda2",
        "Name": "Gilda",
        "Categories": [
            "Human"
        ],
        "HP": 50,
        "Pow": 13,
        "Def": 18,
        "Spd": 20,
        "Mov": 3,
        "Exp": 25,
        "Money": 0,
        "Rewards": {
            "Operator": "AND",
            "List": [
                {
                    "ItemType": "ItemRareGem",
                    "ItemName": "Rare Gem",
                    "ItemSprite": "icons_0_6"
                }
            ]
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": "battle_gilda_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyGlip",
        "Name": "Attack-in-the-Box",
        "Categories": [],
        "HP": 150,
        "Pow": 42,
        "Def": 66,
        "Spd": 60,
        "Mov": 8,
        "Exp": 100,
        "Money": 0,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": "battle_glip_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyGlipBee",
        "Name": "Bumbler",
        "Categories": [],
        "HP": 30,
        "Pow": 42,
        "Def": 66,
        "Spd": 48,
        "Mov": 4,
        "Exp": 25,
        "Money": 30,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": "battle_bee_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyGlipFungi",
        "Name": "Fungi Dimini",
        "Categories": [],
        "HP": 30,
        "Pow": 42,
        "Def": 66,
        "Spd": 50,
        "Mov": 3,
        "Exp": 15,
        "Money": 15,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": "battle_fungi_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyGlipFuzzy",
        "Name": "Mossling",
        "Categories": [],
        "HP": 30,
        "Pow": 42,
        "Def": 66,
        "Spd": 50,
        "Mov": 3,
        "Exp": 1,
        "Money": 0,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": "battle_fuzzy_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyGlipGhrostling",
        "Name": "Ghrostling",
        "Categories": [],
        "HP": 30,
        "Pow": 42,
        "Def": 66,
        "Spd": 50,
        "Mov": 3,
        "Exp": 1,
        "Money": 1,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": "battle_ghrostling_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyGlipPaneAttacker",
        "Name": "Rocket Pane",
        "Categories": [],
        "HP": 30,
        "Pow": 42,
        "Def": 68,
        "Spd": 48,
        "Mov": 3,
        "Exp": 1,
        "Money": 4,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": "battle_pane_attacker_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyGlipPants",
        "Name": "Trouncers",
        "Categories": [],
        "HP": 40,
        "Pow": 42,
        "Def": 65,
        "Spd": 45,
        "Mov": 3,
        "Exp": 1,
        "Money": 10,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": "battle_pants_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyGolem",
        "Name": "Fossil Eater",
        "Categories": [
            "Armored",
            "Giant"
        ],
        "HP": 20,
        "Pow": 20,
        "Def": 20,
        "Spd": 18,
        "Mov": 3,
        "Exp": 10,
        "Money": 10,
        "Rewards": {
            "Operator": "OR",
            "List": [
                {
                    "ItemType": "ItemHoneycrisp",
                    "MaxRewarded": 1,
                    "MaxOwned": 2,
                    "ItemName": "Honeycrisp",
                    "ItemSprite": "icons_2_7"
                },
                {
                    "ItemType": "ItemMiniMelon",
                    "MaxRewarded": 1,
                    "MaxOwned": 3,
                    "ItemName": "Mini Melon",
                    "ItemSprite": "icons_1_9"
                }
            ]
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemHoneycrisp",
                        "ItemName": "Honeycrisp",
                        "ItemSprite": "icons_2_7"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemHoneycrisp",
                        "ItemName": "Honeycrisp",
                        "ItemSprite": "icons_2_7"
                    }
                ]
            },
            "Great": {
                "Operator": "OR",
                "List": [
                    {
                        "ItemType": "ItemComebackCandy",
                        "MaxRewarded": 2,
                        "MaxOwned": 2,
                        "ItemName": "Comeback Candy",
                        "ItemSprite": "icons_1_10"
                    },
                    {
                        "ItemType": "ItemHoneycrisp",
                        "ItemName": "Honeycrisp",
                        "ItemSprite": "icons_2_7"
                    }
                ]
            }
        },
        "Sprite": "battle_golem_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyGolemRed",
        "Name": "Fossil Forger",
        "Categories": [
            "Armored",
            "Giant"
        ],
        "HP": 20,
        "Pow": 20,
        "Def": 20,
        "Spd": 18,
        "Mov": 3,
        "Exp": 10,
        "Money": 10,
        "Rewards": {
            "Operator": "AND",
            "List": [
                {
                    "ItemType": "ItemFrenzyFlower",
                    "MaxRewarded": 3,
                    "MaxOwned": 3,
                    "IsCombinedMax": true,
                    "ItemName": "Frenzy Flower",
                    "ItemSprite": "icons_9_5"
                }
            ]
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": "battle_golem_red_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyGooWall",
        "Name": "Ticklish",
        "Categories": [
            "Giant"
        ],
        "HP": 20,
        "Pow": 10,
        "Def": 13,
        "Spd": 13,
        "Mov": 3,
        "Exp": 6,
        "Money": 5,
        "Rewards": {
            "Operator": "AND",
            "List": [
                {
                    "ItemType": "ItemSpiceLeaf",
                    "ItemName": "Spice Leaf",
                    "ItemSprite": "icons_5_6"
                }
            ]
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemGoldBlossom",
                        "ItemName": "Gold Blossom",
                        "ItemSprite": "icons_8_5"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemGoldBlossom",
                        "ItemName": "Gold Blossom",
                        "ItemSprite": "icons_8_5"
                    }
                ]
            },
            "Great": {
                "Operator": "OR",
                "List": [
                    {
                        "ItemType": "ItemSweetCake",
                        "MaxRewarded": 3,
                        "MaxOwned": 3,
                        "ItemName": "Sweet Cake",
                        "ItemSprite": "icons_6_12"
                    },
                    {
                        "ItemType": "ItemGoldBlossom",
                        "ItemName": "Gold Blossom",
                        "ItemSprite": "icons_8_5"
                    }
                ]
            }
        },
        "Sprite": "battle_goowall_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyGrump",
        "Name": "Great Grump",
        "Categories": [
            "Giant"
        ],
        "HP": 15,
        "Pow": 10,
        "Def": 9,
        "Spd": 10,
        "Mov": 3,
        "Exp": 5,
        "Money": 4,
        "Rewards": {
            "Operator": "AND",
            "List": [
                {
                    "ItemType": "ItemBlueBlossom",
                    "MaxRewarded": 1,
                    "MaxOwned": 1,
                    "ItemName": "Blue Blossom",
                    "ItemSprite": "icons_7_5"
                }
            ]
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": "battle_grump_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyHandBig",
        "Name": "Underclaw",
        "Categories": [],
        "HP": 20,
        "Pow": 38,
        "Def": 70,
        "Spd": 45,
        "Mov": 3,
        "Exp": 30,
        "Money": 50,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": "battle_blackhand2_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyHandSmall",
        "Name": "Underhand",
        "Categories": [],
        "HP": 25,
        "Pow": 34,
        "Def": 66,
        "Spd": 37,
        "Mov": 3,
        "Exp": 30,
        "Money": 50,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": "battle_blackhand_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyHoptic",
        "Name": "Hoptic",
        "Categories": [
            "Magic"
        ],
        "HP": 14,
        "Pow": 23,
        "Def": 30,
        "Spd": 24,
        "Mov": 4,
        "Exp": 12,
        "Money": 12,
        "Rewards": {
            "Operator": "AND",
            "List": [
                {
                    "ItemType": "ItemHoneycrisp",
                    "MaxRewarded": 1,
                    "MaxOwned": 2,
                    "ItemName": "Honeycrisp",
                    "ItemSprite": "icons_2_7"
                }
            ]
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemPowerCherry",
                        "ItemName": "Pow Cherry",
                        "ItemSprite": "icons_0_10"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemPowerCherry",
                        "ItemName": "Pow Cherry",
                        "ItemSprite": "icons_0_10"
                    }
                ]
            },
            "Great": {
                "Operator": "OR",
                "List": [
                    {
                        "ItemType": "ItemPinkPods",
                        "MaxRewarded": 3,
                        "MaxOwned": 3,
                        "ItemName": "Pink Pods",
                        "ItemSprite": "icons_6_16"
                    },
                    {
                        "ItemType": "ItemPowerCherry",
                        "ItemName": "Pow Cherry",
                        "ItemSprite": "icons_0_10"
                    }
                ]
            }
        },
        "Sprite": "battle_hoptic_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyHydrarg",
        "Name": "Hydrarg",
        "Categories": [
            "Armored",
            "Magic"
        ],
        "HP": 20,
        "Pow": 25,
        "Def": 40,
        "Spd": 28,
        "Mov": 3,
        "Exp": 20,
        "Money": 20,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": "battle_mercury_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyIbn",
        "Name": "Oxley",
        "Categories": [
            "Human"
        ],
        "HP": 10,
        "Pow": 6,
        "Def": 6,
        "Spd": 10,
        "Mov": 3,
        "Exp": 1,
        "Money": 0,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": "battle_ibn_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyJailbob",
        "Name": "Jailbob",
        "Categories": [
            "Armored"
        ],
        "HP": 10,
        "Pow": 11,
        "Def": 18,
        "Spd": 16,
        "Mov": 3,
        "Exp": 6,
        "Money": 5,
        "Rewards": {
            "Operator": "AND",
            "List": [
                {
                    "ItemType": "ItemGoldBlossom",
                    "MaxRewarded": 2,
                    "MaxOwned": 2,
                    "ItemName": "Gold Blossom",
                    "ItemSprite": "icons_8_5"
                }
            ]
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemMiniMelon",
                        "ItemName": "Mini Melon",
                        "ItemSprite": "icons_1_9"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemMiniMelon",
                        "ItemName": "Mini Melon",
                        "ItemSprite": "icons_1_9"
                    }
                ]
            },
            "Great": {
                "Operator": "OR",
                "List": [
                    {
                        "ItemType": "ItemCaveAcorn",
                        "MaxRewarded": 3,
                        "MaxOwned": 3,
                        "ItemName": "Cave Acorn",
                        "ItemSprite": "icons_3_11"
                    },
                    {
                        "ItemType": "ItemMiniMelon",
                        "ItemName": "Mini Melon",
                        "ItemSprite": "icons_1_9"
                    }
                ]
            }
        },
        "Sprite": "battle_manacle_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyJellyBlack",
        "Name": "Bogeyblob",
        "Categories": [],
        "HP": 8,
        "Pow": 11,
        "Def": 16,
        "Spd": 16,
        "Mov": 3,
        "Exp": 4,
        "Money": 4,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemMoldyShroom",
                        "ItemName": "Moldy Shroom",
                        "ItemSprite": "icons_3_7"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemMoldyShroom",
                        "ItemName": "Moldy Shroom",
                        "ItemSprite": "icons_3_7"
                    }
                ]
            },
            "Great": {
                "Operator": "OR",
                "List": [
                    {
                        "ItemType": "ItemRancidFruit",
                        "MaxRewarded": 1,
                        "MaxOwned": 1,
                        "ItemName": "Rancid Fruit",
                        "ItemSprite": "icons_7_15"
                    },
                    {
                        "ItemType": "ItemMoldyShroom",
                        "ItemName": "Moldy Shroom",
                        "ItemSprite": "icons_3_7"
                    }
                ]
            }
        },
        "Sprite": "battle_jelly_black_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyJellyGreen",
        "Name": "Slimy",
        "Categories": [],
        "HP": 7,
        "Pow": 10,
        "Def": 12,
        "Spd": 13,
        "Mov": 3,
        "Exp": 0,
        "Money": 0,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemSmallMushroom",
                        "ItemName": "Small Mushroom",
                        "ItemSprite": "icons_4_6"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemSmallMushroom",
                        "ItemName": "Small Mushroom",
                        "ItemSprite": "icons_4_6"
                    }
                ]
            },
            "Great": {
                "Operator": "OR",
                "List": [
                    {
                        "ItemType": "ItemSpiceLeaf",
                        "MaxRewarded": 1,
                        "MaxOwned": 1,
                        "ItemName": "Spice Leaf",
                        "ItemSprite": "icons_5_6"
                    },
                    {
                        "ItemType": "ItemSmallMushroom",
                        "ItemName": "Small Mushroom",
                        "ItemSprite": "icons_4_6"
                    }
                ]
            }
        },
        "Sprite": "battle_jelly_green_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyJellyGreenLab",
        "Name": "Slimy",
        "Categories": [],
        "HP": 7,
        "Pow": 10,
        "Def": 12,
        "Spd": 13,
        "Mov": 3,
        "Exp": 2,
        "Money": 2,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemSmallMushroom",
                        "ItemName": "Small Mushroom",
                        "ItemSprite": "icons_4_6"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemSmallMushroom",
                        "ItemName": "Small Mushroom",
                        "ItemSprite": "icons_4_6"
                    }
                ]
            },
            "Great": {
                "Operator": "OR",
                "List": [
                    {
                        "ItemType": "ItemSpiceLeaf",
                        "MaxRewarded": 1,
                        "MaxOwned": 1,
                        "ItemName": "Spice Leaf",
                        "ItemSprite": "icons_5_6"
                    },
                    {
                        "ItemType": "ItemSmallMushroom",
                        "ItemName": "Small Mushroom",
                        "ItemSprite": "icons_4_6"
                    }
                ]
            }
        },
        "Sprite": "battle_jelly_green_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyJellyRed",
        "Name": "Oozy",
        "Categories": [],
        "HP": 8,
        "Pow": 10,
        "Def": 12,
        "Spd": 13,
        "Mov": 3,
        "Exp": 0,
        "Money": 0,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": "battle_jelly_red_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyJellyYellow",
        "Name": "Fizzy",
        "Categories": [],
        "HP": 7,
        "Pow": 10,
        "Def": 12,
        "Spd": 13,
        "Mov": 2,
        "Exp": 0,
        "Money": 0,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": "battle_jelly_yellow_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyKitten",
        "Name": "Adorable Kitten",
        "Categories": [],
        "HP": 60,
        "Pow": 10,
        "Def": 8,
        "Spd": 11,
        "Mov": 3,
        "Exp": 30,
        "Money": 0,
        "Rewards": {
            "Operator": "AND",
            "List": [
                {
                    "ItemType": "ItemRareCoin",
                    "ItemName": "Rare Coin",
                    "ItemSprite": "icons_8_12"
                },
                {
                    "ItemType": "GlassHairpin",
                    "ItemName": "Glass Hairpin",
                    "ItemSprite": "accessories_1_3"
                }
            ]
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": "cat_white_0_2",
        "Notes": []
    },
    {
        "ClassName": "EnemyKittenCrystal",
        "Name": "Beryllous",
        "Categories": [
            "Armored",
            "Magic"
        ],
        "HP": 15,
        "Pow": 10,
        "Def": 12,
        "Spd": 11,
        "Mov": 3,
        "Exp": 1,
        "Money": 0,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": "battle_crystal_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyLampBlue",
        "Name": "Envy",
        "Categories": [],
        "HP": 8,
        "Pow": 7,
        "Def": 6,
        "Spd": 8,
        "Mov": 2,
        "Exp": 5,
        "Money": 0,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": null,
        "Notes": []
    },
    {
        "ClassName": "EnemyLampRed",
        "Name": "Zeal",
        "Categories": [],
        "HP": 8,
        "Pow": 7,
        "Def": 6,
        "Spd": 8,
        "Mov": 2,
        "Exp": 5,
        "Money": 0,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": null,
        "Notes": []
    },
    {
        "ClassName": "EnemyLantern",
        "Name": "Turmoil",
        "Categories": [],
        "HP": 20,
        "Pow": 8,
        "Def": 8,
        "Spd": 10,
        "Mov": 3,
        "Exp": 10,
        "Money": 0,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": "battle_lantern_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyLanternFlameBlue",
        "Name": "Blue Flame",
        "Categories": [],
        "HP": 2,
        "Pow": 10,
        "Def": 7,
        "Spd": 10,
        "Mov": 1,
        "Exp": 0,
        "Money": 0,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": "battle_lantern_flame_4_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyLanternFlameRed",
        "Name": "Red Flame",
        "Categories": [],
        "HP": 2,
        "Pow": 10,
        "Def": 7,
        "Spd": 10,
        "Mov": 1,
        "Exp": 0,
        "Money": 0,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": "battle_lantern_flame_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyLegionCreep",
        "Name": "The Creep",
        "Categories": [
            "Magic",
            "Human"
        ],
        "HP": 30,
        "Pow": 29,
        "Def": 48,
        "Spd": 35,
        "Mov": 4,
        "Exp": 0,
        "Money": 0,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": "battle_ghost_skinny_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyLegionDancer",
        "Name": "The Dancer",
        "Categories": [
            "Magic",
            "Human"
        ],
        "HP": 30,
        "Pow": 22,
        "Def": 48,
        "Spd": 35,
        "Mov": 4,
        "Exp": 0,
        "Money": 0,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": "battle_ghost_fat_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyLegionEoc",
        "Name": "Eoc",
        "Categories": [
            "Magic",
            "Human"
        ],
        "HP": 50,
        "Pow": 31,
        "Def": 48,
        "Spd": 35,
        "Mov": 4,
        "Exp": 0,
        "Money": 0,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": "battle_eoc_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyLegionEoc2",
        "Name": "Eoc",
        "Categories": [
            "Magic",
            "Human"
        ],
        "HP": 80,
        "Pow": 31,
        "Def": 48,
        "Spd": 50,
        "Mov": 4,
        "Exp": 0,
        "Money": 0,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemGhostCookie",
                        "ItemName": "Ghost Cookie",
                        "ItemSprite": "icons_5_17"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemGhostCookie",
                        "ItemName": "Ghost Cookie",
                        "ItemSprite": "icons_5_17"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemGhostCookie",
                        "ItemName": "Ghost Cookie",
                        "ItemSprite": "icons_5_17"
                    },
                    {
                        "ItemType": "GhostPendant",
                        "MaxRewarded": 1,
                        "MaxOwned": 2,
                        "ItemName": "Ghost Pendant",
                        "ItemSprite": "accessories_0_7"
                    }
                ]
            }
        },
        "Sprite": "battle_eoc2_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyLegionEoc3",
        "Name": "Eoc\uff11",
        "Categories": [
            "Magic",
            "Human"
        ],
        "HP": 60,
        "Pow": 31,
        "Def": 48,
        "Spd": 35,
        "Mov": 4,
        "Exp": 100,
        "Money": 0,
        "Rewards": {
            "Operator": "AND",
            "List": [
                {
                    "ItemType": "ItemPrizeMedal",
                    "ItemName": "Prize Medal",
                    "ItemSprite": "icons_3_16"
                }
            ]
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemGhostCookie",
                        "ItemName": "Ghost Cookie",
                        "ItemSprite": "icons_5_17"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemGhostCookie",
                        "ItemName": "Ghost Cookie",
                        "ItemSprite": "icons_5_17"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemGhostCookie",
                        "ItemName": "Ghost Cookie",
                        "ItemSprite": "icons_5_17"
                    },
                    {
                        "ItemType": "GhostPendant",
                        "MaxRewarded": 1,
                        "MaxOwned": 2,
                        "ItemName": "Ghost Pendant",
                        "ItemSprite": "accessories_0_7"
                    }
                ]
            }
        },
        "Sprite": "battle_eoc2_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyLegionEoc4",
        "Name": "Eoc\uff12",
        "Categories": [
            "Magic"
        ],
        "HP": 50,
        "Pow": 31,
        "Def": 52,
        "Spd": 35,
        "Mov": 3,
        "Exp": 100,
        "Money": 0,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemGhostCookie",
                        "ItemName": "Ghost Cookie",
                        "ItemSprite": "icons_5_17"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemGhostCookie",
                        "ItemName": "Ghost Cookie",
                        "ItemSprite": "icons_5_17"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemGhostCookie",
                        "ItemName": "Ghost Cookie",
                        "ItemSprite": "icons_5_17"
                    },
                    {
                        "ItemType": "GhostPendant",
                        "MaxRewarded": 1,
                        "MaxOwned": 2,
                        "ItemName": "Ghost Pendant",
                        "ItemSprite": "accessories_0_7"
                    }
                ]
            }
        },
        "Sprite": "battle_eoc2_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyLeveretto",
        "Name": "Leveretto",
        "Categories": [
            "Human"
        ],
        "HP": 40,
        "Pow": 52,
        "Def": 100,
        "Spd": 60,
        "Mov": 3,
        "Exp": 40,
        "Money": 50,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": "battle_leveretto_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyLily",
        "Name": "Ill Lily",
        "Categories": [],
        "HP": 12,
        "Pow": 10,
        "Def": 8,
        "Spd": 11,
        "Mov": 2,
        "Exp": 3,
        "Money": 3,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": "battle_lily_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyMercuroid",
        "Name": "Mercuroid",
        "Categories": [
            "Armored",
            "Magic"
        ],
        "HP": 20,
        "Pow": 22,
        "Def": 40,
        "Spd": 28,
        "Mov": 3,
        "Exp": 20,
        "Money": 20,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": "battle_mercury_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyMimic",
        "Name": "Bogeybox",
        "Categories": [
            "None"
        ],
        "HP": 30,
        "Pow": 23,
        "Def": 8,
        "Spd": 8,
        "Mov": 3,
        "Exp": 50,
        "Money": 0,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": "battle_mimic_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyMiniSkull",
        "Name": "Smallbones",
        "Categories": [],
        "HP": 3,
        "Pow": 9,
        "Def": 8,
        "Spd": 10,
        "Mov": 3,
        "Exp": 0,
        "Money": 0,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": "battle_darkskull_mini_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyMorpie",
        "Name": "Morpie",
        "Categories": [],
        "HP": 20,
        "Pow": 12,
        "Def": 15,
        "Spd": 15,
        "Mov": 3,
        "Exp": 5,
        "Money": 5,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": "battle_morpie_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyMushroom",
        "Name": "Bolete",
        "Categories": [],
        "HP": 4,
        "Pow": 7,
        "Def": 6,
        "Spd": 8,
        "Mov": 2,
        "Exp": 3,
        "Money": 3,
        "Rewards": {
            "Operator": "OR",
            "List": [
                {
                    "ItemType": "ItemSmallMushroom",
                    "MaxRewarded": 2,
                    "MaxOwned": 5,
                    "ItemName": "Small Mushroom",
                    "ItemSprite": "icons_4_6"
                },
                {
                    "ItemType": "ItemRedMushroom",
                    "MaxRewarded": 1,
                    "MaxOwned": 2,
                    "ItemName": "Red Mushroom",
                    "ItemSprite": "icons_4_5"
                }
            ]
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": "battle_mushroom_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyOxley1",
        "Name": "Oxley?",
        "Categories": [
            "Human"
        ],
        "HP": 80,
        "Pow": 54,
        "Def": 110,
        "Spd": 80,
        "Mov": 4,
        "Exp": 0,
        "Money": 0,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": "battle_oxley_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyOxley2",
        "Name": "Oxley?",
        "Categories": [
            "Human"
        ],
        "HP": 100,
        "Pow": 54,
        "Def": 110,
        "Spd": 80,
        "Mov": 4,
        "Exp": 0,
        "Money": 0,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": "battle_oxley_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyOxley3",
        "Name": "Oxley?",
        "Categories": [
            "Human"
        ],
        "HP": 120,
        "Pow": 54,
        "Def": 110,
        "Spd": 100,
        "Mov": 4,
        "Exp": 0,
        "Money": 0,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": "battle_oxley_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyPaneAttacker",
        "Name": "Rocket Pane",
        "Categories": [],
        "HP": 10,
        "Pow": 10,
        "Def": 13,
        "Spd": 13,
        "Mov": 3,
        "Exp": 1,
        "Money": 4,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemHotBerry",
                        "MaxRewarded": 3,
                        "MaxOwned": 3,
                        "ItemName": "Hot Berry",
                        "ItemSprite": "icons_6_6"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemHotBerry",
                        "MaxRewarded": 3,
                        "MaxOwned": 3,
                        "ItemName": "Hot Berry",
                        "ItemSprite": "icons_6_6"
                    }
                ]
            },
            "Great": {
                "Operator": "OR",
                "List": [
                    {
                        "ItemType": "ItemThornBerries",
                        "MaxRewarded": 1,
                        "MaxOwned": 1,
                        "ItemName": "Thorn Berries",
                        "ItemSprite": "icons_2_10"
                    },
                    {
                        "ItemType": "ItemHotBerry",
                        "MaxRewarded": 3,
                        "MaxOwned": 3,
                        "ItemName": "Hot Berry",
                        "ItemSprite": "icons_6_6"
                    }
                ]
            }
        },
        "Sprite": "battle_pane_attacker_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyPaneBlocker",
        "Name": "Safety Pane",
        "Categories": [],
        "HP": 10,
        "Pow": 10,
        "Def": 13,
        "Spd": 13,
        "Mov": 3,
        "Exp": 1,
        "Money": 4,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemRockSeed",
                        "MaxRewarded": 3,
                        "MaxOwned": 3,
                        "ItemName": "Rock Seed",
                        "ItemSprite": "icons_9_6"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemRockSeed",
                        "MaxRewarded": 3,
                        "MaxOwned": 3,
                        "ItemName": "Rock Seed",
                        "ItemSprite": "icons_9_6"
                    }
                ]
            },
            "Great": {
                "Operator": "OR",
                "List": [
                    {
                        "ItemType": "ItemHardNut",
                        "MaxRewarded": 1,
                        "MaxOwned": 1,
                        "ItemName": "Hard Nut",
                        "ItemSprite": "icons_3_10"
                    },
                    {
                        "ItemType": "ItemRockSeed",
                        "MaxRewarded": 3,
                        "MaxOwned": 3,
                        "ItemName": "Rock Seed",
                        "ItemSprite": "icons_9_6"
                    }
                ]
            }
        },
        "Sprite": "battle_pane_blocker_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyPaneHealer",
        "Name": "Love Pane",
        "Categories": [],
        "HP": 10,
        "Pow": 10,
        "Def": 13,
        "Spd": 13,
        "Mov": 3,
        "Exp": 1,
        "Money": 4,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemRedMushroom",
                        "MaxRewarded": 3,
                        "MaxOwned": 3,
                        "ItemName": "Red Mushroom",
                        "ItemSprite": "icons_4_5"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemRedMushroom",
                        "MaxRewarded": 3,
                        "MaxOwned": 3,
                        "ItemName": "Red Mushroom",
                        "ItemSprite": "icons_4_5"
                    }
                ]
            },
            "Great": {
                "Operator": "OR",
                "List": [
                    {
                        "ItemType": "ItemBlueBlossom",
                        "MaxRewarded": 2,
                        "MaxOwned": 2,
                        "ItemName": "Blue Blossom",
                        "ItemSprite": "icons_7_5"
                    },
                    {
                        "ItemType": "ItemRedMushroom",
                        "MaxRewarded": 3,
                        "MaxOwned": 3,
                        "ItemName": "Red Mushroom",
                        "ItemSprite": "icons_4_5"
                    }
                ]
            }
        },
        "Sprite": "battle_pane_healer_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyPants",
        "Name": "Trouncers",
        "Categories": [
            "None"
        ],
        "HP": 15,
        "Pow": 17,
        "Def": 18,
        "Spd": 18,
        "Mov": 4,
        "Exp": 1,
        "Money": 10,
        "Rewards": {
            "Operator": "OR",
            "List": [
                {
                    "ItemType": "ItemDewPlum",
                    "MaxRewarded": 1,
                    "MaxOwned": 2,
                    "ItemName": "Dew Plum",
                    "ItemSprite": "icons_1_7"
                },
                {
                    "ItemType": "ItemMiniMelon",
                    "MaxRewarded": 1,
                    "MaxOwned": 3,
                    "ItemName": "Mini Melon",
                    "ItemSprite": "icons_1_9"
                }
            ]
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemMiniMelon",
                        "ItemName": "Mini Melon",
                        "ItemSprite": "icons_1_9"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemMiniMelon",
                        "ItemName": "Mini Melon",
                        "ItemSprite": "icons_1_9"
                    }
                ]
            },
            "Great": {
                "Operator": "OR",
                "List": [
                    {
                        "ItemType": "ItemHoneycrisp",
                        "MaxRewarded": 3,
                        "MaxOwned": 3,
                        "ItemName": "Honeycrisp",
                        "ItemSprite": "icons_2_7"
                    },
                    {
                        "ItemType": "ItemMiniMelon",
                        "ItemName": "Mini Melon",
                        "ItemSprite": "icons_1_9"
                    }
                ]
            }
        },
        "Sprite": "battle_pants_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyPlane",
        "Name": "Paper Flier",
        "Categories": [
            "Flying"
        ],
        "HP": 14,
        "Pow": 13,
        "Def": 17,
        "Spd": 18,
        "Mov": 3,
        "Exp": 6,
        "Money": 6,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": "battle_plane_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyQuill",
        "Name": "Paraquill",
        "Categories": [
            "None"
        ],
        "HP": 20,
        "Pow": 25,
        "Def": 35,
        "Spd": 25,
        "Mov": 4,
        "Exp": 20,
        "Money": 20,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemMiniMelon",
                        "ItemName": "Mini Melon",
                        "ItemSprite": "icons_1_9"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemMiniMelon",
                        "ItemName": "Mini Melon",
                        "ItemSprite": "icons_1_9"
                    }
                ]
            },
            "Great": {
                "Operator": "OR",
                "List": [
                    {
                        "ItemType": "ItemNexusQuill",
                        "MaxRewarded": 1,
                        "MaxOwned": 1,
                        "ItemName": "Nexus Quill",
                        "ItemSprite": "icons_4_16"
                    },
                    {
                        "ItemType": "ItemMiniMelon",
                        "ItemName": "Mini Melon",
                        "ItemSprite": "icons_1_9"
                    }
                ]
            }
        },
        "Sprite": "battle_quill_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyQuill2",
        "Name": "Brollychog",
        "Categories": [
            "None"
        ],
        "HP": 18,
        "Pow": 28,
        "Def": 46,
        "Spd": 30,
        "Mov": 4,
        "Exp": 20,
        "Money": 20,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemMiniMelon",
                        "ItemName": "Mini Melon",
                        "ItemSprite": "icons_1_9"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemMiniMelon",
                        "ItemName": "Mini Melon",
                        "ItemSprite": "icons_1_9"
                    }
                ]
            },
            "Great": {
                "Operator": "OR",
                "List": [
                    {
                        "ItemType": "ItemNexusQuill",
                        "MaxRewarded": 1,
                        "MaxOwned": 1,
                        "ItemName": "Nexus Quill",
                        "ItemSprite": "icons_4_16"
                    },
                    {
                        "ItemType": "ItemMiniMelon",
                        "ItemName": "Mini Melon",
                        "ItemSprite": "icons_1_9"
                    }
                ]
            }
        },
        "Sprite": "battle_quill2_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyRadegund",
        "Name": "Radegund",
        "Categories": [
            "Human"
        ],
        "HP": 200,
        "Pow": 34,
        "Def": 52,
        "Spd": 60,
        "Mov": 4,
        "Exp": 150,
        "Money": 0,
        "Rewards": {
            "Operator": "AND",
            "List": [
                {
                    "ItemType": "ItemGoldShroom",
                    "ItemName": "Gold Shroom",
                    "ItemSprite": "icons_9_15"
                },
                {
                    "ItemType": "ItemPrizeMedal",
                    "ItemName": "Prize Medal",
                    "ItemSprite": "icons_3_16"
                },
                {
                    "ItemType": "SummerSash",
                    "ItemName": "Summer Sash",
                    "ItemSprite": "accessories_2_7"
                }
            ]
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemGoldShroom",
                        "ItemName": "Gold Shroom",
                        "ItemSprite": "icons_9_15"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemGoldShroom",
                        "ItemName": "Gold Shroom",
                        "ItemSprite": "icons_9_15"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemGoldShroom",
                        "ItemName": "Gold Shroom",
                        "ItemSprite": "icons_9_15"
                    },
                    {
                        "ItemType": "SpringSash",
                        "ItemName": "Spring Sash",
                        "ItemSprite": "accessories_1_7"
                    }
                ]
            }
        },
        "Sprite": "battle_radegund_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyRedBird",
        "Name": "Goldfeather",
        "Categories": [],
        "HP": 6,
        "Pow": 7,
        "Def": 7,
        "Spd": 10,
        "Mov": 3,
        "Exp": 3,
        "Money": 3,
        "Rewards": {
            "Operator": "AND",
            "List": [
                {
                    "ItemType": "ItemHotBerry",
                    "MaxRewarded": 1,
                    "MaxOwned": 1,
                    "ItemName": "Hot Berry",
                    "ItemSprite": "icons_6_6"
                }
            ]
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": "battle_redbird_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyRedMushroom",
        "Name": "Amanita",
        "Categories": [],
        "HP": 12,
        "Pow": 12,
        "Def": 5,
        "Spd": 7,
        "Mov": 2,
        "Exp": 5,
        "Money": 3,
        "Rewards": {
            "Operator": "AND",
            "List": [
                {
                    "ItemType": "ItemHotBerry",
                    "MaxRewarded": 2,
                    "MaxOwned": 2,
                    "IsCombinedMax": true,
                    "ItemName": "Hot Berry",
                    "ItemSprite": "icons_6_6"
                }
            ]
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": "battle_red_mushroom_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyRiftCrystal",
        "Name": "Obsidian",
        "Categories": [
            "Armored",
            "Magic"
        ],
        "HP": 30,
        "Pow": 52,
        "Def": 120,
        "Spd": 60,
        "Mov": 4,
        "Exp": 0,
        "Money": 0,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": "battle_rift_crystal_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyRiftMercuroid",
        "Name": "Primordial",
        "Categories": [
            "Armored",
            "Magic"
        ],
        "HP": 30,
        "Pow": 52,
        "Def": 120,
        "Spd": 60,
        "Mov": 4,
        "Exp": 0,
        "Money": 0,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": "battle_rift_mercury_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyRiftSkull",
        "Name": "Underscourge",
        "Categories": [
            "Flying"
        ],
        "HP": 40,
        "Pow": 50,
        "Def": 110,
        "Spd": 60,
        "Mov": 3,
        "Exp": 0,
        "Money": 0,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": "battle_rift_skull_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyRock",
        "Name": "Hard Knock",
        "Categories": [
            "Armored"
        ],
        "HP": 3,
        "Pow": 7,
        "Def": 7,
        "Spd": 8,
        "Mov": 2,
        "Exp": 2,
        "Money": 2,
        "Rewards": {
            "Operator": "AND",
            "List": [
                {
                    "ItemType": "ItemSmallMushroom",
                    "MaxRewarded": 1,
                    "MaxOwned": 5,
                    "Notes": [
                        0
                    ],
                    "ItemName": "Small Mushroom",
                    "ItemSprite": "icons_4_6"
                }
            ]
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": "battle_rock_0_0",
        "Notes": [
            "has a 25% chance to drop even if you're at the limit"
        ]
    },
    {
        "ClassName": "EnemyRockLair",
        "Name": "Hard Knock",
        "Categories": [
            "Armored"
        ],
        "HP": 14,
        "Pow": 42,
        "Def": 23,
        "Spd": 10,
        "Mov": 3,
        "Exp": 55,
        "Money": 50,
        "Rewards": {
            "Operator": "AND",
            "List": [
                {
                    "ItemType": "ItemRedMushroom",
                    "MaxRewarded": 1,
                    "MaxOwned": 5,
                    "ItemName": "Red Mushroom",
                    "ItemSprite": "icons_4_5"
                }
            ]
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": "battle_rock_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyRockLairRed",
        "Name": "Craggyboy",
        "Categories": [
            "Armored"
        ],
        "HP": 10,
        "Pow": 18,
        "Def": 20,
        "Spd": 18,
        "Mov": 3,
        "Exp": 1,
        "Money": 5,
        "Rewards": {
            "Operator": "OR",
            "List": [
                {
                    "ItemType": "ItemRockNut",
                    "MaxRewarded": 1,
                    "MaxOwned": 1,
                    "IsCombinedMax": true,
                    "ItemName": "Rock Nut",
                    "ItemSprite": "icons_8_6"
                },
                {
                    "ItemType": "ItemRockSeed",
                    "MaxRewarded": 1,
                    "MaxOwned": 3,
                    "IsCombinedMax": true,
                    "ItemName": "Rock Seed",
                    "ItemSprite": "icons_9_6"
                }
            ]
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": "battle_rock_lair_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemySackbomb",
        "Name": "Sackbomb",
        "Categories": [
            "Human"
        ],
        "HP": 18,
        "Pow": 28,
        "Def": 52,
        "Spd": 32,
        "Mov": 3,
        "Exp": 20,
        "Money": 20,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemFrenzyFlower",
                        "ItemName": "Frenzy Flower",
                        "ItemSprite": "icons_9_5"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemFrenzyFlower",
                        "ItemName": "Frenzy Flower",
                        "ItemSprite": "icons_9_5"
                    }
                ]
            },
            "Great": {
                "Operator": "OR",
                "List": [
                    {
                        "ItemType": "ItemBlackBomb",
                        "MaxRewarded": 1,
                        "MaxOwned": 3,
                        "ItemName": "Black Bomb",
                        "ItemSprite": "icons_5_15"
                    },
                    {
                        "ItemType": "ItemFrenzyFlower",
                        "ItemName": "Frenzy Flower",
                        "ItemSprite": "icons_9_5"
                    }
                ]
            }
        },
        "Sprite": "battle_sackbomb_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemySackboy",
        "Name": "Sackboy",
        "Categories": [
            "Human"
        ],
        "HP": 18,
        "Pow": 28,
        "Def": 52,
        "Spd": 32,
        "Mov": 3,
        "Exp": 20,
        "Money": 20,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": "battle_sackboy_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemySackpole",
        "Name": "Sackpole",
        "Categories": [
            "Human"
        ],
        "HP": 18,
        "Pow": 28,
        "Def": 52,
        "Spd": 32,
        "Mov": 4,
        "Exp": 20,
        "Money": 20,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": "battle_sackpole_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemySkull",
        "Name": "Scourge",
        "Categories": [
            "Flying"
        ],
        "HP": 20,
        "Pow": 36,
        "Def": 54,
        "Spd": 37,
        "Mov": 3,
        "Exp": 25,
        "Money": 40,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCibilsSipper",
                        "ItemName": "Sadio's Sipper",
                        "ItemSprite": "icons_6_18"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCibilsSipper",
                        "ItemName": "Sadio's Sipper",
                        "ItemSprite": "icons_6_18"
                    }
                ]
            },
            "Great": {
                "Operator": "OR",
                "List": [
                    {
                        "ItemType": "ItemCibilsBlue",
                        "MaxRewarded": 3,
                        "MaxOwned": 3,
                        "ItemName": "Sadio's Blue",
                        "ItemSprite": "icons_1_18"
                    },
                    {
                        "ItemType": "ItemCibilsSipper",
                        "ItemName": "Sadio's Sipper",
                        "ItemSprite": "icons_6_18"
                    }
                ]
            }
        },
        "Sprite": "battle_skull_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemySnatcher",
        "Name": "Snatcher",
        "Categories": [
            "Flying",
            "Giant"
        ],
        "HP": 150,
        "Pow": 17,
        "Def": 20,
        "Spd": 22,
        "Mov": 5,
        "Exp": 50,
        "Money": 0,
        "Rewards": {
            "Operator": "AND",
            "List": [
                {
                    "ItemType": "ItemFrenzyFlower",
                    "ItemName": "Frenzy Flower",
                    "ItemSprite": "icons_9_5"
                },
                {
                    "ItemType": "ItemRareCoin",
                    "ItemName": "Rare Coin",
                    "ItemSprite": "icons_8_12"
                }
            ]
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "TheHoneyBee",
                        "ItemName": "The Honey Bee",
                        "ItemSprite": "armor_3_1"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "TheHoneyBee",
                        "ItemName": "The Honey Bee",
                        "ItemSprite": "armor_3_1"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "TheHoneyBee",
                        "ItemName": "The Honey Bee",
                        "ItemSprite": "armor_3_1"
                    },
                    {
                        "ItemType": "ItemFrenzyFlower",
                        "ItemName": "Frenzy Flower",
                        "ItemSprite": "icons_9_5"
                    }
                ]
            }
        },
        "Sprite": "battle_snatcher_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemySnatcherBoot",
        "Name": "Missing Boot",
        "Categories": [],
        "HP": 3,
        "Pow": 18,
        "Def": 18,
        "Spd": 18,
        "Mov": 3,
        "Exp": 0,
        "Money": 0,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "OR",
                "List": [
                    {
                        "ItemType": "HardyOnes",
                        "MaxRewarded": 1,
                        "MaxOwned": 3,
                        "ItemName": "Hardy Ones",
                        "ItemSprite": "feet_3_1"
                    },
                    {
                        "ItemType": "ItemMiniMelon",
                        "ItemName": "Mini Melon",
                        "ItemSprite": "icons_1_9"
                    }
                ]
            },
            "Nice": {
                "Operator": "OR",
                "List": [
                    {
                        "ItemType": "HardyOnes",
                        "MaxRewarded": 1,
                        "MaxOwned": 3,
                        "ItemName": "Hardy Ones",
                        "ItemSprite": "feet_3_1"
                    },
                    {
                        "ItemType": "ItemMiniMelon",
                        "ItemName": "Mini Melon",
                        "ItemSprite": "icons_1_9"
                    }
                ]
            },
            "Great": {
                "Operator": "OR",
                "List": [
                    {
                        "ItemType": "HardyOnes",
                        "MaxRewarded": 1,
                        "MaxOwned": 3,
                        "ItemName": "Hardy Ones",
                        "ItemSprite": "feet_3_1"
                    },
                    {
                        "ItemType": "ItemMiniMelon",
                        "ItemName": "Mini Melon",
                        "ItemSprite": "icons_1_9"
                    }
                ]
            }
        },
        "Sprite": "battle_boot_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemySnatcherPants",
        "Name": "Trouncers",
        "Categories": [],
        "HP": 15,
        "Pow": 17,
        "Def": 18,
        "Spd": 18,
        "Mov": 4,
        "Exp": 1,
        "Money": 10,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemMiniMelon",
                        "ItemName": "Mini Melon",
                        "ItemSprite": "icons_1_9"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemHoneycrisp",
                        "ItemName": "Honeycrisp",
                        "ItemSprite": "icons_2_7"
                    }
                ]
            }
        },
        "Sprite": "battle_pants_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemySpec",
        "Name": "Echo",
        "Categories": [
            "Magic",
            "Human"
        ],
        "HP": 100,
        "Pow": 52,
        "Def": 110,
        "Spd": 52,
        "Mov": 3,
        "Exp": 0,
        "Money": 0,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": null,
        "Notes": []
    },
    {
        "ClassName": "EnemySpecCrystal",
        "Name": "Fragment",
        "Categories": [
            "Magic"
        ],
        "HP": 1,
        "Pow": 52,
        "Def": 110,
        "Spd": 80,
        "Mov": 0,
        "Exp": 0,
        "Money": 0,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": "battle_spec_crystal_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemySpecGilda",
        "Name": "Echo",
        "Categories": [],
        "HP": 100,
        "Pow": 52,
        "Def": 110,
        "Spd": 52,
        "Mov": 3,
        "Exp": 0,
        "Money": 0,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": "battle_spec_gil_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemySpecIma",
        "Name": "Echo",
        "Categories": [],
        "HP": 100,
        "Pow": 52,
        "Def": 110,
        "Spd": 52,
        "Mov": 3,
        "Exp": 0,
        "Money": 0,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": "battle_spec_ima_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemySpecMaritte",
        "Name": "Echo",
        "Categories": [],
        "HP": 100,
        "Pow": 52,
        "Def": 110,
        "Spd": 52,
        "Mov": 3,
        "Exp": 0,
        "Money": 0,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": "battle_spec_mar_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemySpecPertisia",
        "Name": "Echo",
        "Categories": [],
        "HP": 100,
        "Pow": 52,
        "Def": 110,
        "Spd": 52,
        "Mov": 3,
        "Exp": 0,
        "Money": 0,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": "battle_spec_per_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemySpecPetronella",
        "Name": "Echo",
        "Categories": [],
        "HP": 100,
        "Pow": 52,
        "Def": 110,
        "Spd": 52,
        "Mov": 3,
        "Exp": 0,
        "Money": 0,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": "battle_spec_nel_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemySpecRook",
        "Name": "Echo",
        "Categories": [],
        "HP": 100,
        "Pow": 52,
        "Def": 110,
        "Spd": 52,
        "Mov": 3,
        "Exp": 0,
        "Money": 0,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": "battle_spec_rook_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemySpelltile",
        "Name": "Floorbogey",
        "Categories": [
            "Armored"
        ],
        "HP": 15,
        "Pow": 50,
        "Def": 100,
        "Spd": 60,
        "Mov": 3,
        "Exp": 40,
        "Money": 50,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": "battle_spelltile_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemySpelltile2",
        "Name": "Floorbogey",
        "Categories": [],
        "HP": 20,
        "Pow": 52,
        "Def": 100,
        "Spd": 60,
        "Mov": 3,
        "Exp": 40,
        "Money": 50,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": "battle_spelltile_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemySpinlamp",
        "Name": "Spinlamp",
        "Categories": [
            "Flying"
        ],
        "HP": 15,
        "Pow": 23,
        "Def": 26,
        "Spd": 20,
        "Mov": 4,
        "Exp": 12,
        "Money": 12,
        "Rewards": {
            "Operator": "AND",
            "List": [
                {
                    "ItemType": "ItemHoneycrisp",
                    "MaxRewarded": 1,
                    "MaxOwned": 3,
                    "ItemName": "Honeycrisp",
                    "ItemSprite": "icons_2_7"
                }
            ]
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemHoneycrisp",
                        "ItemName": "Honeycrisp",
                        "ItemSprite": "icons_2_7"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemHoneycrisp",
                        "ItemName": "Honeycrisp",
                        "ItemSprite": "icons_2_7"
                    }
                ]
            },
            "Great": {
                "Operator": "OR",
                "List": [
                    {
                        "ItemType": "ItemStarCookie",
                        "MaxRewarded": 1,
                        "MaxOwned": 1,
                        "ItemName": "Star Cookie",
                        "ItemSprite": "icons_8_15"
                    },
                    {
                        "ItemType": "ItemHoneycrisp",
                        "ItemName": "Honeycrisp",
                        "ItemSprite": "icons_2_7"
                    }
                ]
            }
        },
        "Sprite": "battle_lamp_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemySpinlamp2",
        "Name": "Spintorch",
        "Categories": [
            "Flying"
        ],
        "HP": 20,
        "Pow": 50,
        "Def": 95,
        "Spd": 60,
        "Mov": 4,
        "Exp": 40,
        "Money": 50,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCibilsBlue",
                        "ItemName": "Sadio's Blue",
                        "ItemSprite": "icons_1_18"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCibilsBlue",
                        "ItemName": "Sadio's Blue",
                        "ItemSprite": "icons_1_18"
                    }
                ]
            },
            "Great": {
                "Operator": "OR",
                "List": [
                    {
                        "ItemType": "ItemCibilsSparkly",
                        "MaxRewarded": 3,
                        "MaxOwned": 3,
                        "ItemName": "Sadio's Sparkly",
                        "ItemSprite": "icons_0_13"
                    },
                    {
                        "ItemType": "ItemCibilsBlue",
                        "ItemName": "Sadio's Blue",
                        "ItemSprite": "icons_1_18"
                    }
                ]
            }
        },
        "Sprite": "battle_lamp2_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemySpiritBax",
        "Name": "Bax",
        "Categories": [
            "Human"
        ],
        "HP": 80,
        "Pow": 23,
        "Def": 35,
        "Spd": 24,
        "Mov": 4,
        "Exp": 50,
        "Money": 0,
        "Rewards": {
            "Operator": "AND",
            "List": [
                {
                    "ItemType": "ItemBeautyToken",
                    "ItemName": "Beauty Token",
                    "ItemSprite": "icons_9_11"
                }
            ]
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "CovenReds",
                        "ItemName": "Coven Reds",
                        "ItemSprite": "armor_1_2"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "CovenReds",
                        "ItemName": "Coven Reds",
                        "ItemSprite": "armor_1_2"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "CovenReds",
                        "ItemName": "Coven Reds",
                        "ItemSprite": "armor_1_2"
                    },
                    {
                        "ItemType": "ItemFrenzyFlower",
                        "ItemName": "Frenzy Flower",
                        "ItemSprite": "icons_9_5"
                    }
                ]
            }
        },
        "Sprite": "battle_bax2_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemySpiritGilda",
        "Name": "Gilda",
        "Categories": [
            "Human"
        ],
        "HP": 50,
        "Pow": 23,
        "Def": 35,
        "Spd": 30,
        "Mov": 4,
        "Exp": 50,
        "Money": 0,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "TheCutest",
                        "ItemName": "The Cutest",
                        "ItemSprite": "armor_0_3"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "TheCutest",
                        "ItemName": "The Cutest",
                        "ItemSprite": "armor_0_3"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "TheCutest",
                        "ItemName": "The Cutest",
                        "ItemSprite": "armor_0_3"
                    },
                    {
                        "ItemType": "ItemCustardCake",
                        "ItemName": "Custard Cake",
                        "ItemSprite": "icons_8_16"
                    }
                ]
            }
        },
        "Sprite": "battle_gilda_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemySpiritIbn",
        "Name": "Oxley",
        "Categories": [
            "Human"
        ],
        "HP": 50,
        "Pow": 23,
        "Def": 35,
        "Spd": 24,
        "Mov": 3,
        "Exp": 50,
        "Money": 0,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "CovenGreens",
                        "ItemName": "Coven Greens",
                        "ItemSprite": "armor_2_2"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "CovenGreens",
                        "ItemName": "Coven Greens",
                        "ItemSprite": "armor_2_2"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "CovenGreens",
                        "ItemName": "Coven Greens",
                        "ItemSprite": "armor_2_2"
                    },
                    {
                        "ItemType": "ItemGoldShroom",
                        "ItemName": "Gold Shroom",
                        "ItemSprite": "icons_9_15"
                    }
                ]
            }
        },
        "Sprite": "battle_ibn_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemySpychopper",
        "Name": "Spychopper",
        "Categories": [
            "Flying"
        ],
        "HP": 30,
        "Pow": 50,
        "Def": 90,
        "Spd": 60,
        "Mov": 3,
        "Exp": 40,
        "Money": 50,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": "battle_spychopper_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemySpychopper2",
        "Name": "Spychopper",
        "Categories": [],
        "HP": 30,
        "Pow": 52,
        "Def": 98,
        "Spd": 60,
        "Mov": 3,
        "Exp": 40,
        "Money": 50,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": "battle_spychopper_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemySquishy",
        "Name": "Squishy",
        "Categories": [],
        "HP": 8,
        "Pow": 12,
        "Def": 5,
        "Spd": 7,
        "Mov": 2,
        "Exp": 3,
        "Money": 2,
        "Rewards": {
            "Operator": "OR",
            "List": [
                {
                    "ItemType": "ItemSmallMushroom",
                    "MaxRewarded": 10,
                    "MaxOwned": 10,
                    "IsCombinedMax": true,
                    "ItemName": "Small Mushroom",
                    "ItemSprite": "icons_4_6"
                },
                {
                    "ItemType": "ItemRedMushroom",
                    "MaxRewarded": 2,
                    "MaxOwned": 2,
                    "IsCombinedMax": true,
                    "ItemName": "Red Mushroom",
                    "ItemSprite": "icons_4_5"
                }
            ]
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": "battle_squishy_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyStinker",
        "Name": "Stinker",
        "Categories": [
            "Armored"
        ],
        "HP": 8,
        "Pow": 17,
        "Def": 26,
        "Spd": 18,
        "Mov": 3,
        "Exp": 1,
        "Money": 10,
        "Rewards": {
            "Operator": "AND",
            "List": [
                {
                    "ItemType": "ItemSpiceLeaf",
                    "MaxRewarded": 1,
                    "MaxOwned": 1,
                    "ItemName": "Spice Leaf",
                    "ItemSprite": "icons_5_6"
                }
            ]
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemHardNut",
                        "ItemName": "Hard Nut",
                        "ItemSprite": "icons_3_10"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemHardNut",
                        "ItemName": "Hard Nut",
                        "ItemSprite": "icons_3_10"
                    }
                ]
            },
            "Great": {
                "Operator": "OR",
                "List": [
                    {
                        "ItemType": "ItemCaveAcorn",
                        "MaxRewarded": 1,
                        "MaxOwned": 1,
                        "ItemName": "Cave Acorn",
                        "ItemSprite": "icons_3_11"
                    },
                    {
                        "ItemType": "ItemHardNut",
                        "ItemName": "Hard Nut",
                        "ItemSprite": "icons_3_10"
                    }
                ]
            }
        },
        "Sprite": "battle_stinker_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemySweepy",
        "Name": "Sweepy",
        "Categories": [],
        "HP": 10,
        "Pow": 9,
        "Def": 9,
        "Spd": 10,
        "Mov": 3,
        "Exp": 4,
        "Money": 3,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": "battle_sweepy_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyTarfrog",
        "Name": "Tarfrog",
        "Categories": [],
        "HP": 12,
        "Pow": 10,
        "Def": 13,
        "Spd": 13,
        "Mov": 3,
        "Exp": 4,
        "Money": 5,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemRedMushroom",
                        "ItemName": "Red Mushroom",
                        "ItemSprite": "icons_4_5"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemRedMushroom",
                        "ItemName": "Red Mushroom",
                        "ItemSprite": "icons_4_5"
                    }
                ]
            },
            "Great": {
                "Operator": "OR",
                "List": [
                    {
                        "ItemType": "ItemSpiceLeaf",
                        "MaxRewarded": 2,
                        "MaxOwned": 2,
                        "ItemName": "Spice Leaf",
                        "ItemSprite": "icons_5_6"
                    },
                    {
                        "ItemType": "ItemRedMushroom",
                        "ItemName": "Red Mushroom",
                        "ItemSprite": "icons_4_5"
                    }
                ]
            }
        },
        "Sprite": "battle_tarfrog_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyTinyStar",
        "Name": "Starpint",
        "Categories": [
            "None"
        ],
        "HP": 12,
        "Pow": 22,
        "Def": 22,
        "Spd": 18,
        "Mov": 2,
        "Exp": 1,
        "Money": 10,
        "Rewards": {
            "Operator": "AND",
            "List": [
                {
                    "ItemType": "ItemHoneycrisp",
                    "MaxRewarded": 1,
                    "MaxOwned": 1,
                    "ItemName": "Honeycrisp",
                    "ItemSprite": "icons_2_7"
                }
            ]
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemHoneycrisp",
                        "ItemName": "Honeycrisp",
                        "ItemSprite": "icons_2_7"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemHoneycrisp",
                        "ItemName": "Honeycrisp",
                        "ItemSprite": "icons_2_7"
                    }
                ]
            },
            "Great": {
                "Operator": "OR",
                "List": [
                    {
                        "ItemType": "ItemStarCookie",
                        "MaxRewarded": 1,
                        "MaxOwned": 1,
                        "ItemName": "Star Cookie",
                        "ItemSprite": "icons_8_15"
                    },
                    {
                        "ItemType": "ItemHoneycrisp",
                        "ItemName": "Honeycrisp",
                        "ItemSprite": "icons_2_7"
                    }
                ]
            }
        },
        "Sprite": "battle_tinystar_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyTreeHand",
        "Name": "Crank Root",
        "Categories": [],
        "HP": 6,
        "Pow": 11,
        "Def": 5,
        "Spd": 7,
        "Mov": 3,
        "Exp": 1,
        "Money": 1,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": "battle_treetrunk_12_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyTreeTrunk",
        "Name": "Hollow Crank",
        "Categories": [],
        "HP": 12,
        "Pow": 12,
        "Def": 5,
        "Spd": 7,
        "Mov": 2,
        "Exp": 7,
        "Money": 5,
        "Rewards": {
            "Operator": "AND",
            "List": [
                {
                    "ItemType": "ItemRedMushroom",
                    "MaxRewarded": 5,
                    "MaxOwned": 5,
                    "IsCombinedMax": true,
                    "ItemName": "Red Mushroom",
                    "ItemSprite": "icons_4_5"
                }
            ]
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": "battle_treetrunk_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyTrialBee",
        "Name": "Bumbler",
        "Categories": [],
        "HP": 20,
        "Pow": 50,
        "Def": 100,
        "Spd": 50,
        "Mov": 4,
        "Exp": 25,
        "Money": 30,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemDemonEye",
                        "ItemName": "Demon Eye",
                        "ItemSprite": "icons_7_18"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemDemonEye",
                        "ItemName": "Demon Eye",
                        "ItemSprite": "icons_7_18"
                    }
                ]
            },
            "Great": {
                "Operator": "OR",
                "List": [
                    {
                        "ItemType": "TheSpectacle",
                        "MaxRewarded": 1,
                        "MaxOwned": 1,
                        "ItemName": "The Spectacle",
                        "ItemSprite": "armor_2_5"
                    },
                    {
                        "ItemType": "ItemDemonEye",
                        "ItemName": "Demon Eye",
                        "ItemSprite": "icons_7_18"
                    }
                ]
            }
        },
        "Sprite": "battle_bee_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyTrialBlueBird",
        "Name": "Bluefeather",
        "Categories": [],
        "HP": 30,
        "Pow": 50,
        "Def": 100,
        "Spd": 50,
        "Mov": 3,
        "Exp": 3,
        "Money": 3,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": "battle_bluebird_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyTrialBook",
        "Name": "Mystery",
        "Categories": [],
        "HP": 30,
        "Pow": 50,
        "Def": 100,
        "Spd": 48,
        "Mov": 3,
        "Exp": 35,
        "Money": 50,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemDemonEye",
                        "ItemName": "Demon Eye",
                        "ItemSprite": "icons_7_18"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemDemonEye",
                        "ItemName": "Demon Eye",
                        "ItemSprite": "icons_7_18"
                    }
                ]
            },
            "Great": {
                "Operator": "OR",
                "List": [
                    {
                        "ItemType": "TheSpectacle",
                        "Notes": [
                            0
                        ],
                        "ItemName": "The Spectacle",
                        "ItemSprite": "armor_2_5"
                    },
                    {
                        "ItemType": "ItemDemonEye",
                        "ItemName": "Demon Eye",
                        "ItemSprite": "icons_7_18"
                    }
                ]
            }
        },
        "Sprite": "battle_book_purple_0_0",
        "Notes": [
            "only once per battle"
        ]
    },
    {
        "ClassName": "EnemyTrialCracked",
        "Name": "Cracked Ghost",
        "Categories": [],
        "HP": 30,
        "Pow": 54,
        "Def": 100,
        "Spd": 50,
        "Mov": 3,
        "Exp": 30,
        "Money": 50,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": "battle_cracked_ghost_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyTrialFlower",
        "Name": "Eyepoppy",
        "Categories": [],
        "HP": 30,
        "Pow": 50,
        "Def": 100,
        "Spd": 50,
        "Mov": 3,
        "Exp": 30,
        "Money": 40,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemDemonEye",
                        "ItemName": "Demon Eye",
                        "ItemSprite": "icons_7_18"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemDemonEye",
                        "ItemName": "Demon Eye",
                        "ItemSprite": "icons_7_18"
                    }
                ]
            },
            "Great": {
                "Operator": "OR",
                "List": [
                    {
                        "ItemType": "TheSpectacle",
                        "MaxRewarded": 1,
                        "MaxOwned": 1,
                        "ItemName": "The Spectacle",
                        "ItemSprite": "armor_2_5"
                    },
                    {
                        "ItemType": "ItemDemonEye",
                        "ItemName": "Demon Eye",
                        "ItemSprite": "icons_7_18"
                    }
                ]
            }
        },
        "Sprite": "battle_eyeflower_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyTrialRedBird",
        "Name": "Goldfeather",
        "Categories": [],
        "HP": 30,
        "Pow": 50,
        "Def": 100,
        "Spd": 50,
        "Mov": 3,
        "Exp": 3,
        "Money": 3,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": "battle_redbird_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyTrialSackboy",
        "Name": "Sackboy",
        "Categories": [],
        "HP": 30,
        "Pow": 54,
        "Def": 90,
        "Spd": 50,
        "Mov": 3,
        "Exp": 20,
        "Money": 20,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": "battle_sackboy_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyTrialSackpole",
        "Name": "Sackpole",
        "Categories": [],
        "HP": 30,
        "Pow": 50,
        "Def": 100,
        "Spd": 50,
        "Mov": 3,
        "Exp": 20,
        "Money": 20,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": "battle_sackpole_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyTrialStar",
        "Name": "Starpint",
        "Categories": [],
        "HP": 20,
        "Pow": 50,
        "Def": 100,
        "Spd": 50,
        "Mov": 2,
        "Exp": 1,
        "Money": 10,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": "battle_tinystar_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyTwinkle",
        "Name": "Twinkle",
        "Categories": [
            "Giant"
        ],
        "HP": 80,
        "Pow": 24,
        "Def": 28,
        "Spd": 24,
        "Mov": 4,
        "Exp": 0,
        "Money": 0,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemPinkPods",
                        "ItemName": "Pink Pods",
                        "ItemSprite": "icons_6_16"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemPinkPods",
                        "ItemName": "Pink Pods",
                        "ItemSprite": "icons_6_16"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemPinkPods",
                        "ItemName": "Pink Pods",
                        "ItemSprite": "icons_6_16"
                    },
                    {
                        "ItemType": "ItemStarCookie",
                        "ItemName": "Star Cookie",
                        "ItemSprite": "icons_8_15"
                    }
                ]
            }
        },
        "Sprite": "battle_twinkle_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyTwinkle2",
        "Name": "Twinkle",
        "Categories": [
            "Giant"
        ],
        "HP": 100,
        "Pow": 24,
        "Def": 28,
        "Spd": 25,
        "Mov": 4,
        "Exp": 100,
        "Money": 0,
        "Rewards": {
            "Operator": "AND",
            "List": [
                {
                    "ItemType": "ItemBeautyToken",
                    "ItemName": "Beauty Token",
                    "ItemSprite": "icons_9_11"
                },
                {
                    "ItemType": "SouthSwing",
                    "ItemName": "South Swing",
                    "ItemSprite": "armor_0_2"
                }
            ]
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemStarCookie",
                        "ItemName": "Star Cookie",
                        "ItemSprite": "icons_8_15"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemStarCookie",
                        "ItemName": "Star Cookie",
                        "ItemSprite": "icons_8_15"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemStarCookie",
                        "ItemName": "Star Cookie",
                        "ItemSprite": "icons_8_15"
                    },
                    {
                        "ItemType": "SouthSwing",
                        "ItemName": "South Swing",
                        "ItemSprite": "armor_0_2"
                    }
                ]
            }
        },
        "Sprite": "battle_twinkle_20_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyTwinkleBaby",
        "Name": "Twinklepint",
        "Categories": [
            "None"
        ],
        "HP": 12,
        "Pow": 23,
        "Def": 28,
        "Spd": 20,
        "Mov": 2,
        "Exp": 0,
        "Money": 0,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": "battle_tinystar2_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyTwinkleBaby2",
        "Name": "Red Dwork",
        "Categories": [
            "None"
        ],
        "HP": 12,
        "Pow": 25,
        "Def": 28,
        "Spd": 20,
        "Mov": 2,
        "Exp": 0,
        "Money": 0,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": "icons_8_11"
                    }
                ]
            }
        },
        "Sprite": "battle_tinystar3_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyUnseen",
        "Name": "Unseen",
        "Categories": [
            "Magic"
        ],
        "HP": 200,
        "Pow": 48,
        "Def": 75,
        "Spd": 80,
        "Mov": 4,
        "Exp": 500,
        "Money": 0,
        "Rewards": {
            "Operator": "AND",
            "List": [
                {
                    "ItemType": "ItemMythicCoin",
                    "ItemName": "Mythic Coin",
                    "ItemSprite": "icons_2_13"
                }
            ]
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemDemonEye",
                        "ItemName": "Demon Eye",
                        "ItemSprite": "icons_7_18"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemDemonEye",
                        "ItemName": "Demon Eye",
                        "ItemSprite": "icons_7_18"
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemDemonEye",
                        "ItemName": "Demon Eye",
                        "ItemSprite": "icons_7_18"
                    },
                    {
                        "ItemType": "ItemGhostCoin",
                        "ItemName": "Ghost Coin",
                        "ItemSprite": "icons_0_17"
                    }
                ]
            }
        },
        "Sprite": "battle_unseen_0_0",
        "Notes": []
    },
    {
        "ClassName": "EnemyUnseenCrackedGhost",
        "Name": "Cracked Ghost",
        "Categories": [],
        "HP": 30,
        "Pow": 46,
        "Def": 75,
        "Spd": 50,
        "Mov": 3,
        "Exp": 30,
        "Money": 50,
        "Rewards": {
            "Operator": "AND",
            "List": []
        },
        "Stealable": {
            "Oops": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemBeautyToken",
                        "ItemName": "Beauty Token",
                        "ItemSprite": "icons_9_11"
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemBeautyToken",
                        "ItemName": "Beauty Token",
                        "ItemSprite": "icons_9_11"
                    }
                ]
            },
            "Great": {
                "Operator": "OR",
                "List": [
                    {
                        "ItemType": "ItemGhostCookie",
                        "MaxRewarded": 1,
                        "MaxOwned": 5,
                        "ItemName": "Ghost Cookie",
                        "ItemSprite": "icons_5_17"
                    },
                    {
                        "ItemType": "ItemBeautyToken",
                        "ItemName": "Beauty Token",
                        "ItemSprite": "icons_9_11"
                    }
                ]
            }
        },
        "Sprite": "battle_cracked_ghost_0_0",
        "Notes": []
    }
];
