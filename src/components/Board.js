import Instruction from "./Instruction";
import classes from './Board.module.css';

const Board = props => {
    return <div className={classes.board}>
        <Instruction text={props.instruction.rus} />
    </div>
}

export default Board;