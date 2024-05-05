import styles from "../assets/styles/card.module.scss"
import cover from "../assets/images/cover.jpg"

export const Card = () => {
  return (
    <div className={styles.card}>
     <div className={styles.cardUp}>
      <div className={styles.cardCover}>
        <img src={cover} alt="album"/>
      </div>
       <div className={styles.cardText}>
         <h2>title</h2>
         <p>album</p>
         <p>(2019)</p>
       </div>
     </div>
      <div className={styles.cardDown}>
        <div>
          <p>Rate this album</p>
        </div>
        <div>
          ⭐️⭐️⭐️⭐️⭐️
        </div>
      </div>
    </div>
  )
}