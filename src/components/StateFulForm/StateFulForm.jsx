import { useState } from "react";


const StateFulForm = () => {

    const [name, setName]=useState('');
    const [email, setEmail]= useState(null);
    const [password, setPassword]= useState(null);
    const [error, setError]= useState('');

    const handleSubmit = e =>{
      e.preventDefault();
       if(password.length <6){
        setError('password must be 6 character or long')
       }
       else{
        setError('');
        console.log(name, email, password);
       }
       //console.log(name,email, password);
    }

    const handleNameChange = e=>{
        setName(e.target.value);
    }
    const handleEmailChange = e=>{
        console.log(e.target.value);
        setEmail(e.target.value);
    }
    const handlePasswordChange = e=>{
        setPassword(e.target.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input
                value={name} onChange={handleNameChange}
                type="text" name="name" />
                <br />
                <input 
                 
                onChange={handleEmailChange}
                type="email" name="email" id="" />
                <br />
                <input
                onChange={handlePasswordChange}
                type="password" name="password" required />
                <br />
                <input type="submit" value="submit" />
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StateFulForm;



// import { useState } from "react";

// const StateFulForm = () => {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');

//     const handleSubmit = e => {
//         e.preventDefault();
//         if (password.length < 6) {
//             setError('Password must be at least 6 characters long');
//         } else {
//             setError('');
//             console.log(name, email, password);
//         }
//     };

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     value={name}
//                     onChange={e => setName(e.target.value)}
//                     type="text"
//                     name="name"
//                 />
//                 <br />
//                 <input
//                     value={email}
//                     onChange={e => setEmail(e.target.value)}
//                     type="email"
//                     name="email"
//                 />
//                 <br />
//                 <input
//                     value={password}
//                     onChange={e => setPassword(e.target.value)}
//                     type="password"
//                     name="password"
//                     required
//                 />
//                 <br />
//                 <input type="submit" value="Submit" />
//                 {error && <p style={{ color: "red" }}>{error}</p>}
//             </form>
//         </div>
//     );
// };

// export default StateFulForm;
