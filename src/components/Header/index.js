import React from 'react';
import {HeaderStyle, NameTitle} from './Header.style';
import {Link} from 'react-router-dom';

export default () => {
    const redirectTo = () => {
        const user = localStorage.getItem('user');
        if (user) {
            return '/admin'
        }
        return '/login'
    };

    return (
        <HeaderStyle>
            <NameTitle>
                <Link to="./">News Zone</Link>
            </NameTitle>
            <Link to={redirectTo()}>Login</Link>
        </HeaderStyle>
    )
}

