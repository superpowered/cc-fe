import React, {Component} from 'react';

import "./SocialBlock.css";

class SocialBlock extends Component
{
    render()
    {
        //TODO: sanitize HTML
        let content = '';
        if(this.props.feed_content)
            content = this.props.feed_content;

        return (
            <div className={"social-block " + this.props.feed_type+"-block"}>
                <div className="feed" dangerouslySetInnerHTML={{__html:content}}>
                </div>
                <a className="link">
                    <img src={this.props.feed_logo} alt={this.props.feed_type}/>
                </a>
            </div>
        );
    }
}

export default SocialBlock;
