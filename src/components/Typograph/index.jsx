import "./typograph.css";

export const Typograph = ({ typographClass, text }) => {
  return <p className={typographClass}>{text}</p>;
};
