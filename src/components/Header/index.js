import React from 'react';
import { HeaderStyle } from "./Header.style";
import { Link } from "react-router-dom";

export default () => {

    return (
        <HeaderStyle>
            <h1>News Zone</h1>
            <Link to="/login">Login</Link>

        </HeaderStyle>
    )

}