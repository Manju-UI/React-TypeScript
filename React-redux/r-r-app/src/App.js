import logo from "./logo.svg";
import "./App.css";
import Home from "./Components";

function App() {
  const HomeStyle = {
    color:'yellow',
    backgroundColor:'red'

  }
  return (
    <div className="App">
      <header style={HomeStyle} className="App-header">
          <Home  logo={logo} />
      </header>
    </div>
  );
}

export default App;
