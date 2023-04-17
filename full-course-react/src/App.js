import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Ex41 from './pages/Ex41';
import Ex42 from './pages/Ex42';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/'/>
      <Route path="/ex41" element={<Ex41 />} />
      <Route path="/ex42" element={<Ex42 />} />
      {/* <Route path="/ex42" element={<Login />} /> */}
      
    </Routes>
  </BrowserRouter>
  );
}

export default App;
