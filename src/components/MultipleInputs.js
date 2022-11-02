import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function MultipleInputs() {

    const history = useNavigate();

    const [userInfo,setUserInfo] = useState({
        address : "",
        city : "",
        state: "",
        zipCode : "",
        email : ""
    })

    const handleChange = (e)=>{
        const name = e.target.name;
        const value= e.target.value;

        
        setUserInfo({...userInfo, [name]: value})
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log("submitted")
        history("/")
    }

  return (
    <div>

        <h1>
            header
        </h1>
        <div>
            basic Info
        </div>
        <form action = "" >
            <div>
            <label >
                Address:
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
            <button>
                Cancel
            </button>
            <button onClick={handleSubmit}>
                Save
            </button>
            </div>
            
        </form>
    </div>
  )
}
