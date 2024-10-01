import "./Styles.css";
import img2 from "../Carrossel/imgCarrossel/img2.jpg"
import { FaRegHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";


export default function Favoritos () {
    return (
        <div className="favoritos">
            
            <div className="container-favoritos">


                <div className="container-card">
                    <img className="imagem-favoritos" src={img2}/>
                </div>

                <div className="container-funcao">
                    <div className="container-estrelas">
                        <FaStar className="item-favoritos"/>
                        <FaStar className="item-favoritos" />
                        <FaStar className="item-favoritos" />
                        <FaStar className="item-favoritos" />
                        <FaStar className="item-favoritos" />
                    </div>
                    <div className="container-coracao">
                        <FaRegHeart className="favorito" />
                    </div>

                </div>

            </div>
        </div>
    )
}