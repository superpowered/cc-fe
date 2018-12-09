import React, {Component} from 'react';

import HeaderMainNav from './HeaderMainNav';

class HeaderMain extends Component
{
    render()
    {
        return (

            <header className="app-main-head">

                <div className="wrapper">
                    <img className="site-logo" src={this.props.logo} />

                    <HeaderMainNav nav_links={this.props.main_nav} />

                    <div className="where-to-buy-block">

                        <nav className="">
                            <a href="#">
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

            </header>
        );
    }
}

export default HeaderMain;
