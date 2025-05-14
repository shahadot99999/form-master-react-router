import './App.css'
import ReuseableForm from './components/ReuseableForm/ReuseableForm'
//import HookForm from './components/HookForm/HookForm'
//import RefFrom from './components/RefFrom/RefFrom'
//import StateFulForm from './components/StateFulForm/StateFulForm'
//import SimpleForm from './components/SimpleForm/SimpleForm'

function App() {

   const handleSinUpSubmit = data =>{
        //e.preventDefault();
        console.log('sign up dta', data);
    }

    const handleUpDateProfile = data =>{
      console.log('update profile', data);
    }

  return (
    <>
      
      {/* <h1>Vite + React</h1> */}
      {/* <SimpleForm></SimpleForm> */}
       {/* <StateFulForm></StateFulForm>     */}
       {/* <RefFrom></RefFrom> */}
       {/* <HookForm></HookForm> */}
       <ReuseableForm 
       formTitle={'Sign up'}
        handleSubmit={handleSinUpSubmit}>
         <div>
          <h2>Sign Up</h2>
          <p>please sign up right now</p>
         </div>

        </ReuseableForm>
       <ReuseableForm 
       formTitle={'Profile update'} 
       handleSubmit={handleUpDateProfile}
        submitBtnText={'Update'}>
          <div>
            <h2>Update profile</h2>
            <p>Always keep your profile updated</p>
          </div>
        </ReuseableForm>
    </>
  )
}

export default App
