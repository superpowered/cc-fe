import React, {Component} from 'react';

import HeroSlider from './components/HeroSlider/HeroSlider';
import CalloutCardNav from './components/CalloutCardNav/CalloutCardNav';

import '../../styles/pages/landing.css';

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
        console.log(this.props.page_data.main_section);
       return(
         <div className="page page-landing">

             <section className="landing-main">
                 <HeroSlider
                     slides={this.props.page_data.main_section.slides}
                 />
                 <CalloutCardNav
                    cards={this.props.page_data.main_section.callout_cards}
                 />

             </section>

         </div>
       );
    }
}

export default Landing;