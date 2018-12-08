import React, {Component} from 'react';

class SubNavList extends Component
{
    makeSubNavListItem = (item, index) =>
    {
        if (item.sub_nav)
        {
            return (
                <li key={index}>
                    <a href={item.link}>
                        {item.title}
                        {
                            item.image &&
                            <img src={item.image} />
                        }
                    </a>
                    <ul>
                        {item.sub_nav.map(this.makeSubNavListItem)}
                    </ul>
                </li>
            )
        } else {
            return (
                <li key={index}>
                    <a href={item.link}>
                        {item.title}
                        {
                            item.image &&
                            <img src={item.image} />
                        }
                    </a>
                </li>
            );
        }
    };

    render()
    {
       return (
           <ul>
               {this.props.nav_links.map(this.makeSubNavListItem)}
           </ul>
       );
    }
}
export default SubNavList;