import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import CartIcon from '/src/assets/images/svg/Cart.svg?react';
import FavoritesIcon from '/src/assets/images/svg/Favorites.svg?react';
import SearchIcon from '/src/assets/images/svg/Search.svg?react';
import {
  PcPlayStationImg,
  MoPlayStationImg,
  PcAirPodsnImg,
  MoAirPodsnImg,
  PcVisionProImg,
  MoVisionProImg,
  PcMacBookImg,
  MoMacBookImg,
} from '../assets/images/index';

const ProdItemsBanner = () => {
  return (
    <div className="prod_banner">
      {/* <Button uiType={'line'} className={`black`}>
        Shop Now
      </Button>
      <Button uiType={'line'} className={`white`}>
        Shop Now
      </Button>
      <Button uiType={'bg'}>Shop Now</Button>
      <Button uiType={'icon'}>
        <CartIcon />
      </Button> */}
      <div className="prod_banner_area">
        <div className="item_area playstation">
          <div className="img_area">
            <img
              className="pc_view"
              src={PcPlayStationImg}
              alt="플레이스테이션 이미지"
            />
            <img
              className="mo_view"
              src={MoPlayStationImg}
              alt="플레이스테이션 이미지"
            />
          </div>
          <div className="txt_area">
            <strong>Playstation 5</strong>
            <p>
              Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O
              will redefine your PlayStation experience.
            </p>
          </div>
        </div>
        <div className="item_area airpods">
          <div className="img_area">
            <img className="pc_view" src={PcAirPodsnImg} alt="AirPods 이미지" />
            <img className="mo_view" src={MoAirPodsnImg} alt="AirPods 이미지" />
          </div>
          <div className="txt_area">
            <strong>
              <span>Apple </span>
              <span>AirPods </span>Max
            </strong>
            <p>Computational audio. Listen, it's powerful</p>
          </div>
        </div>
        <div className="item_area visionpro">
          <div className="img_area">
            <img
              className="pc_view"
              src={PcVisionProImg}
              alt="비전프로 이미지"
            />
            <img
              className="mo_view"
              src={MoVisionProImg}
              alt="비전프로 이미지"
            />
          </div>
          <div className="txt_area">
            <strong>
              <span>Apple </span>
              <span>Vision </span>Pro
            </strong>
            <p>An immersive way to experience entertainment</p>
          </div>
        </div>
      </div>
      <div className="prod_banner_area">
        <div className="item_area macbook">
          <div className="img_area">
            <img className="pc_view" src={PcMacBookImg} alt="맥북 이미지" />
            <img className="mo_view" src={MoMacBookImg} alt="맥북 이미지" />
          </div>
          <div className="txt_area">
            <strong>
              <span>Macbook </span>
              Air
            </strong>
            <p>
              The new 15‑inch MacBook Air makes room for more of what you love
              with a spacious Liquid Retina display.
            </p>
            <Link className="link_btn black_line" to={'/shop'}>
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProdItemsBanner;
