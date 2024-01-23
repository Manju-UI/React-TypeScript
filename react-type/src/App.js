import "./App.css";
import Footer from "./Components/Footer/Footer";
import Help from "./Components/Help/Help";
import Main from "./Components/Main/Main";

import Cards from './Components/cards/Cards';

function App() {

  return <div className="App">
    <Main/>
    <Cards/>
    <Footer/>
    <Help/>
    </div>
}

export default App;
