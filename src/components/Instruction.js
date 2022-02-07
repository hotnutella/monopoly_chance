import classes from './Instruction.module.css';

const Instruction = props => {
    return <div className={classes.instruction}>
        <span>{props.text}</span>
    </div>;
}

export default Instruction;