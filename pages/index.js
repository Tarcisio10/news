import { useState } from 'react';

function Home() {
    return (
        <html>
            <head>
                <title>TARCISIO</title>
            </head>
            <body>
                <h1>teste fora</h1>
                <center>
                    <h1>Bem vindo TK</h1>
                    <p><i><b>@Tarciblois</b></i></p>
                    <h2><a href="/Tattoo/tattos.html">Tattoo</a></h2>
                    <h2><a href="/Fotos/fotos.htm">Fotos</a></h2>
                    <h2><a href="https://www.linkedin.com/in/tarcisio-blois-07604b171/">Linkedin</a></h2>
                    <h2><a href="https://github.com/Tarcisio10">Github</a></h2>
                    <h2><p>Instagram</p></h2>
                </center>
                <div>
                    <h5>TESTE html</h5>
                    <div>Home</div>
                    <Contador />
                    <a href="/fotos">fotos</a>

                </div>
                <a href="/fotos">fotos</a>
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