import React, {Component} from 'react';

import './CalloutCardNav.css'

import CalloutCard from '../../../../shared/CalloutCard/CalloutCard';

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

                   {
                       cards.map((card, index)=>
                       {
                           return (
                               <CalloutCard
                                    key={index}
                                    title={card.title}
                                    image={card.image}
                                    list={card.list}
                                    preview={card.preview}
                                    link={card.link}
                                    short_title={card.short_title}
                               />
                           );
                       })
                   }

               </div>
            </div>
        );
    }
}

export default CalloutCardNav;
