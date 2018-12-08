import React, {Component} from 'react';

import HeaderMain from './HeaderMain/HeaderMain';
import HeaderSub from './HeaderSub/HeaderSub';

class AppHeader extends Component
{
    render()
    {
        return (
            <header className="app-header">
                <HeaderMain />
                <HeaderSub />
            </header>
        );
    }
}

export default AppHeader;
