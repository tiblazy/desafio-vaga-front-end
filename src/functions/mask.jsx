export const currencyMask = (input) => {
  const currentInput = input.replace(/[^\d]+/g, "");

  if (currentInput.length <= 5) {
    return `R$ ${currentInput.replace(/(\d)(\d{2})$/, "$1,$2")}`;
  }
  return `R$ ${currentInput.replace(/(\d)(\d{3})(\d{2})$/, "$1.$2,$3")}`;
};

export const toInteger = (input) =>
  Number(input.replace(/[^\d]+/g, "").slice(0, -2));
