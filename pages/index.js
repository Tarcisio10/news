import { useState } from 'react';

function Home() {
    return (
        <div>
            <div>Home1</div>
            <Contador />
        </div>
    )
}

function Contador() {
    const [contador, setContador] = useState(1);

    function addContador() {
        setContador(contador + 1);
    }
    return (
        <div>
            <div>{contador}</div>
            <button onClick={addContador}>Adicionar</button>
        </div>
    )
}
export default Home