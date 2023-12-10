import logo from './assets/cat.jpg'
import React from 'react';
import './App.css';

function App() {
  const element1 = React.createElement('hq', { 'fontSize': '40px'}, 'Розробити сторінку з заголовком, параграфом тексту та зображенням за допомогою синтаксису JSX. Повторити дану сторінку, використовуючи метод createElement.')
  return (
    <>
    
    <img src={logo} alt='cat'></img>
    

    {element1}
    </>
  );
}

export default App;
