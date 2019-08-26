import React, {Component} from 'react';
import './AddTour.css';

class AddTour extends Component {
    render() { 
        return ( 
            <div>
            <h2>Add Tour</h2>
            <form className="add-show-form">
                <label for="start-date">Start Date</label>
                <input type="date" name="start-date" id="start-date" />
                <label for="end-date">End Date</label>
                <input type="date" name="end-date" id="end-date" />
                <label for="country">Country</label>
                <input type="text" name="country" id="country" />
                <label for="support-band">Support Bands</label>
                <input type="text" name="support-band" id="support-band" />
                <label for="fb-event-link">Facebook Event Link</label>
                <input type="text" name="fb-event-link" id="fb-event-link" />
                <input type="submit" value="Add Tour" />
                <button className="cancel-btn">Cancel</button>
            </form>
            </div>
         );
    }
}
 
export default AddTour;