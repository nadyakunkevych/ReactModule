import React from 'react';
import Form from "../Form/Form";
import Cat from "../Cat/Cat";

const Cats = ({cats}) => {
    return (
        <div>
            {cats.map(cat=><Cat key={cat.id} cat={cat}/>)}
        {/*<Form/>*/}
        </div>
    );
};

export default Cats;