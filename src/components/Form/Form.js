import React, {useRef} from 'react';


const Form = ({dispatch}) => {
    const catInput = useRef();

    const form = (e) => {
        e.preventDefault();
        e.target.reset()
    }

    const saveCat = () => {
        dispatch({type: 'saveCat', payload: {cat:catInput.current.value}})
    }

    return (
        <form onSubmit={form} >
            <input type='text' placeholder={'cat'} ref={catInput} />
            <button onClick={saveCat}> save </button>
        </form>
    );
};

export default Form;