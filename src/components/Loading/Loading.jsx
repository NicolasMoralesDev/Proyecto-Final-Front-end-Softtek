import { PacmanLoader } from "react-spinners"
import styles from "./Loading.module.css"

const Loading = () => {
  return (
    <div className={styles.loading}>
      <PacmanLoader color="#000000" />
    </div>
  )
}

export default Loading