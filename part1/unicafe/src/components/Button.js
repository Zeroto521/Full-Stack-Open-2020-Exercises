import { setToValue } from '../utils'


const Button = (props) => {
    return (
        <button onClick={setToValue(props.func, props.value + 1)}>
            {props.name}
        </button>
    )
}

export { Button }
