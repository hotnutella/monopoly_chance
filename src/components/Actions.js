import Button from './Button';
import classes from './Actions.module.css';

const Actions = props => {

    return <div className={classes.actions}>
        <Button text="?" type="chance" onClick={props.onSelect} />
        <Button text="$" type="chest" onClick={props.onSelect} />
    </div>
}

export default Actions;