import React, {Component} from 'react';

import HeroSlider from './components/HeroSlider/HeroSlider';

class Landing extends Component
{
    constructor(props)
    {
        super(props);

        this.state =
        {
        }
    }

    componentDidMount()
    {
        //Set the Page up
    }

    render()
    {
       return(
         <div className="page page-landing">

             <section className="landing-main">
                 <HeroSlider
                     slides={this.props.page_data.main_section.slides}
                 />

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

         </div>
       );
    }
}

export default Landing;