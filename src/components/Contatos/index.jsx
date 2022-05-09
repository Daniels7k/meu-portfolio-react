import React from "react";
import "./style.css"




function Contatos() {
    return (
        <>
            <h3 id="contatos-h3" className="contatos-h3">Entre em Contato</h3>
            <div className="contatos-container">

                <a className="contatos-box" href="https://www.linkedin.com/in/daniels7k/" target="_blank" rel="noreferrer">
                    <img className="contatos-icon" src="https://www.freeiconspng.com/uploads/displaying-19-gallery-images-for-linkedin-logo-png-25.png" alt="Linkedin" />
                </a>


                <a className="contatos-box" href="https://github.com/Daniels7k" target="_blank" rel="noreferrer">
                    <img className="contatos-icon" src="https://img.icons8.com/glyph-neue/344/ffffff/github.png" alt="" />
                </a>

            </div>
            <h1 className="contatos-h1">Isso é tudo</h1>

            <div className="contatos-action">
                <a href="#header-container"><button className="voltar-para-cima">Voltar para Cima</button></a>
            </div>
            

        </>
    )
}

export default Contatos