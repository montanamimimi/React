import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { toggleCheckbox } from '../../Store/profile/actions';
import { selectName, checkboxStatus } from '../../Store/profile/selectors';
import { logOut, userRef } from '../../services/firebase';
import { onValue, set } from 'firebase/database';

export const Profile = () => {
    
    const name = useSelector(selectName);    
    const checkbox = useSelector(checkboxStatus);
    const [value, setValue] = useState(name);
    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = onValue(userRef, (snapshot) => {
            const userData = snapshot.val();
            setValue(userData?.name || "DN");
        });

        return unsubscribe;
    }, [setValue])

    // const handleSignOut = () => {
    //     dispatch(signOut());
    // }

    const handleChangeText = (e) => {
        setValue(e.target.value)
    }

    const handleChange = () => {
        dispatch(toggleCheckbox);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        set(userRef, {
            name: value,
        })
    }

    const handleLogOut = async () => {
        try {
            await logOut();            
        } catch (err) {
            console.log(err);
        }            
    }

    return (
        <>
            <h1>Your  profile</h1>  
            <input type="checkbox" checked={checkbox} onChange={handleChange} />
            <form onSubmit={handleSubmit}>
                <input type="text" value={value} onChange={handleChangeText} />    
                <input type="submit" />
            </form>

            <button onClick={handleLogOut}>SIGN OUT</button>
            
            
        </>
    )

}

export default Profile;