
import { Star, StarHalf } from "lucide-react";

export default function StarRating({ totalStars = 5, rating = 0 }) {
  const renderStars = () => {
    const stars = [];
    
    for (let i = 1; i <= totalStars; i++) {
      if (rating >= i) {
        // Full star
        stars.push(
          <Star 
            key={i} 
            fill="currentColor" 
            strokeWidth={0} 
            className="w-6 h-6 text-primary"
          />
        );
      } else if (rating >= i - 0.5) {
        // Half star
        stars.push(
          <StarHalf
            key={i}
            className="w-6 h-6 text-primary"
            fill="currentColor"
            strokeWidth={0}
          />
        );
      } else {
        // Empty star
        stars.push(
          <Star 
            key={i} 
            fill="currentColor" 
            strokeWidth={0} 
            className="w-6 h-6 text-muted"
          />
        );
      }
    }
    
    return stars;
  };

  return (
    <div className="flex items-center gap-1">
      <span className="mr-2 text-2xl font-bold ">
        {rating} / {totalStars}
      </span>
      {renderStars()}
    </div>
  );
}