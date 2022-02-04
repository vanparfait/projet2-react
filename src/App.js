import React from "react";
import { BrowserRouter, Switch, Route} from "react-router-dom";
//import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";



const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/a-propos" component={About} />
                <Route  component={NotFound} />
            </Switch>
        </BrowserRouter>
        

        
    );
};

export default App