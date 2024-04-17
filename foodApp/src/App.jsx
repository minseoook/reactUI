import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navbar";
import Home from "./pages/home/page";
import DetailPage from "./pages/detail";
import FavoritePage from "./pages/favorite";

function App() {
  return (
    <div>
      <div className="min-h-screen p-6 bg-white text-gray-600 text-lg ">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<FavoritePage />} />
          <Route path="/recipe-item/:id" element={<DetailPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
