import styles from './home.module.css';
import { motion } from "framer-motion";
import { lusitana} from '../fonts';
export default function App() {
  return (
    <motion.div
      className={`${styles.box} ${lusitana.className}`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.8 }}
      transition={{ type: "spring", stiffness: 300, damping: 17 }}>
      Upload
      </ motion.div>
  );
}

