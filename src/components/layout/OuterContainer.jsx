import styles from "./Container.module.css";

export default function OuterContainer({ children }) {
  return (
    <div className={styles.outerContainer}>
      {children}
    </div>
  );
}