import Rating from "./Rating";
import "./card.css";

interface CardData {
  name: string,
  rating: number,
  feedback: string,
  url : string
}

interface CardType {
  Data: CardData
}

const Card: React.FC<CardType> = ({ Data }: CardType) => {
  return (
    <div className="card-container">
      <div className="customer_profile">
        <div className="image_container">
          <img
            src={Data.url}
            alt=""
          />
        </div>
      </div>
      <div className="customer_name">{Data.name}</div>
      <div className="rating">
        <Rating rating={Data.rating} />
      </div>
      <div className="customer__feedback">
        {Data.feedback}
      </div>
    </div>
  );
};

export default Card;
