import React from 'react';
import './Dashboard_Tours_List.css';

function Dashboard_Tours_List() {
    return (
        <>
            <div className="shows-list">
                <table>
                    <tr>
                        <th>Tour Name</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Country</th>
                        <th>Shows</th>
                        <th>Support</th>
                        <th>Earnings</th>
                    </tr>
                    <tr>
                        <td>West Coast Tour 2019</td>
                        <td>7/19/2019</td>
                        <td>7/29/2019</td>
                        <td>USA</td>
                        <td>9</td>
                        <td>Velnias</td>
                        <td>$2,000</td>
                    </tr>
                    <tr>
                        <td>East Coast Tour 2020</td>
                        <td>3/19/2020</td>
                        <td>4/19/2020</td>
                        <td>USA</td>
                        <td>30</td>
                        <td>Support Band</td>
                        <td>$500</td>
                    </tr>
                </table>
            </div>

        </>
    )
}

export default Dashboard_Tours_List;