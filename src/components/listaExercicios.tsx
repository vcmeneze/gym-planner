import {useEffect, useState } from 'react';
import { Manequim } from './Manequim';
import { BotoesExercicios } from './BotoesExercicios';
import { TreinoMontado } from './TreinoMontado';

function ListaExercicios() {

    const [menuSelect, setMenuSelect] = useState<string>('');

    const [exercicios, setExercicios] = useState<any[]>(() => {
    const restaurarExercicios = localStorage.getItem('exercicios');
    if (restaurarExercicios) {
        return JSON.parse(restaurarExercicios);
    }
    return [];
});

    useEffect(() => {
        const exerciciosJSON = JSON.stringify(exercicios);
        localStorage.setItem('exercicios', exerciciosJSON);
    }, [exercicios]);

    const musculosAtivos = exercicios.flatMap(item => item.musculos);
    const musculosSecundarios = exercicios.flatMap(item => item.musculos_secundarios);


    const adicionarExercicio = (novoExercicio: any) => {
        const jaExiste = exercicios.some(item => item.nome === novoExercicio.nome) // jaExiste será true se algum dos exercicios tiver o nome igual ao do novoExercicio
        if (!jaExiste) {
            setExercicios(estadoAnterior => [...estadoAnterior, novoExercicio]);
        }
    }
    const limparTudo = () => {
        setExercicios([]);      
    }
    const desfazer = () => {
        setExercicios(estadoAnterior => [...estadoAnterior.slice(0, -1)]);
    }
    const removerExercicio = (index : number) => {
        setExercicios(estadoAnterior => estadoAnterior.filter((_, i) => i !== index)); // cada exercicio possui um index, então o filter() irá manter todos os exercicios que o i (index) é diferente do valor do index passado na função
    }

    return (
        <div>
            <BotoesExercicios 
            categoriaAtual={menuSelect} 
            setCategoria={setMenuSelect}
            addExercicio={adicionarExercicio} 
            limparTudo={limparTudo} 
            desfazer={desfazer}/> 

            <TreinoMontado exercicios={exercicios} removerExercicio={removerExercicio} />         
            <Manequim musculosAtivos={musculosAtivos} musculosSecundarios={musculosSecundarios} />

        </div>
    )

}

export default ListaExercicios;
