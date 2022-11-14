import { Typograph } from "../Typograph";

import "./main.css";
import { Form } from "../Form";

export const Main = () => {
  return (
    <div className="main">
      <Typograph
        typographClass={"main-typograph"}
        text={"Simule sua Antecipação"}
      />

      <Form />
    </div>
  );
};
