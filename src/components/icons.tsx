import { Component } from "solid-js"

export const IconReward: Component<{}> = () => {
    return (
        <i class="ph ph-fill ph-gift" />
    );
};

export const IconOwned: Component<{}> = () => {
    return (
        <i class="ph ph-fill ph-hand" />
    );
};

export const IconCombined: Component<{
    backgroundColor: string,
}> = (props) => {
    return (<>
        <i class="ph ph-fill ph-gift" style="margin-right:6px;transform:translateY(-2px); font-size:100%" />
        <i class="ph ph-fill ph-hand" style={`position:absolute; color: ${props.backgroundColor}; transform:translate(5px,3px); font-size:100%`} />
        <i class="ph ph-fill ph-hand" style="position:absolute; transform:translate(6px,4px); font-size:100%" />
    </>);
};
