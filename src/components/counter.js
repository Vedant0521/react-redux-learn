import {useDispatch , useSelector} from 'react-redux';

const Counter = () => {
    const {count} = useSelector((state)=>state);
    const dispatch = useDispatch();

    const increment = () =>{
        const action = {
            type : "UPDATE_PLUS"
        }
        dispatch(action)
    }
    const decrement = () =>{
        const action = {
            type : "UPDATE_MINUS"
        }
        dispatch(action)
    }

    return (
        <>
        <div>Count: {count}</div>
        <div>
            <button type="button" onClick = {() => increment()}> + </button> &nbsp;&nbsp;
            <button type="button" onClick= {() => decrement()}> - </button>
        </div>
        </>
    )
}

export default Counter;