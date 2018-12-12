import React, {Component} from 'react';

import HeaderMainNav from './HeaderMainNav';

class HeaderMain extends Component
{

    constructor(props)
    {
        super(props);

        this.state =
        {
            whereToBuyActive: false
        };
    }

    toggleWhereToBuy = (e) =>
    {
        e.preventDefault();
        const active = this.state.whereToBuyActive;
        this.setState({whereToBuyActive: !active});
    };

    render()
    {
        return (

            <header className="app-main-head">

                <div className="wrapper">
                    <img className="site-logo" src={this.props.logo} />

                    <HeaderMainNav nav_links={this.props.main_nav} />

                    <div className={this.state.whereToBuyActive ? "where-to-buy-block active" : "where-to-buy-block"}>
                        <div className="wrapper">
                            <nav className="">
                                <a href="http://google.com/" onClick={this.toggleWhereToBuy}>
                                    Where to Buy
                                </a>

                                <a href="">
                                    My Account
                                </a>
                            </nav>

                            <form className="where-to-buy-form">

                                <input type="search" name="zip-search" />
                                <button className="arrow-button" type="submit" >
                                    <span>Enter ZIP Code</span>
                                </button>

                            </form>
                        </div>
                    </div>

                </div>

            </header>
        );
    }
}

export default HeaderMain;
