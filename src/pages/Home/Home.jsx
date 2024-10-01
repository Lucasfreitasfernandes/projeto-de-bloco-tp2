
import BarraBusca from "../../componentes/BarraBusca/BarraBusca";
import Carrossel from "../../componentes/Carrossel/Carrossel";
import Favoritos from "../../componentes/Favoritos/Favoritos";
import Menu from "../../componentes/Menu/Menu";
import Top10 from "../../componentes/Top10/Top10";
import "./Styles.css";



export default function Home () {
    return (
        <div>
            <Menu/>
            <BarraBusca/>
            <Carrossel/>
            <h2 className="h2">FAVORITOS</h2>
            <div className="favoritos-home">
                <Favoritos/>
                <Favoritos/>
                <Favoritos/>
            </div>
            
            <div className="container-home-top10">
                <h2 className="h2">TOP 10</h2>
                <div className="top10-home">
                    <Top10/>
                </div>
            </div>

        </div>
    )
}