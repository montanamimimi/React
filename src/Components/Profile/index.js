import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { toggleCheckbox } from '../../Store/profile/actions';
import { changeName } from '../../Store/profile/actions';

export const Profile = () => {
    
    const state = useSelector(state => state);    
    const [value, setValue] = useState(state.name);
    const dispatch = useDispatch();

    const handleChangeText = (e) => {
        setValue(e.target.value)
    }

    const handleChange = () => {
        dispatch(toggleCheckbox);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(changeName(value));
    }

    return (
        <>
            <h1>Your  profile</h1>  
            <input type="checkbox" checked={state.checkbox} onChange={handleChange} />
            <form onSubmit={handleSubmit}>
                <input type="text" value={state.name} onChange={handleChangeText} />    
                <input type="submit" />
            </form>
            
            
        </>
    )

}

export default Profile;