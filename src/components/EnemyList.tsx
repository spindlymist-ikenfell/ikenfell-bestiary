import { For, Component, createMemo } from "solid-js"

import Fuse from "fuse.js";

import { Enemy } from "./Enemy";
import { enemies } from "../data/enemies";
import "./EnemyList.css";

const fuse = new Fuse(enemies, {
    threshold: 0.1,
    keys: [
        {
            name: "NameTokens",
            weight: 10.0,
        },
        {
            name: "RewardTokens",
            weight: 1.0,
        },
        {
            name: "Categories",
            weight: 0.1,
        },
    ],
});

export const EnemyList: Component<{
    query: string,
}> = (props) => {
    const all = enemies.map((enemy) => ({ item: enemy }));
    const results = createMemo(() => {
        return props.query.length > 0
            ? fuse.search(props.query)
            : all;
    });

    return (
        <div class="enemy-list">
            <For each={results()}>{(result) =>
                <Enemy data={result.item} />
            }</For>
        </div>
    );
}
