import React from 'react';

const Slider = () => {
    return(
        <>

<div id="demo" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
        <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
        <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
        <button type="button" data-bs-target="#demo" data-bs-slide-to="4"></button>
      </div>

     
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://i.ibb.co/hZtXN4S/slide.webp" alt="slider1" className="d-block" style={{width:"100%"}}/>
        </div>
        <div className="carousel-item">
          <img src="https://i.ibb.co/Hdnd4QM/slider-3-kfc-briyani.webp" alt="slider2" className="d-block" style={{width:"100%"}}/>
        </div>
        <div className="carousel-item">
          <img src="https://i.ibb.co/TPKBBPp/wednesday-offer.webp" alt="slider3" className="d-block" style={{width: "100%"}}/>
        </div>
        <div className="carousel-item">
          <img src="https://i.ibb.co/kDs2yVV/Chicken-Roll.webp" alt="slider4" className="d-block" style={{width: "100%"}}/>
        </div>
        <div className="carousel-item">
          <img src="https://i.ibb.co/KsxNBCH/Peri-Peri-Match-Specials-Baner.webp" alt="slider4" className="d-block" style={{width: "100%"}}/>
        </div>
      </div>

  
      <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
      <span className="carousel-control-prev-icon"></span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>

        </>
    )
}

export default Slider;