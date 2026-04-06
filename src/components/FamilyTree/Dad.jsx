import React from 'react';
import MySelf from './MySelf';
import Brother from './Brother';
import Sister from './Sister';

const Dad = () => {
    return (
        <div>
            <h2>This is our Dad</h2>
            <MySelf></MySelf>
            <Brother></Brother>
            <Sister></Sister>
        </div>
    );
};

export default Dad;