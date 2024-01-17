import { createSignal } from "solid-js";
import { EnemyList } from "./components/EnemyList";
import "./App.css";

function App() {
    const [filter, setFilter] = createSignal("");

    let input;
    const updateFilter = () => {
        setFilter(input.value);
    };

    return (<>
        <h1>Ikenfell Bestiary</h1>
        <input
            ref={input}
            type="text"
            onInput={updateFilter}
            placeholder="Search"
        />
        <EnemyList filter={filter()} />
    </>);
}

export default App
