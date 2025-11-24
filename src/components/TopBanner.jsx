import React from 'react';
import Btn from '../components/Btn';
const TopBanner = () => {
  return (
    <div className="top_banner">
      <div className="inner">
        <div className="top_banner_txt">
          <span className="top_txt">Pro.Beyond.</span>
          <p>
            IPhone 14 <strong>Pro</strong>
          </p>
          <span className="bottom_txt">
            Created to change everything for the better. For everyone
          </span>
          <Btn type={'line'} color={'white'} to={'/shop'}>
            Shop Now
          </Btn>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
