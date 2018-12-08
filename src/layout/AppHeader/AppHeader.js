import React, {Component} from 'react';

import HeaderMain from './HeaderMain/HeaderMain';
import HeaderSub from './HeaderSub/HeaderSub';

class AppHeader extends Component
{
    render()
    {
        return (
            <header className="app-header">
                <HeaderSub
                    sub_nav={this.props.header_data.sub_nav}
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
