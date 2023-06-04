import React, { useState } from "react";
import DescobrirCep from "./Cep/DescobrirCep";
import DescobrirEndereco from "./Endereco/DescobrirEndereco";

const Forms = () => {
  const [activeButton, setActiveButton] = useState("cep");

  const buttonClick = (buttonType) => setActiveButton(buttonType);

  const buttonOptions = {
    cep: {
      text: "CEP",
      className: activeButton === "cep" ? "active" : "",
    },
    endereco: {
      text: "ENDEREÇO",
      className: activeButton === "endereco" ? "active" : "",
    },
  };

  const Button = ({ text, className, onClick }) => (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );

  return (
    <section className="search container d-flex-column">
      <div className="form-card d-flex-column g-30">
        <div className="d-flex g-20">
        <Button
          text={buttonOptions.cep.text}
          className={`button-style ${buttonOptions.cep.className}`}
          onClick={() => buttonClick("cep")}
        />

        <Button
          text={buttonOptions.endereco.text}
          className={`button-style ${buttonOptions.endereco.className}`}
          onClick={() => buttonClick("endereco")}
        />
        </div>
        {activeButton === "cep" && <DescobrirCep/>}
        {activeButton === "endereco" && <DescobrirEndereco/>}
      </div>
    </section>
  );
};

export default Forms;
