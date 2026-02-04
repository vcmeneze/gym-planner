import './App.css'
import ListaExercicios from './components/ListaExercicios';

function App() {

  return (
      <div className="app-container">
        <h1>Gym Planner</h1>
        <p>Planejador de Treinos v1.0</p>
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