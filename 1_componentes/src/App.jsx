// COMPONENTE PAI

import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
// importar o compopnente filho
import FunctionalComponents from './components/FunctionalComponent';
import ClassComponent from './components/ClassComponent';
import PropsExample from './components/PropsExample';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <h1>Hello World React!</h1>
  {/* utilizando o componente importado no JSX */}
  <FunctionalComponents/>
  <ClassComponent/>
  <PropsExample nome='Gustavo' idade ={19}/>
    </>
  );
}

export default App
