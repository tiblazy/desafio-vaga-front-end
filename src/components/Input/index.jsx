import "./input.css";

export const Input = ({ type, installments = false }) => {
  return (
    <>
      {installments ? (
        <input
          className="label__input label__input--installments"
          type={type}
          // validação de 1 à 12
        ></input>
      ) : (
        <input className="label__input" type={type}></input>
      )}
    </>
  );
};
