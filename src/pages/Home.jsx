import React from 'react';
import Btn from '../components/Btn';
import IconBtn from '../components/IconBtn';
// import { ReactComponent as CartIcon } from '/src/assets/images/svg/Cart.svg';
import CartIcon from '/src/assets/images/svg/Cart.svg?react';
import FavoritesIcon from '/src/assets/images/svg/Favorites.svg?react';
import SearchIcon from '/src/assets/images/svg/Search.svg?react';
import TopBanner from '../components/TopBanner';
import ProdItemsBanner from '../components/ProdItemsBanner';
const Home = () => {
  return (
    <>
      {/* <Btn type={'line'}>Shop Now</Btn>
      <Btn type={'line'} color={'white'}>
        Shop Now
      </Btn>
      <Btn type={'bg'}>Buy Now</Btn>
      <IconBtn size={'32'}>
        <CartIcon />
      </IconBtn>
      <IconBtn size={'32'}>
        <SearchIcon />
      </IconBtn>
      <IconBtn size={'32'}>
        <FavoritesIcon />
      </IconBtn> */}
      <TopBanner />
      <ProdItemsBanner />
    </>
  );
};

export default Home;
