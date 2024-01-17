import { Show, For, Component } from "solid-js"
import { RewardData, RewardsList } from "../types";
import { autosize } from "../directives/autosize";
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
                <i class="ph ph-fill ph-gift" style="margin-right:6px;transform:translateY(-2px); font-size:100%" />
                <i class="ph ph-fill ph-hand" style="position:absolute; color: var(--row-color); transform:translate(5px,3px); font-size:100%" />
                <i class="ph ph-fill ph-hand" style="position:absolute; transform:translate(6px,4px); font-size:100%" />
                {props.data.MaxOwned}
            </>);
        }
        else if (props.data.MaxOwned && props.data.MaxRewarded) {
            return (<>
                <i class="ph ph-fill ph-gift " />{props.data.MaxRewarded}
                <i class="ph ph-fill ph-hand" />{props.data.MaxOwned}
            </>);
        }
        else if (props.data.MaxOwned) {
            return (<>
                <i class="ph ph-fill ph-gift " />{props.data.MaxOwned}
            </>);
        }
        else if (props.data.MaxRewarded) {
            return (<>
                <i class="ph ph-fill ph-gift " />{props.data.MaxRewarded}
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

    return (
        <li class="reward-list__item">
            <div class="reward-list__name-with-icon">
                <img
                    class="reward-list__icon"
                    use:autosize={2}
                    src={`/images/sprites/${props.data.ItemSprite}.png`}
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
