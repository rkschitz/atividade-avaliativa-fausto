import React from "react";
import "../styles/Header.css";
import { useEffect, useState } from "react";

export default function Header() {

    const [user, setUser] = useState(localStorage.getItem('user'));

    useEffect(() => {
        const handleStorageChange = () => {
            setUser(localStorage.getItem('user'));
        };

        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    const sair = () => {
        localStorage.removeItem('user');
        window.location.href = '/';
    }

    return (
        user ?
            <nav>
                <ul>
                    <li>
                        <a href="/Home">Home</a>
                    </li>
                    <li>
                        <a href="/About">Sobre</a>
                    </li>
                    <li>
                        <a href="/JS">Juros Simples</a>
                    </li>
                    <li>
                        <a href="/JC">Juros Compostos</a>
                    </li>
                    <li>
                        <a href="/Calculadora">Calculadora</a>
                    </li>
                    <li>
                        <a href="/R3">Regra de três</a>
                    </li>
                </ul>
                <div className="buttons-nav">
                    <div className="signup">
                        <a className="user" onClick={sair}>Usuário: {user}</a>
                    </div>
                </div>
            </nav> : null
    );
}