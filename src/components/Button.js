import classes from './Button.module.css';

const Button = props => {
    const clickHandler = event => {
        props.onClick({...event, buttonType: props.type});
    }

    return <div className={classes.container} onClick={clickHandler}>
        <div className={classes[`fg-${props.type}`]}>
            <span className={classes.text}>{props.text}</span>
        </div>
    </div>
}

export default Button;