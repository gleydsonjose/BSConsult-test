import React, {FC, useState, createContext} from 'react';
import './products-section.css';
import {useViewportResize} from '../hooks';
import {useSlideChangeNumber} from '../hooks';
import ProductsSectionFirstGroup from './components/products-section-first-group';
import ProductsSectionLastGroup from './components/products-section-last-group';

let itemsList = [
  {
    "id": 0,
    "imgSrc": "/images/ca-pro.png",
    "imgAlt": "Ca Pró Product",
    "title": "Ca-Pró"
  },
  {
    "id": 1,
    "imgSrc": "/images/fe-pro.png",
    "imgAlt": "Fe Pró Product",
    "title": "Fe-Pró"
  },
  {
    "id": 2,
    "imgSrc": "/images/multibari.png",
    "imgAlt": "Multi-Bari Product",
    "title": "Multi-Bari"
  },
]
export const viewportWidthContext = createContext(0);

const ProductsSection: FC = () => {
  const viewportWidth = useViewportResize();
  const mobileWidth = 900;
  const [state, dispatch] = useSlideChangeNumber(itemsList.length);
  const [transitionStatus, setTransitionStatus] = useState<0 | 1 | 2>(0);
  const [currentBtnSlide, setCurrentBtnSlide] = useState("");
  const [svgBtnID, setSvgBtnID] = useState(0);

  function handleSlide(dispatchType: string, svgBtnID?: number) {
    if(transitionStatus === 0) {
      setTransitionStatus(1);
      setCurrentBtnSlide(dispatchType);
      setSvgBtnID(svgBtnID!);
    }
  }

  function itemTransition() {
    if(transitionStatus === 1) {
      if(currentBtnSlide === 'directChange') {
        dispatch({type: currentBtnSlide, payload: svgBtnID});
      } else {
        dispatch({type: currentBtnSlide});
      }

      setTransitionStatus(2);
    } else if(transitionStatus === 2) {
      setTransitionStatus(0);
      setCurrentBtnSlide("");
      setSvgBtnID(0);
    }
  }

  return (
    <section className="products-section products-section_margin_top">
      {viewportWidth < mobileWidth &&
        <ProductsSectionFirstGroup
          slideCurrentNumber={state.slideCurrentNumber!}
          itemsList={itemsList}
          handleSlide={handleSlide}/>}
      <viewportWidthContext.Provider value={viewportWidth}>
        <ProductsSectionLastGroup
          slideCurrentNumber={state.slideCurrentNumber!}
          mobileWidth={mobileWidth}
          itemsList={itemsList}
          handleSlide={handleSlide}
          itemTransition={itemTransition}
          transitionStatus={transitionStatus}/>
      </viewportWidthContext.Provider>
    </section>
  );
}

export default ProductsSection;