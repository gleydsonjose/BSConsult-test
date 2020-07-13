import React, {FC} from 'react';

interface ProductsSectionFirstGroupProps {
  slideCurrentNumber: number;
  itemsList: {
    "id": number,
    "imgSrc": string,
    "imgAlt": string,
    "title": string
  }[],
  handleSlide: (dispatchType: string, svgBtnID?: number) => void;
}

const ProductsSectionFirstGroup: FC<ProductsSectionFirstGroupProps> = ({
  slideCurrentNumber, itemsList, handleSlide
}) => {
  function handleSvgBtn(svgID: number) {
    if(svgID !== slideCurrentNumber) {
      return handleSlide('directChange', svgID);
    }
  }

  return (
    <div className="products-section__first-group">
      {itemsList.map(item => 
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
          key={item.id}
          className={`products-section__svg${item.id === slideCurrentNumber ? " products-section__svg_active" : ""}`}
          onClick={() => handleSvgBtn(item.id)}>
          <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"/>
        </svg>)}
    </div>
  );
}

export default ProductsSectionFirstGroup;