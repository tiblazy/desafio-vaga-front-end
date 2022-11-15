import { useState, useEffect, useContext } from "react";
import { ChallengeContext } from "../../contexts/challenge";

import { Item } from "../Item";

import "./list.css";

export const List = () => {
  const { results } = useContext(ChallengeContext);
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    if (results !== null) {
      setEntries([...Object.entries(results)]);
    }
  }, [results]);

  return results ? (
    <ul className="days__list">
      {results &&
        entries.map((item) => (
          <li key={item[0]}>
              <Item item={item}/>
          </li>
        ))}
    </ul>
  ) : (
    <ul className="days__list" />
  );
};
