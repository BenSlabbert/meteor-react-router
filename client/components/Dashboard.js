import React from 'react';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import Header from './Header';
import Sidebar from './Sidebar';

export const Dashboard = () => {
    return (
        <div>
            <Router>
                <div>
                    <Header/>
                    <Sidebar/>
                </div>
            </Router>
        </div>
    );
};

export default Dashboard;
