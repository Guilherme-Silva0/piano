import PianoStyles from "./Piano.styles";
import Panel from "../Panel";
import Key from "./../Key";
import SharpKey from "./../SharpKey";

const Piano = ({ playNote, pressedKey }) => (
  <PianoStyles>
    <Panel>{pressedKey !== "" ? pressedKey : "♫"}</Panel>
    <div className="keys-container">
      <Key dataNote="Do" onClick={(e) => playNote(e.target.dataset.note)}>
        A
      </Key>
      <SharpKey dataNote="Do#" onClick={(e) => playNote(e.target.dataset.note)}>
        W
      </SharpKey>
      <Key dataNote="Re" onClick={(e) => playNote(e.target.dataset.note)}>
        S
      </Key>
      <SharpKey dataNote="Re#" onClick={(e) => playNote(e.target.dataset.note)}>
        E
      </SharpKey>
      <Key dataNote="Mi" onClick={(e) => playNote(e.target.dataset.note)}>
        D
      </Key>
      <Key dataNote="Fa" onClick={(e) => playNote(e.target.dataset.note)}>
        F
      </Key>
      <SharpKey dataNote="Fa#" onClick={(e) => playNote(e.target.dataset.note)}>
        T
      </SharpKey>
      <Key dataNote="Sol" onClick={(e) => playNote(e.target.dataset.note)}>
        G
      </Key>
      <SharpKey
        dataNote="Sol#"
        onClick={(e) => playNote(e.target.dataset.note)}
      >
        Y
      </SharpKey>
      <Key dataNote="La" onClick={(e) => playNote(e.target.dataset.note)}>
        H
      </Key>
      <SharpKey dataNote="La#" onClick={(e) => playNote(e.target.dataset.note)}>
        U
      </SharpKey>
      <Key dataNote="Si" onClick={(e) => playNote(e.target.dataset.note)}>
        J
      </Key>
    </div>
  </PianoStyles>
);

export default Piano;
