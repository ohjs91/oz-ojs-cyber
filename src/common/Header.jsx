import React from 'react';
import { Link } from 'react-router-dom';
import IconBtn from '../components/IconBtn';
import SearchIcon from '/src/assets/images/svg/Search.svg?react';
import CartIcon from '/src/assets/images/svg/Cart.svg?react';
import FavoritesIcon from '/src/assets/images/svg/Favorites.svg?react';
import logoImage from '../assets/Images/img_logo.png';
const Header = () => {
  return (
    <header className="header">
      <div className="inner">
        <div className="header_search_wrap">
          <h1 className="logo">
            <Link className="asd" to={'/'}>
              <img src={logoImage} alt="cyber 로고" />
            </Link>
          </h1>
          <div className="header_search">
            <input
              className="header_search_input"
              type="text"
              placeholder="Search"
            />
            <IconBtn className="header_search_btn" size={'24'}>
              <SearchIcon />
            </IconBtn>
          </div>
        </div>
        <div className="my_item_wrap">
          <IconBtn className="header_search_btn" size={'32'}>
            <FavoritesIcon />
          </IconBtn>
          <IconBtn className="header_search_btn" size={'32'}>
            <CartIcon />
          </IconBtn>
        </div>
      </div>
    </header>
  );
};

export default Header;
