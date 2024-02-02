import "./App.css";
import Footer from "./Components/Footer/Footer";
import Help from "./Components/Help/Help";
import Main from "./Components/Main/Main";

import Cards from './Components/cards/Cards';
import Scroller from "./Components/scroller/Scroller";

function App() {

  return <div className="App">
    <Main/>
    <Cards/>
    <Footer/>
    <Help/>
    <Scroller/>

    </div>
}

export default App;
