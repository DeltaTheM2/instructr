import React from 'react';
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
import rotatingImage from './Assets/blank-clock-face.png';
import "./App.css";
import MyInteractiveComponent from './components/MyInteractiveComponent.tsx'
import './Style.scss';

function App() {
  return (
    <div className="App">
      <MyInteractiveComponent />
    </div>
  );
}

export default App;
