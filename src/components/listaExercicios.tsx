import React, { use, useEffect, useState } from 'react';
import { Manequim } from './manequim';
import { BotoesExercicios } from './botoesExercicios';
import { TreinoMontado } from './treinoMontado';

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
            <BotoesExercicios addExercicio={adicionarExercicio} limparTudo={limparTudo} desfazer={desfazer}/> 
            <TreinoMontado exercicios={exercicios} />         
            <Manequim musculosAtivos={musculosAtivos} />

        </div>
    )

}

export default ListaExercicios;
