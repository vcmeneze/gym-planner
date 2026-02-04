import { buttons } from '../data/exercises';
import {categoriasMusculos } from '../data/categoriasMusculos';

export function BotoesExercicios({addExercicio, limparTudo, desfazer, categoriaAtual, setCategoria }: any) { 

    const exerciciosFiltrados = categoriaAtual === 'todos' ? buttons : categoriaAtual === '' ? [] 
    : buttons.filter((exercicio) => exercicio.musculos.some(id => categoriaAtual.includes(id))); // vou incluir(includes) esse id na categoriaAtual se algum(some) id fizer parte de exercicio.musculos

    return (
        <div>
            <h2>1º Selecione o grupo muscular </h2>
            {categoriasMusculos.map((musculo, index) => (
                <button 
                    key={index}
                    onClick={() => setCategoria(musculo.musculos)} > 
                    {musculo.categoria}
                </button> 
            ))} <br />

            <button style={{ backgroundColor: '#bbbbbb', color: 'black'}} 
            onClick={() => setCategoria('todos')}>Todos</button> 
            <hr />  
            
            <h2>2º Selecione o equipamento 
                <p style={{fontSize: "medium", color: "gray", padding: "0px", margin:"0px"}}>(opcional)</p>
                </h2>
            <hr />  

            <h2>3º Adicione Exercícios</h2>
            {exerciciosFiltrados.map((exercicio, index) => (
                <div style={{display: 'flex'}}>
                    {exercicio.img && <img onClick={() => addExercicio(exercicio)} 
                    className='ilustracao' src={exercicio.img} alt={exercicio.nome} />}
                    <button
                        className='botao-exercicio'
                        key={index}
                        onClick={() => addExercicio(exercicio)}>
                        {exercicio.nome}
                    </button>
                </div>
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