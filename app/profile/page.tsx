import {Dashboard} from '../components/Dashboard';
import {PostPreview} from '../components/PostPreview';
import styles from "./page.module.css"; 

export default function HomePage() {
  const currentPage = "home";
  return (
    <>
      <Dashboard currentPage={"profile"}/>
      <div
        className={styles.page}>
        <div
            className={styles.header}>
            Profile
        </div>
        <div
          className={styles.postBlock}>
            {/*TODO: add content*/}
        </div>
      </div>
    </>
  );
}
