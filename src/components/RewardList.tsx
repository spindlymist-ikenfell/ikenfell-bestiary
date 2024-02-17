import { Show, For, Component } from "solid-js"
import { RewardData, RewardsList } from "../types";
import { autosize } from "../directives/autosize";
import { IconCombined, IconOwned, IconReward } from "./icons";
import "./RewardList.css";

false && autosize; // Don't remove autosize import

export const RewardList: Component<{
    rewards: RewardsList
}> = (props) => {
    const hasRewards = () => props.rewards.List.length > 0;

    return (
        <ul class="reward-list">
            <Show
                when={hasRewards()}
                fallback={<li class="reward-list__reward">None</li>}
            >
                <For each={props.rewards.List}>{(item, index) => {
                    let after;
                    if (props.rewards.Operator === "OR"
                        && index() < props.rewards.List.length - 1
                    ) {
                        after = <li class="reward-list__or-separator"><span>OR</span></li>;
                    }

                    return (
                        <>
                            <Reward data={item} />
                            {after}
                        </>
                    );
                }}</For>
            </Show>
        </ul>
    );
}

export const Reward: Component<{
    data: RewardData,
}> = (props) => {
    const max = () => {
        if (props.data.IsCombinedMax) {
            return (<>
                <IconCombined backgroundColor="#a1d49c" />
                {props.data.MaxOwned}
            </>);
        }
        else if (props.data.MaxOwned && props.data.MaxRewarded) {
            return (<>
                <IconReward />
                {props.data.MaxRewarded}
                <IconOwned />
                {props.data.MaxOwned}
            </>);
        }
        else if (props.data.MaxOwned) {
            return (<>
                <IconOwned />
                {props.data.MaxOwned}
            </>);
        }
        else if (props.data.MaxRewarded) {
            return (<>
                <IconReward />
                {props.data.MaxRewarded}
            </>);
        }
        else {
            return <></>;
        }
    }

    const notes = () => {
        return props.data.Notes
            ?.map((index) => index + 1)
            .join(",");
    };

    const spriteWidth = () => (props.data.ItemSprite?.Width || 0) * 2;
    const spriteHeight = () => (props.data.ItemSprite?.Height || 0) * 2;

    return (
        <li class="reward-list__item">
            <div class="reward-list__name-with-icon">
                <img
                    class="reward-list__icon"
                    width={spriteWidth()}
                    height={spriteHeight()}
                    src={`/copyright/sprites/${props.data.ItemSprite.Name}.png`}
                    alt={props.data.ItemName}
                />
                <span class="reward-list__name">
                    {props.data.ItemName}
                    <sup class="reward-list__notes">{notes()}</sup>
                </span>
            </div>
            <div class="reward-list__limits">
                {max()}
            </div>
        </li>
    );
}
