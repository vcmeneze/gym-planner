import React, { use, useEffect, useState } from 'react';
import { buttons } from '../data/exercises';
import { Manequim } from './manequim';
import { BotoesExercicios } from './botoesExercicios';

function ListaExercicios() {
    
    const [exercicios, setExercicios] = useState<any[]>(() => {
        const restaurarExercicios = localStorage.getItem('exercicios');
        if (restaurarExercicios) {
            return JSON.parse(restaurarExercicios);
        }
        return [];
    });
    const musculosAtivos = exercicios.flatMap(item => item.musculos);

    const adicionarExercicio = (novoExercicio: any) => {
        const jaExiste = exercicios.some(item => item.nome === novoExercicio.nome)
        if (!jaExiste) {
            setExercicios(estadoAnterior => [...estadoAnterior, novoExercicio]);
        }
    }

    useEffect(() => {
        const exerciciosJSON = JSON.stringify(exercicios);
        localStorage.setItem('exercicios', exerciciosJSON);
    }, [exercicios]);


    const limparTudo = () => {
        setExercicios([]);      
    }

    const desfazer = () => {
        setExercicios(estadoAnterior => [...estadoAnterior.slice(0, -1)]);
    }

    return (
        <div>
            <h2> Lista de Exercícios</h2>
            <BotoesExercicios addExercicio={adicionarExercicio}/>

            <button onClick={limparTudo}>Limpar Treino</button>

            <hr />
            <h3>Treino Montado:</h3>
            <ul>
                {exercicios.map((item, i) => (
                    <li key={i}>{item.nome}</li>
                ))}
                
            </ul>
            <button onClick={() => desfazer()}>Desfazer</button>
            
            <Manequim musculosAtivos={musculosAtivos} />

        </div>
    )

}

export default ListaExercicios;
