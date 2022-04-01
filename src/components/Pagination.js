import React from 'react';
import {Button} from '@material-ui/core';
const Pagination = ({increment,decrement, totalItems, itemsPerPage, setPage}) => {

    const pagesNumbers = [];
    for(let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++){
        pagesNumbers.push(i);
    }

    return (
        <div>
            <Button variant='outlined' onClick={decrement}>Anterior</Button>

            {pagesNumbers.map(page => (
                <button onClick={() => setPage(page)} key={page}>
                    {page}
                </button>
            ))}
            <Button variant='outlined' onClick={increment}>Siguiente</Button>
            

        </div>
    );
};

export default Pagination;