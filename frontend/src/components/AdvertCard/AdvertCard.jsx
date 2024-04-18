import './AdvertCard.css';
import { useNavigate } from 'react-router-dom';

export const AdvertCard = ({advert, index}) => {
  const navigate = useNavigate();

  const openAdvertInfo = () => {
    navigate(`advert/${advert.id}`);
}

  return (
    <>
    <button className='advertLink' onClick={openAdvertInfo}>
    <article className="advertCardContainer">
      <div className="advertCardImage">
        <img src={advert.url_img} alt="foto_semillas" />
      </div>
      <div className="advertCardText">
        <h2>{advert.seed.name}</h2>
        <p>{advert.seed.origin}</p>
      </div>
    </article>
    </button>
    </>
  );
};
