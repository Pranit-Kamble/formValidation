import React from 'react'
import './App.css'

const App = () => {
  const handledate = (e)=>{
    const date = e.target.value
    console.log(2023-date.slice(0,4))
    document.getElementById('age').value=2023-date.slice(0,4)
  }
  const handleRange=(e)=>{
    console.log(e.target.value)
    document.getElementById('salery').value = e.target.value
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    alert('Saved Sucessfully')
    document.querySelectorAll('input').forEach((item)=>{
      item.value=''
    })
  }
  return (
    <div className='container'>
      <form onSubmit={(e)=>handleSubmit(e)}>
        <h1 style={{fontSize:'34px'}}>Validation Form</h1>
        <div className='input_container'>
        <label >Name : </label>
        <input pattern='[A-z]' type="text" />
        </div>
        <div className='input_container'>
        <label>Birth Date : </label>
        <input onChange={(e)=>handledate(e)} style={{backgroundColor:'blueviolet'}} type="date" />
        </div>
        <div className='input_container'>
        <label>Age : </label>
        <input id='age' type="number" />
        </div>
        <div className='input_container'>
        <label>Mobile No : </label>
        <input min='10' max='15' type="number" />
        </div>
        <div className='input_container'>
        <label htmlFor="">Salary : </label><input id='salery' style={{border:'2px solid black',width:'60px'}} type="text" />
        <input type="range" min='2000' max='10000' onChange={(e)=>handleRange(e)}/>
        </div>
        <div className='input_container'>
        <label htmlFor="">Address : </label>
        <textarea name="" id="" cols="30" rows="5"></textarea>
        </div>
        <div className='input_container'>
        <label htmlFor='gender'>Gender : </label>
        <span><input className='radio' type="radio" name='gender' /><label htmlFor="">Male</label></span>
        <span><input className='radio' type="radio" name='gender' /><label htmlFor="">Female</label></span>
        </div>
        <div className='input_container'>
        <label htmlFor="">Upload : </label>
        <input accept='.doc,.docx' type="file" />
        </div>
        <div className='input_container'>
        <label htmlFor="">Country : </label>
        <select name="" id="">
          <option value="">India</option>
          <option value="">USA</option>
          <option value="">UK</option>
          <option value="">Japan</option>
        </select>
        </div>
        <button className='submit-btn'>Save</button>
      </form>
    </div>
  )
}

export default App