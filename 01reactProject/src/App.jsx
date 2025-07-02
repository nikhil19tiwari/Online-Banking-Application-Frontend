import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Hello from './SecurityConfig.jsx/Hello';
import Signup from './SecurityConfig.jsx/Signup';
import Welcome from './SecurityConfig.jsx/Welcome';

function App(){
  return(
   <>
  <BrowserRouter>
  <Routes>
   <Route path="/home" element={<Hello />} />
   <Route path="/signup" element={<Signup />}   />
   <Route path="/welcome" element={<Welcome />} />
  </Routes>
  </BrowserRouter>
   </>
   

  );
}
export default App;
