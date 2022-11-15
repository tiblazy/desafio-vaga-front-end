import { createContext, useState } from "react";
import { apiChallenge } from "../services/axios";

export const ChallengeContext = createContext();

export const ChallengeProvider = ({ children }) => {
  const [results, setResults] = useState(null);

  const calculate = (data) =>
    apiChallenge.post("", data).then((res) => setResults(res.data));

  return (
    <ChallengeContext.Provider
      value={{
        calculate,
        results,
      }}
    >
      {children}
    </ChallengeContext.Provider>
  );
};
