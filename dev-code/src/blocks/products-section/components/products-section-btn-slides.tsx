import React, {FC} from 'react';

interface ProductsSectionBtnSlidesProps {
  slideCurrentNumber: number;
  type: string;
  limitNumber: number;
  handleSlide: (dispatchType: string, svgBtnID?: number) => void;
}

const ProductsSectionBtnSlides: FC<ProductsSectionBtnSlidesProps> = ({
  slideCurrentNumber, type, limitNumber, handleSlide, children
}) => {
  return (
    <button className={`products-section__btn-slides${
      slideCurrentNumber === limitNumber ? " disabled" : ""}`}
      onClick={() => handleSlide(type)}
      disabled={slideCurrentNumber === limitNumber ? true : false}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className={`products-section__svg-slides ${
        slideCurrentNumber === limitNumber && "disabled"}`}>
        {children}
      </svg>
    </button>
  );
}

export default ProductsSectionBtnSlides;