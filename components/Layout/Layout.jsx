import styles from "./Layout.module.scss";
const Layout = ({ children }) => (
  <div className={styles.Layout}>
    <nav>
      <span>
        <a href="/">Jonah Barrett Codes</a>
      </span>
    </nav>
    <main>{children}</main>
  </div>
);

export default Layout;
