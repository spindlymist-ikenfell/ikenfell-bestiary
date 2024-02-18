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
        "Exp": {
            "Min": 0,
            "Max": 0
        },
        "Money": {
            "Min": 0,
            "Max": 0
        },
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
                        "ItemSprite": {
                            "Name": "icons_5_18",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 12
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCibilsSweetest",
                        "ItemName": "Sadio's Sweetest",
                        "ItemSprite": {
                            "Name": "icons_5_18",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 12
                        }
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
                        "ItemSprite": {
                            "Name": "icons_5_19",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 12
                        }
                    },
                    {
                        "ItemType": "ItemCibilsSweetest",
                        "ItemName": "Sadio's Sweetest",
                        "ItemSprite": {
                            "Name": "icons_5_18",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 12
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_aeldra_0_0",
            "Set": "battle_aeldra",
            "Width": 47,
            "Height": 42
        },
        "Notes": [],
        "NameTokens": [
            "Aeldra",
            "EnemyAeldra"
        ],
        "RewardTokens": [
            "Sadio's Sweetest",
            "Cordial",
            "Sweetest",
            "Rose Cordial",
            "Rose",
            "Sadio's"
        ]
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
        "Exp": {
            "Min": 0,
            "Max": 0
        },
        "Money": {
            "Min": 0,
            "Max": 0
        },
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_aeldra_40_0",
            "Set": "battle_aeldra",
            "Width": 10,
            "Height": 10
        },
        "Notes": [],
        "NameTokens": [
            "Crimson Node",
            "Crimson",
            "EnemyAeldraBomb",
            "Node"
        ],
        "RewardTokens": [
            "Coin",
            "Common",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 0,
            "Max": 0
        },
        "Money": {
            "Min": 0,
            "Max": 0
        },
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_redhand_0_0",
            "Set": "battle_redhand",
            "Width": 16,
            "Height": 27
        },
        "Notes": [],
        "NameTokens": [
            "Underclaw",
            "EnemyAeldraHand"
        ],
        "RewardTokens": [
            "Coin",
            "Common",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 400,
            "Max": 400
        },
        "Money": {
            "Min": 0,
            "Max": 0
        },
        "Rewards": {
            "Operator": "AND",
            "List": [
                {
                    "ItemType": "ItemGhostCoin",
                    "ItemName": "Ghost Coin",
                    "ItemSprite": {
                        "Name": "icons_0_17",
                        "Set": "icons",
                        "Width": 14,
                        "Height": 11
                    }
                },
                {
                    "ItemType": "ItemGhostCoin",
                    "ItemName": "Ghost Coin",
                    "ItemSprite": {
                        "Name": "icons_0_17",
                        "Set": "icons",
                        "Width": 14,
                        "Height": 11
                    }
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
                        "ItemSprite": {
                            "Name": "icons_6_19",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 13
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemSpecterAle",
                        "ItemName": "Specter Ale",
                        "ItemSprite": {
                            "Name": "icons_6_19",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 13
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemSpecterAle",
                        "ItemName": "Specter Ale",
                        "ItemSprite": {
                            "Name": "icons_6_19",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 13
                        }
                    },
                    {
                        "ItemType": "Blackstars",
                        "ItemName": "Blackstars",
                        "ItemSprite": {
                            "Name": "feet_7_2",
                            "Set": "feet",
                            "Width": 14,
                            "Height": 13
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_agony_3_0",
            "Set": "battle_agony",
            "Width": 38,
            "Height": 38
        },
        "Notes": [],
        "NameTokens": [
            "EnemyAgony",
            "Agony"
        ],
        "RewardTokens": [
            "Specter",
            "Ale",
            "Coin",
            "Blackstars",
            "Ghost Coin",
            "Specter Ale",
            "Ghost"
        ]
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
        "Exp": {
            "Min": 0,
            "Max": 0
        },
        "Money": {
            "Min": 0,
            "Max": 0
        },
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_reddrip_0_0",
            "Set": "battle_reddrip",
            "Width": 11,
            "Height": 21
        },
        "Notes": [],
        "NameTokens": [
            "Minor",
            "Spawn",
            "Minor Spawn",
            "EnemyAgonyDrip"
        ],
        "RewardTokens": [
            "Coin",
            "Common",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 0,
            "Max": 0
        },
        "Money": {
            "Min": 0,
            "Max": 0
        },
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_redsplash_0_0",
            "Set": "battle_redsplash",
            "Width": 14,
            "Height": 18
        },
        "Notes": [],
        "NameTokens": [
            "EnemyAgonyDrip2",
            "Major",
            "Spawn",
            "Major Spawn"
        ],
        "RewardTokens": [
            "Coin",
            "Common",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 0,
            "Max": 0
        },
        "Money": {
            "Min": 0,
            "Max": 0
        },
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_allcat_0_0",
            "Set": "battle_allcat",
            "Width": 40,
            "Height": 44
        },
        "Notes": [],
        "NameTokens": [
            "EnemyAllcat",
            "The Allcat",
            "The",
            "Allcat"
        ],
        "RewardTokens": [
            "Coin",
            "Common",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 0,
            "Max": 0
        },
        "Money": {
            "Min": 0,
            "Max": 0
        },
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_cat_19_0",
            "Set": "battle_cat",
            "Width": 14,
            "Height": 10
        },
        "Notes": [],
        "NameTokens": [
            "Sooty",
            "EnemyAllcatGrey"
        ],
        "RewardTokens": [
            "Coin",
            "Common",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 0,
            "Max": 0
        },
        "Money": {
            "Min": 0,
            "Max": 0
        },
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_cat_11_0",
            "Set": "battle_cat",
            "Width": 14,
            "Height": 10
        },
        "Notes": [],
        "NameTokens": [
            "EnemyAllcatOrange",
            "Tabby"
        ],
        "RewardTokens": [
            "Coin",
            "Common",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 0,
            "Max": 0
        },
        "Money": {
            "Min": 0,
            "Max": 0
        },
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_allcat_small_0_0",
            "Set": "battle_allcat_small",
            "Width": 16,
            "Height": 13
        },
        "Notes": [],
        "NameTokens": [
            "The Allcat",
            "The",
            "Allcat",
            "EnemyAllcatSmall"
        ],
        "RewardTokens": [
            "Coin",
            "Common",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 0,
            "Max": 0
        },
        "Money": {
            "Min": 0,
            "Max": 0
        },
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_cat_0_0",
            "Set": "battle_cat",
            "Width": 14,
            "Height": 10
        },
        "Notes": [],
        "NameTokens": [
            "EnemyAllcatWhite",
            "Snowy"
        ],
        "RewardTokens": [
            "Coin",
            "Common",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 40,
            "Max": 40
        },
        "Money": {
            "Min": 50,
            "Max": 50
        },
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_autochopper_0_0",
            "Set": "battle_autochopper",
            "Width": 18,
            "Height": 22
        },
        "Notes": [],
        "NameTokens": [
            "EnemyAutochopper",
            "Autochopper"
        ],
        "RewardTokens": [
            "Coin",
            "Common",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 40,
            "Max": 40
        },
        "Money": {
            "Min": 50,
            "Max": 50
        },
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_autochopper_0_0",
            "Set": "battle_autochopper",
            "Width": 18,
            "Height": 22
        },
        "Notes": [],
        "NameTokens": [
            "EnemyAutochopper2",
            "Autochopper"
        ],
        "RewardTokens": [
            "Coin",
            "Common",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 40,
            "Max": 40
        },
        "Money": {
            "Min": 50,
            "Max": 50
        },
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_autoeye_0_0",
            "Set": "battle_autoeye",
            "Width": 8,
            "Height": 18
        },
        "Notes": [],
        "NameTokens": [
            "EnemyAutoeye",
            "Autoeye"
        ],
        "RewardTokens": [
            "Coin",
            "Common",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 0,
            "Max": 0
        },
        "Money": {
            "Min": 0,
            "Max": 0
        },
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_bax_0_0",
            "Set": "battle_bax",
            "Width": 12,
            "Height": 24
        },
        "Notes": [],
        "NameTokens": [
            "EnemyBax",
            "Bax"
        ],
        "RewardTokens": [
            "Coin",
            "Common",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 0,
            "Max": 0
        },
        "Money": {
            "Min": 0,
            "Max": 0
        },
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_firesprite_0_0",
            "Set": "battle_firesprite",
            "Width": 21,
            "Height": 32
        },
        "Notes": [],
        "NameTokens": [
            "Beacon",
            "EnemyBeacon"
        ],
        "RewardTokens": [
            "Coin",
            "Common",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 25,
            "Max": 25
        },
        "Money": {
            "Min": 30,
            "Max": 30
        },
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
                        "ItemSprite": {
                            "Name": "icons_9_16",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 12
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemMintShroom",
                        "ItemName": "Mint Shroom",
                        "ItemSprite": {
                            "Name": "icons_9_16",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 12
                        }
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
                        "ItemSprite": {
                            "Name": "icons_2_18",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 11
                        }
                    },
                    {
                        "ItemType": "ItemMintShroom",
                        "ItemName": "Mint Shroom",
                        "ItemSprite": {
                            "Name": "icons_9_16",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 12
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_bee_0_0",
            "Set": "battle_bee",
            "Width": 15,
            "Height": 13
        },
        "Notes": [],
        "NameTokens": [
            "EnemyBee",
            "Bumbler"
        ],
        "RewardTokens": [
            "Mint",
            "Green",
            "Mint Shroom",
            "Shroom",
            "Sadio's",
            "Sadio's Green"
        ]
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
        "Exp": {
            "Min": 10,
            "Max": 10
        },
        "Money": {
            "Min": 0,
            "Max": 0
        },
        "Rewards": {
            "Operator": "AND",
            "List": [
                {
                    "ItemType": "Seawater",
                    "ItemName": "Seawater",
                    "ItemSprite": {
                        "Name": "hats_2_2",
                        "Set": "hats",
                        "Width": 14,
                        "Height": 10
                    }
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
                        "ItemSprite": {
                            "Name": "icons_7_5",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 13
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemBlueBlossom",
                        "ItemName": "Blue Blossom",
                        "ItemSprite": {
                            "Name": "icons_7_5",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 13
                        }
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
                        "ItemSprite": {
                            "Name": "icons_8_18",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 10
                        }
                    },
                    {
                        "ItemType": "ItemBlueBlossom",
                        "ItemName": "Blue Blossom",
                        "ItemSprite": {
                            "Name": "icons_7_5",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 13
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_blackhat_0_0",
            "Set": "battle_blackhat",
            "Width": 15,
            "Height": 24
        },
        "Notes": [],
        "NameTokens": [
            "Blackhat",
            "EnemyBlackhat"
        ],
        "RewardTokens": [
            "Blue",
            "Blue Blossom",
            "Big",
            "Blossom",
            "Bomb",
            "Seawater",
            "Big Bomb"
        ]
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
        "Exp": {
            "Min": 10,
            "Max": 10
        },
        "Money": {
            "Min": 0,
            "Max": 0
        },
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemGoldBlossom",
                        "ItemName": "Gold Blossom",
                        "ItemSprite": {
                            "Name": "icons_8_5",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 13
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemBlueBlossom",
                        "ItemName": "Blue Blossom",
                        "ItemSprite": {
                            "Name": "icons_7_5",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 13
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_bcleric_0_0",
            "Set": "battle_bcleric",
            "Width": 14,
            "Height": 21
        },
        "Notes": [],
        "NameTokens": [
            "EnemyBlackhatCleric",
            "Fetch"
        ],
        "RewardTokens": [
            "Blue",
            "Blue Blossom",
            "Gold",
            "Gold Blossom",
            "Blossom",
            "Coin",
            "Common",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 10,
            "Max": 10
        },
        "Money": {
            "Min": 0,
            "Max": 0
        },
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemGoldBlossom",
                        "ItemName": "Gold Blossom",
                        "ItemSprite": {
                            "Name": "icons_8_5",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 13
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemThornBerries",
                        "ItemName": "Thorn Berries",
                        "ItemSprite": {
                            "Name": "icons_2_10",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 11
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_bsafina_0_0",
            "Set": "battle_bsafina",
            "Width": 17,
            "Height": 25
        },
        "Notes": [],
        "NameTokens": [
            "EnemyBlackhatSafina",
            "Fetch"
        ],
        "RewardTokens": [
            "Gold",
            "Gold Blossom",
            "Berries",
            "Thorn",
            "Blossom",
            "Coin",
            "Thorn Berries",
            "Common",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 10,
            "Max": 10
        },
        "Money": {
            "Min": 0,
            "Max": 0
        },
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemBlueBlossom",
                        "ItemName": "Blue Blossom",
                        "ItemSprite": {
                            "Name": "icons_7_5",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 13
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemSweetCake",
                        "ItemName": "Sweet Cake",
                        "ItemSprite": {
                            "Name": "icons_6_12",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 9
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_bstudent_0_0",
            "Set": "battle_bstudent",
            "Width": 11,
            "Height": 18
        },
        "Notes": [],
        "NameTokens": [
            "EnemyBlackhatStudent",
            "Fetch"
        ],
        "RewardTokens": [
            "Blue",
            "Blue Blossom",
            "Blossom",
            "Coin",
            "Cake",
            "Sweet",
            "Common",
            "Common Coin",
            "Sweet Cake"
        ]
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
        "Exp": {
            "Min": 200,
            "Max": 200
        },
        "Money": {
            "Min": 0,
            "Max": 0
        },
        "Rewards": {
            "Operator": "AND",
            "List": [
                {
                    "ItemType": "ItemBookOfSafety",
                    "ItemName": "Book of Safety",
                    "ItemSprite": {
                        "Name": "icons_6_17",
                        "Set": "icons",
                        "Width": 14,
                        "Height": 11
                    }
                },
                {
                    "ItemType": "ItemPrizeMedal",
                    "ItemName": "Prize Medal",
                    "ItemSprite": {
                        "Name": "icons_3_16",
                        "Set": "icons",
                        "Width": 14,
                        "Height": 13
                    }
                },
                {
                    "ItemType": "ItemPrizeMedal",
                    "ItemName": "Prize Medal",
                    "ItemSprite": {
                        "Name": "icons_3_16",
                        "Set": "icons",
                        "Width": 14,
                        "Height": 13
                    }
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
                        "ItemSprite": {
                            "Name": "icons_2_17",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 11
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemBookOfLove",
                        "ItemName": "Book of Love",
                        "ItemSprite": {
                            "Name": "icons_2_17",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 11
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemBookOfLove",
                        "ItemName": "Book of Love",
                        "ItemSprite": {
                            "Name": "icons_2_17",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 11
                        }
                    },
                    {
                        "ItemType": "TheBattleWitch",
                        "ItemName": "The Battle Witch",
                        "ItemSprite": {
                            "Name": "armor_2_3",
                            "Set": "armor",
                            "Width": 14,
                            "Height": 12
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_bloodwyn_0_0",
            "Set": "battle_bloodwyn",
            "Width": 29,
            "Height": 41
        },
        "Notes": [],
        "NameTokens": [
            "Bloodwyn",
            "EnemyBloodwyn"
        ],
        "RewardTokens": [
            "Love",
            "Witch",
            "Battle",
            "The Battle Witch",
            "Book of Safety",
            "of Love",
            "of",
            "Medal",
            "The",
            "Safety",
            "Book of Love",
            "Prize Medal",
            "Battle Witch",
            "Prize",
            "Book",
            "of Safety"
        ]
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
        "Exp": {
            "Min": 3,
            "Max": 3
        },
        "Money": {
            "Min": 3,
            "Max": 3
        },
        "Rewards": {
            "Operator": "AND",
            "List": [
                {
                    "ItemType": "ItemRedMushroom",
                    "MaxRewarded": 1,
                    "MaxOwned": 2,
                    "ItemName": "Red Mushroom",
                    "ItemSprite": {
                        "Name": "icons_4_5",
                        "Set": "icons",
                        "Width": 14,
                        "Height": 9
                    }
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_bluebird_0_0",
            "Set": "battle_bluebird",
            "Width": 22,
            "Height": 21
        },
        "Notes": [],
        "NameTokens": [
            "Bluefeather",
            "EnemyBlueBird"
        ],
        "RewardTokens": [
            "Red",
            "Red Mushroom",
            "Coin",
            "Mushroom",
            "Common",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 2,
            "Max": 2
        },
        "Money": {
            "Min": 2,
            "Max": 2
        },
        "Rewards": {
            "Operator": "AND",
            "List": [
                {
                    "ItemType": "ItemRedMushroom",
                    "MaxRewarded": 2,
                    "MaxOwned": 2,
                    "IsCombinedMax": true,
                    "ItemName": "Red Mushroom",
                    "ItemSprite": {
                        "Name": "icons_4_5",
                        "Set": "icons",
                        "Width": 14,
                        "Height": 9
                    }
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_bluebird_0_0",
            "Set": "battle_bluebird",
            "Width": 22,
            "Height": 21
        },
        "Notes": [],
        "NameTokens": [
            "Bluefeather",
            "EnemyBlueBird2"
        ],
        "RewardTokens": [
            "Red",
            "Red Mushroom",
            "Coin",
            "Mushroom",
            "Common",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 8,
            "Max": 8
        },
        "Money": {
            "Min": 8,
            "Max": 8
        },
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
                        "ItemSprite": {
                            "Name": "icons_6_15",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemPinkSeeds",
                        "ItemName": "Pink Seeds",
                        "ItemSprite": {
                            "Name": "icons_6_15",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
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
                        "ItemSprite": {
                            "Name": "icons_3_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 9
                        }
                    },
                    {
                        "ItemType": "ItemPinkSeeds",
                        "ItemName": "Pink Seeds",
                        "ItemSprite": {
                            "Name": "icons_6_15",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_book_blue_0_0",
            "Set": "battle_book_blue",
            "Width": 23,
            "Height": 21
        },
        "Notes": [],
        "NameTokens": [
            "Horror",
            "EnemyBookBlue"
        ],
        "RewardTokens": [
            "Seeds",
            "Cave",
            "Pink",
            "Pink Seeds",
            "Cave Acorn",
            "Acorn"
        ]
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
        "Exp": {
            "Min": 35,
            "Max": 35
        },
        "Money": {
            "Min": 50,
            "Max": 50
        },
        "Rewards": {
            "Operator": "AND",
            "List": [
                {
                    "ItemType": "ItemCibilsRed",
                    "MaxRewarded": 1,
                    "MaxOwned": 1,
                    "ItemName": "Sadio's Red",
                    "ItemSprite": {
                        "Name": "icons_0_18",
                        "Set": "icons",
                        "Width": 14,
                        "Height": 11
                    }
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
                        "ItemSprite": {
                            "Name": "icons_0_18",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 11
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCibilsRed",
                        "ItemName": "Sadio's Red",
                        "ItemSprite": {
                            "Name": "icons_0_18",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 11
                        }
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
                        "ItemSprite": {
                            "Name": "icons_2_17",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 11
                        }
                    },
                    {
                        "ItemType": "ItemCibilsRed",
                        "ItemName": "Sadio's Red",
                        "ItemSprite": {
                            "Name": "icons_0_18",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 11
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_book_purple_0_0",
            "Set": "battle_book_purple",
            "Width": 23,
            "Height": 21
        },
        "Notes": [],
        "NameTokens": [
            "Mystery",
            "EnemyBookPurple"
        ],
        "RewardTokens": [
            "Love",
            "Red",
            "Sadio's Red",
            "of Love",
            "of",
            "Book of Love",
            "Sadio's",
            "Book"
        ]
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
        "Exp": {
            "Min": 0,
            "Max": 0
        },
        "Money": {
            "Min": 0,
            "Max": 0
        },
        "Rewards": {
            "Operator": "AND",
            "List": [
                {
                    "ItemType": "ItemCibilsRed",
                    "MaxRewarded": 1,
                    "MaxOwned": 1,
                    "ItemName": "Sadio's Red",
                    "ItemSprite": {
                        "Name": "icons_0_18",
                        "Set": "icons",
                        "Width": 14,
                        "Height": 11
                    }
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
                        "ItemSprite": {
                            "Name": "icons_0_18",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 11
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCibilsRed",
                        "ItemName": "Sadio's Red",
                        "ItemSprite": {
                            "Name": "icons_0_18",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 11
                        }
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
                        "ItemSprite": {
                            "Name": "icons_2_17",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 11
                        }
                    },
                    {
                        "ItemType": "ItemCibilsRed",
                        "ItemName": "Sadio's Red",
                        "ItemSprite": {
                            "Name": "icons_0_18",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 11
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_book_purple_0_0",
            "Set": "battle_book_purple",
            "Width": 23,
            "Height": 21
        },
        "Notes": [],
        "NameTokens": [
            "EnemyBookPurpleBloodwyn",
            "Mystery"
        ],
        "RewardTokens": [
            "Love",
            "Red",
            "Sadio's Red",
            "of Love",
            "of",
            "Book of Love",
            "Sadio's",
            "Book"
        ]
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
        "Exp": {
            "Min": 8,
            "Max": 8
        },
        "Money": {
            "Min": 8,
            "Max": 8
        },
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
                        "ItemSprite": {
                            "Name": "icons_6_15",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemPinkSeeds",
                        "ItemName": "Pink Seeds",
                        "ItemSprite": {
                            "Name": "icons_6_15",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
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
                        "ItemSprite": {
                            "Name": "icons_0_10",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 11
                        }
                    },
                    {
                        "ItemType": "ItemPinkSeeds",
                        "ItemName": "Pink Seeds",
                        "ItemSprite": {
                            "Name": "icons_6_15",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_book_red_0_0",
            "Set": "battle_book_red",
            "Width": 23,
            "Height": 21
        },
        "Notes": [],
        "NameTokens": [
            "Thriller",
            "EnemyBookRed"
        ],
        "RewardTokens": [
            "Pow Cherry",
            "Pow",
            "Seeds",
            "Cherry",
            "Pink",
            "Pink Seeds"
        ]
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
        "Exp": {
            "Min": 0,
            "Max": 0
        },
        "Money": {
            "Min": 0,
            "Max": 0
        },
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_bookworm_0_0",
            "Set": "battle_bookworm",
            "Width": 11,
            "Height": 11
        },
        "Notes": [],
        "NameTokens": [
            "EnemyBookworm",
            "Bookworm"
        ],
        "RewardTokens": [
            "Coin",
            "Common",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 3,
            "Max": 3
        },
        "Money": {
            "Min": 2,
            "Max": 2
        },
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_bookworm2_0_0",
            "Set": "battle_bookworm2",
            "Width": 11,
            "Height": 11
        },
        "Notes": [],
        "NameTokens": [
            "Stinkworm",
            "EnemyBookwormGreen"
        ],
        "RewardTokens": [
            "Coin",
            "Common",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 15,
            "Max": 15
        },
        "Money": {
            "Min": 15,
            "Max": 15
        },
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
                        "ItemSprite": {
                            "Name": "icons_2_7",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 12
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemHoneycrisp",
                        "ItemName": "Honeycrisp",
                        "ItemSprite": {
                            "Name": "icons_2_7",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 12
                        }
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
                        "ItemSprite": {
                            "Name": "hats_3_2",
                            "Set": "hats",
                            "Width": 14,
                            "Height": 9
                        }
                    },
                    {
                        "ItemType": "ItemHoneycrisp",
                        "ItemName": "Honeycrisp",
                        "ItemSprite": {
                            "Name": "icons_2_7",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 12
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_bunwitch_0_0",
            "Set": "battle_bunwitch",
            "Width": 28,
            "Height": 20
        },
        "Notes": [],
        "NameTokens": [
            "Lagomagus",
            "EnemyBunwitch"
        ],
        "RewardTokens": [
            "Thunderbrim",
            "Honeycrisp"
        ]
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
        "Exp": {
            "Min": 20,
            "Max": 20
        },
        "Money": {
            "Min": 15,
            "Max": 15
        },
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
                        "ItemSprite": {
                            "Name": "icons_2_7",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 12
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemHoneycrisp",
                        "ItemName": "Honeycrisp",
                        "ItemSprite": {
                            "Name": "icons_2_7",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 12
                        }
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
                        "ItemSprite": {
                            "Name": "hats_3_2",
                            "Set": "hats",
                            "Width": 14,
                            "Height": 9
                        }
                    },
                    {
                        "ItemType": "ItemHoneycrisp",
                        "ItemName": "Honeycrisp",
                        "ItemSprite": {
                            "Name": "icons_2_7",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 12
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_bunwitch_0_0",
            "Set": "battle_bunwitch",
            "Width": 28,
            "Height": 20
        },
        "Notes": [],
        "NameTokens": [
            "Lagomagus",
            "EnemyBunwitch2"
        ],
        "RewardTokens": [
            "Thunderbrim",
            "Honeycrisp"
        ]
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
        "Exp": {
            "Min": 30,
            "Max": 30
        },
        "Money": {
            "Min": 40,
            "Max": 40
        },
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
                        "ItemSprite": {
                            "Name": "icons_8_12",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 10
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemRareCoin",
                        "ItemName": "Rare Coin",
                        "ItemSprite": {
                            "Name": "icons_8_12",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 10
                        }
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
                        "ItemSprite": {
                            "Name": "icons_9_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 12
                        }
                    },
                    {
                        "ItemType": "ItemRareCoin",
                        "ItemName": "Rare Coin",
                        "ItemSprite": {
                            "Name": "icons_8_12",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 10
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_butterfly_0_0",
            "Set": "battle_butterfly",
            "Width": 26,
            "Height": 19
        },
        "Notes": [],
        "NameTokens": [
            "EnemyButterfly",
            "Flutterfang"
        ],
        "RewardTokens": [
            "Beauty",
            "Rare Coin",
            "Coin",
            "Token",
            "Beauty Token",
            "Rare"
        ]
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
        "Exp": {
            "Min": 0,
            "Max": 0
        },
        "Money": {
            "Min": 0,
            "Max": 0
        },
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
                        "ItemSprite": {
                            "Name": "icons_5_6",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 10
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemSpiceLeaf",
                        "ItemName": "Spice Leaf",
                        "ItemSprite": {
                            "Name": "icons_5_6",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 10
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemSpiceLeaf",
                        "ItemName": "Spice Leaf",
                        "ItemSprite": {
                            "Name": "icons_5_6",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 10
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_cauldron_0_0",
            "Set": "battle_cauldron",
            "Width": 22,
            "Height": 15
        },
        "Notes": [],
        "NameTokens": [
            "Cauldron",
            "EnemyCauldron"
        ],
        "RewardTokens": [
            "Spice",
            "Leaf",
            "Spice Leaf"
        ]
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
        "Exp": {
            "Min": 30,
            "Max": 30
        },
        "Money": {
            "Min": 0,
            "Max": 0
        },
        "Rewards": {
            "Operator": "AND",
            "List": [
                {
                    "ItemType": "ItemRareCoin",
                    "ItemName": "Rare Coin",
                    "ItemSprite": {
                        "Name": "icons_8_12",
                        "Set": "icons",
                        "Width": 14,
                        "Height": 10
                    }
                },
                {
                    "ItemType": "Woolymuffs",
                    "ItemName": "Woolymuffs",
                    "ItemSprite": {
                        "Name": "hats_1_3",
                        "Set": "hats",
                        "Width": 14,
                        "Height": 8
                    }
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
                        "ItemSprite": {
                            "Name": "icons_7_15",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 11
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemRancidFruit",
                        "ItemName": "Rancid Fruit",
                        "ItemSprite": {
                            "Name": "icons_7_15",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 11
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemRancidFruit",
                        "ItemName": "Rancid Fruit",
                        "ItemSprite": {
                            "Name": "icons_7_15",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 11
                        }
                    },
                    {
                        "ItemType": "ItemRareCoin",
                        "ItemName": "Rare Coin",
                        "ItemSprite": {
                            "Name": "icons_8_12",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 10
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_chuckles_0_0",
            "Set": "battle_chuckles",
            "Width": 29,
            "Height": 50
        },
        "Notes": [],
        "NameTokens": [
            "EnemyChuckles",
            "Chuckles"
        ],
        "RewardTokens": [
            "Rancid",
            "Rare Coin",
            "Coin",
            "Fruit",
            "Rare",
            "Rancid Fruit",
            "Woolymuffs"
        ]
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
        "Exp": {
            "Min": 0,
            "Max": 0
        },
        "Money": {
            "Min": 0,
            "Max": 0
        },
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
                        "ItemSprite": {
                            "Name": "icons_8_18",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 10
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemBigBomb",
                        "ItemName": "Big Bomb",
                        "ItemSprite": {
                            "Name": "icons_8_18",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 10
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemBigBomb",
                        "ItemName": "Big Bomb",
                        "ItemSprite": {
                            "Name": "icons_8_18",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 10
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_cibil_0_0",
            "Set": "battle_cibil",
            "Width": 15,
            "Height": 20
        },
        "Notes": [],
        "NameTokens": [
            "Sadio",
            "EnemyCibil"
        ],
        "RewardTokens": [
            "Bomb",
            "Big Bomb",
            "Big"
        ]
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
        "Exp": {
            "Min": 0,
            "Max": 0
        },
        "Money": {
            "Min": 0,
            "Max": 0
        },
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_codex_0_0",
            "Set": "battle_codex",
            "Width": 33,
            "Height": 30
        },
        "Notes": [],
        "NameTokens": [
            "EnemyCodex",
            "Codexus"
        ],
        "RewardTokens": [
            "Coin",
            "Common",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 0,
            "Max": 0
        },
        "Money": {
            "Min": 0,
            "Max": 0
        },
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_bee_eye_0_0",
            "Set": "battle_bee_eye",
            "Width": 15,
            "Height": 13
        },
        "Notes": [],
        "NameTokens": [
            "Eye",
            "EnemyCodexBee",
            "Bumble Eye",
            "Bumble"
        ],
        "RewardTokens": [
            "Coin",
            "Common",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 0,
            "Max": 0
        },
        "Money": {
            "Min": 0,
            "Max": 0
        },
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_eyepole_0_0",
            "Set": "battle_eyepole",
            "Width": 16,
            "Height": 31
        },
        "Notes": [],
        "NameTokens": [
            "Eyepole",
            "EnemyCodexEyepole"
        ],
        "RewardTokens": [
            "Coin",
            "Common",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 0,
            "Max": 0
        },
        "Money": {
            "Min": 0,
            "Max": 0
        },
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_bookworm_eye_0_0",
            "Set": "battle_bookworm_eye",
            "Width": 11,
            "Height": 13
        },
        "Notes": [],
        "NameTokens": [
            "EnemyCodexEyeworm",
            "Eyeworm"
        ],
        "RewardTokens": [
            "Coin",
            "Common",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 0,
            "Max": 0
        },
        "Money": {
            "Min": 0,
            "Max": 0
        },
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_lantern_flame_0_0",
            "Set": "battle_lantern_flame",
            "Width": 8,
            "Height": 12
        },
        "Notes": [],
        "NameTokens": [
            "Red Flame",
            "Red",
            "EnemyCodexFlame",
            "Flame"
        ],
        "RewardTokens": [
            "Coin",
            "Common",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 0,
            "Max": 0
        },
        "Money": {
            "Min": 0,
            "Max": 0
        },
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_sackeye_0_0",
            "Set": "battle_sackeye",
            "Width": 14,
            "Height": 22
        },
        "Notes": [],
        "NameTokens": [
            "Sackeye",
            "EnemyCodexSackeye"
        ],
        "RewardTokens": [
            "Coin",
            "Common",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 30,
            "Max": 30
        },
        "Money": {
            "Min": 50,
            "Max": 50
        },
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
                        "ItemSprite": {
                            "Name": "icons_9_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 12
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemBeautyToken",
                        "ItemName": "Beauty Token",
                        "ItemSprite": {
                            "Name": "icons_9_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 12
                        }
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
                        "ItemSprite": {
                            "Name": "icons_5_17",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 9
                        }
                    },
                    {
                        "ItemType": "ItemBeautyToken",
                        "ItemName": "Beauty Token",
                        "ItemSprite": {
                            "Name": "icons_9_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 12
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_cracked_ghost_0_0",
            "Set": "battle_cracked_ghost",
            "Width": 23,
            "Height": 16
        },
        "Notes": [],
        "NameTokens": [
            "EnemyCrackedGhost",
            "Ghost",
            "Cracked",
            "Cracked Ghost"
        ],
        "RewardTokens": [
            "Beauty",
            "Cookie",
            "Token",
            "Beauty Token",
            "Ghost Cookie",
            "Ghost"
        ]
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
        "Exp": {
            "Min": 8,
            "Max": 8
        },
        "Money": {
            "Min": 8,
            "Max": 8
        },
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
                        "ItemSprite": {
                            "Name": "icons_2_7",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 12
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemHoneycrisp",
                        "ItemName": "Honeycrisp",
                        "ItemSprite": {
                            "Name": "icons_2_7",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 12
                        }
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
                        "ItemSprite": {
                            "Name": "icons_3_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 9
                        }
                    },
                    {
                        "ItemType": "ItemHoneycrisp",
                        "ItemName": "Honeycrisp",
                        "ItemSprite": {
                            "Name": "icons_2_7",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 12
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_craterbaby_0_0",
            "Set": "battle_craterbaby",
            "Width": 15,
            "Height": 17
        },
        "Notes": [],
        "NameTokens": [
            "Craterbaby",
            "EnemyCraterbaby"
        ],
        "RewardTokens": [
            "Acorn",
            "Cave Acorn",
            "Honeycrisp",
            "Cave"
        ]
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
        "Exp": {
            "Min": 15,
            "Max": 15
        },
        "Money": {
            "Min": 15,
            "Max": 15
        },
        "Rewards": {
            "Operator": "AND",
            "List": [
                {
                    "ItemType": "ItemStarCookie",
                    "MaxRewarded": 1,
                    "MaxOwned": 1,
                    "ItemName": "Star Cookie",
                    "ItemSprite": {
                        "Name": "icons_8_15",
                        "Set": "icons",
                        "Width": 14,
                        "Height": 9
                    }
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    },
                    {
                        "ItemType": "ItemComebackCandy",
                        "Notes": [
                            1
                        ],
                        "ItemName": "Comeback Candy",
                        "ItemSprite": {
                            "Name": "icons_1_10",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 11
                        }
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
                        "ItemSprite": {
                            "Name": "icons_8_15",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 9
                        }
                    },
                    {
                        "ItemType": "ItemComebackCandy",
                        "Notes": [
                            1
                        ],
                        "ItemName": "Comeback Candy",
                        "ItemSprite": {
                            "Name": "icons_1_10",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 11
                        }
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
                        "ItemSprite": {
                            "Name": "hats_3_1",
                            "Set": "hats",
                            "Width": 14,
                            "Height": 9
                        }
                    },
                    {
                        "ItemType": "ItemStarCookie",
                        "MaxRewarded": 5,
                        "MaxOwned": 5,
                        "Notes": [
                            1
                        ],
                        "ItemName": "Star Cookie",
                        "ItemSprite": {
                            "Name": "icons_8_15",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 9
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_craterface_0_0",
            "Set": "battle_craterface",
            "Width": 26,
            "Height": 27
        },
        "Notes": [
            "only if you have no Royal Snugs",
            "only if you have at least 1 Royal Snug"
        ],
        "NameTokens": [
            "Craterface",
            "EnemyCraterface"
        ],
        "RewardTokens": [
            "Cookie",
            "Candy",
            "Royal Snug",
            "Coin",
            "Royal",
            "Comeback Candy",
            "Snug",
            "Comeback",
            "Star Cookie",
            "Common",
            "Star",
            "Common Coin"
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
        "Exp": {
            "Min": 50,
            "Max": 50
        },
        "Money": {
            "Min": 50,
            "Max": 50
        },
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
                        "ItemSprite": {
                            "Name": "icons_1_18",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 11
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCibilsBlue",
                        "ItemName": "Sadio's Blue",
                        "ItemSprite": {
                            "Name": "icons_1_18",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 11
                        }
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
                        "ItemSprite": {
                            "Name": "hats_7_2",
                            "Set": "hats",
                            "Width": 14,
                            "Height": 13
                        }
                    },
                    {
                        "ItemType": "ItemCibilsBlue",
                        "ItemName": "Sadio's Blue",
                        "ItemSprite": {
                            "Name": "icons_1_18",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 11
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_craterface2_0_0",
            "Set": "battle_craterface2",
            "Width": 26,
            "Height": 27
        },
        "Notes": [],
        "NameTokens": [
            "Goon",
            "Lunar Goon",
            "Lunar",
            "EnemyCraterface2"
        ],
        "RewardTokens": [
            "Sadio's Blue",
            "Blue",
            "Romantic",
            "The Romantic",
            "The",
            "Sadio's"
        ]
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
        "Exp": {
            "Min": 8,
            "Max": 8
        },
        "Money": {
            "Min": 8,
            "Max": 8
        },
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_crystal_0_0",
            "Set": "battle_crystal",
            "Width": 9,
            "Height": 20
        },
        "Notes": [],
        "NameTokens": [
            "Beryllous",
            "EnemyCrystal"
        ],
        "RewardTokens": [
            "Coin",
            "Common",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 25,
            "Max": 25
        },
        "Money": {
            "Min": 25,
            "Max": 25
        },
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
                        "ItemSprite": {
                            "Name": "icons_6_16",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 10
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemPinkPods",
                        "ItemName": "Pink Pods",
                        "ItemSprite": {
                            "Name": "icons_6_16",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 10
                        }
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
                        "ItemSprite": {
                            "Name": "feet_4_0",
                            "Set": "feet",
                            "Width": 14,
                            "Height": 9
                        }
                    },
                    {
                        "ItemType": "ItemPinkPods",
                        "ItemName": "Pink Pods",
                        "ItemSprite": {
                            "Name": "icons_6_16",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 10
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_golem2_0_0",
            "Set": "battle_golem2",
            "Width": 26,
            "Height": 30
        },
        "Notes": [],
        "NameTokens": [
            "EnemyCyclops",
            "Cyclops"
        ],
        "RewardTokens": [
            "Steel",
            "Toes",
            "Pink",
            "Pink Pods",
            "Steel Toes",
            "Pods"
        ]
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
        "Exp": {
            "Min": 30,
            "Max": 30
        },
        "Money": {
            "Min": 40,
            "Max": 40
        },
        "Rewards": {
            "Operator": "AND",
            "List": [
                {
                    "ItemType": "ItemCibilsGreen",
                    "MaxRewarded": 1,
                    "MaxOwned": 1,
                    "ItemName": "Sadio's Green",
                    "ItemSprite": {
                        "Name": "icons_2_18",
                        "Set": "icons",
                        "Width": 14,
                        "Height": 11
                    }
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
                        "ItemSprite": {
                            "Name": "icons_2_18",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 11
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCibilsGreen",
                        "ItemName": "Sadio's Green",
                        "ItemSprite": {
                            "Name": "icons_2_18",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 11
                        }
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
                        "ItemSprite": {
                            "Name": "icons_7_18",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 10
                        }
                    },
                    {
                        "ItemType": "ItemCibilsGreen",
                        "ItemName": "Sadio's Green",
                        "ItemSprite": {
                            "Name": "icons_2_18",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 11
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_darkeye_0_0",
            "Set": "battle_darkeye",
            "Width": 24,
            "Height": 23
        },
        "Notes": [],
        "NameTokens": [
            "Nightgazer",
            "EnemyDarkeye"
        ],
        "RewardTokens": [
            "Demon",
            "Eye",
            "Demon Eye",
            "Green",
            "Sadio's",
            "Sadio's Green"
        ]
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
        "Exp": {
            "Min": 30,
            "Max": 30
        },
        "Money": {
            "Min": 50,
            "Max": 50
        },
        "Rewards": {
            "Operator": "AND",
            "List": [
                {
                    "ItemType": "ItemCibilsGreen",
                    "MaxRewarded": 1,
                    "MaxOwned": 1,
                    "ItemName": "Sadio's Green",
                    "ItemSprite": {
                        "Name": "icons_2_18",
                        "Set": "icons",
                        "Width": 14,
                        "Height": 11
                    }
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
                        "ItemSprite": {
                            "Name": "icons_2_18",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 11
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCibilsGreen",
                        "ItemName": "Sadio's Green",
                        "ItemSprite": {
                            "Name": "icons_2_18",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 11
                        }
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
                        "ItemSprite": {
                            "Name": "icons_7_18",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 10
                        }
                    },
                    {
                        "ItemType": "ItemCibilsGreen",
                        "ItemName": "Sadio's Green",
                        "ItemSprite": {
                            "Name": "icons_2_18",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 11
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_darkeye_0_0",
            "Set": "battle_darkeye",
            "Width": 24,
            "Height": 23
        },
        "Notes": [],
        "NameTokens": [
            "Nightgazer",
            "EnemyDarkeyeStacks"
        ],
        "RewardTokens": [
            "Demon",
            "Eye",
            "Demon Eye",
            "Green",
            "Sadio's",
            "Sadio's Green"
        ]
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
        "Exp": {
            "Min": 20,
            "Max": 20
        },
        "Money": {
            "Min": 0,
            "Max": 0
        },
        "Rewards": {
            "Operator": "AND",
            "List": [
                {
                    "ItemType": "ItemCommonCoin",
                    "ItemName": "Common Coin",
                    "ItemSprite": {
                        "Name": "icons_8_11",
                        "Set": "icons",
                        "Width": 14,
                        "Height": 8
                    }
                },
                {
                    "ItemType": "ItemSweetSprout",
                    "ItemName": "Sweet Sprout",
                    "ItemSprite": {
                        "Name": "icons_5_7",
                        "Set": "icons",
                        "Width": 14,
                        "Height": 9
                    }
                },
                {
                    "ItemType": "ItemBlackBomb",
                    "ItemName": "Black Bomb",
                    "ItemSprite": {
                        "Name": "icons_5_15",
                        "Set": "icons",
                        "Width": 14,
                        "Height": 10
                    }
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_darkskull_0_0",
            "Set": "battle_darkskull",
            "Width": 21,
            "Height": 20
        },
        "Notes": [],
        "NameTokens": [
            "Charbones",
            "EnemyDarkskull"
        ],
        "RewardTokens": [
            "Sweet Sprout",
            "Sprout",
            "Black",
            "Black Bomb",
            "Coin",
            "Bomb",
            "Sweet",
            "Common",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 3,
            "Max": 3
        },
        "Money": {
            "Min": 0,
            "Max": 0
        },
        "Rewards": {
            "Operator": "AND",
            "List": [
                {
                    "ItemType": "ItemSmallMushroom",
                    "ItemName": "Small Mushroom",
                    "ItemSprite": {
                        "Name": "icons_4_6",
                        "Set": "icons",
                        "Width": 14,
                        "Height": 8
                    }
                },
                {
                    "ItemType": "ItemSmallMushroom",
                    "ItemName": "Small Mushroom",
                    "ItemSprite": {
                        "Name": "icons_4_6",
                        "Set": "icons",
                        "Width": 14,
                        "Height": 8
                    }
                },
                {
                    "ItemType": "ItemRedMushroom",
                    "ItemName": "Red Mushroom",
                    "ItemSprite": {
                        "Name": "icons_4_5",
                        "Set": "icons",
                        "Width": 14,
                        "Height": 9
                    }
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_eoc_0_0",
            "Set": "battle_eoc",
            "Width": 17,
            "Height": 25
        },
        "Notes": [],
        "NameTokens": [
            "EnemyEoc",
            "The",
            "The Leader",
            "Leader"
        ],
        "RewardTokens": [
            "Red",
            "Small Mushroom",
            "Red Mushroom",
            "Coin",
            "Mushroom",
            "Small",
            "Common Coin",
            "Common"
        ]
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
        "Exp": {
            "Min": 30,
            "Max": 30
        },
        "Money": {
            "Min": 40,
            "Max": 40
        },
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_eyeflower_0_0",
            "Set": "battle_eyeflower",
            "Width": 17,
            "Height": 21
        },
        "Notes": [],
        "NameTokens": [
            "Eyepoppy",
            "EnemyEyeFlower"
        ],
        "RewardTokens": [
            "Coin",
            "Common",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 12,
            "Max": 12
        },
        "Money": {
            "Min": 12,
            "Max": 12
        },
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
                        "ItemSprite": {
                            "Name": "icons_3_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 9
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCaveAcorn",
                        "ItemName": "Cave Acorn",
                        "ItemSprite": {
                            "Name": "icons_3_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 9
                        }
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
                        "ItemSprite": {
                            "Name": "icons_7_15",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 11
                        }
                    },
                    {
                        "ItemType": "ItemCaveAcorn",
                        "ItemName": "Cave Acorn",
                        "ItemSprite": {
                            "Name": "icons_3_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 9
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_eyesore_0_0",
            "Set": "battle_eyesore",
            "Width": 27,
            "Height": 25
        },
        "Notes": [],
        "NameTokens": [
            "EnemyEyesore",
            "Eyesore"
        ],
        "RewardTokens": [
            "Cave",
            "Rancid",
            "Cave Acorn",
            "Fruit",
            "Acorn",
            "Rancid Fruit"
        ]
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
        "Exp": {
            "Min": 2,
            "Max": 3
        },
        "Money": {
            "Min": 3,
            "Max": 3
        },
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": null,
        "Notes": [],
        "NameTokens": [
            "Undersloop",
            "EnemyFakeTileBlue"
        ],
        "RewardTokens": [
            "Coin",
            "Common",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 2,
            "Max": 3
        },
        "Money": {
            "Min": 3,
            "Max": 3
        },
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": null,
        "Notes": [],
        "NameTokens": [
            "Undersnoop",
            "EnemyFakeTileRed"
        ],
        "RewardTokens": [
            "Coin",
            "Common",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 0,
            "Max": 0
        },
        "Money": {
            "Min": 0,
            "Max": 0
        },
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_fantom_0_0",
            "Set": "battle_fantom",
            "Width": 33,
            "Height": 44
        },
        "Notes": [],
        "NameTokens": [
            "EnemyFantom",
            "Fantom"
        ],
        "RewardTokens": [
            "Coin",
            "Common",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 0,
            "Max": 0
        },
        "Money": {
            "Min": 0,
            "Max": 0
        },
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_fantom2_0_0",
            "Set": "battle_fantom2",
            "Width": 47,
            "Height": 50
        },
        "Notes": [],
        "NameTokens": [
            "EnemyFantom2",
            "Fantom"
        ],
        "RewardTokens": [
            "Coin",
            "Common",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 0,
            "Max": 0
        },
        "Money": {
            "Min": 0,
            "Max": 0
        },
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_fantom3_0_0",
            "Set": "battle_fantom3",
            "Width": 63,
            "Height": 72
        },
        "Notes": [],
        "NameTokens": [
            "EnemyFantom3",
            "Fantom"
        ],
        "RewardTokens": [
            "Coin",
            "Common",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 2,
            "Max": 2
        },
        "Money": {
            "Min": 3,
            "Max": 3
        },
        "Rewards": {
            "Operator": "AND",
            "List": [
                {
                    "ItemType": "ItemGoldBlossom",
                    "MaxRewarded": 1,
                    "MaxOwned": 2,
                    "ItemName": "Gold Blossom",
                    "ItemSprite": {
                        "Name": "icons_8_5",
                        "Set": "icons",
                        "Width": 14,
                        "Height": 13
                    }
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_flower_0_0",
            "Set": "battle_flower",
            "Width": 17,
            "Height": 21
        },
        "Notes": [],
        "NameTokens": [
            "Petuni",
            "EnemyFlower"
        ],
        "RewardTokens": [
            "Gold",
            "Gold Blossom",
            "Blossom",
            "Coin",
            "Common",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 3,
            "Max": 3
        },
        "Money": {
            "Min": 3,
            "Max": 3
        },
        "Rewards": {
            "Operator": "AND",
            "List": [
                {
                    "ItemType": "ItemBlueBlossom",
                    "MaxRewarded": 1,
                    "MaxOwned": 1,
                    "ItemName": "Blue Blossom",
                    "ItemSprite": {
                        "Name": "icons_7_5",
                        "Set": "icons",
                        "Width": 14,
                        "Height": 13
                    }
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_fluttergum_0_0",
            "Set": "battle_fluttergum",
            "Width": 19,
            "Height": 29
        },
        "Notes": [],
        "NameTokens": [
            "EnemyFluttergum",
            "Fluttergum"
        ],
        "RewardTokens": [
            "Blue",
            "Blue Blossom",
            "Blossom",
            "Coin",
            "Common",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 12,
            "Max": 12
        },
        "Money": {
            "Min": 12,
            "Max": 12
        },
        "Rewards": {
            "Operator": "AND",
            "List": [
                {
                    "ItemType": "ItemDewPlum",
                    "MaxRewarded": 1,
                    "MaxOwned": 1,
                    "ItemName": "Dew Plum",
                    "ItemSprite": {
                        "Name": "icons_1_7",
                        "Set": "icons",
                        "Width": 14,
                        "Height": 12
                    }
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
                        "ItemSprite": {
                            "Name": "icons_1_7",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 12
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemDewPlum",
                        "ItemName": "Dew Plum",
                        "ItemSprite": {
                            "Name": "icons_1_7",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 12
                        }
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
                        "ItemSprite": {
                            "Name": "icons_8_15",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 9
                        }
                    },
                    {
                        "ItemType": "ItemDewPlum",
                        "ItemName": "Dew Plum",
                        "ItemSprite": {
                            "Name": "icons_1_7",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 12
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_lamp_0_0",
            "Set": "battle_lamp",
            "Width": 27,
            "Height": 17
        },
        "Notes": [],
        "NameTokens": [
            "EnemyFlutterlamp",
            "Flutterlamp"
        ],
        "RewardTokens": [
            "Dew Plum",
            "Cookie",
            "Dew",
            "Plum",
            "Star Cookie",
            "Star"
        ]
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
        "Exp": {
            "Min": 40,
            "Max": 40
        },
        "Money": {
            "Min": 50,
            "Max": 50
        },
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
                        "ItemSprite": {
                            "Name": "icons_1_18",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 11
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCibilsBlue",
                        "ItemName": "Sadio's Blue",
                        "ItemSprite": {
                            "Name": "icons_1_18",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 11
                        }
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
                        "ItemSprite": {
                            "Name": "icons_0_13",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 13
                        }
                    },
                    {
                        "ItemType": "ItemCibilsBlue",
                        "ItemName": "Sadio's Blue",
                        "ItemSprite": {
                            "Name": "icons_1_18",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 11
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_lamp2_0_0",
            "Set": "battle_lamp2",
            "Width": 27,
            "Height": 17
        },
        "Notes": [],
        "NameTokens": [
            "EnemyFlutterlamp2",
            "Fluttertorch"
        ],
        "RewardTokens": [
            "Sadio's Blue",
            "Blue",
            "Sadio's Sparkly",
            "Sparkly",
            "Sadio's"
        ]
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
        "Exp": {
            "Min": 15,
            "Max": 15
        },
        "Money": {
            "Min": 15,
            "Max": 15
        },
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
                        "ItemSprite": {
                            "Name": "icons_4_5",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 9
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemRedMushroom",
                        "ItemName": "Red Mushroom",
                        "ItemSprite": {
                            "Name": "icons_4_5",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 9
                        }
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
                        "ItemSprite": {
                            "Name": "icons_2_8",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 9
                        }
                    },
                    {
                        "ItemType": "ItemRedMushroom",
                        "ItemName": "Red Mushroom",
                        "ItemSprite": {
                            "Name": "icons_4_5",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 9
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_fungi_0_0",
            "Set": "battle_fungi",
            "Width": 13,
            "Height": 11
        },
        "Notes": [],
        "NameTokens": [
            "Fungi",
            "Dimini",
            "Fungi Dimini",
            "EnemyFungi"
        ],
        "RewardTokens": [
            "Red",
            "Toxic Shroom",
            "Red Mushroom",
            "Toxic",
            "Mushroom",
            "Shroom"
        ]
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
        "Exp": {
            "Min": 50,
            "Max": 50
        },
        "Money": {
            "Min": 50,
            "Max": 50
        },
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_fungi_0_0",
            "Set": "battle_fungi",
            "Width": 13,
            "Height": 11
        },
        "Notes": [],
        "NameTokens": [
            "Fungi",
            "Dimini",
            "Fungi Dimini",
            "EnemyFungiLair"
        ],
        "RewardTokens": [
            "Coin",
            "Common",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 30,
            "Max": 30
        },
        "Money": {
            "Min": 30,
            "Max": 30
        },
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
                        "ItemSprite": {
                            "Name": "icons_9_16",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 12
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemMintShroom",
                        "ItemName": "Mint Shroom",
                        "ItemSprite": {
                            "Name": "icons_9_16",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 12
                        }
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
                        "ItemSprite": {
                            "Name": "icons_9_17",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 13
                        }
                    },
                    {
                        "ItemType": "ItemMintShroom",
                        "ItemName": "Mint Shroom",
                        "ItemSprite": {
                            "Name": "icons_9_16",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 12
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_fungo_0_0",
            "Set": "battle_fungo",
            "Width": 30,
            "Height": 32
        },
        "Notes": [],
        "NameTokens": [
            "Colosso",
            "Fungo Colosso",
            "EnemyFungo",
            "Fungo"
        ],
        "RewardTokens": [
            "Mint",
            "Fruity",
            "Fruity Shroom",
            "Mint Shroom",
            "Shroom"
        ]
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
        "Exp": {
            "Min": 1,
            "Max": 2
        },
        "Money": {
            "Min": 1,
            "Max": 2
        },
        "Rewards": {
            "Operator": "AND",
            "List": [
                {
                    "ItemType": "ItemSmallMushroom",
                    "MaxRewarded": 1,
                    "MaxOwned": 5,
                    "ItemName": "Small Mushroom",
                    "ItemSprite": {
                        "Name": "icons_4_6",
                        "Set": "icons",
                        "Width": 14,
                        "Height": 8
                    }
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_fuzzy_0_0",
            "Set": "battle_fuzzy",
            "Width": 14,
            "Height": 10
        },
        "Notes": [],
        "NameTokens": [
            "EnemyFuzzy",
            "Mossling"
        ],
        "RewardTokens": [
            "Small Mushroom",
            "Coin",
            "Mushroom",
            "Small",
            "Common Coin",
            "Common"
        ]
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
        "Exp": {
            "Min": 0,
            "Max": 0
        },
        "Money": {
            "Min": 2,
            "Max": 2
        },
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_fuzzy_stack_0_0",
            "Set": "battle_fuzzy_stack",
            "Width": 15,
            "Height": 24
        },
        "Notes": [],
        "NameTokens": [
            "Mosstower",
            "EnemyFuzzyStack"
        ],
        "RewardTokens": [
            "Coin",
            "Common",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 5,
            "Max": 5
        },
        "Money": {
            "Min": 0,
            "Max": 0
        },
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_fuzzy_0_0",
            "Set": "battle_fuzzy",
            "Width": 14,
            "Height": 10
        },
        "Notes": [],
        "NameTokens": [
            "EnemyFuzzyTutorial",
            "Mossling"
        ],
        "RewardTokens": [
            "Coin",
            "Common",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 3,
            "Max": 3
        },
        "Money": {
            "Min": 0,
            "Max": 0
        },
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_fuzzy_0_0",
            "Set": "battle_fuzzy",
            "Width": 14,
            "Height": 10
        },
        "Notes": [],
        "NameTokens": [
            "Mossling",
            "EnemyFuzzyTutorial2"
        ],
        "RewardTokens": [
            "Coin",
            "Common",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 0,
            "Max": 0
        },
        "Money": {
            "Min": 0,
            "Max": 0
        },
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
                        "ItemSprite": {
                            "Name": "icons_4_17",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 13
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemVeggieStew",
                        "ItemName": "Veggie Stew",
                        "ItemSprite": {
                            "Name": "icons_4_17",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 13
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemVeggieStew",
                        "ItemName": "Veggie Stew",
                        "ItemSprite": {
                            "Name": "icons_4_17",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 13
                        }
                    },
                    {
                        "ItemType": "PrizePoppies",
                        "MaxRewarded": 1,
                        "ItemName": "Prize Poppies",
                        "ItemSprite": {
                            "Name": "accessories_6_7",
                            "Set": "accessories",
                            "Width": 14,
                            "Height": 12
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_gardener_0_0",
            "Set": "battle_gardener",
            "Width": 28,
            "Height": 30
        },
        "Notes": [],
        "NameTokens": [
            "Gardener",
            "EnemyGardener"
        ],
        "RewardTokens": [
            "Veggie Stew",
            "Prize Poppies",
            "Poppies",
            "Prize",
            "Stew",
            "Veggie"
        ]
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
        "Exp": {
            "Min": 300,
            "Max": 300
        },
        "Money": {
            "Min": 0,
            "Max": 0
        },
        "Rewards": {
            "Operator": "AND",
            "List": [
                {
                    "ItemType": "ItemPrizeMedal",
                    "ItemName": "Prize Medal",
                    "ItemSprite": {
                        "Name": "icons_3_16",
                        "Set": "icons",
                        "Width": 14,
                        "Height": 13
                    }
                },
                {
                    "ItemType": "ItemPrizeMedal",
                    "ItemName": "Prize Medal",
                    "ItemSprite": {
                        "Name": "icons_3_16",
                        "Set": "icons",
                        "Width": 14,
                        "Height": 13
                    }
                },
                {
                    "ItemType": "PrizeShoots",
                    "ItemName": "Prize Shoots",
                    "ItemSprite": {
                        "Name": "accessories_7_7",
                        "Set": "accessories",
                        "Width": 14,
                        "Height": 12
                    }
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
                        "ItemSprite": {
                            "Name": "icons_3_16",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 13
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemPrizeMedal",
                        "ItemName": "Prize Medal",
                        "ItemSprite": {
                            "Name": "icons_3_16",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 13
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemPrizeMedal",
                        "ItemName": "Prize Medal",
                        "ItemSprite": {
                            "Name": "icons_3_16",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 13
                        }
                    },
                    {
                        "ItemType": "PrizePoppies",
                        "MaxRewarded": 1,
                        "ItemName": "Prize Poppies",
                        "ItemSprite": {
                            "Name": "accessories_6_7",
                            "Set": "accessories",
                            "Width": 14,
                            "Height": 12
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_gardener_32_0",
            "Set": "battle_gardener",
            "Width": 24,
            "Height": 28
        },
        "Notes": [],
        "NameTokens": [
            "Gardener",
            "EnemyGardener2"
        ],
        "RewardTokens": [
            "Prize Poppies",
            "Poppies",
            "Shoots",
            "Prize",
            "Prize Medal",
            "Medal",
            "Prize Shoots"
        ]
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
        "Exp": {
            "Min": 0,
            "Max": 0
        },
        "Money": {
            "Min": 0,
            "Max": 0
        },
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
                        "ItemSprite": {
                            "Name": "icons_9_16",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 12
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemMintShroom",
                        "ItemName": "Mint Shroom",
                        "ItemSprite": {
                            "Name": "icons_9_16",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 12
                        }
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
                        "ItemSprite": {
                            "Name": "icons_2_18",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 11
                        }
                    },
                    {
                        "ItemType": "ItemMintShroom",
                        "ItemName": "Mint Shroom",
                        "ItemSprite": {
                            "Name": "icons_9_16",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 12
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_bee_0_0",
            "Set": "battle_bee",
            "Width": 15,
            "Height": 13
        },
        "Notes": [],
        "NameTokens": [
            "EnemyGardenerBee",
            "Bumbler"
        ],
        "RewardTokens": [
            "Mint",
            "Green",
            "Mint Shroom",
            "Shroom",
            "Sadio's",
            "Sadio's Green"
        ]
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
        "Exp": {
            "Min": 0,
            "Max": 0
        },
        "Money": {
            "Min": 0,
            "Max": 0
        },
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
                        "ItemSprite": {
                            "Name": "icons_8_12",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 10
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemRareCoin",
                        "ItemName": "Rare Coin",
                        "ItemSprite": {
                            "Name": "icons_8_12",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 10
                        }
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
                        "ItemSprite": {
                            "Name": "icons_9_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 12
                        }
                    },
                    {
                        "ItemType": "ItemRareCoin",
                        "ItemName": "Rare Coin",
                        "ItemSprite": {
                            "Name": "icons_8_12",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 10
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_butterfly_0_0",
            "Set": "battle_butterfly",
            "Width": 26,
            "Height": 19
        },
        "Notes": [],
        "NameTokens": [
            "Flutterfang",
            "EnemyGardenerButterfly"
        ],
        "RewardTokens": [
            "Beauty",
            "Rare Coin",
            "Coin",
            "Token",
            "Beauty Token",
            "Rare"
        ]
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
        "Exp": {
            "Min": 0,
            "Max": 0
        },
        "Money": {
            "Min": 0,
            "Max": 0
        },
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_eyeflower_0_0",
            "Set": "battle_eyeflower",
            "Width": 17,
            "Height": 21
        },
        "Notes": [],
        "NameTokens": [
            "Eyepoppy",
            "EnemyGardenerFlower"
        ],
        "RewardTokens": [
            "Coin",
            "Common",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 3,
            "Max": 3
        },
        "Money": {
            "Min": 0,
            "Max": 0
        },
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_ghost_fat_0_0",
            "Set": "battle_ghost_fat",
            "Width": 16,
            "Height": 23
        },
        "Notes": [],
        "NameTokens": [
            "Dancer",
            "EnemyGhostFat",
            "The",
            "The Dancer"
        ],
        "RewardTokens": [
            "Coin",
            "Common",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 3,
            "Max": 3
        },
        "Money": {
            "Min": 0,
            "Max": 0
        },
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_ghost_skinny_0_0",
            "Set": "battle_ghost_skinny",
            "Width": 16,
            "Height": 21
        },
        "Notes": [],
        "NameTokens": [
            "The Creep",
            "The",
            "Creep",
            "EnemyGhostSkinny"
        ],
        "RewardTokens": [
            "Coin",
            "Common",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 3,
            "Max": 3
        },
        "Money": {
            "Min": 3,
            "Max": 3
        },
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
                    "ItemSprite": {
                        "Name": "icons_5_7",
                        "Set": "icons",
                        "Width": 14,
                        "Height": 9
                    }
                },
                {
                    "ItemType": "ItemRedMushroom",
                    "MaxRewarded": 1,
                    "MaxOwned": 3,
                    "ItemName": "Red Mushroom",
                    "ItemSprite": {
                        "Name": "icons_4_5",
                        "Set": "icons",
                        "Width": 14,
                        "Height": 9
                    }
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_ghrost_0_0",
            "Set": "battle_ghrost",
            "Width": 21,
            "Height": 21
        },
        "Notes": [
            "only if fighting multiple Ghrosts"
        ],
        "NameTokens": [
            "Ghrost",
            "EnemyGhrost"
        ],
        "RewardTokens": [
            "Red",
            "Sprout",
            "Sweet Sprout",
            "Red Mushroom",
            "Coin",
            "Mushroom",
            "Sweet",
            "Common",
            "Common Coin"
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
        "Exp": {
            "Min": 1,
            "Max": 2
        },
        "Money": {
            "Min": 1,
            "Max": 1
        },
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_ghrostling_0_0",
            "Set": "battle_ghrostling",
            "Width": 13,
            "Height": 12
        },
        "Notes": [],
        "NameTokens": [
            "EnemyGhrostling",
            "Ghrostling"
        ],
        "RewardTokens": [
            "Coin",
            "Common",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 30,
            "Max": 30
        },
        "Money": {
            "Min": 0,
            "Max": 0
        },
        "Rewards": {
            "Operator": "AND",
            "List": [
                {
                    "ItemType": "ItemSweetCake",
                    "ItemName": "Sweet Cake",
                    "ItemSprite": {
                        "Name": "icons_6_12",
                        "Set": "icons",
                        "Width": 14,
                        "Height": 9
                    }
                },
                {
                    "ItemType": "ItemRareCoin",
                    "ItemName": "Rare Coin",
                    "ItemSprite": {
                        "Name": "icons_8_12",
                        "Set": "icons",
                        "Width": 14,
                        "Height": 10
                    }
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_gilda_0_0",
            "Set": "battle_gilda",
            "Width": 14,
            "Height": 21
        },
        "Notes": [],
        "NameTokens": [
            "Gilda",
            "EnemyGilda"
        ],
        "RewardTokens": [
            "Rare Coin",
            "Coin",
            "Cake",
            "Rare",
            "Sweet",
            "Common",
            "Common Coin",
            "Sweet Cake"
        ]
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
        "Exp": {
            "Min": 25,
            "Max": 25
        },
        "Money": {
            "Min": 0,
            "Max": 0
        },
        "Rewards": {
            "Operator": "AND",
            "List": [
                {
                    "ItemType": "ItemRareGem",
                    "ItemName": "Rare Gem",
                    "ItemSprite": {
                        "Name": "icons_0_6",
                        "Set": "icons",
                        "Width": 14,
                        "Height": 13
                    }
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_gilda_0_0",
            "Set": "battle_gilda",
            "Width": 14,
            "Height": 21
        },
        "Notes": [],
        "NameTokens": [
            "Gilda",
            "EnemyGilda2"
        ],
        "RewardTokens": [
            "Rare Gem",
            "Coin",
            "Rare",
            "Gem",
            "Common",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 100,
            "Max": 100
        },
        "Money": {
            "Min": 0,
            "Max": 0
        },
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_glip_0_0",
            "Set": "battle_glip",
            "Width": 27,
            "Height": 60
        },
        "Notes": [],
        "NameTokens": [
            "Attack-in-the-Box",
            "EnemyGlip"
        ],
        "RewardTokens": [
            "Coin",
            "Common",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 0,
            "Max": 0
        },
        "Money": {
            "Min": 0,
            "Max": 0
        },
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_bee_0_0",
            "Set": "battle_bee",
            "Width": 15,
            "Height": 13
        },
        "Notes": [],
        "NameTokens": [
            "EnemyGlipBee",
            "Bumbler"
        ],
        "RewardTokens": [
            "Coin",
            "Common",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 0,
            "Max": 0
        },
        "Money": {
            "Min": 0,
            "Max": 0
        },
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_fungi_0_0",
            "Set": "battle_fungi",
            "Width": 13,
            "Height": 11
        },
        "Notes": [],
        "NameTokens": [
            "Fungi",
            "Dimini",
            "Fungi Dimini",
            "EnemyGlipFungi"
        ],
        "RewardTokens": [
            "Coin",
            "Common",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 0,
            "Max": 0
        },
        "Money": {
            "Min": 0,
            "Max": 0
        },
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_fuzzy_0_0",
            "Set": "battle_fuzzy",
            "Width": 14,
            "Height": 10
        },
        "Notes": [],
        "NameTokens": [
            "Mossling",
            "EnemyGlipFuzzy"
        ],
        "RewardTokens": [
            "Coin",
            "Common",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 0,
            "Max": 0
        },
        "Money": {
            "Min": 0,
            "Max": 0
        },
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_ghrostling_0_0",
            "Set": "battle_ghrostling",
            "Width": 13,
            "Height": 12
        },
        "Notes": [],
        "NameTokens": [
            "EnemyGlipGhrostling",
            "Ghrostling"
        ],
        "RewardTokens": [
            "Coin",
            "Common",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 0,
            "Max": 0
        },
        "Money": {
            "Min": 0,
            "Max": 0
        },
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_pane_attacker_0_0",
            "Set": "battle_pane_attacker",
            "Width": 11,
            "Height": 15
        },
        "Notes": [],
        "NameTokens": [
            "Pane",
            "Rocket Pane",
            "Rocket",
            "EnemyGlipPaneAttacker"
        ],
        "RewardTokens": [
            "Coin",
            "Common",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 0,
            "Max": 0
        },
        "Money": {
            "Min": 0,
            "Max": 0
        },
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_pants_0_0",
            "Set": "battle_pants",
            "Width": 22,
            "Height": 21
        },
        "Notes": [],
        "NameTokens": [
            "EnemyGlipPants",
            "Trouncers"
        ],
        "RewardTokens": [
            "Coin",
            "Common",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 10,
            "Max": 10
        },
        "Money": {
            "Min": 10,
            "Max": 10
        },
        "Rewards": {
            "Operator": "OR",
            "List": [
                {
                    "ItemType": "ItemHoneycrisp",
                    "MaxRewarded": 1,
                    "MaxOwned": 2,
                    "ItemName": "Honeycrisp",
                    "ItemSprite": {
                        "Name": "icons_2_7",
                        "Set": "icons",
                        "Width": 14,
                        "Height": 12
                    }
                },
                {
                    "ItemType": "ItemMiniMelon",
                    "MaxRewarded": 1,
                    "MaxOwned": 3,
                    "ItemName": "Mini Melon",
                    "ItemSprite": {
                        "Name": "icons_1_9",
                        "Set": "icons",
                        "Width": 14,
                        "Height": 9
                    }
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
                        "ItemSprite": {
                            "Name": "icons_2_7",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 12
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemHoneycrisp",
                        "ItemName": "Honeycrisp",
                        "ItemSprite": {
                            "Name": "icons_2_7",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 12
                        }
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
                        "ItemSprite": {
                            "Name": "icons_1_10",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 11
                        }
                    },
                    {
                        "ItemType": "ItemHoneycrisp",
                        "ItemName": "Honeycrisp",
                        "ItemSprite": {
                            "Name": "icons_2_7",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 12
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_golem_0_0",
            "Set": "battle_golem",
            "Width": 26,
            "Height": 30
        },
        "Notes": [],
        "NameTokens": [
            "Eater",
            "Fossil Eater",
            "Fossil",
            "EnemyGolem"
        ],
        "RewardTokens": [
            "Candy",
            "Mini",
            "Mini Melon",
            "Melon",
            "Honeycrisp",
            "Comeback Candy",
            "Comeback"
        ]
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
        "Exp": {
            "Min": 10,
            "Max": 10
        },
        "Money": {
            "Min": 10,
            "Max": 10
        },
        "Rewards": {
            "Operator": "AND",
            "List": [
                {
                    "ItemType": "ItemFrenzyFlower",
                    "MaxRewarded": 3,
                    "MaxOwned": 3,
                    "IsCombinedMax": true,
                    "ItemName": "Frenzy Flower",
                    "ItemSprite": {
                        "Name": "icons_9_5",
                        "Set": "icons",
                        "Width": 14,
                        "Height": 13
                    }
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_golem_red_0_0",
            "Set": "battle_golem_red",
            "Width": 26,
            "Height": 30
        },
        "Notes": [],
        "NameTokens": [
            "EnemyGolemRed",
            "Fossil Forger",
            "Forger",
            "Fossil"
        ],
        "RewardTokens": [
            "Coin",
            "Frenzy",
            "Flower",
            "Common",
            "Common Coin",
            "Frenzy Flower"
        ]
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
        "Exp": {
            "Min": 6,
            "Max": 6
        },
        "Money": {
            "Min": 5,
            "Max": 5
        },
        "Rewards": {
            "Operator": "AND",
            "List": [
                {
                    "ItemType": "ItemSpiceLeaf",
                    "ItemName": "Spice Leaf",
                    "ItemSprite": {
                        "Name": "icons_5_6",
                        "Set": "icons",
                        "Width": 14,
                        "Height": 10
                    }
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
                        "ItemSprite": {
                            "Name": "icons_8_5",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 13
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemGoldBlossom",
                        "ItemName": "Gold Blossom",
                        "ItemSprite": {
                            "Name": "icons_8_5",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 13
                        }
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
                        "ItemSprite": {
                            "Name": "icons_6_12",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 9
                        }
                    },
                    {
                        "ItemType": "ItemGoldBlossom",
                        "ItemName": "Gold Blossom",
                        "ItemSprite": {
                            "Name": "icons_8_5",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 13
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_goowall_0_0",
            "Set": "battle_goowall",
            "Width": 25,
            "Height": 21
        },
        "Notes": [],
        "NameTokens": [
            "EnemyGooWall",
            "Ticklish"
        ],
        "RewardTokens": [
            "Gold",
            "Gold Blossom",
            "Leaf",
            "Blossom",
            "Cake",
            "Spice",
            "Sweet",
            "Spice Leaf",
            "Sweet Cake"
        ]
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
        "Exp": {
            "Min": 5,
            "Max": 5
        },
        "Money": {
            "Min": 4,
            "Max": 4
        },
        "Rewards": {
            "Operator": "AND",
            "List": [
                {
                    "ItemType": "ItemBlueBlossom",
                    "MaxRewarded": 1,
                    "MaxOwned": 1,
                    "ItemName": "Blue Blossom",
                    "ItemSprite": {
                        "Name": "icons_7_5",
                        "Set": "icons",
                        "Width": 14,
                        "Height": 13
                    }
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_grump_0_0",
            "Set": "battle_grump",
            "Width": 22,
            "Height": 26
        },
        "Notes": [],
        "NameTokens": [
            "EnemyGrump",
            "Great Grump",
            "Grump",
            "Great"
        ],
        "RewardTokens": [
            "Blue",
            "Blue Blossom",
            "Blossom",
            "Coin",
            "Common",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 30,
            "Max": 30
        },
        "Money": {
            "Min": 50,
            "Max": 50
        },
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_blackhand2_0_0",
            "Set": "battle_blackhand2",
            "Width": 16,
            "Height": 27
        },
        "Notes": [],
        "NameTokens": [
            "EnemyHandBig",
            "Underclaw"
        ],
        "RewardTokens": [
            "Coin",
            "Common",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 30,
            "Max": 30
        },
        "Money": {
            "Min": 50,
            "Max": 50
        },
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_blackhand_0_0",
            "Set": "battle_blackhand",
            "Width": 18,
            "Height": 23
        },
        "Notes": [],
        "NameTokens": [
            "EnemyHandSmall",
            "Underhand"
        ],
        "RewardTokens": [
            "Coin",
            "Common",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 12,
            "Max": 12
        },
        "Money": {
            "Min": 12,
            "Max": 12
        },
        "Rewards": {
            "Operator": "AND",
            "List": [
                {
                    "ItemType": "ItemHoneycrisp",
                    "MaxRewarded": 1,
                    "MaxOwned": 2,
                    "ItemName": "Honeycrisp",
                    "ItemSprite": {
                        "Name": "icons_2_7",
                        "Set": "icons",
                        "Width": 14,
                        "Height": 12
                    }
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
                        "ItemSprite": {
                            "Name": "icons_0_10",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 11
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemPowerCherry",
                        "ItemName": "Pow Cherry",
                        "ItemSprite": {
                            "Name": "icons_0_10",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 11
                        }
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
                        "ItemSprite": {
                            "Name": "icons_6_16",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 10
                        }
                    },
                    {
                        "ItemType": "ItemPowerCherry",
                        "ItemName": "Pow Cherry",
                        "ItemSprite": {
                            "Name": "icons_0_10",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 11
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_hoptic_0_0",
            "Set": "battle_hoptic",
            "Width": 24,
            "Height": 23
        },
        "Notes": [],
        "NameTokens": [
            "EnemyHoptic",
            "Hoptic"
        ],
        "RewardTokens": [
            "Pow Cherry",
            "Pow",
            "Cherry",
            "Pink",
            "Pink Pods",
            "Honeycrisp",
            "Pods"
        ]
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
        "Exp": {
            "Min": 20,
            "Max": 20
        },
        "Money": {
            "Min": 20,
            "Max": 20
        },
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_mercury_0_0",
            "Set": "battle_mercury",
            "Width": 18,
            "Height": 18
        },
        "Notes": [],
        "NameTokens": [
            "Hydrarg",
            "EnemyHydrarg"
        ],
        "RewardTokens": [
            "Coin",
            "Common",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 1,
            "Max": 1
        },
        "Money": {
            "Min": 0,
            "Max": 0
        },
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_ibn_0_0",
            "Set": "battle_ibn",
            "Width": 14,
            "Height": 24
        },
        "Notes": [],
        "NameTokens": [
            "EnemyIbn",
            "Oxley"
        ],
        "RewardTokens": [
            "Coin",
            "Common",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 6,
            "Max": 6
        },
        "Money": {
            "Min": 5,
            "Max": 5
        },
        "Rewards": {
            "Operator": "AND",
            "List": [
                {
                    "ItemType": "ItemGoldBlossom",
                    "MaxRewarded": 2,
                    "MaxOwned": 2,
                    "ItemName": "Gold Blossom",
                    "ItemSprite": {
                        "Name": "icons_8_5",
                        "Set": "icons",
                        "Width": 14,
                        "Height": 13
                    }
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
                        "ItemSprite": {
                            "Name": "icons_1_9",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 9
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemMiniMelon",
                        "ItemName": "Mini Melon",
                        "ItemSprite": {
                            "Name": "icons_1_9",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 9
                        }
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
                        "ItemSprite": {
                            "Name": "icons_3_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 9
                        }
                    },
                    {
                        "ItemType": "ItemMiniMelon",
                        "ItemName": "Mini Melon",
                        "ItemSprite": {
                            "Name": "icons_1_9",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 9
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_manacle_0_0",
            "Set": "battle_manacle",
            "Width": 22,
            "Height": 32
        },
        "Notes": [],
        "NameTokens": [
            "Jailbob",
            "EnemyJailbob"
        ],
        "RewardTokens": [
            "Gold",
            "Cave",
            "Gold Blossom",
            "Mini",
            "Blossom",
            "Mini Melon",
            "Melon",
            "Cave Acorn",
            "Acorn"
        ]
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
        "Exp": {
            "Min": 4,
            "Max": 4
        },
        "Money": {
            "Min": 4,
            "Max": 4
        },
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
                        "ItemSprite": {
                            "Name": "icons_3_7",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 9
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemMoldyShroom",
                        "ItemName": "Moldy Shroom",
                        "ItemSprite": {
                            "Name": "icons_3_7",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 9
                        }
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
                        "ItemSprite": {
                            "Name": "icons_7_15",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 11
                        }
                    },
                    {
                        "ItemType": "ItemMoldyShroom",
                        "ItemName": "Moldy Shroom",
                        "ItemSprite": {
                            "Name": "icons_3_7",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 9
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_jelly_black_0_0",
            "Set": "battle_jelly_black",
            "Width": 14,
            "Height": 10
        },
        "Notes": [],
        "NameTokens": [
            "EnemyJellyBlack",
            "Bogeyblob"
        ],
        "RewardTokens": [
            "Rancid",
            "Moldy Shroom",
            "Fruit",
            "Rancid Fruit",
            "Moldy",
            "Shroom"
        ]
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
        "Exp": {
            "Min": 0,
            "Max": 0
        },
        "Money": {
            "Min": 0,
            "Max": 0
        },
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
                        "ItemSprite": {
                            "Name": "icons_4_6",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemSmallMushroom",
                        "ItemName": "Small Mushroom",
                        "ItemSprite": {
                            "Name": "icons_4_6",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
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
                        "ItemSprite": {
                            "Name": "icons_5_6",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 10
                        }
                    },
                    {
                        "ItemType": "ItemSmallMushroom",
                        "ItemName": "Small Mushroom",
                        "ItemSprite": {
                            "Name": "icons_4_6",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_jelly_green_0_0",
            "Set": "battle_jelly_green",
            "Width": 14,
            "Height": 12
        },
        "Notes": [],
        "NameTokens": [
            "EnemyJellyGreen",
            "Slimy"
        ],
        "RewardTokens": [
            "Small Mushroom",
            "Leaf",
            "Spice",
            "Mushroom",
            "Small",
            "Spice Leaf"
        ]
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
        "Exp": {
            "Min": 2,
            "Max": 2
        },
        "Money": {
            "Min": 2,
            "Max": 2
        },
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
                        "ItemSprite": {
                            "Name": "icons_4_6",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemSmallMushroom",
                        "ItemName": "Small Mushroom",
                        "ItemSprite": {
                            "Name": "icons_4_6",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
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
                        "ItemSprite": {
                            "Name": "icons_5_6",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 10
                        }
                    },
                    {
                        "ItemType": "ItemSmallMushroom",
                        "ItemName": "Small Mushroom",
                        "ItemSprite": {
                            "Name": "icons_4_6",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_jelly_green_0_0",
            "Set": "battle_jelly_green",
            "Width": 14,
            "Height": 12
        },
        "Notes": [],
        "NameTokens": [
            "EnemyJellyGreenLab",
            "Slimy"
        ],
        "RewardTokens": [
            "Small Mushroom",
            "Leaf",
            "Spice",
            "Mushroom",
            "Small",
            "Spice Leaf"
        ]
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
        "Exp": {
            "Min": 0,
            "Max": 0
        },
        "Money": {
            "Min": 0,
            "Max": 0
        },
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_jelly_red_0_0",
            "Set": "battle_jelly_red",
            "Width": 14,
            "Height": 10
        },
        "Notes": [],
        "NameTokens": [
            "EnemyJellyRed",
            "Oozy"
        ],
        "RewardTokens": [
            "Coin",
            "Common",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 0,
            "Max": 0
        },
        "Money": {
            "Min": 0,
            "Max": 0
        },
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_jelly_yellow_0_0",
            "Set": "battle_jelly_yellow",
            "Width": 14,
            "Height": 10
        },
        "Notes": [],
        "NameTokens": [
            "EnemyJellyYellow",
            "Fizzy"
        ],
        "RewardTokens": [
            "Coin",
            "Common",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 30,
            "Max": 30
        },
        "Money": {
            "Min": 0,
            "Max": 0
        },
        "Rewards": {
            "Operator": "AND",
            "List": [
                {
                    "ItemType": "ItemRareCoin",
                    "ItemName": "Rare Coin",
                    "ItemSprite": {
                        "Name": "icons_8_12",
                        "Set": "icons",
                        "Width": 14,
                        "Height": 10
                    }
                },
                {
                    "ItemType": "GlassHairpin",
                    "ItemName": "Glass Hairpin",
                    "ItemSprite": {
                        "Name": "accessories_1_3",
                        "Set": "accessories",
                        "Width": 14,
                        "Height": 10
                    }
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "cat_white_0_2",
            "Set": "cat_white",
            "Width": 14,
            "Height": 10
        },
        "Notes": [],
        "NameTokens": [
            "Kitten",
            "Adorable Kitten",
            "EnemyKitten",
            "Adorable"
        ],
        "RewardTokens": [
            "Glass Hairpin",
            "Hairpin",
            "Rare Coin",
            "Glass",
            "Coin",
            "Rare",
            "Common",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 1,
            "Max": 1
        },
        "Money": {
            "Min": 0,
            "Max": 0
        },
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_crystal_0_0",
            "Set": "battle_crystal",
            "Width": 9,
            "Height": 20
        },
        "Notes": [],
        "NameTokens": [
            "Beryllous",
            "EnemyKittenCrystal"
        ],
        "RewardTokens": [
            "Coin",
            "Common",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 5,
            "Max": 5
        },
        "Money": {
            "Min": 0,
            "Max": 0
        },
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": null,
        "Notes": [],
        "NameTokens": [
            "Envy",
            "EnemyLampBlue"
        ],
        "RewardTokens": [
            "Coin",
            "Common",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 5,
            "Max": 5
        },
        "Money": {
            "Min": 0,
            "Max": 0
        },
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": null,
        "Notes": [],
        "NameTokens": [
            "EnemyLampRed",
            "Zeal"
        ],
        "RewardTokens": [
            "Coin",
            "Common",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 10,
            "Max": 10
        },
        "Money": {
            "Min": 0,
            "Max": 0
        },
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_lantern_0_0",
            "Set": "battle_lantern",
            "Width": 18,
            "Height": 32
        },
        "Notes": [],
        "NameTokens": [
            "Turmoil",
            "EnemyLantern"
        ],
        "RewardTokens": [
            "Coin",
            "Common",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 0,
            "Max": 0
        },
        "Money": {
            "Min": 0,
            "Max": 0
        },
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_lantern_flame_4_0",
            "Set": "battle_lantern_flame",
            "Width": 8,
            "Height": 12
        },
        "Notes": [],
        "NameTokens": [
            "Blue",
            "Flame",
            "Blue Flame",
            "EnemyLanternFlameBlue"
        ],
        "RewardTokens": [
            "Coin",
            "Common",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 0,
            "Max": 0
        },
        "Money": {
            "Min": 0,
            "Max": 0
        },
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_lantern_flame_0_0",
            "Set": "battle_lantern_flame",
            "Width": 8,
            "Height": 12
        },
        "Notes": [],
        "NameTokens": [
            "Red Flame",
            "Red",
            "EnemyLanternFlameRed",
            "Flame"
        ],
        "RewardTokens": [
            "Coin",
            "Common",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 0,
            "Max": 0
        },
        "Money": {
            "Min": 0,
            "Max": 0
        },
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_ghost_skinny_0_0",
            "Set": "battle_ghost_skinny",
            "Width": 16,
            "Height": 21
        },
        "Notes": [],
        "NameTokens": [
            "The Creep",
            "EnemyLegionCreep",
            "The",
            "Creep"
        ],
        "RewardTokens": [
            "Coin",
            "Common",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 0,
            "Max": 0
        },
        "Money": {
            "Min": 0,
            "Max": 0
        },
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_ghost_fat_0_0",
            "Set": "battle_ghost_fat",
            "Width": 16,
            "Height": 23
        },
        "Notes": [],
        "NameTokens": [
            "Dancer",
            "The",
            "The Dancer",
            "EnemyLegionDancer"
        ],
        "RewardTokens": [
            "Coin",
            "Common",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 0,
            "Max": 0
        },
        "Money": {
            "Min": 0,
            "Max": 0
        },
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_eoc_0_0",
            "Set": "battle_eoc",
            "Width": 17,
            "Height": 25
        },
        "Notes": [],
        "NameTokens": [
            "EnemyLegionEoc",
            "Eoc"
        ],
        "RewardTokens": [
            "Coin",
            "Common",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 0,
            "Max": 0
        },
        "Money": {
            "Min": 0,
            "Max": 0
        },
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
                        "ItemSprite": {
                            "Name": "icons_5_17",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 9
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemGhostCookie",
                        "ItemName": "Ghost Cookie",
                        "ItemSprite": {
                            "Name": "icons_5_17",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 9
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemGhostCookie",
                        "ItemName": "Ghost Cookie",
                        "ItemSprite": {
                            "Name": "icons_5_17",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 9
                        }
                    },
                    {
                        "ItemType": "GhostPendant",
                        "MaxRewarded": 1,
                        "MaxOwned": 2,
                        "ItemName": "Ghost Pendant",
                        "ItemSprite": {
                            "Name": "accessories_0_7",
                            "Set": "accessories",
                            "Width": 14,
                            "Height": 11
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_eoc2_0_0",
            "Set": "battle_eoc2",
            "Width": 26,
            "Height": 34
        },
        "Notes": [],
        "NameTokens": [
            "Eoc",
            "EnemyLegionEoc2"
        ],
        "RewardTokens": [
            "Ghost Pendant",
            "Cookie",
            "Pendant",
            "Ghost Cookie",
            "Ghost"
        ]
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
        "Exp": {
            "Min": 100,
            "Max": 100
        },
        "Money": {
            "Min": 0,
            "Max": 0
        },
        "Rewards": {
            "Operator": "AND",
            "List": [
                {
                    "ItemType": "ItemPrizeMedal",
                    "ItemName": "Prize Medal",
                    "ItemSprite": {
                        "Name": "icons_3_16",
                        "Set": "icons",
                        "Width": 14,
                        "Height": 13
                    }
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
                        "ItemSprite": {
                            "Name": "icons_5_17",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 9
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemGhostCookie",
                        "ItemName": "Ghost Cookie",
                        "ItemSprite": {
                            "Name": "icons_5_17",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 9
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemGhostCookie",
                        "ItemName": "Ghost Cookie",
                        "ItemSprite": {
                            "Name": "icons_5_17",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 9
                        }
                    },
                    {
                        "ItemType": "GhostPendant",
                        "MaxRewarded": 1,
                        "MaxOwned": 2,
                        "ItemName": "Ghost Pendant",
                        "ItemSprite": {
                            "Name": "accessories_0_7",
                            "Set": "accessories",
                            "Width": 14,
                            "Height": 11
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_eoc2_0_0",
            "Set": "battle_eoc2",
            "Width": 26,
            "Height": 34
        },
        "Notes": [],
        "NameTokens": [
            "Eoc\uff11",
            "EnemyLegionEoc3"
        ],
        "RewardTokens": [
            "Ghost Pendant",
            "Cookie",
            "Pendant",
            "Prize",
            "Ghost Cookie",
            "Prize Medal",
            "Ghost",
            "Medal"
        ]
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
        "Exp": {
            "Min": 100,
            "Max": 100
        },
        "Money": {
            "Min": 0,
            "Max": 0
        },
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
                        "ItemSprite": {
                            "Name": "icons_5_17",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 9
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemGhostCookie",
                        "ItemName": "Ghost Cookie",
                        "ItemSprite": {
                            "Name": "icons_5_17",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 9
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemGhostCookie",
                        "ItemName": "Ghost Cookie",
                        "ItemSprite": {
                            "Name": "icons_5_17",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 9
                        }
                    },
                    {
                        "ItemType": "GhostPendant",
                        "MaxRewarded": 1,
                        "MaxOwned": 2,
                        "ItemName": "Ghost Pendant",
                        "ItemSprite": {
                            "Name": "accessories_0_7",
                            "Set": "accessories",
                            "Width": 14,
                            "Height": 11
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_eoc2_0_0",
            "Set": "battle_eoc2",
            "Width": 26,
            "Height": 34
        },
        "Notes": [],
        "NameTokens": [
            "Eoc\uff12",
            "EnemyLegionEoc4"
        ],
        "RewardTokens": [
            "Ghost Pendant",
            "Cookie",
            "Pendant",
            "Ghost Cookie",
            "Ghost"
        ]
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
        "Exp": {
            "Min": 40,
            "Max": 40
        },
        "Money": {
            "Min": 50,
            "Max": 50
        },
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_leveretto_0_0",
            "Set": "battle_leveretto",
            "Width": 30,
            "Height": 20
        },
        "Notes": [],
        "NameTokens": [
            "Leveretto",
            "EnemyLeveretto"
        ],
        "RewardTokens": [
            "Coin",
            "Common",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 3,
            "Max": 3
        },
        "Money": {
            "Min": 3,
            "Max": 3
        },
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_lily_0_0",
            "Set": "battle_lily",
            "Width": 12,
            "Height": 20
        },
        "Notes": [],
        "NameTokens": [
            "Lily",
            "Ill Lily",
            "Ill",
            "EnemyLily"
        ],
        "RewardTokens": [
            "Coin",
            "Common",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 20,
            "Max": 20
        },
        "Money": {
            "Min": 20,
            "Max": 20
        },
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_mercury_0_0",
            "Set": "battle_mercury",
            "Width": 18,
            "Height": 18
        },
        "Notes": [],
        "NameTokens": [
            "Mercuroid",
            "EnemyMercuroid"
        ],
        "RewardTokens": [
            "Coin",
            "Common",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 50,
            "Max": 50
        },
        "Money": {
            "Min": 0,
            "Max": 0
        },
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_mimic_0_0",
            "Set": "battle_mimic",
            "Width": 25,
            "Height": 18
        },
        "Notes": [],
        "NameTokens": [
            "Bogeybox",
            "EnemyMimic"
        ],
        "RewardTokens": [
            "Coin",
            "Common",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 0,
            "Max": 0
        },
        "Money": {
            "Min": 0,
            "Max": 0
        },
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_darkskull_mini_0_0",
            "Set": "battle_darkskull_mini",
            "Width": 12,
            "Height": 12
        },
        "Notes": [],
        "NameTokens": [
            "Smallbones",
            "EnemyMiniSkull"
        ],
        "RewardTokens": [
            "Coin",
            "Common",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 5,
            "Max": 5
        },
        "Money": {
            "Min": 5,
            "Max": 5
        },
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_morpie_0_0",
            "Set": "battle_morpie",
            "Width": 14,
            "Height": 14
        },
        "Notes": [],
        "NameTokens": [
            "Morpie",
            "EnemyMorpie"
        ],
        "RewardTokens": [
            "Coin",
            "Common",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 3,
            "Max": 3
        },
        "Money": {
            "Min": 3,
            "Max": 3
        },
        "Rewards": {
            "Operator": "OR",
            "List": [
                {
                    "ItemType": "ItemSmallMushroom",
                    "MaxRewarded": 2,
                    "MaxOwned": 5,
                    "ItemName": "Small Mushroom",
                    "ItemSprite": {
                        "Name": "icons_4_6",
                        "Set": "icons",
                        "Width": 14,
                        "Height": 8
                    }
                },
                {
                    "ItemType": "ItemRedMushroom",
                    "MaxRewarded": 1,
                    "MaxOwned": 2,
                    "ItemName": "Red Mushroom",
                    "ItemSprite": {
                        "Name": "icons_4_5",
                        "Set": "icons",
                        "Width": 14,
                        "Height": 9
                    }
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_mushroom_0_0",
            "Set": "battle_mushroom",
            "Width": 15,
            "Height": 14
        },
        "Notes": [],
        "NameTokens": [
            "EnemyMushroom",
            "Bolete"
        ],
        "RewardTokens": [
            "Red",
            "Small Mushroom",
            "Red Mushroom",
            "Coin",
            "Mushroom",
            "Small",
            "Common Coin",
            "Common"
        ]
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
        "Exp": {
            "Min": 0,
            "Max": 0
        },
        "Money": {
            "Min": 0,
            "Max": 0
        },
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_oxley_0_0",
            "Set": "battle_oxley",
            "Width": 12,
            "Height": 24
        },
        "Notes": [],
        "NameTokens": [
            "Oxley?",
            "EnemyOxley1"
        ],
        "RewardTokens": [
            "Coin",
            "Common",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 0,
            "Max": 0
        },
        "Money": {
            "Min": 0,
            "Max": 0
        },
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_oxley_0_0",
            "Set": "battle_oxley",
            "Width": 12,
            "Height": 24
        },
        "Notes": [],
        "NameTokens": [
            "Oxley?",
            "EnemyOxley2"
        ],
        "RewardTokens": [
            "Coin",
            "Common",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 0,
            "Max": 0
        },
        "Money": {
            "Min": 0,
            "Max": 0
        },
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_oxley_0_0",
            "Set": "battle_oxley",
            "Width": 12,
            "Height": 24
        },
        "Notes": [],
        "NameTokens": [
            "Oxley?",
            "EnemyOxley3"
        ],
        "RewardTokens": [
            "Coin",
            "Common",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 2,
            "Max": 3
        },
        "Money": {
            "Min": 4,
            "Max": 4
        },
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
                        "ItemSprite": {
                            "Name": "icons_6_6",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 10
                        }
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
                        "ItemSprite": {
                            "Name": "icons_6_6",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 10
                        }
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
                        "ItemSprite": {
                            "Name": "icons_2_10",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 11
                        }
                    },
                    {
                        "ItemType": "ItemHotBerry",
                        "MaxRewarded": 3,
                        "MaxOwned": 3,
                        "ItemName": "Hot Berry",
                        "ItemSprite": {
                            "Name": "icons_6_6",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 10
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_pane_attacker_0_0",
            "Set": "battle_pane_attacker",
            "Width": 11,
            "Height": 15
        },
        "Notes": [],
        "NameTokens": [
            "EnemyPaneAttacker",
            "Pane",
            "Rocket Pane",
            "Rocket"
        ],
        "RewardTokens": [
            "Hot",
            "Berry",
            "Berries",
            "Thorn",
            "Thorn Berries",
            "Hot Berry"
        ]
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
        "Exp": {
            "Min": 2,
            "Max": 3
        },
        "Money": {
            "Min": 4,
            "Max": 4
        },
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
                        "ItemSprite": {
                            "Name": "icons_9_6",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 7
                        }
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
                        "ItemSprite": {
                            "Name": "icons_9_6",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 7
                        }
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
                        "ItemSprite": {
                            "Name": "icons_3_10",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 9
                        }
                    },
                    {
                        "ItemType": "ItemRockSeed",
                        "MaxRewarded": 3,
                        "MaxOwned": 3,
                        "ItemName": "Rock Seed",
                        "ItemSprite": {
                            "Name": "icons_9_6",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 7
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_pane_blocker_0_0",
            "Set": "battle_pane_blocker",
            "Width": 11,
            "Height": 15
        },
        "Notes": [],
        "NameTokens": [
            "Pane",
            "Safety Pane",
            "EnemyPaneBlocker",
            "Safety"
        ],
        "RewardTokens": [
            "Hard Nut",
            "Nut",
            "Rock",
            "Rock Seed",
            "Hard",
            "Seed"
        ]
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
        "Exp": {
            "Min": 2,
            "Max": 3
        },
        "Money": {
            "Min": 4,
            "Max": 4
        },
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
                        "ItemSprite": {
                            "Name": "icons_4_5",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 9
                        }
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
                        "ItemSprite": {
                            "Name": "icons_4_5",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 9
                        }
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
                        "ItemSprite": {
                            "Name": "icons_7_5",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 13
                        }
                    },
                    {
                        "ItemType": "ItemRedMushroom",
                        "MaxRewarded": 3,
                        "MaxOwned": 3,
                        "ItemName": "Red Mushroom",
                        "ItemSprite": {
                            "Name": "icons_4_5",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 9
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_pane_healer_0_0",
            "Set": "battle_pane_healer",
            "Width": 11,
            "Height": 15
        },
        "Notes": [],
        "NameTokens": [
            "Love",
            "Pane",
            "Love Pane",
            "EnemyPaneHealer"
        ],
        "RewardTokens": [
            "Blue",
            "Red",
            "Blue Blossom",
            "Blossom",
            "Red Mushroom",
            "Mushroom"
        ]
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
        "Exp": {
            "Min": 5,
            "Max": 6
        },
        "Money": {
            "Min": 10,
            "Max": 10
        },
        "Rewards": {
            "Operator": "OR",
            "List": [
                {
                    "ItemType": "ItemDewPlum",
                    "MaxRewarded": 1,
                    "MaxOwned": 2,
                    "ItemName": "Dew Plum",
                    "ItemSprite": {
                        "Name": "icons_1_7",
                        "Set": "icons",
                        "Width": 14,
                        "Height": 12
                    }
                },
                {
                    "ItemType": "ItemMiniMelon",
                    "MaxRewarded": 1,
                    "MaxOwned": 3,
                    "ItemName": "Mini Melon",
                    "ItemSprite": {
                        "Name": "icons_1_9",
                        "Set": "icons",
                        "Width": 14,
                        "Height": 9
                    }
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
                        "ItemSprite": {
                            "Name": "icons_1_9",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 9
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemMiniMelon",
                        "ItemName": "Mini Melon",
                        "ItemSprite": {
                            "Name": "icons_1_9",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 9
                        }
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
                        "ItemSprite": {
                            "Name": "icons_2_7",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 12
                        }
                    },
                    {
                        "ItemType": "ItemMiniMelon",
                        "ItemName": "Mini Melon",
                        "ItemSprite": {
                            "Name": "icons_1_9",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 9
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_pants_0_0",
            "Set": "battle_pants",
            "Width": 22,
            "Height": 21
        },
        "Notes": [],
        "NameTokens": [
            "EnemyPants",
            "Trouncers"
        ],
        "RewardTokens": [
            "Mini",
            "Dew",
            "Mini Melon",
            "Melon",
            "Honeycrisp",
            "Plum",
            "Dew Plum"
        ]
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
        "Exp": {
            "Min": 6,
            "Max": 6
        },
        "Money": {
            "Min": 6,
            "Max": 6
        },
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_plane_0_0",
            "Set": "battle_plane",
            "Width": 17,
            "Height": 8
        },
        "Notes": [],
        "NameTokens": [
            "Paper Flier",
            "Paper",
            "Flier",
            "EnemyPlane"
        ],
        "RewardTokens": [
            "Coin",
            "Common",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 20,
            "Max": 20
        },
        "Money": {
            "Min": 20,
            "Max": 20
        },
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
                        "ItemSprite": {
                            "Name": "icons_1_9",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 9
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemMiniMelon",
                        "ItemName": "Mini Melon",
                        "ItemSprite": {
                            "Name": "icons_1_9",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 9
                        }
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
                        "ItemSprite": {
                            "Name": "icons_4_16",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 12
                        }
                    },
                    {
                        "ItemType": "ItemMiniMelon",
                        "ItemName": "Mini Melon",
                        "ItemSprite": {
                            "Name": "icons_1_9",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 9
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_quill_0_0",
            "Set": "battle_quill",
            "Width": 26,
            "Height": 28
        },
        "Notes": [],
        "NameTokens": [
            "Paraquill",
            "EnemyQuill"
        ],
        "RewardTokens": [
            "Quill",
            "Mini",
            "Nexus Quill",
            "Mini Melon",
            "Melon",
            "Nexus"
        ]
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
        "Exp": {
            "Min": 20,
            "Max": 20
        },
        "Money": {
            "Min": 20,
            "Max": 20
        },
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
                        "ItemSprite": {
                            "Name": "icons_1_9",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 9
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemMiniMelon",
                        "ItemName": "Mini Melon",
                        "ItemSprite": {
                            "Name": "icons_1_9",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 9
                        }
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
                        "ItemSprite": {
                            "Name": "icons_4_16",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 12
                        }
                    },
                    {
                        "ItemType": "ItemMiniMelon",
                        "ItemName": "Mini Melon",
                        "ItemSprite": {
                            "Name": "icons_1_9",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 9
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_quill2_0_0",
            "Set": "battle_quill2",
            "Width": 26,
            "Height": 28
        },
        "Notes": [],
        "NameTokens": [
            "EnemyQuill2",
            "Brollychog"
        ],
        "RewardTokens": [
            "Quill",
            "Mini",
            "Nexus Quill",
            "Mini Melon",
            "Melon",
            "Nexus"
        ]
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
        "Exp": {
            "Min": 150,
            "Max": 150
        },
        "Money": {
            "Min": 0,
            "Max": 0
        },
        "Rewards": {
            "Operator": "AND",
            "List": [
                {
                    "ItemType": "ItemGoldShroom",
                    "ItemName": "Gold Shroom",
                    "ItemSprite": {
                        "Name": "icons_9_15",
                        "Set": "icons",
                        "Width": 14,
                        "Height": 13
                    }
                },
                {
                    "ItemType": "ItemPrizeMedal",
                    "ItemName": "Prize Medal",
                    "ItemSprite": {
                        "Name": "icons_3_16",
                        "Set": "icons",
                        "Width": 14,
                        "Height": 13
                    }
                },
                {
                    "ItemType": "SummerSash",
                    "ItemName": "Summer Sash",
                    "ItemSprite": {
                        "Name": "accessories_2_7",
                        "Set": "accessories",
                        "Width": 14,
                        "Height": 11
                    }
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
                        "ItemSprite": {
                            "Name": "icons_9_15",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 13
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemGoldShroom",
                        "ItemName": "Gold Shroom",
                        "ItemSprite": {
                            "Name": "icons_9_15",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 13
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemGoldShroom",
                        "ItemName": "Gold Shroom",
                        "ItemSprite": {
                            "Name": "icons_9_15",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 13
                        }
                    },
                    {
                        "ItemType": "SpringSash",
                        "ItemName": "Spring Sash",
                        "ItemSprite": {
                            "Name": "accessories_1_7",
                            "Set": "accessories",
                            "Width": 14,
                            "Height": 10
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_radegund_0_0",
            "Set": "battle_radegund",
            "Width": 15,
            "Height": 23
        },
        "Notes": [],
        "NameTokens": [
            "EnemyRadegund",
            "Radegund"
        ],
        "RewardTokens": [
            "Gold",
            "Spring Sash",
            "Sash",
            "Medal",
            "Summer",
            "Prize Medal",
            "Gold Shroom",
            "Shroom",
            "Prize",
            "Spring",
            "Summer Sash"
        ]
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
        "Exp": {
            "Min": 3,
            "Max": 3
        },
        "Money": {
            "Min": 3,
            "Max": 3
        },
        "Rewards": {
            "Operator": "AND",
            "List": [
                {
                    "ItemType": "ItemHotBerry",
                    "MaxRewarded": 1,
                    "MaxOwned": 1,
                    "ItemName": "Hot Berry",
                    "ItemSprite": {
                        "Name": "icons_6_6",
                        "Set": "icons",
                        "Width": 14,
                        "Height": 10
                    }
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_redbird_0_0",
            "Set": "battle_redbird",
            "Width": 15,
            "Height": 20
        },
        "Notes": [],
        "NameTokens": [
            "EnemyRedBird",
            "Goldfeather"
        ],
        "RewardTokens": [
            "Hot",
            "Berry",
            "Coin",
            "Common",
            "Hot Berry",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 5,
            "Max": 5
        },
        "Money": {
            "Min": 3,
            "Max": 3
        },
        "Rewards": {
            "Operator": "AND",
            "List": [
                {
                    "ItemType": "ItemHotBerry",
                    "MaxRewarded": 2,
                    "MaxOwned": 2,
                    "IsCombinedMax": true,
                    "ItemName": "Hot Berry",
                    "ItemSprite": {
                        "Name": "icons_6_6",
                        "Set": "icons",
                        "Width": 14,
                        "Height": 10
                    }
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_red_mushroom_0_0",
            "Set": "battle_red_mushroom",
            "Width": 15,
            "Height": 14
        },
        "Notes": [],
        "NameTokens": [
            "EnemyRedMushroom",
            "Amanita"
        ],
        "RewardTokens": [
            "Hot",
            "Berry",
            "Coin",
            "Common",
            "Hot Berry",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 0,
            "Max": 0
        },
        "Money": {
            "Min": 0,
            "Max": 0
        },
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_rift_crystal_0_0",
            "Set": "battle_rift_crystal",
            "Width": 9,
            "Height": 20
        },
        "Notes": [],
        "NameTokens": [
            "Obsidian",
            "EnemyRiftCrystal"
        ],
        "RewardTokens": [
            "Coin",
            "Common",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 0,
            "Max": 0
        },
        "Money": {
            "Min": 0,
            "Max": 0
        },
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_rift_mercury_0_0",
            "Set": "battle_rift_mercury",
            "Width": 18,
            "Height": 18
        },
        "Notes": [],
        "NameTokens": [
            "Primordial",
            "EnemyRiftMercuroid"
        ],
        "RewardTokens": [
            "Coin",
            "Common",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 0,
            "Max": 0
        },
        "Money": {
            "Min": 0,
            "Max": 0
        },
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_rift_skull_0_0",
            "Set": "battle_rift_skull",
            "Width": 12,
            "Height": 18
        },
        "Notes": [],
        "NameTokens": [
            "EnemyRiftSkull",
            "Underscourge"
        ],
        "RewardTokens": [
            "Coin",
            "Common",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 2,
            "Max": 2
        },
        "Money": {
            "Min": 2,
            "Max": 2
        },
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
                    "ItemSprite": {
                        "Name": "icons_4_6",
                        "Set": "icons",
                        "Width": 14,
                        "Height": 8
                    }
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_rock_0_0",
            "Set": "battle_rock",
            "Width": 12,
            "Height": 15
        },
        "Notes": [
            "has a 25% chance to drop even if you're at the limit"
        ],
        "NameTokens": [
            "Hard Knock",
            "EnemyRock",
            "Knock",
            "Hard"
        ],
        "RewardTokens": [
            "Small Mushroom",
            "Coin",
            "Mushroom",
            "Small",
            "Common Coin",
            "Common"
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
        "Exp": {
            "Min": 55,
            "Max": 55
        },
        "Money": {
            "Min": 50,
            "Max": 50
        },
        "Rewards": {
            "Operator": "AND",
            "List": [
                {
                    "ItemType": "ItemRedMushroom",
                    "MaxRewarded": 1,
                    "MaxOwned": 5,
                    "ItemName": "Red Mushroom",
                    "ItemSprite": {
                        "Name": "icons_4_5",
                        "Set": "icons",
                        "Width": 14,
                        "Height": 9
                    }
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_rock_0_0",
            "Set": "battle_rock",
            "Width": 12,
            "Height": 15
        },
        "Notes": [],
        "NameTokens": [
            "EnemyRockLair",
            "Hard Knock",
            "Knock",
            "Hard"
        ],
        "RewardTokens": [
            "Red",
            "Red Mushroom",
            "Coin",
            "Mushroom",
            "Common",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 1,
            "Max": 1
        },
        "Money": {
            "Min": 5,
            "Max": 5
        },
        "Rewards": {
            "Operator": "OR",
            "List": [
                {
                    "ItemType": "ItemRockNut",
                    "MaxRewarded": 1,
                    "MaxOwned": 1,
                    "IsCombinedMax": true,
                    "ItemName": "Rock Nut",
                    "ItemSprite": {
                        "Name": "icons_8_6",
                        "Set": "icons",
                        "Width": 14,
                        "Height": 10
                    }
                },
                {
                    "ItemType": "ItemRockSeed",
                    "MaxRewarded": 1,
                    "MaxOwned": 3,
                    "IsCombinedMax": true,
                    "ItemName": "Rock Seed",
                    "ItemSprite": {
                        "Name": "icons_9_6",
                        "Set": "icons",
                        "Width": 14,
                        "Height": 7
                    }
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_rock_lair_0_0",
            "Set": "battle_rock_lair",
            "Width": 12,
            "Height": 15
        },
        "Notes": [],
        "NameTokens": [
            "EnemyRockLairRed",
            "Craggyboy"
        ],
        "RewardTokens": [
            "Nut",
            "Rock",
            "Rock Nut",
            "Rock Seed",
            "Coin",
            "Seed",
            "Common Coin",
            "Common"
        ]
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
        "Exp": {
            "Min": 20,
            "Max": 20
        },
        "Money": {
            "Min": 20,
            "Max": 20
        },
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
                        "ItemSprite": {
                            "Name": "icons_9_5",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 13
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemFrenzyFlower",
                        "ItemName": "Frenzy Flower",
                        "ItemSprite": {
                            "Name": "icons_9_5",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 13
                        }
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
                        "ItemSprite": {
                            "Name": "icons_5_15",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 10
                        }
                    },
                    {
                        "ItemType": "ItemFrenzyFlower",
                        "ItemName": "Frenzy Flower",
                        "ItemSprite": {
                            "Name": "icons_9_5",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 13
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_sackbomb_0_0",
            "Set": "battle_sackbomb",
            "Width": 14,
            "Height": 22
        },
        "Notes": [],
        "NameTokens": [
            "EnemySackbomb",
            "Sackbomb"
        ],
        "RewardTokens": [
            "Black",
            "Black Bomb",
            "Bomb",
            "Frenzy",
            "Flower",
            "Frenzy Flower"
        ]
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
        "Exp": {
            "Min": 20,
            "Max": 20
        },
        "Money": {
            "Min": 20,
            "Max": 20
        },
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_sackboy_0_0",
            "Set": "battle_sackboy",
            "Width": 14,
            "Height": 22
        },
        "Notes": [],
        "NameTokens": [
            "Sackboy",
            "EnemySackboy"
        ],
        "RewardTokens": [
            "Coin",
            "Common",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 20,
            "Max": 20
        },
        "Money": {
            "Min": 20,
            "Max": 20
        },
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_sackpole_0_0",
            "Set": "battle_sackpole",
            "Width": 16,
            "Height": 31
        },
        "Notes": [],
        "NameTokens": [
            "Sackpole",
            "EnemySackpole"
        ],
        "RewardTokens": [
            "Coin",
            "Common",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 25,
            "Max": 25
        },
        "Money": {
            "Min": 40,
            "Max": 40
        },
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
                        "ItemSprite": {
                            "Name": "icons_6_18",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCibilsSipper",
                        "ItemName": "Sadio's Sipper",
                        "ItemSprite": {
                            "Name": "icons_6_18",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
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
                        "ItemSprite": {
                            "Name": "icons_1_18",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 11
                        }
                    },
                    {
                        "ItemType": "ItemCibilsSipper",
                        "ItemName": "Sadio's Sipper",
                        "ItemSprite": {
                            "Name": "icons_6_18",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_skull_0_0",
            "Set": "battle_skull",
            "Width": 12,
            "Height": 18
        },
        "Notes": [],
        "NameTokens": [
            "EnemySkull",
            "Scourge"
        ],
        "RewardTokens": [
            "Sadio's Blue",
            "Blue",
            "Sipper",
            "Sadio's Sipper",
            "Sadio's"
        ]
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
        "Exp": {
            "Min": 50,
            "Max": 50
        },
        "Money": {
            "Min": 0,
            "Max": 0
        },
        "Rewards": {
            "Operator": "AND",
            "List": [
                {
                    "ItemType": "ItemFrenzyFlower",
                    "ItemName": "Frenzy Flower",
                    "ItemSprite": {
                        "Name": "icons_9_5",
                        "Set": "icons",
                        "Width": 14,
                        "Height": 13
                    }
                },
                {
                    "ItemType": "ItemRareCoin",
                    "ItemName": "Rare Coin",
                    "ItemSprite": {
                        "Name": "icons_8_12",
                        "Set": "icons",
                        "Width": 14,
                        "Height": 10
                    }
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
                        "ItemSprite": {
                            "Name": "armor_3_1",
                            "Set": "armor",
                            "Width": 14,
                            "Height": 12
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "TheHoneyBee",
                        "ItemName": "The Honey Bee",
                        "ItemSprite": {
                            "Name": "armor_3_1",
                            "Set": "armor",
                            "Width": 14,
                            "Height": 12
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "TheHoneyBee",
                        "ItemName": "The Honey Bee",
                        "ItemSprite": {
                            "Name": "armor_3_1",
                            "Set": "armor",
                            "Width": 14,
                            "Height": 12
                        }
                    },
                    {
                        "ItemType": "ItemFrenzyFlower",
                        "ItemName": "Frenzy Flower",
                        "ItemSprite": {
                            "Name": "icons_9_5",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 13
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_snatcher_0_0",
            "Set": "battle_snatcher",
            "Width": 36,
            "Height": 37
        },
        "Notes": [],
        "NameTokens": [
            "EnemySnatcher",
            "Snatcher"
        ],
        "RewardTokens": [
            "Honey",
            "Honey Bee",
            "Rare Coin",
            "The Honey Bee",
            "Coin",
            "Bee",
            "The",
            "Rare",
            "Frenzy",
            "Flower",
            "Frenzy Flower"
        ]
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
        "Exp": {
            "Min": 0,
            "Max": 0
        },
        "Money": {
            "Min": 0,
            "Max": 0
        },
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
                        "ItemSprite": {
                            "Name": "feet_3_1",
                            "Set": "feet",
                            "Width": 14,
                            "Height": 11
                        }
                    },
                    {
                        "ItemType": "ItemMiniMelon",
                        "ItemName": "Mini Melon",
                        "ItemSprite": {
                            "Name": "icons_1_9",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 9
                        }
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
                        "ItemSprite": {
                            "Name": "feet_3_1",
                            "Set": "feet",
                            "Width": 14,
                            "Height": 11
                        }
                    },
                    {
                        "ItemType": "ItemMiniMelon",
                        "ItemName": "Mini Melon",
                        "ItemSprite": {
                            "Name": "icons_1_9",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 9
                        }
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
                        "ItemSprite": {
                            "Name": "feet_3_1",
                            "Set": "feet",
                            "Width": 14,
                            "Height": 11
                        }
                    },
                    {
                        "ItemType": "ItemMiniMelon",
                        "ItemName": "Mini Melon",
                        "ItemSprite": {
                            "Name": "icons_1_9",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 9
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_boot_0_0",
            "Set": "battle_boot",
            "Width": 12,
            "Height": 11
        },
        "Notes": [],
        "NameTokens": [
            "Missing",
            "Boot",
            "EnemySnatcherBoot",
            "Missing Boot"
        ],
        "RewardTokens": [
            "Hardy Ones",
            "Mini",
            "Ones",
            "Mini Melon",
            "Melon",
            "Hardy"
        ]
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
        "Exp": {
            "Min": 0,
            "Max": 0
        },
        "Money": {
            "Min": 0,
            "Max": 0
        },
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemMiniMelon",
                        "ItemName": "Mini Melon",
                        "ItemSprite": {
                            "Name": "icons_1_9",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 9
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemHoneycrisp",
                        "ItemName": "Honeycrisp",
                        "ItemSprite": {
                            "Name": "icons_2_7",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 12
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_pants_0_0",
            "Set": "battle_pants",
            "Width": 22,
            "Height": 21
        },
        "Notes": [],
        "NameTokens": [
            "EnemySnatcherPants",
            "Trouncers"
        ],
        "RewardTokens": [
            "Mini",
            "Coin",
            "Mini Melon",
            "Melon",
            "Honeycrisp",
            "Common",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 0,
            "Max": 0
        },
        "Money": {
            "Min": 0,
            "Max": 0
        },
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": null,
        "Notes": [],
        "NameTokens": [
            "EnemySpec",
            "Echo"
        ],
        "RewardTokens": [
            "Coin",
            "Common",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 0,
            "Max": 0
        },
        "Money": {
            "Min": 0,
            "Max": 0
        },
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_spec_crystal_0_0",
            "Set": "battle_spec_crystal",
            "Width": 13,
            "Height": 14
        },
        "Notes": [],
        "NameTokens": [
            "EnemySpecCrystal",
            "Fragment"
        ],
        "RewardTokens": [
            "Coin",
            "Common",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 0,
            "Max": 0
        },
        "Money": {
            "Min": 0,
            "Max": 0
        },
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_spec_gil_0_0",
            "Set": "battle_spec_gil",
            "Width": 11,
            "Height": 21
        },
        "Notes": [],
        "NameTokens": [
            "EnemySpecGilda",
            "Echo"
        ],
        "RewardTokens": [
            "Coin",
            "Common",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 0,
            "Max": 0
        },
        "Money": {
            "Min": 0,
            "Max": 0
        },
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_spec_ima_0_0",
            "Set": "battle_spec_ima",
            "Width": 15,
            "Height": 21
        },
        "Notes": [],
        "NameTokens": [
            "EnemySpecIma",
            "Echo"
        ],
        "RewardTokens": [
            "Coin",
            "Common",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 0,
            "Max": 0
        },
        "Money": {
            "Min": 0,
            "Max": 0
        },
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_spec_mar_0_0",
            "Set": "battle_spec_mar",
            "Width": 14,
            "Height": 22
        },
        "Notes": [],
        "NameTokens": [
            "EnemySpecMaritte",
            "Echo"
        ],
        "RewardTokens": [
            "Coin",
            "Common",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 0,
            "Max": 0
        },
        "Money": {
            "Min": 0,
            "Max": 0
        },
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_spec_per_0_0",
            "Set": "battle_spec_per",
            "Width": 13,
            "Height": 23
        },
        "Notes": [],
        "NameTokens": [
            "EnemySpecPertisia",
            "Echo"
        ],
        "RewardTokens": [
            "Coin",
            "Common",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 0,
            "Max": 0
        },
        "Money": {
            "Min": 0,
            "Max": 0
        },
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_spec_nel_0_0",
            "Set": "battle_spec_nel",
            "Width": 12,
            "Height": 21
        },
        "Notes": [],
        "NameTokens": [
            "EnemySpecPetronella",
            "Echo"
        ],
        "RewardTokens": [
            "Coin",
            "Common",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 0,
            "Max": 0
        },
        "Money": {
            "Min": 0,
            "Max": 0
        },
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_spec_rook_0_0",
            "Set": "battle_spec_rook",
            "Width": 16,
            "Height": 24
        },
        "Notes": [],
        "NameTokens": [
            "EnemySpecRook",
            "Echo"
        ],
        "RewardTokens": [
            "Coin",
            "Common",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 40,
            "Max": 40
        },
        "Money": {
            "Min": 50,
            "Max": 50
        },
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_spelltile_0_0",
            "Set": "battle_spelltile",
            "Width": 19,
            "Height": 14
        },
        "Notes": [],
        "NameTokens": [
            "Floorbogey",
            "EnemySpelltile"
        ],
        "RewardTokens": [
            "Coin",
            "Common",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 40,
            "Max": 40
        },
        "Money": {
            "Min": 50,
            "Max": 50
        },
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_spelltile_0_0",
            "Set": "battle_spelltile",
            "Width": 19,
            "Height": 14
        },
        "Notes": [],
        "NameTokens": [
            "Floorbogey",
            "EnemySpelltile2"
        ],
        "RewardTokens": [
            "Coin",
            "Common",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 12,
            "Max": 12
        },
        "Money": {
            "Min": 12,
            "Max": 12
        },
        "Rewards": {
            "Operator": "AND",
            "List": [
                {
                    "ItemType": "ItemHoneycrisp",
                    "MaxRewarded": 1,
                    "MaxOwned": 3,
                    "ItemName": "Honeycrisp",
                    "ItemSprite": {
                        "Name": "icons_2_7",
                        "Set": "icons",
                        "Width": 14,
                        "Height": 12
                    }
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
                        "ItemSprite": {
                            "Name": "icons_2_7",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 12
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemHoneycrisp",
                        "ItemName": "Honeycrisp",
                        "ItemSprite": {
                            "Name": "icons_2_7",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 12
                        }
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
                        "ItemSprite": {
                            "Name": "icons_8_15",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 9
                        }
                    },
                    {
                        "ItemType": "ItemHoneycrisp",
                        "ItemName": "Honeycrisp",
                        "ItemSprite": {
                            "Name": "icons_2_7",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 12
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_lamp_0_0",
            "Set": "battle_lamp",
            "Width": 27,
            "Height": 17
        },
        "Notes": [],
        "NameTokens": [
            "Spinlamp",
            "EnemySpinlamp"
        ],
        "RewardTokens": [
            "Cookie",
            "Star Cookie",
            "Star",
            "Honeycrisp"
        ]
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
        "Exp": {
            "Min": 40,
            "Max": 40
        },
        "Money": {
            "Min": 50,
            "Max": 50
        },
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
                        "ItemSprite": {
                            "Name": "icons_1_18",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 11
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCibilsBlue",
                        "ItemName": "Sadio's Blue",
                        "ItemSprite": {
                            "Name": "icons_1_18",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 11
                        }
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
                        "ItemSprite": {
                            "Name": "icons_0_13",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 13
                        }
                    },
                    {
                        "ItemType": "ItemCibilsBlue",
                        "ItemName": "Sadio's Blue",
                        "ItemSprite": {
                            "Name": "icons_1_18",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 11
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_lamp2_0_0",
            "Set": "battle_lamp2",
            "Width": 27,
            "Height": 17
        },
        "Notes": [],
        "NameTokens": [
            "Spintorch",
            "EnemySpinlamp2"
        ],
        "RewardTokens": [
            "Sadio's Blue",
            "Blue",
            "Sadio's Sparkly",
            "Sparkly",
            "Sadio's"
        ]
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
        "Exp": {
            "Min": 50,
            "Max": 50
        },
        "Money": {
            "Min": 0,
            "Max": 0
        },
        "Rewards": {
            "Operator": "AND",
            "List": [
                {
                    "ItemType": "ItemBeautyToken",
                    "ItemName": "Beauty Token",
                    "ItemSprite": {
                        "Name": "icons_9_11",
                        "Set": "icons",
                        "Width": 14,
                        "Height": 12
                    }
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
                        "ItemSprite": {
                            "Name": "armor_1_2",
                            "Set": "armor",
                            "Width": 14,
                            "Height": 11
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "CovenReds",
                        "ItemName": "Coven Reds",
                        "ItemSprite": {
                            "Name": "armor_1_2",
                            "Set": "armor",
                            "Width": 14,
                            "Height": 11
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "CovenReds",
                        "ItemName": "Coven Reds",
                        "ItemSprite": {
                            "Name": "armor_1_2",
                            "Set": "armor",
                            "Width": 14,
                            "Height": 11
                        }
                    },
                    {
                        "ItemType": "ItemFrenzyFlower",
                        "ItemName": "Frenzy Flower",
                        "ItemSprite": {
                            "Name": "icons_9_5",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 13
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_bax2_0_0",
            "Set": "battle_bax2",
            "Width": 31,
            "Height": 27
        },
        "Notes": [],
        "NameTokens": [
            "Bax",
            "EnemySpiritBax"
        ],
        "RewardTokens": [
            "Coven",
            "Beauty",
            "Coven Reds",
            "Token",
            "Beauty Token",
            "Reds",
            "Frenzy",
            "Flower",
            "Frenzy Flower"
        ]
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
        "Exp": {
            "Min": 50,
            "Max": 50
        },
        "Money": {
            "Min": 0,
            "Max": 0
        },
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
                        "ItemSprite": {
                            "Name": "armor_0_3",
                            "Set": "armor",
                            "Width": 14,
                            "Height": 10
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "TheCutest",
                        "ItemName": "The Cutest",
                        "ItemSprite": {
                            "Name": "armor_0_3",
                            "Set": "armor",
                            "Width": 14,
                            "Height": 10
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "TheCutest",
                        "ItemName": "The Cutest",
                        "ItemSprite": {
                            "Name": "armor_0_3",
                            "Set": "armor",
                            "Width": 14,
                            "Height": 10
                        }
                    },
                    {
                        "ItemType": "ItemCustardCake",
                        "ItemName": "Custard Cake",
                        "ItemSprite": {
                            "Name": "icons_8_16",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 9
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_gilda_0_0",
            "Set": "battle_gilda",
            "Width": 14,
            "Height": 21
        },
        "Notes": [],
        "NameTokens": [
            "Gilda",
            "EnemySpiritGilda"
        ],
        "RewardTokens": [
            "The Cutest",
            "Custard",
            "The",
            "Cake",
            "Custard Cake",
            "Cutest"
        ]
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
        "Exp": {
            "Min": 50,
            "Max": 50
        },
        "Money": {
            "Min": 0,
            "Max": 0
        },
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
                        "ItemSprite": {
                            "Name": "armor_2_2",
                            "Set": "armor",
                            "Width": 14,
                            "Height": 11
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "CovenGreens",
                        "ItemName": "Coven Greens",
                        "ItemSprite": {
                            "Name": "armor_2_2",
                            "Set": "armor",
                            "Width": 14,
                            "Height": 11
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "CovenGreens",
                        "ItemName": "Coven Greens",
                        "ItemSprite": {
                            "Name": "armor_2_2",
                            "Set": "armor",
                            "Width": 14,
                            "Height": 11
                        }
                    },
                    {
                        "ItemType": "ItemGoldShroom",
                        "ItemName": "Gold Shroom",
                        "ItemSprite": {
                            "Name": "icons_9_15",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 13
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_ibn_0_0",
            "Set": "battle_ibn",
            "Width": 14,
            "Height": 24
        },
        "Notes": [],
        "NameTokens": [
            "Oxley",
            "EnemySpiritIbn"
        ],
        "RewardTokens": [
            "Gold",
            "Coven",
            "Coven Greens",
            "Gold Shroom",
            "Shroom",
            "Greens"
        ]
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
        "Exp": {
            "Min": 40,
            "Max": 40
        },
        "Money": {
            "Min": 50,
            "Max": 50
        },
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_spychopper_0_0",
            "Set": "battle_spychopper",
            "Width": 18,
            "Height": 22
        },
        "Notes": [],
        "NameTokens": [
            "EnemySpychopper",
            "Spychopper"
        ],
        "RewardTokens": [
            "Coin",
            "Common",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 40,
            "Max": 40
        },
        "Money": {
            "Min": 50,
            "Max": 50
        },
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_spychopper_0_0",
            "Set": "battle_spychopper",
            "Width": 18,
            "Height": 22
        },
        "Notes": [],
        "NameTokens": [
            "EnemySpychopper2",
            "Spychopper"
        ],
        "RewardTokens": [
            "Coin",
            "Common",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 3,
            "Max": 3
        },
        "Money": {
            "Min": 2,
            "Max": 2
        },
        "Rewards": {
            "Operator": "OR",
            "List": [
                {
                    "ItemType": "ItemSmallMushroom",
                    "MaxRewarded": 10,
                    "MaxOwned": 10,
                    "IsCombinedMax": true,
                    "ItemName": "Small Mushroom",
                    "ItemSprite": {
                        "Name": "icons_4_6",
                        "Set": "icons",
                        "Width": 14,
                        "Height": 8
                    }
                },
                {
                    "ItemType": "ItemRedMushroom",
                    "MaxRewarded": 2,
                    "MaxOwned": 2,
                    "IsCombinedMax": true,
                    "ItemName": "Red Mushroom",
                    "ItemSprite": {
                        "Name": "icons_4_5",
                        "Set": "icons",
                        "Width": 14,
                        "Height": 9
                    }
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_squishy_0_0",
            "Set": "battle_squishy",
            "Width": 14,
            "Height": 10
        },
        "Notes": [],
        "NameTokens": [
            "EnemySquishy",
            "Squishy"
        ],
        "RewardTokens": [
            "Red",
            "Small Mushroom",
            "Red Mushroom",
            "Coin",
            "Mushroom",
            "Small",
            "Common Coin",
            "Common"
        ]
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
        "Exp": {
            "Min": 8,
            "Max": 10
        },
        "Money": {
            "Min": 10,
            "Max": 10
        },
        "Rewards": {
            "Operator": "AND",
            "List": [
                {
                    "ItemType": "ItemSpiceLeaf",
                    "MaxRewarded": 1,
                    "MaxOwned": 1,
                    "ItemName": "Spice Leaf",
                    "ItemSprite": {
                        "Name": "icons_5_6",
                        "Set": "icons",
                        "Width": 14,
                        "Height": 10
                    }
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
                        "ItemSprite": {
                            "Name": "icons_3_10",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 9
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemHardNut",
                        "ItemName": "Hard Nut",
                        "ItemSprite": {
                            "Name": "icons_3_10",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 9
                        }
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
                        "ItemSprite": {
                            "Name": "icons_3_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 9
                        }
                    },
                    {
                        "ItemType": "ItemHardNut",
                        "ItemName": "Hard Nut",
                        "ItemSprite": {
                            "Name": "icons_3_10",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 9
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_stinker_0_0",
            "Set": "battle_stinker",
            "Width": 12,
            "Height": 15
        },
        "Notes": [],
        "NameTokens": [
            "EnemyStinker",
            "Stinker"
        ],
        "RewardTokens": [
            "Hard Nut",
            "Cave",
            "Nut",
            "Leaf",
            "Cave Acorn",
            "Acorn",
            "Hard",
            "Spice",
            "Spice Leaf"
        ]
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
        "Exp": {
            "Min": 4,
            "Max": 4
        },
        "Money": {
            "Min": 3,
            "Max": 3
        },
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_sweepy_0_0",
            "Set": "battle_sweepy",
            "Width": 18,
            "Height": 21
        },
        "Notes": [],
        "NameTokens": [
            "EnemySweepy",
            "Sweepy"
        ],
        "RewardTokens": [
            "Coin",
            "Common",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 4,
            "Max": 4
        },
        "Money": {
            "Min": 5,
            "Max": 5
        },
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
                        "ItemSprite": {
                            "Name": "icons_4_5",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 9
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemRedMushroom",
                        "ItemName": "Red Mushroom",
                        "ItemSprite": {
                            "Name": "icons_4_5",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 9
                        }
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
                        "ItemSprite": {
                            "Name": "icons_5_6",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 10
                        }
                    },
                    {
                        "ItemType": "ItemRedMushroom",
                        "ItemName": "Red Mushroom",
                        "ItemSprite": {
                            "Name": "icons_4_5",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 9
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_tarfrog_0_0",
            "Set": "battle_tarfrog",
            "Width": 20,
            "Height": 19
        },
        "Notes": [],
        "NameTokens": [
            "Tarfrog",
            "EnemyTarfrog"
        ],
        "RewardTokens": [
            "Red",
            "Leaf",
            "Red Mushroom",
            "Spice",
            "Mushroom",
            "Spice Leaf"
        ]
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
        "Exp": {
            "Min": 8,
            "Max": 10
        },
        "Money": {
            "Min": 10,
            "Max": 10
        },
        "Rewards": {
            "Operator": "AND",
            "List": [
                {
                    "ItemType": "ItemHoneycrisp",
                    "MaxRewarded": 1,
                    "MaxOwned": 1,
                    "ItemName": "Honeycrisp",
                    "ItemSprite": {
                        "Name": "icons_2_7",
                        "Set": "icons",
                        "Width": 14,
                        "Height": 12
                    }
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
                        "ItemSprite": {
                            "Name": "icons_2_7",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 12
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemHoneycrisp",
                        "ItemName": "Honeycrisp",
                        "ItemSprite": {
                            "Name": "icons_2_7",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 12
                        }
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
                        "ItemSprite": {
                            "Name": "icons_8_15",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 9
                        }
                    },
                    {
                        "ItemType": "ItemHoneycrisp",
                        "ItemName": "Honeycrisp",
                        "ItemSprite": {
                            "Name": "icons_2_7",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 12
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_tinystar_0_0",
            "Set": "battle_tinystar",
            "Width": 13,
            "Height": 11
        },
        "Notes": [],
        "NameTokens": [
            "EnemyTinyStar",
            "Starpint"
        ],
        "RewardTokens": [
            "Cookie",
            "Star Cookie",
            "Star",
            "Honeycrisp"
        ]
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
        "Exp": {
            "Min": 1,
            "Max": 1
        },
        "Money": {
            "Min": 1,
            "Max": 1
        },
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_treetrunk_12_0",
            "Set": "battle_treetrunk",
            "Width": 10,
            "Height": 14
        },
        "Notes": [],
        "NameTokens": [
            "Crank",
            "Root",
            "Crank Root",
            "EnemyTreeHand"
        ],
        "RewardTokens": [
            "Coin",
            "Common",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 7,
            "Max": 7
        },
        "Money": {
            "Min": 5,
            "Max": 5
        },
        "Rewards": {
            "Operator": "AND",
            "List": [
                {
                    "ItemType": "ItemRedMushroom",
                    "MaxRewarded": 5,
                    "MaxOwned": 5,
                    "IsCombinedMax": true,
                    "ItemName": "Red Mushroom",
                    "ItemSprite": {
                        "Name": "icons_4_5",
                        "Set": "icons",
                        "Width": 14,
                        "Height": 9
                    }
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_treetrunk_0_0",
            "Set": "battle_treetrunk",
            "Width": 15,
            "Height": 18
        },
        "Notes": [],
        "NameTokens": [
            "Hollow",
            "Crank",
            "EnemyTreeTrunk",
            "Hollow Crank"
        ],
        "RewardTokens": [
            "Red",
            "Red Mushroom",
            "Coin",
            "Mushroom",
            "Common",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 0,
            "Max": 0
        },
        "Money": {
            "Min": 0,
            "Max": 0
        },
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
                        "ItemSprite": {
                            "Name": "icons_7_18",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 10
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemDemonEye",
                        "ItemName": "Demon Eye",
                        "ItemSprite": {
                            "Name": "icons_7_18",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 10
                        }
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
                        "ItemSprite": {
                            "Name": "armor_2_5",
                            "Set": "armor",
                            "Width": 14,
                            "Height": 15
                        }
                    },
                    {
                        "ItemType": "ItemDemonEye",
                        "ItemName": "Demon Eye",
                        "ItemSprite": {
                            "Name": "icons_7_18",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 10
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_bee_0_0",
            "Set": "battle_bee",
            "Width": 15,
            "Height": 13
        },
        "Notes": [],
        "NameTokens": [
            "EnemyTrialBee",
            "Bumbler"
        ],
        "RewardTokens": [
            "Spectacle",
            "Demon",
            "Eye",
            "The",
            "Demon Eye",
            "The Spectacle"
        ]
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
        "Exp": {
            "Min": 0,
            "Max": 0
        },
        "Money": {
            "Min": 0,
            "Max": 0
        },
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_bluebird_0_0",
            "Set": "battle_bluebird",
            "Width": 22,
            "Height": 21
        },
        "Notes": [],
        "NameTokens": [
            "Bluefeather",
            "EnemyTrialBlueBird"
        ],
        "RewardTokens": [
            "Coin",
            "Common",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 0,
            "Max": 0
        },
        "Money": {
            "Min": 0,
            "Max": 0
        },
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
                        "ItemSprite": {
                            "Name": "icons_7_18",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 10
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemDemonEye",
                        "ItemName": "Demon Eye",
                        "ItemSprite": {
                            "Name": "icons_7_18",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 10
                        }
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
                        "ItemSprite": {
                            "Name": "armor_2_5",
                            "Set": "armor",
                            "Width": 14,
                            "Height": 15
                        }
                    },
                    {
                        "ItemType": "ItemDemonEye",
                        "ItemName": "Demon Eye",
                        "ItemSprite": {
                            "Name": "icons_7_18",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 10
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_book_purple_0_0",
            "Set": "battle_book_purple",
            "Width": 23,
            "Height": 21
        },
        "Notes": [
            "only once per battle"
        ],
        "NameTokens": [
            "EnemyTrialBook",
            "Mystery"
        ],
        "RewardTokens": [
            "Spectacle",
            "Demon",
            "Eye",
            "The",
            "Demon Eye",
            "The Spectacle"
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
        "Exp": {
            "Min": 0,
            "Max": 0
        },
        "Money": {
            "Min": 0,
            "Max": 0
        },
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_cracked_ghost_0_0",
            "Set": "battle_cracked_ghost",
            "Width": 23,
            "Height": 16
        },
        "Notes": [],
        "NameTokens": [
            "EnemyTrialCracked",
            "Ghost",
            "Cracked",
            "Cracked Ghost"
        ],
        "RewardTokens": [
            "Coin",
            "Common",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 0,
            "Max": 0
        },
        "Money": {
            "Min": 0,
            "Max": 0
        },
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
                        "ItemSprite": {
                            "Name": "icons_7_18",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 10
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemDemonEye",
                        "ItemName": "Demon Eye",
                        "ItemSprite": {
                            "Name": "icons_7_18",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 10
                        }
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
                        "ItemSprite": {
                            "Name": "armor_2_5",
                            "Set": "armor",
                            "Width": 14,
                            "Height": 15
                        }
                    },
                    {
                        "ItemType": "ItemDemonEye",
                        "ItemName": "Demon Eye",
                        "ItemSprite": {
                            "Name": "icons_7_18",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 10
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_eyeflower_0_0",
            "Set": "battle_eyeflower",
            "Width": 17,
            "Height": 21
        },
        "Notes": [],
        "NameTokens": [
            "Eyepoppy",
            "EnemyTrialFlower"
        ],
        "RewardTokens": [
            "Spectacle",
            "Demon",
            "Eye",
            "The",
            "Demon Eye",
            "The Spectacle"
        ]
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
        "Exp": {
            "Min": 0,
            "Max": 0
        },
        "Money": {
            "Min": 0,
            "Max": 0
        },
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_redbird_0_0",
            "Set": "battle_redbird",
            "Width": 15,
            "Height": 20
        },
        "Notes": [],
        "NameTokens": [
            "EnemyTrialRedBird",
            "Goldfeather"
        ],
        "RewardTokens": [
            "Coin",
            "Common",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 0,
            "Max": 0
        },
        "Money": {
            "Min": 0,
            "Max": 0
        },
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_sackboy_0_0",
            "Set": "battle_sackboy",
            "Width": 14,
            "Height": 22
        },
        "Notes": [],
        "NameTokens": [
            "Sackboy",
            "EnemyTrialSackboy"
        ],
        "RewardTokens": [
            "Coin",
            "Common",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 0,
            "Max": 0
        },
        "Money": {
            "Min": 0,
            "Max": 0
        },
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_sackpole_0_0",
            "Set": "battle_sackpole",
            "Width": 16,
            "Height": 31
        },
        "Notes": [],
        "NameTokens": [
            "EnemyTrialSackpole",
            "Sackpole"
        ],
        "RewardTokens": [
            "Coin",
            "Common",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 0,
            "Max": 0
        },
        "Money": {
            "Min": 0,
            "Max": 0
        },
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_tinystar_0_0",
            "Set": "battle_tinystar",
            "Width": 13,
            "Height": 11
        },
        "Notes": [],
        "NameTokens": [
            "Starpint",
            "EnemyTrialStar"
        ],
        "RewardTokens": [
            "Coin",
            "Common",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 0,
            "Max": 0
        },
        "Money": {
            "Min": 0,
            "Max": 0
        },
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
                        "ItemSprite": {
                            "Name": "icons_6_16",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 10
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemPinkPods",
                        "ItemName": "Pink Pods",
                        "ItemSprite": {
                            "Name": "icons_6_16",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 10
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemPinkPods",
                        "ItemName": "Pink Pods",
                        "ItemSprite": {
                            "Name": "icons_6_16",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 10
                        }
                    },
                    {
                        "ItemType": "ItemStarCookie",
                        "ItemName": "Star Cookie",
                        "ItemSprite": {
                            "Name": "icons_8_15",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 9
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_twinkle_0_0",
            "Set": "battle_twinkle",
            "Width": 35,
            "Height": 33
        },
        "Notes": [],
        "NameTokens": [
            "EnemyTwinkle",
            "Twinkle"
        ],
        "RewardTokens": [
            "Cookie",
            "Pink",
            "Pink Pods",
            "Star Cookie",
            "Pods",
            "Star"
        ]
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
        "Exp": {
            "Min": 100,
            "Max": 100
        },
        "Money": {
            "Min": 0,
            "Max": 0
        },
        "Rewards": {
            "Operator": "AND",
            "List": [
                {
                    "ItemType": "ItemBeautyToken",
                    "ItemName": "Beauty Token",
                    "ItemSprite": {
                        "Name": "icons_9_11",
                        "Set": "icons",
                        "Width": 14,
                        "Height": 12
                    }
                },
                {
                    "ItemType": "SouthSwing",
                    "ItemName": "South Swing",
                    "ItemSprite": {
                        "Name": "armor_0_2",
                        "Set": "armor",
                        "Width": 14,
                        "Height": 12
                    }
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
                        "ItemSprite": {
                            "Name": "icons_8_15",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 9
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemStarCookie",
                        "ItemName": "Star Cookie",
                        "ItemSprite": {
                            "Name": "icons_8_15",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 9
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemStarCookie",
                        "ItemName": "Star Cookie",
                        "ItemSprite": {
                            "Name": "icons_8_15",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 9
                        }
                    },
                    {
                        "ItemType": "SouthSwing",
                        "ItemName": "South Swing",
                        "ItemSprite": {
                            "Name": "armor_0_2",
                            "Set": "armor",
                            "Width": 14,
                            "Height": 12
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_twinkle_20_0",
            "Set": "battle_twinkle",
            "Width": 35,
            "Height": 33
        },
        "Notes": [],
        "NameTokens": [
            "EnemyTwinkle2",
            "Twinkle"
        ],
        "RewardTokens": [
            "South Swing",
            "Beauty",
            "Cookie",
            "Swing",
            "Token",
            "Beauty Token",
            "Star Cookie",
            "Star",
            "South"
        ]
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
        "Exp": {
            "Min": 0,
            "Max": 0
        },
        "Money": {
            "Min": 0,
            "Max": 0
        },
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_tinystar2_0_0",
            "Set": "battle_tinystar2",
            "Width": 13,
            "Height": 11
        },
        "Notes": [],
        "NameTokens": [
            "Twinklepint",
            "EnemyTwinkleBaby"
        ],
        "RewardTokens": [
            "Coin",
            "Common",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 0,
            "Max": 0
        },
        "Money": {
            "Min": 0,
            "Max": 0
        },
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
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemCommonCoin",
                        "ItemName": "Common Coin",
                        "ItemSprite": {
                            "Name": "icons_8_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 8
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_tinystar3_0_0",
            "Set": "battle_tinystar3",
            "Width": 13,
            "Height": 11
        },
        "Notes": [],
        "NameTokens": [
            "Dwork",
            "Red",
            "Red Dwork",
            "EnemyTwinkleBaby2"
        ],
        "RewardTokens": [
            "Coin",
            "Common",
            "Common Coin"
        ]
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
        "Exp": {
            "Min": 500,
            "Max": 500
        },
        "Money": {
            "Min": 0,
            "Max": 0
        },
        "Rewards": {
            "Operator": "AND",
            "List": [
                {
                    "ItemType": "ItemMythicCoin",
                    "ItemName": "Mythic Coin",
                    "ItemSprite": {
                        "Name": "icons_2_13",
                        "Set": "icons",
                        "Width": 14,
                        "Height": 14
                    }
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
                        "ItemSprite": {
                            "Name": "icons_7_18",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 10
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemDemonEye",
                        "ItemName": "Demon Eye",
                        "ItemSprite": {
                            "Name": "icons_7_18",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 10
                        }
                    }
                ]
            },
            "Great": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemDemonEye",
                        "ItemName": "Demon Eye",
                        "ItemSprite": {
                            "Name": "icons_7_18",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 10
                        }
                    },
                    {
                        "ItemType": "ItemGhostCoin",
                        "ItemName": "Ghost Coin",
                        "ItemSprite": {
                            "Name": "icons_0_17",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 11
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_unseen_0_0",
            "Set": "battle_unseen",
            "Width": 42,
            "Height": 52
        },
        "Notes": [],
        "NameTokens": [
            "EnemyUnseen",
            "Unseen"
        ],
        "RewardTokens": [
            "Demon",
            "Mythic Coin",
            "Ghost Coin",
            "Eye",
            "Coin",
            "Demon Eye",
            "Mythic",
            "Ghost"
        ]
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
        "Exp": {
            "Min": 0,
            "Max": 0
        },
        "Money": {
            "Min": 0,
            "Max": 0
        },
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
                        "ItemSprite": {
                            "Name": "icons_9_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 12
                        }
                    }
                ]
            },
            "Nice": {
                "Operator": "AND",
                "List": [
                    {
                        "ItemType": "ItemBeautyToken",
                        "ItemName": "Beauty Token",
                        "ItemSprite": {
                            "Name": "icons_9_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 12
                        }
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
                        "ItemSprite": {
                            "Name": "icons_5_17",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 9
                        }
                    },
                    {
                        "ItemType": "ItemBeautyToken",
                        "ItemName": "Beauty Token",
                        "ItemSprite": {
                            "Name": "icons_9_11",
                            "Set": "icons",
                            "Width": 14,
                            "Height": 12
                        }
                    }
                ]
            }
        },
        "Sprite": {
            "Name": "battle_cracked_ghost_0_0",
            "Set": "battle_cracked_ghost",
            "Width": 23,
            "Height": 16
        },
        "Notes": [],
        "NameTokens": [
            "Ghost",
            "Cracked",
            "Cracked Ghost",
            "EnemyUnseenCrackedGhost"
        ],
        "RewardTokens": [
            "Beauty",
            "Cookie",
            "Token",
            "Beauty Token",
            "Ghost Cookie",
            "Ghost"
        ]
    }
];
