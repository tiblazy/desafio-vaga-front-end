export const mask = (input, func) => {
  const vInput = input;
  const vFunc = func;
};

export const runMask = (vInput, vFunc) => (vInput.value = vFunc(vInput.value));

export const currency = (input) =>
  (input = input.replace(/(\d)(\d{2})$/, "$1,$2"));
