import React from 'react'
import './Navbar.scss';
const Navbar = () => {
  return (
    <div className='Navbar'>
    <div className='logo'>
    <img src="logo.svg" alt="" />
    <span>Admin </span>
    </div>
    <div className='icons'>
        <img src="./search.svg" alt="" />
        <img src="./expand.svg" alt="" />
        <img src="./app.svg" alt="" />
         <div className='notifications'>
          <img src="./notifications.svg" alt="" />
          <div>1</div>
         </div>
         <div className='users'>
         <img
            src="https://images.pexels.com/photos/11038549/pexels-photo-11038549.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            alt=""
            className='user_image'
          />
          <span>jane</span>
         </div>
         <img src="./setting.svg" alt="" />
    </div>
    </div>
  )
}

export default Navbar