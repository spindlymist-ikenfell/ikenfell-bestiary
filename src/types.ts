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
    "Exp": number,
    "Money": number,
    "Rewards": RewardsList,
    "Stealable": TimingGroups,
    // "GetExp": string | null,
    // "GetMoney": string | null,
    // "GetRewards": string,
    // "GetSteal": string,
    // "SpriteSet": string | null,
    "Sprite": string | null,
    "Notes": string[],
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
    "ItemSprite": string,
    "MaxOwned"?: number,
    "MaxRewarded"?: number,
    "IsCombinedMax"?: boolean,
    "Notes"?: number[],
};
