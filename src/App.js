import React, {Component} from "react";
import "./App.css";

import AppHeader from "./layout/AppHeader/AppHeader";
import HeroSlider from "./components/HeroSlider/App";

class App extends Component
{
    render()
    {
        return (
            <div className="app">

                <AppHeader />

                <div className="page landing-page">

                    <HeroSlider />

                </div>

            </div>
        );
    }
}

export default App;
