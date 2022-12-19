import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Mainpage from "./pages/Reactionsite/Mainpage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/reactionsite" element={<Mainpage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
