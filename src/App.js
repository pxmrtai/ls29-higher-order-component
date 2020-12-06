import React from "react";
import "./styles.css";

import Animate from './components/Animate'
import withFadeInWhenInView from './components/withFadeInWhenInView'

export default function App() {
const AnimateRun = withFadeInWhenInView(Animate)
  return (
    <div className="App">
     <AnimateRun />
    </div>
  );
}
