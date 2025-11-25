import React from 'react';
import { Link } from 'react-router-dom';

import PcPlayStationImg from '../assets/Images/img_playstation.png';
import MoPlayStationImg from '../assets/Images/img_playstation_mo.png';
import PcAirPodsnImg from '../assets/Images/img_airpodsmax.png';
import MoAirPodsnImg from '../assets/Images/img_airpodsmax_mo.png';
import PcVisionProImg from '../assets/Images/img_visionpro.png';
import MoVisionProImg from '../assets/Images/img_visionpro_mo.png';
import PcMacBookImg from '../assets/Images/img_macbook.png';
import MoMacBookImg from '../assets/Images/img_macbook_mo.png';

const ProdItemsBanner = () => {
  return (
    <div className="prod_banner">
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
