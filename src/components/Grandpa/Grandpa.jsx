import { createContext } from "react";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import './Grandpa.css';


const AssetContext = createContext('gold');

const Grandpa = () => {

    const asset = 'diamond';
    return (
        <div className="grandpa ">
           <h2>Grandpa</h2>
           <section className="flex">
            {/* <Dad asset={asset}></Dad>
           <Uncle asset={asset}></Uncle>
           <Aunty></Aunty> */}

           <AssetContext.Provider value="gold">
            <Dad asset={asset}></Dad>
           <Uncle asset={asset}></Uncle>
           <Aunty></Aunty>
           </AssetContext.Provider>
           </section>
        </div>
    );
};

export default Grandpa;