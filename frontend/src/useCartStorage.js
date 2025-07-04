import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCart } from './feature/CartSlice';

const useCartStorage = () => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.allcart);

  const hasLoadedFromStorage = useRef(false);

  // Load from localStorage only once
  useEffect(() => {
    if (!hasLoadedFromStorage.current) {
      const saved = localStorage.getItem('cartState');
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          dispatch(setCart(parsed));
        } catch (err) {
          console.error("Failed to parse cart state from localStorage", err);
        }
      }
      hasLoadedFromStorage.current = true;
    }
  }, [dispatch]);

  // Save to localStorage on cart change
  useEffect(() => {
    localStorage.setItem('cartState', JSON.stringify(cartState));
  }, [cartState]);
};

export default useCartStorage;
