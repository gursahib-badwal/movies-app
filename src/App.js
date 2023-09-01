// API KEY = deab272a7eed429baa76db25196b1322
// import Home from "./pages/Home";

// function App() {
//   return <Home />;
// }
// export default App;

// ------------gpt--------------------

import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Help from "./components/Help";
import MoviePage from "./pages/MoviePage";

function App() {
  // return <Home />;
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/help">Help</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/help" element={<Help />} />
        <Route path="/:id" element={<MoviePage />} />
      </Routes>
    </div>
  );
}

export default App;
