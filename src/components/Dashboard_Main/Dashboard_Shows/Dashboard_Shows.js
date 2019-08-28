import React from 'react';
import {Link} from 'react-router-dom';
import Dashboard_Shows_List from './Dashboard_Shows_List/Dashboard_Shows_List';

function Dashboard_Shows() {
        return ( 
            <div>
                <h2>Shows</h2>
                <Dashboard_Shows_List />
                <Link to='/add-show'><button className="mobile-add-tour">Add Show</button></Link>
            </div>
         );
}
 
export default Dashboard_Shows;