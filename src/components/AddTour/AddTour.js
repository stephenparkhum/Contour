import React, {Component} from 'react';
import './AddTour.css';

class AddTour extends Component {
    render() { 
        return ( 
            <div>
            <h2>Add Tour</h2>
            <form className="add-show-form">
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
                <button className="cancel-btn">Cancel</button>
            </form>
            </div>
         );
    }
}
 
export default AddTour;