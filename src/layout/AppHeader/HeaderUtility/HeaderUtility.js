import React, {Component} from 'react';

class HeaderUtility extends Component
{
    render()
    {
        return (
            <header className="app-utility-head">
                <div className="wrapper">

                    <nav className="utility-head-nav">
                        <ul>
                            {
                                this.props.utility_nav.map((item, index)=>
                                {
                                    return (
                                        <li key={index}>
                                            <a href={item.link}>{item.title}</a>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </nav>

                    <div className="language-chooser">
                        <div className="active-language">
                            <div className="language">
                                <img src={this.props.languages[0].image} />
                                {this.props.languages[0].title}
                            </div>
                        </div>
                        <ul>
                            {
                                this.props.languages.map((item, index)=>
                                {
                                    return (
                                        <li key={index}>
                                            <a className="language" href={item.link}>
                                                <img src={item.image} />
                                                {item.title}
                                            </a>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </div>

                    <form className="newsletter-signup" method="POST" action="/">
                        <input type="email" placeholder="Enter Your E-mail Address" name="email" />
                        <button className="arrow-button" type="submit" title="submit"></button>
                    </form>

                </div>
            </header>
        );
    }
}

export default HeaderUtility;
