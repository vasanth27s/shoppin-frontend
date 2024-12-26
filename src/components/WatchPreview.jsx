import { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/components/WatchPreview.module.css';

export default function WatchPreview() {
  const [caseType, setCaseType] = useState('Aluminum');
  const [bandType, setBandType] = useState('Solo Loop');

  const caseImage = caseType === 'Aluminum' ? '/images/pic2.png' : caseType === 'Titanium' ? '/images/pic3.png' : '/images/pic4.png';
  const bandImage = bandType === 'Solo Loop' ? '/images/pic5.png' : bandType === 'Braided Solo Loop' ? '/images/pic6.png' : '/images/pic7.png';

  return (
    <div className={styles.watchPreview}>
      <h2>Watch Preview</h2>
      <div className={styles.previewContainer}>
        <Image src={caseImage} alt={caseType} width={250} height={250} />
        <Image src={bandImage} alt={bandType} width={250} height={250} />
      </div>
    </div>
  );
}
