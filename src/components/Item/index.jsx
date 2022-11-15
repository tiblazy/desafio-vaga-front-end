import "../Typograph/typograph.css";

export const Item = ({ item }) => {
  const toCurrency = (currency) =>
    new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(currency);

  return (
    <>
      {item[0] === "1" ? (
        <>
          <span className="side-bar-typograph side-bar__day">"Amanhã: "</span>
          <span className="side-bar-typograph side-bar__results">
            {`${toCurrency(item[1])}`}
          </span>
        </>
      ) : (
        <>
          <span className="side-bar-typograph side-bar__day">{`Em ${item[0]} dias: `}</span>
          <span className="side-bar-typograph side-bar__results">
            {`${toCurrency(item[1])}`}
          </span>
        </>
      )}
    </>
  );
};
