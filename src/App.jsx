import React, { useState, useEffect } from "react";
import Piano from "./components/Piano";

const musicalNotes = {
  Do: { frequency: 261.625519 },
  "Do#": { frequency: 277.182648 },
  Re: { frequency: 293.664734 },
  "Re#": { frequency: 311.126984 },
  Mi: { frequency: 329.627533 },
  Fa: { frequency: 349.228241 },
  "Fa#": { frequency: 369.994385 },
  Sol: { frequency: 391.995392 },
  "Sol#": { frequency: 415.304688 },
  La: { frequency: 440.0 },
  "La#": { frequency: 466.163788 },
  Si: { frequency: 493.883301 },
};

const keyToButtonMap = {
  a: "Do",
  w: "Do#",
  s: "Re",
  e: "Re#",
  d: "Mi",
  f: "Fa",
  t: "Fa#",
  g: "Sol",
  y: "Sol#",
  h: "La",
  u: "La#",
  j: "Si",
};

let audioContext = null;

const App = () => {
  const [audioActived, setAudioActived] = useState(null);
  const [isPressedKeys, setIsPressedKeys] = useState({});
  const [pressedKey, setPressedKey] = useState("");

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [isPressedKeys]);

  const playNote = (note) => {
    if (!audioContext) return;

    const oscillator = audioContext.createOscillator();
    oscillator.frequency.value = musicalNotes[note].frequency;

    const volume = audioContext.createGain();
    volume.gain.exponentialRampToValueAtTime(
      0.00001,
      audioContext.currentTime + 4
    );

    volume.gain.value = 0.6;

    oscillator.connect(volume);
    volume.connect(audioContext.destination);

    oscillator.type = "triangle";
    oscillator.start();
    console.log("eita");

    setTimeout(() => {
      oscillator.stop();
    }, 4000);
  };

  const handleAudioContext = () => {
    if (!audioContext) {
      audioContext = new AudioContext();
      setAudioActived(true);
    }

    if (audioContext.state === "suspended") {
      audioContext.resume();
      setAudioActived(true);
    }
  };

  const handleKeyDown = (e) => {
    if (
      !keyToButtonMap[e.key.toLowerCase()] ||
      isPressedKeys[e.key.toLowerCase()]
    )
      return;
    setIsPressedKeys((prevState) => ({
      ...prevState,
      [e.key.toLowerCase()]: true,
    }));
    playNote(keyToButtonMap[e.key.toLowerCase()]);
  };

  const handleKeyUp = (e) => {
    if (!keyToButtonMap[e.key.toLowerCase()]) return;
    setIsPressedKeys((prevState) => ({
      ...prevState,
      [e.key.toLowerCase()]: false,
    }));
    setPressedKey(e.key.toLowerCase());
  };

  return (
    <>
      {!audioActived ? (
        <button onClick={handleAudioContext}>Start Audio</button>
      ) : (
        <Piano playNote={playNote} pressedKey={pressedKey} />
      )}
    </>
  );
};

export default App;
