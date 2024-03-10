import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import ReviewForm from '../ReviewForm';
import { FaHouseDamage } from 'react-icons/fa';
import Button from '../layout/Button';
import { ReviewContext } from '../../ReviewContext';

function Review() {
  const navigate = useNavigate();
  const {review, setReview} = useContext(ReviewContext);

  //  function to add a review
  const AddReview = newReview => {
    newReview.id = uuid();
    setReview([newReview, ...review]);
    navigate('/all-reviews');
  };

  return (
    <>
      <ReviewForm handleAdd={AddReview} />

      <div className="house-link">
        <Link to="/">
          <FaHouseDamage size={40} />
        </Link>
      </div>
      <div className="container">
        <Button
          type="button"
          variant="secondary"
          onClick={() => navigate('/all-reviews')}
        >
          See All Reviews
        </Button>
      </div>
    </>
  );
}

export default Review;
