import React, {Component} from 'react';

import SubNavItem from './SubNavItem';

class SubNavList extends Component
{
    constructor(props)
    {
        super(props);

        this.state =
        {
            hoveredItem: false
        };
    }

    hoverNavItem = () =>
    {
        this.setState({ hoveredItem: true });
    };

    unHoverNavItem = () =>
    {
        this.setState({ hoveredItem: false });
    };

    makeSubNavItem = (item, index) =>
    {
        let subNav = false;
        if (item.sub_nav)
            subNav = (<SubNavList nav_links={item.sub_nav} />);

        return (
            <SubNavItem
                key={index}
                hoverNavItem={ this.hoverNavItem }
                unHoverNavItem={ this.unHoverNavItem }
                link={item.link}
                image={item.image}
                title={item.title}
                subNav={subNav}
            />
        );
    };

    render()
    {
        return (
            <div className={this.state.hoveredItem ? "sub-nav hovered-item" : "sub-nav"}>
                <ul>
                    {this.props.nav_links.map(this.makeSubNavItem)}
                </ul>
           </div>
       );
    }
}
export default SubNavList;