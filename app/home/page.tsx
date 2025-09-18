import Rive from '@rive-app/react-canvas';
import {Dashboard} from '../components/Dashboard';
import {PostPreview} from '../components/PostPreview';
import styles from "./page.module.css"; 

export default function HomePage() {
  return (
    <>
      <Dashboard />
      <PostPreview />
      <PostPreview />
    </>
  );
}
