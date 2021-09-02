import { useSelector, useDispatch } from 'react-redux';

const Coin = () => {
    const {count} = useSelector((state)=>{return state;});  
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
            <button type="button" onClick= {() => increment()}> + </button> &nbsp;&nbsp;
            <button type="button" onClick= {() => decrement()}> - </button>
        </div>
        </>
    )
}

export default Coin;