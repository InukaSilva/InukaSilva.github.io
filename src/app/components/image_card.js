import styles from './image_card.module.css';

export default function Bio({ children }) {
  return <div className={styles.container}>
    {children}
    
    </div>;
}