import { FaUtensils } from "react-icons/fa";
import styles from "./nav.module.css";

export default function Nav() {
  return (
    <div className={styles.nav}>
      <FaUtensils style={{ marginRight: "10px", color: "#29db89" }} />
      FoodApp
    </div>
  );
}
