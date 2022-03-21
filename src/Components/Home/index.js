import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logIn } from "../../services/firebase";
import { SignForm } from "../SignForm";

export const Home = () => {

    const [error, setError] = useState('');
    const dispatch = useDispatch();
    const name = useSelector((state) => state.name);

    const handleSignIn = async (email, pass) => {
        try {
            await logIn(email, pass);            
        } catch (err) {
            console.log(err);
            setError(err.message);
        }        
    };
    
    return (
        <>
           <div>
               <h1>Hello my friend!</h1>
               <SignForm onSubmit={handleSignIn} error={error} />
               <Link to="/signup">SignUp</Link>
           </div>
        </>
    )

}

export default Home;