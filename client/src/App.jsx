import Canvas from './canvas/index';
import Customizer from './pages/Customizer';
import Home from './pages/Home';

function App() {

  return (
    <main className='App'>
      <h1 className='head-text'>React App</h1>
      <Home />
      <Canvas />
      <Customizer />
    </main>
  );
}

export default App;
