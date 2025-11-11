import ToDO from "./components/pages/ToDo/index.tsx";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ToDO />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
