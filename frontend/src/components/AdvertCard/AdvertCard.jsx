import { Link } from 'react-router-dom'
import './AdvertCard.css'

export const AdvertCard = ({advert, index}) => {
  return (
    <Link to={`advert/${advert.seed.id}`}>
    <article className="advertCardContainer">
      <div className="advertCardImage">
        <img src={advert.url_img} alt="foto_semillas" />
      </div>
      <div className="advertCardText">
        <h2>{advert.seed.name}</h2>
        <p>{advert.seed.origin}</p>
      </div>
    </article>
    </Link>
  );
};
