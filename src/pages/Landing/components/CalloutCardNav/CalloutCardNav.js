import React, {Component} from 'react';

import './CalloutCardNav.css'

import CalloutCard from './CalloutCard';

class CalloutCardNav extends Component
{
    render()
    {
        const cards = this.props.cards;
        if(!cards || !cards.length)
            return '';

        return(
            <div className="callout-card-nav">
               <div className="wrapper">

                   {cards.map((card, index)=> <CalloutCard key={index} card={card}/>)}

               </div>
            </div>
        );
    }
}

export default CalloutCardNav;
