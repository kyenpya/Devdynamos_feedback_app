/* eslint-disable react/prop-types */
import { FaTimes } from "react-icons/fa"

function ReviewItem({review, deleteReview}) {



  return (
    <>
      <div className="card review">
        <div className="num-display">{review.rating}</div>
        <div>{review.text}</div>
        <button className="close" onClick={()=>deleteReview(review.id)}>
          <FaTimes />
        </button>
      </div>
    </>
  )
}

export default ReviewItem
