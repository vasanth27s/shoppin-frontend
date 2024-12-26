import styles from '../styles/components/SaveShare.module.css';

export default function SaveShare() {
  // Handle the save functionality
  const handleSave = () => {
    // In a real app, you could implement saving functionality (e.g., save to local storage or create an image of the configuration)
    alert('Watch configuration saved!');
  };

  // Handle the share functionality (simulate sharing via social media)
  const handleShare = () => {
    // This could link to a sharing API or open a sharing modal
    alert('Sharing your watch configuration!');
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
