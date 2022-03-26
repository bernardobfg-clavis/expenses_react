import "./styles.css";
export const Card = ({ children, className }) => {
  const classes = `${className} card`;
  return <div className={classes}>{children}</div>;
};
