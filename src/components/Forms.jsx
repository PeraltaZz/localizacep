import React, { useState } from "react";

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

  return(
    <section className="search container d-flex-column">
        <div className="form-card d-flex-column g-30">
        <Button
          text={buttonOptions.cep.text}
          className={`button-style ${buttonOptions.cep.className}`}
          onClick={() => handleButtonClick("cep")}
        />
        </div>
        <Button
          text={buttonOptions.endereco.text}
          className={`button-style ${buttonOptions.endereco.className}`}
          onClick={() => handleButtonClick("endereco")}
        />
    </section>

  )
};

export default Forms;