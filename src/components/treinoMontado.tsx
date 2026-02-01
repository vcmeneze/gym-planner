import { BiTrash } from 'react-icons/bi';

export function TreinoMontado({exercicios, removerExercicio}: any) {
    return (
        <div>
            <h3>Treino Montado:</h3>
            <ul>
                {exercicios.map((item: any, i: number) => (
                    <li key={i}>{item.nome} 
                    <button 
                    style={{margin: '10px', padding: '2px', border: 'none', background: 'transparent'}}  
                    onClick={() => removerExercicio(i)}><BiTrash />
                    </button>
                    </li>
                ))}
            </ul>  
        </div>
    )
}