import React from 'react';
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
import rotatingImage from './Assets/blank-clock-face.png';
import "./App.css";

function App() {
  return (
    <section className="container">
      <div className="rotating-image-container">
        <img src={rotatingImage} alt="Rotating Clock" />
      </div>
      <div className="clock_content">
        <h1>We are almost there</h1>
        <h3>Stay tuned for something amazing.</h3>
        <FlipClockCountdown
          className='flip-clock'
          to={new Date().getTime() + 24 * 3600 * 1000 + 5000}
          labels={["DAYS", "HOURS", "MINUTES", "SECONDS"]}
          duration={0.5}
        />
        <button className="button">Notify Me</button>
      </div>
    </section>
  );
}

export default App;
