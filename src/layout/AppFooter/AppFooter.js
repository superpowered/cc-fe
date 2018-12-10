import React, {Component} from 'react';

import "./AppFooter.css";

import SocialBlock from "./SocialBlock/SocialBlock";
import NavList from '../../shared/NavList/NavList';

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

                        <NavList
                            className="footer-nav"
                            navItems={this.props.footer_data.footer_main_nav}
                        />

                        <NavList
                            className="footer-secondary-nav"
                            navItems={this.props.footer_data.footer_secondary_nav}
                        />

                        <div className="copyright">
                            {this.props.footer_data.copyright_text}
                        </div>

                    </div>

                </div>
            </footer>
        );
    }
}

export default AppFooter;
