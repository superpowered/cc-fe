import React, {Component} from 'react';

class SubNavList extends Component
{
    makeSubNavItem = (item, index) =>
    {
        if (item.sub_nav)
        {
            return (
                <li key={index} className="sub-nav-item has-sub-nav">
                    <a href={item.link}>
                        {
                            item.image &&
                            <img src={item.image} />
                        }
                        {item.title}
                    </a>
                    <div className="sub-nav">
                        <ul>
                            {item.sub_nav.map(this.makeSubNavItem)}
                        </ul>
                    </div>
                </li>
            )
        } else {
            return (
                <li key={index} className="sub-nav-item">
                    <a href={item.link}>
                        {
                            item.image &&
                            <img src={item.image} />
                        }
                        {item.title}
                    </a>
                </li>
            );
        }
    };

    render()
    {
       return (
           <div className="sub-nav">
               <ul>
                   {this.props.nav_links.map(this.makeSubNavItem)}
               </ul>
           </div>
       );
    }
}
export default SubNavList;