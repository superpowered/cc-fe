import React, {Component} from "react";
import "./App.css";

//CMS Data
import app_data from './app_data.json';

//Layout
import AppHeader from "./layout/AppHeader/AppHeader";
import AppFooter from "./layout/AppFooter/AppFooter";

//Pages
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
        //this.setState({app_data: data})
    }

    render()
    {
        if(this.state.loaded)
        {
            return (
                <div className="app">

                    <AppHeader header_data={this.state.app_data.header} />

                    <div className="app-main">
                        <Landing
                            page_data={this.state.app_data.pages.landing}
                        />
                    </div>

                    <AppFooter footer_data={this.state.app_data.footer} />

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
