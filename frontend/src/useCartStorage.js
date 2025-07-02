import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCart } from './feature/CartSlice';

const useCartStorage = () => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.allcart); // full state

  // Load from localStorage on first mount
  useEffect(() => {
    const saved = localStorage.getItem('cartState');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        dispatch(setCart(parsed));
      } catch (err) {
        console.error("Failed to parse cart state from localStorage", err);
      }
    }
  }, [dispatch]);

  // Save to localStorage on cart change
  useEffect(() => {
    localStorage.setItem('cartState', JSON.stringify(cartState));
  }, [cartState]);
};

export default useCartStorage;
