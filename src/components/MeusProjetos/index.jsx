import React from "react";
import "./style.css"


function MeusProjetos() {
    return (
        <>
            <h1 id="meusprojetos-h1" className="meusprojetos-h1">Meus Projetos</h1>
            <div className="meusProjetos-container">
                <div className="projetos-box">
                    <div className="projeto">
                        <h1>Web Site Generator</h1>
                        <img className="projeto-img" src="https://raw.githubusercontent.com/Daniels7k/Assets/main/assets/WebSiteGenerator/WebsiteGenerator.png" alt="WebSiteGenerator" />
                        <p className="meusProjetos-desc">JavaScript, Node.js, Express.js, MongoDB</p>
                        <div className="projeto-buttons">
                            <a href="https://github.com/Daniels7k/WebSiteGenerator" target="_blank" rel="noreferrer"> <button>Saiba Mais</button> </a>
                            <a href="https://web-site-generator.herokuapp.com/bem-vindo" target="_blank" rel="noreferrer"><button>Demonstração</button></a>
                        </div>
                    </div>

                    <div className="projeto">
                        <h1>Blog App</h1>
                        <img className="projeto-img" src="https://raw.githubusercontent.com/Daniels7k/Assets/main/assets/blogapp/frotnite%20text%202.png" alt="BlogApp" />
                        <p className="meusProjetos-desc">JavaScript, Node.js, Express.js, MongoDB</p>
                        <div className="projeto-buttons">
                            <a href="https://github.com/Daniels7k/BlogApp" rel="noreferrer" target="_blank"><button>Saiba Mais</button></a>
                            <button>Demonstração</button>
                        </div>
                    </div>
                </div>

                <div className="projetos-box">
                    <div className="projeto">
                        <h1>APi REST Login / Registro</h1>
                        <img className="projeto-img" src="https://raw.githubusercontent.com/Daniels7k/Assets/main/assets/API%20REST%20Banner.png" alt="API REST" />
                        <p className="meusProjetos-desc">JavaScript, Node.js, Express.js, MongoDB, API REST</p>
                        <div className="projeto-buttons">
                            <a href="https://github.com/Daniels7k/ApiRest-Registro-e-Login" rel="noreferrer" target="_blank"><button>Saiba Mais</button></a>
                            {/* <button disabled>Demonstração</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MeusProjetos