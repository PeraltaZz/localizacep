import React, { useState } from "react";

const DescobrirEndereco= () => {
    const [cep, setCep] = useState("");
    const [buttonClicked, setButtonClicked] = useState(false);
  
    const buscarEndereco = (e) => {
      e.preventDefault();
      setButtonClicked(true);
    };
  
    const cepChange = (e) => {
      setCep(e.target.value);
      setButtonClicked(false);
    };
  
    return (
      <div className="descobrir-endereco d-flex-column g-30">
        <form className="d-flex-column g-30">
          <div className="form-row">
            <label htmlFor="cep">CEP</label>
            <input
              className="input-style"
              type="text"
              name="cep"
              id="cep"
              value={cep}
              onChange={cepChange}
            />
          </div>
          <button className="button-style" onClick={buscarEndereco}>
            CONSULTAR
          </button>
        </form>
       
      </div>
    );
  };
  
  export default DescobrirEndereco;
  