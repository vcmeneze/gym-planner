import { buttons } from '../data/exercises';
import {categoriasMusculos } from '../data/categoriasMusculos';
import { equipamentos } from '../data/equipamentos';
import { useState } from 'react';
import { Plus } from 'lucide-react';


export function BotoesExercicios({addExercicio, categoriaAtual, setCategoria }: any) { 
    
    const [equipSelect, setEquip] = useState<string>('');

    const exerciciosFiltrados = categoriaAtual === 'todos' ? buttons : categoriaAtual === '' ? [] 
    : buttons.filter((exercicio) => exercicio.musculos.some(id => categoriaAtual.includes(id))); // vou incluir(includes) esse id na categoriaAtual se algum(some) id fizer parte de exercicio.musculos

    const filtroEquip = equipSelect === 'todos' || equipSelect === '' ? exerciciosFiltrados // se o equipSelect for 'todos' ou indefinido, retorna todos os exercicios 
    : categoriaAtual === '' ? buttons.filter((exercicio) => exercicio.equipamento.some((equip: string) => equip === equipSelect)) // se a categoriaAtual for indefinida, filtra todos os exercicios pelo equipamento selecionado
    : exerciciosFiltrados.filter((exercicio) => exercicio.equipamento.some((equip: string) => equip === equipSelect)); // existe categoria entao filtra os exercicios da categoria

    return (
        <div className='space-y-3'>
            <h2 className="text-sm mt-2 font-semibold uppercase tracking-wider text-zinc-300">
                1. grupo muscular 
            </h2>
            <div className="flex flex-wrap gap-2">
                {categoriasMusculos.map((musculo, index) => (
                    <button
                    
                    className={` px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ease-out flex items-center gap-2 hover:border-red-700
                    ${categoriaAtual === musculo.musculos ? 'bg-red-700 text-secondary-foreground shadow-glow scale-105' 
                        : 'bg-zinc-800 text-secondary-foreground hover:bg-secondary/25 hover:scale-102'}`
                    }
                        key={index}
                        onClick={() => setCategoria(musculo.musculos)} > 
                        {musculo.categoria}
                    </button> 
                ))} 
            </div>

            <button className={`${categoriaAtual === 'todos' ?  
            'px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ease-out flex items-center gap-2 hover:border-red-700 bg-red-700 text-secondary-foreground shadow-glow scale-105' 
            : 'bg-slate-50 text-primary-foreground px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ease-out flex items-center gap-2 hover:border-red-700'}
            `}
            onClick={() => setCategoria('todos')}>Todos
            </button> 
            <hr className='border-zinc-700' />  
            
            <div className="space-y-3">
                <h2 className="text-sm font-medium text-zinc-300 uppercase tracking-wider">
                    2. Equipamento <span className="text-xs opacity-60">(opcional)</span>
                </h2>

                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
                    {equipamentos.map((equipamento, index) => (
                        <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px' }}>
                            {equipamento.img_equip && <img onClick={() => setEquip(equipamento.nome)} className='ilustracao' src={equipamento.img_equip} alt={equipamento.nome}></img>}
                            <button className={` font-medium text-m transition-all duration-200 ease-out
                            flex-shr className='border-zinc-700'ink-0 flex flex-col items-center gap-2
                            p-3 rounded-xl min-w-[80px]
                            transition-all duration-200 ease-out ${equipSelect === equipamento.nome ? 'border-red-700 bg-red-700/50 text-secondary-foreground shadow-glow scale-110' : 'bg-zinc-800 text-secondary-foreground hover:bg-secondary/25 hover:scale-102'}
                            `}
                key={index} onClick={() => setEquip(equipamento.nome)}>
                                {equipamento.nome}
                            </button>
                        </div>
                    ))}  
                    <button className={`${equipSelect === 'todos' ?  
                    'text-xl px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ease-out flex items-center gap-2 hover:border-red-700 bg-red-700 text-secondary-foreground shadow-glow scale-100' 
                    : 'text-m bg-zinc-800 text-secondary-foreground px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ease-out flex items-center gap-2 hover:border-red-700'}
                    `} 
                    onClick={() => setEquip('todos')}>Todos</button> 
                </div> <hr className='border-zinc-700' />

            </div>

            <div>
                <div className="flex items-center justify-between mb-5">
                    <h2 className="text-sm font-medium text-zinc-300 uppercase tracking-wider">3. Adicione Exercícios</h2>
                    <span className="text-xs text-white font-medium text-muted-foreground"> {filtroEquip.length} disponíveis</span>     
                </div>
                       
                {filtroEquip.map((exercicio, index) => {
                    const exercicioImg = exercicio.img[equipSelect] || exercicio.img.default;
                    
                    return (       
                        <div className="flex items-center gap-3 p-3">

                            <div key={index} className={`relative rounded-xl overflow-hidden transition-all duration-300 ease-out
                            ${exercicio.equipamento.some((equip: string) => equip === equipSelect) ? 
                            'bg-primary/15 border-2 border-primary shadow-glow' 
                            : 'bg-card border-2 border-transparent hover:border-primary/30'}`}>
                            </div>

                            <div className="relative rounded-lg bg-muted/50 flex-shrink-0">
                                {exercicioImg && <img 
                                className="w-32 h-auto rounded-xl cursor-pointer mb-2.5 active:scale-150 transition-transform duration-200 ease-out hover:scale-125" 
                                src={exercicioImg} 
                                alt={exercicio.nome.toString()} 
                                />}
                            </div>
                            
                                <div className="flex-1 min-w-0">
                                    <h3 className="font-semibold text-sm truncate">{exercicio.nome}</h3>
                                    <div className="flex flex-wrap gap-1 mt-1">
                                        <span key={index} className="text-[10px] px-1.5 py-0.5 rounded bg-red-900/40 font-semibold text-red-600">{exercicio.equipamento.slice().join(' | ')}</span>
                                    </div>
                                </div>   
                                <button
                                    className={`
                                    w-10 h-10 rounded-full flex items-center justify-center
                                    transition-all duration-200 flex-shrink-0 bg-zinc-700 text-secondary-foreground scale-110 focus:bg-red-800 focus:animate-pulse duration-600 focus:scale-100`}                                                        
                                    onClick={() => addExercicio(exercicio)}>
                                    <Plus className="w-5 h-5" />
                                </button>
                        </div> 
                        )
                    })} 
            </div>
            <hr className='border-zinc-700' />
        </div>
    )
}