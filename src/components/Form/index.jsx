import { TextField } from "../TextField";

import "../FlexContainer/flexcontainer.css";
import "./form.css";

export const Form = () => {
  return (
    <form className="main__form">
      <TextField
        textFieldClass={"text-field"}
        typographClass={"main__label"}
        text={"Informe o valor da venda *"}
        inputName={"amount"}
      />
      <TextField
        textFieldClass={"text-field--installments"}
        typographClass={"main__label"}
        text={"Em quantas parcelas *"}
        textInstallments={true}
        inputName={"installments"}
      />
      <TextField
        textFieldClass={"text-field"}
        typographClass={"main__label"}
        text={"Informe  percentual de MDR *"}
        inputName={"mdr"}
      />
    </form>
  );
};
