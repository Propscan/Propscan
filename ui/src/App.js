import { BrowserRouter, Routes, Route } from "react-router-dom";
import './assets/App.css';
import Home from "./pages/Home";
import PropertyListingHome from "./pages/PropertyListingHome"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<PropertyListingHome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
