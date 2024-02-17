
import { Component } from "solid-js"
import { IconCombined, IconOwned, IconReward } from "./icons";
import "./Legend.css";

export const Legend: Component<{
}> = (props) => {
    return (
        <div class="legend">
            <div class="legend__entry">
                <IconReward />
                Max rewarded
            </div>
            <div class="legend__entry">
                <IconOwned />
                Max owned
            </div>
            <div class="legend__entry">
                <IconCombined backgroundColor="white" />
                Combined max
            </div>
        </div>
    );
}
