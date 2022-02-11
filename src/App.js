import { Route, Routes } from 'react-router-dom';
import Product from './pages/Product';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
