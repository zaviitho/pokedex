import React from 'react';
import {Button} from '@material-ui/core';
const Pagination = ({increment,decrement, totalItems, itemsPerPage, setPage}) => {

    const pagesNumbers = [];
    for(let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++){
        pagesNumbers.push(i);
    }

    return (
        <div className="pagination">
            <Button variant='outlined' onClick={decrement}>Anterior</Button>

            {pagesNumbers.map(page => (
                <Button onClick={() => setPage(page)} key={page}>
                    {page}
                </Button>
            ))}
            <Button variant='outlined' onClick={increment}>Siguiente</Button>
            

        </div>
    );
};

export default Pagination;