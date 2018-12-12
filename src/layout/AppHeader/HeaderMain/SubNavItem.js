import React, {Component} from 'react';

class SubNavItem extends Component
{

    constructor(props)
    {
        super(props);

        this.state =
        {
            hovered: false
        };
    }

    handleMouseEnter = () =>
    {
        this.props.hoverNavItem();
        this.setState({hovered: true});
    };

    handleMouseLeave = () =>
    {
        this.props.unHoverNavItem();
        this.setState({hovered: false});
    };

    render()
    {
        let className = 'sub-nav-item';

        if(this.state.hovered)
            className += ' hovered';

        if(this.props.subNav)
            className += ' has-sub-nav';

        return (
            <li
                className={className}
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
            >
                <a href={this.props.link}>
                    {
                        this.props.image &&
                        <img src={this.props.image} />
                    }
                    {this.props.title}
                </a>
               {this.props.subNav}
           </li>
       );
    }
}
export default SubNavItem;