import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from 'react-router-dom';
import ListPage from './ListPage.js';
import CreatePage from './CreatePage.js';
import DetailsPage from './DetailsPage.js';
import skate from './pngguru.com.png';
import './App.css';

export default class App extends Component {
    render() {
        return (
            <div className="App">
            <header className="App-header">    
                <Router>
                    <main>

                    <div className="sidebar">
                    <Link to='/create'>Create</Link>
                    <Link to='/'>List</Link>
                    <img src={skate} className="skate" alt="a black skate with purple wheels"/>
                    </div>
                    <div className="content">
                    <Switch>
                        <Route 
                            path="/" 
                            exact
                            render={(routerProps) => <ListPage {...routerProps} />} 
                        />
                        <Route 
                            path="/create" 
                            exact
                            render={(routerProps) => <CreatePage {...routerProps} />} 
                        />
                        <Route 
                            path="/detail/:id" 
                            exact
                            render={(routerProps) => <DetailsPage {...routerProps} />} 
                        />
                    </Switch>
                    </div>
                    
                    </main>
                    </Router>
            </header>
            </div>
        )
    }
}
