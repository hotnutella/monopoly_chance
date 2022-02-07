import { useState } from 'react';

import classes from './App.module.css';
import Actions from './components/Actions';
import Board from './components/Board';
import Languages from './components/Languages';

import dto from './store/instructions-store';
import settings from './store/settings-store';

const App = () => {
  const [instruction, setInstruction] = useState('');
  const [lang, setLang] = useState('rus');

  const actionSelectHandler = (data) => {
    const instructionsByType = dto.filter(_ => _.type === data.buttonType);
    const randomInstruction = instructionsByType[Math.floor(Math.random() * instructionsByType.length)];
    setInstruction(randomInstruction);
  }

  const languageChangeHandler = (newLang) => {
    setLang(newLang);
  }

  return (
    <div className={classes.App}>
      <Languages langs={settings.langs} onChange={languageChangeHandler} />
      <Board instruction={instruction} lang={lang} />
      <Actions onSelect={actionSelectHandler} />
    </div>
  );
}

export default App;
