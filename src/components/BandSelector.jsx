import { useState } from 'react';
import styles from '../styles/components/BandSelector.module.css';

export default function BandSelector() {
  const bands = ['Solo Loop', 'Braided Solo Loop', 'Sport Band'];
  const [selectedBand, setSelectedBand] = useState(bands[0]);

  return (
    <div className={styles.bandSelector}>
      <h2>Select a Band</h2>
      <div className={styles.carousel}>
        {bands.map((band, index) => (
          <div
            key={index}
            className={`${styles.bandOption} ${selectedBand === band ? styles.selected : ''}`}
            onClick={() => setSelectedBand(band)}
          >
            <p>{band}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
