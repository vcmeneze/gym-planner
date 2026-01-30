import { buttons } from '../data/exercises';

// 1. Recebemos 'aoClicar' (nome que inventamos agora) dentro das chaves
export function BotoesExercicios({ addExercicio }: any) { 
    
    // 2. Faltou o 'return' no seu código! Componente tem que retornar HTML.
    return (
        <div>
            {buttons.map((button, index) => (
                <button 
                    key={index} 
                    // 3. Em vez de chamar a função que não existe, chamamos a que recebemos
                    onClick={() => addExercicio(button)} 
                >
                    {button.nome}
                </button>
            ))}
        </div>
    )
}