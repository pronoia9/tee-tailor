import Canvas from './canvas/index';
import Customizer from './pages/Customizer';
import Home from './pages/Home';

function App() {

  return (
    <main className='App'>
      <Home />
      <Canvas />
      <Customizer />
    </main>
  );
}

export default App;
