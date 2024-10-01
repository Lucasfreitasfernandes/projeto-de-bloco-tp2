import { useState } from "react";
import "./Styles.css";
import { IoMdMenu } from "react-icons/io";



export default function Menu () {

    const [menuAberto, setMenuAberto] = useState(false);

    const Menu = () => {
        setMenuAberto(!menuAberto);
    }

    return (
        <div className="container-menu">

            <nav className="nav-menu">
                <div className="menu-nome">
                    <IoMdMenu className="menu-icon" fontSize={40} onClick={Menu}/>
                    <span className="nome-menu">POPFLIX</span>
                </div>

                <ul className="lista-nav">
                    <li>Iniciar</li>
                    <li>Login</li>
                    <li>Cadastrar</li>
                </ul>

                
                    <ul className={`lista-categorias ${menuAberto ? "show" : ""}`}>
                        <li>Ação</li>
                        <li>Comédia</li>
                        <li>Drama</li>
                        <li>Documentários</li>
                        <li>Séries</li>
                        <li>Animação</li>
                        <li>Ação</li>
                        <li>Comédia</li>
                        <li>Drama</li>
                        <li>Documentários</li>
                        <li>Séries</li>
                        <li>Animação</li>
                    </ul>
                
            </nav>
        </div>
    )
}