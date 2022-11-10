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
    <div >

<form class="form-group form-group-sm" onSubmit={handleSubmit}>
  <div class="mb-3">
    <label  class="form-label">Address: </label><br />
    <input type="text" class="form-control" name = "address" value={userInfo.address} required onChange={(e) => {handleChange(e)}} />
   
  </div>
  <div class="mb-3">
    <label class="form-label">City: </label><br />
    <input type="text" class="form-control" name = "city" value={userInfo.city} required onChange={(e) => {handleChange(e)}} />
  </div>
  <div class="mb-3">
    <label class="form-label">State: </label><br />
    <input type="text" class="form-control" name = "state" value={userInfo.state} required onChange={(e) => {handleChange(e)}} />
  </div>

  <div class="mb-3">
    <label class="form-label">ZipCode: </label><br />
    <input type="text" class="form-control" name = "zipCode" value={userInfo.zipCode} required onChange={(e) => {handleChange(e)}} />
  </div>
  <div class="mb-3">
    <label class="form-label">Email: </label><br />
    <input type="text" class="form-control" name = "email" value={userInfo.city} required onChange={(e) => {handleChange(e)}} />
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
  <button type='submit' onClick={handleCancel}>
                Cancel
            </button>
</form>
        {/* <form action = "" onSubmit={handleSubmit} >
            <div>
            <label >
                Address
            </label><br/>
            <input type="text"  />
            </div>
            <div>
            <label >
                City:
            </label><br/>
            <input type="text"  />
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
        </form> */}
    </div>
  )
}
