import { Link } from "react-router-dom";
import { SignForm } from "../SignForm";
import { signUp } from "../../services/firebase";
import { useState } from "react";

export const SignUp = () => {
    const [error, setError] = useState('');

    const handleSignUp = async (email, pass) => {
        try {
            await signUp(email, pass);            
        } catch (err) {
            console.log(err);
            setError(err.message);
        }
    };

    return (
        <>
            <SignForm onSubmit={handleSignUp} error={error} />
            <Link to="/">Sign in</Link>
        </>
    )
}