import React from "react";
import "./style.css"

function SobreMim() {
    return (
        <div className="sobreMim-container">
            <div className="sobreMim-Box">
                <span className="sobreMim"> Sobre Mim</span>
                <p className="conteudo-sobreMim">
                    Possuo experiência com desenvolvimento FullStack utilizando, Node.js e React.js, já trabalhei no back-end com criações de API REST utilizando Express.js, banco de dados não relacionais como MongoDB e relacionais como o MySQL.
                    No front-end tenho conhecimento em React.js com compentização, integrações de API, API Context, validações e desenvolvimento de layouts com HTML e CSS.
                </p>
                <div className="sobreMim-buttons">
                    <a href="#meusprojetos-h1" rel="noopener"><button>Meus Projetos</button></a>
                    <a href="#contatos-h3" rel="noopener"><button>Entrar em Contato</button></a>
                </div>
            </div>
        </div>
    )
}

export default SobreMim