import Button from '@mui/material/Button';
import DrawerAppBar from '../components/Appbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Makeup YLL</h1>
        <p>Maquillaje nupcial</p>
        <Button variant="Portfolio">Portfolio</Button> 
        <Button variant="Sobre mi">Sobre mi</Button> 
        <Button variant="Contacto">contacto</Button> 
        <DrawerAppBar></DrawerAppBar>
        <h1>Yola Gayola</h1>
    </div>
  );
}

export default App;
