import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
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
            <Button className="header_search_btn" size={'24'}>
              <SearchIcon />
            </Button>
          </div>
        </div>
        <div className="my_item_wrap">
          <Button uiType={'icon'} className={'size-32'}>
            <FavoritesIcon />
          </Button>
          <Button uiType={'icon'} className={'size-32'}>
            <CartIcon />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
