import React, {Component} from 'react';

import './CalloutCard.css';

class CalloutCard extends Component
{
    render()
    {
        const cardLink = this.props.link ? this.props.link : '#';

        let cardImage;
        if(this.props.image)
        {
            const imageStyle = {
                backgroundImage: "url('"+this.props.image+"')"
            };
            cardImage = (
                <a href={cardLink}>
                    <div className="card-image" style={imageStyle}>
                        <img src={this.props.image} />
                    </div>
                </a>
            );
        }

        let cardList;
        if(this.props.list)
        {
            cardList = (
                <ul className="card-link-list">
                    {this.props.list.map((item,index)=><li key={index}><a href={item.link} className="arrow-button"><span>{item.title}</span></a></li>)}
                </ul>
            );
        }

        let cardPreview;
        if(this.props.preview)
        {
            cardPreview = (
                <div className="card-preview">
                    <img src={this.props.preview.image} />
                    <div className="preview-text">
                        <h4>
                            {this.props.preview.title}
                        </h4>
                        <p>
                            {this.props.preview.text} <a href={cardLink}>[more]</a>
                        </p>
                    </div>
                </div>
            );
        }

        //TODO: sanitization

        return (
            <article className="callout-card">

                <a href={cardLink}>
                    <h3 className={this.props.short_title ? "card-title short-title": "card-title"} dangerouslySetInnerHTML={{__html: this.props.title }}>
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
