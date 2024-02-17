import { createSignal } from "solid-js";
import { EnemyList } from "./components/EnemyList";
import { Legend } from "./components/Legend";
import "./App.css";

export default function App() {
    const [filter, setFilter] = createSignal("");

    let input: HTMLInputElement|undefined;
    const updateFilter = () => {
        setFilter(input!.value);
    };

    return (<>
        <input
            ref={input}
            type="text"
            onInput={updateFilter}
            placeholder="Search"
        />
        <Legend />
        <EnemyList filter={filter()} />
    </>);
}
