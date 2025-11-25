import React from 'react';

import TopBanner from '@/components/TopBanner';
import ProdItemsBanner from '@/components/ProdItemsBanner';
import Category from '@/components/Category';
const Home = () => {
  return (
    <>
      <TopBanner />
      <ProdItemsBanner />
      <Category />
    </>
  );
};

export default Home;
