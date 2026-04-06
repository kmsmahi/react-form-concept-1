import React from 'react';
import Special from './Special';

const MySelf = ({asset}) => {
    return (
        <div>
            <h1>This is myself</h1>
            <Special asset={asset}></Special>
        </div>
    );
};

export default MySelf;