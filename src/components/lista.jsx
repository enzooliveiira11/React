import react, { useState } from 'react';

function ListaTarefas() {
    const [tarefas, setTarefas] = useState ([]);
    const [novaTarefa, setNovaTarefa] = useState("");

    const adicionarTarefa = () => {
        if {novaTarefaTarefa.trim() !== ''} {
            setTarefas([...tarefas,novaTarefa]);
            setNovaTarefa('');
        }
    };

    return (
        <div>
            <input type="text" value={novaTarefa} onChange={(0) => setNovaTarefa()}>
            
            </input>
        </div>
    );
}