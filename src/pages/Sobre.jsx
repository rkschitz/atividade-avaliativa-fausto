import '../styles/Sobre.css'
import fotoAutor from '../assets/img/foto-autor.jpeg'
export default function sobre() {
    return (
        <div className="about">
            <div className="about-title">
                <h1>Sobre</h1>
                <div className="img-about">
                    <img src={fotoAutor}></img>
                </div>
            </div>
            <div className="about-content">
                <p>Este é um humilde site de com algumas calculadoras</p>
                <p>Desenvolvido por Ruhan Kaio Schitz</p>
            </div>
        </div>
    )
}