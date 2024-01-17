import { For, Component, createMemo } from "solid-js"
import { Enemy } from "./Enemy";
import { enemies } from "../data/enemies";
import "./EnemyList.css";

export const EnemyList: Component<{
    filter: string,
}> = (props) => {
    const filter = createMemo(() => props.filter.toLowerCase());

    return (
        <div class="enemy-list">
            <For each={enemies}>{(data) =>
                <Enemy filter={filter()} data={data} />
            }</For>
        </div>
    );
}
