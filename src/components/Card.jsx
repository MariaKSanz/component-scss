import styles from "../assets/styles/card.module.scss"
import PropTypes from "prop-types";
import {Rating} from "react-simple-star-rating";

export const Card = ({image, artist, song, year}) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardUp}>
        <div className={styles.cardCover}>
          <img src={image} alt="album"/>
        </div>
        <div className={styles.cardText}>
          <h2>{artist}</h2>
          <p>{song}</p>
          <p>({year})</p>
        </div>
      </div>
      <div className={styles.cardDown}>
        <div>
          <p>Rate this album</p>
        </div>
        <div>
          <Rating size={16}/>
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  song: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
}
