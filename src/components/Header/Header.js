import React from 'react';

import './style.scss';

const list_menu = [
  { category: 'Главная', link: '/#' },
  { category: 'о нас', link: '/#' },
  { category: 'карьера', link: '/#' },
  { category: 'Контакты', link: '/#' },
];
const list_leng = [
  { category: 'en', active: '' },
  { category: 'uk', active: '' },
  { category: 'ru', active: 'active' },
];

// const resetScrollEffect = ({ element }) => {
//   element.current.getScrollableNode().children[0].scrollTop = 0;
// };

export const Header = () => {
  return (
    <header className="header">
      <div className="wrapper">
        <a href="/#" className="logo">
          T|A
        </a>
        <div className="menu_btn">
          <i></i>
          <i></i>
          <i></i>
        </div>
        <div className="mob_scroll">
          <ul className="menu">
            {list_menu.map((el, index) => (
              <li className="menu_li" key={`menu_li-key-${index}`}>
                <a href={el.link} className="menu_a">
                  {el.category}
                </a>
              </li>
            ))}
          </ul>
          <ul className="lang">
            {list_leng.map((el, index) => (
              <li
                className={`lang_li ${el.active}`}
                key={`lang_li-key-${index}`}
              >
                <div className="lang_a">{el.category}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};
