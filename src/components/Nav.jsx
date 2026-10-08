import styles from "./Nav.module.css";

export default function Nav() {
    return (
        <nav className={styles.outerContainer}>
            <div className={styles.innerContainer}>

                <div className={styles.logo}>
                    Foodie
                </div>

                <ul className={styles.list}>
                    <li>Home</li>
                    <li>Recipes</li>
                    <li>Categories</li>
                    <li>About</li>
                </ul>

            </div>
        </nav>
    );
}