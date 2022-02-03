import React, {useReducer} from 'react';
import css from './components/Test/Test.module.css';

const reducer = (state, action) => {
    switch(action.type) {
        case 'inc':
            return {...state, count1: state.count1 + 1}
        case 'dec':
            return {...state, count1: state.count1 - 1}
        case 'reset':
            return {...state, count1: 0}

        case '+' :
            return {...state, counter1: state.counter1 + 1, counter2: (state.counter2 + (9 / 5))}
        case  '-' :
            return {...state, state, counter1: state.counter1 - 1, counter2: (state.counter2 - (9 / 5))}
        case 'reload':
            return {...state, counter1: action.payload, counter2: 32}

        case 'addition':
            return {...state, num1: (state.num2+ state.num3)}
        case 'subtraction':
            return {...state, num1: (state.num2 - state.num3)}
        case 'restart':
            return {...state, num1: 0}


    }
    return state

};


const App = () => {
   const [state, dispatch] = useReducer(reducer, {count1: 0, counter1: 0, counter2: 32, num1: 0, num2: 1700, num3: 458});




    return (
        <div className={css.cover}>
            <div className={css.mainWrap}>
                <h1 className={css.number}> Number: {state.count1} </h1>
                <div className={css.buttonWrap}>
                    <div className={css.btn}>
                        <button onClick={()=>dispatch({type: 'inc'})} > increase </button> </div>
                    <div className={css.btn}>
                        <button onClick={()=>dispatch({type: 'dec'})}> decrease </button></div>
                    <div className={css.btn}>
                        <button onClick={()=>dispatch({type: 'reset'})}> reset </button></div>
                </div>


            <h1 className={css.number}> Measure the temperature: {state.counter2} </h1>
                <div>°С: {state.counter1}</div>
                <div>°F: {state.counter2}</div>
                <div className={css.buttonWrap}>
                <div className={css.btn}>
                    <button onClick={()=>dispatch({type: '+'})} > + </button> </div>
                <div className={css.btn}>
                    <button onClick={()=>dispatch({type: '-'})}> - </button></div>
                <div className={css.btn}>
                    <button onClick={()=>dispatch({type: 'reload',  payload: 0})}> reload </button></div>
                </div>

                <h1 className={css.number}> Calculate: {state.num1} </h1>
                <div>   1700 + 458 </div>
                <div> 1700 - 458 </div>
                <div className={css.buttonWrap}>
                    <div className={css.btn}>
                        <button onClick={()=>dispatch({type: 'addition'})} > plus </button> </div>
                    <div className={css.btn}>
                        <button onClick={()=>dispatch({type: 'subtraction'})}> minus </button></div>
                    <div className={css.btn}>
                        <button onClick={()=>dispatch({type: 'restart', payload: 0})}> restart </button></div>
                </div>


            </div>
        </div>
    );
};

export default App;