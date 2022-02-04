import React, {useReducer} from "react";
import Form from "./components/Form/Form";
import Cats from "./components/Cats/Cats";
const reducer = (state, action) => {
    switch (action.type) {
        case 'saveCat':

            return {...state, cats: [...state.cats, {id: new Date().getTime(), name:action.payload.cat}]}
        case 'deleteCat':
            return {...state, cats:state.cats.filter(cat=>cat.id !== action.payload.id)}


    }
}

const App = () => {
   const [{cats}, dispatch] = useReducer(reducer, {cats: []})

    return (
        <div>
            <Form dispatch={dispatch()}/>
             <Cats cats={cats}/>
        </div>
    );
}

export default App;