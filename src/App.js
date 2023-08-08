import React from 'react';
import './App.css';
import ProductList from './ProductList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Ecommerce Website</h1>
      </header>
      <main>
        <ProductList />
      </main>
    </div>
  );
}

export default App;
