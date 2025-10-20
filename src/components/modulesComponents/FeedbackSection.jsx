import React from 'react'

const FeedbackSection = ({ content }) => {
  return (
    <div className="box-quote">
    <div className="text-quote">{content?.feedback_title}</div>
    <div className="box-user d-flex align-items-center justify-content-center">
      <div className="img-user"><img src={`https://vion.make.az/storage/${content.feedback_image}`} alt="Agon"/></div>
      <div className="content text-md-start ml-10">
        <h6 className="text-heading-5 color-white">{content?.feedback_name}</h6>
        <span className="text-body-text-md pt-10">{content?.feedback_workplace}</span>
      </div>
    </div>
  </div>
  )
}

export default FeedbackSection