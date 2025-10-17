import React, { useState } from 'react'


const SlidersSection = ({ content }) => {
    const [activeSlide, setActiveSlide] = useState(0)
    const [isAnimating, setIsAnimating] = useState(false)

    if (!content.slides || content.slides.length === 0) {
        return null;
    }

    const handleBannerClick = async (bannerNumber) => {
        if (isAnimating) return;
        
        setIsAnimating(true);
        
        setTimeout(() => {
            let nextSlide = activeSlide + 1;
            if (nextSlide >= content.slides.length) {
                nextSlide = 0;
            }
            setActiveSlide(nextSlide);
            
            setTimeout(() => {
                setIsAnimating(false);
            }, 500);
        }, 100);
    }

    const currentSlide = content.slides[activeSlide];
    const nextSlideIndex = (activeSlide + 1) % content.slides.length;
    const nextSlide = content.slides[nextSlideIndex];

    return (
        <section className="section-box">
            <div className="container">
                <div>
                    <div className="row">
                        <div className="col-lg-6 mt-30">
                         <h1 className="text-display-4">
                             <span className="color-green-900">{currentSlide.colored_header_text} </span> 
                             {currentSlide.header_text}
                         </h1>
                        </div>
                        <div className="col-lg-5 offset-xl-1 mt-30">
                            <p className="text-body-lead-large color-gray-500">{currentSlide.description}</p>
                            <div className="mt-40">
                                <a className="btn btn-black shape-round icon-arrow-right-white" href="#">
                                    {currentSlide.button_text}
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-110">
                        <div className="col-lg-7">
                            <div className={`slide-container ${isAnimating ? 'animating' : ''}`}>
                                <img 
                                    src={`https://vion.make.az/storage/${currentSlide.image}`}
                                    onClick={() => handleBannerClick(1)}
                                    className="slide-image main-image"
                                    alt="Banner 1"
                                />
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className={`slide-container ${isAnimating ? 'animating' : ''}`}>
                                <img 
                                    src={`https://vion.make.az/storage/${nextSlide.slide_image}`}
                                    onClick={() => handleBannerClick(2)}
                                    className="slide-image side-image"
                                    alt="Banner 2"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SlidersSection