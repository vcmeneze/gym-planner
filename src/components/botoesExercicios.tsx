import { buttons } from '../data/exercises';
import {categoriasMusculos } from '../data/categoriasMusculos';

export function BotoesExercicios({addExercicio, limparTudo, desfazer, categoriaAtual, setCategoria }: any) { 

    const exerciciosFiltrados = categoriaAtual === '' ? buttons 
    : buttons.filter((exercicio) => exercicio.musculos.some(id => categoriaAtual.includes(id))); // vou incluir(includes) esse id na categoriaAtual se algum(some) id fizer parte de exercicio.musculos

    return (
        <div>
            <h2>1º Selecione o grupo muscular </h2>
            <button onClick={() => setCategoria('')}>Todos</button>
            {categoriasMusculos.map((musculo, index) => (
                <button 
                    key={index}
                    onClick={() => setCategoria(musculo.musculos)} > 
                    {musculo.categoria}
                </button> 
            ))} <hr />  
            <h2>2º Adicione Exercícios</h2>
            {exerciciosFiltrados.map((exercicio, index) => (
                <button
                    key={index}
                    onClick={() => addExercicio(exercicio)}>
                    {exercicio.nome}
                </button>
            ))}





            <hr />
            <button style={{ backgroundColor: '#790000', color: 'white', border: 'none', margin: '10px 20px', borderRadius: '50px' }}
            onClick={limparTudo}>Limpar Treino</button>

            <button style={{ backgroundColor: '#e2d300', color: 'black', border: 'none', margin: '10px 0px', borderRadius: '50px' }}
             onClick={desfazer}>Desfazer</button>
            <hr />
        </div>
    )
}