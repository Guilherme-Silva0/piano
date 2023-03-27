import PianoStyles from "./Piano.styles";
import Key from "./../Key";
import SharpKey from "./../SharpKey";

const Piano = () => (
  <PianoStyles>
    <Key dataNote="Do" />
    <SharpKey dataNote="Do#" />
    <Key dataNote="Re" />
    <SharpKey dataNote="Re#" />
    <Key dataNote="Mi" />
    <Key dataNote="Fa" />
    <SharpKey dataNote="Fa#" />
    <Key dataNote="Sol" />
    <SharpKey dataNote="Sol#" />
    <Key dataNote="la" />
    <SharpKey dataNote="la#" />
    <Key dataNote="Si" />
  </PianoStyles>
);

export default Piano;
