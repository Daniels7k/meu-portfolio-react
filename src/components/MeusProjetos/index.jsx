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
                            <a href="https://blog-app445.herokuapp.com/" rel="noreferrer" target="_blank"><button>Demonstração</button></a> 
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

                    <div className="projeto">
                        <h1>Portfólio em React</h1>
                        <img className="projeto-img" src="https://camo.githubusercontent.com/6a7d1fd5906a302fedd0006eea4d0e434bb5048ab8ed346b15ea47eacdc1d809/68747470733a2f2f696d616765732e756e73706c6173682e636f6d2f70686f746f2d313633333335363132323130322d3366653630316530356264323f69786c69623d72622d312e322e3126697869643d4d6e77784d6a4133664442384d48787761473930627931775957646c66487838664756756644423866487838266175746f3d666f726d6174266669743d63726f7026773d3131373026713d3830" alt="React Portifolio" />
                        <p className="meusProjetos-desc">JavaScript, React</p>
                        <div className="projeto-buttons">
                            <a href="https://github.com/Daniels7k/meu-portfolio-react" rel="noreferrer" target="_blank"><button>Saiba Mais</button></a>
                            <a href="#header-container"><button >Demonstração</button></a>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default MeusProjetos