import React, {Component} from 'react';

import CalloutCard from './CalloutCard';
import HeroSlide from "../HeroSlider/HeroSlide";

class CalloutCardNav extends Component
{
    render()
    {
        const cards = this.props.cards;
        if(!cards || !cards.length)
            return '';

        return(
            <div className="nav-card-holder">
               <div className="wrapper">

                   {cards.map((card, index)=> <CalloutCard key={index} card={card}/>)}

               </div>
            </div>
        );
    }
}

export default CalloutCardNav;
