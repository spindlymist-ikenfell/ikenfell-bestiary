import { Component } from "solid-js"
import { RewardsList, TimingGroups } from "../types";
import { RewardList } from "./RewardList";
import "./EnemyRewarder.css";

export const EnemyRewarder: Component<{
    rewards: TimingGroups,
}> = (props) => {
    return (
        <table class="enemy-rewarder enemy__properties">
            <TimingGroup
                timing="Oops"
                rewards={props.rewards.Oops}
            />
            <TimingGroup
                timing="Nice"
                rewards={props.rewards.Nice}
            />
            <TimingGroup
                timing="Great"
                rewards={props.rewards.Great}
            />
        </table>
    );
}

const TimingGroup: Component<{
    timing: "Oops" | "Nice" | "Great",
    rewards: RewardsList
}> = (props) => {
    return (
        <tr>
            <td>{props.timing}</td>
            <td>
                <RewardList rewards={props.rewards} />
            </td>
        </tr>
    );
}
