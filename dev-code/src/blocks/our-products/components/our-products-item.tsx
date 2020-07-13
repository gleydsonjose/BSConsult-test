import React, {FC} from 'react';

interface OurProductsItemProps {
  mobileWidth: boolean;
  imgSrc: string;
  imgAlt: string;
  title: string;
  price: string;
  blockIndex?: number;
  desktopTransitionStatus?: 0 | 1;
  mobileTransitionStatus?: 0 | 1 | 2;
  effectsTransition: () => void;
  currentBtnSlide?: 'back' | 'next';
  blocksLimit?: number;
}

const OurProductsItem: FC<OurProductsItemProps> = ({
  mobileWidth, imgSrc, imgAlt, title, price, blockIndex, desktopTransitionStatus, mobileTransitionStatus, effectsTransition, currentBtnSlide, blocksLimit
}) => {
  let ourProductsItemClass = "our-products__item";

  if(mobileWidth) {
    switch (mobileTransitionStatus) {
      case 0:
        ourProductsItemClass = 'our-products__item';
        break;
      case 1:
        ourProductsItemClass = 'our-products__item our-products__item_slide-mobile_out';
        break;
      case 2:
        ourProductsItemClass = 'our-products__item our-products__item_slide-mobile_in';
        break;
    }
  } else {
    switch(currentBtnSlide) {
      case 'back':
        if(blockIndex === blocksLimit!-1 && desktopTransitionStatus === 1) {
          ourProductsItemClass = `${ourProductsItemClass} our-products__item_slide-desktop_out`;
          break;
        }
        break;
      case 'next':
        if(blockIndex === 0 && desktopTransitionStatus === 1) {
          ourProductsItemClass = `${ourProductsItemClass} our-products__item_slide-desktop_out`;
          break;
        }
        break;
      default:
        throw new Error("This button don't exist!");
    }
  }

  return (
    <div className={ourProductsItemClass} onTransitionEnd={effectsTransition}>
      <img src={`${process.env.PUBLIC_URL}${imgSrc}`} alt={imgAlt}/>
      <h2 className="our-products__item-title">{title}</h2>
      <p className="our-products__item-price">{price}</p>
    </div>
  );
}

export default OurProductsItem;