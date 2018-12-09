import React, {Component} from "react";
import "./styles/main.css";

import app_data from './app_data.json';

import AppHeader from "./layout/AppHeader/AppHeader";

import Landing from "./pages/Landing/Landing";

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

                    <Landing
                        page_data={this.state.app_data.pages.landing}
                    />

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
