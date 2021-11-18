import { useSelector, useDispatch } from 'react-redux';
import { toggleCheckbox } from '../../Store/profile/actions';

export const Profile = () => {
    const state = useSelector(state => state);    
    const dispatch = useDispatch();

    const handleChange = () => {
        dispatch(toggleCheckbox);
    }

    return (
        <>
            <h1>Your  profile</h1>  
            <input type="checkbox" checked={state.checkbox} onChange={handleChange} />
            <span>{state.name}</span>
        </>
    )

}

export default Profile;