import PanelStyles from "./Panel.styles";

const Panel = ({ children }) => {
  return (
    <PanelStyles>
      <p>{children}</p>
    </PanelStyles>
  );
};

export default Panel;
