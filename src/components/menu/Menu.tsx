import React from 'react';
import { Link } from 'react-router-dom';
import './menu.scss';
import { menu } from '../../data.ts';

const Menu = () => {
  return (
    <div className="menu">
      {menu.map((section) => (
        <div key={section.id} className="item">
          <span className="title">{section.title.toUpperCase()}</span>
          {section.listItems.map((listItem) => (
            <Link key={listItem.id} to={listItem.url} className="listItemTitle">
              <img src={listItem.icon} alt={`${listItem.title} Icon`} />
              <span >{listItem.title}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;

