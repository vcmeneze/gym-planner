import { Dumbbell, Flame } from 'lucide-react';
import './App.css'
import ListaExercicios from './components/ListaExercicios';

function App() {

  return (
      <div className="ml-2 app-container">
        <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center">
            <Dumbbell className="w-6 h-6 text-red-500" />
            </div>
            <h1 className="text-lg font-bold flex items-center gap-2">Gym Planner <Flame className="w-4 h-4 text-red-500 animate-pulse" /></h1>
            <p className="text-[10px] text-red-300 uppercase tracking-wider">Planejador de Treinos v2.0</p>
          </div>
        </div>
        </header>
        <ListaExercicios />
        <footer>
          <hr></hr><br></br>
          <p style={{margin: '0px', color: 'gray'}}>Ilustrações obtidas em:</p>
          <p style={{color: 'gray', wordSpacing: '10px', margin: '0px 0px 25px'}}>mundoboaforma.com hipertrofia.org    treinoemalta.com.br    tuasaude.com    omelhortreino.com</p>
          <p onClick={() => window.open('https://www.github.com/vcmeneze/', '_blank')} style={{color: 'gray'}}>Desenvolvido por Vitor | github.com/vcmeneze/</p>
        </footer>
      </div>
    )
}

export default App