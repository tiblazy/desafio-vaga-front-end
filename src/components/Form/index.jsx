import { useState, useContext } from "react";
import { ChallengeContext } from "../../contexts/challenge";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { calculateSchema } from "../../schemas";

import { TextField } from "../TextField";
import { Typograph } from "../Typograph";
import { Error } from "../Error";

import "./form.css";
import "../Input/input.css";

export const Form = () => {
  const [amount, setAmount] = useState(0);
  const [installments, setInstallments] = useState(0);
  const [mdr, setMdr] = useState(0);
  const [days, setDays] = useState([]);

  const { calculate } = useContext(ChallengeContext);

  const formSchema = calculateSchema();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const handleOnSubmit = (data) => {
    setAmount(data.amount);
    // setInstallments(data.installments);
    // setMdr(data.mdr);
    // setDays(data.days);

    console.log(data);

    // calculate({
    //   amount: data.amount,
    //   installments: 4,
    //   mdr: 3,
    // });
    calculate({
      amount,
      installments: 3,
      mdr: 4,
      days: [30, 60, 90, 120, 150, 300],
    });
  };

  return (
    <form className="main__form" onSubmit={handleSubmit(handleOnSubmit)}>
      <TextField text={"Informe o valor da venda *"}>
        <Typograph
          textFieldClass={"text-field"}
          typographClass={"main__label"}
          text={"Informe o valor da venda *"}
        />
        <input
          className="label__input"
          type="number"
          name="amount"
          {...register("amount")}
        />
        <Error>{errors.amount?.message}</Error>
      </TextField>
      {/* 
      <TextField textInstallments={true}>
        <Typograph
          textFieldClass={"text-field--installments"}
          typographClass={"main__label"}
          text={"Em quantas parcelas *"}
        />
        <input
          className="label__input label__input--installments"
          type="number"
          name="installments"
          {...register("installments")}
        />
        <Typograph
          typographClass={"main_label--installments"}
          text={"Máximo de 12 parcelas"}
        />
        <Error>{errors.installments?.message}</Error>
      </TextField>

      <TextField>
        <Typograph
          textFieldClass={"text-field"}
          typographClass={"main__label"}
          text={"Informe percentual de MDR *"}
        />
        <input
          className="label__input"
          type="number"
          name="mdr"
          {...register("mdr")}
        />
        <Error>{errors.mdr?.message}</Error>
      </TextField> */}
    </form>
  );
};
