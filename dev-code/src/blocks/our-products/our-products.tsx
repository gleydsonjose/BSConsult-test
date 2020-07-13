import React, {useState, useEffect, FC} from 'react';
import './our-products.css';
import OurProductsBtnSlides from './components/our-products-btn-slides';
import OurProductsItem from './components/our-products-item';
import {useViewportResize} from '../hooks';
import {useSlideChangeNumber} from '../hooks';

const itemsList = [
  {
    "id": 0,
    "imgSrc": "/images/fe-pro-alternative.png",
    "imgAlt": "Fe Pró Product Alternative",
    "title": "Fe-Pró",
    "price": "R$ 304,00"
  },
  {
    "id": 1,
    "imgSrc": "/images/ca-pro-alternative.png",
    "imgAlt": "Ca Pró Product Alternative",
    "title": "Ca-Pró",
    "price": "R$ 304,00"
  },
  {
    "id": 2,
    "imgSrc": "/images/multibari-alternative.png",
    "imgAlt": "Multi-Bari Product Alternative",
    "title": "Multi-Bari",
    "price": "R$ 304,00"
  }
];
const blocksProductSlideDesktopLimit = 4;
const diffQuantityItemsAndBlocksLimit = 
  blocksProductSlideDesktopLimit - itemsList.length;

interface ItemsList {
  id: number;
  imgSrc: string;
  imgAlt: string;
  title: string;
  price: string;
}

const OurProducts: FC = () => {
  const viewportWidth = useViewportResize();
  const [blocksProductsSlide, setBlocksProductsSlide] = useState<ItemsList[]>([]);
  const [desktopTransitionStatus, setDesktopTransitionStatus] = useState<0 | 1>(0);
  const [currentBtnSlide, setCurrentBtnSlide] = useState<'back' | 'next'>('next');
  const [state, dispatch] = useSlideChangeNumber(itemsList.length);
  const [mobileTransitionStatus, setMobileTransitionStatus] = useState<0 | 1 | 2>(0);
  const mobileWidth = viewportWidth < 1050 ? true : false;
  const [dispatchTypeMobile, setDispatchTypeMobile] = useState('');

  useEffect(() => {
    const newBlocksProductsSlide = [];

    for(let index = 0; index < blocksProductSlideDesktopLimit; index++) {
      if (itemsList.length === 1) {
        newBlocksProductsSlide.push(itemsList[0]);
      } else if(itemsList.length > 1) {
        if(index < blocksProductSlideDesktopLimit-diffQuantityItemsAndBlocksLimit) {
          newBlocksProductsSlide.push(itemsList[index]);
        } else {
          newBlocksProductsSlide.push(itemsList[index-itemsList.length]);
        }
      }
    }

    setBlocksProductsSlide(newBlocksProductsSlide);
  }, []);

  function effectsTransition() {
    if(mobileWidth) {
      if(mobileTransitionStatus === 1) {
        dispatch({type: dispatchTypeMobile});
        setMobileTransitionStatus(2);
      } else if (mobileTransitionStatus === 2) {
        setMobileTransitionStatus(0);
      }
    } else {
      switch(currentBtnSlide) {
        case 'back':
          if(desktopTransitionStatus === 1) {
            const newBlocksProductsSlide = blocksProductsSlide.slice();
            const firstIdItemsList = newBlocksProductsSlide[0].id;
            const newFirstIdItemsList = firstIdItemsList === 0 ?
            itemsList.length - 1 : firstIdItemsList - 1;
            newBlocksProductsSlide.pop();
            newBlocksProductsSlide.unshift(itemsList[newFirstIdItemsList]);
            setBlocksProductsSlide(newBlocksProductsSlide);
            setDesktopTransitionStatus(0);
          }
          break;
        case 'next':
          if(desktopTransitionStatus === 1) {
            const newBlocksProductsSlide = blocksProductsSlide.slice()
            const lastIdItemsList = newBlocksProductsSlide[newBlocksProductsSlide.length-1].id;
            const newLastIdItemsList = lastIdItemsList < itemsList.length - 1 ?
              lastIdItemsList + 1 : 0;
            newBlocksProductsSlide.shift();
            newBlocksProductsSlide.push(itemsList[newLastIdItemsList]);
            setBlocksProductsSlide(newBlocksProductsSlide);
            setDesktopTransitionStatus(0);
          }
          break;
        default:
          throw new Error("This button don't exist!");
      }
    }
  }

  function btnBackSlide(dispatchType: string) {
    if(mobileWidth) {
      setMobileTransitionStatus(1);
      setDispatchTypeMobile(dispatchType);
    } else {
      setCurrentBtnSlide('back');
      setDesktopTransitionStatus(1);
    }      
  }

  function btnNextSlide(dispatchType: string) {
    if(mobileWidth) {
      setMobileTransitionStatus(1);
      setDispatchTypeMobile(dispatchType);
    } else {
      setCurrentBtnSlide('next');
      setDesktopTransitionStatus(1);
    }
  }

  return (
    <section className="our-products">
      <h1 className="our-products__title">NOSSOS PRODUTOS</h1>
      <div className="our-products__main">
        <OurProductsBtnSlides
          mobileWidth={mobileWidth}
          mobileSlideCurrentNumber={state.slideCurrentNumber!}
          type="decrement"
          limitNumber={0}
          itemsListLength={itemsList.length}
          handleBtnSlides={btnBackSlide}>
          <path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"/>
        </OurProductsBtnSlides>

        {mobileWidth ?
          <OurProductsItem
            mobileWidth={mobileWidth}
            imgSrc={itemsList[state.slideCurrentNumber!].imgSrc}
            imgAlt={itemsList[state.slideCurrentNumber!].imgAlt}
            title={itemsList[state.slideCurrentNumber!].title}
            price={itemsList[state.slideCurrentNumber!].price}
            mobileTransitionStatus={mobileTransitionStatus}
            effectsTransition={effectsTransition}/>
        :
        <>
          {blocksProductsSlide.map((item, index) =>
            <OurProductsItem
              key={index}
              mobileWidth={mobileWidth}
              imgSrc={item.imgSrc}
              imgAlt={item.imgAlt}
              title={item.title}
              price={item.price}
              blockIndex={index}
              desktopTransitionStatus={desktopTransitionStatus}
              effectsTransition={effectsTransition}
              currentBtnSlide={currentBtnSlide}
              blocksLimit={blocksProductSlideDesktopLimit}/>)}
        </>}
        
        <OurProductsBtnSlides
          mobileWidth={mobileWidth}
          mobileSlideCurrentNumber={state.slideCurrentNumber!}
          type="increment"
          limitNumber={itemsList.length-1}
          itemsListLength={itemsList.length}
          handleBtnSlides={btnNextSlide}>
            <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/>
        </OurProductsBtnSlides>
      </div>
    </section>
  );
}

export default OurProducts;