import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Homepage(props) {

    const history = useNavigate();
    
    // const {userInfo} = props;
    // const {address, city, state, zipCode, email} = userInfo;
    const hanldeEditButton = (e) =>{
        e.preventDefault();
        history("/editInfo")
    }

    return (
        <div>
            <button onClick={hanldeEditButton}>
                Edit info
            </button>
        </div>
    )
}
