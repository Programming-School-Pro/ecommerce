import React from 'react';

import { Product, FooterBanner, HeroBanner } from '../components';
import { client } from '../lib/client';

const Home = ({ products, bannerData }) => {
  return (
    <>

      {/* HeroBanner Component */}
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />

      <div className="products-heading">
        <h1>Best Selling Products</h1>
        <p>Websites for Many Developers</p>
      </div>

      <div className="products-container">
        {products.map((product) => <Product key={product._id} product={product} />)}
      </div>

      {/* Footer */}
      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </>
  );
}

export const getServerSideProps = async () => {
  const productQuery = '*[_type == "product"]'
  const products = await client.fetch(productQuery);
  const bannerQuery = '*[_type == "banner"]'
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}


export default Home;