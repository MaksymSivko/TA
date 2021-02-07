import React, { useEffect, useState } from 'react';

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

export const Header = () => {
  const [headerFixrd, setHeaderFixrd] = useState(false);
  const [headerActive, setHeaderActive] = useState(false);
  const [prevScrollTop, setPrevScrollTop] = useState(0);

  const fixedheader = headerFixrd ? 'fixed' : '';
  const activeHeader = headerActive ? 'active' : '';

  const handleScroll = (prevH) => {
    if (window.pageYOffset >= 300) {
      if (prevH >= window.pageYOffset + 20) {
        setHeaderFixrd(false);
      } else if (prevH <= window.pageYOffset - 20) {
        setHeaderFixrd(true);
      }
    } else if (window.pageYOffset >= 200) {
      setHeaderActive(true);
    } else {
      setHeaderActive(false);
      setHeaderFixrd(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', function () {
      handleScroll(prevScrollTop);
      setPrevScrollTop(window.pageYOffset);
    });
    return () => {
      window.removeEventListener('scroll', function () {
        handleScroll(prevScrollTop);
        setPrevScrollTop(window.pageYOffset);
      });
    };
  }, [prevScrollTop]);

  return (
    <>
      <header className={`header ${fixedheader} ${activeHeader}`}>
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
      <div className="header_height"></div>
    </>
  );
};
