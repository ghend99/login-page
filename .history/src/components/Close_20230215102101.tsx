export const Close = () => {
  const style = () => {
    position: absolute;
  display: flex;
  right: 10px;
  padding-top: 8px;
  padding-bottom: 8px;
  width: 25px;
  cursor: pointer;
  };

  return (
    <img
      className="header-create--close"
      src={require("../images/Close.png")}
    />
  );
};
