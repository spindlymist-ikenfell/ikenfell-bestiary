import { Show, Component, Index } from "solid-js"
import { EnemyData, NumberRange } from "../types";
import { RewardList } from "./RewardList";
import { EnemyRewarder } from "./EnemyRewarder";
import { autosize } from "../directives/autosize";
import "./Enemy.css";

false && autosize; // Don't remove autosize import

export const Enemy: Component<{
    data: EnemyData,
    filter: string,
}> = (props) => {
    const categories = () => props.data.Categories.join(", ") || "None";
    const isVisible = () => {
        return props.data.Name.toLowerCase().includes(props.filter)
            || props.data.ClassName.toLowerCase().includes(props.filter);
    };

    const rangeToString = (range: NumberRange) => {
        if (range.Min === range.Max) {
            return range.Min;
        }
        else {
            return `${range.Min}–${range.Max}`;
        }
    };
    const expRange = () => rangeToString(props.data.Exp);
    const moneyRange = () => rangeToString(props.data.Money);

    const spriteWidth = () => (props.data.Sprite?.Width || 0) * 2;
    const spriteHeight = () => (props.data.Sprite?.Height || 0) * 2;

    return (
        <Show when={isVisible()}>
            <div class="enemy">
                <header>
                    <div class="enemy__name-with-sprite">
                        <Show when={props.data.Sprite}>
                            <img
                                class="enemy__sprite"
                                width={spriteWidth()}
                                height={spriteHeight()}
                                src={`/images/sprites/${props.data.Sprite!.Name}.png`}
                                alt={props.data.Name}
                            />
                        </Show>
                        <h2 class="enemy__name">{props.data.Name}</h2>
                    </div>
                    <span class="enemy__class-name">{props.data.ClassName}</span>
                </header>
                <div class="enemy__sections">
                    <section>
                        <table class="enemy__properties">
                            <tbody>
                                <tr>
                                    <td><img class="enemy__stat-icon" src="/images/hp.png" alt="" /> HP</td>
                                    <td>{props.data.HP}</td>
                                </tr>
                                <tr>
                                    <td><img class="enemy__stat-icon" src="/images/pow.png" alt="" /> Pow</td>
                                    <td>{props.data.Pow}</td>
                                </tr>
                                <tr>
                                    <td><img class="enemy__stat-icon" src="/images/def.png" alt="" /> Def</td>
                                    <td>{props.data.Def}</td>
                                </tr>
                                <tr>
                                    <td><img class="enemy__stat-icon" src="/images/spd.png" alt="" /> Spd</td>
                                    <td>{props.data.Spd}</td>
                                </tr>
                                <tr>
                                    <td><img class="enemy__stat-icon" src="/images/mov.png" alt="" /> Mov</td>
                                    <td>{props.data.Mov}</td>
                                </tr>
                                <tr>
                                    <td>Type</td>
                                    <td>{categories()}</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>
                    <section>
                        <table class="enemy__properties">
                            <tbody>
                                <tr>
                                    <td>Exp</td>
                                    <td>{expRange()}</td>
                                </tr>
                                <tr>
                                    <td>Money</td>
                                    <td>{moneyRange()}</td>
                                </tr>
                                <tr>
                                    <td>Drops</td>
                                    <td>
                                        <RewardList rewards={props.data.Rewards} />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </section>
                    <section>
                        <EnemyRewarder rewards={props.data.Stealable} />
                    </section>
                </div>
                <EnemyNotes notes={props.data.Notes} />
            </div>
        </Show>
    );
};

const EnemyNotes: Component<{
    notes: string[]
}> = (props) => {
    return (
        <ol class="enemy-notes">
            <Index each={props.notes}>{(note, index) =>
                <li><sup>{index + 1}</sup> {note()}</li>
            }</Index>
        </ol>
    );
}
