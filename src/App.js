import react from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import EmployeeList from './components/EmployeeList';

function App() {
  return (
<BrowserRouter>
<ul>
  <li>
    <Link to="/add">Add Employee</Link>
  </li>
</ul>

<Routes>
  <Route path="/add" element={<EmployeeList/>} /> 
  </Routes>
  </BrowserRouter>

  );
}

export default App;
