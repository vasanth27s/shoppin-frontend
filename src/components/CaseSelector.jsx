import { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/components/CaseSelector.module.css';

export default function CaseSelector() {
  // Defining case options with their images
  const cases = [
    { name: 'Aluminum', img: '/images/pic2.png', price: 399 },
    { name: 'Titanium', img: '/images/pic3.png', price: 599 },
    { name: 'Stainless Steel', img: '/images/pic4.png', price: 699 },
  ];

  const [selectedCase, setSelectedCase] = useState(cases[0]);
  const [price, setPrice] = useState(cases[0].price);

  // Handle the selection of a case
  const handleCaseSelect = (watchCase) => {
    setSelectedCase(watchCase);
    setPrice(watchCase.price);
  };

  return (
    <div className={styles.caseSelector}>
      <h2>Select a Case</h2>
      <div className={styles.grid}>
        {cases.map((watchCase, index) => (
          <div
            key={index}
            className={`${styles.caseOption} ${selectedCase.name === watchCase.name ? styles.selected : ''}`}
            onClick={() => handleCaseSelect(watchCase)}
          >
            <Image
              src={watchCase.img}
              alt={watchCase.name}
              width={150}
              height={150}
              className={styles.caseImage}
            />
            <p className={styles.caseName}>{watchCase.name}</p>
          </div>
        ))}
      </div>
      <p className={styles.price}>Price: ${price}</p>
    </div>
  );
}
