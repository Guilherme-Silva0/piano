import Piano from "./components/Piano";

const App = () => {
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

  const playNote = (note) => {
    let context = new AudioContext();
    let oscillator = context.createOscillator();

    oscillator.frequency.value = musicalNotes[note].frequency;

    let volume = context.createGain();
    volume.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 4);

    oscillator.connect(volume);
    volume.connect(context.destination);

    oscillator.type = "triangle";
    oscillator.start();
  };

  return (
    <>
      <Piano />
    </>
  );
};

export default App;
