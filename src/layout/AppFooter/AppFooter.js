import React, {Component} from 'react';

import "../../styles/layout/footer/footer.css";

import SocialBlock from "./SocialBlock/SocialBlock";

class AppFooter extends Component
{
    render()
    {
        return (
            <footer className="app-footer">
                <div className="wrapper">

                    <div className="footer-top">

                        <form className="newsletter-signup" method="POST" action="/newsletter-signup">
                            <h4>
                                Join the Mailing List
                            </h4>
                            <input type="email" placeholder="Enter Your E-mail Address" name="email" />
                            <button className="arrow-button" type="submit" title="submit"></button>
                        </form>

                        <div className="social-blocks">

                            {
                                this.props.footer_data.social_feeds.map((feed, index) =>
                                {
                                    return (<SocialBlock
                                        key={index}
                                        feed_type={feed.feed_type}
                                        feed_content={feed.feed_content}
                                        feed_logo={feed.feed_logo}
                                    />);
                                })
                            }

                        </div>
                    </div>

                    <div className="footer-bottom">

                        <nav className="footer-nav">
                            <ul>
                                <li>
                                    <a href="#">
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Products
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Products
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Products
                                    </a>
                                </li>
                            </ul>
                        </nav>


                        <nav className="footer-secondary-nav">
                            <ul>
                                <li>
                                    <a href="#">
                                        Privacy Policy
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Site Security
                                    </a>
                                </li>
                            </ul>
                        </nav>

                        <div className="copyright">
                            © 2009 BISSELL Homecare Inc. All Rights Reserved
                        </div>

                    </div>

                </div>
            </footer>
        );
    }
}

export default AppFooter;
