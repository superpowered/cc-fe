import React, {Component} from 'react';

class SubNavItem extends Component
{
    render()
    {
        let className = 'sub-nav-item';

        if(this.props.hovered)
            className += ' hovered';

        let subNav = false;
        if(this.props.subNav)
        {
            className += ' has-sub-nav';
            subNav = (
                <div className={this.props.hovered ? "sub-nav hovered-item" : "sub-nav"}>
                    <ul>
                        {this.props.subNav}
                    </ul>
                </div>
            );
        }

        return (
            <li
                className={className}
                onMouseEnter={this.props.hoverNavItem}
                onMouseLeave={this.props.unHoverNavItem}
            >
                <a href={this.props.link}>
                    {
                        this.props.image &&
                        <img src={this.props.image} />
                    }
                    {this.props.title}
                </a>
               {subNav}
           </li>
       );
    }
}
export default SubNavItem;