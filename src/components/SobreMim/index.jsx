import React from "react";
import "./style.css"

function SobreMim() {
    return (
        <div className="sobreMim-container">
            <div className="sobreMim-Box">
                <span className="sobreMim"> Sobre Mim</span>
                <p className="conteudo-sobreMim">
                    Desenvolvo aplicações em FullStack a mais de 1 ano, utilizando tecnologias como JavaScript, HTML CSS, Node.JS, Express.js, MongoDB, Mysql e outras bibliotecas,
                    já colaborei também com traduções do inglês para o português em projetos open-source no github.
                    Possuo flexibilidade para aprender em pouco tempo qualquer outra tecnologia que me for dada. 
                    Dê uma olhada em meus trabalhos no meu repositório no Gibhub, eles são bem elaborados, comentados e possuem imagens para facilitar a visualização.
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