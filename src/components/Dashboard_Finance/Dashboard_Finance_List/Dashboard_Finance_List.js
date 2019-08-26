import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Dashboard_Finance_List.css';

class Dashboard_Finance_List extends Component {
    render() { 
        return ( 
            <div className="shows-list">
                <table>
                    <tr>
                        <th>Date</th>
                        <th>City, State</th>
                        <th>Tour</th>
                        <th>Door/Ticket Earnings</th>
                        <th>Merch Earnings</th>
                    </tr>
                    <tr>
                        <td>7/19/2019</td>
                        <td>Portland, OR</td>
                        <td>West Coast Tour 2019</td>
                        <td>$200</td>
                        <td>$150</td>
                    </tr>
                    <tr>
                        <td>7/19/2019</td>
                        <td>Portland, OR</td>
                        <td>West Coast Tour 2019</td>
                        <td>$200</td>
                        <td>$150</td>
                    </tr>
                    <tr>
                        <td>7/19/2019</td>
                        <td>Portland, OR</td>
                        <td>West Coast Tour 2019</td>
                        <td>$200</td>
                        <td>$150</td>
                    </tr>
                    
                </table>
            </div>
         );
    }
}
 
export default Dashboard_Finance_List;