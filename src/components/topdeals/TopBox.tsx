import React from 'react';
import { topDealUsers } from '../../data';
import '../topdeals/topbox.scss';

const TopBox = () => {
  return (
    <div className="topbox">
      <h1>Top Deals</h1>
      {topDealUsers.map((topdeal, index) => (
        <div key={index} className="topdeals">
          <div className="topdealsusers">
            <img src={topdeal.img} alt={`${topdeal.username}'s avatar`} />
            <div className="user-info">
              <span className="username">{topdeal.username}</span>
              <span className="email">{topdeal.email}</span>
            </div>
          </div>
          <span className="amount">${topdeal.amount}</span>
        </div>
      ))}
    </div>
  );
};

export default TopBox;
