import { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";


const Special = ({asset}) => {

    const gift = useContext(AssetContext);
    return (
        <div>
            <h2>Special:{asset}</h2>
            <h3>Another:{gift}</h3>
        </div>
    );
};

export default Special;