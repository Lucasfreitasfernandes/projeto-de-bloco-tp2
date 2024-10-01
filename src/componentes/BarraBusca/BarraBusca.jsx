import "./Styles.css";
import { CiSearch } from "react-icons/ci";

export default function BarraBusca () {
    return (
        <div className="container-barra-display">
            <div className="container-barra-busca">
                <input className="input-busca" type="text" />
                <CiSearch className="icon-busca"/>
            </div>
        </div>
    )
}