import React, {Component} from 'react';

class HeaderMain extends Component
{
    render()
    {
        return (

            <header className="app-main-head">

                <div className="wrapper">
                    <img className="site-logo" />

                    <nav className="sub-head-nav">
                        <ul>
                            <li>
                                <a>
                                    Products
                                </a>
                                <ul>
                                    <li>
                                        <a>
                                            <img src="#" />
                                            Deep Cleaners
                                        </a>
                                        <ul>
                                            <li>
                                                <a>
                                                    <img src="#" />
                                                    Uprights
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>

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
                            <button type="submit" >
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
