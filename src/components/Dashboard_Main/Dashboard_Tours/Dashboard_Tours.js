import React from 'react';
import {Link} from 'react-router-dom';
import Dashboard_Tours_List from './Dashboard_Tours_List/Dashboard_Tours_List';
import './Dashboard_Tours.css'
import './Dashboard_Tours_Mobile.css'

function Dashboard_Tours() {
    return (
        <div>
            <h2>Tours</h2>
            <Dashboard_Tours_List />
            <Link to='/dashboard/add-tour'><button className="mobile-add-tour">Add Tour</button></Link>
        </div>
    )
}

export default Dashboard_Tours;