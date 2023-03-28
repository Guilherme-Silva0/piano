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

const App = () => {
  const [audioContext, setAudioContext] = useState(null);

  useEffect(() => {
    const context = new AudioContext();
    setAudioContext(context);

    return () => {
      context.close();
    };
  }, []);

  const playNote = (note) => {
    if (!audioContext) return;

    const oscillator = audioContext.createOscillator();
    oscillator.frequency.value = musicalNotes[note].frequency;

    const volume = audioContext.createGain();
    volume.gain.exponentialRampToValueAtTime(
      0.00001,
      audioContext.currentTime + 4
    );

    oscillator.connect(volume);
    volume.connect(audioContext.destination);

    oscillator.type = "triangle";
    oscillator.start();

    setTimeout(() => {
      oscillator.stop();
    }, 4000);
  };

  return (
    <>
      <Piano playNote={playNote} />
    </>
  );
};

export default App;
