import Rive from '@rive-app/react-canvas';
import {Dashboard} from '../components/Dashboard';
import {PostPreview} from '../components/PostPreview';
import styles from "./page.module.css"; 

export default function HomePage() {
  const currentPage = "home";
  return (
    <>
      <Dashboard currentPage={"home"}/>
      <div
        className={styles.page}>
        <div
            className={styles.header}>
            Home
        </div>
        <div
          className={styles.postBlock}>
          <PostPreview />
          <PostPreview />
          <PostPreview />
          <PostPreview />
          <PostPreview />
          <PostPreview />
        </div>
      </div>
    </>
  );
}
