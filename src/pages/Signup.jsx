import { useState } from 'react';
import '../styles/Signup.css'

function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [cep, setCep] = useState('');
    const [address, setAddress] = useState({});
    const [numero, setNumero] = useState('');

    const signup = async (e) => {
        e.preventDefault();
        const user = {
            nome: name,
            email,
            password,
            cep,
            address: address.logradouro,
            bairro: address.bairro,
            cidade: address.localidade,
            estado: address.uf,
            numero
        }

        if (!user.nome || !user.email || !user.password || !user.cep || !user.address || !user.bairro || !user.cidade || !user.estado || !user.numero) {
            alert('Preencha todos os campos');
            return;
        }
        localStorage.setItem('user', user.nome)
        window.location.href = '/home';
    };

    const handleCepChange = async (e) => {
        const newCep = e.target.value;
        setCep(newCep);

        if (newCep.length === 8) { // CEP no Brasil tem 8 dígitos
            try {
                const response = await fetch(`https://viacep.com.br/ws/${newCep}/json/`);
                const data = await response.json();
                setAddress(data);
            } catch (error) {
                console.error('Error fetching address data:', error);
            }
        }
    };

    return (
        <div className="container">
            <form onSubmit={signup} className='form'>
                <label> Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <label> Email:
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <div className="endereco">
                    <label> CEP:
                        <input type="text" value={cep} onChange={handleCepChange} />
                    </label>
                    <label> Endereço:
                        <input type="text" value={address.logradouro || ''} readOnly />
                    </label>
                    <label> Bairro:
                        <input type="text" value={address.bairro || ''} readOnly />
                    </label>
                    <label> Cidade:
                        <input type="text" value={address.localidade || ''} readOnly />
                    </label>
                    <label> Estado:
                        <input type="text" value={address.uf || ''} readOnly />
                    </label>
                    <label> Número:
                        <input type="text" value={numero} onChange={(e) => setNumero(e.target.value)} />
                    </label>
                </div>
                <label> Senha:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Signup;
