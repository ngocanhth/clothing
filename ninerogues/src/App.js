import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Error404 } from './containers/errors/Error404';
import Home from './containers/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Error Display */}
          <Route path="*" element={<Error404/>}/>
          <Route exact path='/' element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}
export default App;
