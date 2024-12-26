import { useState } from 'react';
import styles from '../styles/components/CollectionSwitcher.module.css';

export default function CollectionSwitcher() {
  const collections = ['Series 10', 'Hermès', 'SE'];
  const [selectedCollection, setSelectedCollection] = useState(collections[0]);

  return (
    <div className={styles.collectionSwitcher}>
      <h2>Select Collection</h2>
      <select
        value={selectedCollection}
        onChange={(e) => setSelectedCollection(e.target.value)}
        className={styles.dropdown}
      >
        {collections.map((collection, index) => (
          <option key={index} value={collection}>
            {collection}
          </option>
        ))}
      </select>
    </div>
  );
}
