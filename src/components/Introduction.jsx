import React from "react";
import mapaImg from "../images/mapa-brasil.png"

const Introduction=()=>{
    return(
        <main className="container introduction">
            <div className="introduction-content d-flex-column g-20">
                <h1 className="title">Buscas de CEP’s e endereços</h1>
                <p className="text">
                Se você está procurando um serviço confiável e conveniente para descobrir o CEP de um determinado endereço ou encontrar o endereço a partir do CEP, você veio ao lugar certo. LocalizaCep é uma plataforma dedicada a fornecer informações precisas e atualizadas sobre Códigos de Endereçamento Postal (CEP) em todo o Brasil.
                </p>
            </div>
            <div className="introduction-img d-flex">
                <img src={mapaImg} alt="Mapa do Brasil" />
            </div>

        </main>
    )
}

export default Introduction;