import styles from "./Landing.module.css";

export const HomeLanding = () => {
  return (
    <div id="home" className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.sectionTitle}>Musty Prom</h1>

        <p className={styles.smallText}>How to love an introvert</p>
      </div>
    </div>
  );
};
