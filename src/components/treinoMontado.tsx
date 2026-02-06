import { X, Dumbbell, RotateCcw, Trash2 } from 'lucide-react';


export function TreinoMontado({exercicios, removerExercicio, limparTudo, desfazer}: any) {return (
        <div className="space-y-4">
            {/* Cabeçalho do Card */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Dumbbell className="w-5 h-5 text-red-600 animate-pulse" />
                    <h3 className="text-sm font-medium text-zinc-300 uppercase tracking-wider">Treino Montado:</h3>

                    {exercicios.length > 0 && (
                        <span className="bg-red-700 text-secondary-foreground text-xs font-bold px-2 py-0.5 rounded-full">
                            {exercicios.length}
                        </span>
                    )}
                </div>
                <div className="flex gap-2 mt-2">
                    <button className="p-2 rounded-full text-xs font-medium transition-all duration-200 flex items-center gap-1 
                   bg-yellow-500/75 hover:bg-yellow-500 text-primary-foreground"
                        onClick={desfazer}>
                        <RotateCcw className="w-3.5 h-3.5" />
                    </button>

                    <button className={`
                   p-2 rounded-full text-xs font-medium
                   transition-all duration-200
                   flex items-center gap-1
                   ${exercicios.length > 0
                            ? 'bg-destructive/25 hover:bg-destructive/30 text-red-600 hover:text-red-500'
                            : 'bg-muted/30 text-secondary-foreground cursor-not-allowed'
                        }
                   `}
                        onClick={limparTudo}><Trash2 className="w-3.5 h-3.5" />
                    </button>
                </div>
            </div>

            {/* Lista de Exercícios */}
            {exercicios.length === 0 ? (
                <div className="text-center py-6 text-muted-foreground border-2 border-dashed border-muted rounded-xl">
                    <Dumbbell className="w-8 h-8 mx-auto mb-2 opacity-30" />
                    <p className="text-sm">Nenhum exercício selecionado</p>
                    <p className="text-xs opacity-60 mt-1">Adicione exercícios acima</p>
                </div>
            ) : (
                <div className="space-y-2">
                    {exercicios.map((item: any, i: number) => (
                        <div 
                            key={i} // A KEY TEM QUE FICAR AQUI NO PAI
                            className="flex items-center gap-3 p-3 bg-red-600/5 rounded-xl border border-transparent hover:border-border transition-all group"
                        >
                            {/* Imagem */}
                            <div className="flex-shrink-0">
                                <img 
                                    src={item.img.default} 
                                    alt={item.nome} 
                                    className="w-20 h-20 object-cover rounded-lg bg-muted" 
                                />
                            </div>

                            {/* Texto */}
                            <div className="flex-1 min-w-0">
                                <p className="font-medium text-m truncate text-foreground">
                                    {item.nome}
                                </p>
                            </div>

                            {/* Botão de Remover */}
                            <button
                                className="w-8 h-8 rounded-full border border-red-500 flex items-center justify-center flex-shrink-0
                                bg-transparent text-slate-50 hover:bg-destructive/20 
                                transition-all duration-200"
                                onClick={() => removerExercicio(i)}
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}