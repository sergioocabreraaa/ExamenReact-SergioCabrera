import './App.css';
import { useState } from 'react';
import List from './components/Lista';
import Form from './components/Agregar';


function App() {

  const [list, setList] = useState(null);

  const api = async() => {
    const api = await fetch('http://localhost:8080/api/tutorials');
    const data = await api.json();
    setList(data);
  }

  function home(){
    setList(null);
  }

  return (
    <div className="App">
      <header className="header">
        <nav>
            <li onClick={home}>Inicio</li>
            <li onClick={api}>Lista de registros</li>
        </nav>
      </header>
      <main>
        {list ? (
          <>
            <List list={list} />
          </>
        ) :(
          <>
            <Form />
          </>
        )} 
      </main>
    </div>
    
  );
}

export default App;
