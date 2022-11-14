import { Typograph } from "../Typograph";
import { Form } from "../Form";

import "./main.css";

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
