import Example from './components/Example';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Example />} />
    </Routes>
  );
}

export default App;
