import styles from "./Nav.module.css";

export default function Nav() {
  return (
    <header className={styles.outerContainer} id="home">
      <nav className={styles.innerContainer} aria-label="Main navigation">
        <a className={styles.logo} href="#home" aria-label="Foodie home">
          <svg
            className={styles.logoMark}
            viewBox="0 0 40 40"
            fill="none"
            aria-hidden="true"
          >
            <rect width="40" height="40" rx="13" fill="currentColor" />
            <path
              d="M10 22h20c-.8 5-4.5 8-10 8s-9.2-3-10-8Z"
              fill="white"
            />
            <path
              d="M12 19h16M20 11c3 2 3 5 0 7-3-2-3-5 0-7Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Foodie</span>
        </a>

        <ul className={styles.list}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#search">Discover</a>
          </li>
          <li>
            <a href="#recipes">Recipes</a>
          </li>
        </ul>

        <a className={styles.cta} href="#search">
          Find a recipe
          <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </header>
  );
}
