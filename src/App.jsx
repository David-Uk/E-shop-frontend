import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoginPage } from './Routes';
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
