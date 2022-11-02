import React, {useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import BasicInfo from '../components/BasicInfo';
import { AppContext } from '../context';

export default function Homepage() {

    const history = useNavigate();
    const {userInfo} = useContext(AppContext)

    const hanldeEditButton = (e) =>{
        e.preventDefault();
        history("/editinfo")
    }

    return (
        <div>
            <BasicInfo />
            <h1>Contact Information</h1>
            <button onClick={hanldeEditButton} >
                Edit info
            </button>

            <div>
                <h4>Address: </h4>
                <p>{userInfo.address}</p>
            </div>
            <div>
                <h4>City: </h4>
                <p>{userInfo.city}</p>
            </div>
            <div>
                <h4>zipCode: </h4>
                <p>{userInfo.zipCode}</p>
            </div>
            <div>
                <h4>State: </h4>
                <p>{userInfo.state}</p>
            </div>
            <div>
                <h4>Email: </h4>
                <p>{userInfo.email}</p>
            </div>
        </div>
    )
}
