export const CardStyles = (
  messageBoxOnBottom: boolean,
  showBox: boolean,
  customStyle = {}
) => ({
  position: "absolute",
  left: "20px",
  bottom: "-5px",
  width: "fit-content",
  transform: `translate(0, ${messageBoxOnBottom ? 100 : 0}%)`,
  transition: "all 0.7s ease",
  height: "fit-content",
  opacity: showBox ? 100 : 0,
  cursor: showBox ? "auto" : "default",
  ...customStyle,
});

export const CardContentStyles = {
  padding: "10px 20px",
  backgroundColor: "rgb(255 0 0 / 27%)",
  color: "red",
};
