import { Covid, Indonesia, Programming, Saved } from "./pages";
import Navbar from "./components/molecules/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Indonesia />} />
                    <Route path="/programming" element={<Programming />} />
                    <Route path="/covid" element={<Covid />} />
                    <Route path="/saved" element={<Saved />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
