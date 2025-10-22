// components/modulesComponents/ImageSection.jsx
import React from 'react'

const ImageSection = ({ content }) => {
  
  if (!content?.image) {
    console.warn("❌ ImageSection: No image found in content:", content)
    return null
  }

  const imageUrl = `https://vionadvisory.com/storage/${content.image}`
  return (
    <div class="section-box">
        <div class="container">
    <div className="col-lg-12">
      <div className="box-image mb-60 mt-60 d-flex justify-content-center">
        <img
          className="img-responsive" 
          src={imageUrl} 
          alt="Agon"
          onError={(e) => {
            console.error("❌ Image failed to load:", imageUrl)
            e.target.style.display = 'none'
          }}
        />
      </div>
    </div>
    </div>
    </div>
  )
}

export default ImageSection