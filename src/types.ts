export type EnemyData = {
    "ClassName": string,
    // "IsAbstract": boolean,
    // "BaseClass": string,
    // "NameID": string | null,
    "Name": string,
    "Categories": string[],
    "HP": number,
    "Pow": number,
    "Def": number,
    "Spd": number,
    "Mov": number,
    "Exp": NumberRange,
    "Money": NumberRange,
    "Rewards": RewardsList,
    "Stealable": TimingGroups,
    // "GetExp": string | null,
    // "GetMoney": string | null,
    // "GetRewards": string,
    // "GetSteal": string,
    // "SpriteSet": string | null,
    "Sprite": SpriteData | null,
    "Notes": string[],
    "NameTokens": string[],
    "RewardTokens": string[],
};

export type NumberRange = {
    "Min": number,
    "Max": number,
};

export type RewardsList = {
    "Operator": "AND" | "OR",
    "List": RewardData[],
};

export type TimingGroups = {
    "Oops": RewardsList,
    "Nice": RewardsList,
    "Great": RewardsList,
};

export type RewardData = {
    "ItemType": string,
    "ItemName": string,
    "ItemSprite": SpriteData,
    "MaxOwned"?: number,
    "MaxRewarded"?: number,
    "IsCombinedMax"?: boolean,
    "Notes"?: number[],
};

export type SpriteData = {
    "Name": string,
    "Set": string,
    "Width": number,
    "Height": number,
};
