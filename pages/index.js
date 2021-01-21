import { useState } from 'react';

function Home() {
    return (
        <html>
            <head>
                <title>TARCISIO</title>
            </head>
            <body>
                <div>
                    <h5>TESTE html</h5>
                    <div>Home</div>
                    <Contador />
                </div>
                <script src="//rum-static.pingdom.net/pa-6009b40b06c8370013000279.js" async></script>
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