import Cousin from "../Cousin/Cousin";


const Uncle = ({asset}) => {
    return (
        <div>
            <h2>Uncle</h2>
            <section className="flex">
             <Cousin name={'Rabab'} asset={asset} ></Cousin>
             <Cousin name={'Sanjida'}></Cousin>
            </section>
        </div>
    );
};

export default Uncle;