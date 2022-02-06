import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";



const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/a-propos" element={<About />} />
                <Route  component={NotFound} />
            </Routes>
        </BrowserRouter>
        

        
    );
};

export default App