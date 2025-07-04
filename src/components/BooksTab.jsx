import React from 'react';

const BooksTab = () => (
  <div>
    <h2>I miei Libri</h2>
    <div className="books">
      <div className="book">
        <h3>Libro 1</h3>
        <p>Descrizione breve del primo libro.</p>
        <button>Compra</button>
      </div>
      <div className="book">
        <h3>Libro 2</h3>
        <p>Descrizione breve del secondo libro.</p>
        <button>Compra</button>
      </div>
      <div className="book">
        <h3>Libro 3</h3>
        <p>Descrizione breve del terzo libro.</p>
        <button>Compra</button>
      </div>
    </div>
  </div>
);

export default BooksTab;
