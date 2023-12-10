import logo from './assets/cat.jpg'
import React from 'react';
import './App.css';

function App() {
  const element1 = React.createElement('h2', { 'fontFamily': 'Tahoma', 'backgroundColor': 'yellow'}, 'Task 2');
  const element2 = React.createElement('p', { 'fontFamily': 'Tahoma', 'fontSize': '40px' }, 'Розробити сторінку з заголовком, параграфом тексту та зображенням за допомогою синтаксису JSX. Повторити дану сторінку, використовуючи метод createElement.');
  const elementImg = React.createElement('img', { 'src': './assets/cat.jpg' }, null);
  return (
    
    <>
      <h2 style={{ fontFamily: 'Tahoma' }}>{'Task 2'}</h2>
      <p style={{ fontFamily: 'Tahoma', color: 'darkgreen', backgroundColor: 'yellow', fontSize: '20px' }}>Розробити сторінку з заголовком, параграфом тексту та зображенням за допомогою синтаксису JSX. Повторити дану сторінку, використовуючи метод createElement.
      </p>
      <img src={logo} alt='cat'></img>

      {element1}
      {elementImg}
      {element2}


    </>
  );
}

export default App;
