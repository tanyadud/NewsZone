import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {Button, H2Style, InputBox, LogInBox, LogInPage} from './LogInStyle';
import axios from 'axios';


export default () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const serverRequest = () => {
        return axios
            .get('/')
            .then(() => {
                const user = {
                    username,
                    password
                };
                localStorage.setItem('user', JSON.stringify(user));
                history.push('/admin');
            })
            .catch((error) => console.log('serverRequest', error))
    };

    const isFormValid = () => {
        return username !== '' && password !== ''
    };

    return (
        <LogInPage>
            <LogInBox>
                <H2Style>Welcome to News Zone</H2Style>
                <InputBox value={username} onInput={e => setUsername(e.target.value)} type="text"
                          placeholder="Enter Username"/>
                <InputBox value={password} onInput={e => setPassword(e.target.value)} type="password"
                          placeholder="Enter Password"/>
                <Button disabled={!isFormValid()} onClick={serverRequest}>Login</Button>
            </LogInBox>
        </LogInPage>
    )
}
