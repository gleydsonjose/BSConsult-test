import React, {FC} from 'react';
import './buy-now.css';

const BuyNow: FC = () => {
  return (
    <section className="buy-now buy-now_margin_top">
      <h1 className="buy-now__title">COMPRE AGORA</h1>
      <p className="buy-now__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      <button className="buy-now__btn buy-now__btn_margin_top">COMPRAR</button>
    </section>
  );
}

export default BuyNow;