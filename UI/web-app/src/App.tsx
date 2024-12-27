import React from 'react';
import Dashboard from './@component/Dashboard';
import './App.css';
import NavbarComponent from './@component/NavbarComponent';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <NavbarComponent />
      <Dashboard />
    </>
  );
}

export default App;
