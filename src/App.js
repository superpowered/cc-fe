import React, {Component} from "react";
import "./styles/main.css";

import "./styles/layout/footer/footer.css"; //todo: move

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

                    <div className="app-main">
                        <Landing
                            page_data={this.state.app_data.pages.landing}
                        />
                    </div>

                    <footer className="app-footer">
                        <div className="wrapper">

                            <div className="footer-top">
                                <form className="newsletter-signup" method="POST" action="/">
                                    <h4>
                                        Join the Mailing List
                                    </h4>
                                    <input type="email" placeholder="Enter Your E-mail Address" name="email" />
                                    <button className="arrow-button" type="submit" title="submit"></button>
                                </form>

                                <div className="social-blocks">

                                    <div className="social-block twitter-block">
                                        <div className="feed">

                                        </div>
                                        <a className="link">
                                            <img src="#" />
                                        </a>
                                    </div>

                                    <div className="social-block facebook-block">
                                        <div className="feed">

                                        </div>
                                        <a className="link">
                                            <img src="#" />
                                        </a>
                                    </div>

                                </div>
                            </div>

                            <div className="footer-bottom">

                                <nav className="footer-nav">
                                    <ul>
                                        <li>

                                        </li>
                                    </ul>
                                </nav>


                                <nav className="footer-secondary-nav">
                                    <ul>
                                        <li>

                                        </li>
                                    </ul>
                                </nav>

                                <div className="copyright">
                                    © 2009 BISSELL Homecare Inc. All Rights Reserved
                                </div>

                            </div>

                        </div>
                    </footer>

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
