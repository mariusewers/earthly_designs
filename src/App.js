import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hjem from "./pages/Hjem";
import Cases from "./pages/Cases";
import Priser from "./pages/Priser";
import Kontakt from "./pages/Kontakt";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Hjem />} />
          <Route path="/Cases" element={<Cases />} />
          <Route path="/Priser" element={<Priser />} />
          <Route path="/Kontakt" element={<Kontakt />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
