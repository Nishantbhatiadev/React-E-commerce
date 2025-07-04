import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setOrders } from './feature/CartSlice';

const ORDER_EXPIRY_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

const useOrderStorageWithExpiry = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.allcart.orders);
  const hasLoadedFromStorage = useRef(false);

  // Load and filter expired orders once
  useEffect(() => {
    if (!hasLoadedFromStorage.current) {
      const saved = localStorage.getItem('orders');
      if (saved) {
        try {
          const parsedOrders = JSON.parse(saved);
          const now = Date.now();

          // Keep only orders within the last 24 hours
          const validOrders = parsedOrders.filter(order => {
            return order.timestamp && now - order.timestamp <= ORDER_EXPIRY_DURATION;
          });

          dispatch(setOrders(validOrders));
        } catch (err) {
          console.error("Error parsing or filtering orders:", err);
        }
      }

      hasLoadedFromStorage.current = true;
    }
  }, [dispatch]);

  // Save updated orders to localStorage
  useEffect(() => {
    localStorage.setItem('orders', JSON.stringify(orders));
  }, [orders]);
};

export default useOrderStorageWithExpiry;
