import React, {FC} from 'react';

interface ProductsSectionItemProps {
  imgSrc: string;
  imgAlt: string;
  title: string;
  itemTransition?: () => void;
  transitionStatus?: 0 | 1 | 2;
}

const ProductsSectionItem: FC<ProductsSectionItemProps> = ({
  imgSrc, imgAlt, title, itemTransition, transitionStatus
}) => {
  let classNameItem = 'products-section__item';

  switch (transitionStatus) {
    case 0:
      classNameItem = 'products-section__item';
      break;
    case 1:
      classNameItem = 'products-section__item products-section__item_slide_out';
      break;
    case 2:
      classNameItem = 'products-section__item products-section__item_slide_in';
      break;
  }

  return (
    <div className={classNameItem} onTransitionEnd={itemTransition}>
      <img src={`${process.env.PUBLIC_URL}${imgSrc}`} alt={imgAlt} className="products-section__img"/>
      <h2 className="products-section__title products-section__title_margin_top">{title}</h2>
      <button className="products-section__btn products-section__btn_margin_top">COMPRAR</button>
    </div>
  );
}

export default ProductsSectionItem;