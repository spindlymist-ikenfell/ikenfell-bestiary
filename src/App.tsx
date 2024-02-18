import { createSignal } from "solid-js";
import { EnemyList } from "./components/EnemyList";
import { Legend } from "./components/Legend";
import "./App.css";

export default function App() {
    const [query, setQuery] = createSignal("");

    let timer: number|undefined;
    const updateQuery = (value: string) => {
        window.clearTimeout(timer);
        timer = window.setTimeout(() => {
            setQuery(value);
        }, 250);
    };

    return (<>
        <input
            type="text"
            onInput={(event) => updateQuery(event.target.value.trim())}
            placeholder="Search"
        />
        <Legend />
        <EnemyList query={query()} />
    </>);
}
