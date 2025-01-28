import React from 'react';
import { menu } from '../../data.ts';
import './menu.scss'
const Menu = () => {
  return (
    <div className='menu'>
      {menu.map((item) => (
        <section className='menusection' key={item.id}>
          <span className='menutitle'>{item.title.toUpperCase()}</span>
          <ul className='menu_options'>
            {item.listItems.map((listItem) => (
              <li key={listItem.id}>
                <a href={listItem.url}>
                  <img src={listItem.icon} alt={listItem.title} />
                  <span>{listItem.title}</span> 
                </a>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
};

export default Menu;
