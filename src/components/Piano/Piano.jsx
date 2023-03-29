import PianoStyles from "./Piano.styles";
import Key from "./../Key";
import SharpKey from "./../SharpKey";

const Piano = ({ playNote }) => (
  <PianoStyles>
    <Key dataNote="Do" onClick={(e) => playNote(e.target.dataset.note)} />
    <SharpKey dataNote="Do#" onClick={(e) => playNote(e.target.dataset.note)} />
    <Key dataNote="Re" onClick={(e) => playNote(e.target.dataset.note)} />
    <SharpKey dataNote="Re#" onClick={(e) => playNote(e.target.dataset.note)} />
    <Key dataNote="Mi" onClick={(e) => playNote(e.target.dataset.note)} />
    <Key dataNote="Fa" onClick={(e) => playNote(e.target.dataset.note)} />
    <SharpKey dataNote="Fa#" onClick={(e) => playNote(e.target.dataset.note)} />
    <Key dataNote="Sol" onClick={(e) => playNote(e.target.dataset.note)} />
    <SharpKey
      dataNote="Sol#"
      onClick={(e) => playNote(e.target.dataset.note)}
    />
    <Key dataNote="La" onClick={(e) => playNote(e.target.dataset.note)} />
    <SharpKey dataNote="La#" onClick={(e) => playNote(e.target.dataset.note)} />
    <Key dataNote="Si" onClick={(e) => playNote(e.target.dataset.note)} />
  </PianoStyles>
);

export default Piano;
