import React from 'react'
import { Link } from 'react-router-dom'

const ButtonSection = ({ content }) => {
  return (
    <div class="apply-btn text-center"><Link class="btn btn-black icon-arrow-right-white" to={content?.button_url}>{content?.button_text}</Link></div>
  )
}

export default ButtonSection