import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { FavPage } from "./pages/FavPage";
import { Nav } from "./components/Nav";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/fav" element={<FavPage />} />
      </Routes>
    </>
  );
}

export default App;
