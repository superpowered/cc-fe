import React, {Component} from 'react';

import "./NavList.css";

class NavList extends Component
{
    render()
    {
        return (
            <nav className={ `nav-list ${ this.props.className }` }>
                <ul>
                    {
                        this.props.navItems.map((item,index)=>
                        {
                            return(
                                <li key={index}>
                                    <a href={item.link}>
                                        {item.title}
                                    </a>
                                </li>
                            );
                        })
                    }
                </ul>
            </nav>
        );
    }
}

export default NavList;
