import { useContext } from "react";
import { ChallengeContext } from "../../contexts/challenge";

import "./input.css";

export const Input = ({ type, inputName }) => {
  const { setAmount, setInstallments, setMdr } = useContext(ChallengeContext);

  return (
    <>
      {inputName === "installments" ? (
        <input
          name={inputName}
          className="label__input label__input--installments"
          type={type}
          onChange={(event) =>
            event.target.value >= 1 &&
            event.target.value <= 12 &&
            setInstallments(event.target.value)
          }
        ></input>
      ) : inputName === "amount" ? (
        <input
          name={inputName}
          className="label__input"
          type={type}
          onChange={(event) => setAmount(event.target.value)}
        ></input>
      ) : (
        <input
          name={inputName}
          className="label__input"
          type={type}
          onChange={(event) => setMdr(event.target.value)}
        ></input>
      )}
    </>
  );
};
