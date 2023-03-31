import ConfirmStyles from "./Confirm.styles";

const Confirm = ({ handleAudioContext }) => {
  return (
    <ConfirmStyles>
      <div>
        <h1>Autorização</h1>
        <p>
          Por padrão, os navegadores modernos não permitem a reprodução de audio
          automática, a fim de evitar desconfortos aos usuários. Portanto, você
          precisará autorizar a reprodução de áudio para ouvir as teclas sendo
          tocadas. Fique tranquilo, o único som que será reproduzido será o do
          piano virtual.
        </p>
        <button onClick={handleAudioContext}>Confirmar</button>
      </div>
    </ConfirmStyles>
  );
};

export default Confirm;
