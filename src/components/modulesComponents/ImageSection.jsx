// components/modulesComponents/ImageSection.jsx
import React from 'react'

const ImageSection = ({ content }) => {
  console.log("🖼️ ImageSection content:", content) // BU SƏTRİ ƏLAVƏ ET
  
  if (!content?.image) {
    console.warn("❌ ImageSection: No image found in content:", content)
    return null
  }

  const imageUrl = `https://vionadvisory.com/storage/${content.image}`
  console.log("🖼️ Image URL:", imageUrl)

  return (
    <div class="section-box">
        <div class="container">
    <div className="col-lg-12 m-auto">
      <div className="box-image mb-60 mt-60 m-auto">
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