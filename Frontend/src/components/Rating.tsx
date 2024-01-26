import "./rating.css";
interface Rating {
  rating: number
}

const Rating: React.FC<Rating> = ({ rating }: Rating) => {
  const normalizedRating = Math.max(0, Math.min(5, Math.floor(rating)));
  return (
    <div className="rating-container">
      <div className="rating-wrapper">
        {[1, 2, 3, 4, 5].map((index) => (
          <div
            key={index}
            className={index <= normalizedRating ? "active" : ""}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Rating;
