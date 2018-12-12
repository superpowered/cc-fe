import React, {Component} from 'react';

import SubNavItem from './SubNavItem';

class SubNavList extends Component
{
    constructor(props)
    {
        super(props);

        this.state =
        {
            hoveredItem: false,
            hoveredItems: []
        };

        this.levels = 0;
    }

    //TODO: figure this out. SetStates are racing
    hoverNavItem = () =>
    {
        this.setState({ hoveredItem: true });
    };
    unHoverNavItem = () =>
    {
        this.setState({ hoveredItem: false });
    };

    makeSubNavItem = (item, index, arr) =>
    {
        const key = this.levels + '-' + index;
        let subNav = false;
        if (item.sub_nav)
        {
            this.levels++;
            /*subNav = (
                <div className={this.state.hoveredItem ? "sub-nav hovered-item" : "sub-nav"}>
                    <ul>
                        {item.sub_nav.map(this.makeSubNavItem)}
                    </ul>
                </div>
            );*/
            subNav = (<SubNavList nav_links={item.sub_nav}/>);

        }

        if(index === arr.length - 1 && this.levels > 0)
            this.levels--;

        return (
            <SubNavItem
                key={key}
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