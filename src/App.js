import './App.css';
import { useState, useRef } from "react";
import soundIcon from "./assets/speaker_icon.svg"
import muteIcon from "./assets/mute_icon.svg"
import spaceJazz from "./assets/Space Jazz.mp3"

function App() {
  const [count, setCount] = useState(0);
  const [soundOn, setSoundOn] = useState(false);
  const audioRef = useRef(null)

  const addOne = () => {
    setCount(count + 1)
  }

  const multiplyByTwo = () => {
    setCount(count * 2)
  }

  const toggleSound = () => {
    if (!soundOn) {
      audioRef.current.play()
    } else {
      audioRef.current.pause()
    }
    setSoundOn(!soundOn)
  }


  return (
    <div className="App">
      <img
        onClick={toggleSound}
        className="sound-icon"
        src={soundOn ? muteIcon : soundIcon}
      ></img>
      <audio ref={audioRef} src={spaceJazz}></audio>
      <div className="number">{count}</div>
      <div className="buttons-container">
        <div onClick={addOne} className="counter-button">+1</div>
        <div onClick={multiplyByTwo} className="counter-button blue">x2</div>
      </div>
    </div>
  );
}

export default App;