import React from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context';

export default function MultipleInputs() {

    const history = useNavigate();

    const {userInfo, setUserInfo} = useContext(AppContext)

    const handleChange = (e)=>{
        const name = e.target.name;
        const value= e.target.value;
        
        setUserInfo({...userInfo, [name]: value})
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        history("/")
    }

    const handleCancel = (e) =>{
        e.preventDefault();
        history("/")
    }

  return (
    <div>
        <form action = "" onSubmit={handleSubmit} >
            <div>
            <label >
                Address
            </label><br/>
            <input type="text" name = "address" value={userInfo.address} required onChange={(e) => {handleChange(e)}} />
            </div>
            <div>
            <label >
                City:
            </label><br/>
            <input type="text" name = "city" value={userInfo.city} required onChange={(e) => {handleChange(e)}} />
            </div>
            <div>
            <label >
                State:
            </label><br/>
            <input type="text" name = "state" value={userInfo.state} required onChange={(e) => {handleChange(e)}} />
            </div>
            <div>
            <label >
                ZipCode:
            </label><br/>
            <input type="text" name = "zipCode" value={userInfo.zipCode} required onChange={(e) => {handleChange(e)}} />
            </div>
            <div>
            <label >
                Email:
            </label><br/>
            <input type="text" name = "email" value={userInfo.email} required onChange={(e) => {handleChange(e)}} />
            </div>
            <div display="flex">
            <button type='submit' onClick={handleCancel}>
                Cancel
            </button>
            <button type='submit'>
                Save
            </button>
            </div>  
        </form>
    </div>
  )
}
