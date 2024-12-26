import { useState } from 'react';
import CaseSelector from '../components/CaseSelector';
import SizeSelector from '../components/SizeSelector';
import BandSelector from '../components/BandSelector';
import CollectionSwitcher from '../components/CollectionSwitcher';
import PriceDisplay from '../components/PriceDisplay';
import WatchPreview from '../components/WatchPreview';
import SaveShare from '../components/SaveShare';
import styles from '../styles/Customize.module.css';

export default function Customize() {
  // States to manage the customization
  const [caseType, setCaseType] = useState('Aluminum');
  const [size, setSize] = useState('42mm');
  const [band, setBand] = useState('Solo Loop');
  const [collection, setCollection] = useState('Series 10');
  const [totalPrice, setTotalPrice] = useState(399); // initial price for Aluminum 42mm

  return (
    <div className={styles.customizeContainer}>
      <h1>Customize Your Apple Watch</h1>
      
      <div className={styles.customizationSection}>
        <WatchPreview caseType={caseType} size={size} band={band} />
        <div className={styles.options}>
          <CaseSelector setCaseType={setCaseType} setTotalPrice={setTotalPrice} />
          <SizeSelector setSize={setSize} setTotalPrice={setTotalPrice} />
          <BandSelector setBand={setBand} />
          <CollectionSwitcher setCollection={setCollection} />
          <PriceDisplay totalPrice={totalPrice} />
        </div>
      </div>

      <SaveShare />
    </div>
  );
}
