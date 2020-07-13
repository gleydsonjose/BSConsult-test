import React, {FC, useContext} from 'react';
import ProductsSectionBtnSlides from './products-section-btn-slides';
import ProductsSectionItem from './products-section-item';
import {viewportWidthContext} from '../products-section';

interface ProductsSectionLastGroupProps {
  slideCurrentNumber: number;
  mobileWidth: number;
  itemsList: {
    "id": number,
    "imgSrc": string,
    "imgAlt": string,
    "title": string
  }[],
  handleSlide: (dispatchType: string, svgBtnID?: number) => void;
  itemTransition: () => void;
  transitionStatus: 0 | 1 | 2;
}

const ProductsSectionLastGroup: FC<ProductsSectionLastGroupProps> = ({
  slideCurrentNumber, mobileWidth, itemsList, handleSlide, itemTransition, transitionStatus
}) => {
  let viewportWidth = useContext(viewportWidthContext);

  return (
    <div className="products-section__last-group">
      <ProductsSectionBtnSlides
        slideCurrentNumber={slideCurrentNumber}
        type="decrement"
        limitNumber={0}
        handleSlide={handleSlide}>
          <path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"/>
      </ProductsSectionBtnSlides>
      {viewportWidth < mobileWidth ?
        <ProductsSectionItem
          imgSrc={itemsList[slideCurrentNumber].imgSrc}
          imgAlt={itemsList[slideCurrentNumber].imgAlt}
          title={itemsList[slideCurrentNumber].title}
          itemTransition={itemTransition}
          transitionStatus={transitionStatus}/>
      :
      <>
        {itemsList.map(item => <ProductsSectionItem
          key={item.id}
          imgSrc={item.imgSrc}
          imgAlt={item.imgAlt}
          title={item.title}/>)}
      </>}
      <ProductsSectionBtnSlides
        slideCurrentNumber={slideCurrentNumber}
        type="increment"
        limitNumber={itemsList.length-1}
        handleSlide={handleSlide}>
          <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/>
      </ProductsSectionBtnSlides>
    </div>
  );
}

export default ProductsSectionLastGroup;