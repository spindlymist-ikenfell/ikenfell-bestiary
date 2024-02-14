import { createSignal } from "solid-js";
import { EnemyList } from "./components/EnemyList";
import "./App.css";

export default function App() {
    const [filter, setFilter] = createSignal("");

    let input: HTMLInputElement|undefined;
    const updateFilter = () => {
        setFilter(input!.value);
    };

    return (<>
        <header>
            <h1>Ikenfell Bestiary</h1>
        </header>
        <main>
            <input
                ref={input}
                type="text"
                onInput={updateFilter}
                placeholder="Search"
            />
            <EnemyList filter={filter()} />
        </main>
        <footer>
            <p>The source code for this website is available under <a href="https://www.apache.org/licenses/LICENSE-2.0">the Apache-2.0 license.</a></p>
            <p>All assets from Ikenfell, including but not limited to the background image, stat icons, enemy sprites, and item sprites, are &copy; Happy Ray Games. All rights reserved.</p>
        </footer>
    </>);
}
