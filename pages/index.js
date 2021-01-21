import { useState } from 'react';

function Home() {
    return (
        <html>
            <head></head>
            <body>
                <div>
                    <h5>TESTE html</h5>
                    <div>Home</div>
                    <Contador />
                </div>
            </body>
        </html>
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