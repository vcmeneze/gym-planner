export function TreinoMontado({exercicios}: any) {
    return (
        <div>
            <h3>Treino Montado:</h3>
            <ul>
                {exercicios.map((item: any, i: number) => (
                    <li key={i}>{item.nome}</li>
                ))}
            </ul>  
        </div>
    )
}