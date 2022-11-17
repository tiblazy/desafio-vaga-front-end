import { useContext } from "react";
import { ChallengeContext } from "../../contexts/challenge";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { CalculateSchema } from "../../schemas";

import { TextField } from "../TextField";
import { Typograph } from "../Typograph";
import { Error } from "../Error";

import "../Main/main.css";
import "./form.css";
import "../Input/input.css";

export const Form = () => {
  const { calculate } = useContext(ChallengeContext);

  const formSchema = CalculateSchema();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const handleOnSubmit = (data) => {
    const { amount, installments, mdr, days } = data;
    const listDays = [];

    if (days)
      for (let i = 0; i < installments; i++) {
        listDays.push(Number(i + 1) * 30);
      }

    days
      ? calculate({
          amount,
          installments,
          mdr,
          days: listDays,
        })
      : calculate({
          amount,
          installments,
          mdr,
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
          placeholder="R$ 1.000,00"
          {...register("amount")}
        />
        <Error>{errors.amount?.message}</Error>
      </TextField>

      <TextField textInstallments={true}>
        <Typograph
          textFieldClass={"text-field--installments"}
          typographClass={"main__label"}
          text={"Em quantas parcelas *"}
        />
        <input
          className="label__input label__input--installments"
          type="number"
          placeholder="3"
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
          placeholder="4"
          {...register("mdr")}
        />
        <Error>{errors.mdr?.message}</Error>
      </TextField>

      <TextField textBox={true}>
        <Typograph
          textFieldClass={"text-field"}
          typographClass={"main__label main__label--checkbox"}
          text={"Informações de período"}
        />
        <input type="checkbox" {...register("days")} />
      </TextField>

      <button type="submit" hidden />
    </form>
  );
};
