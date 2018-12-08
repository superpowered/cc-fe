import React, {Component} from 'react';

class HeroSlider extends Component
{
    constructor(props)
    {
        super(props);

        this.state =
        {
            slides:
            [
                {
                    title: '',
                    sub_title: '',
                    text: '',
                    link: '',
                    link_text: '',
                    preview_title: '',
                    main_image: '',
                    preview_image: ''
                }
            ],
            activeSlide: 0
        }
    }


    render()
    {
        return (
            <section className="hero-slider-section">

                <div className="hero-slider">

                    <nav className="hero-slider-nav">

                        <button className="hero-slider-arrow prev">
                            Prev
                        </button>

                        <ul className="hero-slider-dots">
                            <li>
                                <button>
                                    1
                                </button>
                                <div className="slide-preview">
                                    <h3 className="title">
                                        <span>
                                            Earth Friendly
                                        </span>
                                        Vacuum Cleaners
                                    </h3>
                                    <div className="image">

                                    </div>
                                </div>
                            </li>
                            <li>
                                <button>
                                    2
                                </button>
                            </li>
                            <li>
                                <button>
                                    3
                                </button>
                            </li>
                            <li>
                                <button>
                                    4
                                </button>
                            </li>
                        </ul>

                        <button className="hero-slider-arrow next">
                            Next
                        </button>

                    </nav>

                    <div className="slider-track">

                        <div className="hero-slide">

                            <div className="background">

                            </div>

                            <div className="wrapper">

                                <h4>
                                    Our Vacuums Use Energy & Resources
                                </h4>
                                <h1>
                                    Earth Friendly Products
                                </h1>
                                <div>
                                    Proin dui nibh, luctus eu facilisis lacinia, venenatis eget erat no cobius.
                                </div>
                                <a className="button">
                                    Learn More
                                </a>
                            </div>

                        </div>

                        <div className="hero-slide">

                        </div>

                        <div className="hero-slide">

                        </div>

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
