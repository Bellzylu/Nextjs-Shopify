import { ChangeEvent, useState } from "react";

function StarRating() {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (event: ChangeEvent<HTMLInputElement>) => {
    setRating(Number(event.target.value));
  };

  return (
    <div className="rating rating-lg mb-8 gap-1">
      {[1, 2, 3, 4, 5].map((starId) => (
        <input
          key={starId}
          type="radio"
          name="rating"
          value={starId}
          checked={rating === starId}
          onChange={handleRatingChange}
          className="mask mask-star-2 bg-orange-400"
        />
      ))}
    </div>
  );
}

export default StarRating;
