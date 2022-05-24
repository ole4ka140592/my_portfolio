import './App.css';
import {Title} from "./title/Title";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {Projects} from "./projects/Projects";
import {Contacts} from "./contacts/Contacts";
import {Footer} from "./footer/Footer";
import {Scroll} from "./common/scroll/Scroll";

function App() {
    return (
        <div className="App">
            <Title/>
            <Main/>
            <Skills/>
            <Projects/>
            <Contacts/>
            <Footer/>
            <Scroll/>
        </div>
    );
}

export default App;
