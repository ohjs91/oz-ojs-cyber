import React from 'react';
import { Link } from 'react-router-dom';
import GamingIcon from '/src/assets/images/svg/Gaming.svg?react';
import ComputersIcon from '/src/assets/images/svg/Computers.svg?react';
import SmartWatchesIcon from '/src/assets/images/svg/Smart_Watches.svg?react';
import CamerasIcon from '/src/assets/images/svg/Cameras.svg?react';
import HeadphonesIcon from '/src/assets/images/svg/Headphones.svg?react';
import PhonesIcon from '/src/assets/images/svg/Phones.svg?react';

const categoryData = [
  { name: 'Smartphones', category: 'smartphones', Icon: PhonesIcon },
  { name: 'Groceries', category: 'groceries', Icon: GamingIcon },
  { name: 'Laptops', category: 'laptops', Icon: ComputersIcon },
  { name: 'Mens-watches', category: 'mens-watches', Icon: SmartWatchesIcon },
  {
    name: 'Mobile accessories',
    category: 'mobile-accessories',
    Icon: CamerasIcon,
  },
  { name: 'Tablets', category: 'tablets', Icon: HeadphonesIcon },
];
const Category = () => {
  return (
    <div className="category_wrap">
      <div className="inner">
        <strong className="category_tit">Browse By Category</strong>
        <ul className="category_list">
          {categoryData.map((category) => (
            <li className="category_list_item" key={category.category}>
              <Link className="" to={`/product/${category.category}`}>
                <category.Icon />
                <span>{category.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Category;
