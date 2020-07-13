import React from 'react';
import Header from './blocks/header/header';
import ProductsSection from './blocks/products-section/products-section';
import AboutUs from './blocks/about-us/about-us';
import BuyNow from './blocks/buy-now/buy-now';
import OurProducts from './blocks/our-products/our-products';
import Newsletter from './blocks/newsletter/newsletter';
import Footer from './blocks/footer/footer';
import './blocks/main.css';
import ReactDOM from 'react-dom';
function App() {
    return (<main className="main">
      <Header />
      <ProductsSection />
      <AboutUs />
      <BuyNow />
      <OurProducts />
      <Newsletter />
      <Footer />
    </main>);
}
ReactDOM.render(<App />, document.getElementById('root'));