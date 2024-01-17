import './App.css';
import {Link, Outlet, Route, Routes} from "react-router-dom";
import Home from "./pages/home";
import Tobago from "./pages/tobago";
import NoMatch from "./error/noMatch";

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="tobago" element={<Tobago/>}/>
            <Route path="*" element={<NoMatch/>}/>
          </Route>
        </Routes>
      </div>
  );
}

function Layout() {
  return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/tobago">Tobago</Link>
            </li>
          </ul>
        </nav>
        <hr/>
        <Outlet/>
      </div>
  );
}

export default App;
