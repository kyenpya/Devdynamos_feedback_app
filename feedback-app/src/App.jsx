import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/layout/Header';
import Home from './components/Pages/Home';
import Review from './components/Pages/Review';
import About from './components/Pages/About';
import AllReviews from './components/Pages/AllReviews';
import { useState } from 'react';
import { ReviewContext } from './ReviewContext';
import data from './data/reviewData';

function App() {
  const [review, setReview] = useState(data);

  return (
    <>
      <Header text="Review Application" />
      <Router>
        <ReviewContext.Provider value={{ review, setReview }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/review" element={<Review />} />
            <Route path="/all-reviews" element={<AllReviews />} />
          </Routes>
        </ReviewContext.Provider>
      </Router>
    </>
  );
}

export default App;
