import { Link, Routes,Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Photo from "./features/Photo";

function App() {
  return (
    <div className="photo-app">
      <Header />
      <ul className="list-menu">
        <li>
          <Link to="/photos">Go to photo page</Link>
        </li>
        <li>
          <Link to="/photos/123">Go to edit photo</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/photos/*" element={<Photo />}/>
      </Routes>
    </div>
  );
}

export default App;
