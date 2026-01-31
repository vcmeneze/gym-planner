import { buttons } from '../data/exercises';

export function BotoesExercicios({ addExercicio, limparTudo, desfazer }: any) { 
    
    
    return (
        <div>
            <h2> Adicionar Exercícios</h2>
            {buttons.map((button, index) => (
                <button 
                    key={index} 
                    onClick={() => addExercicio(button)} >
                    {button.nome}
                </button>
            ))} <hr />
            <button style={{ backgroundColor: '#790000', color: 'white', border: 'none', margin: '10px 20px', borderRadius: '50px' }}
            onClick={limparTudo}>Limpar Treino</button>

            <button style={{ backgroundColor: '#e2d300', color: 'black', border: 'none', margin: '10px 0px', borderRadius: '50px' }}
             onClick={desfazer}>Desfazer</button>
            <hr />
        </div>
    )
}