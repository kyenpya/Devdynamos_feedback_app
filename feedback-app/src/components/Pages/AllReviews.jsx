import { ReviewContext } from "../../ReviewContext";
import { useContext } from "react";
import ReviewStats from '../ReviewStats';
import ReviewList from '../ReviewList';
import Button from "../layout/Button";
import { IoIosArrowDropleft } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const AllReviews = () => {
    const navigate = useNavigate();
    const {review, setReview} = useContext(ReviewContext);

    const deleteReview = id => {
      if (window.confirm('Are you sure, you want to delete this review?')) {
        setReview(review.filter(item => item.id !== id));
      }
    };
  
    return (
      <div className="container">
        <Button variant="secondary" onClick={() => navigate('/review')}><IoIosArrowDropleft /> Go Back</Button>
        <ReviewStats reviews={review} />
        <ReviewList reviews={review} deleteReview={deleteReview} />
      </div>
    );
};

export default AllReviews;
