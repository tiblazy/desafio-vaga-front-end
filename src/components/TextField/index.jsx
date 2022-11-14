import { Input } from "../Input";
import { Typograph } from "../Typograph";

export const TextField = ({
  textFieldClass,
  typographClass,
  text,
  textInstallments = false,
  inputName,
}) => {
  return (
    <>
      {textInstallments ? (
        <div className={textFieldClass}>
          <Typograph typographClass={typographClass} text={text} />
          <Input type={"number"} inputName={inputName} />

          <Typograph
            typographClass={"main_label--installments"}
            text={"Máximo de 12 parcelas"}
          />
        </div>
      ) : (
        <div className={textFieldClass}>
          <Typograph typographClass={typographClass} text={text} />
          <Input type={"number"} inputName={inputName} />
        </div>
      )}
    </>
  );
};
