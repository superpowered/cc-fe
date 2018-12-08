import React, {Component} from "react";
import "./App.css";

import app_data from './app_data.json';

import AppHeader from "./layout/AppHeader/AppHeader";
import HeroSlider from "./components/HeroSlider/App";

class App extends Component
{
    constructor(props)
    {
        super(props);

        this.state =
        {
            loaded: true,
            app_data: app_data
        }
    }

    componentDidMount()
    {
        //get some real data
    }

    render()
    {
        if(this.state.loaded)
        {
            return (
                <div className="app">

                    <AppHeader header_data={this.state.app_data.header}/>

                    <div className="page landing-page">

                        <HeroSlider />

                    </div>

                </div>
            );
        }
        else
        {
            return (<div className="loader">
                Loading...
            </div>)
        }
    }
}

export default App;
