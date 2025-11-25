import React from 'react';
import { Link } from 'react-router-dom';

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
          <Link className="link_btn white_line" to={'/shop'}>
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
