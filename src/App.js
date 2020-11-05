import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import DetailedPage from './pages/NewsDetailed';
import NewsBlock from './pages/News';
import './App.css';
import LogIn from './pages/LogIn';
import Admin from './pages/Admin'

const App = () => {

    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/news"/>
                    </Route>

                    <Route exact path="/news">
                        <NewsBlock/>
                    </Route>

                    <Route exact path="/news/:id">
                        <DetailedPage/>
                    </Route>
                    <Route exact path="/login">
                        <LogIn/>
                    </Route>
                    <Route exact path="/admin">
                        <Admin/>
                    </Route>
                </Switch>
            </div>

        </Router>
    )

};

export default App;
