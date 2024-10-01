import "./Styles.css";
import img2 from "../Carrossel/imgCarrossel/img2.jpg"
import { FaRegHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";


export default function Top10 () {
    return (
        <div className="top10">
            
            <div className="container-top10">


                <div className="container-card-top10">
                    <img className="imagem-top10" src={img2}/>
                </div>

                <div className="container-funcao-top10">
                    <div className="container-estrelas-top10">
                        <FaStar className="item-favoritos-top10"/>
                        <FaStar className="item-favoritos-top10"/>
                        <FaStar className="item-favoritos-top10"/>
                        <FaStar className="item-favoritos-top10"/>
                        <FaStar className="item-favoritos-top10"/>
                    </div>
                    <div className="container-coracao-top10">
                        <FaRegHeart className="favorito-top10" />
                    </div>

                </div>

            </div>
        </div>
    )
}