import React, { useState, useEffect } from "react";

const DataDisplayEndereco = ({ cep, buttonClicked }) => {
  const [endereco, setEndereco] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async (cepValue) => {
      if (cepValue.length !== 8) {
        setError("invalidCep");
        setEndereco("");
        return;
      }
      setError(false);
      setEndereco("");
      setLoading(true);
      try {
        const response = await fetch(
          `https://viacep.com.br/ws/${cepValue}/json/`
        );
        const data = await response.json();
        if ("erro" in data) {
          setError("invalidAddress");
        } else {
          setEndereco(
            `${data.logradouro} - ${data.bairro} - ${data.localidade} - ${data.uf}`
          );
        }
      } catch (fetchError) {
        setError("fetchError");
      } finally {
        setLoading(false);
      }
    };

    const cepValue = cep.replace(/[.-]/g, "");

    if (buttonClicked) {
      fetchData(cepValue);
    }
  }, [buttonClicked]);

  let errorMessage;
  if (error === "invalidCep") {
    errorMessage = "O CEP inserido não é válido (8 dígitos).";
  } else if (error === "invalidAddress") {
    errorMessage = "O endereço não foi encontrado.";
  } else if (error === "fetchError") {
    errorMessage = "Ocorreu um erro ao buscar o endereço, recarregue a página";
  }

  return (
    <>
      {loading && <p className="text-m">Carregando...</p>}
      {errorMessage ? (
        <p className="text-m">{errorMessage}</p>
      ) : (
        <p className="text-m">{endereco}</p>
      )}
      {endereco && (
        <div className="endereco-infos d-flex-column g-30">
          <a
            rel="noopener noreferrer"
            className="button-style"
            target="_blank"
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              endereco
            )}`}
          >
            Maps
          </a>
        </div>
      )}
    </>
  );
};

export default DataDisplayEndereco;
