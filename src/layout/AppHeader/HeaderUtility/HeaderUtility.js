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

                    <ul className="utility-head-language-chooser">
                        {
                            this.props.languages.map((item, index)=>
                            {
                                return (
                                    <li key={index}>
                                        <a href={item.link}>
                                            <img src={item.image} />
                                            {item.title}
                                        </a>
                                    </li>
                                );
                            })
                        }
                    </ul>

                    <form className="utility-head-newsletter-signup" method="POST" action="/">
                        <input type="email" placeholder="Enter Your E-mail Address" name="email" />
                        <button type="submit" >Submit</button>
                    </form>

                </div>
            </header>
        );
    }
}

export default HeaderUtility;
