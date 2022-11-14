import { Input } from "../Input";
import { Typograph } from "../Typograph";

export const TextField = ({
  textFieldClass,
  typographClass,
  text,
  textInstallments = false,
}) => {
  return (
    <>
      {textInstallments ? (
        <div className={textFieldClass}>
          <Typograph typographClass={typographClass} text={text} />
          <Input type={"number"} installments={true} />

          <Typograph
            typographClass={"main_label--installments"}
            text={"Máximo de 12 parcelas"}
          />
        </div>
      ) : (
        <div className={textFieldClass}>
          <Typograph typographClass={typographClass} text={text} />
          <Input type={"number"} />
        </div>
      )}
    </>
  );
};
