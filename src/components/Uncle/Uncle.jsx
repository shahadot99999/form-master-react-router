import Cousin from "../Cousin/Cousin";


const Uncle = () => {
    return (
        <div>
            <h2>Uncle</h2>
            <section className="flex">
             <Cousin name={'Rabab'} ></Cousin>
             <Cousin name={'Sanjida'}></Cousin>
            </section>
        </div>
    );
};

export default Uncle;