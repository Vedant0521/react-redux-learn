import { createReducer ,createAction}  from '@reduxjs/toolkit';

const increment = createAction('UPDATE_PLUS');
const decrement = createAction('UPDATE_MINUS');
const initialState = {
    count: 0

}

export default createReducer(initialState,(builder)=>{
    builder.addCase(increment,(state,action)=>{
        state.count +=1;
    })
    .addCase(decrement,(state,action)=>{
        state.count -=1;
    })
})

