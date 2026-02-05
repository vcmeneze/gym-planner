import { buttons } from '../data/exercises';
import {categoriasMusculos } from '../data/categoriasMusculos';
import { equipamentos } from '../data/equipamentos';
import { useState } from 'react';


export function BotoesExercicios({addExercicio, limparTudo, desfazer, categoriaAtual, setCategoria }: any) { 
    
    const [equipSelect, setEquip] = useState<string>('');

    const exerciciosFiltrados = categoriaAtual === 'todos' ? buttons : categoriaAtual === '' ? [] 
    : buttons.filter((exercicio) => exercicio.musculos.some(id => categoriaAtual.includes(id))); // vou incluir(includes) esse id na categoriaAtual se algum(some) id fizer parte de exercicio.musculos

    const filtroEquip = equipSelect === 'todos' || equipSelect === '' ? exerciciosFiltrados // se o equipSelect for 'todos' ou indefinido, retorna todos os exercicios 
    : categoriaAtual === '' ? buttons.filter((exercicio) => exercicio.equipamento.some((equip: string) => equip === equipSelect)) // se a categoriaAtual for indefinida, filtra todos os exercicios pelo equipamento selecionado
    : exerciciosFiltrados.filter((exercicio) => exercicio.equipamento.some((equip: string) => equip === equipSelect)); // existe categoria entao filtra os exercicios da categoria

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
            
            <button style={{ marginBottom: '10px', backgroundColor: '#ffffff', color: 'black'}} 
            onClick={() => setEquip('todos')}>Todos</button> 

            {equipamentos.map((equipamento, index) => (
                <div style={{display: 'flex'}}>
                    {equipamento.img_equip && <img onClick={() => setEquip(equipamento.nome)} className='ilustracao' src={equipamento.img_equip} alt={equipamento.nome}></img>}
                    <button className='' key={index} onClick={() => setEquip(equipamento.nome)}>
                        {equipamento.nome}
                    </button>
                </div>
            ))}<hr />  

            <h2>3º Adicione Exercícios</h2>
            {filtroEquip.map((exercicio, index) => {
                const exercicioImg = exercicio.img[equipSelect] || exercicio.img.default;
                
                return (               
                    <div key={index} style={{display: 'flex' }}>
                    {exercicioImg && <img onClick={() => addExercicio(exercicio)} 
                    className='ilustracao' src={exercicioImg} alt={exercicio.nome} />}
                    <button
                        className='botao-exercicio'
                        
                        onClick={() => addExercicio(exercicio)}>
                        {exercicio.nome}
                    </button>
                </div>
            )})}
            <hr />

            <button style={{ backgroundColor: '#790000', color: 'white', border: 'none', margin: '10px 20px', borderRadius: '50px' }}
            onClick={limparTudo}>Limpar Treino</button>

            <button style={{ backgroundColor: '#e2d300', color: 'black', border: 'none', margin: '10px 0px', borderRadius: '50px' }}
             onClick={desfazer}>Desfazer</button>
            <hr />
        </div>
    )
}