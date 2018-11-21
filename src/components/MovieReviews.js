import React, from 'react'
// Code MovieReviews Here

const MovieReview = (props) => {
  return (
    <div className="review">
      <a href={this.props.link.url}/>
      {this.props.headline}
      {this.props.byline}
      {this.props.summary_short}
    </div>
  )
}

const MovieReviews = ({reviews}) => <div className="review-list">{reviews.map(MovieReview)}</div>

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews
