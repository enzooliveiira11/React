import react, { useState } from 'react';

function Contador() {
    let [contador, setContador] = useState(0);
    let incrementar = () => {
        setContador(contador+1);
    }

    return(
        <>
        <button onClick={incrementar}>O botão foi clicado {contador} vezes</button>
        </>
    );
}


export default Contador;