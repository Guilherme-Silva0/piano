import RotateScreenStyles from "./RotateScreen.styles";
import screenRotateImg from "./../../assets/screen-rotate.png";

const RotateScreen = () => {
  return (
    <RotateScreenStyles>
      <img src={screenRotateImg} alt="rotate screen" />
      <p>Para uma melhor experiência, recomendamos que gire sua tela.</p>
    </RotateScreenStyles>
  );
};

export default RotateScreen;
