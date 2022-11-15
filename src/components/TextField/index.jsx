import "./textfield.css";

export const TextField = ({ children, textInstallments = false }) => {
  return (
    <>
      {textInstallments ? (
        <div className={"text-field--intallments"}>{children}</div>
      ) : (
        <div className={"text-field"}>{children}</div>
      )}
    </>
  );
};
