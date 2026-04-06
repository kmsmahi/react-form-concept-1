import React from 'react';
import MySelf from './MySelf';
import Brother from './Brother';
import Sister from './Sister';

const Dad = ({asset}) => {
    return (
        <div>
            <h2>This is our Dad</h2>
            <MySelf asset={asset}></MySelf>
            <Brother></Brother>
            <Sister></Sister>
        </div>
    );
};

export default Dad;