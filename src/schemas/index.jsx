import * as yup from "yup";

export const CalculateSchema = () => {
  const schema = yup.object().shape({
    amount: yup
      .number()
      .integer()
      .typeError("Campo obrigatório")
      .min(1000, "Valor mínimo: 1000")
      .max(100000000, "Valor máximo: 100000000")
      .required("Campo obrigatório"),
    installments: yup
      .number()
      .integer()
      .typeError("Campo obrigatório")
      .min(1, "Valor mínimo: 1")
      .max(12, "Valor máximo: 12")
      .required("Campo obrigatório"),
    mdr: yup
      .number()
      .integer()
      .typeError("Campo obrigatório")
      .max(99, "Valor máximo: 99")
      .required("Campo obrigatório"),
    days: yup.boolean().notRequired(),
  });

  return schema;
};
