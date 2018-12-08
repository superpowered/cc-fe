import React, {Component} from 'react';

class HeaderSub extends Component
{
    render()
    {
        return (
            <header className="app-sub-head">
                <div className="wrapper">

                    <nav className="sub-head-nav">
                        <ul>
                            <li><a>Home</a></li>
                            <li><a>Customer Support</a></li>
                            <li><a>About Us</a></li>
                        </ul>
                    </nav>

                    <ul className="sub-head-language-chooser">
                        <li>
                            <img src="#"/> English
                        </li>
                        <li>
                            <img src="#"/> Espanol
                        </li>
                        <li>
                            <img src="#"/> French
                        </li>
                    </ul>

                    <form className="sub-head-search-form">
                        <input type="search" placeholder="Enter Your E-mail Address" name="search" />
                        <button type="submit" >Submit</button>
                    </form>

                </div>
            </header>
        );
    }
}

export default HeaderSub;
