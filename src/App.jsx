import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
  
  return (
     <div className="App">
      <NavBar />
      <ItemListContainer welcomeMessage="Hola profe, soy un componente react!"/>

     </div>
  )
}

export default App
