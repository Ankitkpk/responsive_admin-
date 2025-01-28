import React from 'react';
import { topDealUsers } from '../../data'; 
import './TopBox.scss';

const TopBox = () => {
  return (
    <div>
      <h1>Top Deals</h1>
      {topDealUsers.map((user, index) => (
        <div className="topdetailsuser" key={index}>
          <div className='userdetails' >
            <img src={user.img} alt={user.username} />
            <div className='topdetais'>
              <span className='username'>{user.username}</span>
              <span className='useremail'>{user.email}</span>
            </div>
          </div>
          <span className='amount'>${user.amount}</span>
        </div>
      ))}
    </div>
  );
};

export default TopBox;
