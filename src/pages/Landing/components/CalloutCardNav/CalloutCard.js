import React, {Component} from 'react';

class CalloutCard extends Component
{
    render()
    {
        const card = this.props.card;

        if(!card)
            return '';

        let cardImage;
        if(card.image)
        {
            const imageStyle = {
                backgroundImage: "url('"+card.image+"')"
            };
            cardImage = (
                <a href={card.link}>
                    <div className="card-image" style={imageStyle}>
                        <img src={card.image} />
                    </div>
                </a>
            );
        }

        let cardList;
        if(card.list)
        {
            cardList = (
                <ul className="card-link-list">
                    {card.list.map((item,index)=><li key={index}><a href={item.link} className="arrow-button"><span>{item.title}</span></a></li>)}
                </ul>
            );
        }

        let cardPreview;
        if(card.preview)
        {
            cardPreview = (
                <div className="card-preview">
                    <img src={card.preview.image} />
                    <div className="preview-text">
                        <h4>
                            {card.preview.title}
                        </h4>
                        <p>
                            {card.preview.text} <a href={card.link}>[more]</a>
                        </p>
                    </div>
                </div>
            );
        }

        //TODO: sanitization

        return (
            <article className="callout-card">

                <a href={card.link}>
                    <h3 className={card.short_title ? "short-title": ""} dangerouslySetInnerHTML={{__html:card.title}}>
                    </h3>
                </a>

                {cardImage}

                {cardList}

                {cardPreview}

            </article>
        );
    }
}

export default CalloutCard;
