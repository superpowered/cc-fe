import React, {Component} from 'react';

import "./AppHeader.css";

import HeaderMain from './HeaderMain/HeaderMain';
import HeaderUtility from './HeaderUtility/HeaderUtility';

class AppHeader extends Component
{
    render()
    {
        return (
            <header className="app-header">
                <HeaderUtility
                    utility_nav={this.props.header_data.utility_nav}
                    languages={this.props.header_data.languages}
                />
                <HeaderMain
                    logo={this.props.header_data.logo}
                    main_nav={this.props.header_data.main_nav}
                />
            </header>
        );
    }
}

export default AppHeader;
