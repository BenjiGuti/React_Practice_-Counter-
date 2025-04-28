import Contador from './components/Contador'; 
import './App.css';


function App() {


  return (
    <div className="contador-row">
      <Contador nombre="Contador 1" inicio={0} incremento={1} />
      <Contador nombre="Contador 2" inicio={10} incremento={2} />
      <Contador nombre="Contador 3" inicio={-5} incremento={3} />
    </div>
  );


  
}



export default App;
