import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoginPage, SignupPage } from './Routes';
import './App.css';
// import SignupPage from './pages/SignupPage';

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/sign-up' element={<SignupPage />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
