import React, {useReducer} from 'react';
import css from "./components/Test/Test.module.css";

const reducer = (state, action) => {
    switch(action.type) {
        case 'inc':
            return {...state, count1: state.count1 +1}
        case 'dec':
            return {...state, count1: state.count1 -1}
        case 'reset':
            return {...state, count1: 0}
    }
    return state

}

const App = () => {
   const [state, dispatch] = useReducer(reducer, {count1: 0});


    return (
        <div className={css.cover}>
            <div className={css.mainWrap}>
            <h2 className={css.number}> Number: {state.count1} </h2>
            <div className={css.buttonWrap}>
          <div className={css.btn}>
            <button onClick={()=>dispatch({type: 'inc'})} >increase </button> </div>
                <div className={css.btn}>
                    <button onClick={()=>dispatch({type: 'dec'})}> decrease </button></div>
                <div className={css.btn}>
                    <button onClick={()=>dispatch({type: 'reset'})}> reset </button></div>
          </div>

            </div>
        </div>
    );
};

export default App;