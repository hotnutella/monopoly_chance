import { useState } from 'react';
import classes from './Languages.module.css';

const Languages = props => {
    const [lang, setLang] = useState('rus');

    const buttonClickHandler = event => {
        const newLang = event.target.id;
        setLang(newLang);
        props.onChange(newLang);
    }

    const buttons = props.langs.map(_ => {
        let buttonClass;
        if (lang === _) {
            buttonClass = `${classes.option} ${classes.selected}`;
        } else {
            buttonClass = `${classes.option}`;
        }
        return <button className={buttonClass} id={_} key={_} onClick={buttonClickHandler}>{_.toUpperCase()}</button>;
    });    

    return <div className={classes.container}>
        {buttons}
    </div>
}

export default Languages;