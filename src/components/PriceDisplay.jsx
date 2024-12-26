import { useState, useEffect } from 'react';
import styles from '../styles/components/PriceDisplay.module.css';

export default function PriceDisplay() {
  const [casePrice, setCasePrice] = useState(399); // Default Aluminum
  const [bandPrice, setBandPrice] = useState(49); // Default Solo Loop
  const [totalPrice, setTotalPrice] = useState(casePrice + bandPrice);

  useEffect(() => {
    setTotalPrice(casePrice + bandPrice);
  }, [casePrice, bandPrice]);

  return (
    <div className={styles.priceDisplay}>
      <h2>Total Price</h2>
      <p className={styles.price}>${totalPrice}</p>
    </div>
  );
}
