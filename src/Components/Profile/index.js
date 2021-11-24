import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { toggleCheckbox } from '../../Store/profile/actions';
import { changeName } from '../../Store/profile/actions';
import { selectName, checkboxStatus } from '../../Store/profile/selectors';

export const Profile = () => {
    
    const name = useSelector(selectName);    
    const checkbox = useSelector(checkboxStatus);
    const [value, setValue] = useState(name);
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
            <input type="checkbox" checked={checkbox} onChange={handleChange} />
            <form onSubmit={handleSubmit}>
                <input type="text" value={value} onChange={handleChangeText} />    
                <input type="submit" />
            </form>
            
            
        </>
    )

}

export default Profile;