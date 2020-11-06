import React from 'react';
import {HeaderStyle, NameTitle} from './Header.style';
import {Link} from 'react-router-dom';

export default () => (
    <HeaderStyle>
        <NameTitle>
            <Link to="./">News Zone</Link>
        </NameTitle>
        <Link to="/login">Login</Link>
    </HeaderStyle>
)

