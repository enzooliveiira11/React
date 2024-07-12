import react, { useState } from 'react';

function ToggleTexto() {
    const [mostrarTexto, setMostrarTexto] = useState(true);
    const alternarTexto = () => {
        setMostrarTexto (!mostrarTexto);
    };

    return (
        <div>
            <button onClick={alternarTexto}>
                Alternar Texto
            </button>
            {mostrarTexto ? <p>Texto A </p> : <p>Texto B</p>}
        </div>
    );
}

export default ToggleTexto;