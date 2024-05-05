import styles from "../assets/styles/card.module.scss"
import PropTypes from "prop-types";

export const Card = ({image, title, album, year}) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardUp}>
        <div className={styles.cardCover}>
          <img src={image} alt="album"/>
        </div>
        <div className={styles.cardText}>
          <h2>{title}</h2>
          <p>{album}</p>
          <p>({year})</p>
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

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  album: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
}
