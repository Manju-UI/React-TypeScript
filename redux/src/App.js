import "./App.css";
import About from "./Component/Home/About";
import Application from "./Component/Home/Application";
import Shop from "./Component/Home/Shop";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./Component/Nav";
import Main from "./Component/Home/Main";
import Memo from "./Component/Home/Memo";
import Notes from "./Component/Home/Notes";
import Demo from "./Component/Demo/Demo";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Index />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/application/*" element={<Application />}>
            <Route path="memo*" element={<Memo />} />
            <Route path="notes" element={<Notes />} />
          </Route>
          <Route path="/shop" element={<Shop />} />
        </Routes>
       
      </BrowserRouter>
      <Demo/>scscs
    </div>
  );
}

export default App;
