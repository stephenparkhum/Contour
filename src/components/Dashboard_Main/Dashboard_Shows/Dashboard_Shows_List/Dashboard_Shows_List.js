import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Dashboard_Shows_List.css';

class Dashboard_Shows extends Component {
    render() { 
        return ( 
            <div className="shows-list">
                <table>
                    <tr>
                        <th>Date</th>
                        <th>Venue</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Tour</th>
                        <th>Support</th>
                    </tr>
                    <tr>
                        <td>7/19/2019</td>
                        <td>High Water Mark</td>
                        <td>Portland</td>
                        <td>Oregon</td>
                        <td>West Coast Tour 2019</td>
                        <td>Velnias</td>
                    </tr>
                    <tr>
                        <td>7/19/2019</td>
                        <td>High Water Mark</td>
                        <td>Portland</td>
                        <td>Oregon</td>
                        <td>West Coast Tour 2019</td>
                        <td>Velnias</td>
                    </tr>
                    <tr>
                        <td>7/19/2019</td>
                        <td>High Water Mark</td>
                        <td>Portland</td>
                        <td>Oregon</td>
                        <td>West Coast Tour 2019</td>
                        <td>Velnias</td>
                    </tr>
                    <tr>
                        <td>7/19/2019</td>
                        <td>High Water Mark</td>
                        <td>Portland</td>
                        <td>Oregon</td>
                        <td>West Coast Tour 2019</td>
                        <td>Velnias</td>
                    </tr>
                    
                </table>
            </div>
         );
    }
}
 
export default Dashboard_Shows;