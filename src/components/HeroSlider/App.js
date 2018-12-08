import React, {Component} from 'react';

class HeroSlider extends Component
{
    render()
    {
        return (
            <section className="hero-slider-section">

                <div className="hero-slider">

                    <div className="hero-slide">

                        <div className="background">

                        </div>

                        <div className="wrapper">



                        </div>

                    </div>

                    <div className="hero-slide">

                    </div>

                    <div className="hero-slide">

                    </div>

                </div>

                <div className="nav-card-holder">
                    <div className="wrapper">

                        <article className="nav-card">

                            <a href="#">
                                <h3>
                                    <span>Find a</span>
                                    Perfect Match
                                </h3>
                            </a>

                            <a href="#">
                                <div className="card-image">

                                </div>
                            </a>

                        </article>

                        <article className="nav-card">

                            <a href="#">
                                <h3>
                                    <span>Get</span>
                                    Help
                                </h3>
                            </a>

                            <ul className="card-link-list">
                                <li><a>Technical Support</a></li>
                                <li><a>User Guides</a></li>
                                <li><a>Troubleshooting</a></li>
                                <li><a>Register Product</a></li>
                            </ul>

                        </article>

                        <article className="nav-card">

                            <a href="#">
                                <h3>
                                    <span>Share</span>
                                    & Discuss
                                </h3>
                            </a>

                           <div className="card-preview">
                               <img src="#" />
                               <div className="preview-text">
                                   sdsfdsf... <a>[more]</a>
                               </div>
                           </div>

                        </article>

                    </div>
                </div>

            </section>
        );
    }
}

export default HeroSlider;
