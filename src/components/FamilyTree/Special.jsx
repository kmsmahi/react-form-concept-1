
import { useContext } from 'react';
import { AssetContext } from './FamilyTree';

const Special = ({asset}) => {
    const newAsset=useContext(AssetContext);
    console.log('Asset from Grandpa: ', asset);
    console.log('Asset from context: ', newAsset);
    return (
        <div>
            <h2>This is a special component</h2>
            <p>My asset is: {asset}</p>
            <p>New asset is: {newAsset}</p>
        </div>
    );
};

export default Special;