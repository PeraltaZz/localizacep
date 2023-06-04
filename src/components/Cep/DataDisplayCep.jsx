import React, { useState, useEffect } from "react";

const DataDisplayCep = ({ rua, cidade, estado, buttonClicked }) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [cepList, setCepList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (!rua || !cidade || !estado) {
        setError("Por favor, preencha todos os campos");
        return;
      }

      const url = `https://viacep.com.br/ws/${estado}/${cidade}/${rua}/json/`;

      setLoading(true);
      setError(null);
      setCepList([]);

      try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.length === 0) {
          setError("Nenhum CEP encontrado.");
        } else {
          setCepList(data);
        }
      } catch (fetchError) {
        setError("Ocorreu um erro ao buscar os CEPs.");
      } finally {
        setLoading(false);
      }
    };

    if (buttonClicked) {
      fetchData();
    }
  }, [buttonClicked]);

  return (
    <>
      {loading && <p className="text-m">Carregando...</p>}
      {error && <p className="text-m">{error}</p>}
      <div className="tabela-cep">
        {cepList.length > 0 && (
          <table>
            <thead>
              <tr>
                <th className="hide">Rua</th>
                <th>Bairro</th>
                <th className="hide">Cidade</th>
                <th className="hide">UF</th>
                <th>CEP</th>
                <th>Visualizar</th>
              </tr>
            </thead>
            <tbody>
              {cepList.map((cep) => (
                <tr key={cep.cep}>
                  <td className="hide">{cep.logradouro}</td>
                  <td>{cep.bairro}</td>
                  <td className="hide">{cep.localidade}</td>
                  <td className="hide">{cep.uf}</td>
                  <td>{cep.cep}</td>
                  <td>
                    <a
                      className="button-style"
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                        `${cep.logradouro}, ${cep.bairro}, ${cep.localidade}, ${cep.uf}, ${cep.cep}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Maps
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default DataDisplayCep;
