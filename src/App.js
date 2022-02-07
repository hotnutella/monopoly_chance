import { useState } from 'react';

import classes from './App.module.css';
import Actions from './components/Actions';
import Board from './components/Board';

import dto from './store/instructions-store';

const App = () => {
  const [instruction, setInstruction] = useState('');

  const actionSelectHandler = (data) => {
    const instructionsByType = dto.filter(_ => _.type === data.buttonType);
    const randomInstruction = instructionsByType[Math.floor(Math.random() * instructionsByType.length)];
    setInstruction(randomInstruction);
  }

  return (
    <div className={classes.App}>
      <Board instruction={instruction} />
      <Actions onSelect={actionSelectHandler} />
    </div>
  );
}

export default App;
