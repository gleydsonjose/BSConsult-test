import React, {FC} from 'react';

interface OurProductsBtnSlidesProps {
  mobileWidth: boolean;
  mobileSlideCurrentNumber: number;
  type: string;
  limitNumber: number;
  itemsListLength: number;
  handleBtnSlides: (dispatchType: string) => void;
}

const OurProductsBtnSlides: FC<OurProductsBtnSlidesProps> = ({
  mobileWidth, mobileSlideCurrentNumber, type, limitNumber, itemsListLength, handleBtnSlides, children
}) => {
  let ourProductsBtnSlidesClass = 'our-products__btn-slides';
  let ourProductsBtnSlidesActive = true;
  let ourProductsSvgSlidesClass = 'our-products__svg-slides';

  if(mobileWidth) {
    ourProductsBtnSlidesClass = ourProductsBtnSlidesClass +=
      mobileSlideCurrentNumber === limitNumber ? " disabled" : "";
    ourProductsBtnSlidesActive = mobileSlideCurrentNumber === limitNumber ? true : false;
    ourProductsSvgSlidesClass = ourProductsSvgSlidesClass += mobileSlideCurrentNumber === limitNumber ? " disabled" : "";
  } else {
    ourProductsBtnSlidesClass = ourProductsBtnSlidesClass +=
      itemsListLength === 1 ? " disabled" : "";
    ourProductsBtnSlidesActive = itemsListLength === 1 ? true : false;
    ourProductsSvgSlidesClass = ourProductsSvgSlidesClass += itemsListLength === 1 ? " disabled" : "";
  }

  return (
    <button
      className={ourProductsBtnSlidesClass}
      onClick={() => handleBtnSlides(type)}
      disabled={ourProductsBtnSlidesActive}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"
        className={ourProductsSvgSlidesClass}>
        {children}
      </svg>
    </button>
  );
}

export default OurProductsBtnSlides;