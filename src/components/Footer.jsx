import React from "react";
import "../styles/Footer.css";
import { useEffect, useState } from "react";

export default function Footer() {
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
    return (
        user ? <footer>
            <div className="footer-bottom">
                <div className="creditos">
                    <p>Ruhan Kaio Schitz</p>
                </div>
            </div>
        </footer> : null
    );
}
