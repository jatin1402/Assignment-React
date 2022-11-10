import React from 'react'
import BasicInfo from '../components/BasicInfo'
import MultipleInputs from '../components/MultipleInputs'


export default function Editpage() {
  return (
    <div className='container mt-3'>
        <BasicInfo />
        <h4>Contact Information</h4>
        <MultipleInputs />
    </div>
  )
}
