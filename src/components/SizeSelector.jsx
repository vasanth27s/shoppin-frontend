import styles from '../styles/components/SaveShare.module.css';

export default function SaveShare() {
  const handleSave = () => {
    alert('Watch configuration saved!');
  };

  const handleShare = () => {
    alert('Sharing the configuration!');
  };

  return (
    <div className={styles.saveShare}>
      <button onClick={handleSave} className={styles.saveButton}>
        Save
      </button>
      <button onClick={handleShare} className={styles.shareButton}>
        Share
      </button>
    </div>
  );
}
