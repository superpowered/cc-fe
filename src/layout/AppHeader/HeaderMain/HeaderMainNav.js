import React, {Component} from 'react';
import SubNavList from './SubNavList'

class HeaderMainNav extends Component
{
    render()
    {
        return (
            <nav className="sub-head-nav">
                <ul>
                    {this.props.nav_links.map((item, index)=>
                    {
                        return (
                            <li key={index}>
                                <a href={item.link}>
                                {item.title}
                                </a>
                                <SubNavList nav_links={item.sub_nav}/>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        );
    }
}
export default HeaderMainNav;