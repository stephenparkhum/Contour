import React, { Component } from 'react';
import './Landing_Main_Desktop.css';
import './Landing_Main_Mobile.css';

export default class LandingMain extends Component {
  render() {
    return (
      <div className="main-page">
        <section className="main-hero">
            <p>Contour allows you to plan, book, and manager your own tours as an independent artist!</p>
            <a href="#"><button className="try-button">Try Demo</button></a>
        </section>
        <section className="main-what-section">
            <h2>What is <strong>Contour</strong>?</h2>
            <div className="main-what-cards">
                <div className="what-card">
                    <img src="https://images.pexels.com/photos/56832/road-asphalt-space-sky-56832.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Road" />
                <p>Plot, plan, and scope out potential dates to reach new fans!</p>
                </div>
                <div className="what-card">
                <img src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Concert" />
            <p>Keep records of your financial earnings for each show, so you can budget for expenses on the next one!</p>
                </div>
                <div className="what-card">
                <img src="https://images.pexels.com/photos/1751731/pexels-photo-1751731.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Concert" />
            <p>Share public lists of your upcoming tour dates to your fans!</p>
                </div>
            </div>
            
        </section>
      </div>
    )
  }
}
