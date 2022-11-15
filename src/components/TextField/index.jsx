import "./textfield.css";

export const TextField = ({
  children,
  textInstallments = false,
  textBox = false,
}) => {
  return (
    <>
      {textInstallments ? (
        <div className={"text-field--intallments"}>{children}</div>
      ) : textBox ? (
        <div className={"text-field--checkbox"}>{children}</div>
      ) : (
        <div className={"text-field"}>{children}</div>
      )}
    </>
  );
};
