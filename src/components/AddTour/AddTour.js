import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './AddTour.css';

class AddTour extends Component {
    render() { 
        return ( 
            <div>
            <h2>Add Tour</h2>
            <form className="add-show-form">
                <label htmlFor="tour-name">Tour Name</label>
                <input type="text" name="tour-name" id="tour-name" required/>
                <label htmlFor="start-date">Start Date</label>
                <input type="date" name="start-date" id="start-date" required/>
                <label htmlFor="end-date">End Date</label>
                <input type="date" name="end-date" id="end-date" required/>
                <label htmlFor="country">Country</label>
                <input type="text" name="country" id="country" required/>
                <label htmlFor="support-band">Support Bands</label>
                <input type="text" name="support-band" id="support-band" required/>
                <label htmlFor="fb-event-link">Facebook Event Link</label>
                <input type="text" name="fb-event-link" id="fb-event-link" required/>
                <input type="submit" value="Add Tour" />
            </form>
            <Link to="/dashboard/tours"><button className="cancel-btn">Cancel</button></Link>
            </div>
         );
    }
}
 
export default AddTour;