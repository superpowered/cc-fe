import React, {Component} from 'react';

import SubNavItem from './SubNavItem';

class SubNavList extends Component
{
    constructor(props)
    {
        super(props);

        this.state =
        {
            hoveredItems: []
        };

        this.levels = 0;
    }

    //TODO: figure this out. SetStates are racing
    hoverNavItem = (key) =>
    {
        if(this.state.hoveredItems.indexOf(key) === -1)
        {
            this.setState({ hoveredItems: this.state.hoveredItems.concat(key) });
        }
    };
    unHoverNavItem = (key) =>
    {
        const index = this.state.hoveredItems.indexOf(key);
        if(index !== -1)
        {
            const hoveredItems = this.state.hoveredItems.splice(1,index);
            console.log(key,index,hoveredItems);
            this.setState({ hoveredItems: hoveredItems});
        }
        else
        {
            alert(key);
        }
    };

    makeSubNavItem = (item, index, arr) =>
    {
        const key = this.levels + '-' + index;
        let subNav = false;
        if (item.sub_nav)
        {
            this.levels++;
            subNav = item.sub_nav.map(this.makeSubNavItem);
        }

        if(index === arr.length - 1 && this.levels > 0)
            this.levels--;

        return (
            <SubNavItem
                key={key}
                hoverNavItem={() => this.hoverNavItem(key) }
                unHoverNavItem={() => {this.unHoverNavItem(key); console.log('unhov')} }
                link={item.link}
                image={item.image}
                title={item.title}
                subNav={subNav}
                hovered={this.state.hoveredItems.indexOf(key) !== -1}
            />
        );
    };

    render()
    {
        return (
            <div className={this.state.hoveredItems.length ? "sub-nav hovered-item" : "sub-nav"}>
                <ul>
                    {this.props.nav_links.map(this.makeSubNavItem)}
                </ul>
           </div>
       );
    }
}
export default SubNavList;