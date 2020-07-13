import {useState, useReducer, useEffect} from 'react';
import _ from 'lodash';

export function useViewportResize() {
  const [viewportWidth, setViewport] = useState(0);

  useEffect(() => {
    function windowResize() {
      setViewport(window.innerWidth);
    }
    
    if (viewportWidth !== 0) {
      window.addEventListener('resize', _.debounce(windowResize, 500));
    } else {
      windowResize();
    }
  }, [viewportWidth]);

  return viewportWidth;
}

export function useSlideChangeNumber(itemsListLength: number) {
  interface State {
    slideCurrentNumber: number | undefined;
  }

  interface Action {
    type: string;
    payload?: number;
  }

  function reducer(
    state: State,
    action: Action
  ) {
    switch(action.type) {
      case 'increment':
        if(state.slideCurrentNumber! < itemsListLength-1) {
          return {slideCurrentNumber: state.slideCurrentNumber! + 1};
        } else {
          return {slideCurrentNumber: state.slideCurrentNumber};
        }
      case 'decrement':
        if(state.slideCurrentNumber! > 0) {
          return {slideCurrentNumber: state.slideCurrentNumber! - 1};
        } else {
          return {slideCurrentNumber: state.slideCurrentNumber};
        }
      case 'directChange':
        return {slideCurrentNumber: action.payload};
      default:
        throw new Error("Don't exist this type!");
    }
  }

  return useReducer(reducer, {slideCurrentNumber: 0});
}