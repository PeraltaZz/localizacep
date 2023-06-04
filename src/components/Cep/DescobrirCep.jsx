import React, { useState } from "react";
import DataDisplayCep from "./DataDisplayCep";

const DescobrirCep = () => {
  const [rua, setRua] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [buttonClicked, setButtonClicked] = useState(false);

  const buscarEndereco = (e) => {
    e.preventDefault();
    setButtonClicked(true);
  };

  function inputChange() {
    setButtonClicked(false);
  }

  return (
    <div className="descobrir-cep d-flex-column g-20">
      <form>
        <div className="form-row">
          <label htmlFor="rua">Rua</label>
          <input
            className="input-style"
            type="text"
            name="rua"
            id="rua"
            value={rua}
            onChange={(e) => {
              setRua(e.target.value);
              inputChange();
            }}
          />
        </div>
        <div className="form-row">
          <label htmlFor="cidade">Cidade</label>
          <input
            className="input-style"
            type="text"
            name="cidade"
            id="cidade"
            value={cidade}
            onChange={(e) => {
              setCidade(e.target.value);
              inputChange();
            }}
          />
        </div>
        <div className="form-row">
          <label htmlFor="estado">Estado</label>
          <select
            className="input-style"
            name="estado"
            id="estado"
            value={estado}
            onChange={(e) => {
              setEstado(e.target.value);
              inputChange();
            }}
          >
            <option value="">Selecione um estado</option>
            <option value="AC">Acre</option>
            <option value="AL">Alagoas</option>
            <option value="AP">Amapá</option>
            <option value="AM">Amazonas</option>
            <option value="BA">Bahia</option>
            <option value="CE">Ceará</option>
            <option value="DF">Distrito Federal</option>
            <option value="ES">Espírito Santo</option>
            <option value="GO">Goiás</option>
            <option value="MA">Maranhão</option>
            <option value="MT">Mato Grosso</option>
            <option value="MS">Mato Grosso do Sul</option>
            <option value="MG">Minas Gerais</option>
            <option value="PA">Pará</option>
            <option value="PB">Paraíba</option>
            <option value="PR">Paraná</option>
            <option value="PE">Pernambuco</option>
            <option value="PI">Piauí</option>
            <option value="RJ">Rio de Janeiro</option>
            <option value="RN">Rio Grande do Norte</option>
            <option value="RS">Rio Grande do Sul</option>
            <option value="RO">Rondônia</option>
            <option value="RR">Roraima</option>
            <option value="SC">Santa Catarina</option>
            <option value="SP">São Paulo</option>
            <option value="SE">Sergipe</option>
            <option value="TO">Tocantins</option>
          </select>
        </div>
        <button className="button-style" onClick={buscarEndereco}>
          CONSULTAR
        </button>
      </form>

      <DataDisplayCep
        rua={rua}
        cidade={cidade}
        estado={estado}
        buttonClicked={buttonClicked}
      />
    </div>
  );
};
export default DescobrirCep;
