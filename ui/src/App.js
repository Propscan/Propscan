import { BrowserRouter, Routes, Route } from "react-router-dom";
import './assets/App.css';
import Home from "./pages/Home";
import PropertyListing from "./pages/PropertyListing"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<PropertyListing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
