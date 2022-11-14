import { createContext, useState } from "react";
import { apiChallenge } from "../services/axios";

export const ChallengeContext = createContext();

export const ChallengeProvider = ({ children }) => {
  const [amount, setAmount] = useState(0);
  const [installments, setInstallments] = useState(1);
  const [mdr, setMdr] = useState(0);
  const [days, setDays] = useState([]);

  const withOutDays = () => {
    apiChallenge.post("", { amount, installments, mdr });
  };

  const withDays = () => {
    apiChallenge.post("", { amount, installments, mdr, days });
  };

  return (
    <ChallengeContext.Provider
      value={{
        amount,
        setAmount,
        installments,
        setInstallments,
        mdr,
        setMdr,
        days,
        setDays,
        withOutDays,
        withDays,
      }}
    >
      {children}
    </ChallengeContext.Provider>
  );
};
