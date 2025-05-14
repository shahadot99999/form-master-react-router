import Cousin from "../Cousin/Cousin";


const Aunty = () => {
    return (
        <div>
            <h2>Aunty</h2>
            <section className="flex">
              <Cousin name={'Dalim'}></Cousin>
              <Cousin name={'Aki'}></Cousin>
            </section>
        </div>
    );
};

export default Aunty;