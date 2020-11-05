import React from 'react';
import { useHistory } from "react-router-dom";
import Avatar from '../../common/images/avatar.png'
import { AdminPage, DataUser, ImgStyle, StyledH, TextStyle } from "./adminStyle";


export default () => {
    let history = useHistory();
    const user = JSON.parse(localStorage.getItem('user')) || {};

    !localStorage.getItem('user') && history.push('/login');


    return (
        <AdminPage>
            <StyledH>Admin page</StyledH>
            <DataUser>
                <ImgStyle src={Avatar}/>
                <TextStyle>Username: {user.username}</TextStyle>
                <TextStyle>Password: {user.password}</TextStyle>
            </DataUser>
        </AdminPage>

    )
}
