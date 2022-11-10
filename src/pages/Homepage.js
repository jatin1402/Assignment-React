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
        <div  className="container mt-3" >
            <BasicInfo />
            <h4>Contact Information</h4>
            <button onClick={hanldeEditButton} >
                Edit info
            </button>

            <div className='mb-3'>
                <div className="font-weight-light">Address: </div>
                <div >{userInfo.address}</div>
            </div>
            <div className='mb-3'>
                <div className="font-weight-light">City: </div>
                <div >{userInfo.city}</div>
            </div>
            <div className='mb-3'>
                <div className="font-weight-light">zipCode: </div>
                <div >{userInfo.zipCode}</div>
            </div>
            <div className='mb-3'>
                <div className="font-weight-light">State: </div>
                <div >{userInfo.state}</div>
            </div>
            <div className='mb-3'>
                <div className="font-weight-light">Email: </div>
                <div >{userInfo.email}</div>
            </div>
        </div>
    )
}
