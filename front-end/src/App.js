import {BrowserRouter, Routes, Route} from 'react-router-dom';

// pages & components
import Home from './pages/Home';
import NavbarBasic from './components/NavbarBasic';

import Banner from './components/Banner';

function App() {
  return (
    <section className="App">
      <BrowserRouter>
        <div className='pages'>
          <NavbarBasic />
          <Routes>
            <Route 
            path='/'
            element={<Home />}  
            />
          </Routes>
        </div>
      </BrowserRouter>
    </section>
  );
}

export default App;
