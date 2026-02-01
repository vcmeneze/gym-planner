import './App.css'
import ListaExercicios from './components/listaExercicios';

function App() {

  return (
      <div className="app-container">
        <h1>Gym Planner</h1>
        <p>Planejador de Treinos v1.0</p>
        <ListaExercicios />
        
      </div>
    )
}

export default App