import logo from './logo.svg';
import './App.css';
import {Title} from "./title/Title";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";

function App() {
    return (
        <div className="App">
            <Title/>
            <Main/>
            <Skills/>

        </div>
    );
}

export default App;
